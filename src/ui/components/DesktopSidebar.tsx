'use client';

import Link from 'next/link';
import { useNavigation } from '@/ui/hooks/useNavigation';
import { NAV_ITEMS } from './sidebar-navigation';
import { LoginIcon } from '@/ui/icons/UserIcons';
import { UserDropdown } from './UserDropdown';

interface DesktopSidebarProps {
  isAuthenticated: boolean;
  user?: {
    name?: string | null;
    image?: string | null;
  } | null;
  onMenuToggle: (isOpen: boolean) => void;
}

/**
 * DesktopSidebar - Fixed sidebar for desktop screens
 *
 * Compact 64px-wide sidebar with icon navigation.
 * Displays logo, navigation items, and user dropdown.
 */
export function DesktopSidebar({ isAuthenticated, user, onMenuToggle }: DesktopSidebarProps) {
  const { isActive } = useNavigation();

  return (
    <>
      {/* Logo */}
      <div className="hidden lg:flex h-16 items-center justify-center border-b border-sepia-600/20">
        <span
          className="text-xl font-bold text-sepia-600"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Α
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                hidden lg:flex relative items-center justify-center h-14
                border-b border-paper-200/30
                ${active ? 'bg-sepia-50' : 'hover:bg-paper-50'}
                transition-colors
              `}
              title={item.label}
            >
              <div className={`relative ${active ? 'text-sepia-600' : 'text-ink'}`}>
                <Icon className="w-5 h-5" />
                {active && <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-sepia-600" />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-sepia-600/20 flex-shrink-0">
        {isAuthenticated && user ? (
          <div className="hidden lg:block">
            <UserDropdown
              userName={user.name || undefined}
              userImage={user.image || undefined}
              onCloseMobile={() => {}}
              onMenuToggle={onMenuToggle}
            />
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="hidden lg:flex items-center justify-center h-14 hover:bg-paper-50 transition-colors"
            title="Connexion"
          >
            <LoginIcon className="w-5 h-5 text-sepia-600" />
          </Link>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="hidden lg:flex h-14 items-center justify-center border-t border-sepia-600/20">
        <span
          className="text-sm text-sepia-600/30"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Ω
        </span>
      </div>
    </>
  );
}
