'use client'

import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/ui/atoms/Button'
import { toggleLikeReply, deleteReply } from '@/lib/actions/forum'
import { Textarea } from '@/ui/atoms/Textarea'
import { HeartIcon } from '@/ui/icons/StatusIcons'
import { MessageSquareIcon } from '@/ui/icons/SocialIcons'
import { TrashIcon } from '@/ui/icons/ActionIcons'

export interface Reply {
  id: string
  content: string
  createdAt: Date
  likeCount: number
  author: {
    id: string
    name: string | null
    image: string | null
    role?: string
  }
  replies?: Reply[]
  _count?: {
    replies: number
    likes: number
  }
}

interface ReplyThreadProps {
  reply: Reply
  postId: string
  currentUserId?: string | null
  depth?: number
  maxDepth?: number
  initialIsLiked?: boolean
  userLikes?: {
    post?: boolean
    replies: Set<string>
  }
}

export function ReplyThread({
  reply,
  postId,
  currentUserId,
  depth = 0,
  maxDepth = 3,
  initialIsLiked = false,
  userLikes,
}: ReplyThreadProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked)
  const [likeCount, setLikeCount] = useState(reply.likeCount)
  const [isReplying, setIsReplying] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const [showReplies, setShowReplies] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  const canReply = depth < maxDepth
  const hasReplies = reply.replies && reply.replies.length > 0
  const isOwner = currentUserId === reply.author.id

  const handleLike = async () => {
    try {
      const result = await toggleLikeReply(reply.id)
      setIsLiked(result.liked)
      setLikeCount(prev => result.liked ? prev + 1 : prev - 1)
    } catch (error) {
      console.error('Failed to like reply:', error)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette réponse ?')) {
      return
    }

    setIsDeleting(true)
    try {
      await deleteReply(reply.id)
      window.location.reload()
    } catch (error) {
      console.error('Failed to delete reply:', error)
      setIsDeleting(false)
    }
  }

  const handleSubmitReply = async () => {
    if (!replyContent.trim()) return

    try {
      const { createReply } = await import('@/lib/actions/forum')
      await createReply({
        postId,
        content: replyContent,
        parentId: reply.id,
        mentions: [],
      })
      window.location.reload()
    } catch (error) {
      console.error('Failed to create reply:', error)
    }
  }

  return (
    <div
      className={cn('relative', depth > 0 && 'ml-8 pl-8 border-l-2 border-sepia-200')}
      style={{ marginLeft: depth > 0 ? undefined : '0' }}
    >
      {/* Reply Card */}
      <div className="bg-paper-50 border-2 border-paper-300 hover:border-sepia-400 transition-all duration-300 p-5 mb-3 shadow-sm hover:shadow-md">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gradient-to-br from-sepia-200 to-sepia-400 border-2 border-sepia-300 flex items-center justify-center text-sepia-800 font-serif text-base font-bold flex-shrink-0 shadow-sm">
              <span suppressHydrationWarning>{reply.author.name?.charAt(0).toUpperCase() || '?'}</span>
            </div>

            {/* Author Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif font-semibold text-ink">
                  <span className="living-word">{reply.author.name || 'Anonyme'}</span>
                </span>
                {reply.author.role === 'ADMIN' && (
                  <span className="px-2 py-0.5 bg-sepia-600 text-paper-50 text-xs font-medium border-2 border-sepia-700">
                    Modérateur
                  </span>
                )}
              </div>
              <div className="text-sm text-ink-light" suppressHydrationWarning>
                {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true, locale: fr })}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleLike}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all border-2',
                isLiked
                  ? 'bg-red-50 text-red-600 border-red-300 hover:bg-red-100'
                  : 'bg-paper-100 text-ink-light border-paper-300 hover:border-sepia-300 hover:bg-sepia-50 hover:text-sepia-700'
              )}
            >
              <HeartIcon className={cn('w-4 h-4', isLiked && 'fill-current')} />
              {likeCount > 0 && <span className="living-word">{likeCount}</span>}
            </button>

            {canReply && (
              <button
                onClick={() => setIsReplying(!isReplying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-ink-light border-2 border-paper-300 hover:border-sepia-300 hover:bg-sepia-50 hover:text-sepia-700 transition-all"
              >
                <MessageSquareIcon className="w-4 h-4" />
                <span className="living-word">Répondre</span>
              </button>
            )}

            {isOwner && (
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="p-1.5 text-ink-light hover:text-red-600 hover:bg-red-50 border-2 border-paper-300 hover:border-red-300 transition-all disabled:opacity-50"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-light prose-p:leading-relaxed prose-a:text-sepia-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-l-4 prose-blockquote:border-sepia-600 prose-blockquote:bg-sepia-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:my-4 prose-code:bg-paper-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sepia-800 prose-code:font-mono prose-code:text-xs">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{reply.content}</ReactMarkdown>
        </div>

        {/* Reply Form */}
        {isReplying && canReply && (
          <div className="mt-4 pt-4 border-t-2 border-sepia-200">
            <Textarea
              value={replyContent}
              onChange={e => setReplyContent(e.target.value)}
              placeholder="Écrivez votre réponse... (Markdown supporté)"
              className="min-h-[100px] mb-3"
              autoFocus
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSubmitReply} disabled={!replyContent.trim()} className="rounded-none">
                <span className="living-word">Envoyer</span>
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setIsReplying(false)} className="rounded-none">
                Annuler
              </Button>
            </div>
          </div>
        )}

        {/* Show Replies Toggle */}
        {hasReplies && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="mt-4 text-sm text-sepia-600 hover:text-sepia-700 font-medium flex items-center gap-2 transition-colors"
          >
            <span className="living-word">{showReplies ? '▼' : '▶'}</span>
            <span className="living-word">
              {reply._count?.replies || reply.replies?.length || 0}
            </span>
            {reply._count?.replies === 1 ? ' réponse' : ' réponses'}
          </button>
        )}
      </div>

      {/* Nested Replies */}
      {hasReplies && showReplies && (
        <div className="space-y-3">
          {reply.replies?.map(nestedReply => (
            <ReplyThread
              key={nestedReply.id}
              reply={nestedReply}
              postId={postId}
              currentUserId={currentUserId}
              depth={depth + 1}
              maxDepth={maxDepth}
              initialIsLiked={userLikes?.replies?.has(nestedReply.id) || false}
              userLikes={userLikes}
            />
          ))}
        </div>
      )}
    </div>
  )
}
