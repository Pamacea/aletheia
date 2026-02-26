'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { z } from 'zod';
import { getSession } from '@/lib/auth';
import { addXP } from '../user-progress';
import { createReplySchema } from './schemas';
import { extractMentions } from './helpers';
import { MESSAGES } from '@/lib/constants';

/**
 * Forum reply operations
 */

export async function createReply(data: z.infer<typeof createReplySchema>) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const validated = createReplySchema.parse(data);

  const mentions = extractMentions(validated.content);

  const reply = await db.forumReply.create({
    data: {
      content: validated.content,
      userId: session.user.id,
      postId: validated.postId,
      parentId: validated.parentId,
      mentions: [...mentions, ...(validated.mentions || [])],
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  // Update post reply count and last reply time
  await db.forumPost.update({
    where: { id: validated.postId },
    data: {
      replyCount: { increment: 1 },
      lastReplyAt: new Date(),
    },
  });

  // Add XP for creating a forum reply
  try {
    await addXP('forum_reply', {
      entityType: 'post',
      entityId: validated.postId,
      title: validated.content.substring(0, 50) + (validated.content.length > 50 ? '...' : ''),
      description: 'Réponse dans le forum',
    });
  } catch (error) {
    console.error('Failed to add XP for forum reply:', error);
  }

  revalidatePath('/agora/post/[slug]');
  return reply;
}

export async function getReplies(postId: string) {
  const replies = await db.forumReply.findMany({
    where: { postId },
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
            },
          },
          _count: {
            select: {
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
  });

  return replies;
}

export async function deleteReply(replyId: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.MUST_BE_CONNECTED);
  }

  const reply = await db.forumReply.findUnique({
    where: { id: replyId },
  });

  if (!reply) {
    throw new Error('Réponse non trouvée');
  }

  if (reply.userId !== session.user.id && !await isAdmin(session.user.id)) {
    throw new Error('Vous n\'avez pas la permission de supprimer cette réponse');
  }

  await db.forumReply.delete({
    where: { id: replyId },
  });

  // Update post reply count
  await db.forumPost.update({
    where: { id: reply.postId },
    data: { replyCount: { decrement: 1 } },
  });

  revalidatePath('/agora/post/[slug]');
  return { success: true };
}

async function isAdmin(userId: string): Promise<boolean> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });
  return user?.role === 'ADMIN';
}
