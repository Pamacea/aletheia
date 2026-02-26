'use server';

import { headers } from 'next/headers';
import { auth, getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { checkAuthRateLimit } from '@/lib/rate-limit';
import { sendVerificationEmail } from '@/lib/email';

export async function signInWithEmail(email: string, password: string) {
  'use server';

  // Rate limiting check
  const rateLimit = await checkAuthRateLimit(email);
  if (!rateLimit.success) {
    return {
      error: 'Trop de tentatives de connexion. Veuillez réessayer dans quelques minutes.',
    };
  }

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    if (typeof error === 'string') {
      return { error };
    }
    return { error: 'Une erreur est survenue.' };
  }
}

export async function signUpWithEmail(data: { email: string; password: string; name: string }) {
  'use server';

  // Rate limiting check
  const rateLimit = await checkAuthRateLimit(data.email);
  if (!rateLimit.success) {
    return {
      error: 'Trop de tentatives d\'inscription. Veuillez réessayer dans quelques minutes.',
    };
  }

  try {
    await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    if (typeof error === 'string') {
      return { error };
    }
    return { error: 'Une erreur est survenue.' };
  }
}

export async function signInWithGithub() {
  'use server';

  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3001';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const result = await auth.api.signInSocial({
    body: {
      provider: 'github',
      callbackURL: `${protocol}://${host}/`,
    },
  });

  // BetterAuth returns { url: string } or just the url string
  const url = typeof result === 'string' ? result : result?.url;
  if (url) {
    redirect(url);
  }
}

export async function signInWithDiscord() {
  'use server';

  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3001';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const result = await auth.api.signInSocial({
    body: {
      provider: 'discord',
      callbackURL: `${protocol}://${host}/`,
    },
  });

  // BetterAuth returns { url: string } or just the url string
  const url = typeof result === 'string' ? result : result?.url;
  if (url) {
    redirect(url);
  }
}

export async function signOut() {
  'use server';

  await auth.api.signOut({
    headers: await headers(),
  });

  redirect('/');
}

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

/**
 * Resend verification email
 */
export async function resendVerificationEmail(email: string): Promise<{
  success: boolean;
  error?: string;
}> {
  'use server';

  // Rate limiting check
  const rateLimit = await checkAuthRateLimit(email);
  if (!rateLimit.success) {
    return {
      success: false,
      error: 'Trop de tentatives. Veuillez réessayer dans quelques minutes.',
    };
  }

  try {
    // Get user to verify they exist
    const { prisma: prismaClient } = await import('@/lib/db/prisma');
    const user = await prismaClient.user.findUnique({
      where: { email },
      select: { id: true, name: true, emailVerified: true },
    });

    if (!user) {
      return {
        success: false,
        error: 'Aucun compte trouvé avec cet email.',
      };
    }

    // If already verified, return success
    if (user.emailVerified) {
      return {
        success: true,
      };
    }

    // Generate new verification token using better-auth
    const headersList = await headers();
    const baseURL = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Use better-auth's internal method to create verification token
    const verificationUrl = await (auth.api as any).getVerificationToken?.({
      headers: headersList,
      body: { email },
    }) || `${baseURL}/api/auth/verify-email?token=generated`;

    if (!verificationUrl) {
      return {
        success: false,
        error: 'Erreur lors de la génération du lien de vérification.',
      };
    }

    // Send email
    const result = await sendVerificationEmail(
      email,
      user.name,
      verificationUrl as string
    );

    return result;
  } catch (error) {
    console.error('Failed to resend verification email:', error);
    return {
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer.',
    };
  }
}

/**
 * Request password reset
 */
export async function requestPasswordReset(email: string): Promise<{
  success: boolean;
  error?: string;
}> {
  'use server';

  // Rate limiting check
  const rateLimit = await checkAuthRateLimit(email);
  if (!rateLimit.success) {
    return {
      success: false,
      error: 'Trop de tentatives. Veuillez réessayer dans quelques minutes.',
    };
  }

  try {
    // Check if user exists
    const { prisma: prismaClient } = await import('@/lib/db/prisma');
    const user = await prismaClient.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });

    // Don't reveal if user exists or not for security
    if (!user) {
      return { success: true };
    }

    // Use better-auth's forgot password flow
    await (auth.api as any).resetPassword?.({
      body: { email },
    }) || await (auth.api as any).forgetPassword?.({
      body: { email },
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to request password reset:', error);
    return {
      success: false,
      error: 'Une erreur est survenue. Veuillez réessayer.',
    };
  }
}
