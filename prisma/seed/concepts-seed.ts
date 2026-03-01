/**
 * Concept seeding script
 * Imports and seeds all philosophical concepts from src/data/concepts/
 */

import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as conceptData from '../../src/data/concepts';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

interface ConceptData {
  id: string;
  name: string;
  slug: string;
  category: string;
  definition: string;
  shortDefinition?: string;
  etymology?: any;
  reasoning?: any;
  keyFigures?: any[];
  examples?: any[];
  tags?: string[];
  difficulty?: number;
  importance?: number;
  status?: string;
  philosophicalAnalysis?: any;
  relatedConcepts?: any[];
  relatedMovements?: any[];
  variations?: any[];
  sources?: any[];
  flashcards?: any[];
}

export default async function seedConcepts() {
  console.log('Seeding concepts...');

  // Get all concept exports from the barrel
  const allConcepts = Object.entries(conceptData)
    .filter(([key]) => key !== 'concepts' && key !== 'conceptIds' && !key.endsWith('Import'))
    .map(([key, value]) => {
      // Convert camelCase export name to kebab-case slug
      const slug = key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
      return { ...value as ConceptData, slug };
    });

  let created = 0;
  let updated = 0;
  let errors = 0;

  for (const concept of allConcepts) {
    try {
      // Check if category exists
      const category = await prisma.category.findUnique({
        where: { slug: concept.category },
      });

      if (!category) {
        console.warn(`  ⚠ Category "${concept.category}" not found for concept "${concept.name}"`);
        // Create default category if it doesn't exist
        await prisma.category.upsert({
          where: { slug: concept.category },
          update: {},
          create: {
            slug: concept.category,
            name: concept.category.charAt(0).toUpperCase() + concept.category.slice(1),
            description: `Catégorie pour ${concept.category}`,
            color: '#666666',
          },
        });
      }

      // Upsert concept
      await prisma.concept.upsert({
        where: { slug: concept.slug },
        update: {
          name: concept.name,
          definition: concept.definition,
          shortDefinition: concept.shortDefinition,
          etymology: concept.etymology || {},
          keyAuthors: concept.keyFigures || [],
          examples: concept.examples || [],
          tags: concept.tags || [],
          status: concept.status,
          category: category?.id ? { connect: { id: category.id } } : undefined,
          connections: concept.relatedConcepts || [],
          flashcards: concept.flashcards || [],
        },
        create: {
          id: concept.id,
          slug: concept.slug,
          name: concept.name,
          definition: concept.definition,
          shortDefinition: concept.shortDefinition,
          etymology: concept.etymology || {},
          keyAuthors: concept.keyFigures || [],
          examples: concept.examples || [],
          tags: concept.tags || [],
          status: concept.status,
          category: category?.id ? { connect: { id: category.id } } : undefined,
          connections: concept.relatedConcepts || [],
          flashcards: concept.flashcards || [],
        },
      });

      // TODO: Seed sources and flashcards later
      // Sources require special handling for year parsing and type conversion
      // Skipping for now to focus on getting concepts seeded

      created++;
    } catch (error) {
      console.error(`  ❌ Error seeding concept "${concept.name}":`, error);
      errors++;
    }
  }

  console.log(`  ✓ Seeded ${created} concepts (${updated} updated, ${errors} errors)`);

  // Close pool connection
  await pool.end();
}

// Run if executed directly
if (require.main === module) {
  seedConcepts()
    .then(() => {
      console.log('\n✅ Concepts seeded successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Failed to seed concepts:', error);
      process.exit(1);
    });
}
