'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/react-query/providers/auth-provider';
import { MenuIcon } from '@/ui/icons';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileMenu } from './MobileMenu';

/**
 * Sidebar - Desktop compact / Mobile fullscreen drawer
 *
 * Orchestrates desktop and mobile navigation with a single trigger button.
 * Uses separate components for desktop and mobile views for better maintainability.
 */
export function Sidebar() {
  const { user, isAuthenticated } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile trigger button - only visible when menu is closed */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 bg-sepia-600 text-paper-50 border-2 border-sepia-700 hover:bg-sepia-700 transition-all duration-300 shadow-lg"
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`
          fixed top-0 left-0 z-40 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0 w-full h-screen' : '-translate-x-full lg:translate-x-0'}
          lg:h-screen lg:w-16
        `}
        style={{
          backgroundColor: '#faf9f7',
          borderRight: '2px solid #8b6f3c',
        }}
      >
        {/* Desktop sidebar */}
        <div className="hidden lg:flex flex-col h-full">
          <DesktopSidebar
            isAuthenticated={isAuthenticated}
            user={user}
            onMenuToggle={setIsUserMenuOpen}
          />
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex flex-col h-full overflow-y-auto">
          <MobileMenu
            isOpen={isMobileOpen}
            isAuthenticated={isAuthenticated}
            user={user}
            onClose={() => setIsMobileOpen(false)}
          />
        </div>
      </aside>
    </>
  );
}

/**
 * Skeleton loading state for sidebar
 */
export function SidebarSkeleton() {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-16 flex flex-col"
      style={{
        backgroundColor: '#faf9f7',
        borderRight: '2px solid #8b6f3c',
      }}
    >
      <div className="h-16 border-b border-sepia-600/20 flex items-center justify-center">
        <div className="w-6 h-6 bg-paper-200 animate-pulse" />
      </div>
      <div className="flex-1">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-14 border-b border-paper-200/30 flex items-center justify-center">
            <div className="w-6 h-6 bg-paper-200 animate-pulse" />
          </div>
        ))}
      </div>
      <div className="h-14 border-t border-sepia-600/20 flex items-center justify-center">
        <div className="w-6 h-6 bg-paper-200 animate-pulse" />
      </div>
    </aside>
  );
}
