'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/ui/atoms/Button';
import { updateNote } from '@/lib/actions/notes';
import type { Note } from '@/lib/actions/notes.schemas';

interface NoteVisibilityToggleProps {
  note: Note;
}

export function NoteVisibilityToggle({ note }: NoteVisibilityToggleProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      await updateNote({
        id: note.id,
        title: note.title,
        content: note.content,
        tags: note.tags,
        isPublic: !note.isPublic,
      });
      router.refresh();
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      className={note.isPublic ? 'text-sepia-600' : 'text-paper-400'}
      title={note.isPublic ? 'Rendre privée' : 'Rendre publique'}
    >
      {note.isPublic ? (
        <EyeIcon className="w-4 h-4" />
      ) : (
        <EyeOffIcon className="w-4 h-4" />
      )}
    </Button>
  );
}
