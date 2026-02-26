/**
 * Flashcards Server Actions
 */

'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { addXP } from '@/lib/actions/user-progress';
import type { FlashcardFormData, FlashcardFilters, FlashcardStatsSummary, FlashcardWithProgress, UIQualityRating } from '../types';
import { calculateNextReview, type ReviewQuality } from '@/lib/sm2';
import type { Prisma } from '@prisma/client';
import { requireAuth, requireOwnership } from '@/lib/auth/authorization';

/**
 * Get all flashcards with progression data
 */
export async function getFlashcards(userId: string, filters?: FlashcardFilters) {
  const where: Prisma.FlashcardPromptWhereInput = {};

  if (filters?.types?.length) {
    where.type = { in: filters.types };
  }

  if (filters?.tags?.length) {
    where.tags = { hasSome: filters.tags };
  }

  if (filters?.difficulty?.length) {
    where.difficulty = { in: filters.difficulty };
  }

  if (filters?.search) {
    where.OR = [
      { question: { contains: filters.search, mode: 'insensitive' } },
      { answer: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  const flashcards = await db.flashcardPrompt.findMany({
    where,
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
      progressions: {
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        take: 1,
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return flashcards.map((card) => ({
    ...card,
    progression: card.progressions[0] || null,
    progressions: undefined,
  })) as FlashcardWithProgress[];
}

/**
 * Get flashcards due for review
 */
export async function getDueCards(userId: string) {
  const now = new Date();

  const progressions = await db.progression.findMany({
    where: {
      userId,
      nextReview: { lte: now },
      status: { in: ['IN_PROGRESS', 'REVIEWING'] },
    },
    include: {
      prompt: {
        include: {
          concept: {
            select: {
              id: true,
              slug: true,
              name: true,
            },
          },
        },
      },
    },
    orderBy: { nextReview: 'asc' },
  });

  return progressions
    .filter((p) => p.prompt !== null)
    .filter((p) => p.prompt!.answer && p.prompt!.answer.trim() !== '') // Filter out cards without answers
    .map((p) => ({
      ...p.prompt,
      progression: {
        id: p.id,
        easeFactor: p.easeFactor,
        interval: p.interval,
        repetitions: p.repetitions,
        streak: p.streak,
        totalReviews: p.totalReviews,
        successfulReviews: p.successfulReviews,
        nextReview: p.nextReview,
        lastReview: p.lastReview,
      },
    })) as FlashcardWithProgress[];
}

/**
 * Get new cards (never reviewed)
 */
export async function getNewCards(userId: string, limit = 10) {
  const reviewedPromptIds = await db.progression
    .findMany({
      where: { userId },
      select: { promptId: true },
      distinct: ['promptId'],
    })
    .then((progs) => progs.map((p) => p.promptId).filter((id): id is string => id !== null));

  const newCards = await db.flashcardPrompt.findMany({
    where: {
      id: { notIn: reviewedPromptIds },
      answer: { not: '' }, // Filter out cards with empty answers
    },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
    },
    take: limit,
    orderBy: { difficulty: 'asc' },
  });

  return newCards
    .filter((card) => card.answer && card.answer.trim() !== '') // Filter out null/empty/whitespace-only answers
    .filter((card) => card.concept !== null) // Ensure concept exists
    .map((card) => ({
      ...card,
      concept: card.concept!, // We know it's not null because we filtered
      progression: null,
    })) as FlashcardWithProgress[];
}

/**
 * Get flashcard by ID
 */
export async function getFlashcardById(id: string) {
  const flashcard = await db.flashcardPrompt.findUnique({
    where: { id },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
          definition: true,
        },
      },
      source: {
        select: {
          id: true,
          title: true,
          author: true,
        },
      },
    },
  });

  return flashcard;
}

/**
 * Create a new flashcard
 */
export async function createFlashcard(data: FlashcardFormData) {
  const session = await requireAuth();

  // Validate that answer is not empty
  if (!data.answer || data.answer.trim() === '') {
    throw new Error('Flashcard answer is required');
  }

  const slug = `${data.conceptId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const flashcard = await db.flashcardPrompt.create({
    data: {
      slug,
      type: data.type,
      question: data.question,
      answer: data.answer,
      hint: data.hint,
      conceptId: data.conceptId,
      sourceId: data.sourceId,
      tags: data.tags,
      difficulty: data.difficulty,
    },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
    },
  });

  // Award XP for creating a flashcard
  await addXP('flashcard_created', {
    entityType: 'concept',
    entityId: flashcard.conceptId,
    title: data.question,
    description: `Created ${data.type} flashcard`,
  });

  revalidatePath('/flashcards');
  revalidatePath('/flashcards/create');
  revalidatePath('/profile');
  revalidatePath('/profile/stats');

  return flashcard;
}

/**
 * Update an existing flashcard
 */
export async function updateFlashcard(id: string, data: Partial<FlashcardFormData>) {
  const flashcard = await db.flashcardPrompt.update({
    where: { id },
    data: {
      ...(data.type && { type: data.type }),
      ...(data.question !== undefined && { question: data.question }),
      ...(data.answer !== undefined && { answer: data.answer }),
      ...(data.hint !== undefined && { hint: data.hint }),
      ...(data.tags && { tags: data.tags }),
      ...(data.difficulty && { difficulty: data.difficulty }),
    },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
        },
      },
    },
  });

  revalidatePath('/flashcards');
  revalidatePath(`/flashcards/${id}`);

  return flashcard;
}

/**
 * Delete a flashcard
 */
export async function deleteFlashcard(id: string) {
  await db.flashcardPrompt.delete({
    where: { id },
  });

  revalidatePath('/flashcards');
}

/**
 * Submit a flashcard review
 */
export async function submitReview(
  promptId: string,
  quality: UIQualityRating,
  timeTaken?: number
) {
  const session = await requireAuth();

  // Convert quality to integer (fixes string "0" being passed from UI)
  const qualityInt = typeof quality === 'string' ? parseInt(quality, 10) : quality;

  // Get prompt and current progression
  const prompt = await db.flashcardPrompt.findUnique({
    where: { id: promptId },
    include: {
      concept: true,
    },
  });

  if (!prompt) {
    throw new Error('Flashcard not found');
  }

  // Find or create progression
  let progression = await db.progression.findUnique({
    where: {
      userId_conceptId_promptId: {
        userId: session.user.id,
        conceptId: prompt.conceptId,
        promptId,
      },
    },
  });

  const previousData = progression
    ? {
        ease: progression.easeFactor,
        repetitions: progression.repetitions,
        interval: progression.interval,
        nextReview: progression.nextReview.getTime(),
      }
    : undefined;

  // Track if this was previously mastered
  const wasPreviouslyMastered = progression?.status === 'MASTERED';

  // Skip if quality is 0
  if (qualityInt === 0) {
    return {
      skipped: true,
      nextReview: progression?.nextReview || new Date(),
    };
  }

  // Calculate SM2 update
  const result = calculateNextReview(qualityInt as ReviewQuality, previousData);

  // Create or update progression
  const now = new Date(result.reviewedAt);
  const nextReview = new Date(result.data.nextReview);

  if (progression) {
    // Update existing progression
    const wasCorrect = qualityInt >= 3;
    const isNowMastered = result.data.repetitions >= 5;
    progression = await db.progression.update({
      where: { id: progression.id },
      data: {
        easeFactor: result.newEase,
        interval: result.newInterval,
        repetitions: result.data.repetitions,
        nextReview,
        lastReview: now,
        totalReviews: { increment: 1 },
        successfulReviews: wasCorrect ? { increment: 1 } : undefined,
        streak: wasCorrect ? { increment: 1 } : 0,
        status: isNowMastered ? 'MASTERED' : 'IN_PROGRESS',
      },
    });
  } else {
    // Create new progression
    const wasCorrect = qualityInt >= 3;
    progression = await db.progression.create({
      data: {
        userId: session.user.id,
        conceptId: prompt.conceptId,
        promptId,
        easeFactor: result.newEase,
        interval: result.newInterval,
        repetitions: result.data.repetitions,
        nextReview,
        lastReview: now,
        totalReviews: 1,
        successfulReviews: wasCorrect ? 1 : 0,
        streak: wasCorrect ? 1 : 0,
        status: 'IN_PROGRESS',
      },
    });
  }

  // Create review log
  await db.flashcardReview.create({
    data: {
      promptId,
      userId: session.user.id,
      quality: qualityInt,
      previousEase: result.previousEase,
      newEase: result.newEase,
      previousInterval: result.previousInterval,
      newInterval: result.newInterval,
      timeTaken,
    },
  });

  // Award XP for reviewing a flashcard
  const xpResult = await addXP('flashcard_reviewed', {
    entityType: 'concept',
    entityId: prompt.conceptId,
    title: prompt.question,
    description: `Reviewed with quality ${qualityInt}/5`,
  });

  // Award bonus XP for mastery (first time only)
  const isNowMastered = progression.status === 'MASTERED';
  if (isNowMastered && !wasPreviouslyMastered) {
    await addXP('flashcard_mastered', {
      entityType: 'concept',
      entityId: prompt.conceptId,
      title: prompt.question,
      description: `Mastered after ${progression.totalReviews} reviews`,
    });
  }

  revalidatePath('/flashcards/review');
  revalidatePath('/profile');
  revalidatePath('/profile/stats');

  return {
    xpEarned: xpResult.xpGained,
    nextReview,
    easeFactor: result.newEase,
    interval: result.newInterval,
    streak: progression.streak,
    isMastered: isNowMastered,
    leveledUp: xpResult.leveledUp,
  };
}

/**
 * Get flashcard statistics
 */
export async function getFlashcardStats(userId: string): Promise<FlashcardStatsSummary> {
  const [totalCards, progressions, reviews] = await Promise.all([
    db.flashcardPrompt.count(),
    db.progression.findMany({
      where: { userId },
    }),
    db.flashcardReview.findMany({
      where: { userId },
    }),
  ]);

  const now = new Date();
  const cardsDue = progressions.filter((p) => p.nextReview <= now).length;
  const cardsLearning = progressions.filter((p) => p.status === 'IN_PROGRESS').length;
  const cardsMastered = progressions.filter((p) => p.status === 'MASTERED').length;
  const cardsNew = totalCards - progressions.length;

  const totalEase = progressions.reduce((sum, p) => sum + p.easeFactor, 0);
  const averageEase = progressions.length > 0 ? totalEase / progressions.length : 2.5;

  const successfulReviews = reviews.filter((r) => r.quality >= 3).length;
  const successRate = reviews.length > 0 ? (successfulReviews / reviews.length) * 100 : 0;

  const currentStreaks = progressions.map((p) => p.streak);
  const currentStreak = currentStreaks.length > 0 ? Math.max(...currentStreaks) : 0;

  return {
    totalCards,
    cardsDue,
    cardsNew,
    cardsLearning,
    cardsMastered,
    averageEase,
    totalReviews: reviews.length,
    successRate,
    currentStreak,
    longestStreak: currentStreak, // Simplified - could track separately
  };
}

/**
 * Get daily goal stats
 */
export async function getDailyGoalStats(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const reviewsToday = await db.flashcardReview.count({
    where: {
      userId,
      reviewedAt: { gte: today },
    },
  });

  const successfulToday = await db.flashcardReview.count({
    where: {
      userId,
      reviewedAt: { gte: today },
      quality: { gte: 3 },
    },
  });

  const xpToday = successfulToday * 10; // Simplified calculation

  const userProgressions = await db.progression.findMany({
    where: { userId },
    orderBy: { streak: 'desc' },
    take: 1,
  });

  const streak = userProgressions[0]?.streak || 0;

  return {
    reviewsToday,
    reviewsGoal: 20,
    xpToday,
    xpGoal: 200,
    streak,
    longestStreak: streak,
  };
}

/**
 * Get flashcards by type
 */
export async function getFlashcardsByType(userId: string, type: string) {
  return getFlashcards(userId, { types: [type as any] });
}

/**
 * Search flashcards
 */
export async function searchFlashcards(userId: string, query: string) {
  return getFlashcards(userId, { search: query });
}
