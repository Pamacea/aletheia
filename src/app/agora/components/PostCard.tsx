'use client'

import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Badge } from '@/ui/molecules/Badge'
import {
  MessageSquareIcon,
  EyeIcon,
  HeartIcon,
  ClockIcon,
  PinIcon
} from '@/ui'

export interface PostCardProps {
  id: string
  slug: string
  title: string
  excerpt: string
  author: {
    id: string
    name: string | null
    image: string | null
  }
  category?: {
    name: string
    slug: string
    color?: string | null
  } | null
  tags: string[]
  replyCount: number
  likeCount: number
  views: number
  createdAt: Date
  isPinned?: boolean
}

export function PostCard({
  slug,
  title,
  excerpt,
  author,
  category,
  tags,
  replyCount,
  likeCount,
  views,
  createdAt,
  isPinned,
}: PostCardProps) {
  return (
    <Link
      href={`/agora/post/${slug}`}
      className="group block bg-paper-50 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-300 p-6 hover:shadow-glow-medium relative"
    >
      {isPinned && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-sepia-600 text-sm font-medium">
          <PinIcon className="w-4 h-4" />
          <span className="living-word">Épinglé</span>
        </div>
      )}

      <div className="flex gap-4">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-sepia-200 to-sepia-400 border-2 border-sepia-300 flex items-center justify-center text-sepia-800 font-serif text-lg font-bold">
            <span suppressHydrationWarning>{author.name?.charAt(0).toUpperCase() || '?'}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-serif font-semibold text-ink group-hover:text-sepia-700 transition-colors mb-1 line-clamp-2">
                <span className="living-word">{title}</span>
              </h3>
              <div className="flex items-center gap-3 text-sm text-ink">
                <span className="font-medium">{author.name || 'Anonyme'}</span>
                <span className="text-ink-light">•</span>
                <span className="flex items-center gap-1" suppressHydrationWarning>
                  <ClockIcon className="w-3 h-3" />
                  {formatDistanceToNow(createdAt, { addSuffix: true, locale: fr })}
                </span>
                {category && (
                  <>
                    <span className="text-ink-light">•</span>
                    <span className="font-medium text-sepia-600">
                      {category.name}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-ink-light leading-relaxed mb-4 line-clamp-2">
            {excerpt}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 4).map(tag => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs living-word"
                >
                  #{tag}
                </Badge>
              ))}
              {tags.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{tags.length - 4}
                </Badge>
              )}
            </div>
          )}

          <div className="flex items-center gap-6 text-sm text-ink">
            <span className="flex items-center gap-1.5">
              <MessageSquareIcon className="w-4 h-4" />
              {replyCount} {replyCount === 1 ? 'réponse' : 'réponses'}
            </span>
            <span className="flex items-center gap-1.5">
              <HeartIcon className="w-4 h-4" />
              {likeCount}
            </span>
            <span className="flex items-center gap-1.5">
              <EyeIcon className="w-4 h-4" />
              {views}
            </span>
          </div>
        </div>
      </div>

      {/* Greek key pattern border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sepia-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}
