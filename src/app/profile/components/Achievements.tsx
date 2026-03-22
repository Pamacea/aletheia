'use client';

import { useState } from 'react';
import { AwardIcon } from '@/ui/icons/StatusIcons';
import { cn } from '@/lib/utils/cn';

interface Achievement {
 id: string;
 name: string;
 description: string;
 icon: string;
 earned: boolean;
 earnedAt?: Date;
 progress?: number;
 target?: number;
}

interface AchievementsProps {
 achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
 const [filter, setFilter] = useState<'all' | 'earned' | 'locked'>('all');

 const filteredAchievements = achievements.filter((a) => {
  if (filter === 'all') return true;
  if (filter === 'earned') return a.earned;
  if (filter === 'locked') return !a.earned;
  return true;
 });

 const earnedCount = achievements.filter((a) => a.earned).length;
 const totalCount = achievements.length;
 const completionPercentage = Math.round((earnedCount / totalCount) * 100);

 return (
  <div className="bg-white border-2 border-paper-300 p-6">
   {/* Header */}
   <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
     <AwardIcon className="w-8 h-8 text-sepia-600" />
     <div>
      <h3 className="font-serif text-2xl font-semibold text-ink">
       Achievements
      </h3>
      <p className="text-sm text-ink-light">
       {earnedCount}/{totalCount} débloqués ({completionPercentage}%)
      </p>
     </div>
    </div>
   </div>

   {/* Progress Bar */}
   <div className="mb-6">
    <div className="h-3 bg-paper-200 overflow-hidden border border-paper-300">
     <div
      className="h-full bg-gradient-to-r from-sepia-500 to-sepia-700 transition-all duration-500"
      style={{ width: `${completionPercentage}%` }}
     />
    </div>
   </div>

   {/* Filter Tabs */}
   <div className="flex gap-2 mb-6">
    <FilterButton
     active={filter === 'all'}
     onClick={() => setFilter('all')}
     label="Tous"
     count={totalCount}
    />
    <FilterButton
     active={filter === 'earned'}
     onClick={() => setFilter('earned')}
     label="Débloqués"
     count={earnedCount}
     variant="success"
    />
    <FilterButton
     active={filter === 'locked'}
     onClick={() => setFilter('locked')}
     label="Verrouillés"
     count={totalCount - earnedCount}
     variant="locked"
    />
   </div>

   {/* Achievements Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {filteredAchievements.map((achievement) => (
     <AchievementCard key={achievement.id} {...achievement} />
    ))}
   </div>

   {filteredAchievements.length === 0 && (
    <div className="text-center py-12 text-ink-light">
     <AwardIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
     <p>Aucun achievement dans cette catégorie</p>
    </div>
   )}
  </div>
 );
}

function FilterButton({
 active,
 onClick,
 label,
 count,
 variant = 'default',
}: {
 active: boolean;
 onClick: () => void;
 label: string;
 count: number;
 variant?: 'default' | 'success' | 'locked';
}) {
 const variants = {
  default: active
   ? 'bg-sepia-600 text-white border-sepia-600'
   : 'bg-white text-ink border-paper-300 hover:border-sepia-400',
  success: active
   ? 'bg-green-600 text-white border-green-600'
   : 'bg-white text-ink border-paper-300 hover:border-green-400',
  locked: active
   ? 'bg-gray-600 text-white border-gray-600'
   : 'bg-white text-ink border-paper-300 hover:border-gray-400',
 };

 return (
  <button
   onClick={onClick}
   className={cn(
    'px-4 py-2 border-2 transition-all font-medium text-sm',
    variants[variant]
   )}
  >
   {label} ({count})
  </button>
 );
}

function AchievementCard({
 name,
 description,
 icon,
 earned,
 progress,
 target,
}: Achievement) {
 const progressPercentage = progress && target ? Math.round((progress / target) * 100) : 0;

 return (
  <div
   className={cn(
    'relative p-4 border-2 transition-all overflow-hidden',
    earned
     ? 'bg-gradient-to-br from-sepia-50 to-white border-sepia-300'
     : 'bg-paper-50 border-paper-300 opacity-75'
   )}
  >
   {/* Greek key pattern overlay for earned achievements */}
   {earned && (
    <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
     <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
       d="M10,10 L20,10 L20,20 L30,20 L30,10 L40,10 L40,20 L50,20 L50,10 L60,10 L60,20 L70,20 L70,10 L80,10 L80,20 L90,20 L90,10 M10,20 L10,30 L20,30 L20,40 L10,40 L10,50 L20,50 L20,60 L10,60 L10,70 L20,70 L20,80 L10,80 L10,90"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
      />
     </svg>
    </div>
   )}

   <div className="relative flex items-start gap-4">
    {/* Icon */}
    <div
     className={cn(
      'w-14 h-14 flex items-center justify-center text-3xl border-2 shrink-0',
      earned
       ? 'bg-sepia-100 border-sepia-400'
       : 'bg-gray-100 border-gray-300 grayscale'
     )}
    >
     {icon}
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
     <div className="flex items-center gap-2 mb-1">
      <h4 className="font-serif font-semibold text-ink truncate">
       {name}
      </h4>
      {earned && (
       <span className="shrink-0 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 border border-green-300">
        Débloqué
       </span>
      )}
     </div>
     <p className="text-sm text-ink-light">{description}</p>

     {/* Progress Bar for locked achievements */}
     {!earned && progress !== undefined && target !== undefined && (
      <div className="mt-3">
       <div className="flex justify-between text-xs text-ink-light mb-1">
        <span>Progression</span>
        <span>
         {progress}/{target}
        </span>
       </div>
       <div className="h-2 bg-paper-200 overflow-hidden">
        <div
         className="h-full bg-sepia-500 transition-all"
         style={{ width: `${progressPercentage}%` }}
        />
       </div>
      </div>
     )}
    </div>
   </div>
  </div>
 );
}
