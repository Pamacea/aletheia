'use client';

import { useState, useMemo } from 'react';
import { conceptNetwork, getConnectionsByType, type ConceptConnection } from '@/lib/concept-network/network';

type RelationType = ConceptConnection['type'];

interface RelationLegendProps {
  onFilterChange?: (types: RelationType[]) => void;
  selectedTypes?: RelationType[];
  showCounts?: boolean;
}

export function RelationLegend({
  onFilterChange,
  selectedTypes = allRelationTypes,
  showCounts = true,
}: RelationLegendProps) {
  const [expanded, setExpanded] = useState(false);

  const relationTypes = useMemo(() => {
    const typeCounts = new Map<RelationType, number>();

    conceptNetwork.forEach(conn => {
      typeCounts.set(conn.type, (typeCounts.get(conn.type) || 0) + 1);
    });

    return relationTypeInfo.map((type) => ({
      ...type,
      count: typeCounts.get(type.type) || 0,
    }));
  }, [conceptNetwork]);

  const handleToggle = (type: RelationType) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];

    // Always keep at least one type selected
    if (newTypes.length > 0 && onFilterChange) {
      onFilterChange(newTypes);
    }
  };

  const handleToggleAll = () => {
    if (selectedTypes.length === allRelationTypes.length && onFilterChange) {
      onFilterChange([]);
    } else if (onFilterChange) {
      onFilterChange(allRelationTypes);
    }
  };

  return (
    <div className="w-full bg-white border-2 border-paper-300 p-3 sm:p-4">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-ink">
          <span className="living-word">Types de Relations</span>
        </h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs sm:text-sm text-sepia-600 hover:text-sepia-700"
        >
          {expanded ? 'Masquer' : 'Voir tout'}
        </button>
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <button
          onClick={handleToggleAll}
          className="w-full text-left px-2.5 py-1.5 sm:px-3 sm:py-2 border-2 border-paper-200 hover:border-sepia-600 transition-colors text-xs sm:text-sm"
        >
          {selectedTypes.length === allRelationTypes.length ? 'Désélectionner tout' : 'Sélectionner tout'}
        </button>

        {relationTypes.map(rel => (
          <RelationTypeItem
            key={rel.type}
            {...rel}
            selected={selectedTypes.includes(rel.type)}
            onToggle={() => handleToggle(rel.type)}
            showCount={showCounts}
          />
        ))}
      </div>
    </div>
  );
}

interface RelationTypeItemProps {
  type: RelationType;
  label: string;
  description: string;
  color: string;
  icon: string;
  count: number;
  selected: boolean;
  onToggle: () => void;
  showCount: boolean;
}

function RelationTypeItem({
  label,
  description,
  color,
  icon,
  count,
  selected,
  onToggle,
  showCount,
}: RelationTypeItemProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left p-2 sm:p-3 border-2 transition-all duration-200 ${
        selected
          ? 'border-sepia-600 bg-paper-50'
          : 'border-paper-200 hover:border-paper-300'
      }`}
    >
      <div className="flex items-start justify-between gap-2 sm:gap-3">
        <div className="flex items-start gap-2 sm:gap-3 flex-1">
          {/* Icon */}
          <span className="text-xl sm:text-2xl flex-shrink-0">{icon}</span>

          {/* Label and description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full`} style={{ backgroundColor: color }} />
              <span className="text-sm sm:text-base font-medium text-ink">{label}</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-light mt-0.5 sm:mt-1">{description}</p>
          </div>
        </div>

        {/* Count */}
        {showCount && (
          <span className={`text-xs sm:text-sm font-medium flex-shrink-0 ${
            selected ? 'text-sepia-600' : 'text-ink-lighter'
          }`}>
            {count}
          </span>
        )}
      </div>
    </button>
  );
}

// ============================================
// CONSTANTS
// ============================================

const allRelationTypes: RelationType[] = [
  'RELATED',
  'OPPOSES',
  'BUILDS_ON',
  'INFLUENCES',
  'CRITIQUES',
  'EXTENDS',
  'CLARIFIES',
  'EXEMPLIFIES',
];

const relationTypeInfo = [
  {
    type: 'RELATED' as const,
    label: 'Lié',
    description: 'Connexion thématique ou conceptuelle',
    color: '#8b6f3c',
    icon: '🔗',
  },
  {
    type: 'OPPOSES' as const,
    label: 'S\'oppose',
    description: 'Relation contradictoire ou antagoniste',
    color: '#a8864d',
    icon: '⚔️',
  },
  {
    type: 'BUILDS_ON' as const,
    label: 'Construit sur',
    description: 'Développement à partir d\'une base',
    color: '#6b552e',
    icon: '🏗️',
  },
  {
    type: 'INFLUENCES' as const,
    label: 'Influence',
    description: 'Impact ou inspiration',
    color: '#8b877f',
    icon: '💡',
  },
  {
    type: 'CRITIQUES' as const,
    label: 'Critique',
    description: 'Remise en question ou réfutation',
    color: '#a8864d',
    icon: '🔍',
  },
  {
    type: 'EXTENDS' as const,
    label: 'Étend',
    description: 'Élargissement ou prolongement',
    color: '#6b552e',
    icon: '📐',
  },
  {
    type: 'CLARIFIES' as const,
    label: 'Clarifie',
    description: 'Précision ou explicitation',
    color: '#8b6f3c',
    icon: '💬',
  },
  {
    type: 'EXEMPLIFIES' as const,
    label: 'Exemplifie',
    description: 'Illustration par l\'exemple',
    color: '#6b552e',
    icon: '📖',
  },
];
