import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * Cleanup achievements that were incorrectly marked as unlocked
 *
 * This script fixes the bug where achievements were marked as unlocked
 * even though the conditions were not met.
 */
async function cleanupAchievements() {
  console.log('🔧 Starting achievement cleanup...\n');

  // Get current user progress
  const userProgress = await prisma.userProgress.findFirst();
  if (!userProgress) {
    console.log('No user progress found, skipping cleanup');
    return;
  }

  console.log('📊 Current User Progress:');
  console.log(`  - Level: ${userProgress.level}`);
  console.log(`  - XP: ${userProgress.xp}`);
  console.log(`  - Streak: ${userProgress.streak}`);
  console.log(`  - Notes created: ${userProgress.notesCreated}`);
  console.log(`  - Favorites: ${userProgress.favoritesAdded}`);
  console.log(`  - Flashcards mastered: ${userProgress.flashcardsMastered}`);
  console.log(`  - Quotes contributed: ${userProgress.quotesContributed}`);
  console.log(`  - Concepts explored: ${userProgress.conceptsExplored}`);
  console.log(`  - Philosophers read: ${userProgress.philosophersRead}\n`);

  // Get all achievements with their requirements
  const allAchievements = await prisma.achievement.findMany();
  console.log(`📋 Found ${allAchievements.length} achievements in database\n`);

  // Get user's achievements
  const userAchievements = await prisma.userAchievement.findMany({
    include: {
      achievement: true,
    },
  });

  console.log(`🏆 Found ${userAchievements.length} user achievement records\n`);

  let fixedCount = 0;
  let deletedCount = 0;

  for (const ua of userAchievements) {
    const achievement = ua.achievement;
    const requirements = achievement.requirements as any;
    const wasUnlocked = ua.unlockedAt !== null;

    let shouldActuallyBeUnlocked = false;

    // Check if achievement conditions are actually met
    switch (requirements.type) {
      case 'notes_created':
        shouldActuallyBeUnlocked = userProgress.notesCreated >= requirements.count;
        break;
      case 'favorites_added':
        shouldActuallyBeUnlocked = userProgress.favoritesAdded >= requirements.count;
        break;
      case 'flashcards_mastered':
        shouldActuallyBeUnlocked = userProgress.flashcardsMastered >= requirements.count;
        break;
      case 'quotes_contributed':
        shouldActuallyBeUnlocked = userProgress.quotesContributed >= requirements.count;
        break;
      case 'concepts_explored':
        shouldActuallyBeUnlocked = userProgress.conceptsExplored >= requirements.count;
        break;
      case 'philosophers_read':
        shouldActuallyBeUnlocked = userProgress.philosophersRead >= requirements.count;
        break;
      case 'streak':
        shouldActuallyBeUnlocked = userProgress.streak >= requirements.count;
        break;
      case 'level':
        shouldActuallyBeUnlocked = userProgress.level >= requirements.count;
        break;
      default:
        console.warn(`Unknown requirement type: ${requirements.type} for ${achievement.name}`);
        continue;
    }

    // Fix the achievement status
    if (wasUnlocked && !shouldActuallyBeUnlocked) {
      // Was marked as unlocked but shouldn't be - remove unlockedAt
      console.log(`❌ FIXING: "${achievement.name}" was unlocked but should not be`);
      console.log(`   Requirement: ${requirements.type} >= ${requirements.count}`);
      console.log(`   Current: ${requirements.type} = ${getCurrentValue(requirements.type, userProgress)}\n`);

      await prisma.userAchievement.update({
        where: { id: ua.id },
        data: {
          unlockedAt: null,
          progress: getCurrentValue(requirements.type, userProgress),
        },
      });
      fixedCount++;
    } else if (!wasUnlocked && shouldActuallyBeUnlocked) {
      // Should be unlocked but isn't - fix it
      console.log(`✅ FIXING: "${achievement.name}" should be unlocked but isn't\n`);
      await prisma.userAchievement.update({
        where: { id: ua.id },
        data: {
          unlockedAt: new Date(),
          progress: requirements.count,
        },
      });
      fixedCount++;
    } else {
      // Update progress correctly
      const currentProgress = getCurrentValue(requirements.type, userProgress);
      if (ua.progress !== currentProgress) {
        await prisma.userAchievement.update({
          where: { id: ua.id },
          data: { progress: currentProgress },
        });
      }
    }
  }

  console.log(`\n✨ Cleanup complete!`);
  console.log(`   - Fixed: ${fixedCount} achievements`);
  console.log(`   - Deleted: ${deletedCount} achievements`);
}

function getCurrentValue(type: string, progress: any): number {
  switch (type) {
    case 'notes_created': return progress.notesCreated;
    case 'favorites_added': return progress.favoritesAdded;
    case 'flashcards_mastered': return progress.flashcardsMastered;
    case 'quotes_contributed': return progress.quotesContributed;
    case 'concepts_explored': return progress.conceptsExplored;
    case 'philosophers_read': return progress.philosophersRead;
    case 'streak': return progress.streak;
    case 'level': return progress.level;
    default: return 0;
  }
}

(async () => {
  try {
    await cleanupAchievements();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
})();
