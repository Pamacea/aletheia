'use client';

import { Avatar } from '@/ui/molecules/Avatar';
import { Button } from '@/ui/atoms/Button';
import { Badge } from '@/ui/molecules/Badge';
import {
  EditIcon,
  CheckIcon,
  XIcon,
  CalendarIcon,
  ShieldIcon,
} from '@/ui/components/CustomIcons';
import { useProfile, getInitials, formatJoinDate } from '../hooks/useProfile';
import { ProfileEditForm } from './ProfileEditForm';

interface ProfileHeaderProps {
  name: string;
  email: string;
  image?: string | null;
  bio?: string | null;
  joinDate: Date;
  onEdit?: (data: { name?: string; bio?: string }) => Promise<void>;
}

/**
 * ProfileHeader Component
 *
 * Displays user profile information with edit mode support.
 * Shows avatar, name, email, bio, and membership badges.
 *
 * @example
 * ```tsx
 * <ProfileHeader
 *   name="Jean-Paul Sartre"
 *   email="sartre@philosophie.fr"
 *   bio="Philosophe existentialiste"
 *   joinDate={new Date('2024-01-15')}
 *   onEdit={async (data) => await updateProfile(data)}
 * />
 * ```
 */
export function ProfileHeader({
  name,
  email,
  image,
  bio,
  joinDate,
  onEdit,
}: ProfileHeaderProps) {
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

  return (
    <div className="bg-white border-2 border-paper-300 overflow-hidden">
      {/* Cover Image Gradient */}
      <div className="h-32 bg-gradient-to-r from-sepia-900 via-sepia-700 to-sepia-500 relative">
        <div className="absolute inset-0 bg-[url('/data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="relative px-6 pb-6">
        {isEditing ? (
          <ProfileEditForm
            name={profile.name}
            bio={profile.bio}
            image={profile.image}
            isLoading={isSubmitting}
            onSave={saveProfile}
            onCancel={cancelEditing}
          />
        ) : (
          <>
            {/* Avatar */}
            <div className="absolute -top-16 left-6">
              <Avatar
                src={profile.image || undefined}
                initials={getInitials(profile.name)}
                size="xl"
                className="border-4 border-white shadow-lg"
              />
            </div>

            {/* Action Button */}
            {onEdit && (
              <div className="flex justify-end pt-4 gap-2">
                <Button
                  onClick={startEditing}
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                >
                  <EditIcon className="w-4 h-4" />
                  Modifier
                </Button>
              </div>
            )}

            <div className="mt-12">
              {/* Name */}
              <h1 className="font-serif text-3xl font-semibold text-ink">
                {profile.name}
              </h1>

              {/* Email */}
              <p className="text-ink-light mt-1">{profile.email}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="primary" className="gap-1">
                  <ShieldIcon className="w-3 h-3" />
                  Membre Vérifié
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <CalendarIcon className="w-3 h-3" />
                  Depuis {formatJoinDate(profile.joinDate)}
                </Badge>
              </div>

              {/* Bio */}
              <div className="mt-4">
                <div className="text-ink-light bg-paper-50 p-4 border border-paper-200">
                  {profile.bio ? (
                    <p className="whitespace-pre-wrap">{profile.bio}</p>
                  ) : (
                    <p className="text-ink-lighter italic">
                      Aucune bio pour le moment...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
