'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/ui/atoms/Button';
import { cn } from '@/lib/utils/cn';
import { TextAnnotator } from './TextAnnotator';
import { AnnotationSidebar } from './AnnotationSidebar';
import { AnnotationEditor } from './AnnotationEditor';
import { useAnnotations } from '../hooks/useAnnotations';
import {
  downloadAsJson,
  downloadAsMarkdown,
  generateAnnotationMarkdown,
} from '../utils/export';
import type { AnnotationColor, Annotation } from '../types';

interface ReadingViewProps {
  userId: string;
  textId?: string;
  chapterId?: string;
  chapterContent: string;
  chapterTitle?: string;
  textTitle?: string;
  initialAnnotations?: Annotation[];
  className?: string;
}

export function ReadingView({
  userId,
  textId,
  chapterId,
  chapterContent,
  chapterTitle,
  textTitle,
  initialAnnotations = [],
  className,
}: ReadingViewProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const {
    annotations,
    filteredAnnotations,
    colorCounts,
    isLoading,
    filters,
    createAnnotation,
    updateAnnotation,
    deleteAnnotation,
    fetchAnnotations,
    filterByColors,
    searchAnnotations,
    clearFilters,
  } = useAnnotations({
    textId,
    chapterId,
    initialAnnotations,
  });

  // Handle creating annotation
  const handleCreateAnnotation = useCallback(
    async (data: { content: string; color: AnnotationColor; startOffset: number; endOffset: number }) => {
      await createAnnotation(data);
      await fetchAnnotations();
    },
    [createAnnotation, fetchAnnotations]
  );

  // Handle updating annotation
  const handleUpdateAnnotation = useCallback(
    async (id: string, data: { content: string; color: AnnotationColor }) => {
      await updateAnnotation(id, data);
      await fetchAnnotations();
    },
    [updateAnnotation, fetchAnnotations]
  );

  // Handle deleting annotation
  const handleDeleteAnnotation = useCallback(
    async (id: string) => {
      await deleteAnnotation(id);
      await fetchAnnotations();
    },
    [deleteAnnotation, fetchAnnotations]
  );

  // Handle editing annotation
  const handleEditAnnotation = (annotation: Annotation) => {
    setSelectedAnnotation(annotation);
    setIsEditorOpen(true);
  };

  // Handle clicking annotation in sidebar
  const handleClickAnnotation = (annotation: Annotation) => {
    setSelectedAnnotation(annotation);
    // TODO: Scroll to and highlight the annotated text
  };

  // Handle exporting annotations
  const handleExport = async (format: 'json' | 'markdown') => {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `annotations-${textTitle || 'text'}-${timestamp}`;

    if (format === 'json') {
      const data = {
        exportedAt: new Date().toISOString(),
        textTitle,
        chapterTitle,
        total: annotations.length,
        annotations,
      };
      downloadAsJson(data, `${filename}.json`);
    } else {
      const markdown = generateAnnotationMarkdown(annotations, textTitle);
      downloadAsMarkdown(markdown, `${filename}.md`);
    }
  };

  return (
    <div className={cn('flex h-full', className)}>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Toolbar */}
        <div className="sticky top-0 z-10 bg-paper-50 border-b border-paper-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-serif font-semibold text-ink">{chapterTitle}</h1>
            {textTitle && (
              <span className="text-ink-light text-sm">{textTitle}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Sidebar */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className={cn('w-5 h-5 transition-transform', isSidebarOpen && 'rotate-180')}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Annotations ({annotations.length})
            </Button>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto px-6 py-8">
          <TextAnnotator
            userId={userId}
            textId={textId}
            chapterId={chapterId}
            onCreateAnnotation={handleCreateAnnotation}
            onUpdateAnnotation={handleUpdateAnnotation}
            annotations={annotations}
            selectedAnnotation={selectedAnnotation}
            onSelectAnnotation={setSelectedAnnotation}
          >
            <div className="prose prose-lg max-w-none">
              {/* Render chapter content with annotation highlights */}
              <article
                className="text-ink leading-loose space-y-4"
                dangerouslySetInnerHTML={{ __html: chapterContent }}
              />
            </div>
          </TextAnnotator>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-96 border-l border-paper-300">
          <AnnotationSidebar
            annotations={annotations}
            colorCounts={colorCounts}
            isLoading={isLoading}
            filters={filters}
            onFilterChange={(newFilters) => {
              if (newFilters.colors) {
                filterByColors(newFilters.colors);
              }
              if (newFilters.search !== undefined) {
                searchAnnotations(newFilters.search);
              }
            }}
            onEditAnnotation={handleEditAnnotation}
            onDeleteAnnotation={handleDeleteAnnotation}
            onClickAnnotation={handleClickAnnotation}
            onExport={handleExport}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      )}

      {/* Annotation Editor */}
      <AnnotationEditor
        annotation={selectedAnnotation}
        isOpen={isEditorOpen}
        onClose={() => {
          setIsEditorOpen(false);
          setSelectedAnnotation(null);
        }}
        onSave={async (data) => {
          if (selectedAnnotation) {
            await handleUpdateAnnotation(selectedAnnotation.id, data);
            setIsEditorOpen(false);
            setSelectedAnnotation(null);
          }
        }}
      />
    </div>
  );
}
