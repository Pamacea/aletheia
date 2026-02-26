/**
 * Application route paths
 */
export const routes = {
  home: '/',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
  },
  agora: {
    index: '/agora',
    category: (slug: string) => `/agora/${slug}`,
    post: (slug: string) => `/agora/post/${slug}`,
    create: '/agora/create',
  },
  conceptuaire: {
    index: '/conceptuaire',
    concept: (slug: string) => `/conceptuaire/${slug}`,
  },
  bibliotheque: {
    index: '/bibliotheque',
    book: (slug: string) => `/bibliotheque/${slug}`,
  },
  citations: {
    index: '/citations',
  },
  philosophes: {
    index: '/philosophes',
    philosopher: (slug: string) => `/philosophes/${slug}`,
  },
  courants: {
    index: '/courants',
    current: (slug: string) => `/courants/${slug}`,
  },
  graphe: {
    index: '/graphe',
  },
  profile: {
    index: '/profile',
  },
} as const;
