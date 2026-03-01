'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Plus,
  Play,
  Filter,
  Search,
  TrendingUp,
  Target,
  Sparkles,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/ui/atoms/Button';
import Link from 'next/link';

interface FlashcardClientProps {
  userId: string;
  flashcards: any[];
  stats: any;
  dueCardsCount: number;
}

interface FlashcardFilters {
  types?: string[];
  tags?: string[];
}

export default function FlashcardsClient({ userId, flashcards, stats, dueCardsCount }: FlashcardClientProps) {
  const [filters, setFilters] = useState<FlashcardFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCards = flashcards.filter((card) => {
    if (filters.types?.length && !filters.types.includes(card.type)) return false;
    if (filters.tags?.length && !filters.tags.some((tag) => card.tags.includes(tag))) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        card.question.toLowerCase().includes(query) ||
        card.answer.toLowerCase().includes(query) ||
        card.concept?.name?.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const allTags = Array.from(new Set(flashcards.flatMap((f) => f.tags || [])));
  const cardTypes = ['BASIC', 'CLOZE', 'CONCEPT', 'QUOTE', 'ESSAY'] as const;

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header - COMPACT */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3">
            {/* Left: Title + Stats Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
                Flashcards
              </h1>
              {/* Compact Stats Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-sepia-100 text-sepia-700 border border-sepia-300">
                  <Clock className="w-3 h-3" />
                  {dueCardsCount}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-green-100 text-green-700 border border-green-300">
                  <CheckCircle2 className="w-3 h-3" />
                  {stats.cardsMastered}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 text-blue-700 border border-blue-300">
                  {Math.round(stats.successRate)}%
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 border border-purple-300">
                  🔥 {stats.currentStreak || 0}
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <Link href="/profile/flashcards/create">
                <Button>
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Nouvelle</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filters Bar - SEPARATE */}
      <div className="bg-white border-b border-paper-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-light" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm border-2 border-paper-300 focus:border-sepia-600 focus:outline-none"
            />
          </div>

          {/* View Toggle */}
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className={`px-3 py-1 border-2 transition-all flex items-center justify-center ${
              viewMode === 'grid'
                ? 'bg-sepia-50 border-sepia-600 text-sepia-700'
                : 'border-paper-300 hover:border-sepia-600 text-ink-light'
            }`}
            title={viewMode === 'grid' ? 'Vue grille' : 'Vue liste'}
          >
            {viewMode === 'grid' ? '⊞' : '☰'}
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        {/* Filter Tags - ALWAYS VISIBLE */}
        {(allTags.length > 0 || cardTypes.length > 0) && (
          <div className="mb-6 p-3 bg-white border border-paper-200">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-medium text-ink mr-2">Types:</span>
              {cardTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setFilters((prev) => ({
                      ...prev,
                      types: prev.types?.includes(type)
                        ? prev.types.filter((t) => t !== type)
                        : [...(prev.types || []), type],
                    }));
                  }}
                  className={`px-2.5 py-1 text-xs border-2 transition-all ${
                    filters.types?.includes(type)
                      ? 'bg-sepia-600 border-sepia-600 text-white'
                      : 'border-paper-300 hover:border-sepia-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredCards.length === 0 ? (
          <div className="text-center py-24">
            <Brain className="w-16 h-16 mx-auto mb-4 text-ink-light" />
            <h3 className="text-2xl font-serif text-ink mb-2">
              Aucune flashcard trouvée
            </h3>
            <p className="text-ink-light mb-6">
              {searchQuery || filters.types?.length || filters.tags?.length
                ? "Essayez d'autres critères de recherche"
                : 'Créez votre première flashcard pour commencer à apprendre'}
            </p>
            {!searchQuery && !filters.types?.length && (
              <Link href="/profile/flashcards/create">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Créer une flashcard
                </Button>
              </Link>
            )}
          </div>
        ) : (
          /* Cards Grid */
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
            {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border-2 border-paper-200 p-4 hover:border-sepia-600 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-xs font-medium text-sepia-600 px-2 py-0.5 bg-sepia-100">
                      {card.type}
                    </div>
                    {card.nextReview && (
                      <div className="text-xs text-ink-light">
                        {new Date(card.nextReview) < new Date() ? (
                          <span className="text-orange-600">À réviser maintenant</span>
                        ) : (
                          <span>{new Date(card.nextReview).toLocaleDateString('fr-FR')}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{card.question}</h3>
                  <p className="text-ink-light text-sm mb-3 line-clamp-2">{card.answer}</p>
                  {card.concept && (
                    <div className="text-xs text-sepia-600 mb-3">
                      Concept: {card.concept.name}
                    </div>
                  )}
                  {card.tags && card.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map((tag: string, tagIndex: number) => (
                        <span key={`${card.id}-${tagIndex}-${tag}`} className="text-xs bg-paper-200 px-2 py-0.5 text-ink">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/profile/flashcards/review?cards=${card.id}`}
                    className="inline-flex items-center gap-2 text-sepia-600 hover:text-sepia-700 mt-3"
                  >
                    <Play className="w-4 h-4" />
                    Réviser
                  </Link>
                </motion.div>
              ))}
            </div>
        )}
        </div>
      </main>
    </div>
  );
}
