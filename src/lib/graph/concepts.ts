/**
 * Concept Graph Utilities
 *
 * Utilitaires pour manipuler et analyser le graphe de concepts philosophiques.
 * Ces fonctions permettent de naviguer, analyser et visualiser les relations entre concepts.
 */

import { ConceptConnection, conceptNetwork, getConnectionsForConcept } from '../concept-network/network';

// ============================================
// TYPES
// ============================================

export interface GraphNode {
  id: string;
  slug: string;
  name: string;
  category?: string;
  connections: number;
  avgStrength: number;
}

export interface GraphEdge extends Record<string, unknown> {
  from: string;
  to: string;
  type: ConceptConnection['type'];
  strength: number;
  description: string;
}

export interface ConceptPath {
  path: string[];
  edges: GraphEdge[];
  totalStrength: number;
  length: number;
}

export interface ConceptCluster {
  concepts: string[];
  centralConcept: string;
  density: number;
  internalConnections: number;
  externalConnections: number;
}

// ============================================
// GRAPH BUILDING
// ============================================

/**
 * Construit le graphe complet depuis les connexions
 */
export function buildGraph(
  concepts: Map<string, { name: string; category?: string }>
): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const nodeStats = new Map<string, { count: number; totalStrength: number }>();

  // Calculer les statistiques par nœud
  conceptNetwork.forEach(c => {
    const fromStats = nodeStats.get(c.from) ?? { count: 0, totalStrength: 0 };
    fromStats.count++;
    fromStats.totalStrength += c.strength;
    nodeStats.set(c.from, fromStats);
  });

  // Construire les nœuds
  const nodes: GraphNode[] = Array.from(nodeStats.entries())
    .filter(([slug]) => concepts.has(slug))
    .map(([slug, stats]) => ({
      id: slug,
      slug,
      name: concepts.get(slug)?.name ?? slug,
      category: concepts.get(slug)?.category,
      connections: stats.count,
      avgStrength: stats.totalStrength / stats.count
    }))
    .sort((a, b) => b.connections - a.connections);

  // Construire les arêtes
  const edges: GraphEdge[] = conceptNetwork
    .filter(c => concepts.has(c.from) && concepts.has(c.to))
    .map(c => ({
      from: c.from,
      to: c.to,
      type: c.type,
      strength: c.strength,
      description: c.description
    }));

  return { nodes, edges };
}

// ============================================
// PATH FINDING
// ============================================

/**
 * Trouve tous les chemins entre deux concepts (DFS avec limite de profondeur)
 */
export function findAllPaths(
  from: string,
  to: string,
  maxDepth: number = 5,
  concepts?: Map<string, { name: string; category?: string }>
): ConceptPath[] {
  const validConcepts = concepts ?? new Map();

  const paths: ConceptPath[] = [];
  const visited = new Set<string>();

  function dfs(current: string, path: string[], edges: GraphEdge[], depth: number) {
    if (depth > maxDepth) return;
    if (current === to && path.length > 0) {
      const totalStrength = edges.reduce((sum, e) => sum + e.strength, 0);
      paths.push({
        path: [...path, current],
        edges: [...edges],
        totalStrength,
        length: path.length
      });
      return;
    }

    visited.add(current);

    const connections = conceptNetwork.filter(
      c => c.from === current && !visited.has(c.to)
    );

    for (const conn of connections) {
      // Skip si le concept n'existe pas dans la map fournie
      if (concepts && !concepts.has(conn.to)) continue;

      dfs(conn.to, [...path, current], [
        ...edges,
        {
          from: conn.from,
          to: conn.to,
          type: conn.type,
          strength: conn.strength,
          description: conn.description
        }
      ], depth + 1);
    }

    visited.delete(current);
  }

  dfs(from, [], [], 0);

  // Trier par longueur puis par force totale
  return paths.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return b.totalStrength - a.totalStrength;
  });
}

/**
 * Trouve le chemin le plus court (BFS)
 */
export function findShortestPath(
  from: string,
  to: string
): string[] | null {
  if (from === to) return [from];

  const visited = new Set<string>();
  const queue: Array<{ node: string; path: string[] }> = [
    { node: from, path: [from] }
  ];

  while (queue.length > 0) {
    const { node, path } = queue.shift()!;

    if (node === to) return path;

    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = conceptNetwork
      .filter(c => c.from === node)
      .map(c => c.to);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push({
          node: neighbor,
          path: [...path, neighbor]
        });
      }
    }
  }

  return null;
}

/**
 * Trouve le chemin le plus fort (maximum total strength)
 */
export function findStrongestPath(
  from: string,
  to: string,
  maxDepth: number = 5
): ConceptPath | null {
  const paths = findAllPaths(from, to, maxDepth);

  if (paths.length === 0) return null;

  // Retourner le chemin avec la meilleure combinaison de longueur et de force
  return paths.reduce((best, current) => {
    const currentScore = current.totalStrength / current.length;
    const bestScore = best.totalStrength / best.length;
    return currentScore > bestScore ? current : best;
  });
}

// ============================================
// GRAPH ANALYSIS
// ============================================

/**
 * Calcule la centralité de degré (nombre de connexions)
 */
export function getDegreeCentrality(conceptSlug: string): number {
  const connections = getConnectionsForConcept(conceptSlug);
  return connections.length;
}

/**
 * Calcule la centralité de proximité (inverse de la distance moyenne)
 */
export function getClosenessCentrality(
  conceptSlug: string,
  concepts?: Map<string, { name: string; category?: string }>
): number {
  const validConcepts = concepts ?? new Map();
  const allConcepts = new Set(validConcepts.keys());

  if (allConcepts.size === 0) return 0;

  let totalDistance = 0;
  let reachableCount = 0;

  for (const target of Array.from(allConcepts)) {
    if (target === conceptSlug) continue;

    const path = findShortestPath(conceptSlug, target);
    if (path) {
      totalDistance += path.length - 1;
      reachableCount++;
    }
  }

  if (reachableCount === 0) return 0;

  // Closeness = (N-1) / somme des distances
  return (reachableCount - 1) / totalDistance;
}

/**
 * Trouve les concepts "ponts" (betweenness)
 */
export function findBridgeConcepts(
  concepts: Map<string, { name: string; category?: string }>
): Array<{ concept: string; betweenness: number }> {
  const allConcepts = Array.from(concepts.keys());
  const betweenness = new Map<string, number>();

  // Pour chaque paire de concepts, compter combien de fois chaque concept est sur le chemin le plus court
  for (let i = 0; i < allConcepts.length; i++) {
    for (let j = i + 1; j < allConcepts.length; j++) {
      const from = allConcepts[i];
      const to = allConcepts[j];

      const path = findShortestPath(from, to);
      if (path) {
        // Exclure les extrémités
        for (let k = 1; k < path.length - 1; k++) {
          const middle = path[k];
          betweenness.set(middle, (betweenness.get(middle) ?? 0) + 1);
        }
      }
    }
  }

  return Array.from(betweenness.entries())
    .map(([concept, betweenness]) => ({ concept, betweenness }))
    .sort((a, b) => b.betweenness - a.betweenness);
}

// ============================================
// CLUSTERING
// ============================================

/**
 * Détecte les communautés de concepts (algorithmes de clustering)
 */
export function detectCommunities(
  concepts: Map<string, { name: string; category?: string }>
): ConceptCluster[] {
  const visited = new Set<string>();
  const clusters: ConceptCluster[] = [];

  for (const conceptSlug of Array.from(concepts.keys())) {
    if (visited.has(conceptSlug)) continue;

    const clusterConcepts = new Set<string>();
    const queue: string[] = [conceptSlug];
    visited.add(conceptSlug);

    // BFS pour trouver tous les concepts connectés
    while (queue.length > 0) {
      const current = queue.shift()!;
      clusterConcepts.add(current);

      const neighbors = conceptNetwork
        .filter(c => c.from === current || c.to === current)
        .map(c => c.from === current ? c.to : c.from)
        .filter(c => concepts.has(c) && !visited.has(c));

      for (const neighbor of neighbors) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }

    // Calculer les statistiques du cluster
    const conceptArray = Array.from(clusterConcepts);
    let internalConnections = 0;
    let externalConnections = 0;

    for (const from of conceptArray) {
      const connections = conceptNetwork.filter(c => c.from === from);
      for (const conn of connections) {
        if (clusterConcepts.has(conn.to)) {
          internalConnections++;
        } else {
          externalConnections++;
        }
      }
    }

    // Trouver le concept central (plus connecté)
    const centralConcept = conceptArray.reduce((best, current) => {
      const bestConnections = conceptNetwork.filter(c => c.from === best).length;
      const currentConnections = conceptNetwork.filter(c => c.from === current).length;
      return currentConnections > bestConnections ? current : best;
    });

    // Calculer la densité (connexions réelles / connexions possibles)
    const possibleConnections = (conceptArray.length * (conceptArray.length - 1)) / 2;
    const density = possibleConnections > 0 ? internalConnections / possibleConnections : 0;

    clusters.push({
      concepts: conceptArray,
      centralConcept,
      density,
      internalConnections,
      externalConnections
    });
  }

  return clusters.sort((a, b) => b.concepts.length - a.concepts.length);
}

/**
 * Regroupe les concepts par catégorie
 */
export function groupByCategory(
  concepts: Map<string, { name: string; category?: string }>
): Map<string, string[]> {
  const groups = new Map<string, string[]>();

  for (const [slug, data] of Array.from(concepts.entries())) {
    const category = data.category ?? 'other';
    if (!groups.has(category)) {
      groups.set(category, []);
    }
    groups.get(category)!.push(slug);
  }

  return groups;
}

// ============================================
// RECOMMENDATIONS
// ============================================

/**
 * Suggère des concepts connexes à explorer
 */
export function suggestRelatedConcepts(
  conceptSlug: string,
  concepts: Map<string, { name: string; category?: string }>,
  limit: number = 5
): Array<{ concept: string; strength: number; type: ConceptConnection['type']; reason: string }> {
  const connections = conceptNetwork.filter(c => c.from === conceptSlug);

  return connections
    .filter(c => concepts.has(c.to))
    .map(c => ({
      concept: c.to,
      strength: c.strength,
      type: c.type,
      reason: c.description
    }))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, limit);
}

/**
 * Trouve les concepts manquants potentiels (triangles non fermés)
 */
export function findMissingConnections(
  concepts: Map<string, { name: string; category?: string }>
): Array<{ from: string; to: string; reason: string }> {
  const missing: Array<{ from: string; to: string; reason: string }> = [];

  // Pour chaque paire de concepts avec un voisin commun
  for (const [from, fromData] of Array.from(concepts.entries())) {
    const neighbors = conceptNetwork
      .filter(c => c.from === from)
      .map(c => c.to);

    for (const neighbor of neighbors) {
      const neighborsOfNeighbor = conceptNetwork
        .filter(c => c.from === neighbor)
        .map(c => c.to);

      for (const potential of neighborsOfNeighbor) {
        if (potential === from) continue;

        // Vérifier si la connexion existe déjà
        const exists = conceptNetwork.some(
          c => (c.from === from && c.to === potential) ||
               (c.from === potential && c.to === from)
        );

        if (!exists) {
          missing.push({
            from,
            to: potential,
            reason: `Connecté via ${neighbor}`
          });
        }
      }
    }
  }

  return missing;
}

// ============================================
// VISUALIZATION HELPERS
// ============================================

/**
 * Formate le graphe pour D3 ou autres librairies de visualisation
 */
export function formatForVisualization(
  concepts: Map<string, { name: string; category?: string }>
): { nodes: Array<{ id: string; name: string; group?: string }>; links: Array<{ source: string; target: string; value: number; type: string }> } {
  const nodes = Array.from(concepts.entries()).map(([slug, data]) => ({
    id: slug,
    name: data.name,
    group: data.category
  }));

  const links = conceptNetwork
    .filter(c => concepts.has(c.from) && concepts.has(c.to))
    .map(c => ({
      source: c.from,
      target: c.to,
      value: c.strength,
      type: c.type
    }));

  return { nodes, links };
}

/**
 * Calcule les positions pour une visualisation en force-directed graph
 * Note: Pour une vraie visualisation, utiliser D3 ou une librairie similaire
 */
export function calculateLayout(
  concepts: Map<string, { name: string; category?: string }>,
  width: number = 800,
  height: number = 600
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  const conceptSlugs = Array.from(concepts.keys());

  // Layout simple en cercle (à remplacer par un vrai algorithme force-directed)
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;

  conceptSlugs.forEach((slug, i) => {
    const angle = (2 * Math.PI * i) / conceptSlugs.length;
    positions.set(slug, {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });
  });

  return positions;
}

// ============================================
// STATISTICS
// ============================================

/**
 * Calcule les statistiques globales du graphe
 */
export function getGraphStatistics(
  concepts: Map<string, { name: string; category?: string }>
): {
  nodeCount: number;
  edgeCount: number;
  avgDegree: number;
  density: number;
  diameter: number;
  clusters: number;
} {
  const nodeCount = concepts.size;
  const edgeCount = conceptNetwork.filter(c => concepts.has(c.from) && concepts.has(c.to)).length;

  // Degré moyen
  const avgDegree = nodeCount > 0 ? (2 * edgeCount) / nodeCount : 0;

  // Densité (arêtes réelles / arêtes possibles)
  const maxEdges = (nodeCount * (nodeCount - 1)) / 2;
  const density = maxEdges > 0 ? edgeCount / maxEdges : 0;

  // Diamètre (plus long chemin le plus court)
  let diameter = 0;
  const conceptSlugs = Array.from(concepts.keys());
  for (let i = 0; i < conceptSlugs.length; i++) {
    for (let j = i + 1; j < conceptSlugs.length; j++) {
      const path = findShortestPath(conceptSlugs[i], conceptSlugs[j]);
      if (path) {
        diameter = Math.max(diameter, path.length - 1);
      }
    }
  }

  // Nombre de clusters
  const clusters = detectCommunities(concepts).length;

  return {
    nodeCount,
    edgeCount,
    avgDegree,
    density,
    diameter,
    clusters
  };
}
