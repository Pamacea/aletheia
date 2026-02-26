import { z } from 'zod';

/**
 * Create Post Schema
 */
export const createPostSchema = z.object({
  title: z.string().min(5, 'Le titre doit contenir au moins 5 caractères').max(200),
  content: z.string().min(20, 'Le contenu doit contenir au moins 20 caractères'),
  categoryId: z.string().cuid().optional(),
  tags: z.array(z.string()).default([]),
});

/**
 * Update Post Schema
 */
export const updatePostSchema = z.object({
  postId: z.string().cuid(),
  title: z.string().min(5).max(200).optional(),
  content: z.string().min(20).optional(),
  tags: z.array(z.string()).optional(),
});

/**
 * Create Reply Schema
 */
export const createReplySchema = z.object({
  postId: z.string().cuid(),
  content: z.string().min(5, 'La réponse doit contenir au moins 5 caractères').max(5000),
  parentId: z.string().cuid().optional(),
  mentions: z.array(z.string()).default([]),
});

/**
 * Delete Post Schema
 */
export const deletePostSchema = z.object({
  postId: z.string().cuid(),
});

/**
 * Delete Reply Schema
 */
export const deleteReplySchema = z.object({
  replyId: z.string().cuid(),
});

/**
 * Toggle Like Post Schema
 */
export const toggleLikePostSchema = z.object({
  postId: z.string().cuid(),
});

/**
 * Toggle Like Reply Schema
 */
export const toggleLikeReplySchema = z.object({
  replyId: z.string().cuid(),
});

/**
 * Types
 */
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type CreateReplyInput = z.infer<typeof createReplySchema>;
