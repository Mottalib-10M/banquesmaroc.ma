import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque en ligne Maroc 2026 - Comparatif digital',
  description: 'Quelle est la meilleure banque en ligne au Maroc ? Comparatif 2026 des applis mobiles, services digitaux, ouverture de compte en ligne et paiement mobile.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-en-ligne/` },
};

const faqData = [
  { question: 'Existe-t-il des neobanques au Maroc ?', answer: 'Pas encore de neobanque pure comme N26 ou Revolut, mais CIH Bank et CFG Bank offrent une experience quasi 100% digitale. Le Maroc autorise l\'ouverture de compte en ligne depuis 2020 et les services bancaires mobiles se developpent rapidement.' },
  { question: 'Peut-on ouvrir un compte bancaire en ligne au Maroc ?', answer: 'Oui, CIH Bank permet l\'ouverture 100% en ligne avec selfie et CIN numerisee. CFG Bank et Bank of Africa proposent egalement des parcours d\'ouverture digitaux, meme si certaines etapes peuvent necessiter un passage en agence.' },
  { question: 'Quelle est la meilleure application bancaire au Maroc ?', answer: 'CIH Bank (CIH Mobile) est consideree comme la meilleure appli bancaire du Maroc avec paiement mobile, virements instantanes, gestion de budget et consultation de solde en temps reel. Attijari Mobile (AWB) est egalement tres complete.' },
  { question: 'Le paiement mobile fonctionne-t-il bien au Maroc ?', answer: 'Oui, le paiement mobile (m-wallet) est en plein essor au Maroc grace au systeme interbancaire supervise par Bank Al-Maghrib. CIH Bank, Attijariwafa Bank et Al Barid Bank (Barid Pay) sont les plus avancees dans ce domaine.' },
  { question: 'Les services bancaires en ligne sont-ils securises au Maroc ?', answer: 'Oui, toutes les banques marocaines utilisent des protocoles de securite avances : authentification 3D Secure, OTP par SMS, reconnaissance biometrique sur les applis mobiles et chiffrement SSL/TLS.' },
];

export default function MeilleureBanqueEnLignePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Banque en ligne', url: `${SITE.url}/guides/meilleure-banque-en-ligne/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque en ligne au Maroc en 2026',
    'Comparatif des banques les plus digitales au Maroc',
    `${SITE.url}/guides/meilleure-banque-en-ligne/`,
    '2025-05-01',
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
          <span className="text-charcoal font-medium">Banque en ligne</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque en ligne au Maroc en 2026
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
            <li><strong>N°1 :</strong> CIH Bank - Meilleure appli, ouverture en ligne, carte gratuite</li>
            <li><strong>N°2 :</strong> CFG Bank - Experience digitale moderne, tarifs agressifs</li>
            <li><strong>N°3 :</strong> Bank of Africa - Compte Digital performant, bonne appli</li>
            <li><strong>Paiement mobile :</strong> CIH, AWB et Al Barid Bank en tete</li>
          </ul>
        </div>

        <div className="prose max-w-none">
          <p>
            Le digital transforme le paysage bancaire marocain. Meme s&apos;il n&apos;existe pas encore de neobanque pure au Maroc
            (comme N26 ou Revolut en Europe), plusieurs banques traditionnelles ont reussi leur transformation digitale
            et offrent une experience quasi 100% en ligne. Ce guide compare les services digitaux des banques marocaines
            pour identifier les meilleures options pour les clients connectes.
          </p>

          <h2>Classement des banques les plus digitales 2026</h2>

          <h3>1. CIH Bank - La reference digitale</h3>
          <p>
            CIH Bank est unanimement reconnue comme la banque la plus digitale du Maroc. Son application CIH Mobile
            est la mieux notee sur les stores avec des fonctionnalites avancees : consultation en temps reel, virements
            instantanes, paiement mobile, gestion de budget, commande de chequier, opposition de carte et meme
            ouverture de compte 100% en ligne. L&apos;agence digitale permet de realiser la quasi-totalite des operations
            sans se deplacer. La carte classique gratuite et le compte sans frais en font le choix numero un des
            clients digitaux.
          </p>

          <h3>2. CFG Bank - L&apos;innovation digitale</h3>
          <p>
            La plus jeune banque du marche compense son reseau limite (40 agences) par une experience digitale
            soignee. L&apos;application mobile est fluide et moderne, les processus sont simplifies et le service client
            est reactif par chat. CFG Bank mise sur le digital comme levier de croissance principal et investit
            massivement dans la technologie.
          </p>

          <h3>3. Bank of Africa - Compte Digital</h3>
          <p>
            BOA propose un Compte Digital specifiquement concu pour les clients 100% en ligne. Ce compte gratuit
            inclut une gestion digitale complete et une carte bancaire. L&apos;application mobile de BOA est performante
            avec des fonctionnalites de paiement mobile et de gestion avancee.
          </p>

          <h3>4. Attijariwafa Bank - Attijari Mobile</h3>
          <p>
            Le leader du marche ne pouvait pas rester en retrait de la revolution digitale. Attijari Mobile est l&apos;une
            des applications les plus completes du marche avec un large eventail de services en ligne. L&apos;avantage
            d&apos;AWB est de coupler le digital avec le plus grand reseau d&apos;agences physiques, offrant une experience
            hybride inegalee.
          </p>

          <h3>5. Al Barid Bank - Barid Pay</h3>
          <p>
            Surprenante cinquieme place pour la banque postale qui s&apos;est distinguee dans le paiement mobile avec
            Barid Pay. Avec 8 millions de clients, Al Barid Bank a joue un role majeur dans la democratisation
            des services financiers numeriques, notamment en zone rurale.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Banque</th>
                  <th className="text-center px-4 py-3 font-semibold">Ouverture en ligne</th>
                  <th className="text-center px-4 py-3 font-semibold">Appli mobile</th>
                  <th className="text-center px-4 py-3 font-semibold">Paiement mobile</th>
                  <th className="text-center px-4 py-3 font-semibold">Carte gratuite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 font-medium">CIH Bank</td><td className="px-4 py-3 text-center text-success font-semibold">100%</td><td className="px-4 py-3 text-center text-success">Excellente</td><td className="px-4 py-3 text-center text-success">Oui</td><td className="px-4 py-3 text-center text-success">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">CFG Bank</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center text-success">Tres bonne</td><td className="px-4 py-3 text-center text-success">Oui</td><td className="px-4 py-3 text-center text-success">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">Bank of Africa</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">Bonne</td><td className="px-4 py-3 text-center text-success">Oui</td><td className="px-4 py-3 text-center">Non</td></tr>
                <tr><td className="px-4 py-3 font-medium">Attijariwafa Bank</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center text-success">Tres bonne</td><td className="px-4 py-3 text-center text-success">Oui</td><td className="px-4 py-3 text-center">Non</td></tr>
                <tr><td className="px-4 py-3 font-medium">Al Barid Bank</td><td className="px-4 py-3 text-center">Non</td><td className="px-4 py-3 text-center">Basique</td><td className="px-4 py-3 text-center text-success">Oui (Barid Pay)</td><td className="px-4 py-3 text-center text-success">Oui</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>L&apos;avenir de la banque en ligne au Maroc</h2>
          <p>
            Le Maroc est en pleine transformation digitale bancaire. Bank Al-Maghrib a autorise l&apos;ouverture de compte
            en ligne en 2020, ce qui a accelere la competition sur le digital. Les prochaines annees devraient voir
            l&apos;arrivee de neobanques et de fintechs avec des offres 100% mobiles. En attendant, CIH Bank et CFG Bank
            restent les references pour les clients qui veulent une experience bancaire moderne et sans friction.
            Le paiement mobile, encore naissant, devrait se generaliser grace aux initiatives de Bank Al-Maghrib
            et a l&apos;adoption croissante des smartphones dans toutes les couches de la population.
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
            <a href="/guides/meilleure-banque-etudiant/" className="text-sm text-brand hover:underline font-medium">Meilleure banque pour etudiants &rarr;</a>
            <a href="/comparateur-cartes/" className="text-sm text-brand hover:underline font-medium">Comparateur de cartes bancaires &rarr;</a>
            <a href="/comparatif/cih-bank-vs-cfg-bank/" className="text-sm text-brand hover:underline font-medium">CIH vs CFG Bank : comparatif &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
