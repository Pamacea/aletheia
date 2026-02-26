'use server';

import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { requireAuth, requireOwnership, canAccessResource } from '@/lib/auth/authorization';

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

export const createAnnotationSchema = z.object({
  textId: z.string().cuid().nullable(),
  chapterId: z.string().cuid().nullable(),
  quoteId: z.string().cuid().nullable(),
  content: z.string().min(1, 'Le contenu est requis').max(5000, 'Le contenu ne peut pas dépasser 5000 caractères'),
  startOffset: z.number().int().min(0).nullable(),
  endOffset: z.number().int().min(0).nullable(),
  color: z.enum(['yellow', 'blue', 'green', 'red', 'purple', 'orange']).default('yellow'),
  isPublic: z.boolean().default(false),
});

export const updateAnnotationSchema = z.object({
  id: z.string().cuid(),
  content: z.string().min(1, 'Le contenu est requis').max(5000, 'Le contenu ne peut pas dépasser 5000 caractères'),
  color: z.enum(['yellow', 'blue', 'green', 'red', 'purple', 'orange']),
  isPublic: z.boolean().default(false),
});

export const deleteAnnotationSchema = z.object({
  id: z.string().cuid(),
});

// ============================================================================
// SERVER ACTIONS
// ============================================================================

/**
 * Get annotations for a user with filters
 */
export async function getAnnotations(params: {
  textId?: string;
  chapterId?: string;
  quoteId?: string;
  colors?: string[];
  search?: string;
  page?: number;
  limit?: number;
}) {
  'use server';

  const session = await requireAuth();

  const {
    textId,
    chapterId,
    quoteId,
    colors = [],
    search = '',
    page = 1,
    limit = 50,
  } = params;

  const skip = (page - 1) * limit;

  const where: Prisma.AnnotationWhereInput = { userId: session.user.id };

  if (textId) where.textId = textId;
  if (chapterId) where.chapterId = chapterId;
  if (quoteId) where.quoteId = quoteId;
  if (colors.length > 0) where.color = { in: colors };
  if (search) {
    where.content = { contains: search, mode: 'insensitive' };
  }

  const [annotations, total] = await Promise.all([
    prisma.annotation.findMany({
      where,
      include: {
        chapter: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
        quote: {
          select: {
            id: true,
            text: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.annotation.count({ where }),
  ]);

  return {
    annotations,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  };
}

/**
 * Get a single annotation by ID
 */
export async function getAnnotation(id: string, requestUserId: string) {
  'use server';

  const annotation = await prisma.annotation.findUnique({
    where: { id },
    include: {
      chapter: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
      quote: {
        select: {
          id: true,
          text: true,
        },
      },
    },
  });

  if (!annotation) {
    return null;
  }

  // Check access using authorization helper
  await canAccessResource(annotation.userId, annotation.isPublic);

  return annotation;
}

/**
 * Create a new annotation
 */
export async function createAnnotation(data: {
  textId?: string | null;
  chapterId?: string | null;
  quoteId?: string | null;
  content: string;
  startOffset?: number | null;
  endOffset?: number | null;
  color?: string;
  isPublic?: boolean;
}) {
  'use server';

  const session = await requireAuth();

  const validated = createAnnotationSchema.parse({
    textId: data.textId || null,
    chapterId: data.chapterId || null,
    quoteId: data.quoteId || null,
    content: data.content,
    startOffset: data.startOffset || null,
    endOffset: data.endOffset || null,
    color: data.color || 'yellow',
    isPublic: data.isPublic || false,
  });

  const annotation = await prisma.annotation.create({
    data: {
      userId: session.user.id,
      textId: validated.textId,
      chapterId: validated.chapterId,
      quoteId: validated.quoteId,
      content: validated.content,
      startOffset: validated.startOffset,
      endOffset: validated.endOffset,
      color: validated.color,
      isPublic: validated.isPublic,
    },
    include: {
      chapter: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
      quote: {
        select: {
          id: true,
          text: true,
        },
      },
    },
  });

  // Revalidate relevant paths
  if (annotation.textId) {
    revalidatePath(`/bibliotheque/${annotation.textId}`);
  }
  if (annotation.chapterId) {
    revalidatePath(`/bibliotheque/${annotation.textId}/${annotation.chapter?.slug}`);
  }
  revalidatePath('/profile');

  return annotation;
}

/**
 * Update an existing annotation
 */
export async function updateAnnotation(data: {
  id: string;
  content?: string;
  color?: string;
  isPublic?: boolean;
}) {
  'use server';

  // Verify ownership
  const existingAnnotation = await prisma.annotation.findUnique({
    where: { id: data.id },
  });

  if (!existingAnnotation) {
    throw new Error('Annotation non trouvée');
  }

  await requireOwnership(existingAnnotation.userId);

  const validated = updateAnnotationSchema.parse({
    id: data.id,
    content: data.content ?? existingAnnotation.content,
    color: data.color ?? existingAnnotation.color ?? 'yellow',
    isPublic: data.isPublic ?? existingAnnotation.isPublic,
  });

  const annotation = await prisma.annotation.update({
    where: { id: data.id },
    data: {
      content: validated.content,
      color: validated.color,
      isPublic: validated.isPublic,
    },
    include: {
      chapter: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
      quote: {
        select: {
          id: true,
          text: true,
        },
      },
    },
  });

  // Revalidate relevant paths
  if (annotation.textId) {
    revalidatePath(`/bibliotheque/${annotation.textId}`);
  }
  if (annotation.chapterId) {
    revalidatePath(`/bibliotheque/${annotation.textId}/${annotation.chapter?.slug}`);
  }
  revalidatePath('/profile');

  return annotation;
}

/**
 * Delete an annotation
 */
export async function deleteAnnotation(id: string) {
  'use server';

  // Verify ownership
  const existingAnnotation = await prisma.annotation.findUnique({
    where: { id },
    include: {
      chapter: true,
    },
  });

  if (!existingAnnotation) {
    throw new Error('Annotation non trouvée');
  }

  await requireOwnership(existingAnnotation.userId);

  await prisma.annotation.delete({
    where: { id },
  });

  // Revalidate relevant paths
  if (existingAnnotation.textId) {
    revalidatePath(`/bibliotheque/${existingAnnotation.textId}`);
  }
  if (existingAnnotation.chapterId) {
    revalidatePath(`/bibliotheque/${existingAnnotation.textId}/${existingAnnotation.chapter?.slug}`);
  }
  revalidatePath('/profile');

  return { success: true };
}

/**
 * Get annotations grouped by color for a user
 */
export async function getAnnotationsByColor(textId?: string) {
  'use server';

  const session = await requireAuth();
  const where: Prisma.AnnotationWhereInput = { userId: session.user.id };
  if (textId) where.textId = textId;

  const annotations = await prisma.annotation.findMany({
    where,
    select: {
      id: true,
      color: true,
    },
  });

  const grouped: Record<string, number> = {
    yellow: 0,
    blue: 0,
    green: 0,
    red: 0,
    purple: 0,
    orange: 0,
  };

  annotations.forEach((annotation) => {
    const color = annotation.color || 'yellow';
    if (grouped[color] !== undefined) {
      grouped[color]++;
    }
  });

  return grouped;
}

/**
 * Export annotations as JSON
 */
export async function exportAnnotationsAsJson(params: {
  textId?: string;
  chapterId?: string;
}) {
  'use server';

  const session = await requireAuth();
  const { textId, chapterId } = params;

  const where: Prisma.AnnotationWhereInput = { userId: session.user.id };
  if (textId) where.textId = textId;
  if (chapterId) where.chapterId = chapterId;

  const annotations = await prisma.annotation.findMany({
    where,
    include: {
      chapter: {
        select: {
          id: true,
          title: true,
          slug: true,
        },
      },
      quote: {
        select: {
          id: true,
          text: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return {
    exportedAt: new Date().toISOString(),
    total: annotations.length,
    annotations,
  };
}

/**
 * Export annotations as Markdown
 */
export async function exportAnnotationsAsMarkdown(params: {
  textId?: string;
  chapterId?: string;
}) {
  'use server';

  const session = await requireAuth();
  const { textId, chapterId } = params;

  const where: Prisma.AnnotationWhereInput = { userId: session.user.id };
  if (textId) where.textId = textId;
  if (chapterId) where.chapterId = chapterId;

  const annotations = await prisma.annotation.findMany({
    where,
    include: {
      chapter: {
        select: {
          title: true,
        },
      },
      quote: {
        select: {
          text: true,
        },
      },
    },
    orderBy: [{ chapter: { title: 'asc' } }, { createdAt: 'asc' }],
  });

  let markdown = `# Annotations\n\n`;
  markdown += `Exporté le ${new Date().toLocaleDateString('fr-FR')}\n\n`;
  markdown += `**Total:** ${annotations.length} annotations\n\n`;
  markdown += `---\n\n`;

  // Group by chapter
  const byChapter: Record<string, typeof annotations> = {};
  annotations.forEach((annotation) => {
    const chapterTitle = annotation.chapter?.title || 'Général';
    if (!byChapter[chapterTitle]) {
      byChapter[chapterTitle] = [];
    }
    byChapter[chapterTitle].push(annotation);
  });

  // Generate markdown for each chapter
  Object.entries(byChapter).forEach(([chapterTitle, chapterAnnotations]) => {
    markdown += `## ${chapterTitle}\n\n`;

    chapterAnnotations.forEach((annotation, index) => {
      const colorEmoji = {
        yellow: '🟡',
        blue: '🔵',
        green: '🟢',
        red: '🔴',
        purple: '🟣',
        orange: '🟠',
      }[annotation.color || 'yellow'];

      markdown += `### ${colorEmoji} Annotation ${index + 1}\n\n`;

      if (annotation.quote) {
        markdown += `> ${annotation.quote.text}\n\n`;
      }

      markdown += `${annotation.content}\n\n`;

      if (annotation.isPublic) {
        markdown += `*Publique*\n\n`;
      }

      markdown += `---\n\n`;
    });
  });

  return markdown;
}
