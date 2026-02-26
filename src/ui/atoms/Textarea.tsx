import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[80px] w-full  border border-paper-300 bg-paper-50 px-3 py-2 text-sm text-ink placeholder:text-paper-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-600 focus-visible:ring-offset-2 focus-visible:border-sepia-600 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
