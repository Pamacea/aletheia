'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { z } from 'zod';
import { getSession } from '@/lib/auth';
import { addXP } from '../user-progress';
import { createPostSchema, updatePostSchema } from './schemas';
import { generateSlug, extractMentions, generateExcerpt } from './helpers';
import { LIMITS, MESSAGES, POST } from '@/lib/constants';

/**
 * Forum post operations (create, update, delete, get)
 */

export async function createPost(data: z.infer<typeof createPostSchema>) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const validated = createPostSchema.parse(data);

  const excerpt = generateExcerpt(validated.content);
  const mentions = extractMentions(validated.content);
  const slug = generateSlug(validated.title);

  const post = await db.forumPost.create({
    data: {
      title: validated.title,
      content: validated.content,
      excerpt,
      userId: session.user.id,
      categoryId: validated.categoryId,
      tags: validated.tags,
      mentions,
      slug,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      category: true,
    },
  });

  // Update category post count
  if (validated.categoryId) {
    await db.forumCategory.update({
      where: { id: validated.categoryId },
      data: { postCount: { increment: 1 } },
    });
  }

  // Add XP for creating a forum post
  try {
    await addXP('forum_post', {
      entityType: 'category',
      entityId: validated.categoryId || 'general',
      title: validated.title,
      description: `Nouvelle discussion: ${validated.title}`,
    });
  } catch (error) {
    console.error('Failed to add XP for forum post:', error);
  }

  revalidatePath('/agora');
  revalidatePath('/agora/[category]');
  return post;
}

export async function updatePost(data: z.infer<typeof updatePostSchema>) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const validated = updatePostSchema.parse(data);

  // Check if user owns the post or is admin
  const post = await db.forumPost.findUnique({
    where: { id: validated.postId },
  });

  if (!post) {
    throw new Error('Discussion non trouvée');
  }

  if (post.userId !== session.user.id && !await isAdmin(session.user.id)) {
    throw new Error('Vous n\'avez pas la permission de modifier cette discussion');
  }

  const excerpt = validated.content
    ? generateExcerpt(validated.content)
    : undefined;

  const updated = await db.forumPost.update({
    where: { id: validated.postId },
    data: {
      ...(validated.title && { title: validated.title }),
      ...(validated.content && { content: validated.content, excerpt }),
      ...(validated.tags && { tags: validated.tags }),
    },
  });

  revalidatePath('/agora');
  revalidatePath('/agora/post/[slug]');
  return updated;
}

export async function deletePost(postId: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const post = await db.forumPost.findUnique({
    where: { id: postId },
    include: { category: true },
  });

  if (!post) {
    throw new Error('Discussion non trouvée');
  }

  if (post.userId !== session.user.id && !await isAdmin(session.user.id)) {
    throw new Error('Vous n\'avez pas la permission de supprimer cette discussion');
  }

  await db.forumPost.delete({
    where: { id: postId },
  });

  // Update category post count
  if (post.categoryId) {
    await db.forumCategory.update({
      where: { id: post.categoryId },
      data: { postCount: { decrement: 1 } },
    });
  }

  revalidatePath('/agora');
  revalidatePath('/agora/[category]');
  return { success: true };
}

export async function getPosts(options?: {
  categoryId?: string
  tag?: string
  sort?: 'latest' | 'popular' | 'trending'
  limit?: number
  offset?: number
}) {
  const {
    categoryId,
    tag,
    sort = 'latest',
    limit = 20,
    offset = 0,
  } = options || {};

  const orderBy: any = {};
  switch (sort) {
    case 'popular':
      orderBy.likeCount = 'desc';
      break;
    case 'trending':
      orderBy.replyCount = 'desc';
      break;
    default:
      orderBy.createdAt = 'desc';
  }

  const where: any = {};
  if (categoryId) {
    where.categoryId = categoryId;
  }
  if (tag) {
    where.tags = {
      has: tag,
    };
  }

  const posts = await db.forumPost.findMany({
    where,
    orderBy,
    take: limit,
    skip: offset,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          role: true,
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

export async function getPostBySlug(slug: string) {
  const session = await getSession();

  const post = await db.forumPost.findUnique({
    where: { slug },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          role: true,
          bio: true,
        },
      },
      category: true,
      replies: {
        where: { parentId: null }, // Only top-level replies
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              role: true,
            },
          },
          // Include nested replies recursively
          replies: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                  role: true,
                },
              },
              replies: {
                include: {
                  user: {
                    select: {
                      id: true,
                      name: true,
                      image: true,
                      role: true,
                    },
                  },
                },
              },
              _count: {
                select: {
                  replies: true,
                  likes: true,
                },
              },
            },
          },
          _count: {
            select: {
              replies: true,
              likes: true,
            },
          },
        },
        orderBy: { createdAt: 'asc' },
      },
      _count: {
        select: {
          replies: true,
          likes: true,
        },
      },
    },
  });

  if (!post) {
    return null;
  }

  // Get user's likes for this post and all replies (including nested)
  let userLikes: { postId: string | null; replyId: string | null }[] = [];
  if (session?.user?.id) {
    // Extract all reply IDs recursively
    const getAllReplyIds = (replies: any[]): string[] => {
      const ids: string[] = [];
      for (const reply of replies) {
        ids.push(reply.id);
        if (reply.replies && reply.replies.length > 0) {
          ids.push(...getAllReplyIds(reply.replies));
        }
      }
      return ids;
    };

    const allReplyIds = getAllReplyIds(post.replies);

    userLikes = await db.forumLike.findMany({
      where: {
        userId: session.user.id,
        OR: [
          { postId: post.id },
          { replyId: { in: allReplyIds } },
        ],
      },
      select: {
        postId: true,
        replyId: true,
      },
    });
  }

  // Increment view count only once per user per session
  // Using a simple approach: check if user has a like, if not and they're logged in, count view
  const hasUserLiked = userLikes.some(like => like.postId === post.id);
  if (!hasUserLiked && session?.user?.id) {
    await db.forumPost.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });
    post.views += 1;
  } else if (!session?.user?.id) {
    // For anonymous users, still increment but could be improved with cookies
    await db.forumPost.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });
    post.views += 1;
  }

  return {
    ...post,
    userLikes: userLikes.reduce((acc, like) => {
      if (like.postId) acc.post = true;
      if (like.replyId) acc.replies.add(like.replyId);
      return acc;
    }, { post: false, replies: new Set<string>() }),
  };
}

async function isAdmin(userId: string): Promise<boolean> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });
  return user?.role === 'ADMIN';
}
