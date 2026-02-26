import { z } from 'zod';

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

export const createNoteSchema = z.object({
  title: z.string().min(1, 'Le titre est requis').max(200, 'Le titre ne peut pas dépasser 200 caractères'),
  content: z.string().default(''),
  tags: z.array(z.string()).default([]),
  linkedEntityType: z.enum(['concept', 'philosopher', 'text', 'null']).nullable(),
  linkedEntityId: z.string().nullable(),
});

export const updateNoteSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1, 'Le titre est requis').max(200, 'Le titre ne peut pas dépasser 200 caractères'),
  content: z.string().default(''),
  tags: z.array(z.string()).default([]),
  isPublic: z.boolean().default(false),
});

export const deleteNoteSchema = z.object({
  id: z.string().cuid(),
});

// ============================================================================
// TYPES
// ============================================================================

export interface Note {
  id: string;
  title: string;
  content: string;
  userId: string;
  tags: string[];
  linkedEntityType: string | null;
  linkedEntityId: string | null;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteWithLinked extends Note {
  linkedConcept?: { id: string; name: string; slug: string } | null;
  linkedText?: { id: string; title: string; slug: string } | null;
}
