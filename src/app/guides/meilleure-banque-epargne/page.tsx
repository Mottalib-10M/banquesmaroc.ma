import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Meilleure banque epargne Maroc 2026 - Taux et comptes',
  description: 'Ou placer votre argent au Maroc en 2026 ? Comparatif des comptes epargne, livrets et plans epargne des banques marocaines avec taux de remuneration.',
  alternates: { canonical: `${SITE.url}/guides/meilleure-banque-epargne/` },
};

const faqData = [
  { question: 'Quel est le taux d\'epargne moyen au Maroc en 2026 ?', answer: 'Le taux de remuneration des comptes sur carnet au Maroc est reglemente par Bank Al-Maghrib et se situe autour de 2,50% a 3% en 2026. Certains plans d\'epargne contractuels peuvent offrir jusqu\'a 3,5%.' },
  { question: 'Quelle banque offre le meilleur taux d\'epargne au Maroc ?', answer: 'Les taux d\'epargne sont largement reglementes et donc similaires entre banques (environ 2,50% sur les comptes sur carnet). La difference se fait sur les plans d\'epargne contractuels et les OPCVM proposes.' },
  { question: 'L\'epargne est-elle fiscalisee au Maroc ?', answer: 'Les interets des comptes sur carnet sont exoneres d\'impot jusqu\'a un plafond de 24 000 DH par an. Au-dela, ils sont soumis a une retenue a la source de 30%. Les plans d\'epargne logement beneficient d\'avantages fiscaux specifiques.' },
  { question: 'Qu\'est-ce qu\'un plan d\'epargne logement (PEL) au Maroc ?', answer: 'Le PEL est un produit d\'epargne qui vous permet de constituer un apport pour un achat immobilier tout en beneficiant d\'avantages fiscaux. CIH Bank propose une offre Epargne Immo dediee a ce besoin.' },
  { question: 'Comment diversifier son epargne au Maroc ?', answer: 'Au-dela du compte sur carnet, vous pouvez investir dans les OPCVM (fonds d\'investissement), l\'assurance-vie, les bons du Tresor et les actions cotees a la Bourse de Casablanca. CFG Bank et BMCI offrent les meilleures plateformes d\'investissement.' },
];

export default function MeilleureBanqueEpargnePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
    { name: 'Banque epargne', url: `${SITE.url}/guides/meilleure-banque-epargne/` },
  ]);
  const articleSchema = buildArticleSchema(
    'Meilleure banque pour epargner au Maroc en 2026',
    'Comparatif des comptes epargne au Maroc',
    `${SITE.url}/guides/meilleure-banque-epargne/`,
    '2025-04-01',
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
          <span className="text-charcoal font-medium">Banque epargne</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Meilleure banque pour epargner au Maroc en 2026
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
            <li><strong>Taux compte sur carnet :</strong> environ 2,50% a 3% (reglemente par BAM)</li>
            <li><strong>N°1 epargne classique :</strong> Attijariwafa Bank - Epargne Wakf, large gamme OPCVM</li>
            <li><strong>N°1 epargne logement :</strong> CIH Bank - Epargne Immo avec avantages fiscaux</li>
            <li><strong>N°1 investissement :</strong> CFG Bank - Expertise bourse et gestion de patrimoine</li>
            <li><strong>Exoneration fiscale :</strong> jusqu&apos;a 24 000 DH d&apos;interets/an</li>
          </ul>
        </div>

        <div className="prose max-w-none">
          <p>
            L&apos;epargne est un pilier de la sante financiere. Au Maroc, les banques proposent divers produits d&apos;epargne
            allant du simple compte sur carnet aux plans d&apos;epargne logement en passant par les OPCVM et l&apos;assurance-vie.
            Ce guide compare les offres d&apos;epargne des principales banques marocaines pour vous aider a faire fructifier
            votre argent de maniere optimale.
          </p>

          <h2>Classement des meilleures banques pour epargner</h2>

          <h3>1. Attijariwafa Bank - Epargne Wakf</h3>
          <p>
            Le leader bancaire propose la gamme d&apos;epargne la plus diversifiee du marche : compte sur carnet, plans d&apos;epargne
            contractuels, OPCVM maison (Wafa Gestion, premier gestionnaire d&apos;actifs du Maroc), assurance-vie (Wafa Assurance)
            et epargne retraite. L&apos;avantage d&apos;AWB reside dans l&apos;ecosysteme complet qui permet de gerer toute son epargne
            au meme endroit, du livret basique aux placements boursiers.
          </p>

          <h3>2. CFG Bank - Expertise investissement</h3>
          <p>
            Ne du monde de la bourse et de la gestion d&apos;actifs, CFG Bank est le choix naturel pour les epargnants
            sophistiques. Son equipe de gestion de patrimoine propose des conseils personnalises et un acces
            a des OPCVM performants. Les taux du compte epargne sont competitifs et la plateforme d&apos;investissement
            en ligne est la plus moderne du marche.
          </p>

          <h3>3. CIH Bank - Epargne Immo</h3>
          <p>
            Specialiste historique de l&apos;immobilier, CIH Bank propose une offre Epargne Immo unique : un plan d&apos;epargne
            logement avec avantages fiscaux qui vous permet de constituer votre apport pour un achat immobilier.
            C&apos;est le choix ideal pour les primo-accedants qui souhaitent preparer leur projet immobilier tout en
            epargnant efficacement.
          </p>

          <h3>4. BMCI (BNP Paribas) - Epargne Plus</h3>
          <p>
            La filiale de BNP Paribas cible les clients fortunes avec une offre de gestion privee et des produits
            d&apos;epargne premium. Ses OPCVM beneficient de l&apos;expertise du groupe BNP Paribas Asset Management,
            l&apos;un des plus grands gestionnaires d&apos;actifs au monde.
          </p>

          <h3>5. Banque Populaire - Al Istithmar</h3>
          <p>
            Le livret d&apos;epargne Al Istithmar est accessible des 100 DH et beneficie de la solidite du modele cooperatif.
            La Banque Populaire est particulierement forte pour l&apos;epargne des MRE avec des produits dedies permettant
            d&apos;epargner au Maroc depuis l&apos;etranger.
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Banque</th>
                  <th className="text-center px-4 py-3 font-semibold">Compte epargne</th>
                  <th className="text-center px-4 py-3 font-semibold">Minimum</th>
                  <th className="text-center px-4 py-3 font-semibold">OPCVM</th>
                  <th className="text-center px-4 py-3 font-semibold">PEL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 font-medium">Attijariwafa Bank</td><td className="px-4 py-3 text-center">Epargne Wakf</td><td className="px-4 py-3 text-center">500 DH</td><td className="px-4 py-3 text-center text-success">Oui (Wafa Gestion)</td><td className="px-4 py-3 text-center">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">CFG Bank</td><td className="px-4 py-3 text-center">Epargne CFG</td><td className="px-4 py-3 text-center">200 DH</td><td className="px-4 py-3 text-center text-success">Oui (CFG Gestion)</td><td className="px-4 py-3 text-center">Non</td></tr>
                <tr><td className="px-4 py-3 font-medium">CIH Bank</td><td className="px-4 py-3 text-center">Epargne Immo</td><td className="px-4 py-3 text-center">200 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center text-success">Oui (specialise)</td></tr>
                <tr><td className="px-4 py-3 font-medium">BMCI</td><td className="px-4 py-3 text-center">Epargne Plus</td><td className="px-4 py-3 text-center">1 000 DH</td><td className="px-4 py-3 text-center text-success">Oui (BNP AM)</td><td className="px-4 py-3 text-center">Oui</td></tr>
                <tr><td className="px-4 py-3 font-medium">Banque Populaire</td><td className="px-4 py-3 text-center">Al Istithmar</td><td className="px-4 py-3 text-center">100 DH</td><td className="px-4 py-3 text-center">Oui</td><td className="px-4 py-3 text-center">Oui</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Conseils pour optimiser votre epargne au Maroc</h2>
          <p>
            Ne mettez pas tous vos oeufs dans le meme panier. La strategie optimale consiste a repartir votre epargne
            entre un matelas de securite (3 a 6 mois de depenses sur un compte sur carnet), un plan d&apos;epargne logement
            si vous avez un projet immobilier, et des placements a plus long terme via les OPCVM pour la partie que
            vous n&apos;utiliserez pas avant plusieurs annees. Les OPCVM obligataires offrent un bon compromis entre
            rendement et securite, tandis que les OPCVM actions peuvent generer des rendements superieurs sur le long
            terme avec plus de risque. Consultez un conseiller en gestion de patrimoine pour une allocation sur mesure.
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
            <a href="/guides/meilleure-banque-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Meilleure banque credit immobilier &rarr;</a>
            <a href="/banques/attijariwafa-bank/" className="text-sm text-brand hover:underline font-medium">Attijariwafa Bank : avis complet &rarr;</a>
            <a href="/banques/cfg-bank/" className="text-sm text-brand hover:underline font-medium">CFG Bank : avis complet &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/capacite-emprunt/" className="text-sm text-brand hover:underline font-medium">Calculer sa capacite d&apos;emprunt &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
