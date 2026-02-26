import Link from 'next/link';
import { ArrowLeftIcon, PhilosophersIcon } from '@/ui';
import { getConcepts, getCategories } from '@/lib/actions/concepts';
import { SearchInput } from './components/SearchInput';
import { ConceptCard } from '@/components/concepts/ConceptCard';
import type { ConceptWithCategory } from '@/types/prisma';

export const metadata = {
  title: 'Conceptuaire - Aletheia',
  description: 'Explorez les concepts philosophiques de la métaphysique',
};

export default async function ConceptuairePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const params = await searchParams;
  const concepts = await getConcepts({ search: params.search, category: params.category }).catch(() => [] as ConceptWithCategory[]);
  const categories = await getCategories().catch(() => []);

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-2/3 mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              Conceptuaire
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8 max-w-2/3 mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold text-ink mb-3">
            Explorez les <span className="living-word">Concepts Philosophiques</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto mb-8">
            Un <span className="living-word">voyage</span> à travers les <span className="living-word">fondements</span> de la pensée occidentale, de la <span className="living-word">Grèce antique</span> à nos jours.
          </p>

          {/* Search Bar - Auto-filter with debounce */}
          <div className="w-full max-w-3xl mx-auto mb-8">
            <SearchInput defaultValue={params.search} />
          </div>
        </div>

        {/* Categories Filter - Pills with uniform height */}
        {categories && categories.length > 0 && (
          <div className="mb-12 flex overflow-x-auto gap-3 justify-start pb-2 scrollbar-hide snap-x sm:justify-center lg:flex-wrap">
            <Link
              href="/conceptuaire"
              className={`h-10 px-5 text-sm font-medium transition-all duration-300 flex items-center snap-center${
                !params.category
                  ? ' bg-sepia-600 text-paper-50 shadow-md'
                  : ' bg-paper-200 text-ink hover:bg-paper-300 border-2 border-paper-400'
              }`}
            >
              Tous {concepts?.length ? `(${concepts.length})` : '(0)'}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/conceptuaire?category=${cat.slug}`}
                className={`h-10 px-5 text-sm font-medium transition-all duration-300 flex items-center snap-center${
                  params.category === cat.slug
                    ? ' bg-sepia-600 text-paper-50 shadow-md'
                    : ' bg-paper-200 text-ink hover:bg-paper-300 border-2 border-paper-400'
                }`}
              >
                {cat.name} {cat._count?.concepts ? `(${cat._count.concepts})` : '(0)'}
              </Link>
            ))}
          </div>
        )}

        {/* Concepts Grid - Masonry Asymmetrical */}
        {concepts && concepts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
            {concepts.map((concept: ConceptWithCategory) => (
              <ConceptCard
                key={concept.id}
                concept={concept}
                variant="grid"
              />
            ))}
          </div>
        )}

        {/* Empty State - Enhanced Design */}
        {(!concepts || concepts.length === 0) && (
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              <div className="mb-8 inline-block p-6  bg-paper-200 border-2 border-dashed border-sepia-300">
                <PhilosophersIcon className="w-16 h-16 text-sepia-600 opacity-60" />
              </div>
              <h3 className="text-3xl font-serif text-ink mb-4">Aucun concept trouvé</h3>
              <p className="text-ink-light text-lg mb-8">
                Les concepts philosophiques seront bientôt ajoutés à la base de données.
              </p>
              <div className="bg-paper-100 border-2 border-paper-300  p-6 mb-6">
                <p className="font-semibold text-ink mb-3 flex items-center justify-center gap-2">
                  💡 Pour ajouter des concepts :
                </p>
                <ol className="text-left text-sm text-ink-light space-y-2 max-w-xs mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5  bg-sepia-600 text-paper-50 text-xs flex items-center justify-center font-semibold">1</span>
                    <span>Configurez votre <code className="bg-paper-200 px-1.5 py-0.5 text-xs font-mono">.env</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5  bg-sepia-600 text-paper-50 text-xs flex items-center justify-center font-semibold">2</span>
                    <span>Lancez <code className="bg-paper-200 px-1.5 py-0.5 text-xs font-mono">pnpm run db:seed</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-5 h-5  bg-sepia-600 text-paper-50 text-xs flex items-center justify-center font-semibold">3</span>
                    <span>Les concepts apparaîtront ici</span>
                  </li>
                </ol>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 hover:bg-sepia-700 text-paper-50  font-medium transition-all duration-300"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
