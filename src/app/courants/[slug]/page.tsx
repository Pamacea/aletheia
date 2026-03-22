import { prisma } from '@/lib/db/prisma';
import { getCurrentDetails } from '@/lib/actions/courants';
import { getCourantSchema, getBreadcrumbSchema } from '@/lib/utils/structured-data';
import { CurrentPageClient } from './components/CurrentPageClient';
import { JsonLd } from '@/ui/atoms/JsonLd';
import { BackButton } from '@/ui/components/BackButton';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const courant = await getCurrentDetails(slug);

  if (!courant) {
    return {
      title: 'Courant non trouvé - Aletheia',
    };
  }

  return {
    title: `${courant.name} - Courant Philosophique | Aletheia`,
    description: courant.description || `Découvrez le courant philosophique ${courant.name}`,
    openGraph: {
      title: `${courant.name} - Courant Philosophique`,
      description: courant.description,
      type: 'article',
    },
  };
}

export default async function CurrentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const current = await getCurrentDetails(slug);

  if (!current) {
    return (
      <div className="min-h-screen bg-paper-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-ink-light mb-4">Courant non trouvé</p>
          <BackButton href="/courants" label="Retour aux courants" />
        </div>
      </div>
    );
  }

  // Fetch related currents for the "Related Content" section
  const relatedCurrents = await prisma.category.findMany({
    where: {
      slug: { not: slug },
      concepts: { some: {} },
    },
    take: 6,
    include: {
      _count: {
        select: { concepts: true },
      },
    },
  });

  return (
    <>
      <JsonLd
        data={getCourantSchema({
          name: current.name,
          shortDescription: current.description,
          period: current.period,
          slug: current.slug,
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Courants', href: '/courants' },
          { name: current.name, href: `/courants/${current.slug}` },
        ])}
      />
      <CurrentPageClient current={current} relatedCurrents={relatedCurrents} />
    </>
  );
}
