/**
 * Graph Utilities Index
 *
 * Point d'entrée central pour tous les utilitaires de graphe.
 */

// Types
export type {
  GraphNode,
  GraphEdge,
  ConceptPath,
  ConceptCluster
} from './concepts';

// Graph building
export {
  buildGraph
} from './concepts';

// Path finding
export {
  findAllPaths,
  findShortestPath,
  findStrongestPath
} from './concepts';

// Graph analysis
export {
  getDegreeCentrality,
  getClosenessCentrality,
  findBridgeConcepts
} from './concepts';

// Clustering
export {
  detectCommunities,
  groupByCategory
} from './concepts';

// Recommendations
export {
  suggestRelatedConcepts,
  findMissingConnections
} from './concepts';

// Visualization
export {
  formatForVisualization,
  calculateLayout
} from './concepts';

// Statistics
export {
  getGraphStatistics
} from './concepts';

// Hooks
export {
  useConceptNetwork,
  useConceptConnections,
  usePathFinder,
  useGraphStats,
  useConceptSuggestions,
  useGraphFilter,
  useGraphLayout,
  useConceptNetworkData,
} from './hooks';
