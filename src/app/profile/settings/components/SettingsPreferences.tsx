'use client';

import { useState } from 'react';
import { CogIcon } from '@/ui/icons/UIIcons';
import { updatePreferences } from '@/lib/actions/settings';

interface SettingsPreferencesProps {
 initialData: {
  theme: 'light' | 'dark' | 'system';
  language: 'fr' | 'en' | 'es' | 'de';
  fontSize: 'small' | 'medium' | 'large';
 };
}

export function SettingsPreferences({ initialData }: SettingsPreferencesProps) {
 const [theme, setTheme] = useState(initialData.theme);
 const [language, setLanguage] = useState(initialData.language);
 const [fontSize, setFontSize] = useState(initialData.fontSize);
 const [isLoading, setIsLoading] = useState(false);
 const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(null);

  try {
   const result = await updatePreferences({ theme, language, fontSize });

   if (result.success) {
    setMessage({ type: 'success', text: 'Préférences mises à jour avec succès' });
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
    <CogIcon className="w-6 h-6 text-sepia-600" />
    <h2 className="font-serif text-2xl font-semibold text-ink">Préférences</h2>
   </div>

   <form onSubmit={handleSubmit} className="space-y-6">
    {/* Theme */}
    <div>
     <label className="block text-sm font-medium text-ink mb-3">Thème</label>
     <div className="flex gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === 'light'}
        onChange={() => setTheme('light')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-ink">Clair</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="theme"
        value="dark"
        checked={theme === 'dark'}
        onChange={() => setTheme('dark')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-ink">Sombre</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="theme"
        value="system"
        checked={theme === 'system'}
        onChange={() => setTheme('system')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-ink">Système</span>
      </label>
     </div>
    </div>

    {/* Language */}
    <div>
     <label htmlFor="language" className="block text-sm font-medium text-ink mb-2">
      Langue
     </label>
     <select
      id="language"
      value={language}
      onChange={(e) => setLanguage(e.target.value as any)}
      className="w-full px-4 py-2 bg-paper-50 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
      disabled={isLoading}
     >
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
     </select>
    </div>

    {/* Font Size */}
    <div>
     <label className="block text-sm font-medium text-ink mb-3">Taille de police</label>
     <div className="flex gap-4">
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="fontSize"
        value="small"
        checked={fontSize === 'small'}
        onChange={() => setFontSize('small')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-sm text-ink">Petit</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="fontSize"
        value="medium"
        checked={fontSize === 'medium'}
        onChange={() => setFontSize('medium')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-base text-ink">Moyen</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
       <input
        type="radio"
        name="fontSize"
        value="large"
        checked={fontSize === 'large'}
        onChange={() => setFontSize('large')}
        className="w-4 h-4 text-sepia-600 border-paper-300 focus:ring-sepia-600"
        disabled={isLoading}
       />
       <span className="text-lg text-ink">Grand</span>
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
     {isLoading ? 'Enregistrement...' : 'Sauvegarder les préférences'}
    </button>
   </form>
  </section>
 );
}
