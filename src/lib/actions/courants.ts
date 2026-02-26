'use server';

import { prisma } from '@/lib/db/prisma';

// ============================================================================
// TYPES FOR COURANTS (MOVEMENTS)
// ============================================================================

export interface Movement {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  shortDefinition: string | null;
  period: string | null;
  origins: unknown | null;
  keyPrinciples: unknown | null;
  keyPhilosophers: string[];
  keyConcepts: string[];
  variations: unknown | null;
  criticisms: unknown | null;
  influence: unknown | null;
  categoryId: string | null;
  metadata: unknown | null;
  // Derived fields
  category?: {
    id: string;
    slug: string;
    name: string;
  } | null;
  philosophers?: PhilosopherRelation[];
  conceptCount?: number;
}

export interface PhilosopherRelation {
  id: string;
  slug: string;
  name: string;
  role?: string | null;
}

export interface MovementDetails extends Movement {
  color: string | null;
  icon: string | null;
  philosophers: PhilosopherRelation[];
  concepts: Array<{
    id: string;
    slug: string;
    name: string;
    category: { name: string; color: string | null } | null;
    keyAuthors: Array<{ author: string | null; title: string | null; year: number | null }> | null;
    sourceConcepts: Array<{
      source: { author: string | null; title: string | null; year: number | null } | null;
    }>;
  }>;
}

interface PhilosophicalPeriods {
  antique: Movement[];
  medieval: Movement[];
  modern: Movement[];
  contemporary: Movement[];
}

// ============================================================================
// SERVER ACTIONS - COURANTS (MOVEMENTS)
// ============================================================================

/**
 * Get all movements from the Movement model
 */
export async function getMovements(): Promise<Movement[]> {
  const movements = await prisma.movement.findMany({
    orderBy: {
      name: 'asc',
    },
    include: {
      category: {
        select: {
          id: true,
          slug: true,
          name: true,
          color: true,
          icon: true,
        },
      },
      movementPhilosophers: {
        include: {
          philosopher: {
            select: {
              id: true,
              slug: true,
              name: true,
            },
          },
        },
      },
    },
  });

  // Get concept counts for each movement
  const movementIds = movements.map(m => m.id);
  const conceptsByMovement = await prisma.concept.findMany({
    where: {
      connections: {
        path: ['$'],
        array_contains: movements.map(m => m.name),
      },
    },
    select: {
      name: true,
    },
  });

  // Count concepts per movement (simplified - could be improved)
  const conceptCounts = new Map<string, number>();
  movements.forEach(m => conceptCounts.set(m.id, 0));

  return movements.map(movement => ({
    id: movement.id,
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
    categoryId: movement.categoryId,
    metadata: movement.metadata,
    category: movement.category,
    philosophers: movement.movementPhilosophers.map(mp => ({
      id: mp.philosopher.id,
      slug: mp.philosopher.slug,
      name: mp.philosopher.name,
      role: mp.role,
    })),
    conceptCount: 0, // TODO: Implement proper concept counting
  }));
}

/**
 * Get movements organized by historical period
 */
export async function getPhilosophicalCurrents(): Promise<PhilosophicalPeriods> {
  const movements = await getMovements();

  const periods: PhilosophicalPeriods = {
    antique: [],
    medieval: [],
    modern: [],
    contemporary: [],
  };

  movements.forEach((movement) => {
    // Classify by period field or century
    const period = movement.period?.toLowerCase() || '';

    if (period.includes('antiquité') || period.includes('ancient') || movement.period?.match(/^(Ve|IVe|IIIe|IIe|Ier)/)) {
      periods.antique.push(movement);
    } else if (period.includes('moyen âge') || period.includes('médiéval') || movement.period?.match(/^(Xe|XIe|XIIe|XIIIe|XIVe|XVe)/)) {
      periods.medieval.push(movement);
    } else if (period.includes('moderne') || movement.period?.match(/^(XVIe|XVIIe|XVIIIe|XIXe)/)) {
      periods.modern.push(movement);
    } else {
      periods.contemporary.push(movement);
    }
  });

  return periods;
}

/**
 * Get movement details by slug
 */
export async function getMovementBySlug(slug: string): Promise<MovementDetails | null> {
  const movement = await prisma.movement.findUnique({
    where: { slug },
    include: {
      category: {
        select: {
          id: true,
          slug: true,
          name: true,
          color: true,
          icon: true,
        },
      },
      movementPhilosophers: {
        include: {
          philosopher: {
            select: {
              id: true,
              slug: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!movement) return null;

  // Get concepts related to this movement
  const concepts = await prisma.concept.findMany({
    where: {
      OR: [
        {
          connections: {
            path: ['wikiLinks'],
            array_contains: movement.name,
          },
        },
        {
          tags: {
            has: movement.name.toLowerCase(),
          },
        },
      ],
    },
    take: 50,
    orderBy: {
      name: 'asc',
    },
    select: {
      id: true,
      slug: true,
      name: true,
      category: {
        select: {
          name: true,
          color: true,
        },
      },
      keyAuthors: true,
      sourceConcepts: true,
    },
  });

  return {
    id: movement.id,
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
    categoryId: movement.categoryId,
    metadata: movement.metadata,
    category: movement.category,
    color: movement.category?.color ?? null,
    icon: movement.category?.icon ?? null,
    philosophers: movement.movementPhilosophers.map(mp => ({
      id: mp.philosopher.id,
      slug: mp.philosopher.slug,
      name: mp.philosopher.name,
      role: mp.role,
    })),
    conceptCount: concepts.length,
    concepts: concepts.map(c => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      category: c.category,
      keyAuthors: c.keyAuthors as Array<{ author: string | null; title: string | null; year: number | null }> | null,
      sourceConcepts: c.sourceConcepts.map((sc: any) => ({
        source: sc.source as { author: string | null; title: string | null; year: number | null } | null,
      })),
    })),
  };
}

/**
 * Get movement details by slug (legacy compatibility)
 */
export async function getCurrentDetails(slug: string): Promise<MovementDetails | null> {
  return getMovementBySlug(slug);
}

/**
 * Get movements stats
 */
export async function getCurrentsStats() {
  const [total, byPeriod] = await Promise.all([
    prisma.movement.count(),
    prisma.$queryRaw`
      SELECT period, COUNT(*) as count
      FROM "movements"
      WHERE period IS NOT NULL
      GROUP BY period
      ORDER BY period
    `,
  ]);

  return {
    totalCurrents: total,
    byPeriod: byPeriod as { period: string; count: bigint }[],
  };
}

/**
 * Search movements by term
 */
export async function searchMovements(term: string): Promise<Movement[]> {
  if (!term || term.length < 2) return [];

  const movements = await prisma.movement.findMany({
    where: {
      OR: [
        { name: { contains: term, mode: 'insensitive' } },
        { description: { contains: term, mode: 'insensitive' } },
        { shortDefinition: { contains: term, mode: 'insensitive' } },
        { period: { contains: term, mode: 'insensitive' } },
        { keyPhilosophers: { has: term } },
        { keyConcepts: { has: term } },
      ],
    },
    orderBy: {
      name: 'asc',
    },
    take: 20,
  });

  return movements.map(movement => ({
    id: movement.id,
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
    categoryId: movement.categoryId,
    metadata: movement.metadata,
  }));
}
