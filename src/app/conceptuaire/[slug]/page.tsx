import { getConcept } from '@/lib/actions/concepts';
import { notFound } from 'next/navigation';
import { getConceptSchema, getBreadcrumbSchema } from '@/lib/utils/structured-data';
import { ConceptDetailClient } from './components/ConceptDetailClient';
import { JsonLd } from '@/ui/atoms/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const concept = await getConcept(slug);

  if (!concept) {
    return {
      title: 'Concept non trouvé - Aletheia',
    };
  }

  return {
    title: `${concept.name} - Aletheia`,
    description: concept.shortDefinition || concept.definition || 'Concept philosophique détaillé',
  };
}

export default async function ConceptDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const concept = await getConcept(slug);

  if (!concept) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getConceptSchema({
          name: concept.name,
          shortDefinition: concept.shortDefinition,
          definition: concept.definition,
          slug: concept.slug,
          category: concept.category,
          keyAuthors: concept.keyAuthors || undefined,
          etymology: concept.etymology,
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Conceptuaire', href: '/conceptuaire' },
          { name: concept.name, href: `/conceptuaire/${concept.slug}` },
        ])}
      />
      <ConceptDetailClient concept={concept} />
    </>
  );
}
