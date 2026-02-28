/**
 * Graph Configuration Module
 *
 * Provides Cytoscape.js layout configurations for different graph layouts.
 * Each layout defines positioning and spacing rules for graph visualization.
 *
 * @see https://js.cytoscape.org/#layouts
 */

/**
 * Layout configuration type definitions
 */
export interface LayoutConfig {
  name: string;
  animate?: boolean;
  animationDuration?: number;
  fit?: boolean;
  padding?: number;
  avoidOverlap?: boolean;
  nodeDimensionsIncludeLabels?: boolean;
  idealEdgeLength?: number;
  nodeOverlap?: number;
  refresh?: number;
  componentSpacing?: number;
  nodeRepulsion?: number;
  edgeElasticity?: number;
  nestingFactor?: number;
  gravity?: number;
  numIter?: number;
  initialTemp?: number;
  coolingFactor?: number;
  minTemp?: number;
  startAngle?: number;
  sweep?: number;
  clockwise?: boolean;
  minNodeSpacing?: number;
  concentric?: (node: any) => number;
  rows?: number;
  cols?: number;
  position?: (node: any) => { row: number; col: number };
}

/**
 * Available layout types
 */
export type LayoutType = 'cose' | 'circle' | 'concentric' | 'grid';

/**
 * Get layout configuration by name
 *
 * @param layoutName - The layout type to retrieve
 * @returns Layout configuration object
 *
 * @example
 * ```ts
 * const config = getLayoutConfig('cose')
 * cy.layout(config).run()
 * ```
 */
export function getLayoutConfig(layoutName: LayoutType = 'cose'): LayoutConfig {
  const layouts: Record<LayoutType, LayoutConfig> = {
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

/**
 * Get all available layout names
 *
 * @returns Array of layout type names
 */
export function getAvailableLayouts(): LayoutType[] {
  return ['cose', 'circle', 'concentric', 'grid'];
}
