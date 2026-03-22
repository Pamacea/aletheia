'use client'

import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Badge } from '@/ui/molecules/Badge'
import { MessageSquareIcon } from '@/ui/icons/SocialIcons'
import { EyeIcon, PinIcon } from '@/ui/icons/UIIcons'
import { HeartIcon, ClockIcon } from '@/ui/icons/StatusIcons'

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
      className="group block bg-paper-50 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-300 p-4 sm:p-6 hover:shadow-glow-medium relative"
    >
      {/* Pinned indicator — inline banner, not absolute overlay */}
      {isPinned && (
        <div className="flex items-center gap-1.5 text-sepia-600 text-xs font-medium mb-3 pb-2 border-b border-sepia-200">
          <PinIcon className="w-3.5 h-3.5" />
          <span>Épinglé</span>
        </div>
      )}

      <div className="flex gap-3 sm:gap-4">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sepia-200 to-sepia-400 border-2 border-sepia-300 flex items-center justify-center text-sepia-800 font-serif text-base sm:text-lg font-bold">
            <span suppressHydrationWarning>{author.name?.charAt(0).toUpperCase() || '?'}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-xl font-serif font-semibold text-ink group-hover:text-sepia-700 transition-colors mb-1 line-clamp-2 break-words">
            <span className="living-word">{title}</span>
          </h3>

          {/* Meta line — wraps on mobile */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-ink mb-3">
            <span className="font-medium">{author.name || 'Anonyme'}</span>
            <span className="text-ink-light">·</span>
            <span className="flex items-center gap-1" suppressHydrationWarning>
              <ClockIcon className="w-3 h-3" />
              {formatDistanceToNow(createdAt, { addSuffix: true, locale: fr })}
            </span>
            {category && (
              <>
                <span className="text-ink-light">·</span>
                <span className="font-medium text-sepia-600">{category.name}</span>
              </>
            )}
          </div>

          <p className="text-ink-light text-sm leading-relaxed mb-3 line-clamp-2">
            {excerpt}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.slice(0, 4).map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs living-word">
                  #{tag}
                </Badge>
              ))}
              {tags.length > 4 && (
                <Badge variant="secondary" className="text-xs">+{tags.length - 4}</Badge>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-ink-light">
            <span className="flex items-center gap-1.5">
              <MessageSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {replyCount}
            </span>
            <span className="flex items-center gap-1.5">
              <HeartIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {likeCount}
            </span>
            <span className="flex items-center gap-1.5">
              <EyeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {views}
            </span>
          </div>
        </div>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sepia-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}
