import { cn } from '@/lib/utils/cn';
import { Button } from '@/ui/atoms/Button';
import {
  AlertCircleIcon,
  RefreshCwIcon,
  HomeIcon,
} from '@/ui/components/CustomIcons';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHomeButton?: boolean;
  className?: string;
}

export function ErrorState({
  title = 'Une erreur est survenue',
  message = 'Nous n\'avons pas pu charger le contenu. Veuillez réessayer.',
  onRetry,
  showHomeButton = true,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)} role="alert" aria-live="assertive">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-red-100 rounded-full" aria-hidden="true">
        <AlertCircleIcon className="w-8 h-8 text-red-600" />
      </div>

      <h3 className="text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-ink-light mb-6 max-w-md">{message}</p>

      <div className="flex items-center gap-3">
        {onRetry && (
          <Button
            variant="primary"
            size="md"
            onClick={onRetry}
            className="flex items-center gap-2"
          >
            <RefreshCwIcon className="w-4 h-4" aria-hidden="true" />
            Réessayer
          </Button>
        )}
        {showHomeButton && (
          <Button variant="secondary" size="md" href="/">
            <HomeIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            Accueil
          </Button>
        )}
      </div>
    </div>
  );
}

// Inline error component for smaller spaces
export function InlineError({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss?: () => void;
}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
      <AlertCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm text-red-800">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-600 hover:text-red-800 transition-colors"
          aria-label="Fermer"
        >
          ×
        </button>
      )}
    </div>
  );
}
