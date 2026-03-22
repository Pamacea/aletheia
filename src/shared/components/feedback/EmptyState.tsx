'use client';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/ui/atoms/Button';
import { BookIcon } from '@/ui/icons/NavigationIcons';
import { SearchIcon } from '@/ui/icons/ActionIcons';
import { InboxIcon } from '@/ui/icons/StatusIcons';
import { SparklesIcon } from '@/ui/icons/SocialIcons';

export type EmptyStateIcon = 'inbox' | 'search' | 'file' | 'sparkles' | 'custom';

export interface EmptyStateProps {
  icon?: EmptyStateIcon;
  customIcon?: React.ReactNode;
  title: string;
  message: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const ICONS = {
  inbox: InboxIcon,
  search: SearchIcon,
  file: BookIcon,
  sparkles: SparklesIcon,
};

export function EmptyState({
  icon = 'inbox',
  customIcon,
  title,
  message,
  action,
  className,
}: EmptyStateProps) {
  const IconComponent = icon !== 'custom' ? ICONS[icon] : null;

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)} role="status" aria-label={title}>
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-sepia-100 rounded-full" aria-hidden="true">
        {customIcon || (IconComponent && <IconComponent className="w-8 h-8 text-sepia-600" />)}
      </div>

      <h3 className="text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-ink-light mb-6 max-w-md">{message}</p>

      {action && (
        <Button
          variant="primary"
          size="md"
          href={action.href}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Inline empty state for cards
export function InlineEmpty({
  message,
  icon = 'inbox',
}: {
  message: string;
  icon?: EmptyStateIcon;
}) {
  const IconComponent = icon !== 'custom' ? ICONS[icon] : null;

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {IconComponent && <IconComponent className="w-12 h-12 text-sepia-300 mb-3" />}
      <p className="text-ink-light">{message}</p>
    </div>
  );
}
