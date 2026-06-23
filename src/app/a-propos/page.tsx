import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: '\u00c0 propos de Banques Maroc',
  description: 'D\u00e9couvrez Banques Maroc, le comparateur ind\u00e9pendant des banques marocaines fond\u00e9 par Mottalib Radif (MBA INSEAD).',
  alternates: { canonical: `${SITE.url}/a-propos/` },
};

export default function AProposPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: '\u00c0 propos', url: `${SITE.url}/a-propos/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">\u00c0 propos</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">\u00c0 propos de Banques Maroc</h1>

        <div className="prose max-w-none">
          <h2>Notre mission</h2>
          <p>
            <strong>Banques Maroc</strong> est un comparateur ind\u00e9pendant qui aide les Marocains \u00e0 faire les meilleurs
            choix bancaires et financiers. Nous croyons que l&apos;acc\u00e8s \u00e0 une information claire, fiable et objective
            sur les produits bancaires est un droit pour chaque consommateur.
          </p>
          <p>
            Notre plateforme permet de comparer les banques, les cartes bancaires, les taux de cr\u00e9dit et de simuler
            ses mensualit\u00e9s en quelques clics. Toutes nos donn\u00e9es sont v\u00e9rifi\u00e9es et mises \u00e0 jour r\u00e9guli\u00e8rement.
          </p>

          <h2>L&apos;auteur</h2>
          <p>
            Banques Maroc est fond\u00e9 et dirig\u00e9 par <strong>{SITE.author}</strong>, titulaire d&apos;un <strong>{SITE.authorCredentials}</strong>.
            Fort d&apos;une exp\u00e9rience dans le secteur financier et d&apos;une connaissance approfondie du march\u00e9 bancaire
            marocain, Mottalib a cr\u00e9\u00e9 cette plateforme pour r\u00e9pondre \u00e0 un besoin r\u00e9el : aider les Marocains \u00e0
            naviguer dans l&apos;offre bancaire et \u00e0 trouver les meilleures conditions pour leurs projets financiers.
          </p>

          <h2>Notre m\u00e9thodologie</h2>
          <p>
            Les notes et classements pr\u00e9sent\u00e9s sur Banques Maroc reposent sur une m\u00e9thodologie transparente :
          </p>
          <ul>
            <li><strong>Comp\u00e9titivit\u00e9 des taux (30%)</strong> : nous comparons les taux de cr\u00e9dit immobilier, consommation et leasing de chaque banque.</li>
            <li><strong>Frais bancaires (20%)</strong> : cotisation de carte, frais de tenue de compte, commissions sur op\u00e9rations.</li>
            <li><strong>Services digitaux (20%)</strong> : qualit\u00e9 de l&apos;application mobile, banque en ligne, paiement mobile.</li>
            <li><strong>R\u00e9seau d&apos;agences (15%)</strong> : nombre d&apos;agences, couverture g\u00e9ographique, accessibilit\u00e9 GAB.</li>
            <li><strong>Satisfaction client (15%)</strong> : avis clients, qualit\u00e9 du service, r\u00e9activit\u00e9.</li>
          </ul>

          <h2>Ind\u00e9pendance \u00e9ditoriale</h2>
          <p>
            Banques Maroc est un site totalement ind\u00e9pendant. Nous ne sommes pas d\u00e9tenus par une banque et nos
            comparaisons sont objectives. Notre mod\u00e8le \u00e9conomique repose sur la publicit\u00e9 et l&apos;affiliation,
            mais ces partenariats n&apos;influencent jamais nos classements ni nos recommandations.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question, suggestion ou partenariat, contactez-nous \u00e0 :
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
