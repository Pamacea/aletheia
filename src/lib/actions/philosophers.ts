'use server';

import { prisma } from '@/lib/db/prisma';
import type { SourceType } from '@/types';

// ============================================================================
// TYPES FOR PHILOSOPHERS
// ============================================================================

export interface PhilosopherWork {
  title: string;
  year: number | null;
  type: SourceType;
}

export interface Philosopher {
  id: string;
  slug: string;
  name: string;
  fullName: string | null;
  dates: string | null;
  birthYear: number | null;
  deathYear: number | null;
  nationality: string | null;
  century: string | null;
  biography: string | null;
  mainMovements: string[];
  disciplines: string[];
  keyIdeas: unknown | null;
  influences: unknown | null;
  legacy: unknown | null;
  metadata: unknown | null;
  // Derived fields from old system (kept for compatibility)
  works: PhilosopherWork[];
  categories: string[];
  periods: string[];
  quoteCount: number;
  movements?: MovementRelation[];
}

export interface MovementRelation {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  period: string | null;
  role?: string | null;
}

// ============================================================================
// SERVER ACTIONS - PHILOSOPHERS
// ============================================================================

/**
 * Get all philosophers from the Philosopher model
 */
export async function getPhilosophers(): Promise<Philosopher[]> {
  const philosophers = await prisma.philosopher.findMany({
    orderBy: {
      name: 'asc',
    },
    include: {
      movementPhilosophers: {
        include: {
          movement: {
            select: {
              id: true,
              slug: true,
              name: true,
              shortDefinition: true,
              period: true,
            },
          },
        },
      },
    },
  });

  // Get quote counts for each philosopher
  const philosopherIds = philosophers.map(p => p.id);
  const quoteCounts = await prisma.quote.groupBy({
    by: ['philosopherId'],
    where: {
      philosopherId: { in: philosopherIds },
      isPublic: true,
    },
    _count: {
      id: true,
    },
  });

  const countMap = new Map(
    quoteCounts.map(q => [q.philosopherId, q._count.id])
  );

  // Get works from sources for each philosopher
  const worksByPhilosopher = await prisma.source.findMany({
    where: {
      author: { in: philosophers.map(p => p.name) },
    },
    select: {
      author: true,
      title: true,
      year: true,
      type: true,
    },
  });

  // Group works by philosopher
  const worksMap = new Map<string, PhilosopherWork[]>();
  for (const work of worksByPhilosopher) {
    if (!worksMap.has(work.author!)) {
      worksMap.set(work.author!, []);
    }
    worksMap.get(work.author!)!.push({
      title: work.title,
      year: work.year,
      type: work.type as SourceType,
    });
  }

  return philosophers.map(philosopher => ({
    id: philosopher.id,
    slug: philosopher.slug,
    name: philosopher.name,
    fullName: philosopher.fullName,
    dates: philosopher.dates,
    birthYear: philosopher.birthYear,
    deathYear: philosopher.deathYear,
    nationality: philosopher.nationality,
    century: philosopher.century,
    biography: philosopher.biography,
    mainMovements: philosopher.mainMovements,
    disciplines: philosopher.disciplines,
    keyIdeas: philosopher.keyIdeas,
    influences: philosopher.influences,
    legacy: philosopher.legacy,
    metadata: philosopher.metadata,
    // Compatibility fields
    works: (worksMap.get(philosopher.name) || []).sort((a, b) => (a.year || 0) - (b.year || 0)),
    categories: philosopher.mainMovements, // Use mainMovements as categories
    periods: philosopher.century ? [philosopher.century] : [],
    quoteCount: countMap.get(philosopher.id) || 0,
    movements: philosopher.movementPhilosophers.map(mp => ({
      id: mp.movement.id,
      slug: mp.movement.slug,
      name: mp.movement.name,
      shortDescription: mp.movement.shortDefinition,
      period: mp.movement.period,
      role: mp.role,
    })),
  }));
}

/**
 * Get philosopher by slug (preferred method)
 */
export async function getPhilosopherBySlug(slug: string): Promise<Philosopher | undefined> {
  const philosopher = await prisma.philosopher.findUnique({
    where: { slug },
    include: {
      movementPhilosophers: {
        include: {
          movement: {
            select: {
              id: true,
              slug: true,
              name: true,
              shortDefinition: true,
              period: true,
            },
          },
        },
      },
    },
  });

  if (!philosopher) return undefined;

  // Get quote count
  const quoteCount = await prisma.quote.count({
    where: {
      philosopherId: philosopher.id,
      isPublic: true,
    },
  });

  // Get works
  const works = await prisma.source.findMany({
    where: { author: philosopher.name },
    select: {
      title: true,
      year: true,
      type: true,
    },
  });

  return {
    id: philosopher.id,
    slug: philosopher.slug,
    name: philosopher.name,
    fullName: philosopher.fullName,
    dates: philosopher.dates,
    birthYear: philosopher.birthYear,
    deathYear: philosopher.deathYear,
    nationality: philosopher.nationality,
    century: philosopher.century,
    biography: philosopher.biography,
    mainMovements: philosopher.mainMovements,
    disciplines: philosopher.disciplines,
    keyIdeas: philosopher.keyIdeas,
    influences: philosopher.influences,
    legacy: philosopher.legacy,
    metadata: philosopher.metadata,
    works: works.map(w => ({
      title: w.title,
      year: w.year,
      type: w.type as SourceType,
    })).sort((a, b) => (a.year || 0) - (b.year || 0)),
    categories: philosopher.mainMovements,
    periods: philosopher.century ? [philosopher.century] : [],
    quoteCount,
    movements: philosopher.movementPhilosophers.map(mp => ({
      id: mp.movement.id,
      slug: mp.movement.slug,
      name: mp.movement.name,
      shortDescription: mp.movement.shortDefinition,
      period: mp.movement.period,
      role: mp.role,
    })),
  };
}

/**
 * Get philosopher by name (legacy compatibility - searches by name)
 */
export async function getPhilosopherByName(name: string): Promise<Philosopher | undefined> {
  // Try exact match first
  const philosopher = await prisma.philosopher.findFirst({
    where: { name },
    include: {
      movementPhilosophers: {
        include: {
          movement: {
            select: {
              id: true,
              slug: true,
              name: true,
              shortDefinition: true,
              period: true,
            },
          },
        },
      },
    },
  });

  if (!philosopher) return undefined;

  // Get quote count
  const quoteCount = await prisma.quote.count({
    where: {
      philosopherId: philosopher.id,
      isPublic: true,
    },
  });

  // Get works
  const works = await prisma.source.findMany({
    where: { author: philosopher.name },
    select: {
      title: true,
      year: true,
      type: true,
    },
  });

  return {
    id: philosopher.id,
    slug: philosopher.slug,
    name: philosopher.name,
    fullName: philosopher.fullName,
    dates: philosopher.dates,
    birthYear: philosopher.birthYear,
    deathYear: philosopher.deathYear,
    nationality: philosopher.nationality,
    century: philosopher.century,
    biography: philosopher.biography,
    mainMovements: philosopher.mainMovements,
    disciplines: philosopher.disciplines,
    keyIdeas: philosopher.keyIdeas,
    influences: philosopher.influences,
    legacy: philosopher.legacy,
    metadata: philosopher.metadata,
    works: works.map(w => ({
      title: w.title,
      year: w.year,
      type: w.type as SourceType,
    })).sort((a, b) => (a.year || 0) - (b.year || 0)),
    categories: philosopher.mainMovements,
    periods: philosopher.century ? [philosopher.century] : [],
    quoteCount,
    movements: philosopher.movementPhilosophers.map(mp => ({
      id: mp.movement.id,
      slug: mp.movement.slug,
      name: mp.movement.name,
      shortDescription: mp.movement.shortDefinition,
      period: mp.movement.period,
      role: mp.role,
    })),
  };
}

/**
 * Get philosopher stats
 */
export async function getPhilosopherStats() {
  const [total, withMovements, byCentury] = await Promise.all([
    prisma.philosopher.count(),
    prisma.philosopher.count({
      where: {
        mainMovements: {
          isEmpty: false,
        },
      },
    }),
    prisma.$queryRaw`
      SELECT century, COUNT(*) as count
      FROM "philosophers"
      WHERE century IS NOT NULL
      GROUP BY century
      ORDER BY century
    `,
  ]);

  return {
    total,
    withMovements,
    byCentury: byCentury as { century: string; count: bigint }[],
  };
}

/**
 * Search philosophers by term
 */
export async function searchPhilosophers(term: string): Promise<Philosopher[]> {
  if (!term || term.length < 2) return [];

  const philosophers = await prisma.philosopher.findMany({
    where: {
      OR: [
        { name: { contains: term, mode: 'insensitive' } },
        { fullName: { contains: term, mode: 'insensitive' } },
        { nationality: { contains: term, mode: 'insensitive' } },
        { mainMovements: { has: term } },
      ],
    },
    orderBy: {
      name: 'asc',
    },
    take: 20,
  });

  // Get quote counts
  const philosopherIds = philosophers.map(p => p.id);
  const quoteCounts = await prisma.quote.groupBy({
    by: ['philosopherId'],
    where: {
      philosopherId: { in: philosopherIds },
      isPublic: true,
    },
    _count: {
      id: true,
    },
  });

  const countMap = new Map(
    quoteCounts.map(q => [q.philosopherId, q._count.id])
  );

  return philosophers.map(philosopher => ({
    id: philosopher.id,
    slug: philosopher.slug,
    name: philosopher.name,
    fullName: philosopher.fullName,
    dates: philosopher.dates,
    birthYear: philosopher.birthYear,
    deathYear: philosopher.deathYear,
    nationality: philosopher.nationality,
    century: philosopher.century,
    biography: philosopher.biography,
    mainMovements: philosopher.mainMovements,
    disciplines: philosopher.disciplines,
    keyIdeas: philosopher.keyIdeas,
    influences: philosopher.influences,
    legacy: philosopher.legacy,
    metadata: philosopher.metadata,
    works: [],
    categories: philosopher.mainMovements,
    periods: philosopher.century ? [philosopher.century] : [],
    quoteCount: countMap.get(philosopher.id) || 0,
  }));
}
