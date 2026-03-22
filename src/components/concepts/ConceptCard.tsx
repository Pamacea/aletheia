'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@/ui/icons/UIIcons';
import { HeartIcon } from '@/ui/icons/StatusIcons';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { useFavorite } from '@/features/favorites/hooks';
import { useRouter } from 'next/navigation';
import { useToastActions } from '@/ui/hooks/useToastActions';
import type { Concept, ConceptWithRelations } from '@/types';

interface ConceptCardProps {
  concept: Concept | ConceptWithRelations | Record<string, any>;
  variant?: 'list' | 'grid' | 'compact';
  showActions?: boolean;
  onFavoriteClick?: (e: React.MouseEvent) => void;
}

/**
 * Unified ConceptCard component for displaying concepts across the application.
 * Works for:
 * - Concept list view
 * - Concept detail view
 * - Related concepts view
 * - Search results
 */
export function ConceptCard({
  concept,
  variant = 'grid',
  showActions = true,
  onFavoriteClick,
}: ConceptCardProps) {
  const router = useRouter();
  const { showSuccess, showError } = useToastActions();

  // Use TanStack Query for favorites
  const { isFavorite, toggle: toggleFavoriteMutation, isToggling } = useFavorite({
    entityType: 'CONCEPT',
    entityId: concept.id,
  });

  // Handle favorite toggle
  const handleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await toggleFavoriteMutation();

      if (!isFavorite) {
        showSuccess(`${concept.name} a été ajouté à vos favoris`, 'Favori ajouté');
      } else {
        showSuccess(`${concept.name} a été retiré de vos favoris`, 'Favori retiré');
      }

      router.refresh();
    } catch (error) {
      showError('Impossible de modifier les favoris');
    }
  };

  // Get connection count if available
  const connectionCount =
    'relations' in concept && concept.relations ? concept.relations.length : 0;

  // Format definition (remove ** markdown artifacts)
  const formatDefinition = (text: string | null) => {
    if (!text) return '';
    return text.replace(/\*\*/g, '');
  };

  const definition = formatDefinition(
    concept.shortDefinition || concept.definition
  );

  // Compact variant for inline displays
  if (variant === 'compact') {
    return (
      <LinkOrnate
        href={`/conceptuaire/${concept.slug}`}
        living={true}
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper-200 hover:bg-sepia-100 text-ink hover:text-sepia-700 rounded-full transition-colors text-sm"
      >
        <span className="font-medium">{concept.name}</span>
        {connectionCount > 0 && (
          <span className="text-xs text-ink-light">({connectionCount})</span>
        )}
      </LinkOrnate>
    );
  }

  // Grid and list variants
  const isGrid = variant === 'grid';

  return (
    <div
      className={`group relative w-full min-w-0 overflow-hidden bg-white border border-paper-300 p-4 sm:p-6 hover:shadow-lg hover:border-sepia-600 transition-all duration-300 ${isGrid ? '' : 'flex flex-col sm:flex-row gap-4 sm:gap-6'}`}
    >
      {/* Category Badge */}
      {concept.category && (
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="px-2 py-1 bg-paper-200 text-ink text-xs font-medium rounded">
            {concept.category.name}
          </span>
        </div>
      )}

      {/* Favorite Button */}
      {showActions && (
        <button
          onClick={handleFavorite}
          disabled={isToggling}
          className={`absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full transition-colors ${
            isFavorite
              ? 'bg-sepia-100 text-sepia-700'
              : 'bg-paper-100 text-ink-light hover:text-sepia-600'
          }`}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <HeartIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      )}

      {/* Content */}
      <div className={`${isGrid ? '' : 'flex-1'} mt-6 sm:mt-6`}>
        {/* Title & Etymology */}
        <LinkOrnate
          href={`/conceptuaire/${concept.slug}`}
          living={true}
          className="block"
        >
          <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-sepia-600 transition-colors break-words">
            <span className="living-word">{concept.name}</span>
            {concept.etymology?.greek && (
              <span className="block text-sm text-sepia-600 font-normal mt-1 break-words">
                ({concept.etymology.greek})
              </span>
            )}
          </h3>
        </LinkOrnate>

        {/* Definition */}
        {definition && (
          <p className="text-ink-light leading-relaxed text-sm mb-4 line-clamp-3">
            <span className="living-word">{definition}</span>
          </p>
        )}

        {/* Tags */}
        {concept.tags && concept.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {concept.tags.slice(0, 3).map((tag: string) => (
              <Link
                key={tag}
                href={`/conceptuaire?search=${encodeURIComponent(tag)}`}
                className="px-2 py-1 bg-paper-200 text-ink text-xs hover:bg-sepia-100 hover:text-sepia-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                #{tag}
              </Link>
            ))}
            {concept.tags.length > 3 && (
              <span className="px-2 py-1 bg-paper-200 text-ink-light text-xs">
                +{concept.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Connection Count */}
          {connectionCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-sepia-600">
              <span className="font-medium">{connectionCount}</span>
              <span className="text-ink-light">
                connexion{connectionCount > 1 ? 's' : ''}
              </span>
            </div>
          )}

          {/* Explore Link */}
          <LinkOrnate
            href={`/conceptuaire/${concept.slug}`}
            living={true}
            className="flex items-center gap-2 text-sepia-600 text-sm font-medium group-hover:gap-3 transition-all"
          >
            Explorer
            <ArrowRightIcon className="w-4 h-4" />
          </LinkOrnate>
        </div>
      </div>
    </div>
  );
}
