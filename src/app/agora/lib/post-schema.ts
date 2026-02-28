/**
 * Post Validation Schema
 *
 * Zod schemas for validating forum post data including
 * title, content, categories, and tags.
 */

import { z } from 'zod';

/**
 * Post creation/validation schema
 *
 * Rules:
 * - title: minimum 5 characters
 * - content: minimum 20 characters
 * - categoryId: optional string
 */
export const postSchema = z.object({
  title: z.string().min(5, 'Le titre doit contenir au moins 5 caractères'),
  content: z.string().min(20, 'Le contenu doit contenir au moins 20 caractères'),
  categoryId: z.string().optional(),
});

/**
 * Type inferred from post schema
 */
export type PostFormData = z.infer<typeof postSchema>;

/**
 * Tag validation rules
 */
export const TAG_RULES = {
  minLength: 2,
  maxLength: 30,
  pattern: /^[a-zàâäéèêëïîôùûüÿç'-]+$/,
} as const;

/**
 * Validate a single tag
 *
 * @param tag - Tag string to validate
 * @returns Error message or null if valid
 */
export function validateTag(tag: string): string | null {
  const trimmed = tag.trim().toLowerCase();

  if (trimmed.length < TAG_RULES.minLength) {
    return `Le tag doit contenir au moins ${TAG_RULES.minLength} caractères`;
  }

  if (trimmed.length > TAG_RULES.maxLength) {
    return `Le tag ne peut pas dépasser ${TAG_RULES.maxLength} caractères`;
  }

  if (!TAG_RULES.pattern.test(trimmed)) {
    return 'Le tag ne peut contenir que des lettres, des tirets et des apostrophes';
  }

  return null;
}

/**
 * Sanitize a tag string
 *
 * @param tag - Raw tag input
 * @returns Sanitized tag (lowercase, trimmed)
 */
export function sanitizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

/**
 * Validate post form data and extract field errors
 *
 * @param data - Form data to validate
 * @returns Tuple of (isValid, errors)
 */
export function validatePostForm(data: unknown): [boolean, Record<string, string>] {
  try {
    postSchema.parse(data);
    return [true, {}];
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return [false, fieldErrors];
    }
    return [false, { _form: 'Erreur de validation inconnue' }];
  }
}
