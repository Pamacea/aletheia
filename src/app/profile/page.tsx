import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getServerSession } from '@/lib/actions/auth';
import { prisma } from '@/lib/db/prisma';
import { getUserProgress } from '@/lib/actions/user';
import {
  getUserActivity,
  getUserLevel,
  getExtendedUserStats,
} from '@/lib/actions/profile';
import { getUserAchievements } from '@/lib/actions/user-progress';
import { BackButton } from '@/ui/components/BackButton';
import { PageTransition } from '@/ui/animations/PageTransition';
import { ProfileHero } from './components/ProfileHero';
import { ProfileTabs } from './components/ProfileTabs';
import { OverviewTab } from './components/tabs/OverviewTab';
import { ProgressTab } from './components/tabs/ProgressTab';
import { AchievementsTab } from './components/tabs/AchievementsTab';
import { ActivityTab } from './components/tabs/ActivityTab';

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect('/auth/login');
  }

  // Fetch user data with bio
  const userWithBio = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { bio: true, createdAt: true },
  });

  // Fetch all profile data in parallel
  const [progress, stats, activities, achievements, levelData] =
    await Promise.all([
      getUserProgress(session.user.id),
      getExtendedUserStats(session.user.id),
      getUserActivity(session.user.id, 15),
      getUserAchievements(session.user.id),
      getUserLevel(session.user.id),
    ]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-paper-50">
        {/* Header */}
        <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <BackButton />
              <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
                Mon Profil
              </h1>
              <div className="w-10 sm:w-20 lg:w-32 flex-shrink-0" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
          <div className="content-2-3 space-y-8">
            {/* Hero Section */}
            <ProfileHero
              name={session.user.name || 'Philosophe'}
              email={session.user.email}
              image={session.user.image}
              bio={userWithBio?.bio}
              joinDate={userWithBio?.createdAt || new Date()}
              level={levelData.level}
              xp={levelData.xpProgress}
              xpToNext={levelData.xpNeeded}
            />

            {/* Tabs */}
            <ProfileTabs
              defaultTab="overview"
              overview={<OverviewTab stats={stats} levelData={levelData} />}
              progress={<ProgressTab progress={progress} />}
              achievements={<AchievementsTab achievements={achievements} />}
              activity={<ActivityTab activities={activities} />}
            />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
