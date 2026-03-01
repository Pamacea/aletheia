import Link from 'next/link';
import { PhilosophersIcon } from '@/ui/components/CustomIcons';

export interface ProgressItem {
  id: string;
  status: string;
  repetitions: number;
  interval: number;
  lastReview: Date | null;
  nextReview: Date | null;
  streak: number;
  concept: {
    id: string;
    slug: string;
    name: string;
  };
}

export interface ProgressTabProps {
  progress: ProgressItem[];
}

/**
 * ProgressTab Component
 *
 * Displays concept learning progress with status, repetition stats,
 * and review scheduling information.
 *
 * @example
 * ```tsx
 * <ProgressTab progress={progress} />
 * ```
 */
export function ProgressTab({ progress }: ProgressTabProps) {
  if (progress.length === 0) {
    return (
      <div className="text-center py-12 text-ink-light">
        <PhilosophersIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-xl mb-2">Aucune progression pour le moment</p>
        <p className="text-sm mb-4">
          Commencez à explorer le conceptuaire pour suivre votre apprentissage
        </p>
        <Link
          href="/conceptuaire"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sepia-600 text-white hover:bg-sepia-700 transition-colors font-medium"
        >
          Explorer les concepts
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {progress.map((item) => (
        <ProgressCard key={item.id} {...item} />
      ))}
    </div>
  );
}

function ProgressCard(item: ProgressItem) {
  const statusConfig = getStatusConfig(item.status);
  const isDue = item.nextReview && new Date(item.nextReview) < new Date();

  return (
    <Link
      href={`/conceptuaire/${item.concept.slug}`}
      className="block p-4 border-2 border-paper-300 hover:border-sepia-400 hover:shadow-md transition-all bg-white"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-serif text-lg font-semibold text-ink">
          {item.concept.name}
        </h4>
        <span
          className={`px-3 py-1 text-xs font-medium ${statusConfig.className}`}
        >
          {statusConfig.label}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-ink-light">
        <span>
          Répétitions: <strong>{item.repetitions}</strong>
        </span>
        <span>
          Intervalle: <strong>{item.interval}j</strong>
        </span>
        {item.lastReview && (
          <span>
            Dernière:{' '}
            <strong>
              {new Date(item.lastReview).toLocaleDateString('fr-FR')}
            </strong>
          </span>
        )}
      </div>

      {item.nextReview && (
        <div className="mt-2 text-sm">
          {isDue ? (
            <span className="text-sepia-600 font-medium">
              ⚠ À réviser maintenant
            </span>
          ) : (
            <span className="text-ink-light">
              Prochaine révision:{' '}
              {new Date(item.nextReview).toLocaleDateString('fr-FR')}
            </span>
          )}
        </div>
      )}

      {/* Streak indicator */}
      {item.streak > 0 && (
        <div className="mt-2 flex items-center gap-1 text-xs text-orange-600">
          <span className="text-orange-500">🔥</span>
          <span className="font-medium">
            Série de {item.streak} jour{item.streak > 1 ? 's' : ''}
          </span>
        </div>
      )}
    </Link>
  );
}

function getStatusConfig(status: string) {
  const configs = {
    MASTERED: {
      label: 'Maîtrisé',
      className: 'bg-green-100 text-green-800 border border-green-300',
    },
    IN_PROGRESS: {
      label: 'En cours',
      className: 'bg-blue-100 text-blue-800 border border-blue-300',
    },
    REVIEWING: {
      label: 'Révision',
      className: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    },
    NOT_STARTED: {
      label: 'Non commencé',
      className: 'bg-gray-100 text-gray-800 border border-gray-300',
    },
  };
  return configs[status as keyof typeof configs] || configs.NOT_STARTED;
}
