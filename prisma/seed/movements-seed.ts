/**
 * Movements Seed Script
 * Imports philosophical movements and philosopher-movement links from data directory
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as movementData from '../../src/data/movements';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }) as any;

/**
 * Philosopher slug map for linking
 */
async function buildPhilosopherSlugMap() {
  const philosophers = await prisma.philosopher.findMany({
    select: { id: true, slug: true }
  });

  const map = new Map<string, string>();
  philosophers.forEach(p => map.set(p.slug, p.id));
  return map;
}

/**
 * Main seeding function
 */
async function main() {
  console.log('🌱 Starting movements seed...\n');

  // Build philosopher slug map
  console.log('📚 Building philosopher slug map...');
  const philosopherSlugMap = await buildPhilosopherSlugMap();
  console.log(`  ✓ Found ${philosopherSlugMap.size} philosophers\n`);

  // Get all movements from data
  const movements = [
    movementData.existentialisme,
    movementData.nihilisme,
    movementData.stoicisme,
    movementData.phenomenologie,
  ];

  console.log(`📚 Found ${movements.length} movements\n`);

  // Create movements and philosopher links
  console.log('🎯 Creating movements and philosopher links...\n');

  for (const movement of movements) {
    console.log(`  → ${movement.name}`);

    // Create or update movement
    const movementRecord = await prisma.movement.upsert({
      where: { slug: movement.slug },
      update: {
        name: movement.name,
        description: movement.description,
        shortDefinition: movement.shortDefinition,
        period: movement.period,
        origins: movement.origins,
        keyPrinciples: movement.keyPrinciples,
        keyPhilosophers: movement.keyPhilosophers,
        keyConcepts: movement.keyConcepts,
        variations: movement.variations,
        criticisms: movement.criticisms,
        influence: movement.influence,
        metadata: movement.metadata,
      },
      create: {
        slug: movement.slug,
        name: movement.name,
        description: movement.description,
        shortDefinition: movement.shortDefinition,
        period: movement.period,
        origins: movement.origins,
        keyPrinciples: movement.keyPrinciples,
        keyPhilosophers: movement.keyPhilosophers,
        keyConcepts: movement.keyConcepts,
        variations: movement.variations,
        criticisms: movement.criticisms,
        influence: movement.influence,
        metadata: movement.metadata,
      },
    });

    console.log(`    ✓ Created/updated movement: ${movementRecord.name}`);

    // Get philosopher links for this movement
    let philosopherLinks: Array<{ philosopherSlug: string; role: string; contribution: string }> = [];

    if (movement.slug === 'existentialisme') {
      philosopherLinks = movementData.existentialismePhilosopherLinks;
    } else if (movement.slug === 'nihilisme') {
      philosopherLinks = movementData.nihilismePhilosopherLinks;
    } else if (movement.slug === 'stoicisme') {
      philosopherLinks = movementData.stoicismePhilosopherLinks;
    } else if (movement.slug === 'phenomenologie') {
      philosopherLinks = movementData.phenomenologiePhilosopherLinks;
    }

    // Create philosopher links
    if (philosopherLinks.length > 0) {
      console.log(`    🔗 Creating ${philosopherLinks.length} philosopher links...`);

      for (const link of philosopherLinks) {
        const philosopherId = philosopherSlugMap.get(link.philosopherSlug);

        if (!philosopherId) {
          console.log(`      ⚠ Philosopher not found: ${link.philosopherSlug}`);
          continue;
        }

        // Upsert movement-philosopher link
        await prisma.movementPhilosopher.upsert({
          where: {
            movementId_philosopherId: {
              movementId: movementRecord.id,
              philosopherId: philosopherId,
            },
          },
          update: {
            role: link.role,
            contribution: link.contribution,
          },
          create: {
            movementId: movementRecord.id,
            philosopherId: philosopherId,
            role: link.role,
            contribution: link.contribution,
          },
        });
      }
    }
  }

  console.log('');

  // Print statistics
  const [movementsCount, linksCount] = await Promise.all([
    prisma.movement.count(),
    prisma.movementPhilosopher.count(),
  ]);

  console.log('╔════════════════════════════════════════╗');
  console.log('║     📊 MOVEMENTS SEEDING COMPLETE 📊    ║');
  console.log('╠════════════════════════════════════════╣');
  console.log(`║ Movements:    ${String(movementsCount).padStart(4)}                    ║`);
  console.log(`║ Philosopher Links: ${String(linksCount).padStart(4)}                    ║`);
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log('✅ Movements seed complete!');
  console.log('💡 Movements and philosopher links are now available in the database');
  console.log('');
}

// Export function for use in main seed
export async function seedMovements() {
  await main();
}

// Run if called directly
main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    pool.end();
  });
