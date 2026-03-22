'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { Toast, Toast as ToastComponent } from './Toast';
import { cn } from '@/lib/utils';

interface ToastContextValue {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  toasts: Toast[];
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      {/* Toast Container */}
      <div
        className={cn(
          'fixed bottom-20 sm:bottom-4 right-4 z-[100]',
          'flex flex-col gap-2',
          'pointer-events-none'
        )}
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastComponent toast={toast} onClose={() => removeToast(toast.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
