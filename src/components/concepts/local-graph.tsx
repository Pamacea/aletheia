'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { cn } from '@/lib/utils';

interface LocalConceptGraphProps {
  centerSlug: string;
  conceptName: string;
  relations: Array<{
    relatedConcept: {
      id: string;
      name: string;
      slug: string;
    };
    relationType: string;
    strength: number;
  }>;
  depth?: number;
  onNodeClick?: (slug: string) => void;
  height?: number;
}

export function LocalConceptGraph({
  centerSlug,
  conceptName,
  relations,
  depth = 1,
  onNodeClick,
  height = 400,
}: LocalConceptGraphProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // Build initial graph structure
  const { initialNodes, initialEdges } = useMemo(() => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];

    // Center node
    newNodes.push({
      id: centerSlug,
      data: {
        label: conceptName,
        isCenter: true,
      },
      position: { x: 0, y: 0 },
      style: {
        background: '#8b6f3c',
        color: 'white',
        border: '2px solid #2d2b29',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: 'bold',
        width: 140,
        height: 60,
      },
    });

    // Position related nodes in a circle around center
    const radius = 150;
    const angleStep = (2 * Math.PI) / relations.length;

    relations.forEach((relation, index) => {
      const angle = index * angleStep;
      const x = Math.cos(angle) * radius + 200; // Offset to center
      const y = Math.sin(angle) * radius + 200;

      newNodes.push({
        id: relation.relatedConcept.slug,
        data: {
          label: relation.relatedConcept.name,
        },
        position: { x, y },
        style: {
          background: '#e8e6e1',
          color: '#2d2b29',
          border: '1px solid #8b6f3c',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '12px',
          width: 120,
          height: 50,
        },
      });

      // Add edge
      newEdges.push({
        id: `${centerSlug}-${relation.relatedConcept.slug}`,
        source: centerSlug,
        target: relation.relatedConcept.slug,
        label: getRelationLabel(relation.relationType),
        style: {
          stroke: getRelationColor(relation.relationType),
          strokeWidth: Math.max(1, relation.strength * 0.5),
        },
        labelStyle: {
          fontSize: '10px',
          fontWeight: 'bold',
        },
        animated: relation.strength >= 4,
      });
    });

    return { initialNodes: newNodes, initialEdges: newEdges };
  }, [centerSlug, conceptName, relations]);

  // Set nodes and edges on mount
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const handleNodeClick = (_event: React.MouseEvent, node: { id: string }) => {
    if (node.id !== centerSlug && onNodeClick) {
      onNodeClick(node.id);
    }
  };

  if (relations.length === 0) {
    return (
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4">
          <span className="living-word">Graphe local</span>
        </h2>
        <p className="text-ink-light text-center py-6 sm:py-8">
          Ce concept n'a pas encore de connexions.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full mb-8 sm:mb-12">
      <div className="w-full bg-white border-2 border-paper-300 p-4 sm:p-6 lg:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">
          <span className="living-word">Graphe local</span>
        </h2>

        <div
          className={cn('w-full border-2 border-paper-200 rounded-lg overflow-hidden')}
          style={{ height: `${height}px` }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={handleNodeClick}
            fitView
            minZoom={0.5}
            maxZoom={2}
            defaultEdgeOptions={{
              animated: false,
            }}
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={12}
              size={1}
              color="#d9d6d0"
            />
            <Controls
              className="!bg-paper-50 !border-2 !border-paper-300"
              showZoom={true}
              showFitView={true}
              showInteractive={true}
            />
            <MiniMap
              className="!bg-paper-50"
              nodeColor={(node) =>
                node.id === centerSlug ? '#8b6f3c' : '#e8e6e1'
              }
              maskColor="rgba(0, 0, 0, 0.1)"
            />
          </ReactFlow>
        </div>

        <p className="text-xs sm:text-sm text-ink-light mt-3 sm:mt-4 text-center">
          Cliquez sur un concept pour explorer ses connexions
        </p>
      </div>
    </section>
  );
}

function getRelationLabel(type: string): string {
  const labels: Record<string, string> = {
    RELATED: '↔',
    OPPOSES: '⬇',
    BUILDS_ON: '⬆',
    INFLUENCES: '⬄',
    CRITIQUES: '⚡',
    EXTENDS: '→',
    CLARIFIES: '💡',
    EXEMPLIFIES: '★',
  };
  return labels[type] || '↔';
}

function getRelationColor(type: string): string {
  const colors: Record<string, string> = {
    RELATED: '#3b82f6',
    OPPOSES: '#ef4444',
    BUILDS_ON: '#22c55e',
    INFLUENCES: '#a855f7',
    CRITIQUES: '#f97316',
    EXTENDS: '#14b8a6',
    CLARIFIES: '#eab308',
    EXEMPLIFIES: '#6366f1',
  };
  return colors[type] || '#8b6f3c';
}
