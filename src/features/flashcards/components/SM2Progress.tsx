/**
 * SM2Progress - Display flashcard progress and SM2 statistics
 */

'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Brain, Target, Award, Zap } from 'lucide-react';
import type { FlashcardWithProgress } from '../types';
import { cn } from '@/lib/utils/cn';

interface SM2ProgressProps {
  flashcard: FlashcardWithProgress;
  className?: string;
  compact?: boolean;
}

export function SM2Progress({ flashcard, className, compact = false }: SM2ProgressProps) {
  const progression = flashcard.progression;

  if (!progression) {
    return (
      <div className={cn('p-4 bg-paper-50', className)}>
        <div className="flex items-center gap-2 text-ink-light">
          <Brain className="w-4 h-4" />
          <span className="text-sm">New card - not yet reviewed</span>
        </div>
      </div>
    );
  }

  const successRate =
    progression.totalReviews != null &&
    progression.totalReviews > 0 &&
    progression.successfulReviews != null
      ? (progression.successfulReviews / progression.totalReviews) * 100
      : 0;

  const daysUntilDue = Math.ceil((progression.nextReview.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const isDue = daysUntilDue <= 0;

  if (compact) {
    return (
      <div className={cn('flex items-center gap-4 text-sm', className)}>
        <div className="flex items-center gap-1">
          <Target className="w-4 h-4 text-sepia-600" />
          <span className="font-medium">{progression.easeFactor.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-sepia-600" />
          <span className={cn(isDue ? 'text-red-600 font-medium' : '')}>
            {isDue ? 'Due now' : `${daysUntilDue}d`}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>×{progression.streak}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Status Banner */}
      <motion.div
        className={cn(
          'p-4 border-2',
          isDue
            ? 'bg-red-50 border-red-200'
            : daysUntilDue <= 3
            ? 'bg-amber-50 border-amber-200'
            : 'bg-green-50 border-green-200'
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <div>
              <p className="font-medium">
                {isDue ? 'Due for Review' : `Next Review in ${daysUntilDue} days`}
              </p>
              <p className="text-sm opacity-75">
                {progression.nextReview.toLocaleDateString()}
              </p>
            </div>
          </div>
          {isDue && (
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium">
              Due Now
            </span>
          )}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Ease Factor */}
        <motion.div
          className="p-4 bg-sepia-50 border border-sepia-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-sepia-700 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">Ease Factor</span>
          </div>
          <p className="text-2xl font-bold text-sepia-800">
            {progression.easeFactor.toFixed(2)}
          </p>
          <p className="text-xs text-ink-light mt-1">
            {progression.easeFactor >= 2.5 ? 'Good retention' : 'Needs practice'}
          </p>
        </motion.div>

        {/* Interval */}
        <motion.div
          className="p-4 bg-blue-50 border border-blue-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 text-blue-700 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">Interval</span>
          </div>
          <p className="text-2xl font-bold text-blue-800">{progression.interval}d</p>
          <p className="text-xs text-ink-light mt-1">
            {progression.interval === 1 ? 'New' : progression.interval < 7 ? 'Learning' : 'Reviewing'}
          </p>
        </motion.div>

        {/* Streak */}
        <motion.div
          className="p-4 bg-amber-50 border border-amber-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-amber-700 mb-1">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">Streak</span>
          </div>
          <p className="text-2xl font-bold text-amber-800">×{progression.streak}</p>
          <p className="text-xs text-ink-light mt-1">
            {progression.streak >= 5 ? 'On fire!' : progression.streak >= 3 ? 'Building up' : 'Keep going'}
          </p>
        </motion.div>

        {/* Success Rate */}
        <motion.div
          className="p-4 bg-green-50 border border-green-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2 text-green-700 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">Success Rate</span>
          </div>
          <p className="text-2xl font-bold text-green-800">{successRate.toFixed(0)}%</p>
          <p className="text-xs text-ink-light mt-1">
            {progression.totalReviews} review{progression.totalReviews !== 1 ? 's' : ''}
          </p>
        </motion.div>
      </div>

      {/* Repetition Progress */}
      {progression.repetitions > 0 && (
        <motion.div
          className="p-4 bg-paper-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-ink">Mastery Progress</span>
            <span className="text-sm text-ink-light">
              {progression.repetitions} / 5 reviews
            </span>
          </div>
          <div className="w-full bg-paper-200 h-2">
            <motion.div
              className="bg-gradient-to-r from-sepia-500 to-sepia-600 h-2"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progression.repetitions * 20, 100)}%` }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
          {progression.repetitions >= 5 && (
            <div className="flex items-center gap-2 mt-2 text-green-700">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Mastered!</span>
            </div>
          )}
        </motion.div>
      )}

      {/* Review Timeline */}
      {progression.lastReview && (
        <motion.div
          className="p-4 bg-paper-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="text-xs text-ink-light mb-2">Review Schedule</div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-ink-light mb-1">
                <span>Last Review</span>
                <span>{formatRelativeTime(progression.lastReview)}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-light">Next Review</span>
                <span className="font-medium">{formatRelativeTime(progression.nextReview)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diff = date.getTime() - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  if (days === -1) return 'Yesterday';
  if (days > 1) return `In ${days} days`;
  if (days < -1) return `${Math.abs(days)} days ago`;
  return date.toLocaleDateString();
}

interface SessionStatsProps {
  cardsReviewed: number;
  totalCards: number;
  xpEarned: number;
  streak: number;
  accuracy?: number;
  className?: string;
}

export const SessionStats = memo(function SessionStats({
  cardsReviewed,
  totalCards,
  xpEarned,
  streak,
  accuracy,
  className,
}: SessionStatsProps) {
  const progress = totalCards > 0 ? (cardsReviewed / totalCards) * 100 : 0;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-ink">Session Progress</span>
          <span className="text-sm text-ink-light">
            {cardsReviewed} / {totalCards}
          </span>
        </div>
        <div className="w-full bg-paper-200 h-3">
          <motion.div
            className="bg-gradient-to-r from-sepia-500 to-sepia-600 h-3"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="text-center p-3 bg-sepia-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Award className="w-5 h-5 mx-auto mb-1 text-sepia-600" />
          <p className="text-lg font-bold text-sepia-800">{xpEarned}</p>
          <p className="text-xs text-ink-light">XP Earned</p>
        </motion.div>

        <motion.div
          className="text-center p-3 bg-amber-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Zap className="w-5 h-5 mx-auto mb-1 text-amber-600" />
          <p className="text-lg font-bold text-amber-800">×{streak}</p>
          <p className="text-xs text-ink-light">Streak</p>
        </motion.div>

        {accuracy !== undefined && (
          <motion.div
            className="text-center p-3 bg-green-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Target className="w-5 h-5 mx-auto mb-1 text-green-600" />
            <p className="text-lg font-bold text-green-800">{accuracy.toFixed(0)}%</p>
            <p className="text-xs text-ink-light">Accuracy</p>
          </motion.div>
        )}
      </div>
    </div>
  );
});

interface DailyGoalProps {
  reviewsToday: number;
  reviewsGoal: number;
  xpToday: number;
  xpGoal: number;
  streak: number;
  className?: string;
}

export const DailyGoal = memo(function DailyGoal({
  reviewsToday,
  reviewsGoal,
  xpToday,
  xpGoal,
  streak,
  className,
}: DailyGoalProps) {
  const reviewsProgress = (reviewsToday / reviewsGoal) * 100;
  const xpProgress = (xpToday / xpGoal) * 100;
  const reviewsComplete = reviewsToday >= reviewsGoal;
  const xpComplete = xpToday >= xpGoal;

  return (
    <div className={cn('p-6 bg-gradient-to-br from-sepia-50 to-amber-50 border border-sepia-200', className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-sepia-900">Daily Goals</h3>
        {streak > 0 && (
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-100">
            <Zap className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-700">{streak} day streak</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* Reviews Goal */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sepia-600" />
              <span className="text-sm font-medium text-sepia-800">Reviews</span>
            </div>
            <span className={cn('text-sm font-medium', reviewsComplete ? 'text-green-600' : 'text-ink-light')}>
              {reviewsToday} / {reviewsGoal}
            </span>
          </div>
          <div className="w-full bg-sepia-100 h-2">
            <motion.div
              className={cn('h-2', reviewsComplete ? 'bg-green-500' : 'bg-sepia-500')}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(reviewsProgress, 100)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* XP Goal */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sepia-600" />
              <span className="text-sm font-medium text-sepia-800">Experience</span>
            </div>
            <span className={cn('text-sm font-medium', xpComplete ? 'text-green-600' : 'text-ink-light')}>
              {xpToday} / {xpGoal} XP
            </span>
          </div>
          <div className="w-full bg-sepia-100 h-2">
            <motion.div
              className={cn('h-2', xpComplete ? 'bg-green-500' : 'bg-sepia-500')}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(xpProgress, 100)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Completion Message */}
      {reviewsComplete && xpComplete && (
        <motion.div
          className="mt-4 p-3 bg-green-100 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-green-800 font-medium">🎉 All daily goals completed!</p>
        </motion.div>
      )}
    </div>
  );
});
