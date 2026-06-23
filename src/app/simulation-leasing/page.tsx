import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema } from '@/lib/seo';
import SimulateurLeasing from '@/components/simulateurs/SimulateurLeasing';

export const metadata: Metadata = {
  title: 'Simulateur leasing auto Maroc 2025 - LOA v\u00e9hicule',
  description: 'Calculez votre mensualit\u00e9 de leasing auto (LOA) au Maroc. Taux de 5% \u00e0 8%. Comparez les offres de leasing automobile.',
  alternates: { canonical: `${SITE.url}/simulation-leasing/` },
};

export default function SimulationLeasingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Leasing auto', url: `${SITE.url}/simulation-leasing/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    'Simulateur leasing auto Maroc',
    'Calculez votre mensualit\u00e9 de leasing automobile au Maroc',
    `${SITE.url}/simulation-leasing/`
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Simulateur leasing auto</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Simulateur de leasing auto au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Calculez votre mensualit\u00e9 de LOA (Location avec Option d&apos;Achat). Taux de 5% \u00e0 8% au Maroc, dur\u00e9e de 2 \u00e0 7 ans.
        </p>

        <SimulateurLeasing />

        <div className="mt-12 prose max-w-4xl">
          <h2>Le leasing automobile au Maroc</h2>
          <p>
            Le leasing auto, ou LOA (Location avec Option d&apos;Achat), est un mode de financement tr\u00e8s r\u00e9pandu
            au Maroc, particuli\u00e8rement pour les professionnels et les entreprises gr\u00e2ce \u00e0 ses avantages fiscaux.
            Contrairement au cr\u00e9dit classique, le v\u00e9hicule reste la propri\u00e9t\u00e9 de l&apos;organisme de leasing
            jusqu&apos;au paiement de la valeur r\u00e9siduelle.
          </p>

          <h3>Comment fonctionne le leasing ?</h3>
          <p>
            Vous choisissez un v\u00e9hicule, versez un apport initial (g\u00e9n\u00e9ralement 10-30%), puis payez des mensualit\u00e9s
            pendant la dur\u00e9e du contrat (2 \u00e0 7 ans). \u00c0 la fin du contrat, vous avez le choix : lever l&apos;option
            d&apos;achat en payant la valeur r\u00e9siduelle (et devenir propri\u00e9taire), restituer le v\u00e9hicule, ou
            renouveler le contrat avec un nouveau v\u00e9hicule.
          </p>

          <h3>Avantages du leasing</h3>
          <ul>
            <li><strong>Avantage fiscal</strong> : les loyers sont d\u00e9ductibles pour les professionnels</li>
            <li><strong>Pas de TVA sur l&apos;acquisition</strong> : la TVA est incluse dans les loyers</li>
            <li><strong>Mensualit\u00e9s plus basses</strong> : gr\u00e2ce \u00e0 la valeur r\u00e9siduelle</li>
            <li><strong>Flexibilit\u00e9</strong> : possibilit\u00e9 de changer de v\u00e9hicule r\u00e9guli\u00e8rement</li>
          </ul>

          <h3>Principaux acteurs du leasing au Maroc</h3>
          <p>
            Les principales soci\u00e9t\u00e9s de leasing au Maroc sont : Wafabail (Attijariwafa Bank), Maroc Leasing
            (Banque Populaire), Maghrebail (BMCE BOA), Sogelease (Soci\u00e9t\u00e9 G\u00e9n\u00e9rale) et BMCI Leasing. Les
            taux varient de 5% \u00e0 8% selon l&apos;organisme et le profil du client.
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
