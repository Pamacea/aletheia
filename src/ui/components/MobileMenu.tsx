'use client';

import Link from 'next/link';
import { useNavigation } from '@/ui/hooks/useNavigation';
import { NAV_ITEMS } from './sidebar-navigation';
import { CloseIcon, LoginIcon } from '@/ui/icons';

interface MobileMenuProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
  onClose: () => void;
}

/**
 * MobileMenu - Full-screen navigation drawer for mobile
 *
 * Includes header with close button, navigation items,
 * user account section (if authenticated), and login CTA.
 */
export function MobileMenu({ isOpen, isAuthenticated, user, onClose }: MobileMenuProps) {
  const { isActive } = useNavigation();

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between p-6 border-b border-sepia-600/20">
        <div>
          <h1
            className="text-2xl font-bold text-sepia-600 mb-1"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            ALETHEIA
          </h1>
          <p className="text-sm text-ink-light">Philosophie & Connaissance</p>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-10 h-10 bg-paper-100 hover:bg-paper-200 transition-colors text-ink"
          aria-label="Fermer le menu"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile navigation + User sections */}
      <div className="lg:hidden px-6 py-8 space-y-6 flex flex-col overflow-y-auto">
        {/* Navigation principale */}
        <div>
          <p className="text-xs font-semibold text-ink-light uppercase tracking-wider mb-3">
            Navigation
          </p>
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-4 px-5 py-4 text-base
                    border-l-4 transition-all duration-200
                    ${active
                      ? 'border-sepia-600 bg-sepia-50 text-sepia-600 font-semibold'
                      : 'border-transparent hover:bg-paper-100 text-ink'
                    }
                  `}
                >
                  <Icon className={`w-6 h-6 flex-shrink-0 ${active ? 'text-sepia-600' : 'text-ink-light'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section utilisateur - si connecté */}
        {isAuthenticated && user && (
          <div className="flex-shrink-0">
            <p className="text-xs font-semibold text-ink-light uppercase tracking-wider mb-3">
              Mon Compte
            </p>
            <div className="space-y-1">
              {/* User info */}
              <div className="px-5 py-3 bg-sepia-50 mb-2">
                <p className="text-sm font-medium text-ink">{user.name || 'Philosophe'}</p>
                <p className="text-xs text-ink-light">{user.email}</p>
              </div>

              {/* Links user */}
              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-ink hover:bg-paper-100 transition-colors"
              >
                <span className="text-sepia-600 font-semibold">Profil</span>
              </Link>
              <Link
                href="/agora"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-ink hover:bg-paper-100 transition-colors"
              >
                <span>Forum</span>
              </Link>
              <Link
                href="/profile/flashcards"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-ink hover:bg-paper-100 transition-colors"
              >
                <span>Flashcards</span>
              </Link>
              <Link
                href="/profile/achievements"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-ink hover:bg-paper-100 transition-colors"
              >
                <span>Succès</span>
              </Link>
              <Link
                href="/profile/activity"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-ink hover:bg-paper-100 transition-colors"
              >
                <span>Activité</span>
              </Link>
              <Link
                href="/api/auth/signout"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 text-base text-red-600 hover:bg-red-50 transition-colors border-t border-paper-200 mt-2"
              >
                <span>Déconnexion</span>
              </Link>
            </div>
          </div>
        )}

        {/* Login CTA - si non connecté */}
        {!isAuthenticated && (
          <div className="lg:hidden px-6 py-4 flex-shrink-0">
            <Link
              href="/auth/login"
              onClick={onClose}
              className="flex items-center justify-center w-full px-6 py-4 bg-sepia-600 text-paper-100 hover:bg-sepia-700 transition-colors text-base font-semibold shadow-lg"
            >
              <span>Se connecter</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
