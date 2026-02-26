import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { ToastProvider, useToast } from '@/ui/molecules/ToastProvider';
import { useToastActions } from '@/ui/hooks/useToastActions';

// Wrapper to provide Toast context
const createWrapper = () => {
  return ({ children }: { children: ReactNode }) => (
    <ToastProvider>{children}</ToastProvider>
  );
};

describe('Toast System', () => {
  describe('useToast', () => {
    it('should provide toast context', () => {
      const { result } = renderHook(() => useToast(), {
        wrapper: createWrapper(),
      });

      expect(result.current).toBeDefined();
      expect(result.current.addToast).toBeDefined();
      expect(result.current.removeToast).toBeDefined();
      expect(result.current.toasts).toBeDefined();
    });

    it('should add a toast', () => {
      const { result } = renderHook(() => useToast(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.addToast({
          type: 'success',
          title: 'Test Toast',
          message: 'Test message',
        });
      });

      expect(result.current.toasts).toHaveLength(1);
      expect(result.current.toasts[0].title).toBe('Test Toast');
    });

    it('should remove a toast', () => {
      const { result } = renderHook(() => useToast(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.addToast({
          type: 'success',
          title: 'Test Toast',
        });
      });

      expect(result.current.toasts).toHaveLength(1);

      act(() => {
        result.current.removeToast(result.current.toasts[0].id);
      });

      expect(result.current.toasts).toHaveLength(0);
    });

    it('should generate unique IDs for toasts', () => {
      const { result } = renderHook(() => useToast(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.addToast({ type: 'success', title: 'Toast 1' });
        result.current.addToast({ type: 'success', title: 'Toast 2' });
      });

      expect(result.current.toasts).toHaveLength(2);
      expect(result.current.toasts[0].id).not.toBe(result.current.toasts[1].id);
    });
  });

  describe('useToastActions', () => {
    it('should show XP gained toast', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showXPGained(50, 'Test action');
      });

      expect(result.current.toasts.toasts).toHaveLength(1);
      expect(result.current.toasts.toasts[0].type).toBe('xp');
      expect(result.current.toasts.toasts[0].title).toBe('+50 XP');
      expect(result.current.toasts.toasts[0].xp).toBe(50);
    });

    it('should show achievement unlocked toast', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showAchievementUnlocked('Scholar', '📚', 100);
      });

      expect(result.current.toasts.toasts).toHaveLength(1);
      expect(result.current.toasts.toasts[0].type).toBe('achievement');
      expect(result.current.toasts.toasts[0].title).toBe('Achievement débloqué !');
      expect(result.current.toasts.toasts[0].message).toBe('Scholar');
      expect(result.current.toasts.toasts[0].icon).toBe('📚');
      expect(result.current.toasts.toasts[0].xp).toBe(100);
    });

    it('should show success toast', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showSuccess('Operation completed');
      });

      expect(result.current.toasts.toasts).toHaveLength(1);
      expect(result.current.toasts.toasts[0].type).toBe('success');
      expect(result.current.toasts.toasts[0].title).toBe('Succès');
      expect(result.current.toasts.toasts[0].message).toBe('Operation completed');
    });

    it('should show error toast', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showError('Something went wrong');
      });

      expect(result.current.toasts.toasts).toHaveLength(1);
      expect(result.current.toasts.toasts[0].type).toBe('error');
      expect(result.current.toasts.toasts[0].title).toBe('Erreur');
      expect(result.current.toasts.toasts[0].message).toBe('Something went wrong');
    });

    it('should show custom toast', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showCustomToast({
          type: 'xp',
          title: 'Level Up!',
          message: 'You reached level 10',
          xp: 1000,
        });
      });

      expect(result.current.toasts.toasts).toHaveLength(1);
      expect(result.current.toasts.toasts[0].title).toBe('Level Up!');
      expect(result.current.toasts.toasts[0].message).toBe('You reached level 10');
      expect(result.current.toasts.toasts[0].xp).toBe(1000);
    });
  });

  describe.skip('Toast Auto-dismiss', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should auto-dismiss after 4 seconds', async () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showSuccess('Test message');
      });

      expect(result.current.toasts.toasts).toHaveLength(1);

      act(() => {
        vi.advanceTimersByTime(4000);
      });

      await waitFor(() => {
        expect(result.current.toasts.toasts).toHaveLength(0);
      });
    });
  });

  describe('Toast Types', () => {
    it('should support all toast types', () => {
      const { result } = renderHook(
        () => ({
          actions: useToastActions(),
          toasts: useToast(),
        }),
        {
          wrapper: createWrapper(),
        }
      );

      act(() => {
        result.current.actions.showXPGained(10, 'Test');
        result.current.actions.showAchievementUnlocked('Test', '🏆');
        result.current.actions.showSuccess('Test');
        result.current.actions.showError('Test');
      });

      expect(result.current.toasts.toasts).toHaveLength(4);
      expect(result.current.toasts.toasts[0].type).toBe('xp');
      expect(result.current.toasts.toasts[1].type).toBe('achievement');
      expect(result.current.toasts.toasts[2].type).toBe('success');
      expect(result.current.toasts.toasts[3].type).toBe('error');
    });
  });
});
