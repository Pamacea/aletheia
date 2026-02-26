import { MetadataRoute } from 'next';

/**
 * Sitemap dynamique pour Aletheia
 * Génère automatiquement les URLs pour tous les philosophes, concepts et courants
 */

// URLs statiques
const staticUrls = [
  {
    url: 'https://aletheia.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    url: 'https://aletheia.vercel.app/conceptuaire',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  },
  {
    url: 'https://aletheia.vercel.app/philosophes',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: 'https://aletheia.vercel.app/courants',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: 'https://aletheia.vercel.app/graphe',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
];

/**
 * Génère le sitemap avec toutes les URLs du site
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Import dynamique pour éviter les problèmes de dépendances au build
  const { getPhilosophers } = await import('@/lib/actions/philosophers');
  const { getConcepts } = await import('@/lib/actions/concepts');
  const { getMovements } = await import('@/lib/actions/courants');

  const baseUrl = 'https://aletheia.vercel.app';

  // Récupérer toutes les données dynamiques
  const [philosophers, concepts, courants] = await Promise.all([
    getPhilosophers().catch(() => []),
    getConcepts().catch(() => []),
    getMovements().catch(() => []),
  ]);

  // Générer les URLs pour les philosophes
  const philosopherUrls = philosophers.map((philosopher: any) => ({
    url: `${baseUrl}/philosophes/${philosopher.slug}`,
    lastModified: philosopher.updatedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Générer les URLs pour les concepts
  const conceptUrls = concepts.map((concept: any) => ({
    url: `${baseUrl}/conceptuaire/${concept.slug}`,
    lastModified: concept.updatedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Générer les URLs pour les courants
  const courantUrls = courants.map((courant: any) => ({
    url: `${baseUrl}/courants/${courant.slug}`,
    lastModified: courant.updatedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combiner toutes les URLs
  return [
    ...staticUrls,
    ...philosopherUrls,
    ...conceptUrls,
    ...courantUrls,
  ];
}
