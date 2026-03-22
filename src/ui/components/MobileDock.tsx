'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useNavigation } from '@/ui/hooks/useNavigation';
import { useAuth } from '@/lib/react-query/providers/auth-provider';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { HomeIcon, NetworkIcon, GraphIcon, QuoteIcon } from '@/ui/icons/NavigationIcons';
import { SearchIcon } from '@/ui/icons/ActionIcons';
import { CloseIcon, SettingsIcon } from '@/ui/icons/UIIcons';
import { LoginIcon, UserIcon } from '@/ui/icons/UserIcons';
import { StarIcon, TrophyIcon, ActivityIcon, ZapIcon, HeartIcon } from '@/ui/icons/StatusIcons';
import { MessageSquareIcon, FolderIcon, BookmarkIcon } from '@/ui/icons/SocialIcons';
import { LayoutDashboardIcon, BarChart3Icon } from '@/ui/icons/FeatureIcons';
import { NAV_ITEMS } from './sidebar-navigation';

/** Primary dock items (4 max for clean UI) */
const DOCK_ITEMS = [
  { href: '/', label: 'Accueil', icon: HomeIcon },
  { href: '/conceptuaire', label: 'Concepts', icon: NetworkIcon },
  { href: '/graphe', label: 'Graphe', icon: GraphIcon },
  { href: '/citations', label: 'Recherche', icon: SearchIcon },
] as const;

/**
 * MobileDock - iOS-style floating navigation dock for mobile
 *
 * Features:
 * - Floating pill-shaped dock at bottom of screen
 * - 4 primary navigation items with active state
 * - "More" button opens a bottom sheet with full navigation
 * - Bottom sheet supports swipe-to-dismiss via Framer Motion
 */
export function MobileDock() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isActive } = useNavigation();
  const { user, isAuthenticated } = useAuth();
  const sheetRef = useRef<HTMLDivElement>(null);

  const haptic = useCallback(() => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  }, []);

  const openSheet = useCallback(() => {
    haptic();
    setIsSheetOpen(true);
  }, [haptic]);

  const closeSheet = useCallback(() => setIsSheetOpen(false), []);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      // Close if dragged down more than 100px or with velocity
      if (info.offset.y > 100 || info.velocity.y > 500) {
        closeSheet();
      }
    },
    [closeSheet]
  );

  return (
    <>
      {/* ── Floating Dock ── */}
      {!isSheetOpen && (
      <nav
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-0.5 px-2 py-1.5
          bg-paper-50/90 backdrop-blur-2xl
          border border-sepia-600/30
          rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]"
        role="navigation"
        aria-label="Navigation principale"
      >
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={haptic}
              className={`
                relative flex items-center justify-center
                w-12 h-10 rounded-md
                transition-all duration-150 active:scale-95
                ${active
                  ? 'text-sepia-600'
                  : 'text-ink/40 hover:text-ink/70'
                }
              `}
              aria-current={active ? 'page' : undefined}
            >
              <Icon className="w-[22px] h-[22px]" />
              {active && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-sepia-600" />
              )}
            </Link>
          );
        })}

        {/* Separator */}
        <div className="w-px h-5 bg-sepia-600/10 mx-0.5" />

        {/* More button */}
        <button
          onClick={openSheet}
          className="relative flex items-center justify-center
            w-12 h-10 rounded-xl text-ink/40
            hover:text-ink/70 active:scale-95 transition-all duration-150"
          aria-label="Plus de navigation"
          aria-expanded={isSheetOpen}
        >
          <MoreDotsIcon className="w-[22px] h-[22px]" />
        </button>
      </nav>
      )}

      {/* ── Bottom Sheet ── */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeSheet}
            />

            {/* Sheet */}
            <motion.div
              ref={sheetRef}
              className="lg:hidden fixed inset-x-0 bottom-0 z-[60]
                bg-paper-50 rounded-t-3xl
                shadow-2xl shadow-black/20
                max-h-[85vh] overflow-y-auto"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {/* Handle bar */}
              <div className="sticky top-0 z-10 flex justify-center pt-3 pb-2 bg-paper-50 rounded-t-3xl">
                <div className="w-10 h-1 rounded-full bg-sepia-600/30" />
              </div>

              {/* Sheet header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-sepia-600/10">
                <div>
                  <h2
                    className="text-xl font-bold text-sepia-600"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    ALETHEIA
                  </h2>
                  <p className="text-xs text-ink-light mt-0.5">Philosophie & Connaissance</p>
                </div>
                <button
                  onClick={closeSheet}
                  className="flex items-center justify-center w-9 h-9
                    rounded-full bg-paper-200 hover:bg-paper-300
                    text-ink transition-colors"
                  aria-label="Fermer le menu"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation items */}
              <div className="px-4 py-4">
                <p className="text-[11px] font-semibold text-ink-light/70 uppercase tracking-widest px-2 mb-2">
                  Explorer
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeSheet}
                        className={`
                          flex flex-col items-center gap-2 py-4 px-2 rounded-2xl
                          transition-all duration-200
                          ${active
                            ? 'bg-sepia-600/10 text-sepia-600'
                            : 'text-ink hover:bg-paper-100 active:scale-95'
                          }
                        `}
                      >
                        <Icon className={`w-6 h-6 ${active ? 'text-sepia-600' : 'text-ink/70'}`} />
                        <span className={`text-xs font-medium ${active ? 'text-sepia-600' : ''}`}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* User section */}
              <div className="px-4 pb-6 pt-2">
                {isAuthenticated && user ? (
                  <>
                    {/* User info bar */}
                    <div className="flex items-center justify-between mb-3 px-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-sepia-600/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-sepia-600">
                            {(user.name || 'P')[0].toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink leading-tight">{user.name || 'Philosophe'}</p>
                          <p className="text-[10px] text-ink-light">{user.email}</p>
                        </div>
                      </div>
                      <Link
                        href="/api/auth/signout"
                        onClick={closeSheet}
                        className="text-[10px] text-red-500 hover:text-red-600 font-medium px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Déconnexion
                      </Link>
                    </div>

                    {/* Account grid — compact icon tiles */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {([
                        { href: '/profile', label: 'Profil', Icon: UserIcon },
                        { href: '/profile/dashboard', label: 'Dashboard', Icon: LayoutDashboardIcon },
                        { href: '/agora', label: 'Forum', Icon: MessageSquareIcon },
                        { href: '/profile/flashcards', label: 'Flashcards', Icon: ZapIcon },
                        { href: '/profile/notes', label: 'Notes', Icon: BookmarkIcon },
                        { href: '/profile/favorites', label: 'Favoris', Icon: HeartIcon },
                        { href: '/profile/collections', label: 'Collections', Icon: FolderIcon },
                        { href: '/profile/achievements', label: 'Succès', Icon: TrophyIcon },
                        { href: '/profile/activity', label: 'Activité', Icon: ActivityIcon },
                        { href: '/profile/stats', label: 'Stats', Icon: BarChart3Icon },
                        { href: '/profile/settings', label: 'Réglages', Icon: SettingsIcon },
                      ] as const).map(({ href, label, Icon }) => {
                        const active = isActive(href);
                        return (
                          <Link
                            key={href}
                            href={href}
                            onClick={closeSheet}
                            className={`
                              flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl
                              transition-all duration-150 active:scale-95
                              ${active
                                ? 'bg-sepia-600/10 text-sepia-600'
                                : 'text-ink/70 hover:bg-paper-100'
                              }
                            `}
                          >
                            <Icon className="w-5 h-5" />
                            <span className={`text-[10px] leading-tight font-medium text-center ${active ? 'text-sepia-600' : 'text-ink/60'}`}>
                              {label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    onClick={closeSheet}
                    className="flex items-center justify-center gap-2 w-full py-3.5
                      bg-sepia-600 hover:bg-sepia-700 text-paper-50
                      rounded-2xl font-medium transition-colors"
                  >
                    <LoginIcon className="w-4 h-4" />
                    Se connecter
                  </Link>
                )}
              </div>

              {/* Bottom safe area spacer */}
              <div className="h-8" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/** Three-dot "more" icon */
function MoreDotsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}
