/**
 * Sources Seed Script
 * Seeds philosophical sources (books, articles, etc.) and links them to concepts
 */

import 'dotenv/config';
import { PrismaClient, SourceType } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { readdir } from 'fs/promises';
import { join } from 'path';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
}).$extends({
  query: {
    $allOperations({ operation, model, args, query }) {
      console.log(`[Prisma] ${model}.${operation}`);
      return query(args);
    },
  },
});

/**
 * Type definition for source data in concept files
 */
interface ConceptSource {
  title: string;
  author: string;
  year: number | string;
  type: string;
  reference: string;
  quotes: string[];
}

interface ConceptData {
  slug: string;
  sources?: ConceptSource[];
}

/**
 * Generate a unique slug for a source
 */
function generateSourceSlug(source: ConceptSource): string {
  const { author, title } = source;
  const authorSlug = author
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, ''); // Trim dashes

  const titleSlug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit title length

  return `${authorSlug}-${titleSlug}`;
}

/**
 * Normalize year to number or null
 * Handles BC years (negative) and string years
 */
function normalizeYear(year: number | string): number | null {
  if (typeof year === 'number') {
    return year;
  }

  if (typeof year === 'string') {
    // Handle BC years (e.g., "390 av. J.-C.")
    if (year.toLowerCase().includes('av. j.-c.') || year.toLowerCase().includes('bc')) {
      const num = parseInt(year.replace(/[^0-9-]/g, ''));
      return num ? -num : null;
    }

    // Handle approximate years (e.g., "c. 1850")
    const num = parseInt(year.replace(/[^0-9-]/g, ''));
    return num || null;
  }

  return null;
}

/**
 * Map source type from concept data to Prisma SourceType
 */
function mapSourceType(type: string): SourceType {
  const typeMap: Record<string, SourceType> = {
    'BOOK': 'BOOK',
    'ARTICLE': 'ARTICLE',
    'VIDEO': 'VIDEO',
    'PODCAST': 'PODCAST',
    'WEBSITE': 'WEBSITE',
    'COURSE': 'COURSE',
    'OTHER': 'OTHER',
    'POEM': 'POEM',
    'TEXT': 'TEXT',
    'PLAY': 'TEXT', // Plays are mapped to TEXT
    'ESSAY': 'ARTICLE', // Essays are mapped to ARTICLE
    'TREATISE': 'BOOK', // Treatises are mapped to BOOK
    'DIALOGUE': 'BOOK', // Dialogues are mapped to BOOK
    'MANIFESTO': 'BOOK', // Manifestos are mapped to BOOK
  };

  const upperType = type.toUpperCase();
  return typeMap[upperType] || 'BOOK';
}

/**
 * Clean quotes by removing markdown formatting and extra whitespace
 */
function cleanQuotes(quotes: string[]): string[] {
  return quotes.map(quote => {
    return quote
      .replace(/^[\s*_\-«"']+/g, '') // Remove leading markdown/quotes
      .replace(/[\s*_\-»"']+$/g, '') // Remove trailing markdown/quotes
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  }).filter(quote => quote.length > 0); // Remove empty quotes
}

/**
 * Load all concept data files
 */
async function loadAllConcepts(): Promise<ConceptData[]> {
  const conceptsDir = join(process.cwd(), 'src', 'data', 'concepts');
  const files = await readdir(conceptsDir);
  const conceptFiles = files.filter(f => f.endsWith('.ts') && f !== 'index.ts');

  const concepts: ConceptData[] = [];

  for (const file of conceptFiles) {
    try {
      const filePath = join(conceptsDir, file);
      // Dynamic import to get concept data
      const module = await import(filePath);
      if (module.concept?.sources && Array.isArray(module.concept.sources)) {
        concepts.push({
          slug: module.concept.slug,
          sources: module.concept.sources
        });
      }
    } catch (error) {
      console.warn(`  ⚠️  Failed to load concept from ${file}:`, error.message);
    }
  }

  return concepts;
}

/**
 * Seed sources from concept data
 */
async function seedSources() {
  console.log('\n📚 Seeding sources from concepts...\n');

  // Load all concepts with sources
  const allConcepts = await loadAllConcepts();
  console.log(`  📖 Found ${allConcepts.length} concepts with sources\n`);

  let sourcesCreated = 0;
  let sourcesUpdated = 0;
  let linksCreated = 0;
  let sourcesSkipped = 0;

  // Process each concept
  for (const conceptData of allConcepts) {
    if (!conceptData.sources || conceptData.sources.length === 0) {
      continue;
    }

    // Find the concept in the database
    const concept = await prisma.concept.findUnique({
      where: { slug: conceptData.slug }
    });

    if (!concept) {
      console.warn(`  ⚠️  Concept "${conceptData.slug}" not found in database, skipping sources`);
      sourcesSkipped += conceptData.sources.length;
      continue;
    }

    console.log(`  📝 Processing sources for "${concept.name}" (${conceptData.sources.length} sources)`);

    // Process each source for this concept
    for (const sourceData of conceptData.sources) {
      const sourceSlug = generateSourceSlug(sourceData);
      const year = normalizeYear(sourceData.year);
      const type = mapSourceType(sourceData.type);
      const cleanedQuotes = cleanQuotes(sourceData.quotes);

      try {
        // Upsert source
        const source = await prisma.source.upsert({
          where: { slug: sourceSlug },
          create: {
            slug: sourceSlug,
            title: sourceData.title,
            author: sourceData.author,
            year,
            type,
            description: sourceData.reference,
            metadata: {
              quotes: cleanedQuotes,
              originalType: sourceData.type
            }
          },
          update: {
            // Update metadata if source exists
            metadata: {
              quotes: cleanedQuotes,
              originalType: sourceData.type
            }
          }
        });

        if (source.createdAt.getTime() === source.updatedAt.getTime()) {
          sourcesCreated++;
          console.log(`    ✅ Created: "${sourceData.title}" by ${sourceData.author}`);
        } else {
          sourcesUpdated++;
          console.log(`    🔄 Updated: "${sourceData.title}" by ${sourceData.author}`);
        }

        // Create concept-source link
        await prisma.conceptSource.upsert({
          where: {
            conceptId_sourceId: {
              conceptId: concept.id,
              sourceId: source.id
            }
          },
          create: {
            conceptId: concept.id,
            sourceId: source.id
          },
          update: {}
        });

        linksCreated++;
        console.log(`      🔗 Linked to concept "${concept.name}"`);

      } catch (error) {
        console.error(`    ❌ Error processing source "${sourceData.title}":`, error.message);
        sourcesSkipped++;
      }
    }

    console.log('');
  }

  // Print statistics
  console.log('\n' + '='.repeat(60));
  console.log('📊 SEEDING STATISTICS');
  console.log('='.repeat(60));
  console.log(`  ✅ Sources created:  ${sourcesCreated}`);
  console.log(`  🔄 Sources updated:  ${sourcesUpdated}`);
  console.log(`  🔗 Links created:    ${linksCreated}`);
  console.log(`  ⚠️  Sources skipped:  ${sourcesSkipped}`);
  console.log(`  📦 Total sources:   ${sourcesCreated + sourcesUpdated}`);
  console.log('='.repeat(60) + '\n');

  return {
    sourcesCreated,
    sourcesUpdated,
    linksCreated,
    sourcesSkipped
  };
}

/**
 * Main seeding function
 */
async function main() {
  try {
    const stats = await seedSources();

    console.log('✅ Sources seeding completed successfully!\n');

    // Additional stats
    const totalSources = await prisma.source.count();
    const totalLinks = await prisma.conceptSource.count();
    const sourcesByType = await prisma.source.groupBy({
      by: ['type'],
      _count: true
    });

    console.log('📈 DATABASE STATISTICS');
    console.log('─'.repeat(60));
    console.log(`  Total sources in DB: ${totalSources}`);
    console.log(`  Total concept-source links: ${totalLinks}`);
    console.log('\n  Sources by type:');
    sourcesByType.forEach(({ type, _count }) => {
      console.log(`    • ${type.toLowerCase()}: ${_count}`);
    });
    console.log('─'.repeat(60) + '\n');

  } catch (error) {
    console.error('\n❌ Sources seeding failed:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run seeding if called directly
if (require.main === module) {
  main();
}

export { seedSources, generateSourceSlug, normalizeYear, mapSourceType };
