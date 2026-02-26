'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserIcon, TrophyIcon, ActivityIcon, ChartIcon, MessageSquareIcon, BookOpenIcon, StarIcon, LogoutIcon, CloseIcon, BrainIcon } from './CustomIcons';

interface UserDropdownProps {
  userName?: string;
  userImage?: string | null;
  onCloseMobile?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

const MENU_ITEMS = [
  {
    href: '/profile',
    label: 'Mon Profil',
    icon: UserIcon,
    title: 'Mon Profil',
  },
  {
    href: '/agora',
    label: 'Agora',
    icon: MessageSquareIcon,
    title: 'Discussions philosophiques',
  },
  {
    href: '/profile/flashcards',
    label: 'Flashcards',
    icon: BrainIcon,
    title: 'Mes cartes de révision',
  },
  {
    href: '/profile/achievements',
    label: 'Achievements',
    icon: TrophyIcon,
    title: 'Mes succès et badges',
  },
  {
    href: '/profile/activity',
    label: 'Activité',
    icon: ActivityIcon,
    title: 'Mon historique d\'activité',
  },
  {
    href: '/profile/stats',
    label: 'Statistiques',
    icon: ChartIcon,
    title: 'Mes statistiques détaillées',
  },
  {
    href: '/profile/notes',
    label: 'Notes',
    icon: BookOpenIcon,
    title: 'Toutes mes notes',
  },
  {
    href: '/profile/favorites',
    label: 'Favoris',
    icon: StarIcon,
    title: 'Mes concepts favoris',
  },
];

const LOGOUT_ITEM = {
  href: '/api/auth/signout',
  label: 'Déconnexion',
  icon: LogoutIcon,
  title: 'Se déconnecter du compte',
};

export function UserDropdown({ userName, userImage, onCloseMobile, onMenuToggle }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState);
    onMenuToggle?.(newState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleToggle(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = () => {
    // Don't close the dropdown - keep it open for navigation
    // Only close mobile menu if needed
    if (window.innerWidth < 1024) {
      onCloseMobile?.();
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => handleToggle(!isOpen)}
        className="group relative flex items-center justify-center w-12 h-12"
        title={isOpen ? "Fermer le menu" : "Menu Utilisateur"}
        aria-label={isOpen ? "Fermer le menu utilisateur" : "Menu utilisateur"}
        aria-expanded={isOpen}
      >
        <div
          className={`
            w-12 h-12 flex items-center justify-center cursor-pointer
            border-2 transition-all duration-300 relative
            ${isOpen
              ? 'border-red-400 bg-red-50 hover:bg-red-100'
              : 'border-[#d9d6d0] hover:border-[#8b6f3c] hover:bg-[#8b6f3c]/5'
            }
          `}
        >
          {isOpen ? (
            <CloseIcon className="w-5 h-5 text-red-600" />
          ) : userImage ? (
            <img
              src={userImage}
              alt={userName || 'Avatar'}
              className="w-5 h-5 rounded-full object-cover"
            />
          ) : (
            <UserIcon className="w-5 h-5 text-[#4a4744]" />
          )}
        </div>

        {/* Status indicator - rectangle visible when OPEN (dropdown active), now on TOP */}
        {isOpen && (
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-sm" />
        )}

        {/* Label on hover - only show when dropdown is closed */}
        {!isOpen && (
          <span
            className="absolute left-full ml-4 font-serif text-xs tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden lg:block text-[#4a4744]"
          >
            MON COMPTE
          </span>
        )}
      </button>

      {/* Dropdown Menu - Absolute positioned ABOVE the button, going upward */}
      {isOpen && (
        <div className="absolute bottom-full left-0 right-0 flex flex-col gap-3 pb-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {[...MENU_ITEMS, LOGOUT_ITEM].map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const isLogout = item.href === '/api/auth/signout';

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleItemClick}
                className="group relative flex items-center justify-center"
                title={item.title}
              >
                <div
                  className={`
                    w-12 h-12 flex items-center justify-center cursor-pointer
                    border-2 transition-all duration-300
                    ${isActive
                      ? 'border-[#8b6f3c] bg-[#8b6f3c]/10 shadow-glow-medium'
                      : isLogout
                      ? 'border-[#d9d6d0] hover:border-red-600 hover:bg-red-50'
                      : 'border-[#d9d6d0] hover:border-[#8b6f3c] hover:bg-[#8b6f3c]/5'
                    }
                  `}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? 'text-[#8b6f3c]'
                        : isLogout
                        ? 'text-[#4a4744] group-hover:text-red-600'
                        : 'text-[#4a4744]'
                    }`}
                  />
                </div>

                {/* Label on hover */}
                <span
                  className="absolute left-full ml-4 font-serif text-xs tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap text-[#4a4744]"
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
