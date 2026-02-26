'use client';

import { useState, useCallback, useEffect } from 'react';
import type {
  Annotation,
  AnnotationColor,
  AnnotationFilters,
  AnnotationFormData,
  TextSelection,
} from '../types';
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  getAnnotations,
  getAnnotationsByColor,
} from '../actions/annotations';

interface UseAnnotationsOptions {
  textId?: string;
  chapterId?: string;
  initialAnnotations?: Annotation[];
}

export function useAnnotations({
  textId,
  chapterId,
  initialAnnotations = [],
}: UseAnnotationsOptions) {
  const [annotations, setAnnotations] = useState<Annotation[]>(initialAnnotations);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<AnnotationFilters>({});
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Fetch annotations with filters
   */
  const fetchAnnotations = useCallback(
    async (newFilters?: Partial<AnnotationFilters>) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getAnnotations({
          textId,
          chapterId,
          colors: newFilters?.colors || filters.colors,
          search: newFilters?.search || filters.search,
          page: 1,
          limit: 100,
        });

        setAnnotations(result.annotations);

        if (newFilters) {
          setFilters((prev) => ({ ...prev, ...newFilters }));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des annotations');
        console.error('Error fetching annotations:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [textId, chapterId, filters]
  );

  /**
   * Create a new annotation
   */
  const createAnnotationMutation = useCallback(
    async (data: {
      content: string;
      color: AnnotationColor;
      startOffset?: number;
      endOffset?: number;
      quoteId?: string;
    }) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await createAnnotation({
          textId,
          chapterId,
          quoteId: data.quoteId,
          content: data.content,
          startOffset: data.startOffset,
          endOffset: data.endOffset,
          color: data.color,
          isPublic: false,
        });

        setAnnotations((prev) => [result, ...prev]);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la création de l\'annotation';
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [textId, chapterId]
  );

  /**
   * Update an existing annotation
   */
  const updateAnnotationMutation = useCallback(
    async (id: string, data: Partial<AnnotationFormData>) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await updateAnnotation({
          id,
          content: data.content,
          color: data.color,
          isPublic: data.isPublic ?? false,
        });

        setAnnotations((prev) =>
          prev.map((annotation) => (annotation.id === id ? result : annotation))
        );

        if (selectedAnnotation?.id === id) {
          setSelectedAnnotation(result);
        }

        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la mise à jour de l\'annotation';
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [selectedAnnotation]
  );

  /**
   * Delete an annotation
   */
  const deleteAnnotationMutation = useCallback(
    async (id: string) => {
      setIsLoading(true);
      setError(null);

      try {
        await deleteAnnotation(id);
        setAnnotations((prev) => prev.filter((annotation) => annotation.id !== id));

        if (selectedAnnotation?.id === id) {
          setSelectedAnnotation(null);
          setIsEditing(false);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression de l\'annotation';
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [selectedAnnotation]
  );

  /**
   * Filter annotations by color
   */
  const filterByColors = useCallback(
    (colors: AnnotationColor[]) => {
      setFilters((prev) => ({ ...prev, colors }));
      fetchAnnotations({ colors });
    },
    [fetchAnnotations]
  );

  /**
   * Search annotations
   */
  const searchAnnotations = useCallback(
    (query: string) => {
      setFilters((prev) => ({ ...prev, search: query }));
      fetchAnnotations({ search: query });
    },
    [fetchAnnotations]
  );

  /**
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setFilters({});
    fetchAnnotations({ colors: undefined, search: undefined });
  }, [fetchAnnotations]);

  /**
   * Get annotation counts by color
   */
  const [colorCounts, setColorCounts] = useState<Record<AnnotationColor, number>>({
    yellow: 0,
    blue: 0,
    green: 0,
    red: 0,
    purple: 0,
    orange: 0,
  });

  useEffect(() => {
    const fetchColorCounts = async () => {
      try {
        const counts = await getAnnotationsByColor(textId);
        setColorCounts(counts as Record<AnnotationColor, number>);
      } catch (err) {
        console.error('Error fetching color counts:', err);
      }
    };

    fetchColorCounts();
  }, [textId, annotations]);

  /**
   * Get filtered annotations
   */
  const filteredAnnotations = annotations.filter((annotation) => {
    if (filters.colors && filters.colors.length > 0) {
      if (!annotation.color || !filters.colors.includes(annotation.color as AnnotationColor)) {
        return false;
      }
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        annotation.content.toLowerCase().includes(searchLower) ||
        annotation.quote?.text?.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });

  return {
    // State
    annotations,
    filteredAnnotations,
    colorCounts,
    isLoading,
    error,
    filters,
    selectedAnnotation,
    isEditing,

    // Mutations
    createAnnotation: createAnnotationMutation,
    updateAnnotation: updateAnnotationMutation,
    deleteAnnotation: deleteAnnotationMutation,

    // Actions
    fetchAnnotations,
    filterByColors,
    searchAnnotations,
    clearFilters,
    setSelectedAnnotation,
    setIsEditing,
  };
}
