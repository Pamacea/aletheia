'use client';

import Link from 'next/link';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { ConceptRelation, RelationType } from '@/types';
import { cn } from '@/lib/utils';

interface RelatedConceptsGridProps {
  concepts: ConceptRelation[];
  relationType?: RelationType;
  limit?: number;
  showRelation?: boolean;
}

export function RelatedConceptsGrid({
  concepts,
  relationType,
  limit = 6,
  showRelation = true,
}: RelatedConceptsGridProps) {
  // Filter by relation type if specified
  const filteredConcepts = relationType
    ? concepts.filter((c) => c.relationType === relationType)
    : concepts;

  // Apply limit
  const displayedConcepts = filteredConcepts.slice(0, limit);

  if (displayedConcepts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {displayedConcepts.map((relation) => (
        <LinkOrnate
          key={relation.relatedConcept.id}
          href={`/conceptuaire/${relation.relatedConcept.slug}`}
          living
          className="group block w-full bg-paper-50 border-2 border-paper-300 p-3 sm:p-4 hover:shadow-md hover:border-sepia-400 transition-all"
        >
          {/* Category badge */}
          {relation.relatedConcept.category && (
            <div className="mb-2">
              <span
                className={cn(
                  'inline-block px-2 py-1 text-xs font-medium rounded',
                  'bg-paper-200 text-ink-light'
                )}
                style={{
                  backgroundColor: relation.relatedConcept.category.color || undefined,
                }}
              >
                {relation.relatedConcept.category.name}
              </span>
            </div>
          )}

          {/* Concept name */}
          <h3 className="font-semibold text-ink mb-2 group-hover:text-sepia-700 transition-colors">
            <span className="living-word">{relation.relatedConcept.name}</span>
          </h3>

          {/* Relation type and description */}
          {showRelation && (
            <>
              <div className="mb-2">
                <span className="text-xs font-medium text-sepia-600">
                  {getRelationLabel(relation.relationType)}
                </span>
              </div>
              {relation.description && (
                <p className="text-sm text-ink-light line-clamp-2">
                  {relation.description}
                </p>
              )}
            </>
          )}
        </LinkOrnate>
      ))}
    </div>
  );
}

function getRelationLabel(type: RelationType): string {
  const labels: Record<RelationType, string> = {
    [RelationType.RELATED]: '↔ Connexe',
    [RelationType.OPPOSES]: '⬇ Oppose',
    [RelationType.BUILDS_ON]: '⬆ Construit',
    [RelationType.INFLUENCES]: '⬄ Influence',
    [RelationType.CRITIQUES]: '⚡ Critique',
    [RelationType.EXTENDS]: '→ Étend',
    [RelationType.CLARIFIES]: '💡 Clarifie',
    [RelationType.EXEMPLIFIES]: '★ Exemplifie',
  };
  return labels[type] || type;
}
