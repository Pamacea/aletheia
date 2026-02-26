'use client';

import { useState } from 'react';
import { Avatar } from '@/ui/molecules/Avatar';
import { Button } from '@/ui/atoms/Button';
import { Badge } from '@/ui/molecules/Badge';
import {
 EditIcon,
 CheckIcon,
 XIcon,
 CameraIcon,
 CalendarIcon,
 ShieldIcon,
} from '@/ui/components/CustomIcons';
import { cn } from '@/lib/utils/cn';

interface ProfileHeaderProps {
 name: string;
 email: string;
 image?: string | null;
 bio?: string | null;
 joinDate: Date;
 onEdit?: (data: { name?: string; bio?: string }) => Promise<void>;
}

export function ProfileHeader({
 name,
 email,
 image,
 bio,
 joinDate,
 onEdit,
}: ProfileHeaderProps) {
 const [isEditing, setIsEditing] = useState(false);
 const [editedName, setEditedName] = useState(name);
 const [editedBio, setEditedBio] = useState(bio || '');
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSave = async () => {
  if (!onEdit) return;

  setIsSubmitting(true);
  try {
   await onEdit({
    name: editedName !== name ? editedName : undefined,
    bio: editedBio !== bio ? editedBio : undefined,
   });
   setIsEditing(false);
  } catch (error) {
   console.error('Failed to update profile:', error);
  } finally {
   setIsSubmitting(false);
  }
 };

 const handleCancel = () => {
  setEditedName(name);
  setEditedBio(bio || '');
  setIsEditing(false);
 };

 const getInitials = (name: string) => {
  return name
   .split(' ')
   .map(n => n[0])
   .join('')
   .toUpperCase()
   .slice(0, 2);
 };

 return (
  <div className="bg-white border-2 border-paper-300 overflow-hidden">
   {/* Cover Image Gradient */}
   <div className="h-32 bg-gradient-to-r from-sepia-900 via-sepia-700 to-sepia-500 relative">
    <div className="absolute inset-0 bg-[url('/data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
   </div>

   <div className="relative px-6 pb-6">
    {/* Avatar */}
    <div className="absolute -top-16 left-6">
     <div className="relative">
      <Avatar
       src={image || undefined}
       initials={getInitials(name)}
       size="xl"
       className="border-4 border-white shadow-lg"
      />
      {isEditing && (
       <button
        className="absolute bottom-0 right-0 p-2 bg-sepia-600 text-white hover:bg-sepia-700 transition-colors"
        title="Changer l'avatar"
       >
        <CameraIcon className="w-4 h-4" />
       </button>
      )}
     </div>
    </div>

    {/* Action Buttons */}
    {onEdit && (
     <div className="flex justify-end pt-4 gap-2">
      {!isEditing ? (
       <Button
        onClick={() => setIsEditing(true)}
        variant="secondary"
        size="sm"
        className="gap-2"
       >
        <EditIcon className="w-4 h-4" />
        Modifier
       </Button>
      ) : (
       <>
        <Button
         onClick={handleCancel}
         variant="ghost"
         size="sm"
         disabled={isSubmitting}
         className="gap-2"
        >
         <XIcon className="w-4 h-4" />
         Annuler
        </Button>
        <Button
         onClick={handleSave}
         variant="primary"
         size="sm"
         disabled={isSubmitting}
         className="gap-2"
        >
         <CheckIcon className="w-4 h-4" />
         Sauvegarder
        </Button>
       </>
      )}
     </div>
    )}

    <div className="mt-12">
     {/* Name */}
     {isEditing ? (
      <input
       type="text"
       value={editedName}
       onChange={(e) => setEditedName(e.target.value)}
       className="font-serif text-3xl font-semibold text-ink bg-transparent border-b-2 border-sepia-300 focus:border-sepia-600 outline-none px-2 py-1 w-full max-w-md"
       placeholder="Votre nom"
      />
     ) : (
      <h1 className="font-serif text-3xl font-semibold text-ink">
       {name}
      </h1>
     )}

     {/* Email */}
     <p className="text-ink-light mt-1">{email}</p>

     {/* Badges */}
     <div className="flex flex-wrap gap-2 mt-3">
      <Badge variant="primary" className="gap-1">
       <ShieldIcon className="w-3 h-3" />
       Membre Vérifié
      </Badge>
      <Badge variant="secondary" className="gap-1">
       <CalendarIcon className="w-3 h-3" />
       Depuis {new Date(joinDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
      </Badge>
     </div>

     {/* Bio */}
     <div className="mt-4">
      {isEditing ? (
       <textarea
        value={editedBio}
        onChange={(e) => setEditedBio(e.target.value)}
        placeholder="Racontez votre parcours philosophique..."
        className="w-full min-h-[100px] p-3 border-2 border-paper-300 focus:border-sepia-600 outline-none resize-y"
        maxLength={500}
       />
      ) : (
       <div className="text-ink-light bg-paper-50 p-4 border border-paper-200">
        {bio ? (
         <p className="whitespace-pre-wrap">{bio}</p>
        ) : (
         <p className="text-ink-lighter italic">
          Aucune bio pour le moment...
         </p>
        )}
       </div>
      )}
      {isEditing && editedBio && (
       <p className="text-xs text-ink-lighter mt-1">
        {editedBio.length}/500 caractères
       </p>
      )}
     </div>
    </div>
   </div>
  </div>
 );
}
