import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema } from '@/lib/seo';
import CapaciteEmpruntComponent from '@/components/simulateurs/CapaciteEmprunt';

export const metadata: Metadata = {
  title: "Capacit\u00e9 d'emprunt Maroc 2025 - Combien emprunter",
  description: "Calculez votre capacit\u00e9 d'emprunt au Maroc. Taux d'endettement 45% max (Bank Al-Maghrib). D\u00e9couvrez combien vous pouvez emprunter.",
  alternates: { canonical: `${SITE.url}/capacite-emprunt/` },
};

export default function CapaciteEmpruntPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: "Capacit\u00e9 d'emprunt", url: `${SITE.url}/capacite-emprunt/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    "Calculateur de capacit\u00e9 d'emprunt Maroc",
    "D\u00e9couvrez combien vous pouvez emprunter au Maroc selon vos revenus",
    `${SITE.url}/capacite-emprunt/`
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Capacit\u00e9 d&apos;emprunt</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Calculez votre capacit\u00e9 d&apos;emprunt au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          D\u00e9couvrez combien vous pouvez emprunter en fonction de vos revenus. Le taux d&apos;endettement maximum au Maroc est de 45% (r\u00e9glementation Bank Al-Maghrib).
        </p>

        <CapaciteEmpruntComponent />

        <div className="mt-12 prose max-w-4xl">
          <h2>Comprendre la capacit\u00e9 d&apos;emprunt au Maroc</h2>
          <p>
            La capacit\u00e9 d&apos;emprunt repr\u00e9sente le montant maximum que vous pouvez emprunter aupr\u00e8s d&apos;une banque
            marocaine. Elle d\u00e9pend principalement de vos revenus, de vos charges existantes et du taux
            d&apos;endettement r\u00e9glementaire fix\u00e9 par Bank Al-Maghrib.
          </p>

          <h3>La r\u00e8gle des 45%</h3>
          <p>
            Au Maroc, Bank Al-Maghrib impose aux banques de ne pas accorder de cr\u00e9dit si le taux d&apos;endettement
            de l&apos;emprunteur d\u00e9passe 45% de ses revenus nets mensuels. Ce taux inclut l&apos;ensemble des mensualit\u00e9s
            de cr\u00e9dit (immobilier, consommation, leasing). Par exemple, un salari\u00e9 gagnant 15 000 DH net/mois
            ne pourra pas avoir des mensualit\u00e9s totales sup\u00e9rieures \u00e0 6 750 DH.
          </p>

          <h3>Facteurs influant sur la capacit\u00e9 d&apos;emprunt</h3>
          <ul>
            <li><strong>Revenus nets</strong> : salaire + primes r\u00e9guli\u00e8res + revenus locatifs + autres revenus stables</li>
            <li><strong>Charges existantes</strong> : cr\u00e9dits en cours, pensions alimentaires, loyer (si non propri\u00e9taire)</li>
            <li><strong>Taux du cr\u00e9dit</strong> : plus le taux est bas, plus vous pouvez emprunter</li>
            <li><strong>Dur\u00e9e du cr\u00e9dit</strong> : plus la dur\u00e9e est longue, plus la capacit\u00e9 est \u00e9lev\u00e9e</li>
            <li><strong>Profil de l&apos;emprunteur</strong> : stabilit\u00e9 professionnelle, anciennet\u00e9, secteur d&apos;activit\u00e9</li>
          </ul>

          <h3>Exemple concret</h3>
          <p>
            Un couple avec un revenu total de 25 000 DH/mois et aucune charge peut emprunter jusqu&apos;\u00e0
            environ 1 500 000 DH sur 20 ans \u00e0 un taux de 4,75%. Leur mensualit\u00e9 sera d&apos;environ 10 000 DH,
            soit 40% de leur revenu, bien en dessous du seuil de 45%.
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
