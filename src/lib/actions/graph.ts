'use server';

import { prisma } from '@/lib/db/prisma';
import { unstable_cache } from 'next/cache';

// Version: 1.0.0 - Unified graph data fetcher for concepts, philosophers, and categories

export interface GraphNode extends Record<string, unknown> {
  id: string;
  label: string;
  type: 'concept' | 'philosophe' | 'courant' | 'movement';
  category?: string;
  categoryColor?: string;
  weight: number;
  metadata?: Record<string, unknown>;
}

export interface GraphEdge extends Record<string, unknown> {
  id: string;
  source: string;
  target: string;
  type: string;
  strength: number;
}

export interface UnifiedGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  stats: {
    concepts: number;
    philosophers: number;
    courants: number;
    movements: number;
    totalRelations: number;
  };
}

interface GraphDataRequest {
  types?: Array<'concept' | 'philosophe' | 'courant' | 'movement'>;
  categoryId?: string;
  searchQuery?: string;
  limit?: number;
}

export async function getUnifiedGraphData(
  params: GraphDataRequest = {}
): Promise<UnifiedGraphData> {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const limit = params.limit || 100;

  const includeConcepts = !params.types || params.types.includes('concept');
  const includePhilosophers = !params.types || params.types.includes('philosophe');
  const includeCourants = !params.types || params.types.includes('courant');

  // Map to track philosopher nodes from keyAuthors (so we don't create duplicates)
  const keyAuthorsMap = new Map<string, { concepts: Set<string> }>();

  // Track all concept IDs to avoid duplicates
  const conceptNodeIds = new Set<string>();

  // Track created edges to avoid duplicates (key: "sourceId-targetId")
  const edgePairs = new Set<string>();

  // Collect category IDs referenced by concepts (for loading later)
  const categoryIdsToLoad = new Set<string>();

  // Track ALL philosopher node IDs (from both keyAuthors and MovementPhilosophers) for deduplication
  const philosopherNodeIds = new Set<string>();

  // Declare concepts at higher scope so it's accessible later
  let concepts: any[] = [];

  // Fetch concepts with relations (both outgoing AND incoming)
  if (includeConcepts) {
    concepts = await prisma.concept.findMany({
      where: {
        ...(params.categoryId ? { categoryId: params.categoryId } : {}),
        ...(params.searchQuery ? {
          OR: [
            { name: { contains: params.searchQuery, mode: 'insensitive' } },
            { shortDefinition: { contains: params.searchQuery, mode: 'insensitive' } },
          ],
        } : {}),
      },
      include: {
        category: true,
        relations: {
          include: { relatedConcept: { include: { category: true } } },
          // Increased from 5 to load more relations
          take: 50,
        },
        relatedRelations: {
          include: { concept: { include: { category: true } } },
          take: 50,
        },
      },
      take: limit,
    });

    // Add concept nodes (including related concepts from BOTH directions)
    concepts.forEach((concept) => {
      const nodeId = `concept:${concept.id}`;
      if (!conceptNodeIds.has(nodeId)) {
        // Calculate total connections (both outgoing and incoming)
        const totalConnections =
          (concept.relations?.length || 0) +
          (concept.relatedRelations?.length || 0);

        nodes.push({
          id: nodeId,
          label: concept.name,
          type: 'concept',
          category: concept.category?.name,
          categoryColor: concept.category?.color || '#8b6f3c',
          weight: totalConnections,
          metadata: {
            definition: concept.shortDefinition,
            slug: concept.slug,
          },
        });
        conceptNodeIds.add(nodeId);
      }

      // Also add related concept nodes from OUTGOING relations
      concept.relations?.forEach((rel: any) => {
        const relatedNodeId = `concept:${rel.relatedConceptId}`;
        if (!conceptNodeIds.has(relatedNodeId) && rel.relatedConcept) {
          nodes.push({
            id: relatedNodeId,
            label: rel.relatedConcept.name,
            type: 'concept',
            category: rel.relatedConcept.category?.name,
            categoryColor: rel.relatedConcept.category?.color || '#8b6f3c',
            weight: 1, // Related concepts have minimal weight initially
            metadata: {
              definition: rel.relatedConcept.shortDefinition,
              slug: rel.relatedConcept.slug,
            },
          });
          conceptNodeIds.add(relatedNodeId);
        }
      });

      // Also add related concept nodes from INCOMING relations (relatedRelations)
      concept.relatedRelations?.forEach((rel: any) => {
        const sourceNodeId = `concept:${rel.conceptId}`;
        if (!conceptNodeIds.has(sourceNodeId) && rel.concept) {
          nodes.push({
            id: sourceNodeId,
            label: rel.concept.name,
            type: 'concept',
            category: rel.concept.category?.name,
            categoryColor: rel.concept.category?.color || '#8b6f3c',
            weight: 1, // Related concepts have minimal weight initially
            metadata: {
              definition: rel.concept.shortDefinition,
              slug: rel.concept.slug,
            },
          });
          conceptNodeIds.add(sourceNodeId);
        }
      });
    });

    // Create concept-concept edges from BOTH directions (outgoing and incoming)
    concepts.forEach((concept) => {
      // Process OUTGOING relations (concept → relatedConcept)
      concept.relations?.forEach((rel: any) => {
        const sourceId = `concept:${concept.id}`;
        const targetId = `concept:${rel.relatedConceptId}`;
        // Only create edge if both nodes exist and edge pair is unique
        if (conceptNodeIds.has(sourceId) && conceptNodeIds.has(targetId)) {
          const edgeKey = `${sourceId}-${targetId}`;
          if (!edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:${concept.id}-${rel.relatedConceptId}`,
              source: sourceId,
              target: targetId,
              type: rel.relationType,
              strength: rel.strength,
            });
          }
        }
      });

      // Process INCOMING relations (other concept → current concept)
      // These are from relatedRelations where current concept is the target
      concept.relatedRelations?.forEach((rel: any) => {
        const sourceId = `concept:${rel.conceptId}`;
        const targetId = `concept:${concept.id}`;
        // Only create edge if both nodes exist and edge pair is unique
        if (conceptNodeIds.has(sourceId) && conceptNodeIds.has(targetId)) {
          const edgeKey = `${sourceId}-${targetId}`;
          if (!edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:${rel.conceptId}-${concept.id}`,
              source: sourceId,
              target: targetId,
              type: rel.relationType,
              strength: rel.strength,
            });
          }
        }
      });
    });

    // Log statistics
    const totalRelations = concepts.reduce((sum, c) =>
      sum + (c.relations?.length || 0) + (c.relatedRelations?.length || 0), 0);
    // If no edges found, create some demo edges between concepts
    if (edges.length === 0 && concepts.length > 1) {
      for (let i = 0; i < concepts.length - 1; i++) {
        edges.push({
          id: `edge:demo-${concepts[i].id}-${concepts[i + 1].id}`,
          source: `concept:${concepts[i].id}`,
          target: `concept:${concepts[i + 1].id}`,
          type: 'RELATED',
          strength: 2,
        });
      }
    }

    // Add concept-category (courant) edges and collect keyAuthors
    concepts.forEach((concept) => {
      // Track category IDs to load
      if (concept.categoryId) {
        categoryIdsToLoad.add(concept.categoryId);
      }

      // Collect keyAuthors for philosopher nodes creation (edges created later)
      if (concept.keyAuthors && Array.isArray(concept.keyAuthors)) {
        concept.keyAuthors.forEach((author: any) => {
          // Skip invalid authors (objects without name, null, undefined)
          let authorName: string | null = null;
          if (typeof author === 'string' && author.trim()) {
            authorName = author.trim();
          } else if (author && typeof author === 'object' && author.name && typeof author.name === 'string') {
            authorName = author.name.trim();
          }

          // Only track valid author names
          if (authorName) {
            if (!keyAuthorsMap.has(authorName)) {
              keyAuthorsMap.set(authorName, { concepts: new Set() });
            }
            keyAuthorsMap.get(authorName)!.concepts.add(concept.id);
          }
        });
      }
    });
  }

  // Fetch philosophers - ONLY those linked to displayed concepts via keyAuthors
  if (includePhilosophers) {
    try {
      const philosopherMap = new Map<string, {
        concepts: Set<string>;
        works: number;
      }>();

      // ONLY add philosophers from keyAuthors (those actually linked to loaded concepts)
      keyAuthorsMap.forEach((data, name) => {
        philosopherMap.set(name, {
          concepts: new Set(data.concepts),
          works: 0,
        });
      });

      // Try to fetch quotes to count works, but ONLY for philosophers already in keyAuthors
      if (philosopherMap.size > 0) {
        try {
          const quotesWithAuthors = await prisma.quote.findMany({
            where: {
              isPublic: true,
              sourceId: { not: null },
            },
            include: {
              source: true,
            },
            take: limit * 2,
            orderBy: { createdAt: 'desc' },
          });

          // Count works ONLY for philosophers already in the map (from keyAuthors)
          quotesWithAuthors.forEach((quote) => {
            if (quote.source?.author) {
              let authorName: string | null = null;
              if (typeof quote.source.author === 'string' && quote.source.author.trim()) {
                authorName = quote.source.author.trim();
              } else if (quote.source.author && typeof quote.source.author === 'object' && (quote.source.author as any).name) {
                authorName = (quote.source.author as any).name.trim();
              }

              // ONLY count if this philosopher is already linked to concepts
              if (authorName && philosopherMap.has(authorName)) {
                philosopherMap.get(authorName)!.works++;
              }
            }
          });
        } catch (quoteError) {
          // If quotes fetch fails, continue without work counts
        }
      }

      // Add philosopher nodes - ONLY those linked to concepts
      philosopherMap.forEach((data, name) => {
        const nodeId = `philosophe:${encodeURIComponent(name)}`;
        nodes.push({
          id: nodeId,
          label: name,
          type: 'philosophe',
          category: undefined,
          categoryColor: '#2d2214',
          weight: Math.min(data.concepts.size + data.works, 10),
          metadata: {
            worksCount: data.works,
            conceptCount: data.concepts.size,
          },
        });
        // Track philosopher node IDs for deduplication with MovementPhilosophers
        philosopherNodeIds.add(nodeId);
      });

      // Create edges from keyAuthors to their concepts (only if concept nodes exist and edge is unique)
      keyAuthorsMap.forEach((data, authorName) => {
        const authorId = encodeURIComponent(authorName);
        data.concepts.forEach((conceptId) => {
          const sourceId = `philosophe:${authorId}`;
          const targetId = `concept:${conceptId}`;
          const edgeKey = `${sourceId}-${targetId}`;
          // Only create edge if concept node exists and edge pair is unique
          if (conceptNodeIds.has(targetId) && !edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:philosophe-${authorId}-concept-${conceptId}`,
              source: sourceId,
              target: targetId,
              type: 'author_concept',
              strength: 1,
            });
          }
        });
      });
    } catch (error) {
      // Silently fail - philosophers are optional
    }
  }

  // Fetch categories as "courants" - only those referenced by concepts
  const categoryNodeIds = new Set<string>();
  if (includeCourants && categoryIdsToLoad.size > 0) {
    try {
      const categories = await prisma.category.findMany({
        where: {
          id: { in: Array.from(categoryIdsToLoad) },
          ...(params.searchQuery ? {
            name: { contains: params.searchQuery, mode: 'insensitive' },
          } : {}),
        },
        include: {
          _count: { select: { concepts: true } },
        },
      });

      categories.forEach((category) => {
        const nodeId = `courant:${category.id}`;
        nodes.push({
          id: nodeId,
          label: category.name,
          type: 'courant',
          category: (category.parentId || 'root') as string,
          categoryColor: getCategoryPeriodColor(category.name),
          weight: Math.min(category._count.concepts, 10),
          metadata: {
            description: category.description,
            conceptCount: category._count.concepts,
          },
        });
        categoryNodeIds.add(nodeId);
      });

      // Now create concept-category edges (only if both nodes exist and edge is unique)
      concepts.forEach((concept) => {
        if (concept.categoryId) {
          const sourceId = `courant:${concept.categoryId}`;
          const targetId = `concept:${concept.id}`;
          const edgeKey = `${sourceId}-${targetId}`;
          // Only create edge if both nodes exist and edge pair is unique
          if (categoryNodeIds.has(sourceId) && conceptNodeIds.has(targetId) && !edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:courant-${concept.categoryId}-concept-${concept.id}`,
              source: sourceId,
              target: targetId,
              type: 'category_concept',
              strength: 2,
            });
          }
        }
      });
    } catch (error) {
      // Silently fail - categories are optional
    }
  }

  // Fetch Movements - this is key for connecting philosophers!
  if (includeCourants) {
    try {
      const movements = await prisma.movement.findMany({
        where: params.searchQuery ? {
          name: { contains: params.searchQuery, mode: 'insensitive' },
        } : {},
        include: {
          movementPhilosophers: {
            include: {
              philosopher: true,
            },
          },
          category: true,
        },
        take: limit,
      });

      const movementNodeIds = new Set<string>();

      // Create Movement nodes
      movements.forEach((movement) => {
        const nodeId = `movement:${movement.id}`;
        nodes.push({
          id: nodeId,
          label: movement.name,
          type: 'movement',
          category: movement.category?.name || 'Uncategorized',
          categoryColor: getCategoryPeriodColor(movement.category?.name || movement.period || 'default'),
          weight: movement.movementPhilosophers.length,
          metadata: {
            description: movement.shortDefinition || movement.description,
            period: movement.period,
            philosopherCount: movement.movementPhilosophers.length,
          },
        });
        movementNodeIds.add(nodeId);
      });

      // Create Movement ↔ Philosopher edges via MovementPhilosopher
      // Also add philosopher nodes from MovementPhilosophers that don't exist yet
      movements.forEach((movement) => {
        movement.movementPhilosophers.forEach((mp) => {
          const philosopherName = mp.philosopher.name;
          const philosopherId = `philosophe:${encodeURIComponent(philosopherName)}`;
          const movementId = `movement:${movement.id}`;
          const edgeKey = `${movementId}-${philosopherId}`;

          // Check if philosopher node already exists from keyAuthors
          const philosopherExists = philosopherNodeIds.has(philosopherId);

          // If philosopher doesn't exist yet, create the node from MovementPhilosophers
          if (!philosopherExists) {
            nodes.push({
              id: philosopherId,
              label: philosopherName,
              type: 'philosophe',
              category: undefined,
              categoryColor: '#2d2214',
              weight: 1, // Minimal weight for philosophers only from movements
              metadata: {
                worksCount: 0,
                conceptCount: 0,
              },
            });
            philosopherNodeIds.add(philosopherId);
          }

          // Create edge if both nodes exist and edge is unique
          if (philosopherNodeIds.has(philosopherId) && movementNodeIds.has(movementId) && !edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:movement-${movement.id}-philosopher-${mp.philosopherId}`,
              source: movementId,
              target: philosopherId,
              type: 'movement_philosopher',
              strength: 2,
            });
          }
        });
      });

      // Create Movement ↔ Concept edges via keyPhilosophers in Movement
      movements.forEach((movement) => {
        if (movement.keyPhilosophers && Array.isArray(movement.keyPhilosophers)) {
          movement.keyPhilosophers.forEach((keyPhilosopherName: string) => {
            // Find concepts that have this philosopher in keyAuthors
            concepts.forEach((concept) => {
              if (concept.keyAuthors && Array.isArray(concept.keyAuthors)) {
                const hasPhilosopher = concept.keyAuthors.some((author: any) => {
                  const authorName = typeof author === 'string' ? author : author?.name;
                  return authorName === keyPhilosopherName;
                });

                if (hasPhilosopher) {
                  const movementId = `movement:${movement.id}`;
                  const conceptId = `concept:${concept.id}`;
                  const edgeKey = `${movementId}-${conceptId}`;

                  if (movementNodeIds.has(movementId) && conceptNodeIds.has(conceptId) && !edgePairs.has(edgeKey)) {
                    edgePairs.add(edgeKey);
                    edges.push({
                      id: `edge:movement-${movement.id}-concept-${concept.id}`,
                      source: movementId,
                      target: conceptId,
                      type: 'movement_concept',
                      strength: 1,
                    });
                  }
                }
              }
            });
          });
        }
      });

      // Create Movement ↔ Category edges
      movements.forEach((movement) => {
        if (movement.categoryId) {
          const movementId = `movement:${movement.id}`;
          const categoryId = `courant:${movement.categoryId}`;
          const edgeKey = `${movementId}-${categoryId}`;

          if (movementNodeIds.has(movementId) && categoryNodeIds.has(categoryId) && !edgePairs.has(edgeKey)) {
            edgePairs.add(edgeKey);
            edges.push({
              id: `edge:movement-${movement.id}-category-${movement.categoryId}`,
              source: movementId,
              target: categoryId,
              type: 'movement_category',
              strength: 2,
            });
          }
        }
      });

    } catch (error) {
      console.error('[Graph] Error loading movements:', error);
      // Silently fail - movements are optional
    }
  }

  // Calculate stats
  const stats = {
    concepts: nodes.filter(n => n.type === 'concept').length,
    philosophers: nodes.filter(n => n.type === 'philosophe').length,
    courants: nodes.filter(n => n.type === 'courant').length,
    movements: nodes.filter(n => n.type === 'movement').length,
    totalRelations: edges.length,
  };

  return { nodes, edges, stats };
}

function getCategoryPeriodColor(categoryName: string): string {
  const periodMap: Record<string, string> = {
    // Categories (thématiques)
    'Métaphysique': '#8b6f3c',
    'Éthique': '#8b6f3c',
    'Politique': '#8b6f3c',
    'Théologie': '#6b552e',
    'Épistémologie': '#4a3a21',
    'Esthétique': '#4a3a21',
    'Logique': '#8b6f3c',
    'Philosophie du langage': '#6b552e',
    'Philosophie de l\'esprit': '#4a3a21',
    'Philosophie politique': '#8b6f3c',

    // Périodes historiques (pour Movements)
    'Antiquité': '#2d5016', // vert foncé
    'Antiquité grecque': '#1a3d0c',
    'Antiquité romaine': '#2d5016',
    'Moyen Âge': '#4a6741', // vert olive
    'Moyen Âge tardif': '#5c7a52',
    'Renaissance': '#8b6f3c', // sepia
    'Moderne': '#b89b6e', // beige clair
    'Contemporaine': '#6b8e9a', // bleu-gris
    'XXe siècle': '#4a6b7a',
    'XXIe siècle': '#3d5a6b',

    // Courants philosophiques spécifiques
    'Stoïcisme': '#2d5016',
    'Épicurisme': '#3d6b2e',
    'Néoplatonisme': '#1a3d0c',
    'Scolastique': '#4a6741',
    'Humanisme': '#8b6f3c',
    'Rationalisme': '#7a9ab8',
    'Empirisme': '#9ab8ce',
    'Idéalisme': '#b8ce7a',
    'Materialisme': '#6b5a4a',
    'Existentialisme': '#8b6b4a',
    'Phénoménologie': '#7a6b8b',
    'Structuralisme': '#5a6b7a',
    'Post-structuralisme': '#6b5a6b',
    'Pragmatisme': '#8b7a5a',
    'Analytique': '#5a7a8b',
  };
  return periodMap[categoryName] || '#2d2214';
}
