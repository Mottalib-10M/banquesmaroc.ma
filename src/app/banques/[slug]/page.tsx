import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildFinancialProductSchema } from '@/lib/seo';
import { banques, getBanqueById, getBanquesRetail } from '@/data/banques';
import { getComparisonsForBank } from '@/data/comparisons';
import { getCartesByBanque } from '@/data/cartes';
import { formatDH, formatPourcent } from '@/lib/format';

export function generateStaticParams() {
  return banques.map((b) => ({ slug: b.id }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const banque = getBanqueById(slug);
  if (!banque) return {};

  return {
    title: `${banque.nom} - Avis, taux et tarifs 2026 au Maroc`,
    description: `Avis ${banque.nom} au Maroc 2026 : taux de crédit immobilier et conso, frais bancaires, cartes, réseau d'agences, services digitaux et note détaillée.`,
    alternates: { canonical: `${SITE.url}/banques/${slug}/` },
  };
}

export default async function BanquePage({ params }: PageProps) {
  const { slug } = await params;
  const banque = getBanqueById(slug);
  if (!banque) notFound();

  const cartesBanque = getCartesByBanque(slug);
  const autresBanques = getBanquesRetail().filter((b) => b.id !== slug).slice(0, 4);
  const comparisons = getComparisonsForBank(slug);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Banques', url: `${SITE.url}/comparateur-banques/` },
    { name: banque.nomCourt, url: `${SITE.url}/banques/${slug}/` },
  ]);

  const productSchema = banque.tauxCredit.immobilier.min > 0
    ? buildFinancialProductSchema(
        banque.nom,
        `Crédit immobilier ${banque.nomCourt}`,
        banque.tauxCredit.immobilier,
        'MortgageLoan'
      )
    : null;

  const stars = Math.round((banque.note / 10) * 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {productSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/comparateur-banques/" className="hover:text-brand">Banques</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">{banque.nomCourt}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-16 h-16 bg-brand/10 rounded-xl flex items-center justify-center text-brand font-bold text-xl shrink-0">
              {banque.nomCourt}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">{banque.nom}</h1>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 font-bold text-charcoal">{banque.note}/10</span>
                </div>
                <span className="text-sm text-gray-500">
                  {banque.type === 'universelle' ? 'Banque universelle' :
                   banque.type === 'cooperative' ? 'Banque coopérative' :
                   banque.type === 'specialisee' ? 'Banque spécialisée' :
                   banque.type === 'centrale' ? 'Banque centrale' : 'Banque postale'}
                </span>
                <span className="text-sm text-gray-500">Fondée en {banque.fondation}</span>
                <span className="text-sm text-gray-500">{banque.siege}</span>
              </div>
              <p className="mt-3 text-gray-600">{banque.description}</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        {banque.type !== 'centrale' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <MetricCard label="Part de marché" value={formatPourcent(banque.partMarche, 1)} />
            <MetricCard label="Agences" value={banque.agences.toLocaleString('fr-FR')} />
            {banque.tauxCredit.immobilier.min > 0 && (
              <MetricCard label="Taux immobilier dès" value={formatPourcent(banque.tauxCredit.immobilier.min)} highlight />
            )}
            <MetricCard
              label="Carte dès"
              value={banque.cartes.length > 0 ? formatDH(Math.min(...banque.cartes.map((c) => c.cotisation))) : 'N/A'}
            />
          </div>
        )}

        {/* Histoire */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-charcoal mb-4">Histoire de {banque.nomCourt}</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-gray-600 leading-relaxed">{banque.histoire}</p>
          </div>
        </section>

        {/* Taux de credit */}
        {banque.tauxCredit.immobilier.min > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Taux de crédit {banque.nomCourt}</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="text-left px-4 py-3 font-semibold">Type de crédit</th>
                    <th className="text-right px-4 py-3 font-semibold">Taux minimum</th>
                    <th className="text-right px-4 py-3 font-semibold">Taux maximum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Crédit immobilier</td>
                    <td className="px-4 py-3 text-right text-brand font-semibold">{formatPourcent(banque.tauxCredit.immobilier.min)}</td>
                    <td className="px-4 py-3 text-right">{formatPourcent(banque.tauxCredit.immobilier.max)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Crédit consommation</td>
                    <td className="px-4 py-3 text-right text-brand font-semibold">{formatPourcent(banque.tauxCredit.conso.min)}</td>
                    <td className="px-4 py-3 text-right">{formatPourcent(banque.tauxCredit.conso.max)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Leasing auto</td>
                    <td className="px-4 py-3 text-right text-brand font-semibold">{formatPourcent(banque.tauxCredit.auto.min)}</td>
                    <td className="px-4 py-3 text-right">{formatPourcent(banque.tauxCredit.auto.max)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex gap-3">
              <a href="/simulation-credit-immobilier/" className="text-sm text-brand font-medium hover:underline">
                Simuler un crédit immobilier &rarr;
              </a>
              <a href="/simulation-credit-consommation/" className="text-sm text-brand font-medium hover:underline">
                Simuler un crédit conso &rarr;
              </a>
            </div>
          </section>
        )}

        {/* Comptes */}
        {banque.comptes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Comptes bancaires {banque.nomCourt}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {banque.comptes.map((compte) => (
                <div key={compte.nom} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-charcoal">{compte.nom}</h3>
                    <span className="text-sm font-semibold text-brand">
                      {compte.fraisTenue === 0 ? 'Gratuit' : `${formatDH(compte.fraisTenue)}/an`}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{compte.description}</p>
                  <div className="flex gap-2 mt-2">
                    {compte.carteIncluse && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Carte incluse</span>
                    )}
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      {compte.type === 'courant' ? 'Courant' : compte.type === 'epargne' ? 'Épargne' : compte.type === 'professionnel' ? 'Pro' : 'Jeune'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cartes */}
        {cartesBanque.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Cartes bancaires {banque.nomCourt}</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-light-gray">
                      <th className="text-left px-4 py-3 font-semibold">Carte</th>
                      <th className="text-right px-4 py-3 font-semibold">Cotisation</th>
                      <th className="text-right px-4 py-3 font-semibold">Retrait/jour</th>
                      <th className="text-right px-4 py-3 font-semibold">Paiement/mois</th>
                      <th className="text-center px-4 py-3 font-semibold">Assurance</th>
                      <th className="text-center px-4 py-3 font-semibold">Cashback</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {cartesBanque.map((c, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 font-medium">{c.nom}</td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {c.cotisation === 0 ? <span className="text-success">Gratuite</span> : `${formatDH(c.cotisation)}/an`}
                        </td>
                        <td className="px-4 py-3 text-right">{formatDH(c.plafondRetraitJour)}</td>
                        <td className="px-4 py-3 text-right">{formatDH(c.plafondPaiementMois)}</td>
                        <td className="px-4 py-3 text-center">{c.assuranceVoyage ? '✓' : '-'}</td>
                        <td className="px-4 py-3 text-center">{c.cashback ? `${c.cashbackTaux}%` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <a href="/comparateur-cartes/" className="mt-3 inline-block text-sm text-brand font-medium hover:underline">
              Comparer toutes les cartes &rarr;
            </a>
          </section>
        )}

        {/* Avantages / Inconvenients */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-charcoal mb-4">Avantages et inconvénients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl border border-green-200 p-5">
              <h3 className="font-bold text-green-800 mb-3">Avantages</h3>
              <ul className="space-y-2">
                {banque.avantages.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-5">
              <h3 className="font-bold text-red-800 mb-3">Inconvénients</h3>
              <ul className="space-y-2">
                {banque.inconvenients.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Comparatifs vs */}
        {comparisons.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">Comparatifs {banque.nomCourt} vs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {comparisons.map((c) => {
                const otherName = c.slug1 === slug ? c.nomCourt2 : c.nomCourt1;
                const vsSlug = `${c.slug1}-vs-${c.slug2}`;
                return (
                  <a key={vsSlug} href={`/comparatif/${vsSlug}/`} className="bg-white rounded-xl border border-gray-200 p-3 hover:shadow-md hover:border-brand transition-all text-sm font-medium text-brand">
                    {banque.nomCourt} vs {otherName} &rarr;
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* Autres banques */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-charcoal mb-4">Comparer avec d&apos;autres banques</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {autresBanques.map((b) => (
              <a
                key={b.id}
                href={`/banques/${b.id}/`}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-brand transition-all text-center"
              >
                <p className="font-bold text-charcoal">{b.nomCourt}</p>
                <p className="text-sm text-brand font-semibold">{b.note}/10</p>
                {b.tauxCredit.immobilier.min > 0 && (
                  <p className="text-xs text-gray-500 mt-1">Immo dès {formatPourcent(b.tauxCredit.immobilier.min)}</p>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Articles lies */}
        <section className="mb-8 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="/guides/meilleure-banque-maroc/" className="text-sm text-brand hover:underline font-medium">Meilleure banque au Maroc 2026 &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
            <a href="/guides/comment-choisir-carte-bancaire/" className="text-sm text-brand hover:underline font-medium">Guide des cartes bancaires &rarr;</a>
            <a href="/guides/" className="text-sm text-brand hover:underline font-medium">Tous nos guides bancaires &rarr;</a>
          </div>
        </section>

        <p className="text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}

function MetricCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl p-4 ${highlight ? 'bg-brand text-white' : 'bg-white border border-gray-200'}`}>
      <p className={`text-xs ${highlight ? 'text-blue-200' : 'text-gray-500'}`}>{label}</p>
      <p className={`text-xl font-bold mt-1 ${highlight ? 'text-white' : 'text-charcoal'}`}>{value}</p>
    </div>
  );
}
