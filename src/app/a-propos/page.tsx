import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Banques au Maroc : notre mission et méthodologie 2026',
  description: 'Découvrez Banques Maroc, le comparateur indépendant des banques marocaines fondé par Mottalib Radif (MBA INSEAD). Notre méthodologie transparente et nos critères de notation expliqués.',
  alternates: { canonical: `${SITE.url}/a-propos/` },
};

export default function AProposPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'À propos', url: `${SITE.url}/a-propos/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">À propos</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">À propos de Banques Maroc</h1>

        <div className="prose max-w-none">
          <h2>Notre mission</h2>
          <p>
            <strong>Banques Maroc</strong> est un comparateur indépendant qui aide les Marocains à faire les meilleurs
            choix bancaires et financiers. Nous croyons que l&apos;accès à une information claire, fiable et objective
            sur les produits bancaires est un droit pour chaque consommateur.
          </p>
          <p>
            Notre plateforme permet de comparer les banques, les cartes bancaires, les taux de crédit et de simuler
            ses mensualités en quelques clics. Toutes nos données sont vérifiées et mises à jour régulièrement.
          </p>

          <h2>L&apos;auteur</h2>
          <p>
            Banques Maroc est fondé et dirigé par <strong>{SITE.author}</strong>, titulaire d&apos;un <strong>{SITE.authorCredentials}</strong>.
            Fort d&apos;une expérience dans le secteur financier et d&apos;une connaissance approfondie du marché bancaire
            marocain, Mottalib a créé cette plateforme pour répondre à un besoin réel : aider les Marocains à
            naviguer dans l&apos;offre bancaire et à trouver les meilleures conditions pour leurs projets financiers.
          </p>

          <h2>Notre méthodologie</h2>
          <p>
            Les notes et classements présentés sur Banques Maroc reposent sur une méthodologie transparente :
          </p>
          <ul>
            <li><strong>Compétitivité des taux (30%)</strong> : nous comparons les taux de crédit immobilier, consommation et leasing de chaque banque.</li>
            <li><strong>Frais bancaires (20%)</strong> : cotisation de carte, frais de tenue de compte, commissions sur opérations.</li>
            <li><strong>Services digitaux (20%)</strong> : qualité de l&apos;application mobile, banque en ligne, paiement mobile.</li>
            <li><strong>Réseau d&apos;agences (15%)</strong> : nombre d&apos;agences, couverture géographique, accessibilité GAB.</li>
            <li><strong>Satisfaction client (15%)</strong> : avis clients, qualité du service, réactivité.</li>
          </ul>

          <h2>Indépendance éditoriale</h2>
          <p>
            Banques Maroc est un site totalement indépendant. Nous ne sommes pas détenus par une banque et nos
            comparaisons sont objectives. Notre modèle économique repose sur la publicité et l&apos;affiliation,
            mais ces partenariats n&apos;influencent jamais nos classements ni nos recommandations.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question, suggestion ou partenariat, contactez-nous à :
            <a href={`mailto:${SITE.contact}`}> {SITE.contact}</a>
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials})
        </p>
      </div>
    </>
  );
}
