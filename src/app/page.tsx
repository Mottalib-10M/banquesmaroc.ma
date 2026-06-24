import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildFAQSchema, buildBreadcrumbSchema, buildWebApplicationSchema, buildPersonSchema } from '@/lib/seo';
import { getBanquesSorted } from '@/data/banques';
import { formatPourcent } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Comparateur banques Maroc 2026 - Crédit, cartes et taux',
  description: 'Comparez les 9 banques marocaines, simulez votre crédit immobilier et trouvez la meilleure carte bancaire au Maroc. Taux dès 4,5%, simulateurs gratuits.',
  alternates: { canonical: `${SITE.url}/` },
};

const faqData = [
  {
    question: 'Quelle est la meilleure banque au Maroc en 2026 ?',
    answer: "Le choix de la meilleure banque dépend de votre profil. CIH Bank est idéale pour les jeunes et le crédit immobilier grâce à sa carte gratuite et ses taux compétitifs. Attijariwafa Bank offre le réseau le plus vaste. La Banque Populaire est la meilleure pour les MRE.",
  },
  {
    question: 'Quel est le taux de crédit immobilier au Maroc en 2026 ?',
    answer: "En 2026, les taux de crédit immobilier au Maroc varient entre 4,5% et 6,5% selon la banque et le profil de l'emprunteur. Les meilleurs taux sont proposés par CIH Bank et CFG Bank (à partir de 4,5%). Le taux moyen du marché se situe autour de 5%.",
  },
  {
    question: 'Quel est le taux d\'endettement maximum au Maroc ?',
    answer: "Bank Al-Maghrib, la banque centrale du Maroc, a fixé le taux d'endettement maximum à 45% des revenus nets. Cela signifie que l'ensemble de vos mensualités de crédit ne peut pas dépasser 45% de votre salaire net mensuel.",
  },
  {
    question: 'Quelle banque propose la carte bancaire la moins chère ?',
    answer: "CIH Bank, CFG Bank et Al Barid Bank proposent des cartes classiques gratuites (0 DH/an). Les autres banques facturent entre 40 DH et 100 DH par an pour une carte classique Visa ou Mastercard.",
  },
  {
    question: 'Comment ouvrir un compte bancaire au Maroc ?',
    answer: "Pour ouvrir un compte au Maroc, vous avez besoin de votre CIN (Carte d'Identité Nationale), d'un justificatif de domicile récent et d'un justificatif de revenus. Plusieurs banques comme CIH Bank permettent désormais l'ouverture de compte en ligne.",
  },
];

export default function HomePage() {
  const topBanques = getBanquesSorted('note').slice(0, 5);

  const faqSchema = buildFAQSchema(faqData);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur de crédit immobilier Maroc',
    'Calculez votre mensualité et comparez les taux des banques marocaines',
    `${SITE.url}/simulation-credit-immobilier/`
  );
  const personSchema = buildPersonSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand via-brand-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Comparez les banques et simulez vos crédits au Maroc
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Trouvez la meilleure banque marocaine pour votre profil. Comparez les taux de crédit immobilier,
              les cartes bancaires et les frais de {topBanques.length} banques en temps réel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/comparateur-banques/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Comparer les banques
              </a>
              <a
                href="/simulation-credit-immobilier/"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-light text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
              >
                Simuler un crédit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-brand">9</p>
              <p className="text-sm text-gray-500 mt-1">Banques comparées</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">4,5%</p>
              <p className="text-sm text-gray-500 mt-1">Meilleur taux immobilier</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">0 DH</p>
              <p className="text-sm text-gray-500 mt-1">Carte gratuite disponible</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">45%</p>
              <p className="text-sm text-gray-500 mt-1">Taux endettement max</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Banks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Top 5 des meilleures banques au Maroc</h2>
        <p className="text-gray-500 mb-8">Classées par note globale incluant taux, réseau, services digitaux et satisfaction client.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topBanques.map((banque, i) => (
            <div key={banque.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === 0 ? 'bg-yellow-100 text-yellow-700' : i === 1 ? 'bg-gray-100 text-gray-600' : i === 2 ? 'bg-orange-100 text-orange-700' : 'bg-blue-50 text-brand'
                  }`}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-charcoal">{banque.nomCourt}</h3>
                    <p className="text-xs text-gray-500">{banque.nom}</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-brand">{banque.note}/10</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <span className="text-gray-500">Taux immobilier</span>
                  <p className="font-semibold text-brand">dès {formatPourcent(banque.tauxCredit.immobilier.min)}</p>
                </div>
                <div>
                  <span className="text-gray-500">Agences</span>
                  <p className="font-semibold">{banque.agences.toLocaleString('fr-FR')}</p>
                </div>
              </div>

              <p className="text-xs text-success mb-3">+ {banque.avantages[0]}</p>

              <a
                href={`/banques/${banque.id}/`}
                className="block text-center py-2 text-sm font-medium text-brand bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                Voir le détail
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/comparateur-banques/"
            className="inline-flex items-center px-6 py-3 bg-brand text-white font-medium rounded-lg hover:bg-brand-dark transition-colors"
          >
            Comparer toutes les banques
          </a>
        </div>
      </section>

      {/* Simulateurs */}
      <section className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">Simulateurs financiers gratuits</h2>
          <p className="text-gray-500 mb-8">Calculez vos mensualités et votre capacité d&apos;emprunt en quelques clics.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Crédit immobilier', desc: 'Simulez votre prêt immobilier avec les taux réels des banques marocaines.', href: '/simulation-credit-immobilier/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { title: 'Crédit consommation', desc: 'Calculez la mensualité de votre crédit à la consommation.', href: '/simulation-credit-consommation/', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
              { title: 'Leasing auto', desc: 'Calculez votre mensualité de leasing pour votre véhicule.', href: '/simulation-leasing/', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10' },
              { title: "Capacité d'emprunt", desc: 'Découvrez combien vous pouvez emprunter selon vos revenus.', href: '/capacite-emprunt/', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
            ].map((sim) => (
              <a
                key={sim.href}
                href={sim.href}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-brand transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <svg className="w-6 h-6 text-brand group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={sim.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2 group-hover:text-brand transition-colors">{sim.title}</h3>
                <p className="text-sm text-gray-500">{sim.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Meilleure banque pour... */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">Quelle banque pour votre profil ?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProfileCard
            title="Étudiants et jeunes"
            banque="CIH Bank"
            banqueId="cih-bank"
            raison="Offre Code 30 entièrement gratuite : carte, compte et application mobile sans aucun frais pour les moins de 30 ans."
            alternatives={['CFG Bank (carte gratuite)', 'Banque Populaire (offre Al Mostatakbal)']}
          />
          <ProfileCard
            title="Salariés et cadres"
            banque="Attijariwafa Bank"
            banqueId="attijariwafa-bank"
            raison="Réseau le plus vaste du Maroc, application Attijari Mobile complète, et large gamme de produits de crédit et d'épargne."
            alternatives={['CIH Bank (meilleurs taux immo)', 'Société Générale (standards internationaux)']}
          />
          <ProfileCard
            title="MRE (résidents à l'étranger)"
            banque="Banque Populaire"
            banqueId="banque-populaire"
            raison="Leader historique des transferts MRE avec des agences dans les pays d'accueil, un compte Bladi dédié et des offres immobilières spécifiques."
            alternatives={['Attijariwafa Bank (réseau international)', 'BMCE BOA (Afrique)']}
          />
        </div>
      </section>

      {/* Content Section - SEO */}
      <section className="bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="prose max-w-none">
            <h2>Guide complet des banques au Maroc en 2026</h2>
            <p>
              Le secteur bancaire marocain est l&apos;un des plus développés d&apos;Afrique. Avec un taux de bancarisation
              dépassant 70% de la population adulte et un cadre réglementaire solide supervisé par Bank Al-Maghrib,
              les banques marocaines offrent une gamme complète de produits financiers comparables aux standards
              internationaux.
            </p>

            <h3>Les principales banques marocaines</h3>
            <p>
              Le marché bancaire marocain est dominé par trois grands groupes qui représentent ensemble plus de 60%
              des parts de marché : Attijariwafa Bank (24,4%), la Banque Centrale Populaire (22%) et BMCE Bank of
              Africa (14,5%). Ces trois banques disposent de réseaux d&apos;agences couvrant l&apos;ensemble du territoire
              national et d&apos;une présence significative en Afrique subsaharienne.
            </p>
            <p>
              À côté de ces géants, des banques comme CIH Bank et CFG Bank se démarquent par leur approche digitale
              et leurs tarifs agressifs. CIH Bank, en particulier, est devenue la référence pour le crédit
              immobilier avec des taux parmi les plus bas du marché (dès 4,5%) et une carte bancaire classique
              entièrement gratuite.
            </p>

            <h3>Les taux de crédit immobilier au Maroc</h3>
            <p>
              En 2026, les taux de crédit immobilier au Maroc se situent généralement entre 4,5% et 6,5% en taux
              fixe. Le taux exact dépend de plusieurs facteurs : la banque choisie, votre profil (ancienneté
              professionnelle, niveau de revenus), le montant emprunté et la durée du prêt. Les taux variables,
              moins courants, peuvent démarrer à partir de 3,5%.
            </p>
            <p>
              La réglementation de Bank Al-Maghrib impose un taux d&apos;endettement maximum de 45% des revenus nets
              mensuels. Cela signifie que l&apos;ensemble de vos mensualités de crédit (immobilier, consommation,
              leasing) ne peut pas dépasser 45% de votre salaire net. L&apos;apport personnel minimum demandé par
              la plupart des banques est de 10 à 20% du prix du bien.
            </p>

            <h3>Comment choisir sa banque au Maroc ?</h3>
            <p>
              Le choix d&apos;une banque dépend avant tout de vos besoins. Voici les critères clés à considérer :
            </p>
            <ul>
              <li><strong>Les frais bancaires</strong> : frais de tenue de compte, cotisation de carte, commissions sur opérations.</li>
              <li><strong>Le réseau d&apos;agences et de GAB</strong> : important si vous avez besoin d&apos;agences physiques.</li>
              <li><strong>Les services digitaux</strong> : qualité de l&apos;application mobile et de la banque en ligne.</li>
              <li><strong>Les taux de crédit</strong> : comparez les taux immobilier et consommation selon votre projet.</li>
              <li><strong>Les offres spécifiques</strong> : offres jeunes, MRE, professionnels, entreprises.</li>
            </ul>

            <h3>Les cartes bancaires au Maroc</h3>
            <p>
              Les banques marocaines proposent généralement quatre niveaux de cartes : Classique (0-100 DH/an),
              Gold/Premium (200-500 DH/an), Platinum (600-1 500 DH/an) et Infinite/World Elite (2 000-5 000 DH/an).
              Les cartes haut de gamme incluent des assurances voyage, une protection des achats, du cashback et
              parfois un service de conciergerie.
            </p>
            <p>
              Pour une utilisation courante au Maroc, une carte classique suffit généralement. Si vous voyagez
              fréquemment à l&apos;étranger, une carte Gold est recommandée pour ses plafonds plus élevés et ses
              assurances voyage. Les cartes Platinum et Infinite sont réservées aux clients à hauts revenus
              souhaitant bénéficier de services exclusifs.
            </p>

            <h3>Le crédit à la consommation et le leasing auto</h3>
            <p>
              Les taux de crédit à la consommation au Maroc varient entre 7% et 12% selon les banques et la durée
              (maximum 7 ans). Pour le financement automobile, le leasing (LOA - Location avec Option d&apos;Achat) est
              très répandu au Maroc avec des taux allant de 5% à 8%. Le leasing présente des avantages fiscaux
              pour les professionnels et les entreprises.
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">Nos guides bancaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Meilleure banque au Maroc en 2026', desc: 'Comparatif complet pour trouver la banque qui correspond à vos besoins.', href: '/guides/meilleure-banque-maroc/' },
            { title: 'Comment choisir sa carte bancaire', desc: 'Guide pratique pour comparer les cartes Visa et Mastercard au Maroc.', href: '/guides/comment-choisir-carte-bancaire/' },
            { title: 'Guide du crédit immobilier au Maroc', desc: 'Tout savoir sur le prêt immobilier : taux, procédures, garanties.', href: '/guides/credit-immobilier-maroc/' },
          ].map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-brand transition-all group"
            >
              <h3 className="font-bold text-charcoal mb-2 group-hover:text-brand transition-colors">{guide.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{guide.desc}</p>
              <span className="text-sm font-medium text-brand">Lire le guide &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">Questions fréquentes sur les banques au Maroc</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal hover:text-brand transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProfileCard({
  title,
  banque,
  banqueId,
  raison,
  alternatives,
}: {
  title: string;
  banque: string;
  banqueId: string;
  raison: string;
  alternatives: string[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="font-bold text-lg text-charcoal mb-1">{title}</h3>
      <p className="text-brand font-semibold mb-3">
        Notre recommandation : {banque}
      </p>
      <p className="text-sm text-gray-600 mb-3">{raison}</p>
      <div className="text-xs text-gray-500">
        <p className="font-medium mb-1">Alternatives :</p>
        <ul className="space-y-0.5">
          {alternatives.map((alt) => (
            <li key={alt}>- {alt}</li>
          ))}
        </ul>
      </div>
      <a
        href={`/banques/${banqueId}/`}
        className="mt-4 block text-center py-2 text-sm font-medium text-brand bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Voir {banque}
      </a>
    </div>
  );
}
