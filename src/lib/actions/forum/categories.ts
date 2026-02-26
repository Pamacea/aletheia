'use server';

import { db } from '@/lib/db';

/**
 * Forum category operations
 */

export async function getCategories() {
  const categories = await db.forumCategory.findMany({
    orderBy: { order: 'asc' },
    include: {
      _count: {
        select: {
          posts: true,
        },
      },
    },
  });

  return categories.map(cat => ({
    ...cat,
    postCount: cat._count.posts,
  }));
}

export async function getCategoryBySlug(slug: string) {
  return await db.forumCategory.findUnique({
    where: { slug },
    include: {
      _count: {
        select: {
          posts: true,
        },
      },
    },
  });
}
