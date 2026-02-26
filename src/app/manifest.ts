import { MetadataRoute } from 'next';

/**
 * Web App Manifest pour Aletheia
 * Permet l'installation en tant qu'application web progressive (PWA)
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aletheia - Étude Philosophique',
    short_name: 'Aletheia',
    description: 'Un écosystème de pensée non-linéaire pour l\'étude de la philosophie',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf7f2',
    theme_color: '#5c4033',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'books', 'reference'],
    screenshots: [
      {
        src: '/aletheia.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        label: 'Aletheia - Page d\'accueil',
      },
    ],
    shortcuts: [
      {
        name: 'Conceptuaire',
        short_name: 'Concepts',
        description: 'Explorer les concepts philosophiques',
        url: '/conceptuaire',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Philosophes',
        short_name: 'Philosophes',
        description: 'Découvrir les philosophes',
        url: '/philosophes',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Graphe',
        short_name: 'Graphe',
        description: 'Visualiser les connexions',
        url: '/graphe',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
    ],
  };
}
