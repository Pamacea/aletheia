'use client';

import { useEffect, useRef, useState } from 'react';
import cytoscape, { Core, NodeSingular } from 'cytoscape';
import { GraphNode, GraphEdge } from '@/lib/actions/graph';

interface GraphContainerProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  layout?: string;
  onNodeClick?: (node: GraphNode) => void;
}

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
        style: getCytoscapeStyles() as any,
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

function getCytoscapeStyles() {
  return [
    {
      selector: 'node',
      style: {
        label: 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': '80px',
        color: '#2d2b29',
        'text-outline-color': '#faf9f7',
        'text-outline-width': 2,
        'border-width': 2,
        'border-color': '#2d2b29',
        transitionProperty: 'border-width, border-color, width, height',
        transitionDuration: '0.2s',
      },
    },
    {
      selector: 'node[type="concept"]',
      style: {
        shape: 'ellipse',
        'background-color': 'data(categoryColor)',
        width: 'mapData(weight, 0, 10, 50, 100)',
        height: 'mapData(weight, 0, 10, 50, 100)',
        'font-size': '14px',
      },
    },
    {
      selector: 'node[type="philosophe"]',
      style: {
        shape: 'hexagon',
        'background-color': '#2d2214',
        width: 'mapData(weight, 0, 10, 60, 110)',
        height: 'mapData(weight, 0, 10, 60, 110)',
        'font-size': '13px',
        'font-weight': 'bold',
        'border-width': 3,
        'border-color': '#a8864d',
        color: '#faf9f7',
        'text-outline-color': '#2d2214',
        'text-outline-width': 3,
      },
    },
    {
      selector: 'node[type="courant"]',
      style: {
        shape: 'roundrectangle',
        'background-color': 'data(categoryColor)',
        width: 'mapData(weight, 0, 10, 120, 180)',
        height: 'mapData(weight, 0, 10, 50, 70)',
        'font-size': '15px',
        'font-weight': 'bold',
        'border-width': 3,
        'border-color': '#8b6f3c',
        'text-max-width': '120px',
        color: '#faf9f7',
        'text-outline-color': '#2d2214',
        'text-outline-width': 3,
      },
    },
    {
      selector: 'node.faded',
      style: {
        opacity: 0.2,
      },
    },
    {
      selector: 'node:selected',
      style: {
        'border-width': 4,
        'border-color': '#8b6f3c',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 'mapData(strength, 1, 5, 1, 4)',
        'line-color': '#d9d6d0',
        'line-style': 'solid',
        'curve-style': 'bezier',
        'target-arrow-shape': 'none',
        'source-arrow-shape': 'none',
        opacity: 0.6,
        'transition-property': 'line-color, width, opacity',
        'transitionDuration': '0.2s',
      },
    },
    {
      selector: 'edge[type="concept_relation"]',
      style: {
        'line-color': '#a8864d',
        width: 'mapData(strength, 1, 5, 2, 5)',
        opacity: 0.7,
      },
    },
    {
      selector: 'edge[type="philosopher_concept"]',
      style: {
        'line-color': '#8b877f',
        'line-style': 'dashed',
        width: 1.5,
        opacity: 0.5,
      },
    },
    {
      selector: 'edge[type="category_concept"]',
      style: {
        'line-color': '#6b552e',
        'line-style': 'dotted',
        width: 2,
        opacity: 0.6,
      },
    },
    {
      selector: 'edge[type="author_concept"]',
      style: {
        'line-color': '#8b877f',
        'line-style': 'dashed',
        width: 1.5,
        opacity: 0.5,
      },
    },
    {
      selector: 'edge[type="philosopher_concept_quote"]',
      style: {
        'line-color': '#a8864d',
        'line-style': 'solid',
        width: 1,
        opacity: 0.4,
      },
    },
    {
      selector: 'edge.faded',
      style: {
        opacity: 0.1,
      },
    },
    {
      selector: 'edge:selected',
      style: {
        'line-color': '#8b6f3c',
        width: 4,
        opacity: 1,
      },
    },
  ];
}

function getLayoutConfig(layoutName: string) {
  const layouts: Record<string, any> = {
    cose: {
      name: 'cose',
      animate: true,
      animationDuration: 1000,
      fit: true,
      padding: 50,
      idealEdgeLength: 100,
      nodeOverlap: 20,
      refresh: 20,
      componentSpacing: 100,
      nodeRepulsion: 400000,
      edgeElasticity: 100,
      nestingFactor: 5,
      gravity: 80,
      numIter: 1000,
      initialTemp: 200,
      coolingFactor: 0.95,
      minTemp: 1.0,
    },
    circle: {
      name: 'circle',
      fit: true,
      padding: 30,
      avoidOverlap: true,
      nodeDimensionsIncludeLabels: true,
    },
    concentric: {
      name: 'concentric',
      fit: true,
      padding: 30,
      startAngle: 3 / 2 * Math.PI,
      sweep: 2 * Math.PI,
      clockwise: true,
      minNodeSpacing: 10,
      concentric: (node: any) => node.data('weight') || 1,
    },
    grid: {
      name: 'grid',
      fit: true,
      padding: 30,
      avoidOverlap: true,
      rows: undefined,
      cols: undefined,
      position: (node: any) => {
        // Simple grid positioning based on node type
        const type = node.data('type');
        const id = node.id();
        // Group by type in grid
        const typeRow: Record<string, number> = {
          'courant': 0,
          'philosophe': 1,
          'concept': 2,
        };
        return {
          row: typeRow[type] || 0,
          col: 0,
        };
      },
    },
  };

  return layouts[layoutName] || layouts.cose;
}
