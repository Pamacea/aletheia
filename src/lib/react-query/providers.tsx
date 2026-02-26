'use client';

import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, type ReactNode } from 'react';
import { AuthProvider } from './providers/auth-provider';

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
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
      <ReactQueryDevtools initialIsOpen={false} />
    </TanStackQueryClientProvider>
  );
}
