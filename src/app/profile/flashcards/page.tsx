import { redirect } from 'next/navigation';
import { getFlashcards, getFlashcardStats, getDueCards } from '@/features/flashcards/actions/flashcards';
import { getSession } from '@/lib/auth';
import FlashcardsClient from './FlashcardsClient';

export default async function FlashcardsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const userId = session.user.id;
  const [flashcards, stats, dueCards] = await Promise.all([
    getFlashcards(userId),
    getFlashcardStats(userId),
    getDueCards(userId),
  ]);

  return (
    <FlashcardsClient
      userId={userId}
      flashcards={flashcards}
      stats={stats}
      dueCardsCount={dueCards.length}
    />
  );
}
