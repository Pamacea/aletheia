/**
 * Forum - Public API
 *
 * This module exports all functionality for the forum system.
 * Organized into logical sub-modules for better maintainability.
 */

// Export types
export type ForumPostWithAuthor = Awaited<ReturnType<typeof import('./posts').getPosts>>[number];
export type ForumReplyWithAuthor = Awaited<ReturnType<typeof import('./replies').getReplies>>[number];
export type ForumCategoryWithCount = Awaited<ReturnType<typeof import('./categories').getCategories>>[number];

// Export schemas
export * from './schemas';

// Export post operations
export * from './posts';

// Export reply operations
export * from './replies';

// Export like operations
export * from './likes';

// Export category operations
export * from './categories';

// Export search operations
export * from './search';
