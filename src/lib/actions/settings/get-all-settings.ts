'use server';

import { prisma } from '@/lib/db/prisma';
import { requireOwnership } from '@/lib/auth/authorization';

/**
 * Get all user settings
 * This is a separate file marked 'use server' to avoid importing Prisma in client components
 */
export async function getAllSettings(userId: string) {
  const session = await requireOwnership(userId);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      bio: true,
      image: true,
      preferences: true,
      notificationSettings: true
    }
  });

  if (!user) {
    throw new Error('User not found');
  }

  return {
    profile: user,
    preferences: user.preferences || {},
    notifications: user.notificationSettings || {},
    privacy: (user.preferences as any)?.privacy || {
      profileVisibility: 'private' as const,
      showProgress: false,
      showReadingList: false
    }
  };
}
