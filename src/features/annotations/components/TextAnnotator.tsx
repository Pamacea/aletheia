'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Modal } from '@/ui/molecules/Modal';
import { Textarea } from '@/ui/atoms/Textarea';
import { Button } from '@/ui/atoms/Button';
import { cn } from '@/lib/utils/cn';
import type { AnnotationColor, TextSelection, Annotation } from '../types';
import { ANNOTATION_COLORS } from '../types';

interface TextAnnotatorProps {
  textId?: string;
  chapterId?: string;
  userId: string;
  onCreateAnnotation?: (data: {
    content: string;
    color: AnnotationColor;
    startOffset: number;
    endOffset: number;
  }) => Promise<void>;
  onUpdateAnnotation?: (id: string, data: { content: string; color: AnnotationColor }) => Promise<void>;
  annotations?: Annotation[];
  selectedAnnotation?: Annotation | null;
  onSelectAnnotation?: (annotation: Annotation) => void;
  onHighlightAnnotation?: (annotation: Annotation) => void;
  children: React.ReactNode;
  className?: string;
}

export function TextAnnotator({
  textId,
  chapterId,
  userId,
  onCreateAnnotation,
  onUpdateAnnotation,
  annotations = [],
  selectedAnnotation,
  onSelectAnnotation,
  onHighlightAnnotation,
  children,
  className,
}: TextAnnotatorProps) {
  const [selection, setSelection] = useState<TextSelection | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<AnnotationColor>('yellow');
  const [annotationContent, setAnnotationContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle text selection
  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      setSelection(null);
      setPopupPosition(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    // Check if selection is within the annotator container
    if (!containerRef.current?.contains(range.commonAncestorContainer)) {
      setSelection(null);
      setPopupPosition(null);
      return;
    }

    // Only show popup if text is selected and not too short
    if (selectedText.length < 3) {
      setSelection(null);
      setPopupPosition(null);
      return;
    }

    // Get the full text content to calculate offsets
    const fullText = containerRef.current?.textContent || '';
    const rangeClone = range.cloneRange();
    rangeClone.selectNodeContents(containerRef.current);
    rangeClone.setEnd(range.startContainer, range.startOffset);
    const startOffset = rangeClone.toString().length;
    const endOffset = startOffset + selectedText.length;

    // Calculate popup position
    const rect = range.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    setPopupPosition({
      x: rect.left + scrollLeft + rect.width / 2,
      y: rect.top + scrollTop - 50,
    });

    setSelection({
      text: selectedText,
      startOffset,
      endOffset,
      range,
    });

    setSelectedColor('yellow');
    setAnnotationContent('');
  }, []);

  // Clear selection when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        const target = e.target as HTMLElement;
        if (!target.closest('.annotation-popup') && !target.closest('.annotation-highlight')) {
          setSelection(null);
          setPopupPosition(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle creating annotation
  const handleCreateAnnotation = async () => {
    if (!selection || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onCreateAnnotation?.({
        content: annotationContent,
        color: selectedColor,
        startOffset: selection.startOffset,
        endOffset: selection.endOffset,
      });

      // Clear selection
      window.getSelection()?.removeAllRanges();
      setSelection(null);
      setPopupPosition(null);
      setAnnotationContent('');
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Error creating annotation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle editing annotation
  const handleEditAnnotation = async () => {
    if (!selectedAnnotation || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onUpdateAnnotation?.(selectedAnnotation.id, {
        content: annotationContent,
        color: selectedColor,
      });

      setIsEditModalOpen(false);
      setAnnotationContent('');
      setSelectedColor('yellow');
    } catch (error) {
      console.error('Error updating annotation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open edit modal with annotation data
  const handleOpenEditModal = (annotation: Annotation) => {
    setAnnotationContent(annotation.content);
    setSelectedColor((annotation.color || 'yellow') as AnnotationColor);
    setIsEditModalOpen(true);
  };

  // Highlight annotation in text
  const handleHighlightAnnotation = (annotation: Annotation) => {
    onHighlightAnnotation?.(annotation);
  };

  // Render highlighted text
  const renderHighlightedText = () => {
    if (!containerRef.current) return;

    const text = containerRef.current.textContent || '';
    const ranges: Array<{ start: number; end: number; annotation: Annotation; color: string }> = [];

    // Sort annotations by offset
    const sortedAnnotations = [...annotations]
      .filter((a) => a.startOffset !== null && a.endOffset !== null)
      .sort((a, b) => (a.startOffset || 0) - (b.startOffset || 0));

    // Collect non-overlapping ranges
    sortedAnnotations.forEach((annotation) => {
      if (annotation.startOffset === null || annotation.endOffset === null) return;

      const start = annotation.startOffset;
      const end = annotation.endOffset;
      const color = annotation.color || 'yellow';

      // Check for overlaps
      const overlaps = ranges.some((r) => !(end <= r.start || start >= r.end));

      if (!overlaps) {
        ranges.push({ start, end, annotation, color });
      }
    });

    // Create highlighted HTML
    if (ranges.length === 0) return text;

    let result = '';
    let lastIndex = 0;

    ranges.forEach((range) => {
      // Add text before highlight
      if (range.start > lastIndex) {
        result += text.slice(lastIndex, range.start);
      }

      // Add highlighted text
      const colorConfig = ANNOTATION_COLORS[range.color as AnnotationColor];
      const isSelected = selectedAnnotation?.id === range.annotation.id;
      result += `<mark class={cn(
        "annotation-highlight cursor-pointer transition-all",
        colorConfig.bgClass,
        colorConfig.borderClass,
        "border-b-2",
        isSelected && "ring-2 ring-sepia-600 ring-offset-2"
      )} data-annotation-id="${range.annotation.id}">${text.slice(range.start, range.end)}</mark>`;

      lastIndex = range.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      result += text.slice(lastIndex);
    }

    return result;
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative', className)}
      onMouseUp={handleMouseUp}
    >
      {children}

      {/* Color Picker Popup */}
      {selection && popupPosition && (
        <div
          ref={popupRef}
          className="annotation-popup fixed z-50 bg-white shadow-xl border border-paper-300 p-3 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <span className="text-xs text-ink-light mr-2">Annoter en:</span>
          {(Object.keys(ANNOTATION_COLORS) as AnnotationColor[]).map((color) => {
            const config = ANNOTATION_COLORS[color];
            return (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setIsCreateModalOpen(true);
                }}
                className={cn(
                  'w-8 h-8 border-2 transition-all hover:scale-110',
                  config.bgClass,
                  config.borderClass,
                  selectedColor === color && 'ring-2 ring-sepia-600 ring-offset-2'
                )}
                title={config.label}
              />
            );
          })}
        </div>
      )}

      {/* Create Annotation Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Nouvelle annotation"
      >
        <div className="space-y-4">
          {/* Selected Text */}
          {selection && (
            <div className="p-3 bg-paper-50 border border-paper-200">
              <p className="text-sm text-ink-light italic">&ldquo;{selection.text}&rdquo;</p>
            </div>
          )}

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">Couleur</label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(ANNOTATION_COLORS) as AnnotationColor[]).map((color) => {
                const config = ANNOTATION_COLORS[color];
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'flex-1 min-w-[120px] px-3 py-2 border-2 transition-all text-left',
                      config.bgClass,
                      config.borderClass,
                      selectedColor === color ? 'ring-2 ring-sepia-600 ring-offset-2' : 'hover:opacity-80'
                    )}
                  >
                    <div className="text-sm font-medium text-ink">{config.label}</div>
                    <div className="text-xs text-ink-light">{config.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Note Content */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Votre note
            </label>
            <Textarea
              value={annotationContent}
              onChange={(e) => setAnnotationContent(e.target.value)}
              placeholder="Ajoutez vos réflexions, questions ou connexions..."
              rows={5}
              className="resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <Button variant="ghost" onClick={() => setIsCreateModalOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleCreateAnnotation} disabled={isSubmitting || !annotationContent.trim()}>
            {isSubmitting ? 'Création...' : 'Créer l\'annotation'}
          </Button>
        </div>
      </Modal>

      {/* Edit Annotation Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Modifier l'annotation"
      >
        <div className="space-y-4">
          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">Couleur</label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(ANNOTATION_COLORS) as AnnotationColor[]).map((color) => {
                const config = ANNOTATION_COLORS[color];
                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'flex-1 min-w-[120px] px-3 py-2 border-2 transition-all text-left',
                      config.bgClass,
                      config.borderClass,
                      selectedColor === color ? 'ring-2 ring-sepia-600 ring-offset-2' : 'hover:opacity-80'
                    )}
                  >
                    <div className="text-sm font-medium text-ink">{config.label}</div>
                    <div className="text-xs text-ink-light">{config.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Note Content */}
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Votre note
            </label>
            <Textarea
              value={annotationContent}
              onChange={(e) => setAnnotationContent(e.target.value)}
              placeholder="Ajoutez vos réflexions, questions ou connexions..."
              rows={5}
              className="resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <Button variant="ghost" onClick={() => setIsEditModalOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleEditAnnotation} disabled={isSubmitting || !annotationContent.trim()}>
            {isSubmitting ? 'Mise à jour...' : 'Mettre à jour'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
