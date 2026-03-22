import { LinkOrnate } from '@/ui/components/LinkOrnate';
import { BrainIcon } from '@/ui/icons/FeatureIcons';

interface RecommendationsSectionProps {
  recommendations: {
    related: any[];
    fromCategories: any[];
  };
}

export function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <section className="bg-white border-2 border-paper-300 p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-6">
        <BrainIcon className="w-6 h-6 text-sepia-600" />
        <h3 className="font-serif text-xl font-semibold text-ink">
          Recommandations
        </h3>
      </div>

      {(recommendations.related.length > 0 || recommendations.fromCategories.length > 0) ? (
        <div className="space-y-4">
          {recommendations.related.slice(0, 4).map((concept: any) => (
            <LinkOrnate
              key={concept.id}
              href={`/conceptuaire/${concept.slug}`}
              living
              className="block p-3 border-2 border-paper-300 hover:border-sepia-600 hover:shadow-md transition-all"
            >
              <span
                className="inline-block px-2 py-0.5 text-xs font-medium mb-1"
                style={{
                  backgroundColor: concept.category.color || '#d4bc8f',
                  color: '#2d2b29',
                }}
              >
                {concept.category.name}
              </span>
              <h4 className="font-serif font-semibold text-ink text-sm">{concept.name}</h4>
              <p className="text-xs text-ink-light mt-1 line-clamp-2">{concept.shortDefinition}</p>
            </LinkOrnate>
          ))}

          {recommendations.fromCategories.slice(0, 2).map((concept: any) => (
            <LinkOrnate
              key={concept.id}
              href={`/conceptuaire/${concept.slug}`}
              living
              className="block p-3 border-2 border-paper-300 hover:border-sepia-600 hover:shadow-md transition-all"
            >
              <span
                className="inline-block px-2 py-0.5 text-xs font-medium mb-1"
                style={{
                  backgroundColor: concept.category.color || '#d4bc8f',
                  color: '#2d2b29',
                }}
              >
                {concept.category.name}
              </span>
              <h4 className="font-serif font-semibold text-ink text-sm">{concept.name}</h4>
              <p className="text-xs text-ink-light mt-1 line-clamp-2">{concept.shortDefinition}</p>
            </LinkOrnate>
          ))}
        </div>
      ) : (
        <div className="text-center py-6">
          <BrainIcon className="w-10 h-10 mx-auto mb-3 text-sepia-400" />
          <p className="text-sm text-ink-light">
            Maîtrisez plus de concepts pour recevoir des recommandations personnalisées
          </p>
        </div>
      )}
    </section>
  );
}
