import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guide crédit immobilier Maroc 2026 - Taux, conditions et conseils pratiques',
  description: 'Guide complet du crédit immobilier au Maroc en 2026 : taux actualisés par banque, conditions d\'obtention, garanties exigées, procédure détaillée, frais annexes et conseils pour obtenir le meilleur prêt.',
  alternates: { canonical: `${SITE.url}/guides/credit-immobilier-maroc/` },
};

const faqData = [
  { question: 'Peut-on obtenir un crédit immobilier sans apport au Maroc ?', answer: 'C\'est de plus en plus difficile. La majorité des banques exigent 10 à 20% d\'apport. Certaines banques peuvent exceptionnellement financer 100% pour les fonctionnaires avec ancienneté.' },
  { question: 'Combien de temps prend l\'obtention d\'un crédit immobilier ?', answer: 'Comptez 4 à 8 semaines entre le dépôt du dossier complet et le déblocage des fonds. L\'étape la plus longue est généralement l\'expertise du bien par la banque.' },
  { question: 'Peut-on rembourser son crédit immobilier par anticipation ?', answer: 'Oui, le remboursement anticipé est possible mais engendre généralement des frais de 2% à 3% du capital restant dû. Certaines banques offrent le remboursement anticipé gratuit dans les 5 premières années.' },
  { question: 'Les MRE peuvent-ils obtenir un crédit immobilier au Maroc ?', answer: 'Oui, les Marocains Résidents à l\'Étranger (MRE) peuvent obtenir un crédit immobilier au Maroc. La Banque Populaire et Attijariwafa Bank proposent des offres dédiées avec des conditions adaptées (justificatifs de revenus du pays d\'accueil, compte Bladi).' },
  { question: 'Quelle est la différence entre taux fixe et taux variable au Maroc ?', answer: 'Le taux fixe (90% des crédits) reste identique pendant toute la durée du prêt, offrant une mensualité constante. Le taux variable est indexé sur le taux directeur de Bank Al-Maghrib et peut évoluer à la hausse ou à la baisse. Le taux fixe est recommandé pour la sécurité.' },
];

export default function CreditImmobilierMarocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
    { name: 'Crédit immobilier', url: `${SITE.url}/guides/credit-immobilier-maroc/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Guide complet du crédit immobilier au Maroc en 2026',
    'Tout savoir sur le crédit immobilier au Maroc',
    `${SITE.url}/guides/credit-immobilier-maroc/`,
    '2025-01-20',
    '2026-06-01'
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
          <a href="/guides/meilleure-banque-maroc/" className="hover:text-brand">Guides</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Crédit immobilier</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Guide complet du crédit immobilier au Maroc en 2026
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis à jour le 1er juin 2026</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            Le crédit immobilier est la solution la plus courante pour financer l&apos;acquisition d&apos;un bien immobilier au Maroc. Que vous achetiez votre premier appartement, une villa ou un terrain à construire, comprendre les mécanismes du prêt immobilier est essentiel pour faire le meilleur choix. Ce guide complet vous accompagne à chaque étape.
          </p>

          <h2>Les taux de crédit immobilier au Maroc en 2026</h2>
          <p>
            En 2026, les taux de crédit immobilier au Maroc varient entre 4,5% et 6,5% en taux fixe, selon la banque, votre profil et la durée du prêt. Voici un aperçu par banque :
          </p>
          <table>
            <thead>
              <tr>
                <th>Banque</th>
                <th>Taux minimum</th>
                <th>Taux maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CIH Bank</td><td><strong>4,50%</strong></td><td>5,50%</td></tr>
              <tr><td>CFG Bank</td><td><strong>4,50%</strong></td><td>5,50%</td></tr>
              <tr><td>Attijariwafa Bank</td><td>4,50%</td><td>5,80%</td></tr>
              <tr><td>Banque Populaire</td><td>4,50%</td><td>6,00%</td></tr>
              <tr><td>Bank of Africa</td><td>4,60%</td><td>6,00%</td></tr>
              <tr><td>Société Générale</td><td>4,60%</td><td>6,00%</td></tr>
              <tr><td>Crédit Agricole</td><td>4,70%</td><td>6,20%</td></tr>
              <tr><td>BMCI</td><td>4,80%</td><td>6,30%</td></tr>
              <tr><td>Al Barid Bank</td><td>5,00%</td><td>6,50%</td></tr>
            </tbody>
          </table>
          <p>
            Utilisez notre <a href="/simulation-credit-immobilier/">simulateur de crédit immobilier</a> pour calculer votre mensualité et le coût total de votre prêt.
          </p>

          <h2>Les conditions d&apos;obtention</h2>

          <h3>Le taux d&apos;endettement (règle des 45%)</h3>
          <p>
            La réglementation de Bank Al-Maghrib impose un taux d&apos;endettement maximum de 45% des revenus nets mensuels. Ce taux inclut toutes vos mensualités de crédit (immobilier, consommation, leasing). Par exemple, avec un salaire net de 20 000 DH et un crédit conso existant de 2 000 DH/mois, votre mensualité immobilier ne pourra pas dépasser 7 000 DH (20 000 x 45% - 2 000 = 7 000).
          </p>

          <h3>L&apos;apport personnel</h3>
          <p>
            La plupart des banques exigent un apport personnel de 10% à 20% du prix du bien. Cet apport démontre votre capacité d&apos;épargne et réduit le risque pour la banque. Plus votre apport est élevé, meilleures seront les conditions de votre crédit (taux plus bas, acceptation plus rapide).
          </p>

          <h3>La stabilité professionnelle</h3>
          <p>
            Les banques demandent généralement une ancienneté minimale de 6 mois à 1 an dans votre emploi actuel. Les fonctionnaires bénéficient de conditions privilégiées grâce à la stabilité de leur emploi. Les professions libérales doivent justifier d&apos;au moins 2 ans d&apos;activité.
          </p>

          <h2>Les étapes du crédit immobilier</h2>

          <h3>Étape 1 : Évaluer votre capacité d&apos;emprunt</h3>
          <p>
            Avant de chercher un bien, calculez votre capacité d&apos;emprunt avec notre <a href="/capacite-emprunt/">calculateur de capacité</a>. Cela vous donnera une fourchette de prix réaliste pour votre recherche.
          </p>

          <h3>Étape 2 : Comparer les offres bancaires</h3>
          <p>
            Ne vous contentez pas de votre banque actuelle. Demandez des simulations à au moins 3 banques différentes. Un écart de 0,5% sur un prêt de 800 000 DH sur 20 ans représente une économie de plus de 50 000 DH.
          </p>

          <h3>Étape 3 : Constituer le dossier</h3>
          <p>Les documents généralement demandés sont :</p>
          <ul>
            <li>Copie de la CIN</li>
            <li>3 derniers bulletins de salaire</li>
            <li>Attestation de travail avec ancienneté et salaire</li>
            <li>3 derniers relevés bancaires</li>
            <li>Compromis de vente ou promesse d&apos;achat</li>
            <li>Titre foncier du bien</li>
            <li>Plan du bien et certificat de conformité</li>
            <li>Justificatif de domicile</li>
          </ul>

          <h3>Étape 4 : L&apos;expertise du bien</h3>
          <p>
            La banque mandate un expert pour évaluer la valeur réelle du bien. Le crédit sera accordé sur la base de cette expertise, pas du prix de vente déclaré. Cette étape prend généralement 1 à 2 semaines.
          </p>

          <h3>Étape 5 : L&apos;accord de prêt et la signature</h3>
          <p>
            Après accord du comité de crédit, vous recevez une offre de prêt détaillée. Vous disposez d&apos;un délai de réflexion légal avant de signer. La signature se fait chez le notaire qui procède à l&apos;inscription de l&apos;hypothèque.
          </p>

          <h2>Les frais à prévoir</h2>
          <p>
            Au-delà du prix du bien et des mensualités, prévoyez les frais suivants :
          </p>
          <ul>
            <li><strong>Frais de dossier bancaire</strong> : 1% à 1,5% du montant du crédit (négociable, souvent ramené à 0,5%)</li>
            <li><strong>Droits d&apos;enregistrement</strong> : 4% du prix du bien</li>
            <li><strong>Conservation foncière</strong> : 1% + 1,5% du prix</li>
            <li><strong>Honoraires notaire</strong> : environ 1% du prix (+ TVA)</li>
            <li><strong>Assurance décès-invalidité (ADI)</strong> : 0,30% à 0,50% du capital par an</li>
            <li><strong>Expertise immobilière</strong> : 1 500 à 3 000 DH</li>
          </ul>
          <p>
            Au total, les frais annexes représentent environ 7% à 10% du prix du bien. Un bien à 1 000 000 DH nécessitera donc un budget total d&apos;environ 1 070 000 à 1 100 000 DH.
          </p>

          <h2>Taux fixe ou taux variable ?</h2>
          <p>
            Au Maroc, plus de 90% des crédits immobiliers sont à taux fixe. Le taux fixe offre la sécurité d&apos;une mensualité constante pendant toute la durée du prêt. Le taux variable, généralement indexé sur le taux directeur de Bank Al-Maghrib (actuellement 2,75%), peut être avantageux en période de taux élevés si l&apos;on anticipe une baisse.
          </p>
          <p>
            <strong>Notre conseil :</strong> Privilégiez le taux fixe pour la tranquillité d&apos;esprit, sauf si vous avez une vision claire de l&apos;évolution des taux et que vous êtes prêt à assumer le risque de hausse.
          </p>

          <h2>Conseils pour obtenir le meilleur taux</h2>
          <ol>
            <li><strong>Augmentez votre apport</strong> : un apport de 20-30% vous donnera un meilleur pouvoir de négociation.</li>
            <li><strong>Domiciliez votre salaire</strong> : les banques offrent de meilleurs taux aux clients qui domicilient leurs revenus.</li>
            <li><strong>Faites jouer la concurrence</strong> : demandez des simulations à au moins 3 banques.</li>
            <li><strong>Négociez les frais de dossier</strong> : ils sont souvent réductibles de 50% ou plus.</li>
            <li><strong>Optez pour une durée optimale</strong> : les taux sont généralement plus bas sur 15 ans que sur 25 ans.</li>
            <li><strong>Soignez votre historique bancaire</strong> : pas d&apos;incidents de paiement, pas de découvert chronique.</li>
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes</h2>
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

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Taux directeur et statistiques du crédit immobilier (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Conditions de crédit immobilier</li>
            <li>Conservation Foncière – Barème des frais d&apos;inscription hypothécaire au Maroc</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </article>
    </>
  );
}
