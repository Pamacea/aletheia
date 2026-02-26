/**
 * Flashcards Feature Types
 */

import type { FlashcardType, ProgressStatus } from '@prisma/client';

// Re-export Prisma types for convenience
export type { FlashcardType, ProgressStatus };

/**
 * Flashcard quality rating (0-5 scale for UI)
 * Note: SM2 uses 1-5, but we include 0 for "didn't answer"
 */
export type UIQualityRating = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Quality rating descriptions for UI
 */
export const QUALITY_LABELS: Record<UIQualityRating, { label: string; description: string; color: string }> = {
  0: {
    label: 'Pass',
    description: 'Skip this card for now',
    color: 'bg-gray-500'
  },
  1: {
    label: 'Blackout',
    description: 'Complete blackout - No recall whatsoever',
    color: 'bg-red-600'
  },
  2: {
    label: 'Incorrect',
    description: 'Incorrect - Familiar, could recall with hint',
    color: 'bg-orange-500'
  },
  3: {
    label: 'Hard',
    description: 'Correct - Difficult, significant hesitation',
    color: 'bg-yellow-500'
  },
  4: {
    label: 'Good',
    description: 'Correct - Slight hesitation',
    color: 'bg-lime-500'
  },
  5: {
    label: 'Perfect',
    description: 'Perfect - No hesitation, complete recall',
    color: 'bg-green-600'
  }
};

/**
 * Flashcard display state
 */
export type FlashcardState = 'question' | 'answer' | 'hint';

/**
 * Review session state
 */
export interface ReviewSession {
  cardsDue: FlashcardWithProgress[];
  currentIndex: number;
  cardsReviewed: number;
  totalXP: number;
  startTime: number;
  paused: boolean;
  audioEnabled: boolean;
}

/**
 * Flashcard with progression data
 */
export interface FlashcardWithProgress {
  id: string;
  slug: string;
  type: FlashcardType;
  question: string;
  answer: string;
  hint?: string | null;
  tags: string[];
  difficulty: number;
  concept: {
    id: string;
    slug: string;
    name: string;
  };
  progression?: {
    id: string;
    easeFactor: number;
    interval: number;
    repetitions: number;
    streak: number;
    totalReviews: number;
    successfulReviews: number;
    nextReview: Date;
    lastReview?: Date | null;
  } | null;
}

/**
 * Flashcard form data
 */
export interface FlashcardFormData {
  type: FlashcardType;
  question: string;
  answer: string;
  hint?: string;
  conceptId: string;
  sourceId?: string;
  tags: string[];
  difficulty: number;
}

/**
 * Flashcard deck filters
 */
export interface FlashcardFilters {
  types?: FlashcardType[];
  tags?: string[];
  difficulty?: number[];
  status?: ProgressStatus;
  search?: string;
}

/**
 * Daily goal stats
 */
export interface DailyGoalStats {
  reviewsToday: number;
  reviewsGoal: number;
  xpToday: number;
  xpGoal: number;
  streak: number;
  longestStreak: number;
}

/**
 * Flashcard statistics summary
 */
export interface FlashcardStatsSummary {
  totalCards: number;
  cardsDue: number;
  cardsNew: number;
  cardsLearning: number;
  cardsMastered: number;
  averageEase: number;
  totalReviews: number;
  successRate: number;
  currentStreak: number;
  longestStreak: number;
}

/**
 * Cloze card data structure
 */
export interface ClozeData {
  text: string;
  blanks: string[];
}

/**
 * Concept card data structure
 */
export interface ConceptCardData {
  conceptName: string;
  definition: string;
  relatedConcepts?: string[];
}

/**
 * Quote card data structure
 */
export interface QuoteCardData {
  quote: string;
  philosopher?: string;
  work?: string;
  context?: string;
}

/**
 * Essay card data structure
 */
export interface EssayCardData {
  prompt: string;
  keyPoints: string[];
  minLength?: number;
}
