'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from '@/ui/icons/ActionIcons';
import { ChevronDownIcon } from '@/ui/icons/UIIcons';
import { useEffect, useRef, useState, useTransition } from 'react';

const AUTHORS = [
  'Platon', 'Aristote', 'Descartes', 'Kant', 'Nietzsche',
  'Sartre', 'Camus', 'Épictète', 'Marc Aurèle', 'Sénèque',
  'Montaigne', 'Pascal', 'Spinoza', 'Hegel', 'Heidegger',
];

interface CitationSearchProps {
  defaultSearch?: string;
  defaultAuthor?: string;
  authors?: string[];
}

export function CitationSearch({
  defaultSearch = '',
  defaultAuthor = '',
  authors = AUTHORS,
}: CitationSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(defaultSearch);
  const [author, setAuthor] = useState(defaultAuthor);
  const [authorOpen, setAuthorOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateURL = (searchValue: string, authorValue: string) => {
    const params = new URLSearchParams();
    if (searchValue) params.set('search', searchValue);
    if (authorValue) params.set('author', authorValue);
    params.set('page', '1');
    // startTransition allows React to abort previous render if a new one starts
    startTransition(() => {
      router.push(`/citations?${params.toString()}`);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      updateURL(newValue, author);
    }, 600);
  };

  const handleAuthorChange = (newAuthor: string) => {
    setAuthor(newAuthor);
    updateURL(search, newAuthor);
    setAuthorOpen(false);
  };

  const handleClear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setSearch('');
    setAuthor('');
    updateURL('', '');
  };

  useEffect(() => {
    setSearch(defaultSearch);
    setAuthor(defaultAuthor);
  }, [defaultSearch, defaultAuthor]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const hasFilters = search || author;

  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch">
      {/* Search input */}
      <div className="flex-1 relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
        <input
          type="text"
          placeholder="Rechercher une citation..."
          value={search}
          onChange={handleSearchChange}
          className="w-full h-12 pl-10 pr-10 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent bg-paper-50 text-ink placeholder:text-ink-lighter transition-colors"
        />
        {isPending && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-sepia-600 border-t-transparent rounded-full animate-spin" />
        )}
      </div>

      {/* Author filter */}
      <div className="relative min-w-[200px]">
        <button
          type="button"
          onClick={() => setAuthorOpen(!authorOpen)}
          className={`
            w-full h-12 px-4 pr-10 border-2 flex items-center justify-between
            transition-all duration-300 cursor-pointer
            ${authorOpen
              ? 'border-sepia-600 bg-sepia-50 ring-2 ring-sepia-600 ring-offset-2 shadow-glow-medium'
              : 'border-paper-300 bg-paper-50 hover:border-sepia-400 hover:bg-paper-100'
            }
          `}
        >
          <span className={`text-sm truncate ${author ? 'text-ink' : 'text-ink-lighter'}`}>
            {author || 'Tous les auteurs'}
          </span>
          <ChevronDownIcon className={`w-4 h-4 text-ink-light transition-transform duration-200 ${authorOpen ? 'rotate-180' : ''}`} />
        </button>

        {authorOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-paper-50 border-2 border-sepia-300 shadow-glow-medium z-10 max-h-60 overflow-y-auto">
            <button
              type="button"
              onClick={() => handleAuthorChange('')}
              className={`
                w-full px-4 py-3 text-left text-sm transition-colors whitespace-nowrap
                ${!author
                  ? 'bg-sepia-100 text-sepia-700 font-medium border-l-2 border-sepia-600'
                  : 'text-ink hover:bg-paper-200 hover:text-sepia-700'
                }
              `}
            >
              Tous les auteurs
            </button>
            {authors.map((auth) => (
              <button
                key={auth}
                type="button"
                onClick={() => handleAuthorChange(auth)}
                className={`
                  w-full px-4 py-3 text-left text-sm transition-colors whitespace-nowrap
                  ${author === auth
                    ? 'bg-sepia-100 text-sepia-700 font-medium border-l-2 border-sepia-600'
                    : 'text-ink hover:bg-paper-200 hover:text-sepia-700'
                  }
                `}
              >
                {auth}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear button */}
      {hasFilters && (
        <button
          onClick={handleClear}
          className="h-12 px-6 bg-paper-200 hover:bg-paper-300 text-ink text-sm font-medium transition-colors whitespace-nowrap border-0 cursor-pointer"
          type="button"
        >
          ✕ Effacer
        </button>
      )}
    </div>
  );
}
