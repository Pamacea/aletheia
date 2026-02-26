import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession, signOut } from '@/lib/actions/auth';
import { prisma } from '@/lib/db/prisma';
import {
 getUserProgress,
 getUserStats,
} from '@/lib/actions/user';
import {
 getUserActivity,
 getUserAchievements,
 getUserLevel,
 getExtendedUserStats,
 updateBio,
} from '@/lib/actions/profile';
import { PhilosophersIcon, LogoutIcon, ArrowLeftIcon } from '@/ui/components/CustomIcons';
import { ProfileHeaderClient } from './components/ProfileHeaderClient';
import { LevelProgress } from './components/LevelProgress';
import { StatsDashboard } from './components/StatsDashboard';
import { Achievements } from './components/Achievements';
import { ActivityFeed } from './components/ActivityFeed';

async function handleUpdateProfile(formData: FormData) {
 'use server';

 const session = await getServerSession();
 if (!session?.user) {
  redirect('/auth/login');
 }

 const name = formData.get('name') as string;
 const bio = formData.get('bio') as string;

 if (bio) {
  await updateBio(session.user.id, bio);
 }
}

export default async function ProfilePage() {
 const session = await getServerSession();

 if (!session?.user) {
  redirect('/auth/login');
 }

 // Get user data with bio
 const userWithBio = await prisma.user.findUnique({
  where: { id: session.user.id },
  select: { bio: true, createdAt: true },
 });

 const [
  progress,
  stats,
  activities,
  achievements,
  levelData,
 ] = await Promise.all([
  getUserProgress(session.user.id),
  getExtendedUserStats(session.user.id),
  getUserActivity(session.user.id, 15),
  getUserAchievements(session.user.id),
  getUserLevel(session.user.id),
 ]);

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="w-full px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Link
       href="/"
       className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
      >
       <ArrowLeftIcon className="w-5 h-5" />
       <span className="living-word font-medium">Retour</span>
      </Link>
      <h1 className="font-serif text-2xl font-semibold text-ink">
       Mon Profil
      </h1>
      <form action={signOut}>
       <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 text-sepia-700 border border-2 border-paper-300 hover:bg-paper-200 transition-colors "
       >
        <LogoutIcon className="w-4 h-4" />
        <span>Déconnexion</span>
       </button>
      </form>
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
     {/* Left Column - Profile & Stats */}
     <div className="lg:col-span-1 space-y-8">
      {/* Profile Header */}
      <ProfileHeaderClient
       name={session.user.name || 'Philosophe'}
       email={session.user.email}
       image={session.user.image}
       bio={userWithBio?.bio}
       joinDate={userWithBio?.createdAt || new Date()}
      />

      {/* Level Progress */}
      <LevelProgress {...levelData} />

      {/* Quick Stats */}
      <div className="bg-white border-2 border-paper-300 p-6">
       <h3 className="font-serif text-lg font-semibold text-ink mb-4">
        Aperçu Rapide
       </h3>
       <div className="space-y-3">
        <QuickStat
         label="Concepts étudiés"
         value={stats.totalConcepts}
         total={100}
         color="bg-blue-500"
        />
        <QuickStat
         label="Mastered"
         value={stats.mastered}
         total={stats.totalConcepts}
         color="bg-green-500"
        />
        <QuickStat
         label="Annotations"
         value={stats.totalAnnotations}
         total={100}
         color="bg-purple-500"
        />
        <QuickStat
         label="Forum posts"
         value={stats.totalForumPosts}
         total={50}
         color="bg-amber-500"
        />
       </div>
      </div>
     </div>

     {/* Right Column - Detailed Content */}
     <div className="lg:col-span-2 space-y-8">
      {/* Stats Dashboard */}
      <section>
       <h2 className="font-serif text-2xl font-semibold text-ink mb-4">
        Statistiques Détaillées
       </h2>
       <StatsDashboard stats={stats} />
      </section>

      {/* Achievements */}
      <section>
       <h2 className="font-serif text-2xl font-semibold text-ink mb-4">
        Succès Philosophiques
       </h2>
       <Achievements achievements={achievements} />
      </section>

      {/* Activity Feed */}
      <section>
       <h2 className="font-serif text-2xl font-semibold text-ink mb-4">
        Activité Récente
       </h2>
       <ActivityFeed activities={activities} />
      </section>

      {/* Recent Progress - Concept Learning */}
      <section>
       <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl font-semibold text-ink">
         Progression Conceptuelle
        </h2>
        <Link
         href="/conceptuaire"
         className="text-sepia-600 hover:text-sepia-700 font-medium text-sm"
        >
         Voir tout →
        </Link>
       </div>

       <div className="bg-white border-2 border-paper-300 p-6">
        {progress.length > 0 ? (
         <div className="space-y-3">
          {progress.slice(0, 5).map((item: any) => (
           <Link
            key={item.id}
            href={`/conceptuaire/${item.concept.slug}`}
            className="block p-4 border-2 border-paper-300 hover:border-sepia-400 hover:shadow-md transition-all "
           >
            <div className="flex items-center justify-between mb-2">
             <h4 className="font-serif text-lg font-semibold text-ink">
              {item.concept.name}
             </h4>
             <span
              className={`px-3 py-1 text-xs font-medium ${
               item.status === 'MASTERED'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : item.status === 'IN_PROGRESS'
                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                : item.status === 'REVIEWING'
                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                : 'bg-gray-100 text-gray-800 border border-gray-300'
              }`}
             >
              {item.status === 'MASTERED'
               ? 'Maîtrisé'
               : item.status === 'IN_PROGRESS'
               ? 'En cours'
               : item.status === 'REVIEWING'
               ? 'Révision'
               : 'Non commencé'}
             </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-ink-light">
             <span>Répétitions: <strong>{item.repetitions}</strong></span>
             <span>Intervalle: <strong>{item.interval}j</strong></span>
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
              {new Date(item.nextReview) < new Date() ? (
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
          ))}
         </div>
        ) : (
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
        )}
       </div>
      </section>
     </div>
    </div>
   </main>
  </div>
 );
}

function QuickStat({
 label,
 value,
 total,
 color,
}: {
 label: string;
 value: number;
 total: number;
 color: string;
}) {
 const percentage = Math.min(100, Math.round((value / total) * 100));

 return (
  <div>
   <div className="flex justify-between text-sm mb-1">
    <span className="text-ink-light">{label}</span>
    <span className="font-medium text-ink">
     {value}/{total}
    </span>
   </div>
   <div className="h-2 bg-paper-200 overflow-hidden">
    <div
     className={cn('h-full transition-all duration-500', color)}
     style={{ width: `${percentage}%` }}
    />
   </div>
  </div>
 );
}

function cn(...classes: (string | boolean | undefined)[]) {
 return classes.filter(Boolean).join(' ');
}
