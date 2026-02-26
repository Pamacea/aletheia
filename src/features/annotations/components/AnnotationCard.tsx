'use client';

import { useState } from 'react';
import { Button } from '@/ui/atoms/Button';
import { cn } from '@/lib/utils/cn';
import type { Annotation, AnnotationColor } from '../types';
import { ANNOTATION_COLORS } from '../types';
import { formatRelativeTime } from '../utils/date';

interface AnnotationCardProps {
  annotation: Annotation;
  onEdit?: (annotation: Annotation) => void;
  onDelete?: (id: string) => void;
  onClick?: (annotation: Annotation) => void;
  isSelected?: boolean;
  showActions?: boolean;
  className?: string;
}

export function AnnotationCard({
  annotation,
  onEdit,
  onDelete,
  onClick,
  isSelected = false,
  showActions = true,
  className,
}: AnnotationCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const color = (annotation.color || 'yellow') as AnnotationColor;
  const colorConfig = ANNOTATION_COLORS[color];

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await onDelete?.(annotation.id);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCardClick = () => {
    onClick?.(annotation);
  };

  return (
    <div
      className={cn(
        'group relative p-4 border-2 transition-all cursor-pointer',
        'hover:shadow-md',
        colorConfig.borderClass,
        colorConfig.bgClass,
        isSelected && 'ring-2 ring-sepia-600 ring-offset-2',
        className
      )}
      onClick={handleCardClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ink-light uppercase tracking-wide">
            {colorConfig.label}
          </span>
          {annotation.isPublic && (
            <span className="px-2 py-0.5 text-xs bg-sepia-100 text-sepia-700">
              Publique
            </span>
          )}
        </div>

        {showActions && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(annotation);
              }}
              className="p-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
              disabled={isDeleting}
              className="p-1 text-red-600 hover:text-red-700"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </Button>
          </div>
        )}
      </div>

      {/* Quote (if exists) */}
      {annotation.quote && (
        <blockquote className="mb-3 pl-3 border-l-2 border-sepia-600 italic text-ink-light">
          {annotation.quote.text.length > 150
            ? `${annotation.quote.text.slice(0, 150)}...`
            : annotation.quote.text}
        </blockquote>
      )}

      {/* Content */}
      <p className="text-ink leading-relaxed whitespace-pre-wrap">
        {annotation.content}
      </p>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-paper-300 flex items-center justify-between text-xs text-ink-light">
        <div className="flex items-center gap-2">
          {annotation.chapter && (
            <span className="font-medium">{annotation.chapter.title}</span>
          )}
        </div>
        <time dateTime={annotation.createdAt.toISOString()} suppressHydrationWarning>
          {formatRelativeTime(annotation.createdAt)}
        </time>
      </div>
    </div>
  );
}
