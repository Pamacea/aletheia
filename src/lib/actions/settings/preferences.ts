'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { userPreferencesSchema as preferencesSchema, defaultUserPreferences, notificationSettingsSchema, defaultNotificationSettings } from '@/types/user-preferences';
import { MESSAGES } from '@/lib/constants';

/**
 * User preferences (theme, language, notifications)
 */

/**
 * Get user preferences
 */
export async function getPreferences(): Promise<ActionResult<{
  theme: 'light' | 'dark' | 'system';
  language: 'fr' | 'en' | 'es' | 'de';
  fontSize: 'small' | 'medium' | 'large';
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
      select: { preferences: true },
    });

    const validatedPreferences = preferencesSchema.safeParse(user?.preferences);
    const preferences = validatedPreferences.success ? validatedPreferences.data : defaultUserPreferences;

    return {
      success: true,
      data: {
        ...defaultUserPreferences,
        ...preferences,
      },
    } as ActionResult<{
      theme: 'light' | 'dark' | 'system';
      language: 'fr' | 'en' | 'es' | 'de';
      fontSize: 'small' | 'medium' | 'large';
    }>;
  } catch (error) {
    return { success: false, error: 'Erreur lors de la récupération des préférences' };
  }
}

/**
 * Update user preferences
 */
export async function updatePreferences(data: {
  theme?: 'light' | 'dark' | 'system';
  language?: 'fr' | 'en' | 'es' | 'de';
  fontSize?: 'small' | 'medium' | 'large';
}): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = preferencesSchema.parse(data || {});

    // Get current preferences
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { preferences: true },
    });

    const validatedCurrentPreferences = preferencesSchema.safeParse(user?.preferences);
    const currentPreferences = validatedCurrentPreferences.success ? validatedCurrentPreferences.data : defaultUserPreferences;
    const updatedPreferences = {
      ...currentPreferences,
      ...(validatedData as any),
    };

    // Update user
    await prisma.user.update({
      where: { id: session.user.id },
      data: { preferences: updatedPreferences },
    });

    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Erreur lors de la mise à jour des préférences' };
  }
}

/**
 * Get notification settings
 */
export async function getNotificationSettings(): Promise<ActionResult<{
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  reviewReminders: boolean;
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
      select: { notificationSettings: true },
    });

    const validatedSettings = notificationSettingsSchema.safeParse(user?.notificationSettings);
    const notificationSettings = validatedSettings.success ? validatedSettings.data : defaultNotificationSettings;

    return {
      success: true,
      data: {
        ...defaultNotificationSettings,
        ...notificationSettings,
      },
    } as ActionResult<{
      emailNotifications: boolean;
      pushNotifications: boolean;
      weeklyDigest: boolean;
      reviewReminders: boolean;
    }>;
  } catch (error) {
    return { success: false, error: 'Erreur lors de la récupération des paramètres de notification' };
  }
}

/**
 * Update notification settings
 */
export async function updateNotifications(data: {
  emailNotifications?: boolean;
  pushNotifications?: boolean;
  weeklyDigest?: boolean;
  reviewReminders?: boolean;
}): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = data || {};

    // Get current settings
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { notificationSettings: true },
    });

    const validatedCurrentSettings = notificationSettingsSchema.safeParse(user?.notificationSettings);
    const currentSettings = validatedCurrentSettings.success ? validatedCurrentSettings.data : defaultNotificationSettings;
    const updatedSettings = {
      ...currentSettings,
      ...(validatedData as any),
    };

    // Update user
    await prisma.user.update({
      where: { id: session.user.id },
      data: { notificationSettings: updatedSettings },
    });

    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la mise à jour des notifications' };
  }
}

/**
 * Unsubscribe from all marketing emails
 */
export async function unsubscribeEmail(): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { notificationSettings: true },
    });

    const validatedCurrentSettings = notificationSettingsSchema.safeParse(user?.notificationSettings);
    const currentSettings = validatedCurrentSettings.success ? validatedCurrentSettings.data : defaultNotificationSettings;
    const updatedSettings = {
      ...currentSettings,
      weeklyDigest: false,
    };

    await prisma.user.update({
      where: { id: session.user.id },
      data: { notificationSettings: updatedSettings },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la désinscription' };
  }
}

import type { ActionResult as BaseActionResult } from '@/lib/actions/types';

export type ActionResult<T = unknown> = BaseActionResult<T>;
