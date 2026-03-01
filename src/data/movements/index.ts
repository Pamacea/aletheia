/**
 * Philosophical Movements Data Index
 * Central export for all philosophical movements data
 */

// Antiquity
export { platonisme, platonismePhilosopherLinks } from './platonisme';
export { aristotelisme, aristotelismePhilosopherLinks } from './aristotelisme';
export { stoicismeAncien, stoicismeAncienPhilosopherLinks } from './stoicisme-ancien';

// Modern
export { rationalisme, rationalismePhilosopherLinks } from './rationalisme';
export { empirisme, empirismePhilosopherLinks } from './empirisme';
export { idealismeAllemand, idealismeAllemandPhilosopherLinks } from './idealisme-allemand';
export { marxisme, marxismePhilosopherLinks } from './marxisme';

// Contemporary
export { existentialisme, existentialismePhilosopherLinks } from './existentialisme';
export { nihilisme, nihilismePhilosopherLinks } from './nihilisme';
export { stoicisme, stoicismePhilosopherLinks } from './stoicisme';
export { phenomenologie, phenomenologiePhilosopherLinks } from './phenomenologie';
export { postmodernisme, postmodernismePhilosopherLinks } from './postmodernisme';

// Combined array of all movements
import { MovementData, PhilosopherLink } from './existentialisme';
import { platonisme } from './platonisme';
import { aristotelisme } from './aristotelisme';
import { stoicismeAncien } from './stoicisme-ancien';
import { rationalisme } from './rationalisme';
import { empirisme } from './empirisme';
import { idealismeAllemand } from './idealisme-allemand';
import { marxisme } from './marxisme';
import { existentialisme } from './existentialisme';
import { nihilisme } from './nihilisme';
import { stoicisme } from './stoicisme';
import { phenomenologie } from './phenomenologie';
import { postmodernisme } from './postmodernisme';

export const allMovements: MovementData[] = [
  // Antiquity
  platonisme,
  aristotelisme,
  stoicismeAncien,

  // Modern
  rationalisme,
  empirisme,
  idealismeAllemand,
  marxisme,

  // Contemporary
  existentialisme,
  nihilisme,
  stoicisme,
  phenomenologie,
  postmodernisme,
];

// Helper function to get movement by slug
export function getMovementBySlug(slug: string): MovementData | undefined {
  return allMovements.find(m => m.slug === slug);
}

// Helper function to get movements by category
export function getMovementsByCategory(category: string): MovementData[] {
  return allMovements.filter(m => m.category === category);
}

// Helper function to get movements by period
export function getMovementsByPeriod(period: string): MovementData[] {
  return allMovements.filter(m => m.period.includes(period));
}

// Helper function to search movements by name, description, or concepts
export function searchMovements(query: string): MovementData[] {
  const lowerQuery = query.toLowerCase();
  return allMovements.filter(m => {
    const nameMatch = m.name.toLowerCase().includes(lowerQuery);
    const slugMatch = m.slug.toLowerCase().includes(lowerQuery);
    const descMatch = m.description.toLowerCase().includes(lowerQuery);
    const conceptsMatch = m.keyConcepts.some(c => c.toLowerCase().includes(lowerQuery));
    const principlesMatch = m.keyPrinciples.some(p => p.toLowerCase().includes(lowerQuery));

    return nameMatch || slugMatch || descMatch || conceptsMatch || principlesMatch;
  });
}

// Helper function to get philosophers by movement
export function getPhilosophersByMovement(movementSlug: string): string[] {
  const movement = getMovementBySlug(movementSlug);
  return movement?.keyPhilosophers || [];
}

// Get total count
export const totalMovements = allMovements.length;
