import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Aletheia',
  description: 'Notre politique de confidentialité conforme au RGPD (Règlement UE 2016/679).',
  openGraph: {
    title: 'Politique de Confidentialité - Aletheia',
    description: 'Protection de vos données personnelles',
  },
};

export default function PrivacyPage() {
  const lastUpdate = '26 février 2025';

  return (
    <div className="min-h-screen bg-paper-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-sepia-600">
            Conforme au RGPD (Règlement UE 2016/679)
          </p>
          <p className="text-sm text-ink-light mt-2">
            Dernière mise à jour : {lastUpdate}
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              1. Introduction
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                <strong className="text-ink">Le responsable du traitement</strong> (ci-après dénommé « nous » ou « Aletheia »)
                attache une grande importance à la protection de vos données personnelles.
              </p>
              <p>
                Cette politique de confidentialité vise à vous informer de manière transparente sur la manière
                dont nous collectons, traitons et protégeons vos données personnelles lorsque vous utilisez
                la plateforme Aletheia.
              </p>
              <p>
                En tant que responsable du traitement, nous nous conformons aux obligations du
                <strong className="text-ink"> Règlement (UE) 2016/679</strong> (RGPD) et de la loi française n°78-17 du 6 janvier 1978.
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              2. Données Personnelles Collectées
            </h2>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">2.1. Données collectées lors de l&apos;inscription</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>Lorsque vous créez un compte sur Aletheia, nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-ink">Adresse email</strong> : utilisée comme identifiant unique et pour les communications</li>
                <li><strong className="text-ink">Nom d&apos;utilisateur</strong> : pseudonyme affiché sur la plateforme</li>
                <li><strong className="text-ink">Données de provenance</strong> : fournies par le tiers d&apos;authentification (Discord, GitHub)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">2.2. Données d&apos;authentification OAuth</h3>
            <div className="text-ink-light leading-relaxed space-y-2 mb-4">
              <p>Nous utilisons des services d&apos;authentification tiers (Discord, GitHub). Les données collectées via ces services sont limitées à :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identifiant unique du compte tiers</li>
                <li>Nom d&apos;affichage public</li>
                <li>Adresse email (si fournie)</li>
                <li>URL de l&apos;avatar (si fournie)</li>
              </ul>
              <p className="text-sm text-sepia-700">
                Note : Nous ne collectons PAS vos mots de passe. L&apos;authentification est entièrement gérée
                par les tiers (Discord, GitHub) via le protocole OAuth 2.0 sécurisé.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-sepia-600 mb-3">2.3. Données générées par votre activité</h3>
            <div className="text-ink-light leading-relaxed space-y-2">
              <p>Votre activité sur la plateforme peut générer les données suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-ink">Annotations personnelles</strong> : notes que vous ajoutez aux fiches</li>
                <li><strong className="text-ink">Progression d&apos;apprentissage</strong> : statistiques de révision (système SM-2)</li>
                <li><strong className="text-ink">Historique de navigation</strong> : concepts consultés (pour améliorer vos recommandations)</li>
                <li><strong className="text-ink">Données de connexion</strong> : adresse IP, user agent, timestamps (pour la sécurité)</li>
              </ul>
            </div>
          </section>

          {/* Finalités */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              3. Finalités du Traitement
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>Vos données personnelles sont utilisées pour les finalités suivantes :</p>

              <div className="space-y-4">
                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">A. Gestion de votre compte</h4>
                  <p className="text-sm">
                    Base légale : <strong className="text-sepia-600">Exécution du contrat</strong> (article 6.1.b du RGPD)
                  </p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">B. Personnalisation de l&apos;expérience</h4>
                  <p className="text-sm">
                    Base légale : <strong className="text-sepia-600">Intérêt légitime</strong> (article 6.1.f du RGPD)
                  </p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">C. Amélioration de la plateforme</h4>
                  <p className="text-sm">
                    Base légale : <strong className="text-sepia-600">Intérêt légitime</strong> (article 6.1.f du RGPD)
                  </p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">D. Sécurité du service</h4>
                  <p className="text-sm">
                    Base légale : <strong className="text-sepia-600">Obligation légale</strong> (article 6.1.c du RGPD)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Destinataires */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              4. Destinataires des Données
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                <strong className="text-ink">Accès limité</strong> : Vos données ne sont pas transmises à des tiers à des fins commerciales.
              </p>

              <h3 className="text-xl font-semibold text-sepia-600 mb-2">4.1. Sous-traitants</h3>
              <p className="mb-3">
                Nous faisons appel aux sous-traitants suivants pour le fonctionnement du service :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li><strong className="text-ink">Neon Technology</strong> : hébergement de la base de données (UE)</li>
                <li><strong className="text-ink">Vercel Inc.</strong> : hébergement de l&apos;application (UE/États-Unis, Privacy Shield)</li>
                <li><strong className="text-ink">Discord/GitHub</strong> : authentification OAuth (UE/États-Unis)</li>
              </ul>
            </div>
          </section>

          {/* Conservation */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              5. Durée de Conservation
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-paper-50 border border-paper-400 rounded">
                  <span className="font-medium">Compte utilisateur</span>
                  <span className="text-sepia-600">Durée de la relation contractuelle + 3 ans</span>
                </div>
                <div className="flex justify-between p-3 bg-paper-50 border border-paper-400 rounded">
                  <span className="font-medium">Annotations personnelles</span>
                  <span className="text-sepia-600">Durée du compte</span>
                </div>
                <div className="flex justify-between p-3 bg-paper-50 border border-paper-400 rounded">
                  <span className="font-medium">Progression d&apos;apprentissage</span>
                  <span className="text-sepia-600">Durée du compte</span>
                </div>
                <div className="flex justify-between p-3 bg-paper-50 border border-paper-400 rounded">
                  <span className="font-medium">Logs de connexion</span>
                  <span className="text-sepia-600">12 mois maximum</span>
                </div>
                <div className="flex justify-between p-3 bg-paper-50 border border-paper-400 rounded">
                  <span className="font-medium">Cookies</span>
                  <span className="text-sepia-600">13 mois (consentement renouvelable)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Droits RGPD */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              6. Vos Droits (RGPD)
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit d&apos;accès (Art. 15)</h4>
                  <p className="text-sm">Vous pouvez demander une copie de vos données personnelles.</p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit de rectification (Art. 16)</h4>
                  <p className="text-sm">Vous pouvez demander la correction de données inexactes.</p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit à l&apos;effacement (Art. 17)</h4>
                  <p className="text-sm">« Droit à l&apos;oubli » : vous pouvez demander la suppression de vos données.</p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit à la limitation (Art. 18)</h4>
                  <p className="text-sm">Vous pouvez demander que nous cessions de traiter vos données.</p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit à la portabilité (Art. 20)</h4>
                  <p className="text-sm">Vous pouvez recevoir vos données dans un format structuré.</p>
                </div>

                <div className="p-4 bg-paper-50 border border-paper-400 rounded">
                  <h4 className="font-semibold text-ink mb-2">Droit d&apos;opposition (Art. 21)</h4>
                  <p className="text-sm">Vous pouvez vous opposer au traitement pour intérêt légitime.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-sepia-50 border-2 border-sepia-300 rounded">
                <h4 className="font-semibold text-ink mb-2">Pour exercer vos droits</h4>
                <p className="text-sm">
                  Envoyez un email à : <a href="mailto:oalacea@proton.me" className="text-sepia-600 underline">oalacea@proton.me</a><br />
                  Nous répondrons à votre demande dans un délai de <strong className="text-ink">30 jours</strong> conformément à l&apos;article 12.3 du RGPD.
                </p>
              </div>

              <p className="text-sm mt-4">
                En cas de refus de répondre à votre demande, vous avez le droit d&apos;introduire une
                réclamation auprès de la <strong className="text-ink">CNIL</strong> :
                <a href="https://www.cnil.fr" className="text-sepia-600 underline mx-1" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="p-6 bg-white border-2 border-paper-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              7. Sécurité des Données
            </h2>
            <div className="text-ink-light leading-relaxed space-y-3">
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour garantir
                un niveau de sécurité adapté au risque (article 32 du RGPD) :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-ink">Chiffrement</strong> des communications (HTTPS/TLS 1.3)</li>
                <li><strong className="text-ink">Hachage</strong> des identifiants sensibles</li>
                <li><strong className="text-ink">Authentification forte</strong> via OAuth 2.0</li>
                <li><strong className="text-ink">Contrôle d&apos;accès</strong> basé sur le principe du moindre privilège</li>
                <li><strong className="text-ink">Sauvegardes</strong> chiffrées et géoredondantes</li>
                <li><strong className="text-ink">Journalisation</strong> des accès pour détection d&apos;intrusions</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 bg-sepia-50 border-2 border-sepia-300 rounded-lg">
            <h2 className="text-2xl font-semibold text-ink mb-4 font-serif" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              8. Contact
            </h2>
            <div className="text-ink-light leading-relaxed">
              <p>
                Pour toute question relative à cette politique de confidentialité ou à l&apos;exercice de vos droits :
              </p>
              <div className="mt-4 space-y-2">
                <p><strong className="text-ink">Email :</strong> <a href="mailto:oalacea@proton.me" className="text-sepia-600 underline">oalacea@proton.me</a></p>
                <p><strong className="text-ink">Adresse postale :</strong> Non fournie</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
