import Link from 'next/link';
import { getPhilosopherByName } from '@/lib/actions/philosophers';
import { getQuotes } from '@/lib/actions/citations';
import { notFound } from 'next/navigation';
import { generatePhilosopherMetadata } from '@/lib/utils/metadata';
import { getPhilosopherSchema, getBreadcrumbSchema } from '@/lib/utils/structured-data';
import { toSlug } from '@/lib/utils/slugs';
import { SlugHeader } from '@/ui/organisms/SlugHeader';
import { ConnectionSidebar, ConnectionToggle } from '@/ui/organisms/ConnectionSidebar';
import { RelatedContent } from '@/ui/organisms/RelatedContent';
import { PhilosopherClient } from './PhilosopherClient';
import { JsonLd } from '@/ui/atoms/JsonLd';
import {
  UserIcon,
  PhilosophersIcon,
  QuoteIcon,
  BookIcon,
  ClockIcon,
  AwardIcon,
  TrendingUpIcon
} from '@/ui/components/CustomIcons';

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const philosopher = await getPhilosopherByName(decodeURIComponent(name));

  if (!philosopher) {
    return {
      title: 'Philosophe non trouvé - Aletheia',
    };
  }

  return generatePhilosopherMetadata(
    philosopher.name,
    philosopher.biography || undefined,
    philosopher.dates || undefined
  );
}

export default async function PhilosopherPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const philosopherName = decodeURIComponent(name);
  const philosopher = await getPhilosopherByName(philosopherName);

  if (!philosopher) {
    notFound();
  }

  // Get all quotes by this philosopher
  const quotesData = await getQuotes({
    author: philosopherName,
    limit: 100,
  });

  // Prepare connection sidebar data
  const connectionSections = [
    {
      id: 'movements',
      title: 'Courants',
      icon: 'concept' as const,
      items: (philosopher.movements || []).map((mov, i) => ({
        id: `mov-${i}`,
        name: mov.name,
        slug: mov.slug,
        description: mov.shortDescription || mov.period || 'Courant philosophique',
        href: `/courants/${mov.slug}`,
      })),
      defaultOpen: true,
    },
    {
      id: 'works',
      title: 'Œuvres',
      icon: 'source' as const,
      items: philosopher.works.map((work, i) => ({
        id: `work-${i}`,
        name: work.title,
        description: work.year ? `${work.year} - ${work.type}` : work.type,
        href: `/bibliotheque#${toSlug(work.title)}`,
      })),
      defaultOpen: false,
    },
    {
      id: 'periods',
      title: 'Périodes',
      icon: 'concept' as const,
      items: philosopher.periods.map((period, i) => ({
        id: `period-${i}`,
        name: period,
        description: `Période philosophique`,
        href: `/philosophes?period=${encodeURIComponent(period)}`,
      })),
      defaultOpen: false,
    },
  ];

  // Prepare related content for bottom section
  const relatedSections = [
    {
      title: 'Autres philosophes',
      icon: 'philosopher' as const,
      items: [], // Could be populated with related philosophers
      href: '/philosophes',
      linkText: 'Voir tous les philosophes',
    },
    {
      title: 'Courants connexes',
      icon: 'concept' as const,
      items: (philosopher.movements || []).map((mov, i) => ({
        id: `related-mov-${i}`,
        name: mov.name,
        slug: mov.slug,
        description: mov.shortDescription || `Explorez le courant ${mov.name}`,
        type: 'current' as const,
      })),
      href: '/courants',
      linkText: 'Voir tous les courants',
    },
  ];

  // Calculate stats
  const stats = {
    quotes: philosopher.quoteCount,
    works: philosopher.works.length,
    categories: philosopher.movements?.length || 0,
    periods: philosopher.periods.length,
  };

  // Use stored birth/death years from database
  const birthYear = philosopher.birthYear;
  const deathYear = philosopher.deathYear;

  return (
    <>
      <JsonLd
        data={getPhilosopherSchema({
          name: philosopher.name,
          description: philosopher.biography || undefined,
          birthYear: philosopher.birthYear,
          deathYear: philosopher.deathYear,
          biography: philosopher.biography || undefined,
          works: philosopher.works,
          slug: philosopher.slug,
          movements: philosopher.movements,
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Philosophes', href: '/philosophes' },
          { name: philosopher.name, href: `/philosophes/${philosopher.slug}` },
        ])}
      />
      <div className="min-h-screen bg-paper-50">
      {/* Client component for interactivity (includes header) */}
      <PhilosopherClient
        philosopher={philosopher}
        quotesData={quotesData}
        connectionSections={connectionSections}
        relatedSections={relatedSections}
        stats={stats}
        birthYear={birthYear}
        deathYear={deathYear}
      />
    </div>
    </>
  );
}
