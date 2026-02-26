import { z } from 'zod';

/**
 * Flashcard Type Enum
 */
export const flashcardTypeEnum = z.enum(['BASIC', 'CLOZE', 'CONCEPT', 'QUOTE', 'ESSAY']);

/**
 * Difficulty Enum
 */
export const difficultyEnum = z.enum(['1', '2', '3', '4', '5']);

/**
 * Create Flashcard Schema
 */
export const createFlashcardSchema = z.object({
  type: flashcardTypeEnum,
  question: z.string().min(5, 'La question doit contenir au moins 5 caractères').max(500, 'La question ne peut pas dépasser 500 caractères'),
  answer: z.string().min(5, 'La réponse doit contenir au moins 5 caractères').max(2000, 'La réponse ne peut pas dépasser 2000 caractères'),
  hint: z.string().max(500).optional(),
  conceptId: z.string().cuid(),
  sourceId: z.string().cuid().optional(),
  tags: z.array(z.string()).default([]),
  difficulty: z.coerce.number().int().min(1).max(5).default(1),
});

/**
 * Update Flashcard Schema
 */
export const updateFlashcardSchema = z.object({
  id: z.string().cuid(),
  type: flashcardTypeEnum.optional(),
  question: z.string().min(5).max(500).optional(),
  answer: z.string().min(5).max(2000).optional(),
  hint: z.string().max(500).optional(),
  tags: z.array(z.string()).optional(),
  difficulty: z.coerce.number().int().min(1).max(5).optional(),
});

/**
 * Delete Flashcard Schema
 */
export const deleteFlashcardSchema = z.object({
  id: z.string().cuid(),
});

/**
 * Submit Review Schema
 */
export const submitReviewSchema = z.object({
  promptId: z.string().cuid(),
  quality: z.number().int().min(0).max(5),
  timeTaken: z.number().int().min(0).optional(),
});

/**
 * Types
 */
export type CreateFlashcardInput = z.infer<typeof createFlashcardSchema>;
export type UpdateFlashcardInput = z.infer<typeof updateFlashcardSchema>;
export type SubmitReviewInput = z.infer<typeof submitReviewSchema>;
export type FlashcardType = z.infer<typeof flashcardTypeEnum>;
