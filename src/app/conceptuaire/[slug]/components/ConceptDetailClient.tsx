'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { QuoteIcon } from '@/ui/components/CustomIcons';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { SlugHeader } from '@/ui/organisms/SlugHeader';
import { ActionButtons } from '@/ui/organisms/ActionButton';
import { ConnectionSidebar, ConnectionToggle } from '@/ui/organisms/ConnectionSidebar';
import { RelatedContent } from '@/ui/organisms/RelatedContent';
import { useFavorite } from '@/features/favorites/hooks';
import type { ConceptWithRelations } from '@/types';
import { useRouter } from 'next/navigation';
import { useToastActions } from '@/ui/hooks/useToastActions';
import {
  ConceptRelations,
  ConceptSuggestions as NewConceptSuggestions,
  LocalConceptGraph,
  ConceptPathFinder,
} from '@/components/concepts';
import { useConceptRelations } from '@/lib/react-query/hooks/use-concepts';

interface ConceptDetailClientProps {
  concept: ConceptWithRelations;
}

export function ConceptDetailClient({ concept }: ConceptDetailClientProps) {
  const router = useRouter();
  const { showSuccess, showError } = useToastActions();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();

  // Fetch all relations (not limited to 6 like in concept.relations)
  const { data: allRelations } = useConceptRelations(concept.slug);

  // Use all relations if available, otherwise fall back to the limited ones from the concept
  const relations = allRelations || concept.relations || [];

  // Use TanStack Query for favorites - removes useEffect for data fetching
  const { isFavorite, toggle: toggleFavoriteMutation, isToggling } = useFavorite({
    entityType: 'CONCEPT',
    entityId: concept.id,
  });

  // Reveal on scroll animation
  // Count total connections
  const connectionCount =
    relations.length +
    (concept.sourceConcepts?.length || 0) +
    (concept.flashcardPrompts?.length || 0);

  // Build connection and graph URLs
  const connectionsHref = connectionCount > 0 ? undefined : undefined; // We'll use the sidebar toggle instead
  const graphHref = `/graphe?center=${concept.slug}`;

  // Prepare sidebar data
  const sidebarSections = [
    {
      id: 'concepts',
      title: 'Concepts Connexes',
      icon: 'concept' as const,
      defaultOpen: true,
      items: relations.map((rel: any) => ({
        id: rel.relatedConcept.id,
        name: rel.relatedConcept.name,
        slug: rel.relatedConcept.slug,
        description: rel.description || undefined,
        href: `/conceptuaire/${rel.relatedConcept.slug}`,
      })),
    },
    {
      id: 'sources',
      title: 'Sources',
      icon: 'source' as const,
      defaultOpen: false,
      items: concept.sourceConcepts?.filter(sc => sc.source).map((sc) => ({
        id: sc.source!.id,
        name: sc.source!.title || 'Sans titre',
        description: `${sc.source!.author} • ${sc.source!.year}`,
        href: `/bibliotheque#${sc.source!.slug}`,
      })) || [],
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      icon: 'flashcard' as const,
      defaultOpen: false,
      items: concept.flashcardPrompts?.map((fc) => ({
        id: fc.id,
        name: fc.question,
        href: `/flashcards?concept=${concept.slug}`,
      })) || [],
    },
  ];

  // Prepare related content for bottom section
  const relatedSections = [
    {
      title: 'Concepts Connexes',
      icon: 'concept' as const,
      href: '/conceptuaire',
      linkText: 'Voir tout le conceptuaire',
      items: relations.slice(0, 6).map((rel: any) => ({
        id: rel.relatedConcept.id,
        name: rel.relatedConcept.name,
        slug: rel.relatedConcept.slug,
        description: rel.description || undefined,
        type: 'concept' as const,
      })),
    },
  ];

  const breadcrumb = concept.category
    ? [{ label: 'Conceptuaire', href: '/conceptuaire' }, { label: concept.category.name, href: `/conceptuaire?category=${concept.category.slug}` }]
    : [{ label: 'Conceptuaire', href: '/conceptuaire' }];

  // Handle favorite toggle - optimized with useFavorite hook
  const handleFavorite = async () => {
    try {
      startTransition(async () => {
        await toggleFavoriteMutation();
        // isFavorite state is automatically updated by TanStack Query

        // Show toast notification based on new state
        if (!isFavorite) {
          showSuccess(`${concept.name} a été ajouté à vos favoris`, "Favori ajouté");
        } else {
          showSuccess(`${concept.name} a été retiré de vos favoris`, "Favori retiré");
        }

        // Revalidate paths to update favorites page
        router.refresh();
      });
    } catch (error) {
      showError("Impossible de modifier les favoris");
    }
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <SlugHeader
        breadcrumb={breadcrumb}
        current={concept.name}
        backHref="/conceptuaire"
        backLabel="Retour au conceptuaire"
        subtitle={concept.etymology?.greek}
        actions={{
          isFavorite,
          isToggling,
          onFavorite: handleFavorite,
          graphHref: `/graphe?center=${concept.slug}`,
        }}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
        {/* Definition */}
        <section className="mb-12">
          <div className="bg-white border-2 border-paper-300 p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-4">
              <span className="living-word">Définition</span>
            </h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-ink-light leading-relaxed text-lg">
                <span className="living-word">{concept.definition}</span>
              </p>
            </div>

            {/* Etymology & Reasoning Section */}
            {concept.etymology && (
              <div className="mt-6 p-6 bg-paper-200 border-l-4 border-sepia-600">
                <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                  <span className="living-word">Étymologie & Raisonnement</span>
                </h3>

                {/* Greek */}
                {(concept.etymology as any).greek && (
                  <div className="mb-3">
                    <strong className="text-sepia-700">Grec:</strong>{' '}
                    <span className="text-ink-light italic">{(concept.etymology as any).greek}</span>
                  </div>
                )}

                {/* Root */}
                {(concept.etymology as any).root && (
                  <div className="mb-3">
                    <strong className="text-sepia-700">Racine:</strong>{' '}
                    <span className="text-ink-light">{(concept.etymology as any).root}</span>
                  </div>
                )}

                {/* Latin */}
                {concept.etymology.latin && (
                  <div className="mb-3">
                    <strong className="text-sepia-700">Latin:</strong>{' '}
                    <span className="text-ink-light italic">{concept.etymology.latin}</span>
                  </div>
                )}

                {/* Sanskrit */}
                {concept.etymology.sanskrit && (
                  <div className="mb-3">
                    <strong className="text-sepia-700">Sanskrit:</strong>{' '}
                    <span className="text-ink-light italic">{concept.etymology.sanskrit}</span>
                  </div>
                )}

                {/* Meaning */}
                {concept.etymology.meaning && (
                  <div className="mb-3">
                    <strong className="text-sepia-700">Sens:</strong>{' '}
                    <span className="text-ink-light">{concept.etymology.meaning}</span>
                  </div>
                )}

                {/* Notes */}
                {(concept.etymology as any).notes && (
                  <div className="mt-4 pt-4 border-t border-paper-300">
                    <p className="text-sm text-ink-light leading-relaxed">
                      <span className="living-word">{(concept.etymology as any).notes}</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Reasoning */}
        {concept.reasoning && (
          <section className="mb-12">
            <div className="bg-white border-2 border-paper-300 p-8">
              <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
                <span className="living-word">Raisonnement</span>
              </h2>

              {/* New format: object with thesis, arguments, counterArguments */}
              {!Array.isArray(concept.reasoning) && (
                <div className="space-y-8">
                  {/* Thesis */}
                  {(concept.reasoning as any).thesis && (
                    <div className="p-6 bg-sepia-50 border-l-4 border-sepia-600">
                      <h3 className="font-semibold text-ink mb-3 text-lg">
                        <span className="living-word">Thèse</span>
                      </h3>
                      <p className="text-ink-light leading-relaxed">
                        <span className="living-word">{(concept.reasoning as any).thesis}</span>
                      </p>
                    </div>
                  )}

                  {/* Arguments */}
                  {(concept.reasoning as any).arguments && Array.isArray((concept.reasoning as any).arguments) && (concept.reasoning as any).arguments.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-ink mb-4 text-lg">
                        <span className="living-word">Arguments</span>
                      </h3>
                      <div className="space-y-4">
                        {(concept.reasoning as any).arguments.map((arg: any, idx: number) => (
                          <div key={idx} className="p-4 bg-paper-100 border border-paper-300">
                            <h4 className="font-semibold text-sepia-700 mb-2">
                              <span className="living-word">{arg.title}</span>
                            </h4>
                            <p className="text-ink-light leading-relaxed text-sm">
                              <span className="living-word">{arg.content}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Counter Arguments */}
                  {(concept.reasoning as any).counterArguments && Array.isArray((concept.reasoning as any).counterArguments) && (concept.reasoning as any).counterArguments.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-ink mb-4 text-lg">
                        <span className="living-word">Objections</span>
                      </h3>
                      <div className="space-y-4">
                        {(concept.reasoning as any).counterArguments.map((arg: any, idx: number) => (
                          <div key={idx} className="p-4 bg-paper-100 border-l-2 border-sepia-400">
                            <h4 className="font-semibold text-sepia-700 mb-2">
                              <span className="living-word">{arg.title}</span>
                            </h4>
                            <p className="text-ink-light leading-relaxed text-sm">
                              <span className="living-word">{arg.content}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Legacy format: array of steps */}
              {Array.isArray(concept.reasoning) && concept.reasoning.length > 0 && (
                <div className="space-y-6">
                  {concept.reasoning.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-sepia-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-ink mb-2">
                          <span className="living-word">{(step as any).title}</span>
                        </h3>
                        <p className="text-ink-light leading-relaxed">
                          <span className="living-word">{(step as any).description || (step as any).content}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Key Figures */}
        {concept.keyAuthors && Array.isArray(concept.keyAuthors) && concept.keyAuthors.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
              <span className="living-word">Figures Célèbres</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concept.keyAuthors.map((figure, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-paper-300 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold text-ink">
                    <span className="living-word">{figure.name}</span>
                  </div>
                  {figure.period && <div className="text-sm text-ink-light">{figure.period}</div>}
                  {(figure as any).contribution && (
                    <div className="prose prose-stone max-w-none mt-2">
                      <p className="text-sm text-ink-light leading-relaxed">
                        <span className="living-word">{(figure as any).contribution}</span>
                      </p>
                    </div>
                  )}
                  {figure.work && <div className="text-sm text-sepia-600 mt-1 italic">{figure.work}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Examples */}
        {concept.examples && Array.isArray(concept.examples) && concept.examples.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
              <span className="living-word">Exemples</span>
            </h2>
            <div className="space-y-4">
              {concept.examples.map((example, index) => {
                // Handle both string examples and object examples
                const exampleTitle = typeof example === 'string'
                  ? `Exemple ${index + 1}`
                  : example.title;
                const exampleDescription = typeof example === 'string'
                  ? example
                  : example.description;
                const exampleContext = typeof example === 'string'
                  ? undefined
                  : example.context;

                return (
                  <div
                    key={index}
                    className="bg-paper-100 border-2 border-paper-200 p-6"
                  >
                    <h3 className="font-semibold text-ink mb-2">
                      <span className="living-word">{exampleTitle}</span>
                    </h3>
                    <div className="prose prose-stone max-w-none">
                      <p className="text-ink-light leading-relaxed">
                        <span className="living-word">{exampleDescription}</span>
                      </p>
                    </div>
                    {exampleContext && (
                      <p className="text-sm text-sepia-600 mt-2 italic">{exampleContext}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Sources */}
        {concept.sourceConcepts && concept.sourceConcepts.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
              <span className="living-word">Sources</span>
            </h2>
            <div className="space-y-4">
              {concept.sourceConcepts.map((sourceRel) =>
                sourceRel.source ? (
                  <div
                    key={sourceRel.source.id}
                    className="bg-white border-2 border-paper-300 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-ink text-lg">
                          <span className="living-word">{sourceRel.source.title}</span>
                        </h3>
                        <p className="text-sm text-ink-light">
                          {sourceRel.source.author} • {sourceRel.source.year}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-paper-200 text-ink text-xs flex-shrink-0 ml-4">
                        {sourceRel.source.type}
                      </span>
                    </div>

                    {/* Quotes from source */}
                    {sourceRel.source.metadata &&
                      typeof sourceRel.source.metadata === 'object' &&
                      'quotes' in sourceRel.source.metadata &&
                      Array.isArray(sourceRel.source.metadata.quotes) && (
                        <div className="space-y-3">
                          {sourceRel.source.metadata.quotes.slice(0, 2).map((quote: string, quoteIdx: number) => (
                            <div
                              key={quoteIdx}
                              className="pl-4 border-l-2 border-sepia-600"
                            >
                              <QuoteIcon className="w-4 h-4 text-sepia-600 mb-2" />
                              <p className="text-ink-light italic text-sm">&quot;{quote}&quot;</p>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Tags */}
        {concept.tags && concept.tags.length > 0 && (
          <section className="mb-12">
            <div className="flex flex-wrap gap-2">
              {concept.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/conceptuaire?search=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-paper-200 text-ink text-sm hover:bg-sepia-100 hover:text-sepia-700 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Concept Relations */}
        <ConceptRelations
          conceptSlug={concept.slug}
          relations={relations}
        />

        {/* Local Network Visualization */}
        {concept.relations && concept.relations.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6">
              <span className="living-word">Réseau Local</span>
            </h2>
            <LocalConceptGraph
              centerSlug={concept.slug}
              conceptName={concept.name}
              relations={relations}
              height={500}
              onNodeClick={(slug) => router.push(`/conceptuaire/${slug}`)}
            />
          </section>
        )}

        {/* Concept Path Finder */}
        <ConceptPathFinder
          fromSlug={concept.slug}
          fromName={concept.name}
        />

        {/* Concept Suggestions */}
        <NewConceptSuggestions
          conceptSlug={concept.slug}
          limit={5}
        />
      </main>

      {/* Related Content */}
      <RelatedContent sections={relatedSections} />

      {/* Connection Toggle (Mobile FAB) */}
      {connectionCount > 0 && (
        <ConnectionToggle
          count={connectionCount}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isOpen={isSidebarOpen}
        />
      )}

      {/* Connection Sidebar */}
      <ConnectionSidebar
        sections={sidebarSections}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
