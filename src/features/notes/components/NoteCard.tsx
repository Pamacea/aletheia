'use client';

import { useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { PencilIcon, Trash2Icon, EyeIcon, EyeOffIcon, FileTextIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import ReactMarkdown from 'react-markdown';
import { Badge, ConfirmDialog } from '@/ui/molecules';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt: Date;
  createdAt: Date;
  isPublic: boolean;
  linkedConcept?: { id: string; name: string; slug: string } | null;
  linkedText?: { id: string; title: string; slug: string } | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onToggleVisibility?: (id: string, isPublic: boolean) => void;
  className?: string;
}

export function NoteCard({
  id,
  title,
  content,
  tags,
  updatedAt,
  createdAt,
  isPublic,
  linkedConcept,
  linkedText,
  onEdit,
  onDelete,
  onToggleVisibility,
  className,
}: NoteCardProps) {
  const router = useRouter();
  const actionsRef = useRef<HTMLDivElement>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  // Strip markdown for preview
  const getPreview = (markdown: string, maxLength = 150) => {
    const plainText = markdown
      .replace(/^#+\s+/gm, '') // Remove headers
      .replace(/\*\*/g, '') // Remove bold
      .replace(/\*/g, '') // Remove italic
      .replace(/~~/g, '') // Remove strikethrough
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
      .replace(/`([^`]+)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/^>\s+/gm, '') // Remove quotes
      .replace(/^[-*+]\s+/gm, '') // Remove list markers
      .replace(/^\d+\.\s+/gm, '') // Remove numbered list markers
      .replace(/\n\s*\n/g, '\n') // Remove multiple newlines
      .trim();

    if (plainText.length <= maxLength) return plainText;
    return plainText.slice(0, maxLength).trim() + '...';
  };

  const timeAgo = formatDistanceToNow(new Date(updatedAt), {
    addSuffix: true,
    locale: fr,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete?.(id);
      setIsDeleteModalOpen(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    if (!isDeleting) {
      setIsDeleteModalOpen(false);
    }
  };

  const handleToggleVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onToggleVisibility?.(id, isPublic);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onEdit?.(id);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't navigate if clicking on actions area or links
    const target = e.target as HTMLElement;
    const isActionsArea = actionsRef.current?.contains(target);
    const isLink = target.closest('a');

    if (!isActionsArea && !isLink) {
      router.push(`/profile/notes/${id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "group block bg-white border-2 border-paper-300 p-5 cursor-pointer",
        "hover:shadow-lg hover:border-sepia-600 transition-all duration-300",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-sepia-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
        <div ref={actionsRef} className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            onClick={handleToggleVisibility}
            className={cn(
              "p-1.5 rounded transition-all duration-200",
              "hover:bg-paper-200 hover:shadow-sm",
              "active:scale-95",
              isPublic ? "text-sepia-600" : "text-paper-400"
            )}
            title={isPublic ? 'Rendre privée (note publique actuellement)' : 'Rendre publique (note privée actuellement)'}
          >
            {isPublic ? (
              <EyeIcon className="w-4 h-4" />
            ) : (
              <EyeOffIcon className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={handleEdit}
            className={cn(
              "p-1.5 rounded transition-all duration-200",
              "text-ink-light hover:text-sepia-600",
              "hover:bg-paper-200 hover:shadow-sm",
              "active:scale-95"
            )}
            title="Modifier cette note"
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className={cn(
              "p-1.5 rounded transition-all duration-200",
              "text-ink-light hover:text-red-600",
              "hover:bg-red-50 hover:shadow-sm",
              "active:scale-95"
            )}
            title="Supprimer cette note de manière irréversible"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Linked Entity */}
      {(linkedConcept || linkedText) && (
        <div className="mb-3">
          {linkedConcept && (
            <Link
              href={`/conceptuaire/${linkedConcept.slug}`}
              className="inline-flex items-center gap-1 text-sm text-sepia-600 hover:text-sepia-700"
              onClick={(e) => e.stopPropagation()}
            >
              <FileTextIcon className="w-3 h-3" />
              {linkedConcept.name}
            </Link>
          )}
          {linkedText && (
            <Link
              href={`/bibliotheque/${linkedText.slug}`}
              className="inline-flex items-center gap-1 text-sm text-sepia-600 hover:text-sepia-700"
              onClick={(e) => e.stopPropagation()}
            >
              <FileTextIcon className="w-3 h-3" />
              {linkedText.title}
            </Link>
          )}
        </div>
      )}

      {/* Content Preview */}
      <div className="mb-4">
        <p className="text-ink-light text-sm leading-relaxed line-clamp-4">
          {getPreview(content) || <em className="text-paper-400">Aucun contenu</em>}
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-paper-500">
        <span>{timeAgo}</span>
        <span>{content.length} caractères</span>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sepia-600">
          <path
            fill="currentColor"
            d="M100 0v100H0C55.2 100 100 55.2 100 0z"
          />
        </svg>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isDeleteModalOpen}
        title="Supprimer la note ?"
        message={`Êtes-vous sûr de vouloir supprimer cette note ?\n\nTitre: ${title}\n\nCette action est irréversible et toutes les données associées seront perdues.`}
        confirmLabel="Supprimer"
        cancelLabel="Annuler"
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        isConfirming={isDeleting}
      />
    </div>
  );
}
