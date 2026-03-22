import { unstable_cache } from 'next/cache';
import { prisma } from '@/lib/db/prisma';
import type { Category } from '@/types';

/**
 * Cached database queries - revalidate every 60s
 * These avoid hitting the DB on every page load
 */

export const getCachedCategories = unstable_cache(
  async () => {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { concepts: true } }
      }
    });

    return categories.map(cat => ({
      ...cat,
      description: cat.description ?? null,
      color: cat.color ?? null,
      icon: cat.icon ?? null,
      parentId: cat.parentId ?? null,
    }));
  },
  ['categories'],
  { revalidate: 60 }
);

export const getCachedFeaturedConcepts = unstable_cache(
  async () => {
    const recentConcepts = await prisma.concept.findMany({
      include: { category: true },
      take: 30,
    });

    const shuffled = [...recentConcepts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 8);
  },
  ['featured-concepts'],
  { revalidate: 120 }
);

export const getCachedConceptsCount = unstable_cache(
  async (search: string, categorySlug: string) => {
    return prisma.concept.count({
      where: {
        ...(categorySlug ? { category: { slug: categorySlug } } : {}),
        ...(search ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { shortDefinition: { contains: search, mode: 'insensitive' as const } },
            { tags: { hasSome: [search] } }
          ]
        } : {})
      }
    });
  },
  ['concepts-count'],
  { revalidate: 60 }
);

export const getCachedConcepts = unstable_cache(
  async (search: string, categorySlug: string, page: number, limit: number) => {
    const concepts = await prisma.concept.findMany({
      where: {
        ...(categorySlug ? { category: { slug: categorySlug } } : {}),
        ...(search ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { shortDefinition: { contains: search, mode: 'insensitive' as const } },
            { tags: { hasSome: [search] } }
          ]
        } : {})
      },
      include: {
        category: {
          select: { id: true, slug: true, name: true, color: true }
        }
      },
      orderBy: { name: 'asc' },
      take: limit,
      skip: (page - 1) * limit
    });

    return concepts.map(concept => ({
      ...concept,
      category: concept.category ? {
        id: concept.category.id,
        name: concept.category.name,
        slug: concept.category.slug,
      } : null,
    }));
  },
  ['concepts'],
  { revalidate: 60 }
);

export const getCachedPhilosopherStats = unstable_cache(
  async () => {
    const [total, withMovements] = await Promise.all([
      prisma.philosopher.count(),
      prisma.philosopher.count({
        where: { mainMovements: { isEmpty: false } },
      }),
    ]);
    return { total, withMovements };
  },
  ['philosopher-stats'],
  { revalidate: 120 }
);

export const getCachedMovements = unstable_cache(
  async () => {
    const movements = await prisma.movement.findMany({
      orderBy: { name: 'asc' },
      include: {
        category: {
          select: { id: true, slug: true, name: true }
        },
        movementPhilosophers: {
          include: {
            philosopher: {
              select: { id: true, slug: true, name: true }
            }
          }
        },
      },
    });
    return movements;
  },
  ['movements'],
  { revalidate: 120 }
);

export const getCachedPhilosophers = unstable_cache(
  async () => {
    const [philosophers, allQuoteCounts, allWorks] = await Promise.all([
      prisma.philosopher.findMany({
        orderBy: { name: 'asc' },
        include: {
          movementPhilosophers: {
            include: {
              movement: {
                select: { id: true, slug: true, name: true, shortDefinition: true, period: true },
              },
            },
          },
        },
      }),
      prisma.quote.groupBy({
        by: ['philosopherId'],
        where: { isPublic: true },
        _count: { id: true },
      }),
      prisma.source.findMany({
        select: { author: true, title: true, year: true, type: true },
      }),
    ]);

    const countMap = new Map(
      allQuoteCounts.map((q: any) => [q.philosopherId, q._count.id])
    );

    const worksMap = new Map<string, Array<{ title: string; year: number | null; type: string }>>();
    const philosopherNames = new Set(philosophers.map(p => p.name));
    for (const work of allWorks) {
      if (work.author && philosopherNames.has(work.author)) {
        if (!worksMap.has(work.author)) worksMap.set(work.author, []);
        worksMap.get(work.author)!.push({ title: work.title, year: work.year, type: work.type });
      }
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
      works: (worksMap.get(philosopher.name) || []).sort((a, b) => (a.year || 0) - (b.year || 0)),
      categories: philosopher.mainMovements,
      periods: philosopher.century ? [philosopher.century] : [],
      quoteCount: countMap.get(philosopher.id) || 0,
      movements: philosopher.movementPhilosophers.map((mp: any) => ({
        id: mp.movement.id,
        slug: mp.movement.slug,
        name: mp.movement.name,
        shortDescription: mp.movement.shortDefinition,
        period: mp.movement.period,
        role: mp.role,
      })),
    }));
  },
  ['philosophers-all'],
  { revalidate: 120 }
);

export const getCachedMovementsForFilter = unstable_cache(
  async () => {
    return prisma.movement.findMany({
      select: {
        id: true,
        slug: true,
        name: true,
        period: true,
        _count: { select: { movementPhilosophers: true } },
      },
      orderBy: { name: 'asc' },
    });
  },
  ['movements-filter'],
  { revalidate: 120 }
);

export const getCachedQuoteAuthors = unstable_cache(
  async () => {
    const quotes = await prisma.quote.findMany({
      where: {
        isPublic: true,
        source: { author: { not: null } },
      },
      select: {
        source: { select: { author: true } },
      },
      orderBy: { source: { author: 'asc' } },
    });

    const authors = new Set<string>();
    quotes.forEach((q) => {
      if (q.source?.author) authors.add(q.source.author);
    });
    return Array.from(authors).sort();
  },
  ['quote-authors'],
  { revalidate: 300 }
);

export const getCachedQuoteStats = unstable_cache(
  async () => {
    const [total, authorsCount] = await Promise.all([
      prisma.quote.count({ where: { isPublic: true } }),
      prisma.quote.groupBy({
        by: ['sourceId'],
        where: { isPublic: true },
      }).then((groups) => groups.length),
    ]);
    return { total, authorsCount };
  },
  ['quote-stats'],
  { revalidate: 300 }
);
