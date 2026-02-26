'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
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

export function Toast({ toast, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getStyles = () => {
    switch (toast.type) {
      case 'xp':
        return {
          bg: 'bg-gradient-to-r from-sepia-500 to-sepia-600',
          border: 'border-sepia-700',
          icon: '⭐',
          shadow: 'shadow-sepia/20',
        };
      case 'achievement':
        return {
          bg: 'bg-gradient-to-r from-purple-600 to-purple-700',
          border: 'border-purple-800',
          icon: '🏆',
          shadow: 'shadow-purple/20',
        };
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-600 to-green-700',
          border: 'border-green-800',
          icon: '✅',
          shadow: 'shadow-green/20',
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-600 to-red-700',
          border: 'border-red-800',
          icon: '❌',
          shadow: 'shadow-red/20',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-600 to-gray-700',
          border: 'border-gray-800',
          icon: 'ℹ️',
          shadow: 'shadow-gray/20',
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={cn(
        'relative text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg border-2',
        'flex items-start gap-3 sm:gap-4 w-full max-w-[clamp(20rem,90vw,40rem)]',
        'animate-toast-in',
        styles.bg,
        styles.border,
        styles.shadow
      )}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Icon */}
      <div className="text-2xl sm:text-3xl flex-shrink-0 animate-bounce-subtle" aria-hidden="true">
        {styles.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-xs sm:text-sm">{toast.title}</p>
        {toast.message && (
          <p className="text-xs text-white/90 mt-1">{toast.message}</p>
        )}
        {toast.xp && (
          <p className="text-sm font-bold text-yellow-200 mt-1 animate-pulse">
            +{toast.xp} XP
          </p>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
        aria-label="Fermer la notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
