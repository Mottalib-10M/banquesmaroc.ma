import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque au Maroc 2025 - Comparatif complet',
  description: 'Quelle est la meilleure banque au Maroc en 2025 ? Comparatif AWB, BP, CIH, BOA, SG, BMCI, CFG, CAM et Al Barid Bank.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-maroc/` },
};

const faqData = [
  { question: 'Quelle banque a le plus grand r\u00e9seau au Maroc ?', answer: 'Attijariwafa Bank avec 4 800 agences, suivie de la Banque Populaire avec 4 600 agences.' },
  { question: 'Quelle banque est la moins ch\u00e8re au Maroc ?', answer: 'CIH Bank, CFG Bank et Al Barid Bank offrent les tarifs les plus bas avec des cartes gratuites et des comptes sans frais.' },
  { question: 'Quelle banque pour les jeunes au Maroc ?', answer: 'CIH Bank avec son offre Code 30 (tout gratuit pour les moins de 30 ans) est la meilleure option pour les jeunes.' },
];

export default function MeilleureBanqueMarocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
    { name: 'Meilleure banque Maroc', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque au Maroc en 2025 : comparatif complet',
    'Guide comparatif des meilleures banques marocaines en 2025',
    `${SITE.url}/guides/meilleure-banque-maroc/`,
    '2025-01-15',
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
          <span className="text-charcoal font-medium">Meilleure banque</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque au Maroc en 2025 : le comparatif complet
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis \u00e0 jour le 1er juin 2025</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            Choisir sa banque au Maroc est une d\u00e9cision qui vous accompagnera pendant de longues ann\u00e9es. Avec 9 banques de d\u00e9tail principales, le march\u00e9 bancaire marocain offre un large \u00e9ventail de choix. Dans ce guide complet, nous analysons en d\u00e9tail chaque banque pour vous aider \u00e0 faire le meilleur choix selon votre profil et vos besoins.
          </p>

          <h2>Notre classement des banques marocaines en 2025</h2>
          <p>
            Apr\u00e8s une analyse approfondie des tarifs, des taux, des services digitaux et de la satisfaction client, voici notre classement. Nous avons \u00e9valu\u00e9 chaque banque sur cinq crit\u00e8res pond\u00e9r\u00e9s : comp\u00e9titivit\u00e9 des taux (30%), frais bancaires (20%), digital (20%), r\u00e9seau (15%) et satisfaction client (15%).
          </p>

          <h3>1. CIH Bank - Note : 8,8/10</h3>
          <p>
            CIH Bank se hisse en t\u00eate de notre classement gr\u00e2ce \u00e0 un positionnement unique sur le march\u00e9 marocain. L&apos;ancienne banque immobili\u00e8re a r\u00e9ussi sa transformation en banque universelle digitale de r\u00e9f\u00e9rence. Sa carte classique gratuite, ses taux immobiliers les plus bas du march\u00e9 (d\u00e8s 4,5%) et son offre Code 30 pour les jeunes en font un choix imbattable pour la majorit\u00e9 des Marocains.
          </p>
          <p>
            <strong>Points forts :</strong> Carte gratuite, meilleurs taux immobilier, application mobile performante, offre jeunes Code 30, pas de frais de tenue de compte.
          </p>
          <p>
            <strong>Points faibles :</strong> R\u00e9seau d&apos;agences limit\u00e9 (350 agences), offre entreprise moins d\u00e9velopp\u00e9e que les grandes banques.
          </p>
          <p>
            <strong>Pour qui ?</strong> Jeunes actifs, primo-acc\u00e9dants immobiliers, clients digitaux qui privil\u00e9gient les tarifs bas et n&apos;ont pas besoin d&apos;un grand r\u00e9seau d&apos;agences.
          </p>

          <h3>2. Attijariwafa Bank - Note : 8,5/10</h3>
          <p>
            Le leader incontest\u00e9 du march\u00e9 bancaire marocain avec 24,4% de part de march\u00e9 et 4 800 agences. Attijariwafa Bank offre la gamme de produits la plus compl\u00e8te et le r\u00e9seau le plus \u00e9tendu. Son application mobile Attijari Mobile est l&apos;une des plus compl\u00e8tes du march\u00e9.
          </p>
          <p>
            <strong>Points forts :</strong> R\u00e9seau le plus vaste (4 800 agences), pr\u00e9sence internationale (25 pays), gamme de produits tr\u00e8s large, application mobile compl\u00e8te.
          </p>
          <p>
            <strong>Points faibles :</strong> Tarifs plus \u00e9lev\u00e9s que CIH ou CFG, taux de cr\u00e9dit conso \u00e9lev\u00e9, service client parfois lent en agence.
          </p>
          <p>
            <strong>Pour qui ?</strong> Salari\u00e9s et cadres recherchant un service complet, entreprises, clients ayant besoin d&apos;un grand r\u00e9seau d&apos;agences.
          </p>

          <h3>3. Banque Populaire - Note : 8,0/10</h3>
          <p>
            La deuxi\u00e8me banque du Maroc se distingue par son mod\u00e8le coop\u00e9ratif unique et sa proximit\u00e9 avec les MRE (Marocains R\u00e9sidents \u00e0 l&apos;\u00c9tranger). Avec 4 600 agences et des Banques Populaires R\u00e9gionales (BPR) sur tout le territoire, elle est particuli\u00e8rement forte en zone rurale.
          </p>
          <p>
            <strong>Points forts :</strong> Meilleure banque pour les MRE, mod\u00e8le coop\u00e9ratif, tarifs comp\u00e9titifs sur les comptes de base, forte pr\u00e9sence rurale.
          </p>
          <p>
            <strong>Points faibles :</strong> Application mobile en retard, proc\u00e9dures parfois lourdes, taux de cr\u00e9dit conso \u00e9lev\u00e9.
          </p>
          <p>
            <strong>Pour qui ?</strong> MRE, clients en zone rurale, personnes attach\u00e9es au mod\u00e8le coop\u00e9ratif.
          </p>

          <h3>4. Bank of Africa (BMCE) - Note : 7,8/10</h3>
          <p>
            La troisi\u00e8me banque du Maroc se distingue par sa dimension panafricaine avec une pr\u00e9sence dans plus de 30 pays du continent. C&apos;est la banque de r\u00e9f\u00e9rence pour les op\u00e9rations internationales, particuli\u00e8rement vers l&apos;Afrique subsaharienne.
          </p>

          <h3>5. CFG Bank - Note : 7,5/10</h3>
          <p>
            La plus jeune banque universelle du Maroc surprend par des tarifs agressifs et une exp\u00e9rience client moderne. Carte gratuite, taux immobilier comp\u00e9titif (d\u00e8s 4,5%) et agences au design contemporain. Son principal frein reste son r\u00e9seau tr\u00e8s limit\u00e9 de 40 agences.
          </p>

          <h3>6. Soci\u00e9t\u00e9 G\u00e9n\u00e9rale Maroc - Note : 7,5/10</h3>
          <p>
            La filiale marocaine du groupe fran\u00e7ais se positionne sur le segment premium. Elle s\u00e9duit les cadres sup\u00e9rieurs et les entreprises \u00e0 vocation internationale gr\u00e2ce aux standards du groupe SG et une offre corporate de qualit\u00e9.
          </p>

          <h3>7. BMCI (BNP Paribas) - Note : 7,2/10</h3>
          <p>
            La filiale de BNP Paribas cible le segment ultra-premium avec la carte World Elite la plus exclusive du march\u00e9 (5 000 DH/an) et une expertise reconnue en gestion de patrimoine. Ses tarifs sont les plus \u00e9lev\u00e9s du march\u00e9.
          </p>

          <h3>8. Cr\u00e9dit Agricole du Maroc - Note : 6,8/10</h3>
          <p>
            La banque publique sp\u00e9cialiste du monde agricole offre les tarifs les plus bas (carte d\u00e8s 50 DH/an) mais souffre d&apos;un retard digital important et de taux de cr\u00e9dit l\u00e9g\u00e8rement au-dessus de la moyenne.
          </p>

          <h3>9. Al Barid Bank - Note : 6,5/10</h3>
          <p>
            La banque postale est l&apos;acteur cl\u00e9 de l&apos;inclusion financi\u00e8re au Maroc avec 8 millions de clients et la couverture g\u00e9ographique la plus \u00e9tendue. Id\u00e9ale pour les petits budgets et les zones rurales, mais limit\u00e9e en termes de produits et de services digitaux.
          </p>

          <h2>Crit\u00e8res de choix : comment d\u00e9cider ?</h2>

          <h3>Si vous cherchez les meilleurs taux de cr\u00e9dit immobilier</h3>
          <p>
            CIH Bank et CFG Bank proposent les taux les plus bas du march\u00e9 (d\u00e8s 4,5%). Attijariwafa Bank et la Banque Populaire sont \u00e9galement comp\u00e9titives pour les bons profils. Pour un projet immobilier, un \u00e9cart de 0,5% sur 20 ans peut repr\u00e9senter une \u00e9conomie de plus de 50 000 DH. Utilisez notre <a href="/simulation-credit-immobilier/">simulateur de cr\u00e9dit immobilier</a> pour comparer pr\u00e9cis\u00e9ment.
          </p>

          <h3>Si vous cherchez les frais les plus bas</h3>
          <p>
            CIH Bank, CFG Bank et Al Barid Bank offrent des cartes classiques gratuites (0 DH/an). CIH Bank va plus loin en supprimant les frais de tenue de compte. Pour une utilisation basique (carte classique + compte courant), ces trois banques sont les moins ch\u00e8res du march\u00e9.
          </p>

          <h3>Si vous avez besoin d&apos;un grand r\u00e9seau</h3>
          <p>
            Attijariwafa Bank (4 800 agences) et la Banque Populaire (4 600 agences) sont indispensables si vous avez besoin d&apos;agences physiques, notamment en dehors des grandes villes. Al Barid Bank, gr\u00e2ce au r\u00e9seau postal, couvre aussi les zones les plus recul\u00e9es.
          </p>

          <h3>Si vous \u00eates MRE</h3>
          <p>
            La Banque Populaire est historiquement la banque des MRE, avec des agences dans les pays d&apos;accueil (France, Belgique, Italie, Espagne, Pays-Bas) et des produits d\u00e9di\u00e9s (compte Bladi, cr\u00e9dit immobilier MRE). Attijariwafa Bank propose \u00e9galement une offre MRE attractive.
          </p>

          <h2>Conclusion : quelle banque choisir ?</h2>
          <p>
            Il n&apos;existe pas de meilleure banque universelle, mais une meilleure banque pour chaque profil. Pour les jeunes et les clients digitaux, CIH Bank est imbattable. Pour ceux qui ont besoin d&apos;un r\u00e9seau complet, Attijariwafa Bank reste le choix de r\u00e9f\u00e9rence. Les MRE se tourneront vers la Banque Populaire. Et les budgets serr\u00e9s trouveront leur bonheur chez CFG Bank ou Al Barid Bank.
          </p>
          <p>
            N&apos;h\u00e9sitez pas \u00e0 utiliser notre <a href="/comparateur-banques/">comparateur de banques</a> pour une analyse personnalis\u00e9e et nos simulateurs pour calculer pr\u00e9cis\u00e9ment l&apos;impact des diff\u00e9rences de taux sur votre projet.
          </p>
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
