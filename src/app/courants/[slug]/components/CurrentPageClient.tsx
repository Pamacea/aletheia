'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { BookIcon, PhilosophersIcon, QuoteIcon, ClockIcon } from '@/ui/components/CustomIcons';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { SlugHeader } from '@/ui/organisms/SlugHeader';
import { ConnectionSidebar, ConnectionToggle } from '@/ui/organisms/ConnectionSidebar';
import { RelatedContent } from '@/ui/organisms/RelatedContent';
import { useFavorite } from '@/features/favorites/hooks';
import { useRouter } from 'next/navigation';
import { useToastActions } from '@/ui/hooks/useToastActions';
import type { Category } from '@/types';

// Local type definition (matches CurrentDetails from server actions)
interface PhilosopherRelation {
  id: string;
  slug: string;
  name: string;
  role?: string | null;
}

interface CurrentDetails {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  color: string | null;
  icon: string | null;
  philosophers: PhilosopherRelation[];
  concepts: Array<{
    id: string;
    slug: string;
    name: string;
    category: { name: string; color: string | null } | null;
    keyAuthors: any[] | null;
    sourceConcepts: Array<{
      source: { author: string | null; title: string | null; year: number | null } | null;
    }>;
  }>;
}

interface CurrentPageClientProps {
  current: CurrentDetails;
  relatedCurrents: Array<Category & { _count: { concepts: number } }>;
}

export function CurrentPageClient({ current, relatedCurrents }: CurrentPageClientProps) {
  const router = useRouter();
  const { showSuccess, showError } = useToastActions();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Use TanStack Query for favorites - removes useEffect for data fetching
  const { isFavorite, toggle: toggleFavoriteMutation } = useFavorite({
    entityType: 'CURRENT',
    entityId: current.id,
  });

  // Handle favorite toggle - optimized with useFavorite hook
  const handleFavorite = async () => {
    try {
      startTransition(async () => {
        await toggleFavoriteMutation();
        // isFavorite state is automatically updated by TanStack Query

        if (!isFavorite) {
          showSuccess(`${current.name} a été ajouté à vos favoris`, "Favori ajouté");
        } else {
          showSuccess(`${current.name} a été retiré de vos favoris`, "Favori retiré");
        }

        router.refresh();
      });
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      showError("Impossible de modifier les favoris");
    }
  };

  // Prepare connection sections for sidebar
  const connectionSections = [
    {
      id: 'philosophers',
      title: 'Penseurs',
      icon: 'philosopher' as const,
      defaultOpen: true,
      items: current.philosophers.slice(0, 10).map((philosopher) => ({
        id: philosopher.id,
        name: philosopher.name,
        slug: philosopher.slug,
        href: `/philosophes/${philosopher.slug}`,
      })),
    },
    {
      id: 'concepts',
      title: 'Concepts',
      icon: 'concept' as const,
      defaultOpen: true,
      items: current.concepts.slice(0, 10).map((concept: CurrentDetails['concepts'][number]) => ({
        id: concept.id,
        name: concept.name,
        slug: concept.slug,
        href: `/conceptuaire/${concept.slug}`,
        description: concept.sourceConcepts && concept.sourceConcepts.length > 0
          ? `${concept.sourceConcepts[0].source?.author}`
          : undefined,
      })),
    },
  ];

  // Calculate stats
  const stats = [
    {
      label: 'Concepts',
      value: current.concepts.length,
      icon: BookIcon,
    },
    {
      label: 'Penseurs',
      value: current.philosophers.length,
      icon: PhilosophersIcon,
    },
  ];

  // Prepare related content sections
  const relatedSections = [
    {
      title: 'Courants connexes',
      icon: 'current' as const,
      items: relatedCurrents.slice(0, 3).map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        type: 'current' as const,
        description: `${cat._count.concepts} concepts`,
      })),
      href: '/courants',
      linkText: 'Voir tous les courants',
    },
    {
      title: 'Concepts clés',
      icon: 'concept' as const,
      items: current.concepts.slice(0, 6).map((concept: CurrentDetails['concepts'][number]) => ({
        id: concept.id,
        name: concept.name,
        slug: concept.slug,
        type: 'concept' as const,
        description: concept.sourceConcepts && concept.sourceConcepts.length > 0
          ? `${concept.sourceConcepts[0].source?.author}`
          : undefined,
      })),
      href: '/conceptuaire',
      linkText: 'Voir tout le conceptuaire',
    },
  ];

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header with SlugHeader */}
      <SlugHeader
        breadcrumb={[
          { label: 'Courants', href: '/courants' },
        ]}
        current={current.name}
        backHref="/courants"
        backLabel="Retour aux courants"
        subtitle={current.description || `Explorez les concepts et penseurs liés à ${current.name}`}
        actions={{
          isFavorite,
          onFavorite: handleFavorite,
        }}
        extra={
          <div className="flex items-center gap-6 mt-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className={`p-2 ${current.color ? 'bg-opacity-10' : 'bg-sepia-50'}`} style={current.color ? { backgroundColor: `${current.color}20` } : {}}>
                    <Icon className={`w-5 h-5 ${current.color || 'text-sepia-600'}`} style={current.color ? { color: current.color } : {}} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ink">{stat.value}</div>
                    <div className="text-xs text-ink-light uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        }
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        {/* Timeline / Period Information */}
        <section className="mb-12 bg-white border-2 border-paper-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <ClockIcon className="w-6 h-6 text-sepia-600" />
            <h3 className="font-serif text-2xl font-semibold text-ink">
              Contexte Historique
            </h3>
          </div>
          <p className="text-ink-light leading-relaxed">
            Ce courant philosophique représente une tradition de pensée importante dans l'histoire de la philosophie.
            Les penseurs associés et les concepts présentés ici ont contribué à façonner notre compréhension
            des questions fondamentales concernant {current.name.toLowerCase()}.
          </p>
        </section>

        {/* Key Works / Sources Section */}
        {current.concepts.some(c => c.sourceConcepts && c.sourceConcepts.length > 0) && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <QuoteIcon className="w-6 h-6 text-sepia-600" />
              <h3 className="font-serif text-2xl font-semibold text-ink">
                Œuvres Clés
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.concepts
                .filter((c: CurrentDetails['concepts'][number]) => c.sourceConcepts && c.sourceConcepts.length > 0)
                .slice(0, 6)
                .map((concept: CurrentDetails['concepts'][number]) => (
                  <div
                    key={concept.id}
                    className="bg-white border-2 border-paper-200 p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-sepia-50 flex-shrink-0">
                        <QuoteIcon className="w-4 h-4 text-sepia-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <LinkOrnate
                          href={`/conceptuaire/${concept.slug}`}
                          className="font-medium text-ink hover:text-sepia-600 transition-colors living-word"
                        >
                          {concept.name}
                        </LinkOrnate>
                        {concept.sourceConcepts && concept.sourceConcepts[0] && (
                          <div className="mt-2 text-sm text-ink-light">
                            <p className="font-medium">{concept.sourceConcepts[0].source?.author}</p>
                            {concept.sourceConcepts[0].source?.title && (
                              <p className="italic">{concept.sourceConcepts[0].source.title}</p>
                            )}
                            {concept.sourceConcepts[0].source?.year && (
                              <p className="text-xs mt-1">{concept.sourceConcepts[0].source.year}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {/* Philosophers Section */}
        {current.philosophers && current.philosophers.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <PhilosophersIcon className="w-6 h-6 text-sepia-600" />
              <h3 className="font-serif text-2xl font-semibold text-ink">
                Penseurs Associés
              </h3>
              <span className="ml-2 px-3 py-1 bg-sepia-100 text-sepia-700 text-sm font-medium">
                {current.philosophers.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {current.philosophers.slice(0, 12).map((philosopher) => (
                <LinkOrnate
                  key={philosopher.id}
                  href={`/philosophes/${philosopher.slug}`}
                  className="group bg-white border-2 border-paper-300 p-4 hover:shadow-lg hover:border-sepia-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sepia-50 group-hover:bg-sepia-100 transition-colors">
                      <PhilosophersIcon className="w-5 h-5 text-sepia-600" />
                    </div>
                    <span className="font-medium text-ink living-word group-hover:text-sepia-600 transition-colors">
                      {philosopher.name}
                    </span>
                    {philosopher.role && (
                      <span className="text-xs text-ink-light px-2 py-0.5 bg-paper-100 rounded">
                        {philosopher.role}
                      </span>
                    )}
                  </div>
                </LinkOrnate>
              ))}
            </div>
            {current.philosophers.length > 12 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-ink-light">
                  + {current.philosophers.length - 12} autres penseurs
                </p>
              </div>
            )}
          </section>
        )}

        {/* Concepts Section */}
        {current.concepts && current.concepts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <BookIcon className="w-6 h-6 text-sepia-600" />
              <h3 className="font-serif text-2xl font-semibold text-ink">
                Concepts Associés
              </h3>
              <span className="ml-2 px-3 py-1 bg-sepia-100 text-sepia-700 text-sm font-medium">
                {current.concepts.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.concepts.map((concept: CurrentDetails['concepts'][number]) => (
                <LinkOrnate
                  key={concept.id}
                  href={`/conceptuaire/${concept.slug}`}
                  className="group bg-white border-2 border-paper-300 p-6 hover:shadow-lg hover:border-sepia-600 transition-all duration-300"
                >
                  {/* Category badge */}
                  {concept.category && (
                    <div className="mb-3">
                      <span
                        className="inline-block px-2 py-1 text-xs"
                        style={{
                          backgroundColor: concept.category.color ? `${concept.category.color}20` : '#f5f5f0',
                          color: concept.category.color || '#8b877f',
                        }}
                      >
                        {concept.category.name}
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h4 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-sepia-600 transition-colors living-word">
                    {concept.name}
                  </h4>

                  {/* Source references */}
                  {concept.sourceConcepts && concept.sourceConcepts.length > 0 && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-ink-light">
                      <QuoteIcon className="w-3 h-3" />
                      <span>
                        {concept.sourceConcepts[0].source?.author}
                        {concept.sourceConcepts[0].source?.title && (
                          <span>, {concept.sourceConcepts[0].source.title}</span>
                        )}
                      </span>
                    </div>
                  )}

                  {/* Key authors */}
                  {concept.keyAuthors && concept.keyAuthors.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {concept.keyAuthors.slice(0, 2).map((author: any, idx: number) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-0.5 bg-paper-100 text-ink-light text-xs"
                        >
                          {typeof author === 'string' ? author : author.name}
                        </span>
                      ))}
                    </div>
                  )}
                </LinkOrnate>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {(!current.concepts || current.concepts.length === 0) && (
          <section className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sepia-50 mb-4">
              <BookIcon className="w-10 h-10 text-sepia-600 opacity-50" />
            </div>
            <p className="text-xl text-ink mb-2">Aucun concept associé</p>
            <p className="text-sm text-ink-light">Les concepts de ce courant seront bientôt ajoutés</p>
          </section>
        )}
      </main>

      {/* Related Content */}
      <RelatedContent sections={relatedSections} />

      {/* Connection Sidebar */}
      <ConnectionSidebar
        sections={connectionSections}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Floating Toggle Button */}
      <ConnectionToggle
        count={current.philosophers.length + current.concepts.length}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        isOpen={sidebarOpen}
      />
    </div>
  );
}
