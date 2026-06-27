import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Choisir sa carte bancaire au Maroc - Guide comparatif',
  description: 'Guide pour choisir votre carte bancaire au Maroc. Comparatif des cartes Visa et Mastercard : classique, Gold, Platinum et Infinite avec tarifs par banque.',
  alternates: { canonical: `${SITE.url}/guides/comment-choisir-carte-bancaire/` },
};

const faqData = [
  { question: 'Quelle est la carte bancaire la moins chère au Maroc ?', answer: 'Les cartes classiques de CIH Bank, CFG Bank et Al Barid Bank (carte e-Barid) sont entièrement gratuites (0 DH/an).' },
  { question: 'Faut-il prendre une carte Gold au Maroc ?', answer: 'La carte Gold est recommandée si vous voyagez régulièrement à l’étranger pour ses assurances voyage et ses plafonds internationaux plus élevés. Sinon, une carte classique suffit.' },
  { question: 'Peut-on utiliser une carte marocaine à l’étranger ?', answer: 'Oui, les cartes Gold, Platinum et Infinite sont utilisables à l’international. Les cartes classiques sont généralement limitées au Maroc.' },
  { question: 'Quelle est la meilleure carte Platinum au Maroc ?', answer: 'La carte Visa Platinum de CIH Bank (600 DH/an) offre le meilleur rapport qualité-prix du segment premium avec du cashback, une conciergerie et des plafonds élevés. Elle est trois fois moins chère que la Platinum de BMCI tout en offrant des services comparables.' },
  { question: 'Comment obtenir une carte Visa Infinite au Maroc ?', answer: 'La carte Visa Infinite est réservée aux clients à hauts revenus (généralement au-delà de 30 000 DH/mois). Vous devez en faire la demande auprès de votre banque. CIH Bank propose la moins chère à 2 000 DH/an, tandis que la World Elite BMCI coûte 5 000 DH/an.' },
];

export default function CommentChoisirCartePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Choisir sa carte', url: `${SITE.url}/guides/comment-choisir-carte-bancaire/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Comment choisir sa carte bancaire au Maroc en 2026',
    'Guide pratique pour comparer et choisir la meilleure carte bancaire au Maroc',
    `${SITE.url}/guides/comment-choisir-carte-bancaire/`,
    '2025-02-01',
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
          <a href="/guides/" className="hover:text-brand">Guides</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Choisir sa carte bancaire</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Comment choisir sa carte bancaire au Maroc en 2026
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis à jour le 1er juin 2026</span>
          </div>
        </header>

        {/* En bref box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-brand mb-2">En bref</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Carte gratuite :</strong> CIH Bank, CFG Bank, Al Barid Bank (0 DH/an)</li>
            <li><strong>Meilleure Gold :</strong> CFG Bank (200 DH/an) et CIH Bank (250 DH/an)</li>
            <li><strong>Meilleure Platinum :</strong> CIH Bank (600 DH/an, meilleur rapport qualite-prix)</li>
            <li><strong>Plus exclusive :</strong> BMCI World Elite (5 000 DH/an)</li>
          </ul>
        </div>



        <div className="prose max-w-none">
          <p>
            La carte bancaire est votre compagnon financier au quotidien. Au Maroc, les banques proposent une gamme variée de cartes allant de la classique gratuite à l&apos;ultra-premium à 5 000 DH/an. Comment s&apos;y retrouver et choisir celle qui correspond vraiment à vos besoins ? Ce guide vous explique tout en détail.
          </p>

          <h2>Les 4 niveaux de cartes bancaires au Maroc</h2>

          <h3>Carte Classique (Visa ou Mastercard)</h3>
          <p>
            <strong>Cotisation :</strong> 0 à 100 DH/an selon la banque.
          </p>
          <p>
            La carte d&apos;entrée de gamme est largement suffisante pour une utilisation quotidienne au Maroc. Elle permet de retirer de l&apos;argent aux guichets automatiques, de payer chez les commerçants équipés de TPE et de faire des achats en ligne sur les sites marocains.
          </p>
          <p>
            Les plafonds typiques sont de 5 000 DH par jour en retrait et 15 000 à 20 000 DH par mois en paiement. La carte classique est généralement limitée au Maroc et ne dispose pas d&apos;assurance voyage.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CIH Bank (gratuite), CFG Bank (gratuite), Al Barid Bank e-Barid (gratuite), Crédit Agricole (50 DH/an), Banque Populaire (60 DH/an).
          </p>

          <h3>Carte Gold / Premium</h3>
          <p>
            <strong>Cotisation :</strong> 200 à 500 DH/an.
          </p>
          <p>
            L&apos;étape au-dessus qui apporte principalement deux avantages majeurs : des plafonds de retrait et de paiement nettement plus élevés (10 000-15 000 DH/jour en retrait, 40 000-60 000 DH/mois en paiement) et une couverture d&apos;assurance voyage incluant le rapatriement médical, la perte de bagages et l&apos;annulation de voyage.
          </p>
          <p>
            La carte Gold est particulièrement recommandée si vous voyagez régulièrement à l&apos;étranger. Elle fonctionne dans le monde entier et ses plafonds internationaux sont confortables.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CFG Bank (200 DH/an), Al Barid Bank (200 DH/an), CIH Bank (250 DH/an), Crédit Agricole (280 DH/an), Banque Populaire (300 DH/an).
          </p>

          <h3>Carte Platinum</h3>
          <p>
            <strong>Cotisation :</strong> 600 à 1 500 DH/an.
          </p>
          <p>
            La carte premium par excellence. Au-delà des plafonds encore plus élevés (20 000-30 000 DH/jour en retrait), la carte Platinum offre généralement du cashback sur vos achats (0,5% en moyenne), une protection étendue des achats (extension de garantie, remboursement en cas de vol), et un service de conciergerie pour vos réservations.
          </p>
          <p>
            <strong>Meilleures offres :</strong> CIH Bank (600 DH/an, meilleur rapport qualité-prix), Crédit Agricole (700 DH/an), Banque Populaire (800 DH/an), CFG Bank (800 DH/an).
          </p>

          <h3>Carte Infinite / World Elite</h3>
          <p>
            <strong>Cotisation :</strong> 2 000 à 5 000 DH/an.
          </p>
          <p>
            Le summum de l&apos;offre carte au Maroc. Réservée aux clients à hauts revenus, elle offre des plafonds quasi illimités (40 000-60 000 DH/jour en retrait), du cashback majoré (jusqu&apos;à 1,5%), des miles aériens convertibles, une conciergerie 24/7, l&apos;accès aux lounges d&apos;aéroport et des assurances premium couvrant toute la famille.
          </p>
          <p>
            <strong>Offres notables :</strong> CIH Bank Infinite (2 000 DH/an, la moins chère du segment), Banque Populaire Infinite (2 500 DH/an), Attijariwafa Infinite (3 000 DH/an), BMCI World Elite (5 000 DH/an, la plus exclusive).
          </p>

          <h2>Comment choisir : les 5 questions à se poser</h2>

          <h3>1. Quelle est votre utilisation principale ?</h3>
          <p>
            Si vous utilisez votre carte uniquement au Maroc pour des retraits et paiements courants, une carte classique suffit amplement. Ne payez pas pour des services que vous n&apos;utiliserez pas.
          </p>

          <h3>2. Voyagez-vous à l&apos;étranger ?</h3>
          <p>
            Si vous voyagez plus de 2 fois par an, une carte Gold est un investissement rentable. L&apos;assurance voyage incluse (rapatriement, bagages, annulation) coûte à elle seule plus que la cotisation de la carte.
          </p>

          <h3>3. Quel est votre volume de dépenses mensuel ?</h3>
          <p>
            Si vos dépenses mensuelles dépassent régulièrement 20 000 DH par carte, les plafonds d&apos;une carte classique seront insuffisants. Optez pour une Gold ou Platinum.
          </p>

          <h3>4. Le cashback est-il rentable pour vous ?</h3>
          <p>
            Le cashback de 0,5% sur une carte Platinum à 800 DH/an devient rentable si vos dépenses par carte dépassent 160 000 DH/an (environ 13 333 DH/mois). En dessous de ce montant, la cotisation n&apos;est pas compensée par le cashback.
          </p>

          <h3>5. Avez-vous besoin de services premium ?</h3>
          <p>
            La conciergerie, les miles et les lounges d&apos;aéroport sont des avantages appréciables pour les voyageurs fréquents et les cadres dirigeants. Si ces services ne vous parlent pas, restez sur une carte classique ou Gold.
          </p>

          <h2>Nos recommandations par profil</h2>

          <h3>Étudiant ou jeune actif</h3>
          <p>
            <strong>CIH Bank Visa Classique (gratuite)</strong> ou <strong>CFG Bank Visa Classic (gratuite)</strong>. Zéro frais, fonctionnalités suffisantes, application mobile moderne.
          </p>

          <h3>Salarié avec déplacements occasionnels</h3>
          <p>
            <strong>CIH Bank Visa Gold (250 DH/an)</strong> pour le meilleur rapport qualité-prix, ou <strong>CFG Bank Gold (200 DH/an)</strong> pour la cotisation la plus basse.
          </p>

          <h3>Cadre supérieur ou profession libérale</h3>
          <p>
            <strong>CIH Bank Visa Platinum (600 DH/an)</strong> ou <strong>Attijariwafa Visa Platinum (1 000 DH/an)</strong> pour l&apos;accès au plus grand réseau.
          </p>

          <h3>Dirigeant ou client fortuné</h3>
          <p>
            <strong>CIH Bank Visa Infinite (2 000 DH/an)</strong> pour le meilleur tarif du segment, ou <strong>BMCI World Elite (5 000 DH/an)</strong> pour les plafonds et services les plus exclusifs du marché marocain.
          </p>

          <p>
            Pour une comparaison détaillée de toutes les cartes, consultez notre <a href="/comparateur-cartes/">comparateur de cartes bancaires</a>.
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


        {/* Articles lies */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="/comparateur-cartes/" className="text-sm text-brand hover:underline font-medium">Comparateur de cartes bancaires &rarr;</a>
            <a href="/guides/meilleure-banque-en-ligne/" className="text-sm text-brand hover:underline font-medium">Meilleure banque en ligne &rarr;</a>
            <a href="/guides/meilleure-banque-etudiant/" className="text-sm text-brand hover:underline font-medium">Meilleure banque etudiant &rarr;</a>
            <a href="/banques/cih-bank/" className="text-sm text-brand hover:underline font-medium">CIH Bank : avis complet &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Réglementation des moyens de paiement (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Tarification des services bancaires</li>
            <li>Centre Monétique Interbancaire (CMI) – Statistiques des paiements par carte au Maroc</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </article>
    </>
  );
}
