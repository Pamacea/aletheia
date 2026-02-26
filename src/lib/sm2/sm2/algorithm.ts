/**
 * SM-2 Algorithm Implementation
 * Based on SuperMemo 2 spaced repetition algorithm
 *
 * Reference: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 */

import type {
  SM2Data,
  SM2UpdateResult,
  ReviewQuality,
  FlashcardStats,
  FlashcardReviewLog
} from './types';
import { INITIAL_SM2_DATA } from './types';

/**
 * Calculate the next review date using SM-2 algorithm
 *
 * @param quality - The quality rating (1-5) of the review
 * @param previousData - The previous SM-2 data for this flashcard
 * @returns Updated SM-2 data after review
 */
export function calculateNextReview(
  quality: ReviewQuality,
  previousData: Partial<SM2Data> = {}
): SM2UpdateResult {
  const data: SM2Data = {
    ease: previousData.ease ?? INITIAL_SM2_DATA.ease,
    repetitions: previousData.repetitions ?? INITIAL_SM2_DATA.repetitions,
    interval: previousData.interval ?? INITIAL_SM2_DATA.interval,
    nextReview: previousData.nextReview ?? INITIAL_SM2_DATA.nextReview
  };

  const previousEase = data.ease;
  const previousInterval = data.interval;
  const reviewedAt = Date.now();

  // Store quality for reference in result
  const qualityValue = quality;

  // SM-2 Algorithm
  if (qualityValue >= 3) {
    // Correct response
    if (data.repetitions === 0) {
      // First successful review - review again in 1 day
      data.interval = 1;
    } else if (data.repetitions === 1) {
      // Second successful review - review in 6 days
      data.interval = 6;
    } else {
      // Subsequent reviews - use ease factor
      data.interval = Math.round(data.interval * data.ease);
    }
    data.repetitions += 1;
  } else {
    // Incorrect response - reset repetitions
    data.repetitions = 0;
    data.interval = 1;
  }

  // Calculate new ease factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  const easeAdjustment = 0.1 - (5 - qualityValue) * (0.08 + (5 - qualityValue) * 0.02);
  data.ease = Math.max(1.3, data.ease + easeAdjustment);

  // Calculate next review date
  // Convert interval (days) to milliseconds and add to current time
  const intervalMs = data.interval * 24 * 60 * 60 * 1000;
  data.nextReview = reviewedAt + intervalMs;

  return {
    data,
    quality: qualityValue,
    previousEase,
    newEase: data.ease,
    previousInterval,
    newInterval: data.interval,
    reviewedAt
  };
}

/**
 * Check if a flashcard is due for review
 *
 * @param data - The SM-2 data for the flashcard
 * @returns True if the flashcard is due or overdue
 */
export function isDue(data: SM2Data): boolean {
  return data.nextReview <= Date.now();
}

/**
 * Get the number of days until a flashcard is due
 *
 * @param data - The SM-2 data for the flashcard
 * @returns Number of days (can be negative if overdue, 0 if due today)
 */
export function getDaysUntilDue(data: SM2Data): number {
  const msUntilDue = data.nextReview - Date.now();
  return Math.ceil(msUntilDue / (24 * 60 * 60 * 1000));
}

/**
 * Calculate statistics from review logs
 *
 * @param logs - Array of review logs
 * @returns Calculated statistics
 */
export function calculateStats(logs: FlashcardReviewLog[]): FlashcardStats {
  const totalReviews = logs.length;

  if (totalReviews === 0) {
    return {
      totalReviews: 0,
      successfulReviews: 0,
      failedReviews: 0,
      averageQuality: 0,
      currentStreak: 0,
      longestStreak: 0
    };
  }

  const successfulReviews = logs.filter(log => log.quality >= 3).length;
  const failedReviews = logs.filter(log => log.quality < 3).length;

  const totalQuality = logs.reduce((sum, log) => sum + log.quality, 0);
  const averageQuality = totalQuality / totalReviews;

  // Calculate streaks
  let currentStreak = 0;
  let longestStreak = 0;

  // Sort logs by date (oldest first)
  const sortedLogs = [...logs].sort((a, b) => a.reviewedAt - b.reviewedAt);

  for (const log of sortedLogs) {
    if (log.quality >= 3) {
      currentStreak += 1;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  // Current streak is based on most recent reviews (newest first)
  currentStreak = 0;
  for (let i = sortedLogs.length - 1; i >= 0; i--) {
    if (sortedLogs[i].quality >= 3) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return {
    totalReviews,
    successfulReviews,
    failedReviews,
    averageQuality,
    currentStreak,
    longestStreak,
    lastReviewedAt: sortedLogs[sortedLogs.length - 1]?.reviewedAt
  };
}

/**
 * Get the quality rating description
 *
 * @param quality - The quality rating
 * @returns Human-readable description
 */
export function getQualityDescription(quality: ReviewQuality): string {
  const descriptions = {
    1: 'Complete blackout',
    2: 'Incorrect but familiar',
    3: 'Correct but difficult',
    4: 'Correct with hesitation',
    5: 'Perfect response'
  };
  return descriptions[quality];
}

/**
 * Get color class for quality rating
 *
 * @param quality - The quality rating
 * @returns CSS color class name
 */
export function getQualityColor(quality: ReviewQuality): string {
  const colors = {
    1: 'text-red-600 bg-red-50 border-red-200',
    2: 'text-orange-600 bg-orange-50 border-orange-200',
    3: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    4: 'text-lime-600 bg-lime-50 border-lime-200',
    5: 'text-green-600 bg-green-50 border-green-200'
  };
  return colors[quality];
}

/**
 * Create a review log entry
 *
 * @param flashcardId - ID of the flashcard
 * @param result - Result of SM-2 calculation
 * @param timeTaken - Optional time taken to answer
 * @returns Review log entry
 */
export function createReviewLog(
  flashcardId: string,
  result: SM2UpdateResult,
  timeTaken?: number
): FlashcardReviewLog {
  return {
    id: `${flashcardId}-${result.reviewedAt}`,
    flashcardId,
    quality: result.quality,
    previousEase: result.previousEase,
    newEase: result.newEase,
    previousInterval: result.previousInterval,
    newInterval: result.newInterval,
    reviewedAt: result.reviewedAt,
    timeTaken
  };
}
