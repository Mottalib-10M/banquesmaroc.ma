import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque credit immobilier Maroc 2026 - Taux',
  description: 'Quelle banque offre le meilleur taux de credit immobilier au Maroc en 2026 ? Classement des banques par taux, conditions et avantages pour votre pret immo.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-credit-immobilier/` },
};

const faqData = [
  { question: 'Quelle banque a le meilleur taux immobilier au Maroc en 2026 ?', answer: 'CIH Bank et CFG Bank proposent les meilleurs taux a partir de 4,50%. Attijariwafa Bank et la Banque Populaire debutent egalement a 4,50% mais avec des conditions plus strictes (apport eleve, domiciliation obligatoire).' },
  { question: 'Comment negocier son taux immobilier au Maroc ?', answer: 'Augmentez votre apport (20%+ recommande), domiciliez votre salaire, presentez un dossier sans incidents bancaires et faites jouer la concurrence entre au moins 3 banques. L\'ecart negocie peut atteindre 0,3 a 0,5 point.' },
  { question: 'Quel apport minimum pour un credit immobilier au Maroc ?', answer: 'Le minimum est generalement de 10% du prix du bien. Pour les meilleurs taux, les banques demandent 20% a 30% d\'apport. Certaines banques financent 100% pour les fonctionnaires avec anciennete.' },
  { question: 'Taux fixe ou variable pour un credit immobilier au Maroc ?', answer: 'Le taux fixe est recommande pour la majorite des emprunteurs (stabilite des mensualites). Le taux variable peut etre avantageux si vous anticipez une baisse du taux directeur de Bank Al-Maghrib, actuellement a 2,75%.' },
  { question: 'Combien coute l\'assurance credit immobilier au Maroc ?', answer: 'L\'assurance deces-invalidite (ADI) coute entre 0,30% et 0,50% du capital emprunte par an. Elle est obligatoire et represente un cout significatif sur la duree totale du credit.' },
];

export default function MeilleureBanqueCreditImmobilierPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Banque credit immobilier', url: `${SITE.url}/guides/meilleure-banque-credit-immobilier/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque pour un credit immobilier au Maroc en 2026',
    'Classement des banques par taux immobilier au Maroc',
    `${SITE.url}/guides/meilleure-banque-credit-immobilier/`,
    '2025-04-15',
    '2026-06-15'
  );
  const faqSchema = buildFAQSchema(faqData);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/guides/" className="hover:text-brand">Guides</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Banque credit immobilier</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque pour un credit immobilier au Maroc 2026
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis a jour le 15 juin 2026</span>
          </div>
        </header>

        {/* En bref box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-brand mb-2">En bref</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Meilleur taux :</strong> CIH Bank et CFG Bank des 4,50%</li>
            <li><strong>Meilleur accompagnement :</strong> Attijariwafa Bank (4 800 agences)</li>
            <li><strong>Meilleur pour MRE :</strong> Banque Populaire (offres dediees)</li>
            <li><strong>Taux moyen marche :</strong> entre 5% et 5,5%</li>
            <li><strong>Endettement max :</strong> 45% des revenus nets (regle BAM)</li>
          </ul>
        </div>

        <div className="prose max-w-none">
          <p>
            Le credit immobilier represente souvent le plus gros engagement financier d&apos;une vie. Au Maroc, un ecart de
            0,5% sur un pret de 800 000 DH a 20 ans represente plus de 50 000 DH d&apos;economie. Il est donc crucial de
            choisir la bonne banque. Voici notre classement detaille base sur les taux effectifs, les conditions
            d&apos;obtention et la qualite de l&apos;accompagnement.
          </p>

          <h2>Classement par taux de credit immobilier 2026</h2>

          <h3>1. CIH Bank - Des 4,50%</h3>
          <p>
            Specialiste historique de l&apos;immobilier, CIH Bank propose les meilleurs taux du marche des 4,50% pour les
            profils premium. La banque accepte des durees jusqu&apos;a 25 ans et propose un processus 100% digitalise
            avec suivi en ligne de votre dossier. Son expertise immobiliere centenaire (fondee en 1920 comme Credit
            Immobilier et Hotelier) est un gage de professionnalisme. Utilisez notre
            <a href="/simulation-credit-immobilier/">simulateur</a> pour calculer votre mensualite avec les taux CIH.
          </p>

          <h3>2. CFG Bank - Des 4,50%</h3>
          <p>
            CFG Bank offre des taux aussi competitifs que CIH Bank (des 4,50%) avec un accompagnement personnalise
            rendu possible par son petit reseau de 40 agences. Chaque client beneficie d&apos;un conseiller dedie.
            Cependant, le reseau limite peut poser probleme pour le suivi du dossier en dehors de Casablanca et Rabat.
          </p>

          <h3>3. Attijariwafa Bank - Des 4,50%</h3>
          <p>
            AWB propose egalement un taux plancher de 4,50% mais reserve aux profils les plus solides (apport 20%+,
            hauts revenus, domiciliation). Son atout majeur est l&apos;accompagnement de proximite grace a 4 800 agences
            et des conseillers immobiliers specialises dans chaque grande agence.
          </p>

          <h3>4. Banque Populaire - Des 4,50%</h3>
          <p>
            La Banque Populaire est incontournable pour les MRE souhaitant investir dans l&apos;immobilier au Maroc, avec
            des offres dediees et des agences dans les pays d&apos;accueil. Ses taux debutent a 4,50% avec des conditions
            adaptees aux revenus percus a l&apos;etranger.
          </p>

          <h3>5. Bank of Africa - Des 4,60%</h3>
          <p>
            BOA propose des taux a partir de 4,60% avec une offre de credit immobilier en ligne performante. La banque
            est particulierement adaptee pour les projets avec une dimension panafricaine.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Banque</th>
                  <th className="text-center px-4 py-3 font-semibold">Taux min</th>
                  <th className="text-center px-4 py-3 font-semibold">Taux max</th>
                  <th className="text-center px-4 py-3 font-semibold">Duree max</th>
                  <th className="text-center px-4 py-3 font-semibold">Apport min</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 font-medium">CIH Bank</td><td className="px-4 py-3 text-center text-success font-semibold">4,50%</td><td className="px-4 py-3 text-center">5,50%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">10%</td></tr>
                <tr><td className="px-4 py-3 font-medium">CFG Bank</td><td className="px-4 py-3 text-center text-success font-semibold">4,50%</td><td className="px-4 py-3 text-center">5,50%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">10%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Attijariwafa Bank</td><td className="px-4 py-3 text-center text-success font-semibold">4,50%</td><td className="px-4 py-3 text-center">5,80%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">10-20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Banque Populaire</td><td className="px-4 py-3 text-center text-success font-semibold">4,50%</td><td className="px-4 py-3 text-center">6,00%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">10-20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Bank of Africa</td><td className="px-4 py-3 text-center">4,60%</td><td className="px-4 py-3 text-center">6,00%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">10-20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Societe Generale</td><td className="px-4 py-3 text-center">4,60%</td><td className="px-4 py-3 text-center">6,00%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">15-20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Credit Agricole</td><td className="px-4 py-3 text-center">4,70%</td><td className="px-4 py-3 text-center">6,20%</td><td className="px-4 py-3 text-center">20 ans</td><td className="px-4 py-3 text-center">15-20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">BMCI</td><td className="px-4 py-3 text-center">4,80%</td><td className="px-4 py-3 text-center">6,30%</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">20%</td></tr>
                <tr><td className="px-4 py-3 font-medium">Al Barid Bank</td><td className="px-4 py-3 text-center">5,00%</td><td className="px-4 py-3 text-center">6,50%</td><td className="px-4 py-3 text-center">20 ans</td><td className="px-4 py-3 text-center">20%</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Notre verdict</h2>
          <p>
            Pour un credit immobilier au Maroc en 2026, CIH Bank est notre recommandation numero un grace a son
            expertise centenaire dans l&apos;immobilier, ses taux parmi les plus bas et son processus digitalise. Si
            vous avez besoin d&apos;un accompagnement en agence physique, Attijariwafa Bank offre le meilleur compromis
            entre taux competitifs et reseau dense. Pour les MRE, la Banque Populaire reste incontournable.
            Dans tous les cas, faites jouer la concurrence en demandant des simulations a au moins 3 banques
            avant de vous engager. Chaque dixieme de point compte sur 20 ou 25 ans.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions frequentes</h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal hover:text-brand transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Articles lies */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
            <a href="/capacite-emprunt/" className="text-sm text-brand hover:underline font-medium">Calculer sa capacite d&apos;emprunt &rarr;</a>
            <a href="/guides/credit-immobilier-maroc/" className="text-sm text-brand hover:underline font-medium">Guide complet du credit immobilier &rarr;</a>
            <a href="/banques/cih-bank/" className="text-sm text-brand hover:underline font-medium">CIH Bank : avis complet &rarr;</a>
            <a href="/comparatif/attijariwafa-bank-vs-cih-bank/" className="text-sm text-brand hover:underline font-medium">AWB vs CIH Bank : comparatif &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
