'use client';

import { useMemo } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useConceptConnections } from '@/lib/graph/hooks';

interface ConceptLocalNetworkProps {
  conceptSlug: string;
  concepts: Map<string, { name: string; category?: string }>;
  height?: number;
  onNodeClick?: (slug: string) => void;
}

export function ConceptLocalNetwork({
  conceptSlug,
  concepts,
  height = 400,
  onNodeClick,
}: ConceptLocalNetworkProps) {
  const { nodes, edges, connections, centralConcept } = useConceptConnections(
    conceptSlug,
    concepts
  );

  // Convert to ReactFlow format
  const initialNodes: Node[] = useMemo(() => {
    const centerX = 400;
    const centerY = 200;

    // Central node
    const centralNode: Node = {
      id: centralConcept,
      type: 'central',
      position: { x: centerX, y: centerY },
      data: {
        label: concepts.get(centralConcept)?.name || centralConcept,
        isCentral: true,
      },
    };

    // Related nodes arranged in circle
    const relatedNodes: Node[] = nodes
      .filter(n => n.id !== centralConcept)
      .map((node, index) => {
        const angle = (2 * Math.PI * index) / Math.max(connections.length - 1, 1);
        const radius = 150;
        return {
          id: node.id,
          type: 'related',
          position: {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle),
          },
          data: {
            label: node.name,
            slug: node.id,
            connections: node.connections,
          },
        };
      });

    return [centralNode, ...relatedNodes];
  }, [nodes, centralConcept, concepts, connections.length]);

  const initialEdges: Edge[] = useMemo(() => {
    return edges.map(edge => ({
      id: `${edge.from}-${edge.to}`,
      source: edge.from,
      target: edge.to,
      type: 'smoothstep' as const,
      animated: false,
      style: getEdgeStyle(edge.type, edge.strength),
      data: edge,
    }));
  }, [edges]);

  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState(initialNodes);
  const [flowEdges, setFlowEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = {
    central: CentralNode,
    related: RelatedNode,
  };

  const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
    if (onNodeClick && node.data?.slug) {
      onNodeClick(node.data.slug as string);
    }
  };

  if (nodes.length === 0) {
    return (
      <div
        className="w-full bg-paper-100 border-2 border-paper-300 flex items-center justify-center"
        style={{ height: `${height}px` }}
      >
        <p className="text-sm sm:text-base text-ink-light">Aucune connexion trouvée</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-2 border-paper-300" style={{ height: `${height}px` }}>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnScroll
        zoomOnScroll
        zoomOnPinch
        panOnDrag
      >
        <Background color="#d9d6d0" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            return node.type === 'central' ? '#8b6f3c' : '#6b552e';
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>
    </div>
  );
}

// ============================================
// CUSTOM NODES
// ============================================

interface CentralNodeData {
  label: string;
  isCentral: boolean;
}

function CentralNode({ data }: { data: CentralNodeData }) {
  return (
    <div
      className="px-4 py-2 sm:px-6 sm:py-4 bg-sepia-600 text-paper-50 font-semibold text-center border-2 sm:border-4 border-sepia-700 cursor-pointer hover:bg-sepia-700 transition-colors text-sm sm:text-base"
      style={{
        minWidth: '120px',
        borderRadius: '8px',
      }}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0" />
      <Handle type="source" position={Position.Top} className="!opacity-0" />
      <Handle type="target" position={Position.Right} className="!opacity-0" />
      <Handle type="source" position={Position.Right} className="!opacity-0" />
      <Handle type="target" position={Position.Bottom} className="!opacity-0" />
      <Handle type="source" position={Position.Bottom} className="!opacity-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0" />
      <Handle type="source" position={Position.Left} className="!opacity-0" />

      <span className="living-word">{data.label}</span>
    </div>
  );
}

interface RelatedNodeData {
  label: string;
  slug: string;
  connections: number;
}

function RelatedNode({ data }: { data: RelatedNodeData }) {
  return (
    <div
      className="px-3 py-2 sm:px-4 sm:py-3 bg-white border-2 border-sepia-400 text-center cursor-pointer hover:border-sepia-600 hover:bg-paper-50 transition-all text-xs sm:text-sm"
      style={{
        minWidth: '100px',
        borderRadius: '6px',
      }}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0" />
      <Handle type="source" position={Position.Top} className="!opacity-0" />
      <Handle type="target" position={Position.Right} className="!opacity-0" />
      <Handle type="source" position={Position.Right} className="!opacity-0" />
      <Handle type="target" position={Position.Bottom} className="!opacity-0" />
      <Handle type="source" position={Position.Bottom} className="!opacity-0" />
      <Handle type="target" position={Position.Left} className="!opacity-0" />
      <Handle type="source" position={Position.Left} className="!opacity-0" />

      <div className="font-medium text-ink text-xs sm:text-sm">{data.label}</div>
      <div className="text-xs text-ink-light mt-0.5 sm:mt-1">{data.connections} connexion{data.connections > 1 ? 's' : ''}</div>
    </div>
  );
}

// ============================================
// HELPERS
// ============================================

function getEdgeStyle(type: string, strength: number): React.CSSProperties {
  const baseStyle: React.CSSProperties = {
    transition: 'all 0.2s',
  };

  const strokeWidth = Math.max(1, Math.min(4, strength));

  switch (type) {
    case 'OPPOSES':
      return { ...baseStyle, stroke: '#a8864d', strokeWidth, strokeDasharray: '5,5' };
    case 'INFLUENCES':
      return { ...baseStyle, stroke: '#8b877f', strokeWidth };
    case 'BUILDS_ON':
      return { ...baseStyle, stroke: '#6b552e', strokeWidth };
    default:
      return { ...baseStyle, stroke: '#8b6f3c', strokeWidth };
  }
}
