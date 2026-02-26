'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CollectionCard } from '@/features/favorites/components/CollectionCard';
import { CreateCollectionModal } from '@/features/favorites/components/CreateCollectionModal';
import { BookmarkIcon, PlusIcon, FolderIcon } from '@/ui/components/CustomIcons';
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

export function CollectionsClient({ initialCollections }: CollectionsClientProps) {
  const [collections, setCollections] = useState<Collection[]>(initialCollections);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Refresh server components to get updated data
    router.refresh();
  };

  const getItemCount = (collection: Collection): number => {
    return collection.itemCount ?? collection._count?.items ?? 0;
  };

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-sepia-100 rounded-lg">
            <BookmarkIcon className="w-8 h-8 text-sepia-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-base">
              Collections
            </h1>
            <p className="text-ink-light">
              {collections.length} {collections.length === 1 ? 'collection' : 'collections'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-sepia-600 text-white hover:bg-sepia-700 transition-colors rounded-lg"
          aria-label="Créer une nouvelle collection"
        >
          <PlusIcon className="w-5 h-5" />
          Nouvelle collection
        </button>
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
        /* Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
