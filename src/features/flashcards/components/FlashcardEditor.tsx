/**
 * FlashcardEditor - Create and edit flashcards
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Eye, Plus, X, Lightbulb, BookOpen, Brain, Quote, FileText } from 'lucide-react';
import { Button } from '@/ui/atoms/Button';
import { Input } from '@/ui/atoms/Input';
import { Textarea } from '@/ui/atoms/Textarea';
import { Label } from '@/ui/atoms/Label';
import type { FlashcardType, FlashcardFormData } from '../types';
import { cn } from '@/lib/utils/cn';

interface FlashcardEditorProps {
  initialData?: Partial<FlashcardFormData>;
  onSave: (data: FlashcardFormData) => Promise<void>;
  onCancel?: () => void;
  className?: string;
}

const cardTypeOptions: Array<{ value: FlashcardType; label: string; icon: React.ReactNode; description: string }> = [
  {
    value: 'BASIC',
    label: 'Basic',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Front and back - simple Q&A',
  },
  {
    value: 'CLOZE',
    label: 'Cloze',
    icon: <FileText className="w-5 h-5" />,
    description: 'Fill in the blank',
  },
  {
    value: 'CONCEPT',
    label: 'Concept',
    icon: <Brain className="w-5 h-5" />,
    description: 'Define or explain a concept',
  },
  {
    value: 'QUOTE',
    label: 'Quote',
    icon: <Quote className="w-5 h-5" />,
    description: 'Identify philosopher or work',
  },
  {
    value: 'ESSAY',
    label: 'Essay',
    icon: <Lightbulb className="w-5 h-5" />,
    description: 'Long-form answer prompt',
  },
];

export function FlashcardEditor({ initialData, onSave, onCancel, className }: FlashcardEditorProps) {
  const [formData, setFormData] = useState<FlashcardFormData>({
    type: initialData?.type || 'BASIC',
    question: initialData?.question || '',
    answer: initialData?.answer || '',
    hint: initialData?.hint || '',
    conceptId: initialData?.conceptId || '',
    sourceId: initialData?.sourceId,
    tags: initialData?.tags || [],
    difficulty: initialData?.difficulty || 1,
  });

  const [tagInput, setTagInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSave(formData);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tagToRemove),
    });
  };

  const getTypeSpecificPlaceholder = () => {
    switch (formData.type) {
      case 'BASIC':
        return {
          question: 'What is the Cogito argument?',
          answer: 'Cogito, ergo sum - "I think, therefore I am" - Descartes foundational principle.',
        };
      case 'CLOZE':
        return {
          question: 'The capital of {{France}} is {{Paris}}',
          answer: 'France is a country in Western Europe. Paris is its capital city.',
        };
      case 'CONCEPT':
        return {
          question: 'Define: Epistemology',
          answer: 'Epistemology is the branch of philosophy concerned with knowledge. It studies the nature, origin, and limits of human knowledge.',
        };
      case 'QUOTE':
        return {
          question: 'Who said: "God is dead!"?',
          answer: JSON.stringify({
            quote: 'God is dead! God remains dead! And we have killed him.',
            philosopher: 'Friedrich Nietzsche',
            work: 'The Gay Science',
            context: 'Nietzsche famous declaration about the death of the Christian God in Western society.',
          }),
        };
      case 'ESSAY':
        return {
          question: 'Compare and contrast Plato and Aristotle theory of forms',
          answer: 'Key points to cover:\n- Plato world of Forms vs Aristotle immanent forms\n- Aristotle criticism of separate Forms\n- The role of abstraction in both theories\n- Implications for epistemology and metaphysics',
        };
      default:
        return { question: '', answer: '' };
    }
  };

  const placeholders = getTypeSpecificPlaceholder();

  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-sepia-900">
          {initialData ? 'Edit Flashcard' : 'Create Flashcard'}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
          >
            <Eye className="w-4 h-4" />
            {showPreview ? 'Edit' : 'Preview'}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {!showPreview ? (
          <div className="space-y-6">
            {/* Card Type Selector */}
            <div>
              <Label className="mb-3">Card Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cardTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: option.value })}
                    className={cn(
                      'p-4 border-2 text-left transition-all',
                      formData.type === option.value
                        ? 'border-sepia-500 bg-sepia-50'
                        : 'border-paper-200 hover:border-sepia-300'
                    )}
                  >
                    <div className="flex items-center gap-2 text-sepia-700 mb-1">
                      {option.icon}
                      <span className="font-medium">{option.label}</span>
                    </div>
                    <p className="text-xs text-ink-light">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Question */}
            <div>
              <Label htmlFor="question" className="mb-2">
                {formData.type === 'ESSAY' ? 'Essay Prompt' : 'Question'}
              </Label>
              <Textarea
                id="question"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder={placeholders.question}
                rows={4}
                className="text-lg"
                required
              />
              {formData.type === 'CLOZE' && (
                <p className="text-xs text-ink-light mt-2">
                  Use <code className="px-1 py-0.5 bg-paper-200">{'{{text}}'}</code> to mark blanks
                </p>
              )}
            </div>

            {/* Answer */}
            <div>
              <Label htmlFor="answer" className="mb-2">
                {formData.type === 'QUOTE' ? 'Quote Data' : 'Answer'}
              </Label>
              <Textarea
                id="answer"
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                placeholder={placeholders.answer}
                rows={formData.type === 'ESSAY' ? 8 : 4}
                className="text-base"
                required
              />
              {formData.type === 'QUOTE' && (
                <p className="text-xs text-ink-light mt-2">
                  Enter as JSON: {`{"quote": "...", "philosopher": "...", "work": "..."}`}
                </p>
              )}
            </div>

            {/* Hint */}
            <div>
              <Label htmlFor="hint" className="mb-2">
                Hint (Optional)
              </Label>
              <div className="relative">
                <Lightbulb className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-light" />
                <Input
                  id="hint"
                  value={formData.hint}
                  onChange={(e) => setFormData({ ...formData, hint: e.target.value })}
                  placeholder="A helpful hint for remembering..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Concept ID */}
            <div>
              <Label htmlFor="conceptId">Concept</Label>
              <Input
                id="conceptId"
                value={formData.conceptId}
                onChange={(e) => setFormData({ ...formData, conceptId: e.target.value })}
                placeholder="concept-slug"
                required
              />
            </div>

            {/* Difficulty */}
            <div>
              <Label className="mb-2">Difficulty Level</Label>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData({ ...formData, difficulty: i + 1 })}
                    className={cn(
                      'w-10 h-10 border-2 transition-all',
                      formData.difficulty > i
                        ? 'bg-sepia-500 border-sepia-500'
                        : 'bg-paper-100 border-paper-200 hover:border-sepia-300'
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <Label htmlFor="tags" className="mb-2">
                Tags
              </Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  placeholder="Add a tag..."
                />
                <Button type="button" variant="secondary" onClick={handleAddTag}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, tagIndex) => (
                    <span
                      key={`editor-tag-${tagIndex}`}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-sepia-100 text-sepia-700 text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-sepia-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-paper-200">
              {onCancel && (
                <Button type="button" variant="secondary" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={isSaving}>
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Flashcard'}
              </Button>
            </div>
          </div>
        ) : (
          <PreviewCard formData={formData} />
        )}
      </form>
    </div>
  );
}

function PreviewCard({ formData }: { formData: FlashcardFormData }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white shadow-lg border-2 border-paper-200 p-8">
        {/* Card Type Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sepia-100 text-sepia-700 text-sm font-medium">
            {formData.type}
          </span>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-ink-light mb-2">
            {formData.type === 'ESSAY' ? 'Essay Prompt' : 'Question'}
          </h3>
          <p className="text-xl font-playfair leading-relaxed">{formData.question || '...'}</p>
        </div>

        {/* Answer Preview (blurred) */}
        <div>
          <h3 className="text-sm font-medium text-ink-light mb-2">Answer</h3>
          <div className="p-4 bg-paper-50">
            <p className="text-base leading-relaxed blur-sm select-none">
              {formData.answer || 'No answer provided'}
            </p>
          </div>
          <p className="text-xs text-ink-light mt-2">(Hidden - will be revealed on review)</p>
        </div>

        {/* Hint */}
        {formData.hint && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-2 text-amber-800">
              <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{formData.hint}</span>
            </div>
          </div>
        )}

        {/* Tags */}
        {formData.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.tags.map((tag, tagIndex) => (
              <span key={`preview-tag-${tagIndex}`} className="px-2 py-1 text-xs bg-paper-200 text-ink-light">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation();
            window.dispatchEvent(new CustomEvent('close-preview'));
          }}
        >
          Back to Edit
        </Button>
      </div>
    </motion.div>
  );
}
