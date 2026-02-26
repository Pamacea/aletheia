'use client';

import Link from 'next/link';
import { Share2Icon, TrashIcon, EditIcon, LockIcon, GlobeIcon } from '@/ui/components/CustomIcons';
import { deleteCollection } from '@/lib/actions/favorites';
import { useRouter } from 'next/navigation';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string | null;
  itemCount: number;
  isPublic: boolean;
  shareSlug: string | null;
  coverImage: string | null;
  color: string | null;
  className?: string;
}

export function CollectionCard({
  id,
  name,
  description,
  itemCount,
  isPublic,
  shareSlug,
  coverImage,
  color,
  className = '',
}: CollectionCardProps) {
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm(`Supprimer la collection "${name}" ?`)) {
      return;
    }

    try {
      await deleteCollection(id);
      router.refresh();
    } catch (error) {
      console.error('Failed to delete collection:', error);
      alert('Erreur lors de la suppression');
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!shareSlug) {
      alert('Rendez la collection publique pour partager');
      return;
    }

    const url = `${window.location.origin}/collections/shared/${shareSlug}`;
    await navigator.clipboard.writeText(url);
    alert('Lien copié !');
  };

  const defaultGradient = color
    ? `linear-gradient(135deg, ${color}22 0%, ${color}11 100%)`
    : 'linear-gradient(135deg, #f5f0e8 0%, #ebe4d6 100%)';

  return (
    <Link
      href={`/collections/${id}`}
      className={`
        group relative bg-white border-2 border-paper-200
        hover:border-sepia-400 hover:shadow-lg transition-all duration-300
        overflow-hidden
        ${className}
      `}
    >
      {/* Cover Image */}
      <div
        className="h-32 w-full relative"
        style={{ background: defaultGradient }}
      >
        {coverImage ? (
          <img
            src={coverImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 bg-white hover:bg-paper-100 transition-colors"
            aria-label="Partager"
          >
            <Share2Icon className="w-5 h-5 text-ink-base" />
          </button>
          <Link
            href={`/collections/${id}/edit`}
            onClick={e => e.stopPropagation()}
            className="p-2 bg-white hover:bg-paper-100 transition-colors"
            aria-label="Modifier"
          >
            <EditIcon className="w-5 h-5 text-ink-base" />
          </Link>
          <button
            onClick={handleDelete}
            className="p-2 bg-white hover:bg-red-50 transition-colors"
            aria-label="Supprimer"
          >
            <TrashIcon className="w-5 h-5 text-red-600" />
          </button>
        </div>

        {/* Public Indicator */}
        {isPublic && (
          <div className="absolute top-3 right-3 p-2 bg-white/90">
            <GlobeIcon className="w-4 h-4 text-sepia-700" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-ink-base mb-1 line-clamp-1">
          {name}
        </h3>

        {description && (
          <p className="text-sm text-ink-light line-clamp-2 mb-3">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-ink-light">
          <span>
            {itemCount} {itemCount === 1 ? 'élément' : 'éléments'}
          </span>

          {!isPublic && (
            <span className="flex items-center gap-1">
              <LockIcon className="w-3 h-3" />
              Privé
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
