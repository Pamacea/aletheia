/**
 * Quick verification script to check philosophers in database
 */

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
});

async function main() {
  console.log('🔍 Verifying philosophers in database...\n');

  const count = await prisma.philosopher.count();
  console.log(`Total philosophers in database: ${count}\n`);

  const philosophers = await prisma.philosopher.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      century: true,
      mainMovements: true,
    },
    orderBy: {
      birthYear: 'asc',
    },
  });

  console.log('Philosophers list:');
  philosophers.forEach((p, index) => {
    console.log(`  ${index + 1}. ${p.name} (${p.slug})`);
    console.log(`     Century: ${p.century || 'N/A'}`);
    console.log(`     Movements: ${p.mainMovements.join(', ')}`);
    console.log('');
  });

  console.log(`\n✅ Verification complete! ${count} philosophers found.`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
