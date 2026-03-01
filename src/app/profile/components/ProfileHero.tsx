'use client';

import { motion } from 'framer-motion';
import { Avatar } from '@/ui/molecules/Avatar';
import { Button } from '@/ui/atoms/Button';
import { EditIcon, CalendarIcon, ShieldIcon } from '@/ui/components/CustomIcons';
import { useProfile, getInitials, formatJoinDate } from '../hooks/useProfile';
import { ProfileEditForm } from './ProfileEditForm';
import { PhilosophersIcon } from '@/ui/components/CustomIcons';

interface ProfileHeroProps {
  name: string;
  email: string;
  image?: string | null;
  bio?: string | null;
  joinDate: Date;
  level: number;
  xp: number;
  xpToNext: number;
  onEdit?: (data: { name?: string; bio?: string }) => Promise<void>;
}

export function ProfileHero({
  name,
  email,
  image,
  bio,
  joinDate,
  level,
  xp,
  xpToNext,
  onEdit,
}: ProfileHeroProps) {
  const {
    profile,
    isEditing,
    isSubmitting,
    startEditing,
    cancelEditing,
    saveProfile,
  } = useProfile({
    initialData: { name, email, image, bio, joinDate },
    onUpdate: onEdit,
  });

  const xpPercentage = Math.round((xp / (xp + xpToNext)) * 100);

  if (isEditing) {
    return (
      <ProfileEditForm
        name={profile.name}
        bio={profile.bio}
        image={profile.image}
        isLoading={isSubmitting}
        onSave={saveProfile}
        onCancel={cancelEditing}
      />
    );
  }

  return (
    <div className="relative mb-8 px-6 py-8">
      {/* Layout principal: Avatar + nom/email à gauche, badges et edit à droite */}
      <div className="flex items-start justify-between gap-6 mb-6">
        {/* Left side: Avatar + User Info */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Avatar
              src={profile.image || undefined}
              initials={getInitials(profile.name)}
              size="xl"
              className="border-4 border-white shadow-xl"
            />
          </motion.div>

          {/* User Info with Level Badge */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-serif text-3xl font-bold text-ink living-word">
                {profile.name}
              </h1>
              {/* Level Badge juste à côté */}
              <div className="flex items-center gap-1 px-2 py-1 bg-white text-sepia-700 text-sm font-semibold border-2 border-sepia-300 shadow-md rounded">
                <ShieldIcon className="w-3.5 h-3.5" />
                <span>{level}</span>
              </div>
            </div>
            <p className="text-ink-light text-sm">{profile.email}</p>
          </div>
        </div>

        {/* Right side: Badges + Edit Button */}
        <div className="flex flex-wrap gap-2 items-center">
          {onEdit && (
            <Button
              onClick={startEditing}
              variant="secondary"
              size="sm"
              className="gap-2"
            >
              <EditIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Modifier</span>
            </Button>
          )}
          <div className="flex items-center gap-1 px-2 py-1 bg-sepia-50 text-sepia-700 text-xs border border-sepia-200 rounded-full">
            <CalendarIcon className="w-3 h-3" />
            <span>{formatJoinDate(profile.joinDate)}</span>
          </div>
          <span className="text-ink-light">•</span>
          <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs border border-green-200 rounded-full">
            <ShieldIcon className="w-3 h-3" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="bg-white border-y-2 border-sepia-200 px-6 py-3 shadow-md mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-ink-light uppercase tracking-wide">
            Progression vers niveau {level + 1}
          </span>
          <span className="text-sm font-bold text-sepia-700">
            {xp.toLocaleString()} / {(xp + xpToNext).toLocaleString()} XP
          </span>
        </div>

        {/* Progress Bar élégante et fine */}
        <div className="relative h-2 bg-sepia-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-sepia-500 to-sepia-700"
          />
        </div>

        <p className="text-xs text-ink-light mt-1.5 text-center">
          {xpToNext.toLocaleString()} XP restants
        </p>
      </div>

      {/* Bio */}
      {profile.bio && (
        <div className="mb-6">
          <div className="bg-paper-50 border-l-4 border-sepia-600 p-4 italic text-ink">
            "{profile.bio}"
          </div>
        </div>
      )}
    </div>
  );
}
