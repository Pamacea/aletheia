/**
 * Graph Styles Module
 *
 * Provides Cytoscape.js style definitions for graph visualization.
 * Styles define the visual appearance of nodes, edges, and their states.
 *
 * @see https://js.cytoscape.org/#style
 */

/**
 * Cytoscape style definition
 */
export interface CytoscapeStyle {
  selector: string;
  style: Record<string, string | number>;
}

/**
 * Get complete Cytoscape style sheet
 *
 * @returns Array of style definitions for Cytoscape.js
 *
 * @example
 * ```ts
 * const cy = cytoscape({
 *   style: getStyles() as any,
 *   // ... other config
 * })
 * ```
 */
export function getStyles(): CytoscapeStyle[] {
  return [
    // Base node styles
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

    // Concept node styles
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

    // Philosophe node styles
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

    // Courant node styles
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

    // Node state: faded (for non-selected nodes)
    {
      selector: 'node.faded',
      style: {
        opacity: 0.2,
      },
    },

    // Node state: selected
    {
      selector: 'node:selected',
      style: {
        'border-width': 4,
        'border-color': '#8b6f3c',
      },
    },

    // Base edge styles
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

    // Concept relation edges
    {
      selector: 'edge[type="concept_relation"]',
      style: {
        'line-color': '#a8864d',
        width: 'mapData(strength, 1, 5, 2, 5)',
        opacity: 0.7,
      },
    },

    // Philosopher-concept edges
    {
      selector: 'edge[type="philosopher_concept"]',
      style: {
        'line-color': '#8b877f',
        'line-style': 'dashed',
        width: 1.5,
        opacity: 0.5,
      },
    },

    // Category-concept edges
    {
      selector: 'edge[type="category_concept"]',
      style: {
        'line-color': '#6b552e',
        'line-style': 'dotted',
        width: 2,
        opacity: 0.6,
      },
    },

    // Author-concept edges
    {
      selector: 'edge[type="author_concept"]',
      style: {
        'line-color': '#8b877f',
        'line-style': 'dashed',
        width: 1.5,
        opacity: 0.5,
      },
    },

    // Philosopher-concept-quote edges
    {
      selector: 'edge[type="philosopher_concept_quote"]',
      style: {
        'line-color': '#a8864d',
        'line-style': 'solid',
        width: 1,
        opacity: 0.4,
      },
    },

    // Edge state: faded
    {
      selector: 'edge.faded',
      style: {
        opacity: 0.1,
      },
    },

    // Edge state: selected
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

/**
 * Get style definition for a specific selector
 *
 * @param selector - The CSS selector for the style
 * @returns Style definition or undefined if not found
 */
export function getStyleBySelector(selector: string): CytoscapeStyle | undefined {
  return getStyles().find(style => style.selector === selector);
}

/**
 * Color palette used in graph styles
 */
export const GraphColors = {
  text: '#2d2b29',
  textLight: '#faf9f7',
  border: '#2d2b29',
  edge: '#d9d6d0',
  edgeHighlight: '#a8864d',
  edgePhilosopher: '#8b877f',
  edgeCategory: '#6b552e',
  highlight: '#8b6f3c',
  background: '#2d2214',
} as const;
