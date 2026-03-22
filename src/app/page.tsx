import { Suspense } from 'react';
import Link from 'next/link';
import { BookOpenIcon, NetworkIcon } from '@/ui/icons/NavigationIcons';
import { SearchIcon } from '@/ui/icons/ActionIcons';
import { GitBranchIcon } from '@/ui/icons/FeatureIcons';
import { Footer } from '@/ui/components/Footer';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { JsonLd } from '@/ui/atoms/JsonLd';
import { getCachedFeaturedConcepts } from '@/lib/cache/queries';
import { getHomePageSchema } from '@/lib/utils/structured-data';
import type { Concept, Etymology } from '@/types';

export const revalidate = 60;

export const metadata = {
  title: 'Aletheia - Étude Philosophique',
  description: 'Un écosystème de pensée non-linéaire pour l\'étude de la philosophie. Explorez les concepts, philosophes et courants à travers un graphe de connaissances interactif.',
  keywords: ['philosophie', 'concepts philosophiques', 'philosophes', 'histoire des idées', 'éducation', 'connaissances'],
  openGraph: {
    title: 'Aletheia - Étude Philosophique',
    description: 'Un écosystème de pensée non-linéaire pour l\'étude de la philosophie',
    images: ['/aletheia.jpg'],
  },
};

const features = [
  {
    icon: <BookOpenIcon style={{ width: "2rem", height: "2rem" }} />,
    title: "Conceptuaire",
    description: "Une collection organisée de concepts philosophiques.",
  },
  {
    icon: <NetworkIcon style={{ width: "2rem", height: "2rem" }} />,
    title: "Graphe de Connaissance",
    description: "Visualisez les relations entre les concepts philosophiques.",
  },
  {
    icon: <SearchIcon style={{ width: "2rem", height: "2rem" }} />,
    title: "Exploration Sémantique",
    description: "Un moteur de recherche intelligent.",
  },
  {
    icon: <GitBranchIcon style={{ width: "2rem", height: "2rem" }} />,
    title: "Parcours Non-Linéaire",
    description: "Suivez votre curiosité à travers un réseau de connaissances.",
  }
];

// NO await in this component — renders instantly
export default function HomePage() {
  return (
    <>
      <JsonLd data={getHomePageSchema()} />
      <div className="min-h-screen bg-paper-50">
      {/* Hero Section — pure HTML, 0ms */}
      <section className="border-b border-paper-300 bg-gradient-to-b from-paper-50 to-paper-200 py-12 sm:py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            <span className="title-breathe-word">ΑΛΗΘΕΙΑ</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-sepia-600 italic mb-8">Vérité</p>
          <p className="text-base sm:text-lg lg:text-xl text-ink-light mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Un <span className="living-word">écosystème</span> de <span className="living-word">pensée</span> non-linéaire pour l&apos;étude de la philosophie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkOrnate href="/conceptuaire" living={true} className="inline-flex items-center gap-3 px-5 py-3 bg-paper-50 text-ink font-medium transition-all duration-200 border-2 border-paper-300 hover:border-sepia-600 hover:text-sepia-600">
              <BookOpenIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Explorer le Conceptuaire
            </LinkOrnate>
            <LinkOrnate href="/graphe" living={true} className="inline-flex items-center gap-3 px-5 py-3 bg-paper-50 text-ink font-medium transition-all duration-200 border-2 border-paper-300 hover:border-sepia-600 hover:text-sepia-600">
              <NetworkIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Voir le Graphe
            </LinkOrnate>
          </div>
        </div>
      </section>

      {/* Features Section — pure HTML, 0ms */}
      <section className="py-10 sm:py-14 lg:py-20 bg-paper-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Un Système de Pensée
            </h2>
            <p className="text-lg text-ink-light max-w-2xl mx-auto">
              ΑΛΗΘΕΙΑ offre un environnement d&apos;étude philosophique rompant avec les limites linéaires de la pensée traditionnelle.
            </p>
          </div>
          <div className="content-2-3">
            <div className="organic-grid-features">
              {features.map((feature, index) => {
                const sizeVariants = ['col-span-1 lg:col-span-1', 'col-span-1 lg:col-span-2', 'col-span-1 lg:col-span-1', 'col-span-1 lg:col-span-2'];
                const heightVariants = ['p-8', 'p-10', 'p-6', 'p-12'];
                return (
                  <div key={index} className={`${sizeVariants[index]} ${heightVariants[index]} bg-white border-2 border-paper-300 transition-all duration-300 hover:shadow-xl hover:border-sepia-600 cursor-pointer group`}>
                    <div className="text-sepia-600 mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-ink mb-3 font-serif group-hover:text-sepia-600 transition-colors" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      <span className="living-word">{feature.title}</span>
                    </h3>
                    <p className="text-ink-light leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Concepts Section — STREAMED via Suspense */}
      <section className="py-10 sm:py-14 lg:py-20 bg-paper-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Concepts Philosophiques
            </h2>
            <p className="text-lg text-ink-light">Explorez les fondements de la pensée occidentale</p>
          </div>
          <div className="content-2-3">
            <Suspense fallback={<ConceptsGridSkeleton />}>
              <FeaturedConceptsGrid />
            </Suspense>
            <div className="text-center mt-12">
              <Link href="/conceptuaire" className="living-word inline-flex items-center gap-2 text-sepia-600 text-lg font-medium hover:text-sepia-700 transition-colors" style={{ textDecoration: "none" }}>
                Voir tous les concepts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

// Async Server Component — fetches data, streamed via Suspense
async function FeaturedConceptsGrid() {
  const concepts = await getCachedFeaturedConcepts().catch(() => []) as unknown as Concept[];

  if (!concepts || concepts.length === 0) return null;

  const heightVariants = [
    'min-h-[14rem]', 'min-h-[20rem]', 'min-h-[16rem]', 'min-h-[24rem]',
    'min-h-[14rem]', 'min-h-[18rem]', 'min-h-[16rem]', 'min-h-[22rem]',
  ];

  return (
    <div className="masonry-grid">
      {concepts.slice(0, 8).map((concept: Concept, index) => {
        const etymology = concept.etymology as Etymology | null;
        return (
          <Link key={concept.id} href={`/conceptuaire/${concept.slug}`} className="living-word block" style={{ textDecoration: "none" }}>
            <div className={`${heightVariants[index]} p-6 bg-white border-2 border-paper-300 transition-all duration-300 hover:shadow-xl hover:border-sepia-600 group`}>
              {etymology?.greek ? (
                <div className="text-sepia-600 text-lg mb-2 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{etymology.greek}</div>
              ) : etymology?.literalTranslation && (
                <div className="text-sepia-500 text-xs mb-2 italic">
                  {etymology.literalTranslation.substring(0, 100)}{etymology.literalTranslation.length > 100 ? '...' : ''}
                </div>
              )}
              <div className="text-ink text-xl font-semibold mb-2 group-hover:text-sepia-600 transition-colors font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                {concept.name}
              </div>
              {concept.shortDefinition ? (
                <div className="text-ink-light text-sm leading-relaxed mb-3 line-clamp-4">
                  {concept.shortDefinition.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1 last:mb-0">{line}</p>
                  ))}
                </div>
              ) : concept.definition ? (
                <div className="text-ink-light text-sm leading-relaxed mb-3 line-clamp-4">
                  {concept.definition.split('\n').slice(0, 4).map((line: string, i: number) => (
                    <p key={i} className="mb-1 last:mb-0">{line}</p>
                  ))}
                </div>
              ) : (
                <div className="text-ink-light text-sm italic mb-3">Concept philosophique à explorer</div>
              )}
              {concept.keyAuthors && Array.isArray(concept.keyAuthors) && concept.keyAuthors.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-sepia-600 font-medium mb-1">Auteurs clés</div>
                  <div className="flex flex-wrap gap-1">
                    {concept.keyAuthors.slice(0, 3).map((author: any, i: number) => (
                      <span key={i} className="text-xs bg-paper-200 px-2 py-0.5 border border-paper-400 text-ink">
                        {typeof author === 'string' ? author : author.name || 'Auteur'}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {concept.tags && concept.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {concept.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={`${concept.id}-tag-${tagIndex}`} className="text-xs bg-sepia-100 text-sepia-700 px-2 py-0.5 border border-sepia-300">{tag}</span>
                  ))}
                </div>
              )}
              {concept.category && (
                <div className="flex items-center gap-2 text-sepia-600 text-xs">
                  <span className="font-medium">Catégorie:</span>
                  <span className="italic">{concept.category.name}</span>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// Skeleton shown while concepts load
function ConceptsGridSkeleton() {
  return (
    <div className="masonry-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="min-h-[16rem] p-6 bg-white border-2 border-paper-300 animate-pulse" style={{ animationDelay: `${i * 80}ms` }}>
          <div className="h-4 bg-sepia-100 w-16 mb-3" />
          <div className="h-6 bg-paper-200 w-3/4 mb-3" />
          <div className="h-4 bg-paper-200/60 w-full mb-2" />
          <div className="h-4 bg-paper-200/60 w-4/5 mb-2" />
          <div className="h-4 bg-paper-200/60 w-3/5" />
        </div>
      ))}
    </div>
  );
}
