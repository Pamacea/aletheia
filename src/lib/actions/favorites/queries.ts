'use server';

import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { getEntityData } from './helpers';
import type { EntityType } from '@/lib/constants';

/**
 * Query operations for favorites and collections
 */

// ============================================================================
// TYPES
// ============================================================================

export interface FavoriteItem {
  id: string;
  userId: string;
  entityType: EntityType;
  entityId: string;
  createdAt: Date;
}

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  isPublic: boolean;
  shareSlug: string | null;
  coverImage: string | null;
  color: string | null;
  order: number;
  itemCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CollectionWithItems extends Collection {
  items: CollectionItem[];
}

export interface CollectionItem {
  id: string;
  entityType: EntityType;
  entityId: string;
  order: number;
  note: string | null;
  entityData?: {
    id: string;
    name?: string;
    text?: string;
    title?: string;
    slug?: string;
    [key: string]: unknown;
  } | null;
}

// ============================================================================
// FAVORITES QUERIES
// ============================================================================

export async function isFavorited(data: { entityType: EntityType; entityId: string }): Promise<boolean> {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    return false;
  }

  const validated = { entityType: data.entityType, entityId: data.entityId };
  const userId = session.user.id;

  const favorite = await prisma.favorite.findUnique({
    where: {
      userId_entityType_entityId: {
        userId,
        entityType: validated.entityType,
        entityId: validated.entityId,
      },
    },
  });

  return !!favorite;
}

export async function getFavorites(): Promise<FavoriteItem[]> {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    return [];
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return favorites;
}

export async function getFavoritesWithData() {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    return [];
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  const items = await Promise.all(
    favorites.map(async (fav) => {
      const entityData = await getEntityData(fav.entityType as EntityType, fav.entityId);
      return {
        ...fav,
        entityType: fav.entityType as EntityType,
        entityData,
      };
    })
  );

  return items;
}

// ============================================================================
// COLLECTIONS QUERIES
// ============================================================================

export async function getCollections(): Promise<Collection[]> {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    return [];
  }

  const collections = await prisma.collection.findMany({
    where: { userId: session.user.id },
    include: {
      _count: {
        select: { items: true },
      },
    },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  });

  return collections.map(col => ({
    ...col,
    itemCount: col._count.items,
  }));
}

export async function getCollection(id: string): Promise<CollectionWithItems | null> {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    return null;
  }

  const collection = await prisma.collection.findFirst({
    where: {
      id,
      OR: [
        { userId: session.user.id },
        { isPublic: true },
      ],
    },
    include: {
      items: {
        orderBy: { order: 'asc' },
      },
    },
  });

  if (!collection) {
    return null;
  }

  const itemsWithData = await Promise.all(
    collection.items.map(async (item) => {
      const entityData = await getEntityData(item.entityType as EntityType, item.entityId);
      return {
        ...item,
        entityType: item.entityType as EntityType,
        entityData,
      };
    })
  );

  return {
    ...collection,
    items: itemsWithData,
    itemCount: collection.items.length,
  };
}

export async function getPublicCollection(shareSlug: string): Promise<CollectionWithItems | null> {
  'use server';

  const collection = await prisma.collection.findUnique({
    where: { shareSlug },
    include: {
      items: {
        orderBy: { order: 'asc' },
      },
    },
  });

  if (!collection || !collection.isPublic) {
    return null;
  }

  const itemsWithData = await Promise.all(
    collection.items.map(async (item) => {
      const entityData = await getEntityData(item.entityType as EntityType, item.entityId);
      return {
        ...item,
        entityType: item.entityType as EntityType,
        entityData,
      };
    })
  );

  return {
    ...collection,
    items: itemsWithData,
    itemCount: collection.items.length,
  };
}
