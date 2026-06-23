import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Comment choisir sa carte bancaire au Maroc 2025',
  description: 'Guide complet pour choisir votre carte bancaire au Maroc. Comparatif Visa, Mastercard, classique, Gold, Platinum, Infinite avec tarifs.',
  alternates: { canonical: `${SITE.url}/guides/comment-choisir-carte-bancaire/` },
};

const faqData = [
  { question: 'Quelle est la carte bancaire la moins ch\u00e8re au Maroc ?', answer: 'Les cartes classiques de CIH Bank, CFG Bank et Al Barid Bank (carte e-Barid) sont enti\u00e8rement gratuites (0 DH/an).' },
  { question: 'Faut-il prendre une carte Gold au Maroc ?', answer: 'La carte Gold est recommand\u00e9e si vous voyagez r\u00e9guli\u00e8rement \u00e0 l\u2019\u00e9tranger pour ses assurances voyage et ses plafonds internationaux plus \u00e9lev\u00e9s. Sinon, une carte classique suffit.' },
  { question: 'Peut-on utiliser une carte marocaine \u00e0 l\u2019\u00e9tranger ?', answer: 'Oui, les cartes Gold, Platinum et Infinite sont utilisables \u00e0 l\u2019international. Les cartes classiques sont g\u00e9n\u00e9ralement limit\u00e9es au Maroc.' },
];

export default function CommentChoisirCartePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/meilleure-banque-maroc/` },
    { name: 'Choisir sa carte', url: `${SITE.url}/guides/comment-choisir-carte-bancaire/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Comment choisir sa carte bancaire au Maroc en 2025',
    'Guide pratique pour comparer et choisir la meilleure carte bancaire au Maroc',
    `${SITE.url}/guides/comment-choisir-carte-bancaire/`,
    '2025-02-01',
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
          <span className="text-charcoal font-medium">Choisir sa carte bancaire</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Comment choisir sa carte bancaire au Maroc en 2025
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis \u00e0 jour le 1er juin 2025</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p>
            La carte bancaire est votre compagnon financier au quotidien. Au Maroc, les banques proposent une gamme vari\u00e9e de cartes allant de la classique gratuite \u00e0 l&apos;ultra-premium \u00e0 5 000 DH/an. Comment s&apos;y retrouver et choisir celle qui correspond vraiment \u00e0 vos besoins ? Ce guide vous explique tout en d\u00e9tail.
          </p>

          <h2>Les 4 niveaux de cartes bancaires au Maroc</h2>

          <h3>Carte Classique (Visa ou Mastercard)</h3>
          <p>
            <strong>Cotisation :</strong> 0 \u00e0 100 DH/an selon la banque.
          </p>
          <p>
            La carte d&apos;entr\u00e9e de gamme est largement suffisante pour une utilisation quotidienne au Maroc. Elle permet de retirer de l&apos;argent aux guichets automatiques, de payer chez les commer\u00e7ants \u00e9quip\u00e9s de TPE et de faire des achats en ligne sur les sites marocains.
          </p>
          <p>
            Les plafonds typiques sont de 5 000 DH par jour en retrait et 15 000 \u00e0 20 000 DH par mois en paiement. La carte classique est g\u00e9n\u00e9ralement limit\u00e9e au Maroc et ne dispose pas d&apos;assurance voyage.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CIH Bank (gratuite), CFG Bank (gratuite), Al Barid Bank e-Barid (gratuite), Cr\u00e9dit Agricole (50 DH/an), Banque Populaire (60 DH/an).
          </p>

          <h3>Carte Gold / Premium</h3>
          <p>
            <strong>Cotisation :</strong> 200 \u00e0 500 DH/an.
          </p>
          <p>
            L&apos;\u00e9tape au-dessus qui apporte principalement deux avantages majeurs : des plafonds de retrait et de paiement nettement plus \u00e9lev\u00e9s (10 000-15 000 DH/jour en retrait, 40 000-60 000 DH/mois en paiement) et une couverture d&apos;assurance voyage incluant le rapatriement m\u00e9dical, la perte de bagages et l&apos;annulation de voyage.
          </p>
          <p>
            La carte Gold est particuli\u00e8rement recommand\u00e9e si vous voyagez r\u00e9guli\u00e8rement \u00e0 l&apos;\u00e9tranger. Elle fonctionne dans le monde entier et ses plafonds internationaux sont confortables.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CFG Bank (200 DH/an), Al Barid Bank (200 DH/an), CIH Bank (250 DH/an), Cr\u00e9dit Agricole (280 DH/an), Banque Populaire (300 DH/an).
          </p>

          <h3>Carte Platinum</h3>
          <p>
            <strong>Cotisation :</strong> 600 \u00e0 1 500 DH/an.
          </p>
          <p>
            La carte premium par excellence. Au-del\u00e0 des plafonds encore plus \u00e9lev\u00e9s (20 000-30 000 DH/jour en retrait), la carte Platinum offre g\u00e9n\u00e9ralement du cashback sur vos achats (0,5% en moyenne), une protection \u00e9tendue des achats (extension de garantie, remboursement en cas de vol), et un service de conciergerie pour vos r\u00e9servations.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CIH Bank (600 DH/an, meilleur rapport qualit\u00e9-prix), Cr\u00e9dit Agricole (700 DH/an), Banque Populaire (800 DH/an), CFG Bank (800 DH/an).
          </p>

          <h3>Carte Infinite / World Elite</h3>
          <p>
            <strong>Cotisation :</strong> 2 000 \u00e0 5 000 DH/an.
          </p>
          <p>
            Le summum de l&apos;offre carte au Maroc. R\u00e9serv\u00e9e aux clients \u00e0 hauts revenus, elle offre des plafonds quasi illimit\u00e9s (40 000-60 000 DH/jour en retrait), du cashback major\u00e9 (jusqu&apos;\u00e0 1,5%), des miles a\u00e9riens convertibles, une conciergerie 24/7, l&apos;acc\u00e8s aux lounges d&apos;a\u00e9roport et des assurances premium couvrant toute la famille.
          </p>
          <p>
            <strong>Offres notables :</strong> CIH Bank Infinite (2 000 DH/an, la moins ch\u00e8re du segment), Banque Populaire Infinite (2 500 DH/an), Attijariwafa Infinite (3 000 DH/an), BMCI World Elite (5 000 DH/an, la plus exclusive).
          </p>

          <h2>Comment choisir : les 5 questions \u00e0 se poser</h2>

          <h3>1. Quelle est votre utilisation principale ?</h3>
          <p>
            Si vous utilisez votre carte uniquement au Maroc pour des retraits et paiements courants, une carte classique suffit amplement. Ne payez pas pour des services que vous n&apos;utiliserez pas.
          </p>

          <h3>2. Voyagez-vous \u00e0 l&apos;\u00e9tranger ?</h3>
          <p>
            Si vous voyagez plus de 2 fois par an, une carte Gold est un investissement rentable. L&apos;assurance voyage incluse (rapatriement, bagages, annulation) co\u00fbte \u00e0 elle seule plus que la cotisation de la carte.
          </p>

          <h3>3. Quel est votre volume de d\u00e9penses mensuel ?</h3>
          <p>
            Si vos d\u00e9penses mensuelles d\u00e9passent r\u00e9guli\u00e8rement 20 000 DH par carte, les plafonds d&apos;une carte classique seront insuffisants. Optez pour une Gold ou Platinum.
          </p>

          <h3>4. Le cashback est-il rentable pour vous ?</h3>
          <p>
            Le cashback de 0,5% sur une carte Platinum \u00e0 800 DH/an devient rentable si vos d\u00e9penses par carte d\u00e9passent 160 000 DH/an (environ 13 333 DH/mois). En dessous de ce montant, la cotisation n&apos;est pas compens\u00e9e par le cashback.
          </p>

          <h3>5. Avez-vous besoin de services premium ?</h3>
          <p>
            La conciergerie, les miles et les lounges d&apos;a\u00e9roport sont des avantages appr\u00e9ciables pour les voyageurs fr\u00e9quents et les cadres dirigeants. Si ces services ne vous parlent pas, restez sur une carte classique ou Gold.
          </p>

          <h2>Nos recommandations par profil</h2>

          <h3>\u00c9tudiant ou jeune actif</h3>
          <p>
            <strong>CIH Bank Visa Classique (gratuite)</strong> ou <strong>CFG Bank Visa Classic (gratuite)</strong>. Z\u00e9ro frais, fonctionnalit\u00e9s suffisantes, application mobile moderne.
          </p>

          <h3>Salari\u00e9 avec d\u00e9placements occasionnels</h3>
          <p>
            <strong>CIH Bank Visa Gold (250 DH/an)</strong> pour le meilleur rapport qualit\u00e9-prix, ou <strong>CFG Bank Gold (200 DH/an)</strong> pour la cotisation la plus basse.
          </p>

          <h3>Cadre sup\u00e9rieur ou profession lib\u00e9rale</h3>
          <p>
            <strong>CIH Bank Visa Platinum (600 DH/an)</strong> ou <strong>Attijariwafa Visa Platinum (1 000 DH/an)</strong> pour l&apos;acc\u00e8s au plus grand r\u00e9seau.
          </p>

          <h3>Dirigeant ou client fortun\u00e9</h3>
          <p>
            <strong>CIH Bank Visa Infinite (2 000 DH/an)</strong> pour le meilleur tarif du segment, ou <strong>BMCI World Elite (5 000 DH/an)</strong> pour les plafonds et services les plus exclusifs du march\u00e9 marocain.
          </p>

          <p>
            Pour une comparaison d\u00e9taill\u00e9e de toutes les cartes, consultez notre <a href="/comparateur-cartes/">comparateur de cartes bancaires</a>.
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
