import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';
import ComparateurBanques from '@/components/comparateur/ComparateurBanques';

export const metadata: Metadata = {
  title: 'Comparateur banques Maroc 2025 - Taux et frais',
  description: 'Comparez les banques marocaines : AWB, BP, BOA, CIH, SG, BMCI, CFG, CAM, Al Barid. Taux, frais, cartes et services compar\u00e9s.',
  alternates: { canonical: `${SITE.url}/comparateur-banques/` },
};

export default function ComparateurBanquesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Comparateur banques', url: `${SITE.url}/comparateur-banques/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Comparateur banques</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Comparateur des banques au Maroc 2025
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          S\u00e9lectionnez jusqu&apos;\u00e0 3 banques pour les comparer c\u00f4te \u00e0 c\u00f4te. Filtrez par type et triez par le crit\u00e8re qui vous importe le plus.
        </p>

        <ComparateurBanques />

        {/* SEO Content */}
        <div className="mt-12 prose max-w-4xl">
          <h2>Comment choisir la bonne banque au Maroc ?</h2>
          <p>
            Choisir une banque au Maroc est une d\u00e9cision importante qui impacte votre quotidien financier pendant
            des ann\u00e9es. Notre comparateur vous permet d&apos;\u00e9valuer objectivement les 9 principales banques de d\u00e9tail
            du march\u00e9 marocain sur des crit\u00e8res concrets : taux de cr\u00e9dit, frais bancaires, r\u00e9seau d&apos;agences,
            qualit\u00e9 de l&apos;application mobile et services propos\u00e9s.
          </p>

          <h3>Les crit\u00e8res cl\u00e9s pour comparer</h3>
          <p>
            <strong>Les taux de cr\u00e9dit</strong> sont souvent le premier crit\u00e8re de choix, surtout pour un projet
            immobilier. Un \u00e9cart de 0,5% sur un pr\u00eat de 800 000 DH sur 20 ans repr\u00e9sente une \u00e9conomie de
            plus de 50 000 DH. Utilisez notre simulateur de cr\u00e9dit pour calculer la diff\u00e9rence exacte.
          </p>
          <p>
            <strong>Les frais bancaires</strong> incluent les frais de tenue de compte, la cotisation de la carte
            bancaire et les commissions sur les op\u00e9rations. Certaines banques comme CIH Bank et CFG Bank proposent
            des comptes sans frais avec carte gratuite, tandis que d&apos;autres comme BMCI ou Soci\u00e9t\u00e9 G\u00e9n\u00e9rale
            se positionnent sur le segment premium avec des tarifs plus \u00e9lev\u00e9s mais des services sup\u00e9rieurs.
          </p>
          <p>
            <strong>Le r\u00e9seau d&apos;agences</strong> reste important au Maroc, m\u00eame \u00e0 l&apos;\u00e8re du digital. Attijariwafa Bank
            (4 800 agences) et la Banque Populaire (4 600 agences) dominent largement ce crit\u00e8re, offrant
            une couverture nationale incomparable.
          </p>

          <h3>Notre m\u00e9thodologie de notation</h3>
          <p>
            La note attribu\u00e9e \u00e0 chaque banque prend en compte : la comp\u00e9titivit\u00e9 des taux (30%), les frais
            bancaires (20%), la qualit\u00e9 des services digitaux (20%), le r\u00e9seau d&apos;agences (15%) et la satisfaction
            client (15%). Ces notes sont mises \u00e0 jour r\u00e9guli\u00e8rement pour refl\u00e9ter les \u00e9volutions du march\u00e9.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis \u00e0 jour en 2025
        </p>
      </div>
    </>
  );
}
