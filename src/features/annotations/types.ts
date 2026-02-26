// ============================================================================
// TYPES
// ============================================================================

export type AnnotationColor = 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'orange';

export interface Annotation {
  id: string;
  userId: string;
  textId: string | null;
  chapterId: string | null;
  quoteId: string | null;
  content: string;
  startOffset: number | null;
  endOffset: number | null;
  color: string | null;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  chapter?: {
    id: string;
    title: string;
    slug: string;
  } | null;
  quote?: {
    id: string;
    text: string;
  } | null;
}

export interface AnnotationWithText extends Annotation {
  quoteText?: string;
}

export interface TextSelection {
  text: string;
  startOffset: number;
  endOffset: number;
  range: Range;
}

export interface AnnotationFilters {
  colors?: AnnotationColor[];
  search?: string;
  textId?: string;
  chapterId?: string;
}

export interface AnnotationFormData {
  content: string;
  color: AnnotationColor;
  isPublic: boolean;
}

// ============================================================================
// COLOR CATEGORIES
// ============================================================================

export const ANNOTATION_COLORS: Record<
  AnnotationColor,
  { label: string; description: string; bgClass: string; borderClass: string }
> = {
  yellow: {
    label: 'Important',
    description: 'Idée clé à retenir',
    bgClass: 'bg-yellow-100',
    borderClass: 'border-yellow-400',
  },
  blue: {
    label: 'Question',
    description: 'Point à clarifier',
    bgClass: 'bg-blue-100',
    borderClass: 'border-blue-400',
  },
  green: {
    label: 'Connexion',
    description: 'Lien avec autre concept',
    bgClass: 'bg-green-100',
    borderClass: 'border-green-400',
  },
  red: {
    label: 'Contradiction',
    description: 'Point contestable',
    bgClass: 'bg-red-100',
    borderClass: 'border-red-400',
  },
  purple: {
    label: 'Exemple',
    description: 'Illustration concrète',
    bgClass: 'bg-purple-100',
    borderClass: 'border-purple-400',
  },
  orange: {
    label: 'Définition',
    description: 'Terme à définir',
    bgClass: 'bg-orange-100',
    borderClass: 'border-orange-400',
  },
};
