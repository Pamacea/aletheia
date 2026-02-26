import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/actions/auth';
import {
  getDashboardStats,
  getDueFlashcards,
  getRecentAnnotations,
  getReadingProgress,
  getRecommendations,
  getUserStreak,
} from '@/lib/actions/user';
import { ProfileLayout, ProfileContentGrid, ProfileSidebar } from '@/shared/components';
import {
  FlameIcon,
  AwardIcon,
  HomeIcon,
  BookOpenIcon,
} from '@/ui/components/CustomIcons';
import { DashboardStats } from './components/DashboardStats';
import { FlashcardsSection } from './components/FlashcardsSection';
import { RecentAnnotations } from './components/RecentAnnotations';
import { RecommendationsSection } from './components/RecommendationsSection';
import { QuickActions } from './components/QuickActions';

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/auth/login');
  }

  const userId = session.user.id;

  const [stats, dueFlashcards, recentAnnotations, readingProgress, recommendations, streak] =
    await Promise.all([
      getDashboardStats(userId),
      getDueFlashcards(userId, 6),
      getRecentAnnotations(userId, 4),
      getReadingProgress(userId),
      getRecommendations(userId),
      getUserStreak(userId),
    ]);

  const dailyGoal = Math.max(10, Math.floor(stats.totalReviews / 30));
  const todayReviews = stats.totalReviews;
  const progressPercent = Math.min(100, Math.round((todayReviews / dailyGoal) * 100));

  return (
    <ProfileLayout
      title="Tableau de Bord"
      subtitle={`Bienvenue, ${session.user.name || 'Philosophe'}`}
    >
      <ProfileContentGrid sidebar={<ProfileSidebar />}>
        <div className="space-y-6">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="living-word font-medium">Accueil</span>
          </Link>

        {/* Hero Section */}
        <section className="mb-8">
          <div className="card-parchment border-2 border-sepia-600 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-2">
                  Bienvenue, {session.user.name || 'Philosophe'}
                </h2>
                <p className="text-ink-light text-lg">
                  Continuez votre exploration philosophique
                </p>
              </div>

              {/* Level Indicator */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sepia-100 border-2 border-sepia-600 mb-2">
                    <AwardIcon className="w-8 h-8 text-sepia-600" />
                  </div>
                  <p className="text-sm font-medium text-ink-light">Niveau</p>
                  <p className="text-2xl font-serif font-bold text-sepia-600">
                    {stats.mastered > 50 ? 'Expert' : stats.mastered > 20 ? 'Érudit' : stats.mastered > 5 ? 'Apprenti' : 'Novice'}
                  </p>
                </div>

                {/* Streak Counter */}
                {streak.currentStreak > 0 && (
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 border-2 border-orange-600 mb-2">
                      <FlameIcon className="w-8 h-8 text-orange-600" />
                    </div>
                    <p className="text-sm font-medium text-ink-light">Série</p>
                    <p className="text-2xl font-serif font-bold text-orange-600">
                      {streak.currentStreak}j
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <DashboardStats stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            <FlashcardsSection
              dueFlashcards={dueFlashcards}
              stats={stats}
              todayReviews={todayReviews}
              dailyGoal={dailyGoal}
              progressPercent={progressPercent}
            />

            <RecentAnnotations recentAnnotations={recentAnnotations} />

            {/* Reading Progress Section */}
            {readingProgress.length > 0 && (
              <section className="card-parchment border-2 border-sepia-300 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpenIcon className="w-6 h-6 text-sepia-600" />
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    Lectures en Cours
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {readingProgress.slice(0, 3).map((state: any) => (
                    <Link
                      key={state.id}
                      href={`/bibliotheque/${state.text.slug}`}
                      className="block p-4 border-2 border-paper-300 hover:border-sepia-600 hover:shadow-md transition-all"
                    >
                      <div className="mb-2">
                        <div className="w-full bg-sepia-200 h-2 mb-2">
                          <div
                            className="bg-sepia-600 h-2"
                            style={{ width: `${state.progressPercent}%` }}
                          />
                        </div>
                        <p className="text-xs text-ink-light text-right">{state.progressPercent}%</p>
                      </div>
                      <h4 className="font-serif font-semibold text-ink text-sm line-clamp-2">
                        {state.text.title}
                      </h4>
                      <p className="text-xs text-ink-light mt-1">{state.text.author}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - 1/3 */}
          <div className="space-y-8">
            <RecommendationsSection recommendations={recommendations} />
            <QuickActions />
          </div>
        </div>
      </div>
    </ProfileContentGrid>
    </ProfileLayout>
  );
}
