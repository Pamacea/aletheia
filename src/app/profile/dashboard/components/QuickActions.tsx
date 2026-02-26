import { LinkOrnate } from '@/ui/components/LinkOrnate';
import {
  LayoutGridIcon,
  ZapIcon,
  PhilosophersIcon,
  BookOpenIcon,
  MessageSquareIcon,
} from '@/ui/components/CustomIcons';

export function QuickActions() {
  return (
    <section className="card-parchment border-2 border-sepia-300 p-6">
      <h3 className="font-serif text-xl font-semibold text-ink mb-6">
        Actions Rapides
      </h3>

      <div className="space-y-3">
        <LinkOrnate
          href="/conceptuaire"
          living
          className="flex items-center gap-3 p-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all"
        >
          <LayoutGridIcon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">Explorer les concepts</span>
        </LinkOrnate>

        <LinkOrnate
          href="/flashcards"
          living
          className="flex items-center gap-3 p-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all"
        >
          <ZapIcon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">Pratiquer les flashcards</span>
        </LinkOrnate>

        <LinkOrnate
          href="/graphe"
          living
          className="flex items-center gap-3 p-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all"
        >
          <PhilosophersIcon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">Voir le graphe de connaissances</span>
        </LinkOrnate>

        <LinkOrnate
          href="/bibliotheque"
          living
          className="flex items-center gap-3 p-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all"
        >
          <BookOpenIcon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">Bibliothèque philosophique</span>
        </LinkOrnate>

        <LinkOrnate
          href="/agora"
          living
          className="flex items-center gap-3 p-3 border-2 border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all"
        >
          <MessageSquareIcon className="w-5 h-5 text-sepia-600" />
          <span className="font-medium text-ink">Forum - Agora</span>
        </LinkOrnate>
      </div>
    </section>
  );
}
