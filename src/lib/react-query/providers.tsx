'use client';

import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { useState, type ReactNode } from 'react';
import { AuthProvider } from './providers/auth-provider';

const ReactQueryDevtools = dynamic(
  () => import('@tanstack/react-query-devtools').then(mod => ({ default: mod.ReactQueryDevtools })),
  { ssr: false }
);

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <TanStackQueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </TanStackQueryClientProvider>
  );
}
