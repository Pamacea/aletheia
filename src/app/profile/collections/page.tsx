import { getCollections } from '@/lib/actions/favorites';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { CollectionsClient } from './components/CollectionsClient';

export const metadata = {
  title: 'Collections - Aletheia',
  description: 'Organisez vos favoris en collections thématiques',
};

export default async function CollectionsPage() {
  const session = await getSession();
  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const collections = await getCollections();

  return <CollectionsClient initialCollections={collections} />;
}
