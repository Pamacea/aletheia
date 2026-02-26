'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { NoteCard } from './NoteCard';
import { deleteNote, updateNote } from '@/lib/actions/notes';
import type { NoteWithLinked } from '@/lib/actions/notes.schemas';

interface NotesListClientProps {
  initialNotes: NoteWithLinked[];
}

export function NotesListClient({ initialNotes }: NotesListClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [notes, setNotes] = useState(initialNotes);

  const handleEdit = (id: string) => {
    router.push(`/profile/notes/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    startTransition(async () => {
      await deleteNote(id);
      setNotes(notes.filter((n) => n.id !== id));
      router.refresh();
    });
  };

  const handleToggleVisibility = async (id: string, currentIsPublic: boolean) => {
    startTransition(async () => {
      await updateNote({
        id,
        isPublic: !currentIsPublic,
      });
      setNotes(
        notes.map((n) =>
          n.id === id ? { ...n, isPublic: !n.isPublic } : n
        )
      );
      router.refresh();
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          {...note}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleVisibility={handleToggleVisibility}
        />
      ))}
    </div>
  );
}
