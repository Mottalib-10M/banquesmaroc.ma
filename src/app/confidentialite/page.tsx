import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Banques Maroc en 2026',
  description: 'Politique de confidentialité de banquesmaroc.ma : aucune donnée personnelle collectée, simulations côté navigateur, pas de cookies de pistage commercial.',
  alternates: { canonical: `${SITE.url}/confidentialite/` },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Confidentialité', url: `${SITE.url}/confidentialite/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Confidentialité</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Politique de confidentialité</h1>

        <div className="prose max-w-none">
          <p>
            Chez <strong>Banques Maroc</strong> ({SITE.domain}), la protection de votre vie privée est une priorité. Cette page décrit en détail comment nous traitons vos données lorsque vous utilisez notre site, nos simulateurs et nos comparateurs.
          </p>

          <h2>Principe fondamental : aucune collecte de données personnelles</h2>

          <p>Banques Maroc ne collecte, ne stocke et ne transmet aucune donnée personnelle. Ce principe s&apos;applique à l&apos;ensemble de nos services :</p>

          <ul>
            <li><strong>Simulateurs de crédit :</strong> les données saisies (montant, durée, taux, revenus) sont traitées exclusivement dans votre navigateur. Aucune information financière n&apos;est envoyée à nos serveurs.</li>
            <li><strong>Comparateur de banques :</strong> les filtres et critères de comparaison ne sont pas enregistrés côté serveur.</li>
            <li><strong>Comparateur de cartes :</strong> les préférences de sélection restent dans votre navigateur.</li>
            <li><strong>Capacité d&apos;emprunt :</strong> le calcul s&apos;effectue entièrement côté client.</li>
          </ul>

          <h2>Traitement côté client</h2>

          <p>L&apos;ensemble de nos simulateurs et comparateurs fonctionne grâce à du code exécuté localement dans votre navigateur. Concrètement :</p>

          <ul>
            <li>Vos données financières ne quittent jamais votre appareil.</li>
            <li>Les simulations sont effectuées instantanément sur votre machine.</li>
            <li>Aucune base de données ne contient vos informations de revenus ou de crédit.</li>
            <li>La fermeture de votre navigateur ou de l&apos;onglet efface toute trace de vos saisies.</li>
          </ul>

          <h2>Cookies</h2>

          <p>Banques Maroc n&apos;utilise aucun cookie de suivi publicitaire ou de pistage commercial. Le site peut utiliser des cookies techniques strictement nécessaires au bon fonctionnement du site. Ces cookies ne contiennent aucune information personnelle identifiable.</p>

          <h2>Outils d&apos;analyse</h2>

          <p>Le site peut utiliser des outils d&apos;analyse d&apos;audience anonymes pour comprendre l&apos;utilisation du site et améliorer l&apos;expérience utilisateur. Ces outils collectent des données agrégées et anonymisées (pages visitées, durée de visite, type d&apos;appareil) sans permettre l&apos;identification d&apos;un utilisateur individuel. Aucune donnée financière ou personnelle n&apos;est collectée par ces outils.</p>

          <h2>Liens externes</h2>

          <p>Notre site contient des liens vers les sites web des banques marocaines et d&apos;autres institutions financières. Nous n&apos;avons aucun contrôle sur les politiques de confidentialité de ces sites tiers. Nous vous encourageons à consulter les politiques de confidentialité respectives de ces sites lorsque vous les visitez.</p>

          <h2>Droits des utilisateurs</h2>

          <p>Puisque nous ne collectons aucune donnée personnelle, il n&apos;y a aucune donnée à consulter, modifier ou supprimer. Si vous avez des questions concernant votre vie privée sur notre site, contactez-nous à : <a href={`mailto:${SITE.contact}`}>{SITE.contact}</a>.</p>

          <h2>Modifications de cette politique</h2>

          <p>Nous nous réservons le droit de mettre à jour cette politique de confidentialité. Toute modification sera publiée sur cette page avec la date de mise à jour.</p>

          <h2>Contact</h2>

          <p>Pour toute question relative à cette politique de confidentialité, vous pouvez nous écrire à : <a href={`mailto:${SITE.contact}`}>{SITE.contact}</a>.</p>

          <p className="text-sm text-gray-500 mt-8">Dernière mise à jour : juin 2026</p>
        </div>
      </div>
    </>
  );
}
