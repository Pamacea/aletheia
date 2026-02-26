'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getConcepts,
  getConcept,
  getCategories,
  getConceptsForGraph,
  getConceptRelations,
  getConceptSuggestions,
} from '@/lib/actions/concepts';
import type { Concept, Category, ConceptWithRelations, ConceptRelation } from '@/types';
import type { ConceptWithCategory } from '@/types/prisma';

// Queries
export function useConcepts(params?: { search?: string; category?: string }) {
  return useQuery<ConceptWithCategory[]>({
    queryKey: ['concepts', params],
    queryFn: () => getConcepts(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useConcept(slug: string) {
  return useQuery({
    queryKey: ['concept', slug],
    queryFn: () => getConcept(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
}

export function useConceptsForGraph() {
  return useQuery<ConceptWithRelations[]>({
    queryKey: ['concepts-graph'],
    queryFn: async () => {
      const result = await getConceptsForGraph();
      return result || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

/**
 * Get all relations for a concept (without limit)
 */
export function useConceptRelations(slug: string) {
  return useQuery<ConceptRelation[]>({
    queryKey: ['concept-relations', slug],
    queryFn: async () => {
      const result = await getConceptRelations(slug);
      return result || [];
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

/**
 * Get suggested concepts to explore next
 */
interface ConceptSuggestion {
  id: string;
  name: string;
  slug: string;
  shortDefinition: string | null;
  category: {
    name: string;
    color: string | null;
  } | null;
  reason: string;
}

export function useConceptSuggestions(slug: string, limit = 5) {
  return useQuery<ConceptSuggestion[]>({
    queryKey: ['concept-suggestions', slug, limit],
    queryFn: async () => {
      const result = await getConceptSuggestions(slug, limit);
      return result || [];
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

// Invalidate queries helper
export function useInvalidateConcepts() {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({ queryKey: ['concepts'] });
    queryClient.invalidateQueries({ queryKey: ['concept'] });
    queryClient.invalidateQueries({ queryKey: ['categories'] });
    queryClient.invalidateQueries({ queryKey: ['concepts-graph'] });
    queryClient.invalidateQueries({ queryKey: ['concept-relations'] });
    queryClient.invalidateQueries({ queryKey: ['concept-suggestions'] });
  };
}
