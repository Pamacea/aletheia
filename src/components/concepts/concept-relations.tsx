'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { RelationBadge } from './relation-badge';
import { ConceptRelation, RelationType } from '@/types';
import { cn } from '@/lib/utils';

interface ConceptRelationsProps {
  conceptSlug: string;
  relations: ConceptRelation[];
}

const RELATION_TYPES: RelationType[] = [
  RelationType.RELATED,
  RelationType.OPPOSES,
  RelationType.BUILDS_ON,
  RelationType.INFLUENCES,
  RelationType.CRITIQUES,
  RelationType.EXTENDS,
  RelationType.CLARIFIES,
  RelationType.EXEMPLIFIES,
];

export function ConceptRelations({ conceptSlug, relations }: ConceptRelationsProps) {
  const [selectedType, setSelectedType] = useState<RelationType | 'ALL'>('ALL');

  // Group relations by type
  const groupedRelations = relations.reduce((acc, relation) => {
    if (!acc[relation.relationType]) {
      acc[relation.relationType] = [];
    }
    acc[relation.relationType].push(relation);
    return acc;
  }, {} as Record<RelationType, ConceptRelation[]>);

  // Filter relations by selected type
  const filteredRelations =
    selectedType === 'ALL'
      ? relations
      : groupedRelations[selectedType] || [];

  // Get count for each type
  const getTypeCount = (type: RelationType) =>
    groupedRelations[type]?.length || 0;

  if (relations.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">
          <span className="living-word">Connexions</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          <button
            onClick={() => setSelectedType('ALL')}
            className={cn(
              'px-3 py-1.5 sm:px-4 sm:py-2  font-medium text-sm sm:text-base transition-colors',
              selectedType === 'ALL'
                ? 'bg-sepia-600 text-paper-50'
                : 'bg-paper-100 text-ink hover:bg-paper-200'
            )}
          >
            Toutes ({relations.length})
          </button>
          {RELATION_TYPES.filter((type) => getTypeCount(type) > 0).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                'px-3 py-1.5 sm:px-4 sm:py-2  font-medium text-sm sm:text-base transition-colors',
                selectedType === type
                  ? 'bg-sepia-600 text-paper-50'
                  : 'bg-paper-100 text-ink hover:bg-paper-200'
              )}
            >
              {type === RelationType.RELATED && 'Connexes'}
              {type === RelationType.OPPOSES && 'Oppose'}
              {type === RelationType.BUILDS_ON && 'Construit'}
              {type === RelationType.INFLUENCES && 'Influence'}
              {type === RelationType.CRITIQUES && 'Critique'}
              {type === RelationType.EXTENDS && 'Étend'}
              {type === RelationType.CLARIFIES && 'Clarifie'}
              {type === RelationType.EXEMPLIFIES && 'Exemplifie'}
              {' ('}
              {getTypeCount(type)}
              {')'}
            </button>
          ))}
        </div>

        {/* Relations Grid */}
        {filteredRelations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredRelations.map((relation) => (
              <LinkOrnate
                key={relation.id}
                href={`/conceptuaire/${relation.relatedConcept.slug}`}
                living
                className="group block w-full bg-paper-50 border-2 border-paper-300 p-3 sm:p-4 hover:shadow-md hover:border-sepia-400 transition-all"
              >
                {/* Header with badge and category */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <RelationBadge
                    type={relation.relationType}
                    strength={relation.strength}
                    showLabel
                    showStrength
                  />
                  {relation.relatedConcept.category && (
                    <span
                      className="text-xs px-2 py-1 rounded bg-paper-200 text-ink-light flex-shrink-0"
                      style={{
                        backgroundColor:
                          relation.relatedConcept.category.color || undefined,
                      }}
                    >
                      {relation.relatedConcept.category.name}
                    </span>
                  )}
                </div>

                {/* Concept name */}
                <h3 className="font-semibold text-ink mb-2 group-hover:text-sepia-700 transition-colors">
                  <span className="living-word">
                    {relation.relatedConcept.name}
                  </span>
                </h3>

                {/* Description if available */}
                {relation.description && (
                  <p className="text-sm text-ink-light line-clamp-2">
                    {relation.description}
                  </p>
                )}
              </LinkOrnate>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 sm:py-8 text-ink-light">
            <p className="text-sm sm:text-base">Aucune connexion de ce type pour ce concept.</p>
          </div>
        )}
      </div>
    </section>
  );
}
