/**
 * Concept Relations Seed
 *
 * Ce script crée les relations entre concepts dans la base de données.
 * Il utilise les données du réseau conceptuel défini dans src/lib/concept-network/network.ts
 */

import 'dotenv/config';
import { PrismaClient, RelationType } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { conceptNetwork } from '../../src/lib/concept-network/network';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * Map les types de relations du réseau vers les enum Prisma
 */
function mapRelationType(
  type: string
): RelationType {
  switch (type) {
    case 'RELATED':
      return 'RELATED';
    case 'OPPOSES':
      return 'OPPOSES';
    case 'BUILDS_ON':
      return 'BUILDS_ON';
    case 'INFLUENCES':
      return 'INFLUENCES';
    case 'CRITIQUES':
      return 'CRITIQUES';
    case 'EXTENDS':
      return 'EXTENDS';
    case 'CLARIFIES':
      return 'CLARIFIES';
    case 'EXEMPLIFIES':
      return 'EXEMPLIFIES';
    default:
      return 'RELATED';
  }
}

/**
 * Crée les relations entre concepts
 */
export async function seedConceptRelations() {
  console.log('🔄 Seeding concept relations...');

  // Récupérer tous les concepts existants
  const concepts = await prisma.concept.findMany({
    select: {
      id: true,
      slug: true,
      name: true
    }
  });

  const conceptSlugToId = new Map<string, string>();
  concepts.forEach(concept => {
    conceptSlugToId.set(concept.slug, concept.id);
  });

  console.log(`📊 Found ${concepts.length} concepts in database`);

  // Créer les relations
  let createdCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const connection of conceptNetwork) {
    const fromId = conceptSlugToId.get(connection.from);
    const toId = conceptSlugToId.get(connection.to);

    // Skip si un des concepts n'existe pas
    if (!fromId || !toId) {
      skippedCount++;
      console.debug(`⏭️  Skipped: ${connection.from} → ${connection.to} (concept not found)`);
      continue;
    }

    // Skip si c'est le même concept
    if (fromId === toId) {
      skippedCount++;
      console.debug(`⏭️  Skipped: ${connection.from} → ${connection.to} (same concept)`);
      continue;
    }

    try {
      // Vérifier si la relation existe déjà
      const existing = await prisma.conceptRelation.findUnique({
        where: {
          conceptId_relatedConceptId_relationType: {
            conceptId: fromId,
            relatedConceptId: toId,
            relationType: mapRelationType(connection.type)
          }
        }
      });

      if (existing) {
        skippedCount++;
        console.debug(`⏭️  Already exists: ${connection.from} → ${connection.to} (${connection.type})`);
        continue;
      }

      // Créer la relation
      await prisma.conceptRelation.create({
        data: {
          conceptId: fromId,
          relatedConceptId: toId,
          relationType: mapRelationType(connection.type),
          description: connection.description,
          strength: connection.strength
        }
      });

      createdCount++;
      console.log(`✅ Created: ${connection.from} → ${connection.to} (${connection.type}, strength: ${connection.strength})`);
    } catch (error) {
      errorCount++;
      console.error(`❌ Error creating relation ${connection.from} → ${connection.to}:`, error);
    }
  }

  console.log('\n📊 Summary:');
  console.log(`✅ Created: ${createdCount} relations`);
  console.log(`⏭️  Skipped: ${skippedCount} relations`);
  console.log(`❌ Errors: ${errorCount} relations`);
  console.log(`📈 Total in network: ${conceptNetwork.length} relations`);
}

/**
 * Supprime toutes les relations de concepts
 */
export async function clearConceptRelations() {
  console.log('🗑️  Clearing concept relations...');

  const deleted = await prisma.conceptRelation.deleteMany({});

  console.log(`✅ Deleted ${deleted.count} concept relations`);
}

/**
 * Affiche les statistiques des relations dans la base de données
 */
export async function showRelationStats() {
  console.log('\n📊 Concept Relations Statistics:\n');

  // Nombre total de relations
  const totalRelations = await prisma.conceptRelation.count();
  console.log(`Total relations: ${totalRelations}`);

  // Distribution par type
  const relationTypes = await prisma.conceptRelation.groupBy({
    by: ['relationType'],
    _count: {
      relationType: true
    },
    orderBy: {
      _count: {
        relationType: 'desc'
      }
    }
  });

  console.log('\nDistribution by type:');
  relationTypes.forEach(({ relationType, _count }) => {
    console.log(`  ${relationType}: ${_count.relationType}`);
  });

  // Distribution par force
  const strengthDistribution = await prisma.conceptRelation.groupBy({
    by: ['strength'],
    _count: {
      strength: true
    },
    orderBy: {
      strength: 'asc'
    }
  });

  console.log('\nDistribution by strength:');
  strengthDistribution.forEach(({ strength, _count }) => {
    console.log(`  Strength ${strength}: ${_count.strength}`);
  });

  // Concepts les plus connectés
  const topConnected = await prisma.concept.findMany({
    select: {
      slug: true,
      name: true,
      _count: {
        select: {
          relations: true,
          relatedRelations: true
        }
      }
    },
    orderBy: {
      relations: {
        _count: 'desc'
      }
    },
    take: 10
  });

  console.log('\nTop 10 most connected concepts:');
  topConnected.forEach((concept, index) => {
    const totalConnections = concept._count.relations + concept._count.relatedRelations;
    console.log(`  ${index + 1}. ${concept.name} (${concept.slug}): ${totalConnections} connections`);
  });
}

// ============================================
// MAIN
// ============================================

if (require.main === module) {
  (async () => {
    try {
      // Afficher les stats avant
      await showRelationStats();

      // Clear et recreate si demandé
      const args = process.argv.slice(2);
      if (args.includes('--clear')) {
        await clearConceptRelations();
      }

      // Créer les relations
      await seedConceptRelations();

      // Afficher les stats après
      await showRelationStats();
    } catch (error) {
      console.error('❌ Error seeding concept relations:', error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  })();
}
