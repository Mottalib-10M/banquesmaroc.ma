import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema, buildFAQSchema } from '@/lib/seo';
import SimulateurCredit from '@/components/simulateurs/SimulateurCredit';

export const metadata: Metadata = {
  title: 'Simulateur crédit consommation Maroc 2026 - Calculez vos mensualités',
  description: 'Calculez votre mensualité de crédit à la consommation au Maroc en 2026. Comparez les taux de 7% à 12% des banques marocaines et obtenez votre tableau d\'amortissement complet gratuitement.',
  alternates: { canonical: `${SITE.url}/simulation-credit-consommation/` },
};

const faqConso = [
  {
    question: 'Quel est le taux moyen d\'un crédit consommation au Maroc ?',
    answer: 'En 2026, le taux moyen d\'un crédit consommation au Maroc se situe entre 8% et 10%. Les taux les plus bas (7%) sont proposés par CIH Bank et CFG Bank pour les clients domiciliant leur salaire. Les taux les plus élevés (jusqu\'à 12%) sont pratiqués par Al Barid Bank et le Crédit Agricole.',
  },
  {
    question: 'Quelle est la durée maximale d\'un crédit conso au Maroc ?',
    answer: 'La durée maximale d\'un crédit à la consommation au Maroc est de 7 ans (84 mois). La plupart des banques proposent des durées de 12 à 84 mois. Les taux sont généralement plus avantageux sur les durées courtes (3-4 ans).',
  },
  {
    question: 'Quels documents sont nécessaires pour un crédit consommation ?',
    answer: 'Les documents généralement demandés sont : copie de la CIN, 3 derniers bulletins de salaire, relevés bancaires des 3 derniers mois, attestation de travail et justificatif de domicile. Les professions libérales doivent fournir leurs deux dernières déclarations fiscales.',
  },
  {
    question: 'Peut-on obtenir un crédit consommation sans justificatif au Maroc ?',
    answer: 'Non, les banques marocaines exigent des justificatifs de revenus pour tout crédit consommation. Cependant, certaines banques proposent des crédits pré-approuvés à leurs clients existants qui domicilient leur salaire, avec une procédure simplifiée et un minimum de documents.',
  },
  {
    question: 'Le crédit consommation est-il soumis au taux d\'endettement de 45% ?',
    answer: 'Oui, comme tout crédit au Maroc, le crédit consommation est soumis à la règle de Bank Al-Maghrib limitant le taux d\'endettement à 45% des revenus nets mensuels. Ce taux inclut l\'ensemble de vos mensualités de crédit (immobilier, consommation, leasing).',
  },
];

export default function SimulationCreditConsoPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Crédit consommation', url: `${SITE.url}/simulation-credit-consommation/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur crédit consommation Maroc',
    'Calculez la mensualité de votre crédit à la consommation au Maroc',
    `${SITE.url}/simulation-credit-consommation/`
  );
  const faqSchema = buildFAQSchema(faqConso);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Simulateur crédit consommation</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de crédit à la consommation au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez la mensualité de votre crédit conso. Les taux varient de 7% à 12% selon les banques, avec une durée maximum de 7 ans.
        </p>

        <SimulateurCredit type="consommation" />

        <div className="mt-12 prose max-w-4xl">
          <h2>Le crédit à la consommation au Maroc</h2>
          <p>
            Le crédit à la consommation permet de financer des projets personnels : travaux de maison, électroménager,
            voyages, événements familiaux ou besoins de trésorerie. Au Maroc, les taux se situent entre 7% et 12%
            avec une durée maximale de 7 ans (84 mois).
          </p>

          <h3>Taux de crédit conso par banque</h3>
          <p>
            Les taux les plus compétitifs en 2026 sont proposés par CIH Bank et CFG Bank (à partir de 7%).
            Attijariwafa Bank et la Banque Populaire se situent dans la fourchette 7,5%-11%. Les taux les plus
            élevés sont pratiqués par Al Barid Bank et le Crédit Agricole (jusqu&apos;à 12%).
          </p>

          <h3>Documents requis</h3>
          <ul>
            <li>Copie de la CIN</li>
            <li>Justificatif de revenus (3 derniers bulletins de salaire ou avis d&apos;imposition)</li>
            <li>Relevés bancaires des 3 derniers mois</li>
            <li>Justificatif de domicile</li>
            <li>Attestation de travail (pour les salariés)</li>
          </ul>

          <h3>Conseils pour obtenir le meilleur taux</h3>
          <p>
            Pour négocier le meilleur taux de crédit consommation au Maroc, privilégiez une durée courte
            (les taux sont plus bas sur 3-4 ans que sur 7 ans), domiciliez votre salaire dans la banque
            prêteuse, et n&apos;hésitez pas à mettre les banques en concurrence en demandant plusieurs simulations.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqConso.map((faq, i) => (
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

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Réglementation sur le crédit à la consommation (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Taux moyens de crédit consommation</li>
            <li>Loi n°31-08 édictant des mesures de protection du consommateur au Maroc</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
