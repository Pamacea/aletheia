'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/lib/react-query/providers/auth-provider';
import {
  HomeIcon,
  NetworkIcon,
  GraphIcon,
  QuoteIcon,
  PhilosophersIcon,
  CurrentsIcon,
  LoginIcon,
  MenuIcon,
  CloseIcon,
} from './CustomIcons';
import { UserDropdown } from './UserDropdown';

const NAV_ITEMS = [
  { href: '/', label: 'ACCUEIL', icon: HomeIcon },
  { href: '/conceptuaire', label: 'CONCEPTS', icon: NetworkIcon },
  { href: '/graphe', label: 'GRAPHE', icon: GraphIcon },
  { href: '/citations', label: 'CITATIONS', icon: QuoteIcon },
  { href: '/philosophes', label: 'PHILOSOPHES', icon: PhilosophersIcon },
  { href: '/courants', label: 'COURANTS', icon: CurrentsIcon },
];

export function Sidebar() {
  const { user, isAuthenticated } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleUserMenuToggle = (isOpen: boolean) => {
    setIsUserMenuOpen(isOpen);
  };

  return (
    <>
      {/* Mobile menu button - Better positioned */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-14 h-14 flex items-center justify-center bg-paper-50 border-2 border-sepia-600  shadow-lg hover:shadow-xl hover:bg-sepia-50 transition-all duration-300"
        aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <CloseIcon className="w-6 h-6 text-sepia-600" /> : <MenuIcon className="w-6 h-6 text-sepia-600" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Style compact vertical comme interactive-map */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-40 flex-shrink-0
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto overflow-x-hidden scrollbar-hide
          bg-parchment-texture
          flex flex-col items-center justify-between
          w-[clamp(4rem,8vw,6rem)] min-w-[clamp(4rem,8vw,6rem)]
        `}
        style={{
          backgroundColor: '#faf9f7',
          borderRight: '3px solid #8b6f3c',
          boxShadow: '4px 0 24px rgba(139, 111, 60, 0.15)',
          padding: '2rem 0',
        }}
      >
        {/* Top decorative element */}
        <div
          className="text-2xl animate-glow-pulse"
          style={{ color: '#8b6f3c', opacity: 0.6 }}
        >
          Θ
        </div>

        {/* Navigation items - Hidden when user menu is open */}
        <nav className={`flex flex-col gap-8 transition-opacity duration-200 ${isUserMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="group relative flex items-center justify-center"
                title={item.label}
              >
                {/* Nav button - Style carré avec bordure */}
                <div
                  className={`
                    w-12 h-12 flex items-center justify-center cursor-pointer
                    border-2 transition-all duration-300 relative
                    ${active
                      ? 'border-[#8b6f3c] bg-[#8b6f3c]/10 shadow-glow-medium'
                      : 'border-[#d9d6d0] hover:border-[#8b6f3c] hover:bg-[#8b6f3c]/5'
                    }
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className={`w-5 h-5 ${active ? 'text-[#8b6f3c]' : 'text-[#4a4744]'}`}
                  />
                </div>

                {/* Label appears on hover - Style comme interactive-map */}
                <span
                  className="absolute left-full ml-4 font-serif text-xs tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden lg:block text-[#4a4744]"
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User section - Bottom */}
        <div className="flex flex-col gap-4">
          {isAuthenticated && user ? (
            /* User Dropdown Menu (includes logout) */
            <UserDropdown
              userName={user.name || undefined}
              userImage={user.image || undefined}
              onCloseMobile={() => setIsMobileOpen(false)}
              onMenuToggle={handleUserMenuToggle}
            />
          ) : (
            <Link
              href="/auth/login"
              onClick={() => setIsMobileOpen(false)}
              className="group relative flex items-center justify-center"
              title="Connexion"
            >
              <div
                className="w-12 h-12 flex items-center justify-center border-2 border-[#8b6f3c] bg-[#8b6f3c]/10 hover:bg-[#8b6f3c]/20 transition-all duration-300 animate-glow-pulse"
              >
                <LoginIcon className="w-5 h-5 text-[#8b6f3c]" />
              </div>
              <span
                className="absolute left-full ml-4 font-serif text-xs tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden lg:block text-[#8b6f3c]"
              >
                CONNEXION
              </span>
            </Link>
          )}
        </div>

        {/* Bottom decorative element */}
        <div
          className="text-2xl animate-glow-pulse text-[#8b6f3c] opacity-60"
        >
          Ω
        </div>
      </aside>
    </>
  );
}

export function SidebarSkeleton() {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-[clamp(4rem,8vw,6rem)] min-w-[clamp(4rem,8vw,6rem)] flex-shrink-0 bg-parchment-texture flex flex-col items-center justify-between py-8"
      style={{
        backgroundColor: '#faf9f7',
        borderRight: '3px solid #8b6f3c',
        padding: '2rem 0',
      }}
    >
      <div className="w-12 h-12 border-double-ornate bg-[#d9d6d0] animate-pulse" />
      <div className="flex flex-col gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-12 h-12 border-double-ornate bg-[#d9d6d0] animate-pulse" />
        ))}
      </div>
      <div className="w-12 h-12 border-double-ornate bg-[#d9d6d0] animate-pulse" />
    </aside>
  );
}
