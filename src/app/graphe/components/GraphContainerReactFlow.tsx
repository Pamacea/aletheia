'use client';

import { useCallback, useEffect, useMemo, memo } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { GraphNode, GraphEdge } from '@/lib/actions/graph';

interface GraphContainerProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  layout?: string;
  onNodeClick?: (node: GraphNode) => void;
}

// Convert our graph nodes to React Flow nodes with different layouts
function convertToReactFlowNodes(nodes: GraphNode[], layout: string): Node[] {
  const nodeCount = nodes.length;

  // Dynamic spacing based on node count - more nodes = more spacing
  const calculateSpacing = () => {
    if (nodeCount <= 10) return 100; // Very compact for few nodes
    if (nodeCount <= 20) return 120;
    if (nodeCount <= 40) return 150;
    if (nodeCount <= 60) return 200;
    if (nodeCount <= 80) return 280;
    return 350; // Maximum spacing for 100+ nodes
  };

  const spacing = calculateSpacing();
  const gridSize = Math.ceil(Math.sqrt(nodeCount));

  // Dynamic center position based on canvas size
  const centerX = 1000 + (nodeCount * 3);
  const centerY = 800 + (nodeCount * 2);

  return nodes.map((node, index) => {
    let x, y;

    switch (layout) {
      case 'circle':
        // ALL nodes in ONE circle with dynamic radius
        const angle = (index / nodeCount) * Math.PI * 2;
        const radius = Math.max(300, nodeCount * (spacing / 10)); // Dynamic radius
        x = Math.cos(angle) * radius + centerX;
        y = Math.sin(angle) * radius + centerY;
        break;

      case 'concentric':
        // Different rings by type - dynamic spacing
        if (node.type === 'courant' || node.type === 'movement') {
          const categories = nodes.filter(n => n.type === 'courant' || n.type === 'movement');
          const catIndex = categories.findIndex(n => n.id === node.id);
          const catAngle = (catIndex / Math.max(categories.length, 1)) * Math.PI * 2;
          const courantRadius = spacing * 4; // Outer ring
          x = Math.cos(catAngle) * courantRadius + centerX;
          y = Math.sin(catAngle) * courantRadius + centerY;
        } else if (node.type === 'philosophe') {
          const philosophers = nodes.filter(n => n.type === 'philosophe');
          const philIndex = philosophers.findIndex(n => n.id === node.id);
          const philAngle = (philIndex / Math.max(philosophers.length, 1)) * Math.PI * 2;
          const philoRadius = spacing * 2.8; // Middle ring
          x = Math.cos(philAngle) * philoRadius + centerX;
          y = Math.sin(philAngle) * philoRadius + centerY;
        } else {
          // Concepts in the center - compact grid
          const concepts = nodes.filter(n => n.type === 'concept');
          const conceptIndex = concepts.findIndex(n => n.id === node.id);
          const conceptGridSize = Math.ceil(Math.sqrt(concepts.length));
          const conceptGridStartX = centerX - (conceptGridSize * spacing) / 2;
          const conceptGridStartY = centerY - (conceptGridSize * spacing) / 2;
          x = (conceptIndex % conceptGridSize) * spacing + conceptGridStartX;
          y = Math.floor(conceptIndex / conceptGridSize) * spacing + conceptGridStartY;
        }
        break;

      case 'grid':
        // Regular grid layout - dynamic spacing
        const col = index % gridSize;
        const row = Math.floor(index / gridSize);
        x = col * spacing + 50;
        y = row * spacing + 50;
        break;

      case 'cose':
      default:
        // Force-directed style - dynamic spacing
        if (node.type === 'courant' || node.type === 'movement') {
          const categories = nodes.filter(n => n.type === 'courant' || n.type === 'movement');
          const catIndex = categories.findIndex(n => n.id === node.id);
          const catAngle = (catIndex / Math.max(categories.length, 1)) * Math.PI * 2;
          const courantRadius = spacing * 3.8;
          x = Math.cos(catAngle) * courantRadius + centerX;
          y = Math.sin(catAngle) * courantRadius + centerY;
        } else if (node.type === 'philosophe') {
          const philosophers = nodes.filter(n => n.type === 'philosophe');
          const philIndex = philosophers.findIndex(n => n.id === node.id);
          const philAngle = (philIndex / Math.max(philosophers.length, 1)) * Math.PI * 2;
          const philoRadius = spacing * 2.5;
          x = Math.cos(philAngle) * philoRadius + centerX;
          y = Math.sin(philAngle) * philoRadius + centerY;
        } else {
          // Concepts spread in dynamic area
          const concepts = nodes.filter(n => n.type === 'concept');
          const conceptIndex = concepts.findIndex(n => n.id === node.id);
          const conceptGridSize = Math.ceil(Math.sqrt(concepts.length));
          const conceptSpacing = spacing * 0.9;
          const conceptGridStartX = centerX - (conceptGridSize * conceptSpacing) / 2;
          const conceptGridStartY = centerY - (conceptGridSize * conceptSpacing) / 2;
          x = (conceptIndex % conceptGridSize) * conceptSpacing + conceptGridStartX;
          y = Math.floor(conceptIndex / conceptGridSize) * conceptSpacing + conceptGridStartY;
        }
        break;
    }

    return {
      id: node.id,
      type: 'custom',
      position: { x, y },
      data: node,
    };
  });
}

// Convert our graph edges to React Flow edges (no arrows, just lines)
function convertToReactFlowEdges(edges: GraphEdge[]): Edge[] {
  return edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    type: 'smoothstep', // Smooth edges that can connect from any side
    animated: false,
    style: getEdgeStyle(edge),
    data: edge,
    markerEnd: undefined, // No arrow marker
  }));
}

function getEdgeStyle(edge: GraphEdge) {
  const baseStyle = {
    transition: 'all 0.2s',
  };

  switch (edge.type) {
    case 'RELATED':
      return { ...baseStyle, stroke: '#8b6f3c', strokeWidth: 2, opacity: 0.8 };
    case 'OPPOSES':
      return { ...baseStyle, stroke: '#a8864d', strokeWidth: 2, opacity: 0.8 };
    case 'BUILDS_ON':
      return { ...baseStyle, stroke: '#6b552e', strokeWidth: 2, opacity: 0.8 };
    case 'category_concept':
      return { ...baseStyle, stroke: '#6b552e', strokeWidth: 2, opacity: 0.6 };
    case 'author_concept':
      return { ...baseStyle, stroke: '#8b877f', strokeWidth: 2, opacity: 0.6 };
    default:
      return { ...baseStyle, stroke: '#a8864d', strokeWidth: 2, opacity: 0.7 };
  }
}

// Custom node component - memoized for performance
const CustomNode = memo(({ data }: { data: GraphNode }) => {
  const getNodeStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2d2214',
      fontWeight: '500',
      textAlign: 'center',
      padding: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s',
    };

    switch (data.type) {
      case 'concept':
        return {
          ...baseStyle,
          backgroundColor: '#faf9f7',
          border: '3px solid #8b6f3c',
          borderRadius: '0',
          width: '100px',
          height: '60px',
          fontSize: '11px',
          fontWeight: '600',
        };
      case 'philosophe':
        return {
          ...baseStyle,
          backgroundColor: '#f5f5f0',
          border: '2px solid #6b552e',
          borderRadius: '0',
          width: '110px',
          height: '55px',
          fontSize: '11px',
        };
      case 'courant':
        return {
          ...baseStyle,
          backgroundColor: '#f5f5f0',
          border: '2px solid #6b552e',
          borderRadius: '0',
          width: '150px',
          height: '45px',
          fontSize: '13px',
          fontWeight: '600',
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: '#faf9f7',
          border: '2px solid #6b552e',
          borderRadius: '0',
          padding: '10px',
        };
    }
  };

  // Handle style - invisible but functional for ReactFlow
  const handleStyle = {
    opacity: 0,
    width: '1px',
    height: '1px',
    background: 'transparent',
    border: 'none',
  };

  return (
    <div style={getNodeStyles()}>
      {/* Handles on all 4 sides - invisible but functional for proper edge routing */}
      <Handle type="target" position={Position.Top} style={handleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Top} style={handleStyle} isConnectable={false} />
      <Handle type="target" position={Position.Right} style={handleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Right} style={handleStyle} isConnectable={false} />
      <Handle type="target" position={Position.Bottom} style={handleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} isConnectable={false} />
      <Handle type="target" position={Position.Left} style={handleStyle} isConnectable={false} />
      <Handle type="source" position={Position.Left} style={handleStyle} isConnectable={false} />
      <div>{data.label}</div>
    </div>
  );
}, (prev, next) => {
  // Custom comparison for memo - only re-render if id or label changes
  return prev.data.id === next.data.id &&
         prev.data.label === next.data.label &&
         prev.data.type === next.data.type;
});

CustomNode.displayName = 'CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

export function GraphContainerReactFlow({ nodes, edges, layout = 'cose', onNodeClick }: GraphContainerProps) {
  const [flowNodes, setFlowNodes, onNodesChange] = useNodesState([] as Node[]);
  const [flowEdges, setFlowEdges, onEdgesChange] = useEdgesState([] as Edge[]);

  // Memoize node IDs set for edge validation
  const nodeIds = useMemo(() => new Set(nodes.map(n => n.id)), [nodes]);

  // Memoize valid edges
  const validEdges = useMemo(() => {
    return edges.filter(edge =>
      nodeIds.has(edge.source) && nodeIds.has(edge.target)
    );
  }, [edges, nodeIds]);

  // Memoize ReactFlow nodes conversion
  const reactFlowNodes = useMemo(() => {
    return convertToReactFlowNodes(nodes, layout);
  }, [nodes, layout]);

  // Memoize ReactFlow edges conversion
  const reactFlowEdges = useMemo(() => {
    return convertToReactFlowEdges(validEdges);
  }, [validEdges]);

  // Update state when memoized values change
  useEffect(() => {
    setFlowNodes(reactFlowNodes);
    setFlowEdges(reactFlowEdges);
  }, [reactFlowNodes, reactFlowEdges, setFlowNodes, setFlowEdges]);

  const onNodeClickHandler = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      if (onNodeClick && node.data) {
        // Safely extract GraphNode data from React Flow node
        const graphNode = node.data as Record<string, unknown>;
        if (
          typeof graphNode.id === 'string' &&
          typeof graphNode.label === 'string' &&
          typeof graphNode.type === 'string' &&
          typeof graphNode.weight === 'number'
        ) {
          onNodeClick(graphNode as unknown as GraphNode);
        }
      }
    },
    [onNodeClick]
  );

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

  return (
    <div className="w-full max-w-2/3 h-[800px] bg-white border-2 border-paper-300 relative overflow-hidden">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClickHandler}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.05}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.25 }}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        selectNodesOnDrag={false}
        panOnScroll
        selectionOnDrag
        zoomOnScroll
        zoomOnPinch
        panOnDrag
      >
        <Background color="#d9d6d0" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const data = node.data as Record<string, unknown>;
            const type = typeof data?.type === 'string' ? data.type : 'courant';
            // Use categoryColor if available, otherwise fallback to type-based colors
            if (typeof data?.categoryColor === 'string') {
              return data.categoryColor;
            }
            if (type === 'concept') return '#8b6f3c';
            if (type === 'philosophe') return '#2d2214';
            if (type === 'movement') return '#2d5016';
            return '#6b552e';
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>
    </div>
  );
}
