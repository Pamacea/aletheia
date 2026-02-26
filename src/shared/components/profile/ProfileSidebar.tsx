'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { useEffect, useRef } from 'react';
import {
  LayoutDashboardIcon,
  FileTextIcon,
  ZapIcon,
  HeartIcon,
  FolderIcon,
  AwardIcon,
  SettingsIcon,
  TrendingUpIcon,
  type LucideIcon,
} from '@/ui/components/CustomIcons';

export interface SidebarNavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: number | string;
}

const DEFAULT_NAV_ITEMS: SidebarNavItem[] = [
  { icon: LayoutDashboardIcon, label: 'Tableau de bord', href: '/profile/dashboard' },
  { icon: FileTextIcon, label: 'Notes', href: '/profile/notes' },
  { icon: ZapIcon, label: 'Flashcards', href: '/profile/flashcards' },
  { icon: HeartIcon, label: 'Favoris', href: '/profile/favorites' },
  { icon: FolderIcon, label: 'Collections', href: '/profile/collections' },
  { icon: TrendingUpIcon, label: 'Statistiques', href: '/profile/activity' },
  { icon: AwardIcon, label: 'Achievements', href: '/profile/achievements' },
  { icon: SettingsIcon, label: 'Paramètres', href: '/profile/settings' },
];

export interface ProfileSidebarProps {
  navItems?: SidebarNavItem[];
  className?: string;
}

/**
 * Standardized profile sidebar navigation
 */
export function ProfileSidebar({
  navItems = DEFAULT_NAV_ITEMS,
  className,
}: ProfileSidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLUListElement>(null);

  const isActive = (href: string) => {
    if (href === '/profile/dashboard') {
      return pathname === '/profile/dashboard' || pathname === '/profile';
    }
    return pathname.startsWith(href);
  };

  // Keyboard navigation
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = Array.from(
        sidebar.querySelectorAll('a[href]')
      ) as HTMLAnchorElement[];
      const currentIndex = focusableElements.findIndex(
        (el) => el === document.activeElement
      );

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        focusableElements[prevIndex].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        focusableElements[0]?.focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
      }
    };

    sidebar.addEventListener('keydown', handleKeyDown);
    return () => sidebar.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      className={cn(
        'card-parchment border-2 border-sepia-200 overflow-hidden',
        className
      )}
      aria-label="Navigation du profil"
    >
      <ul ref={sidebarRef} className="divide-y divide-sepia-100" role="list">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <li key={item.href} role="listitem">
              <ProfileSidebarButton
                icon={Icon}
                label={item.label}
                href={item.href}
                isActive={active}
                badge={item.badge}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export interface ProfileSidebarButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  badge?: number | string;
}

/**
 * Individual sidebar button component
 */
export function ProfileSidebarButton({
  icon: Icon,
  label,
  href,
  isActive = false,
  badge,
}: ProfileSidebarButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 px-4 py-3 transition-all duration-200',
        'hover:bg-sepia-50',
        isActive
          ? 'bg-sepia-100 border-l-4 border-sepia-600'
          : 'border-l-4 border-transparent'
      )}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon
        className={cn(
          'w-5 h-5 flex-shrink-0',
          isActive ? 'text-sepia-600' : 'text-ink-light'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'font-medium flex-1',
          isActive ? 'text-ink' : 'text-ink-light'
        )}
      >
        {label}
      </span>
      {badge && (
        <span
          className={cn(
            'text-xs font-semibold px-2 py-0.5 rounded-full',
            isActive
              ? 'bg-sepia-600 text-paper-50'
              : 'bg-sepia-200 text-sepia-700'
          )}
          aria-label={`${badge} notifications`}
        >
          {typeof badge === 'number' && badge > 99 ? '99+' : badge}
        </span>
      )}
    </Link>
  );
}
