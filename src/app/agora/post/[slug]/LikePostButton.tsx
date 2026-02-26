'use client'

import { useState } from 'react'
import { HeartIcon } from '@/ui'
import { toggleLikePost } from '@/lib/actions/forum'

interface LikePostButtonProps {
  postId: string
  initialCount: number
  initialLiked?: boolean
}

export function LikePostButton({ postId, initialCount, initialLiked = false }: LikePostButtonProps) {
  const [liked, setLiked] = useState(initialLiked)
  const [count, setCount] = useState(initialCount)
  const [isLoading, setIsLoading] = useState(false)

  const handleLike = async () => {
    setIsLoading(true)
    try {
      const result = await toggleLikePost(postId)
      setLiked(result.liked)
      setCount(prev => result.liked ? prev + 1 : prev - 1)
    } catch (error) {
      console.error('Failed to like post:', error)
      // You could show a toast here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all border-2 ${
        liked
          ? 'bg-red-50 text-red-600 border-red-300 hover:bg-red-100'
          : 'bg-paper-100 text-ink-light border-paper-300 hover:border-sepia-300 hover:bg-sepia-50 hover:text-sepia-700'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <HeartIcon className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
      <span className="living-word">{count}</span>
      <span>{count === 1 ? "j'aime" : "j'aiment"}</span>
    </button>
  )
}
