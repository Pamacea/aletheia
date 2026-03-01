'use client';

import { Modal } from './Modal';
import { cn } from '@/lib/utils/cn';
import { AlertTriangleIcon, InfoIcon, AlertCircleIcon } from 'lucide-react';

export type ConfirmVariant = 'danger' | 'warning' | 'info';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: ConfirmVariant;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  isConfirming?: boolean;
}

const variantStyles = {
  danger: {
    icon: AlertTriangleIcon,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    buttonClass: 'bg-red-600 text-paper-50 hover:bg-red-700 border-red-600',
  },
  warning: {
    icon: AlertCircleIcon,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    buttonClass: 'bg-amber-600 text-paper-50 hover:bg-amber-700 border-amber-600',
  },
  info: {
    icon: InfoIcon,
    iconColor: 'text-sepia-600',
    iconBg: 'bg-sepia-100',
    buttonClass: 'bg-sepia-600 text-paper-50 hover:bg-sepia-700 border-sepia-600',
  },
};

export function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  variant = 'danger',
  onConfirm,
  onCancel,
  isConfirming = false,
}: ConfirmDialogProps) {
  const styles = variantStyles[variant];
  const Icon = styles.icon;

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={!isConfirming ? onCancel : () => {}}
      title=""
      className="max-w-md border-2 border-sepia-200 animate-in fade-in zoom-in-95 duration-200"
    >
      <div className="text-center pb-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className={cn('p-4 rounded-full', styles.iconBg)}>
            <Icon className={cn('w-8 h-8', styles.iconColor)} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-serif font-semibold text-ink mb-2">
          {title}
        </h2>

        {/* Message */}
        <p className="text-ink-light leading-relaxed whitespace-pre-line">
          {message}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-3 pt-6">
        <button
          type="button"
          onClick={onCancel}
          disabled={isConfirming}
          className={cn(
            'flex-1 px-4 py-2.5 font-medium',
            'bg-paper-100 text-ink',
            'hover:bg-paper-200 active:bg-paper-300',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200',
            'border-2 border-paper-300'
          )}
        >
          {cancelLabel}
        </button>

        <button
          type="button"
          onClick={handleConfirm}
          disabled={isConfirming}
          className={cn(
            'flex-1 px-4 py-2.5 font-medium',
            'flex items-center justify-center gap-2',
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:-translate-y-0.5 active:translate-y-0',
            'shadow-sm hover:shadow-md',
            'border-2',
            styles.buttonClass
          )}
        >
          {isConfirming ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>En cours...</span>
            </>
          ) : (
            confirmLabel
          )}
        </button>
      </div>
    </Modal>
  );
}
