import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { LoadingState } from "@/shared/components";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  loading?: boolean;
}

const buttonVariants = {
  primary:
    "bg-sepia-600 text-paper-50 hover:bg-sepia-700 active:bg-sepia-800 border border-sepia-600 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-sepia-600 hover:bg-sepia-50 active:bg-sepia-100 border border-sepia-600",
  ghost: "bg-transparent text-ink hover:bg-paper-200 active:bg-paper-300 border border-transparent",
  danger:
    "bg-red-600 text-paper-50 hover:bg-red-700 active:bg-red-800 border border-red-600 shadow-sm hover:shadow-md",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, loading = false, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    // Filter out button-specific props that shouldn't be on anchor tags
    const { disabled: _, type: __, form: ___, ...anchorProps } = props as any;

    // If href is provided, render as Link (anchor tag)
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-600 focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            "hover:-translate-y-0.5 active:translate-y-0",
            buttonVariants[variant],
            sizeStyles[size],
            className
          )}
          aria-busy={loading}
          {...anchorProps}
        >
          {loading ? (
            <>
              <LoadingState type="dots" className="scale-75" />
              <span className="opacity-50">Chargement...</span>
            </>
          ) : (
            children
          )}
        </Link>
      );
    }

    // Otherwise, render as button
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-600 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:-translate-y-0.5 active:translate-y-0",
          buttonVariants[variant],
          sizeStyles[size],
          className
        )}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <LoadingState type="dots" className="scale-75" />
            <span className="opacity-50">Chargement...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
