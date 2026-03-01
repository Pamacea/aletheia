/**
 * Philosophers Seed Script
 * Seeds the database with philosopher data from src/data/philosophers
 *
 * Features:
 * - Imports from consolidated all.ts
 * - Maps PhilosopherData to Prisma schema
 * - Cleans markdown formatting
 * - Handles negative years (B.C.E.)
 * - Creates movement links after philosophers
 * - Detailed statistics and error handling
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { allPhilosophers, type PhilosopherData } from '../../src/data/philosophers/all';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

/**
 * Clean text by removing markdown formatting
 */
function cleanText(text: string): string {
  if (!text) return '';

  return text
    // Remove bold markdown
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // Remove italic markdown
    .replace(/\*(.*?)\*/g, '$1')
    // Convert curly quotes to straight quotes
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'")
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Format century for display
 */
function formatCentury(century?: string): string | undefined {
  if (!century) return undefined;
  return century;
}

/**
 * Build movement slug map for linking
 */
async function buildMovementSlugMap(): Promise<Map<string, string>> {
  const movements = await prisma.movement.findMany({
    select: { id: true, slug: true, name: true }
  });

  const map = new Map<string, string>();
  movements.forEach(m => map.set(m.slug, m.id));
  return map;
}

/**
 * Create or update philosopher
 */
async function upsertPhilosopher(philosopher: PhilosopherData) {
  // Prepare key ideas - handle both object and array formats
  let keyIdeasFormatted: string[] = [];

  if (typeof philosopher.keyIdeas === 'object' && 'ideas' in philosopher.keyIdeas) {
    keyIdeasFormatted = philosopher.keyIdeas.ideas || [];
  } else if (Array.isArray(philosopher.keyIdeas)) {
    keyIdeasFormatted = philosopher.keyIdeas;
  }

  // Prepare major works
  const majorWorksFormatted = Array.isArray(philosopher.majorWorks)
    ? philosopher.majorWorks.map(work => ({
        title: typeof work === 'string' ? work : (work.title || ''),
        year: typeof work === 'string' ? 0 : (work.year || 0),
        description: typeof work === 'string' ? '' : (work.description || ''),
        type: typeof work === 'string' ? undefined : work.type,
      }))
    : [];

  // Prepare influences
  const influencesFormatted = {
    influencedBy: philosopher.influences?.influencedBy || [],
    influenced: philosopher.influences?.influenced || [],
  };

  // Prepare metadata
  const metadataFormatted = {
    ...(philosopher.metadata || {}),
    birthPlace: philosopher.birthPlace,
    portrait: (philosopher as any).portrait,
    majorWorks: majorWorksFormatted,
  };

  // Build philosopher data object
  const philosopherData = {
    slug: philosopher.slug,
    name: philosopher.name,
    fullName: philosopher.fullName || philosopher.name,
    dates: philosopher.birthYear && philosopher.deathYear
      ? `${Math.abs(philosopher.birthYear)}-${Math.abs(philosopher.deathYear)}`
      : philosopher.birthYear
      ? `${Math.abs(philosopher.birthYear)}-?`
      : undefined,
    birthYear: philosopher.birthYear,
    deathYear: philosopher.deathYear,
    nationality: philosopher.nationality,
    century: formatCentury(philosopher.century),
    biography: cleanText(philosopher.biography || ''),
    mainMovements: philosopher.mainMovements || [],
    disciplines: philosopher.disciplines || [],
    keyIdeas: keyIdeasFormatted,
    influences: influencesFormatted,
    metadata: metadataFormatted,
  };

  // Upsert philosopher
  const result = await prisma.philosopher.upsert({
    where: { slug: philosopher.slug },
    update: philosopherData,
    create: philosopherData,
  });

  return result;
}

/**
 * Link philosopher to movements
 */
async function linkPhilosopherToMovements(
  philosopher: PhilosopherData,
  philosopherId: string,
  movementSlugMap: Map<string, string>
): Promise<{ linked: number; skipped: number }> {
  let linked = 0;
  let skipped = 0;

  if (!philosopher.mainMovements || philosopher.mainMovements.length === 0) {
    return { linked, skipped };
  }

  for (const movementSlug of philosopher.mainMovements) {
    // Try exact match first
    let movementId = movementSlugMap.get(movementSlug);

    // Try lowercase match
    if (!movementId) {
      movementId = movementSlugMap.get(movementSlug.toLowerCase());
    }

    // Try with common variations
    if (!movementId) {
      const variations = [
        movementSlug.toLowerCase(),
        movementSlug.normalize('NFD').replace(/[\u0300-\u036f]/g, ''), // Remove accents
        movementSlug.replace(/\s+/g, '-').toLowerCase(),
      ];

      for (const variation of variations) {
        movementId = movementSlugMap.get(variation);
        if (movementId) break;
      }
    }

    if (!movementId) {
      console.log(`      ⚠ Movement not found: ${movementSlug}`);
      skipped++;
      continue;
    }

    // Upsert movement-philosopher link
    await prisma.movementPhilosopher.upsert({
      where: {
        movementId_philosopherId: {
          movementId,
          philosopherId,
        },
      },
      update: {
        role: 'key-figure',
        contribution: `Key figure in ${movementSlug}`,
      },
      create: {
        movementId,
        philosopherId,
        role: 'key-figure',
        contribution: `Key figure in ${movementSlug}`,
      },
    });

    linked++;
  }

  return { linked, skipped };
}

/**
 * Main seeding function
 */
async function main() {
  console.log('🌱 Starting philosophers seed...\n');

  // Build movement slug map
  console.log('📚 Building movement slug map...');
  const movementSlugMap = await buildMovementSlugMap();
  console.log(`  ✓ Found ${movementSlugMap.size} movements\n`);

  // Statistics
  let createdCount = 0;
  let updatedCount = 0;
  let errorCount = 0;
  let movementLinkedCount = 0;
  let movementSkippedCount = 0;

  console.log(`📚 Processing ${allPhilosophers.length} philosophers...\n`);

  for (const philosopher of allPhilosophers) {
    try {
      // Upsert philosopher
      const result = await upsertPhilosopher(philosopher);

      // Check if created or updated (Prisma doesn't tell us directly, so we assume created if no error)
      createdCount++;

      console.log(`  ✓ ${philosopher.name} (${philosopher.slug})`);

      // Link to movements
      if (philosopher.mainMovements && philosopher.mainMovements.length > 0) {
        const { linked, skipped } = await linkPhilosopherToMovements(
          philosopher,
          result.id,
          movementSlugMap
        );

        movementLinkedCount += linked;
        movementSkippedCount += skipped;

        if (linked > 0) {
          console.log(`    🔗 Linked to ${linked} movement(s)`);
        }
        if (skipped > 0) {
          console.log(`    ⚠ ${skipped} movement(s) not found`);
        }
      }
    } catch (error) {
      errorCount++;
      console.error(`  ✗ Error seeding ${philosopher.name}:`, error);
    }
  }

  console.log('\n');

  // Print statistics
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║       📊 PHILOSOPHERS SEEDING COMPLETE 📊         ║');
  console.log('╠══════════════════════════════════════════════════╣');
  console.log(`║ Total Philosophers:  ${String(allPhilosophers.length).padStart(4)}                       ║`);
  console.log(`║ Created/Updated:     ${String(createdCount).padStart(4)}                       ║`);
  console.log(`║ Errors:              ${String(errorCount).padStart(4)}                       ║`);
  console.log(`║ Movement Links:      ${String(movementLinkedCount).padStart(4)}                       ║`);
  console.log(`║ Movements Skipped:   ${String(movementSkippedCount).padStart(4)}                       ║`);
  console.log('╚══════════════════════════════════════════════════╝');
  console.log('');

  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} philosopher(s) failed to seed. Check logs above.`);
  }

  if (movementSkippedCount > 0) {
    console.log(`💡 Tip: ${movementSkippedCount} movement(s) not found. Run movements seed first: npm run db:seed:movements`);
  }

  console.log('✅ Philosophers seed completed!');
  console.log('💡 Philosophers are now available in the database');
  console.log('');
}

// Export function for use in main seed
export async function seedPhilosophers() {
  await main();
}

// Run if called directly
main()
  .catch((e) => {
    console.error('❌ Fatal error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
