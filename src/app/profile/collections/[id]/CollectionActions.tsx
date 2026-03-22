'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '@/ui/molecules/ToastProvider';

interface CollectionActionsProps {
  collectionId: string;
  shareSlug: string | null;
  isPublic: boolean;
}

export function CollectionActions({ collectionId, shareSlug, isPublic }: CollectionActionsProps) {
  const router = useRouter();
  const { addToast } = useToast();

  const handleShare = async () => {
    if (!shareSlug) {
      addToast({ type: 'error', title: 'Collection privée', message: 'Rendez-la publique pour partager' });
      return;
    }
    const url = `${window.location.origin}/profile/collections/shared/${shareSlug}`;
    await navigator.clipboard.writeText(url);
    addToast({ type: 'success', title: 'Lien copié', message: 'Lien de partage dans le presse-papier' });
  };

  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      <button
        onClick={handleShare}
        className="px-2.5 py-1.5 text-xs text-ink-light hover:text-sepia-600 hover:bg-sepia-50 transition-colors"
      >
        Partager
      </button>
      <button
        onClick={() => router.push(`/profile/collections/${collectionId}/edit`)}
        className="px-2.5 py-1.5 text-xs text-ink-light hover:text-sepia-600 hover:bg-sepia-50 transition-colors"
      >
        Modifier
      </button>
    </div>
  );
}
