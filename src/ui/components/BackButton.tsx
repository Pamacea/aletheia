import Link from 'next/link';
import { ArrowLeftIcon } from '@/ui/icons/UIIcons';

interface BackButtonProps {
  href?: string;
  label?: string;
}

/**
 * BackButton - Elegant serif back navigation
 *
 * Minimal, borderless design with animated arrow on hover.
 * Used across all page headers for consistent navigation.
 */
export function BackButton({ href = '/', label = 'Retour' }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 py-1 text-sm text-sepia-600 hover:text-sepia-800 transition-colors duration-200"
    >
      <ArrowLeftIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      <span className="font-serif font-medium">{label}</span>
    </Link>
  );
}
