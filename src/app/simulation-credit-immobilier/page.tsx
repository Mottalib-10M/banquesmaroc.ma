import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema, buildFAQSchema } from '@/lib/seo';
import SimulateurCredit from '@/components/simulateurs/SimulateurCredit';

export const metadata: Metadata = {
  title: 'Simulateur crédit immobilier Maroc 2026 - Calculez vos mensualités et comparez les taux',
  description: 'Simulez votre crédit immobilier au Maroc en 2026. Calculez votre mensualité, le coût total du prêt et comparez les taux de AWB, Banque Populaire, CIH, BOA et toutes les banques marocaines.',
  alternates: { canonical: `${SITE.url}/simulation-credit-immobilier/` },
};

const faqImmo = [
  {
    question: 'Quel est le meilleur taux immobilier au Maroc en 2026 ?',
    answer: 'Les meilleurs taux immobiliers en 2026 se situent autour de 4,5% pour les profils premium (hauts revenus, apport important). CIH Bank et CFG Bank proposent les taux d\'entrée les plus bas du marché. Le taux moyen se situe entre 5% et 5,5%.',
  },
  {
    question: 'Quel apport minimum pour un crédit immobilier au Maroc ?',
    answer: 'La plupart des banques marocaines exigent un apport personnel minimum de 10% à 20% du prix du bien. Certaines banques peuvent financer jusqu\'à 100% pour les fonctionnaires et les professions stables, mais c\'est de plus en plus rare.',
  },
  {
    question: 'Quelle est la durée maximale d\'un prêt immobilier au Maroc ?',
    answer: 'La durée maximale d\'un crédit immobilier au Maroc est généralement de 25 ans. Certaines banques limitent à 20 ans selon le profil de l\'emprunteur. Plus la durée est longue, plus le coût total des intérêts est élevé.',
  },
  {
    question: 'Comment est calculée la mensualité d\'un crédit immobilier ?',
    answer: 'La mensualité est calculée selon la formule d\'amortissement constant : M = C × t / (1 - (1 + t)^-n), où C est le capital emprunté, t le taux mensuel et n le nombre de mensualités. Notre simulateur effectue ce calcul automatiquement et inclut le tableau d\'amortissement complet.',
  },
  {
    question: 'Peut-on renégocier son crédit immobilier au Maroc ?',
    answer: 'Oui, il est possible de renégocier son crédit immobilier au Maroc, soit auprès de sa banque actuelle, soit en faisant un rachat de crédit par une autre banque. Cette opération est intéressante si l\'écart de taux est d\'au moins 0,5 point et qu\'il reste plus de la moitié de la durée du prêt à rembourser.',
  },
];

export default function SimulationCreditImmobilierPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Crédit immobilier', url: `${SITE.url}/simulation-credit-immobilier/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur de crédit immobilier Maroc',
    'Calculez votre mensualité et le coût total de votre prêt immobilier au Maroc',
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
          <span className="text-charcoal font-medium">Simulateur crédit immobilier</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de crédit immobilier au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez votre mensualité, le coût total de votre prêt et comparez les offres des banques marocaines. Tableau d&apos;amortissement complet inclus.
        </p>

        <SimulateurCredit type="immobilier" />

        {/* Guide content */}
        <div className="mt-12 prose max-w-4xl">
          <h2>Le crédit immobilier au Maroc : ce qu&apos;il faut savoir</h2>
          <p>
            Le crédit immobilier est le produit bancaire le plus demandé au Maroc. Que ce soit pour l&apos;achat d&apos;un
            appartement, d&apos;une villa ou d&apos;un terrain, les banques marocaines proposent des solutions de financement
            adaptées à tous les profils. Voici les points essentiels à connaître avant de souscrire.
          </p>

          <h3>Les conditions d&apos;obtention</h3>
          <p>
            Pour obtenir un crédit immobilier au Maroc, vous devez remplir les conditions suivantes : être résident
            marocain ou MRE, avoir un revenu stable et régulier, respecter le taux d&apos;endettement de 45%
            maximum (règle Bank Al-Maghrib), disposer d&apos;un apport personnel (généralement 10-20%) et avoir
            une ancienneté professionnelle minimum de 6 mois à 1 an.
          </p>

          <h3>Les garanties demandées</h3>
          <p>
            Les banques marocaines exigent généralement une hypothèque de premier rang sur le bien financé,
            une assurance décès-invalidité (ADI) obligatoire, et parfois une assurance perte d&apos;emploi. Le coût
            de l&apos;assurance ADI représente généralement 0,30% à 0,50% du capital emprunté par an.
          </p>

          <h3>Les frais annexes à prévoir</h3>
          <ul>
            <li>Frais de dossier : 1% à 1,5% du montant du crédit (négociable)</li>
            <li>Frais de conservation foncière : 1% + 1,5% du prix du bien</li>
            <li>Droits d&apos;enregistrement : 4% du prix du bien</li>
            <li>Frais de notaire : environ 1% du prix du bien</li>
            <li>Assurance décès-invalidité : 0,30% à 0,50%/an du capital</li>
          </ul>

          <h3>Taux fixe ou taux variable ?</h3>
          <p>
            Au Maroc, la grande majorité des crédits immobiliers sont à taux fixe (plus de 90%). Le taux fixe
            offre la sécurité d&apos;une mensualité constante pendant toute la durée du prêt. Les taux variables,
            indexés généralement sur le taux directeur de Bank Al-Maghrib, peuvent être intéressants en
            période de taux élevés si l&apos;on anticipe une baisse, mais comportent un risque de hausse.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes</h2>
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

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Taux directeur et réglementation prudentielle (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Statistiques bancaires et taux moyens</li>
            <li>Circulaire Bank Al-Maghrib n°19/G/2002 relative au taux d&apos;endettement maximum des emprunteurs</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
