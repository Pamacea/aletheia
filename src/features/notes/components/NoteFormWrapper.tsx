'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { NoteEditor } from './NoteEditor';

interface NoteFormWrapperProps {
  linkedEntityType?: string | null;
  linkedEntityId?: string | null;
  initialTitle?: string;
  initialContent?: string;
  cancelPath?: string;
  className?: string;
}

export function NoteFormWrapper({
  linkedEntityType,
  linkedEntityId,
  initialTitle = '',
  initialContent = '',
  cancelPath = '/profile/notes',
  className,
}: NoteFormWrapperProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (title: string, content: string) => {
    if (isSaving) return; // Prevent multiple submissions

    setIsSaving(true);

    try {
      const form = document.querySelector('form') as HTMLFormElement;

      // Create or update hidden inputs
      let titleInput = form.querySelector('input[name="title"]') as HTMLInputElement;
      if (!titleInput) {
        titleInput = document.createElement('input');
        titleInput.type = 'hidden';
        titleInput.name = 'title';
        form.appendChild(titleInput);
      }
      titleInput.value = title;

      let contentInput = form.querySelector('input[name="content"]') as HTMLInputElement;
      if (!contentInput) {
        contentInput = document.createElement('input');
        contentInput.type = 'hidden';
        contentInput.name = 'content';
        form.appendChild(contentInput);
      }
      contentInput.value = content;

      form.requestSubmit();
      // Note: redirect happens server-side, so we don't need to do anything here
      // If submission fails, isSaving will be reset by page reload
    } catch (error) {
      console.error('Error saving note:', error);
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (isSaving) return; // Prevent cancellation during save
    router.push(cancelPath);
  };

  return (
    <NoteEditor
      initialTitle={initialTitle}
      initialContent={initialContent}
      onSave={handleSave}
      onCancel={handleCancel}
      isSaving={isSaving}
      className={className}
    />
  );
}
