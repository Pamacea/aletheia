'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import { MessageSquareIcon, NetworkIcon, BookIcon } from '@/ui'

export interface Category {
  id: string
  slug: string
  name: string
  description?: string | null
  icon?: string | null
  color?: string | null
  postCount: number
}

interface CategoryListProps {
  categories: Category[]
  selectedCategory?: string
  onCategoryChange?: (slug: string) => void
  className?: string
}

export function CategoryList({
  categories,
  selectedCategory = 'all',
  onCategoryChange,
  className,
}: CategoryListProps) {
  const totalPosts = categories.reduce((sum, cat) => sum + cat.postCount, 0)

  const allCategories = [
    {
      slug: 'all',
      name: 'Toutes les discussions',
      description: 'Explorez tous les sujets philosophiques',
      isAll: true,
      postCount: totalPosts,
    },
    ...categories.map(c => ({ ...c, isAll: false })),
  ]

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {allCategories.map(category => (
        <Link
          key={category.slug}
          href={category.slug === 'all' ? '/agora' : `/agora/${category.slug}`}
          onClick={() => onCategoryChange?.(category.slug)}
          className={cn(
            'group flex items-center gap-4 p-4 border-2 transition-all duration-300 relative',
            selectedCategory === category.slug
              ? 'border-sepia-600 bg-sepia-50 shadow-md'
              : 'border-paper-300 bg-paper-50 hover:border-sepia-400 hover:shadow-sm'
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              'w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform border-2',
              selectedCategory === category.slug
                ? 'bg-sepia-600 text-white border-sepia-600 scale-110'
                : 'bg-sepia-100 text-sepia-700 border-sepia-200 group-hover:bg-sepia-200'
            )}
          >
            {category.isAll ? (
              <NetworkIcon className="w-6 h-6" />
            ) : (
              <BookIcon className="w-6 h-6" />
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3
                className={cn(
                  'font-serif font-semibold transition-colors',
                  selectedCategory === category.slug
                    ? 'text-sepia-800'
                    : 'text-ink group-hover:text-sepia-700'
                )}
              >
                <span className="living-word">{category.name}</span>
              </h3>
              {selectedCategory === category.slug && (
                <span className="px-2 py-0.5 bg-sepia-600 text-white text-xs font-medium">
                  Actif
                </span>
              )}
            </div>
            {category.description && (
              <p
                className={cn(
                  'text-sm line-clamp-1',
                  selectedCategory === category.slug ? 'text-sepia-700' : 'text-ink-light'
                )}
              >
                {category.description}
              </p>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-col items-end gap-1 text-sm text-ink">
            <div className="flex items-center gap-1.5">
              <MessageSquareIcon className="w-4 h-4 text-sepia-600" />
              <span className="font-medium text-sepia-600">
                {category.postCount}
              </span>
            </div>
            <span className="text-xs text-ink-light">
              {category.postCount === 1 ? 'discussion' : 'discussions'}
            </span>
          </div>

          {/* Greek decorative element */}
          {selectedCategory === category.slug && (
            <div className="absolute inset-0 border-2 border-sepia-600 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-sepia-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-sepia-600" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-sepia-600" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-sepia-600" />
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export function CategoryTabs({
  categories,
  selectedCategory = 'all',
  onCategoryChange,
}: {
  categories: Category[]
  selectedCategory?: string
  onCategoryChange?: (slug: string) => void
}) {
  const totalPosts = categories.reduce((sum, cat) => sum + cat.postCount, 0)

  const allCategories = [
    { slug: 'all', name: 'Tous', postCount: totalPosts },
    ...categories.map(c => ({ slug: c.slug, name: c.name, postCount: c.postCount })),
  ]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {allCategories.map(category => (
        <Link
          key={category.slug}
          href={category.slug === 'all' ? '/agora' : `/agora/${category.slug}`}
          onClick={() => onCategoryChange?.(category.slug)}
          className={cn(
            'px-4 py-2 text-sm font-medium font-sans whitespace-nowrap transition-all border-2 flex items-center gap-2',
            selectedCategory === category.slug
              ? 'bg-sepia-600 text-paper-50 border-sepia-600'
              : 'bg-paper-50 text-ink border-paper-300 hover:border-sepia-600 hover:bg-sepia-50'
          )}
        >
          <span className="living-word">{category.name}</span>
          <span
            className={cn(
              'px-2 py-0.5 text-xs',
              selectedCategory === category.slug
                ? 'bg-sepia-700 text-paper-100'
                : 'bg-paper-200 text-ink'
            )}
          >
            {category.postCount}
          </span>
        </Link>
      ))}
    </div>
  )
}
