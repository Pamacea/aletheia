'use client';

import { useToast } from '@/ui/molecules/ToastProvider';
import type { Toast } from '@/ui/molecules/Toast';

/**
 * Helper functions for showing different types of toasts
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { showXPGained, showAchievementUnlocked } = useToastActions();
 *
 *   const handleAction = async () => {
 *     await performAction();
 *     showXPGained(50, 'Action completed');
 *   };
 * }
 * ```
 */
export function useToastActions() {
  const { addToast } = useToast();

  return {
    /**
     * Show an XP gained toast notification
     * @param xp - Amount of XP gained
     * @param action - Description of the action that granted XP
     */
    showXPGained: (xp: number, action: string) => {
      addToast({
        type: 'xp',
        title: `+${xp} XP`,
        message: action,
        xp,
      });
    },

    /**
     * Show an achievement unlocked toast notification
     * @param name - Name of the achievement
     * @param icon - Icon/emoji for the achievement
     * @param xpReward - Optional XP reward amount
     */
    showAchievementUnlocked: (name: string, icon: string, xpReward?: number) => {
      addToast({
        type: 'achievement',
        title: 'Achievement débloqué !',
        message: name,
        icon,
        xp: xpReward,
      });
    },

    /**
     * Show a success toast notification
     * @param message - Success message
     * @param title - Optional custom title
     */
    showSuccess: (message: string, title?: string) => {
      addToast({
        type: 'success',
        title: title || 'Succès',
        message,
      });
    },

    /**
     * Show an error toast notification
     * @param message - Error message
     * @param title - Optional custom title
     */
    showError: (message: string, title?: string) => {
      addToast({
        type: 'error',
        title: title || 'Erreur',
        message,
      });
    },

    /**
     * Show a custom toast notification
     * @param toast - Toast object with all properties
     */
    showCustomToast: (toast: Omit<Toast, 'id'>) => {
      addToast(toast);
    },
  };
}
