'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { addXP } from '../user-progress';
import { LIMITS, MESSAGES } from '@/lib/constants';

/**
 * Forum like operations
 */

export async function toggleLikePost(postId: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const existing = await db.forumLike.findFirst({
    where: {
      userId: session.user.id,
      postId,
      replyId: null,
    },
  });

  if (existing) {
    // Unlike
    await db.forumLike.delete({
      where: { id: existing.id },
    });
    await db.forumPost.update({
      where: { id: postId },
      data: { likeCount: { decrement: 1 } },
    });
    revalidatePath('/agora/post/[slug]');
    return { liked: false };
  } else {
    // Like
    const post = await db.forumPost.findUnique({
      where: { id: postId },
      select: { userId: true, likeCount: true },
    });

    if (!post) {
      throw new Error('Discussion non trouvée');
    }

    await db.forumLike.create({
      data: {
        userId: session.user.id,
        postId,
      },
    });

    // Award XP to post author if they have less than max awarded likes
    if (post.likeCount < LIMITS.XP.MAX_AWARDED_PER_POST && post.userId !== session.user.id) {
      try {
        await addXP('forum_post', {
          entityType: 'post_like',
          entityId: postId,
          title: 'Like reçu sur une discussion',
          description: '+1 XP (max 10 par discussion)',
        });
      } catch (error) {
        console.error('Failed to add XP for like received:', error);
      }
    }

    await db.forumPost.update({
      where: { id: postId },
      data: { likeCount: { increment: 1 } },
    });
    revalidatePath('/agora/post/[slug]');
    return { liked: true };
  }
}

export async function toggleLikeReply(replyId: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const existing = await db.forumLike.findFirst({
    where: {
      userId: session.user.id,
      replyId,
      postId: null,
    },
  });

  if (existing) {
    await db.forumLike.delete({
      where: { id: existing.id },
    });
    await db.forumReply.update({
      where: { id: replyId },
      data: { likeCount: { decrement: 1 } },
    });
    revalidatePath('/agora/post/[slug]');
    return { liked: false };
  } else {
    const reply = await db.forumReply.findUnique({
      where: { id: replyId },
      select: { userId: true, likeCount: true },
    });

    if (!reply) {
      throw new Error('Réponse non trouvée');
    }

    await db.forumLike.create({
      data: {
        userId: session.user.id,
        replyId,
      },
    });

    // Award XP to reply author if they have less than max awarded likes
    if (reply.likeCount < LIMITS.XP.MAX_AWARDED_PER_REPLY && reply.userId !== session.user.id) {
      try {
        await addXP('forum_reply', {
          entityType: 'reply_like',
          entityId: replyId,
          title: 'Like reçu sur une réponse',
          description: '+1 XP (max 10 par réponse)',
        });
      } catch (error) {
        console.error('Failed to add XP for like received:', error);
      }
    }

    await db.forumReply.update({
      where: { id: replyId },
      data: { likeCount: { increment: 1 } },
    });
    revalidatePath('/agora/post/[slug]');
    return { liked: true };
  }
}
