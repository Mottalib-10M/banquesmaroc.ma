import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema, buildFAQSchema } from '@/lib/seo';
import SimulateurCredit from '@/components/simulateurs/SimulateurCredit';

export const metadata: Metadata = {
  title: 'Simulateur cr\u00e9dit immobilier Maroc 2025 - Calculez',
  description: 'Simulez votre cr\u00e9dit immobilier au Maroc. Calculez votre mensualit\u00e9, le co\u00fbt total et comparez les taux de AWB, BP, CIH, BOA et autres banques.',
  alternates: { canonical: `${SITE.url}/simulation-credit-immobilier/` },
};

const faqImmo = [
  {
    question: 'Quel est le meilleur taux immobilier au Maroc en 2025 ?',
    answer: 'Les meilleurs taux immobiliers en 2025 se situent autour de 4,5% pour les profils premium (hauts revenus, apport important). CIH Bank et CFG Bank proposent les taux d\'entr\u00e9e les plus bas du march\u00e9. Le taux moyen se situe entre 5% et 5,5%.',
  },
  {
    question: 'Quel apport minimum pour un cr\u00e9dit immobilier au Maroc ?',
    answer: 'La plupart des banques marocaines exigent un apport personnel minimum de 10% \u00e0 20% du prix du bien. Certaines banques peuvent financer jusqu\'\u00e0 100% pour les fonctionnaires et les professions stables, mais c\'est de plus en plus rare.',
  },
  {
    question: 'Quelle est la dur\u00e9e maximale d\'un pr\u00eat immobilier au Maroc ?',
    answer: 'La dur\u00e9e maximale d\'un cr\u00e9dit immobilier au Maroc est g\u00e9n\u00e9ralement de 25 ans. Certaines banques limitent \u00e0 20 ans selon le profil de l\'emprunteur. Plus la dur\u00e9e est longue, plus le co\u00fbt total des int\u00e9r\u00eats est \u00e9lev\u00e9.',
  },
];

export default function SimulationCreditImmobilierPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Cr\u00e9dit immobilier', url: `${SITE.url}/simulation-credit-immobilier/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur de cr\u00e9dit immobilier Maroc',
    'Calculez votre mensualit\u00e9 et le co\u00fbt total de votre pr\u00eat immobilier au Maroc',
    `${SITE.url}/simulation-credit-immobilier/`
  );
  const faqSchema = buildFAQSchema(faqImmo);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Simulateur cr\u00e9dit immobilier</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de cr\u00e9dit immobilier au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez votre mensualit\u00e9, le co\u00fbt total de votre pr\u00eat et comparez les offres des banques marocaines. Tableau d&apos;amortissement complet inclus.
        </p>

        <SimulateurCredit type="immobilier" />

        {/* Guide content */}
        <div className="mt-12 prose max-w-4xl">
          <h2>Le cr\u00e9dit immobilier au Maroc : ce qu&apos;il faut savoir</h2>
          <p>
            Le cr\u00e9dit immobilier est le produit bancaire le plus demand\u00e9 au Maroc. Que ce soit pour l&apos;achat d&apos;un
            appartement, d&apos;une villa ou d&apos;un terrain, les banques marocaines proposent des solutions de financement
            adapt\u00e9es \u00e0 tous les profils. Voici les points essentiels \u00e0 conna\u00eetre avant de souscrire.
          </p>

          <h3>Les conditions d&apos;obtention</h3>
          <p>
            Pour obtenir un cr\u00e9dit immobilier au Maroc, vous devez remplir les conditions suivantes : \u00eatre r\u00e9sident
            marocain ou MRE, avoir un revenu stable et r\u00e9gulier, respecter le taux d&apos;endettement de 45%
            maximum (r\u00e8gle Bank Al-Maghrib), disposer d&apos;un apport personnel (g\u00e9n\u00e9ralement 10-20%) et avoir
            une anciennet\u00e9 professionnelle minimum de 6 mois \u00e0 1 an.
          </p>

          <h3>Les garanties demand\u00e9es</h3>
          <p>
            Les banques marocaines exigent g\u00e9n\u00e9ralement une hypoth\u00e8que de premier rang sur le bien financ\u00e9,
            une assurance d\u00e9c\u00e8s-invalidit\u00e9 (ADI) obligatoire, et parfois une assurance perte d&apos;emploi. Le co\u00fbt
            de l&apos;assurance ADI repr\u00e9sente g\u00e9n\u00e9ralement 0,30% \u00e0 0,50% du capital emprunt\u00e9 par an.
          </p>

          <h3>Les frais annexes \u00e0 pr\u00e9voir</h3>
          <ul>
            <li>Frais de dossier : 1% \u00e0 1,5% du montant du cr\u00e9dit (n\u00e9gociable)</li>
            <li>Frais de conservation fonci\u00e8re : 1% + 1,5% du prix du bien</li>
            <li>Droits d&apos;enregistrement : 4% du prix du bien</li>
            <li>Frais de notaire : environ 1% du prix du bien</li>
            <li>Assurance d\u00e9c\u00e8s-invalidit\u00e9 : 0,30% \u00e0 0,50%/an du capital</li>
          </ul>

          <h3>Taux fixe ou taux variable ?</h3>
          <p>
            Au Maroc, la grande majorit\u00e9 des cr\u00e9dits immobiliers sont \u00e0 taux fixe (plus de 90%). Le taux fixe
            offre la s\u00e9curit\u00e9 d&apos;une mensualit\u00e9 constante pendant toute la dur\u00e9e du pr\u00eat. Les taux variables,
            index\u00e9s g\u00e9n\u00e9ralement sur le taux directeur de Bank Al-Maghrib, peuvent \u00eatre int\u00e9ressants en
            p\u00e9riode de taux \u00e9lev\u00e9s si l&apos;on anticipe une baisse, mais comportent un risque de hausse.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fr\u00e9quentes</h2>
          <div className="space-y-3">
            {faqImmo.map((faq, i) => (
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

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
