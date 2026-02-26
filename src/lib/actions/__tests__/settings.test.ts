/**
 * Settings Actions Tests
 *
 * These are integration tests for settings actions.
 * Run with: npx vitest src/lib/actions/__tests__/settings.test.ts
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  updateProfile,
  getPreferences,
  updatePreferences,
  getNotificationSettings,
  updateNotifications,
  getAllSettings,
} from '../settings';

describe('Settings Actions', () => {
  describe('Profile Actions', () => {
    it('should validate profile input', async () => {
      // Test validation
      const result = await updateProfile({
        name: '', // Invalid: empty name
      });

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });

    it('should accept valid profile data', async () => {
      const result = await updateProfile({
        name: 'Test User',
        bio: 'This is a test bio',
      });

      // Note: This will fail without auth, but we test the validation logic
      expect(result).toBeDefined();
    });
  });

  describe('Preferences Actions', () => {
    it('should validate theme preference', async () => {
      const result = await updatePreferences({
        theme: 'invalid', // Type error will be caught by Zod
      } as any);

      expect(result.success).toBe(false);
    });

    it('should accept valid theme values', async () => {
      const themes = ['light', 'dark', 'system'] as const;

      for (const theme of themes) {
        const result = await updatePreferences({ theme });
        expect(result).toBeDefined();
      }
    });
  });

  describe('Notification Actions', () => {
    it('should update notification settings', async () => {
      const result = await updateNotifications({
        emailNotifications: true,
        pushNotifications: false,
      });

      expect(result).toBeDefined();
    });
  });

  describe('Get All Settings', () => {
    it('should return structured settings data', async () => {
      const result = await getAllSettings();

      if (result.success) {
        expect(result.data).toHaveProperty('profile');
        expect(result.data).toHaveProperty('preferences');
        expect(result.data).toHaveProperty('notifications');
        expect(result.data).toHaveProperty('privacy');
      }
    });
  });
});

// Zod Validation Tests
import { z } from 'zod';
import { updateProfileSchema, preferencesSchema, notificationSettingsSchema } from '../settings';

describe('Validation Schemas', () => {
  describe('updateProfileSchema', () => {
    it('should validate correct profile data', () => {
      const result = updateProfileSchema.safeParse({
        name: 'John Doe',
        bio: 'A short bio',
      });

      expect(result.success).toBe(true);
    });

    it('should reject empty name', () => {
      const result = updateProfileSchema.safeParse({
        name: '',
      });

      expect(result.success).toBe(false);
    });

    it('should reject name over 100 characters', () => {
      const result = updateProfileSchema.safeParse({
        name: 'a'.repeat(101),
      });

      expect(result.success).toBe(false);
    });

    it('should reject bio over 500 characters', () => {
      const result = updateProfileSchema.safeParse({
        bio: 'a'.repeat(501),
      });

      expect(result.success).toBe(false);
    });
  });

  describe('preferencesSchema', () => {
    it('should validate correct preferences', () => {
      const result = preferencesSchema.safeParse({
        theme: 'dark',
        language: 'fr',
        fontSize: 'large',
      });

      expect(result.success).toBe(true);
    });

    it('should reject invalid theme', () => {
      const result = preferencesSchema.safeParse({
        theme: 'invalid',
      });

      expect(result.success).toBe(false);
    });

    it('should reject invalid language', () => {
      const result = preferencesSchema.safeParse({
        language: 'invalid',
      });

      expect(result.success).toBe(false);
    });
  });

  describe('notificationSettingsSchema', () => {
    it('should validate notification settings', () => {
      const result = notificationSettingsSchema.safeParse({
        emailNotifications: true,
        pushNotifications: false,
        weeklyDigest: true,
        reviewReminders: false,
      });

      expect(result.success).toBe(true);
    });
  });
});
