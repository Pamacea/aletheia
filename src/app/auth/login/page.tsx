'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithGithub, signInWithEmail, signInWithDiscord } from '@/lib/actions/auth';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { ButtonOrnate } from '@/ui/components/ButtonOrnate';
import { PhilosophersIcon, MailIcon, LockIcon, GithubIcon, AlertCircleIcon } from '@/ui/components/CustomIcons';

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
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.063.156.156 0 0 0-.022.217c.097.072.2.145.296.221a16.956 16.956 0 0 1 4.223 1.126c.135-.186.296-.396.482-.634a.06.06 0 0 0-.011-.062c-.206-.076-.423-.128-.637-.165a.06.06 0 0 0-.051.025c-.178.09-.37-.155-.562-.21a13.87 13.87 0 0 0-6.866 0c-.19.056-.39.12-.562.21a.06.06 0 0 0-.051-.025c-.214.037-.43.089-.637.165a.06.06 0 0 0-.012.062c.186.238.37.45.485.634a.06.06 0 0 0-.011.062c-.973 1.267-2.293 1.645-4.885 1.515a.06.06 0 0 0-.034.012c-.22.137-.406.284-.535.47a19.502 19.502 0 0 1-1.984-1.875.06.06 0 0 1 .004-.08c.758-1.125 1.585-2.288 1.585-2.288a.06.06 0 0 1 .07-.036c.168-.04.344-.04.344-.04.156-.008.336.028.535.085a.06.06 0 0 1 .034.08c-1.25 1.672-2.27 4.123-1.85 6.506a.06.06 0 0 1-.025.06c-.534.864-1.165 1.49-1.835 1.936a.06.06 0 0 1-.063.014c-.362-.104-.732-.196-1.104-.274a.06.06 0 0 1-.041-.076c1.122-3.658 4.048-6.067 7.66-5.835a.06.06 0 0 1 .056.026c1.837-.253 3.717-.253 5.554 0a.06.06 0 0 1 .056-.026c3.612-.232 6.538 2.177 7.66 5.835a.06.06 0 0 1-.04.076c-.372.078-.742.17-1.104.274a.06.06 0 0 1-.063-.014c-.67-.446-1.3-1.072-1.835-1.936a.06.06 0 0 1-.025-.06c.42-2.383-.6-4.834-1.85-6.506a.06.06 0 0 1 .034-.08c.199-.057.38-.093.535-.085a.06.06 0 0 1 .07.036c0 0 .815 1.163 1.585 2.288a.06.06 0 0 1 .004.08c-.5.593-.937-1.22-1.272-1.874a.06.06 0 0 1 .03-.07c.13-.096.287-.2.535-.47a.06.06 0 0 0-.034-.012z"/>
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
