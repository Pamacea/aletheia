'use client';

import { useState } from 'react';
import { LockIcon, DownloadIcon } from '@/ui/components/CustomIcons';
import { updatePrivacy, exportData } from '@/lib/actions/settings';

interface SettingsPrivacyProps {
 initialData: {
  profileVisibility: 'public' | 'private';
  showProgress: boolean;
  showReadingList: boolean;
 };
}

export function SettingsPrivacy({ initialData }: SettingsPrivacyProps) {
 const [profileVisibility, setProfileVisibility] = useState(initialData.profileVisibility);
 const [showProgress, setShowProgress] = useState(initialData.showProgress);
 const [showReadingList, setShowReadingList] = useState(initialData.showReadingList);
 const [isLoading, setIsLoading] = useState(false);
 const [isExporting, setIsExporting] = useState(false);
 const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(null);

  try {
   const result = await updatePrivacy({
    profileVisibility,
    showProgress,
    showReadingList,
   });

   if (result.success) {
    setMessage({ type: 'success', text: 'Paramètres de confidentialité mis à jour' });
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsLoading(false);
  }
 };

 const handleExport = async () => {
  setIsExporting(true);
  setMessage(null);

  try {
   const result = await exportData();

   if (result.success && result.data) {
    // Create a JSON file and download it
    const blob = new Blob([JSON.stringify(result.data.data, null, 2)], {
     type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aletheia-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setMessage({ type: 'success', text: 'Données exportées avec succès' });
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsExporting(false);
  }
 };

 return (
  <section className="bg-white border border-2 border-paper-300 p-8 card-parchment">
   <div className="flex items-center gap-3 mb-6">
    <LockIcon className="w-6 h-6 text-sepia-600" />
    <h2 className="font-serif text-2xl font-semibold text-ink">Confidentialité</h2>
   </div>

   <form onSubmit={handleSubmit} className="space-y-6">
    {/* Profile Visibility */}
    <div>
     <label className="block text-sm font-medium text-ink mb-3">Visibilité du profil</label>
     <div className="flex gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="profileVisibility"
        value="public"
        checked={profileVisibility === 'public'}
        onChange={() => setProfileVisibility('public')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-ink">Public</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="profileVisibility"
        value="private"
        checked={profileVisibility === 'private'}
        onChange={() => setProfileVisibility('private')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-ink">Privé</span>
      </label>
     </div>
    </div>

    <div className="space-y-4 border-t border-paper-300 pt-4">
     <label className="flex items-center justify-between cursor-pointer">
      <div>
       <p className="font-medium text-ink">Afficher ma progression</p>
       <p className="text-sm text-ink-light">Permettre aux autres de voir mes statistiques</p>
      </div>
      <input
       type="checkbox"
       checked={showProgress}
       onChange={(e) => setShowProgress(e.target.checked)}
       className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
       disabled={isLoading}
      />
     </label>

     <div className="border-t border-paper-300 pt-4">
      <label className="flex items-center justify-between cursor-pointer">
       <div>
        <p className="font-medium text-ink">Afficher ma liste de lecture</p>
        <p className="text-sm text-ink-light">Partager mes textes et citations</p>
       </div>
       <input
        type="checkbox"
        checked={showReadingList}
        onChange={(e) => setShowReadingList(e.target.checked)}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600 "
        disabled={isLoading}
       />
      </label>
     </div>
    </div>

    {/* Data Export */}
    <div className="border-t border-paper-300 pt-6">
     <h3 className="font-medium text-ink mb-3">Export de données</h3>
     <p className="text-sm text-ink-light mb-4">Téléchargez toutes vos données au format JSON</p>
     <button
      type="button"
      onClick={handleExport}
      disabled={isExporting}
      className="inline-flex items-center gap-2 px-4 py-2 text-sepia-600 border border-sepia-300 hover:bg-sepia-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
     >
      <DownloadIcon className="w-4 h-4" />
      <span>{isExporting ? 'Exportation...' : 'Exporter mes données'}</span>
     </button>
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
     {isLoading ? 'Enregistrement...' : 'Sauvegarder la confidentialité'}
    </button>
   </form>
  </section>
 );
}
