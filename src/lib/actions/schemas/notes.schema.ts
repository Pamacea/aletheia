import { z } from 'zod';
import { ENTITY_TYPES } from '@/lib/constants';

/**
 * Create Note Schema
 */
export const createNoteSchema = z.object({
  title: z.string().min(1, 'Le titre est requis').max(200, 'Le titre ne peut pas dépasser 200 caractères'),
  content: z.string().max(10000, 'Le contenu ne peut pas dépasser 10000 caractères').default(''),
  tags: z.array(z.string()).default([]),
  linkedEntityType: z.enum(['concept', 'text']).nullable().optional(),
  linkedEntityId: z.string().cuid().nullable().optional(),
});

/**
 * Update Note Schema
 */
export const updateNoteSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1).max(200).optional(),
  content: z.string().max(10000).optional(),
  tags: z.array(z.string()).optional(),
  isPublic: z.boolean().optional(),
});

/**
 * Delete Note Schema
 */
export const deleteNoteSchema = z.object({
  id: z.string().cuid(),
});

/**
 * Types
 */
export type CreateNoteInput = z.infer<typeof createNoteSchema>;
export type UpdateNoteInput = z.infer<typeof updateNoteSchema>;
