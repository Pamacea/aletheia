'use client';

import { useEffect, useState } from 'react';
import { Sidebar, SidebarSkeleton } from './Sidebar';
import { Loader2Icon } from './CustomIcons';

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Give auth provider time to initialize
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex">
        <SidebarSkeleton />
        <main className="flex-1 flex items-center justify-center">
          <Loader2Icon className="w-8 h-8 text-[#8b6f3c] animate-spin" />
        </main>
      </div>
    );
  }

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
