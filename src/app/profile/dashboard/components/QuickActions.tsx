import Link from 'next/link';
import { PhilosophersIcon, BookOpenIcon } from '@/ui/icons/NavigationIcons';
import { ZapIcon } from '@/ui/icons/StatusIcons';
import { MessageSquareIcon } from '@/ui/icons/SocialIcons';
import { LayoutGridIcon } from '@/ui/icons/FeatureIcons';

const ACTIONS = [
  { href: '/conceptuaire', label: 'Explorer les concepts', Icon: LayoutGridIcon },
  { href: '/profile/flashcards', label: 'Pratiquer les flashcards', Icon: ZapIcon },
  { href: '/graphe', label: 'Voir le graphe', Icon: PhilosophersIcon },
  { href: '/bibliotheque', label: 'Bibliothèque', Icon: BookOpenIcon },
  { href: '/agora', label: 'Forum Agora', Icon: MessageSquareIcon },
];

export function QuickActions() {
  return (
    <section className="bg-white border-2 border-paper-300 p-4 sm:p-6">
      <h3 className="font-serif text-lg sm:text-xl font-semibold text-ink mb-4">
        Actions Rapides
      </h3>

      <div className="space-y-2">
        {ACTIONS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 p-3 bg-paper-50 border border-paper-300 hover:border-sepia-600 hover:bg-sepia-50 transition-all text-ink hover:text-sepia-700"
          >
            <Icon className="w-5 h-5 text-sepia-600 flex-shrink-0" />
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
