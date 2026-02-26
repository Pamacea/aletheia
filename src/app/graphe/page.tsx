'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/ui';
import { GraphContainerReactFlow } from './components/GraphContainerReactFlow';
import { GraphControls } from './components/GraphControls';
import { getUnifiedGraphData, GraphNode } from '@/lib/actions/graph';
import { RelationLegend, PathFinder } from '@/components/graph';
import { useConceptNetworkData } from '@/lib/graph/hooks';

type LayoutType = 'cose' | 'circle' | 'concentric' | 'grid';
type EntityType = 'concept' | 'philosophe' | 'courant' | 'movement';
type RelationType = 'RELATED' | 'OPPOSES' | 'BUILDS_ON' | 'INFLUENCES' | 'CRITIQUES' | 'EXTENDS' | 'CLARIFIES' | 'EXEMPLIFIES';

export default function GraphePage() {
  const [graphData, setGraphData] = useState<{
    nodes: GraphNode[];
    edges: any[];
    stats: { concepts: number; philosophers: number; courants: number; movements: number; totalRelations: number } | undefined;
  }>({ nodes: [], edges: [], stats: undefined });
  const [layout, setLayout] = useState<LayoutType>('cose');
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [filters, setFilters] = useState<{
    types: EntityType[];
    searchQuery: string;
    relationTypes: RelationType[];
  }>({
    types: ['concept', 'philosophe', 'courant', 'movement'],
    searchQuery: '',
    relationTypes: ['RELATED', 'OPPOSES', 'BUILDS_ON', 'INFLUENCES', 'CRITIQUES', 'EXTENDS', 'CLARIFIES', 'EXEMPLIFIES'],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPathFinder, setShowPathFinder] = useState(false);

  // Use ref to track latest filters without causing re-renders
  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  // Load concepts for path finder
  const { concepts: allConcepts } = useConceptNetworkData();

  const loadGraphData = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentFilters = filtersRef.current;
      const data = await getUnifiedGraphData({
        types: currentFilters.types,
        searchQuery: currentFilters.searchQuery,
        limit: 150,
      });

      // Filter edges by relation type
      const filteredEdges = data.edges.filter(edge =>
        currentFilters.relationTypes.includes(edge.type as RelationType)
      );

      setGraphData({ ...data, edges: filteredEdges });
    } catch (error) {
      console.error('Error loading graph data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty deps - uses ref instead

  // Initial load
  useEffect(() => {
    loadGraphData();
  }, [loadGraphData]);

  // Reload when filters change (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      loadGraphData();
    }, 500);
    return () => clearTimeout(timeout);
  }, [filters.types, filters.searchQuery, filters.relationTypes, loadGraphData]);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const handleFilterChange = (types: EntityType[]) => {
    setFilters(prev => ({ ...prev, types }));
  };

  const handleRelationFilterChange = (relationTypes: RelationType[]) => {
    setFilters(prev => ({ ...prev, relationTypes }));
  };

  const handleLayoutChange = (newLayout: string) => {
    setLayout(newLayout as LayoutType);
  };

  const handleNodeClick = (node: GraphNode | null) => {
    setSelectedNode(node);
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              Graphe
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl font-semibold text-ink mb-3">
            Explorez les <span className="living-word">Connexions Philosophiques</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto">
            Un <span className="living-word">graphe de connaissance</span> unifié reliant concepts, philosophes et courants de pensée.
          </p>
        </div>

        {/* Graph Controls */}
        <GraphControls
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          onLayoutChange={handleLayoutChange}
          stats={graphData.stats}
        />

        {/* Toggle for Path Finder */}
        <div className="mb-4 flex justify-start sm:justify-end">
          <button
            onClick={() => setShowPathFinder(!showPathFinder)}
            className="px-4 py-2 bg-paper-50 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 text-ink font-medium transition-all duration-200"
          >
            {showPathFinder ? 'Masquer' : 'Afficher'} le chercheur de chemin
          </button>
        </div>

        {/* Two column layout: Graph + Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Graph - takes 2 columns */}
          <div className="xl:col-span-2">
            <GraphContainerReactFlow
              nodes={graphData.nodes}
              edges={graphData.edges}
              layout={layout}
              onNodeClick={handleNodeClick}
            />
          </div>

          {/* Side Panel - takes 1 column */}
          <div className="space-y-6">
            {/* Path Finder */}
            {showPathFinder && (
              <PathFinder concepts={allConcepts} />
            )}

            {/* Relation Legend */}
            <RelationLegend
              onFilterChange={handleRelationFilterChange}
              selectedTypes={filters.relationTypes}
              showCounts={true}
            />
          </div>
        </div>

        {/* Node Detail Panel */}
        {selectedNode && (
          <div className="mt-6 bg-white border-2 border-paper-300 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-sepia-100 text-sepia-700">
                    {selectedNode.type === 'concept' ? 'Concept' :
                     selectedNode.type === 'philosophe' ? 'Philosophe' :
                     'Courant'}
                  </span>
                  {selectedNode.category && (
                    <span className="text-sm text-sepia-600">
                      {selectedNode.category}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {selectedNode.label}
                </h3>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-ink-light hover:text-ink text-2xl"
              >
                ×
              </button>
            </div>

            {(() => {
              const definition = selectedNode.metadata?.definition;
              if (typeof definition === 'string') {
                return <p className="text-ink-light mb-4">{definition}</p>;
              }
              return null;
            })()}

            {selectedNode.type === 'philosophe' && selectedNode.metadata && (
              <div className="flex gap-4 text-sm text-ink-light">
                <span>Œuvres: <strong className="text-ink">{selectedNode.metadata.worksCount as number}</strong></span>
                <span>Concepts: <strong className="text-ink">{selectedNode.metadata.conceptCount as number}</strong></span>
              </div>
            )}

            {selectedNode.type === 'courant' && selectedNode.metadata && (
              <div className="text-sm text-ink-light">
                Concepts dans ce courant: <strong className="text-ink">{selectedNode.metadata.conceptCount as number}</strong>
              </div>
            )}

            {selectedNode.type === 'movement' && selectedNode.metadata && (
              <div className="text-sm text-ink-light space-y-1">
                {typeof selectedNode.metadata.period === 'string' && (
                  <div>Période: <strong className="text-ink">{selectedNode.metadata.period}</strong></div>
                )}
                {typeof selectedNode.metadata.philosopherCount === 'number' && (
                  <div>Philosophes: <strong className="text-ink">{selectedNode.metadata.philosopherCount}</strong></div>
                )}
              </div>
            )}

            {(() => {
              const slug = selectedNode.type === 'concept' ? selectedNode.metadata?.slug : null;
              if (typeof slug === 'string') {
                return (
                  <Link
                    href={`/conceptuaire/${slug}`}
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium transition-colors"
                  >
                    Voir les détails
                  </Link>
                );
              }
              return null;
            })()}
          </div>
        )}
      </main>
    </div>
  );
}
