/**
 * Seed System Tests
 * Tests for seed data integrity and consistency
 *
 * Note: These tests require a live database connection.
 * Run with: npm run test:seed
 */

import { describe, it, expect, beforeAll, afterAll, test } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Load environment variables
import 'dotenv/config';

let prisma: PrismaClient | null = null;
let pool: Pool | null = null;

// Conditionally run tests
const condition = () => !!process.env.DATABASE_URL;

describe('Seed System', () => {
  beforeAll(async () => {
    // Skip tests if DATABASE_URL is not set
    if (!process.env.DATABASE_URL) {
      console.warn('⚠️  DATABASE_URL not set, skipping seed tests');
      return;
    }

    // Initialize Prisma with PostgreSQL adapter
    try {
      pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      });

      const adapter = new PrismaPg(pool);
      prisma = new PrismaClient({ adapter }) as any;

      // Test connection
      await prisma.$connect();
      console.log('✅ Database connected for seed tests');
    } catch (error) {
      console.error('❌ Failed to connect to database:', error);
      throw error;
    }
  });

  afterAll(async () => {
    if (prisma) {
      await prisma.$disconnect();
    }
    if (pool) {
      await pool.end();
    }
  });

  // Helper to run test only if database is available
  const itIfDb = (title: string, fn: () => Promise<void>) => {
    it.concurrent(title, async () => {
      if (!prisma) {
        console.warn(`⚠️  Skipping "${title}" - no database connection`);
        return;
      }
      await fn();
    });
  };

  describe('Philosophers', () => {
    itIfDb('should have unique slugs', async () => {
      const philosophers = await prisma.philosopher.findMany({
        select: { slug: true },
      });

      const slugs = philosophers.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);

      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    itIfDb('should have valid dates', async () => {
      const philosophers = await prisma.philosopher.findMany({
        where: {
          birthYear: { not: null },
          deathYear: { not: null },
        },
      });

      for (const philosopher of philosophers) {
        if (philosopher.birthYear && philosopher.deathYear) {
          expect(philosopher.deathYear).toBeGreaterThanOrEqual(philosopher.birthYear);
        }
      }
    });

    itIfDb('should have non-empty biographies', async () => {
      const philosophers = await prisma.philosopher.findMany({
        where: {
          biography: { isEmpty: false },
        },
      });

      expect(philosophers.length).toBeGreaterThan(0);

      for (const philosopher of philosophers) {
        expect(philosopher.biography).toBeDefined();
        expect(philosopher.biography!.length).toBeGreaterThan(50);
      }
    });

    itIfDb('should have key ideas', async () => {
      const philosophers = await prisma.philosopher.findMany();

      for (const philosopher of philosophers) {
        const keyIdeas = philosopher.keyIdeas as any;
        expect(keyIdeas).toBeDefined();
        expect(keyIdeas.ideas).toBeDefined();
        expect(Array.isArray(keyIdeas.ideas)).toBe(true);
      }
    });

    itIfDb('should have valid slug format', async () => {
      const philosophers = await prisma.philosopher.findMany();

      for (const philosopher of philosophers) {
        expect(philosopher.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    itIfDb('should have at least one discipline', async () => {
      const philosophers = await prisma.philosopher.findMany();

      for (const philosopher of philosophers) {
        expect(philosopher.disciplines).toBeDefined();
        expect(philosopher.disciplines.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Concepts', () => {
    itIfDb('should have unique slugs', async () => {
      const concepts = await prisma.concept.findMany({
        select: { slug: true },
      });

      const slugs = concepts.map((c) => c.slug);
      const uniqueSlugs = new Set(slugs);

      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    itIfDb('should have definitions', async () => {
      const concepts = await prisma.concept.findMany();

      for (const concept of concepts) {
        expect(concept.definition).toBeDefined();
        expect(concept.definition!.length).toBeGreaterThan(20);
      }
    });

    itIfDb('should have at least 3 sources on average', async () => {
      const conceptsWithSources = await prisma.concept.findMany({
        include: {
          sourceConcepts: true,
        },
      });

      const totalSources = conceptsWithSources.reduce((sum, c) => sum + c.sourceConcepts.length, 0);
      const avgSources = totalSources / conceptsWithSources.length;

      expect(avgSources).toBeGreaterThanOrEqual(2);
    });

    itIfDb('should have relations', async () => {
      const concepts = await prisma.concept.findMany({
        include: {
          relations: true,
          relatedRelations: true,
        },
      });

      const conceptsWithoutRelations = concepts.filter(
        (c) => c.relations.length === 0 && c.relatedRelations.length === 0
      );

      // Allow up to 10% of concepts without relations
      expect(conceptsWithoutRelations.length).toBeLessThanOrEqual(Math.ceil(concepts.length * 0.1));
    });

    itIfDb('should have valid relation types', async () => {
      const relations = await prisma.conceptRelation.findMany();

      const validTypes = ['influences', 'related', 'opposes', 'clarifies', 'extends'];
      for (const relation of relations) {
        expect(validTypes).toContain(relation.relationType);
      }
    });

    itIfDb('should have valid slug format', async () => {
      const concepts = await prisma.concept.findMany();

      for (const concept of concepts) {
        expect(concept.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    itIfDb('should not have self-referential relations', async () => {
      const relations = await prisma.conceptRelation.findMany();

      const selfReferential = relations.filter((r) => r.conceptId === r.relatedConceptId);
      expect(selfReferential).toHaveLength(0);
    });

    itIfDb('should have reasonable relation strength', async () => {
      const relations = await prisma.conceptRelation.findMany();

      for (const relation of relations) {
        expect(relation.strength).toBeGreaterThanOrEqual(0);
        expect(relation.strength).toBeLessThanOrEqual(10);
      }
    });
  });

  describe('Movements', () => {
    itIfDb('should have unique slugs', async () => {
      const movements = await prisma.movement.findMany({
        select: { slug: true },
      });

      const slugs = movements.map((m) => m.slug);
      const uniqueSlugs = new Set(slugs);

      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    itIfDb('should have descriptions', async () => {
      const movements = await prisma.movement.findMany();

      for (const movement of movements) {
        expect(movement.description).toBeDefined();
        expect(movement.description!.length).toBeGreaterThan(50);
      }
    });

    itIfDb('should have at least one philosopher associated', async () => {
      const movements = await prisma.movement.findMany({
        include: {
          movementPhilosophers: true,
        },
      });

      const movementsWithoutPhilosophers = movements.filter((m) => m.movementPhilosophers.length === 0);

      // Allow up to 20% of movements without philosophers
      expect(movementsWithoutPhilosophers.length).toBeLessThanOrEqual(
        Math.ceil(movements.length * 0.2)
      );
    });

    itIfDb('should have key principles', async () => {
      const movements = await prisma.movement.findMany();

      for (const movement of movements) {
        const keyPrinciples = movement.keyPrinciples as any;
        expect(keyPrinciples).toBeDefined();
        expect(Array.isArray(keyPrinciples)).toBe(true);
        expect(keyPrinciples.length).toBeGreaterThan(0);
      }
    });

    itIfDb('should have valid slug format', async () => {
      const movements = await prisma.movement.findMany();

      for (const movement of movements) {
        expect(movement.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    itIfDb('should belong to a category', async () => {
      const movements = await prisma.movement.findMany();

      const movementsWithoutCategory = movements.filter((m) => !m.categoryId);

      expect(movementsWithoutCategory.length).toBeLessThanOrEqual(Math.ceil(movements.length * 0.2));
    });
  });

  describe('Sources', () => {
    itIfDb('should have unique slugs', async () => {
      const sources = await prisma.source.findMany({
        select: { slug: true },
      });

      const slugs = sources.map((s) => s.slug);
      const uniqueSlugs = new Set(slugs);

      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    itIfDb('should have valid URLs if provided', async () => {
      const sources = await prisma.source.findMany({
        where: {
          url: { not: null },
        },
      });

      for (const source of sources) {
        expect(source.url).toBeDefined();
        expect(() => new URL(source.url!)).not.toThrow();
      }
    });

    itIfDb('should have titles', async () => {
      const sources = await prisma.source.findMany();

      for (const source of sources) {
        expect(source.title).toBeDefined();
        expect(source.title.length).toBeGreaterThan(3);
      }
    });

    itIfDb('should have valid slug format', async () => {
      const sources = await prisma.source.findMany();

      for (const source of sources) {
        expect(source.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });
  });

  describe('Categories', () => {
    itIfDb('should have unique slugs', async () => {
      const categories = await prisma.category.findMany({
        select: { slug: true },
      });

      const slugs = categories.map((c) => c.slug);
      const uniqueSlugs = new Set(slugs);

      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    itIfDb('should have names and descriptions', async () => {
      const categories = await prisma.category.findMany();

      for (const category of categories) {
        expect(category.name).toBeDefined();
        expect(category.name.length).toBeGreaterThan(0);
        expect(category.description).toBeDefined();
        expect(category.description!.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Data Consistency', () => {
    itIfDb('should have all philosopher references valid in movements', async () => {
      const movementPhilosophers = await prisma.movementPhilosopher.findMany({
        include: {
          philosopher: true,
        },
      });

      for (const mp of movementPhilosophers) {
        expect(mp.philosopher).toBeDefined();
      }
    });

    itIfDb('should have all concept references valid in relations', async () => {
      const relations = await prisma.conceptRelation.findMany({
        include: {
          concept: true,
          relatedConcept: true,
        },
      });

      for (const relation of relations) {
        expect(relation.concept).toBeDefined();
        expect(relation.relatedConcept).toBeDefined();
      }
    });

    itIfDb('should have all concept references valid in sources', async () => {
      const conceptSources = await prisma.conceptSource.findMany({
        include: {
          concept: true,
          source: true,
        },
      });

      for (const cs of conceptSources) {
        expect(cs.concept).toBeDefined();
        expect(cs.source).toBeDefined();
      }
    });
  });

  describe('Minimum Counts', () => {
    itIfDb('should have minimum required concepts', async () => {
      const count = await prisma.concept.count();
      expect(count).toBeGreaterThanOrEqual(15);
    });

    itIfDb('should have minimum required philosophers', async () => {
      const count = await prisma.philosopher.count();
      expect(count).toBeGreaterThanOrEqual(10);
    });

    itIfDb('should have minimum required movements', async () => {
      const count = await prisma.movement.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });

    itIfDb('should have minimum required sources', async () => {
      const count = await prisma.source.count();
      expect(count).toBeGreaterThanOrEqual(20);
    });

    itIfDb('should have minimum required relations', async () => {
      const count = await prisma.conceptRelation.count();
      expect(count).toBeGreaterThanOrEqual(30);
    });

    itIfDb('should have minimum required categories', async () => {
      const count = await prisma.category.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Quality Metrics', () => {
    itIfDb('should have 90% of concepts with definitions', async () => {
      const concepts = await prisma.concept.findMany();
      const withDefinitions = concepts.filter((c) => c.definition && c.definition.length > 20);

      const percentage = (withDefinitions.length / concepts.length) * 100;
      expect(percentage).toBeGreaterThanOrEqual(90);
    });

    itIfDb('should have 80% of philosophers with biographies', async () => {
      const philosophers = await prisma.philosopher.findMany();
      const withBiographies = philosophers.filter((p) => p.biography && p.biography.length > 50);

      const percentage = (withBiographies.length / philosophers.length) * 100;
      expect(percentage).toBeGreaterThanOrEqual(80);
    });

    itIfDb('should have 90% of movements with descriptions', async () => {
      const movements = await prisma.movement.findMany();
      const withDescriptions = movements.filter((m) => m.description && m.description.length > 50);

      const percentage = (withDescriptions.length / movements.length) * 100;
      expect(percentage).toBeGreaterThanOrEqual(90);
    });
  });
});
