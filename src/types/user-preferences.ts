import { z } from 'zod';

/**
 * User Preferences Schema
 */
export const userPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).optional(),
  language: z.enum(['fr', 'en', 'es', 'de']).optional(),
  fontSize: z.enum(['small', 'medium', 'large']).optional(),
});

/**
 * Notification Settings Schema
 */
export const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  weeklyDigest: z.boolean().optional(),
  reviewReminders: z.boolean().optional(),
});

/**
 * Privacy Settings Schema
 */
export const privacySettingsSchema = z.object({
  profileVisibility: z.enum(['public', 'private']).optional(),
  showProgress: z.boolean().optional(),
  showReadingList: z.boolean().optional(),
});

/**
 * Inferred Types
 */
export type UserPreferences = z.infer<typeof userPreferencesSchema>;
export type NotificationSettings = z.infer<typeof notificationSettingsSchema>;
export type PrivacySettings = z.infer<typeof privacySettingsSchema>;

/**
 * Default Values
 */
export const defaultUserPreferences: UserPreferences = {
  theme: 'system',
  language: 'fr',
  fontSize: 'medium',
};

export const defaultNotificationSettings: NotificationSettings = {
  emailNotifications: true,
  pushNotifications: false,
  weeklyDigest: true,
  reviewReminders: true,
};

export const defaultPrivacySettings: PrivacySettings = {
  profileVisibility: 'private',
  showProgress: false,
  showReadingList: false,
};
