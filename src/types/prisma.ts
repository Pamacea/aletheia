/**
 * Prisma Model Types
 *
 * These are re-exports of Prisma types with additional fields commonly used in queries.
 * This allows us to avoid using 'any' in UI components.
 */

import type {
  ForumPost,
  ForumReply,
  ForumCategory,
  Concept,
  User,
  Note,
  Quote,
  Annotation,
  FlashcardPrompt,
} from '@prisma/client';

// ============================================================================
// FORUM TYPES
// ============================================================================

export type ForumPostWithAuthor = ForumPost & {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    role: string;
  };
  category: ForumCategory | null;
  _count: {
    replies: number;
    likes: number;
  };
};

export type ForumReplyWithAuthor = ForumReply & {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    role: string;
  };
};

export type ForumCategoryWithCount = ForumCategory & {
  postCount: number;
  _count?: {
    posts: number;
  };
};

// ============================================================================
// CONCEPT TYPES
// ============================================================================

export type ConceptWithCategory = Concept & {
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
  _count?: {
    relations: number;
  };
};

// ============================================================================
// USER TYPES
// ============================================================================

export type UserPublic = {
  id: string;
  name: string | null;
  image: string | null;
  bio: string | null;
  role: string;
};

// ============================================================================
// NOTE TYPES
// ============================================================================

export type NoteWithUser = Note & {
  user: UserPublic;
  linkedConcept?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  linkedText?: {
    id: string;
    title: string;
    slug: string;
  } | null;
};

// ============================================================================
// QUOTE TYPES
// ============================================================================

export type QuoteWithSource = Quote & {
  source?: {
    id: string;
    title: string;
    author: string | null;
  } | null;
  user?: UserPublic | null;
};

// ============================================================================
// ANNOTATION TYPES
// ============================================================================

export type AnnotationWithRelations = Annotation & {
  chapter?: {
    id: string;
    title: string;
    slug: string;
  } | null;
  quote?: {
    id: string;
    text: string;
  } | null;
};
