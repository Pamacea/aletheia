import Link from 'next/link';
import { getPhilosophers, getPhilosopherStats } from '@/lib/actions/philosophers';
import { prisma } from '@/lib/db/prisma';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { UserIcon, PhilosophersIcon, QuoteIcon, ArrowLeftIcon } from '@/ui/components/CustomIcons';

export const metadata = {
  title: 'Philosophes - Aletheia',
  description: 'Explorez les philosophes et leurs œuvres à travers l\'histoire',
};

export default async function PhilosophesPage() {
  const philosophers = await getPhilosophers();
  const stats = await getPhilosopherStats();

  // Fetch all movements for filter buttons
  const movements = await prisma.movement.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      period: true,
      _count: {
        select: {
          movementPhilosophers: true,
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header - FULL WIDTH */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Philosophes</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content - FULL WIDTH */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-6xl living-word">Π</span>
          </div>
          <h2 className="font-serif text-4xl font-semibold text-ink mb-3">
            Les <span className="living-word">Penseurs de l'Histoire</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto">
            De la <span className="living-word">Grèce antique</span> à la philosophie contemporaine, découvrez les <span className="living-word">esprits</span> qui ont façonné notre pensée.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm">
            <span className="px-4 py-2 border-double-ornate bg-paper-200 text-sepia-600">
              <strong className="text-ink">{stats.total}</strong> philosophes
            </span>
            <span className="px-4 py-2 border-double-ornate bg-paper-200 text-sepia-600">
              <strong className="text-ink">{stats.withMovements}</strong> avec courants
            </span>
          </div>
        </div>

        {/* Content Container - 2/3 WIDTH */}
        <div className="content-2-3">
          {movements.length > 0 && (
            <section className="mb-12">
              <h3 className="font-serif text-xl font-semibold text-ink mb-4">
                Filtrer par <span className="living-word">Courant</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/philosophes"
                  className="px-4 py-2 bg-sepia-600 text-white hover:bg-sepia-700 transition-colors living-word border-2 border-sepia-600"
                >
                  Tous les philosophes
                </Link>
                {movements.map((movement) => (
                  <Link
                    key={movement.id}
                    href={`/courants/${movement.slug}`}
                    className="px-4 py-2 bg-white border-2 border-sepia-300 hover:border-sepia-600 hover:shadow-md transition-all living-word"
                  >
                    <span className="font-medium">{movement.name}</span>
                    {movement.period && (
                      <span className="ml-2 text-sm text-ink-light">({movement.period})</span>
                    )}
                    <span className="ml-2 px-2 py-0.5 bg-sepia-100 text-sepia-700 text-xs rounded-full">
                      {movement._count.movementPhilosophers}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Philosophers List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {philosophers.map((philosopher: any) => (
            <LinkOrnate
              key={philosopher.id}
              href={`/philosophes/${encodeURIComponent(philosopher.name)}`}
              className="group bg-paper-50 border-2 border-paper-300 p-6 hover:shadow-glow-medium hover:border-sepia-600 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border-2 border-sepia-600 bg-paper-200 flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-sepia-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-sepia-600 transition-colors">
                      <span className="living-word">{philosopher.name}</span>
                    </h3>
                    <p className="text-sm text-ink-light">{philosopher.quoteCount} citation{philosopher.quoteCount > 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>

              {/* Categories */}
              {philosopher.categories.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {philosopher.categories.slice(0, 3).map((category: string) => (
                    <span
                      key={category}
                      className="px-2 py-1 text-xs border border-sepia-600 bg-paper-200 text-sepia-600"
                    >
                      {category}
                    </span>
                  ))}
                  {philosopher.categories.length > 3 && (
                    <span className="px-2 py-1 text-xs border border-paper-300 bg-paper-300 text-ink-light">
                      +{philosopher.categories.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Works */}
              {philosopher.works.length > 0 && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-ink mb-1">Œuvres majeures :</p>
                  <ul className="text-sm text-ink-light space-y-0.5">
                    {philosopher.works.slice(0, 4).map((work: any, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <QuoteIcon className="w-3 h-3 text-sepia-600 shrink-0" />
                        <span className="italic">{work.title}</span>
                        {work.year && <span className="text-paper-600">({work.year})</span>}
                      </li>
                    ))}
                    {philosopher.works.length > 4 && (
                      <li className="text-sepia-600 text-sm italic">
                        +{philosopher.works.length - 4} autres œuvres
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </LinkOrnate>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
}
