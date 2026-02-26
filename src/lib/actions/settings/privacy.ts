'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { userPreferencesSchema, defaultUserPreferences, defaultPrivacySettings } from '@/types/user-preferences';

// Create privacySchema inline
const privacySchema = z.object({
  profileVisibility: z.enum(['public', 'private']),
  showProgress: z.boolean(),
  showReadingList: z.boolean(),
});
import { MESSAGES } from '@/lib/constants';

/**
 * Privacy settings (profile visibility, data export, account deletion)
 */

/**
 * Update privacy settings
 */
export async function updatePrivacy(data: {
  profileVisibility?: 'public' | 'private';
  showProgress?: boolean;
  showReadingList?: boolean;
}): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = privacySchema.parse(data);

    // Get current privacy settings
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { preferences: true },
    });

    const validatedCurrentPreferences = userPreferencesSchema.safeParse(user?.preferences);
    const currentPreferences = validatedCurrentPreferences.success ? validatedCurrentPreferences.data : defaultUserPreferences;
    // Extract privacy settings from preferences - note that privacy is stored as a nested property
    const privacySettings = (validatedCurrentPreferences.success && (currentPreferences as Record<string, unknown>).privacy) || defaultPrivacySettings;

    const updatedPreferences = {
      ...currentPreferences,
      privacy: {
        ...privacySettings,
        ...validatedData,
      },
    };

    // Update isPublic field separately
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        preferences: updatedPreferences,
        ...(validatedData.profileVisibility && { isPublic: validatedData.profileVisibility === 'public' }),
      },
    });

    revalidatePath('/profile');
    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Erreur lors de la mise à jour de la confidentialité' };
  }
}

/**
 * Set profile visibility
 */
export async function setProfileVisibility(isPublic: boolean): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: { isPublic },
    });

    revalidatePath('/profile');
    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la modification de la visibilité' };
  }
}

/**
 * Export user data as JSON (GDPR compliance)
 */
export async function exportData(): Promise<ActionResult<{
  data: unknown;
  exportedAt: string;
}>> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
        annotations: {
          select: {
            id: true,
            content: true,
            isPublic: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        quotes: {
          select: {
            id: true,
            slug: true,
            text: true,
            context: true,
            tags: true,
            isPublic: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        notes: {
          select: {
            id: true,
            title: true,
            content: true,
            tags: true,
            isPublic: true,
            linkedEntityType: true,
            linkedEntityId: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        flashcardReviews: {
          select: {
            id: true,
            quality: true,
            newEase: true,
            newInterval: true,
            reviewedAt: true,
          },
        },
        progressions: {
          select: {
            id: true,
            status: true,
            easeFactor: true,
            interval: true,
            repetitions: true,
            nextReview: true,
            lastReview: true,
          },
        },
        readingStates: {
          select: {
            id: true,
            status: true,
            progressPercent: true,
            startedAt: true,
            completedAt: true,
            lastReadAt: true,
          },
        },
        forumPosts: {
          select: {
            id: true,
            slug: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        forumReplies: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!user) {
      return { success: false, error: 'Utilisateur non trouvé' };
    }

    // Sanitize user data (remove sensitive fields)
    const sanitizedData = {
      profile: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        bio: user.bio,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      preferences: user.preferences,
      notificationSettings: user.notificationSettings,
      annotations: user.annotations,
      quotes: user.quotes,
      notes: user.notes,
      flashcardReviews: user.flashcardReviews,
      progressions: user.progressions,
      readingStates: user.readingStates,
      forumPosts: user.forumPosts,
      forumReplies: user.forumReplies,
    };

    return {
      success: true,
      data: {
        data: sanitizedData,
        exportedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    return { success: false, error: 'Erreur lors de l\'export des données' };
  }
}

/**
 * Delete account with confirmation
 */
export async function deleteAccount(password?: string): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // If password is provided, verify it
    if (password) {
      // TODO: Implement password verification with BetterAuth
      // This requires accessing the hashed password from the database
    }

    // Delete user (cascade will handle related records)
    await prisma.user.delete({
      where: { id: session.user.id },
    });

    // Sign out
    await auth.api.signOut({
      headers: await headers(),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la suppression du compte' };
  }
}

import type { ActionResult as BaseActionResult } from '@/lib/actions/types';

export type ActionResult<T = unknown> = BaseActionResult<T>;
