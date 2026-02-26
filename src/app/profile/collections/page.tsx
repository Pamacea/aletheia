import { getCollections } from '@/lib/actions/favorites';
import { CollectionsClient } from './components/CollectionsClient';

export default async function CollectionsPage() {
  // Server-side data fetching
  const collections = await getCollections();

  return <CollectionsClient initialCollections={collections} />;
}
