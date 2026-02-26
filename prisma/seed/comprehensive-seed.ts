/**
 * Comprehensive Seed Script
 * Imports philosophical categories, concepts, sources, and quotes from data directory
 */

import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as data from '../../src/data/index';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }) as any;

/**
 * Main seeding function
 */
async function main() {
  console.log('🌱 Starting comprehensive seed...\n');

  // Skip cleaning - only add new content
  console.log('📝 Preserving existing data, only adding new content...\n');

  // Get all categories from data
  const categoriesData = [
    data.metaphysique.category,
    data.existentialisme.category,
    // Add more categories as they're created
  ];

  const conceptsData = [
    ...data.metaphysique.concepts,
    ...data.existentialisme.concepts,
    // Add more concepts as they're created
  ];

  console.log(`📚 Found ${categoriesData.length} categories`);
  console.log(`💡 Found ${conceptsData.length} concepts\n`);

  // Create categories
  console.log('📁 Creating categories...');
  const categoryMap = new Map<string, string>();

  for (const catData of categoriesData) {
    const category = await prisma.category.upsert({
      where: { slug: catData.slug },
      update: {},
      create: {
        slug: catData.slug,
        name: catData.name,
        description: catData.description,
        color: catData.color,
        icon: catData.icon,
      },
    });
    categoryMap.set(catData.slug, category.id);
    console.log(`  ✓ ${category.name}`);
  }
  console.log('');

  // Create concepts and related data
  console.log('💡 Creating concepts, sources, and quotes...');

  for (const conceptData of conceptsData) {
    console.log(`  → ${conceptData.name}`);

    // Get category ID
    const categoryId = categoryMap.get(conceptData.category);

    // Create or update concept
    const concept = await prisma.concept.upsert({
      where: { slug: conceptData.slug },
      update: {
        name: conceptData.name,
        definition: conceptData.definition,
        shortDefinition: conceptData.shortDefinition,
        etymology: conceptData.etymology || {},
        variations: conceptData.variations || [],
        keyAuthors: conceptData.keyFigures || [],
        examples: conceptData.examples || [],
        tags: conceptData.tags || [],
        status: conceptData.status || 'published',
        categoryId: categoryId,
      },
      create: {
        slug: conceptData.slug,
        name: conceptData.name,
        definition: conceptData.definition,
        shortDefinition: conceptData.shortDefinition,
        etymology: conceptData.etymology || {},
        variations: conceptData.variations || [],
        keyAuthors: conceptData.keyFigures || [],
        examples: conceptData.examples || [],
        tags: conceptData.tags || [],
        status: conceptData.status || 'published',
        categoryId: categoryId,
      },
    });

    // Create sources and quotes
    if (conceptData.sources && conceptData.sources.length > 0) {
      for (const sourceData of conceptData.sources) {
        // Create source
        const source = await prisma.source.upsert({
          where: {
            slug: `${sourceData.author}-${sourceData.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          },
          update: {},
          create: {
            slug: `${sourceData.author}-${sourceData.title}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            title: sourceData.title,
            author: sourceData.author,
            year: sourceData.year,
            type: sourceData.type,
            description: sourceData.reference,
          },
        });

        // Link source to concept (skip if exists)
        await prisma.conceptSource.upsert({
          where: {
            conceptId_sourceId: {
              conceptId: concept.id,
              sourceId: source.id,
            },
          },
          update: {},
          create: {
            conceptId: concept.id,
            sourceId: source.id,
          },
        });

        // Create quotes
        if (sourceData.quotes && sourceData.quotes.length > 0) {
          for (const quoteText of sourceData.quotes) {
            await prisma.quote.upsert({
              where: {
                slug: `${concept.slug}-${source.id}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              },
              update: {
                text: quoteText,
                sourceId: source.id,
                tags: [concept.name, sourceData.author],
              },
              create: {
                slug: `${concept.slug}-${source.id}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                text: quoteText,
                sourceId: source.id,
                isPublic: true,
                tags: [concept.name, sourceData.author],
              },
            });
          }
        }
      }
    }

    // Create flashcard prompts
    if (conceptData.flashcards && conceptData.flashcards.length > 0) {
      for (const flashcard of conceptData.flashcards) {
        // Map flashcard type to enum values
        let flashcardType: 'BASIC' | 'CLOZE' | 'CONCEPT' | 'QUOTE' | 'ESSAY' = 'BASIC';
        if (flashcard.type === 'CONNECTION') flashcardType = 'CONCEPT';
        else if (flashcard.type === 'QUOTE') flashcardType = 'QUOTE';
        else if (flashcard.type === 'CLOZE') flashcardType = 'CLOZE';
        else if (flashcard.type === 'ESSAY') flashcardType = 'ESSAY';
        else if (flashcard.type === 'CONCEPT') flashcardType = 'CONCEPT';

        await prisma.flashcardPrompt.upsert({
          where: {
            slug: `${concept.slug}-${flashcard.type}-${flashcard.difficulty}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          },
          update: {
            type: flashcardType,
            question: flashcard.front,
            answer: flashcard.back,
            difficulty: flashcard.difficulty,
            tags: [...conceptData.tags, flashcard.type.toLowerCase()],
          },
          create: {
            slug: `${concept.slug}-${flashcard.type}-${flashcard.difficulty}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            conceptId: concept.id,
            type: flashcardType,
            question: flashcard.front,
            answer: flashcard.back,
            difficulty: flashcard.difficulty,
            tags: [...conceptData.tags, flashcard.type.toLowerCase()],
          },
        });
      }
    }

    // Handle related concepts (will be linked in a second pass)
    if (conceptData.relatedConcepts && conceptData.relatedConcepts.length > 0) {
      for (const related of conceptData.relatedConcepts) {
        // Store for later processing
        // We'll process these after all concepts are created
      }
    }
  }

  console.log('');

  // Create concept relations
  console.log('🔗 Creating concept relations...');
  const allConcepts = await prisma.concept.findMany();

  for (const conceptData of conceptsData) {
    const concept = allConcepts.find((c: any) => c.slug === conceptData.slug);
    if (!concept || !conceptData.relatedConcepts) continue;

    for (const relatedData of conceptData.relatedConcepts) {
      const relatedConcept = allConcepts.find((c: any) => c.name === relatedData.name);
      if (!relatedConcept) {
        console.log(`  ⚠ Could not find related concept: ${relatedData.name}`);
        continue;
      }

      // Determine relation type
      let relationType: 'RELATED' | 'OPPOSES' | 'BUILDS_ON' | 'INFLUENCES' | 'CRITIQUES' | 'EXTENDS' | 'CLARIFIES' | 'EXEMPLIFIES' = 'RELATED';
      const relationLower = relatedData.relation.toLowerCase();

      if (relationLower.includes('oppose')) relationType = 'OPPOSES';
      else if (relationLower.includes('construit')) relationType = 'BUILDS_ON';
      else if (relationLower.includes('influence')) relationType = 'INFLUENCES';
      else if (relationLower.includes('critique')) relationType = 'CRITIQUES';
      else if (relationLower.includes('étend')) relationType = 'EXTENDS';
      else if (relationLower.includes('clarifie')) relationType = 'CLARIFIES';
      else if (relationLower.includes('exemple')) relationType = 'EXEMPLIFIES';

      // Create bidirectional relation (skip if exists)
      await prisma.conceptRelation.upsert({
        where: {
          conceptId_relatedConceptId_relationType: {
            conceptId: concept.id,
            relatedConceptId: relatedConcept.id,
            relationType,
          },
        },
        update: {
          description: relatedData.description,
          strength: 2,
        },
        create: {
          conceptId: concept.id,
          relatedConceptId: relatedConcept.id,
          relationType,
          description: relatedData.description,
          strength: 2,
        },
      });
    }
  }

  console.log('');

  // Print statistics
  const [categoriesCount, conceptsCount, sourcesCount, quotesCount, flashcardsCount, relationsCount] =
    await Promise.all([
      prisma.category.count(),
      prisma.concept.count(),
      prisma.source.count(),
      prisma.quote.count(),
      prisma.flashcardPrompt.count(),
      prisma.conceptRelation.count(),
    ]);

  console.log('╔════════════════════════════════════════╗');
  console.log('║     📊 SEEDING COMPLETE 📊               ║');
  console.log('╠════════════════════════════════════════╣');
  console.log(`║ Categories:   ${String(categoriesCount).padStart(4)}                    ║`);
  console.log(`║ Concepts:     ${String(conceptsCount).padStart(4)}                    ║`);
  console.log(`║ Sources:      ${String(sourcesCount).padStart(4)}                    ║`);
  console.log(`║ Quotes:       ${String(quotesCount).padStart(4)}                    ║`);
  console.log(`║ Flashcards:   ${String(flashcardsCount).padStart(4)}                    ║`);
  console.log(`║ Relations:    ${String(relationsCount).padStart(4)}                    ║`);
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log('✅ Seed complete!');
  console.log('💡 Run "npm run dev" to start the development server');
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    pool.end();
  });
