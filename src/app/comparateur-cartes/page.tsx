import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import ComparateurCartes from '@/components/comparateur/ComparateurCartes';

export const metadata: Metadata = {
  title: 'Comparateur cartes bancaires Maroc 2025 - Tarifs',
  description: 'Comparez les cartes bancaires au Maroc : Visa, Mastercard, classique, Gold, Platinum, Infinite. Cotisations, plafonds et avantages.',
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
            Les cartes bancaires au Maroc se d\u00e9clinent en quatre niveaux principaux, chacun correspondant \u00e0 un
            profil et des besoins diff\u00e9rents. La plupart des banques marocaines proposent des cartes Visa, tandis
            que certaines offrent aussi des cartes Mastercard.
          </p>

          <h3>Carte Classique (0-100 DH/an)</h3>
          <p>
            La carte d&apos;entr\u00e9e de gamme, suffisante pour une utilisation quotidienne au Maroc. Elle permet les
            retraits aux GAB, les paiements chez les commer\u00e7ants et les achats en ligne. Les plafonds sont
            g\u00e9n\u00e9ralement de 5 000 DH/jour en retrait et 15 000-20 000 DH/mois en paiement. Bonne nouvelle :
            CIH Bank, CFG Bank et Al Barid Bank proposent une carte classique enti\u00e8rement gratuite.
          </p>

          <h3>Carte Gold (200-500 DH/an)</h3>
          <p>
            Recommand\u00e9e pour les personnes voyageant r\u00e9guli\u00e8rement. La carte Gold offre des plafonds plus \u00e9lev\u00e9s,
            une assurance voyage (rapatriement, bagages) et une utilisation internationale confortable. Les
            plafonds montent \u00e0 10 000-15 000 DH/jour en retrait.
          </p>

          <h3>Carte Platinum (600-1 500 DH/an)</h3>
          <p>
            Destin\u00e9e aux cadres et professions lib\u00e9rales, la carte Platinum ajoute le cashback sur certains achats,
            une protection des achats \u00e9tendue et un service de conciergerie. Les plafonds atteignent
            20 000-30 000 DH/jour en retrait et 100 000-150 000 DH/mois en paiement.
          </p>

          <h3>Carte Infinite / World Elite (2 000-5 000 DH/an)</h3>
          <p>
            Le segment ultra-premium avec les plafonds les plus \u00e9lev\u00e9s, des miles a\u00e9riens, une conciergerie 24/7,
            des assurances compl\u00e8tes et un acc\u00e8s aux lounges d&apos;a\u00e9roport. La carte World Elite de la BMCI est
            la plus ch\u00e8re du march\u00e9 (5 000 DH/an) mais aussi la plus exclusive.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
