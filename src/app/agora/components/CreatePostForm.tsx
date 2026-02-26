'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusIcon, NetworkIcon, BookIcon } from '@/ui'
import { ArrowLeftIcon } from '@/ui'
import Link from 'next/link'
import { z } from 'zod'
import { createPost } from '@/lib/actions/forum'
import { Button } from '@/ui/atoms/Button'
import { Input } from '@/ui/atoms/Input'
import { Textarea } from '@/ui/atoms/Textarea'
import { Badge } from '@/ui/molecules/Badge'
import { cn } from '@/lib/utils/cn'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const postSchema = z.object({
  title: z.string().min(5, 'Le titre doit contenir au moins 5 caractères'),
  content: z.string().min(20, 'Le contenu doit contenir au moins 20 caractères'),
  categoryId: z.string().optional(),
})

interface Category {
  id: string
  slug: string
  name: string
  description?: string | null
  icon?: string | null
  color?: string | null
  postCount?: number
}

interface CreatePostFormProps {
  categories: Category[]
}

export function CreatePostForm({ categories }: CreatePostFormProps) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoryId, setCategoryId] = useState<string | undefined>()
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddTag = () => {
    const tag = currentTag.trim().toLowerCase()
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag])
      setCurrentTag('')
    }
  }

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validated = postSchema.parse({ title, content, categoryId })

      await createPost({
        title: validated.title,
        content: validated.content,
        categoryId: validated.categoryId,
        tags,
      })

      router.push('/agora')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        console.error('Failed to create post:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              href="/agora"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Nouvelle Discussion</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
        <div className="bg-paper-50 border-2 border-paper-300 border-double-ornate overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-sepia-50 to-paper-50 border-b-2 border-sepia-200 px-8 py-6">
            <h2 className="text-3xl font-serif font-semibold text-ink mb-2">
              Créer une <span className="living-word">nouvelle discussion</span>
            </h2>
            <p className="text-ink-light">
              Partagez vos pensées philosophiques avec la communauté
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-ink mb-3 font-serif">
                Titre <span className="text-red-500">*</span>
              </label>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Ex: Le problème du libre arbitre chez Descartes"
                className={cn(
                  'text-lg border-2 border-paper-300 focus:border-sepia-600',
                  errors.title && 'border-red-500'
                )}
              />
              {errors.title && (
                <p className="text-sm text-red-600 mt-2 font-medium">{errors.title}</p>
              )}
            </div>

            {/* Category - Enhanced Selection */}
            <div>
              <label className="block text-sm font-medium text-ink mb-3 font-serif">
                Catégorie
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCategoryId(undefined)}
                  className={cn(
                    'p-4 border-2 transition-all duration-200 text-left',
                    !categoryId
                      ? 'bg-sepia-50 border-sepia-600 shadow-sm'
                      : 'bg-paper-50 border-paper-300 hover:border-sepia-400 hover:bg-sepia-50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <NetworkIcon className="w-8 h-8 text-sepia-600" />
                    <div>
                      <div className="font-medium text-ink">Toutes catégories</div>
                      <div className="text-sm text-ink-light">Discussion générale</div>
                    </div>
                  </div>
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryId(cat.id)}
                    className={cn(
                      'p-4 border-2 transition-all duration-200 text-left',
                      categoryId === cat.id
                        ? 'bg-sepia-50 border-sepia-600 shadow-sm'
                        : 'bg-paper-50 border-paper-300 hover:border-sepia-400 hover:bg-sepia-50'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <BookIcon className="w-8 h-8 text-sepia-600" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-ink truncate">
                          <span className="living-word">{cat.name}</span>
                        </div>
                        {cat.description && (
                          <div className="text-sm text-ink-light truncate">{cat.description}</div>
                        )}
                      </div>
                      {cat.postCount !== undefined && (
                        <div className="text-xs text-ink-light bg-paper-200 px-2 py-1 border-2 border-paper-300">
                          {cat.postCount}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-ink mb-3 font-serif">
                Tags
              </label>
              <div className="flex gap-3 mb-3">
                <Input
                  value={currentTag}
                  onChange={e => setCurrentTag(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Ajouter un tag (ex: stoïcisme, éthique)"
                  className="flex-1 border-2 border-paper-300 focus:border-sepia-600"
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  disabled={!currentTag.trim()}
                  className="gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span className="living-word">Ajouter</span>
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="gap-1.5 border-2 border-sepia-200">
                      <span className="living-word">#{tag}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-red-600 transition-colors text-ink-light hover:text-red-600"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-ink font-serif">
                  Contenu <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-sm text-sepia-600 hover:text-sepia-700 font-medium px-3 py-1 border-2 border-sepia-300 hover:border-sepia-600 rounded transition-all"
                >
                  <span className="living-word">{showPreview ? 'Modifier' : 'Aperçu'}</span>
                </button>
              </div>

              {showPreview ? (
                <div className="min-h-[300px] p-6 border-2 border-sepia-200 bg-paper-50 prose prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || '*Aperçu du contenu...*'}</ReactMarkdown>
                </div>
              ) : (
                <>
                  <Textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Écrivez votre discussion ici... Le Markdown est supporté !

**Exemples de formatage :**
- **gras** ou *italique*
- # Titres
- > Citations
- [Liens](url)
- Listes
- Et plus encore..."
                    className={cn(
                      'min-h-[300px] font-mono text-sm border-2 border-paper-300 focus:border-sepia-600',
                      errors.content && 'border-red-500'
                    )}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-600 mt-2 font-medium">{errors.content}</p>
                  )}
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t-2 border-sepia-200">
              <Button
                type="submit"
                disabled={isSubmitting || !title.trim() || !content.trim()}
                className="flex-1 gap-2"
              >
                {isSubmitting ? (
                  <span className="living-word">Publication...</span>
                ) : (
                  <>
                    <span>📜</span>
                    <span className="living-word">Publier la discussion</span>
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => router.back()}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
            </div>

            {/* Markdown Help */}
            <div className="bg-paper-100 border-2 border-sepia-200 p-6 text-sm">
              <h4 className="font-serif font-semibold text-ink mb-3">Guide Markdown</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-ink-light">
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300">**gras**</code>
                  <span>→</span>
                  <strong className="text-ink">gras</strong>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300">*italique*</code>
                  <span>→</span>
                  <em className="text-ink">italique</em>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300"># Titre</code>
                  <span>→</span>
                  <span className="text-ink">Titre</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300">&gt; citation</code>
                  <span>→</span>
                  <span className="text-ink">Citation</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300">[texte](url)</code>
                  <span>→</span>
                  <span className="text-ink">Lien</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sepia-600 bg-paper-50 px-2 py-1 border-2 border-paper-300">`code`</code>
                  <span>→</span>
                  <code className="text-ink">code</code>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
