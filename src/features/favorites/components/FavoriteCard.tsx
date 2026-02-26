'use client';

import Link from 'next/link';
import { StarIcon, TrashIcon } from '@/ui/components/CustomIcons';
import { toggleFavorite } from '@/lib/actions/favorites';
import { useRouter } from 'next/navigation';

interface FavoriteCardProps {
  id: string;
  entityType: 'CONCEPT' | 'PHILOSOPHER' | 'CURRENT' | 'TEXT' | 'SOURCE' | 'QUOTE';
  entityId: string;
  entityData: {
    id: string;
    name?: string;
    text?: string;
    title?: string;
    slug?: string;
    shortDefinition?: string | null;
    [key: string]: unknown;
  } | null;
  createdAt: Date;
  className?: string;
}

export function FavoriteCard({
  id,
  entityType,
  entityId,
  entityData,
  createdAt,
  className = '',
}: FavoriteCardProps) {
  const router = useRouter();

  const handleRemove = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await toggleFavorite({ entityType, entityId });
      router.refresh();
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  const getEntityPath = () => {
    if (!entityData?.slug) return '#';

    switch (entityType) {
      case 'CONCEPT':
        return `/conceptuaire/${entityData.slug}`;
      case 'PHILOSOPHER':
        return `/philosophes/${entityData.slug}`;
      case 'CURRENT':
        return `/courants/${entityData.slug}`;
      case 'QUOTE':
        return `/citations#${entityData.slug}`;
      case 'TEXT':
        return `/bibliotheque/${entityData.slug}`;
      case 'SOURCE':
        return `/bibliotheque/${entityData.slug}`;
      default:
        return '#';
    }
  };

  const getEntityLabel = () => {
    const labels = {
      CONCEPT: 'Concept',
      PHILOSOPHER: 'Philosophe',
      CURRENT: 'Courant',
      TEXT: 'Texte',
      SOURCE: 'Source',
      QUOTE: 'Citation',
    };
    return labels[entityType];
  };

  const getEntityColor = () => {
    const colors = {
      CONCEPT: 'bg-blue-100 text-blue-700',
      PHILOSOPHER: 'bg-purple-100 text-purple-700',
      CURRENT: 'bg-green-100 text-green-700',
      TEXT: 'bg-amber-100 text-amber-700',
      SOURCE: 'bg-pink-100 text-pink-700',
      QUOTE: 'bg-red-100 text-red-700',
    };
    return colors[entityType];
  };

  if (!entityData) {
    return null;
  }

  return (
    <Link
      href={getEntityPath()}
      className={`
        group relative bg-white border-2 border-paper-200
        hover:border-sepia-400 hover:shadow-lg transition-all duration-300
        p-4
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <span className={`text-xs font-medium px-2 py-1 ${getEntityColor()}`}>
          {getEntityLabel()}
        </span>

        <button
          onClick={handleRemove}
          className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-50 transition-all"
          aria-label="Retirer des favoris"
        >
          <TrashIcon className="w-4 h-4 text-red-600" />
        </button>
      </div>

      {/* Content */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-amber-100 flex items-center justify-center">
            <StarIcon className="w-5 h-5 text-amber-600 fill-current" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-ink-base line-clamp-1 mb-1">
            {entityData.name || entityData.text || entityData.title || 'Sans titre'}
          </h3>

          {entityData.shortDefinition && (
            <p className="text-sm text-ink-light line-clamp-2">
              {entityData.shortDefinition}
            </p>
          )}

          <p className="text-xs text-ink-light mt-2">
            Ajouté le {new Date(createdAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
    </Link>
  );
}
