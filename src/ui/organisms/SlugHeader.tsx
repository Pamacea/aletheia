import Link from 'next/link';
import { ArrowLeftIcon } from '@/ui/icons/UIIcons';
import { BreadcrumbNav } from './BreadcrumbNav';
import { ActionButtons } from './ActionButton';

interface SlugHeaderProps {
 breadcrumb: Array<{ label: string; href?: string }>;
 current: string;
 backHref: string;
 backLabel?: string;
 subtitle?: string;
 extra?: React.ReactNode;
 actions?: {
  isFavorite?: boolean;
  isToggling?: boolean;
  onFavorite?: () => void;
  connectionsHref?: string;
  graphHref?: string;
  onShare?: () => void;
 };
}

export function SlugHeader({
 breadcrumb,
 current,
 backHref,
 backLabel = 'Retour',
 subtitle,
 extra,
 actions,
}: SlugHeaderProps) {
 return (
  <header className="border-b-2 border-sepia-600 bg-gradient-to-b from-paper-50 to-white py-4 sm:py-6">
   <div className="max-w-7xl mx-auto px-4">
    {/* Breadcrumb + Back */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
     <Link
      href={backHref}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
     >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="living-word font-medium">{backLabel}</span>
     </Link>

     {actions && <ActionButtons {...actions} />}
    </div>

    {/* Breadcrumb */}
    <BreadcrumbNav items={breadcrumb} current={current} />

    {/* Title */}
    <div className="mb-4">
     <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink living-word mb-2">
      {current}
     </h1>
     {subtitle && (
      <p className="text-base sm:text-lg md:text-xl text-ink-light max-w-3xl">{subtitle}</p>
     )}
    </div>

    {/* Extra content (tags, stats, etc.) */}
    {extra && <div className="mt-4">{extra}</div>}
   </div>
  </header>
 );
}
