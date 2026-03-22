'use client';

import Link from 'next/link';
import { HomeIcon } from '@/ui/icons/NavigationIcons';
import { ChevronRightIcon } from '@/ui/icons/UIIcons';

interface BreadcrumbItem {
 label: string;
 href?: string;
}

interface BreadcrumbNavProps {
 items: BreadcrumbItem[];
 current: string;
}

export function BreadcrumbNav({ items, current }: BreadcrumbNavProps) {
 return (
  <nav className="flex items-center gap-2 text-sm text-ink-light mb-4" aria-label="Breadcrumb">
   <Link
    href="/"
    className="flex items-center gap-1 hover:text-sepia-600 transition-colors"
    aria-label="Accueil"
   >
    <HomeIcon className="w-4 h-4" />
   </Link>

   {[...items, { label: current }].map((item, index) => (
    <li key={index} className="flex items-center gap-2">
     <ChevronRightIcon className="w-4 h-4 text-paper-400" />
     {item.href ? (
      <Link
       href={item.href}
       className="hover:text-sepia-600 transition-colors living-word"
      >
       {item.label}
      </Link>
     ) : (
      <span className="text-sepia-600 font-medium living-word">{item.label}</span>
     )}
    </li>
   ))}
  </nav>
 );
}
