'use client';

import { useState } from 'react';
import { usePathFinder } from '@/lib/graph/hooks';
import { SearchIcon, ArrowRightIcon } from '@/ui';

interface PathFinderProps {
  concepts: Map<string, { name: string; category?: string }>;
}

export function PathFinder({ concepts }: PathFinderProps) {
  const [fromConcept, setFromConcept] = useState('');
  const [toConcept, setToConcept] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { paths, shortestPath, isCalculating, calculatePaths, hasPath } = usePathFinder(
    fromConcept,
    toConcept,
    concepts
  );

  const conceptOptions = Array.from(concepts.entries()).map(([slug, data]) => ({
    slug,
    name: data.name,
  }));

  const handleFindPath = () => {
    if (fromConcept && toConcept && fromConcept !== toConcept) {
      calculatePaths();
      setShowResults(true);
    }
  };

  const handleSwap = () => {
    setFromConcept(toConcept);
    setToConcept(fromConcept);
    setShowResults(false);
  };

  return (
    <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6">
      <h3 className="font-serif text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-2">
        <span className="living-word">Trouver un Chemin</span>
        <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sepia-600" />
      </h3>

      <div className="space-y-3 sm:space-y-4">
        {/* From concept */}
        <div>
          <label htmlFor="from-concept" className="block text-sm font-medium text-ink mb-1.5 sm:mb-2">
            Concept de départ
          </label>
          <select
            id="from-concept"
            value={fromConcept}
            onChange={(e) => {
              setFromConcept(e.target.value);
              setShowResults(false);
            }}
            className="w-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 bg-paper-50 text-ink"
          >
            <option value="">Sélectionner un concept...</option>
            {conceptOptions.map(option => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Swap button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            disabled={!fromConcept || !toConcept}
            className="p-2 rounded-full border-2 border-paper-300 hover:border-sepia-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRightIcon className="w-5 h-5 text-sepia-600 rotate-90" />
          </button>
        </div>

        {/* To concept */}
        <div>
          <label htmlFor="to-concept" className="block text-sm font-medium text-ink mb-1.5 sm:mb-2">
            Concept d'arrivée
          </label>
          <select
            id="to-concept"
            value={toConcept}
            onChange={(e) => {
              setToConcept(e.target.value);
              setShowResults(false);
            }}
            className="w-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 bg-paper-50 text-ink"
          >
            <option value="">Sélectionner un concept...</option>
            {conceptOptions
              .filter(option => option.slug !== fromConcept)
              .map(option => (
                <option key={option.slug} value={option.slug}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        {/* Find button */}
        <button
          onClick={handleFindPath}
          disabled={!fromConcept || !toConcept || fromConcept === toConcept || isCalculating}
          className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-sepia-600 hover:bg-sepia-700 disabled:bg-paper-200 disabled:text-ink-lighter text-paper-50 font-medium transition-colors"
        >
          {isCalculating ? 'Recherche en cours...' : 'Trouver le chemin'}
        </button>

        {/* Results */}
        {showResults && (
          <PathResults
            shortestPath={shortestPath}
            paths={paths}
            hasPath={hasPath}
            concepts={concepts}
          />
        )}
      </div>
    </div>
  );
}

interface PathResultsProps {
  shortestPath: string[] | null;
  paths: Array<{ path: string[]; edges: any[]; totalStrength: number; length: number }>;
  hasPath: boolean;
  concepts: Map<string, { name: string; category?: string }>;
}

function PathResults({ shortestPath, paths, hasPath, concepts }: PathResultsProps) {
  if (!hasPath) {
    return (
      <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-paper-100 border-2 border-paper-200 text-center">
        <p className="text-sm sm:text-base text-ink-light">
          Aucun chemin trouvé entre ces concepts
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      {/* Shortest path */}
      {shortestPath && (
        <div className="p-3 sm:p-4 bg-sepia-50 border-2 border-sepia-200">
          <h4 className="font-semibold text-ink mb-2 sm:mb-3 text-sm sm:text-base">Chemin le plus court</h4>
          <PathVisualization path={shortestPath} concepts={concepts} />
        </div>
      )}

      {/* Alternative paths */}
      {paths.length > 1 && (
        <div>
          <h4 className="font-semibold text-ink mb-2 sm:mb-3 text-sm sm:text-base">
            Autres chemins ({paths.length - 1})
          </h4>
          <div className="space-y-1.5 sm:space-y-2 max-h-60 overflow-y-auto">
            {paths.slice(1).map((path, index) => (
              <div
                key={index}
                className="p-2.5 sm:p-3 bg-paper-100 border-2 border-paper-200 hover:border-sepia-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-xs sm:text-sm font-medium text-ink">
                    Chemin #{index + 2}
                  </span>
                  <span className="text-xs text-ink-light">
                    {path.length} étapes • Force: {path.totalStrength.toFixed(1)}
                  </span>
                </div>
                <PathVisualization path={path.path} concepts={concepts} compact />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface PathVisualizationProps {
  path: string[];
  concepts: Map<string, { name: string; category?: string }>;
  compact?: boolean;
}

function PathVisualization({ path, concepts, compact = false }: PathVisualizationProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm overflow-x-auto">
        {path.map((slug, index) => (
          <div key={index} className="flex items-center">
            <span className="text-ink font-medium">
              {concepts.get(slug)?.name || slug}
            </span>
            {index < path.length - 1 && (
              <span className="mx-1 text-sepia-600">→</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      {path.map((slug, index) => (
        <div key={index} className="flex items-center">
          <div className="px-2 py-1.5 sm:px-3 sm:py-2 bg-white border-2 border-sepia-300 rounded text-xs sm:text-sm">
            <span className="text-ink font-medium">
              {concepts.get(slug)?.name || slug}
            </span>
          </div>
          {index < path.length - 1 && (
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sepia-600 mx-0.5 sm:mx-1" />
          )}
        </div>
      ))}
    </div>
  );
}
