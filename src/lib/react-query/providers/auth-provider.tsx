'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        // Check sessionStorage first to avoid redundant fetches
        const cached = sessionStorage.getItem('auth_session');
        if (cached) {
          const { user: cachedUser, ts } = JSON.parse(cached);
          // Use cache if less than 5 minutes old
          if (Date.now() - ts < 5 * 60 * 1000) {
            setUser(cachedUser);
            setLoading(false);
            return;
          }
        }

        const response = await fetch('/api/auth/session');
        if (response.ok) {
          const data = await response.json();
          const sessionUser = data?.user ?? null;
          setUser(sessionUser);
          // Cache in sessionStorage
          sessionStorage.setItem('auth_session', JSON.stringify({ user: sessionUser, ts: Date.now() }));
        } else {
          setUser(null);
          sessionStorage.removeItem('auth_session');
        }
      } catch (error) {
        console.error('Failed to load session:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
