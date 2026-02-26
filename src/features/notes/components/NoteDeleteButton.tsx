'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2Icon } from 'lucide-react';
import { Button } from '@/ui/atoms/Button';
import { deleteNote } from '@/lib/actions/notes';

interface NoteDeleteButtonProps {
  noteId: string;
}

export function NoteDeleteButton({ noteId }: NoteDeleteButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
      return;
    }

    startTransition(async () => {
      await deleteNote(noteId);
      router.push('/profile/notes');
      router.refresh();
    });
  };

  return (
    <Button
      variant="danger"
      size="sm"
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      title="Supprimer"
    >
      <Trash2Icon className="w-4 h-4" />
    </Button>
  );
}
