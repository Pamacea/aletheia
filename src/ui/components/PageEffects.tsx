import type { ReactNode } from 'react';

interface PageEffectsProps {
  children: ReactNode;
}

export function PageEffects({ children }: PageEffectsProps) {
  return <>{children}</>;
}
