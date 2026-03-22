import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';
import { SPACING } from '@/shared/constants/design-tokens';

export interface ProfileLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Standardized profile layout wrapper
 * Provides consistent spacing and structure for all profile pages
 */
export function ProfileLayout({
  children,
  title,
  subtitle,
  className,
}: ProfileLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-paper-50', className)}>
      {/* Page Header */}
      {(title || subtitle) && (
        <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {title && (
              <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-ink-light text-sm mt-1">{subtitle}</p>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

/**
 * Profile content grid with sidebar
 */
export interface ProfileContentGridProps {
  sidebar: ReactNode;
  children: ReactNode;
  className?: string;
}

export function ProfileContentGrid({
  sidebar,
  children,
  className,
}: ProfileContentGridProps) {
  return (
    <div className={cn('flex flex-col lg:grid lg:grid-cols-4 gap-6', className)}>
      {/* Sidebar — hidden on mobile (accessible via mobile dock) */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-6">{sidebar}</div>
      </aside>

      {/* Main Content */}
      <div className="lg:col-span-3 min-w-0">{children}</div>
    </div>
  );
}
