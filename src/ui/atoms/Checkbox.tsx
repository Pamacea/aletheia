'use client';

import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={cn(
            "h-4 w-4  border-paper-300 text-sepia-600 focus:ring-2 focus:ring-sepia-600 focus:ring-offset-2 cursor-pointer",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm text-ink cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
