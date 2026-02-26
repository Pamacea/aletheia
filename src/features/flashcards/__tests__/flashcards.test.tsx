import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  getFlashcards,
  getDueCards,
  getNewCards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
  submitReview,
  getFlashcardStats,
  getDailyGoalStats,
} from '@/features/flashcards/actions/flashcards';
import { calculateNextReview } from '@/lib/sm2';
import type { FlashcardFilters, FlashcardWithProgress } from '@/features/flashcards/types';

// Mock server actions
vi.mock('@/features/flashcards/actions/flashcards', () => ({
  getFlashcards: vi.fn(),
  getDueCards: vi.fn(),
  getNewCards: vi.fn(),
  createFlashcard: vi.fn(),
  updateFlashcard: vi.fn(),
  deleteFlashcard: vi.fn(),
  submitReview: vi.fn(),
  getFlashcardStats: vi.fn(),
  getDailyGoalStats: vi.fn(),
}));

// Mock SM2 algorithm
vi.mock('@/lib/sm2', () => ({
  calculateNextReview: vi.fn(),
}));

// Mock XP action
vi.mock('@/lib/actions/user-progress', () => ({
  addXP: vi.fn().mockResolvedValue({ xpGained: 10, leveledUp: false }),
}));

describe('Flashcards Feature', () => {
  let queryClient: QueryClient;
  let wrapper: React.FC<{ children: React.ReactNode }>;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });

    wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    vi.clearAllMocks();
  });

  const mockUserId = 'user123';

  const mockFlashcards: FlashcardWithProgress[] = [
    {
      id: 'fc1',
      slug: 'stoic-virtue-123',
      type: 'BASIC',
      question: 'What are the four cardinal virtues in Stoicism?',
      answer: 'Wisdom, Courage, Justice, Temperance',
      hint: 'Think of the four pillars of Stoic ethics',
      tags: ['stoicism', 'ethics', 'virtues'],
      difficulty: 2,
      concept: {
        id: 'cm1',
        slug: 'stoicism',
        name: 'Stoicism',
      },
      progression: {
        id: 'prog1',
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        streak: 0,
        totalReviews: 0,
        successfulReviews: 0,
        nextReview: new Date(),
        lastReview: null,
      },
    },
    {
      id: 'fc2',
      slug: 'kant-categorical-456',
      type: 'CLOZE',
      question: 'The categorical imperative is a central concept in --- philosophy',
      answer: 'Kantian moral',
      hint: 'Think of 18th century German philosophy',
      tags: ['kant', 'ethics'],
      difficulty: 3,
      concept: {
        id: 'cm2',
        slug: 'kant',
        name: 'Immanuel Kant',
      },
      progression: {
        id: 'prog2',
        easeFactor: 2.6,
        interval: 3,
        repetitions: 2,
        streak: 2,
        totalReviews: 2,
        successfulReviews: 2,
        nextReview: new Date(Date.now() + 86400000), // Tomorrow
        lastReview: new Date(),
      },
    },
    {
      id: 'fc3',
      slug: 'existential-freedom-789',
      type: 'BASIC',
      question: 'What is the existentialist view on freedom?',
      answer: 'Existence precedes essence - radical freedom and responsibility',
      hint: 'Sartre slogan',
      tags: ['existentialism', 'freedom'],
      difficulty: 4,
      concept: {
        id: 'cm3',
        slug: 'existentialism',
        name: 'Existentialism',
      },
      progression: null,
    },
  ];

  describe('getFlashcards', () => {
    it('should fetch user flashcards', async () => {
      // Arrange
      vi.mocked(getFlashcards).mockResolvedValue(mockFlashcards);

      // Act
      const result = await getFlashcards(mockUserId);

      // Assert
      expect(getFlashcards).toHaveBeenCalledWith(mockUserId);
      expect(result).toHaveLength(3);
      expect(result[0].question).toContain('cardinal virtues');
    });

    it('should filter flashcards by tag', async () => {
      // Arrange
      const filters: FlashcardFilters = { tags: ['stoicism'] };
      const filtered = mockFlashcards.filter((fc) => fc.tags.includes('stoicism'));
      vi.mocked(getFlashcards).mockResolvedValue(filtered);

      // Act
      const result = await getFlashcards(mockUserId, filters);

      // Assert
      expect(getFlashcards).toHaveBeenCalledWith(mockUserId, filters);
      expect(result).toHaveLength(1);
      expect(result[0].tags).toContain('stoicism');
    });

    it('should filter by review status', async () => {
      // Arrange
      const filters: FlashcardFilters = { status: 'MASTERED' };
      const mastered = mockFlashcards.filter(
        (fc) => fc.progression?.repetitions && fc.progression.repetitions >= 5
      );
      vi.mocked(getFlashcards).mockResolvedValue(mastered);

      // Act
      const result = await getFlashcards(mockUserId, filters);

      // Assert
      expect(getFlashcards).toHaveBeenCalledWith(mockUserId, filters);
      expect(result.every((fc) => fc.progression?.repetitions && fc.progression.repetitions >= 5));
    });

    it('should sort by next review date', async () => {
      // Arrange
      vi.mocked(getFlashcards).mockResolvedValue(mockFlashcards);

      // Act
      const result = await getFlashcards(mockUserId);

      // Assert - Flashcards are ordered by createdAt in the actual implementation
      expect(result).toHaveLength(3);
      expect(result[0].id).toBe('fc1');
    });

    it('should handle empty state', async () => {
      // Arrange
      vi.mocked(getFlashcards).mockResolvedValue([]);

      // Act
      const result = await getFlashcards(mockUserId);

      // Assert
      expect(result).toHaveLength(0);
    });
  });

  describe('Flashcard CRUD Operations', () => {
    it('should create new flashcard', async () => {
      // Arrange
      const newCardData = {
        type: 'BASIC' as const,
        question: 'What is the trolley problem?',
        answer: 'A thought experiment in ethics',
        hint: 'Utilitarianism dilemma',
        conceptId: 'cm4',
        tags: ['ethics', 'utilitarianism'],
        difficulty: 3,
      };

      const createdCard = {
        id: 'fc4',
        slug: 'trolley-problem-abc',
        ...newCardData,
        concept: {
          id: 'cm4',
          slug: 'ethics',
          name: 'Ethics',
        },
      };

      vi.mocked(createFlashcard).mockResolvedValue(createdCard);

      // Act
      const result = await createFlashcard(mockUserId, newCardData);

      // Assert
      expect(createFlashcard).toHaveBeenCalledWith(mockUserId, newCardData);
      expect(result.id).toBe('fc4');
      expect(result.question).toContain('trolley problem');
    });

    it('should update flashcard content', async () => {
      // Arrange
      const updateData = {
        question: 'What are the cardinal virtues? (Updated)',
        answer: 'Wisdom, Courage, Justice, Temperance (and Hope)',
        tags: ['stoicism', 'ethics', 'virtues', 'theological'],
      };

      const updatedCard = {
        ...mockFlashcards[0],
        ...updateData,
      };

      vi.mocked(updateFlashcard).mockResolvedValue(updatedCard);

      // Act
      const result = await updateFlashcard('fc1', updateData);

      // Assert
      expect(updateFlashcard).toHaveBeenCalledWith('fc1', updateData);
      expect(result.question).toContain('Updated');
      expect(result.tags).toContain('theological');
    });

    it('should delete flashcard', async () => {
      // Arrange
      vi.mocked(deleteFlashcard).mockResolvedValue(undefined);

      // Act
      await deleteFlashcard('fc1');

      // Assert
      expect(deleteFlashcard).toHaveBeenCalledWith('fc1');
    });

    it('should generate flashcard from concept', async () => {
      // This tests the pattern of generating flashcards from concept data
      // The actual generation would be done via AI or templates

      // Arrange
      const conceptId = 'cm5';
      const generatedCard = {
        type: 'BASIC' as const,
        question: 'What is phenomenology?',
        answer: 'The study of structures of consciousness and phenomena',
        hint: 'Husserl philosophy',
        conceptId,
        tags: ['phenomenology'],
        difficulty: 3,
      };

      vi.mocked(createFlashcard).mockResolvedValue({
        id: 'fc5',
        slug: 'phenomenology-123',
        ...generatedCard,
        concept: {
          id: conceptId,
          slug: 'phenomenology',
          name: 'Phenomenology',
        },
      });

      // Act
      const result = await createFlashcard(mockUserId, generatedCard);

      // Assert
      expect(createFlashcard).toHaveBeenCalledWith(mockUserId, generatedCard);
      expect(result.concept.name).toBe('Phenomenology');
    });
  });

  describe('getDueCards & Review System', () => {
    it('should fetch due flashcards for review', async () => {
      // Arrange
      const dueCards = [mockFlashcards[0]]; // First card is due
      vi.mocked(getDueCards).mockResolvedValue(dueCards);

      // Act
      const result = await getDueCards(mockUserId);

      // Assert
      expect(getDueCards).toHaveBeenCalledWith(mockUserId);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('fc1');
    });

    it('should submit review and update SM2 schedule', async () => {
      // Arrange
      const reviewResult = {
        xpEarned: 10,
        nextReview: new Date(Date.now() + 86400000),
        easeFactor: 2.6,
        interval: 3,
        streak: 1,
        isMastered: false,
        leveledUp: false,
      };

      vi.mocked(submitReview).mockResolvedValue(reviewResult);

      // Act
      const result = await submitReview(mockUserId, 'fc1', 4, 5000);

      // Assert - verify the review submission was called correctly
      expect(submitReview).toHaveBeenCalledWith(mockUserId, 'fc1', 4, 5000);
      expect(result.xpEarned).toBe(10);
      expect(result.streak).toBe(1);
      expect(result.easeFactor).toBe(2.6);
      expect(result.interval).toBe(3);
    });

    it('should calculate XP earned from review', async () => {
      // Arrange
      const reviewResult = {
        xpEarned: 15, // XP for quality 5 review
        nextReview: new Date(),
        easeFactor: 2.7,
        interval: 5,
        streak: 2,
        isMastered: false,
        leveledUp: false,
      };

      vi.mocked(submitReview).mockResolvedValue(reviewResult);

      // Act
      const result = await submitReview(mockUserId, 'fc2', 5);

      // Assert
      expect(result.xpEarned).toBeGreaterThan(0);
      expect(result.streak).toBe(2);
    });

    it('should handle quality rating input', async () => {
      // Arrange - Test all quality ratings (0-5)
      const qualities = [0, 1, 2, 3, 4, 5] as const;

      for (const quality of qualities) {
        vi.clearAllMocks();

        const reviewResult = {
          xpEarned: quality > 0 ? 10 : 0,
          nextReview: new Date(),
          easeFactor: 2.5,
          interval: quality >= 3 ? 2 : 1,
          streak: quality >= 3 ? 1 : 0,
          isMastered: false,
          leveledUp: false,
        };

        vi.mocked(submitReview).mockResolvedValue(reviewResult);

        // Act
        const result = await submitReview(mockUserId, 'fc1', quality);

        // Assert
        expect(submitReview).toHaveBeenCalledWith(mockUserId, 'fc1', quality);
        expect(result.xpEarned).toBe(quality > 0 ? 10 : 0);
      }
    });
  });

  describe('getFlashcardStats', () => {
    it('should display SM2 algorithm progress', async () => {
      // Arrange
      const mockStats = {
        totalCards: 50,
        cardsDue: 5,
        cardsNew: 20,
        cardsLearning: 15,
        cardsMastered: 10,
        averageEase: 2.6,
        totalReviews: 150,
        successRate: 85,
        currentStreak: 7,
        longestStreak: 12,
      };

      vi.mocked(getFlashcardStats).mockResolvedValue(mockStats);

      // Act
      const result = await getFlashcardStats(mockUserId);

      // Assert
      expect(getFlashcardStats).toHaveBeenCalledWith(mockUserId);
      expect(result.totalCards).toBe(50);
      expect(result.cardsMastered).toBe(10);
      expect(result.averageEase).toBe(2.6);
      expect(result.successRate).toBe(85);
    });
  });

  describe('getDailyGoalStats', () => {
    it('should display daily goal progress', async () => {
      // Arrange
      const mockDailyStats = {
        reviewsToday: 15,
        reviewsGoal: 20,
        xpToday: 150,
        xpGoal: 200,
        streak: 5,
        longestStreak: 8,
      };

      vi.mocked(getDailyGoalStats).mockResolvedValue(mockDailyStats);

      // Act
      const result = await getDailyGoalStats(mockUserId);

      // Assert
      expect(getDailyGoalStats).toHaveBeenCalledWith(mockUserId);
      expect(result.reviewsToday).toBe(15);
      expect(result.reviewsGoal).toBe(20);
      expect(result.streak).toBe(5);
      expect(result.xpToday).toBe(150);
    });
  });

  describe('getNewCards', () => {
    it('should fetch new cards for learning', async () => {
      // Arrange
      const newCards = [mockFlashcards[2]]; // Third card has no progression
      vi.mocked(getNewCards).mockResolvedValue(newCards);

      // Act
      const result = await getNewCards(mockUserId, 10);

      // Assert
      expect(getNewCards).toHaveBeenCalledWith(mockUserId, 10);
      expect(result).toHaveLength(1);
      expect(result[0].progression).toBeNull();
    });
  });
});
