/**
 * Concepts Barrel Export
 * Central export for all philosophical concepts
 */

export { concept as revolte } from './revolte';
export { concept as angoisse } from './angoisse';
export { concept as authenticite } from './authenticite';
export { concept as sens } from './sens';
export { concept as mauvaiseFoi } from './mauvaise-foi';

// Re-export all concepts as an array for easy iteration
export const concepts = [
  revolte,
  angoisse,
  authenticite,
  sens,
  mauvaiseFoi
];

// Export concept IDs for type checking
export const conceptIds = [
  'revolte',
  'angoisse',
  'authenticite',
  'sens',
  'mauvaise-foi'
] as const;

export type ConceptId = typeof conceptIds[number];
