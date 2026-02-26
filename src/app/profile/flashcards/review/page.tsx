/**
 * Flashcard Review Mode
 * Clean, distraction-free interface for reviewing due cards
 */

import { redirect } from 'next/navigation';
import { getDueCards, getNewCards, getDailyGoalStats } from '@/features/flashcards/actions/flashcards';
import { ReviewClient } from './ReviewClient';
import { getSession } from '@/lib/auth';

async function ReviewPageContent() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const userId = session.user.id;
  const [dueCards, newCards, dailyGoal] = await Promise.all([
    getDueCards(userId),
    getNewCards(userId, 5),
    getDailyGoalStats(userId),
  ]);

  // Filter out cards without valid answers
  const validCards = [...dueCards, ...newCards].filter(
    (card) => card.answer && card.answer.trim() !== ''
  );

  return <ReviewClient cards={validCards} dailyGoal={dailyGoal} userId={userId} />;
}

export default ReviewPageContent;
