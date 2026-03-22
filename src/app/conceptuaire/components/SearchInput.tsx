'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState, useTransition } from 'react';

export function SearchInput({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateSearch = (search: string) => {
    const currentCategory = searchParams.get('category');
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (currentCategory) params.set('category', currentCategory);
    // Wrap in startTransition so React can abort previous navigation
    startTransition(() => {
      router.push(`/conceptuaire?${params.toString()}`);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      updateSearch(newValue);
    }, 600);
  };

  const handleClear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setValue('');
    updateSearch('');
  };

  useEffect(() => {
    if (!isInitialized) {
      setValue(defaultValue);
      setIsInitialized(true);
    }
  }, [defaultValue, isInitialized]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex gap-3 items-center justify-center w-full">
      <div className="relative flex-1 min-w-[200px]">
        <input
          type="text"
          name="search"
          placeholder="Rechercher un concept..."
          value={value}
          onChange={handleChange}
          className="w-full h-12 px-4 border-2 border-paper-300 text-base bg-paper-50 text-ink placeholder:text-ink-lighter focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
        />
        {isPending && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-sepia-600 border-t-transparent rounded-full animate-spin" />
        )}
      </div>
      {value && (
        <button
          onClick={handleClear}
          className="h-12 px-4 bg-paper-200 hover:bg-paper-300 text-ink text-sm font-medium transition-colors whitespace-nowrap border-0 cursor-pointer"
          type="button"
        >
          ✕ Effacer
        </button>
      )}
    </div>
  );
}
