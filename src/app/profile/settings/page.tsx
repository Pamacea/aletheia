import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib/actions/auth';
import { getAllSettings, getNotificationSettings } from '@/lib/actions/settings';
import { ArrowLeftIcon } from '@/ui/components/CustomIcons';
import { SettingsProfile } from './components/SettingsProfile';
import { SettingsPreferences } from './components/SettingsPreferences';
import { SettingsNotifications } from './components/SettingsNotifications';
import { SettingsPrivacy } from './components/SettingsPrivacy';
import { SettingsAccount } from './components/SettingsAccount';

export default async function SettingsPage() {
 const session = await getServerSession();

 if (!session?.user) {
  redirect('/auth/login');
 }

 const settings = await getAllSettings(session.user.id);

 // Access properties directly from the returned object
 const profile = settings.profile || { name: '', email: '', bio: '', image: null };

 // Type-safe preferences with defaults
 const rawPreferences = (typeof settings.preferences === 'object' && settings.preferences !== null)
   ? settings.preferences as { theme?: string; language?: string; fontSize?: string }
   : {};

 const preferences = {
   theme: (rawPreferences.theme as 'light' | 'dark' | 'system') || 'system',
   language: (rawPreferences.language as 'fr' | 'en' | 'es' | 'de') || 'fr',
   fontSize: (rawPreferences.fontSize as 'small' | 'medium' | 'large') || 'medium',
 };

 // Get notification settings
 const notificationsData = await getNotificationSettings();
 const notifications = notificationsData.success && notificationsData.data
   ? notificationsData.data
   : {
   emailNotifications: false,
   pushNotifications: false,
   weeklyDigest: false,
   reviewReminders: false
 };

 // Get privacy settings from preferences or use defaults
 const privacy = (typeof settings.preferences === 'object' && settings.preferences !== null && 'privacy' in settings.preferences)
   ? (settings.preferences as any).privacy
   : {
   profileVisibility: 'private' as 'public' | 'private',
   showProgress: false,
   showReadingList: false
 };

 return (
  <div className="min-h-screen bg-paper-50">
   {/* Header */}
   <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
    <div className="w-full px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Link
       href="/profile"
       className="inline-flex items-center gap-2 px-2.5 py-1.5 text-sm bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
      >
       <ArrowLeftIcon className="w-4 h-4" />
       <span className="living-word font-medium">Retour au Profil</span>
      </Link>
      <h1 className="font-serif text-2xl font-semibold text-ink">
       Paramètres
      </h1>
      <div className="hidden sm:block w-32" />
     </div>
    </div>
   </header>

   {/* Main Content */}
   <main className="w-full px-4 py-8 sm:px-6 lg:px-8 space-y-6">
    <div className="max-w-4xl mx-auto">
    {/* Profile Section */}
    <SettingsProfile initialData={profile} />

    {/* Preferences Section */}
    <SettingsPreferences initialData={preferences} />

    {/* Notifications Section */}
    <SettingsNotifications initialData={notifications} />

    {/* Privacy Section */}
    <SettingsPrivacy initialData={privacy} />

    {/* Account Section */}
    <SettingsAccount email={profile.email} />
    </div>
   </main>
  </div>
 );
}
