import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@/ui/icons/UIIcons';
import { PhilosophersIcon } from '@/ui/icons/NavigationIcons';
import { BackButton } from '@/ui/components/BackButton';
import { getCachedConcepts, getCachedCategories, getCachedConceptsCount } from '@/lib/cache/queries';
import { SearchInput } from './components/SearchInput';
import { ConceptCard, ConceptCardSkeleton } from '@/components/concepts';
import type { ConceptWithCategory } from '@/types/prisma';

export const revalidate = 60;

export const metadata = {
  title: 'Conceptuaire - Aletheia',
  description: 'Explorez les concepts philosophiques de la métaphysique',
};

// Shell renders instantly (0ms) — no await
export default async function ConceptuairePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string; page?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-paper-50">
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <BackButton />
            <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink">Conceptuaire</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink mb-3">
            Explorez les <span className="living-word">Concepts Philosophiques</span>
          </h2>
          <p className="text-ink-light text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Un <span className="living-word">voyage</span> à travers les <span className="living-word">fondements</span> de la pensée occidentale.
          </p>
          <div className="w-full max-w-3xl mx-auto mb-8">
            <SearchInput defaultValue={params.search} />
          </div>
        </div>

        <div className="content-2-3">
          {/* Data-dependent content streamed via Suspense */}
          <Suspense fallback={<ConceptuaireContentSkeleton />}>
            <ConceptuaireContent
              search={params.search || ''}
              category={params.category || ''}
              page={parseInt(params.page || '1')}
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

// Async component — fetches data, streamed after shell
async function ConceptuaireContent({
  search, category, page
}: {
  search: string; category: string; page: number;
}) {
  const [concepts, categories, totalCount] = await Promise.all([
    getCachedConcepts(search, category, page, 24).catch(() => [] as ConceptWithCategory[]),
    getCachedCategories().catch(() => []),
    getCachedConceptsCount(search, category).catch(() => 0),
  ]);
  const totalPages = Math.ceil(totalCount / 24);

  return (
    <>
      {/* Categories Filter */}
      {categories && categories.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-center">
          <Link
            href="/conceptuaire"
            className={`h-10 px-5 text-sm font-medium transition-all duration-300 flex items-center${
              !category ? ' bg-sepia-600 text-paper-50 shadow-md' : ' bg-paper-200 text-ink hover:bg-paper-300 border-2 border-paper-400'
            }`}
          >
            Tous ({totalCount})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/conceptuaire?category=${cat.slug}`}
              className={`h-10 px-5 text-sm font-medium transition-all duration-300 flex items-center${
                category === cat.slug ? ' bg-sepia-600 text-paper-50 shadow-md' : ' bg-paper-200 text-ink hover:bg-paper-300 border-2 border-paper-400'
              }`}
            >
              {cat.name} {cat._count?.concepts ? `(${cat._count.concepts})` : '(0)'}
            </Link>
          ))}
        </div>
      )}

      {/* Concepts Grid */}
      {concepts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {concepts.map((concept: ConceptWithCategory) => (
            <ConceptCard key={concept.id} concept={concept} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="max-w-lg mx-auto">
            <div className="mb-8 inline-block p-6 bg-paper-200 border-2 border-dashed border-sepia-300">
              <PhilosophersIcon className="w-16 h-16 text-sepia-600 opacity-60" />
            </div>
            <h3 className="text-3xl font-serif text-ink mb-4">Aucun concept trouvé</h3>
            <p className="text-ink-light text-lg mb-8">Les concepts philosophiques seront bientôt ajoutés.</p>
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 hover:bg-sepia-700 text-paper-50 font-medium transition-all duration-300">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-3">
          <Link
            href={`/conceptuaire?${new URLSearchParams(Object.fromEntries(Object.entries({ category: category || '', search: search || '', page: page > 1 ? String(page - 1) : '' }).filter(([_, v]) => v !== ''))).toString()}`}
            className={`px-2 py-1 border-2 border-sepia-300 text-ink hover:bg-sepia-50 transition-colors ${page === 1 ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={page === 1}
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
          <span className="text-ink font-medium px-2 text-sm">Page {page} / {totalPages}</span>
          <Link
            href={`/conceptuaire?${new URLSearchParams(Object.fromEntries(Object.entries({ category: category || '', search: search || '', page: page < totalPages ? String(page + 1) : '' }).filter(([_, v]) => v !== ''))).toString()}`}
            className={`px-2 py-1 border-2 border-sepia-300 text-ink hover:bg-sepia-50 transition-colors ${page === totalPages ? 'pointer-events-none opacity-50' : ''}`}
            aria-disabled={page === totalPages}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}

function ConceptuaireContentSkeleton() {
  return (
    <>
      <div className="mb-12 flex gap-3 justify-center flex-wrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 w-24 bg-paper-200 animate-pulse" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ConceptCardSkeleton key={i} variant="grid" />
        ))}
      </div>
    </>
  );
}
