import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Aletheia',
  description: 'Découvrez Aletheia, une plateforme d\'étude philosophique avec graphe de connaissances interactif et système de répétition espacée.',
  openGraph: {
    title: 'À propos - Aletheia',
    description: 'Une plateforme d\'étude philosophique innovante',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper-50">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            À Propos d&apos;ΑΛΗΘΕΙΑ
          </h1>
          <p className="text-xl text-sepia-600 italic">
            La vérité dévoilée
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Origin */}
          <section className="mb-12 p-8 bg-white border-2 border-paper-300">
            <h2 className="text-3xl font-semibold text-ink mb-6 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              L&apos;Origine du Projet
            </h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                <strong className="text-ink">Aletheia (ἀλήθεια)</strong> est un mot grec ancien qui signifie
                <em className="text-sepia-600"> « vérité »</em> ou <em className="text-sepia-600">« dévoilement »</em>.
                Chez les présocratiques, et particulièrement chez Parménide, ce terme désigne la réalité
                véritable, par opposition à l&apos;opinion ou à l&apos;apparence.
              </p>
              <p>
                Ce projet est né d&apos;une passion pour la philosophie et d&apos;une volonté de créer un
                outil d&apos;étude qui rompt avec les limites de la pensée linéaire. La compréhension
                philosophique ne suit pas un chemin rectiligne : elle se construit par associations,
                par connexions, par réseaux de concepts interdépendants.
              </p>
              <p>
                <strong className="text-ink">Aletheia</strong> propose une approche non-linéaire de l&apos;étude philosophique,
                permettant à chaque esprit curieux de suivre son propre chemin à travers la pensée occidentale.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12 p-8 bg-white border-2 border-paper-300">
            <h2 className="text-3xl font-semibold text-ink mb-6 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Ce Que Propose Aletheia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-paper-50 border border-paper-400 ">
                <h3 className="text-xl font-semibold text-sepia-600 mb-2 font-serif">
                  Conceptuaire Vivant
                </h3>
                <p className="text-ink-light">
                  Une collection organisée de concepts philosophiques, chacun avec ses définitions,
                  ses origines étymologiques et ses connexions avec d&apos;autres idées.
                </p>
              </div>

              <div className="p-4 bg-paper-50 border border-paper-400 ">
                <h3 className="text-xl font-semibold text-sepia-600 mb-2 font-serif">
                  Graphe de Connaissances
                </h3>
                <p className="text-ink-light">
                  Visualisez les relations entre philosophes, concepts et courants à travers
                  un graphe interactif et navigable.
                </p>
              </div>

              <div className="p-4 bg-paper-50 border border-paper-400 ">
                <h3 className="text-xl font-semibold text-sepia-600 mb-2 font-serif">
                  Exploration Sémantique
                </h3>
                <p className="text-ink-light">
                  Un moteur de recherche intelligent qui comprend les connexions conceptuelles
                  et vous suggère des pistes d&apos;exploration.
                </p>
              </div>

              <div className="p-4 bg-paper-50 border border-paper-400 ">
                <h3 className="text-xl font-semibold text-sepia-600 mb-2 font-serif">
                  Parcours Non-Linéaire
                </h3>
                <p className="text-ink-light">
                  Suivez votre curiosité à travers un réseau de connaissances, sans contrainte
                  de progression linéaire imposée.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-12 p-8 bg-white border-2 border-paper-300 -lg">
            <h2 className="text-3xl font-semibold text-ink mb-6 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Philosophie du Projet
            </h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                Aletheia repose sur la conviction que <strong className="text-ink">la compréhension philosophique
                est un processus organique et non mécanique</strong>. Les systèmes éducatifs traditionnels
                imposent souvent une progression linéaire — chronologique ou thématique — qui ne reflète
                pas la manière dont l&apos;esprit humain construit réellement la connaissance.
              </p>
              <p>
                En permettant une exploration libre et associative, Aletheia invite à redécouvrir
                la joie de la pensée philosophique : celle qui consiste à suivre un fil conceptuel
                là où il mène, à découvrir des connexions insoupçonnées, à construire sa propre
                compréhension du monde des idées.
              </p>
              <blockquote className="border-l-4 border-sepia-600 pl-4 italic text-sepia-700">
                « La pensée est un filet qui capture ce qu&apos;elle a elle-même tissé. »
                <br />— Friedrich Nietzsche
              </blockquote>
            </div>
          </section>

          {/* Technical */}
          <section className="mb-12 p-8 bg-white border-2 border-paper-300">
            <h2 className="text-3xl font-semibold text-ink mb-6 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Aspects Techniques
            </h2>
            <div className="text-ink-light leading-relaxed space-y-4">
              <p>
                Aletheia est construite avec des technologies web modernes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ink">Next.js 16</strong> avec App Router et React Server Components</li>
                <li><strong className="text-ink">TypeScript</strong> en mode strict pour la fiabilité du code</li>
                <li><strong className="text-ink">Prisma</strong> comme ORM pour PostgreSQL</li>
                <li><strong className="text-ink">React Flow</strong> pour la visualisation du graphe</li>
                <li><strong className="text-ink">TanStack Query</strong> pour la gestion d&apos;état</li>
              </ul>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="p-6 bg-sepia-50 border-2 border-sepia-300">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Notice Légale
            </h2>
            <div className="text-ink-light text-sm leading-relaxed space-y-2">
              <p>
                <strong className="text-ink">Propriétaire :</strong> Oalacea
              </p>
              <p>
                <strong className="text-ink">Année de création :</strong> 2026
              </p>
              <p>
                <strong className="text-ink">Hébergement :</strong> Paris [[OVH][Cloudflare][Vercel]]
              </p>
              <p className="mt-4 text-sepia-700">
                L&apos;ensemble du code source, des données philosophiques et du design de cette plateforme
                est la propriété exclusive de son créateur. Toute reproduction, copie ou utilisation
                à des fins commerciales est formellement interdite. Consultez nos
                <a href="/conditions" className="text-sepia-600 underline mx-1">Conditions Générales</a>
                et notre
                <a href="/confidentialite" className="text-sepia-600 underline mx-1">Politique de Confidentialité</a>
                pour plus d&apos;informations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
