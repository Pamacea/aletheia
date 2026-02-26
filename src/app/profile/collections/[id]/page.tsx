import { getCollection } from '@/lib/actions/favorites';
import { notFound } from 'next/navigation';
import { BookmarkIcon, Share2Icon, EditIcon, GlobeIcon, LockIcon } from '@/ui/components/CustomIcons';
import { FavoriteCard } from '@/features/favorites/components/FavoriteCard';
import Link from 'next/link';

interface CollectionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { id } = await params;
  const collection = await getCollection(id);

  if (!collection) {
    return {
      title: 'Collection non trouvée - Aletheia',
    };
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

  const handleShare = async () => {
    if (!collection.shareSlug) {
      alert('Rendez la collection publique pour partager');
      return;
    }

    const url = `${window.location.origin}/collections/shared/${collection.shareSlug}`;
    await navigator.clipboard.writeText(url);
    alert('Lien copié !');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/profile/collections"
          className="inline-flex items-center gap-2 text-sm text-ink-light hover:text-ink-base mb-4 transition-colors"
        >
          ← Retour aux collections
        </Link>

        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Cover */}
            <div
              className="w-24 h-24  flex items-center justify-center flex-shrink-0"
              style={{
                background: collection.color
                  ? `linear-gradient(135deg, ${collection.color}33 0%, ${collection.color}11 100%)`
                  : 'linear-gradient(135deg, #f5f0e8 0%, #ebe4d6 100%)',
              }}
            >
              <BookmarkIcon className="w-12 h-12 text-sepia-600" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-ink-base">
                  {collection.name}
                </h1>
                {collection.isPublic ? (
                  <span className="flex items-center gap-1 text-sm text-sepia-600 bg-sepia-50 px-2 py-1 ">
                    <GlobeIcon className="w-4 h-4" />
                    Publique
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-sm text-ink-light bg-paper-100 px-2 py-1 ">
                    <LockIcon className="w-4 h-4" />
                    Privée
                  </span>
                )}
              </div>

              {collection.description && (
                <p className="text-ink-light mb-2 max-w-2xl">
                  {collection.description}
                </p>
              )}

              <p className="text-sm text-ink-light">
                {collection.itemCount} {collection.itemCount === 1 ? 'élément' : 'éléments'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 border-2 border-paper-300  hover:bg-paper-50 transition-colors"
              aria-label="Partager"
            >
              <Share2Icon className="w-5 h-5 text-ink-base" />
            </button>
            <Link
              href={`/collections/${collection.id}/edit`}
              className="p-2 border-2 border-paper-300  hover:bg-paper-50 transition-colors"
              aria-label="Modifier"
            >
              <EditIcon className="w-5 h-5 text-ink-base" />
            </Link>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {collection.items.length === 0 ? (
        <div className="text-center py-16 bg-paper-50 ">
          <BookmarkIcon className="w-16 h-16 text-paper-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-ink-base mb-2">
            Collection vide
          </h2>
          <p className="text-ink-light mb-6">
            Ajoutez des éléments à cette collection depuis vos favoris
          </p>
          <Link
            href="/favorites"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 text-white  hover:bg-sepia-700 transition-colors"
          >
            Voir mes favoris
          </Link>
        </div>
      ) : (
        /* Items Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
}
