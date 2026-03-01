import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

async function resetDatabase() {
  console.log('🗑️  Resetting database...\n');

  // Delete all concept-related data in correct order (due to foreign keys)
  console.log('Deleting flashcard prompts...');
  await prisma.flashcardPrompt.deleteMany({});

  console.log('Deleting concept sources...');
  await prisma.conceptSource.deleteMany({});

  console.log('Deleting concept relations...');
  await prisma.conceptRelation.deleteMany({});

  console.log('Deleting concepts...');
  const deletedConcepts = await prisma.concept.deleteMany({});
  console.log(`  ✓ Deleted ${deletedConcepts.count} concepts`);

  console.log('\n✅ Database reset complete!');
  console.log('All concepts, relations, and sources have been removed.');

  // Close pool connection
  await pool.end();
}

resetDatabase()
  .catch((e) => {
    console.error('❌ Reset failed:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
