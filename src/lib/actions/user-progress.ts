'use server';

import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';
import { requireAuth, requireOwnership } from '@/lib/auth/authorization';

// ============================================================================
// TYPES
// ============================================================================

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  notesCreated: number;
  favoritesAdded: number;
  flashcardsCreated: number;
  flashcardsReviewed: number;
  flashcardsMastered: number;
  quotesContributed: number;
  conceptsExplored: number;
  philosophersRead: number;
  sourcesRead: number;
  forumPostsCreated: number;
  forumRepliesCreated: number;
  hoursSpent: number;
  nextLevelXp: number;
  progressToNextLevel: number; // percentage
}

export interface XPActionType {
  note_created: 10;
  favorite_added: 5;
  flashcard_created: 20;
  flashcard_reviewed: 15;
  flashcard_mastered: 25;
  quote_contributed: 25;
  concept_explored: 5;
  philosopher_read: 10;
  source_read: 15;
  forum_post: 15;
  forum_reply: 10;
}

// XP rewards for each action
const XP_REWARDS: XPActionType = {
  note_created: 10,
  favorite_added: 5,
  flashcard_created: 20,
  flashcard_reviewed: 15,
  flashcard_mastered: 25,
  quote_contributed: 25,
  concept_explored: 5,
  philosopher_read: 10,
  source_read: 15,
  forum_post: 15,
  forum_reply: 10,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Calculate required XP for a given level
 */
function getXpForLevel(level: number): number {
  if (level <= 1) return 0;
  if (level === 2) return 100;
  if (level === 3) return 250;
  if (level === 4) return 500;
  if (level === 5) return 1000;
  if (level === 6) return 2500;
  if (level === 7) return 5000;
  // For level 8+: formula = 5000 × (level - 7)^2
  return 5000 * Math.pow(level - 7, 2);
}

/**
 * Calculate level from total XP
 */
function getLevelFromXp(xp: number): number {
  if (xp < 100) return 1;
  if (xp < 250) return 2;
  if (xp < 500) return 3;
  if (xp < 1000) return 4;
  if (xp < 2500) return 5;
  if (xp < 5000) return 6;
  if (xp < 10000) return 7;

  // For level 8+
  let level = 7;
  let requiredXp = 10000;

  while (xp >= requiredXp) {
    level++;
    requiredXp = getXpForLevel(level + 1);
  }

  return level;
}

/**
 * Calculate streak bonus multiplier
 */
function getStreakMultiplier(streak: number): number {
  if (streak >= 30) return 2.0; // 100% bonus
  if (streak >= 7) return 1.5;  // 50% bonus
  return 1.0; // No bonus
}

// ============================================================================
// SERVER ACTIONS
// ============================================================================

/**
 * Add XP to user and check for level up
 */
export async function addXP(
  action: keyof XPActionType,
  metadata?: {
    entityType?: string;
    entityId?: string;
    title?: string;
    description?: string;
  }
) {
  const session = await requireAuth();

  const userId = session.user.id;
  const baseXp = XP_REWARDS[action];

  // Get or create user progress
  let progress = await prisma.userProgress.findUnique({
    where: { userId },
  });

  if (!progress) {
    progress = await prisma.userProgress.create({
      data: { userId },
    });
  }

  // Update streak
  const now = new Date();
  const lastActivity = new Date(progress.lastActivity);
  const daysDiff = Math.floor((now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));

  let newStreak = progress.streak;
  if (daysDiff === 0) {
    // Same day, no change
  } else if (daysDiff === 1) {
    // Next day, increment streak
    newStreak = progress.streak + 1;
  } else {
    // Streak broken
    newStreak = 1;
  }

  // Calculate XP with streak bonus
  const streakMultiplier = getStreakMultiplier(newStreak);
  const finalXp = Math.round(baseXp * streakMultiplier);

  // Add XP
  const newXp = progress.xp + finalXp;
  const newLevel = getLevelFromXp(newXp);

  // Update progress
  progress = await prisma.userProgress.update({
    where: { userId },
    data: {
      xp: newXp,
      level: newLevel,
      streak: newStreak,
      lastActivity: now,
      // Update counters based on action
      ...(action === 'note_created' && { notesCreated: { increment: 1 } }),
      ...(action === 'favorite_added' && { favoritesAdded: { increment: 1 } }),
      ...(action === 'flashcard_created' && { flashcardsCreated: { increment: 1 } }),
      ...(action === 'flashcard_reviewed' && { flashcardsReviewed: { increment: 1 } }),
      ...(action === 'flashcard_mastered' && { flashcardsMastered: { increment: 1 } }),
      ...(action === 'quote_contributed' && { quotesContributed: { increment: 1 } }),
      ...(action === 'concept_explored' && { conceptsExplored: { increment: 1 } }),
      ...(action === 'philosopher_read' && { philosophersRead: { increment: 1 } }),
      ...(action === 'source_read' && { sourcesRead: { increment: 1 } }),
      ...(action === 'forum_post' && { forumPostsCreated: { increment: 1 } }),
      ...(action === 'forum_reply' && { forumRepliesCreated: { increment: 1 } }),
    },
  });

  // Log activity
  await prisma.userActivity.create({
    data: {
      userId,
      actionType: action,
      entityType: metadata?.entityType,
      entityId: metadata?.entityId,
      metadata: metadata as any,
      xpGained: finalXp,
    },
  });

  // Check for achievements
  await checkAchievements(userId);

  // Revalidate paths
  revalidatePath('/profile');
  revalidatePath('/profile/stats');
  revalidatePath('/profile/achievements');

  return {
    xpGained: finalXp,
    totalXp: newXp,
    level: newLevel,
    streak: newStreak,
    leveledUp: newLevel > progress.level,
  };
}

/**
 * Get user statistics
 */
export async function getUserStats(userId: string): Promise<UserStats> {
  // Only allow users to view their own stats
  await requireOwnership(userId);

  const progress = await prisma.userProgress.findUnique({
    where: { userId },
  });

  if (!progress) {
    return {
      xp: 0,
      level: 1,
      streak: 0,
      notesCreated: 0,
      favoritesAdded: 0,
      flashcardsCreated: 0,
      flashcardsReviewed: 0,
      flashcardsMastered: 0,
      quotesContributed: 0,
      conceptsExplored: 0,
      philosophersRead: 0,
      sourcesRead: 0,
      forumPostsCreated: 0,
      forumRepliesCreated: 0,
      hoursSpent: 0,
      nextLevelXp: 100,
      progressToNextLevel: 0,
    };
  }

  const currentLevel = progress.level;
  const currentXp = progress.xp;
  const nextLevelXp = getXpForLevel(currentLevel + 1);
  const currentLevelXp = getXpForLevel(currentLevel);
  const progressInLevel = currentXp - currentLevelXp;
  const totalForLevel = nextLevelXp - currentLevelXp;
  const progressToNextLevel = Math.min(100, Math.round((progressInLevel / totalForLevel) * 100));

  return {
    xp: currentXp,
    level: currentLevel,
    streak: progress.streak,
    notesCreated: progress.notesCreated,
    favoritesAdded: progress.favoritesAdded,
    flashcardsCreated: progress.flashcardsCreated,
    flashcardsReviewed: progress.flashcardsReviewed,
    flashcardsMastered: progress.flashcardsMastered,
    quotesContributed: progress.quotesContributed,
    conceptsExplored: progress.conceptsExplored,
    philosophersRead: progress.philosophersRead,
    sourcesRead: progress.sourcesRead,
    forumPostsCreated: progress.forumPostsCreated,
    forumRepliesCreated: progress.forumRepliesCreated,
    hoursSpent: progress.hoursSpent,
    nextLevelXp,
    progressToNextLevel,
  };
}

/**
 * Get recent user activities
 */
export async function getUserActivities(userId: string, limit = 20) {
  const activities = await prisma.userActivity.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });

  return activities;
}

/**
 * Check and unlock achievements
 */
async function checkAchievements(userId: string) {
  const progress = await prisma.userProgress.findUnique({
    where: { userId },
    include: {
      user: {
        include: {
          achievements: {
            include: {
              achievement: true,
            },
          },
        },
      },
    },
  });

  if (!progress) return;

  // Get all achievements
  const allAchievements = await prisma.achievement.findMany();
  const unlockedIds = progress.user.achievements.map((ua) => ua.achievementId);

  // Check each achievement
  for (const achievement of allAchievements) {
    if (unlockedIds.includes(achievement.id)) continue;

    const requirements = achievement.requirements as any;
    let shouldUnlock = false;
    let unlockProgress = 0;

    switch (requirements.type) {
      case 'notes_created':
        unlockProgress = progress.notesCreated;
        shouldUnlock = progress.notesCreated >= requirements.count;
        break;

      case 'favorites_added':
        unlockProgress = progress.favoritesAdded;
        shouldUnlock = progress.favoritesAdded >= requirements.count;
        break;

      case 'flashcards_mastered':
        unlockProgress = progress.flashcardsMastered;
        shouldUnlock = progress.flashcardsMastered >= requirements.count;
        break;

      case 'quotes_contributed':
        unlockProgress = progress.quotesContributed;
        shouldUnlock = progress.quotesContributed >= requirements.count;
        break;

      case 'concepts_explored':
        unlockProgress = progress.conceptsExplored;
        shouldUnlock = progress.conceptsExplored >= requirements.count;
        break;

      case 'streak':
        unlockProgress = progress.streak;
        shouldUnlock = progress.streak >= requirements.count;
        break;

      case 'level':
        unlockProgress = progress.level;
        shouldUnlock = progress.level >= requirements.count;
        break;
    }

    if (shouldUnlock) {
      // Unlock achievement
      await prisma.userAchievement.create({
        data: {
          userId,
          achievementId: achievement.id,
          progress: requirements.count,
          unlockedAt: new Date(),  // Only set when actually unlocked
        },
      });

      // Add XP reward
      if (achievement.xpReward > 0) {
        const newXp = progress.xp + achievement.xpReward;
        const newLevel = getLevelFromXp(newXp);

        await prisma.userProgress.update({
          where: { userId },
          data: {
            xp: newXp,
            level: newLevel,
          },
        });
      }
    } else if (unlockProgress > 0) {
      // Update progress for progressive achievements
      const existing = await prisma.userAchievement.findUnique({
        where: {
          userId_achievementId: {
            userId,
            achievementId: achievement.id,
          },
        },
      });

      if (!existing && unlockProgress > 0) {
        await prisma.userAchievement.create({
          data: {
            userId,
            achievementId: achievement.id,
            progress: unlockProgress,
          },
        });
      }
    }
  }
}

/**
 * Get user achievements with progress
 */
export async function getUserAchievements(userId: string) {
  const achievements = await prisma.achievement.findMany({
    orderBy: { category: 'asc' },
  });

  const userAchievements = await prisma.userAchievement.findMany({
    where: { userId },
    include: {
      achievement: true,
    },
  });

  // Build map of achievement data
  const userAchievementMap = new Map(
    userAchievements.map((ua) => [
      ua.achievementId,
      {
        progress: ua.progress,
        unlockedAt: ua.unlockedAt,  // Check actual unlock time
      }
    ])
  );

  // Get current user progress for real-time validation
  const userProgress = await prisma.userProgress.findUnique({
    where: { userId },
  });

  return achievements.map((achievement) => {
    const requirements = achievement.requirements as any;
    const userAchievement = userAchievementMap.get(achievement.id);

    // Check if actually unlocked (has unlockedAt timestamp)
    const isUnlocked = userAchievement?.unlockedAt !== null && userAchievement?.unlockedAt !== undefined;
    const progress = userAchievement?.progress || 0;

    return {
      id: achievement.id,
      name: achievement.name,
      description: achievement.description,
      icon: achievement.icon || '',
      category: achievement.category,
      xpReward: achievement.xpReward || 0,
      earned: isUnlocked,
      earnedAt: userAchievement?.unlockedAt || undefined,
      progress,
      target: requirements.count || 0,
      // Keep additional fields for compatibility
      isUnlocked,
      maxProgress: requirements.count || 0,
      requirements,
      unlockedAt: userAchievement?.unlockedAt,
    };
  });
}
