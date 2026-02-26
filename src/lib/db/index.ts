/**
 * Database module exports
 * Centralizes all database-related exports for easy importing
 */

export * from './prisma';

// Export prisma as 'db' for convenience/consistency across the codebase
export { prisma as db } from './prisma';

// Re-export Prisma types for convenience
export type {
  User,
  Session,
  Account,
  Category,
  Concept,
  ConceptRelation,
  Source,
  FlashcardPrompt,
  FlashcardReview,
  Progression,
  ForumPost,
  ForumReply,
  Text,
  Chapter,
  ReadingState,
  Annotation,
  Quote,
  UserRole,
  RelationType,
  SourceType,
  FlashcardType,
  ProgressStatus,
  ReadingStatus
} from '@prisma/client';
