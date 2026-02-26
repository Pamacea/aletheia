import { z } from 'zod';

/**
 * Create Quote Schema
 */
export const createQuoteSchema = z.object({
  text: z.string().min(10, 'Le texte doit contenir au moins 10 caractères').max(1000, 'Le texte ne peut pas dépasser 1000 caractères'),
  context: z.string().max(2000).optional(),
  sourceId: z.string().cuid().optional(),
  textId: z.string().cuid().optional(),
  chapterId: z.string().cuid().optional(),
  philosopherId: z.string().cuid().optional(),
  tags: z.array(z.string()).default([]),
  isPublic: z.boolean().default(false),
});

/**
 * Update Quote Schema
 */
export const updateQuoteSchema = z.object({
  id: z.string().cuid(),
  text: z.string().min(10).max(1000).optional(),
  context: z.string().max(2000).optional(),
  sourceId: z.string().cuid().optional(),
  tags: z.array(z.string()).optional(),
  isPublic: z.boolean().optional(),
});

/**
 * Toggle Quote Public Schema
 */
export const toggleQuotePublicSchema = z.object({
  id: z.string().cuid(),
});

/**
 * Delete Quote Schema
 */
export const deleteQuoteSchema = z.object({
  id: z.string().cuid(),
});

/**
 * Types
 */
export type CreateQuoteInput = z.infer<typeof createQuoteSchema>;
export type UpdateQuoteInput = z.infer<typeof updateQuoteSchema>;
