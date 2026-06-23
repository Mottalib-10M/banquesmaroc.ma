import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guide cr\u00e9dit immobilier Maroc 2025 - Tout savoir',
  description: 'Guide complet du cr\u00e9dit immobilier au Maroc : taux 2025, conditions, garanties, proc\u00e9dure, frais et conseils pour obtenir le meilleur pr\u00eat.',
  alternates: { canonical: `${SITE.url}/guides/credit-immobilier-maroc/` },
};

const faqData = [
  { question: 'Peut-on obtenir un cr\u00e9dit immobilier sans apport au Maroc ?', answer: 'C\'est de plus en plus difficile. La majorit\u00e9 des banques exigent 10 \u00e0 20% d\'apport. Certaines banques peuvent exceptionnellement financer 100% pour les fonctionnaires avec anciennet\u00e9.' },
  { question: 'Combien de temps prend l\'obtention d\'un cr\u00e9dit immobilier ?', answer: 'Comptez 4 \u00e0 8 semaines entre le d\u00e9p\u00f4t du dossier complet et le d\u00e9blocage des fonds. L\'\u00e9tape la plus longue est g\u00e9n\u00e9ralement l\'expertise du bien par la banque.' },
  { question: 'Peut-on rembourser son cr\u00e9dit immobilier par anticipation ?', answer: 'Oui, le remboursement anticip\u00e9 est possible mais engendre g\u00e9n\u00e9ralement des frais de 2% \u00e0 3% du capital restant d\u00fb. Certaines banques offrent le remboursement anticip\u00e9 gratuit dans les 5 premi\u00e8res ann\u00e9es.' },
];

export default function CreditImmobilierMarocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
    { name: 'Cr\u00e9dit immobilier', url: `${SITE.url}/guides/credit-immobilier-maroc/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Guide complet du cr\u00e9dit immobilier au Maroc en 2025',
    'Tout savoir sur le cr\u00e9dit immobilier au Maroc',
    `${SITE.url}/guides/credit-immobilier-maroc/`,
    '2025-01-20',
    '2025-06-01'
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
          <span className="text-charcoal font-medium">Cr\u00e9dit immobilier</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Guide complet du cr\u00e9dit immobilier au Maroc en 2025
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis \u00e0 jour le 1er juin 2025</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            Le cr\u00e9dit immobilier est la solution la plus courante pour financer l&apos;acquisition d&apos;un bien immobilier au Maroc. Que vous achetiez votre premier appartement, une villa ou un terrain \u00e0 construire, comprendre les m\u00e9canismes du pr\u00eat immobilier est essentiel pour faire le meilleur choix. Ce guide complet vous accompagne \u00e0 chaque \u00e9tape.
          </p>

          <h2>Les taux de cr\u00e9dit immobilier au Maroc en 2025</h2>
          <p>
            En 2025, les taux de cr\u00e9dit immobilier au Maroc varient entre 4,5% et 6,5% en taux fixe, selon la banque, votre profil et la dur\u00e9e du pr\u00eat. Voici un aper\u00e7u par banque :
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
              <tr><td>Soci\u00e9t\u00e9 G\u00e9n\u00e9rale</td><td>4,60%</td><td>6,00%</td></tr>
              <tr><td>Cr\u00e9dit Agricole</td><td>4,70%</td><td>6,20%</td></tr>
              <tr><td>BMCI</td><td>4,80%</td><td>6,30%</td></tr>
              <tr><td>Al Barid Bank</td><td>5,00%</td><td>6,50%</td></tr>
            </tbody>
          </table>
          <p>
            Utilisez notre <a href="/simulation-credit-immobilier/">simulateur de cr\u00e9dit immobilier</a> pour calculer votre mensualit\u00e9 et le co\u00fbt total de votre pr\u00eat.
          </p>

          <h2>Les conditions d&apos;obtention</h2>

          <h3>Le taux d&apos;endettement (r\u00e8gle des 45%)</h3>
          <p>
            La r\u00e9glementation de Bank Al-Maghrib impose un taux d&apos;endettement maximum de 45% des revenus nets mensuels. Ce taux inclut toutes vos mensualit\u00e9s de cr\u00e9dit (immobilier, consommation, leasing). Par exemple, avec un salaire net de 20 000 DH et un cr\u00e9dit conso existant de 2 000 DH/mois, votre mensualit\u00e9 immobilier ne pourra pas d\u00e9passer 7 000 DH (20 000 x 45% - 2 000 = 7 000).
          </p>

          <h3>L&apos;apport personnel</h3>
          <p>
            La plupart des banques exigent un apport personnel de 10% \u00e0 20% du prix du bien. Cet apport d\u00e9montre votre capacit\u00e9 d&apos;\u00e9pargne et r\u00e9duit le risque pour la banque. Plus votre apport est \u00e9lev\u00e9, meilleures seront les conditions de votre cr\u00e9dit (taux plus bas, acceptation plus rapide).
          </p>

          <h3>La stabilit\u00e9 professionnelle</h3>
          <p>
            Les banques demandent g\u00e9n\u00e9ralement une anciennet\u00e9 minimale de 6 mois \u00e0 1 an dans votre emploi actuel. Les fonctionnaires b\u00e9n\u00e9ficient de conditions privil\u00e9gi\u00e9es gr\u00e2ce \u00e0 la stabilit\u00e9 de leur emploi. Les professions lib\u00e9rales doivent justifier d&apos;au moins 2 ans d&apos;activit\u00e9.
          </p>

          <h2>Les \u00e9tapes du cr\u00e9dit immobilier</h2>

          <h3>\u00c9tape 1 : \u00c9valuer votre capacit\u00e9 d&apos;emprunt</h3>
          <p>
            Avant de chercher un bien, calculez votre capacit\u00e9 d&apos;emprunt avec notre <a href="/capacite-emprunt/">calculateur de capacit\u00e9</a>. Cela vous donnera une fourchette de prix r\u00e9aliste pour votre recherche.
          </p>

          <h3>\u00c9tape 2 : Comparer les offres bancaires</h3>
          <p>
            Ne vous contentez pas de votre banque actuelle. Demandez des simulations \u00e0 au moins 3 banques diff\u00e9rentes. Un \u00e9cart de 0,5% sur un pr\u00eat de 800 000 DH sur 20 ans repr\u00e9sente une \u00e9conomie de plus de 50 000 DH.
          </p>

          <h3>\u00c9tape 3 : Constituer le dossier</h3>
          <p>Les documents g\u00e9n\u00e9ralement demand\u00e9s sont :</p>
          <ul>
            <li>Copie de la CIN</li>
            <li>3 derniers bulletins de salaire</li>
            <li>Attestation de travail avec anciennet\u00e9 et salaire</li>
            <li>3 derniers relev\u00e9s bancaires</li>
            <li>Compromis de vente ou promesse d&apos;achat</li>
            <li>Titre foncier du bien</li>
            <li>Plan du bien et certificat de conformit\u00e9</li>
            <li>Justificatif de domicile</li>
          </ul>

          <h3>\u00c9tape 4 : L&apos;expertise du bien</h3>
          <p>
            La banque mandate un expert pour \u00e9valuer la valeur r\u00e9elle du bien. Le cr\u00e9dit sera accord\u00e9 sur la base de cette expertise, pas du prix de vente d\u00e9clar\u00e9. Cette \u00e9tape prend g\u00e9n\u00e9ralement 1 \u00e0 2 semaines.
          </p>

          <h3>\u00c9tape 5 : L&apos;accord de pr\u00eat et la signature</h3>
          <p>
            Apr\u00e8s accord du comit\u00e9 de cr\u00e9dit, vous recevez une offre de pr\u00eat d\u00e9taill\u00e9e. Vous disposez d&apos;un d\u00e9lai de r\u00e9flexion l\u00e9gal avant de signer. La signature se fait chez le notaire qui proc\u00e8de \u00e0 l&apos;inscription de l&apos;hypoth\u00e8que.
          </p>

          <h2>Les frais \u00e0 pr\u00e9voir</h2>
          <p>
            Au-del\u00e0 du prix du bien et des mensualit\u00e9s, pr\u00e9voyez les frais suivants :
          </p>
          <ul>
            <li><strong>Frais de dossier bancaire</strong> : 1% \u00e0 1,5% du montant du cr\u00e9dit (n\u00e9gociable, souvent ramen\u00e9 \u00e0 0,5%)</li>
            <li><strong>Droits d&apos;enregistrement</strong> : 4% du prix du bien</li>
            <li><strong>Conservation fonci\u00e8re</strong> : 1% + 1,5% du prix</li>
            <li><strong>Honoraires notaire</strong> : environ 1% du prix (+ TVA)</li>
            <li><strong>Assurance d\u00e9c\u00e8s-invalidit\u00e9 (ADI)</strong> : 0,30% \u00e0 0,50% du capital par an</li>
            <li><strong>Expertise immobili\u00e8re</strong> : 1 500 \u00e0 3 000 DH</li>
          </ul>
          <p>
            Au total, les frais annexes repr\u00e9sentent environ 7% \u00e0 10% du prix du bien. Un bien \u00e0 1 000 000 DH n\u00e9cessitera donc un budget total d&apos;environ 1 070 000 \u00e0 1 100 000 DH.
          </p>

          <h2>Taux fixe ou taux variable ?</h2>
          <p>
            Au Maroc, plus de 90% des cr\u00e9dits immobiliers sont \u00e0 taux fixe. Le taux fixe offre la s\u00e9curit\u00e9 d&apos;une mensualit\u00e9 constante pendant toute la dur\u00e9e du pr\u00eat. Le taux variable, g\u00e9n\u00e9ralement index\u00e9 sur le taux directeur de Bank Al-Maghrib (actuellement 2,75%), peut \u00eatre avantageux en p\u00e9riode de taux \u00e9lev\u00e9s si l&apos;on anticipe une baisse.
          </p>
          <p>
            <strong>Notre conseil :</strong> Privil\u00e9giez le taux fixe pour la tranquillit\u00e9 d&apos;esprit, sauf si vous avez une vision claire de l&apos;\u00e9volution des taux et que vous \u00eates pr\u00eat \u00e0 assumer le risque de hausse.
          </p>

          <h2>Conseils pour obtenir le meilleur taux</h2>
          <ol>
            <li><strong>Augmentez votre apport</strong> : un apport de 20-30% vous donnera un meilleur pouvoir de n\u00e9gociation.</li>
            <li><strong>Domiciliez votre salaire</strong> : les banques offrent de meilleurs taux aux clients qui domicilient leurs revenus.</li>
            <li><strong>Faites jouer la concurrence</strong> : demandez des simulations \u00e0 au moins 3 banques.</li>
            <li><strong>N\u00e9gociez les frais de dossier</strong> : ils sont souvent r\u00e9ductibles de 50% ou plus.</li>
            <li><strong>Optez pour une dur\u00e9e optimale</strong> : les taux sont g\u00e9n\u00e9ralement plus bas sur 15 ans que sur 25 ans.</li>
            <li><strong>Soignez votre historique bancaire</strong> : pas d&apos;incidents de paiement, pas de d\u00e9couvert chronique.</li>
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fr\u00e9quentes</h2>
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

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </article>
    </>
  );
}
