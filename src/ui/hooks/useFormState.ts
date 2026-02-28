import { useState, useCallback } from 'react';

/**
 * Generic form state management hook
 *
 * Provides consistent state management for forms including loading, error, success, and data states.
 * Replaces manual useState patterns used across multiple forms.
 *
 * @template T - The type of data the form handles
 *
 * @example
 * ```tsx
 * function MyForm() {
 *   const { loading, error, success, data, execute, setError, setData } = useFormState<User>()
 *
 *   const handleSubmit = async () => {
 *     try {
 *       const result = await execute(() => createUser(formData))
 *       // Success! result contains the created user
 *     } catch (err) {
 *       // Error already set in state
 *     }
 *   }
 * }
 * ```
 */
export function useFormState<T = unknown>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<T | null>(null);

  /**
   * Execute an async operation with automatic state management
   *
   * @param fn - Async function to execute
   * @returns Promise that resolves with the result
   * @throws The original error from the function
   */
  const execute = useCallback(
    async (fn: () => Promise<T>): Promise<T | undefined> => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const result = await fn();
        setData(result);
        setSuccess(true);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        setSuccess(false);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /**
   * Reset all states to initial values
   */
  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setSuccess(false);
    setData(null);
  }, []);

  /**
   * Set error message directly
   */
  const setErrorDirect = useCallback((message: string) => {
    setError(message);
    setSuccess(false);
  }, []);

  /**
   * Set success state directly
   */
  const setSuccessDirect = useCallback((value: boolean = true) => {
    setSuccess(value);
    if (value) setError(null);
  }, []);

  return {
    // State
    loading,
    error,
    success,
    data,

    // Actions
    execute,
    reset,
    setError: setErrorDirect,
    setSuccess: setSuccessDirect,
    setData,
  };
}

/**
 * Type for the return value of useFormState
 */
export type FormState<T = unknown> = ReturnType<typeof useFormState<T>>;
