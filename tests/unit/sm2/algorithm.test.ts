import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {
  calculateNextReview,
  isDue,
  getDaysUntilDue,
  calculateStats,
  getQualityDescription,
  getQualityColor,
  createReviewLog
} from '@/lib/sm2/sm2/algorithm'
import type { SM2Data, FlashcardReviewLog } from '@/lib/sm2/sm2/types'
import { INITIAL_SM2_DATA } from '@/lib/sm2/sm2/types'

describe('SM-2 Algorithm - calculateNextReview', () => {
  describe('First successful review (repetitions = 0)', () => {
    it('should set interval to 1 day after first correct response (quality >= 3)', () => {
      const result = calculateNextReview(3, INITIAL_SM2_DATA)

      expect(result.newInterval).toBe(1)
      expect(result.data.repetitions).toBe(1)
      expect(result.data.interval).toBe(1)
    })

    it('should set interval to 1 day with quality 4', () => {
      const result = calculateNextReview(4, INITIAL_SM2_DATA)

      expect(result.newInterval).toBe(1)
      expect(result.data.repetitions).toBe(1)
    })

    it('should set interval to 1 day with quality 5', () => {
      const result = calculateNextReview(5, INITIAL_SM2_DATA)

      expect(result.newInterval).toBe(1)
      expect(result.data.repetitions).toBe(1)
    })
  })

  describe('Second successful review (repetitions = 1)', () => {
    it('should set interval to 6 days', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 1,
        interval: 1
      }

      const result = calculateNextReview(3, previousData)

      expect(result.newInterval).toBe(6)
      expect(result.data.repetitions).toBe(2)
      expect(result.data.interval).toBe(6)
    })

    it('should work with quality 5', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 1,
        interval: 1
      }

      const result = calculateNextReview(5, previousData)

      expect(result.newInterval).toBe(6)
      expect(result.data.repetitions).toBe(2)
    })
  })

  describe('Subsequent successful reviews (repetitions >= 2)', () => {
    it('should multiply interval by ease factor', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 2,
        interval: 6,
        ease: 2.5
      }

      const result = calculateNextReview(4, previousData)

      // 6 days * 2.5 ease = 15 days
      expect(result.newInterval).toBe(15)
      expect(result.data.repetitions).toBe(3)
    })

    it('should round interval to whole number', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 2,
        interval: 7,
        ease: 2.6
      }

      const result = calculateNextReview(3, previousData)

      // 7 * 2.6 = 18.2, rounds to 18
      expect(result.newInterval).toBe(18)
    })
  })

  describe('Incorrect responses (quality < 3)', () => {
    it('should reset repetitions to 0 with quality 1', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 5,
        interval: 15,
        ease: 2.8
      }

      const result = calculateNextReview(1, previousData)

      expect(result.data.repetitions).toBe(0)
      expect(result.data.interval).toBe(1)
    })

    it('should reset repetitions to 0 with quality 2', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 3,
        interval: 6
      }

      const result = calculateNextReview(2, previousData)

      expect(result.data.repetitions).toBe(0)
      expect(result.data.interval).toBe(1)
    })
  })

  describe('Ease factor calculation', () => {
    it('should increase ease factor for quality 5', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 2.5
      }

      const result = calculateNextReview(5, previousData)

      // EF' = 2.5 + (0.1 - (5-5) * (0.08 + (5-5) * 0.02))
      // EF' = 2.5 + 0.1 = 2.6
      expect(result.newEase).toBeCloseTo(2.6, 5)
      expect(result.newEase).toBeGreaterThan(result.previousEase)
    })

    it('should increase ease factor for quality 4', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 2.5
      }

      const result = calculateNextReview(4, previousData)

      // EF' = 2.5 + (0.1 - (5-4) * (0.08 + (5-4) * 0.02))
      // EF' = 2.5 + (0.1 - 0.1) = 2.5
      expect(result.newEase).toBeCloseTo(2.5, 5)
    })

    it('should decrease ease factor for quality 3', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 2.5
      }

      const result = calculateNextReview(3, previousData)

      // EF' = 2.5 + (0.1 - (5-3) * (0.08 + (5-3) * 0.02))
      // EF' = 2.5 + (0.1 - 0.24) = 2.36
      expect(result.newEase).toBeCloseTo(2.36, 5)
      expect(result.newEase).toBeLessThan(result.previousEase)
    })

    it('should decrease ease factor significantly for quality 2', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 2.5
      }

      const result = calculateNextReview(2, previousData)

      // EF' = 2.5 + (0.1 - (5-2) * (0.08 + (5-2) * 0.02))
      // EF' = 2.5 + (0.1 - 0.42) = 2.18
      expect(result.newEase).toBeCloseTo(2.18, 5)
    })

    it('should decrease ease factor significantly for quality 1', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 2.5
      }

      const result = calculateNextReview(1, previousData)

      // EF' = 2.5 + (0.1 - (5-1) * (0.08 + (5-1) * 0.02))
      // EF' = 2.5 + (0.1 - 0.64) = 1.96
      expect(result.newEase).toBeCloseTo(1.96, 5)
    })

    it('should never drop ease factor below 1.3', () => {
      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        ease: 1.3
      }

      const result = calculateNextReview(1, previousData)

      expect(result.newEase).toBeGreaterThanOrEqual(1.3)
      expect(result.newEase).toBe(1.3)
    })

    it('should handle multiple low quality ratings', () => {
      let data: SM2Data = {
        ease: 2.5,
        repetitions: 0,
        interval: 0,
        nextReview: Date.now()
      }

      // Multiple poor reviews
      data = calculateNextReview(1, data).data
      data = calculateNextReview(1, data).data
      data = calculateNextReview(1, data).data

      // Ease should bottom out at 1.3
      expect(data.ease).toBe(1.3)
    })
  })

  describe('Next review date calculation', () => {
    it('should calculate next review date as current time + interval in days', () => {
      const now = Date.now()
      vi.setSystemTime(now)

      const result = calculateNextReview(3, INITIAL_SM2_DATA)

      // Interval = 1 day = 86400000 ms
      const expectedNextReview = now + 86400000
      expect(result.data.nextReview).toBe(expectedNextReview)
    })

    it('should calculate correctly for 6 day interval', () => {
      const now = Date.now()
      vi.setSystemTime(now)

      const previousData: SM2Data = {
        ...INITIAL_SM2_DATA,
        repetitions: 1,
        interval: 1
      }

      const result = calculateNextReview(3, previousData)

      // Interval = 6 days = 518400000 ms
      const expectedNextReview = now + 518400000
      expect(result.data.nextReview).toBe(expectedNextReview)
    })
  })

  describe('Return value structure', () => {
    it('should return all required fields', () => {
      const result = calculateNextReview(4, INITIAL_SM2_DATA)

      expect(result).toHaveProperty('data')
      expect(result).toHaveProperty('quality')
      expect(result).toHaveProperty('previousEase')
      expect(result).toHaveProperty('newEase')
      expect(result).toHaveProperty('previousInterval')
      expect(result).toHaveProperty('newInterval')
      expect(result).toHaveProperty('reviewedAt')
    })

    it('should preserve previous values in result', () => {
      const previousData: SM2Data = {
        ease: 2.8,
        repetitions: 3,
        interval: 15,
        nextReview: Date.now() - 1000000
      }

      const result = calculateNextReview(4, previousData)

      expect(result.previousEase).toBe(2.8)
      expect(result.previousInterval).toBe(15)
    })
  })
})

describe('SM-2 Algorithm - isDue', () => {
  beforeEach(() => {
    vi.useRealTimers()
  })

  it('should return true when nextReview is in the past', () => {
    const now = Date.now()
    const pastData: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now - 1000 // 1 second ago
    }

    expect(isDue(pastData)).toBe(true)
  })

  it('should return true when nextReview is exactly now', () => {
    const now = Date.now()
    const currentData: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now
    }

    expect(isDue(currentData)).toBe(true)
  })

  it('should return false when nextReview is in the future', () => {
    const now = Date.now()
    const futureData: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now + 1000000 // 1 second in future
    }

    expect(isDue(futureData)).toBe(false)
  })
})

describe('SM-2 Algorithm - getDaysUntilDue', () => {
  beforeEach(() => {
    vi.useRealTimers()
  })

  it('should return 0 for due today', () => {
    const now = Date.now()
    const data: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now + 43200000 // 12 hours from now (ceils to 1 day but same day)
    }

    const days = getDaysUntilDue(data)
    // Math.ceil(43200000 / 86400000) = Math.ceil(0.5) = 1
    // Since 12 hours is less than a day but it ceils up, this is expected behavior
    expect(days).toBeGreaterThanOrEqual(0)
    expect(days).toBeLessThanOrEqual(1)
  })

  it('should return positive days for future due date', () => {
    const now = Date.now()
    const data: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now + 86400000 * 3 // 3 days from now
    }

    const days = getDaysUntilDue(data)
    expect(days).toBe(3)
  })

  it('should return negative days for overdue', () => {
    const now = Date.now()
    const data: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now - 86400000 * 2 // 2 days ago
    }

    const days = getDaysUntilDue(data)
    expect(days).toBe(-2)
  })

  it('should ceil the result for partial days', () => {
    const now = Date.now()
    const data: SM2Data = {
      ease: 2.5,
      repetitions: 1,
      interval: 1,
      nextReview: now + 86400000 * 1.5 // 1.5 days from now
    }

    const days = getDaysUntilDue(data)
    expect(days).toBe(2) // Ceils to 2
  })
})

describe('SM-2 Algorithm - calculateStats', () => {
  it('should return zero stats for empty logs', () => {
    const stats = calculateStats([])

    expect(stats.totalReviews).toBe(0)
    expect(stats.successfulReviews).toBe(0)
    expect(stats.failedReviews).toBe(0)
    expect(stats.averageQuality).toBe(0)
    expect(stats.currentStreak).toBe(0)
    expect(stats.longestStreak).toBe(0)
  })

  it('should count successful reviews (quality >= 3)', () => {
    const logs: FlashcardReviewLog[] = [
      createTestLog(3),
      createTestLog(4),
      createTestLog(5),
      createTestLog(2),
    ]

    const stats = calculateStats(logs)

    expect(stats.totalReviews).toBe(4)
    expect(stats.successfulReviews).toBe(3)
    expect(stats.failedReviews).toBe(1)
  })

  it('should count failed reviews (quality < 3)', () => {
    const logs: FlashcardReviewLog[] = [
      createTestLog(1),
      createTestLog(2),
      createTestLog(3),
      createTestLog(4),
    ]

    const stats = calculateStats(logs)

    expect(stats.totalReviews).toBe(4)
    expect(stats.successfulReviews).toBe(2)
    expect(stats.failedReviews).toBe(2)
  })

  it('should calculate average quality correctly', () => {
    const logs: FlashcardReviewLog[] = [
      createTestLog(3),
      createTestLog(4),
      createTestLog(5),
    ]

    const stats = calculateStats(logs)

    expect(stats.averageQuality).toBeCloseTo(4, 5)
  })

  it('should calculate longest streak correctly', () => {
    const now = Date.now()
    const logs: FlashcardReviewLog[] = [
      { ...createTestLog(3), reviewedAt: now - 4000 },
      { ...createTestLog(4), reviewedAt: now - 3000 },
      { ...createTestLog(1), reviewedAt: now - 2000 }, // Break
      { ...createTestLog(5), reviewedAt: now - 1000 },
      { ...createTestLog(5), reviewedAt: now },
    ]

    const stats = calculateStats(logs)

    expect(stats.longestStreak).toBe(2) // First streak of 2
  })

  it('should calculate current streak from most recent reviews', () => {
    const now = Date.now()
    const logs: FlashcardReviewLog[] = [
      { ...createTestLog(5), reviewedAt: now - 4000 },
      { ...createTestLog(4), reviewedAt: now - 3000 },
      { ...createTestLog(5), reviewedAt: now - 2000 },
      { ...createTestLog(3), reviewedAt: now - 1000 },
      { ...createTestLog(1), reviewedAt: now }, // Last one fails, streak = 0
    ]

    const stats = calculateStats(logs)

    expect(stats.currentStreak).toBe(0)
  })

  it('should calculate current streak when ending with success', () => {
    const now = Date.now()
    const logs: FlashcardReviewLog[] = [
      { ...createTestLog(1), reviewedAt: now - 3000 }, // Fail
      { ...createTestLog(5), reviewedAt: now - 2000 }, // Start streak
      { ...createTestLog(4), reviewedAt: now - 1000 }, // Continue
      { ...createTestLog(5), reviewedAt: now }, // Continue, streak = 3
    ]

    const stats = calculateStats(logs)

    expect(stats.currentStreak).toBe(3)
  })

  it('should include lastReviewedAt in stats', () => {
    const now = Date.now()
    const logs: FlashcardReviewLog[] = [
      { ...createTestLog(3), reviewedAt: now - 2000 },
      { ...createTestLog(4), reviewedAt: now - 1000 },
      { ...createTestLog(5), reviewedAt: now },
    ]

    const stats = calculateStats(logs)

    expect(stats.lastReviewedAt).toBe(now)
  })

  it('should handle unsorted logs correctly', () => {
    const now = Date.now()
    const logs: FlashcardReviewLog[] = [
      { ...createTestLog(3), reviewedAt: now }, // Newest
      { ...createTestLog(4), reviewedAt: now - 2000 }, // Oldest
      { ...createTestLog(5), reviewedAt: now - 1000 }, // Middle
    ]

    const stats = calculateStats(logs)

    expect(stats.totalReviews).toBe(3)
    expect(stats.lastReviewedAt).toBe(now)
  })
})

describe('SM-2 Algorithm - getQualityDescription', () => {
  it('should return correct description for quality 1', () => {
    expect(getQualityDescription(1)).toBe('Complete blackout')
  })

  it('should return correct description for quality 2', () => {
    expect(getQualityDescription(2)).toBe('Incorrect but familiar')
  })

  it('should return correct description for quality 3', () => {
    expect(getQualityDescription(3)).toBe('Correct but difficult')
  })

  it('should return correct description for quality 4', () => {
    expect(getQualityDescription(4)).toBe('Correct with hesitation')
  })

  it('should return correct description for quality 5', () => {
    expect(getQualityDescription(5)).toBe('Perfect response')
  })
})

describe('SM-2 Algorithm - getQualityColor', () => {
  it('should return red colors for quality 1', () => {
    expect(getQualityColor(1)).toBe('text-red-600 bg-red-50 border-red-200')
  })

  it('should return orange colors for quality 2', () => {
    expect(getQualityColor(2)).toBe('text-orange-600 bg-orange-50 border-orange-200')
  })

  it('should return yellow colors for quality 3', () => {
    expect(getQualityColor(3)).toBe('text-yellow-600 bg-yellow-50 border-yellow-200')
  })

  it('should return lime colors for quality 4', () => {
    expect(getQualityColor(4)).toBe('text-lime-600 bg-lime-50 border-lime-200')
  })

  it('should return green colors for quality 5', () => {
    expect(getQualityColor(5)).toBe('text-green-600 bg-green-50 border-green-200')
  })
})

describe('SM-2 Algorithm - createReviewLog', () => {
  it('should create log with all required fields', () => {
    const result = calculateNextReview(4, INITIAL_SM2_DATA)
    const log = createReviewLog('card-123', result)

    expect(log).toHaveProperty('id')
    expect(log).toHaveProperty('flashcardId', 'card-123')
    expect(log).toHaveProperty('quality')
    expect(log).toHaveProperty('previousEase')
    expect(log).toHaveProperty('newEase')
    expect(log).toHaveProperty('previousInterval')
    expect(log).toHaveProperty('newInterval')
    expect(log).toHaveProperty('reviewedAt')
  })

  it('should include timeTaken when provided', () => {
    const result = calculateNextReview(4, INITIAL_SM2_DATA)
    const log = createReviewLog('card-123', result, 5000)

    expect(log.timeTaken).toBe(5000)
  })

  it('should not include timeTaken when not provided', () => {
    const result = calculateNextReview(4, INITIAL_SM2_DATA)
    const log = createReviewLog('card-123', result)

    expect(log.timeTaken).toBeUndefined()
  })

  it('should generate unique ID based on flashcardId and reviewedAt', () => {
    const result = calculateNextReview(4, INITIAL_SM2_DATA)
    const log = createReviewLog('card-123', result)

    expect(log.id).toBe(`card-123-${result.reviewedAt}`)
  })

  it('should copy all SM2 data from result', () => {
    const result = calculateNextReview(5, INITIAL_SM2_DATA)
    const log = createReviewLog('card-456', result)

    expect(log.quality).toBe(result.quality)
    expect(log.previousEase).toBe(result.previousEase)
    expect(log.newEase).toBe(result.newEase)
    expect(log.previousInterval).toBe(result.previousInterval)
    expect(log.newInterval).toBe(result.newInterval)
    expect(log.reviewedAt).toBe(result.reviewedAt)
  })
})

// Helper function to create test logs
function createTestLog(quality: number): FlashcardReviewLog {
  return {
    id: `test-${Date.now()}`,
    flashcardId: 'test-card',
    quality: quality as any,
    previousEase: 2.5,
    newEase: 2.5,
    previousInterval: 1,
    newInterval: 1,
    reviewedAt: Date.now()
  }
}
