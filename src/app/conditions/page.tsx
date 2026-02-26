import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation - Aletheia',
  description: 'Conditions générales d\'utilisation de la plateforme Aletheia.',
  openGraph: {
    title: 'Conditions Générales - Aletheia',
    description: 'CGU de la plateforme',
  },
};

export default function TermsPage() {
  const lastUpdate = '26 février 2025';

  return (
    <div className="min-h-screen bg-paper-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="text-lg text-sepia-600">
            CGU de la plateforme Aletheia
          </p>
          <p className="text-sm text-ink-light mt-2">
            Dernière mise à jour : {lastUpdate}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Préambule */}
          <section className="p-6 bg-white border-2 border-paper-300">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Préambule
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Les présentes Conditions Générales d&apos;Utilisation (ci-après dénommées « CGU ») régissent
                l&apos;accès et l&apos;utilisation de la plateforme <strong className="text-ink">Aletheia</strong>,
                mise à disposition par son propriétaire, <strong className="text-ink">Oalacea - Yanis Dessaint</strong> (ci-après dénommé « l&apos;Éditeur »).
              </p>
              <p>
                En accédant à la plateforme Aletheia et en l&apos;utilisant, l&apos;utilisateur reconnaît avoir lu,
                compris et accepté sans réserve les présentes CGU.
              </p>
              <p className="p-4 bg-sepia-50 border-2 border-sepia-300 text-sm">
                <strong className="text-ink">IMPORTANT :</strong> L&apos;utilisation d&apos;Aletheia est réservée aux personnes
                majeures ou aux mineurs munis de l&apos;autorisation de leurs parents ou tuteurs légaux.
              </p>
            </div>
          </section>

          {/* Article 1 - Définitions */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 1 - Définitions
            </h2>
            <div className="text-ink-light leading-relaxed">
              <p>Dans les présentes CGU, les termes suivants ont la signification qui leur est donnée ci-dessous :</p>
              <dl className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Plateforme</dt>
                  <dd className="text-sm mt-1">L&apos;ensemble des services proposés par Aletheia via le site web.</dd>
                </div>
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Utilisateur</dt>
                  <dd className="text-sm mt-1">Toute personne accédant et utilisant la plateforme.</dd>
                </div>
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Compte</dt>
                  <dd className="text-sm mt-1">Espace personnel de l&apos;utilisateur après inscription.</dd>
                </div>
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Contenu</dt>
                  <dd className="text-sm mt-1">Données, informations, textes philosophiques présents sur la plateforme.</dd>
                </div>
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Annotation</dt>
                  <dd className="text-sm mt-1">Note personnelle ajoutée par l&apos;utilisateur sur un contenu.</dd>
                </div>
                <div className="p-3 bg-paper-50 border border-paper-400 rounded">
                  <dt className="font-semibold text-ink">Données Personnelles</dt>
                  <dd className="text-sm mt-1">Toute information permettant d&apos;identifier l&apos;utilisateur.</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Article 2 - Objet */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 2 - Objet
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Les présentes CGU ont pour objet de définir les conditions dans lesquelles l&apos;Éditeur met
                à la disposition des Utilisateurs la plateforme Aletheia et les modalités d&apos;accès et
                d&apos;utilisation de celle-ci.
              </p>
              <p>
                La plateforme Aletheia a pour objet de proposer un service d&apos;étude philosophique comprenant :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Un conceptuaire philosophique organisé et interconnecté</li>
                <li>Un graphe de connaissances interactif</li>
                <li>Un système de recherche sémantique</li>
                <li>Des fonctionnalités d&apos;annotations personnelles</li>
                <li>Un système de répétition espacée pour l&apos;apprentissage</li>
              </ul>
            </div>
          </section>

          {/* Article 3 - Accès à la plateforme */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 3 - Accès à la Plateforme
            </h2>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">3.1. Accès gratuit</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                L&apos;accès à la plateforme Aletheia est <strong className="text-ink">gratuit</strong>. L&apos;Éditeur se réserve
                la possibilité de faire évoluer ce modèle économique à l&apos;avenir, en informant préalablement
                les Utilisateurs.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">3.2. Inscription</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                Pour accéder à certaines fonctionnalités de la plateforme (annotations, système de répétition
                espacée), l&apos;Utilisateur doit s&apos;inscrire en créant un compte.
              </p>
              <p>
                L&apos;inscription s&apos;effectue via un service d&apos;authentification tiers (Discord, GitHub) utilisant
                le protocole OAuth 2.0 sécurisé. L&apos;Utilisateur garantit la véracité des informations fournies
                lors de l&apos;inscription.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">3.3. Identifiants de connexion</h3>
            <div className="text-ink-light leading-relaxed space-y-2">
              <p>
                L&apos;Utilisateur est responsable de la confidentialité de ses identifiants de connexion et de
                toute utilisation de son compte. L&apos;Éditeur ne saurait être tenu responsable en cas d&apos;utilisation
                frauduleuse du compte de l&apos;Utilisateur résultant de la non-protection de ses identifiants.
              </p>
            </div>
          </section>

          {/* Article 4 - Propriété intellectuelle */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 4 - Propriété Intellectuelle
            </h2>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">4.1. Contenu de la plateforme</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                L&apos;ensemble du contenu de la plateforme Aletheia (textes philosophiques, biographies, définitions,
                structure, design, code source) est protégé par le droit d&apos;auteur (Code de la propriété
                intellectuelle, Livres I et II).
              </p>
              <p className="p-4 bg-sepia-50 border-2 border-sepia-300 rounded text-sm">
                <strong className="text-ink">INTERDICTION FORMELLE :</strong> Toute reproduction, représentation,
                modification ou exploitation du contenu de la plateforme, même partielle, est strictement
                interdite sans l&apos;autorisation écrite préalable de l&apos;Éditeur.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">4.2. Code source</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                Le code source de la plateforme Aletheia est la <strong className="text-ink">propriété exclusive</strong>
                de l&apos;Éditeur. Il est formellement interdit de :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Copier, reproduire ou extraire le code source</li>
                <li>Reverse engineer, décompiler ou désassembler la plateforme</li>
                <li>Utiliser le code source comme base pour un projet concurrent ou dérivé</li>
                <li>Revendre ou distribuer le code source</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">4.3. Données philosophiques</h3>
            <div className="text-ink-light leading-relaxed space-y-2">
              <p>
                Les données philosophiques (concepts, biographies, citations) sont la propriété exclusive 
                de l&apos;Éditeur(interdiction d'extraire les données à partir d'Aletheia). Toute extraction de ces données à des fins commerciales ou de redistribution
                est formellement interdite.
              </p>
            </div>
          </section>

          {/* Article 5 - Obligations de l'utilisateur */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 5 - Obligations de l&apos;Utilisateur
            </h2>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">5.1. Utilisation conforme</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                L&apos;Utilisateur s&apos;engage à utiliser la plateforme conformément aux présentes CGU et à la
                réglementation en vigueur, notamment :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ne pas publier de contenu illicite, diffamatoire, ou portant atteinte aux droits de tiers</li>
                <li>Ne pas tenter d&apos;interrompre ou de perturber le fonctionnement de la plateforme</li>
                <li>Ne pas accéder à des parties de la plateforme non accessibles sans autorisation</li>
                <li>Ne pas utiliser la plateforme à des fins commerciales sans autorisation</li>
                <li>Respecter les droits de propriété intellectuelle de l&apos;Éditeur</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">5.2. Annotations personnelles</h3>
            <div className="text-ink-light leading-relaxed space-y-2">
              <p>
                L&apos;Utilisateur reste propriétaire des annotations qu&apos;il ajoute sur la plateforme. En utilisant
                cette fonctionnalité, il autorise l&apos;Éditeur à stocker et afficher ces annotations dans le cadre
                de son compte personnel.
              </p>
            </div>
          </section>

          {/* Article 6 - Données personnelles */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 6 - Données Personnelles
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                La collecte et le traitement des données personnelles des Utilisateurs sont régis par notre
                <a href="/confidentialite" className="text-sepia-600 underline mx-1">Politique de Confidentialité</a>,
                conforme au RGPD (Règlement UE 2016/679) et à la loi française Informatique et Libertés.
              </p>
              <p>
                L&apos;Éditeur s&apos;engage à mettre en œuvre toutes les mesures techniques et organisationnelles
                appropriées pour garantir un niveau de sécurité adapté aux risques.
              </p>
            </div>
          </section>

          {/* Article 7 - Responsabilité */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 7 - Responsabilité
            </h2>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">7.1. Responsabilité de l&apos;Éditeur</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>
                L&apos;Éditeur s&apos;efforce d&apos;assurer l&apos;accessibilité de la plateforme 24h/24, 7j/7. Cependant,
                il peut être amené à suspendre ou interrompre l&apos;accès à la plateforme pour maintenance,
                mise à jour ou modification du contenu, sans préavis et sans que cela puisse donner lieu
                à aucune indemnité.
              </p>
              <p>
                L&apos;Éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant
                de l&apos;utilisation de la plateforme, y compris la perte de données, de profits ou de toute
                autre perte immatérielle.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">7.2. Liens hypertextes</h3>
            <div className="text-ink-light leading-relaxed space-y-2">
              <p>
                La plateforme peut contenir des liens vers des sites tiers. L&apos;Éditeur n&apos;exerce aucun contrôle
                sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>
          </section>

          {/* Article 8 - Modification des CGU */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 8 - Modification des CGU
            </h2>
            <div className="text-ink-light leading-relaxed">
              <p>
                L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
                entreront en vigueur dès leur publication en ligne. L&apos;Utilisateur est invité à consulter
                régulièrement la présente page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>
          </section>

          {/* Article 9 - Durée et résiliation */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 9 - Durée et Résiliation
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Les présentes CGU sont conclues pour une durée indéterminée à compter de l&apos;acceptation
                par l&apos;Utilisateur lors de son inscription sur la plateforme.
              </p>
              <p>
                L&apos;Utilisateur peut résilier son compte à tout moment, en cliquant sur le lien prévu à cet
                effet dans son espace personnel ou en contactant le support : oalacea@proton.me
              </p>
              <p>
                L&apos;Éditeur se réserve le droit de suspendre ou résilier le compte d&apos;un Utilisateur en cas
                de violation des présentes CGU, sans préavis et sans indemnité.
              </p>
            </div>
          </section>

          {/* Article 10 - Loi applicable et juridiction */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Article 10 - Loi Applicable et Juridiction
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Les présentes CGU sont régies par le <strong className="text-ink">droit français</strong>.
              </p>
              <p>
                En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGU, et à défaut
                d&apos;accord amiable, le litige sera porté devant le tribunal compétent selon les règles
                de droit commun.
              </p>
              <p className="text-sm">
                <strong className="text-ink">Médiation :</strong> Conformément aux articles L.612-1 et suivants du Code
                de la consommation, l&apos;Utilisateur a le droit de recourir à un médiateur de la consommation
                en cas de litige.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 bg-sepia-50 border-2 border-sepia-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Contact
            </h2>
            <div className="text-ink-light leading-relaxed">
              <p>
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="mt-4 space-y-2">
                <p><strong className="text-ink">Email :</strong> <a href="mailto:oalacea@proton.me" className="text-sepia-600 underline">oalacea@proton.me</a></p>
                <p><strong className="text-ink">Éditeur :</strong> Oalacea - Yanis Dessaint</p>
                <p><strong className="text-ink">Adresse postale :</strong> Non fournie</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
