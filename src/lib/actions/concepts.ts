'use server';

import { prisma } from '@/lib/db/prisma';
import type {
  Concept,
  ConceptWithRelations,
  Category,
  Etymology,
  ConceptAuthor,
  ConceptExample,
  ConceptReasoning,
} from '@/types';
import type { ConceptWithCategory } from '@/types/prisma';
import type { RelationType } from '@prisma/client';

// ============================================================================
// TYPES FOR ACTIONS
// ============================================================================

export interface QuoteWithSource {
  id: string;
  text: string;
  source?: {
    author: string | null;
    title: string | null;
  } | null;
}

// ============================================================================
// SERVER ACTIONS - CONCEPTS
// ============================================================================

export async function getConcepts(params?: { search?: string; category?: string; page?: number; limit?: number }): Promise<ConceptWithCategory[]> {
  'use server';

  const search = params?.search || '';
  const categorySlug = params?.category || '';
  const page = params?.page || 1;
  const limit = params?.limit || 24; // 24 concepts par page (grid responsive)

  const concepts = await prisma.concept.findMany({
    where: {
      ...(categorySlug ? { category: { slug: categorySlug } } : {}),
      ...(search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { shortDefinition: { contains: search, mode: 'insensitive' } },
          { tags: { hasSome: [search] } }
        ]
      } : {})
    },
    include: {
      category: {
        select: {
          id: true,
          slug: true,
          name: true,
          color: true
        }
      }
    },
    orderBy: { name: 'asc' },
    take: limit,
    skip: (page - 1) * limit
  });

  return concepts.map(concept => ({
    ...concept,
    category: concept.category ? {
      id: concept.category.id,
      name: concept.category.name,
      slug: concept.category.slug,
    } : null,
  }));
}

export async function getConcept(slug: string): Promise<ConceptWithRelations | null> {
  'use server';

  const concept = await prisma.concept.findUnique({
    where: { slug },
    include: {
      category: true,
      sourceConcepts: {
        include: { source: true }
      },
      relations: {
        include: {
          relatedConcept: {
            include: { category: true }
          }
        },
        orderBy: { strength: 'desc' },
        take: 6
      },
      flashcardPrompts: {
        take: 3
      }
    }
  });

  if (!concept) return null;

  return {
    ...concept,
    relations: concept.relations.map(rel => ({
      relatedConcept: {
        id: rel.relatedConcept.id,
        name: rel.relatedConcept.name,
        slug: rel.relatedConcept.slug,
        category: rel.relatedConcept.category ? {
          name: rel.relatedConcept.category.name,
          color: rel.relatedConcept.category.color,
        } : null,
      },
      relationType: rel.relationType as RelationType,
      description: rel.description,
      strength: rel.strength,
    })),
    sourceConcepts: concept.sourceConcepts.map(sc => ({
      source: sc.source ? {
        ...sc.source,
        metadata: sc.source.metadata as Record<string, unknown> | null,
      } : null,
    })),
    flashcardPrompts: concept.flashcardPrompts,
  } as unknown as ConceptWithRelations;
}

export async function getCategories(): Promise<Category[]> {
  'use server';

  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    include: {
      _count: { select: { concepts: true } }
    }
  });

  return categories.map(cat => ({
    ...cat,
    description: cat.description ?? null,
    color: cat.color ?? null,
    icon: cat.icon ?? null,
    parentId: cat.parentId ?? null,
  }));
}

/**
 * Count total concepts for pagination
 */
export async function getConceptsCount(params?: { search?: string; category?: string }): Promise<number> {
  'use server';

  const search = params?.search || '';
  const categorySlug = params?.category || '';

  const count = await prisma.concept.count({
    where: {
      ...(categorySlug ? { category: { slug: categorySlug } } : {}),
      ...(search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { shortDefinition: { contains: search, mode: 'insensitive' } },
          { tags: { hasSome: [search] } }
        ]
      } : {})
    }
  });

  return count;
}

/**
 * Fetch concepts for graph visualization
 */
export async function getConceptsForGraph(categoryId?: string): Promise<ConceptWithRelations[]> {
  'use server';

  const concepts = await prisma.concept.findMany({
    where: categoryId ? { categoryId } : undefined,
    include: {
      category: true,
      relations: {
        include: {
          relatedConcept: {
            include: { category: true }
          }
        },
        where: { strength: { gte: 1 } }
      },
      sourceConcepts: {
        include: { source: true }
      }
    },
    orderBy: { name: 'asc' },
    take: 50
  });

  return concepts.map(concept => ({
    ...concept,
    relations: concept.relations.map(rel => ({
      relatedConcept: {
        id: rel.relatedConcept.id,
        name: rel.relatedConcept.name,
        slug: rel.relatedConcept.slug,
        category: rel.relatedConcept.category ? {
          name: rel.relatedConcept.category.name,
          color: rel.relatedConcept.category.color,
        } : null,
      },
      relationType: rel.relationType as RelationType,
      description: rel.description,
      strength: rel.strength,
    })),
    sourceConcepts: concept.sourceConcepts.map(sc => ({
      source: sc.source ? {
        ...sc.source,
        metadata: sc.source.metadata as Record<string, unknown> | null,
      } : null,
    })),
  })) as unknown as ConceptWithRelations[];
}

/**
 * Fetch all concept relations for graph
 */
export async function getAllConceptRelations() {
  'use server';

  const relations = await prisma.conceptRelation.findMany({
    include: {
      concept: {
        include: { category: true }
      },
      relatedConcept: {
        include: { category: true }
      }
    },
    take: 200
  });

  return relations;
}

/**
 * Fetch random quote for landing page
 */
export async function getRandomQuote(): Promise<QuoteWithSource | null> {
  'use server';

  const quotes = await prisma.quote.findMany({
    where: { isPublic: true },
    include: { source: true },
    orderBy: { createdAt: 'desc' },
    take: 20
  });

  if (quotes.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return {
    id: quote.id,
    text: quote.text,
    source: quote.source ? {
      author: quote.source.author,
      title: quote.source.title,
    } : null,
  };
}

/**
 * Fetch featured concepts for landing page
 */
export async function getFeaturedConcepts(): Promise<Concept[]> {
  'use server';

  // Get all concepts first
  const allConcepts = await prisma.concept.findMany({
    include: { category: true },
    orderBy: { name: 'asc' },
  });

  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...allConcepts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Take first 8 random concepts and map to proper types
  return shuffled.slice(0, 8) as unknown as Concept[];
}

/**
 * Get all relations for a concept (without limit)
 */
export async function getConceptRelations(slug: string) {
  'use server';

  const concept = await prisma.concept.findUnique({
    where: { slug },
    include: {
      relations: {
        include: {
          relatedConcept: {
            include: { category: true }
          }
        },
        orderBy: { strength: 'desc' }
      }
    }
  });

  if (!concept) return null;

  return concept.relations.map(rel => ({
    id: rel.id,
    relatedConcept: {
      id: rel.relatedConcept.id,
      name: rel.relatedConcept.name,
      slug: rel.relatedConcept.slug,
      category: rel.relatedConcept.category ? {
        name: rel.relatedConcept.category.name,
        color: rel.relatedConcept.category.color,
      } : null,
    },
    relationType: rel.relationType as RelationType,
    description: rel.description,
    strength: rel.strength,
  } as any));
}

/**
 * Find shortest path between two concepts using BFS
 */
export async function getConceptPath(from: string, to: string) {
  'use server';

  // Get both concepts
  const [fromConcept, toConcept] = await Promise.all([
    prisma.concept.findUnique({ where: { slug: from } }),
    prisma.concept.findUnique({ where: { slug: to } })
  ]);

  if (!fromConcept || !toConcept) {
    return null;
  }

  // BFS to find shortest path
  const queue: Array<{ conceptId: string; path: string[] }> = [
    { conceptId: fromConcept.id, path: [fromConcept.id] }
  ];
  const visited = new Set<string>([fromConcept.id]);

  while (queue.length > 0) {
    const { conceptId, path } = queue.shift()!;

    if (conceptId === toConcept.id) {
      // Found the path, get the details
      const concepts = await prisma.concept.findMany({
        where: { id: { in: path } },
        include: { category: true }
      });

      const relations = await prisma.conceptRelation.findMany({
        where: {
          OR: path.slice(0, -1).map((id, i) => ({
            conceptId: id,
            relatedConceptId: path[i + 1]
          }))
        }
      });

      return {
        path: path.map(id => {
          const concept = concepts.find(c => c.id === id)!;
          return {
            id: concept.id,
            name: concept.name,
            slug: concept.slug,
            category: concept.category,
          };
        }),
        relations: relations.map(r => ({
          from: r.conceptId,
          to: r.relatedConceptId,
          type: r.relationType,
          description: r.description,
        }))
      };
    }

    // Get neighbors
    const neighbors = await prisma.conceptRelation.findMany({
      where: { conceptId },
      select: { relatedConceptId: true }
    });

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.relatedConceptId)) {
        visited.add(neighbor.relatedConceptId);
        queue.push({
          conceptId: neighbor.relatedConceptId,
          path: [...path, neighbor.relatedConceptId]
        });
      }
    }
  }

  return null; // No path found
}

/**
 * Get suggested related concepts based on graph
 */
export async function getConceptSuggestions(slug: string, limit = 5) {
  'use server';

  const concept = await prisma.concept.findUnique({
    where: { slug }
  });

  if (!concept) return [];

  // Get concepts with strongest direct connections
  const directConnections = await prisma.conceptRelation.findMany({
    where: { conceptId: concept.id },
    include: {
      relatedConcept: {
        include: { category: true }
      }
    },
    orderBy: { strength: 'desc' },
    take: limit
  });

  // Get second-order connections (concepts connected to our connections)
  const connectedIds = directConnections.map(r => r.relatedConcept.id);
  const secondOrderRelations = await prisma.conceptRelation.findMany({
    where: {
      conceptId: { in: connectedIds },
      relatedConceptId: { not: concept.id }
    },
    include: {
      relatedConcept: {
        include: { category: true }
      }
    },
    orderBy: { strength: 'desc' },
    take: limit * 2
  });

  // Combine and deduplicate
  const allSuggestions = [
    ...directConnections.map(r => ({
      concept: r.relatedConcept,
      reason: `Connexion directe (${r.relationType.toLowerCase()})`,
      strength: r.strength
    })),
    ...secondOrderRelations
      .filter(r => !connectedIds.includes(r.relatedConcept.id))
      .map(r => ({
        concept: r.relatedConcept,
        reason: 'Connecté via un concept connexe',
        strength: r.strength * 0.5 // Lower weight for indirect connections
      }))
  ];

  // Remove duplicates and sort by strength
  const uniqueSuggestions = Array.from(
    new Map(allSuggestions.map(s => [s.concept.id, s])).values()
  )
    .sort((a, b) => b.strength - a.strength)
    .slice(0, limit);

  return uniqueSuggestions.map(s => ({
    id: s.concept.id,
    name: s.concept.name,
    slug: s.concept.slug,
    shortDefinition: s.concept.shortDefinition,
    category: s.concept.category,
    reason: s.reason,
  }));
}
