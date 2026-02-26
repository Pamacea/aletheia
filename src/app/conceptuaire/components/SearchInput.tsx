'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';

export function SearchInput({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);
  const [isInitialized, setIsInitialized] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateSearch = (search: string) => {
    const currentCategory = searchParams.get('category');
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (currentCategory) params.set('category', currentCategory);
    router.push(`/conceptuaire?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Annuler le timeout précédent
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Créer un nouveau timeout pour debounce
    timeoutRef.current = setTimeout(() => {
      updateSearch(newValue);
    }, 300); // 300ms de debounce
  };

  const handleClear = () => {
    setValue('');
    updateSearch('');
  };

  useEffect(() => {
    // Only set value on first render, not when defaultValue changes due to URL updates
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
      <input
        type="text"
        name="search"
        placeholder="Rechercher un concept..."
        value={value}
        onChange={handleChange}
        className="flex-1 min-w-[200px] h-12 px-4 border-2 border-paper-300 text-base bg-paper-50 text-ink placeholder:text-ink-lighter focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent"
      />
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
