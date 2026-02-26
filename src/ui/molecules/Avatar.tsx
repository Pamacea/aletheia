import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeStyles = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export const Avatar = ({
  src,
  alt = "",
  initials,
  size = "md",
  className,
  ...props
}: AvatarProps) => {
  const content = src ? (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover "
    />
  ) : (
    <span
      className={cn(
        "font-medium text-sepia-600 flex items-center justify-center h-full w-full",
        sizeStyles[size]
      )}
    >
      {initials || "?"}
    </span>
  );

  return (
    <div
      className={cn(
        "relative inline-flex  bg-paper-200 overflow-hidden",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
};
