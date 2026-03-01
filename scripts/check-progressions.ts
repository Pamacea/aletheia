import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter});

/**
 * Check user progressions
 */
async function checkProgressions() {
  console.log('🔍 Checking user progressions...\n');

  // Get the first user
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log('❌ No user found in database');
    return;
  }

  console.log(`👤 User: ${user.email}\n`);

  // Get progressions
  const progressions = await prisma.progression.findMany({
    where: { userId: user.id },
    include: {
      concept: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
    orderBy: { lastReview: 'desc' },
  });

  console.log(`📚 Found ${progressions.length} progression(s):\n`);

  if (progressions.length === 0) {
    console.log('   No progressions found. This is normal if you haven\'t explored any concepts yet.');
    console.log('   Go to /conceptuaire and click on a concept to start learning!');
    return;
  }

  for (const prog of progressions) {
    console.log(`   ✅ ${prog.concept.name}`);
    console.log(`      Slug: ${prog.concept.slug}`);
    console.log(`      Status: ${prog.status}`);
    console.log(`      Repetitions: ${prog.repetitions}`);
    console.log(`      Streak: ${prog.streak}`);
    console.log(`      Last Review: ${prog.lastReview || 'Never'}`);
    console.log(`      Next Review: ${prog.nextReview || 'Not scheduled'}`);
    console.log('');
  }
}

(async () => {
  try {
    await checkProgressions();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
})();
