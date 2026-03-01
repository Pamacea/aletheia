/**
 * PhilosopherCardSkeleton - Loading skeleton for philosopher cards
 */

export function PhilosopherCardSkeleton() {
  return (
    <div className="group bg-paper-50 border-2 border-paper-300 p-6">
      {/* Header with Icon */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Icon Skeleton */}
          <div className="w-12 h-12 border-2 border-paper-300 bg-paper-200 flex items-center justify-center animate-pulse" />

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-6 bg-paper-200 rounded w-32 animate-pulse" />
            <div className="h-4 bg-paper-200 rounded w-20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="flex flex-wrap gap-1 mb-3">
        <div className="h-6 w-20 bg-paper-200 rounded animate-pulse" />
        <div className="h-6 w-24 bg-paper-200 rounded animate-pulse" />
        <div className="h-6 w-16 bg-paper-200 rounded animate-pulse" />
      </div>

      {/* Works Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-paper-200 rounded w-32 animate-pulse" />
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-paper-200 rounded animate-pulse" />
            <div className="h-4 bg-paper-200 rounded w-40 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-paper-200 rounded animate-pulse" />
            <div className="h-4 bg-paper-200 rounded w-36 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-paper-200 rounded animate-pulse" />
            <div className="h-4 bg-paper-200 rounded w-32 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
