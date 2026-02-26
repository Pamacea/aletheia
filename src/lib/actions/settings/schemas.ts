import { z } from 'zod';
import { LIMITS, PROFILE, COLLECTION } from '@/lib/constants';

/**
 * Validation schemas for user settings
 */

export const updateProfileSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(PROFILE.MAX_NAME_LENGTH, `Le nom ne peut pas dépasser ${PROFILE.MAX_NAME_LENGTH} caractères`).optional(),
  bio: z.string().max(PROFILE.MAX_BIO_LENGTH, `La bio ne peut pas dépasser ${PROFILE.MAX_BIO_LENGTH} caractères`).optional(),
  image: z.string().url('URL d\'image invalide').optional().or(z.literal('')),
});

export const preferencesSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).optional(),
  language: z.enum(['fr', 'en', 'es', 'de']).optional(),
  fontSize: z.enum(['small', 'medium', 'large']).optional(),
});

export const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  weeklyDigest: z.boolean().optional(),
  reviewReminders: z.boolean().optional(),
});

export const privacySchema = z.object({
  profileVisibility: z.enum(['public', 'private']).optional(),
  showProgress: z.boolean().optional(),
  showReadingList: z.boolean().optional(),
});

export const updateEmailSchema = z.object({
  newEmail: z.string().email('Email invalide'),
});

export const updatePasswordSchema = z.object({
  oldPassword: z.string().min(8, 'L\'ancien mot de passe est requis'),
  newPassword: z.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword'],
});
