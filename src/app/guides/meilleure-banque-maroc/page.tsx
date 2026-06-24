import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque au Maroc 2026 - Comparatif des 9 banques',
  description: 'Quelle est la meilleure banque au Maroc en 2026 ? Comparatif détaillé de AWB, Banque Populaire, CIH, BOA, SG, BMCI, CFG, CAM et Al Barid Bank avec notes.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-maroc/` },
};

const faqData = [
  { question: 'Quelle banque a le plus grand réseau au Maroc ?', answer: 'Attijariwafa Bank avec 4 800 agences, suivie de la Banque Populaire avec 4 600 agences.' },
  { question: 'Quelle banque est la moins chère au Maroc ?', answer: 'CIH Bank, CFG Bank et Al Barid Bank offrent les tarifs les plus bas avec des cartes gratuites et des comptes sans frais.' },
  { question: 'Quelle banque pour les jeunes au Maroc ?', answer: 'CIH Bank avec son offre Code 30 (tout gratuit pour les moins de 30 ans) est la meilleure option pour les jeunes.' },
  { question: 'Quelle banque choisir pour un crédit immobilier au Maroc ?', answer: 'CIH Bank et CFG Bank proposent les taux les plus bas (dès 4,5%). Pour les gros projets nécessitant un accompagnement en agence, Attijariwafa Bank et la Banque Populaire offrent un suivi personnalisé grâce à leur vaste réseau.' },
  { question: 'Quelle est la meilleure banque en ligne au Maroc ?', answer: 'CIH Bank est considérée comme la banque la plus digitale du Maroc avec une application mobile très performante, l\'ouverture de compte en ligne et des services 100% dématérialisés. CFG Bank propose également une expérience digitale moderne.' },
];

export default function MeilleureBanqueMarocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
    { name: 'Meilleure banque Maroc', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque au Maroc en 2026 : comparatif complet',
    'Guide comparatif des meilleures banques marocaines en 2026',
    `${SITE.url}/guides/meilleure-banque-maroc/`,
    '2025-01-15',
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
          <span className="text-charcoal font-medium">Meilleure banque</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque au Maroc en 2026 : le comparatif complet
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis à jour le 1er juin 2026</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            Choisir sa banque au Maroc est une décision qui vous accompagnera pendant de longues années. Avec 9 banques de détail principales, le marché bancaire marocain offre un large éventail de choix. Dans ce guide complet, nous analysons en détail chaque banque pour vous aider à faire le meilleur choix selon votre profil et vos besoins.
          </p>

          <h2>Notre classement des banques marocaines en 2026</h2>
          <p>
            Après une analyse approfondie des tarifs, des taux, des services digitaux et de la satisfaction client, voici notre classement. Nous avons évalué chaque banque sur cinq critères pondérés : compétitivité des taux (30%), frais bancaires (20%), digital (20%), réseau (15%) et satisfaction client (15%).
          </p>

          <h3>1. CIH Bank - Note : 8,8/10</h3>
          <p>
            CIH Bank se hisse en tête de notre classement grâce à un positionnement unique sur le marché marocain. L&apos;ancienne banque immobilière a réussi sa transformation en banque universelle digitale de référence. Sa carte classique gratuite, ses taux immobiliers les plus bas du marché (dès 4,5%) et son offre Code 30 pour les jeunes en font un choix imbattable pour la majorité des Marocains.
          </p>
          <p>
            <strong>Points forts :</strong> Carte gratuite, meilleurs taux immobilier, application mobile performante, offre jeunes Code 30, pas de frais de tenue de compte.
          </p>
          <p>
            <strong>Points faibles :</strong> Réseau d&apos;agences limité (350 agences), offre entreprise moins développée que les grandes banques.
          </p>
          <p>
            <strong>Pour qui ?</strong> Jeunes actifs, primo-accédants immobiliers, clients digitaux qui privilégient les tarifs bas et n&apos;ont pas besoin d&apos;un grand réseau d&apos;agences.
          </p>

          <h3>2. Attijariwafa Bank - Note : 8,5/10</h3>
          <p>
            Le leader incontesté du marché bancaire marocain avec 24,4% de part de marché et 4 800 agences. Attijariwafa Bank offre la gamme de produits la plus complète et le réseau le plus étendu. Son application mobile Attijari Mobile est l&apos;une des plus complètes du marché.
          </p>
          <p>
            <strong>Points forts :</strong> Réseau le plus vaste (4 800 agences), présence internationale (25 pays), gamme de produits très large, application mobile complète.
          </p>
          <p>
            <strong>Points faibles :</strong> Tarifs plus élevés que CIH ou CFG, taux de crédit conso élevé, service client parfois lent en agence.
          </p>
          <p>
            <strong>Pour qui ?</strong> Salariés et cadres recherchant un service complet, entreprises, clients ayant besoin d&apos;un grand réseau d&apos;agences.
          </p>

          <h3>3. Banque Populaire - Note : 8,0/10</h3>
          <p>
            La deuxième banque du Maroc se distingue par son modèle coopératif unique et sa proximité avec les MRE (Marocains Résidents à l&apos;Étranger). Avec 4 600 agences et des Banques Populaires Régionales (BPR) sur tout le territoire, elle est particulièrement forte en zone rurale.
          </p>
          <p>
            <strong>Points forts :</strong> Meilleure banque pour les MRE, modèle coopératif, tarifs compétitifs sur les comptes de base, forte présence rurale.
          </p>
          <p>
            <strong>Points faibles :</strong> Application mobile en retard, procédures parfois lourdes, taux de crédit conso élevé.
          </p>
          <p>
            <strong>Pour qui ?</strong> MRE, clients en zone rurale, personnes attachées au modèle coopératif.
          </p>

          <h3>4. Bank of Africa (BMCE) - Note : 7,8/10</h3>
          <p>
            La troisième banque du Maroc se distingue par sa dimension panafricaine avec une présence dans plus de 30 pays du continent. C&apos;est la banque de référence pour les opérations internationales, particulièrement vers l&apos;Afrique subsaharienne.
          </p>

          <h3>5. CFG Bank - Note : 7,5/10</h3>
          <p>
            La plus jeune banque universelle du Maroc surprend par des tarifs agressifs et une expérience client moderne. Carte gratuite, taux immobilier compétitif (dès 4,5%) et agences au design contemporain. Son principal frein reste son réseau très limité de 40 agences.
          </p>

          <h3>6. Société Générale Maroc - Note : 7,5/10</h3>
          <p>
            La filiale marocaine du groupe français se positionne sur le segment premium. Elle séduit les cadres supérieurs et les entreprises à vocation internationale grâce aux standards du groupe SG et une offre corporate de qualité.
          </p>

          <h3>7. BMCI (BNP Paribas) - Note : 7,2/10</h3>
          <p>
            La filiale de BNP Paribas cible le segment ultra-premium avec la carte World Elite la plus exclusive du marché (5 000 DH/an) et une expertise reconnue en gestion de patrimoine. Ses tarifs sont les plus élevés du marché.
          </p>

          <h3>8. Crédit Agricole du Maroc - Note : 6,8/10</h3>
          <p>
            La banque publique spécialiste du monde agricole offre les tarifs les plus bas (carte dès 50 DH/an) mais souffre d&apos;un retard digital important et de taux de crédit légèrement au-dessus de la moyenne.
          </p>

          <h3>9. Al Barid Bank - Note : 6,5/10</h3>
          <p>
            La banque postale est l&apos;acteur clé de l&apos;inclusion financière au Maroc avec 8 millions de clients et la couverture géographique la plus étendue. Idéale pour les petits budgets et les zones rurales, mais limitée en termes de produits et de services digitaux.
          </p>

          <h2>Critères de choix : comment décider ?</h2>

          <h3>Si vous cherchez les meilleurs taux de crédit immobilier</h3>
          <p>
            CIH Bank et CFG Bank proposent les taux les plus bas du marché (dès 4,5%). Attijariwafa Bank et la Banque Populaire sont également compétitives pour les bons profils. Pour un projet immobilier, un écart de 0,5% sur 20 ans peut représenter une économie de plus de 50 000 DH. Utilisez notre <a href="/simulation-credit-immobilier/">simulateur de crédit immobilier</a> pour comparer précisément.
          </p>

          <h3>Si vous cherchez les frais les plus bas</h3>
          <p>
            CIH Bank, CFG Bank et Al Barid Bank offrent des cartes classiques gratuites (0 DH/an). CIH Bank va plus loin en supprimant les frais de tenue de compte. Pour une utilisation basique (carte classique + compte courant), ces trois banques sont les moins chères du marché.
          </p>

          <h3>Si vous avez besoin d&apos;un grand réseau</h3>
          <p>
            Attijariwafa Bank (4 800 agences) et la Banque Populaire (4 600 agences) sont indispensables si vous avez besoin d&apos;agences physiques, notamment en dehors des grandes villes. Al Barid Bank, grâce au réseau postal, couvre aussi les zones les plus reculées.
          </p>

          <h3>Si vous êtes MRE</h3>
          <p>
            La Banque Populaire est historiquement la banque des MRE, avec des agences dans les pays d&apos;accueil (France, Belgique, Italie, Espagne, Pays-Bas) et des produits dédiés (compte Bladi, crédit immobilier MRE). Attijariwafa Bank propose également une offre MRE attractive.
          </p>

          <h2>Conclusion : quelle banque choisir ?</h2>
          <p>
            Il n&apos;existe pas de meilleure banque universelle, mais une meilleure banque pour chaque profil. Pour les jeunes et les clients digitaux, CIH Bank est imbattable. Pour ceux qui ont besoin d&apos;un réseau complet, Attijariwafa Bank reste le choix de référence. Les MRE se tourneront vers la Banque Populaire. Et les budgets serrés trouveront leur bonheur chez CFG Bank ou Al Barid Bank.
          </p>
          <p>
            N&apos;hésitez pas à utiliser notre <a href="/comparateur-banques/">comparateur de banques</a> pour une analyse personnalisée et nos simulateurs pour calculer précisément l&apos;impact des différences de taux sur votre projet.
          </p>
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
            <li>Bank Al-Maghrib – Rapport annuel sur la supervision bancaire (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Parts de marché et statistiques sectorielles</li>
            <li>Rapports annuels des banques marocaines – Données financières et réseau d&apos;agences</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </article>
    </>
  );
}
