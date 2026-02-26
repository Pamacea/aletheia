/**
 * Authorization Helpers
 *
 * Provides reusable authorization checks for Server Actions.
 * Ensures users are authenticated and have proper permissions.
 */

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from '@/lib/db/prisma';

export type UserRole = 'USER' | 'ADMIN';

export interface AuthSession {
  user: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    role: UserRole;
  };
}

/**
 * Require authentication for an action
 * @param requireAdmin - Set to true to require admin role
 * @throws Error if not authenticated or not admin (if required)
 */
export async function requireAuth(requireAdmin: boolean = false): Promise<AuthSession> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error('Authentication required');
  }

  // Fetch user with role from database
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Check admin requirement
  if (requireAdmin && user.role !== 'ADMIN') {
    throw new Error('Admin access required');
  }

  return {
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
      role: user.role as UserRole,
    },
  };
}

/**
 * Require ownership or admin access
 * @param userId - The userId to check ownership against
 * @throws Error if not authenticated and not the owner or admin
 */
export async function requireOwnership(userId: string): Promise<AuthSession> {
  const session = await requireAuth();

  // Allow if user is the owner
  if (session.user.id === userId) {
    return session;
  }

  // Allow if user is admin
  if (session.user.role === 'ADMIN') {
    return session;
  }

  throw new Error('Unauthorized: You can only access your own data');
}

/**
 * Check if current user is admin
 */
export async function isAdmin(): Promise<boolean> {
  try {
    const session = await requireAuth();
    return session.user.role === 'ADMIN';
  } catch {
    return false;
  }
}

/**
 * Get current session without throwing
 * Returns null if not authenticated
 */
export async function getOptionalSession(): Promise<AuthSession | null> {
  try {
    return await requireAuth();
  } catch {
    return null;
  }
}

/**
 * Check if user has permission to access a resource
 * @param resourceUserId - The userId of the resource owner
 * @param requirePublic - If true, allow access when resource is public
 */
export async function canAccessResource(
  resourceUserId: string,
  isPublic: boolean = false
): Promise<AuthSession | null> {
  const session = await getOptionalSession();

  // No session but resource is public
  if (!session && isPublic) {
    return null;
  }

  // No session and resource is private
  if (!session) {
    throw new Error('Authentication required');
  }

  // User is owner
  if (session.user.id === resourceUserId) {
    return session;
  }

  // User is admin
  if (session.user.role === 'ADMIN') {
    return session;
  }

  // Resource is public
  if (isPublic) {
    return session;
  }

  throw new Error('Unauthorized: You do not have access to this resource');
}
