'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth';
import { z } from 'zod';
import { addXP } from '../user-progress';
import { favoriteSchema, collectionSchema, addToCollectionSchema, updateCollectionSchema } from './schemas';
import { generateShareSlug } from './helpers';
import { MESSAGES } from '@/lib/constants';
import type { EntityType } from '@/lib/constants';

/**
 * CRUD operations for favorites and collections
 */

// ============================================================================
// FAVORITES CRUD
// ============================================================================

export async function toggleFavorite(data: { entityType: EntityType; entityId: string }) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  const validated = favoriteSchema.parse(data);
  const userId = session.user.id;

  const existing = await prisma.favorite.findUnique({
    where: {
      userId_entityType_entityId: {
        userId,
        entityType: validated.entityType,
        entityId: validated.entityId,
      },
    },
  });

  if (existing) {
    await prisma.favorite.delete({
      where: { id: existing.id },
    });

    revalidatePath('/profile/favorites');
    return { favorited: false };
  } else {
    const favorite = await prisma.favorite.create({
      data: {
        userId,
        entityType: validated.entityType,
        entityId: validated.entityId,
      },
    });

    // Add XP for adding a favorite
    try {
      // Get entity title for activity log
      let entityTitle = '';
      if (validated.entityType === 'CONCEPT') {
        const concept = await prisma.concept.findUnique({
          where: { id: validated.entityId },
          select: { name: true },
        });
        entityTitle = concept?.name || '';
      } else if (validated.entityType === 'PHILOSOPHER') {
        const philosopher = await prisma.philosopher.findUnique({
          where: { id: validated.entityId },
          select: { name: true },
        });
        entityTitle = philosopher?.name || '';
      } else if (validated.entityType === 'MOVEMENT') {
        const category = await prisma.category.findUnique({
          where: { id: validated.entityId },
          select: { name: true },
        });
        entityTitle = category?.name || '';
      }

      await addXP('favorite_added', {
        entityType: validated.entityType.toLowerCase(),
        entityId: validated.entityId,
        title: entityTitle,
      });
    } catch (error) {
      // Don't fail favorite creation if XP tracking fails
      console.error('Failed to add XP:', error);
    }

    revalidatePath('/profile/favorites');
    return { favorited: true };
  }
}

// ============================================================================
// COLLECTIONS CRUD
// ============================================================================

export async function createCollection(data: {
  name: string;
  description?: string;
  isPublic?: boolean;
  coverImage?: string;
  color?: string;
}) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  const validated = collectionSchema.parse(data);

  // Get max order for user's collections
  const maxOrder = await prisma.collection.findFirst({
    where: { userId: session.user.id },
    select: { order: true },
    orderBy: { order: 'desc' },
  });

  const shareSlug = await generateShareSlug();

  const collection = await prisma.collection.create({
    data: {
      userId: session.user.id,
      name: validated.name,
      description: validated.description,
      isPublic: validated.isPublic ?? false,
      shareSlug,
      coverImage: validated.coverImage,
      color: validated.color,
      order: (maxOrder?.order ?? -1) + 1,
    },
  });

  revalidatePath('/profile/collections');
  return collection;
}

export async function updateCollection(data: {
  id: string;
  name?: string;
  description?: string;
  isPublic?: boolean;
  coverImage?: string | null;
  color?: string | null;
}) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  const validated = updateCollectionSchema.parse(data);

  // Verify ownership
  const collection = await prisma.collection.findFirst({
    where: {
      id: validated.id,
      userId: session.user.id,
    },
  });

  if (!collection) {
    throw new Error('Collection not found or unauthorized');
  }

  // Generate new share slug if making public
  let updateData: typeof validated & { shareSlug?: string } = { ...validated };
  if (validated.isPublic && !collection.isPublic && !collection.shareSlug) {
    updateData.shareSlug = await generateShareSlug();
  }

  const updated = await prisma.collection.update({
    where: { id: validated.id },
    data: updateData,
  });

  revalidatePath('/profile/collections');
  revalidatePath(`/profile/collections/${validated.id}`);
  return updated;
}

export async function deleteCollection(id: string) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  // Verify ownership
  const collection = await prisma.collection.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!collection) {
    throw new Error('Collection not found or unauthorized');
  }

  await prisma.collection.delete({
    where: { id },
  });

  revalidatePath('/profile/collections');
  return { success: true };
}

export async function addToCollection(data: {
  collectionId: string;
  entityType: EntityType;
  entityId: string;
  note?: string;
}) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  const validated = addToCollectionSchema.parse(data);

  // Verify ownership
  const collection = await prisma.collection.findFirst({
    where: {
      id: validated.collectionId,
      userId: session.user.id,
    },
  });

  if (!collection) {
    throw new Error('Collection not found or unauthorized');
  }

  // Get max order
  const maxOrder = await prisma.collectionItem.findFirst({
    where: { collectionId: validated.collectionId },
    select: { order: true },
    orderBy: { order: 'desc' },
  });

  const item = await prisma.collectionItem.create({
    data: {
      collectionId: validated.collectionId,
      entityType: validated.entityType,
      entityId: validated.entityId,
      note: validated.note,
      order: (maxOrder?.order ?? -1) + 1,
    },
  });

  revalidatePath('/profile/collections');
  revalidatePath(`/profile/collections/${validated.collectionId}`);
  return item;
}

export async function removeFromCollection(collectionItemId: string) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  // Verify ownership through collection
  const item = await prisma.collectionItem.findUnique({
    where: { id: collectionItemId },
    include: { collection: true },
  });

  if (!item || item.collection.userId !== session.user.id) {
    throw new Error('Item not found or unauthorized');
  }

  await prisma.collectionItem.delete({
    where: { id: collectionItemId },
  });

  revalidatePath('/profile/collections');
  revalidatePath(`/profile/collections/${item.collectionId}`);
  return { success: true };
}

export async function updateCollectionItem(data: {
  id: string;
  note?: string;
  order?: number;
}) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  // Verify ownership
  const item = await prisma.collectionItem.findUnique({
    where: { id: data.id },
    include: { collection: true },
  });

  if (!item || item.collection.userId !== session.user.id) {
    throw new Error('Item not found or unauthorized');
  }

  const updated = await prisma.collectionItem.update({
    where: { id: data.id },
    data: {
      ...(data.note !== undefined && { note: data.note }),
      ...(data.order !== undefined && { order: data.order }),
    },
  });

  revalidatePath('/profile/collections');
  revalidatePath(`/profile/collections/${item.collectionId}`);
  return updated;
}

export async function reorderCollectionItems(collectionId: string, itemIds: string[]) {
  'use server';

  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  // Verify ownership
  const collection = await prisma.collection.findFirst({
    where: {
      id: collectionId,
      userId: session.user.id,
    },
  });

  if (!collection) {
    throw new Error('Collection not found or unauthorized');
  }

  // Update order for all items
  await Promise.all(
    itemIds.map((id, index) =>
      prisma.collectionItem.update({
        where: { id },
        data: { order: index },
      })
    )
  );

  revalidatePath('/profile/collections');
  revalidatePath(`/profile/collections/${collectionId}`);
  return { success: true };
}
