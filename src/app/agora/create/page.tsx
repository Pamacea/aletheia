import { getCategories } from '@/lib/actions/forum'
import { CreatePostForm } from '../components/CreatePostForm'

export const metadata = {
  title: 'Nouvelle Discussion - Agora - Aletheia',
  description: 'Créez une nouvelle discussion philosophique',
}

export default async function CreatePostPage() {
  const categories = await getCategories()

  return <CreatePostForm categories={categories} />
}
