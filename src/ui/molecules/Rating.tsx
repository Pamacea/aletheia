"use client";

import { useMemo } from "react";
import { StarIcon } from "@/ui/components/CustomIcons";
import { cn } from "@/lib/utils/cn";

export interface RatingProps {
  value: number;
  max?: number;
  readonly?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const Rating = ({
  value,
  max = 5,
  readonly = false,
  onChange,
  className,
  size = "md",
}: RatingProps) => {
  const stars = useMemo(() => {
    return Array.from({ length: max }, (_, i) => {
      const starValue = i + 1;
      const isFilled = starValue <= value;
      const isPartial = !isFilled && starValue - 0.5 <= value;

      return { value: starValue, isFilled, isPartial };
    });
  }, [value, max]);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {stars.map((star) => (
        <button
          key={star.value}
          type="button"
          onClick={() => !readonly && onChange?.(star.value)}
          disabled={readonly}
          className={cn(
            "transition-colors disabled:cursor-default",
            !readonly && "hover:scale-110 active:scale-95"
          )}
          aria-label={`Rate ${star.value} out of ${max}`}
        >
          <StarIcon
            className={cn(
              sizeStyles[size],
              star.isFilled
                ? "fill-sepia-600 text-sepia-600"
                : "fill-paper-300 text-paper-300"
            )}
          />
        </button>
      ))}
    </div>
  );
};
