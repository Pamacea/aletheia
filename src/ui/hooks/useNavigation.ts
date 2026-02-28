import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Navigation state management hook
 *
 * Provides utilities for checking active routes and managing navigation state.
 * Centralizes navigation logic used across Sidebar, UserDropdown, BreadcrumbNav, etc.
 *
 * @example
 * ```tsx
 * function Navigation() {
 *   const { pathname, isActive } = useNavigation()
 *
 *   return (
 *     <nav>
 *       <Link href="/" className={isActive('/') ? 'active' : ''}>
 *         Home
 *       </Link>
 *       <Link href="/about" className={isActive('/about') ? 'active' : ''}>
 *         About
 *       </Link>
 *     </nav>
 *   )
 * }
 * ```
 */
export function useNavigation() {
  const pathname = usePathname();

  /**
   * Check if a given path is currently active
   *
   * @param href - The path to check against
   * @param exact - If true, requires exact match (default: false)
   * @returns true if the path is active
   *
   * @example
   * ```tsx
   * isActive('/') // true only on home page
   * isActive('/about', true) // true only on /about
   * isActive('/about') // true on /about, /about/team, etc.
   * ```
   */
  const isActive = useMemo(
    () => (href: string, exact = false) => {
      if (exact) {
        return pathname === href;
      }

      // Root path needs exact match
      if (href === '/') {
        return pathname === '/';
      }

      // Other paths match if they start with href
      return pathname.startsWith(href);
    },
    [pathname]
  );

  /**
   * Check if any of the given paths are active
   *
   * @param hrefs - Array of paths to check
   * @returns true if any of the paths are active
   *
   * @example
   * ```tsx
   * isAnyActive(['/settings', '/profile']) // true if on settings or profile
   * ```
   */
  const isAnyActive = useMemo(
    () => (...hrefs: string[]) => {
      return hrefs.some((href) => isActive(href));
    },
    [isActive]
  );

  return {
    /** Current pathname from Next.js router */
    pathname,

    /** Check if a single path is active */
    isActive,

    /** Check if any of the given paths are active */
    isAnyActive,
  };
}

/**
 * Type for the return value of useNavigation
 */
export type NavigationState = ReturnType<typeof useNavigation>;
