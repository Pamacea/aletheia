/**
 * FlashcardSkeleton - Loading skeleton for flashcard cards
 */

interface FlashcardSkeletonProps {
  viewMode?: 'grid' | 'list';
}

export function FlashcardSkeleton({ viewMode = 'grid' }: FlashcardSkeletonProps) {
  return (
    <div className="bg-white border-2 border-paper-200 p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="h-5 w-16 bg-paper-200 rounded animate-pulse" />
        <div className="h-4 w-24 bg-paper-200 rounded animate-pulse" />
      </div>

      {/* Question */}
      <div className="space-y-2 mb-3">
        <div className="h-5 bg-paper-200 rounded animate-pulse" />
        <div className="h-5 bg-paper-200 rounded w-5/6 animate-pulse" />
      </div>

      {/* Answer */}
      <div className="space-y-2 mb-3">
        <div className="h-4 bg-paper-200 rounded animate-pulse" />
        <div className="h-4 bg-paper-200 rounded w-4/5 animate-pulse" />
      </div>

      {/* Concept */}
      <div className="h-4 w-32 bg-paper-200 rounded animate-pulse mb-3" />

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        <div className="h-5 w-16 bg-paper-200 rounded animate-pulse" />
        <div className="h-5 w-20 bg-paper-200 rounded animate-pulse" />
      </div>

      {/* Action */}
      <div className="flex items-center gap-2 mt-3">
        <div className="w-4 h-4 bg-paper-200 rounded animate-pulse" />
        <div className="h-4 w-16 bg-paper-200 rounded animate-pulse" />
      </div>
    </div>
  );
}
