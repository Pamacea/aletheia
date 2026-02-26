/**
 * Shared metadata generation utilities
 * Optimisé pour le SEO avec Open Graph, Twitter Cards, et Canonical URLs
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aletheia.vercel.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/aletheia.jpg`;

interface MetadataOptions {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  canonical?: string;
  noindex?: boolean;
  locale?: string;
  alternateLanguages?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

interface FullMetadata {
  title: string;
  description: string;
  keywords: string[];
  authors: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
    siteName: string;
    images: { url: string; width: number; height: number; alt: string }[];
    locale: string;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator?: string;
    site?: string;
  };
  alternates: {
    canonical: string;
    languages?: Record<string, string>;
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
}

/**
 * Generate standard metadata for pages with complete SEO optimization
 */
export function generateMetadata(options: MetadataOptions): FullMetadata {
  const {
    title,
    description = 'Aletheia - Base de connaissances philosophiques. Explorez les concepts, philosophes et courants de pensée à travers un écosystème de connaissances non-linéaire.',
    keywords = [],
    image,
    type = 'website',
    canonical,
    noindex = false,
    locale = 'fr_FR',
    alternateLanguages,
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags,
  } = options;

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: [...keywords, 'philosophie', 'concepts philosophiques', 'histoire des idées'],
    authors: authors || ['Aletheia'],
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      siteName: 'Aletheia',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@aletheia_app', // À remplacer par votre handle Twitter
      site: '@aletheia_app', // À remplacer par votre handle Twitter
    },
    alternates: {
      canonical: canonicalUrl,
      ...(alternateLanguages && {
        languages: Object.fromEntries(
          Object.entries(alternateLanguages).map(([lang, path]) => [
            lang,
            `${SITE_URL}${path}`,
          ])
        ),
      }),
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
  };
}

/**
 * Generate minimal metadata for pages that shouldn't be indexed
 */
export function generateNoIndexMetadata(title: string, description?: string) {
  return generateMetadata({
    title,
    description,
    noindex: true,
  });
}

/**
 * Generate metadata for philosopher pages
 */
export function generatePhilosopherMetadata(
  name: string,
  description?: string,
  dates?: string
) {
  return generateMetadata({
    title: `${name} - Philosophe`,
    description: description || `Biographie et idées de ${name}${dates ? ` (${dates})` : ''}`,
    keywords: [name, 'philosophe', 'philosophie'],
    type: 'article',
  });
}

/**
 * Generate metadata for concept pages
 */
export function generateConceptMetadata(
  name: string,
  shortDefinition?: string
) {
  return generateMetadata({
    title: `${name} - Concept Philosophique`,
    description: shortDefinition || `Définition et analyse du concept de ${name}`,
    keywords: [name, 'concept', 'philosophie'],
    type: 'article',
  });
}

/**
 * Generate metadata for movement pages
 */
export function generateMovementMetadata(
  name: string,
  description?: string,
  period?: string
) {
  return generateMetadata({
    title: `${name} - Courant Philosophique`,
    description: description || `${name}${period ? ` - ${period}` : ''}`,
    keywords: [name, 'courant', 'mouvement', 'philosophie'],
    type: 'article',
  });
}

/**
 * Generate metadata for the graph page
 */
export function generateGraphMetadata() {
  return generateMetadata({
    title: 'Graphe des Connexions Philosophiques - Aletheia',
    description: 'Explorez les relations entre concepts, philosophes et courants philosophiques à travers notre graphe de connaissances interactif. Visualisez les influences et les connexions intellectuelles.',
    keywords: [
      'graphe philosophique',
      'connexions philosophiques',
      'réseau de connaissances',
      'visualisation philosophie',
      'influences philosophiques'
    ],
    type: 'website',
  });
}
