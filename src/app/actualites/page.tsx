import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Actualites bancaires Maroc 2025 : taux, reformes et digital',
  description: 'Suivez l\'actualite bancaire au Maroc : decisions de Bank Al-Maghrib, taux directeurs, reformes, mobile banking et nouveautes des banques marocaines.',
  alternates: { canonical: `${SITE.url}/actualites/` },
};

const articles = [
  {
    title: 'Reforme bancaire au Maroc 2025 : taux directeurs, digitalisation et mobile banking',
    desc: 'Bank Al-Maghrib ajuste ses taux directeurs, les banques accelerent la digitalisation et le mobile banking explose. Analyse complete des reformes bancaires en cours.',
    href: '/actualites/reforme-bancaire-2025/',
    tag: 'Reforme',
    date: '25 juin 2025',
  },
];

export default function ActualitesHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Actualites', url: `${SITE.url}/actualites/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Actualites</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            Actualites bancaires au Maroc
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Suivez les dernieres actualites du secteur bancaire marocain : decisions de Bank Al-Maghrib,
            evolution des taux, reformes reglementaires, innovations digitales et lancement de nouveaux services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-brand transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block text-xs font-semibold text-brand bg-blue-50 px-2 py-0.5 rounded-full">
                  {article.tag}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h2 className="font-bold text-charcoal mb-2 group-hover:text-brand transition-colors">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{article.desc}</p>
              <span className="text-sm font-medium text-brand">Lire l&apos;article &rarr;</span>
            </a>
          ))}
        </div>

        {/* Editorial content */}
        <div className="prose max-w-4xl mx-auto">
          <h2>Pourquoi suivre l&apos;actualite bancaire au Maroc ?</h2>
          <p>
            Le secteur bancaire marocain est en pleine transformation. Entre les decisions de politique monetaire
            de Bank Al-Maghrib, la montee en puissance du mobile banking, les reformes reglementaires et la
            concurrence accrue entre les etablissements, les changements sont frequents et impactent directement
            les particuliers et les entreprises. Suivre ces actualites vous permet de prendre des decisions
            financieres eclairees.
          </p>
          <p>
            Nos articles d&apos;actualite couvrent les sujets les plus importants pour les clients bancaires au Maroc :
            evolution des taux de credit immobilier et consommation, nouvelles offres de cartes bancaires, lancement
            de services digitaux, et changements reglementaires. Chaque article est analyse par notre equipe pour
            vous expliquer l&apos;impact concret sur votre portefeuille.
          </p>

          <h3>Nos outils complementaires</h3>
          <p>
            Completez votre lecture avec nos outils gratuits pour optimiser vos finances :
          </p>
          <ul>
            <li><a href="/comparateur-banques/">Comparateur de banques</a> : comparez les 9 banques marocaines</li>
            <li><a href="/simulation-credit-immobilier/">Simulateur de credit immobilier</a> : calculez vos mensualites aux taux actuels</li>
            <li><a href="/guides/">Guides bancaires</a> : nos analyses approfondies par theme</li>
          </ul>
        </div>

        {/* Articles lies */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/guides/meilleure-banque-maroc/" className="text-sm text-brand hover:underline font-medium">Meilleure banque au Maroc 2026 &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur des banques marocaines &rarr;</a>
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2025
        </p>
      </div>
    </>
  );
}
