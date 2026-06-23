import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mentions l\u00e9gales - Banques Maroc',
  description: 'Mentions l\u00e9gales du site banquesmaroc.ma : \u00e9diteur, h\u00e9bergement, conditions, protection des donn\u00e9es.',
  alternates: { canonical: `${SITE.url}/mentions-legales/` },
};

export default function MentionsLegalesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Mentions l\u00e9gales', url: `${SITE.url}/mentions-legales/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Mentions l\u00e9gales</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Mentions l\u00e9gales</h1>

        <div className="prose max-w-none">
          <h2>\u00c9diteur du site</h2>
          <p>
            Le site {SITE.domain} est \u00e9dit\u00e9 par :<br />
            <strong>{SITE.author}</strong><br />
            Email : {SITE.contact}<br />
            Directeur de la publication : {SITE.author}
          </p>

          <h2>H\u00e9bergement</h2>
          <p>
            Le site est h\u00e9berg\u00e9 par GitHub Pages (GitHub, Inc.).<br />
            88 Colin P Kelly Jr St, San Francisco, CA 94107, United States.
          </p>

          <h2>Propri\u00e9t\u00e9 intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, graphismes, images, logos, outils de calcul, base de donn\u00e9es)
            est prot\u00e9g\u00e9 par le droit d&apos;auteur. Toute reproduction, m\u00eame partielle, est soumise \u00e0 autorisation
            pr\u00e9alable de l&apos;\u00e9diteur.
          </p>

          <h2>Avertissement</h2>
          <p>
            Les informations pr\u00e9sent\u00e9es sur ce site sont fournies \u00e0 titre indicatif et ne constituent en aucun
            cas un conseil financier personnalis\u00e9. Les taux, tarifs et conditions affich\u00e9s sont donn\u00e9s \u00e0 titre
            informatif et peuvent varier selon votre profil, les conditions du march\u00e9 et les politiques
            commerciales des banques.
          </p>
          <p>
            Avant de souscrire un produit bancaire ou un cr\u00e9dit, nous vous recommandons de consulter
            directement l&apos;\u00e9tablissement bancaire concern\u00e9 pour obtenir les conditions exactes et actualis\u00e9es.
          </p>

          <h2>Donn\u00e9es personnelles</h2>
          <p>
            Ce site ne collecte aucune donn\u00e9e personnelle. Les simulateurs fonctionnent enti\u00e8rement c\u00f4t\u00e9 client
            (dans votre navigateur) et aucune information saisie n&apos;est transmise \u00e0 nos serveurs.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques n\u00e9cessaires \u00e0 son fonctionnement. Il peut \u00e9galement utiliser
            des cookies d&apos;analyse d&apos;audience anonymis\u00e9s pour am\u00e9liorer l&apos;exp\u00e9rience utilisateur.
          </p>

          <h2>Liens externes</h2>
          <p>
            Ce site contient des liens vers des sites tiers (sites des banques notamment). L&apos;\u00e9diteur ne peut
            \u00eatre tenu responsable du contenu de ces sites externes.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Les pr\u00e9sentes mentions l\u00e9gales sont soumises au droit marocain. En cas de litige, les tribunaux
            marocains seront seuls comp\u00e9tents.
          </p>
        </div>
      </div>
    </>
  );
}
