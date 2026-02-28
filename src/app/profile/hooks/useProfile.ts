/**
 * useProfile Hook
 *
 * Manages profile data state, edit mode, and profile updates
 * for user profile pages.
 */

import { useState, useCallback } from 'react';

export interface ProfileData {
  name: string;
  email: string;
  image?: string | null;
  bio?: string | null;
  joinDate: Date;
}

export interface UseProfileOptions {
  /** Initial profile data */
  initialData: ProfileData;
  /** Callback after successful profile update */
  onUpdate?: (data: { name?: string; bio?: string }) => Promise<void>;
}

export interface UseProfileResult {
  /** Current profile data */
  profile: ProfileData;
  /** Whether in edit mode */
  isEditing: boolean;
  /** Profile update in progress */
  isSubmitting: boolean;
  /** Enter edit mode */
  startEditing: () => void;
  /** Cancel editing */
  cancelEditing: () => void;
  /** Save profile changes */
  saveProfile: (changes: { name?: string; bio?: string }) => Promise<void>;
}

/**
 * Hook for managing profile state and updates
 *
 * @param options - Configuration options
 * @returns Profile state and handlers
 *
 * @example
 * ```tsx
 * const {
 *   profile, isEditing, isSubmitting,
 *   startEditing, cancelEditing, saveProfile
 * } = useProfile({
 *   initialData: { name, email, image, bio, joinDate },
 *   onUpdate: async (data) => { await updateProfile(data) }
 * })
 * ```
 */
export function useProfile(options: UseProfileOptions): UseProfileResult {
  const { initialData, onUpdate } = options;
  const [profile, setProfile] = useState<ProfileData>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const cancelEditing = useCallback(() => {
    setIsEditing(false);
    // Reset to initial data
    setProfile(initialData);
  }, [initialData]);

  const saveProfile = useCallback(async (changes: { name?: string; bio?: string }) => {
    if (!onUpdate) return;

    setIsSubmitting(true);
    try {
      await onUpdate(changes);

      // Update local state
      setProfile(prev => ({
        ...prev,
        ...changes,
      }));

      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [onUpdate]);

  return {
    profile,
    isEditing,
    isSubmitting,
    startEditing,
    cancelEditing,
    saveProfile,
  };
}

/**
 * Utility function to get initials from a name
 *
 * @param name - Full name
 * @returns Initials (up to 2 characters)
 *
 * @example
 * getInitials('Jean-Paul Sartre') // => 'JS'
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Utility function to format join date
 *
 * @param date - Join date
 * @returns Formatted date string
 *
 * @example
 * formatJoinDate(new Date('2024-01-15')) // => 'janvier 2024'
 */
export function formatJoinDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}
