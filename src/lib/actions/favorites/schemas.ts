import { z } from 'zod';
import { ENTITY_TYPES } from '@/lib/constants';

/**
 * Validation schemas for favorites and collections
 */

export const favoriteSchema = z.object({
  entityType: z.enum([
    ENTITY_TYPES.CONCEPT,
    ENTITY_TYPES.PHILOSOPHER,
    ENTITY_TYPES.MOVEMENT,
    ENTITY_TYPES.TEXT,
    ENTITY_TYPES.SOURCE,
    ENTITY_TYPES.QUOTE,
  ]),
  entityId: z.string().cuid(),
});

export const collectionSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().optional(),
  coverImage: z.string().url().optional(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
});

export const addToCollectionSchema = z.object({
  collectionId: z.string().cuid(),
  entityType: z.enum([
    ENTITY_TYPES.CONCEPT,
    ENTITY_TYPES.PHILOSOPHER,
    ENTITY_TYPES.MOVEMENT,
    ENTITY_TYPES.TEXT,
    ENTITY_TYPES.SOURCE,
    ENTITY_TYPES.QUOTE,
  ]),
  entityId: z.string().cuid(),
  note: z.string().max(1000).optional(),
});

export const updateCollectionSchema = z.object({
  id: z.string().cuid(),
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().optional(),
  coverImage: z.string().url().optional().nullable(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional().nullable(),
});
