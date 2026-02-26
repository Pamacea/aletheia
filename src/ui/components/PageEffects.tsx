'use client';

import { useEffect, useState } from 'react';

interface PageEffectsProps {
  children: React.ReactNode;
}

export function PageEffects({ children }: PageEffectsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simplified - no custom cursor for better performance
  return <>{children}</>;
}
