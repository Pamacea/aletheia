import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full  border border-paper-300 bg-paper-50 px-3 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-600 focus-visible:ring-offset-2 focus-visible:border-sepia-600 disabled:cursor-not-allowed disabled:opacity-50 transition-colors cursor-pointer",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";
