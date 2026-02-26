'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signUpWithEmail } from '@/lib/actions/auth';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { ButtonOrnate } from '@/ui/components/ButtonOrnate';
import { PhilosophersIcon, UserIcon, MailIcon, LockIcon, AlertCircleIcon, CheckCircleIcon } from '@/ui/components/CustomIcons';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  // Check if user is coming from login with email pre-filled
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    setLoading(true);

    try {
      const result = await signUpWithEmail({
        email,
        password,
        name,
      });

      if (result.error) {
        setError(result.error);
      } else {
        // Show success message
        setSuccess(true);
        setRegisteredEmail(email);
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper-50 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-[clamp(20rem,90vw,32rem)]">
        {/* Header */}
        <Link href="/" className="flex items-center justify-center gap-2 text-sepia-600 hover:text-sepia-700 transition-colors mb-8">
          <PhilosophersIcon className="w-6 h-6" />
          <span className="font-serif text-2xl font-semibold">ΑΛΗΘΕIA</span>
        </Link>

        <div className="bg-white border-2 border-paper-300 p-6 sm:p-8">
          {!success ? (
            <>
              <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
                Créer un <span className="living-word">compte</span>
              </h1>
              <p className="text-ink-light text-center mb-8">
                Commencez votre <span className="living-word">voyage philosophique</span>
              </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 flex items-start gap-2">
              <AlertCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                Nom
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
            </div>

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
                  minLength={8}
                  className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
                  placeholder="Min. 8 caractères"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-ink mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
                  placeholder="Confirmer le mot de passe"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium border-2 border-sepia-600"
            >
              {loading ? 'Création...' : 'Créer un compte'}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-ink-light">
            Déjà un compte ?{' '}
            <LinkOrnate href="/auth/login" className="text-sepia-600 hover:text-sepia-700 font-medium underline">
              Se connecter
            </LinkOrnate>
          </p>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center">
                <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h1 className="font-serif text-3xl font-semibold text-ink mb-2">
                  Compte créé !
                </h1>
                <p className="text-ink-light mb-6">
                  Un email de vérification a été envoyé à{' '}
                  <span className="font-medium text-ink">{registeredEmail}</span>
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 p-4 mb-6 text-left">
                  <p className="text-sm text-blue-800 font-medium mb-2">📧 Prochaines étapes :</p>
                  <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                    <li>Vérifiez votre boîte de réception</li>
                    <li>Cliquez sur le lien de vérification</li>
                    <li>Connectez-vous à votre compte</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <Link href="/auth/login" className="block">
                    <ButtonOrnate className="w-full">
                      Se connecter
                    </ButtonOrnate>
                  </Link>
                  <Link href="/auth/resend-verification" className="block text-sm text-sepia-600 hover:text-sepia-700 underline">
                    Je n'ai pas reçu l'email
                  </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                  <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200">
                    <p className="text-xs text-yellow-800">
                      <strong>Mode développement :</strong> En production, l'email de vérification sera obligatoire.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
