'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export type ToastType = 'xp' | 'achievement' | 'success' | 'error';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  xp?: number;
  icon?: string;
}

interface ToastProps {
  toast: Toast;
  onClose: () => void;
}

const STYLES: Record<ToastType, { bg: string; border: string; text: string }> = {
  xp:          { bg: 'bg-sepia-600',    border: 'border-sepia-700',  text: 'text-paper-50' },
  achievement: { bg: 'bg-sepia-700',    border: 'border-sepia-800',  text: 'text-paper-50' },
  success:     { bg: 'bg-paper-50',     border: 'border-sepia-400',  text: 'text-ink' },
  error:       { bg: 'bg-paper-50',     border: 'border-red-300',    text: 'text-ink' },
};

export function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const s = STYLES[toast.type] || STYLES.success;
  const isLight = toast.type === 'success' || toast.type === 'error';

  return (
    <div
      className={cn(
        'px-3 py-2 shadow-md border rounded',
        'flex items-center gap-2 max-w-[260px]',
        'animate-toast-in text-xs',
        s.bg, s.border, s.text
      )}
      role="status"
      aria-live="polite"
    >
      {/* Accent bar */}
      <div className={cn(
        'w-0.5 h-6 rounded-full flex-shrink-0',
        toast.type === 'error' ? 'bg-red-500' : 'bg-sepia-600'
      )} />

      <div className="flex-1 min-w-0">
        <p className="font-medium leading-tight">{toast.title}</p>
        {toast.message && (
          <p className={cn('mt-0.5 leading-tight', isLight ? 'text-ink-light' : 'text-paper-200')}>
            {toast.message}
          </p>
        )}
        {toast.xp && (
          <p className="font-bold text-sepia-300 mt-0.5">+{toast.xp} XP</p>
        )}
      </div>

      <button
        onClick={onClose}
        className={cn(
          'flex-shrink-0 transition-colors text-sm leading-none',
          isLight ? 'text-ink-light hover:text-ink' : 'text-paper-300 hover:text-paper-50'
        )}
        aria-label="Fermer"
      >
        ×
      </button>
    </div>
  );
}
