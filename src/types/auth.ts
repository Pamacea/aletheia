import { UserRole } from '@prisma/client';

/**
 * Extended session type that includes user role
 */
export interface SessionWithRole {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null;
    role: UserRole;
  };
}

/**
 * Helper function to check if user has admin role
 */
export function isAdmin(user: { role?: string } | null | undefined): boolean {
  return user?.role === 'ADMIN';
}

/**
 * Helper function to check if user has moderator or admin role
 */
export function isModerator(user: { role?: string } | null | undefined): boolean {
  return user?.role === 'ADMIN' || user?.role === 'MODERATOR';
}
