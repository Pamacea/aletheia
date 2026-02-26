/**
 * SM-2 Algorithm Types
 * Based on SuperMemo 2 spaced repetition algorithm
 */

/**
 * Quality rating for flashcard review (1-5 scale)
 */
export type ReviewQuality = 1 | 2 | 3 | 4 | 5;

/**
 * Quality rating descriptions
 */
export const QUALITY_DESCRIPTIONS = {
  5: 'Perfect response - No hesitation, complete recall',
  4: 'Correct response - Slight hesitation',
  3: 'Correct response - Difficult, significant hesitation',
  2: 'Incorrect response - Familiar, could recall with hint',
  1: 'Complete blackout - No recall whatsoever'
} as const;

/**
 * SM-2 algorithm state for a flashcard
 */
export interface SM2Data {
  /** Ease factor (EF) - minimum 1.3, default 2.5 */
  ease: number;
  /** Number of successful repetitions */
  repetitions: number;
  /** Interval in days until next review */
  interval: number;
  /** Timestamp of next review (milliseconds since epoch) */
  nextReview: number;
}

/**
 * Initial SM-2 state for new flashcards
 */
export const INITIAL_SM2_DATA: SM2Data = {
  ease: 2.5,
  repetitions: 0,
  interval: 0,
  nextReview: Date.now()
};

/**
 * Result of an SM-2 calculation after review
 */
export interface SM2UpdateResult {
  /** Updated SM-2 data */
  data: SM2Data;
  /** The quality rating given */
  quality: ReviewQuality;
  /** Previous ease factor */
  previousEase: number;
  /** New ease factor */
  newEase: number;
  /** Previous interval */
  previousInterval: number;
  /** New interval */
  newInterval: number;
  /** Timestamp of this review */
  reviewedAt: number;
}

/**
 * Review log entry for tracking history
 */
export interface FlashcardReviewLog {
  id: string;
  flashcardId: string;
  quality: ReviewQuality;
  previousEase: number;
  newEase: number;
  previousInterval: number;
  newInterval: number;
  reviewedAt: number;
  timeTaken?: number; // Time taken to answer in milliseconds
}

/**
 * Flashcard statistics
 */
export interface FlashcardStats {
  totalReviews: number;
  successfulReviews: number; // quality >= 3
  failedReviews: number; // quality < 3
  averageQuality: number;
  currentStreak: number;
  longestStreak: number;
  lastReviewedAt?: number;
}
