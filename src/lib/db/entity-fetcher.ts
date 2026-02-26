import { prisma } from './prisma';
import type { Concept, Philosopher, Source, Movement, Category, Quote, Text } from '@prisma/client';
import type { EntityType } from '@/lib/constants';

/**
 * Unified entity fetching system
 *
 * Provides a type-safe way to fetch entities by type without
 * duplicating switch statements across the codebase.
 */

export type EntityData = {
  CONCEPT: Concept;
  PHILOSOPHER: Philosopher;
  SOURCE: Source;
  MOVEMENT: Category;
  QUOTE: Quote;
  TEXT: Text;
};

export type EntitySelect = {
  CONCEPT: { id: true; name: true; slug: true; shortDefinition: true };
  PHILOSOPHER: { id: true; name: true; slug: true };
  SOURCE: { id: true; title: true; slug: true; author: true };
  MOVEMENT: { id: true; name: true; slug: true; description: true };
  QUOTE: { id: true; text: true; slug: true };
  TEXT: { id: true; title: true; slug: true; author: true };
};

/**
 * Fetch entity by type and ID with type-safe return
 *
 * @example
 * ```ts
 * const concept = await fetchEntityById('CONCEPT', conceptId);
 * if (concept) {
 *   console.log(concept.name); // TypeScript knows this is Concept
 * }
 * ```
 */
export async function fetchEntityById(
  type: EntityType,
  id: string
): Promise<any | null> {
  const fetchers = {
    CONCEPT: () => prisma.concept.findUnique({
      where: { id },
    }),

    PHILOSOPHER: () => prisma.philosopher.findUnique({
      where: { id },
    }),

    SOURCE: () => prisma.source.findUnique({
      where: { id },
    }),

    MOVEMENT: () => prisma.category.findUnique({
      where: { id },
    }),

    QUOTE: () => prisma.quote.findUnique({
      where: { id },
    }),

    TEXT: () => prisma.text.findUnique({
      where: { id },
    }),
  };

  const fetcher = fetchers[type as keyof typeof fetchers];
  if (!fetcher) {
    return null;
  }

  return fetcher();
}

/**
 * Fetch entity with specific fields
 *
 * @example
 * ```ts
 * const concept = await fetchEntityFields('CONCEPT', conceptId, {
 *   select: { id: true, name: true, slug: true }
 * });
 * ```
 */
export async function fetchEntityFields(
  type: EntityType,
  id: string,
  options?: { select?: any }
): Promise<any | null> {
  const fetchers = {
    CONCEPT: () => prisma.concept.findUnique({
      where: { id },
      select: options?.select,
    }),

    PHILOSOPHER: () => prisma.philosopher.findUnique({
      where: { id },
      select: options?.select,
    }),

    SOURCE: () => prisma.source.findUnique({
      where: { id },
      select: options?.select,
    }),

    MOVEMENT: () => prisma.category.findUnique({
      where: { id },
      select: options?.select,
    }),

    QUOTE: () => prisma.quote.findUnique({
      where: { id },
      select: options?.select,
    }),

    TEXT: () => prisma.text.findUnique({
      where: { id },
      select: options?.select,
    }),
  };

  const fetcher = fetchers[type as keyof typeof fetchers];
  if (!fetcher) {
    return null;
  }

  return fetcher();
}

/**
 * Fetch entity with minimal fields for list views
 */
export async function fetchEntitySummary(
  type: EntityType,
  id: string
): Promise<{ id: string; name?: string; title?: string; text?: string; slug?: string } | null> {
  const selectMap = {
    CONCEPT: { id: true, name: true, slug: true },
    PHILOSOPHER: { id: true, name: true, slug: true },
    SOURCE: { id: true, title: true, slug: true },
    MOVEMENT: { id: true, name: true, slug: true },
    QUOTE: { id: true, text: true, slug: true },
    TEXT: { id: true, title: true, slug: true },
  };

  const result = await fetchEntityFields(type, id, {
    select: selectMap[type as keyof typeof selectMap],
  });

  return result;
}

/**
 * Get display name from entity (handles different entity types)
 *
 * @example
 * ```ts
 * const entity = await fetchEntityById('CONCEPT', id);
 * const name = getEntityDisplayName(entity); // Returns concept.name
 * ```
 */
export function getEntityDisplayName(
  entityType: EntityType,
  entityData: any | null
): string {
  if (!entityData) return 'Unknown';

  if ('name' in entityData && entityData.name) {
    return entityData.name;
  }

  if ('text' in entityData && entityData.text) {
    return entityData.text;
  }

  if ('title' in entityData && entityData.title) {
    return entityData.title;
  }

  return 'Unknown';
}
