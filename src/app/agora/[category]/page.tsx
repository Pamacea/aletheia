import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCategoryBySlug, getPosts, getCategories, getTrendingPosts, getPopularTags } from '@/lib/actions/forum'
import { PostCard } from '../components/PostCard'
import { Button } from '@/ui/atoms/Button'
import { ContentLayout } from '@/ui/components/ContentLayout'
import { PageHeader } from '@/ui/components/PageHeader'
import {
  ArrowLeftIcon,
  BookOpenIcon,
  BookIcon,
  NetworkIcon,
  TrendingUpIcon,
} from '@/ui'

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

  const [category, posts, allCategories, trending, popularTags] = await Promise.all([
    getCategoryBySlug(slug),
    getPosts({
      categoryId: slug,
      sort,
      limit: 50,
    }),
    getCategories(),
    getTrendingPosts(5),
    getPopularTags(15),
  ])

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <PageHeader title={category.name} backHref="/agora" backLabel="Retour à l'Agora" />

      {/* Main Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Category - FULL WIDTH */}
        <section className="text-center mb-12">
          <div className="mb-6">
            <div
              className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-sepia-300"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <BookIcon className="w-10 h-10 text-sepia-600" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-semibold text-ink mb-3">
            <span className="living-word">{category.name}</span>
          </h1>
          {category.description && (
            <p className="text-ink-light text-lg max-w-3xl mx-auto mb-4">
              {category.description}
            </p>
          )}
          <div className="flex items-center justify-center gap-4 text-sm text-ink-light">
            <span className="flex items-center gap-1">
              <BookOpenIcon className="w-4 h-4" />
              {category._count.posts} {category._count.posts === 1 ? 'discussion' : 'discussions'}
            </span>
          </div>
        </section>

        {/* Content Container - 2/3 WIDTH */}
        <div className="content-2-3">
        {/* Content with sidebar */}
        <ContentLayout
          sidebar={
            <>
              {/* Trending Posts */}
              {trending.length > 0 && (
                <div className="bg-paper-50 border-2 border-paper-300 border-double-ornate p-5">
                  <h3 className="font-serif font-semibold text-ink mb-4 flex items-center gap-2">
                    <TrendingUpIcon className="w-5 h-5 text-sepia-600" />
                    <span className="living-word">Discussions Tendances</span>
                  </h3>
                  <div className="space-y-3">
                    {trending.map(post => (
                      <Link
                        key={post.id}
                        href={`/agora/post/${post.slug}`}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-ink group-hover:text-sepia-700 line-clamp-2 mb-1 living-word">
                          {post.title}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-ink-light">
                          <span>{post._count.likes} j'aime</span>
                          <span>{post._count.replies} réponses</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Tags */}
              {popularTags.length > 0 && (
                <div className="bg-paper-50 border-2 border-paper-300 border-double-ornate p-5">
                  <h3 className="font-serif font-semibold text-ink mb-4">
                    <span className="living-word">Tags Populaires</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.slice(0, 12).map(({ tag, count }) => (
                      <Link key={tag} href={`/agora/${slug}?search=${tag}`}>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-paper-100 text-ink text-sm border border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 cursor-pointer living-word transition-all">
                          #{tag} <span className="text-ink-light">({count})</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All Categories */}
              <div className="bg-gradient-to-br from-sepia-50 to-paper-50 border-2 border-sepia-300 border-double-ornate p-5">
                <h3 className="font-serif font-semibold text-sepia-800 mb-3 flex items-center gap-2">
                  <NetworkIcon className="w-5 h-5" />
                  <span className="living-word">Catégories</span>
                </h3>
                <div className="space-y-2">
                  {allCategories.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/agora/${cat.slug}`}
                      className="flex items-center justify-between py-2 px-3 hover:bg-paper-100 transition-colors group"
                    >
                      <span className="flex items-center gap-2">
                        <BookIcon className="w-5 h-5 text-sepia-600" />
                        <span className="text-sm text-ink group-hover:text-sepia-700 living-word">
                          {cat.name}
                        </span>
                      </span>
                      <span className="text-xs text-ink-light bg-paper-200 px-2 py-1">
                        {cat.postCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          }
        >
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
            <div className="text-center py-16 bg-paper-50 border-2 border-paper-300 border-double-ornate">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-paper-200 border-2 border-sepia-200 rounded-full">
                <BookIcon className="w-10 h-10 text-sepia-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-ink mb-2">
                Aucune discussion dans cette catégorie
              </h3>
              <p className="text-ink-light mb-6">
                Soyez le premier à lancer une discussion sur {category.name}
              </p>
              <Link href="/agora/create">
                <Button>
                  <span className="living-word">Créer une discussion</span>
                </Button>
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
        </ContentLayout>
        </div>
      </main>
    </div>
  )
}

function buttonVariant(active: boolean) {
  return `px-4 py-2 text-sm font-medium transition-all border-2 ${
    active
      ? 'bg-sepia-600 text-paper-50 border-sepia-600'
      : 'bg-paper-50 text-ink border-paper-300 hover:border-sepia-600 hover:bg-sepia-50'
  }`
}
