import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, getPosts } from '@/lib/actions/forum'
import { PostCard } from '../components/PostCard'
import { Button } from '@/ui/atoms/Button'
import { ArrowLeftIcon, BookOpenIcon, BookIcon } from '@/ui'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams: Promise<{
    sort?: 'latest' | 'popular' | 'trending'
  }>
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: slug } = await params
  const { sort = 'latest' } = await searchParams

  const [category, posts] = await Promise.all([
    getCategoryBySlug(slug),
    getPosts({
      categoryId: slug,
      sort,
      limit: 50,
    }),
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="font-serif">
      {/* Header */}
      <div className="mb-8">
        <Link href="/agora" className="inline-flex items-center gap-2 text-sepia-600 hover:text-sepia-700 mb-4">
          <ArrowLeftIcon className="w-4 h-4" />
          Retour à l'Agora
        </Link>

        <div className="bg-gradient-to-r from-sepia-50 to-transparent border-2 border-sepia-200  p-8">
          <div className="flex items-start gap-6">
            <div
              className="w-20 h-20 flex items-center justify-center border-2 border-sepia-300"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <BookIcon className="w-10 h-10 text-sepia-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-ink mb-2">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-paper-700 mb-4">{category.description}</p>
              )}
              <div className="flex items-center gap-4 text-sm text-paper-600">
                <span className="flex items-center gap-1">
                  <BookOpenIcon className="w-4 h-4" />
                  {category._count.posts} {category._count.posts === 1 ? 'discussion' : 'discussions'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex gap-2 mb-6">
        <Link href={`/agora/${slug}?sort=latest`} className={buttonVariant(sort === 'latest')}>
          Récents
        </Link>
        <Link href={`/agora/${slug}?sort=popular`} className={buttonVariant(sort === 'popular')}>
          Populaires
        </Link>
        <Link href={`/agora/${slug}?sort=trending`} className={buttonVariant(sort === 'trending')}>
          Tendances
        </Link>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-16 bg-white border-2 border-paper-300 ">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-paper-200 border-2 border-sepia-200 rounded-full">
            <BookIcon className="w-10 h-10 text-sepia-600" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-ink mb-2">
            Aucune discussion dans cette catégorie
          </h3>
          <p className="text-paper-700 mb-6">
            Soyez le premier à lancer une discussion sur {category.name}
          </p>
          <Link href="/agora/create">
            <Button>Créer une discussion</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt || ''}
              author={post.user}
              category={post.category}
              tags={post.tags}
              replyCount={post._count.replies}
              likeCount={post._count.likes}
              views={post.views}
              createdAt={post.createdAt}
              isPinned={post.isPinned}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function buttonVariant(active: boolean) {
  return cn(
    'px-4 py-2  text-sm font-medium transition-all border-2',
    active
      ? 'bg-sepia-600 text-paper-50 border-sepia-600'
      : 'bg-white text-ink border-paper-300 hover:border-sepia-600 hover:bg-sepia-50'
  )
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}
