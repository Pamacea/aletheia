import { ChartIcon } from '@/ui/icons/FeatureIcons';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getUserStats } from '@/lib/actions/user-progress';
import { Suspense } from 'react';

export const revalidate = 60;

export default async function StatsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="w-12 h-12 bg-sepia-100 rounded-lg flex items-center justify-center">
              <ChartIcon className="w-6 h-6 text-sepia-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sepia-900">Statistiques</h1>
              <p className="text-sm text-ink-light">Mes statistiques détaillées</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<StatsSkeleton />}>
            <StatsContent userId={session.user.id} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border-2 border-paper-300 rounded-lg p-6 h-28" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white border-2 border-paper-300 rounded-lg p-6 h-64" />
        ))}
      </div>
    </div>
  );
}

async function StatsContent({ userId }: { userId: string }) {
  const stats = await getUserStats(userId);

  // Calculate level title
  const getLevelTitle = (level: number) => {
    if (level === 1) return 'Novice';
    if (level === 2) return 'Apprenti';
    if (level === 3) return 'Érudiant';
    if (level === 4) return 'Sage';
    if (level === 5) return 'Maître';
    if (level === 6) return 'Expert';
    if (level >= 7) return 'Philosophe';
    return 'Légende';
  };

  const levelTitle = getLevelTitle(stats.level);

  return (
    <>
        {/* Stats Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* XP Card */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-sepia-900">{stats.xp.toLocaleString()}</div>
            <div className="text-sm text-ink-light">XP Total</div>
          </div>

          {/* Level Card */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <div className="text-3xl mb-2">🎖️</div>
            <div className="text-2xl font-bold text-sepia-900">{stats.level}</div>
            <div className="text-sm text-ink-light">Niveau {levelTitle}</div>
          </div>

          {/* Streak Card */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-sepia-900">{stats.streak}</div>
            <div className="text-sm text-ink-light">Jours consécutifs</div>
          </div>

          {/* Concepts Explored Card */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <div className="text-3xl mb-2">🗺️</div>
            <div className="text-2xl font-bold text-sepia-900">{stats.conceptsExplored}</div>
            <div className="text-sm text-ink-light">Concepts explorés</div>
          </div>
        </div>

        {/* Detailed Stats Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Progress */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-ink mb-4">Progression d'apprentissage</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Notes créées</span>
                  <span className="text-sepia-600 font-medium">{stats.notesCreated}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-sepia-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.notesCreated)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Flashcards créées</span>
                  <span className="text-sepia-600 font-medium">{stats.flashcardsCreated}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-sepia-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.flashcardsCreated)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Citations contributées</span>
                  <span className="text-sepia-600 font-medium">{stats.quotesContributed}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-sepia-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.quotesContributed)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Philosophes lus</span>
                  <span className="text-sepia-600 font-medium">{stats.philosophersRead}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-sepia-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.philosophersRead)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mastery Stats */}
          <div className="bg-white border-2 border-paper-300 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-ink mb-4">Maîtrise</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Favoris</span>
                  <span className="text-sepia-600 font-medium">{stats.favoritesAdded}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.favoritesAdded)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Flashcards maîtrisées</span>
                  <span className="text-sepia-600 font-medium">{stats.flashcardsMastered}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.flashcardsMastered)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Flashcards révisées</span>
                  <span className="text-sepia-600 font-medium">{stats.flashcardsReviewed}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.flashcardsReviewed)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-ink">Sources lues</span>
                  <span className="text-sepia-600 font-medium">{stats.sourcesRead}</span>
                </div>
                <div className="w-full bg-paper-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, stats.sourcesRead)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progress Section */}
        <div className="mt-6 bg-white border-2 border-paper-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-ink mb-4">Progression vers le niveau suivant</h2>
          <div className="mb-2">
            <div className="flex justify-between text-sm">
              <span className="text-ink">Niveau {stats.level} ({levelTitle})</span>
              <span className="text-sepia-600 font-medium">
                {stats.xp.toLocaleString()} / {stats.nextLevelXp.toLocaleString()} XP
              </span>
            </div>
            <p className="text-xs text-ink-light mt-1">
              {stats.nextLevelXp - stats.xp} XP restants pour le niveau {stats.level + 1}
            </p>
          </div>
          <div className="w-full bg-paper-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-sepia-500 to-sepia-700 h-3 rounded-full transition-all duration-500"
              style={{ width: `${stats.progressToNextLevel}%` }}
            />
          </div>
        </div>

        {/* Time Tracking */}
        <div className="mt-6 bg-white border-2 border-paper-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-ink mb-4">Temps d'étude</h2>
          <div className="flex items-center gap-4">
            <div className="text-4xl">📚</div>
            <div>
              <div className="text-3xl font-bold text-sepia-900">
                {stats.hoursSpent.toFixed(1)}h
              </div>
              <div className="text-sm text-ink-light">Temps total d'étude</div>
            </div>
          </div>
        </div>
    </>
  );
}
