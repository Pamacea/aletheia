'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/ui/molecules/ToastProvider';
import { deleteCollection, updateCollection } from '@/lib/actions/favorites';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string | null;
  itemCount: number;
  isPublic: boolean;
  shareSlug: string | null;
  coverImage: string | null;
  color: string | null;
  className?: string;
}

export function CollectionCard({
  id,
  name,
  description,
  itemCount,
  isPublic,
  shareSlug,
  coverImage,
  color,
  className = '',
}: CollectionCardProps) {
  const router = useRouter();
  const { addToast } = useToast();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editDesc, setEditDesc] = useState(description || '');
  const [isSaving, setIsSaving] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Context menu state
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close context menu on click outside or scroll
  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    window.addEventListener('click', close);
    window.addEventListener('scroll', close, true);
    return () => {
      window.removeEventListener('click', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [contextMenu]);

  const handleCardClick = () => {
    if (isEditOpen || contextMenu) return;
    router.push(`/profile/collections/${id}`);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleEdit = () => {
    setContextMenu(null);
    setEditName(name);
    setEditDesc(description || '');
    setIsEditOpen(true);
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;
    setIsSaving(true);
    try {
      await updateCollection({ id, name: editName.trim(), description: editDesc.trim() || undefined });
      addToast({ type: 'success', title: 'Collection modifiée', message: `"${editName.trim()}" mise à jour` });
      setIsEditOpen(false);
      router.refresh();
    } catch {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de modifier la collection' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteClick = () => {
    setContextMenu(null);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      await deleteCollection(id);
      addToast({ type: 'success', title: 'Supprimée', message: `"${name}" a été supprimée` });
      setIsDeleteOpen(false);
      router.refresh();
    } catch {
      addToast({ type: 'error', title: 'Erreur', message: 'Impossible de supprimer' });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleShare = async () => {
    setContextMenu(null);
    if (!shareSlug) {
      addToast({ type: 'error', title: 'Collection privée', message: 'Rendez-la publique pour partager' });
      return;
    }
    const url = `${window.location.origin}/profile/collections/shared/${shareSlug}`;
    await navigator.clipboard.writeText(url);
    addToast({ type: 'success', title: 'Lien copié', message: 'Le lien de partage est dans votre presse-papier' });
  };

  const defaultGradient = color
    ? `linear-gradient(135deg, ${color}22 0%, ${color}11 100%)`
    : 'linear-gradient(135deg, #f5f0e8 0%, #ebe4d6 100%)';

  return (
    <>
      <div
        onClick={handleCardClick}
        onContextMenu={handleContextMenu}
        className={`group bg-white border-2 border-paper-300 hover:border-sepia-400 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}
      >
        {/* Color banner */}
        <div className="h-16 sm:h-20 w-full" style={{ background: defaultGradient }}>
          {coverImage && (
            <img src={coverImage} alt={name} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-serif font-semibold text-ink line-clamp-1 group-hover:text-sepia-600 transition-colors mb-1">
            {name}
          </h3>

          <div className="flex items-center gap-2 text-[10px] text-ink-light mb-1">
            <span>{isPublic ? 'Public' : 'Privé'}</span>
            <span>·</span>
            <span>{itemCount} {itemCount === 1 ? 'élément' : 'éléments'}</span>
          </div>

          {description && (
            <p className="text-xs text-ink-light line-clamp-2">{description}</p>
          )}
        </div>
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          ref={menuRef}
          className="fixed z-50 bg-white border-2 border-paper-300 shadow-lg py-1 min-w-[140px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleShare}
            className="w-full text-left px-4 py-2 text-sm text-ink hover:bg-sepia-50 hover:text-sepia-600 transition-colors"
          >
            Partager
          </button>
          <button
            onClick={handleEdit}
            className="w-full text-left px-4 py-2 text-sm text-ink hover:bg-sepia-50 hover:text-sepia-600 transition-colors"
          >
            Modifier
          </button>
          <div className="border-t border-paper-200 my-1" />
          <button
            onClick={handleDeleteClick}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Supprimer
          </button>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsDeleteOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white border-2 border-paper-300 shadow-2xl w-[90vw] sm:w-[50vw] lg:w-[25vw] p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-serif text-base font-semibold text-ink mb-2">Supprimer la collection</h2>
            <p className="text-xs text-ink-light mb-4">
              Supprimer <strong className="text-ink">"{name}"</strong> ? Irréversible.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="flex-1 px-4 py-2 border-2 border-paper-300 text-ink text-sm hover:bg-paper-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white text-sm hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {isDeleting ? 'Suppression...' : 'Supprimer'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsEditOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white border-2 border-paper-300 shadow-2xl w-full max-w-md p-5 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-lg font-semibold text-ink">Modifier la collection</h2>
              <button onClick={() => setIsEditOpen(false)} className="text-ink-light hover:text-ink text-xl leading-none">&times;</button>
            </div>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1">Nom</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none text-sm"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1">Description</label>
                <textarea
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none text-sm resize-none"
                  rows={3}
                  maxLength={500}
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsEditOpen(false)} className="flex-1 px-4 py-2 border-2 border-paper-300 text-ink text-sm hover:bg-paper-50 transition-colors">
                  Annuler
                </button>
                <button type="submit" disabled={!editName.trim() || isSaving} className="flex-1 px-4 py-2 bg-sepia-600 text-paper-50 text-sm hover:bg-sepia-700 disabled:opacity-50 transition-colors">
                  {isSaving ? 'Enregistrement...' : 'Enregistrer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
