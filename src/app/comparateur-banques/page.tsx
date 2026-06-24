import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import ComparateurBanques from '@/components/comparateur/ComparateurBanques';

export const metadata: Metadata = {
  title: 'Comparateur banques Maroc 2026 - Comparez taux, frais et services',
  description: 'Comparez les 9 banques marocaines en 2026 : Attijariwafa, Banque Populaire, BOA, CIH, SG, BMCI, CFG, CAM et Al Barid Bank. Taux de crédit immobilier, frais bancaires, cartes et services digitaux comparés côte à côte.',
  alternates: { canonical: `${SITE.url}/comparateur-banques/` },
};

export default function ComparateurBanquesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Comparateur banques', url: `${SITE.url}/comparateur-banques/` },
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
          <span className="text-charcoal font-medium">Comparateur banques</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Comparateur des banques au Maroc 2025
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Sélectionnez jusqu&apos;à 3 banques pour les comparer côte à côte. Filtrez par type et triez par le critère qui vous importe le plus.
        </p>

        <ComparateurBanques />

        {/* SEO Content */}
        <div className="mt-12 prose max-w-4xl">
          <h2>Comment choisir la bonne banque au Maroc ?</h2>
          <p>
            Choisir une banque au Maroc est une décision importante qui impacte votre quotidien financier pendant
            des années. Notre comparateur vous permet d&apos;évaluer objectivement les 9 principales banques de détail
            du marché marocain sur des critères concrets : taux de crédit, frais bancaires, réseau d&apos;agences,
            qualité de l&apos;application mobile et services proposés.
          </p>

          <h3>Les critères clés pour comparer</h3>
          <p>
            <strong>Les taux de crédit</strong> sont souvent le premier critère de choix, surtout pour un projet
            immobilier. Un écart de 0,5% sur un prêt de 800 000 DH sur 20 ans représente une économie de
            plus de 50 000 DH. Utilisez notre simulateur de crédit pour calculer la différence exacte.
          </p>
          <p>
            <strong>Les frais bancaires</strong> incluent les frais de tenue de compte, la cotisation de la carte
            bancaire et les commissions sur les opérations. Certaines banques comme CIH Bank et CFG Bank proposent
            des comptes sans frais avec carte gratuite, tandis que d&apos;autres comme BMCI ou Société Générale
            se positionnent sur le segment premium avec des tarifs plus élevés mais des services supérieurs.
          </p>
          <p>
            <strong>Le réseau d&apos;agences</strong> reste important au Maroc, même à l&apos;ère du digital. Attijariwafa Bank
            (4 800 agences) et la Banque Populaire (4 600 agences) dominent largement ce critère, offrant
            une couverture nationale incomparable.
          </p>

          <h3>Notre méthodologie de notation</h3>
          <p>
            La note attribuée à chaque banque prend en compte : la compétitivité des taux (30%), les frais
            bancaires (20%), la qualité des services digitaux (20%), le réseau d&apos;agences (15%) et la satisfaction
            client (15%). Ces notes sont mises à jour régulièrement pour refléter les évolutions du marché.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
