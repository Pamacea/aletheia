'use client';

import { useEffect, useRef, useState } from 'react';
import cytoscape, { Core, NodeSingular } from 'cytoscape';
import { GraphNode, GraphEdge } from '@/lib/actions/graph';
import { getLayoutConfig, type LayoutType } from '../lib/graph-config';
import { getStyles } from '../lib/graph-styles';

interface GraphContainerProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  layout?: LayoutType;
  onNodeClick?: (node: GraphNode) => void;
}

/**
 * GraphContainer Component
 *
 * Renders an interactive graph visualization using Cytoscape.js.
 * Handles node selection, layout changes, and loading states.
 *
 * @example
 * ```tsx
 * <GraphContainer
 *   nodes={nodes}
 *   edges={edges}
 *   layout="cose"
 *   onNodeClick={(node) => console.log('Clicked:', node)}
 * />
 * ```
 */
export function GraphContainer({ nodes, edges, layout = 'cose', onNodeClick }: GraphContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track when nodes change
  const prevNodesLengthRef = useRef(0);
  if (nodes.length !== prevNodesLengthRef.current) {
    prevNodesLengthRef.current = nodes.length;
  }

  useEffect(() => {
    if (!containerRef.current) return;
    if (nodes.length === 0) {
      // Clear existing cytoscape instance if nodes become empty
      if (cyRef.current) {
        cyRef.current.destroy();
        cyRef.current = null;
      }
      setIsReady(false);
      return;
    }

    try {
      // Destroy previous instance if exists
      if (cyRef.current) {
        cyRef.current.destroy();
      }

      const cy = cytoscape({
        container: containerRef.current,
        elements: [
          ...nodes.map(n => ({ data: n })),
          ...edges.map(e => ({ data: e })),
        ],
        style: getStyles() as any,
        layout: getLayoutConfig(layout) as any,
        minZoom: 0.1,
        maxZoom: 3,
        wheelSensitivity: 0.5,
      });

      // Event handlers
      cy.on('tap', 'node', (evt) => {
        const node = evt.target;
        const nodeData = node.data() as GraphNode;
        onNodeClick?.(nodeData);

        // Highlight node and neighbors
        const neighborhood = node.neighborhood().add(node);
        cy.elements().addClass('faded');
        neighborhood.removeClass('faded');
      });

      cy.on('tap', (event) => {
        if (event.target === cy) {
          // Click on background - reset
          cy.elements().removeClass('faded');
          onNodeClick?.(null as any);
        }
      });

      // Set ready state - use both ready callback and timeout fallback
      let readyTimer: NodeJS.Timeout;
      cy.ready(() => {
        setIsReady(true);
      });

      // Timeout fallback in case ready callback doesn't fire
      readyTimer = setTimeout(() => {
        setIsReady(true);
      }, 2000);

      cyRef.current = cy;

      return () => {
        clearTimeout(readyTimer);
        if (cyRef.current) {
          cyRef.current.destroy();
          cyRef.current = null;
        }
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsReady(false);
    }
  }, [nodes, edges, layout]);

  // Update layout when layout prop changes
  useEffect(() => {
    if (cyRef.current && layout) {
      cyRef.current.layout(getLayoutConfig(layout)).run();
    }
  }, [layout]);

  if (error) {
    return (
      <div className="w-full h-[700px] bg-paper-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Erreur lors du chargement du graphe</p>
          <p className="text-ink-lighter">{error}</p>
        </div>
      </div>
    );
  }

  if (nodes.length === 0) {
    return (
      <div className="w-full h-[700px] bg-paper-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-ink-light mb-4">Aucune donnée à afficher</p>
          <p className="text-ink-lighter">Essayez de modifier vos filtres de recherche</p>
        </div>
      </div>
    );
  }

  // Always render container, but show loading overlay if not ready
  return (
    <div className="relative">
      <div ref={containerRef} className="w-full h-[700px] bg-white border-2 border-paper-300" />
      {!isReady && (
        <div className="absolute inset-0 bg-paper-50/90 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-sepia-600 border-t-transparent animate-spin mb-4" />
            <p className="text-sepia-600 font-medium">Chargement du graphe...</p>
          </div>
        </div>
      )}
    </div>
  );
}
