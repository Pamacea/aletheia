import { getFavoritesWithData } from '@/lib/actions/favorites';
import { FavoriteCard } from '@/features/favorites/components/FavoriteCard';
import { ProfileLayout, EmptyState } from '@/shared/components';
import { StarIcon } from '@/ui/components/CustomIcons';

export const metadata = {
  title: 'Favoris - Aletheia',
  description: 'Vos concepts, citations et textes favoris',
};

export default async function FavoritesPage() {
  const favorites = await getFavoritesWithData();

  return (
    <ProfileLayout
      title="Mes Favoris"
      subtitle={`${favorites.length} ${favorites.length === 1 ? 'élément favori' : 'éléments favoris'}`}
    >
      <div className="max-w-7xl mx-auto">
        {favorites.length === 0 ? (
          <EmptyState
            icon="sparkles"
            title="Aucun favori pour le moment"
            message="Ajoutez des concepts, citations ou textes à vos favoris pour les retrouver facilement"
            action={{ label: 'Explorer le conceptuaire', href: '/conceptuaire' }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {favorites.map(favorite => (
              <FavoriteCard
                key={favorite.id}
                id={favorite.id}
                entityType={favorite.entityType === 'MOVEMENT' ? 'CURRENT' : favorite.entityType}
                entityId={favorite.entityId}
                entityData={(favorite.entityData as any) ?? null}
                createdAt={favorite.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
}
