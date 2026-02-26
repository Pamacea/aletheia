/**
 * Flashcard Create Page
 */

import { redirect } from 'next/navigation';
import { getFlashcards } from '@/features/flashcards/actions/flashcards';
import { CreateClient } from './CreateClient';
import { getSession } from '@/lib/auth';

export default async function CreateFlashcardPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const userId = session.user.id;
  const flashcards = await getFlashcards(userId);

  return (
    <CreateClient
      userId={userId}
      existingTags={Array.from(new Set(flashcards.flatMap((f) => f.tags)))}
    />
  );
}
