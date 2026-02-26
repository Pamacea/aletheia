'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getConceptPath } from '@/lib/actions/concepts';
import { cn } from '@/lib/utils';

interface ConceptPathFinderProps {
  fromSlug: string;
  fromName: string;
}

interface PathStep {
  id: string;
  name: string;
  slug: string;
  category: {
    name: string;
    color: string | null;
  } | null;
}

interface PathResult {
  path: PathStep[];
  relations: Array<{
    from: string;
    to: string;
    type: string;
    description: string | null;
  }>;
}

export function ConceptPathFinder({ fromSlug, fromName }: ConceptPathFinderProps) {
  const router = useRouter();
  const [targetSlug, setTargetSlug] = useState('');
  const [path, setPath] = useState<PathResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!targetSlug.trim() || targetSlug === fromSlug) {
      setError('Veuillez entrer un concept différent');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPath(null);

    try {
      const result = await getConceptPath(fromSlug, targetSlug);

      if (!result) {
        setError('Aucun chemin trouvé entre ces concepts');
        return;
      }

      setPath(result);
    } catch (err) {
      setError('Erreur lors de la recherche du chemin');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConceptClick = (slug: string) => {
    router.push(`/conceptuaire/${slug}`);
  };

  const getRelationLabel = (type: string): string => {
    const labels: Record<string, string> = {
      RELATED: 'Connexe',
      OPPOSES: 'Oppose',
      BUILDS_ON: 'Construit',
      INFLUENCES: 'Influence',
      CRITIQUES: 'Critique',
      EXTENDS: 'Étend',
      CLARIFIES: 'Clarifie',
      EXEMPLIFIES: 'Exemplifie',
    };
    return labels[type] || type;
  };

  const getRelationColor = (type: string): string => {
    const colors: Record<string, string> = {
      RELATED: 'bg-blue-100 text-blue-700',
      OPPOSES: 'bg-red-100 text-red-700',
      BUILDS_ON: 'bg-green-100 text-green-700',
      INFLUENCES: 'bg-purple-100 text-purple-700',
      CRITIQUES: 'bg-orange-100 text-orange-700',
      EXTENDS: 'bg-teal-100 text-teal-700',
      CLARIFIES: 'bg-yellow-100 text-yellow-700',
      EXEMPLIFIES: 'bg-indigo-100 text-indigo-700',
    };
    return colors[type] || 'bg-paper-200 text-ink';
  };

  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">
          <span className="living-word">Chemin vers...</span>
        </h2>

        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={targetSlug}
              onChange={(e) => setTargetSlug(e.target.value)}
              placeholder="Entrez le slug du concept cible"
              className="flex-1 px-4 py-2 border-2 border-paper-300 rounded-lg focus:border-sepia-600 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                'px-6 py-2 rounded-lg font-medium transition-colors',
                'bg-sepia-600 text-paper-50 hover:bg-sepia-700',
                'disabled:bg-paper-200 disabled:text-ink-light'
              )}
            >
              {isLoading ? 'Recherche...' : 'Trouver le chemin'}
            </button>
          </div>
        </form>

        {/* Error message */}
        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-sm sm:text-base text-red-700">{error}</p>
          </div>
        )}

        {/* Path result */}
        {path && (
          <div className="space-y-3 sm:space-y-4">
            <div className="text-xs sm:text-sm text-ink-light mb-3 sm:mb-4">
              Chemin trouvé ({path.path.length} étapes):
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {path.path.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Concept node */}
                  <button
                    onClick={() => handleConceptClick(step.slug)}
                    className={cn(
                      'px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border-2 transition-all text-sm sm:text-base',
                      'hover:shadow-md hover:scale-105',
                      index === 0
                        ? 'bg-sepia-600 text-paper-50 border-sepia-800'
                        : 'bg-paper-100 text-ink border-paper-300 hover:border-sepia-400'
                    )}
                  >
                    <div className="font-semibold text-sm sm:text-base">{step.name}</div>
                    {step.category && (
                      <div className="text-xs mt-0.5 sm:mt-1 opacity-80">
                        {step.category.name}
                      </div>
                    )}
                  </button>

                  {/* Relation arrow */}
                  {index < path.path.length - 1 && (
                    <div className="flex flex-col items-center mx-1 sm:mx-2">
                      <div
                        className={cn(
                          'px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium rounded',
                          getRelationColor(
                            path.relations.find(
                              (r) => r.from === step.id
                            )?.type || 'RELATED'
                          )
                        )}
                      >
                        {getRelationLabel(
                          path.relations.find(
                            (r) => r.from === step.id
                          )?.type || 'RELATED'
                        )}
                      </div>
                      <div className="text-sepia-600 text-base sm:text-lg">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Path details */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-paper-50 rounded-lg">
              <h3 className="font-semibold text-ink mb-2 sm:mb-3 text-sm sm:text-base">Détails du parcours</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {path.relations.map((relation, index) => {
                  const fromStep = path.path[index];
                  const toStep = path.path[index + 1];

                  return (
                    <div
                      key={`${relation.from}-${relation.to}`}
                      className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-sepia-600">
                        {fromStep?.name}
                      </span>
                      <span className="text-ink-light">→</span>
                      <span
                        className={cn(
                          'px-2 py-0.5 text-xs font-medium rounded',
                          getRelationColor(relation.type)
                        )}
                      >
                        {getRelationLabel(relation.type)}
                      </span>
                      <span className="text-ink-light">→</span>
                      <span className="font-semibold text-sepia-600">
                        {toStep?.name}
                      </span>
                      {relation.description && (
                        <span className="text-ink-light italic">
                          ({relation.description})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
