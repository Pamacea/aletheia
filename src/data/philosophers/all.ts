// ============================================================================
// ALETHEIA - ALL PHILOSOPHERS CONSOLIDATED
// ============================================================================
// This file consolidates all philosopher data into a single default export
// for easier seeding
// ============================================================================

import { ancientGreekPhilosophers } from './ancient-greek';
import { medievalRenaissancePhilosophers } from './medieval-renaissance';
import { earlyModernPhilosophers } from './early-modern';
import { nineteenthCenturyPhilosophers } from './19th-century';
import { twentiethCenturyPhilosophers } from './20th-century';

// Combine all philosophers into a single array
export const allPhilosophers = [
  ...ancientGreekPhilosophers,
  ...medievalRenaissancePhilosophers,
  ...earlyModernPhilosophers,
  ...nineteenthCenturyPhilosophers,
  ...twentiethCenturyPhilosophers,
];

// Default export for convenience
export default allPhilosophers;

// Export total count
export const totalPhilosophers = allPhilosophers.length;
