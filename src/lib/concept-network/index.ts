/**
 * Concept Network Index
 *
 * Point d'entrée central pour toutes les données et utilitaires du réseau de concepts.
 */

// Types
export type { ConceptConnection } from './network';

// Données du réseau
export {
  conceptNetwork,
  absurdeNetwork,
  metaphysiqueNetwork,
  epistemologieNetwork,
  existentialismeNetwork,
  ethiqueNetwork,
  politiqueNetwork,
  esthetiqueNetwork
} from './network';

// Helpers pour les connexions
export {
  getConnectionsForConcept,
  getRelatedConcepts,
  getConnectionType,
  getConnectionsByType,
  getStrongConnections,
  findShortestPath,
  getAverageConnectionStrength,
  findConceptHubs,
  detectCommunities,
  getNetworkStats
} from './network';
