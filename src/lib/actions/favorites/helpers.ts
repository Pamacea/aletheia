import { prisma } from '@/lib/db';
import { LIMITS, COLLECTION_SLUG } from '@/lib/constants';
import type { EntityType } from '@/lib/constants';

/**
 * Helper functions for favorites and collections
 */

/**
 * Generate a unique share slug for collections
 */
export async function generateShareSlug(): Promise<string> {
  const adjectives = COLLECTION_SLUG.ADJECTIVES;
  const nouns = COLLECTION_SLUG.NOUNS;

  let slug: string;
  let attempts = 0;
  const maxAttempts = LIMITS.SLUG.MAX_GENERATION_ATTEMPTS;

  do {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = Math.random().toString(36).substring(2, 6);
    slug = `${adj}-${noun}-${suffix}`;
    attempts++;
  } while (await prisma.collection.findUnique({ where: { shareSlug: slug } }) && attempts < maxAttempts);

  return slug;
}

/**
 * Fetch entity data for different entity types
 */
export async function getEntityData(entityType: EntityType, entityId: string) {
  switch (entityType) {
    case 'CONCEPT':
      return prisma.concept.findUnique({
        where: { id: entityId },
        select: { id: true, name: true, slug: true, shortDefinition: true }
      });

    case 'PHILOSOPHER':
      return prisma.philosopher.findUnique({
        where: { id: entityId },
        select: { id: true, name: true, slug: true }
      });

    case 'MOVEMENT':
    case 'CURRENT':
      return prisma.category.findUnique({
        where: { id: entityId },
        select: { id: true, name: true, slug: true, description: true }
      });

    case 'QUOTE':
      return prisma.quote.findUnique({
        where: { id: entityId },
        select: { id: true, text: true, slug: true }
      });

    case 'TEXT':
      return prisma.text.findUnique({
        where: { id: entityId },
        select: { id: true, title: true, slug: true, author: true }
      });

    case 'SOURCE':
      return prisma.source.findUnique({
        where: { id: entityId },
        select: { id: true, title: true, slug: true, author: true }
      });

    default:
      return null;
  }
}

/**
 * Get display name from entity data (handles different entity types)
 */
export function getEntityDisplayName(entityData: Awaited<ReturnType<typeof getEntityData>>): string {
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

/**
 * Escape XML special characters for OPML export
 */
export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
