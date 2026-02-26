'use server';

import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { requireOwnership } from '@/lib/auth/authorization';

const profileSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100),
  bio: z.string().max(500, 'La bio ne peut pas dépasser 500 caractères').optional(),
  image: z.string().url('URL invalide').optional(),
});

const bioSchema = z.object({
  bio: z.string().max(500, 'La bio ne peut pas dépasser 500 caractères'),
});

/**
 * Update user profile
 */
export async function updateProfile(userId: string, data: {
  name?: string;
  bio?: string;
  image?: string;
}) {
  await requireOwnership(userId);

  const validated = profileSchema.partial().parse(data);

  const updated = await prisma.user.update({
    where: { id: userId },
    data: {
      ...(validated.name && { name: validated.name }),
      ...(validated.bio !== undefined && { bio: validated.bio }),
      ...(validated.image && { image: validated.image }),
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      bio: true,
    },
  });

  revalidatePath('/profile');

  return updated;
}

/**
 * Update user bio only
 */
export async function updateBio(userId: string, bio: string) {
  await requireOwnership(userId);

  const validated = bioSchema.parse({ bio });

  const updated = await prisma.user.update({
    where: { id: userId },
    data: {
      bio: validated.bio,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
    },
  });

  revalidatePath('/profile');

  return updated;
}

/**
 * Get user activity feed
 */
export async function getUserActivity(userId: string, limit = 20) {
  const [
    recentProgress,
    recentAnnotations,
    recentForumPosts,
    recentFlashcardReviews,
  ] = await Promise.all([
    // Recent progressions (concept learning)
    prisma.progression.findMany({
      where: { userId },
      include: {
        concept: {
          select: {
            id: true,
            slug: true,
            name: true,
          },
        },
      },
      orderBy: { lastReview: 'desc' },
      take: limit,
    }),

    // Recent annotations
    prisma.annotation.findMany({
      where: { userId },
      include: {
        text: {
          select: {
            id: true,
            slug: true,
            title: true,
          },
        },
        quote: {
          select: {
            id: true,
            slug: true,
            text: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    }),

    // Recent forum posts
    prisma.forumPost.findMany({
      where: { userId },
      select: {
        id: true,
        slug: true,
        title: true,
        createdAt: true,
        likeCount: true,
        _count: {
          select: { replies: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    }),

    // Recent flashcard reviews
    prisma.flashcardReview.findMany({
      where: { userId },
      include: {
        prompt: {
          select: {
            id: true,
            question: true,
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
      orderBy: { reviewedAt: 'desc' },
      take: limit,
    }),
  ]);

  // Combine and sort all activities by date
  const activities = [
    ...recentProgress.map(item => ({
      type: 'progression' as const,
      id: item.id,
      concept: item.concept,
      date: item.lastReview || item.createdAt,
      status: item.status,
      repetitions: item.repetitions,
    })),
    ...recentAnnotations.map(item => ({
      type: 'annotation' as const,
      id: item.id,
      text: item.text,
      quote: item.quote,
      content: item.content,
      date: item.createdAt,
    })),
    ...recentForumPosts.map(item => ({
      type: 'forum_post' as const,
      id: item.id,
      slug: item.slug,
      title: item.title,
      date: item.createdAt,
      likeCount: item.likeCount,
      replyCount: item._count.replies,
    })),
    ...recentFlashcardReviews.map(item => ({
      type: 'flashcard_review' as const,
      id: item.id,
      prompt: item.prompt,
      date: item.reviewedAt,
      quality: item.quality,
    })),
  ];

  // Sort by date descending
  activities.sort((a, b) => b.date.getTime() - a.date.getTime());

  return activities.slice(0, limit);
}

/**
 * Get user achievements
 */
export async function getUserAchievements(userId: string) {
  const [
    totalConcepts,
    masteredConcepts,
    totalAnnotations,
    totalForumPosts,
    totalFlashcardReviews,
    totalTextsRead,
    longestStreak,
    joinDate,
  ] = await Promise.all([
    prisma.progression.count({ where: { userId } }),
    prisma.progression.count({
      where: { userId, status: 'MASTERED' },
    }),
    prisma.annotation.count({ where: { userId } }),
    prisma.forumPost.count({ where: { userId } }),
    prisma.flashcardReview.count({ where: { userId } }),
    prisma.readingState.count({
      where: { userId, status: 'COMPLETED' },
    }),
    prisma.progression.findFirst({
      where: { userId },
      orderBy: { streak: 'desc' },
      select: { streak: true },
    }),
    prisma.user.findUnique({
      where: { id: userId },
      select: { createdAt: true },
    }),
  ]);

  const achievements = [];

  // Novice Philosopher - First concept learned
  if (totalConcepts >= 1) {
    achievements.push({
      id: 'novice_philosopher',
      name: 'Novice Philosophe',
      description: 'Premier concept étudié',
      icon: '🏛️',
      earned: true,
      earnedAt: joinDate?.createdAt || new Date(),
    });
  } else {
    achievements.push({
      id: 'novice_philosopher',
      name: 'Novice Philosophe',
      description: 'Premier concept étudié',
      icon: '🏛️',
      earned: false,
      progress: totalConcepts,
      target: 1,
    });
  }

  // Sage - 100 concepts mastered
  if (masteredConcepts >= 100) {
    achievements.push({
      id: 'sage',
      name: 'Sage',
      description: '100 concepts maîtrisés',
      icon: '🦉',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'sage',
      name: 'Sage',
      description: '100 concepts maîtrisés',
      icon: '🦉',
      earned: false,
      progress: masteredConcepts,
      target: 100,
    });
  }

  // Dedicated Scholar - 25 concepts mastered
  if (masteredConcepts >= 25) {
    achievements.push({
      id: 'dedicated_scholar',
      name: 'Érudit Dévoué',
      description: '25 concepts maîtrisés',
      icon: '📚',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'dedicated_scholar',
      name: 'Érudit Dévoué',
      description: '25 concepts maîtrisés',
      icon: '📚',
      earned: false,
      progress: masteredConcepts,
      target: 25,
    });
  }

  // Bibliophile - Read 10 texts
  if (totalTextsRead >= 10) {
    achievements.push({
      id: 'bibliophile',
      name: 'Bibliophile',
      description: 'Lu 10 textes philosophiques',
      icon: '📖',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'bibliophile',
      name: 'Bibliophile',
      description: 'Lu 10 textes philosophiques',
      icon: '📖',
      earned: false,
      progress: totalTextsRead,
      target: 10,
    });
  }

  // Dialectician - 50 forum posts
  if (totalForumPosts >= 50) {
    achievements.push({
      id: 'dialectician',
      name: 'Dialecticien',
      description: '50 contributions au forum',
      icon: '💬',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'dialectician',
      name: 'Dialecticien',
      description: '50 contributions au forum',
      icon: '💬',
      earned: false,
      progress: totalForumPosts,
      target: 50,
    });
  }

  // Annotator - 100 annotations
  if (totalAnnotations >= 100) {
    achievements.push({
      id: 'annotator',
      name: 'Annotateur',
      description: '100 annotations créées',
      icon: '✍️',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'annotator',
      name: 'Annotateur',
      description: '100 annotations créées',
      icon: '✍️',
      earned: false,
      progress: totalAnnotations,
      target: 100,
    });
  }

  // Review Master - 500 flashcard reviews
  if (totalFlashcardReviews >= 500) {
    achievements.push({
      id: 'review_master',
      name: 'Maître de la Révision',
      description: '500 révisions de flashcards',
      icon: '⚡',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'review_master',
      name: 'Maître de la Révision',
      description: '500 révisions de flashcards',
      icon: '⚡',
      earned: false,
      progress: totalFlashcardReviews,
      target: 500,
    });
  }

  // Streak Master - 7 day streak
  if ((longestStreak?.streak || 0) >= 7) {
    achievements.push({
      id: 'streak_master',
      name: 'Maître de la Série',
      description: '7 jours d\'étude consécutifs',
      icon: '🔥',
      earned: true,
    });
  } else {
    achievements.push({
      id: 'streak_master',
      name: 'Maître de la Série',
      description: '7 jours d\'étude consécutifs',
      icon: '🔥',
      earned: false,
      progress: longestStreak?.streak || 0,
      target: 7,
    });
  }

  // Early Adopter - Joined in first month
  if (joinDate?.createdAt) {
    const monthAfterLaunch = new Date('2025-02-01'); // Assuming launch date
    const isEarlyAdopter = joinDate.createdAt < monthAfterLaunch;

    achievements.push({
      id: 'early_adopter',
      name: 'Pionnier d\'Aletheia',
      description: 'Membre depuis les débuts',
      icon: '🌟',
      earned: isEarlyAdopter,
    });
  }

  return achievements;
}

/**
 * Calculate user level and XP
 */
export async function getUserLevel(userId: string) {
  const [
    masteredConcepts,
    totalReviews,
    totalAnnotations,
    totalForumPosts,
  ] = await Promise.all([
    prisma.progression.count({
      where: { userId, status: 'MASTERED' },
    }),
    prisma.flashcardReview.count({ where: { userId } }),
    prisma.annotation.count({ where: { userId } }),
    prisma.forumPost.count({ where: { userId } }),
  ]);

  // XP calculation
  const xp = {
    masteredConcepts: masteredConcepts * 100,
    reviews: totalReviews * 10,
    annotations: totalAnnotations * 5,
    forumPosts: totalForumPosts * 20,
  };

  const totalXp = Object.values(xp).reduce((sum, val) => sum + val, 0);

  // Level calculation (level * 1000 XP required)
  const level = Math.floor(totalXp / 1000) + 1;
  const xpForCurrentLevel = (level - 1) * 1000;
  const xpForNextLevel = level * 1000;
  const xpProgress = totalXp - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - totalXp;

  return {
    level,
    totalXp,
    xpProgress,
    xpNeeded,
    xpPercentage: Math.min(100, Math.round((xpProgress / 1000) * 100)),
    breakdown: xp,
  };
}

/**
 * Get extended user stats for profile
 */
export async function getExtendedUserStats(userId: string) {
  const [
    totalConcepts,
    inProgress,
    mastered,
    dueForReview,
    totalAnnotations,
    totalForumPosts,
    totalFlashcardReviews,
    currentStreak,
    longestStreak,
  ] = await Promise.all([
    prisma.progression.count({ where: { userId } }),
    prisma.progression.count({
      where: { userId, status: 'IN_PROGRESS' },
    }),
    prisma.progression.count({
      where: { userId, status: 'MASTERED' },
    }),
    prisma.progression.count({
      where: {
        userId,
        nextReview: { lte: new Date() },
      },
    }),
    prisma.annotation.count({ where: { userId } }),
    prisma.forumPost.count({ where: { userId } }),
    prisma.flashcardReview.count({ where: { userId } }),
    prisma.progression.findFirst({
      where: { userId },
      orderBy: { streak: 'desc' },
      select: { streak: true },
    }),
    prisma.progression.aggregate({
      where: { userId },
      _max: { streak: true },
    }),
  ]);

  return {
    totalConcepts,
    inProgress,
    mastered,
    dueForReview,
    totalAnnotations,
    totalForumPosts,
    totalFlashcardReviews,
    currentStreak: currentStreak?.streak || 0,
    longestStreak: longestStreak?._max.streak || 0,
  };
}
