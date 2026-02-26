'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/ui/atoms/Button';
import { Input } from '@/ui/atoms/Input';
import { cn } from '@/lib/utils/cn';
import type { Annotation, AnnotationColor, AnnotationFilters } from '../types';
import { ANNOTATION_COLORS } from '../types';
import { AnnotationCard } from './AnnotationCard';

interface AnnotationSidebarProps {
  annotations: Annotation[];
  colorCounts: Record<AnnotationColor, number>;
  isLoading?: boolean;
  filters?: AnnotationFilters;
  onFilterChange?: (filters: AnnotationFilters) => void;
  onEditAnnotation?: (annotation: Annotation) => void;
  onDeleteAnnotation?: (id: string) => void;
  onClickAnnotation?: (annotation: Annotation) => void;
  onExport?: (format: 'json' | 'markdown') => void;
  onClose?: () => void;
  className?: string;
}

export function AnnotationSidebar({
  annotations,
  colorCounts,
  isLoading = false,
  filters,
  onFilterChange,
  onEditAnnotation,
  onDeleteAnnotation,
  onClickAnnotation,
  onExport,
  onClose,
  className,
}: AnnotationSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeColors, setActiveColors] = useState<AnnotationColor[]>([]);

  const handleToggleColor = (color: AnnotationColor) => {
    const newColors = activeColors.includes(color)
      ? activeColors.filter((c) => c !== color)
      : [...activeColors, color];

    setActiveColors(newColors);
    onFilterChange?.({ colors: newColors, search: searchQuery });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onFilterChange?.({ colors: activeColors, search: value });
  };

  const handleClearFilters = () => {
    setActiveColors([]);
    setSearchQuery('');
    onFilterChange?.({ colors: [], search: '' });
  };

  const hasActiveFilters = activeColors.length > 0 || searchQuery.length > 0;

  const filteredAnnotations = useMemo(() => {
    return annotations.filter((annotation) => {
      // Color filter
      if (activeColors.length > 0) {
        if (!annotation.color || !activeColors.includes(annotation.color as AnnotationColor)) {
          return false;
        }
      }

      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          annotation.content.toLowerCase().includes(searchLower) ||
          annotation.quote?.text?.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [annotations, activeColors, searchQuery]);

  return (
    <div
      className={cn(
        'flex flex-col h-full bg-paper-50 border-l border-paper-300',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-paper-200 bg-white">
        <div>
          <h2 className="text-lg font-semibold font-serif text-ink">Annotations</h2>
          <p className="text-sm text-ink-light">
            {filteredAnnotations.length} / {annotations.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 border-b border-paper-200 bg-white space-y-3">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Rechercher..."
            className={cn(
              'w-full pl-10 pr-4 py-2 text-sm border border-paper-300',
              'focus:border-sepia-600 focus:outline-none focus:ring-1 focus:ring-sepia-600',
              'placeholder:text-paper-400'
            )}
          />
        </div>

        {/* Color Filters */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(ANNOTATION_COLORS) as AnnotationColor[]).map((color) => {
            const config = ANNOTATION_COLORS[color];
            const isActive = activeColors.includes(color);
            const count = colorCounts[color] || 0;

            return (
              <button
                key={color}
                onClick={() => handleToggleColor(color)}
                disabled={count === 0}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium transition-all',
                  'disabled:opacity-40 disabled:cursor-not-allowed',
                  config.bgClass,
                  isActive ? 'ring-2 ring-sepia-600 ring-offset-1' : 'hover:opacity-80'
                )}
                title={`${config.label}: ${config.description}`}
              >
                <span className="mr-1">{config.label}</span>
                <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-sepia-600 hover:text-sepia-700 underline"
          >
            Effacer les filtres
          </button>
        )}
      </div>

      {/* Export Options */}
      {onExport && (
        <div className="p-3 border-b border-paper-200 bg-paper-100 flex items-center justify-between">
          <span className="text-sm text-ink-light">Exporter</span>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => onExport('json')}>
              JSON
            </Button>
            <Button variant="secondary" size="sm" onClick={() => onExport('markdown')}>
              Markdown
            </Button>
          </div>
        </div>
      )}

      {/* Annotations List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-ink-light">Chargement...</div>
          </div>
        ) : filteredAnnotations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <svg
              className="w-16 h-16 text-paper-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h3 className="text-lg font-semibold font-serif text-ink mb-2">
              {hasActiveFilters ? 'Aucune annotation trouvée' : 'Aucune annotation'}
            </h3>
            <p className="text-sm text-ink-light">
              {hasActiveFilters
                ? 'Essayez de modifier vos filtres'
                : 'Sélectionnez du texte pour créer votre première annotation'}
            </p>
          </div>
        ) : (
          filteredAnnotations.map((annotation) => (
            <AnnotationCard
              key={annotation.id}
              annotation={annotation}
              onEdit={onEditAnnotation}
              onDelete={onDeleteAnnotation}
              onClick={onClickAnnotation}
            />
          ))
        )}
      </div>
    </div>
  );
}
