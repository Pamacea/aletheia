'use client';

import { useState } from 'react';
import { CameraIcon } from '@/ui/components/CustomIcons';
import { Button } from '@/ui/atoms/Button';
import { Avatar } from '@/ui/molecules/Avatar';
import { getInitials } from '../hooks/useProfile';

export interface ProfileEditFormProps {
  name: string;
  bio?: string | null;
  image?: string | null;
  isLoading: boolean;
  onSave: (data: { name?: string; bio?: string }) => Promise<void>;
  onCancel: () => void;
}

/**
 * ProfileEditForm Component
 *
 * Editable form for user profile information including name, bio,
 * and avatar upload.
 */
export function ProfileEditForm({
  name,
  bio,
  image,
  isLoading,
  onSave,
  onCancel,
}: ProfileEditFormProps) {
  const [editedName, setEditedName] = useState(name);
  const [editedBio, setEditedBio] = useState(bio || '');

  const handleSave = async () => {
    await onSave({
      name: editedName !== name ? editedName : undefined,
      bio: editedBio !== bio ? editedBio : undefined,
    });
  };

  return (
    <>
      {/* Avatar Section */}
      <div className="absolute -top-16 left-6">
        <div className="relative">
          <Avatar
            src={image || undefined}
            initials={getInitials(name)}
            size="xl"
            className="border-4 border-white shadow-lg"
          />
          <button
            className="absolute bottom-0 right-0 p-2 bg-sepia-600 text-white hover:bg-sepia-700 transition-colors"
            title="Changer l'avatar"
            type="button"
          >
            <CameraIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end pt-4 gap-2">
        <Button
          onClick={onCancel}
          variant="ghost"
          size="sm"
          disabled={isLoading}
          className="gap-2"
        >
          Annuler
        </Button>
        <Button
          onClick={handleSave}
          variant="primary"
          size="sm"
          disabled={isLoading}
          className="gap-2"
        >
          Sauvegarder
        </Button>
      </div>

      {/* Editable Fields */}
      <div className="mt-12">
        {/* Name Input */}
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="font-serif text-3xl font-semibold text-ink bg-transparent border-b-2 border-sepia-300 focus:border-sepia-600 outline-none px-2 py-1 w-full max-w-md"
          placeholder="Votre nom"
        />

        {/* Bio Textarea */}
        <div className="mt-4">
          <textarea
            value={editedBio}
            onChange={(e) => setEditedBio(e.target.value)}
            placeholder="Racontez votre parcours philosophique..."
            className="w-full min-h-[100px] p-3 border-2 border-paper-300 focus:border-sepia-600 outline-none resize-y"
            maxLength={500}
          />
          {editedBio && (
            <p className="text-xs text-ink-lighter mt-1">
              {editedBio.length}/500 caractères
            </p>
          )}
        </div>
      </div>
    </>
  );
}
