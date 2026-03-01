'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from '@/lib/actions/auth';
import { UserIcon, TrophyIcon, ActivityIcon, ChartIcon, MessageSquareIcon, BookOpenIcon, StarIcon, LogoutIcon, BrainIcon } from './CustomIcons';

interface UserDropdownProps {
  userName?: string;
  userImage?: string | null;
  onCloseMobile?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

const MENU_ITEMS = [
  { href: '/profile', label: 'Profil', icon: UserIcon },
  { href: '/agora', label: 'Forum', icon: MessageSquareIcon },
  { href: '/profile/flashcards', label: 'Flashcards', icon: BrainIcon },
  { href: '/profile/achievements', label: 'Succès', icon: TrophyIcon },
  { href: '/profile/activity', label: 'Activité', icon: ActivityIcon },
  { href: '/profile/stats', label: 'Stats', icon: ChartIcon },
  { href: '/profile/notes', label: 'Notes', icon: BookOpenIcon },
  { href: '/profile/favorites', label: 'Favoris', icon: StarIcon },
];

export function UserDropdown({ userName, userImage, onCloseMobile, onMenuToggle }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleOpen = (newState: boolean) => {
    setIsOpen(newState);
    onMenuToggle?.(newState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        toggleOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleItemClick = (isLogout = false) => {
    // Only close on logout or mobile navigation
    if (isLogout) {
      toggleOpen(false);
    }
    if (window.innerWidth < 1024) {
      onCloseMobile?.();
    }
  };

  const handleSignOut = () => {
    startTransition(async () => {
      await signOut();
      router.refresh();
      toggleOpen(false);
      onCloseMobile?.();
    });
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Desktop trigger */}
      <button
        onClick={() => toggleOpen(!isOpen)}
        className="hidden lg:flex w-full items-center justify-center h-14 hover:bg-paper-50 transition-colors relative"
        aria-label="Mon compte"
        aria-expanded={isOpen}
      >
        <div className={`relative ${isOpen ? 'text-sepia-600' : 'text-ink'}`}>
          {userImage ? (
            <img src={userImage} alt={userName || 'Avatar'} className="w-5 h-5 object-cover" />
          ) : (
            <UserIcon className="w-5 h-5" />
          )}
          {isOpen && <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-sepia-600" />}
        </div>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => toggleOpen(!isOpen)}
        className="lg:hidden flex items-center gap-3 w-full h-14 px-4 hover:bg-paper-50 transition-colors"
        aria-label="Mon compte"
        aria-expanded={isOpen}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          {userImage ? (
            <img src={userImage} alt={userName || 'Avatar'} className="w-5 h-5 object-cover" />
          ) : (
            <UserIcon className="w-5 h-5 text-ink" />
          )}
        </div>
        <span className="flex-1 text-left text-sm text-ink">{userName || 'Mon compte'}</span>
        <span className="text-xs text-sepia-600">{isOpen ? '▲' : '▼'}</span>
      </button>

      {/* Desktop dropdown - Remplace la nav principale */}
      {isOpen && (
        <div className="hidden lg:block absolute bottom-full left-0 right-0 bg-paper-50 border-t border-sepia-600/20">
          {/* Les items sont exactement comme les boutons de la sidebar */}
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleItemClick(false)}
                className={`
                  relative flex items-center justify-center h-16 px-0 my-4
                  border-b border-paper-200/50
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
          <form action={signOut}>
            <button
              type="submit"
              onClick={() => {
                handleItemClick(true);
                startTransition(async () => {
                  await signOut();
                  router.refresh();
                });
              }}
              disabled={isPending}
              className="flex items-center justify-center w-full h-16 hover:bg-red-50 border-b border-paper-200/50 transition-colors disabled:opacity-50"
              title="Déconnexion"
            >
              <LogoutIcon className="w-5 h-5 text-red-600" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-paper-50 z-50">
          <div className="max-h-[60vh] overflow-y-auto">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleItemClick(false)}
                  className={`
                    flex items-center gap-3 h-14 px-4 border-b border-paper-200/50 text-sm
                    ${active ? 'bg-sepia-50 text-sepia-600' : 'text-ink hover:bg-paper-50'}
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {active && <span className="w-0.5 h-8 bg-sepia-600" />}
                </Link>
              );
            })}
            <form action={signOut} className="contents">
              <button
                type="submit"
                onClick={() => {
                  handleItemClick(true);
                  startTransition(async () => {
                    await signOut();
                    router.refresh();
                  });
                }}
                disabled={isPending}
                className="flex items-center gap-3 w-full h-14 px-4 text-sm text-red-600 hover:bg-red-50 border-b border-paper-200/50 disabled:opacity-50"
              >
                <LogoutIcon className="w-5 h-5 flex-shrink-0" />
                <span>Déconnexion</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
