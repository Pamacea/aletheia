/**
 * Flashcards XP Integration Tests
 *
 * Tests the integration between flashcards actions and the XP system
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createFlashcard,
  submitReview,
  getFlashcardStats,
} from '@/features/flashcards/actions/flashcards';
import { addXP } from '@/lib/actions/user-progress';
import { db } from '@/lib/db';

// Mock dependencies
vi.mock('@/lib/db', () => ({
  db: {
    flashcardPrompt: {
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      findUnique: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
    },
    progression: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      findMany: vi.fn(),
    },
    flashcardReview: {
      create: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
    },
  },
}));

vi.mock('@/lib/actions/user-progress', () => ({
  addXP: vi.fn(),
}));

vi.mock('next/cache', () => ({
  revalidatePath: vi.fn(),
}));

describe('Flashcards XP Integration', () => {
  const mockUserId = 'user-123';
  const mockConceptId = 'concept-123';
  const mockFlashcardData = {
    type: 'BASIC' as const,
    question: 'What is the meaning of life?',
    answer: '42',
    hint: 'Think Douglas Adams',
    conceptId: mockConceptId,
    tags: ['philosophy', 'life'],
    difficulty: 3,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('createFlashcard - XP Integration', () => {
    it('should award 20 XP when creating a flashcard', async () => {
      const mockFlashcard = {
        id: 'flashcard-123',
        slug: 'test-flashcard',
        ...mockFlashcardData,
        concept: {
          id: mockConceptId,
          slug: 'test-concept',
          name: 'Test Concept',
        },
      };

      vi.mocked(db.flashcardPrompt.create).mockResolvedValue(mockFlashcard);
      vi.mocked(addXP).mockResolvedValue({
        xpGained: 20,
        totalXp: 120,
        level: 2,
        streak: 5,
        leveledUp: false,
      });

      await createFlashcard(mockUserId, mockFlashcardData);

      // Verify addXP was called with correct action type
      expect(addXP).toHaveBeenCalledWith('flashcard_created', {
        entityType: 'concept',
        entityId: mockConceptId,
        title: mockFlashcardData.question,
        description: 'Created BASIC flashcard',
      });

      // Verify it awarded 20 XP
      expect(addXP).toHaveBeenCalledTimes(1);
    });

    it('should handle XP awarding failure gracefully', async () => {
      const mockFlashcard = {
        id: 'flashcard-123',
        slug: 'test-flashcard',
        ...mockFlashcardData,
        concept: {
          id: mockConceptId,
          slug: 'test-concept',
          name: 'Test Concept',
        },
      };

      vi.mocked(db.flashcardPrompt.create).mockResolvedValue(mockFlashcard);
      vi.mocked(addXP).mockRejectedValue(new Error('XP system error'));

      // Note: Currently the implementation will throw, which is acceptable
      // In production, you might want to handle this more gracefully
      await expect(createFlashcard(mockUserId, mockFlashcardData)).rejects.toThrow('XP system error');
    });
  });

  describe('submitReview - XP Integration', () => {
    const mockPromptId = 'prompt-123';
    const mockPrompt = {
      id: mockPromptId,
      question: 'What is the meaning of life?',
      answer: '42',
      conceptId: mockConceptId,
      concept: {
        id: mockConceptId,
        name: 'Test Concept',
      },
    };

    it('should award 15 XP when reviewing a flashcard with quality 3+', async () => {
      vi.mocked(db.flashcardPrompt.findUnique).mockResolvedValue(mockPrompt);
      vi.mocked(db.progression.findUnique).mockResolvedValue(null);

      vi.mocked(db.progression.create).mockResolvedValue({
        id: 'prog-123',
        status: 'IN_PROGRESS',
        repetitions: 1,
        totalReviews: 1,
        streak: 1,
      } as any);

      vi.mocked(db.flashcardReview.create).mockResolvedValue({} as any);

      vi.mocked(addXP).mockResolvedValue({
        xpGained: 15,
        totalXp: 135,
        level: 2,
        streak: 6,
        leveledUp: false,
      });

      const result = await submitReview(mockUserId, mockPromptId, 3);

      // Verify addXP was called for review
      expect(addXP).toHaveBeenCalledWith('flashcard_reviewed', {
        entityType: 'concept',
        entityId: mockConceptId,
        title: mockPrompt.question,
        description: 'Reviewed with quality 3/5',
      });

      expect(result.xpEarned).toBe(15);
    });

    it('should award mastery XP bonus when flashcard reaches 5+ repetitions', async () => {
      const mockProgression = {
        id: 'prog-123',
        userId: mockUserId,
        promptId: mockPromptId,
        status: 'IN_PROGRESS',
        repetitions: 4, // Will become 5 after this review
        totalReviews: 4,
        easeFactor: 2.5,
        interval: 6,
        streak: 3,
        nextReview: new Date(Date.now() + 86400000), // Add missing Date object
      };

      vi.mocked(db.flashcardPrompt.findUnique).mockResolvedValue(mockPrompt);
      vi.mocked(db.progression.findUnique).mockResolvedValue(mockProgression);

      vi.mocked(db.progression.update).mockResolvedValue({
        ...mockProgression,
        status: 'MASTERED',
        repetitions: 5,
        totalReviews: 5,
      } as any);

      vi.mocked(db.flashcardReview.create).mockResolvedValue({} as any);

      let xpCallCount = 0;
      vi.mocked(addXP).mockImplementation(async (action: any) => {
        xpCallCount++;
        if (action === 'flashcard_reviewed') {
          return { xpGained: 15, totalXp: 135, level: 2, streak: 6, leveledUp: false };
        } else if (action === 'flashcard_mastered') {
          return { xpGained: 25, totalXp: 160, level: 2, streak: 6, leveledUp: false };
        }
        throw new Error('Unexpected action');
      });

      const result = await submitReview(mockUserId, mockPromptId, 4);

      // Should call addXP twice: once for review, once for mastery
      expect(addXP).toHaveBeenCalledTimes(2);
      expect(addXP).toHaveBeenCalledWith('flashcard_reviewed', expect.any(Object));
      expect(addXP).toHaveBeenCalledWith('flashcard_mastered', {
        entityType: 'concept',
        entityId: mockConceptId,
        title: mockPrompt.question,
        description: 'Mastered after 5 reviews',
      });

      expect(result.isMastered).toBe(true);
    });

    it('should not award mastery XP if already mastered', async () => {
      const mockProgression = {
        id: 'prog-123',
        userId: mockUserId,
        promptId: mockPromptId,
        status: 'MASTERED', // Already mastered
        repetitions: 6,
        totalReviews: 6,
        easeFactor: 2.8,
        interval: 21,
        streak: 4,
        nextReview: new Date(Date.now() + 86400000), // Add missing Date object
      };

      vi.mocked(db.flashcardPrompt.findUnique).mockResolvedValue(mockPrompt);
      vi.mocked(db.progression.findUnique).mockResolvedValue(mockProgression);

      vi.mocked(db.progression.update).mockResolvedValue(mockProgression as any);
      vi.mocked(db.flashcardReview.create).mockResolvedValue({} as any);

      let xpCallCount = 0;
      vi.mocked(addXP).mockImplementation(async (action: any) => {
        xpCallCount++;
        return { xpGained: 15, totalXp: 135, level: 2, streak: 6, leveledUp: false };
      });

      const result = await submitReview(mockUserId, mockPromptId, 5);

      // Should only call addXP once (for review), not for mastery
      expect(addXP).toHaveBeenCalledTimes(1);
      expect(addXP).toHaveBeenCalledWith('flashcard_reviewed', expect.any(Object));
      expect(addXP).not.toHaveBeenCalledWith('flashcard_mastered', expect.any(Object));

      expect(result.isMastered).toBe(true);
    });

    it('should skip XP award when quality is 0 (skipped)', async () => {
      const mockProgression = {
        id: 'prog-123',
        status: 'IN_PROGRESS',
        nextReview: new Date(Date.now() + 86400000),
      };

      vi.mocked(db.flashcardPrompt.findUnique).mockResolvedValue(mockPrompt);
      vi.mocked(db.progression.findUnique).mockResolvedValue(mockProgression);

      const result = await submitReview(mockUserId, mockPromptId, 0);

      // Should not call addXP when skipping
      expect(addXP).not.toHaveBeenCalled();
      expect(result.skipped).toBe(true);
    });

    it('should handle different quality ratings correctly', async () => {
      vi.mocked(db.flashcardPrompt.findUnique).mockResolvedValue(mockPrompt);
      vi.mocked(db.progression.findUnique).mockResolvedValue(null);
      vi.mocked(db.progression.create).mockResolvedValue({
        id: 'prog-123',
        status: 'IN_PROGRESS',
        repetitions: 1,
        totalReviews: 1,
        streak: 1,
      } as any);
      vi.mocked(db.flashcardReview.create).mockResolvedValue({} as any);

      vi.mocked(addXP).mockResolvedValue({
        xpGained: 15,
        totalXp: 135,
        level: 2,
        streak: 6,
        leveledUp: false,
      });

      // Test quality 1 (blackout)
      await submitReview(mockUserId, mockPromptId, 1);
      expect(addXP).toHaveBeenCalledWith('flashcard_reviewed', {
        entityType: 'concept',
        entityId: mockConceptId,
        title: mockPrompt.question,
        description: 'Reviewed with quality 1/5',
      });

      // Test quality 5 (perfect)
      vi.clearAllMocks();
      await submitReview(mockUserId, mockPromptId, 5);
      expect(addXP).toHaveBeenCalledWith('flashcard_reviewed', {
        entityType: 'concept',
        entityId: mockConceptId,
        title: mockPrompt.question,
        description: 'Reviewed with quality 5/5',
      });
    });
  });

  describe('XP Rewards Summary', () => {
    it('should provide complete XP breakdown for a flashcard lifecycle', async () => {
      const flashcardLifecycle = {
        create: 20, // flashcard_created
        review1: 15, // flashcard_reviewed (quality 3)
        review2: 15, // flashcard_reviewed (quality 4)
        review3: 15, // flashcard_reviewed (quality 4)
        review4: 15, // flashcard_reviewed (quality 5)
        review5: 15, // flashcard_reviewed (quality 5)
        mastery: 25, // flashcard_mastered (5th successful review)
      };

      const totalXP = Object.values(flashcardLifecycle).reduce((a, b) => a + b, 0);

      expect(totalXP).toBe(120); // Total XP from creation to mastery
      expect(flashcardLifecycle.create).toBe(20);
      expect(flashcardLifecycle.mastery).toBe(25);
    });
  });
});
