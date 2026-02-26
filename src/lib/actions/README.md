# Server Actions - Settings Module

This module provides comprehensive server actions for user settings management in Aletheia.

## Features

### Profile Management
- **updateProfile** - Update user name, bio, and avatar
- **uploadAvatar** - Upload and validate avatar images
- **deleteAvatar** - Remove user avatar

### Preferences
- **getPreferences** - Retrieve user preferences
- **updatePreferences** - Update theme, language, and font size

### Notifications
- **getNotificationSettings** - Get notification preferences
- **updateNotifications** - Update email/push notification settings
- **unsubscribeEmail** - Unsubscribe from marketing emails

### Privacy
- **updatePrivacy** - Manage profile visibility and data sharing
- **setProfileVisibility** - Quick toggle for public/private profile
- **exportData** - GDPR-compliant data export

### Account Security
- **updateEmail** - Change email with verification
- **verifyEmailChange** - Confirm email change with token
- **updatePassword** - Change password with validation
- **deleteAccount** - Delete account with confirmation

## Usage

### Import Actions

```typescript
// Import all actions
import {
  updateProfile,
  getPreferences,
  updateNotifications,
  exportData,
} from '@/lib/actions';

// Or import specific actions
import { updateProfile } from '@/lib/actions/settings';
```

### Profile Updates

```typescript
'use client';

import { updateProfile } from '@/lib/actions';
import { useState } from 'react';

export function ProfileForm() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async () => {
    const result = await updateProfile({
      name,
      bio,
    });

    if (result.success) {
      console.log('Profile updated!');
    } else {
      console.error(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      <button type="submit">Update Profile</button>
    </form>
  );
}
```

### Preferences

```typescript
'use client';

import { getPreferences, updatePreferences } from '@/lib/actions';
import { useEffect, useState } from 'react';

export function PreferencesSettings() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    getPreferences().then((result) => {
      if (result.success) {
        setTheme(result.data.theme);
        setLanguage(result.data.language);
      }
    });
  }, []);

  const handleUpdate = async () => {
    const result = await updatePreferences({ theme, language });
    if (!result.success) {
      console.error(result.error);
    }
  };

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}
```

### Notifications

```typescript
'use client';

import { getNotificationSettings, updateNotifications } from '@/lib/actions';

export function NotificationSettings() {
  const handleToggle = async (key: string, value: boolean) => {
    const result = await updateNotifications({
      [key]: value,
    });

    if (!result.success) {
      console.error(result.error);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleToggle('emailNotifications', e.target.checked)}
        />
        Email Notifications
      </label>
    </div>
  );
}
```

### Password Update

```typescript
'use client';

import { updatePassword } from '@/lib/actions';

export function PasswordChangeForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await updatePassword({
      oldPassword: formData.get('oldPassword') as string,
      newPassword: formData.get('newPassword') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    });

    if (result.success) {
      alert('Password updated successfully');
    } else {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="oldPassword" type="password" placeholder="Old password" />
      <input name="newPassword" type="password" placeholder="New password" />
      <input name="confirmPassword" type="password" placeholder="Confirm password" />
      <button type="submit">Update Password</button>
    </form>
  );
}
```

### Data Export

```typescript
'use client';

import { exportData } from '@/lib/actions';

export function DataExportButton() {
  const handleExport = async () => {
    const result = await exportData();

    if (result.success) {
      // Download JSON file
      const blob = new Blob([JSON.stringify(result.data, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `aletheia-export-${new Date().toISOString()}.json`;
      a.click();
    } else {
      console.error(result.error);
    }
  };

  return <button onClick={handleExport}>Export My Data</button>;
}
```

## Response Types

All actions return a consistent `ActionResult<T>` type:

```typescript
type ActionResult<T = void> = {
  success: boolean;
  data?: T;
  error?: string;
};
```

### Success Example

```typescript
{
  success: true,
  data: {
    theme: 'dark',
    language: 'fr'
  }
}
```

### Error Example

```typescript
{
  success: false,
  error: 'Le nom est requis'
}
```

## Validation

All inputs are validated using Zod schemas:

- **Profile**: name (1-100 chars), bio (max 500 chars)
- **Preferences**: theme (light|dark|system), language (fr|en|es|de), fontSize (small|medium|large)
- **Notifications**: all boolean fields
- **Password**: min 8 chars, 1 uppercase, 1 lowercase, 1 number

## Security

- All actions require authenticated session
- Password changes verify old password first
- Email changes require verification token
- File uploads validated for type and size
- Sensitive operations (deletion) require confirmation

## Prisma Schema

The User model includes these settings fields:

```prisma
model User {
  id                    String    @id @default(cuid())
  email                 String    @unique
  name                  String?
  image                 String?
  bio                   String?
  preferences           Json?     // { theme, language, fontSize, privacy }
  notificationSettings  Json?     // { emailNotifications, pushNotifications, ... }
  isPublic              Boolean   @default(false)
  emailChangeToken      String?   @unique
  emailChangeExpires    DateTime?
  // ... other fields
}
```

## Best Practices

1. **Always check response** - All actions return `ActionResult`, check `success` before using data
2. **Handle errors gracefully** - Display user-friendly error messages
3. **Revalidate paths** - Actions automatically revalidate relevant paths
4. **Use optimistic updates** - Update UI immediately, rollback on error
5. **Loading states** - Show loading indicators during async operations

## File Structure

```
src/lib/actions/
├── index.ts           # Barrel export of all actions
├── auth.ts            # Authentication actions
├── settings.ts        # Settings actions (this file)
├── concepts.ts        # Concept CRUD
├── notes.ts           # Notes CRUD
└── ...
```

## TODO

- [ ] Implement actual file upload service (Vercel Blob, S3, etc.)
- [ ] Send email verification for email changes
- [ ] Add rate limiting for email changes
- [ ] Implement account deletion grace period
- [ ] Add 2FA support
- [ ] Implement session management UI
