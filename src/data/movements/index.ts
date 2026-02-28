/**
 * Philosophical Movements Data Index
 * Central export for all philosophical movements data
 */

// Antiquity
export { platonisme, platonismePhilosopherLinks } from './platonisme.ts';
export { aristotelisme, aristotelismePhilosopherLinks } from './aristotelisme.ts';
export { stoicismeAncien, stoicismeAncienPhilosopherLinks } from './stoicisme-ancien.ts';

// Modern
export { rationalisme, rationalismePhilosopherLinks } from './rationalisme.ts';
export { empirisme, empirismePhilosopherLinks } from './empirisme.ts';
export { idealismeAllemand, idealismeAllemandPhilosopherLinks } from './idealisme-allemand.ts';
export { marxisme, marxismePhilosopherLinks } from './marxisme.ts';

// Contemporary
export { existentialisme, existentialismePhilosopherLinks } from './existentialisme.ts';
export { nihilisme, nihilismePhilosopherLinks } from './nihilisme.ts';
export { stoicisme, stoicismePhilosopherLinks } from './stoicisme.ts';
export { phenomenologie, phenomenologiePhilosopherLinks } from './phenomenologie.ts';
export { postmodernisme, postmodernismePhilosopherLinks } from './postmodernisme.ts';

// Combined array of all movements
import { MovementData, PhilosopherLink } from './existentialisme.ts';
import { platonisme } from './platonisme.ts';
import { aristotelisme } from './aristotelisme.ts';
import { stoicismeAncien } from './stoicisme-ancien.ts';
import { rationalisme } from './rationalisme.ts';
import { empirisme } from './empirisme.ts';
import { idealismeAllemand } from './idealisme-allemand.ts';
import { marxisme } from './marxisme.ts';
import { existentialisme } from './existentialisme.ts';
import { nihilisme } from './nihilisme.ts';
import { stoicisme } from './stoicisme.ts';
import { phenomenologie } from './phenomenologie.ts';
import { postmodernisme } from './postmodernisme.ts';

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
