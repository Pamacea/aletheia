import { ActivityIcon } from '@/ui/components/CustomIcons';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getUserActivities } from '@/lib/actions/user-progress';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default async function ActivityPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const activities = await getUserActivities(session.user.id, 50);

  // Group activities by date
  const groupedActivities = activities.reduce((acc: any, activity: any) => {
    const date = new Date(activity.createdAt);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let dateKey = '';
    let displayDate = '';

    if (date.toDateString() === today.toDateString()) {
      dateKey = 'today';
      displayDate = "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      dateKey = 'yesterday';
      displayDate = 'Hier';
    } else {
      dateKey = format(date, 'yyyy-MM-dd');
      displayDate = format(date, 'dd MMMM yyyy', { locale: fr });
    }

    if (!acc[dateKey]) {
      acc[dateKey] = { date: displayDate, activities: [] };
    }

    acc[dateKey].activities.push(activity);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedActivities).sort((a, b) => {
    if (a === 'today') return -1;
    if (b === 'today') return 1;
    if (a === 'yesterday') return -1;
    if (b === 'yesterday') return 1;
    return b.localeCompare(a);
  });

  const getActivityIcon = (actionType: string) => {
    const icons: Record<string, string> = {
      note_created: '📝',
      favorite_added: '⭐',
      flashcard_created: '🧠',
      flashcard_reviewed: '🎴',
      flashcard_mastered: '✅',
      quote_contributed: '💬',
      concept_explored: '💡',
      philosopher_read: '📖',
      source_read: '📚',
      forum_post: '🗣️',
      forum_reply: '💭',
    };
    return icons[actionType] || '📌';
  };

  const getActivityLabel = (actionType: string) => {
    const labels: Record<string, string> = {
      note_created: 'Note créée',
      favorite_added: 'Favori ajouté',
      flashcard_created: 'Flashcard créée',
      flashcard_reviewed: 'Flashcard révisée',
      flashcard_mastered: 'Flashcard maîtrisée',
      quote_contributed: 'Citation contributée',
      concept_explored: 'Concept exploré',
      philosopher_read: 'Philosophe lu',
      source_read: 'Source lue',
      forum_post: 'Message posté',
      forum_reply: 'Réponse postée',
    };
    return labels[actionType] || actionType;
  };

  const getActivityDescription = (activity: any) => {
    const metadata = activity.metadata as any;
    if (activity.actionType === 'note_created') {
      return `Vous avez créé une note sur "${metadata?.title || 'Sans titre'}"`;
    }
    if (activity.actionType === 'favorite_added') {
      return `Vous avez ajouté "${metadata?.title || 'un élément'}" à vos favoris`;
    }
    if (activity.actionType === 'flashcard_created') {
      return 'Vous avez créé une nouvelle flashcard';
    }
    if (activity.actionType === 'flashcard_mastered') {
      return 'Vous avez maîtrisé une flashcard';
    }
    if (activity.actionType === 'concept_explored') {
      return `Vous avez exploré "${metadata?.title || 'un concept'}"`;
    }
    return 'Activité enregistrée';
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar bg-white border-b-2 border-sepia-600">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sepia-100 rounded-lg flex items-center justify-center">
              <ActivityIcon className="w-6 h-6 text-sepia-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sepia-900">Activité Récente</h1>
              <p className="text-sm text-ink-light">Mon historique d'activité</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {activities.length === 0 ? (
          <div className="bg-white border-2 border-paper-300 rounded-lg p-12 text-center">
            <ActivityIcon className="w-16 h-16 text-sepia-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-ink mb-2">Aucune activité pour le moment</h2>
            <p className="text-ink-light mb-6">
              Commencez à explorer Aletheia pour voir votre activité ici !
            </p>
            <a
              href="/conceptuaire"
              className="inline-block px-6 py-3 bg-sepia-600 text-white rounded-lg hover:bg-sepia-700 transition-colors"
            >
              Explorer les concepts
            </a>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedDates.map((dateKey) => {
              const group = groupedActivities[dateKey];
              return (
                <div key={dateKey}>
                  <h3 className="text-lg font-semibold text-ink mb-4">{group.date}</h3>

                  <div className="space-y-3">
                    {group.activities.map((activity: any) => (
                      <div
                        key={activity.id}
                        className="bg-white border-2 border-paper-300 rounded-lg p-4 flex items-start gap-4 hover:shadow-md transition-shadow"
                      >
                        {/* Icon */}
                        <div className="w-10 h-10 bg-sepia-100 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                          {getActivityIcon(activity.actionType)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-ink font-medium">
                            {getActivityLabel(activity.actionType)}
                          </p>
                          <p className="text-sm text-ink-light mt-1">
                            {getActivityDescription(activity)}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-ink-light/60">
                            <span>
                              {format(new Date(activity.createdAt), 'HH:mm', { locale: fr })}
                            </span>
                            {activity.xpGained > 0 && (
                              <span className="text-sepia-600 font-medium">
                                +{activity.xpGained} XP
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
