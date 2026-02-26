'use client';

import { useState, useTransition } from 'react';
import { BookmarkIcon, PlusIcon, CheckIcon } from '@/ui/components/CustomIcons';
import { addToCollection, getCollections } from '@/lib/actions/favorites';

interface AddToCollectionButtonProps {
  entityType: 'CONCEPT' | 'PHILOSOPHER' | 'CURRENT' | 'TEXT' | 'SOURCE' | 'QUOTE';
  entityId: string;
  variant?: 'icon' | 'button';
  className?: string;
}

export function AddToCollectionButton({
  entityType,
  entityId,
  variant = 'button',
  className = '',
}: AddToCollectionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState<Array<{ id: string; name: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [addedCollections, setAddedCollections] = useState<Set<string>>(new Set());

  const handleClick = () => {
    if (!isOpen && collections.length === 0) {
      setIsLoading(true);
      startTransition(async () => {
        try {
          const userCollections = await getCollections();
          setCollections(userCollections);
        } catch (error) {
          console.error('Failed to load collections:', error);
        } finally {
          setIsLoading(false);
        }
      });
    }
    setIsOpen(!isOpen);
  };

  const handleAddToCollection = async (collectionId: string) => {
    startTransition(async () => {
      try {
        await addToCollection({
          collectionId,
          entityType,
          entityId,
        });
        setAddedCollections(prev => new Set(prev).add(collectionId));
        setTimeout(() => setIsOpen(false), 500);
      } catch (error) {
        console.error('Failed to add to collection:', error);
      }
    });
  };

  const isAdded = (collectionId: string) => addedCollections.has(collectionId);

  if (variant === 'icon') {
    return (
      <div className="relative">
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={`
            p-2 transition-all duration-200
            text-ink-light hover:text-sepia-700 hover:bg-paper-100
            ${className}
          `}
          aria-label="Ajouter à une collection"
        >
          <BookmarkIcon className="w-5 h-5" />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl border border-paper-200 z-20">
              <div className="p-3">
                <h3 className="text-sm font-semibold text-ink-base mb-2">
                  Ajouter à une collection
                </h3>
                {isLoading || isPending ? (
                  <div className="text-center py-4 text-sm text-ink-light">
                    Chargement...
                  </div>
                ) : collections.length === 0 ? (
                  <div className="text-center py-4 text-sm text-ink-light">
                    Aucune collection. Créez-en une nouvelle !
                  </div>
                ) : (
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    {collections.map(collection => (
                      <button
                        key={collection.id}
                        onClick={() => handleAddToCollection(collection.id)}
                        disabled={isAdded(collection.id)}
                        className={`
                          w-full text-left px-3 py-2 text-sm transition-all duration-200
                          flex items-center justify-between gap-2
                          ${isAdded(collection.id)
                            ? 'bg-green-50 text-green-700 cursor-default'
                            : 'hover:bg-paper-100 text-ink-base'
                          }
                        `}
                      >
                        <span className="truncate">{collection.name}</span>
                        {isAdded(collection.id) && (
                          <CheckIcon className="w-4 h-4 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`
          flex items-center gap-2 px-4 py-2 border-2 transition-all duration-200
          bg-paper-50 border-paper-300 text-ink-light hover:border-sepia-600 hover:bg-paper-100
          ${className}
        `}
      >
        <BookmarkIcon className="w-5 h-5" />
        <span className="text-sm font-medium">
          Ajouter à une collection
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-xl border border-paper-200 z-20">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-ink-base mb-3">
                Ajouter à une collection
              </h3>
              {isLoading || isPending ? (
                <div className="text-center py-6 text-sm text-ink-light">
                  Chargement...
                </div>
              ) : collections.length === 0 ? (
                <div className="text-center py-6 text-sm text-ink-light">
                  Aucune collection.
                  <br />
                  Créez-en une nouvelle !
                </div>
              ) : (
                <div className="space-y-1 max-h-72 overflow-y-auto">
                  {collections.map(collection => (
                    <button
                      key={collection.id}
                      onClick={() => handleAddToCollection(collection.id)}
                      disabled={isAdded(collection.id)}
                      className={`
                        w-full text-left px-4 py-3 text-sm transition-all duration-200
                        flex items-center justify-between gap-2
                        ${isAdded(collection.id)
                          ? 'bg-green-50 text-green-700 cursor-default'
                          : 'hover:bg-paper-100 text-ink-base'
                        }
                      `}
                    >
                      <span className="truncate">{collection.name}</span>
                      {isAdded(collection.id) && (
                        <CheckIcon className="w-4 h-4 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
