/**
 * useGraphData Hook
 *
 * Manages graph data loading, error handling, and state management
 * for the graph visualization component.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { GraphNode, GraphEdge } from '@/lib/actions/graph';

export interface UseGraphDataResult {
  /** Whether the graph data is currently loading */
  isLoading: boolean;
  /** Error message if data loading failed */
  error: string | null;
  /** Current graph nodes */
  nodes: GraphNode[];
  /** Current graph edges */
  edges: GraphEdge[];
  /** Clear error state */
  clearError: () => void;
  /** Initialize graph with data */
  initializeGraph: (nodes: GraphNode[], edges: GraphEdge[]) => void;
}

/**
 * Hook for managing graph data state
 *
 * @returns Graph data state and handlers
 *
 * @example
 * ```tsx
 * const { isLoading, error, nodes, edges, initializeGraph } = useGraphData()
 *
 * useEffect(() => {
 *   const fetchData = async () => {
 *     const data = await fetchGraphData()
 *     initializeGraph(data.nodes, data.edges)
 *   }
 *   fetchData()
 * }, [])
 * ```
 */
export function useGraphData(): UseGraphDataResult {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);

  // Track initialization to prevent duplicate setup
  const initializedRef = useRef(false);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const initializeGraph = useCallback((newNodes: GraphNode[], newEdges: GraphEdge[]) => {
    setNodes(newNodes);
    setEdges(newEdges);
    setIsLoading(false);
    initializedRef.current = true;
    setError(null);
  }, []);

  // Auto-clear error when nodes/edges change
  useEffect(() => {
    if (initializedRef.current && (nodes.length > 0 || edges.length > 0)) {
      setError(null);
    }
  }, [nodes.length, edges.length]);

  return {
    isLoading,
    error,
    nodes,
    edges,
    clearError,
    initializeGraph,
  };
}

/**
 * Hook for managing graph loading state separately
 * Useful when data is fetched externally
 */
export function useGraphLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const setErrorState = useCallback((err: string | null) => {
    setError(err);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    setLoading,
    setError: setErrorState,
  };
}
