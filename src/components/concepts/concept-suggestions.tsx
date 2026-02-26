'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { getConceptSuggestions } from '@/lib/actions/concepts';
import { Skeleton } from '@/ui/atoms/Skeleton';

interface ConceptSuggestionsProps {
  conceptSlug: string;
  limit?: number;
}

interface Suggestion {
  id: string;
  name: string;
  slug: string;
  shortDefinition: string | null;
  category: {
    name: string;
    color: string | null;
  } | null;
  reason: string;
}

export function ConceptSuggestions({
  conceptSlug,
  limit = 5,
}: ConceptSuggestionsProps) {
  const { data: suggestions, isLoading } = useQuery({
    queryKey: ['concept-suggestions', conceptSlug, limit],
    queryFn: () => getConceptSuggestions(conceptSlug, limit),
    enabled: !!conceptSlug,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">
          <span className="living-word">À explorer ensuite</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {suggestions.map((suggestion) => (
            <LinkOrnate
              key={suggestion.id}
              href={`/conceptuaire/${suggestion.slug}`}
              living
              className="group block w-full bg-paper-50 border-2 border-paper-300 p-3 sm:p-4 hover:shadow-md hover:border-sepia-400 transition-all"
            >
              {/* Header with category and reason */}
              <div className="flex items-start justify-between gap-2 mb-2">
                {suggestion.category && (
                  <span
                    className="text-xs px-2 py-1 rounded bg-paper-200 text-ink-light"
                    style={{
                      backgroundColor: suggestion.category.color || undefined,
                    }}
                  >
                    {suggestion.category.name}
                  </span>
                )}
                <span className="text-xs text-sepia-600 flex-shrink-0">
                  {suggestion.reason}
                </span>
              </div>

              {/* Concept name */}
              <h3 className="font-semibold text-ink mb-2 group-hover:text-sepia-700 transition-colors">
                <span className="living-word">{suggestion.name}</span>
              </h3>

              {/* Short definition if available */}
              {suggestion.shortDefinition && (
                <p className="text-sm text-ink-light line-clamp-2">
                  {suggestion.shortDefinition}
                </p>
              )}
            </LinkOrnate>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConceptSuggestionsSkeleton() {
  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">
          <span className="living-word">À explorer ensuite</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full bg-paper-50 border-2 border-paper-300 p-3 sm:p-4">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
