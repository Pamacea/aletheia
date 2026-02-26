/**
 * Custom hooks for graph visualization and concept network analysis
 */

import { useMemo, useState, useCallback, useEffect } from 'react';
import {
  buildGraph,
  suggestRelatedConcepts,
  findShortestPath,
  findAllPaths,
  getGraphStatistics,
  type GraphNode,
  type GraphEdge,
  type ConceptPath,
} from './concepts';
import { conceptNetwork } from '../concept-network/network';

// ============================================
// HOOK: useConceptNetworkData (Server data loader)
// ============================================

export function useConceptNetworkData() {
  const [concepts, setConcepts] = useState<Map<string, { name: string; category?: string }>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadConcepts() {
      try {
        const response = await fetch('/api/concepts/all');
        if (response.ok) {
          const data = await response.json();
          const conceptMap = new Map<string, { name: string; category?: string }>();

          data.concepts.forEach((concept: any) => {
            conceptMap.set(concept.slug, {
              name: concept.name,
              category: concept.category?.name,
            });
          });

          setConcepts(conceptMap);
        }
      } catch (error) {
        console.error('Failed to load concepts for graph:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadConcepts();
  }, []);

  return {
    concepts,
    isLoading,
  };
}

// ============================================
// HOOK: useConceptNetwork
// ============================================

interface UseConceptNetworkOptions {
  concepts: Map<string, { name: string; category?: string }>;
  enabled?: boolean;
}

export function useConceptNetwork(options: UseConceptNetworkOptions) {
  const { concepts, enabled = true } = options;

  const graph = useMemo(() => {
    if (!enabled || concepts.size === 0) {
      return { nodes: [] as GraphNode[], edges: [] as GraphEdge[] };
    }
    return buildGraph(concepts);
  }, [concepts, enabled]);

  const stats = useMemo(() => {
    if (!enabled || concepts.size === 0) {
      return null;
    }
    return getGraphStatistics(concepts);
  }, [concepts, enabled]);

  return {
    nodes: graph.nodes,
    edges: graph.edges,
    stats,
    isLoading: false,
  };
}

// ============================================
// HOOK: useConceptConnections
// ============================================

export function useConceptConnections(
  conceptSlug: string,
  concepts: Map<string, { name: string; category?: string }>
) {
  const [localGraph, setLocalGraph] = useState<{
    nodes: GraphNode[];
    edges: GraphEdge[];
  }>({ nodes: [], edges: [] });

  const connections = useMemo(() => {
    if (!conceptSlug || concepts.size === 0) return [];

    const suggestions = suggestRelatedConcepts(conceptSlug, concepts, 10);
    return suggestions;
  }, [conceptSlug, concepts]);

  const localConcepts = useMemo(() => {
    if (!conceptSlug) return new Map();

    const relatedSlugs = new Set([conceptSlug, ...connections.map(c => c.concept)]);
    const filtered = new Map<string, { name: string; category?: string }>();

    relatedSlugs.forEach(slug => {
      const concept = concepts.get(slug);
      if (concept) {
        filtered.set(slug, concept);
      }
    });

    return filtered;
  }, [conceptSlug, connections, concepts]);

  // Build local graph around the concept
  useMemo(() => {
    if (localConcepts.size > 0) {
      const graph = buildGraph(localConcepts);
      setLocalGraph(graph);
    }
  }, [localConcepts]);

  return {
    nodes: localGraph.nodes,
    edges: localGraph.edges,
    connections,
    centralConcept: conceptSlug,
  };
}

// ============================================
// HOOK: usePathFinder
// ============================================

export function usePathFinder(
  from: string,
  to: string,
  concepts: Map<string, { name: string; category?: string }>
) {
  const [isCalculating, setIsCalculating] = useState(false);
  const [paths, setPaths] = useState<ConceptPath[]>([]);
  const [shortestPath, setShortestPath] = useState<string[] | null>(null);

  const calculatePaths = useCallback(async () => {
    if (!from || !to || concepts.size === 0) {
      setPaths([]);
      setShortestPath(null);
      return;
    }

    setIsCalculating(true);

    // Use setTimeout to avoid blocking the UI
    setTimeout(() => {
      try {
        const allPaths = findAllPaths(from, to, 5, concepts);
        const shortest = findShortestPath(from, to);

        setPaths(allPaths.slice(0, 10)); // Limit to 10 paths
        setShortestPath(shortest);
      } catch (error) {
        console.error('Error calculating paths:', error);
        setPaths([]);
        setShortestPath(null);
      } finally {
        setIsCalculating(false);
      }
    }, 0);
  }, [from, to, concepts]);

  return {
    paths,
    shortestPath,
    isCalculating,
    calculatePaths,
    hasPath: shortestPath !== null,
  };
}

// ============================================
// HOOK: useGraphStats
// ============================================

export function useGraphStats(
  concepts: Map<string, { name: string; category?: string }>
) {
  const stats = useMemo(() => {
    if (concepts.size === 0) return null;
    return getGraphStatistics(concepts);
  }, [concepts]);

  const totalConnections = conceptNetwork.length;

  const hubConcepts = useMemo(() => {
    if (concepts.size === 0) return [];

    const connectionCount = new Map<string, number>();

    conceptNetwork.forEach(conn => {
      if (concepts.has(conn.from)) {
        connectionCount.set(conn.from, (connectionCount.get(conn.from) || 0) + 1);
      }
      if (concepts.has(conn.to)) {
        connectionCount.set(conn.to, (connectionCount.get(conn.to) || 0) + 1);
      }
    });

    return Array.from(connectionCount.entries())
      .map(([slug, count]) => ({
        slug,
        name: concepts.get(slug)?.name || slug,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [concepts]);

  return {
    stats,
    totalConnections,
    hubConcepts,
  };
}

// ============================================
// HOOK: useConceptSuggestions
// ============================================

interface ConceptSuggestion {
  slug: string;
  name: string;
  strength: number;
  type: string;
  reason: string;
}

export function useConceptSuggestions(
  conceptSlug: string,
  concepts: Map<string, { name: string; category?: string }>,
  limit: number = 5
) {
  const suggestions = useMemo(() => {
    if (!conceptSlug || concepts.size === 0) return [];

    const related = suggestRelatedConcepts(conceptSlug, concepts, limit);

    return related.map(s => ({
      slug: s.concept,
      name: concepts.get(s.concept)?.name || s.concept,
      strength: s.strength,
      type: s.type,
      reason: s.reason,
    })) as ConceptSuggestion[];
  }, [conceptSlug, concepts, limit]);

  return {
    suggestions,
    count: suggestions.length,
  };
}

// ============================================
// HOOK: useGraphFilter
// ============================================

interface GraphFilterOptions {
  types?: string[];
  minStrength?: number;
  categories?: string[];
  searchQuery?: string;
}

export function useGraphFilter(
  nodes: GraphNode[],
  edges: GraphEdge[],
  options: GraphFilterOptions = {}
) {
  const { types, minStrength = 0, categories, searchQuery } = options;

  const filteredNodes = useMemo(() => {
    let result = nodes;

    // Filter by type
    if (types && types.length > 0) {
      result = result.filter(node => node.category && types.includes(node.category));
    }

    // Filter by category
    if (categories && categories.length > 0) {
      result = result.filter(node => node.category && categories.includes(node.category));
    }

    // Filter by search query
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(node =>
        node.name.toLowerCase().includes(query) ||
        node.slug.toLowerCase().includes(query)
      );
    }

    return result;
  }, [nodes, types, categories, searchQuery]);

  const filteredEdges = useMemo(() => {
    const nodeIds = new Set(filteredNodes.map(n => n.id));

    let result = edges.filter(edge =>
      nodeIds.has(edge.from) && nodeIds.has(edge.to)
    );

    // Filter by strength
    if (minStrength > 0) {
      result = result.filter(edge => edge.strength >= minStrength);
    }

    return result;
  }, [edges, filteredNodes, minStrength]);

  return {
    filteredNodes,
    filteredEdges,
    nodeCount: filteredNodes.length,
    edgeCount: filteredEdges.length,
  };
}

// ============================================
// HOOK: useGraphLayout
// ============================================

export type GraphLayoutType = 'force' | 'circular' | 'hierarchical' | 'grid';

export function useGraphLayout(
  nodes: GraphNode[],
  edges: GraphEdge[],
  layoutType: GraphLayoutType = 'force',
  width: number = 800,
  height: number = 600
) {
  const layout = useMemo(() => {
    if (nodes.length === 0) {
      return { positions: new Map<string, { x: number; y: number }>() };
    }

    const positions = new Map<string, { x: number; y: number }>();
    const centerX = width / 2;
    const centerY = height / 2;

    switch (layoutType) {
      case 'circular': {
        const radius = Math.min(width, height) / 3;
        nodes.forEach((node, i) => {
          const angle = (2 * Math.PI * i) / nodes.length;
          positions.set(node.id, {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle),
          });
        });
        break;
      }

      case 'hierarchical': {
        // Group by category and arrange in layers
        const layers = new Map<string, GraphNode[]>();
        nodes.forEach(node => {
          const category = node.category || 'other';
          if (!layers.has(category)) {
            layers.set(category, []);
          }
          layers.get(category)!.push(node);
        });

        const layerHeight = height / (layers.size + 1);
        let currentY = layerHeight;

        layers.forEach((layerNodes) => {
          const layerWidth = width / (layerNodes.length + 1);
          layerNodes.forEach((node, i) => {
            positions.set(node.id, {
              x: layerWidth * (i + 1),
              y: currentY,
            });
          });
          currentY += layerHeight;
        });
        break;
      }

      case 'grid': {
        const gridSize = Math.ceil(Math.sqrt(nodes.length));
        const cellWidth = width / gridSize;
        const cellHeight = height / gridSize;

        nodes.forEach((node, i) => {
          const col = i % gridSize;
          const row = Math.floor(i / gridSize);
          positions.set(node.id, {
            x: col * cellWidth + cellWidth / 2,
            y: row * cellHeight + cellHeight / 2,
          });
        });
        break;
      }

      case 'force':
      default: {
        // Simple force-directed approximation
        // In production, use d3-force or similar
        const radius = Math.min(width, height) / 3;
        nodes.forEach((node, i) => {
          const angle = (2 * Math.PI * i) / nodes.length;
          // Add some randomness for more organic look
          const randomOffset = Math.random() * 50 - 25;
          positions.set(node.id, {
            x: centerX + radius * Math.cos(angle) + randomOffset,
            y: centerY + radius * Math.sin(angle) + randomOffset,
          });
        });
        break;
      }
    }

    return { positions };
  }, [nodes, layoutType, width, height]);

  return layout;
}
