'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Volume2,
  VolumeX,
  Home,
  Pause,
  Play,
  SkipForward,
} from 'lucide-react';
import type { FlashcardWithProgress, UIQualityRating } from '@/features/flashcards/types';
import { cn } from '@/lib/utils/cn';
import { FlashcardCard } from '@/features/flashcards/components/FlashcardCard';
import { SessionStats, DailyGoal } from '@/features/flashcards/components/SM2Progress';
import { QUALITY_LABELS } from '@/features/flashcards/types';
import { Button } from '@/ui/atoms/Button';
import { submitReview } from '@/features/flashcards/actions/flashcards';
import { useToastActions } from '@/ui/hooks/useToastActions';

interface ReviewClientProps {
  cards: FlashcardWithProgress[];
  dailyGoal: {
    reviewsToday: number;
    reviewsGoal: number;
    xpToday: number;
    xpGoal: number;
    streak: number;
  };
  userId: string;
}

export function ReviewClient({ cards, dailyGoal, userId }: ReviewClientProps) {
  const { showSuccess, showCustomToast } = useToastActions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardState, setCardState] = useState<'question' | 'answer'>('question');
  const [cardsReviewed, setCardsReviewed] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastRating, setLastRating] = useState<number | null>(null);

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex === cards.length - 1;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isSubmitting) return;

      // Space or Enter to show answer
      if ((e.code === 'Space' || e.code === 'Enter') && cardState === 'question') {
        e.preventDefault();
        setCardState('answer');
      }

      // Number keys for quality rating
      if (cardState === 'answer' && e.key >= '0' && e.key <= '5') {
        e.preventDefault();
        handleReview(parseInt(e.key) as 0 | 1 | 2 | 3 | 4 | 5);
      }

      // A for audio toggle
      if (e.key === 'a' || e.key === 'A') {
        setAudioEnabled(!audioEnabled);
      }

      // P for pause
      if (e.key === 'p' || e.key === 'P') {
        setIsPaused(!isPaused);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [cardState, audioEnabled, isSubmitting]);

  // Text-to-speech for question
  useEffect(() => {
    if (audioEnabled && cardState === 'question' && currentCard) {
      const utterance = new SpeechSynthesisUtterance(currentCard.question);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [audioEnabled, cardState, currentCard]);

  const handleReview = useCallback(
    async (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
      if (!currentCard || isSubmitting) return;

      setIsSubmitting(true);
      setLastRating(quality);

      try {
        const result = await submitReview(currentCard.id, quality);

        if (!result.skipped) {
          setCardsReviewed((prev) => prev + 1);
          setTotalXP((prev) => prev + (result.xpEarned ?? 0));
          setSessionStreak((prev) => (quality >= 3 ? prev + 1 : 0));

          // Show feedback toast based on rating
          if (quality === 0) {
            // Card skipped - no toast needed, just move on
          } else if (quality >= 4) {
            showSuccess(`+${result.xpEarned} XP - ${QUALITY_LABELS[quality].label}`, 'Excellent!');
          } else if (quality === 3) {
            showSuccess(`+${result.xpEarned} XP - ${QUALITY_LABELS[quality].label}`, 'Bien joué!');
          } else {
            // Low rating - show error toast to indicate need for review
            showCustomToast({
              type: 'error',
              title: `À revoir (+${result.xpEarned} XP)`,
              message: QUALITY_LABELS[quality].label,
            });
          }
        }

        // Move to next card or show completion
        if (isLastCard) {
          setShowCompletion(true);
        } else {
          // Small delay for smooth transition
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setCardState('question');
            setLastRating(null);
          }, 300);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [currentCard, isLastCard, isSubmitting, userId, showSuccess, showCustomToast]
  );

  const handleShowAnswer = () => {
    setCardState('answer');
  };

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-paper-50 flex items-center justify-center p-4">
        <motion.div
          className="bg-white -2xl shadow-xl p-8 max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-bold text-sepia-900 mb-2">All Caught Up!</h2>
          <p className="text-ink-light mb-6">No cards due for review right now.</p>
          <Button href="/profile/flashcards" className="w-full">
            Back to Flashcards
          </Button>
        </motion.div>
      </div>
    );
  }

  if (showCompletion) {
    return (
      <div className="min-h-screen bg-paper-50 flex items-center justify-center p-4">
        <motion.div
          className="bg-white -2xl shadow-xl p-8 max-w-md w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <CheckCircle2 className="w-20 h-20 mx-auto mb-4 text-green-500" />
            </motion.div>
            <h2 className="text-3xl font-bold text-sepia-900 mb-2">Session Complete!</h2>
            <p className="text-ink-light">Great work on your review session</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-sepia-50 ">
              <span className="text-ink-light">Cards Reviewed</span>
              <span className="text-2xl font-bold text-sepia-700">{cardsReviewed}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-amber-50 ">
              <span className="text-ink-light">XP Earned</span>
              <span className="text-2xl font-bold text-amber-700">{totalXP}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 ">
              <span className="text-ink-light">Best Streak</span>
              <span className="text-2xl font-bold text-green-700">×{sessionStreak}</span>
            </div>
          </div>

          <Button href="/profile/flashcards" className="w-full">
            <Home className="w-4 h-4 mr-2" />
            Back to Flashcards
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header Bar */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600 sticky top-0 z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button href="/profile/flashcards" variant="ghost" size="sm">
                <Home className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="font-bold text-sepia-900">Review Mode</h1>
                <p className="text-xs text-ink-light">
                  Card {currentIndex + 1} of {cards.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={cn(
                  'p-2  transition-colors',
                  audioEnabled ? 'bg-sepia-100 text-sepia-700' : 'hover:bg-paper-100 text-ink-light'
                )}
                title={audioEnabled ? 'Disable audio (A)' : 'Enable audio (A)'}
              >
                {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={cn(
                  'p-2  transition-colors',
                  isPaused ? 'bg-amber-100 text-amber-700' : 'hover:bg-paper-100 text-ink-light'
                )}
                title={isPaused ? 'Resume (P)' : 'Pause (P)'}
              >
                {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-paper-200">
        <div className="h-1 bg-paper-200">
          <motion.div
            className="h-full bg-gradient-to-r from-sepia-500 to-sepia-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Flashcard Area */}
          <div className="lg:col-span-2">
            {isPaused ? (
              <motion.div
                className="bg-white -2xl shadow-xl p-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Pause className="w-16 h-16 mx-auto mb-4 text-sepia-500" />
                <h2 className="text-2xl font-bold text-sepia-900 mb-2">Session Paused</h2>
                <p className="text-ink-light mb-6">Press P or click the button to resume</p>
                <Button onClick={() => setIsPaused(false)}>Resume Review</Button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <FlashcardCard
                    flashcard={currentCard}
                    state={cardState}
                    onShowAnswer={handleShowAnswer}
                  />

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-6">
                    <Button
                      onClick={() => {
                        if (currentIndex > 0) {
                          setCurrentIndex(currentIndex - 1);
                          setCardState('question');
                        }
                      }}
                      disabled={currentIndex === 0}
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      ← Précédent
                    </Button>

                    <span className="text-sm text-ink-light">
                      Carte {currentIndex + 1} / {cards.length}
                    </span>

                    <Button
                      onClick={() => {
                        if (currentIndex < cards.length - 1) {
                          setCurrentIndex(currentIndex + 1);
                          setCardState('question');
                        }
                      }}
                      disabled={currentIndex === cards.length - 1}
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      Suivant →
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Quality Rating Buttons */}
            {cardState === 'answer' && !isPaused && (
              <motion.div
                className="mt-8 bg-white  shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-center text-sm text-ink-light mb-4">How well did you know this?</p>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.entries(QUALITY_LABELS) as [string, any][]).map(([rating, config]) => {
                    const ratingNum = Number(rating) as UIQualityRating;
                    const isSelected = lastRating === ratingNum;
                    return (
                      <motion.button
                        key={rating}
                        onClick={() => handleReview(ratingNum)}
                        disabled={isSubmitting}
                        whileHover={{ scale: isSelected ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'p-4  border-2 text-left transition-all relative',
                          config.color.replace('bg-', 'border-').replace('500', '500'),
                          'hover:opacity-80',
                          'disabled:opacity-50 disabled:cursor-not-allowed',
                          isSelected && 'ring-2 ring-offset-2 ring-sepia-600'
                        )}
                      >
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-white opacity-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <div className="text-2xl font-bold mb-1 relative z-10">{rating}</div>
                        <div className="text-xs font-medium opacity-90 relative z-10">{config.label}</div>
                      </motion.button>
                    );
                  })}
                </div>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => handleReview(0)}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 text-sm text-ink-light hover:text-ink transition-colors"
                  >
                    <SkipForward className="w-4 h-4" />
                    Skip this card (0)
                  </button>
                </div>
                <p className="text-xs text-ink-light text-center mt-4">
                  Tip: Use keyboard shortcuts 0-5 for quick rating
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Stats */}
            <SessionStats
              cardsReviewed={cardsReviewed}
              totalCards={cards.length}
              xpEarned={totalXP}
              streak={sessionStreak}
            />

            {/* Daily Goal */}
            <DailyGoal
              reviewsToday={dailyGoal.reviewsToday + cardsReviewed}
              reviewsGoal={dailyGoal.reviewsGoal}
              xpToday={dailyGoal.xpToday + totalXP}
              xpGoal={dailyGoal.xpGoal}
              streak={dailyGoal.streak}
            />

            {/* Keyboard Shortcuts */}
            <div className="bg-white  shadow p-4">
              <h3 className="font-bold text-sepia-900 mb-3">Keyboard Shortcuts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-light">Show Answer</span>
                  <kbd className="px-2 py-1 bg-paper-100 ">Space / Enter</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-light">Rate 0-5</span>
                  <kbd className="px-2 py-1 bg-paper-100 ">0-5</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-light">Toggle Audio</span>
                  <kbd className="px-2 py-1 bg-paper-100 ">A</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-light">Pause</span>
                  <kbd className="px-2 py-1 bg-paper-100 ">P</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
