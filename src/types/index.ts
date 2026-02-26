// ============================================================================
// ALETHEIA - CENTRALIZED TYPES
// ============================================================================
// This file contains all shared TypeScript types for the application.
// Import types from here: import type { Concept, Category } from '@/types';
// ============================================================================

// ============================================================================
// ENUMS (from Prisma schema - import from @prisma/client)
// ============================================================================

import { RelationType, SourceType, FlashcardType, ProgressStatus, ReadingStatus } from '@prisma/client';

// Re-export enums from Prisma
export { RelationType, SourceType, FlashcardType, ProgressStatus, ReadingStatus };

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

// ============================================================================
// DOMAIN TYPES
// ============================================================================

/**
 * Etymology information for a concept
 */
export interface Etymology {
  greek?: string;
  latin?: string;
  sanskrit?: string;
  meaning?: string;
  literalTranslation?: string;
}

/**
 * Key authors associated with a concept
 */
export interface ConceptAuthor {
  name: string;
  period?: string;
  work?: string;
}

/**
 * Example of a concept in practice
 */
export interface ConceptExample {
  title: string;
  description: string;
  context?: string;
}

/**
 * Reasoning/Logic step for a concept
 */
export interface ConceptReasoning {
  title: string;
  description: string;
}

/**
 * Connections between concepts
 */
export interface ConceptConnection {
  conceptId: string;
  conceptName: string;
  type: RelationType;
  description?: string;
}

/**
 * Flashcard data stored in JSON
 */
export interface ConceptFlashcard {
  question: string;
  answer: string;
  hint?: string;
  type: FlashcardType;
}

// ============================================================================
// ENTITY TYPES
// ============================================================================

/**
 * Minimal category information
 */
export interface CategoryBasic {
  id: string;
  slug: string;
  name: string;
  color?: string | null;
}

/**
 * Full category information
 */
export interface Category extends CategoryBasic {
  description: string | null;
  color: string | null;
  icon: string | null;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    concepts: number;
  };
}

/**
 * Minimal concept information
 */
export interface ConceptBasic {
  id: string;
  slug: string;
  name: string;
}

/**
 * Standard concept information
 */
export interface Concept extends ConceptBasic {
  definition: string | null;
  shortDefinition: string | null;
  etymology: Etymology | null;
  reasoning: ConceptReasoning[] | null;
  keyAuthors: ConceptAuthor[] | null;
  examples: ConceptExample[] | null;
  tags: string[];
  status: string | null;
  category: CategoryBasic | null;
}

/**
 * Concept with relations (for graph views and detail pages)
 */
export interface ConceptWithRelations extends Concept {
  relations?: ConceptRelation[];
  sourceConcepts?: Array<{
    source?: {
      id: string;
      slug: string;
      author: string | null;
      title: string | null;
      year: number | null;
      type: SourceType;
      url?: string | null;
      metadata?: Record<string, unknown> | null;
    } | null;
  }>;
  flashcardPrompts?: Array<{
    id: string;
    slug: string;
    question: string;
    answer: string;
    hint: string | null;
    difficulty: number;
    type: FlashcardType;
    tags?: string[];
  }>;
}

/**
 * Concept relation for graph display
 */
export interface ConceptRelation {
  id: string;
  relatedConcept: {
    id: string;
    name: string;
    slug: string;
    category: {
      name: string;
      color: string | null;
    } | null;
  };
  relationType: RelationType;
  description: string | null;
  strength: number;
}

/**
 * Concept with source references
 */
export interface ConceptWithSources extends Concept {
  sources?: Source[];
}

/**
 * Source (book, article, etc.)
 */
export interface SourceBasic {
  id: string;
  slug: string;
  title: string;
  author: string | null;
  year: number | null;
  type: SourceType;
}

export interface Source extends SourceBasic {
  url: string | null;
  description: string | null;
  metadata: Record<string, unknown> | null;
}

/**
 * Quote with source information
 */
export interface QuoteBasic {
  id: string;
  slug: string;
  text: string;
  context: string | null;
}

export interface Quote extends QuoteBasic {
  source: SourceBasic | null;
  tags: string[];
  isPublic: boolean;
}

/**
 * Flashcard prompt
 */
export interface FlashcardPromptBasic {
  id: string;
  slug: string;
  type: FlashcardType;
  question: string;
  answer: string;
  hint: string | null;
  difficulty: number;
}

export interface FlashcardPrompt extends FlashcardPromptBasic {
  tags: string[];
  concept: ConceptBasic;
  source: SourceBasic | null;
}

/**
 * User progression tracking
 */
export interface Progression {
  id: string;
  status: ProgressStatus;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: Date;
  lastReview: Date | null;
  totalReviews: number;
  successfulReviews: number;
  streak: number;
}

/**
 * Forum post
 */
export interface ForumPostBasic {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export interface ForumPost extends ForumPostBasic {
  views: number;
  likeCount: number;
  isPinned: boolean;
  isLocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  replyCount?: number;
}

/**
 * Forum reply
 */
export interface ForumReply {
  id: string;
  content: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  parentId: string | null;
}

/**
 * Annotation on text/chapter/quote
 */
export interface Annotation {
  id: string;
  content: string;
  startOffset: number | null;
  endOffset: number | null;
  color: string | null;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Reading state for texts
 */
export interface ReadingState {
  id: string;
  status: ReadingStatus;
  currentPage: number;
  totalPages: number | null;
  progressPercent: number;
  startedAt: Date | null;
  completedAt: Date | null;
  lastReadAt: Date;
}

/**
 * User information
 */
export interface UserBasic {
  id: string;
  name: string | null;
  image: string | null;
}

export interface User extends UserBasic {
  email: string;
  role: UserRole;
  bio?: string | null;
  isPublic?: boolean;
  createdAt: Date;
}

/**
 * User preferences
 */
export interface UserPreferences {
  theme?: 'light' | 'dark' | 'system';
  language?: 'fr' | 'en' | 'es' | 'de';
  fontSize?: 'small' | 'medium' | 'large';
  privacy?: {
    profileVisibility?: 'public' | 'private';
    showProgress?: boolean;
    showReadingList?: boolean;
  };
}

/**
 * Notification settings
 */
export interface NotificationSettings {
  emailNotifications?: boolean;
  pushNotifications?: boolean;
  weeklyDigest?: boolean;
  reviewReminders?: boolean;
}

/**
 * User settings (combined)
 */
export interface UserSettings {
  profile: {
    name: string | null;
    email: string;
    image: string | null;
    bio: string | null;
    isPublic: boolean;
  };
  preferences: UserPreferences;
  notifications: NotificationSettings;
}

// ============================================================================
// API / FILTER TYPES
// ============================================================================

/**
 * Filters for concept queries
 */
export interface ConceptFilters {
  search?: string;
  category?: string;
  tags?: string[];
  status?: string;
}

/**
 * Filters for source queries
 */
export interface SourceFilters {
  search?: string;
  type?: SourceType;
  author?: string;
}

/**
 * Filters for quote queries
 */
export interface QuoteFilters {
  search?: string;
  tags?: string[];
  sourceId?: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================================================
// FORM / INPUT TYPES
// ============================================================================

/**
 * Input for creating/updating a concept
 */
export interface ConceptInput {
  name: string;
  slug?: string;
  definition?: string;
  shortDefinition?: string;
  etymology?: Etymology;
  keyAuthors?: ConceptAuthor[];
  examples?: ConceptExample[];
  tags?: string[];
  categoryId?: string;
}

/**
 * Input for creating/updating a flashcard review
 */
export interface FlashcardReviewInput {
  promptId: string;
  quality: number; // 0-5
  timeTaken?: number; // milliseconds
}

// ============================================================================
// GRAPH TYPES
// ============================================================================

/**
 * Node data for Cytoscape graph
 */
export interface GraphNode {
  data: {
    id: string;
    label: string;
    category: string;
    categoryColor: string;
    weight: number;
  };
}

/**
 * Edge data for Cytoscape graph
 */
export interface GraphEdge {
  data: {
    id: string;
    source: string;
    target: string;
    relationType: RelationType;
    strength: number;
  };
}

/**
 * Complete graph element
 */
export type GraphElement = GraphNode | GraphEdge;

// ============================================================================
// UI / DISPLAY TYPES
// ============================================================================

/**
 * Navigation item
 */
export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Toast/notification
 */
export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant: 'success' | 'error' | 'warning' | 'info';
}

/**
 * Modal props
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Make specific fields optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific fields required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Deep partial type
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
