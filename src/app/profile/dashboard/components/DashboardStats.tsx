import {
  PhilosophersIcon,
  TrendingUpIcon,
  AwardIcon,
  BarChart3Icon,
} from '@/ui/components/CustomIcons';

interface DashboardStatsProps {
  stats: {
    totalConcepts: number;
    inProgress: number;
    mastered: number;
    totalReviews: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="card-parchment p-4 text-center">
        <PhilosophersIcon className="w-8 h-8 text-sepia-600 mx-auto mb-2" />
        <p className="text-2xl font-serif font-bold text-ink">{stats.totalConcepts}</p>
        <p className="text-sm text-ink-light">Concepts étudiés</p>
      </div>

      <div className="card-parchment p-4 text-center">
        <TrendingUpIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <p className="text-2xl font-serif font-bold text-ink">{stats.inProgress}</p>
        <p className="text-sm text-ink-light">En cours</p>
      </div>

      <div className="card-parchment p-4 text-center">
        <AwardIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <p className="text-2xl font-serif font-bold text-ink">{stats.mastered}</p>
        <p className="text-sm text-ink-light">Maîtrisés</p>
      </div>

      <div className="card-parchment p-4 text-center">
        <BarChart3Icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
        <p className="text-2xl font-serif font-bold text-ink">{stats.totalReviews}</p>
        <p className="text-sm text-ink-light">Révisions</p>
      </div>
    </section>
  );
}
