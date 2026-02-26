'use server';

import { db } from '@/lib/db';
import { LIMITS } from '@/lib/constants';

/**
 * Forum search and discovery operations
 */

export async function searchPosts(query: string, limit = 20) {
  const posts = await db.forumPost.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
        { tags: { has: query } },
      ],
    },
    take: limit,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      category: true,
      _count: {
        select: {
          replies: true,
          likes: true,
        },
      },
    },
  });

  return posts;
}

export async function getTrendingPosts(limit = 10) {
  const posts = await db.forumPost.findMany({
    where: {
      createdAt: {
        gte: new Date(Date.now() - LIMITS.TIME.ONE_WEEK_MS),
      },
    },
    orderBy: [
      { likeCount: 'desc' },
      { replyCount: 'desc' },
    ],
    take: limit,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      category: true,
      _count: {
        select: {
          replies: true,
          likes: true,
        },
      },
    },
  });

  return posts;
}

export async function getPopularTags(limit = 20) {
  const posts = await db.forumPost.findMany({
    select: {
      tags: true,
    },
  });

  const tagCounts = new Map<string, number>();
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag, count]) => ({ tag, count }));
}
