import Link from 'next/link';
import { getMovements } from '@/lib/actions/courants';
import { getConcepts } from '@/lib/actions/concepts';
import { LinkOrnate } from '@/ui';
import { PhilosophersIcon, CurrentsIcon, TrendingUpIcon, SparklesIcon, ArrowLeftIcon, ConceptIcon } from '@/ui';

export const metadata = {
  title: 'Courants Philosophiques - Aletheia',
  description: 'Explorez les courants philosophiques à travers l\'histoire, de l\'Antiquité à nos jours',
};

export default async function CourantsPage() {
  const movements = await getMovements();
  const allConcepts = await getConcepts();

  // Classify movements by period
  const periods = {
    antique: movements.filter(m =>
      m.period?.toLowerCase().includes('antiquité') ||
      m.period?.match(/^(Ve|IVe|IIIe|IIe|Ier)/) ||
      m.keyPhilosophers.some(p => ['Platon', 'Aristote', 'Socrate', 'Épicure', 'Zénon', 'Sénèque'].includes(p))
    ),
    medieval: movements.filter(m =>
      m.period?.toLowerCase().includes('moyen âge') ||
      m.period?.toLowerCase().includes('médiéval') ||
      m.period?.match(/^(Xe|XIe|XIIe|XIIIe|XIVe|XVe)/) ||
      m.keyPhilosophers.some(p => ['Thomas d\'Aquin', 'Augustin', 'Scot', 'Ockham'].includes(p))
    ),
    modern: movements.filter(m =>
      m.period?.toLowerCase().includes('moderne') ||
      m.period?.match(/^(XVIe|XVIIe|XVIIIe|XIXe)/) ||
      m.keyPhilosophers.some(p => ['Descartes', 'Kant', 'Hume', 'Locke', 'Rousseau', 'Spinoza'].includes(p))
    ),
    contemporary: movements.filter(m =>
      m.period?.toLowerCase().includes('contemporain') ||
      m.period?.match(/^(XXe|XXIe)/) ||
      m.keyPhilosophers.some(p => ['Nietzsche', 'Heidegger', 'Sartre', 'Camus', 'Foucault', 'Derrida'].includes(p))
    ),
  };

  const periodInfo = {
    antique: {
      title: 'Antiquité',
      description: 'Les fondements de la pensée occidentale',
      rune: 'Α',
      period: 'VIIIe s. av. J.-C. – Ve siècle ap. J.-C.',
      color: 'bg-amber-100',
    },
    medieval: {
      title: 'Moyen Âge',
      description: 'La philosophie chrétienne et la synthèse scolastique',
      rune: 'Μ',
      period: 'Ve – XVe siècle',
      color: 'bg-blue-100',
    },
    modern: {
      title: 'Époque Moderne',
      description: 'La rupture cartésienne et les Lumières',
      rune: 'Ε',
      period: 'XVII – XVIIIe siècle',
      color: 'bg-emerald-100',
    },
    contemporary: {
      title: 'Époque Contemporaine',
      description: 'La philosophie du XIXe au XXIe siècle',
      rune: 'Κ',
      period: 'XIXe siècle – aujourd\'hui',
      color: 'bg-purple-100',
    },
  };

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Header - FULL WIDTH */}
      <header className="with-sidebar border-b-2 border-sepia-600 bg-paper-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="living-word font-medium">Retour</span>
            </Link>
            <h1 className="font-serif text-2xl font-semibold text-ink">
              <span className="living-word">Courants Philosophiques</span>
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content - FULL WIDTH */}
      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-7xl living-word text-sepia-600">Κ</span>
          </div>
          <h2 className="font-serif text-4xl font-semibold text-ink mb-4">
            À Travers les <span className="living-word">Âges</span>
          </h2>
          <p className="text-ink-light text-lg max-w-3xl mx-auto mb-8">
            Explorez l'<span className="living-word">évolution</span> de la pensée philosophique, des <span className="living-word">premiers penseurs grecs</span> jusqu'à la philosophie contemporaine.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="h-16 px-6 border-double-ornate bg-paper-200 text-sepia-600 flex items-center gap-3">
              <CurrentsIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-ink-lighter">Courants</div>
                <strong className="text-xl text-ink">{movements.length}</strong>
              </div>
            </div>
            <div className="h-16 px-6 border-double-ornate bg-paper-200 text-sepia-600 flex items-center gap-3">
              <PhilosophersIcon className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-ink-lighter">Philosophes</div>
                <strong className="text-xl text-ink">{new Set(movements.flatMap(m => m.keyPhilosophers)).size}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container - 2/3 WIDTH */}
        <div className="content-2-3">
          {/* Periods */}
          {Object.entries(periods).map(([periodKey, periodMovements]) => {
          if (periodMovements.length === 0) return null;

          const info = periodInfo[periodKey as keyof typeof periodInfo];

          return (
            <section key={periodKey} className="mb-16">
              {/* Period Header */}
              <div className="mb-8 p-6 border-double-ornate bg-paper-200 flex items-center gap-4">
                <div className="w-16 h-16 border-2 border-sepia-600 flex items-center justify-center bg-paper-50">
                  <span className="text-3xl font-serif text-sepia-600">{info.rune}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-semibold text-ink mb-1">
                    {info.title}
                  </h3>
                  <p className="text-ink-light mb-2">{info.description}</p>
                  <p className="text-sm text-sepia-600 italic">{info.period} · {periodMovements.length} courant{periodMovements.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Movements Grid */}
              <div className="asymmetrical-categories-grid mb-8">
                {periodMovements.map((movement: any, index: number) => {
                  // Find related concepts
                  const relatedConcepts = allConcepts.filter(c =>
                    movement.keyConcepts.some((kc: string) =>
                      c.name.toLowerCase().includes(kc.toLowerCase()) ||
                      kc.toLowerCase().includes(c.name.toLowerCase())
                    ) ||
                    (c.tags && c.tags.some((t: string) => movement.name.toLowerCase().includes(t.toLowerCase())))
                  ).slice(0, 3);

                  const sizeVariants = [
                    'md:col-span-1',
                    'md:col-span-2 row-span-2',
                    'md:col-span-1',
                    'md:col-span-1 lg:col-span-2',
                  ];

                  const paddingVariants = [
                    'p-6',
                    'p-8',
                    'p-5',
                    'p-7',
                  ];

                  return (
                    <LinkOrnate
                      key={movement.id}
                      href={`/courants/${movement.slug}`}
                      className={`${sizeVariants[index % sizeVariants.length]} ${paddingVariants[index % paddingVariants.length]} group bg-paper-50 border-2 border-paper-300 hover:shadow-glow-medium hover:border-sepia-600 transition-all duration-300`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-serif text-2xl font-semibold text-ink group-hover:text-sepia-600 transition-colors">
                            <span className="living-word">{movement.name}</span>
                          </h4>
                        </div>
                        {movement.shortDefinition && (
                          <p className="text-ink-light mb-4 line-clamp-3 text-sm">
                            {movement.shortDefinition}
                          </p>
                        )}
                        {movement.period && (
                          <p className="text-sepia-600 text-xs italic mb-4">
                            {movement.period}
                          </p>
                        )}
                      </div>

                      {/* Philosophers */}
                      {movement.keyPhilosophers.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-sepia-600 text-sm mb-2">
                            <PhilosophersIcon className="w-4 h-4" />
                            <span className="font-medium">Philosophes clés</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {movement.keyPhilosophers.slice(0, 3).map((phil: string) => (
                              <span
                                key={phil}
                                className="text-xs bg-paper-200 px-2 py-1 border border-paper-400 text-ink"
                              >
                                {phil}
                              </span>
                            ))}
                            {movement.keyPhilosophers.length > 3 && (
                              <span className="text-xs text-sepia-600 italic">
                                +{movement.keyPhilosophers.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Related Concepts */}
                      {relatedConcepts.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-sepia-600 text-sm mb-2">
                            <ConceptIcon className="w-4 h-4" />
                            <span className="font-medium">Concepts liés</span>
                          </div>
                          <div className="space-y-1">
                            {relatedConcepts.map((concept) => (
                              <span
                                key={concept.id}
                                className="block text-xs bg-paper-200 px-2 py-1 border border-paper-400 text-ink hover:border-sepia-600 hover:text-sepia-600 transition-colors"
                              >
                                {concept.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Arrow indicator */}
                      <div className="flex justify-end">
                        <span className="text-sepia-600 group-hover:translate-x-1 transition-transform text-2xl">
                          →
                        </span>
                      </div>
                    </LinkOrnate>
                  );
                })}
              </div>

              {/* Related Concepts for this period */}
              {periodMovements.length > 0 && (
                <div className="bg-paper-100 border-2 border-paper-300 p-6">
                  <h4 className="font-serif text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                    <ConceptIcon className="w-5 h-5 text-sepia-600" />
                    Concepts clés de {info.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                    {allConcepts
                      .filter(c =>
                        periodMovements.some(m =>
                          m.keyConcepts.some(kc =>
                            c.name.toLowerCase().includes(kc.toLowerCase()) ||
                            kc.toLowerCase().includes(c.name.toLowerCase())
                          )
                        )
                      )
                      .slice(0, 12)
                      .map((concept) => (
                        <Link
                          key={concept.id}
                          href={`/conceptuaire/${concept.slug}`}
                          className="block p-3 bg-white border-2 border-paper-400 hover:border-sepia-600 transition-all group"
                        >
                          <div className="text-sm font-medium text-ink group-hover:text-sepia-600 transition-colors line-clamp-2">
                            {concept.name}
                          </div>
                          {concept.shortDefinition && (
                            <div className="text-xs text-ink-light mt-1 line-clamp-2">
                              {concept.shortDefinition}
                            </div>
                          )}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}

        {/* Empty State */}
        {movements.length === 0 && (
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              <div className="mb-8 inline-block p-6 bg-paper-200 border-2 border-dashed border-sepia-300">
                <CurrentsIcon className="w-16 h-16 text-sepia-600 opacity-60" />
              </div>
              <h3 className="text-3xl font-serif text-ink mb-4">Aucun courant disponible</h3>
              <p className="text-ink-light text-lg mb-8">
                Les courants philosophiques seront bientôt ajoutés.
              </p>
              <div className="bg-paper-100 border-2 border-paper-300 p-6 mb-6">
                <p className="font-semibold text-ink mb-3 flex items-center justify-center gap-2">
                  💡 Pour ajouter des courants :
                </p>
                <div className="text-sm text-ink-light space-y-2">
                  <p>Configurez votre base de données avec</p>
                  <code className="bg-paper-200 px-3 py-1.5 text-xs font-mono">npm run db:seed:obsidian</code>
                </div>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-paper-50 text-sepia-600 hover:text-sepia-700 hover:bg-paper-100 border-2 border-paper-300 hover:border-sepia-600 transition-all duration-200"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="living-word font-medium">Retour à l'accueil</span>
              </Link>
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
