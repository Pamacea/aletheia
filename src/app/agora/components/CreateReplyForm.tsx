'use client'

import { useState } from 'react'
import { Button } from '@/ui/atoms/Button'
import { Textarea } from '@/ui/atoms/Textarea'
import { createReply } from '@/lib/actions/forum'
import { BookIcon } from '@/ui/icons/NavigationIcons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface CreateReplyFormProps {
  postId: string
}

export function CreateReplyForm({ postId }: CreateReplyFormProps) {
  const [content, setContent] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    try {
      await createReply({
        postId,
        content,
        mentions: [],
      })
      window.location.reload()
    } catch (error) {
      console.error('Failed to create reply:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-6 border-b-2 border-sepia-200 bg-gradient-to-r from-paper-50 to-sepia-50">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-ink font-serif">
            <span className="living-word">Votre réponse</span>
          </label>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm text-sepia-600 hover:text-sepia-700 font-medium transition-colors px-3 py-1 border-2 border-sepia-300 hover:border-sepia-600"
          >
            <span className="living-word">{showPreview ? 'Modifier' : 'Aperçu'}</span>
          </button>
        </div>

        {showPreview ? (
          <div className="min-h-[150px] p-4 border-2 border-sepia-300 bg-paper-50 prose prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || '*Aperçu de votre réponse...*'}
            </ReactMarkdown>
          </div>
        ) : (
          <Textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Partagez votre réflexion... Le Markdown est supporté !"
            className="min-h-[150px] border-2 border-paper-300 focus:border-sepia-600"
            autoFocus
          />
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting || !content.trim()}
            size="sm"
            className="gap-2 rounded-none"
          >
            {isSubmitting ? (
              <>
                <span className="living-word">Envoi...</span>
              </>
            ) : (
              <>
                <BookIcon className="w-4 h-4" />
                <span className="living-word">Envoyer la réponse</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
