import { ReactNode } from 'react'

interface ContentLayoutProps {
  children: ReactNode
  sidebar?: ReactNode | null
}

/**
 * Layout 2/3 standard - Contenu principal + sidebar droite
 *
 * @example
 * <ContentLayout sidebar={<SidebarContent />}>
 *   <MainContent />
 * </ContentLayout>
 */
export function ContentLayout({ children, sidebar }: ContentLayoutProps) {
  if (!sidebar) {
    return <div className="w-full">{children}</div>
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content - 2/3 */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

      {/* Sidebar - 1/3 */}
      <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
        {sidebar}
      </aside>
    </div>
  )
}
