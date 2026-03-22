'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithGithub, signInWithEmail, signInWithDiscord } from '@/lib/actions/auth';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { ButtonOrnate } from '@/ui/components/ButtonOrnate';
import { PhilosophersIcon } from '@/ui/icons/NavigationIcons';
import { MailIcon, LockIcon } from '@/ui/icons/UserIcons';
import { AlertCircleIcon } from '@/ui/icons/StatusIcons';
import { GithubIcon } from '@/ui/icons/SocialIcons';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signInWithEmail(email, password);

      if (result.error) {
        setError(result.error);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setError('');
    setLoading(true);

    // OAuth redirects, so no error handling needed
    await signInWithGithub();
  };

  const handleDiscordSignIn = async () => {
    setError('');
    setLoading(true);

    // OAuth redirects, so no error handling needed
    await signInWithDiscord();
  };

  return (
    <div className="min-h-screen bg-paper-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[clamp(20rem,90vw,32rem)]">
        {/* Header */}
        <Link href="/" className="flex items-center justify-center gap-2 text-sepia-600 hover:text-sepia-700 transition-colors mb-8">
          <PhilosophersIcon className="w-6 h-6" />
          <span className="font-serif text-2xl font-semibold">ΑΛΗΘΕΙΑ</span>
        </Link>

        <div className="bg-white border-2 border-paper-300 p-6 sm:p-8">
          <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
            <span className="living-word">Connexion</span>
          </h1>
          <p className="text-ink-light text-center mb-8">
            Accédez à votre <span className="living-word">parcours philosophique</span>
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 flex items-start gap-2">
              <AlertCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium border-2 border-sepia-600"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-paper-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-ink-lighter">Ou continuer avec</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleGithubSignIn}
              disabled={loading}
              className="w-full py-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-paper-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-ink font-medium"
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </button>
            <button
              onClick={handleDiscordSignIn}
              disabled={loading}
              className="w-full py-3 border-2 border-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium text-[#5865F2]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
              Discord
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-ink-light">
            Pas encore de compte ?{' '}
            <LinkOrnate href="/auth/register" className="text-sepia-600 hover:text-sepia-700 font-medium underline">
              Créer un compte
            </LinkOrnate>
          </p>
        </div>
      </div>
    </div>
  );
}
