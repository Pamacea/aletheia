'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { QuoteIcon, PhilosophersIcon, BookIcon } from '@/ui/icons/NavigationIcons';
import { ClockIcon, AwardIcon, TrendingUpIcon, CalendarIcon } from '@/ui/icons/StatusIcons';
import { ConnectionSidebar, ConnectionToggle } from '@/ui/organisms/ConnectionSidebar';
import { RelatedContent } from '@/ui/organisms/RelatedContent';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { SlugHeader } from '@/ui/organisms/SlugHeader';
import type { Philosopher, PhilosopherWork } from '@/lib/actions/philosophers';
import type { RelatedSection } from '@/ui/organisms/RelatedContent';
import { useFavorite } from '@/features/favorites/hooks';
import { useRouter } from 'next/navigation';
import { useToastActions } from '@/ui/hooks/useToastActions';

interface QuoteData {
  quotes: Array<{
    id: string;
    text: string;
    source: {
      author: string | null;
      title: string | null;
      year: number | null;
      type: string;
    } | null;
  }>;
  total: number;
}

interface ConnectionSection {
  id: string;
  title: string;
  icon: 'concept' | 'philosopher' | 'source' | 'flashcard';
  items: Array<{
    id: string;
    name: string;
    slug?: string;
    description?: string;
    href: string;
  }>;
  defaultOpen?: boolean;
}


interface Stats {
  quotes: number;
  works: number;
  categories: number;
  periods: number;
}

interface PhilosopherClientProps {
  philosopher: Philosopher;
  quotesData: QuoteData;
  connectionSections: ConnectionSection[];
  relatedSections: RelatedSection[];
  stats: Stats;
  birthYear: number | null;
  deathYear: number | null;
}

export function PhilosopherClient({
  philosopher,
  quotesData,
  connectionSections,
  relatedSections,
  stats,
  birthYear,
  deathYear,
}: PhilosopherClientProps) {
  const router = useRouter();
  const { showSuccess, showError } = useToastActions();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Use TanStack Query for favorites - removes useEffect for data fetching
  const { isFavorite, toggle: toggleFavoriteMutation } = useFavorite({
    entityType: 'PHILOSOPHER',
    entityId: philosopher.id,
  });

  // Handle favorite toggle - optimized with useFavorite hook
  const handleFavorite = async () => {
    try {
      startTransition(async () => {
        await toggleFavoriteMutation();
        // isFavorite state is automatically updated by TanStack Query

        if (!isFavorite) {
          showSuccess(`${philosopher.name} a été ajouté à vos favoris`, "Favori ajouté");
        } else {
          showSuccess(`${philosopher.name} a été retiré de vos favoris`, "Favori retiré");
        }

        router.refresh();
      });
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      showError("Impossible de modifier les favoris");
    }
  };

  const totalConnections = connectionSections.reduce(
    (sum, section) => sum + section.items.length,
    0
  );

  return (
    <>
      {/* Header with favorite button */}
      <SlugHeader
        breadcrumb={[
          { label: 'Philosophes', href: '/philosophes' },
        ]}
        current={philosopher.name}
        backHref="/philosophes"
        backLabel="Retour aux philosophes"
        subtitle={`${philosopher.quoteCount} citation${philosopher.quoteCount > 1 ? 's' : ''} référencée${philosopher.quoteCount > 1 ? 's' : ''}`}
        extra={
          <div className="flex flex-wrap gap-2">
            {(philosopher.movements || []).map((movement) => (
              <Link
                key={movement.id}
                href={`/courants/${movement.slug}`}
                className="px-3 py-1 bg-sepia-100 text-sepia-700 text-sm hover:bg-sepia-200 transition-colors living-word"
              >
                {movement.name}
              </Link>
            ))}
          </div>
        }
        actions={{
          isFavorite,
          onFavorite: handleFavorite,
        }}
      />

      {/* Main Content */}
      <main className={`max-w-7xl mx-auto px-4 py-8 lg:px-8 transition-all duration-300 ${sidebarOpen ? 'lg:mr-80' : ''}`}>
        {/* Hero Section with Avatar */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-sepia-100 to-amber-100 border-4 border-sepia-600 shadow-lg">
              <PhilosophersIcon className="w-16 h-16 text-sepia-600" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard
              icon={QuoteIcon}
              value={stats.quotes}
              label="Citations"
              color="text-sepia-600"
              bgColor="bg-sepia-50"
            />
            <StatCard
              icon={BookIcon}
              value={stats.works}
              label="Œuvres"
              color="text-blue-600"
              bgColor="bg-blue-50"
            />
            <StatCard
              icon={AwardIcon}
              value={stats.categories}
              label="Courants"
              color="text-purple-600"
              bgColor="bg-purple-50"
            />
            <StatCard
              icon={TrendingUpIcon}
              value={stats.periods}
              label="Périodes"
              color="text-green-600"
              bgColor="bg-green-50"
            />
          </div>
        </div>

        {/* Timeline Biographique */}
        {(birthYear || deathYear || philosopher.works.length > 0) && (
          <section className="mb-12 bg-white border-2 border-paper-200 p-6">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6 flex items-center gap-2">
              <ClockIcon className="w-6 h-6 text-sepia-600" />
              Timeline Biographique
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-paper-300" />

              <div className="space-y-6">
                {/* Birth */}
                {birthYear && (
                  <TimelineItem
                    year={birthYear}
                    title="Naissance"
                    description="Date de naissance estimée"
                    isFirst
                  />
                )}

                {/* Works timeline */}
                {philosopher.works.slice(0, 5).map((work: PhilosopherWork, index: number) => (
                  <TimelineItem
                    key={index}
                    year={work.year}
                    title={work.title}
                    description={`${work.type.toLowerCase()}${work.year ? ` - ${work.year}` : ''}`}
                  />
                ))}

                {/* Death */}
                {deathYear && (
                  <TimelineItem
                    year={deathYear}
                    title="Décès"
                    description="Date de décès estimée"
                  />
                )}
              </div>
            </div>

            {philosopher.works.length > 5 && (
              <div className="mt-6 text-center">
                <LinkOrnate
                  href="#bibliography"
                  className="inline-flex items-center gap-2 text-sepia-600 hover:text-sepia-700"
                >
                  Voir la bibliographie complète
                  <BookIcon className="w-4 h-4" />
                </LinkOrnate>
              </div>
            )}
          </section>
        )}

        {/* Carte d'influence */}
        {philosopher.categories.length > 0 && (
          <section className="mb-12 bg-gradient-to-br from-sepia-50 to-amber-50 border-2 border-sepia-200 p-6">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6 flex items-center gap-2">
              <AwardIcon className="w-6 h-6 text-sepia-600" />
              Carte d&apos;Influence
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-ink mb-3">Courants Principaux</h3>
                <div className="flex flex-wrap gap-2">
                  {philosopher.categories.map((category: string) => (
                    <LinkOrnate
                      key={category}
                      href={`/courants#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      living
                      className="px-4 py-2 bg-white border-2 border-sepia-300 hover:border-sepia-600 hover:shadow-md transition-all"
                    >
                      {category}
                    </LinkOrnate>
                  ))}
                </div>
              </div>

              {philosopher.periods.length > 0 && (
                <div>
                  <h3 className="font-semibold text-ink mb-3">Périodes</h3>
                  <div className="flex flex-wrap gap-2">
                    {philosopher.periods.map((period: string) => (
                      <span
                        key={period}
                        className="px-4 py-2 bg-white border-2 border-paper-300"
                      >
                        {period}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bibliographie Complète */}
        {philosopher.works.length > 0 && (
          <section id="bibliography" className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6 flex items-center gap-2">
              <BookIcon className="w-6 h-6 text-sepia-600" />
              Bibliographie Complète
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosopher.works.map((work: PhilosopherWork, index: number) => (
                <WorkCard key={index} work={work} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Citations Section */}
        {quotesData.quotes.length > 0 && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-6 flex items-center gap-2">
              <QuoteIcon className="w-6 h-6 text-sepia-600" />
              Citations
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {quotesData.quotes.map((quote) => (
                <blockquote
                  key={quote.id}
                  className="p-6 bg-white border-2 border-paper-200 hover:border-sepia-600 hover:shadow-md transition-all"
                >
                  <QuoteIcon className="w-8 h-8 text-sepia-600 mb-4" />
                  <p className="font-serif text-xl text-ink leading-relaxed mb-4 italic">
                    {quote.text}
                  </p>
                  <footer className="flex items-center justify-between text-sm">
                    <cite className="not-italic text-sepia-700">
                      {quote.source?.title && (
                        <span className="italic">{quote.source.title}</span>
                      )}
                    </cite>
                    {quote.source?.year && (
                      <span className="text-ink-light">({quote.source.year})</span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>

            {quotesData.total > 100 && (
              <div className="mt-8 text-center">
                <p className="text-ink-light">
                  Affichage de 100 citations sur {quotesData.total}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Empty State */}
        {quotesData.quotes.length === 0 && philosopher.works.length === 0 && (
          <div className="text-center py-20 text-ink-light">
            <PhilosophersIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-2">Aucune information disponible</p>
            <p className="text-sm">
              Les détails de {philosopher.name} seront bientôt ajoutés
            </p>
          </div>
        )}

        {/* Related Content at Bottom */}
        <RelatedContent sections={relatedSections} />
      </main>

      {/* Connection Sidebar */}
      <ConnectionSidebar
        sections={connectionSections}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Floating Toggle Button */}
      <ConnectionToggle
        count={totalConnections}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        isOpen={sidebarOpen}
      />
    </>
  );
}

// Stat Card Component
function StatCard({
  icon: Icon,
  value,
  label,
  color,
  bgColor,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} border-2 border-paper-200 p-4 text-center`}>
      <div className={`inline-flex items-center justify-center w-10 h-10 ${bgColor} mb-2`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className={`text-2xl font-bold ${color} living-word`}>{value}</div>
      <div className="text-xs text-ink-light mt-1">{label}</div>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  description,
  isFirst = false,
}: {
  year: number | null | undefined;
  title: string;
  description: string;
  isFirst?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-4 pl-10">
      {/* Timeline dot */}
      <div className={`absolute left-2 w-5 h-5 border-4 border-white ${isFirst ? 'bg-sepia-600' : 'bg-paper-400'}`} />

      <div className="flex-1 bg-paper-50 border-2 border-paper-200 p-4 hover:border-sepia-600 transition-colors">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-ink living-word">{title}</h3>
            <p className="text-sm text-ink-light mt-1">{description}</p>
          </div>
          {year && (
            <div className="flex-shrink-0 px-3 py-1 bg-white border-2 border-sepia-300">
              <span className="text-sm font-semibold text-sepia-700">{year}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Work Card Component
function WorkCard({ work, index }: { work: PhilosopherWork; index: number }) {
  return (
    <div className="bg-white border-2 border-paper-200 p-6 hover:border-sepia-600 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-sepia-50 border-2 border-sepia-200">
          <span className="text-sepia-600 font-bold living-word">{index + 1}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-semibold text-ink mb-2 living-word">
            {work.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {work.year && (
              <span className="inline-flex items-center gap-1 text-sm text-ink-light bg-paper-50 px-2 py-1">
                <CalendarIcon className="w-3 h-3" />
                {work.year}
              </span>
            )}
            <span className="text-xs bg-sepia-100 text-sepia-700 px-2 py-1 uppercase tracking-wider">
              {work.type.toLowerCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
