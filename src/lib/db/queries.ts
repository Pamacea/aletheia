/**
 * Shared Prisma query patterns and utilities
 */

import { prisma } from './prisma';

/**
 * Common include patterns for public content
 */
export const PUBLIC_INCLUDE = {
  isPublic: true,
} as const;

/**
 * Common order by patterns
 */
export const ORDER_BY_NAME = {
  orderBy: { name: 'asc' as const },
} as const;

export const ORDER_BY_NAME_DESC = {
  orderBy: { name: 'desc' as const },
} as const;

export const ORDER_BY_CREATED = {
  orderBy: { createdAt: 'desc' as const },
} as const;

/**
 * Include patterns for entities with categories
 */
export const INCLUDE_CATEGORY = {
  include: {
    category: true,
  },
} as const;

/**
 * Include patterns for entities with relations
 */
export const INCLUDE_RELATIONS = {
  include: {
    category: true,
  },
} as const;

/**
 * Base query options for public entities
 */
export function publicQueryOptions<T extends Record<string, any>>(additionalOptions?: T) {
  return {
    where: {
      isPublic: true,
      ...additionalOptions?.where,
    },
    ...ORDER_BY_NAME,
    ...additionalOptions,
  };
}

/**
 * Deduplicate an array using a Set
 */
export function deduplicateArray<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Deduplicate an array of objects by a key
 */
export function deduplicateByKey<T extends Record<string, any>>(array: T[], key: string): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

/**
 * Create a Map from an array of objects
 */
export function createMapFromArray<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K
): Map<T[K], T> {
  return new Map(array.map(item => [item[key], item]));
}
