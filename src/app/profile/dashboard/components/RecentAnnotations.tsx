import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { MessageSquareIcon } from '@/ui/components/CustomIcons';

interface RecentAnnotationsProps {
  recentAnnotations: any[];
}

export function RecentAnnotations({ recentAnnotations }: RecentAnnotationsProps) {
  return (
    <section className="card-parchment border-2 border-sepia-300 p-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquareIcon className="w-6 h-6 text-sepia-600" />
        <h3 className="font-serif text-xl font-semibold text-ink">
          Dernières Annotations
        </h3>
      </div>

      {recentAnnotations.length > 0 ? (
        <div className="space-y-4">
          {recentAnnotations.map((annotation: any) => (
            <div
              key={annotation.id}
              className="p-4 border-2 border-paper-300 bg-paper-50"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  {annotation.text && (
                    <LinkOrnate
                      href={`/bibliotheque/${annotation.text.slug}`}
                      living
                      className="text-sm font-semibold text-sepia-600 hover:underline"
                    >
                      {annotation.text.title}
                      {annotation.chapter && ` - ${annotation.chapter.title}`}
                    </LinkOrnate>
                  )}
                  {annotation.quote && (
                    <p className="text-sm italic text-ink-light mt-1 line-clamp-2">
                      "{annotation.quote.text}"
                    </p>
                  )}
                </div>
                <span className="text-xs text-ink-lighter whitespace-nowrap ml-2">
                  {new Date(annotation.createdAt).toLocaleDateString('fr-FR')}
                </span>
              </div>
              {annotation.content && (
                <p className="text-sm text-ink line-clamp-2">{annotation.content}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <MessageSquareIcon className="w-12 h-12 mx-auto mb-4 text-sepia-400" />
          <p className="text-ink font-medium mb-2">Aucune annotation pour le moment</p>
          <p className="text-sm text-ink-light mb-4">
            Ajoutez des notes pendant vos lectures pour vous souvenir des idées importantes
          </p>
          <LinkOrnate
            href="/bibliotheque"
            living
            className="inline-flex items-center gap-2 px-4 py-2 bg-sepia-600 text-paper-50 hover:bg-sepia-700 transition-colors"
          >
            Explorer la bibliothèque
          </LinkOrnate>
        </div>
      )}
    </section>
  );
}
