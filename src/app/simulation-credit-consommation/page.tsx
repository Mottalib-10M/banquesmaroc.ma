import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema } from '@/lib/seo';
import SimulateurCredit from '@/components/simulateurs/SimulateurCredit';

export const metadata: Metadata = {
  title: 'Simulateur cr\u00e9dit consommation Maroc 2025 - Calcul',
  description: 'Calculez votre mensualit\u00e9 de cr\u00e9dit \u00e0 la consommation au Maroc. Comparez les taux de 7% \u00e0 12% des banques marocaines.',
  alternates: { canonical: `${SITE.url}/simulation-credit-consommation/` },
};

export default function SimulationCreditConsoPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Cr\u00e9dit consommation', url: `${SITE.url}/simulation-credit-consommation/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur cr\u00e9dit consommation Maroc',
    'Calculez la mensualit\u00e9 de votre cr\u00e9dit \u00e0 la consommation au Maroc',
    `${SITE.url}/simulation-credit-consommation/`
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Simulateur cr\u00e9dit consommation</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de cr\u00e9dit \u00e0 la consommation au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez la mensualit\u00e9 de votre cr\u00e9dit conso. Les taux varient de 7% \u00e0 12% selon les banques, avec une dur\u00e9e maximum de 7 ans.
        </p>

        <SimulateurCredit type="consommation" />

        <div className="mt-12 prose max-w-4xl">
          <h2>Le cr\u00e9dit \u00e0 la consommation au Maroc</h2>
          <p>
            Le cr\u00e9dit \u00e0 la consommation permet de financer des projets personnels : travaux de maison, \u00e9lectrom\u00e9nager,
            voyages, \u00e9v\u00e9nements familiaux ou besoins de tr\u00e9sorerie. Au Maroc, les taux se situent entre 7% et 12%
            avec une dur\u00e9e maximale de 7 ans (84 mois).
          </p>

          <h3>Taux de cr\u00e9dit conso par banque</h3>
          <p>
            Les taux les plus comp\u00e9titifs en 2025 sont propos\u00e9s par CIH Bank et CFG Bank (\u00e0 partir de 7%).
            Attijariwafa Bank et la Banque Populaire se situent dans la fourchette 7,5%-11%. Les taux les plus
            \u00e9lev\u00e9s sont pratiqu\u00e9s par Al Barid Bank et le Cr\u00e9dit Agricole (jusqu&apos;\u00e0 12%).
          </p>

          <h3>Documents requis</h3>
          <ul>
            <li>Copie de la CIN</li>
            <li>Justificatif de revenus (3 derniers bulletins de salaire ou avis d&apos;imposition)</li>
            <li>Relev\u00e9s bancaires des 3 derniers mois</li>
            <li>Justificatif de domicile</li>
            <li>Attestation de travail (pour les salari\u00e9s)</li>
          </ul>

          <h3>Conseils pour obtenir le meilleur taux</h3>
          <p>
            Pour n\u00e9gocier le meilleur taux de cr\u00e9dit consommation au Maroc, privil\u00e9giez une dur\u00e9e courte
            (les taux sont plus bas sur 3-4 ans que sur 7 ans), domiciliez votre salaire dans la banque
            pr\u00eateuse, et n&apos;h\u00e9sitez pas \u00e0 mettre les banques en concurrence en demandant plusieurs simulations.
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
