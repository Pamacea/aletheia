'use client';

import { useState } from 'react';
import { BellIcon } from '@/ui/components/CustomIcons';
import { updateNotifications } from '@/lib/actions/settings';

interface SettingsNotificationsProps {
 initialData: {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyDigest: boolean;
  reviewReminders: boolean;
 };
}

export function SettingsNotifications({ initialData }: SettingsNotificationsProps) {
 const [emailNotifications, setEmailNotifications] = useState(initialData.emailNotifications);
 const [pushNotifications, setPushNotifications] = useState(initialData.pushNotifications);
 const [weeklyDigest, setWeeklyDigest] = useState(initialData.weeklyDigest);
 const [reviewReminders, setReviewReminders] = useState(initialData.reviewReminders);
 const [isLoading, setIsLoading] = useState(false);
 const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(null);

  try {
   const result = await updateNotifications({
    emailNotifications,
    pushNotifications,
    weeklyDigest,
    reviewReminders,
   });

   if (result.success) {
    setMessage({ type: 'success', text: 'Notifications mises à jour avec succès' });
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsLoading(false);
  }
 };

 return (
  <section className="bg-white border border-2 border-paper-300 p-8 card-parchment">
   <div className="flex items-center gap-3 mb-6">
    <BellIcon className="w-6 h-6 text-sepia-600" />
    <h2 className="font-serif text-2xl font-semibold text-ink">Notifications</h2>
   </div>

   <form onSubmit={handleSubmit} className="space-y-6">
    <div className="space-y-4">
     <label className="flex items-center justify-between cursor-pointer">
      <div>
       <p className="font-medium text-ink">Notifications par email</p>
       <p className="text-sm text-ink-light">Recevoir les notifications importantes par email</p>
      </div>
      <input
       type="checkbox"
       checked={emailNotifications}
       onChange={(e) => setEmailNotifications(e.target.checked)}
       className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
       disabled={isLoading}
      />
     </label>

     <div className="border-t border-paper-300 pt-4">
      <label className="flex items-center justify-between cursor-pointer">
       <div>
        <p className="font-medium text-ink">Notifications push</p>
        <p className="text-sm text-ink-light">Notifications dans le navigateur</p>
       </div>
       <input
        type="checkbox"
        checked={pushNotifications}
        onChange={(e) => setPushNotifications(e.target.checked)}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
        disabled={isLoading}
       />
      </label>
     </div>

     <div className="border-t border-paper-300 pt-4">
      <label className="flex items-center justify-between cursor-pointer">
       <div>
        <p className="font-medium text-ink">Digest hebdomadaire</p>
        <p className="text-sm text-ink-light">Résumé hebdomadaire de votre progression</p>
       </div>
       <input
        type="checkbox"
        checked={weeklyDigest}
        onChange={(e) => setWeeklyDigest(e.target.checked)}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
        disabled={isLoading}
       />
      </label>
     </div>

     <div className="border-t border-paper-300 pt-4">
      <label className="flex items-center justify-between cursor-pointer">
       <div>
        <p className="font-medium text-ink">Rappels de révision</p>
        <p className="text-sm text-ink-light">Notifications pour les cartes à réviser</p>
       </div>
       <input
        type="checkbox"
        checked={reviewReminders}
        onChange={(e) => setReviewReminders(e.target.checked)}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
        disabled={isLoading}
       />
      </label>
     </div>
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

    <button
     type="submit"
     disabled={isLoading}
     className="px-6 py-3 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    >
     {isLoading ? 'Enregistrement...' : 'Sauvegarder les notifications'}
    </button>
   </form>
  </section>
 );
}
