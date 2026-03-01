'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2Icon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { deleteNote } from '@/lib/actions/notes';
import { ConfirmDialog } from '@/ui/molecules';

interface NoteDeleteButtonProps {
  noteId: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function NoteDeleteButton({
  noteId,
  showLabel = false,
  size = 'sm'
}: NoteDeleteButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    startTransition(async () => {
      try {
        await deleteNote(noteId);
        setIsModalOpen(false);
        router.push('/profile/notes');
        router.refresh();
      } catch (error) {
        console.error('Erreur lors de la suppression de la note:', error);
        alert('Une erreur est survenue lors de la suppression de la note.');
      }
    });
  };

  const handleCancelDelete = () => {
    if (!isPending) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isPending}
        title="Supprimer cette note de manière irréversible"
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:-translate-y-0.5 active:translate-y-0",
          // Ghost style avec hover rouge seulement
          "bg-transparent text-red-600 hover:bg-red-50 active:bg-red-100",
          "border border-transparent hover:border-red-200",
          size === 'sm' && "px-3 py-1.5 text-sm",
          size === 'md' && "px-4 py-2 text-base",
          size === 'lg' && "px-6 py-3 text-lg"
        )}
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {showLabel && <span className="opacity-50">Suppression...</span>}
          </>
        ) : (
          <>
            <Trash2Icon className="w-4 h-4" />
            {showLabel && 'Supprimer'}
          </>
        )}
      </button>

      <ConfirmDialog
        isOpen={isModalOpen}
        title="Supprimer la note ?"
        message="Êtes-vous sûr de vouloir supprimer cette note ?\n\nCette action est irréversible et toutes les données associées seront perdues."
        confirmLabel="Supprimer"
        cancelLabel="Annuler"
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isConfirming={isPending}
      />
    </>
  );
}
