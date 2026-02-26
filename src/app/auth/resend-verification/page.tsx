'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { resendVerificationEmail } from '@/lib/actions/auth';
import { PhilosophersIcon, MailIcon, CheckCircleIcon, AlertCircleIcon, Loader2Icon, ArrowLeftIcon } from '@/ui/components/CustomIcons';
import { ButtonOrnate } from '@/ui/components/ButtonOrnate';

export default function ResendVerificationPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await resendVerificationEmail(email);

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        // Redirect to verification page after 3 seconds
        setTimeout(() => {
          router.push('/auth/verify-email?success=' + encodeURIComponent('Un nouvel email de vérification vous a été envoyé.'));
        }, 3000);
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <Link href="/" className="flex items-center justify-center gap-2 text-sepia-600 hover:text-sepia-700 transition-colors mb-8">
          <PhilosophersIcon className="w-6 h-6" />
          <span className="font-serif text-2xl font-semibold">ΑΛΗΘΕIA</span>
        </Link>

        <div className="bg-white border-2 border-paper-300 p-8">
          <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
            Renvoyer l'email de <span className="living-word">vérification</span>
          </h1>
          <p className="text-ink-light text-center mb-8">
            Entrez votre adresse email et nous vous enverrons un nouveau lien de vérification.
          </p>

          {/* Success State */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-800 font-medium">Email envoyé !</p>
                <p className="text-sm text-green-700 mt-1">
                  Vérifiez votre boîte de réception. Vous serez redirigé dans quelques secondes...
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 flex items-start gap-2">
              <AlertCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Form */}
          {!success && (
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium border-2 border-sepia-600 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2Icon className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Renvoyer l\'email'
                )}
              </button>
            </form>
          )}

          {/* Back Link */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-light">
            <Link href="/auth/login" className="flex items-center gap-1 text-sepia-600 hover:text-sepia-700 font-medium">
              <ArrowLeftIcon className="w-4 h-4" />
              Retour à la connexion
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 ">
          <p className="text-sm text-blue-800">
            <strong>💡 Astuce :</strong> Si vous ne recevez pas l'email dans les minutes qui suivent, vérifiez votre dossier spam ou courrier indésirable.
          </p>
        </div>
      </div>
    </div>
  );
}
