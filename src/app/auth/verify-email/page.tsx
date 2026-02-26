'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PhilosophersIcon, MailIcon, CheckCircleIcon, AlertCircleIcon, Loader2Icon } from '@/ui/components/CustomIcons';
import { ButtonOrnate } from '@/ui/components/ButtonOrnate';

type VerificationStatus = 'loading' | 'success' | 'error';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<VerificationStatus>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get verification result from URL params
    const error = searchParams.get('error');
    const success = searchParams.get('success');

    if (error) {
      setStatus('error');
      setMessage(decodeURIComponent(error));
    } else if (success) {
      setStatus('success');
      setMessage(decodeURIComponent(success));
    } else {
      // No params - redirect to home or show loading state
      const timer = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-paper-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <Link href="/" className="flex items-center justify-center gap-2 text-sepia-600 hover:text-sepia-700 transition-colors mb-8">
          <PhilosophersIcon className="w-6 h-6" />
          <span className="font-serif text-2xl font-semibold">ΑΛΗΘΕIA</span>
        </Link>

        <div className="bg-white border-2 border-paper-300 p-8">
          {/* Loading State */}
          {status === 'loading' && (
            <>
              <div className="flex justify-center mb-6">
                <Loader2Icon className="w-16 h-16 text-sepia-600 animate-spin" />
              </div>
              <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
                Vérification en cours
              </h1>
              <p className="text-ink-light text-center mb-8">
                Veuillez patienter pendant que nous vérifions votre adresse email...
              </p>
            </>
          )}

          {/* Success State */}
          {status === 'success' && (
            <>
              <div className="flex justify-center mb-6">
                <CheckCircleIcon className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
                Email <span className="living-word">vérifié</span>
              </h1>
              <p className="text-ink-light text-center mb-8">
                {message || 'Votre adresse email a été vérifiée avec succès.'}
              </p>

              <div className="space-y-4">
                <Link href="/" className="block w-full">
                  <ButtonOrnate className="w-full">
                    Commencer l'exploration
                  </ButtonOrnate>
                </Link>
              </div>
            </>
          )}

          {/* Error State */}
          {status === 'error' && (
            <>
              <div className="flex justify-center mb-6">
                <AlertCircleIcon className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="font-serif text-3xl font-semibold text-ink text-center mb-2">
                Échec de la vérification
              </h1>
              <p className="text-ink-light text-center mb-8">
                {message || 'Une erreur est survenue lors de la vérification de votre email.'}
              </p>

              <div className="space-y-4">
                <Link href="/auth/resend-verification" className="block w-full">
                  <ButtonOrnate className="w-full">
                    Renvoyer l'email de vérification
                  </ButtonOrnate>
                </Link>
                <Link href="/auth/login" className="block w-full">
                  <button className="w-full py-3 border-2 border-sepia-600 text-sepia-600 hover:bg-sepia-50 transition-colors font-medium">
                    Retour à la connexion
                  </button>
                </Link>
              </div>
            </>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t-2 border-paper-200 text-center">
            <p className="text-sm text-ink-light">
              Besoin d'aide ?{' '}
              <Link href="/contact" className="text-sepia-600 hover:text-sepia-700 underline">
                Contactez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
