'use client';

import { useEffect, useState } from 'react';
import { CursorCustom } from '@/ui/components/CursorCustom';
import { ScrollReveal } from '@/ui/components/ScrollReveal';

export function HomePageEffects({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <CursorCustom />
      {children}
    </>
  );
}
