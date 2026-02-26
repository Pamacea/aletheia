'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { isFavorited, toggleFavorite } from '@/lib/actions/favorites';
import type { EntityType } from '@/lib/constants';

interface UseFavoriteOptions {
  entityType: EntityType;
  entityId: string;
}

/**
 * Optimized hook for managing favorite status with TanStack Query.
 *
 * Features:
 * - Automatic favorite status checking
 * - Optimistic UI updates (instant feedback)
 * - Automatic error rollback
 * - Cache invalidation for related queries
 *
 * @example
 * ```tsx
 * const { isFavorite, isLoading, toggle, isToggling } = useFavorite({
 *   entityType: 'CONCEPT',
 *   entityId: conceptId
 * });
 * ```
 */
export function useFavorite({ entityType, entityId }: UseFavoriteOptions) {
  const queryClient = useQueryClient();

  // Query favorite status
  const {
    data: isFavorite = false,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['favorite', entityType, entityId],
    queryFn: async () => {
      const result = await isFavorited({ entityType, entityId });
      return result;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 10, // Keep in garbage collection for 10 minutes
  });

  // Mutation to toggle favorite with optimistic updates
  const mutation = useMutation({
    mutationFn: async () => {
      const result = await toggleFavorite({ entityType, entityId });
      return result;
    },
    onMutate: async () => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ['favorite', entityType, entityId],
      });

      // Snapshot previous value
      const previousFavorite = queryClient.getQueryData<boolean>([
        'favorite',
        entityType,
        entityId,
      ]);

      // Optimistically update to the new value
      queryClient.setQueryData(['favorite', entityType, entityId], !isFavorite);

      // Return context with previous value for rollback
      return { previousFavorite };
    },
    onError: (error, variables, context) => {
      // Rollback to previous value on error
      if (context?.previousFavorite !== undefined) {
        queryClient.setQueryData(
          ['favorite', entityType, entityId],
          context.previousFavorite
        );
      }
      console.error('Failed to toggle favorite:', error);
    },
    onSuccess: (result) => {
      // Update with the actual result from server
      queryClient.setQueryData(
        ['favorite', entityType, entityId],
        result.favorited
      );

      // Invalidate favorites list queries to refresh counts
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });

      // Invalidate favorites counts if they exist
      queryClient.invalidateQueries({
        queryKey: ['favoritesCount'],
      });
    },
    onSettled: () => {
      // Always refetch after error or success to ensure server state
      queryClient.invalidateQueries({
        queryKey: ['favorite', entityType, entityId],
      });
    },
  });

  return {
    isFavorite,
    isLoading,
    error,
    toggle: mutation.mutate,
    isToggling: mutation.isPending,
  };
}
