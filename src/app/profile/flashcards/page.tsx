import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { getFlashcards, getFlashcardStats, getDueCards } from '@/features/flashcards/actions/flashcards';
import { getSession } from '@/lib/auth';
import FlashcardsClient from './FlashcardsClient';
import { FlashcardSkeleton } from './FlashcardSkeleton';

export default async function FlashcardsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const userId = session.user.id;

  return (
    <Suspense fallback={<FlashcardsPageSkeleton />}>
      <FlashcardsData userId={userId} />
    </Suspense>
  );
}

async function FlashcardsData({ userId }: { userId: string }) {
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

function FlashcardsPageSkeleton() {
  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header Skeleton */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="h-8 w-32 bg-paper-200 rounded animate-pulse" />
              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-6 w-16 bg-paper-200 rounded animate-pulse" />
                <div className="h-6 w-16 bg-paper-200 rounded animate-pulse" />
                <div className="h-6 w-12 bg-paper-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-10 w-24 bg-paper-200 rounded animate-pulse" />
          </div>
        </div>
      </header>

      {/* Search & Filters Bar Skeleton */}
      <div className="bg-white border-b border-paper-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="h-9 w-full max-w-md bg-paper-200 rounded animate-pulse" />
          <div className="h-9 w-10 bg-paper-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Content Skeleton */}
      <main className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tags Skeleton */}
          <div className="mb-6 p-3 bg-white border border-paper-200">
            <div className="flex flex-wrap gap-2">
              <div className="h-8 w-16 bg-paper-200 rounded animate-pulse" />
              <div className="h-8 w-20 bg-paper-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-paper-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <FlashcardSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
