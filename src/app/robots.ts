import { MetadataRoute } from 'next';

/**
 * Robots.txt pour Aletheia
 * Contrôle l'accès des crawlers aux moteurs de recherche
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Interdire l'accès aux pages privées/API
        disallow: [
          '/api/',
          '/auth/',
          '/profile/',
          '/agora/',
        ],
      },
      {
        userAgent: 'Google-Extended',
        // Restrictions pour Google AI
        disallow: ['/'],
      },
    ],
    sitemap: 'https://aletheia.vercel.app/sitemap.xml',
    host: 'https://aletheia.vercel.app',
  };
}
