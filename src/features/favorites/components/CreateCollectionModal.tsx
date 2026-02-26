'use client';

import { useState } from 'react';
import { XIcon, PlusIcon } from '@/ui/components/CustomIcons';
import { createCollection } from '@/lib/actions/favorites';
import { useRouter } from 'next/navigation';

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLORS = [
  '#d97706', // amber
  '#059669', // emerald
  '#0891b2', // cyan
  '#7c3aed', // violet
  '#db2777', // pink
  '#dc2626', // red
  '#475569', // slate
];

export function CreateCollectionModal({ isOpen, onClose }: CreateCollectionModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await createCollection({
        name: name.trim(),
        description: description.trim() || undefined,
        isPublic,
        color: selectedColor || undefined,
      });

      router.refresh();
      handleClose();
    } catch (error) {
      console.error('Failed to create collection:', error);
      alert('Erreur lors de la création');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setIsPublic(false);
    setSelectedColor(null);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white shadow-2xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-ink-base">
            Nouvelle collection
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-paper-100 transition-colors"
            aria-label="Fermer"
          >
            <XIcon className="w-5 h-5 text-ink-light" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink-base mb-2">
              Nom *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ex: Stoïcisme essentiel"
              className="w-full px-4 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors"
              maxLength={100}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-ink-base mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Une brève description de cette collection..."
              className="w-full px-4 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none transition-colors resize-none"
              rows={3}
              maxLength={500}
            />
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-ink-base mb-2">
              Couleur
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedColor(null)}
                className={`
                  w-10 h-10 border-2 transition-all
                  ${selectedColor === null
                    ? 'border-sepia-600 ring-2 ring-sepia-200'
                    : 'border-paper-300 hover:border-paper-400'
                  }
                  bg-gradient-to-br from-paper-100 to-paper-200
                `}
                aria-label="Pas de couleur"
              />
              {COLORS.map(color => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`
                    w-10 h-10 border-2 transition-all
                    ${selectedColor === color
                      ? 'border-sepia-600 ring-2 ring-sepia-200'
                      : 'border-paper-300 hover:border-paper-400'
                    }
                  `}
                  style={{ backgroundColor: color }}
                  aria-label={`Couleur ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Public Toggle */}
          <div className="flex items-center justify-between p-4 bg-paper-50">
            <div>
              <label htmlFor="isPublic" className="text-sm font-medium text-ink-base">
                Rendre publique
              </label>
              <p className="text-xs text-ink-light mt-1">
                Partagez un lien avec n&apos;importe qui
              </p>
            </div>
            <button
              type="button"
              id="isPublic"
              onClick={() => setIsPublic(!isPublic)}
              className={`
                relative inline-flex h-6 w-11 items-center transition-colors
                ${isPublic ? 'bg-sepia-600' : 'bg-paper-300'}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform bg-white transition-transform
                  ${isPublic ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 border-2 border-paper-300 text-ink-base hover:bg-paper-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={!name.trim() || isSubmitting}
              className="flex-1 px-4 py-2 bg-sepia-600 text-white hover:bg-sepia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Création...'
              ) : (
                <>
                  <PlusIcon className="w-4 h-4" />
                  Créer
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
