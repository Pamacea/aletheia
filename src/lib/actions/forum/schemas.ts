import { z } from 'zod';
import { LIMITS, POST } from '@/lib/constants';

/**
 * Validation schemas for forum operations
 */

export const createPostSchema = z.object({
  title: z.string().min(POST.MIN_TITLE_LENGTH, `Le titre doit contenir au moins ${POST.MIN_TITLE_LENGTH} caractères`).max(POST.MAX_TITLE_LENGTH),
  content: z.string().min(POST.MIN_CONTENT_LENGTH, `Le contenu doit contenir au moins ${POST.MIN_CONTENT_LENGTH} caractères`).max(POST.MAX_CONTENT_LENGTH),
  categoryId: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export const createReplySchema = z.object({
  postId: z.string().cuid(),
  content: z.string().min(5, 'La réponse doit contenir au moins 5 caractères').max(5000),
  parentId: z.string().cuid().optional(),
  mentions: z.array(z.string()).default([]),
});

export const updatePostSchema = z.object({
  postId: z.string().cuid(),
  title: z.string().min(POST.MIN_TITLE_LENGTH).max(POST.MAX_TITLE_LENGTH).optional(),
  content: z.string().min(POST.MIN_CONTENT_LENGTH).optional(),
  tags: z.array(z.string()).optional(),
});
