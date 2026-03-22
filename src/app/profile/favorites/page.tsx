import { getFavoritesWithData } from '@/lib/actions/favorites';
import { FavoriteCard } from '@/features/favorites/components/FavoriteCard';
import { ProfileLayout, EmptyState } from '@/shared/components';
import { StarIcon } from '@/ui/icons/StatusIcons';
import { Suspense } from 'react';

export const metadata = {
  title: 'Favoris - Aletheia',
  description: 'Vos concepts, citations et textes favoris',
};

export const revalidate = 60;

export default function FavoritesPage() {
  return (
    <ProfileLayout
      title="Mes Favoris"
      subtitle="Vos éléments favoris"
    >
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<FavoritesSkeleton />}>
          <FavoritesContent />
        </Suspense>
      </div>
    </ProfileLayout>
  );
}

function FavoritesSkeleton() {
  return (
    <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="border-2 border-paper-300 rounded-lg p-6 h-48 bg-paper-100" />
      ))}
    </div>
  );
}

async function FavoritesContent() {
  const favorites = await getFavoritesWithData();

  if (favorites.length === 0) {
    return (
      <EmptyState
        icon="sparkles"
        title="Aucun favori pour le moment"
        message="Ajoutez des concepts, citations ou textes à vos favoris pour les retrouver facilement"
        action={{ label: 'Explorer le conceptuaire', href: '/conceptuaire' }}
      />
    );
  }

  return (
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
  );
}
