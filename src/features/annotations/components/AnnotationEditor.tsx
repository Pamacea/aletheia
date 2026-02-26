'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@/ui/molecules/Modal';
import { Textarea } from '@/ui/atoms/Textarea';
import { Button } from '@/ui/atoms/Button';
import { cn } from '@/lib/utils/cn';
import type { Annotation, AnnotationColor } from '../types';
import { ANNOTATION_COLORS } from '../types';

interface AnnotationEditorProps {
  annotation: Annotation | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { content: string; color: AnnotationColor }) => Promise<void>;
}

export function AnnotationEditor({ annotation, isOpen, onClose, onSave }: AnnotationEditorProps) {
  const [content, setContent] = useState('');
  const [color, setColor] = useState<AnnotationColor>('yellow');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when annotation changes
  useEffect(() => {
    if (annotation) {
      setContent(annotation.content);
      setColor((annotation.color || 'yellow') as AnnotationColor);
    } else {
      setContent('');
      setColor('yellow');
    }
  }, [annotation]);

  const handleSave = async () => {
    if (!annotation || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSave({ content, color });
      onClose();
    } catch (error) {
      console.error('Error saving annotation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!annotation) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Modifier l'annotation"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button variant="ghost" onClick={onClose} disabled={isSubmitting}>
            Annuler
          </Button>
          <Button onClick={handleSave} disabled={isSubmitting || !content.trim()}>
            {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Quote (if exists) */}
        {annotation.quote && (
          <div className="p-3 bg-paper-50 border border-paper-200">
            <p className="text-sm text-ink-light italic">&ldquo;{annotation.quote.text}&rdquo;</p>
          </div>
        )}

        {/* Color Selection */}
        <div>
          <label className="block text-sm font-medium text-ink mb-2">Couleur</label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(ANNOTATION_COLORS) as AnnotationColor[]).map((colorKey) => {
              const config = ANNOTATION_COLORS[colorKey];
              return (
                <button
                  key={colorKey}
                  onClick={() => setColor(colorKey)}
                  className={cn(
                    'px-3 py-2 border-2 transition-all text-left',
                    config.bgClass,
                    config.borderClass,
                    color === colorKey
                      ? 'ring-2 ring-sepia-600 ring-offset-2'
                      : 'hover:opacity-80'
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Ajoutez vos réflexions, questions ou connexions..."
            rows={6}
            className="resize-none"
          />
        </div>

        {/* Metadata */}
        <div className="text-xs text-ink-light space-y-1">
          <div>Créée le {new Date(annotation.createdAt).toLocaleDateString('fr-FR')}</div>
          {annotation.updatedAt !== annotation.createdAt && (
            <div>
              Modifiée le {new Date(annotation.updatedAt).toLocaleDateString('fr-FR')}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
