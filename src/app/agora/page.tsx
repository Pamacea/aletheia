import { Suspense } from 'react'
import Link from 'next/link'
import { getPosts, getCategories, getTrendingPosts, getPopularTags } from '@/lib/actions/forum'
import { PostCard } from './components/PostCard'
import { CategoryTabs } from './components/CategoryList'
import { Button } from '@/ui/atoms/Button'
import { Input } from '@/ui/atoms/Input'
import { Badge } from '@/ui/molecules/Badge'
import {
  ArrowLeftIcon,
  SearchIcon,
  TrendingUpIcon,
  ClockIcon,
  HeartIcon,
  MessageSquareIcon,
  PhilosophersIcon,
  NetworkIcon,
  BookIcon
} from '@/ui'
import type { ForumPostWithAuthor, ForumCategoryWithCount } from '@/types/prisma'

type SortOption = 'latest' | 'popular' | 'trending'

interface AgoraPageProps {
  searchParams: Promise<{
    category?: string
    sort?: SortOption
    search?: string
  }>
}

export const metadata = {
  title: 'Agora - Aletheia',
  description: 'Le forum de la philosophie - Lieu de dialogue et de réflexion',
}

export default async function AgoraPage({ searchParams }: AgoraPageProps) {
  const params = await searchParams
  const categorySlug = params.category
  const sort = params.sort as SortOption ?? 'latest'
  const search = params.search

  // Fetch data
  const [categories, posts, trending, popularTags] = await Promise.all([
    getCategories(),
    getPosts({
      categoryId: categorySlug && categorySlug !== 'all' ? categorySlug : undefined,
      sort,
      limit: 50,
    }),
    getTrendingPosts(5),
    getPopularTags(15),
  ])

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Agora</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <NetworkIcon className="w-20 h-20 text-sepia-600 mx-auto" />
          </div>
          <h2 className="font-serif text-4xl font-semibold text-ink mb-3">
            Le <span className="living-word">Forum de la Philosophie</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto mb-8">
            Lieu de <span className="living-word">dialogue</span> et de <span className="living-word">réflexion</span>, l'Agora accueille vos discussions philosophiques.
            Explorez, questionnez, et contribuez à la <span className="living-word">sagesse collective</span>.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/agora/create">
              <Button className="gap-2 rounded-none">
                <BookIcon className="w-5 h-5" />
                <span className="living-word">Nouvelle Discussion</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Search and Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-paper-500" />
                <Input
                  type="search"
                  name="search"
                  placeholder="Rechercher des discussions..."
                  defaultValue={search}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <Link
                  href="?sort=latest"
                  className={buttonVariant(sort === 'latest')}
                >
                  <ClockIcon className="w-4 h-4" />
                  <span className="living-word">Récents</span>
                </Link>
                <Link
                  href="?sort=popular"
                  className={buttonVariant(sort === 'popular')}
                >
                  <HeartIcon className="w-4 h-4" />
                  <span className="living-word">Populaires</span>
                </Link>
                <Link
                  href="?sort=trending"
                  className={buttonVariant(sort === 'trending')}
                >
                  <TrendingUpIcon className="w-4 h-4" />
                  <span className="living-word">Tendances</span>
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <CategoryTabs
                categories={categories}
                selectedCategory={categorySlug || 'all'}
              />
            </div>

            {/* Posts List */}
            <Suspense fallback={<PostsLoading />}>
              {posts.length === 0 ? (
                <div className="text-center py-16 bg-paper-50 border-2 border-paper-300 border-double-ornate">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-paper-200 border-2 border-sepia-200 rounded-full">
                    <PhilosophersIcon className="w-10 h-10 text-sepia-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-ink mb-2">
                    Aucune discussion trouvée
                  </h3>
                  <p className="text-ink-light mb-6">
                    {search
                      ? 'Aucun résultat pour votre recherche'
                      : 'Soyez le premier à lancer une discussion dans cette catégorie'}
                  </p>
                  <Link href="/agora/create">
                    <Button>
                      <span className="living-word">Créer une discussion</span>
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map((post: ForumPostWithAuthor) => (
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
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-6">
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
                    <Link key={tag} href={`?search=${tag}`}>
                      <Badge
                        variant="secondary"
                        className="hover:bg-sepia-50 cursor-pointer living-word"
                      >
                        #{tag} <span className="text-ink-light">({count})</span>
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories Info */}
            <div className="bg-gradient-to-br from-sepia-50 to-paper-50 border-2 border-sepia-300 border-double-ornate p-5">
              <h3 className="font-serif font-semibold text-sepia-800 mb-3 flex items-center gap-2">
                <NetworkIcon className="w-5 h-5" />
                <span className="living-word">Catégories</span>
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
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
          </aside>
        </div>
      </main>
    </div>
  )
}

function buttonVariant(active: boolean): string {
  return `px-4 py-2 text-sm font-medium flex items-center gap-2 transition-all border-2 ${
    active
      ? 'bg-sepia-600 text-paper-50 border-sepia-600'
      : 'bg-paper-50 text-ink border-paper-300 hover:border-sepia-600 hover:bg-sepia-50'
  }`
}

function PostsLoading() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className="bg-paper-50 border-2 border-paper-300 p-6 animate-pulse"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-paper-200" />
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-paper-200 rounded w-3/4" />
              <div className="h-4 bg-paper-200 rounded w-1/2" />
              <div className="h-4 bg-paper-200 rounded w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
