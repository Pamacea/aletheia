/**
 * ConceptCardSkeleton - Loading skeleton for ConceptCard component
 */

interface ConceptCardSkeletonProps {
  variant?: 'grid' | 'list' | 'compact';
}

export function ConceptCardSkeleton({ variant = 'grid' }: ConceptCardSkeletonProps) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper-200 rounded-full animate-pulse">
        <div className="h-4 bg-paper-300 rounded w-20" />
      </div>
    );
  }

  const isGrid = variant === 'grid';

  return (
    <div
      className={`relative w-full bg-white border border-paper-300 p-4 sm:p-6 ${isGrid ? '' : 'flex flex-col sm:flex-row gap-4 sm:gap-6'}`}
    >
      {/* Category Badge Skeleton */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
        <div className="h-6 w-20 bg-paper-200 rounded animate-pulse" />
      </div>

      {/* Favorite Button Skeleton */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
        <div className="w-8 h-8 bg-paper-200 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className={`${isGrid ? '' : 'flex-1'} mt-6 sm:mt-6`}>
        {/* Title Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-paper-200 rounded w-3/4 animate-pulse" />
          <div className="h-5 bg-paper-200 rounded w-1/4 animate-pulse" />
        </div>

        {/* Definition Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-paper-200 rounded animate-pulse" />
          <div className="h-4 bg-paper-200 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-paper-200 rounded w-4/6 animate-pulse" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-paper-200 rounded animate-pulse" />
          <div className="h-6 w-20 bg-paper-200 rounded animate-pulse" />
          <div className="h-6 w-24 bg-paper-200 rounded animate-pulse" />
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-paper-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-paper-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
