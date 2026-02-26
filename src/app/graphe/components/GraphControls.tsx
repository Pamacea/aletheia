'use client';

import { useState, useEffect } from 'react';
import { SearchIcon, FilterIcon } from '@/ui/components/CustomIcons';

interface GraphControlsProps {
  onSearch: (query: string) => void;
  onFilterChange: (types: Array<'concept' | 'philosophe' | 'courant' | 'movement'>) => void;
  onLayoutChange: (layout: string) => void;
  stats?: {
    concepts: number;
    philosophers: number;
    courants: number;
    movements: number;
    totalRelations: number;
  };
}

export function GraphControls({
  onSearch,
  onFilterChange,
  onLayoutChange,
  stats,
}: GraphControlsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<Array<'concept' | 'philosophe' | 'courant' | 'movement'>>([
    'concept',
    'philosophe',
    'courant',
    'movement',
  ]);
  const [layout, setLayout] = useState('cose');

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchQuery, onSearch]);

  const handleTypeToggle = (type: 'concept' | 'philosophe' | 'courant' | 'movement') => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];

    if (newTypes.length > 0) {
      setSelectedTypes(newTypes);
      onFilterChange(newTypes);
    }
  };

  const handleLayoutChange = (newLayout: string) => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  return (
    <div className="bg-white border-2 border-paper-300 p-4 mb-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search */}
        <div className="flex-1 w-full">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-lighter" />
            <input
              id="graph-search"
              type="text"
              placeholder="Rechercher concepts, philosophes, courants, mouvements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 focus:border-transparent bg-paper-50 text-ink"
            />
          </div>
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap gap-2">
          <label className="inline-flex items-center gap-2 px-3 py-1.5 border-2 cursor-pointer transition-all duration-200"
            style={{
              borderColor: selectedTypes.includes('concept') ? '#8b6f3c' : '#d9d6d0',
              backgroundColor: selectedTypes.includes('concept') ? '#fdf8f3' : 'transparent',
            }}
          >
            <input
              type="checkbox"
              name="filter-type"
              checked={selectedTypes.includes('concept')}
              onChange={() => handleTypeToggle('concept')}
              className="sr-only"
            />
            <span className="text-sm font-medium" style={{ color: selectedTypes.includes('concept') ? '#8b6f3c' : '#6b6966' }}>
              Concepts
            </span>
          </label>

          <label className="inline-flex items-center gap-2 px-3 py-1.5 border-2 cursor-pointer transition-all duration-200"
            style={{
              borderColor: selectedTypes.includes('philosophe') ? '#2d2214' : '#d9d6d0',
              backgroundColor: selectedTypes.includes('philosophe') ? '#f5f0e8' : 'transparent',
            }}
          >
            <input
              type="checkbox"
              name="filter-type"
              checked={selectedTypes.includes('philosophe')}
              onChange={() => handleTypeToggle('philosophe')}
              className="sr-only"
            />
            <span className="text-sm font-medium" style={{ color: selectedTypes.includes('philosophe') ? '#2d2214' : '#6b6966' }}>
              Philosophes
            </span>
          </label>

          <label className="inline-flex items-center gap-2 px-3 py-1.5 border-2 cursor-pointer transition-all duration-200"
            style={{
              borderColor: selectedTypes.includes('courant') ? '#6b552e' : '#d9d6d0',
              backgroundColor: selectedTypes.includes('courant') ? '#f0ebe3' : 'transparent',
            }}
          >
            <input
              type="checkbox"
              name="filter-type"
              checked={selectedTypes.includes('courant')}
              onChange={() => handleTypeToggle('courant')}
              className="sr-only"
            />
            <span className="text-sm font-medium" style={{ color: selectedTypes.includes('courant') ? '#6b552e' : '#6b6966' }}>
              Courants
            </span>
          </label>

          <label className="inline-flex items-center gap-2 px-3 py-1.5 border-2 cursor-pointer transition-all duration-200"
            style={{
              borderColor: selectedTypes.includes('movement') ? '#2d5016' : '#d9d6d0',
              backgroundColor: selectedTypes.includes('movement') ? '#e8f0e8' : 'transparent',
            }}
          >
            <input
              type="checkbox"
              name="filter-type"
              checked={selectedTypes.includes('movement')}
              onChange={() => handleTypeToggle('movement')}
              className="sr-only"
            />
            <span className="text-sm font-medium" style={{ color: selectedTypes.includes('movement') ? '#2d5016' : '#6b6966' }}>
              Mouvements
            </span>
          </label>
        </div>

        {/* Layout Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="layout-select" className="text-sm font-medium text-ink-lighter">
            Layout:
          </label>
          <select
            id="layout-select"
            value={layout}
            onChange={(e) => handleLayoutChange(e.target.value)}
            className="px-3 py-1.5 border-2 border-paper-300 focus:outline-none focus:ring-2 focus:ring-sepia-600 bg-paper-50 text-ink text-sm"
          >
            <option value="cose">Force dirigé</option>
            <option value="circle">Circulaire</option>
            <option value="concentric">Concentrique</option>
            <option value="grid">Grille</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="mt-4 pt-4 border-t border-paper-300 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sepia-600" />
            <span className="text-ink-lighter">Concepts: <strong className="text-ink">{stats.concepts}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sepia-900" />
            <span className="text-ink-lighter">Philosophes: <strong className="text-ink">{stats.philosophers}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sepia-700" />
            <span className="text-ink-lighter">Courants: <strong className="text-ink">{stats.courants}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-800" />
            <span className="text-ink-lighter">Mouvements: <strong className="text-ink">{stats.movements || 0}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-ink-lighter">Relations: <strong className="text-ink">{stats.totalRelations}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}
