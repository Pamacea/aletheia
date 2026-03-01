"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        ref={modalRef}
        className={cn(
          "w-full max-w-[clamp(20rem,90vw,40rem)] bg-white shadow-xl",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-200",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between border-b-2 border-paper-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 id="modal-title" className="text-base sm:text-lg font-semibold text-ink font-serif">{title}</h2>
            <button
              onClick={onClose}
              className="text-paper-500 hover:text-ink transition-colors"
              aria-label="Fermer la modal"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="px-4 sm:px-6 py-3 sm:py-4">{children}</div>
        {footer && (
          <div className="border-t-2 border-paper-200 px-4 sm:px-6 py-3 sm:py-4">{footer}</div>
        )}
      </div>
    </div>
  );
};
