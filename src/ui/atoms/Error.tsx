import { cn } from "@/lib/utils/cn";

export interface ErrorProps {
  message?: string;
  className?: string;
}

export const Error = ({ message, className }: ErrorProps) => {
  if (!message) return null;

  return (
    <p className={cn("text-sm text-red-600 mt-1", className)}>
      {message}
    </p>
  );
};
