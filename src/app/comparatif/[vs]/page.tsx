import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo';
import { getBanqueById } from '@/data/banques';
import { comparisons } from '@/data/comparisons';
import { formatDH, formatPourcent } from '@/lib/format';

export function generateStaticParams() {
  return comparisons.map((c) => ({
    vs: `${c.slug1}-vs-${c.slug2}`,
  }));
}

interface PageProps {
  params: Promise<{ vs: string }>;
}

function parseVsSlug(raw: string): { slug1: string; slug2: string } | null {
  const idx = raw.indexOf('-vs-');
  if (idx === -1) return null;
  return { slug1: raw.slice(0, idx), slug2: raw.slice(idx + 4) };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { vs: raw } = await params;
  const parsed = parseVsSlug(raw);
  if (!parsed) return {};
  const b1 = getBanqueById(parsed.slug1);
  const b2 = getBanqueById(parsed.slug2);
  if (!b1 || !b2) return {};

  return {
    title: `${b1.nomCourt} vs ${b2.nomCourt} au Maroc 2026 : comparatif banques complet`,
    description: `Comparatif detaille ${b1.nom} vs ${b2.nom} au Maroc en 2026 : taux de credit, frais bancaires, cartes, reseau d'agences et services digitaux compares.`,
    alternates: { canonical: `${SITE.url}/comparatif/${parsed.slug1}-vs-${parsed.slug2}/` },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { vs: raw } = await params;
  const parsed = parseVsSlug(raw);
  if (!parsed) notFound();

  const b1 = getBanqueById(parsed.slug1);
  const b2 = getBanqueById(parsed.slug2);
  if (!b1 || !b2) notFound();

  const faqData = [
    {
      question: `Quelle banque choisir entre ${b1.nomCourt} et ${b2.nomCourt} ?`,
      answer: `Le choix depend de votre profil. ${b1.nomCourt} se distingue par ${b1.avantages[0].toLowerCase()}, tandis que ${b2.nomCourt} excelle avec ${b2.avantages[0].toLowerCase()}. Pour le credit immobilier, ${b1.tauxCredit.immobilier.min <= b2.tauxCredit.immobilier.min ? b1.nomCourt : b2.nomCourt} offre un meilleur taux de depart.`,
    },
    {
      question: `Quelle banque a les meilleurs taux de credit immobilier entre ${b1.nomCourt} et ${b2.nomCourt} ?`,
      answer: `${b1.nomCourt} propose des taux immobiliers des ${formatPourcent(b1.tauxCredit.immobilier.min)}, contre ${formatPourcent(b2.tauxCredit.immobilier.min)} pour ${b2.nomCourt}. L'ecart maximal est de ${formatPourcent(Math.abs(b1.tauxCredit.immobilier.max - b2.tauxCredit.immobilier.max))} sur le taux plafond.`,
    },
    {
      question: `Quelle banque est la moins chere entre ${b1.nomCourt} et ${b2.nomCourt} ?`,
      answer: `En termes de carte classique, ${b1.nomCourt} facture ${b1.cartes.length > 0 ? formatDH(Math.min(...b1.cartes.map((c) => c.cotisation))) : 'N/A'}/an contre ${b2.cartes.length > 0 ? formatDH(Math.min(...b2.cartes.map((c) => c.cotisation))) : 'N/A'}/an pour ${b2.nomCourt}. Les frais de tenue de compte sont ${b1.comptes.some((c) => c.fraisTenue === 0) ? 'gratuits' : 'payants'} chez ${b1.nomCourt} et ${b2.comptes.some((c) => c.fraisTenue === 0) ? 'gratuits' : 'payants'} chez ${b2.nomCourt}.`,
    },
    {
      question: `Quelle banque a le meilleur reseau d'agences entre ${b1.nomCourt} et ${b2.nomCourt} ?`,
      answer: `${b1.agences > b2.agences ? b1.nomCourt : b2.nomCourt} dispose du reseau le plus dense avec ${Math.max(b1.agences, b2.agences).toLocaleString('fr-FR')} agences contre ${Math.min(b1.agences, b2.agences).toLocaleString('fr-FR')} pour ${b1.agences > b2.agences ? b2.nomCourt : b1.nomCourt}.`,
    },
    {
      question: `Peut-on avoir un compte dans ${b1.nomCourt} et ${b2.nomCourt} en meme temps ?`,
      answer: `Oui, la multi-bancarisation est tout a fait legale au Maroc. Vous pouvez cumuler les avantages des deux banques, par exemple utiliser ${b1.nomCourt} pour ${b1.avantages[0].toLowerCase()} et ${b2.nomCourt} pour ${b2.avantages[0].toLowerCase()}.`,
    },
  ];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Comparateur', url: `${SITE.url}/comparateur-banques/` },
    { name: `${b1.nomCourt} vs ${b2.nomCourt}`, url: `${SITE.url}/comparatif/${parsed.slug1}-vs-${parsed.slug2}/` },
  ]);
  const faqSchema = buildFAQSchema(faqData);

  const winner = (v1: number, v2: number, lower = false) => {
    if (v1 === v2) return { c1: '', c2: '' };
    const best = lower ? (v1 < v2 ? 'c1' : 'c2') : (v1 > v2 ? 'c1' : 'c2');
    return { c1: best === 'c1' ? 'text-success font-semibold' : '', c2: best === 'c2' ? 'text-success font-semibold' : '' };
  };

  const noteW = winner(b1.note, b2.note);
  const agencesW = winner(b1.agences, b2.agences);
  const immoMinW = winner(b1.tauxCredit.immobilier.min, b2.tauxCredit.immobilier.min, true);
  const consoMinW = winner(b1.tauxCredit.conso.min, b2.tauxCredit.conso.min, true);
  const autoMinW = winner(b1.tauxCredit.auto.min, b2.tauxCredit.auto.min, true);
  const carteMinB1 = b1.cartes.length > 0 ? Math.min(...b1.cartes.map((c) => c.cotisation)) : 999;
  const carteMinB2 = b2.cartes.length > 0 ? Math.min(...b2.cartes.map((c) => c.cotisation)) : 999;
  const carteW = winner(carteMinB1, carteMinB2, true);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/comparateur-banques/" className="hover:text-brand">Banques</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">{b1.nomCourt} vs {b2.nomCourt}</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
            {b1.nomCourt} vs {b2.nomCourt} 2026 : comparatif complet
          </h1>
          <p className="text-gray-500">
            Comparaison detaillee de {b1.nom} et {b2.nom} : taux, frais, cartes, reseau et services digitaux.
          </p>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Par {SITE.author} ({SITE.authorCredentials})</span>
            <span>Mis a jour en juin 2026</span>
          </div>
        </header>

        {/* En bref box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-brand mb-2">En bref : {b1.nomCourt} vs {b2.nomCourt}</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Note :</strong> {b1.nomCourt} {b1.note}/10 vs {b2.nomCourt} {b2.note}/10</li>
            <li><strong>Taux immobilier :</strong> des {formatPourcent(b1.tauxCredit.immobilier.min)} ({b1.nomCourt}) vs des {formatPourcent(b2.tauxCredit.immobilier.min)} ({b2.nomCourt})</li>
            <li><strong>Agences :</strong> {b1.agences.toLocaleString('fr-FR')} ({b1.nomCourt}) vs {b2.agences.toLocaleString('fr-FR')} ({b2.nomCourt})</li>
            <li><strong>Carte des :</strong> {formatDH(carteMinB1)}/an ({b1.nomCourt}) vs {formatDH(carteMinB2)}/an ({b2.nomCourt})</li>
          </ul>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold">Critere</th>
                  <th className="text-center px-4 py-3 font-semibold">{b1.nomCourt}</th>
                  <th className="text-center px-4 py-3 font-semibold">{b2.nomCourt}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Note globale</td>
                  <td className={`px-4 py-3 text-center ${noteW.c1}`}>{b1.note}/10</td>
                  <td className={`px-4 py-3 text-center ${noteW.c2}`}>{b2.note}/10</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Type</td>
                  <td className="px-4 py-3 text-center">{b1.type}</td>
                  <td className="px-4 py-3 text-center">{b2.type}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Fondation</td>
                  <td className="px-4 py-3 text-center">{b1.fondation}</td>
                  <td className="px-4 py-3 text-center">{b2.fondation}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Agences</td>
                  <td className={`px-4 py-3 text-center ${agencesW.c1}`}>{b1.agences.toLocaleString('fr-FR')}</td>
                  <td className={`px-4 py-3 text-center ${agencesW.c2}`}>{b2.agences.toLocaleString('fr-FR')}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Part de marche</td>
                  <td className="px-4 py-3 text-center">{formatPourcent(b1.partMarche, 1)}</td>
                  <td className="px-4 py-3 text-center">{formatPourcent(b2.partMarche, 1)}</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3 font-bold" colSpan={3}>Taux de credit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Immobilier (min)</td>
                  <td className={`px-4 py-3 text-center ${immoMinW.c1}`}>{formatPourcent(b1.tauxCredit.immobilier.min)}</td>
                  <td className={`px-4 py-3 text-center ${immoMinW.c2}`}>{formatPourcent(b2.tauxCredit.immobilier.min)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Immobilier (max)</td>
                  <td className="px-4 py-3 text-center">{formatPourcent(b1.tauxCredit.immobilier.max)}</td>
                  <td className="px-4 py-3 text-center">{formatPourcent(b2.tauxCredit.immobilier.max)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Consommation (min)</td>
                  <td className={`px-4 py-3 text-center ${consoMinW.c1}`}>{formatPourcent(b1.tauxCredit.conso.min)}</td>
                  <td className={`px-4 py-3 text-center ${consoMinW.c2}`}>{formatPourcent(b2.tauxCredit.conso.min)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Auto / Leasing (min)</td>
                  <td className={`px-4 py-3 text-center ${autoMinW.c1}`}>{formatPourcent(b1.tauxCredit.auto.min)}</td>
                  <td className={`px-4 py-3 text-center ${autoMinW.c2}`}>{formatPourcent(b2.tauxCredit.auto.min)}</td>
                </tr>
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3 font-bold" colSpan={3}>Cartes et frais</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Carte classique</td>
                  <td className={`px-4 py-3 text-center ${carteW.c1}`}>{carteMinB1 === 0 ? 'Gratuite' : `${formatDH(carteMinB1)}/an`}</td>
                  <td className={`px-4 py-3 text-center ${carteW.c2}`}>{carteMinB2 === 0 ? 'Gratuite' : `${formatDH(carteMinB2)}/an`}</td>
                </tr>
                {b1.cartes.length > 0 && b2.cartes.length > 0 && (
                  <tr>
                    <td className="px-4 py-3 font-medium">Carte Gold</td>
                    <td className="px-4 py-3 text-center">
                      {b1.cartes.find((c) => c.type === 'gold') ? formatDH(b1.cartes.find((c) => c.type === 'gold')!.cotisation) + '/an' : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {b2.cartes.find((c) => c.type === 'gold') ? formatDH(b2.cartes.find((c) => c.type === 'gold')!.cotisation) + '/an' : 'N/A'}
                    </td>
                  </tr>
                )}
                <tr className="bg-blue-50/50">
                  <td className="px-4 py-3 font-bold" colSpan={3}>Services digitaux</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Site web</td>
                  <td className="px-4 py-3 text-center text-xs break-all">{b1.site}</td>
                  <td className="px-4 py-3 text-center text-xs break-all">{b2.site}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Editorial analysis */}
        <div className="prose max-w-none mb-8">
          <h2>Analyse detaillee : {b1.nomCourt} vs {b2.nomCourt}</h2>

          <h3>{b1.nom}</h3>
          <p>{b1.description}</p>
          <p>
            <strong>Points forts :</strong> {b1.avantages.slice(0, 3).join(', ')}.
          </p>
          <p>
            <strong>Points faibles :</strong> {b1.inconvenients.slice(0, 2).join(', ')}.
          </p>

          <h3>{b2.nom}</h3>
          <p>{b2.description}</p>
          <p>
            <strong>Points forts :</strong> {b2.avantages.slice(0, 3).join(', ')}.
          </p>
          <p>
            <strong>Points faibles :</strong> {b2.inconvenients.slice(0, 2).join(', ')}.
          </p>

          <h3>Quel choix pour quel profil ?</h3>
          <p>
            Si vous privilegiez {b1.agences > b2.agences ? "un vaste reseau d'agences physiques" : "des tarifs competitifs et l'innovation digitale"},
            {b1.nomCourt} sera votre meilleur choix avec ses {b1.agences.toLocaleString('fr-FR')} agences et sa note de {b1.note}/10.
            En revanche, si {b2.avantages[0].toLowerCase()} est votre priorite, tournez-vous vers {b2.nomCourt} qui obtient {b2.note}/10 dans notre classement.
          </p>
          <p>
            Pour le credit immobilier, les deux banques sont proches avec des taux de depart respectifs
            de {formatPourcent(b1.tauxCredit.immobilier.min)} et {formatPourcent(b2.tauxCredit.immobilier.min)}.
            Utilisez notre <a href="/simulation-credit-immobilier/">simulateur de credit immobilier</a> pour calculer
            la difference exacte sur votre projet. Un ecart meme minime sur 20 ans peut representer des dizaines de
            milliers de dirhams d&apos;economie.
          </p>
          <p>
            En ce qui concerne les frais bancaires, {carteMinB1 <= carteMinB2 ? b1.nomCourt : b2.nomCourt} prend
            l&apos;avantage avec une carte classique a {formatDH(Math.min(carteMinB1, carteMinB2))}/an.
            N&apos;oubliez pas que les frais bancaires ne se limitent pas a la cotisation de carte : pensez aussi aux
            frais de tenue de compte, aux commissions sur operations et aux frais de virements internationaux si
            vous en avez besoin.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions frequentes</h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal hover:text-brand transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h2 className="text-lg font-bold text-charcoal mb-4">Articles lies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={`/banques/${parsed.slug1}/`} className="text-sm text-brand hover:underline font-medium">{b1.nom} : avis detaille &rarr;</a>
            <a href={`/banques/${parsed.slug2}/`} className="text-sm text-brand hover:underline font-medium">{b2.nom} : avis detaille &rarr;</a>
            <a href="/comparateur-banques/" className="text-sm text-brand hover:underline font-medium">Comparateur de banques &rarr;</a>
            <a href="/simulation-credit-immobilier/" className="text-sm text-brand hover:underline font-medium">Simulateur credit immobilier &rarr;</a>
            <a href="/guides/meilleure-banque-maroc/" className="text-sm text-brand hover:underline font-medium">Meilleure banque au Maroc 2026 &rarr;</a>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis a jour en 2026
        </p>
      </article>
    </>
  );
}
