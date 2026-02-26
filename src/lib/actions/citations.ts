'use server';

import { prisma } from '@/lib/db/prisma';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { addXP } from './user-progress';
import type { Prisma } from '@prisma/client';

/**
 * Helper function to check if current user is admin
 */
async function isAdmin(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });
  return user?.role === 'ADMIN';
}

/**
 * Fetch all quotes with pagination and filtering
 */
export async function getQuotes(params: {
  page?: number;
  limit?: number;
  author?: string;
  concept?: string;
  search?: string;
}) {
  const { page = 1, limit = 20, author, concept, search } = params;
  const skip = (page - 1) * limit;

  const where: Prisma.QuoteWhereInput = {
    isPublic: true,
  };

  if (author) {
    where.source = {
      author: {
        contains: author,
        mode: 'insensitive',
      },
    };
  }

  if (search) {
    where.OR = [
      { text: { contains: search, mode: 'insensitive' } },
      { source: { title: { contains: search, mode: 'insensitive' } } },
      { source: { author: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const [quotes, total] = await Promise.all([
    prisma.quote.findMany({
      where,
      include: {
        source: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    }),
    prisma.quote.count({ where }),
  ]);

  return {
    quotes,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  };
}

/**
 * Get unique authors for filtering
 */
export async function getQuoteAuthors() {
  const quotes = await prisma.quote.findMany({
    where: {
      isPublic: true,
      source: {
        author: {
          not: null,
        },
      },
    },
    select: {
      source: {
        select: {
          author: true,
        },
      },
    },
    orderBy: {
      source: {
        author: 'asc',
      },
    },
  });

  // Get unique authors
  const authors = new Set<string>();
  quotes.forEach((q) => {
    if (q.source?.author) {
      authors.add(q.source.author);
    }
  });

  return Array.from(authors).sort();
}

/**
 * Get quote stats
 */
export async function getQuoteStats() {
  const [total, authorsCount] = await Promise.all([
    prisma.quote.count({ where: { isPublic: true } }),
    prisma.quote.groupBy({
      by: ['sourceId'],
      where: { isPublic: true },
    }).then((groups) => groups.length),
  ]);

  return { total, authorsCount };
}

/**
 * Get quote by slug
 */
export async function getQuoteBySlug(slug: string) {
  const quote = await prisma.quote.findUnique({
    where: { slug },
    include: {
      source: true,
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  return quote;
}

/**
 * Create a new quote
 */
export async function createQuote(data: {
  text: string;
  context?: string;
  sourceId?: string;
  textId?: string;
  chapterId?: string;
  philosopherId?: string;
  tags?: string[];
  isPublic?: boolean;
}) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;

  // Generate slug from text
  const slug = data.text
    .toLowerCase()
    .substring(0, 100)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    + '-' + Date.now().toString(36);

  const quote = await prisma.quote.create({
    data: {
      slug,
      text: data.text,
      context: data.context,
      sourceId: data.sourceId,
      textId: data.textId,
      chapterId: data.chapterId,
      //       philosopherId: data.phosopherId,
      userId,
      tags: data.tags || [],
      isPublic: data.isPublic ?? false,
    },
    include: {
      source: true,
    },
  });

  // Add XP for quote contribution
  await addXP('quote_contributed', {
    entityType: 'quote',
    entityId: quote.id,
    title: data.text.substring(0, 50) + (data.text.length > 50 ? '...' : ''),
    description: data.context,
  });

  revalidatePath('/citations');
  revalidatePath('/profile');

  return quote;
}

/**
 * Update a quote
 */
export async function updateQuote(
  id: string,
  data: {
    text?: string;
    context?: string;
    sourceId?: string;
    tags?: string[];
    isPublic?: boolean;
  }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;

  // Check if user owns the quote or is admin
  const existingQuote = await prisma.quote.findUnique({
    where: { id },
  });

  if (!existingQuote) {
    throw new Error('Quote not found');
  }

  if (existingQuote.userId !== userId && !await isAdmin(userId)) {
    throw new Error('Not authorized to update this quote');
  }

  const quote = await prisma.quote.update({
    where: { id },
    data: {
      ...(data.text && { text: data.text }),
      ...(data.context !== undefined && { context: data.context }),
      ...(data.sourceId !== undefined && { sourceId: data.sourceId }),
      ...(data.tags && { tags: data.tags }),
      ...(data.isPublic !== undefined && { isPublic: data.isPublic }),
    },
    include: {
      source: true,
    },
  });

  revalidatePath('/citations');
  revalidatePath('/profile');

  return quote;
}

/**
 * Delete a quote
 */
export async function deleteQuote(id: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;

  // Check if user owns the quote or is admin
  const existingQuote = await prisma.quote.findUnique({
    where: { id },
  });

  if (!existingQuote) {
    throw new Error('Quote not found');
  }

  if (existingQuote.userId !== userId && session.user.role !== 'ADMIN') {
    throw new Error('Not authorized to delete this quote');
  }

  await prisma.quote.delete({
    where: { id },
  });

  revalidatePath('/citations');
  revalidatePath('/profile');

  return { success: true };
}

/**
 * Toggle quote public/private status
 */
export async function toggleQuotePublic(id: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    throw new Error('User not authenticated');
  }

  const userId = session.user.id;

  // Check if user owns the quote or is admin
  const existingQuote = await prisma.quote.findUnique({
    where: { id },
  });

  if (!existingQuote) {
    throw new Error('Quote not found');
  }

  if (existingQuote.userId !== userId && !await isAdmin(userId)) {
    throw new Error('Not authorized to update this quote');
  }

  const quote = await prisma.quote.update({
    where: { id },
    data: {
      isPublic: !existingQuote.isPublic,
    },
    include: {
      source: true,
    },
  });

  revalidatePath('/citations');
  revalidatePath('/profile');

  return quote;
}
