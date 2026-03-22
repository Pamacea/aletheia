'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CollectionCard } from '@/features/favorites/components/CollectionCard';
import { CreateCollectionModal } from '@/features/favorites/components/CreateCollectionModal';
import { PlusIcon } from '@/ui/icons/ActionIcons';
import { FolderIcon } from '@/ui/icons/SocialIcons';
import { BackButton } from '@/ui/components/BackButton';
import { EmptyState } from '@/shared/components/feedback/EmptyState';

interface Collection {
  id: string;
  name: string;
  description: string | null;
  isPublic: boolean;
  shareSlug: string | null;
  coverImage: string | null;
  color: string | null;
  itemCount?: number;
  _count?: {
    items: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface CollectionsClientProps {
  initialCollections: Collection[];
}

export function CollectionsClient({ initialCollections: collections }: CollectionsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleModalClose = () => {
    setIsModalOpen(false);
    router.refresh();
  };

  const getItemCount = (collection: Collection): number => {
    return collection.itemCount ?? collection._count?.items ?? 0;
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header — same pattern as all other pages */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <BackButton href="/profile" label="Retour" />
            <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
              Collections
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium transition-colors flex-shrink-0"
              aria-label="Créer une nouvelle collection"
            >
              <PlusIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nouvelle collection</span>
              <span className="sm:hidden">Créer</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="flex items-center gap-3 mb-6">
            <FolderIcon className="w-5 h-5 text-sepia-600" />
            <p className="text-sm text-ink-light">
              {collections.length} {collections.length === 1 ? 'collection' : 'collections'}
            </p>
          </div>

          {/* Empty State */}
          {collections.length === 0 ? (
            <EmptyState
              icon="inbox"
              title="Aucune collection"
              message="Créez des collections pour organiser vos favoris thématiquement"
              action={{
                label: "Créer une collection",
                onClick: () => setIsModalOpen(true),
              }}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collections.map(collection => (
                <CollectionCard
                  key={collection.id}
                  {...collection}
                  itemCount={getItemCount(collection)}
                />
              ))}
            </div>
          )}

          {/* Create Modal */}
          <CreateCollectionModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        </div>
      </main>
    </div>
  );
}
