'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PhilosophersIcon, BookIcon } from '@/ui/icons/NavigationIcons';
import { FilterIcon } from '@/ui/icons/ActionIcons';
import { ZapIcon } from '@/ui/icons/StatusIcons';
import { MessageSquareIcon } from '@/ui/icons/SocialIcons';
import { cn } from '@/lib/utils/cn';

type ActivityType = 'progression' | 'annotation' | 'forum_post' | 'flashcard_review';

interface Activity {
 type: ActivityType;
 id: string;
 date: Date;
 // Progression
 concept?: { id: string; slug: string; name: string };
 status?: string;
 repetitions?: number;
 // Annotation
 text?: { id: string; slug: string; title: string } | null;
 quote?: { id: string; slug: string; text: string } | null;
 content?: string;
 // Forum Post
 slug?: string;
 title?: string;
 likeCount?: number;
 replyCount?: number;
 // Flashcard Review
 prompt?: {
  id: string;
  question: string;
  concept: { id: string; slug: string; name: string };
 };
 quality?: number;
}

interface ActivityFeedProps {
 activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
 const [filter, setFilter] = useState<ActivityType | 'all'>('all');

 const filteredActivities =
  filter === 'all'
   ? activities
   : activities.filter((a) => a.type === filter);

 const activityTypes = [
  { type: 'all' as const, label: 'Tout', icon: FilterIcon, count: activities.length },
  {
   type: 'progression' as const,
   label: 'Concepts',
   icon: PhilosophersIcon,
   count: activities.filter((a) => a.type === 'progression').length,
  },
  {
   type: 'annotation' as const,
   label: 'Annotations',
   icon: BookIcon,
   count: activities.filter((a) => a.type === 'annotation').length,
  },
  {
   type: 'forum_post' as const,
   label: 'Forum',
   icon: MessageSquareIcon,
   count: activities.filter((a) => a.type === 'forum_post').length,
  },
  {
   type: 'flashcard_review' as const,
   label: 'Révisions',
   icon: ZapIcon,
   count: activities.filter((a) => a.type === 'flashcard_review').length,
  },
 ];

 // Group activities by date
 const groupedActivities = filteredActivities.reduce((acc, activity) => {
  const dateKey = new Date(activity.date).toLocaleDateString('fr-FR', {
   day: 'numeric',
   month: 'long',
   year: 'numeric',
  });
  if (!acc[dateKey]) {
   acc[dateKey] = [];
  }
  acc[dateKey].push(activity);
  return acc;
 }, {} as Record<string, Activity[]>);

 return (
  <div className="bg-white border-2 border-paper-300 p-6">
   {/* Header */}
   <h3 className="font-serif text-2xl font-semibold text-ink mb-6">
    Activité Récente
   </h3>

   {/* Filter Tabs */}
   <div className="flex flex-wrap gap-2 mb-6">
    {activityTypes.map(({ type, label, icon: Icon, count }) => (
     <FilterButton
      key={type}
      active={filter === type}
      onClick={() => setFilter(type)}
      icon={Icon}
      label={label}
      count={count}
     />
    ))}
   </div>

   {/* Activities */}
   <div className="space-y-6">
    {Object.entries(groupedActivities).map(([date, activities]) => (
     <div key={date}>
      <h4 className="text-sm font-semibold text-ink-light uppercase tracking-wide mb-3">
       {date}
      </h4>
      <div className="space-y-3">
       {activities.map((activity) => (
        <ActivityItem key={activity.id + activity.type} {...activity} />
       ))}
      </div>
     </div>
    ))}

    {filteredActivities.length === 0 && (
     <div className="text-center py-12 text-ink-light">
      <FilterIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
      <p>Aucune activité dans cette catégorie</p>
     </div>
    )}
   </div>
  </div>
 );
}

function FilterButton({
 active,
 onClick,
 icon: Icon,
 label,
 count,
}: {
 active: boolean;
 onClick: () => void;
 icon: React.ComponentType<{ className?: string }>;
 label: string;
 count: number;
}) {
 return (
  <button
   onClick={onClick}
   className={cn(
    'inline-flex items-center gap-2 px-3 py-2 border-2 transition-all text-sm font-medium',
    active
     ? 'bg-sepia-600 text-white border-sepia-600'
     : 'bg-white text-ink border-paper-300 hover:border-sepia-400'
   )}
  >
   <Icon className="w-4 h-4" />
   <span>{label}</span>
   <span
    className={cn(
     'px-2 py-0.5 text-xs',
     active
      ? 'bg-sepia-700 text-white'
      : 'bg-paper-100 text-ink-light'
    )}
   >
    {count}
   </span>
  </button>
 );
}

function ActivityItem(activity: Activity) {
 return (
  <div className="p-4 border-2 border-paper-200 hover:border-sepia-300 transition-all bg-paper-50/50">
   <div className="flex items-start gap-3">
    {/* Icon */}
    <div
     className={cn(
      'w-10 h-10 flex items-center justify-center shrink-0 border-2',
      getActivityStyles(activity.type)
     )}
    >
     {getActivityIcon(activity.type)}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
     <div className="flex items-start justify-between gap-2 mb-1">
      <p className="text-sm text-ink">
       {getActivityText(activity)}
      </p>
      <span className="shrink-0 text-xs text-ink-light">
       {formatTime(activity.date)}
      </span>
     </div>

     {/* Additional details */}
     {activity.type === 'progression' && activity.repetitions !== undefined && (
      <div className="flex gap-3 text-xs text-ink-light mt-1">
       <span>Répétitions: <strong>{activity.repetitions}</strong></span>
       <span
        className={cn(
         'font-semibold',
         activity.status === 'MASTERED'
          ? 'text-green-600'
          : activity.status === 'IN_PROGRESS'
          ? 'text-blue-600'
          : 'text-yellow-600'
        )}
       >
        {getStatusLabel(activity.status)}
       </span>
      </div>
     )}

     {activity.type === 'forum_post' && (
      <div className="flex gap-3 text-xs text-ink-light mt-1">
       <span>❤️ {activity.likeCount}</span>
       <span>💬 {activity.replyCount}</span>
      </div>
     )}

     {activity.type === 'flashcard_review' && activity.quality !== undefined && (
      <div className="text-xs text-ink-light mt-1">
       Qualité: <strong>{getQualityLabel(activity.quality)}</strong>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}

function getActivityStyles(type: ActivityType) {
 const styles = {
  progression: 'bg-blue-100 text-blue-700 border-blue-300',
  annotation: 'bg-purple-100 text-purple-700 border-purple-300',
  forum_post: 'bg-green-100 text-green-700 border-green-300',
  flashcard_review: 'bg-amber-100 text-amber-700 border-amber-300',
 };
 return styles[type];
}

function getActivityIcon(type: ActivityType) {
 const icons = {
  progression: <PhilosophersIcon className="w-5 h-5" />,
  annotation: <BookIcon className="w-5 h-5" />,
  forum_post: <MessageSquareIcon className="w-5 h-5" />,
  flashcard_review: <ZapIcon className="w-5 h-5" />,
 };
 return icons[type];
}

function getActivityText(activity: Activity): string {
 switch (activity.type) {
  case 'progression':
   return activity.concept
    ? `A étudié "${activity.concept.name}"`
    : 'Progression mise à jour';
  case 'annotation':
   if (activity.quote)
    return `Annoté: "${activity.quote.text.slice(0, 50)}..."`;
   if (activity.text)
    return `Annotation sur "${activity.text.title}"`;
   return activity.content
    ? `"${activity.content.slice(0, 60)}..."`
    : 'Nouvelle annotation';
  case 'forum_post':
   return activity.title
    ? `Nouveau sujet: "${activity.title}"`
    : 'Nouvelle publication sur le forum';
  case 'flashcard_review':
   return activity.prompt
    ? `Révision: "${activity.prompt.question.slice(0, 50)}..."`
    : 'Flashcard révisée';
  default:
   return 'Activité enregistrée';
 }
}

function getStatusLabel(status?: string) {
 const labels = {
  MASTERED: 'Maîtrisé',
  IN_PROGRESS: 'En cours',
  REVIEWING: 'En révision',
  NOT_STARTED: 'Non commencé',
 };
 return labels[status as keyof typeof labels] || status || '';
}

function getQualityLabel(quality: number) {
 if (quality >= 4) return '⭐⭐⭐⭐⭐ Excellent';
 if (quality >= 3) return '⭐⭐⭐⭐ Bon';
 if (quality >= 2) return '⭐⭐⭐ Moyen';
 return '⭐⭐ Difficile';
}

function formatTime(date: Date) {
 const now = new Date();
 const diff = now.getTime() - date.getTime();
 const minutes = Math.floor(diff / 60000);
 const hours = Math.floor(diff / 3600000);
 const days = Math.floor(diff / 86400000);

 if (minutes < 1) return "À l'instant";
 if (minutes < 60) return `Il y a ${minutes} min`;
 if (hours < 24) return `Il y a ${hours}h`;
 if (days < 7) return `Il y a ${days}j`;
 return date.toLocaleDateString('fr-FR');
}
