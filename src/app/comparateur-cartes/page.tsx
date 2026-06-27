import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import ComparateurCartes from '@/components/comparateur/ComparateurCartes';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Comparateur cartes bancaires Maroc - Tarifs comparés',
  description: 'Comparez toutes les cartes bancaires au Maroc : Visa, Mastercard, classique, Gold, Platinum et Infinite. Cotisations, plafonds et assurances par banque.',
  alternates: { canonical: `${SITE.url}/comparateur-cartes/` },
};


const faqCartes = [
  {
    question: 'Quelle est la carte bancaire la moins chère au Maroc ?',
    answer: 'Les cartes classiques de CIH Bank, CFG Bank et Al Barid Bank (e-Barid) sont entièrement gratuites à 0 DH/an. Le Crédit Agricole propose aussi une carte classique très abordable à 50 DH/an.',
  },
  {
    question: 'Quelle carte bancaire pour voyager depuis le Maroc ?',
    answer: 'Pour voyager, optez pour une carte Gold minimum. La CFG Bank Gold (200 DH/an) et la CIH Bank Gold (250 DH/an) offrent le meilleur rapport qualité-prix avec assurance voyage et plafonds internationaux confortables.',
  },
  {
    question: 'Visa ou Mastercard : quelle différence au Maroc ?',
    answer: 'Au Maroc, Visa et Mastercard sont acceptées partout de façon identique. La majorité des banques marocaines proposent des cartes Visa. Quelques banques offrent le choix entre les deux réseaux. En pratique, il n\'y a pas de différence notable.',
  },
  {
    question: 'Comment obtenir une carte Platinum au Maroc ?',
    answer: 'La carte Platinum est accessible aux clients avec des revenus stables généralement supérieurs à 15 000 DH/mois. CIH Bank propose la Platinum la moins chère du marché à 600 DH/an avec cashback et conciergerie inclus.',
  },
  {
    question: 'Le cashback des cartes bancaires est-il rentable au Maroc ?',
    answer: 'Le cashback de 0,5% sur une carte Platinum à 800 DH/an devient rentable si vos dépenses par carte dépassent 160 000 DH/an (13 333 DH/mois). En dessous, la cotisation annule le gain du cashback.',
  },
];

export default function ComparateurCartesPage() {
  const faqSchema = buildFAQSchema(faqCartes);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Comparateur cartes', url: `${SITE.url}/comparateur-cartes/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Comparateur cartes</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Comparateur de cartes bancaires au Maroc 2026
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Comparez les cartes Visa et Mastercard de toutes les banques marocaines. Filtrez par type et triez par cotisation ou plafonds.
        </p>

        <ComparateurCartes />

        <div className="mt-12 prose max-w-4xl">
          <h2>Guide des cartes bancaires au Maroc</h2>
          <p>
            Les cartes bancaires au Maroc se déclinent en quatre niveaux principaux, chacun correspondant à un
            profil et des besoins différents. La plupart des banques marocaines proposent des cartes Visa, tandis
            que certaines offrent aussi des cartes Mastercard.
          </p>

          <h3>Carte Classique (0-100 DH/an)</h3>
          <p>
            La carte d&apos;entrée de gamme, suffisante pour une utilisation quotidienne au Maroc. Elle permet les
            retraits aux GAB, les paiements chez les commerçants et les achats en ligne. Les plafonds sont
            généralement de 5 000 DH/jour en retrait et 15 000-20 000 DH/mois en paiement. Bonne nouvelle :
            CIH Bank, CFG Bank et Al Barid Bank proposent une carte classique entièrement gratuite.
          </p>

          <h3>Carte Gold (200-500 DH/an)</h3>
          <p>
            Recommandée pour les personnes voyageant régulièrement. La carte Gold offre des plafonds plus élevés,
            une assurance voyage (rapatriement, bagages) et une utilisation internationale confortable. Les
            plafonds montent à 10 000-15 000 DH/jour en retrait.
          </p>

          <h3>Carte Platinum (600-1 500 DH/an)</h3>
          <p>
            Destinée aux cadres et professions libérales, la carte Platinum ajoute le cashback sur certains achats,
            une protection des achats étendue et un service de conciergerie. Les plafonds atteignent
            20 000-30 000 DH/jour en retrait et 100 000-150 000 DH/mois en paiement.
          </p>

          <h3>Carte Infinite / World Elite (2 000-5 000 DH/an)</h3>
          <p>
            Le segment ultra-premium avec les plafonds les plus élevés, des miles aériens, une conciergerie 24/7,
            des assurances complètes et un accès aux lounges d&apos;aéroport. La carte World Elite de la BMCI est
            la plus chère du marché (5 000 DH/an) mais aussi la plus exclusive.
          </p>
        </div>


        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes sur les cartes bancaires au Maroc</h2>
          <div className="space-y-3">
            {faqCartes.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal hover:text-brand transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>


        {/* Related tools */}
        <RelatedTools currentPath="/comparateur-cartes/" />

        <p className="mt-6 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
