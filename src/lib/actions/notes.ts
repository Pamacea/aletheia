'use server';

import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import { createNoteSchema, updateNoteSchema, deleteNoteSchema } from './schemas';
import { addXP } from './user-progress';
import type { Prisma } from '@prisma/client';
import { requireAuth, requireOwnership, canAccessResource } from '@/lib/auth/authorization';

// ============================================================================
// SERVER ACTIONS
// ============================================================================

/**
 * Get all notes for a user with filtering and pagination
 */
export async function getNotes(params: {
  userId?: string;
  search?: string;
  tags?: string[];
  linkedEntityType?: string;
  linkedEntityId?: string;
  page?: number;
  limit?: number;
}) {
  const {
    userId,
    search = '',
    tags = [],
    linkedEntityType,
    linkedEntityId,
    page = 1,
    limit = 20,
  } = params;

  const skip = (page - 1) * limit;

  const where: Prisma.NoteWhereInput = {};

  // Filter by user if provided
  if (userId) {
    where.userId = userId;
  }

  // Search in title and content
  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { content: { contains: search, mode: 'insensitive' } },
    ];
  }

  // Filter by tags
  if (tags.length > 0) {
    where.tags = { hasSome: tags };
  }

  // Filter by linked entity
  if (linkedEntityType && linkedEntityId) {
    where.linkedEntityType = linkedEntityType;
    where.linkedEntityId = linkedEntityId;
  }

  const [notes, total] = await Promise.all([
    prisma.note.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.note.count({ where }),
  ]);

  // Fetch linked entities for each note
  const notesWithLinks = await Promise.all(
    notes.map(async (note) => {
      let linkedConcept = null;
      let linkedText = null;

      if (note.linkedEntityType === 'concept' && note.linkedEntityId) {
        const concept = await prisma.concept.findUnique({
          where: { id: note.linkedEntityId },
          select: { id: true, name: true, slug: true },
        });
        linkedConcept = concept;
      } else if (note.linkedEntityType === 'text' && note.linkedEntityId) {
        const text = await prisma.text.findUnique({
          where: { id: note.linkedEntityId },
          select: { id: true, title: true, slug: true },
        });
        linkedText = text;
      }

      return {
        ...note,
        linkedConcept,
        linkedText,
      };
    })
  );

  return {
    notes: notesWithLinks,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  };
}

/**
 * Get a single note by ID
 */
export async function getNote(id: string, requestUserId?: string) {
  const note = await prisma.note.findUnique({
    where: { id },
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

  if (!note) {
    return null;
  }

  // Check access using authorization helper
  await canAccessResource(note.userId, note.isPublic);

  let linkedConcept = null;
  let linkedText = null;

  if (note.linkedEntityType === 'concept' && note.linkedEntityId) {
    const concept = await prisma.concept.findUnique({
      where: { id: note.linkedEntityId },
      select: { id: true, name: true, slug: true },
    });
    linkedConcept = concept;
  } else if (note.linkedEntityType === 'text' && note.linkedEntityId) {
    const text = await prisma.text.findUnique({
      where: { id: note.linkedEntityId },
      select: { id: true, title: true, slug: true },
    });
    linkedText = text;
  }

  return {
    ...note,
    linkedConcept,
    linkedText,
  };
}

/**
 * Create a new note
 */
export async function createNote(data: {
  title: string;
  content?: string;
  tags?: string[];
  linkedEntityType?: string | null;
  linkedEntityId?: string | null;
}) {
  const session = await requireAuth();

  const validated = createNoteSchema.parse({
    title: data.title,
    content: data.content || '',
    tags: data.tags || [],
    linkedEntityType: data.linkedEntityType || null,
    linkedEntityId: data.linkedEntityId || null,
  });

  const note = await prisma.note.create({
    data: {
      title: validated.title,
      content: validated.content,
      tags: validated.tags,
      linkedEntityType: validated.linkedEntityType,
      linkedEntityId: validated.linkedEntityId,
      userId: session.user.id,
    },
  });

  // Add XP for creating a note
  try {
    await addXP('note_created', {
      entityType: data.linkedEntityType || undefined,
      entityId: data.linkedEntityId || undefined,
      title: validated.title,
    });
  } catch (error) {
    // Don't fail note creation if XP tracking fails
    console.error('Failed to add XP:', error);
  }

  revalidatePath('/notes');
  revalidatePath('/profile');

  return note;
}

/**
 * Update an existing note
 */
export async function updateNote(data: {
  id: string;
  title?: string;
  content?: string;
  tags?: string[];
  isPublic?: boolean;
}) {
  // Verify ownership
  const existingNote = await prisma.note.findUnique({
    where: { id: data.id },
  });

  if (!existingNote) {
    throw new Error('Note non trouvée');
  }

  await requireOwnership(existingNote.userId);

  const validated = updateNoteSchema.parse({
    id: data.id,
    title: data.title ?? existingNote.title,
    content: data.content ?? existingNote.content,
    tags: data.tags ?? existingNote.tags,
    isPublic: data.isPublic ?? existingNote.isPublic,
  });

  const note = await prisma.note.update({
    where: { id: data.id },
    data: {
      title: validated.title,
      content: validated.content,
      tags: validated.tags,
      isPublic: validated.isPublic,
    },
  });

  revalidatePath('/notes');
  revalidatePath(`/notes/${data.id}`);
  revalidatePath('/profile');

  return note;
}

/**
 * Delete a note
 */
export async function deleteNote(id: string) {
  // Verify ownership
  const existingNote = await prisma.note.findUnique({
    where: { id },
  });

  if (!existingNote) {
    throw new Error('Note non trouvée');
  }

  await requireOwnership(existingNote.userId);

  await prisma.note.delete({
    where: { id },
  });

  revalidatePath('/notes');
  revalidatePath('/profile');

  return { success: true };
}

/**
 * Get all unique tags from user's notes
 */
export async function getUserTags(userId: string) {
  // Verify access
  await requireOwnership(userId);

  const notes = await prisma.note.findMany({
    where: { userId },
    select: { tags: true },
  });

  const allTags = notes.flatMap((note) => note.tags);
  const uniqueTags = Array.from(new Set(allTags)).sort();

  return uniqueTags;
}

/**
 * Get notes stats for a user
 */
export async function getNotesStats(userId: string) {
  // Verify access
  await requireOwnership(userId);

  const [total, publicNotes, notesByTag] = await Promise.all([
    prisma.note.count({ where: { userId } }),
    prisma.note.count({ where: { userId, isPublic: true } }),
    prisma.note.findMany({
      where: { userId },
      select: { tags: true },
    }),
  ]);

  // Count notes by tag
  const tagCounts: Record<string, number> = {};
  notesByTag.forEach((note) => {
    note.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));

  return {
    total,
    publicNotes,
    privateNotes: total - publicNotes,
    topTags,
  };
}
