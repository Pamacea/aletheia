import { type ReactNode, forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, header, footer, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full border border-paper-300 bg-white shadow-sm",
          className
        )}
        {...props}
      >
        {header && (
          <div className="flex items-center justify-between border-b border-paper-200 px-4 sm:px-6 py-3 sm:py-4">
            {header}
          </div>
        )}
        <div className="px-4 sm:px-6 py-3 sm:py-4">
          {children}
        </div>
        {footer && (
          <div className="border-t border-paper-200 px-4 sm:px-6 py-3 sm:py-4">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";
