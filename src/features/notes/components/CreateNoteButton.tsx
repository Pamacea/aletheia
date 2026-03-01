'use client';

import Link from 'next/link';
import { PlusIcon, FileTextIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface CreateNoteButtonProps {
  entityType?: 'concept' | 'philosopher' | 'text';
  entityId?: string;
  entityName?: string;
  variant?: 'floating' | 'inline';
  className?: string;
}

export function CreateNoteButton({
  entityType,
  entityId,
  entityName,
  variant = 'floating',
  className,
}: CreateNoteButtonProps) {
  const queryParams = new URLSearchParams();
  if (entityType && entityId) {
    queryParams.set('linkedEntityType', entityType);
    queryParams.set('linkedEntityId', entityId);
    if (entityName) {
      queryParams.set('linkedEntityName', entityName);
    }
  }

  const href = `/profile/notes/new${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

  if (variant === 'floating') {
    return (
      <Link
        href={href}
        className={cn(
          "fixed bottom-8 right-8 z-50",
          "inline-flex items-center justify-center gap-1.5",
          "px-2.5 py-1.5 bg-sepia-600 hover:bg-sepia-700 text-paper-50 text-xs",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300",
          "group",
          className
        )}
        title="Créer une note"
      >
        <PlusIcon className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
        <span className="living-word font-medium hidden sm:inline">Note</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5",
        "px-2 py-1 bg-sepia-600 hover:bg-sepia-700 text-paper-50 text-xs",
        "font-medium",
        "transition-all duration-200",
        "border-2 border-sepia-600",
        className
      )}
    >
      <FileTextIcon className="w-3 h-3" />
      <span className="living-word">Créer une note</span>
    </Link>
  );
}
