import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MESSAGES } from "@/lib/constants";

/**
 * Authentication decorators for server actions
 *
 * These higher-order functions wrap server actions to provide
 * consistent authentication and authorization behavior.
 */

type Session = {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };
  user: {
    id: string;
    name?: string | null;
    email?: string;
    image?: string | null;
    role: string | null;
  };
};

/**
 * Wrap a server action to require authentication
 *
 * @example
 * ```ts
 * export const myAction = withAuth(async (data, session) => {
 *   // session is guaranteed to be valid here
 *   return { success: true };
 * });
 * ```
 */
export function withAuth<T extends (...args: any[]) => Promise<any>>(
  action: T,
  options: { requireAdmin?: boolean } = {}
): T {
  return (async (...args: any[]) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    if (options.requireAdmin && session.user.role !== 'ADMIN') {
      throw new Error(MESSAGES.AUTH.ADMIN_REQUIRED);
    }

    // Inject session as last argument
    return action(...args, session);
  }) as T;
}

/**
 * Wrap a server action to require ownership or admin role
 *
 * @example
 * ```ts
 * export const updateProfile = withOwnership(async (data, userId) => {
 *   // userId is guaranteed to match session or user is admin
 *   return { success: true };
 * });
 * ```
 */
export function withOwnership<T extends (data: any, userId?: string) => Promise<any>>(
  action: T
): T {
  return (async (data: any, userId?: string) => {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    if (userId && userId !== session.user.id && session.user.role !== 'ADMIN') {
      throw new Error(MESSAGES.AUTH.UNAUTHORIZED);
    }

    return action(data, session.user.id);
  }) as T;
}

/**
 * Get authenticated session with error handling
 *
 * @example
 * ```ts
 * export async function myAction() {
 *   const session = await getAuthSession();
 *   // session is guaranteed to be valid
 * }
 * ```
 */
export async function getAuthSession(): Promise<Session> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
  }

  return {
    session: session.session,
    user: session.user
  } as Session;
}

/**
 * Check if current user is admin
 *
 * @example
 * ```ts
 * export async function adminOnlyAction() {
 *   if (!(await isAdmin())) {
 *     throw new Error('Admin required');
 *   }
 * }
 * ```
 */
export async function isAdmin(): Promise<boolean> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user?.role === 'ADMIN';
}
