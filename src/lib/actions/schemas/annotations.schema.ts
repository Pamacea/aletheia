import { z } from 'zod';

/**
 * Color Enum for Annotations
 */
export const annotationColorEnum = z.enum(['yellow', 'blue', 'green', 'red', 'purple', 'orange']);

/**
 * Create Annotation Schema
 */
export const createAnnotationSchema = z.object({
  textId: z.string().cuid().nullable(),
  chapterId: z.string().cuid().nullable(),
  quoteId: z.string().cuid().nullable(),
  content: z.string().min(1, 'Le contenu est requis').max(5000, 'Le contenu ne peut pas dépasser 5000 caractères'),
  startOffset: z.number().int().min(0).nullable(),
  endOffset: z.number().int().min(0).nullable(),
  color: annotationColorEnum.default('yellow'),
  isPublic: z.boolean().default(false),
});

/**
 * Update Annotation Schema
 */
export const updateAnnotationSchema = z.object({
  id: z.string().cuid(),
  content: z.string().min(1).max(5000).optional(),
  color: annotationColorEnum.optional(),
  isPublic: z.boolean().optional(),
});

/**
 * Delete Annotation Schema
 */
export const deleteAnnotationSchema = z.object({
  id: z.string().cuid(),
});

/**
 * Export Annotations Schema
 */
export const exportAnnotationsSchema = z.object({
  textId: z.string().cuid().optional(),
  chapterId: z.string().cuid().optional(),
});

/**
 * Types
 */
export type CreateAnnotationInput = z.infer<typeof createAnnotationSchema>;
export type UpdateAnnotationInput = z.infer<typeof updateAnnotationSchema>;
export type ExportAnnotationsInput = z.infer<typeof exportAnnotationsSchema>;
export type AnnotationColor = z.infer<typeof annotationColorEnum>;
