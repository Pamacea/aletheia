'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/react-query/providers/auth-provider';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileDock } from './MobileDock';

/**
 * Sidebar - Desktop compact sidebar + Mobile floating dock
 *
 * Desktop: Fixed 64px sidebar on the left
 * Mobile/Tablet: iOS-style floating dock at bottom + bottom sheet
 */
export function Sidebar() {
  const { user, isAuthenticated } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar - hidden on mobile */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 z-40 flex-col h-screen w-16"
        style={{
          backgroundColor: '#faf9f7',
          borderRight: '2px solid #8b6f3c',
        }}
      >
        <DesktopSidebar
          isAuthenticated={isAuthenticated}
          user={user}
          onMenuToggle={setIsUserMenuOpen}
        />
      </aside>

      {/* Mobile dock - hidden on desktop */}
      <MobileDock />
    </>
  );
}

/**
 * Skeleton loading state for sidebar
 */
export function SidebarSkeleton() {
  return (
    <aside
      className="hidden lg:flex fixed top-0 left-0 h-screen w-16 flex-col"
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
