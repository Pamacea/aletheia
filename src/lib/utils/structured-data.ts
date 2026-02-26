/**
 * Structured Data (JSON-LD) pour Aletheia
 * Permet aux moteurs de recherche de mieux comprendre le contenu
 * https://schema.org/
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aletheia.vercel.app';

/**
 * JSON-LD pour le site Web (WebSite schema)
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aletheia',
    alternateName: 'ΑΛΗΘΕΙΑ',
    url: SITE_URL,
    description: 'Un écosystème de pensée non-linéaire pour l\'étude de la philosophie',
    inLanguage: 'fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/conceptuaire?search={search_term_string}`,
      },
      'query-input': {
        '@type': 'PropertyValueSpecification',
        valueRequired: true,
        valueName: 'search_term_string',
      },
    },
  };
}

/**
 * JSON-LD pour une page de philosophe (Person schema)
 */
export function getPhilosopherSchema(data: {
  name: string;
  description?: string;
  birthYear?: number | null;
  deathYear?: number | null;
  biography?: string | null;
  works?: Array<{ title: string; year?: number | null }>;
  slug: string;
  movements?: Array<{ name: string }>;
}) {
  const { name, description, birthYear, deathYear, biography, works, slug, movements } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    description: description || biography || `Philosophe${birthYear ? ` (${birthYear}${deathYear ? `-${deathYear}` : ''})` : ''}`,
    url: `${SITE_URL}/philosophes/${slug}`,
    ...(birthYear && { birthDate: `${birthYear}-01-01` }),
    ...(deathYear && { deathDate: `${deathYear}-01-01` }),
    ...(works && works.length > 0 && {
      knowsAbout: works.map(work => ({
        '@type': 'CreativeWork',
        name: work.title,
        ...(work.year && { dateCreated: `${work.year}-01-01` }),
      })),
    }),
    ...(movements && movements.length > 0 && {
     memberOf: movements.map(movement => movement.name),
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/philosophes/${slug}`,
    },
  };
}

/**
 * JSON-LD pour une page de concept (Article/Concept schema)
 */
export function getConceptSchema(data: {
  name: string;
  shortDefinition?: string | null;
  definition?: string | null;
  slug: string;
  category?: { name: string } | null;
  keyAuthors?: Array<string | { name: string }>;
  etymology?: {
    greek?: string | null;
    latin?: string | null;
  } | null;
}) {
  const { name, shortDefinition, definition, slug, category, keyAuthors, etymology } = data;

  const description = shortDefinition || definition || `Concept philosophique: ${name}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: name,
    description,
    url: `${SITE_URL}/conceptuaire/${slug}`,
    inLanguage: 'fr',
    about: {
      '@type': 'Thing',
      name,
      ...(category && { additionalType: category.name }),
      ...(etymology?.greek && {
        alternateName: etymology.greek,
      }),
    },
    ...(keyAuthors && keyAuthors.length > 0 && {
      author: keyAuthors.map(author =>
        typeof author === 'string'
          ? { '@type': 'Person', name: author }
          : { '@type': 'Person', name: author.name }
      ),
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/conceptuaire/${slug}`,
    },
  };
}

/**
 * JSON-LD pour une page de courant philosophique (Organization schema)
 */
export function getCourantSchema(data: {
  name: string;
  shortDescription?: string | null;
  period?: string | null;
  slug: string;
}) {
  const { name, shortDescription, period, slug } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description: shortDescription || `Courant philosophique: ${name}`,
    url: `${SITE_URL}/courants/${slug}`,
    ...(period && {
      foundingDate: period,
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/courants/${slug}`,
    },
  };
}

/**
 * JSON-LD pour les breadcrumbs (BreadcrumbList schema)
 */
export function getBreadcrumbSchema(breadcrumbs: Array<{
  name: string;
  href: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${SITE_URL}${breadcrumb.href}`,
    })),
  };
}

/**
 * JSON-LD pour la page d'accueil (WebPage schema)
 */
export function getHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Aletheia - Étude Philosophique',
    description: 'Un écosystème de pensée non-linéaire pour l\'étude de la philosophie',
    url: SITE_URL,
    inLanguage: 'fr',
    about: {
      '@type': 'Thing',
      name: 'Philosophie',
      description: 'Étude des questions fondamentales sur l\'existence, la connaissance et la morale',
    },
    mainEntity: {
      '@type': 'WebSite',
      name: 'Aletheia',
      url: SITE_URL,
    },
  };
}

/**
 * JSON-LD pour la page graphe (ItemPage schema pour visualisation de données)
 */
export function getGraphPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: 'Graphe des Connexions Philosophiques',
    description: 'Visualisation interactive des relations entre concepts, philosophes et courants philosophiques',
    url: `${SITE_URL}/graphe`,
    inLanguage: 'fr',
    about: {
      '@type': 'Thing',
      name: 'Réseau de connaissances philosophiques',
      description: 'Graphe montrant les influences et relations entre les entités philosophiques',
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Base de connaissances philosophique Aletheia',
      description: 'Collection structurée de concepts, philosophes et courants avec leurs relations',
      url: SITE_URL,
    },
  };
}
