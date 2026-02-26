'use client';

import { useRouter } from 'next/navigation';
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

  const handleSave = (title: string, content: string) => {
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
  };

  const handleCancel = () => {
    router.push(cancelPath);
  };

  return (
    <NoteEditor
      initialTitle={initialTitle}
      initialContent={initialContent}
      onSave={handleSave}
      onCancel={handleCancel}
      className={className}
    />
  );
}
