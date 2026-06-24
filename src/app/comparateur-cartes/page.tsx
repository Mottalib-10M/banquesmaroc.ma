import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import ComparateurCartes from '@/components/comparateur/ComparateurCartes';

export const metadata: Metadata = {
  title: 'Comparateur cartes bancaires Maroc 2026 - Tarifs et plafonds comparés',
  description: 'Comparez toutes les cartes bancaires au Maroc en 2026 : Visa, Mastercard, classique, Gold, Platinum et Infinite. Cotisations annuelles, plafonds de retrait et paiement, assurances voyage et cashback comparés par banque.',
  alternates: { canonical: `${SITE.url}/comparateur-cartes/` },
};

export default function ComparateurCartesPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Comparateur cartes</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Comparateur de cartes bancaires au Maroc 2025
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

        <p className="mt-6 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
