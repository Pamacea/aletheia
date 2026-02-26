'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useConceptSuggestions } from '@/lib/graph/hooks';
import { ArrowRightIcon } from '@/ui';

interface ConceptSuggestionsProps {
  conceptSlug: string;
  concepts: Map<string, { name: string; category?: string }>;
  limit?: number;
  onSelect?: (slug: string) => void;
}

export function ConceptSuggestions({
  conceptSlug,
  concepts,
  limit = 5,
  onSelect,
}: ConceptSuggestionsProps) {
  const { suggestions, count } = useConceptSuggestions(conceptSlug, concepts, limit);

  if (count === 0) {
    return null;
  }

  return (
    <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6">
      <h3 className="font-serif text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-2">
        <span className="living-word">Concepts Connexes</span>
        <span className="text-xs sm:text-sm font-normal text-ink-lighter">
          ({count})
        </span>
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {suggestions.map((suggestion) => (
          <SuggestionItem
            key={suggestion.slug}
            suggestion={suggestion}
            onSelect={onSelect}
          />
        ))}
      </div>

      <Link
        href="/graphe"
        className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-sepia-600 hover:text-sepia-700 font-medium text-xs sm:text-sm"
      >
        Voir le graphe complet
        <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </Link>
    </div>
  );
}

interface SuggestionItemProps {
  suggestion: {
    slug: string;
    name: string;
    strength: number;
    type: string;
    reason: string;
  };
  onSelect?: (slug: string) => void;
}

function SuggestionItem({ suggestion, onSelect }: SuggestionItemProps) {
  const getStrengthColor = (strength: number) => {
    if (strength >= 5) return 'bg-sepia-600';
    if (strength >= 4) return 'bg-sepia-500';
    if (strength >= 3) return 'bg-sepia-400';
    return 'bg-sepia-300';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      RELATED: 'Lié',
      OPPOSES: 'S\'oppose',
      BUILDS_ON: 'Construit sur',
      INFLUENCES: 'Influence',
      CRITIQUES: 'Critique',
      EXTENDS: 'Étend',
      CLARIFIES: 'Clarifie',
      EXEMPLIFIES: 'Exemplifie',
    };
    return labels[type] || type;
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect(suggestion.slug);
    }
  };

  return (
    <Link
      href={`/conceptuaire/${suggestion.slug}`}
      onClick={handleClick}
      className="group block p-3 sm:p-4 border-2 border-paper-200 hover:border-sepia-600 hover:bg-paper-50 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-semibold text-ink group-hover:text-sepia-700 transition-colors">
            <span className="living-word">{suggestion.name}</span>
          </h4>
          <p className="text-xs sm:text-sm text-ink-light mt-1 line-clamp-2">
            {suggestion.reason}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Strength indicator */}
          <div className="flex gap-0.5 sm:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  i < suggestion.strength ? getStrengthColor(suggestion.strength) : 'bg-paper-200'
                }`}
              />
            ))}
          </div>

          {/* Type badge */}
          <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-paper-200 text-ink-light">
            {getTypeLabel(suggestion.type)}
          </span>
        </div>
      </div>
    </Link>
  );
}
