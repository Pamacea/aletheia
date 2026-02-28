import { cn } from '@/lib/utils/cn';
import { SPACING } from '@/shared/constants/design-tokens';

/**
 * Props for LoadingState component
 */
export interface LoadingStateProps {
  /**
   * Type of loading indicator to display
   * @default 'spinner'
   */
  type?: 'spinner' | 'skeleton' | 'dots';

  /**
   * Size of the loading indicator
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Optional message to display below the indicator
   */
  message?: string;

  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * LoadingState - Consistent loading UI across the application
 *
 * Provides three types of loading indicators:
 * - **spinner**: Rotating circle (default)
 * - **skeleton**: Pulsing placeholder content
 * - **dots**: Bouncing dots animation
 *
 * @example
 * ```tsx
 * // Simple spinner
 * <LoadingState />
 *
 * // With message
 * <LoadingState message="Chargement..." />
 *
 * // Skeleton type
 * <LoadingState type="skeleton" />
 *
 * // Different sizes
 * <LoadingState size="sm" />
 * <LoadingState size="lg" message="Traitement en cours..." />
 * ```
 */

export function LoadingState({
  type = 'spinner',
  size = 'md',
  message,
  className,
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (type === 'skeleton') {
    return (
      <div className={cn('animate-pulse space-y-3', className)} role="status" aria-live="polite" aria-label="Chargement">
        <div className="h-4 bg-paper-200 rounded" style={{ width: '40%' }} aria-hidden="true" />
        <div className="h-4 bg-paper-200 rounded" style={{ width: '100%' }} aria-hidden="true" />
        <div className="h-4 bg-paper-200 rounded" style={{ width: '80%' }} aria-hidden="true" />
      </div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={cn('flex items-center gap-2', className)} role="status" aria-live="polite" aria-label={message || 'Chargement'}>
        <div className="w-2 h-2 bg-sepia-600 rounded-full animate-bounce [animation-delay:-0.3s]" aria-hidden="true" />
        <div className="w-2 h-2 bg-sepia-600 rounded-full animate-bounce [animation-delay:-0.15s]" aria-hidden="true" />
        <div className="w-2 h-2 bg-sepia-600 rounded-full animate-bounce" aria-hidden="true" />
        {message && <span className="ml-2 text-sm text-ink-light">{message}</span>}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)} role="status" aria-live="polite" aria-label={message || 'Chargement'}>
      <div
        className={cn(
          'border-4 border-paper-200 border-t-sepia-600 rounded-full animate-spin',
          sizeClasses[size]
        )}
        aria-hidden="true"
      />
      {message && <p className="text-sm text-ink-light">{message}</p>}
    </div>
  );
}

// Card skeleton component
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 border-2 border-paper-200 rounded-lg', className)}>
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-paper-200 rounded w-1/4" />
        <div className="space-y-2">
          <div className="h-4 bg-paper-200 rounded" />
          <div className="h-4 bg-paper-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}

// List skeleton component
export function ListSkeleton({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
