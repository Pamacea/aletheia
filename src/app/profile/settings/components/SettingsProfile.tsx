'use client';

import { useState } from 'react';
import { UserIcon, CameraIcon } from '@/ui/components/CustomIcons';
import { updateProfile, deleteAvatar } from '@/lib/actions/settings';

interface SettingsProfileProps {
 initialData: {
  name: string | null;
  email: string;
  image: string | null;
  bio: string | null;
 };
}

export function SettingsProfile({ initialData }: SettingsProfileProps) {
 const [name, setName] = useState(initialData.name || '');
 const [bio, setBio] = useState(initialData.bio || '');
 const [image, setImage] = useState(initialData.image);
 const [isLoading, setIsLoading] = useState(false);
 const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage(null);

  try {
   const result = await updateProfile({ name, bio, image: image || undefined });

   if (result.success) {
    setMessage({ type: 'success', text: 'Profil mis à jour avec succès' });
   } else {
    setMessage({ type: 'error', text: result.error || 'Une erreur est survenue' });
   }
  } catch (error) {
   setMessage({ type: 'error', text: 'Une erreur est survenue' });
  } finally {
   setIsLoading(false);
  }
 };

 const handleDeleteAvatar = async () => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer votre photo de profil ?')) {
   return;
  }

  setIsLoading(true);
  setMessage(null);

  try {
   const result = await deleteAvatar();

   if (result.success) {
    setImage(null);
    setMessage({ type: 'success', text: 'Photo supprimée avec succès' });
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
    <UserIcon className="w-6 h-6 text-sepia-600" />
    <h2 className="font-serif text-2xl font-semibold text-ink">Profil</h2>
   </div>

   <form onSubmit={handleSubmit} className="space-y-6">
    {/* Avatar */}
    <div className="flex items-center gap-6">
     <div className="w-20 h-20 bg-sepia-100 border-2 border-sepia-300 flex items-center justify-center overflow-hidden">
      {image ? (
       <img
        src={image}
        alt={name || 'Avatar'}
        className="w-full h-full object-cover"
       />
      ) : (
       <span className="text-2xl font-serif font-semibold text-sepia-600">
        {name?.charAt(0).toUpperCase() || 'U'}
       </span>
      )}
     </div>
     <div>
      <p className="text-ink-light mb-2">Photo de profil</p>
      <div className="flex gap-2">
       <button
        type="button"
        className="px-4 py-2 text-sepia-600 border border-sepia-300 hover:bg-sepia-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
       >
        <CameraIcon className="w-4 h-4 inline mr-1" />
        Changer
       </button>
       {image && (
        <button
         type="button"
         onClick={handleDeleteAvatar}
         className="px-4 py-2 text-red-600 border border-red-300 hover:bg-red-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
         disabled={isLoading}
        >
         Supprimer
        </button>
       )}
      </div>
     </div>
    </div>

    {/* Name */}
    <div>
     <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
      Nom d'affichage
     </label>
     <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-4 py-2 bg-paper-50 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
      placeholder="Votre nom"
      disabled={isLoading}
     />
    </div>

    {/* Email (read-only) */}
    <div>
     <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
      Email
     </label>
     <input
      type="email"
      id="email"
      value={initialData.email}
      disabled
      className="w-full px-4 py-2 bg-paper-100 border-2 border-paper-300 text-ink-light cursor-not-allowed"
     />
     <p className="text-sm text-ink-lighter mt-1">
      Pour changer votre email, allez dans la section{' '}
      <a href="#account" className="text-sepia-600 hover:underline">
       Compte
      </a>
     </p>
    </div>

    {/* Bio */}
    <div>
     <label htmlFor="bio" className="block text-sm font-medium text-ink mb-2">
      Bio
     </label>
     <textarea
      id="bio"
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      rows={4}
      className="w-full px-4 py-2 bg-paper-50 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors resize-none"
      placeholder="Parlez-nous de vous..."
      disabled={isLoading}
     />
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
     {isLoading ? 'Enregistrement...' : 'Sauvegarder le profil'}
    </button>
   </form>
  </section>
 );
}
