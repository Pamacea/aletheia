'use server';

import { prisma } from '@/lib/db/prisma';

/**
 * Get user's learning progress
 */
export async function getUserProgress(userId: string) {
  const progressions = await prisma.progression.findMany({
    where: { userId },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
          category: {
            select: {
              name: true,
              color: true,
            },
          },
        },
      },
    },
    orderBy: {
      lastReview: 'desc',
    },
    take: 20,
  });

  return progressions;
}

/**
 * Get user statistics
 */
export async function getUserStats(userId: string) {
  const [totalConcepts, inProgress, mastered, dueForReview] = await Promise.all([
    prisma.progression.count({
      where: { userId },
    }),
    prisma.progression.count({
      where: {
        userId,
        status: 'IN_PROGRESS',
      },
    }),
    prisma.progression.count({
      where: {
        userId,
        status: 'MASTERED',
      },
    }),
    prisma.progression.count({
      where: {
        userId,
        nextReview: {
          lte: new Date(),
        },
      },
    }),
  ]);

  return {
    totalConcepts,
    inProgress,
    mastered,
    dueForReview,
  };
}

/**
 * Save concept annotation (TODO: implement proper annotation system)
 */
export async function saveAnnotation(data: {
  userId: string;
  conceptId: string;
  content: string;
  isPublic?: boolean;
}) {
  // TODO: Implement annotation system
  // Annotations are linked to textId, chapterId, or quoteId, not directly to concepts
  throw new Error('Annotation system not yet implemented');
}

/**
 * Get user's saved concepts
 */
export async function getSavedConcepts(userId: string) {
  // Get concepts through progressions
  const concepts = await prisma.concept.findMany({
    where: {
      progressions: {
        some: {
          userId,
        },
      },
    },
    include: {
      category: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return concepts;
}

/**
 * Get flashcards due for review
 */
export async function getDueFlashcards(userId: string, limit: number = 20) {
  const dueCards = await prisma.progression.findMany({
    where: {
      userId,
      nextReview: {
        lte: new Date(),
      },
      status: {
        in: ['IN_PROGRESS', 'REVIEWING'],
      },
    },
    include: {
      concept: {
        select: {
          id: true,
          slug: true,
          name: true,
          shortDefinition: true,
          category: {
            select: {
              name: true,
              color: true,
            },
          },
        },
      },
      prompt: {
        select: {
          id: true,
          slug: true,
          question: true,
          type: true,
        },
      },
    },
    orderBy: {
      nextReview: 'asc',
    },
    take: limit,
  });

  return dueCards;
}

/**
 * Get recent annotations
 */
export async function getRecentAnnotations(userId: string, limit: number = 5) {
  const annotations = await prisma.annotation.findMany({
    where: {
      userId,
    },
    include: {
      text: {
        select: {
          id: true,
          slug: true,
          title: true,
          author: true,
        },
      },
      chapter: {
        select: {
          id: true,
          slug: true,
          title: true,
          chapterNumber: true,
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
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  });

  return annotations;
}

/**
 * Get reading progress
 */
export async function getReadingProgress(userId: string) {
  const readingStates = await prisma.readingState.findMany({
    where: {
      userId,
      status: {
        in: ['READING', 'PAUSED'],
      },
    },
    include: {
      text: {
        select: {
          id: true,
          slug: true,
          title: true,
          author: true,
          coverImage: true,
        },
      },
    },
    orderBy: {
      lastReadAt: 'desc',
    },
    take: 3,
  });

  return readingStates;
}

/**
 * Get personalized recommendations
 */
export async function getRecommendations(userId: string) {
  // Get mastered concepts to find related ones
  const masteredConcepts = await prisma.progression.findMany({
    where: {
      userId,
      status: 'MASTERED',
    },
    select: {
      conceptId: true,
    },
    take: 5,
  });

  const masteredIds = masteredConcepts.map((p) => p.conceptId);

  // Find related concepts through relations
  const relatedConcepts = await prisma.conceptRelation.findMany({
    where: {
      conceptId: {
        in: masteredIds,
      },
      relatedConceptId: {
        notIn: masteredIds,
      },
    },
    select: {
      relatedConcept: {
        select: {
          id: true,
          slug: true,
          name: true,
          shortDefinition: true,
          category: {
            select: {
              name: true,
              color: true,
            },
          },
        },
      },
      relationType: true,
      strength: true,
    },
    orderBy: {
      strength: 'desc',
    },
    take: 6,
  });

  // Also get concepts from the same categories as mastered ones
  const categories = await prisma.concept.findMany({
    where: {
      id: {
        in: masteredIds,
      },
    },
    select: {
      categoryId: true,
    },
    distinct: ['categoryId'],
  });

  const categoryIds = categories.map((c) => c.categoryId).filter((id): id is string => id !== null);

  const categoryConcepts = await prisma.concept.findMany({
    where: {
      categoryId: {
        in: categoryIds,
      },
      id: {
        notIn: [...masteredIds, ...relatedConcepts.map((r) => r.relatedConcept.id)],
      },
    },
    select: {
      id: true,
      slug: true,
      name: true,
      shortDefinition: true,
      category: {
        select: {
          name: true,
          color: true,
        },
      },
    },
    take: 4,
  });

  return {
    related: relatedConcepts.map((r) => ({
      ...r.relatedConcept,
      relationType: r.relationType,
      reason: `Connecté à vos concepts maîtrisés (${r.relationType.toLowerCase()})`,
    })),
    fromCategories: categoryConcepts.map((c) => ({
      ...c,
      reason: `De la même catégorie que vos concepts maîtrisés`,
    })),
  };
}

/**
 * Get user streak (consecutive days with activity)
 */
export async function getUserStreak(userId: string) {
  // Get all review dates
  const reviews = await prisma.flashcardReview.findMany({
    where: {
      userId,
    },
    select: {
      reviewedAt: true,
    },
    orderBy: {
      reviewedAt: 'desc',
    },
    take: 365, // Last year
  });

  if (reviews.length === 0) {
    return { currentStreak: 0, longestStreak: 0, lastActiveDate: null };
  }

  // Group by date
  const dates = reviews.map((r) => {
    const date = new Date(r.reviewedAt);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  });

  const uniqueDates = [...new Set(dates)].sort((a, b) => b - a);

  // Calculate current streak
  let currentStreak = 0;
  const today = new Date();
  const todayTime = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const yesterdayTime = todayTime - 86400000;

  if (uniqueDates[0] === todayTime || uniqueDates[0] === yesterdayTime) {
    currentStreak = 1;
    for (let i = 1; i < uniqueDates.length; i++) {
      const diff = uniqueDates[i - 1] - uniqueDates[i];
      if (diff === 86400000) {
        currentStreak++;
      } else {
        break;
      }
    }
  }

  // Calculate longest streak
  let longestStreak = 1;
  let tempStreak = 1;
  for (let i = 1; i < uniqueDates.length; i++) {
    const diff = uniqueDates[i - 1] - uniqueDates[i];
    if (diff === 86400000) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 1;
    }
  }

  return {
    currentStreak,
    longestStreak,
    lastActiveDate: new Date(uniqueDates[0]),
  };
}

/**
 * Get comprehensive user stats for dashboard
 */
export async function getDashboardStats(userId: string) {
  const [
    totalConcepts,
    inProgress,
    mastered,
    dueForReview,
    totalAnnotations,
    totalReviews,
    readingStates,
  ] = await Promise.all([
    prisma.progression.count({
      where: { userId },
    }),
    prisma.progression.count({
      where: {
        userId,
        status: 'IN_PROGRESS',
      },
    }),
    prisma.progression.count({
      where: {
        userId,
        status: 'MASTERED',
      },
    }),
    prisma.progression.count({
      where: {
        userId,
        nextReview: {
          lte: new Date(),
        },
      },
    }),
    prisma.annotation.count({
      where: { userId },
    }),
    prisma.flashcardReview.count({
      where: { userId },
    }),
    prisma.readingState.count({
      where: {
        userId,
        status: 'READING',
      },
    }),
  ]);

  return {
    totalConcepts,
    inProgress,
    mastered,
    dueForReview,
    totalAnnotations,
    totalReviews,
    currentlyReading: readingStates,
  };
}
