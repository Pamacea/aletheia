import {
  PhilosophersIcon,
  TrendingUpIcon,
  AwardIcon,
  ClockIcon,
  BookIcon,
  ZapIcon,
} from '@/ui/components/CustomIcons';
import { cn } from '@/lib/utils/cn';

export interface OverviewTabProps {
  stats: {
    totalConcepts: number;
    inProgress: number;
    mastered: number;
    dueForReview: number;
    totalAnnotations: number;
    totalForumPosts: number;
    totalFlashcardReviews: number;
    currentStreak: number;
    longestStreak: number;
  };
  levelData: {
    level: number;
    xpProgress: number;
    xpNeeded: number;
    totalXp: number;
  };
}

// Flame icon component
function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

/**
 * OverviewTab Component
 *
 * Displays comprehensive statistics dashboard with cards and streak information.
 *
 * @example
 * ```tsx
 * <OverviewTab stats={stats} levelData={levelData} />
 * ```
 */
export function OverviewTab({ stats, levelData }: OverviewTabProps) {
  const statCards = [
    {
      icon: PhilosophersIcon,
      label: 'Concepts Étudiés',
      value: stats.totalConcepts,
      color: 'bg-blue-100 text-blue-700 border-blue-300',
      trend: '+3 cette semaine',
    },
    {
      icon: TrendingUpIcon,
      label: 'En Progression',
      value: stats.inProgress,
      color: 'bg-purple-100 text-purple-700 border-purple-300',
      trend: 'Actifs',
    },
    {
      icon: AwardIcon,
      label: 'Maîtrisés',
      value: stats.mastered,
      color: 'bg-green-100 text-green-700 border-green-300',
      trend: 'Succès',
    },
    {
      icon: ClockIcon,
      label: 'À Réviser',
      value: stats.dueForReview,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      trend: stats.dueForReview > 0 ? 'Urgent' : 'À jour',
      urgent: stats.dueForReview > 0,
    },
    {
      icon: BookIcon,
      label: 'Annotations',
      value: stats.totalAnnotations,
      color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    },
    {
      icon: ZapIcon,
      label: 'Révisions',
      value: stats.totalFlashcardReviews,
      color: 'bg-amber-100 text-amber-700 border-amber-300',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Streak Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StreakCard
          title="Série Actuelle"
          streak={stats.currentStreak}
          icon={FlameIcon}
          variant="current"
        />
        <StreakCard
          title="Meilleure Série"
          streak={stats.longestStreak}
          icon={AwardIcon}
          variant="best"
        />
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  trend,
  urgent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  color: string;
  trend?: string;
  urgent?: boolean;
}) {
  return (
    <div
      className={cn(
        'bg-white border-2 p-4 transition-all hover:shadow-md',
        urgent ? 'border-red-300 bg-red-50/50' : 'border-paper-300'
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <div className={cn('p-2 border', color)}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <span className="text-xs text-ink-light bg-paper-100 px-2 py-1">
            {trend}
          </span>
        )}
      </div>
      <div className="text-3xl font-serif font-semibold text-ink mb-1">
        {value}
      </div>
      <div className="text-sm text-ink-light">{label}</div>
    </div>
  );
}

function StreakCard({
  title,
  streak,
  icon: Icon,
  variant,
}: {
  title: string;
  streak: number;
  icon: React.ComponentType<{ className?: string }>;
  variant: 'current' | 'best';
}) {
  const isActive = variant === 'current' && streak > 0;

  return (
    <div
      className={cn(
        'bg-white border-2 p-6 relative overflow-hidden',
        isActive ? 'border-orange-400' : 'border-paper-300'
      )}
    >
      {/* Background gradient for active streak */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent pointer-events-none" />
      )}

      <div className="relative flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon
              className={cn(
                'w-6 h-6',
                isActive ? 'text-orange-500' : 'text-ink-light'
              )}
            />
            <span className="text-sm font-medium text-ink-light">{title}</span>
          </div>
          <div className="text-4xl font-serif font-bold text-ink">
            {streak}
            <span className="text-lg font-normal text-ink-light ml-2">
              {streak === 1 ? 'jour' : 'jours'}
            </span>
          </div>
        </div>

        {/* Circular progress indicator */}
        <div className="relative w-20 h-20">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-paper-200"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={226}
              strokeDashoffset={226 - Math.min(226, (streak / 7) * 226)}
              className={cn(
                'transition-all duration-500',
                isActive ? 'text-orange-500' : 'text-sepia-600'
              )}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {variant === 'current' ? (
              streak >= 7 ? (
                <span className="text-2xl">🔥</span>
              ) : (
                <span className="text-lg font-bold text-ink">{streak}/7</span>
              )
            ) : (
              <span className="text-2xl">🏆</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
