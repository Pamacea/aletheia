import { TrophyIcon } from '@/ui/icons/StatusIcons';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getUserAchievements } from '@/lib/actions/user-progress';
import { ProfileLayout } from '@/shared/components';
import { Suspense } from 'react';

export const revalidate = 60;

export default async function AchievementsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  return (
    <ProfileLayout
      title="Achievements"
      subtitle="Vos accomplissements"
    >
      <Suspense fallback={<AchievementsSkeleton />}>
        <AchievementsContent userId={session.user.id} />
      </Suspense>
    </ProfileLayout>
  );
}

async function AchievementsContent({ userId }: { userId: string }) {
  const achievements = await getUserAchievements(userId);
  const unlockedCount = achievements.filter((a) => a.isUnlocked).length;

  const learningAchievements = achievements.filter((a) => a.category === 'learning');
  const masteryAchievements = achievements.filter((a) => a.category === 'mastery');
  const streakAchievements = achievements.filter((a) => a.category === 'streak');

  return (
    <>
      <p className="text-sm text-ink-light mb-6">{unlockedCount} / {achievements.length} débloqués</p>

      {/* Learning Category */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            📚
          </div>
          <h2 className="text-xl font-semibold text-ink">Apprentissage</h2>
          <span className="text-sm text-ink-light">
            {learningAchievements.filter((a) => a.isUnlocked).length} / {learningAchievements.length}
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {learningAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* Mastery Category */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            🧠
          </div>
          <h2 className="text-xl font-semibold text-ink">Maîtrise</h2>
          <span className="text-sm text-ink-light">
            {masteryAchievements.filter((a) => a.isUnlocked).length} / {masteryAchievements.length}
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {masteryAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>

      {/* Streak Category */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            🔥
          </div>
          <h2 className="text-xl font-semibold text-ink">Streak</h2>
          <span className="text-sm text-ink-light">
            {streakAchievements.filter((a) => a.isUnlocked).length} / {streakAchievements.length}
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {streakAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
    </>
  );
}

function AchievementsSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <div className="h-6 bg-paper-200 rounded w-48 mb-4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="border-2 border-paper-300 rounded-lg p-6 h-40 bg-paper-100" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AchievementCard({ achievement }: { achievement: any }) {
  const { isUnlocked, progress, maxProgress, icon, name, description, xpReward } = achievement;
  const progressPercent = maxProgress > 0 ? Math.min(100, (progress / maxProgress) * 100) : 100;

  return (
    <div
      className={`
        border-2 rounded-lg p-6 transition-all duration-300
        ${isUnlocked
          ? 'bg-sepia-50 border-sepia-600 shadow-glow-medium'
          : 'bg-white border-paper-300 opacity-75'
        }
      `}
    >
      {/* Icon & Header */}
      <div className="flex items-start gap-3 mb-4 min-w-0">
        <div
          className={`
            w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0
            ${isUnlocked ? 'bg-sepia-100' : 'bg-paper-200'}
          `}
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className={`font-semibold text-sm sm:text-base break-words [hyphens:auto] ${isUnlocked ? 'text-sepia-900' : 'text-ink-light'}`} lang="fr">
              {name}
            </h3>
            {isUnlocked && (
              <span className="px-2 py-0.5 bg-sepia-600 text-white text-xs rounded-full">
                ✓
              </span>
            )}
          </div>
          <p className={`text-sm mt-1 ${isUnlocked ? 'text-ink' : 'text-ink-light'}`}>
            {description}
          </p>
          {xpReward > 0 && (
            <p className="text-xs text-sepia-600 mt-2">+{xpReward} XP</p>
          )}
        </div>
      </div>

      {/* Progress Bar (for progressive achievements) */}
      {maxProgress > 0 && !isUnlocked && (
        <div>
          <div className="flex justify-between text-xs text-ink-light mb-2">
            <span>Progression</span>
            <span>
              {progress} / {maxProgress}
            </span>
          </div>
          <div className="w-full bg-paper-200 rounded-full h-2">
            <div
              className="bg-sepia-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Unlocked Date */}
      {isUnlocked && achievement.unlockedAt && (
        <div className="mt-4 pt-4 border-t border-sepia-200">
          <p className="text-xs text-sepia-600">
            Débloqué le {new Date(achievement.unlockedAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      )}
    </div>
  );
}
