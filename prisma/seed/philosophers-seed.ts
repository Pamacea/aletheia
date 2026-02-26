/**
 * Philosophers Seed Script
 * Seeds the database with philosopher data from src/data/philosophers.ts
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import allPhilosophers from '../src/data/philosophers/all';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

async function main() {
  console.log('🌱 Starting philosophers seed...\n');

  let createdCount = 0;
  let updatedCount = 0;
  let errorCount = 0;

  for (const philosopher of allPhilosophers) {
    try {
      // Handle different data formats (old vs new)
      const keyIdeasFormatted = Array.isArray(philosopher.keyIdeas)
        ? philosopher.keyIdeas
        : [];

      const majorWorksFormatted = Array.isArray(philosopher.majorWorks)
        ? philosopher.majorWorks.map(work => ({
            title: work.title || work,
            year: work.year,
            description: work.description || '',
          }))
        : [];

      // Prepare influences array
      const influencesFormatted = {
        influencedBy: philosopher.influencedBy || [],
        influenced: philosopher.influenced || [],
      };

      // Prepare data for Prisma (only fields that exist in schema)
      const philosopherData = {
        slug: philosopher.slug,
        name: philosopher.name,
        fullName: (philosopher as any).fullName || philosopher.name,
        dates: philosopher.birthYear && philosopher.deathYear
          ? `${Math.abs(philosopher.birthYear)}-${Math.abs(philosopher.deathYear)}`
          : philosopher.birthYear
          ? `${Math.abs(philosopher.birthYear)}-?`
          : undefined,
        birthYear: philosopher.birthYear,
        deathYear: philosopher.deathYear,
        nationality: philosopher.nationality,
        century: typeof philosopher.century === 'number' ? philosopher.century.toString() : philosopher.century,
        biography: philosopher.biography,
        keyIdeas: keyIdeasFormatted,
        influences: influencesFormatted,
        mainMovements: philosopher.mainMovements || [],
        disciplines: philosopher.disciplines || [],
        metadata: {
          ...(philosopher as any).metadata,
          birthPlace: (philosopher as any).birthPlace,
          portrait: (philosopher as any).portrait,
          majorWorks: majorWorksFormatted,
        },
      };

      // Upsert philosopher
      await prisma.philosopher.upsert({
        where: { slug: philosopher.slug },
        update: philosopherData,
        create: philosopherData,
      });

      // Check if it was created or updated
      const existing = await prisma.philosopher.findUnique({
        where: { slug: philosopher.slug },
      });

      if (existing) {
        createdCount++;
        console.log(`  ✓ Seeded: ${philosopher.name} (${philosopher.slug})`);
      }
    } catch (error) {
      errorCount++;
      console.error(`  ✗ Error seeding ${philosopher.name}:`, error);
    }
  }

  console.log('\n📊 Summary:');
  console.log(`  Total philosophers: ${allPhilosophers.length}`);
  console.log(`  Created/Updated: ${createdCount}`);
  console.log(`  Errors: ${errorCount}`);
  console.log('\n✅ Philosophers seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Fatal error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
