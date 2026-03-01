import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter});

/**
 * Cleanup orphaned favorites and sync counters
 */
async function cleanupFavorites() {
  console.log('🧹 Cleaning up favorites...\n');

  // Get the first user
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log('❌ No user found in database');
    return;
  }

  console.log(`👤 User: ${user.email}\n`);

  // Get all favorites
  const favorites = await prisma.favorite.findMany({
    where: { userId: user.id },
  });

  console.log(`📌 Found ${favorites.length} favorites in database\n`);

  let orphanedCount = 0;
  let validCount = 0;

  // Check each favorite
  for (const fav of favorites) {
    let entityExists = false;

    switch (fav.entityType) {
      case 'CONCEPT':
        entityExists = await prisma.concept.count({ where: { id: fav.entityId } }) > 0;
        break;

      case 'PHILOSOPHER':
        entityExists = await prisma.philosopher.count({ where: { id: fav.entityId } }) > 0;
        break;

      case 'MOVEMENT':
      case 'CURRENT':
        entityExists = await prisma.category.count({ where: { id: fav.entityId } }) > 0;
        break;

      case 'QUOTE':
        entityExists = await prisma.quote.count({ where: { id: fav.entityId } }) > 0;
        break;

      case 'TEXT':
        entityExists = await prisma.text.count({ where: { id: fav.entityId } }) > 0;
        break;

      case 'SOURCE':
        entityExists = await prisma.source.count({ where: { id: fav.entityId } }) > 0;
        break;
    }

    if (!entityExists) {
      console.log(`❌ Deleting orphaned favorite: ${fav.entityType}:${fav.entityId}`);
      await prisma.favorite.delete({ where: { id: fav.id } });
      orphanedCount++;
    } else {
      validCount++;
    }
  }

  console.log(`\n📊 Cleanup Results:`);
  console.log(`   - Orphaned favorites deleted: ${orphanedCount}`);
  console.log(`   - Valid favorites remaining: ${validCount}\n`);

  // Sync the user progress counter
  const userProgress = await prisma.userProgress.findFirst({
    where: { userId: user.id }
  });

  if (userProgress) {
    console.log(`🔄 Syncing user progress counters...`);
    console.log(`   - Current favoritesAdded counter: ${userProgress.favoritesAdded}`);
    console.log(`   - Actual favorites in DB: ${validCount}`);

    // Recalculate all counters
    const [
      actualFavorites,
      actualNotes,
      actualConcepts,
      actualPhilosophers,
    ] = await Promise.all([
      prisma.favorite.count({ where: { userId: user.id } }),
      prisma.note.count({ where: { userId: user.id } }),
      prisma.progression.count({ where: { userId: user.id } }),
      prisma.progression.groupBy({
        by: ['conceptId'],
        where: { userId: user.id },
      }),
    ]);

    await prisma.userProgress.update({
      where: { id: userProgress.id },
      data: {
        favoritesAdded: actualFavorites,
        notesCreated: actualNotes,
        conceptsExplored: actualConcepts,
        philosophersRead: actualPhilosophers.length,
      },
    });

    console.log(`   ✅ Counters synced!`);
    console.log(`      - favoritesAdded: ${actualFavorites}`);
    console.log(`      - notesCreated: ${actualNotes}`);
    console.log(`      - conceptsExplored: ${actualConcepts}`);
    console.log(`      - philosophersRead: ${actualPhilosophers.length}\n`);
  }

  console.log('✨ Cleanup complete!');
}

(async () => {
  try {
    await cleanupFavorites();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
})();
