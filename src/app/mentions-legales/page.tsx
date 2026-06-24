import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mentions légales et politique de confidentialité 2026',
  description: 'Mentions légales du site banquesmaroc.ma : éditeur, hébergement, conditions générales, protection des données personnelles et politique de cookies. Informations complètes conformes au droit marocain.',
  alternates: { canonical: `${SITE.url}/mentions-legales/` },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Mentions légales', url: `${SITE.url}/mentions-legales/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Mentions légales</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Mentions légales</h1>

        <div className="prose max-w-none">
          <h2>Éditeur du site</h2>
          <p>
            Le site {SITE.domain} est édité par :<br />
            <strong>{SITE.author}</strong><br />
            Email : {SITE.contact}<br />
            Directeur de la publication : {SITE.author}
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par GitHub Pages (GitHub, Inc.).<br />
            88 Colin P Kelly Jr St, San Francisco, CA 94107, United States.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, graphismes, images, logos, outils de calcul, base de données)
            est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est soumise à autorisation
            préalable de l&apos;éditeur.
          </p>

          <h2>Avertissement</h2>
          <p>
            Les informations présentées sur ce site sont fournies à titre indicatif et ne constituent en aucun
            cas un conseil financier personnalisé. Les taux, tarifs et conditions affichés sont donnés à titre
            informatif et peuvent varier selon votre profil, les conditions du marché et les politiques
            commerciales des banques.
          </p>
          <p>
            Avant de souscrire un produit bancaire ou un crédit, nous vous recommandons de consulter
            directement l&apos;établissement bancaire concerné pour obtenir les conditions exactes et actualisées.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Les simulateurs fonctionnent entièrement côté client
            (dans votre navigateur) et aucune information saisie n&apos;est transmise à nos serveurs.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son fonctionnement. Il peut également utiliser
            des cookies d&apos;analyse d&apos;audience anonymisés pour améliorer l&apos;expérience utilisateur.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site contient des liens vers des sites tiers (sites des banques notamment). L&apos;éditeur ne peut
            être tenu responsable du contenu de ces sites externes.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit marocain. En cas de litige, les tribunaux
            marocains seront seuls compétents.
          </p>
        </div>
      </div>
    </>
  );
}
