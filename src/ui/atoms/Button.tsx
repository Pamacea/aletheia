'use client';

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

const MotionButton = motion.button;
const MotionLink = motion(Link);

const sizeStyles = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, loading = false, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    // Filter out button-specific props that shouldn't be on anchor tags
    const { disabled: _, type: __, form: ___, ...anchorProps } = props as any;

    // If href is provided, render as Link (anchor tag)
    if (href) {
      return (
        <MotionLink
          href={href}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "inline-flex items-center justify-center gap-2 font-medium",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-700 focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
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
        </MotionLink>
      );
    }

    // Otherwise, render as button
    return (
      <MotionButton
        ref={ref}
        disabled={isDisabled}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium",
          "transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sepia-700 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          sizeStyles[size],
          className
        )}
        aria-busy={loading}
        {...(props as any)}
      >
        {loading ? (
          <>
            <LoadingState type="dots" className="scale-75" />
            <span className="opacity-50">Chargement...</span>
          </>
        ) : (
          children
        )}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";
