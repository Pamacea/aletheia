/**
 * Obsidian Vault Seed Script
 * Imports all philosophical content from Obsidian Vault to PostgreSQL
 */

import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  scanObsidianVault,
  parseConcept,
  parsePhilosopher,
  parseMovement,
  parseCitation,
  extractWikiLinks
} from '../lib/obsidian-parser';
import { slugify as slugifyLib } from '../lib/slugify';

// Load environment variables
config();

const VAULT_PATH = 'C:/Users/Yanis/Vault/!Etudes philosophiques';

// Database connection
const pool = new Pool({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// ============================================================================
// MAIN SEED FUNCTION
// ============================================================================

async function main() {
  console.log('🌱 Starting Obsidian Vault import...\n');

  // Scan the vault
  console.log(`📁 Scanning vault: ${VAULT_PATH}`);
  const { concepts, philosophers, movements, citations, unknown } = scanObsidianVault(VAULT_PATH);

  console.log(`\n📊 Found files:`);
  console.log(`   - Concepts: ${concepts.length}`);
  console.log(`   - Philosophers: ${philosophers.length}`);
  console.log(`   - Movements: ${movements.length}`);
  console.log(`   - Citations: ${citations.length}`);
  console.log(`   - Unknown: ${unknown.length}\n`);

  // Track statistics
  const stats = {
    concepts: { created: 0, updated: 0, errors: 0 },
    philosophers: { created: 0, updated: 0, errors: 0 },
    movements: { created: 0, updated: 0, errors: 0 },
    citations: { created: 0, updated: 0, errors: 0 },
    relations: { created: 0 }
  };

  // Create lookup maps
  const philosopherMap = new Map<string, string>(); // name -> id
  const movementMap = new Map<string, string>(); // name -> id
  const conceptMap = new Map<string, string>(); // slug -> id
  const sourceMap = new Map<string, string>(); // title-author -> id

  // ============================================================================
  // STEP 1: Import Philosophers
  // ============================================================================

  console.log('👤 Importing Philosophers...\n');

  for (const file of philosophers) {
    try {
      const philosopher = parsePhilosopher(file.path, VAULT_PATH);

      // Check if philosopher exists
      const existing = await prisma.philosopher.findFirst({
        where: { slug: philosopher.slug }
      });

      let philosopherId: string;

      if (existing) {
        // Update
        philosopherId = existing.id;
        const philosopherData: any = {
          name: philosopher.name,
          mainMovements: philosopher.mainMovements,
          disciplines: philosopher.disciplines,
          metadata: {
            wikiLinks: philosopher.wikiLinks,
            works: philosopher.works,
            citations: philosopher.citations,
            tags: philosopher.tags
          }
        };

        if (philosopher.fullName !== undefined) philosopherData.fullName = philosopher.fullName;
        if (philosopher.dates !== undefined) philosopherData.dates = philosopher.dates;
        if (philosopher.birthYear !== undefined) philosopherData.birthYear = philosopher.birthYear;
        if (philosopher.deathYear !== undefined) philosopherData.deathYear = philosopher.deathYear;
        if (philosopher.nationality !== undefined) philosopherData.nationality = philosopher.nationality;
        if (philosopher.century !== undefined) philosopherData.century = philosopher.century;
        if (philosopher.biography !== undefined) philosopherData.biography = philosopher.biography;
        if (philosopher.keyIdeas !== undefined) philosopherData.keyIdeas = philosopher.keyIdeas;
        if (philosopher.influences !== undefined) philosopherData.influences = philosopher.influences;

        await prisma.philosopher.update({
          where: { id: philosopherId },
          data: philosopherData
        });
        stats.philosophers.updated++;
        console.log(`   ✓ Updated: ${philosopher.name}`);
      } else {
        // Create
        const philosopherData: any = {
          slug: philosopher.slug,
          name: philosopher.name,
          mainMovements: philosopher.mainMovements,
          disciplines: philosopher.disciplines,
          metadata: {
            wikiLinks: philosopher.wikiLinks,
            works: philosopher.works,
            citations: philosopher.citations,
            tags: philosopher.tags
          }
        };

        if (philosopher.fullName !== undefined) philosopherData.fullName = philosopher.fullName;
        if (philosopher.dates !== undefined) philosopherData.dates = philosopher.dates;
        if (philosopher.birthYear !== undefined) philosopherData.birthYear = philosopher.birthYear;
        if (philosopher.deathYear !== undefined) philosopherData.deathYear = philosopher.deathYear;
        if (philosopher.nationality !== undefined) philosopherData.nationality = philosopher.nationality;
        if (philosopher.century !== undefined) philosopherData.century = philosopher.century;
        if (philosopher.biography !== undefined) philosopherData.biography = philosopher.biography;
        if (philosopher.keyIdeas !== undefined) philosopherData.keyIdeas = philosopher.keyIdeas;
        if (philosopher.influences !== undefined) philosopherData.influences = philosopher.influences;

        const created = await prisma.philosopher.create({
          data: philosopherData
        });
        philosopherId = created.id;
        stats.philosophers.created++;
        console.log(`   ✓ Created: ${philosopher.name}`);
      }

      philosopherMap.set(philosopher.slug, philosopherId);
      philosopherMap.set(philosopher.name, philosopherId);
    } catch (error) {
      stats.philosophers.errors++;
      console.error(`   ✗ Error importing philosopher from ${file.path}:`, error);
    }
  }

  console.log(`\n   Philosophers: ${stats.philosophers.created} created, ${stats.philosophers.updated} updated, ${stats.philosophers.errors} errors\n`);

  // ============================================================================
  // STEP 2: Import Movements
  // ============================================================================

  console.log('🌊 Importing Movements...\n');

  for (const file of movements) {
    try {
      const movement = parseMovement(file.path, VAULT_PATH);

      // Find or create category if specified
      let categoryId: string | undefined;
      if (movement.category) {
        const categorySlug = slugifyLib(movement.category);
        const category = await prisma.category.upsert({
          where: { slug: categorySlug },
          update: {},
          create: {
            slug: categorySlug,
            name: movement.category,
            description: `Category for ${movement.category}`,
            color: null,
            icon: null
          }
        });
        categoryId = category.id;
      }

      // Check if movement exists
      const existing = await prisma.movement.findFirst({
        where: { slug: movement.slug }
      });

      let movementId: string;

      if (existing) {
        // Update
        movementId = existing.id;
        const movementData: any = {
          name: movement.name,
          keyPhilosophers: movement.keyPhilosophers,
          keyConcepts: movement.keyConcepts,
          metadata: {
            wikiLinks: movement.wikiLinks,
            tags: movement.tags
          }
        };

        if (movement.description !== undefined) movementData.description = movement.description;
        if (movement.shortDefinition !== undefined) movementData.shortDefinition = movement.shortDefinition;
        if (movement.period !== undefined) movementData.period = movement.period;
        if (movement.origins !== undefined) movementData.origins = movement.origins;
        if (movement.keyPrinciples !== undefined) movementData.keyPrinciples = movement.keyPrinciples;
        if (movement.variations !== undefined) movementData.variations = movement.variations;
        if (movement.criticisms !== undefined) movementData.criticisms = movement.criticisms;
        if (movement.influence !== undefined) movementData.influence = movement.influence;
        if (categoryId !== undefined) movementData.categoryId = categoryId;

        await prisma.movement.update({
          where: { id: movementId },
          data: movementData
        });
        stats.movements.updated++;
        console.log(`   ✓ Updated: ${movement.name}`);
      } else {
        // Create
        const movementData: any = {
          slug: movement.slug,
          name: movement.name,
          keyPhilosophers: movement.keyPhilosophers,
          keyConcepts: movement.keyConcepts,
          metadata: {
            wikiLinks: movement.wikiLinks,
            tags: movement.tags
          }
        };

        if (movement.description !== undefined) movementData.description = movement.description;
        if (movement.shortDefinition !== undefined) movementData.shortDefinition = movement.shortDefinition;
        if (movement.period !== undefined) movementData.period = movement.period;
        if (movement.origins !== undefined) movementData.origins = movement.origins;
        if (movement.keyPrinciples !== undefined) movementData.keyPrinciples = movement.keyPrinciples;
        if (movement.variations !== undefined) movementData.variations = movement.variations;
        if (movement.criticisms !== undefined) movementData.criticisms = movement.criticisms;
        if (movement.influence !== undefined) movementData.influence = movement.influence;
        if (categoryId !== undefined) movementData.categoryId = categoryId;

        const created = await prisma.movement.create({
          data: movementData
        });
        movementId = created.id;
        stats.movements.created++;
        console.log(`   ✓ Created: ${movement.name}`);
      }

      movementMap.set(movement.slug, movementId);
      movementMap.set(movement.name, movementId);
    } catch (error) {
      stats.movements.errors++;
      console.error(`   ✗ Error importing movement from ${file.path}:`, error);
    }
  }

  console.log(`\n   Movements: ${stats.movements.created} created, ${stats.movements.updated} updated, ${stats.movements.errors} errors\n`);

  // ============================================================================
  // STEP 3: Link Philosophers to Movements
  // ============================================================================

  console.log('🔗 Linking Philosophers to Movements...\n');

  for (const file of movements) {
    try {
      const movement = parseMovement(file.path, VAULT_PATH);
      const movementId = movementMap.get(movement.slug);

      if (!movementId) continue;

      for (const philosopherName of movement.keyPhilosophers) {
        const philosopherId = philosopherMap.get(philosopherName);
        if (!philosopherId) {
          console.log(`   ⚠️  Philosopher not found: "${philosopherName}"`);
          continue;
        }

        // Create relationship if it doesn't exist
        await prisma.movementPhilosopher.upsert({
          where: {
            movementId_philosopherId: {
              movementId,
              philosopherId
            }
          },
          update: {},
          create: {
            movementId,
            philosopherId,
            role: 'key-figure'
          }
        });
        stats.relations.created++;
      }
    } catch (error) {
      console.error(`   ✗ Error linking movement:`, error);
    }
  }

  console.log(`   ✓ ${stats.relations.created} philosopher-movement relations created\n`);

  // ============================================================================
  // STEP 4: Import Concepts
  // ============================================================================

  console.log('💡 Importing Concepts...\n');

  for (const file of concepts) {
    try {
      const concept = parseConcept(file.path, VAULT_PATH);

      // Find or create category if specified
      let categoryId: string | undefined;
      if (concept.category) {
        const categorySlug = slugifyLib(concept.category);
        const category = await prisma.category.upsert({
          where: { slug: categorySlug },
          update: {},
          create: {
            slug: categorySlug,
            name: concept.category,
            description: `Category for ${concept.category}`,
            color: null,
            icon: null
          }
        });
        categoryId = category.id;
      }

      // Check if concept exists
      const existing = await prisma.concept.findFirst({
        where: { slug: concept.slug }
      });

      let conceptId: string;

      if (existing) {
        // Update - build data object conditionally
        conceptId = existing.id;
        const conceptData: any = {
          name: concept.name,
          tags: concept.tags
        };

        // Only include defined optional fields
        if (concept.definition !== undefined) conceptData.definition = concept.definition;
        if (concept.shortDefinition !== undefined) conceptData.shortDefinition = concept.shortDefinition;
        if (concept.etymology !== undefined) conceptData.etymology = concept.etymology;
        if (concept.keyAuthors !== undefined) conceptData.keyAuthors = concept.keyAuthors;
        if (concept.examples !== undefined) conceptData.examples = concept.examples;
        if (concept.variations !== undefined) conceptData.variations = concept.variations;
        if (concept.status !== undefined) conceptData.status = concept.status;
        if (categoryId !== undefined) conceptData.categoryId = categoryId;

        // Handle connections - merge existing connections with wikiLinks
        if (concept.connections !== undefined || concept.wikiLinks.length > 0) {
          const mergedConnections: any = concept.connections || {};
          if (concept.wikiLinks.length > 0) {
            mergedConnections.wikiLinks = concept.wikiLinks;
          }
          conceptData.connections = mergedConnections;
        }

        // Handle flashcards
        if (concept.flashcards !== undefined) {
          conceptData.flashcards = concept.flashcards;
        }

        await prisma.concept.update({
          where: { id: conceptId },
          data: conceptData
        });
        stats.concepts.updated++;
        console.log(`   ✓ Updated: ${concept.name}`);
      } else {
        // Create - build data object conditionally
        const conceptData: any = {
          slug: concept.slug,
          name: concept.name,
          tags: concept.tags
        };

        // Only include defined optional fields
        if (concept.definition !== undefined) conceptData.definition = concept.definition;
        if (concept.shortDefinition !== undefined) conceptData.shortDefinition = concept.shortDefinition;
        if (concept.etymology !== undefined) conceptData.etymology = concept.etymology;
        if (concept.keyAuthors !== undefined) conceptData.keyAuthors = concept.keyAuthors;
        if (concept.examples !== undefined) conceptData.examples = concept.examples;
        if (concept.variations !== undefined) conceptData.variations = concept.variations;
        if (concept.status !== undefined) conceptData.status = concept.status;
        if (categoryId !== undefined) conceptData.categoryId = categoryId;

        // Handle connections - merge existing connections with wikiLinks
        if (concept.connections !== undefined || concept.wikiLinks.length > 0) {
          const mergedConnections: any = concept.connections || {};
          if (concept.wikiLinks.length > 0) {
            mergedConnections.wikiLinks = concept.wikiLinks;
          }
          conceptData.connections = mergedConnections;
        }

        // Handle flashcards
        if (concept.flashcards !== undefined) {
          conceptData.flashcards = concept.flashcards;
        }

        const created = await prisma.concept.create({
          data: conceptData
        });
        conceptId = created.id;
        stats.concepts.created++;
        console.log(`   ✓ Created: ${concept.name}`);
      }

      conceptMap.set(concept.slug, conceptId);
    } catch (error) {
      stats.concepts.errors++;
      console.error(`   ✗ Error importing concept from ${file.path}:`, error);
    }
  }

  console.log(`\n   Concepts: ${stats.concepts.created} created, ${stats.concepts.updated} updated, ${stats.concepts.errors} errors\n`);

  // ============================================================================
  // STEP 5: Import Citations
  // ============================================================================

  console.log('💬 Importing Citations...\n');

  for (const file of citations) {
    try {
      const citation = parseCitation(file.path, VAULT_PATH);

      // Find philosopher by name
      const philosopherId = philosopherMap.get(citation.author);

      // Find or create source
      let sourceId: string | undefined;
      if (citation.source) {
        const sourceSlug = slugifyLib(`${citation.author}-${citation.source}`);

        const existingSource = await prisma.source.findFirst({
          where: { slug: sourceSlug }
        });

        if (existingSource) {
          sourceId = existingSource.id;
        } else {
          const createdSource = await prisma.source.create({
            data: {
              slug: sourceSlug,
              title: citation.source,
              author: citation.author,
              type: 'BOOK',
              description: `Source for citation: ${citation.text.substring(0, 100)}...`,
              metadata: {
                citationAuthor: citation.author
              }
            }
          });
          sourceId = createdSource.id;
        }

        sourceMap.set(`${citation.author}-${citation.source}`, sourceId);
      }

      // Check if citation exists
      const existing = await prisma.quote.findFirst({
        where: { slug: citation.slug }
      });

      if (existing) {
        // Update
        await prisma.quote.update({
          where: { id: existing.id },
          data: {
            text: citation.text,
            context: citation.context,
            tags: citation.tags,
            sourceId,
            philosopherId
          }
        });
        stats.citations.updated++;
        console.log(`   ✓ Updated citation: ${citation.text.substring(0, 50)}...`);
      } else {
        // Create
        await prisma.quote.create({
          data: {
            slug: citation.slug,
            text: citation.text,
            context: citation.context,
            tags: citation.tags,
            sourceId,
            philosopherId,
            isPublic: true
          }
        });
        stats.citations.created++;
        console.log(`   ✓ Created citation: ${citation.text.substring(0, 50)}...`);
      }
    } catch (error) {
      stats.citations.errors++;
      console.error(`   ✗ Error importing citation from ${file.path}:`, error);
    }
  }

  console.log(`\n   Citations: ${stats.citations.created} created, ${stats.citations.updated} updated, ${stats.citations.errors} errors\n`);

  // ============================================================================
  // SUMMARY
  // ============================================================================

  console.log('✅ Import complete!\n');
  console.log('📊 Summary:');
  console.log(`   Philosophers: ${stats.philosophers.created} created, ${stats.philosophers.updated} updated, ${stats.philosophers.errors} errors`);
  console.log(`   Movements: ${stats.movements.created} created, ${stats.movements.updated} updated, ${stats.movements.errors} errors`);
  console.log(`   Concepts: ${stats.concepts.created} created, ${stats.concepts.updated} updated, ${stats.concepts.errors} errors`);
  console.log(`   Citations: ${stats.citations.created} created, ${stats.citations.updated} updated, ${stats.citations.errors} errors`);
  console.log(`   Relations: ${stats.relations.created} created`);
}

// ============================================================================
// RUN SEED
// ============================================================================

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('\n🎉 Database seeded successfully from Obsidian Vault!');
  })
  .catch(async (e) => {
    console.error('\n❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
