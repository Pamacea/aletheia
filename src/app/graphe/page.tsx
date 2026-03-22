'use client';

import { useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { BackButton } from '@/ui/components/BackButton';
import { GraphControls } from './components/GraphControls';
import { getUnifiedGraphData, GraphNode } from '@/lib/actions/graph';

const GraphContainerReactFlow = dynamic(
  () => import('./components/GraphContainerReactFlow').then(mod => ({ default: mod.GraphContainerReactFlow })),
  {
    ssr: false,
    loading: () => <GraphSkeleton />,
  }
);

/** Skeleton mimant la forme du graphe pendant le chargement */
function GraphSkeleton() {
  return (
    <div className="w-full h-[600px] bg-paper-100 border-2 border-paper-300 relative overflow-hidden">
      {/* Faux noeuds */}
      <div className="absolute top-[15%] left-[20%] w-16 h-16 rounded-full bg-paper-200 border-2 border-paper-300 animate-pulse" />
      <div className="absolute top-[25%] left-[55%] w-20 h-20 rounded-full bg-sepia-100 border-2 border-sepia-200 animate-pulse" style={{ animationDelay: '150ms' }} />
      <div className="absolute top-[55%] left-[35%] w-14 h-14 rounded-full bg-paper-200 border-2 border-paper-300 animate-pulse" style={{ animationDelay: '300ms' }} />
      <div className="absolute top-[45%] left-[70%] w-12 h-12 rounded-full bg-sepia-100 border-2 border-sepia-200 animate-pulse" style={{ animationDelay: '100ms' }} />
      <div className="absolute top-[70%] left-[15%] w-10 h-10 rounded-full bg-paper-200 border-2 border-paper-300 animate-pulse" style={{ animationDelay: '250ms' }} />
      <div className="absolute top-[65%] left-[60%] w-16 h-16 rounded-full bg-paper-200 border-2 border-paper-300 animate-pulse" style={{ animationDelay: '200ms' }} />
      <div className="absolute top-[35%] left-[10%] w-10 h-10 rounded-full bg-sepia-100 border-2 border-sepia-200 animate-pulse" style={{ animationDelay: '350ms' }} />
      <div className="absolute top-[80%] left-[45%] w-12 h-12 rounded-full bg-paper-200 border-2 border-paper-300 animate-pulse" style={{ animationDelay: '400ms' }} />

      {/* Fausses arêtes (lignes SVG) */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <line x1="28%" y1="23%" x2="63%" y2="33%" stroke="#8b6f3c" strokeWidth="1.5" />
        <line x1="63%" y1="33%" x2="42%" y2="60%" stroke="#8b6f3c" strokeWidth="1.5" />
        <line x1="42%" y1="60%" x2="78%" y2="50%" stroke="#d4bc8f" strokeWidth="1" />
        <line x1="28%" y1="23%" x2="17%" y2="40%" stroke="#d4bc8f" strokeWidth="1" />
        <line x1="17%" y1="40%" x2="22%" y2="75%" stroke="#8b6f3c" strokeWidth="1.5" />
        <line x1="22%" y1="75%" x2="52%" y2="85%" stroke="#d4bc8f" strokeWidth="1" />
        <line x1="78%" y1="50%" x2="68%" y2="72%" stroke="#8b6f3c" strokeWidth="1.5" />
        <line x1="52%" y1="85%" x2="68%" y2="72%" stroke="#d4bc8f" strokeWidth="1" />
      </svg>

      {/* Label central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-paper-50/80 backdrop-blur-sm px-6 py-3 border border-paper-300">
          <p className="text-ink-light text-sm animate-pulse">Chargement du graphe...</p>
        </div>
      </div>

      {/* Faux contrôles en bas à droite */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1">
        <div className="w-8 h-8 bg-paper-200 border border-paper-300 animate-pulse" />
        <div className="w-8 h-8 bg-paper-200 border border-paper-300 animate-pulse" />
        <div className="w-8 h-8 bg-paper-200 border border-paper-300 animate-pulse" />
      </div>
    </div>
  );
}

const PathFinder = dynamic(
  () => import('@/components/graph/PathFinder').then(mod => ({ default: mod.PathFinder })),
  { ssr: false, loading: () => <div className="h-32 bg-paper-100 animate-pulse" /> }
);

const RelationLegend = dynamic(
  () => import('@/components/graph/RelationLegend').then(mod => ({ default: mod.RelationLegend })),
  { ssr: false }
);

type LayoutType = 'cose' | 'circle' | 'concentric' | 'grid';
type EntityType = 'concept' | 'philosophe' | 'courant' | 'movement';
type RelationType = 'RELATED' | 'OPPOSES' | 'BUILDS_ON' | 'INFLUENCES' | 'CRITIQUES' | 'EXTENDS' | 'CLARIFIES' | 'EXEMPLIFIES';

export default function GraphePage() {
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
  const [showPathFinder, setShowPathFinder] = useState(false);
  const [allConcepts, setAllConcepts] = useState<Map<string, { name: string; category?: string }>>(new Map());

  // TanStack Query — auto-cancels stale requests, caches results, deduplicates
  const { data: rawGraphData, isLoading } = useQuery({
    queryKey: ['graph-data', filters.types, filters.searchQuery],
    queryFn: () => getUnifiedGraphData({
      types: filters.types,
      searchQuery: filters.searchQuery,
      limit: 150,
    }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  // Filter edges client-side by relation type (no refetch needed)
  const graphData = useMemo(() => {
    if (!rawGraphData) return { nodes: [], edges: [], stats: undefined };
    return {
      ...rawGraphData,
      edges: rawGraphData.edges.filter(edge =>
        filters.relationTypes.includes(edge.type as RelationType)
      ),
    };
  }, [rawGraphData, filters.relationTypes]);

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
      {/* Header - FULL WIDTH */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <BackButton />
            <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
              Graphe
            </h1>
            <div className="w-10 sm:w-20 flex-shrink-0" />
          </div>
        </div>
      </header>

      {/* Main Content - FULL WIDTH */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section - FULL WIDTH */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink mb-3">
            Explorez les <span className="living-word">Connexions Philosophiques</span>
          </h2>
          <p className="text-ink-light text-base sm:text-lg max-w-3xl mx-auto">
            Un <span className="living-word">graphe de connaissance</span> unifié reliant concepts, philosophes et courants de pensée.
          </p>
        </div>

        {/* Content Container - 2/3 WIDTH */}
        <div className="content-2-3">
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
              onClick={async () => {
                const newShow = !showPathFinder;
                setShowPathFinder(newShow);
                if (newShow && allConcepts.size === 0) {
                  try {
                    const response = await fetch('/api/concepts/all');
                    if (response.ok) {
                      const data = await response.json();
                      const conceptMap = new Map<string, { name: string; category?: string }>();
                      data.concepts.forEach((c: any) => {
                        conceptMap.set(c.slug, { name: c.name, category: c.category?.name });
                      });
                      setAllConcepts(conceptMap);
                    }
                  } catch (e) { /* ignore */ }
                }
              }}
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
        </div>
      </main>
    </div>
  );
}
