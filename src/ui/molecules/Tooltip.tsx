"use client";

import { type ReactNode, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils/cn";

export interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({
  content,
  children,
  className,
  position = "top",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionStyles: Record<typeof position, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowStyles: Record<typeof position, string> = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-1 border-t-sepia-800 border-r-transparent border-b-transparent border-l-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-sepia-800 border-r-transparent border-t-transparent border-l-transparent",
    left: "left-full top-1/2 -translate-y-1/2 -ml-1 border-l-sepia-800 border-t-transparent border-r-transparent border-b-transparent",
    right: "right-full top-1/2 -translate-y-1/2 -mr-1 border-r-sepia-800 border-t-transparent border-l-transparent border-b-transparent",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-white bg-sepia-800  shadow-lg whitespace-nowrap",
            positionStyles[position],
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowStyles[position]
            )}
          />
        </div>
      )}
    </div>
  );
};
