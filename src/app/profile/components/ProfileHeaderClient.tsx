'use client';

import { useState, useTransition } from 'react';
import { ProfileHeader } from './ProfileHeader';

interface ProfileHeaderClientProps {
 name: string;
 email: string;
 image?: string | null;
 bio?: string | null;
 joinDate: Date;
}

export function ProfileHeaderClient({
 name,
 email,
 image,
 bio,
 joinDate,
}: ProfileHeaderClientProps) {
 const [isPending, startTransition] = useTransition();

 const handleEdit = async (data: { name?: string; bio?: string }) => {
  startTransition(async () => {
   const formData = new FormData();
   if (data.name) formData.set('name', data.name);
   if (data.bio) formData.set('bio', data.bio);

   const response = await fetch('/profile/api/update', {
    method: 'POST',
    body: formData,
   });

   if (!response.ok) {
    console.error('Failed to update profile');
   }
  });
 };

 return (
  <ProfileHeader
   name={name}
   email={email}
   image={image}
   bio={bio}
   joinDate={joinDate}
   onEdit={handleEdit}
  />
 );
}
