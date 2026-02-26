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
      {/* Header */}
      <header className="bg-white border-b border-paper-200 sticky top-0 z-10">
        <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-ink mb-1">
                Flashcards
              </h1>
              <p className="text-ink-light">
                {stats.totalCards} cartes au total
              </p>
            </div>
            <Link href="/profile/flashcards/create">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle Carte
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-paper-50 border border-paper-200 p-3">
              <div className="flex items-center gap-2 text-sepia-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">À réviser</span>
              </div>
              <div className="text-2xl font-bold text-ink">{dueCardsCount}</div>
            </div>
            <div className="bg-paper-50 border border-paper-200 p-3">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">Maîtrisées</span>
              </div>
              <div className="text-2xl font-bold text-ink">{stats.cardsMastered}</div>
            </div>
            <div className="bg-paper-50 border border-paper-200 p-3">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Taux de réussite</span>
              </div>
              <div className="text-2xl font-bold text-ink">{Math.round(stats.successRate)}%</div>
            </div>
            <div className="bg-paper-50 border border-paper-200 p-3">
              <div className="flex items-center gap-2 text-purple-600 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Série actuelle</span>
              </div>
              <div className="text-2xl font-bold text-ink">{stats.currentStreak || 0}</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-light" />
              <input
                type="text"
                placeholder="Rechercher des cartes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-paper-300 focus:border-sepia-600 focus:outline-none"
              />
            </div>
            <button className="p-2 border-2 border-paper-300 hover:border-sepia-600">
              <Filter className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 border-2 border-paper-300 hover:border-sepia-600"
            >
              <Target className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
          <>
            {/* Filter Tags */}
            {(allTags.length > 0 || cardTypes.length > 0) && (
              <div className="mb-6 p-4 bg-white border border-paper-200">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-ink mr-2">Types:</span>
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
                      className={`px-3 py-1 text-sm border-2 transition-all ${
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

            {/* Cards Grid */}
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
          </>
        )}
        </div>
      </main>
    </div>
  );
}
