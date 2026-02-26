'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { updateEmailSchema, updatePasswordSchema } from './schemas';
import { MESSAGES, LIMITS } from '@/lib/constants';

/**
 * Account-related settings (email, password)
 */

/**
 * Update email
 */
export async function updateEmail(data: { newEmail: string }): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = updateEmailSchema.parse(data);

    // Check if new email is already taken
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.newEmail },
    });

    if (existingUser) {
      return { success: false, error: 'Cette adresse email est déjà utilisée' };
    }

    // Generate email change token
    const emailChangeToken = crypto.randomUUID();
    const emailChangeExpires = new Date(Date.now() + LIMITS.TIME.ONE_DAY_MS); // 24 hours

    // Store token
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        emailChangeToken,
        emailChangeExpires,
      },
    });

    // TODO: Send verification email to new address
    // await sendEmailChangeVerificationEmail(validatedData.newEmail, emailChangeToken);

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Erreur lors de la mise à jour de l\'email' };
  }
}

/**
 * Verify email change (with token)
 */
export async function verifyEmailChange(token: string): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        emailChangeToken: true,
        emailChangeExpires: true,
      },
    });

    if (!user || user.emailChangeToken !== token) {
      return { success: false, error: 'Token de vérification invalide' };
    }

    if (user.emailChangeExpires && user.emailChangeExpires < new Date()) {
      return { success: false, error: 'Le token de vérification a expiré' };
    }

    // TODO: Implement the actual email change logic
    // This would need the new email stored somewhere secure
    // For now, this is a placeholder

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la vérification de l\'email' };
  }
}

/**
 * Update password
 */
export async function updatePassword(data: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = updatePasswordSchema.parse(data);

    // Update password using BetterAuth
    await auth.api.changePassword({
      body: {
        newPassword: validatedData.newPassword,
        currentPassword: validatedData.oldPassword,
      },
      headers: await headers(),
    });

    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Erreur lors de la mise à jour du mot de passe' };
  }
}

type ActionResult = {
  success: boolean;
  error?: string;
  data?: unknown;
};
