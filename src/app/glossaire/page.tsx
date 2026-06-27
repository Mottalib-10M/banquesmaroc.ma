import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Glossaire Bancaire Maroc : Termes Financiers A à Z',
  description: 'Glossaire bancaire au Maroc : définitions des termes financiers, crédits, épargne et services bancaires marocains. Tous les termes expliqués clairement.',
  alternates: { canonical: `${SITE.url}/glossaire/` },
};

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'L', 'M', 'O', 'P', 'R', 'S', 'T', 'V'];

export default function GlossairePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Glossaire', url: `${SITE.url}/glossaire/` },
  ]);

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Glossaire Bancaire Maroc',
    description: 'Termes et définitions relatifs au secteur bancaire et financier au Maroc.',
    inLanguage: 'fr',
    url: `${SITE.url}/glossaire/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Glossaire</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">Glossaire Bancaire Maroc</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          Retrouvez les définitions de tous les termes liés au <strong>secteur bancaire et financier</strong> au Maroc : comptes, crédits, épargne, finance islamique et plus encore.
        </p>

        {/* Navigation A-Z */}
        <nav aria-label="Navigation alphabétique" className="mb-10 flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-800 hover:bg-brand hover:text-white transition-colors"
            >
              {letter}
            </a>
          ))}
        </nav>

        {/* Glossaire */}
        <div className="space-y-10">

          {/* A */}
          <section id="A">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">A</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Agios</dt>
                <dd className="text-gray-600 mt-1">Intérêts et frais facturés par la banque lorsque le compte courant est en situation de découvert. Les agios comprennent le taux d&apos;intérêt débiteur, les commissions et la TVA applicable.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Assurance vie</dt>
                <dd className="text-gray-600 mt-1">Produit d&apos;épargne et de prévoyance proposé par les banques et les compagnies d&apos;assurance. L&apos;assurance vie au Maroc permet de constituer un capital, de préparer sa retraite ou de protéger ses proches.</dd>
              </div>
            </dl>
          </section>

          {/* B */}
          <section id="B">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">B</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Bank Al-Maghrib</dt>
                <dd className="text-gray-600 mt-1">Banque centrale du Maroc, chargée de la politique monétaire, de la régulation du système bancaire et de l&apos;émission de la monnaie. Elle fixe le taux directeur qui influence les taux de crédit pratiqués par les banques.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Banque participative</dt>
                <dd className="text-gray-600 mt-1">Banque opérant selon les principes de la finance islamique, sans percevoir ni verser d&apos;intérêts (riba). Les banques participatives proposent des produits comme la Mourabaha et l&apos;Ijara. <a href="/comparateur-banques/" className="text-brand hover:underline">Comparez les banques participatives</a>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Bourse de Casablanca</dt>
                <dd className="text-gray-600 mt-1">Place boursière marocaine où sont cotées les actions des entreprises marocaines. Les investisseurs peuvent y acheter et vendre des titres via leur compte-titres bancaire.</dd>
              </div>
            </dl>
          </section>

          {/* C */}
          <section id="C">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">C</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Carte bancaire</dt>
                <dd className="text-gray-600 mt-1">Moyen de paiement électronique émis par la banque, permettant les retraits aux GAB et les paiements chez les commerçants. Les cartes se déclinent en plusieurs gammes (classique, gold, platinum). <a href="/comparateur-cartes/" className="text-brand hover:underline">Comparez les cartes bancaires</a>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Chèque</dt>
                <dd className="text-gray-600 mt-1">Instrument de paiement écrit par lequel le titulaire d&apos;un compte donne l&apos;ordre à sa banque de payer une somme déterminée au bénéficiaire. L&apos;émission de chèques sans provision est sévèrement sanctionnée au Maroc.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Compte courant</dt>
                <dd className="text-gray-600 mt-1">Compte bancaire de base utilisé pour les opérations quotidiennes : dépôts, retraits, virements et paiements. La plupart des banques marocaines proposent des comptes courants avec des frais de tenue de compte variables.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Compte épargne</dt>
                <dd className="text-gray-600 mt-1">Compte bancaire rémunéré destiné à l&apos;épargne. Les fonds déposés génèrent des intérêts selon un taux fixé par la banque. Le compte sur carnet est la forme d&apos;épargne la plus courante au Maroc.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Crédit à la consommation</dt>
                <dd className="text-gray-600 mt-1">Prêt bancaire destiné à financer des achats de biens ou de services (voiture, électroménager, voyage). Les taux varient selon les banques et le profil de l&apos;emprunteur. <a href="/simulation-credit-consommation/" className="text-brand hover:underline">Simulez votre crédit consommation</a>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Crédit immobilier</dt>
                <dd className="text-gray-600 mt-1">Prêt bancaire à long terme destiné à financer l&apos;acquisition d&apos;un bien immobilier (appartement, maison, terrain). Les durées vont de 5 à 25 ans avec des taux fixes ou variables. <a href="/simulation-credit-immobilier/" className="text-brand hover:underline">Simulez votre crédit immobilier</a>.</dd>
              </div>
            </dl>
          </section>

          {/* D */}
          <section id="D">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">D</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">DAT (Dépôt à Terme)</dt>
                <dd className="text-gray-600 mt-1">Placement bancaire où le client immobilise une somme pour une durée déterminée (3, 6, 12 mois ou plus) en échange d&apos;un taux d&apos;intérêt garanti, généralement supérieur au compte épargne classique.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Découvert bancaire</dt>
                <dd className="text-gray-600 mt-1">Facilité de caisse accordée par la banque permettant au titulaire du compte de disposer de fonds au-delà de son solde. Le découvert est soumis à des agios et doit être remboursé dans un délai convenu.</dd>
              </div>
            </dl>
          </section>

          {/* E */}
          <section id="E">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">E</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Épargne retraite</dt>
                <dd className="text-gray-600 mt-1">Produit d&apos;épargne à long terme permettant de constituer un complément de retraite. Au Maroc, les cotisations sont déductibles de l&apos;IR dans certaines limites, ce qui en fait un outil d&apos;optimisation fiscale.</dd>
              </div>
            </dl>
          </section>

          {/* F */}
          <section id="F">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">F</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Frais de tenue de compte</dt>
                <dd className="text-gray-600 mt-1">Frais facturés périodiquement par la banque pour la gestion et la maintenance du compte courant. Ces frais varient considérablement d&apos;une banque à l&apos;autre. <a href="/comparateur-banques/" className="text-brand hover:underline">Comparez les frais bancaires</a>.</dd>
              </div>
            </dl>
          </section>

          {/* I */}
          <section id="I">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">I</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">IBAN (International Bank Account Number)</dt>
                <dd className="text-gray-600 mt-1">Numéro de compte bancaire international normalisé facilitant les transactions internationales. Au Maroc, l&apos;IBAN comprend 28 caractères et commence par &quot;MA&quot;.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Ijara</dt>
                <dd className="text-gray-600 mt-1">Contrat de location-vente conforme à la finance islamique. La banque participative achète le bien et le loue au client avec une option d&apos;achat en fin de contrat. Ce mode de financement est proposé par les <a href="/comparateur-banques/" className="text-brand hover:underline">banques participatives au Maroc</a>.</dd>
              </div>
            </dl>
          </section>

          {/* L */}
          <section id="L">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">L</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">LCN (Lettre de Change Normalisée)</dt>
                <dd className="text-gray-600 mt-1">Effet de commerce par lequel le tireur donne l&apos;ordre au tiré de payer une somme à une date déterminée. La LCN est largement utilisée dans les transactions commerciales au Maroc.</dd>
              </div>
            </dl>
          </section>

          {/* M */}
          <section id="M">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">M</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Microfinance</dt>
                <dd className="text-gray-600 mt-1">Ensemble de services financiers (microcrédits, micro-épargne) destinés aux populations à faibles revenus ou exclues du système bancaire traditionnel. Plusieurs associations de microcrédit sont agréées au Maroc.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Mourabaha</dt>
                <dd className="text-gray-600 mt-1">Contrat de financement conforme à la charia où la banque participative achète un bien et le revend au client avec une marge bénéficiaire connue et convenue d&apos;avance. C&apos;est le produit phare des banques participatives au Maroc.</dd>
              </div>
            </dl>
          </section>

          {/* O */}
          <section id="O">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">O</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">OPCVM (Organismes de Placement Collectif en Valeurs Mobilières)</dt>
                <dd className="text-gray-600 mt-1">Fonds d&apos;investissement collectifs permettant aux épargnants de placer leur argent sur les marchés financiers via une gestion professionnelle. Les OPCVM sont classés par type (actions, obligations, monétaire, diversifié).</dd>
              </div>
            </dl>
          </section>

          {/* P */}
          <section id="P">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">P</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">PEA (Plan d&apos;Épargne en Actions)</dt>
                <dd className="text-gray-600 mt-1">Produit d&apos;épargne permettant d&apos;investir en actions cotées à la Bourse de Casablanca avec des avantages fiscaux. Les dividendes et plus-values sont exonérés sous certaines conditions de durée de détention.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">PEL (Plan d&apos;Épargne Logement)</dt>
                <dd className="text-gray-600 mt-1">Produit d&apos;épargne dédié à la constitution d&apos;un apport personnel pour l&apos;achat d&apos;un logement. Le PEL offre un taux d&apos;intérêt garanti et peut donner droit à un crédit immobilier à taux préférentiel.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Prélèvement</dt>
                <dd className="text-gray-600 mt-1">Opération par laquelle un créancier autorisé débite automatiquement le compte du débiteur à échéance. Le prélèvement est utilisé pour le paiement récurrent de factures (eau, électricité, abonnements).</dd>
              </div>
            </dl>
          </section>

          {/* R */}
          <section id="R">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">R</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">RIB (Relevé d&apos;Identité Bancaire)</dt>
                <dd className="text-gray-600 mt-1">Document contenant les coordonnées bancaires du titulaire du compte (code banque, code ville, numéro de compte, clé RIB). Le RIB est nécessaire pour recevoir des virements et mettre en place des prélèvements.</dd>
              </div>
            </dl>
          </section>

          {/* S */}
          <section id="S">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">S</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Sukuk</dt>
                <dd className="text-gray-600 mt-1">Certificats d&apos;investissement conformes à la charia, équivalents islamiques des obligations. Les sukuk sont adossés à des actifs réels et rémunèrent les détenteurs par des profits plutôt que des intérêts.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Swift/BIC</dt>
                <dd className="text-gray-600 mt-1">Code international identifiant une banque dans le réseau SWIFT (Society for Worldwide Interbank Financial Telecommunication). Ce code est nécessaire pour les virements internationaux vers et depuis le Maroc.</dd>
              </div>
            </dl>
          </section>

          {/* T */}
          <section id="T">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">T</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Taux d&apos;intérêt</dt>
                <dd className="text-gray-600 mt-1">Pourcentage appliqué au capital emprunté ou épargné, déterminant le coût du crédit ou le rendement de l&apos;épargne. Les taux peuvent être fixes ou variables selon les produits bancaires.</dd>
              </div>
              <div>
                <dt className="font-semibold text-charcoal">Taux directeur</dt>
                <dd className="text-gray-600 mt-1">Taux fixé par Bank Al-Maghrib influençant l&apos;ensemble des taux pratiqués par les banques commerciales. Une baisse du taux directeur entraîne généralement une baisse des taux de crédit.</dd>
              </div>
            </dl>
          </section>

          {/* V */}
          <section id="V">
            <h2 className="text-2xl font-bold text-brand mb-4 border-b border-gray-200 pb-2">V</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-charcoal">Virement</dt>
                <dd className="text-gray-600 mt-1">Opération bancaire consistant à transférer des fonds d&apos;un compte à un autre, au sein de la même banque ou entre banques différentes. Les virements peuvent être ponctuels ou permanents.</dd>
              </div>
            </dl>
          </section>

        </div>

        {/* Liens utiles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-charcoal mb-4">Outils et ressources bancaires</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/comparateur-banques/" className="group rounded-lg border border-gray-200 p-4 hover:border-brand hover:shadow-sm transition-all">
              <h3 className="font-semibold text-charcoal group-hover:text-brand text-sm">Comparateur de banques</h3>
              <p className="text-xs text-gray-500 mt-1">Comparez les banques marocaines</p>
            </a>
            <a href="/simulation-credit-immobilier/" className="group rounded-lg border border-gray-200 p-4 hover:border-brand hover:shadow-sm transition-all">
              <h3 className="font-semibold text-charcoal group-hover:text-brand text-sm">Simulateur crédit immobilier</h3>
              <p className="text-xs text-gray-500 mt-1">Calculez vos mensualités</p>
            </a>
            <a href="/comparateur-cartes/" className="group rounded-lg border border-gray-200 p-4 hover:border-brand hover:shadow-sm transition-all">
              <h3 className="font-semibold text-charcoal group-hover:text-brand text-sm">Comparateur de cartes</h3>
              <p className="text-xs text-gray-500 mt-1">Trouvez la meilleure carte bancaire</p>
            </a>
          </div>
        </section>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials})
        </p>
      </div>
    </>
  );
}
