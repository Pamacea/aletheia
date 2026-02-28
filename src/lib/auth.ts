import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@/lib/db/prisma';
import { nextCookies } from 'better-auth/next-js';
import { sendVerificationEmail, sendPasswordResetEmail } from '@/lib/email';
import { cookies } from 'next/headers';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  secret: process.env.BETTER_AUTH_SECRET || 'development-secret-change-in-production',
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: process.env.NODE_ENV === "production",
    sendVerificationEmail: async ({ user, url }: { user: { email: string; name?: string | null }; url: string }) => {
      await sendVerificationEmail(user.email, user.name || 'Utilisateur', url);
    },
    sendResetPasswordEmail: async ({ user, url }: { user: { email: string }; url: string }) => {
      await sendPasswordResetEmail(user.email, url);
    },
  },
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
      enabled: !!process.env.DISCORD_CLIENT_ID,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      enabled: !!process.env.GITHUB_CLIENT_ID,
    },
  },
  plugins: [nextCookies()],
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: false,
        defaultValue: 'USER',
      },
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
});

export type Session = typeof auth.$Infer.Session;

/**
 * Helper function to get the current session in Server Components
 * Uses better-auth's session retrieval with Next.js cookies
 */
export async function getSession() {
  const cookieStore = await cookies();
  const session = await auth.api.getSession({
    headers: new Headers({
      cookie: cookieStore.toString(),
    }),
  });

  // If session exists, fetch user with role
  if (session?.user?.id) {
    const { prisma: prismaClient } = await import('@/lib/db/prisma');
    const userWithRole = await prismaClient.user.findUnique({
      where: { id: session.user.id },
      select: { role: true },
    });

    if (userWithRole && session.user) {
      (session.user as any).role = userWithRole.role;
    }
  }

  return session;
}
