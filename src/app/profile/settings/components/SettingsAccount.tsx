'use client';

import { useState } from 'react';
import Link from 'next/link';
import { KeyIcon, TrashIcon } from '@/ui/components/CustomIcons';
import { updateEmail, deleteAccount } from '@/lib/actions/settings';

interface SettingsAccountProps {
 email: string;
}

export function SettingsAccount({ email }: SettingsAccountProps) {
 const [newEmail, setNewEmail] = useState('');
 const [confirmation, setConfirmation] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [isDeleting, setIsDeleting] = useState(false);
 const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

 const handleEmailSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(null);

  try {
   const result = await updateEmail({ newEmail });

   if (result.success) {
    setMessage({
     type: 'success',
     text: 'Un email de vérification a été envoyé à votre nouvelle adresse email.',
    });
    setNewEmail('');
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsLoading(false);
  }
 };

 const handleDeleteAccount = async (e: React.FormEvent) => {
  e.preventDefault();

  if (confirmation !== 'DELETE') {
   setMessage({ type: 'error', text: 'Veuillez taper DELETE pour confirmer' });
   return;
  }

  if (!confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
   return;
  }

  setIsDeleting(true);
  setMessage(null);

  try {
   const result = await deleteAccount();

   if (result.success) {
    // User will be redirected and logged out
    window.location.href = '/';
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsDeleting(false);
  }
 };

 return (
  <section id="account" className="bg-white border border-2 border-paper-300 p-8 card-parchment">
   <div className="flex items-center gap-3 mb-6">
    <KeyIcon className="w-6 h-6 text-sepia-600" />
    <h2 className="font-serif text-2xl font-semibold text-ink">Compte</h2>
   </div>

   <div className="space-y-8">
    {/* Email Change */}
    <div>
     <h3 className="font-medium text-ink mb-3">Changer d'email</h3>
     <p className="text-sm text-ink-light mb-4">
      Un email de vérification sera envoyé à votre nouvelle adresse.
     </p>
     <form onSubmit={handleEmailSubmit} className="space-y-4">
      <div>
       <label htmlFor="newEmail" className="block text-sm font-medium text-ink mb-2">
        Nouvelle adresse email
       </label>
       <input
        type="email"
        id="newEmail"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        required
        className="w-full px-4 py-2 bg-paper-50 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
        placeholder="nouvel@email.com"
        disabled={isLoading}
       />
      </div>
      <button
       type="submit"
       disabled={isLoading || !newEmail}
       className="px-6 py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
       {isLoading ? 'Envoi en cours...' : 'Mettre à jour l\'email'}
      </button>
     </form>
    </div>

    {/* Password Change */}
    <div className="border-t border-paper-300 pt-6">
     <h3 className="font-medium text-ink mb-3">Mot de passe</h3>
     <p className="text-sm text-ink-light mb-4">
      Pour changer votre mot de passe, vous devrez vous reconnecter.
     </p>
     <Link
      href="/auth/reset-password"
      className="inline-flex items-center gap-2 px-4 py-2 text-sepia-600 border border-sepia-300 hover:bg-sepia-50 transition-all"
     >
      <KeyIcon className="w-4 h-4" />
      <span>Changer mon mot de passe</span>
     </Link>
    </div>

    {/* Message */}
    {message && (
     <div
      className={`p-4 border-2 ${
       message.type === 'success'
        ? 'bg-green-50 border-green-300 text-green-800'
        : 'bg-red-50 border-red-300 text-red-800'
      }`}
     >
      {message.text}
     </div>
    )}

    {/* Delete Account */}
    <div className="border-t-2 border-red-200 pt-6">
     <h3 className="font-medium text-red-700 mb-2">Zone de danger</h3>
     <p className="text-sm text-red-600 mb-4">
      La suppression de votre compte est permanente. Toutes vos données seront perdues.
     </p>

     <form onSubmit={handleDeleteAccount} className="space-y-4">
      <div>
       <label htmlFor="confirmation" className="block text-sm font-medium text-red-700 mb-2">
        Tapez <code className="px-2 py-1 bg-red-50 border border-red-200 ">DELETE</code> pour
        confirmer
       </label>
       <input
        type="text"
        id="confirmation"
        value={confirmation}
        onChange={(e) => setConfirmation(e.target.value)}
        required
        className="w-full px-4 py-2 bg-red-50 border-2 border-red-200 focus:border-red-400 focus:outline-none transition-colors"
        placeholder="DELETE"
        disabled={isDeleting}
       />
      </div>
      <button
       type="submit"
       disabled={isDeleting}
       className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
       <TrashIcon className="w-4 h-4" />
       <span>{isDeleting ? 'Suppression...' : 'Supprimer mon compte'}</span>
      </button>
     </form>
    </div>
   </div>
  </section>
 );
}
