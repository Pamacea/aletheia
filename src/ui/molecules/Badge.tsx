import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: "bg-paper-200 text-ink border border-paper-300",
  primary: "bg-sepia-100 text-sepia-800 border border-sepia-300",
  secondary: "bg-paper-100 text-paper-700 border border-paper-300",
  success: "bg-green-100 text-green-800 border border-green-300",
  warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  danger: "bg-red-100 text-red-800 border border-red-300",
};

export const Badge = ({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center  px-2.5 py-0.5 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
