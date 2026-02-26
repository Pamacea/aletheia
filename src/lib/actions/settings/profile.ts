'use server';

import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';
import { updateProfileSchema } from './schemas';
import { LIMITS, MESSAGES } from '@/lib/constants';

/**
 * Profile settings (name, bio, avatar)
 */

/**
 * Update user profile (name, bio, image)
 */
export async function updateProfile(data: {
  name?: string;
  bio?: string;
  image?: string;
}): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    // Validate input
    const validatedData = updateProfileSchema.parse(data);

    // Update user
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(validatedData.name && { name: validatedData.name }),
        ...(validatedData.bio !== undefined && { bio: validatedData.bio || null }),
        ...(validatedData.image !== undefined && { image: validatedData.image || null }),
      },
    });

    revalidatePath('/profile');
    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'Erreur lors de la mise à jour du profil' };
  }
}

/**
 * Upload avatar (returns URL for client-side upload service)
 * Note: This prepares the upload. Actual upload should be handled by a dedicated service.
 */
export async function uploadAvatar(formData: FormData): Promise<ActionResult<{ url: string }>> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    const file = formData.get('file') as File;
    if (!file) {
      return { success: false, error: 'Aucun fichier sélectionné' };
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return { success: false, error: 'Le fichier doit être une image' };
    }

    // Validate file size
    if (file.size > LIMITS.FILES.MAX_AVATAR_SIZE_BYTES) {
      return { success: false, error: 'L\'image ne peut pas dépasser 5MB' };
    }

    // TODO: Implement actual file upload to storage service (Vercel Blob, S3, etc.)
    // For now, this is a placeholder that would return the uploaded URL
    // In production, you would:
    // 1. Upload to storage service
    // 2. Get the URL
    // 3. Update user.image with the URL
    // 4. Return the URL

    // Placeholder: In production, replace with actual upload logic
    const placeholderUrl = `/uploads/avatars/${session.user.id}/${Date.now()}_${file.name}`;

    await prisma.user.update({
      where: { id: session.user.id },
      data: { image: placeholderUrl },
    });

    revalidatePath('/profile');
    revalidatePath('/settings');

    return { success: true, data: { url: placeholderUrl } };
  } catch (error) {
    return { success: false, error: 'Erreur lors du téléchargement de l\'avatar' };
  }
}

/**
 * Delete user avatar
 */
export async function deleteAvatar(): Promise<ActionResult> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      throw new Error(MESSAGES.AUTH.NOT_AUTHENTICATED);
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: { image: null },
    });

    revalidatePath('/profile');
    revalidatePath('/settings');

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Erreur lors de la suppression de l\'avatar' };
  }
}

import type { ActionResult as BaseActionResult } from '@/lib/actions/types';

export type ActionResult<T = unknown> = BaseActionResult<T>;
