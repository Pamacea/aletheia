'use client';

import { RelationType } from '@/types';
import { cn } from '@/lib/utils';

interface RelationBadgeProps {
  type: RelationType;
  strength?: number;
  showLabel?: boolean;
  showStrength?: boolean;
  size?: 'sm' | 'md';
}

const RELATION_CONFIG: Record<RelationType, { label: string; icon: string; color: string; bgColor: string }> = {
  [RelationType.RELATED]: {
    label: 'Connexe',
    icon: '↔',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  [RelationType.OPPOSES]: {
    label: 'Oppose',
    icon: '⬇',
    color: 'text-red-700',
    bgColor: 'bg-red-100',
  },
  [RelationType.BUILDS_ON]: {
    label: 'Construit',
    icon: '⬆',
    color: 'text-green-700',
    bgColor: 'bg-green-100',
  },
  [RelationType.INFLUENCES]: {
    label: 'Influence',
    icon: '⬄',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
  },
  [RelationType.CRITIQUES]: {
    label: 'Critique',
    icon: '⚡',
    color: 'text-orange-700',
    bgColor: 'bg-orange-100',
  },
  [RelationType.EXTENDS]: {
    label: 'Étend',
    icon: '→',
    color: 'text-teal-700',
    bgColor: 'bg-teal-100',
  },
  [RelationType.CLARIFIES]: {
    label: 'Clarifie',
    icon: '💡',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
  },
  [RelationType.EXEMPLIFIES]: {
    label: 'Exemplifie',
    icon: '★',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-100',
  },
};

function StrengthIndicator({ strength }: { strength: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Force: ${strength}/5`}>
      {[1, 2, 3, 4, 5].map((level) => (
        <div
          key={level}
          className={cn(
            'w-2 h-2 rounded-full transition-colors',
            level <= strength ? 'bg-sepia-600' : 'bg-sepia-200'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function RelationBadge({
  type,
  strength = 1,
  showLabel = true,
  showStrength = false,
  size = 'sm',
}: RelationBadgeProps) {
  const config = RELATION_CONFIG[type];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-1 rounded-md border',
        config.bgColor,
        config.color,
        'border-current/20',
        size === 'sm' ? 'text-xs' : 'text-sm'
      )}
    >
      <span className="font-medium" aria-hidden="true">
        {config.icon}
      </span>
      {showLabel && <span className="font-semibold">{config.label}</span>}
      {showStrength && <StrengthIndicator strength={strength} />}
    </div>
  );
}
