'use client';

import {
  type UseMutationResult,
  type MutationKey,
} from '@tanstack/react-query';
import { useToastActions } from './useToastActions';

/**
 * Extended mutation result with toast notifications
 */
export type MutationWithToastResult<TData, TError, TVariables> =
  UseMutationResult<TData, TError, TVariables> & {
    /**
     * Execute mutation with success toast
     * @param successMessage - Message to show on success
     * @param errorMessage - Message to show on error
     */
    executeWithToasts: (
      successMessage: string,
      errorMessage?: string
    ) => Promise<TData | undefined>;
  };

/**
 * Hook to wrap TanStack Query mutations with toast notifications
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const mutation = useMutation({
 *     mutationFn: async (data: MyData) => {
 *       return await serverAction(data);
 *     },
 *   });
 *
 *   const { executeWithToasts, isLoading } = useMutationWithToast(mutation, {
 *     onSuccess: (data) => {
 *       // Show XP gained toast
 *       if (data.xpGained) {
 *         showXPGained(data.xpGained, 'Action completed');
 *       }
 *     },
 *   });
 *
 *   return (
 *     <button onClick={() => executeWithToasts('Success!', 'Error!')}>
 *       {isLoading ? 'Loading...' : 'Submit'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useMutationWithToast<
  TData,
  TError = Error,
  TVariables = void,
>(
  mutation: UseMutationResult<TData, TError, TVariables>,
  options?: {
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
  }
): MutationWithToastResult<TData, TError, TVariables> {
  const { showSuccess, showError } = useToastActions();

  const executeWithToasts = async (
    successMessage: string,
    errorMessage?: string
  ): Promise<TData | undefined> => {
    try {
      const result = await mutation.mutateAsync(undefined as TVariables);
      showSuccess(successMessage);
      options?.onSuccess?.(result);
      return result;
    } catch (error) {
      showError(errorMessage || 'Une erreur est survenue');
      options?.onError?.(error as TError);
      return undefined;
    }
  };

  return {
    ...mutation,
    executeWithToasts,
  };
}

/**
 * Hook for mutations that grant XP
 * Automatically shows XP toast on success
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const mutation = useMutation({
 *     mutationFn: async (data: MyData) => {
 *       return await serverAction(data);
 *     },
 *   });
 *
 *   const { executeWithXP, isLoading } = useMutationWithXP(mutation, {
 *     getXPFromResponse: (data) => data.xpGained || 0,
 *     actionName: 'Created citation',
 *   });
 * }
 * ```
 */
export function useMutationWithXP<
  TData,
  TError = Error,
  TVariables = void,
>(
  mutation: UseMutationResult<TData, TError, TVariables>,
  options: {
    getXPFromResponse: (data: TData) => number;
    actionName: string;
    successMessage?: string;
    errorMessage?: string;
  }
) {
  const { showXPGained, showSuccess, showError } = useToastActions();

  const executeWithXP = async (
    variables?: TVariables
  ): Promise<TData | undefined> => {
    try {
      const result = await mutation.mutateAsync(variables as TVariables);
      const xp = options.getXPFromResponse(result);

      if (xp > 0) {
        showXPGained(xp, options.actionName);
      }

      if (options.successMessage) {
        showSuccess(options.successMessage);
      }

      return result;
    } catch (error) {
      showError(options.errorMessage || 'Une erreur est survenue');
      return undefined;
    }
  };

  return {
    ...mutation,
    executeWithXP,
  };
}
