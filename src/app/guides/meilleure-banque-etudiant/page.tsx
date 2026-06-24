import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque etudiant Maroc 2026 - Top 5 comparees',
  description: 'Quelle banque choisir quand on est etudiant au Maroc ? Classement 2026 des meilleures offres : cartes gratuites, comptes sans frais et applis mobiles comparees.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-etudiant/` },
};

const faqData = [
  { question: 'Quelle est la meilleure banque pour les etudiants au Maroc ?', answer: 'CIH Bank avec son offre Code 30 est la meilleure option : compte gratuit, carte Visa gratuite et application mobile performante pour les moins de 30 ans, sans aucun frais.' },
  { question: 'Peut-on ouvrir un compte bancaire etudiant sans revenus ?', answer: 'Oui, la plupart des banques marocaines permettent aux etudiants d\'ouvrir un compte avec simplement une CIN et un certificat de scolarite. Aucun justificatif de revenus n\'est exige.' },
  { question: 'Les comptes etudiants sont-ils vraiment gratuits ?', answer: 'Oui, les offres jeunes de CIH Bank (Code 30), CFG Bank et Banque Populaire (Al Mostatakbal) sont entierement gratuites : pas de frais de tenue de compte ni de cotisation de carte.' },
  { question: 'Jusqu\'a quel age peut-on beneficier d\'une offre jeune ?', answer: 'Les limites varient : CIH Bank Code 30 jusqu\'a 30 ans, Societe Generale So\'Young jusqu\'a 25 ans, Banque Populaire Al Mostatakbal jusqu\'a 30 ans. Verifiez les conditions de chaque banque.' },
  { question: 'Quelle appli mobile est la plus adaptee pour un etudiant ?', answer: 'CIH Bank propose l\'application mobile la mieux notee du marche avec paiement mobile, virements instantanes et gestion complete du compte. CFG Bank offre egalement une experience digitale moderne.' },
];

export default function MeilleureBanqueEtudiantPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Banque etudiant', url: `${SITE.url}/guides/meilleure-banque-etudiant/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque pour etudiants au Maroc en 2026',
    'Guide comparatif des meilleures banques pour etudiants au Maroc',
    `${SITE.url}/guides/meilleure-banque-etudiant/`,
    '2025-03-01',
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
          <span className="text-charcoal font-medium">Banque etudiant</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque pour etudiants au Maroc en 2026
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
            <li><strong>N°1 :</strong> CIH Bank (Code 30) - Carte et compte 100% gratuits, meilleure appli</li>
            <li><strong>N°2 :</strong> CFG Bank - Carte gratuite, tarifs agressifs, agences modernes</li>
            <li><strong>N°3 :</strong> Banque Populaire (Al Mostatakbal) - Grand reseau, offre MRE</li>
            <li><strong>Budget minimum :</strong> 0 DH/an (carte + compte gratuits)</li>
          </ul>
        </div>

        <div className="prose max-w-none">
          <p>
            Choisir sa premiere banque est une etape importante pour tout etudiant marocain. Entre les offres gratuites,
            les applications mobiles et les services digitaux, les banques rivalisent pour seduire les jeunes. Voici notre
            classement complet des meilleures banques pour etudiants au Maroc en 2026, base sur les frais, la qualite
            de l&apos;application mobile et les avantages specifiques.
          </p>

          <h2>Classement des meilleures banques etudiants 2026</h2>

          <h3>1. CIH Bank - Offre Code 30</h3>
          <p>
            CIH Bank domine le segment etudiant avec son offre Code 30, entierement gratuite pour les moins de 30 ans.
            Le package comprend un compte courant sans frais de tenue, une carte Visa classique gratuite (0 DH/an),
            une application mobile parmi les mieux notees du marche et l&apos;acces a tous les services de banque en ligne.
            L&apos;ouverture de compte est possible 100% en ligne avec un simple selfie et une photo de la CIN.
          </p>
          <p>
            <strong>Points forts :</strong> Tout est gratuit, excellente appli mobile, ouverture en ligne, paiement mobile integre.
          </p>
          <p>
            <strong>Points faibles :</strong> Reseau d&apos;agences limite (350), pas ideal si vous etes en zone rurale.
          </p>

          <h3>2. CFG Bank - Offre jeune</h3>
          <p>
            CFG Bank, la plus jeune banque universelle du Maroc, propose egalement une carte classique gratuite et un
            compte sans frais. Ses agences au design moderne et son approche digitale seduisent les etudiants urbains.
            Les taux de credit sont parmi les plus competitifs du marche, un atout pour le futur.
          </p>
          <p>
            <strong>Points forts :</strong> Carte gratuite, taux competitifs, service client personnalise grace au petit reseau.
          </p>
          <p>
            <strong>Points faibles :</strong> Seulement 40 agences, concentrees dans les grandes villes.
          </p>

          <h3>3. Banque Populaire - Al Mostatakbal</h3>
          <p>
            L&apos;offre Al Mostatakbal de la Banque Populaire est gratuite pour les 18-30 ans et beneficie du plus grand
            reseau d&apos;agences du Maroc (4 600). C&apos;est le choix ideal pour les etudiants en zone rurale ou ceux dont
            la famille est deja cliente. L&apos;offre MRE est un plus si vous avez des parents a l&apos;etranger.
          </p>
          <p>
            <strong>Points forts :</strong> Reseau enorme, offre MRE, gratuite pour les jeunes.
          </p>
          <p>
            <strong>Points faibles :</strong> Application mobile moins moderne, procedures parfois lourdes.
          </p>

          <h3>4. Societe Generale - So&apos;Young</h3>
          <p>
            L&apos;offre So&apos;Young de Societe Generale est gratuite pour les 18-25 ans et beneficie des standards du groupe
            francais. Un bon choix pour les etudiants visant une carriere internationale ou un stage en France.
          </p>

          <h3>5. Attijariwafa Bank - Chabab</h3>
          <p>
            L&apos;offre Chabab d&apos;Attijariwafa Bank pour les 18-25 ans donne acces au reseau le plus vaste du Maroc
            (4 800 agences) et a l&apos;application Attijari Mobile tres complete. Le compte est gratuit mais la carte
            classique est facturee 80 DH/an.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Banque</th>
                  <th className="text-center px-4 py-3 font-semibold">Carte</th>
                  <th className="text-center px-4 py-3 font-semibold">Frais compte</th>
                  <th className="text-center px-4 py-3 font-semibold">Age max</th>
                  <th className="text-center px-4 py-3 font-semibold">Agences</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 font-medium">CIH Bank (Code 30)</td><td className="px-4 py-3 text-center text-success font-semibold">Gratuite</td><td className="px-4 py-3 text-center text-success">0 DH</td><td className="px-4 py-3 text-center">30 ans</td><td className="px-4 py-3 text-center">350</td></tr>
                <tr><td className="px-4 py-3 font-medium">CFG Bank</td><td className="px-4 py-3 text-center text-success font-semibold">Gratuite</td><td className="px-4 py-3 text-center text-success">0 DH</td><td className="px-4 py-3 text-center">-</td><td className="px-4 py-3 text-center">40</td></tr>
                <tr><td className="px-4 py-3 font-medium">Banque Populaire</td><td className="px-4 py-3 text-center text-success font-semibold">Gratuite</td><td className="px-4 py-3 text-center text-success">0 DH</td><td className="px-4 py-3 text-center">30 ans</td><td className="px-4 py-3 text-center">4 600</td></tr>
                <tr><td className="px-4 py-3 font-medium">Societe Generale</td><td className="px-4 py-3 text-center text-success font-semibold">Gratuite</td><td className="px-4 py-3 text-center text-success">0 DH</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">400</td></tr>
                <tr><td className="px-4 py-3 font-medium">Attijariwafa Bank</td><td className="px-4 py-3 text-center">80 DH/an</td><td className="px-4 py-3 text-center text-success">0 DH</td><td className="px-4 py-3 text-center">25 ans</td><td className="px-4 py-3 text-center">4 800</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Conseils pour choisir sa banque etudiante</h2>
          <p>
            En tant qu&apos;etudiant, vos priorites sont claires : zero frais, une bonne application mobile et une carte
            fonctionnelle pour vos achats en ligne. Ne vous laissez pas seduire par des offres premium inutiles a
            ce stade. Privilegiez les offres 100% gratuites de CIH Bank ou CFG Bank si vous etes dans une grande
            ville. Si vous avez besoin d&apos;un reseau d&apos;agences plus dense, la Banque Populaire est le meilleur
            compromis entre gratuite et couverture geographique.
          </p>
          <p>
            Pensez aussi a l&apos;avenir : la banque que vous choisissez aujourd&apos;hui sera probablement celle qui vous
            accompagnera pour votre premier credit immobilier. CIH Bank et CFG Bank proposent les meilleurs taux
            immobiliers du marche (des 4,5%), un avantage non negligeable pour plus tard.
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
            <a href="/banques/cih-bank/" className="text-sm text-brand hover:underline font-medium">CIH Bank : avis complet &rarr;</a>
            <a href="/banques/cfg-bank/" className="text-sm text-brand hover:underline font-medium">CFG Bank : avis complet &rarr;</a>
            <a href="/guides/comment-choisir-carte-bancaire/" className="text-sm text-brand hover:underline font-medium">Comment choisir sa carte bancaire &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/guides/meilleure-banque-en-ligne/" className="text-sm text-brand hover:underline font-medium">Meilleure banque en ligne &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
