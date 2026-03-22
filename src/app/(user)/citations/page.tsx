import Link from 'next/link';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { BackButton } from '@/ui/components/BackButton';
import { QuoteIcon } from '@/ui/icons/NavigationIcons';
import { getQuotes } from '@/lib/actions/citations';
import { getCachedQuoteAuthors, getCachedQuoteStats } from '@/lib/cache/queries';
import { CitationSearch } from './components/CitationSearch';

export const revalidate = 120;

export const metadata = {
  title: 'Citations Philosophiques - Aletheia',
  description: 'Explorez les citations philosophiques de grands auteurs à travers les âges',
};

export default async function CitationsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; author?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  const author = params.author;
  const search = params.search;

  // Parallel data fetching (authors + stats from cache)
  const [data, authors, stats] = await Promise.all([
    getQuotes({ page, author, search }),
    getCachedQuoteAuthors(),
    getCachedQuoteStats(),
  ]);

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <BackButton label="Retour" />
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Citations</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content - FULL WIDTH */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section - FULL WIDTH */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-6xl living-word">Σ</span>
          </div>
          <h2 className="font-serif text-4xl font-semibold text-ink mb-3">
            Paroles de <span className="living-word">Sagesse</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto">
            Une collection de citations philosophiques qui ont traversé les siècles, de l'<span className="living-word">Antiquité</span> à nos jours.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b6f3c]">
            <span className="px-4 py-2 border-double-ornate bg-paper-200">
              <strong className="text-ink">{stats.total}</strong> citations
            </span>
            <span className="px-4 py-2 border-double-ornate bg-paper-200">
              <strong className="text-ink">{stats.authorsCount}</strong> auteurs
            </span>
          </div>
        </div>

        {/* Content Container - 2/3 WIDTH */}
        <div className="content-2-3">
          {/* Search & Filters */}
          <div className="mb-8 p-6 bg-paper-200 border-double-ornate shadow-glow-sm">
          <CitationSearch
            defaultSearch={search}
            defaultAuthor={author}
            authors={authors}
          />
        </div>

        {/* Quotes List */}
        <div className="space-y-6">
          {data.quotes.map((quote) => (
            <blockquote
              key={quote.id}
              className="quote-ornate p-8 bg-paper-50 border-2 border-paper-300 hover:shadow-glow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <QuoteIcon className="w-10 h-10 text-sepia-600 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-serif text-xl text-ink leading-relaxed mb-4 italic">
                    {quote.text}
                  </p>
                  <footer className="flex items-center justify-between text-sm">
                    <cite className="not-italic text-sepia-600">
                      <span className="font-semibold">{quote.source?.author || 'Anonyme'}</span>
                      {quote.source?.title && (
                        <>
                          <span className="mx-2">—</span>
                          <span className="italic">{quote.source.title}</span>
                        </>
                      )}
                    </cite>
                    {quote.source?.year && (
                      <span className="text-paper-600">({quote.source.year})</span>
                    )}
                  </footer>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Empty State */}
        {data.quotes.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="mb-6 inline-block p-5  bg-paper-200 border-2 border-dashed border-sepia-300">
                <QuoteIcon className="w-12 h-12 text-sepia-600 opacity-60" />
              </div>
              <h3 className="text-2xl font-serif text-ink mb-3">Aucune citation trouvée</h3>
              <p className="text-ink-light mb-6">
                {search || author
                  ? "Essayez de modifier vos critères de recherche"
                  : "Les citations seront bientôt ajoutées à la base de données"
                }
              </p>
              {(search || author) && (
                <Link
                  href="/citations"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sepia-600 hover:bg-sepia-700 text-paper-50  font-medium transition-all duration-300 text-sm"
                >
                  Effacer les filtres
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Pagination - Enhanced */}
        {data.pages > 1 && (
          <div className="mt-12">
            <nav className="flex flex-col items-center gap-4">
              {/* Page numbers */}
              <div className="flex flex-wrap justify-center gap-2">
                {/* First page */}
                {page > 3 && data.pages > 5 && (
                  <Link
                    href={`/citations?page=1${author ? `&author=${author}` : ''}${search ? `&search=${search}` : ''}`}
                    className="min-w-[2.5rem] h-10 flex items-center justify-center px-3 border-2 border-paper-300  text-ink hover:border-sepia-600 hover:bg-sepia-50 transition-colors"
                  >
                    1
                  </Link>
                )}
                {/* Ellipsis */}
                {page > 4 && data.pages > 6 && (
                  <span className="flex items-center text-ink-light">...</span>
                )}
                {/* Page numbers around current */}
                {Array.from({ length: Math.min(data.pages, 5) }, (_, i) => {
                  let pageNum;
                  if (data.pages <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= data.pages - 2) {
                    pageNum = data.pages - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }
                  if (pageNum < 1 || pageNum > data.pages) return null;
                  const isActive = pageNum === page;
                  return (
                    <Link
                      key={pageNum}
                      href={`/citations?page=${pageNum}${author ? `&author=${author}` : ''}${search ? `&search=${search}` : ''}`}
                      className={`min-w-[2.5rem] h-10 flex items-center justify-center px-3 border-2  transition-colors ${
                        isActive
                          ? 'border-sepia-600 bg-sepia-600 text-paper-50 font-semibold'
                          : 'border-paper-300 text-ink hover:border-sepia-600 hover:bg-sepia-50'
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}
                {/* Ellipsis */}
                {page < data.pages - 3 && data.pages > 6 && (
                  <span className="flex items-center text-ink-light">...</span>
                )}
                {/* Last page */}
                {page < data.pages - 2 && data.pages > 5 && (
                  <Link
                    href={`/citations?page=${data.pages}${author ? `&author=${author}` : ''}${search ? `&search=${search}` : ''}`}
                    className="min-w-[2.5rem] h-10 flex items-center justify-center px-3 border-2 border-paper-300  text-ink hover:border-sepia-600 hover:bg-sepia-50 transition-colors"
                  >
                    {data.pages}
                  </Link>
                )}
              </div>
              {/* Prev/Next and info */}
              <div className="flex items-center justify-center gap-4 text-sm">
                {page > 1 && (
                  <Link
                    href={`/citations?page=${page - 1}${author ? `&author=${author}` : ''}${search ? `&search=${search}` : ''}`}
                    className="inline-flex items-center gap-1 px-4 py-2 border-2 border-sepia-600 bg-sepia-600/10 hover:bg-sepia-600/20 text-ink  transition-colors"
                  >
                    ← Précédent
                  </Link>
                )}
                <span className="text-ink-light font-serif">
                  Page <strong className="text-ink">{page}</strong> sur <strong className="text-ink">{data.pages}</strong>
                </span>
                {page < data.pages && (
                  <Link
                    href={`/citations?page=${page + 1}${author ? `&author=${author}` : ''}${search ? `&search=${search}` : ''}`}
                    className="inline-flex items-center gap-1 px-4 py-2 border-2 border-sepia-600 bg-sepia-600/10 hover:bg-sepia-600/20 text-ink  transition-colors"
                  >
                    Suivant →
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
