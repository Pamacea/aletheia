'use client';

import { HeartIcon } from '@/ui/icons';
import { useFavorite } from '../hooks/useFavorite';

interface FavoriteButtonProps {
  entityType: 'CONCEPT' | 'PHILOSOPHER' | 'CURRENT' | 'TEXT' | 'SOURCE' | 'QUOTE' | 'MOVEMENT';
  entityId: string;
  variant?: 'icon' | 'button' | 'compact';
  showLabel?: boolean;
  className?: string;
}

/**
 * Favorite button with optimistic UI and automatic status checking.
 *
 * Features:
 * - Automatically checks if item is favorited
 * - Optimistic UI updates (instant feedback)
 * - Loading states with spinner animation
 * - Reverts on error
 *
 * @example
 * ```tsx
 * <FavoriteButton
 *   entityType="CONCEPT"
 *   entityId={conceptId}
 *   variant="icon"
 * />
 * ```
 */
export function FavoriteButton({
  entityType,
  entityId,
  variant = 'button',
  showLabel = false,
  className = '',
}: FavoriteButtonProps) {
  const { isFavorite, isLoading, toggle, isToggling } = useFavorite({
    entityType,
    entityId,
  });

  const handleToggle = () => {
    toggle();
  };

  // Loading spinner component
  const Spinner = () => (
    <svg
      className="animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const isProcessing = isLoading || isToggling;

  // Icon variant
  if (variant === 'icon') {
    return (
      <button
        onClick={handleToggle}
        disabled={isProcessing}
        className={`
          relative p-2 transition-all duration-200 rounded-full
          ${isFavorite
            ? 'text-rose-500 hover:bg-rose-50'
            : 'text-ink-light hover:text-rose-500 hover:bg-rose-50'
          }
          ${isProcessing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        aria-busy={isProcessing}
      >
        {isProcessing ? (
          <Spinner />
        ) : (
          <HeartIcon
            className={`w-5 h-5 transition-all duration-200 ${
              isFavorite ? 'fill-current scale-110' : 'scale-100'
            }`}
          />
        )}
      </button>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <button
        onClick={handleToggle}
        disabled={isProcessing}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium
          rounded-lg transition-all duration-200
          ${isFavorite
            ? 'text-rose-600 bg-rose-50 border border-rose-200'
            : 'text-ink-light hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200'
          }
          ${isProcessing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        aria-busy={isProcessing}
      >
        {isProcessing ? (
          <Spinner />
        ) : (
          <HeartIcon
            className={`w-4 h-4 transition-all duration-200 ${
              isFavorite ? 'fill-current' : ''
            }`}
          />
        )}
        {showLabel && (
          <span className="select-none">
            {isFavorite ? 'Favori' : 'Favoriser'}
          </span>
        )}
      </button>
    );
  }

  // Button variant (default)
  return (
    <button
      onClick={handleToggle}
      disabled={isProcessing}
      className={`
        flex items-center gap-2 px-4 py-2.5 border-2 font-medium text-sm
        rounded-lg transition-all duration-200
        ${isFavorite
          ? 'bg-rose-50 border-rose-400 text-rose-700 hover:bg-rose-100'
          : 'bg-paper-50 border-paper-300 text-ink-light hover:border-rose-400 hover:bg-rose-50 hover:text-rose-700'
        }
        ${isProcessing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      aria-busy={isProcessing}
    >
      {isProcessing ? (
        <Spinner />
      ) : (
        <HeartIcon
          className={`w-5 h-5 transition-all duration-200 ${
            isFavorite ? 'fill-current' : ''
          }`}
        />
      )}
      {showLabel && (
        <span className="select-none">
          {isFavorite ? 'Favori' : 'Ajouter aux favoris'}
        </span>
      )}
    </button>
  );
}
