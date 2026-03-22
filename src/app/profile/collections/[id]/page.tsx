import { getCollection } from '@/lib/actions/favorites';
import { notFound } from 'next/navigation';
import { FavoriteCard } from '@/features/favorites/components/FavoriteCard';
import { BackButton } from '@/ui/components/BackButton';
import Link from 'next/link';


interface CollectionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { id } = await params;
  const collection = await getCollection(id);

  if (!collection) {
    return { title: 'Collection non trouvée - Aletheia' };
  }

  return {
    title: `${collection.name} - Aletheia`,
    description: collection.description || undefined,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { id } = await params;
  const collection = await getCollection(id);

  if (!collection) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <BackButton href="/profile/collections" label="Collections" />
            <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
              {collection.name}
            </h1>
            <div className="w-10 sm:w-20 flex-shrink-0" />
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-ink-light mb-6">
            <span>{collection.isPublic ? 'Public' : 'Privé'}</span>
            <span>·</span>
            <span>{collection.itemCount} {collection.itemCount === 1 ? 'élément' : 'éléments'}</span>
            {collection.description && (
              <>
                <span>·</span>
                <span className="truncate max-w-xs">{collection.description}</span>
              </>
            )}
          </div>

          {/* Items */}
          {collection.items.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-paper-300">
              <p className="text-ink-light mb-4">Cette collection est vide</p>
              <Link
                href="/profile/favorites"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors text-sm"
              >
                Voir mes favoris
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {collection.items.map(item => (
                <FavoriteCard
                  key={item.id}
                  id={item.id}
                  entityType={item.entityType === 'MOVEMENT' ? 'CURRENT' : item.entityType}
                  entityId={item.entityId}
                  entityData={item.entityData ?? null}
                  createdAt={new Date()}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
