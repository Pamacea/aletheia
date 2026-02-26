// ============================================================================
// ALETHEIA - PHILOSOPHERS DATA INDEX
// ============================================================================
// Central export for all philosopher data
// ============================================================================

export { ancientGreekPhilosophers, getAncientGreekPhilosopherBySlug, getAncientGreekPhilosophersByMovement, getAncientGreekPhilosophersByCentury, getPreSocratics, getClassicalPhilosophers, getHellenisticPhilosophers } from './ancient-greek';
export { medievalRenaissancePhilosophers } from './medieval-renaissance';
export { earlyModernPhilosophers } from './early-modern';
export { nineteenthCenturyPhilosophers } from './19th-century';
export { twentiethCenturyPhilosophers } from './20th-century';

// Combined array of all philosophers
export const allPhilosophers = [
  ...ancientGreekPhilosophers,
  ...medievalRenaissancePhilosophers,
  ...earlyModernPhilosophers,
  ...nineteenthCenturyPhilosophers,
  ...twentiethCenturyPhilosophers,
];

// Helper function to get philosopher by slug across all periods
export function getPhilosopherBySlug(slug: string) {
  return allPhilosophers.find(p => p.slug === slug);
}

// Helper function to get philosophers by movement across all periods
export function getPhilosophersByMovement(movement: string) {
  return allPhilosophers.filter(p =>
    p.mainMovements.some(m => m.toLowerCase().includes(movement.toLowerCase()))
  );
}

// Helper function to get philosophers by century
export function getPhilosophersByCentury(century: number | string) {
  const centuryStr = typeof century === 'number' ? century.toString() : century;
  return allPhilosophers.filter(p => {
    const pCentury = typeof p.century === 'number' ? p.century.toString() : p.century;
    return pCentury === centuryStr;
  });
}

// Helper function to search philosophers by name or idea
export function searchPhilosophers(query: string) {
  const lowerQuery = query.toLowerCase();
  return allPhilosophers.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(lowerQuery);
    const slugMatch = p.slug.toLowerCase().includes(lowerQuery);

    // Handle both old format (objects with concept/description) and new format (strings)
    const ideasMatch = Array.isArray(p.keyIdeas) && p.keyIdeas.some(idea => {
      if (typeof idea === 'string') {
        return idea.toLowerCase().includes(lowerQuery);
      } else if (typeof idea === 'object' && idea !== null) {
        return (
          (idea.concept?.toLowerCase().includes(lowerQuery) || false) ||
          (idea.description?.toLowerCase().includes(lowerQuery) || false)
        );
      }
      return false;
    });

    return nameMatch || slugMatch || ideasMatch;
  });
}

// Get total count
export const totalPhilosophers = allPhilosophers.length;
