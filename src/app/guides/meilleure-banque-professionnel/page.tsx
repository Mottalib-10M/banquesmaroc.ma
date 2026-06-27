import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque pro Maroc 2026 - Compte professionnel',
  description: 'Comparatif des meilleures banques pour professionnels au Maroc en 2026 : comptes pro, tarifs, services TPE/PME et auto-entrepreneurs compares par banque.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-professionnel/` },
};

const faqData = [
  { question: 'Quelle est la meilleure banque pour un auto-entrepreneur au Maroc ?', answer: 'CIH Bank avec son Compte Pro Digital a 0 DH de frais de tenue est la meilleure option pour les auto-entrepreneurs. Elle offre une gestion 100% en ligne et des tarifs imbattables.' },
  { question: 'Combien coute un compte professionnel au Maroc ?', answer: 'Les frais varient de 0 DH (CIH Bank Pro Digital) a 300 DH/an (Attijariwafa Bank, Societe Generale). La Banque Populaire se situe a 200 DH/an et le Credit Agricole a 150 DH/an.' },
  { question: 'Faut-il un compte pro obligatoirement au Maroc ?', answer: 'Pour les societes (SARL, SA), un compte professionnel dedie est obligatoire. Pour les auto-entrepreneurs, c\'est fortement recommande mais pas legalement impose.' },
  { question: 'Quelle banque pour une TPE au Maroc ?', answer: 'Attijariwafa Bank et la Banque Populaire sont les plus adaptees aux TPE grace a leur vaste reseau, leurs produits d\'affacturage et leurs lignes de credit dediees.' },
  { question: 'Peut-on ouvrir un compte pro en ligne au Maroc ?', answer: 'CIH Bank permet l\'ouverture d\'un compte professionnel 100% en ligne. Les autres banques requierent generalement un rendez-vous en agence avec les documents juridiques de l\'entreprise.' },
];

export default function MeilleureBanqueProfessionnelPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Banque professionnel', url: `${SITE.url}/guides/meilleure-banque-professionnel/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque pour professionnels au Maroc en 2026',
    'Guide comparatif des comptes professionnels au Maroc',
    `${SITE.url}/guides/meilleure-banque-professionnel/`,
    '2025-03-15',
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
          <span className="text-charcoal font-medium">Banque professionnel</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque pour professionnels au Maroc en 2026
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
            <li><strong>N°1 auto-entrepreneurs :</strong> CIH Bank - Compte Pro Digital gratuit, gestion 100% en ligne</li>
            <li><strong>N°1 TPE/PME :</strong> Attijariwafa Bank - Reseau de 4 800 agences, gamme entreprise complete</li>
            <li><strong>N°1 professions liberales :</strong> BMCI - Standards BNP Paribas, gestion de patrimoine</li>
            <li><strong>Frais compte pro :</strong> de 0 a 300 DH/an selon la banque</li>
          </ul>
        </div>

        <div className="prose max-w-none">
          <p>
            Le choix d&apos;une banque pour son activite professionnelle au Maroc est une decision strategique. Entre les
            besoins de tresorerie, les moyens de paiement, les financements et la gestion au quotidien, chaque banque
            propose des offres differenciees. Ce guide compare les comptes professionnels des principales banques
            marocaines pour vous aider a choisir selon votre profil : auto-entrepreneur, profession liberale, TPE ou PME.
          </p>

          <h2>Classement des meilleures banques pro 2026</h2>

          <h3>1. Attijariwafa Bank - Compte Pro</h3>
          <p>
            Le leader du marche bancaire marocain excelle sur le segment professionnel grace a son reseau ineGale de
            4 800 agences et une gamme complete de produits entreprise : compte pro a 300 DH/an avec carte incluse,
            terminal de paiement, affacturage, lignes de credit, commerce international et cash management. Son
            application Attijari Business est la plus complete du marche pour les professionnels.
          </p>

          <h3>2. CIH Bank - Pro Digital</h3>
          <p>
            CIH Bank revolutionne le segment professionnel avec un compte pro a 0 DH de frais de tenue, une ouverture
            100% en ligne et une gestion digitale complete. Ideal pour les auto-entrepreneurs et les freelances qui
            privilegient la simplicite et les couts bas. La carte pro est incluse dans l&apos;offre.
          </p>

          <h3>3. Banque Populaire - Intelak</h3>
          <p>
            L&apos;offre Intelak de la Banque Populaire cible les jeunes entrepreneurs et les TPE avec un accompagnement
            personnalise et des conditions de financement avantageuses. Le compte pro a 200 DH/an beneficie du reseau
            de 4 600 agences et du modele cooperatif qui favorise la proximite avec les clients professionnels.
          </p>

          <h3>4. BMCI (BNP Paribas) - Pro Entreprendre</h3>
          <p>
            La filiale de BNP Paribas vise les professions liberales et les cadres entrepreneurs avec des standards
            internationaux, une expertise en gestion de patrimoine et un acces au reseau BNP Paribas a l&apos;international.
            Le compte pro a 280 DH/an est adapte aux professionnels a hauts revenus.
          </p>

          <h3>5. Societe Generale - So&apos;Business</h3>
          <p>
            L&apos;offre So&apos;Business de Societe Generale a 300 DH/an se demarque par la qualite du service client et
            l&apos;expertise en trade finance pour les entreprises a vocation internationale. Un bon choix pour les
            professionnels ayant des echanges avec l&apos;Europe.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Banque</th>
                  <th className="text-center px-4 py-3 font-semibold">Frais/an</th>
                  <th className="text-center px-4 py-3 font-semibold">Carte incluse</th>
                  <th className="text-center px-4 py-3 font-semibold">En ligne</th>
                  <th className="text-center px-4 py-3 font-semibold">Agences</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 font-medium">CIH Bank Pro Digital</td><td className="px-4 py-3 text-center text-success font-semibold">0 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center text-success">100%</td><td className="px-4 py-3 text-center">350</td></tr>
                <tr><td className="px-4 py-3 font-medium">Credit Agricole Pro</td><td className="px-4 py-3 text-center">150 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">1 500</td></tr>
                <tr><td className="px-4 py-3 font-medium">CFG Bank Business</td><td className="px-4 py-3 text-center">200 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">40</td></tr>
                <tr><td className="px-4 py-3 font-medium">Banque Populaire Intelak</td><td className="px-4 py-3 text-center">200 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">4 600</td></tr>
                <tr><td className="px-4 py-3 font-medium">Bank of Africa Pro</td><td className="px-4 py-3 text-center">250 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">2 100</td></tr>
                <tr><td className="px-4 py-3 font-medium">BMCI Entreprendre</td><td className="px-4 py-3 text-center">280 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">340</td></tr>
                <tr><td className="px-4 py-3 font-medium">Attijariwafa Compte Pro</td><td className="px-4 py-3 text-center">300 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">4 800</td></tr>
                <tr><td className="px-4 py-3 font-medium">SG So'Business</td><td className="px-4 py-3 text-center">300 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Partiel</td><td className="px-4 py-3 text-center">400</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Comment choisir sa banque pro ?</h2>
          <p>
            Votre choix doit se baser sur trois criteres principaux : le volume de vos transactions (les grandes banques
            offrent de meilleurs tarifs aux forts volumes), votre besoin en agences physiques (indispensable pour les
            depots de cheques et especes) et vos besoins de financement (credit de tresorerie, leasing, affacturage).
            Si vous etes auto-entrepreneur avec peu de transactions, CIH Bank est imbattable. Pour une PME avec des
            besoins de financement importants, Attijariwafa Bank ou la Banque Populaire offrent un accompagnement
            plus complet.
          </p>
          <p>
            Pensez egalement a evaluer la qualite des outils digitaux proposes par chaque banque. Une application mobile
            performante vous permettra de suivre vos flux de tresorerie en temps reel, d&apos;effectuer des virements groupes
            et de telecharger vos releves comptables au format compatible avec votre logiciel de facturation. Pour les
            professions liberales, la possibilite de separer facilement les depenses personnelles et professionnelles
            au sein d&apos;une meme interface constitue un avantage decisif au moment de la declaration fiscale annuelle.
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
            <a href="/banques/attijariwafa-bank/" className="text-sm text-brand hover:underline font-medium">Attijariwafa Bank : avis complet &rarr;</a>
            <a href="/banques/cih-bank/" className="text-sm text-brand hover:underline font-medium">CIH Bank : avis complet &rarr;</a>
            <a href="/guides/meilleure-banque-maroc/" className="text-sm text-brand hover:underline font-medium">Meilleure banque au Maroc 2026 &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/simulation-credit-consommation/" className="text-sm text-brand hover:underline font-medium">Simulateur credit consommation &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
