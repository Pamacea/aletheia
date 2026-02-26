import { AwardIcon, TrendingUpIcon } from '@/ui/components/CustomIcons';
import { cn } from '@/lib/utils/cn';

interface LevelProgressProps {
 level: number;
 xpProgress: number;
 xpNeeded: number;
 xpPercentage: number;
 totalXp: number;
 breakdown: {
  masteredConcepts: number;
  reviews: number;
  annotations: number;
  forumPosts: number;
 };
}

export function LevelProgress({
 level,
 xpProgress,
 xpNeeded,
 xpPercentage,
 totalXp,
 breakdown,
}: LevelProgressProps) {
 return (
  <div className="bg-white border-2 border-paper-300 p-6">
   <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
     <div className="w-12 h-12 bg-gradient-to-br from-sepia-600 to-sepia-800 flex items-center justify-center text-white font-serif text-xl font-bold shadow-lg">
      {level}
     </div>
     <div>
      <h3 className="font-serif text-xl font-semibold text-ink">Niveau {level}</h3>
      <p className="text-sm text-ink-light">
       {totalXp.toLocaleString()} XP total
      </p>
     </div>
    </div>
    <TrendingUpIcon className="w-8 h-8 text-sepia-600" />
   </div>

   {/* XP Progress Bar */}
   <div className="mb-6">
    <div className="flex justify-between text-sm text-ink-light mb-2">
     <span>{xpProgress} XP</span>
     <span>{xpNeeded} XP restants</span>
    </div>
    <div className="h-4 bg-paper-200 overflow-hidden border border-paper-300">
     <div
      className="h-full bg-gradient-to-r from-sepia-500 to-sepia-700 transition-all duration-500 relative overflow-hidden"
      style={{ width: `${xpPercentage}%` }}
     >
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
     </div>
    </div>
   </div>

   {/* XP Breakdown */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <XPTile
     icon="🏛️"
     label="Concepts Maîtrisés"
     value={breakdown.masteredConcepts}
     xpPerUnit={100}
    />
    <XPTile
     icon="⚡"
     label="Révisions"
     value={Math.round(breakdown.reviews / 10)}
     xpPerUnit={10}
    />
    <XPTile
     icon="✍️"
     label="Annotations"
     value={breakdown.annotations}
     xpPerUnit={5}
    />
    <XPTile
     icon="💬"
     label="Forum"
     value={breakdown.forumPosts}
     xpPerUnit={20}
    />
   </div>
  </div>
 );
}

function XPTile({
 icon,
 label,
 value,
 xpPerUnit,
}: {
 icon: string;
 label: string;
 value: number;
 xpPerUnit: number;
}) {
 return (
  <div className="text-center p-3 bg-paper-50 border border-paper-200">
   <div className="text-2xl mb-1">{icon}</div>
   <div className="font-semibold text-ink">{value}</div>
   <div className="text-xs text-ink-light">{label}</div>
   <div className="text-xs text-sepia-600 mt-1">
    +{value * xpPerUnit} XP
   </div>
  </div>
 );
}
