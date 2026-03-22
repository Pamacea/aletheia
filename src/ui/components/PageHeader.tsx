import Link from 'next/link'
import { ArrowLeftIcon } from '@/ui/icons/UIIcons'

interface PageHeaderProps {
  title: string
  backHref: string
  backLabel?: string
}

/**
 * Header standard avec bouton Retour et titre centré
 * Pattern utilisé sur agora/, conceptuaire, graphe, etc.
 *
 * @example
 * <PageHeader title="Conceptuaire" backHref="/" />
 */
export function PageHeader({ title, backHref, backLabel = 'Retour' }: PageHeaderProps) {
  return (
    <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-2/3 mx-auto">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200 flex-shrink-0"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="living-word font-medium hidden sm:inline">{backLabel}</span>
          </Link>
          <h1 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-ink truncate">
            <span className="living-word">{title}</span>
          </h1>
          <div className="w-10 sm:w-20 flex-shrink-0" />
        </div>
      </div>
    </header>
  )
}
