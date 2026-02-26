/**
 * FlashcardCard - Display component for flashcards
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Brain, Quote, FileText, Lightbulb } from 'lucide-react';
import type { FlashcardType, FlashcardWithProgress, FlashcardState } from '../types';
import { cn } from '@/lib/utils/cn';

interface FlashcardCardProps {
  flashcard: FlashcardWithProgress;
  state?: FlashcardState;
  onShowAnswer?: () => void;
  onShowHint?: () => void;
  showProgress?: boolean;
  className?: string;
}

const cardTypeIcons: Record<FlashcardType, React.ReactNode> = {
  BASIC: <BookOpen className="w-5 h-5" />,
  CLOZE: <FileText className="w-5 h-5" />,
  CONCEPT: <Brain className="w-5 h-5" />,
  QUOTE: <Quote className="w-5 h-5" />,
  ESSAY: <Lightbulb className="w-5 h-5" />,
};

const cardTypeColors: Record<FlashcardType, string> = {
  BASIC: 'border-sepia-300 bg-sepia-50/30',
  CLOZE: 'border-blue-300 bg-blue-50/30',
  CONCEPT: 'border-purple-300 bg-purple-50/30',
  QUOTE: 'border-amber-300 bg-amber-50/30',
  ESSAY: 'border-emerald-300 bg-emerald-50/30',
};

export function FlashcardCard({
  flashcard,
  state = 'question',
  onShowAnswer,
  onShowHint,
  showProgress = true,
  className,
}: FlashcardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [localState, setLocalState] = useState<FlashcardState>(state);

  const handleCardClick = () => {
    if (localState === 'question') {
      setLocalState('answer');
      setIsFlipped(true);
      onShowAnswer?.();
    } else if (localState === 'answer') {
      setLocalState('question');
      setIsFlipped(false);
    }
  };

  const handleShowHint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalState('hint');
    onShowHint?.();
  };

  const renderQuestion = () => (
    <div className="space-y-6">
      {/* Card Type Badge */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            'flex items-center gap-2 px-3 py-1.5 text-sm font-medium',
            cardTypeColors[flashcard.type]
          )}
        >
          {cardTypeIcons[flashcard.type]}
          <span>{flashcard.type}</span>
        </div>
        {flashcard.progression && (
          <div className="flex items-center gap-2 text-sm text-ink-light">
            <span>Streak: {flashcard.progression.streak}</span>
            <span>•</span>
            <span>Interval: {flashcard.progression.interval}d</span>
          </div>
        )}
      </div>

      {/* Concept Link */}
      {flashcard.concept && (
        <div className="text-sm">
          <span className="text-ink-light">Concept: </span>
          <span className="font-medium text-sepia-700">{flashcard.concept.name}</span>
        </div>
      )}

      {/* Question Content */}
      <div className="prose prose-lg max-w-none">
        {flashcard.type === 'CLOZE' ? (
          <ClozeQuestion question={flashcard.question} />
        ) : (
          <p className="text-2xl font-playfair leading-relaxed">{flashcard.question}</p>
        )}
      </div>

      {/* Tags */}
      {flashcard.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {flashcard.tags.map((tag, tagIndex) => (
            <span
              key={`${flashcard.id}-tag-${tagIndex}`}
              className="px-2 py-1 text-xs bg-paper-200 text-ink-light"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hint Button */}
      {flashcard.hint && localState === 'question' && (
        <button
          onClick={handleShowHint}
          className="flex items-center gap-2 text-sm text-sepia-600 hover:text-sepia-700 transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          Show Hint
        </button>
      )}

      {/* Difficulty Indicator */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'w-2 h-2',
              i < flashcard.difficulty ? 'bg-sepia-500' : 'bg-paper-300'
            )}
          />
        ))}
      </div>
    </div>
  );

  const renderHint = () => (
    <div className="space-y-4">
      <div className="p-4 bg-amber-50 border border-amber-200">
        <div className="flex items-start gap-2 text-amber-800">
          <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Hint</p>
            <p className="text-sm mt-1">{flashcard.hint}</p>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLocalState('answer');
          setIsFlipped(true);
        }}
        className="w-full py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors font-medium"
      >
        Show Answer
      </button>
    </div>
  );

  const renderAnswer = () => {
    // Validate that answer exists
    if (!flashcard.answer || flashcard.answer.trim() === '') {
      return (
        <div className="space-y-6">
          <div className="text-sm text-ink-light font-medium">Answer</div>
          <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800">
            <p className="font-medium">⚠️ No answer available</p>
            <p className="text-sm mt-1">This flashcard doesn't have an answer yet. Please edit it to add the answer.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-sm text-ink-light font-medium">Answer</div>

        <div className="prose prose-lg max-w-none">
          {flashcard.type === 'CLOZE' ? (
            <ClozeAnswer question={flashcard.question} answer={flashcard.answer} />
          ) : flashcard.type === 'QUOTE' ? (
            <QuoteAnswer answer={flashcard.answer} />
          ) : (
            <div className="text-xl leading-relaxed whitespace-pre-wrap">{flashcard.answer}</div>
          )}
        </div>

        {/* Progress Stats */}
        {showProgress && flashcard.progression && (
          <div className="pt-4 border-t border-paper-200">
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="text-ink-light">Ease Factor</div>
                <div className="text-lg font-semibold text-sepia-700">
                  {flashcard.progression.easeFactor.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-ink-light">Reviews</div>
                <div className="text-lg font-semibold text-sepia-700">
                  {flashcard.progression.totalReviews}
                </div>
              </div>
              <div>
                <div className="text-ink-light">Success Rate</div>
                <div className="text-lg font-semibold text-sepia-700">
                  {flashcard.progression.totalReviews > 0
                    ? Math.round((flashcard.progression.successfulReviews / flashcard.progression.totalReviews) * 100)
                    : 0}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className={cn(
        'relative w-full max-w-2xl mx-auto cursor-pointer',
        className
      )}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={localState}
          className="bg-white shadow-xl border-2 border-paper-200 p-8 min-h-[400px] flex flex-col justify-center"
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{ duration: 0.4 }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {localState === 'question' && renderQuestion()}
          {localState === 'hint' && renderHint()}
          {localState === 'answer' && renderAnswer()}
        </motion.div>
      </AnimatePresence>

      {/* Click Instruction */}
      {localState === 'question' && (
        <motion.div
          className="text-center mt-4 text-sm text-ink-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click card to reveal answer
        </motion.div>
      )}
    </motion.div>
  );
}

// Helper components for different card types

function ClozeQuestion({ question }: { question: string }) {
  // Parse cloze format: "The capital of {{France}} is {{Paris}}"
  const parts = question.split(/{{|}}/);
  const rendered = parts.map((part, i) => {
    if (i % 2 === 1) {
      // It's a blank
      return (
        <span
          key={i}
          className="inline-block px-4 py-1 mx-1 bg-sepia-200 border-b-4 border-sepia-400"
        >
          {'_____'.repeat(Math.min(part.length, 5))}
        </span>
      );
    }
    return part;
  });

  return <p className="text-2xl font-playfair leading-relaxed">{rendered}</p>;
}

function ClozeAnswer({ question, answer }: { question: string; answer: string }) {
  const parts = question.split(/{{|}}/);
  const rendered = parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <span
          key={i}
          className="inline-block px-4 py-1 mx-1 bg-green-100 border-b-4 border-green-400 font-semibold text-green-800"
        >
          {part}
        </span>
      );
    }
    return part;
  });

  return (
    <div className="space-y-4">
      <p className="text-xl leading-relaxed">{rendered}</p>
      {answer && answer !== question && (
        <div className="p-4 bg-paper-50">
          <p className="text-sm text-ink-light">{answer}</p>
        </div>
      )}
    </div>
  );
}

function QuoteAnswer({ answer }: { answer: string }) {
  // Try to parse as JSON for structured quote data
  try {
    const data = JSON.parse(answer);
    return (
      <div className="space-y-4">
        <blockquote className="text-2xl font-playfair italic leading-relaxed border-l-4 border-sepia-400 pl-6">
          "{data.quote}"
        </blockquote>
        {(data.philosopher || data.work) && (
          <p className="text-lg text-ink-light">
            — {data.philosopher && <span className="font-medium">{data.philosopher}</span>}
            {data.philosopher && data.work && <span>, </span>}
            {data.work && <span className="italic">{data.work}</span>}
          </p>
        )}
        {data.context && (
          <p className="text-sm text-ink-light mt-2">{data.context}</p>
        )}
      </div>
    );
  } catch {
    return <div className="text-xl leading-relaxed whitespace-pre-wrap">{answer}</div>;
  }
}
