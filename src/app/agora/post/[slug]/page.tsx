import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/actions/forum'
import { toggleLikePost } from '@/lib/actions/forum'
import { ReplyThread } from '../../components/ReplyThread'
import { Button } from '@/ui/atoms/Button'
import {
  ArrowLeftIcon,
  MessageSquareIcon,
  HeartIcon,
  EyeIcon,
  LockIcon,
  PinIcon,
  PhilosophersIcon
} from '@/ui'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Badge } from '@/ui/molecules/Badge'
import { CreateReplyForm } from '../../components/CreateReplyForm'
import { LikePostButton } from './LikePostButton'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const metadata = {
  title: 'Discussion - Agora - Aletheia',
  description: 'Lisez et participez aux discussions philosophiques',
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              href={post.category ? `/agora/${post.category.slug}` : '/agora'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Discussion</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
        {/* Post Card */}
        <article className="bg-paper-50 border-2 border-paper-300 border-double-ornate hover:border-sepia-400 transition-all duration-300 overflow-hidden mb-8">
          {/* Title Section */}
          <div className="p-8 border-b-2 border-sepia-200 bg-gradient-to-br from-paper-50 to-sepia-50">
            {/* Status Badges */}
            <div className="flex items-center gap-2 mb-4">
              {post.isPinned && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sepia-100 text-sepia-800 text-sm font-medium border-2 border-sepia-300">
                  <PinIcon className="w-3 h-3" />
                  <span className="living-word">Épinglé</span>
                </span>
              )}
              {post.isLocked && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper-200 text-paper-700 text-sm font-medium border-2 border-paper-300">
                  <LockIcon className="w-3 h-3" />
                  <span className="living-word">Verrouillé</span>
                </span>
              )}
              {post.category && (
                <Link
                  href={`/agora/${post.category.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium transition-all hover:shadow-sm border-2 border-sepia-300 hover:border-sepia-600 bg-sepia-50 text-sepia-700"
                >
                  <span>{post.category.icon}</span>
                  <span className="living-word">{post.category.name}</span>
                </Link>
              )}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl font-bold text-ink mb-6 leading-tight">
              <span className="living-word">{post.title}</span>
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-sepia-200 to-sepia-400 border-2 border-sepia-300 flex items-center justify-center text-sepia-800 font-serif text-xl font-bold shadow-sm">
                <span suppressHydrationWarning>{post.user.name?.charAt(0).toUpperCase() || '?'}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-ink text-lg">
                    <span className="living-word">{post.user.name || 'Anonyme'}</span>
                  </span>
                  {post.user.role === 'ADMIN' && (
                    <span className="px-2 py-0.5 bg-sepia-600 text-paper-50 text-xs font-medium border-2 border-sepia-700">
                      Modérateur
                    </span>
                  )}
                </div>
                <div className="text-sm text-ink-light flex items-center gap-2">
                  <span suppressHydrationWarning>Publié {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: fr })}</span>
                  {post.updatedAt && post.updatedAt.getTime() !== post.createdAt.getTime() && (
                    <span suppressHydrationWarning>· Modifié {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true, locale: fr })}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="living-word border-2 border-sepia-200">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-ink-light border-t-2 border-sepia-200 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper-200 border-2 border-paper-300">
                <EyeIcon className="w-4 h-4 text-sepia-600" />
                <span>{post.views} vue{post.views !== 1 ? 's' : ''}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper-200 border-2 border-paper-300">
                <MessageSquareIcon className="w-4 h-4 text-sepia-600" />
                <span>{post._count.replies} réponse{post._count.replies !== 1 ? 's' : ''}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper-200 border-2 border-paper-300">
                <HeartIcon className="w-4 h-4 text-sepia-600" />
                <span>{post._count.likes} j'aime</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-a:text-sepia-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-l-4 prose-blockquote:border-sepia-600 prose-blockquote:bg-sepia-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:my-6 prose-code:bg-paper-200 prose-code:px-2 prose-code:py-1 prose-code:text-sepia-800 prose-code:font-mono prose-code:text-sm prose-pre:bg-paper-900 prose-pre:border-2 prose-pre:border-sepia-600 prose-ul:list-disc prose-ol:list-decimal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* Actions */}
          {!post.isLocked && (
            <div className="px-8 pb-8 pt-4 border-t-2 border-sepia-200 flex items-center gap-4">
              <LikePostButton
                postId={post.id}
                initialCount={post._count.likes}
                initialLiked={post.userLikes?.post || false}
              />
            </div>
          )}
        </article>

        {/* Replies Section */}
        <section className="bg-paper-50 border-2 border-sepia-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-sepia-300">
            <h2 className="font-serif text-2xl font-semibold text-ink flex items-center gap-3">
              <MessageSquareIcon className="w-6 h-6 text-sepia-600" />
              <span className="living-word">Réponses</span>
              <span className="px-3 py-1 bg-paper-200 text-sepia-700 text-sm font-medium border-2 border-paper-300">
                {post._count.replies}
              </span>
            </h2>
          </div>

          {!post.isLocked ? (
            <>
              <CreateReplyForm postId={post.id} />

              <div className="p-8 space-y-6">
                {post.replies.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="mb-6 inline-block p-6 bg-paper-200 border-2 border-dashed border-sepia-300">
                      <PhilosophersIcon className="w-16 h-16 text-sepia-600 opacity-60" />
                    </div>
                    <h3 className="text-2xl font-serif text-ink mb-3">
                      Aucune <span className="living-word">réponse</span> pour le moment
                    </h3>
                    <p className="text-ink-light text-lg mb-8">
                      Soyez le premier à partager votre <span className="living-word">perspective philosophique</span>
                    </p>
                  </div>
                ) : (
                  post.replies.map(reply => (
                    <ReplyThread
                      key={reply.id}
                      reply={{
                        id: reply.id,
                        content: reply.content,
                        createdAt: reply.createdAt,
                        likeCount: reply.likeCount,
                        author: reply.user,
                        _count: reply._count,
                        replies: (reply.replies || []).map(nested => ({
                          id: nested.id,
                          content: nested.content,
                          createdAt: nested.createdAt,
                          likeCount: nested.likeCount,
                          author: nested.user,
                          _count: nested._count,
                          replies: (nested.replies || []).map(deep => ({
                            id: deep.id,
                            content: deep.content,
                            createdAt: deep.createdAt,
                            likeCount: deep.likeCount,
                            author: deep.user,
                            _count: deep._count,
                            replies: [],
                          })),
                        })),
                      }}
                      postId={post.id}
                      initialIsLiked={post.userLikes?.replies?.has(reply.id) || false}
                      userLikes={post.userLikes}
                    />
                  ))
                )}
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-paper-200 border-2 border-paper-300 rounded-full">
                <LockIcon className="w-10 h-10 text-paper-500" />
              </div>
              <h3 className="text-xl font-serif text-ink mb-2">
                Discussion <span className="living-word">verrouillée</span>
              </h3>
              <p className="text-ink-light">
                Plus aucune réponse ne peut être ajoutée à cette discussion.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
