import { ReactNode } from 'react';

interface SlugLayoutProps {
  children: ReactNode;
}

export default function SlugLayout({ children }: SlugLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-paper-50">
      {children}
    </div>
  );
}
