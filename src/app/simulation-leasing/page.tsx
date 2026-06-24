import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema, buildFAQSchema } from '@/lib/seo';
import SimulateurLeasing from '@/components/simulateurs/SimulateurLeasing';

export const metadata: Metadata = {
  title: 'Simulateur leasing auto Maroc - LOA et mensualités',
  description: 'Calculez votre mensualité de leasing auto (LOA) au Maroc. Taux de 5% à 8%. Comparez les offres de Wafabail, Maroc Leasing, Maghrebail et Sogelease Maroc.',
  alternates: { canonical: `${SITE.url}/simulation-leasing/` },
};

const faqLeasing = [
  {
    question: 'Quel est le taux moyen de leasing auto au Maroc ?',
    answer: 'En 2026, les taux de leasing automobile au Maroc varient entre 5% et 8% selon l\'organisme, la durée du contrat et le profil du client. Les meilleurs taux sont généralement réservés aux entreprises et professions libérales qui bénéficient de l\'avantage fiscal.',
  },
  {
    question: 'Quelle est la différence entre leasing et crédit auto ?',
    answer: 'Le leasing (LOA) est une location avec option d\'achat : le véhicule reste la propriété de l\'organisme de leasing jusqu\'au paiement de la valeur résiduelle. Le crédit auto est un prêt classique : vous êtes propriétaire dès l\'achat. Le leasing offre des avantages fiscaux pour les professionnels.',
  },
  {
    question: 'Quel apport initial pour un leasing auto au Maroc ?',
    answer: 'L\'apport initial (premier loyer majoré) représente généralement 10% à 30% du prix du véhicule. Plus l\'apport est élevé, plus les mensualités sont basses. Certains organismes proposent un leasing sans apport pour les entreprises avec un bon historique.',
  },
  {
    question: 'Quels sont les avantages fiscaux du leasing au Maroc ?',
    answer: 'Pour les professionnels et entreprises, les loyers de leasing sont entièrement déductibles du résultat imposable. La TVA est incluse dans les loyers et récupérable. Le véhicule n\'apparaît pas dans le bilan de l\'entreprise, ce qui améliore les ratios financiers.',
  },
  {
    question: 'Que se passe-t-il à la fin du contrat de leasing ?',
    answer: 'À la fin du contrat, vous avez trois options : lever l\'option d\'achat en payant la valeur résiduelle pour devenir propriétaire du véhicule, restituer le véhicule à l\'organisme de leasing, ou renouveler le contrat avec un nouveau véhicule. La plupart des clients lèvent l\'option d\'achat.',
  },
];

export default function SimulationLeasingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Leasing auto', url: `${SITE.url}/simulation-leasing/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur leasing auto Maroc',
    'Calculez votre mensualité de leasing automobile au Maroc',
    `${SITE.url}/simulation-leasing/`
  );
  const faqSchema = buildFAQSchema(faqLeasing);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Simulateur leasing auto</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de leasing auto au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez votre mensualité de LOA (Location avec Option d&apos;Achat). Taux de 5% à 8% au Maroc, durée de 2 à 7 ans.
        </p>

        <SimulateurLeasing />

        <div className="mt-12 prose max-w-4xl">
          <h2>Le leasing automobile au Maroc</h2>
          <p>
            Le leasing auto, ou LOA (Location avec Option d&apos;Achat), est un mode de financement très répandu
            au Maroc, particulièrement pour les professionnels et les entreprises grâce à ses avantages fiscaux.
            Contrairement au crédit classique, le véhicule reste la propriété de l&apos;organisme de leasing
            jusqu&apos;au paiement de la valeur résiduelle.
          </p>

          <h3>Comment fonctionne le leasing ?</h3>
          <p>
            Vous choisissez un véhicule, versez un apport initial (généralement 10-30%), puis payez des mensualités
            pendant la durée du contrat (2 à 7 ans). À la fin du contrat, vous avez le choix : lever l&apos;option
            d&apos;achat en payant la valeur résiduelle (et devenir propriétaire), restituer le véhicule, ou
            renouveler le contrat avec un nouveau véhicule.
          </p>

          <h3>Avantages du leasing</h3>
          <ul>
            <li><strong>Avantage fiscal</strong> : les loyers sont déductibles pour les professionnels</li>
            <li><strong>Pas de TVA sur l&apos;acquisition</strong> : la TVA est incluse dans les loyers</li>
            <li><strong>Mensualités plus basses</strong> : grâce à la valeur résiduelle</li>
            <li><strong>Flexibilité</strong> : possibilité de changer de véhicule régulièrement</li>
          </ul>

          <h3>Principaux acteurs du leasing au Maroc</h3>
          <p>
            Les principales sociétés de leasing au Maroc sont : Wafabail (Attijariwafa Bank), Maroc Leasing
            (Banque Populaire), Maghrebail (BMCE BOA), Sogelease (Société Générale) et BMCI Leasing. Les
            taux varient de 5% à 8% selon l&apos;organisme et le profil du client.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqLeasing.map((faq, i) => (
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


        {/* Articles lies */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <a href="/simulation-credit-consommation/" className="text-sm text-brand hover:underline font-medium">Simulateur credit consommation &rarr;</a>
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/guides/meilleure-banque-professionnel/" className="text-sm text-brand hover:underline font-medium">Meilleure banque pro &rarr;</a>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Réglementation du crédit-bail et leasing (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Sociétés de Financement (APSF) – Statistiques du leasing au Maroc</li>
            <li>Code Général des Impôts – Dispositions relatives à la déductibilité des loyers de leasing</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
