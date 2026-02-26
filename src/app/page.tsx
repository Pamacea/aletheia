import Link from 'next/link';
import {
  BookOpenIcon,
  NetworkIcon,
  LightbulbIcon,
  GitBranchIcon,
  SearchIcon,
  Footer,
} from '@/ui';
import { LinkOrnate } from '@/ui';
import { JsonLd } from '@/ui/atoms/JsonLd';
import { getFeaturedConcepts } from '@/lib/actions/concepts';
import { getHomePageSchema } from '@/lib/utils/structured-data';
import type { Concept, Etymology } from '@/types';

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

export default async function HomePage() {
  const concepts = await getFeaturedConcepts().catch(() => []);

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

  return (
    <>
      <JsonLd data={getHomePageSchema()} />
      <div className="min-h-screen bg-paper-50">
      {/* Hero Section */}
      <section
        className="border-b border-paper-300 bg-gradient-to-b from-paper-50 to-paper-200 py-24"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-2/3 mx-auto text-center">
          <h1 className="text-6xl font-bold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            <span className="title-breathe-word">ΑΛΗΘΕΙΑ</span>
          </h1>
          <p className="text-2xl text-sepia-600 italic mb-8">
            Vérité
          </p>
          <p className="text-xl text-ink-light mb-12 max-w-2xl mx-auto">
            Un <span className="living-word">écosystème</span> de <span className="living-word">pensée</span> non-linéaire pour l&apos;étude de la philosophie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <LinkOrnate
              href="/conceptuaire"
              living={true}
              className="inline-flex items-center gap-3 px-5 py-3 bg-paper-50 text-ink font-medium transition-all duration-200 border-2 border-paper-300 hover:border-sepia-600 hover:text-sepia-600"
            >
              <BookOpenIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Explorer le Conceptuaire
            </LinkOrnate>
            <LinkOrnate
              href="/graphe"
              living={true}
              className="inline-flex items-center gap-3 px-5 py-3 bg-paper-50 text-ink font-medium transition-all duration-200 border-2 border-paper-300 hover:border-sepia-600 hover:text-sepia-600"
            >
              <NetworkIcon style={{ width: "1.25rem", height: "1.25rem" }} />
              Voir le Graphe
            </LinkOrnate>
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetrical Organic Grid */}
      <section className="py-20 bg-paper-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Un Système de Pensée
            </h2>
            <p className="text-lg text-ink-light max-w-2xl mx-auto">
              ΑΛΗΘΕΙΑ offre un environnement d&apos;étude philosophique rompant avec les limites linéaires de la pensée traditionnelle.
            </p>
          </div>

          {/* Organic Grid - Asymmetrical layout */}
          <div className="organic-grid-features">
            {features.map((feature, index) => {
              // Asymétrie par TAILLE uniquement, PAS de translate-y
              const sizeVariants = [
                'col-span-1 lg:col-span-1', // normal
                'col-span-1 lg:col-span-2', // wider
                'col-span-1 lg:col-span-1', // normal
                'col-span-1 lg:col-span-2', // wider
              ];

              const heightVariants = [
                'p-8',      // normal
                'p-10',     // taller
                'p-6',      // shorter
                'p-12',     // tallest
              ];

              return (
                <div
                  key={index}
                  className={`${sizeVariants[index]} ${heightVariants[index]} bg-white border-2 border-paper-300  transition-all duration-300 hover:shadow-xl hover:border-sepia-600 cursor-pointer group`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-sepia-600 mb-4" style={{ transitionDelay: `${index * 150}ms` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-ink mb-3 font-serif group-hover:text-sepia-600 transition-colors" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    <span className="living-word">{feature.title}</span>
                  </h3>
                  <p className="text-ink-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concepts Preview Section - Asymmetrical Masonry */}
      <section className="py-20 bg-paper-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Concepts Philosophiques
            </h2>
            <p className="text-lg text-ink-light">
              Explorez les fondements de la pensée occidentale
            </p>
          </div>

          {/* Masonry Grid - Asymmetrical cards */}
          <div className="masonry-grid">
            {concepts && concepts.slice(0, 8).map((concept: Concept, index) => {
              const etymology = concept.etymology as Etymology | null;

              // Asymétrie par HAUTEUR uniquement, PAS de translate-y
              const heightVariants = [
                'min-h-[14rem]',  // short
                'min-h-[20rem]',  // medium
                'min-h-[16rem]',  // medium-short
                'min-h-[24rem]',  // tall
                'min-h-[14rem]',  // short
                'min-h-[18rem]',  // medium-tall
                'min-h-[16rem]',  // medium-short
                'min-h-[22rem]',  // tall
              ];

              return (
                <Link
                  key={concept.id}
                  href={`/conceptuaire/${concept.slug}`}
                  className="living-word block"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    className={`${heightVariants[index]} p-6 bg-white border-2 border-paper-300 transition-all duration-300 hover:shadow-xl hover:border-sepia-600 group`}
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    {/* Etymology / Greek term */}
                    {etymology?.greek ? (
                      <div
                        className="text-sepia-600 text-lg mb-2 font-serif"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {etymology.greek}
                      </div>
                    ) : etymology?.literalTranslation && (
                      <div
                        className="text-sepia-500 text-xs mb-2 italic"
                      >
                        {etymology.literalTranslation.substring(0, 100)}
                        {etymology.literalTranslation.length > 100 ? '...' : ''}
                      </div>
                    )}

                    {/* Concept Name */}
                    <div
                      className="text-ink text-xl font-semibold mb-2 group-hover:text-sepia-600 transition-colors font-serif"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {concept.name}
                    </div>

                    {/* Short Definition or Definition */}
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
                      <div className="text-ink-light text-sm italic mb-3">
                        Concept philosophique à explorer
                      </div>
                    )}

                    {/* Key Authors */}
                    {concept.keyAuthors && Array.isArray(concept.keyAuthors) && concept.keyAuthors.length > 0 && (
                      <div className="mb-3">
                        <div className="text-xs text-sepia-600 font-medium mb-1">
                          Auteurs clés
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {concept.keyAuthors.slice(0, 3).map((author: any, i: number) => (
                            <span
                              key={i}
                              className="text-xs bg-paper-200 px-2 py-0.5 border border-paper-400 text-ink"
                            >
                              {typeof author === 'string' ? author : author.name || 'Auteur'}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {concept.tags && concept.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {concept.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={`${concept.id}-tag-${tagIndex}`}
                            className="text-xs bg-sepia-100 text-sepia-700 px-2 py-0.5 border border-sepia-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Category */}
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

          <div className="text-center mt-12">
            <Link
              href="/conceptuaire"
              className="living-word inline-flex items-center gap-2 text-sepia-600 text-lg font-medium hover:text-sepia-700 transition-colors"
              style={{ textDecoration: "none" }}
            >
              Voir tous les concepts →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}
