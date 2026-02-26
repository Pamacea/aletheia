import Link from 'next/link';
import { LinkOrnate } from '@/ui/components/LinkOrnate';
import {
  ZapIcon,
  TargetIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@/ui/components/CustomIcons';

interface FlashcardsSectionProps {
  dueFlashcards: any[];
  stats: {
    dueForReview: number;
  };
  todayReviews: number;
  dailyGoal: number;
  progressPercent: number;
}

export function FlashcardsSection({
  dueFlashcards,
  stats,
  todayReviews,
  dailyGoal,
  progressPercent,
}: FlashcardsSectionProps) {
  return (
    <section className="card-parchment border-2 border-sepia-300 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <ZapIcon className="w-6 h-6 text-sepia-600" />
          <h3 className="font-serif text-xl font-semibold text-ink">
            Flashcards à Réviser
          </h3>
        </div>
        {dueFlashcards.length > 0 && (
          <LinkOrnate
            href="/profile/flashcards?mode=review"
            living
            className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors"
          >
            Commencer
            <ArrowRightIcon className="w-4 h-4" />
          </LinkOrnate>
        )}
      </div>

      {/* Progress Bar for Daily Goal */}
      {stats.dueForReview > 0 && (
        <div className="mb-6 p-4 bg-sepia-50 border border-sepia-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-ink">Objectif quotidien</span>
            <span className="text-sm font-semibold text-sepia-600">
              {todayReviews}/{dailyGoal} cartes
            </span>
          </div>
          <div className="w-full bg-sepia-200 h-2">
            <div
              className="bg-sepia-600 h-2 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {dueFlashcards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dueFlashcards.slice(0, 6).map((card: any) => (
            <LinkOrnate
              key={card.id}
              href={`/conceptuaire/${card.concept.slug}`}
              living
              className="block p-4 border-2 border-paper-300 hover:border-sepia-600 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <span
                    className="inline-block px-2 py-0.5 text-xs font-medium mb-2"
                    style={{
                      backgroundColor: card.concept.category.color || '#d4bc8f',
                      color: '#2d2b29',
                    }}
                  >
                    {card.concept.category.name}
                  </span>
                  <h4 className="font-serif font-semibold text-ink mb-1">
                    {card.concept.name}
                  </h4>
                  {card.concept.shortDefinition && (
                    <p className="text-sm text-ink-light line-clamp-2">
                      {card.concept.shortDefinition}
                    </p>
                  )}
                </div>
                <ZapIcon className="w-5 h-5 text-sepia-600 flex-shrink-0 ml-2" />
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-light mt-2">
                <ClockIcon className="w-3 h-3" />
                <span>
                  En attente depuis{' '}
                  {Math.max(
                    1,
                    Math.floor(
                      (Date.now() - new Date(card.nextReview).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )
                  )}{' '}
                  jour(s)
                </span>
              </div>
            </LinkOrnate>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <TargetIcon className="w-12 h-12 mx-auto mb-4 text-sepia-400" />
          <p className="text-ink font-medium mb-2">Aucune révision en attente</p>
          <p className="text-sm text-ink-light mb-4">
            Explorez de nouveaux concepts pour continuer votre apprentissage
          </p>
          <LinkOrnate
            href="/conceptuaire"
            living
            className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors"
          >
            Explorer les concepts
          </LinkOrnate>
        </div>
      )}
    </section>
  );
}
