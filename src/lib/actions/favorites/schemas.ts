import { z } from 'zod';
import { ENTITY_TYPES } from '@/lib/constants';

/**
 * Validation schemas for favorites and collections
 */

// Custom validation for entity IDs based on type
const entityIdValidation = z.string().min(1, 'Entity ID is required').refine(
  (val) => {
    // Accept both CUIDs (25 chars, alphanumeric) and slugs (for concepts)
    // CUIDs are 25 characters, slugs are shorter with hyphens
    return /^[a-z0-9]{25}$/.test(val) || /^[a-z0-9-]+$/.test(val);
  },
  { message: 'Entity ID must be a valid CUID or slug' }
);

export const favoriteSchema = z.object({
  entityType: z.enum([
    ENTITY_TYPES.CONCEPT,
    ENTITY_TYPES.PHILOSOPHER,
    ENTITY_TYPES.MOVEMENT,
    ENTITY_TYPES.TEXT,
    ENTITY_TYPES.SOURCE,
    ENTITY_TYPES.QUOTE,
  ]),
  entityId: entityIdValidation,
});

export const collectionSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().optional(),
  coverImage: z.string().url().optional(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
});

export const addToCollectionSchema = z.object({
  collectionId: z.string().min(1, 'Collection ID is required'),
  entityType: z.enum([
    ENTITY_TYPES.CONCEPT,
    ENTITY_TYPES.PHILOSOPHER,
    ENTITY_TYPES.MOVEMENT,
    ENTITY_TYPES.TEXT,
    ENTITY_TYPES.SOURCE,
    ENTITY_TYPES.QUOTE,
  ]),
  entityId: entityIdValidation,
  note: z.string().max(1000).optional(),
});

export const updateCollectionSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  isPublic: z.boolean().optional(),
  coverImage: z.string().url().optional().nullable(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional().nullable(),
});
