import { getPublicCollection } from '@/lib/actions/favorites';
import { notFound } from 'next/navigation';
import { LockIcon } from '@/ui/icons/UserIcons';
import { BookmarkIcon, GlobeIcon } from '@/ui/icons/SocialIcons';
import Link from 'next/link';

interface SharedCollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SharedCollectionPageProps) {
  const { slug } = await params;
  const collection = await getPublicCollection(slug);

  if (!collection) {
    return {
      title: 'Collection non trouvée - Aletheia',
    };
  }

  return {
    title: `${collection.name} - Collection partagée - Aletheia`,
    description: collection.description || undefined,
  };
}

export default async function SharedCollectionPage({ params }: SharedCollectionPageProps) {
  const { slug } = await params;
  const collection = await getPublicCollection(slug);

  if (!collection) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
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
              <span className="flex items-center gap-1 text-sm text-sepia-600 bg-sepia-50 px-2 py-1 ">
                <GlobeIcon className="w-4 h-4" />
                Collection partagée
              </span>
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
      </div>

      {/* Empty State */}
      {collection.items.length === 0 ? (
        <div className="text-center py-16 bg-paper-50 ">
          <BookmarkIcon className="w-16 h-16 text-paper-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-ink-base mb-2">
            Collection vide
          </h2>
          <p className="text-ink-light">
            Cette collection ne contient aucun élément pour le moment
          </p>
        </div>
      ) : (
        /* Items Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collection.items.map(item => (
            <div
              key={item.id}
              className="bg-white  border-2 border-paper-200 p-4"
            >
              {/* Entity Type Badge */}
              <div className="mb-2">
                <span className="text-xs font-medium px-2 py-1  bg-sepia-100 text-sepia-700">
                  {item.entityType}
                </span>
              </div>

              {/* Entity Data */}
              {item.entityData ? (
                <>
                  <h3 className="text-base font-semibold text-ink-base line-clamp-1 mb-1">
                    {String(item.entityData.name || item.entityData.text || '')}
                  </h3>

                  {item.entityData.shortDefinition && (
                    <p className="text-sm text-ink-light line-clamp-2">
                      {String(item.entityData.shortDefinition)}
                    </p>
                  )}

                  {item.note && (
                    <p className="text-xs text-ink-light mt-2 italic">
                      Note: {item.note}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-ink-light">
                  Élément non disponible
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer CTA */}
      <div className="mt-12 text-center">
        <p className="text-ink-light mb-4">
          Créez vos propres collections sur Aletheia
        </p>
        <Link
          href="/profile/collections"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 text-white  hover:bg-sepia-700 transition-colors"
        >
          Découvrir Aletheia
        </Link>
      </div>
    </div>
  );
}
