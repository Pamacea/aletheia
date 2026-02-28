/**
 * usePostForm Hook
 *
 * Manages post creation form state, validation, submission,
 * and tag management for the forum.
 */

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { createPost } from '@/lib/actions/forum';
import { postSchema, validatePostForm, sanitizeTag, validateTag, type PostFormData } from '../lib/post-schema';

export interface UsePostFormOptions {
  /** Callback after successful post creation */
  onSuccess?: () => void;
  /** Callback after failed post creation */
  onError?: (error: Error) => void;
}

export interface UsePostFormResult {
  /** Form field values */
  title: string;
  content: string;
  categoryId: string | undefined;
  /** Active tags */
  tags: string[];
  /** Current tag input value */
  currentTag: string;
  /** Validation errors by field */
  errors: Record<string, string>;
  /** Form submission state */
  isSubmitting: boolean;
  /** Preview mode state */
  showPreview: boolean;
  /** Update title */
  setTitle: (title: string) => void;
  /** Update content */
  setContent: (content: string) => void;
  /** Update category */
  setCategoryId: (categoryId: string | undefined) => void;
  /** Add current tag to tags list */
  handleAddTag: () => void;
  /** Remove tag from tags list */
  handleRemoveTag: (tag: string) => void;
  /** Update current tag input */
  setCurrentTag: (tag: string) => void;
  /** Handle tag input keydown */
  handleTagKeyDown: (e: React.KeyboardEvent) => void;
  /** Toggle preview mode */
  togglePreview: () => void;
  /** Submit form */
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

/**
 * Hook for managing post creation form
 *
 * @param options - Configuration options
 * @returns Form state and handlers
 *
 * @example
 * ```tsx
 * const {
 *   title, content, categoryId, tags, currentTag,
 *   errors, isSubmitting, showPreview,
 *   setTitle, setContent, setCategoryId,
 *   handleAddTag, handleRemoveTag, setCurrentTag,
 *   handleTagKeyDown, togglePreview, handleSubmit
 * } = usePostForm()
 * ```
 */
export function usePostForm(options: UsePostFormOptions = {}): UsePostFormResult {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddTag = useCallback(() => {
    const tag = sanitizeTag(currentTag);

    // Validate tag
    const tagError = validateTag(tag);
    if (tagError) {
      setErrors(prev => ({ ...prev, tag: tagError }));
      return;
    }

    // Check for duplicates
    if (tag && !tags.includes(tag)) {
      setTags(prev => [...prev, tag]);
      setCurrentTag('');
      // Clear tag error if exists
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.tag;
        return newErrors;
      });
    }
  }, [currentTag, tags]);

  const handleRemoveTag = useCallback((tag: string) => {
    setTags(prev => prev.filter(t => t !== tag));
  }, []);

  const handleTagKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  }, [handleAddTag]);

  const togglePreview = useCallback(() => {
    setShowPreview(prev => !prev);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validate form
    const [isValid, fieldErrors] = validatePostForm({ title, content, categoryId });

    if (!isValid) {
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const validated = postSchema.parse({ title, content, categoryId });

      await createPost({
        title: validated.title,
        content: validated.content,
        categoryId: validated.categoryId,
        tags,
      });

      // Navigate to forum
      router.push('/agora');
      options.onSuccess?.();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Failed to create post:', error);
        setErrors({ _form: 'Échec de la création du post. Veuillez réessayer.' });
      }
      options.onError?.(error instanceof Error ? error : new Error('Unknown error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    title,
    content,
    categoryId,
    tags,
    currentTag,
    errors,
    isSubmitting,
    showPreview,
    setTitle,
    setContent,
    setCategoryId,
    handleAddTag,
    handleRemoveTag,
    setCurrentTag,
    handleTagKeyDown,
    togglePreview,
    handleSubmit,
  };
}
