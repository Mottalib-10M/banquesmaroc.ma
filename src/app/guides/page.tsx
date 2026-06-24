import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guides bancaires Maroc 2026 : credit, cartes et epargne',
  description: 'Retrouvez tous nos guides bancaires pour le Maroc en 2026 : choisir sa banque, comparer les cartes, obtenir un credit immobilier, epargner et optimiser ses frais.',
  alternates: { canonical: `${SITE.url}/guides/` },
};

const guides = [
  {
    title: 'Meilleure banque au Maroc en 2026',
    desc: 'Comparatif complet et classement des 9 banques marocaines. Notes, taux, frais et avis detailles pour chaque etablissement.',
    href: '/guides/meilleure-banque-maroc/',
    tag: 'Comparatif',
  },
  {
    title: 'Comment choisir sa carte bancaire',
    desc: 'Guide pratique pour comparer les cartes Visa et Mastercard au Maroc : classique, Gold, Platinum et Infinite.',
    href: '/guides/comment-choisir-carte-bancaire/',
    tag: 'Cartes',
  },
  {
    title: 'Guide du credit immobilier au Maroc',
    desc: 'Tout savoir sur le pret immobilier : taux 2026 par banque, conditions, procedures, frais annexes et conseils.',
    href: '/guides/credit-immobilier-maroc/',
    tag: 'Credit',
  },
  {
    title: 'Meilleure banque pour etudiants',
    desc: 'Classement des meilleures banques pour les etudiants et jeunes actifs : offres gratuites, cartes sans frais et applis mobiles.',
    href: '/guides/meilleure-banque-etudiant/',
    tag: 'Etudiants',
  },
  {
    title: 'Meilleure banque pour professionnels',
    desc: 'Comparatif des comptes professionnels au Maroc : tarifs, services, reseau et offres pour TPE, PME et auto-entrepreneurs.',
    href: '/guides/meilleure-banque-professionnel/',
    tag: 'Pro',
  },
  {
    title: 'Meilleure banque pour epargner',
    desc: 'Ou placer votre argent au Maroc ? Comparaison des comptes epargne, taux de remuneration et plans epargne par banque.',
    href: '/guides/meilleure-banque-epargne/',
    tag: 'Epargne',
  },
  {
    title: 'Meilleure banque pour credit immobilier',
    desc: 'Quelle banque offre les meilleurs taux immobiliers au Maroc ? Classement et analyse detaillee des offres de pret.',
    href: '/guides/meilleure-banque-credit-immobilier/',
    tag: 'Immobilier',
  },
  {
    title: 'Meilleure banque en ligne au Maroc',
    desc: 'Comparatif des banques les plus digitales au Maroc : applis mobiles, ouverture de compte en ligne et services numeriques.',
    href: '/guides/meilleure-banque-en-ligne/',
    tag: 'Digital',
  },
];

export default function GuidesHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Guides', url: `${SITE.url}/guides/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Guides</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Guides bancaires Maroc 2026 : credit, cartes et epargne
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Nos guides pratiques vous accompagnent dans toutes vos decisions financieres au Maroc : choisir la bonne banque,
            comparer les cartes, obtenir le meilleur taux de credit et optimiser votre epargne.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-brand transition-all group"
            >
              <span className="inline-block text-xs font-semibold text-brand bg-blue-50 px-2 py-0.5 rounded-full mb-3">
                {guide.tag}
              </span>
              <h2 className="font-bold text-charcoal mb-2 group-hover:text-brand transition-colors">{guide.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{guide.desc}</p>
              <span className="text-sm font-medium text-brand">Lire le guide &rarr;</span>
            </a>
          ))}
        </div>

        {/* Editorial content */}
        <div className="prose max-w-4xl mx-auto">
          <h2>Pourquoi consulter nos guides bancaires ?</h2>
          <p>
            Le secteur bancaire marocain compte 9 banques de detail principales, chacune avec ses specificites en termes
            de tarifs, de taux de credit, de reseau d&apos;agences et de services digitaux. Naviguer parmi toutes ces offres
            peut etre complexe. Nos guides sont rediges par des experts du secteur financier marocain et mis a jour
            regulierement pour refleter les evolutions du marche.
          </p>
          <p>
            Que vous soyez etudiant a la recherche d&apos;une banque gratuite, salarie souhaitant optimiser ses frais
            bancaires, professionnel ayant besoin d&apos;un compte adapte ou investisseur cherchant le meilleur rendement
            pour son epargne, vous trouverez dans nos guides des analyses objectives et des recommandations concretes.
          </p>

          <h2>Comment utiliser nos guides ?</h2>
          <p>
            Chaque guide est structure pour repondre a un besoin precis. Commencez par le guide correspondant a votre
            situation : etudiant, professionnel, epargnant ou emprunteur. Vous y trouverez un classement des meilleures
            banques pour votre profil, un tableau comparatif detaille et des FAQ repondant aux questions les plus
            frequentes. Completez votre recherche avec nos simulateurs de credit et nos comparateurs interactifs pour
            une analyse encore plus precise.
          </p>

          <h3>Nos outils complementaires</h3>
          <p>
            En plus de nos guides, nous mettons a votre disposition des outils gratuits pour affiner votre choix :
          </p>
          <ul>
            <li><a href="/comparateur-banques/">Comparateur de banques</a> : comparez jusqu&apos;a 3 banques cote a cote</li>
            <li><a href="/comparateur-cartes/">Comparateur de cartes bancaires</a> : trouvez la carte adaptee a vos besoins</li>
            <li><a href="/simulation-credit-immobilier/">Simulateur de credit immobilier</a> : calculez vos mensualites</li>
            <li><a href="/simulation-credit-consommation/">Simulateur de credit consommation</a> : estimez le cout de votre pret</li>
            <li><a href="/capacite-emprunt/">Calculateur de capacite d&apos;emprunt</a> : decouvrez combien vous pouvez emprunter</li>
          </ul>
        </div>

        {/* Articles lies */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur des banques marocaines &rarr;</a>
            <a href="/comparateur-cartes/" className="text-sm text-brand hover:underline font-medium">Comparateur de cartes bancaires &rarr;</a>
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
            <a href="/banques/cih-bank/" className="text-sm text-brand hover:underline font-medium">CIH Bank : avis et tarifs 2026 &rarr;</a>
            <a href="/banques/attijariwafa-bank/" className="text-sm text-brand hover:underline font-medium">Attijariwafa Bank : avis et tarifs 2026 &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </div>
    </>
  );
}
