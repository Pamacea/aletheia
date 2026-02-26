/**
 * Settings - Public API
 *
 * This module exports all functionality for managing user settings.
 * Organized into logical sub-modules for better maintainability.
 */

// Export schemas
export * from './schemas';

// Export account settings (email, password)
export { updateEmail, updatePassword, verifyEmailChange } from './account';

// Export profile settings (name, bio, avatar)
export { updateProfile, uploadAvatar, deleteAvatar } from './profile';

// Export preferences (theme, language, notifications)
export { getPreferences, updatePreferences, updateNotifications, unsubscribeEmail } from './preferences';
export { getNotificationSettings } from './preferences';

// Export privacy settings (visibility, data export, account deletion)
export { updatePrivacy, exportData, deleteAccount, setProfileVisibility } from './privacy';

// Export utility functions - imported from separate file to avoid Prisma in client bundles
export { getAllSettings } from './get-all-settings';
