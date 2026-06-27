import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema, buildWebApplicationSchema, buildFAQSchema } from '@/lib/seo';
import CapaciteEmpruntComponent from '@/components/simulateurs/CapaciteEmprunt';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: "Capacité d'emprunt Maroc 2026 - Calculez votre budget",
  description: "Calculez votre capacité d'emprunt au Maroc selon vos revenus. Taux d'endettement maximum de 45% fixé par Bank Al-Maghrib. Simulateur gratuit et rapide.",
  alternates: { canonical: `${SITE.url}/capacite-emprunt/` },
};

const faqCapacite = [
  {
    question: "Comment est calculée la capacité d'emprunt au Maroc ?",
    answer: "La capacité d'emprunt est calculée en fonction de vos revenus nets mensuels, de vos charges existantes et du taux d'endettement maximum de 45% imposé par Bank Al-Maghrib. La formule est : (Revenus nets × 45%) - charges mensuelles existantes = mensualité maximum disponible.",
  },
  {
    question: "Quel est le taux d'endettement maximum au Maroc ?",
    answer: "Bank Al-Maghrib, la banque centrale du Maroc, a fixé le taux d'endettement maximum à 45% des revenus nets mensuels. Ce taux inclut l'ensemble des mensualités de crédit en cours et du nouveau crédit demandé (immobilier, consommation, leasing).",
  },
  {
    question: "Les revenus locatifs sont-ils pris en compte dans le calcul ?",
    answer: "Oui, les revenus locatifs sont pris en compte par les banques marocaines, mais généralement avec une décote de 30% à 50%. Par exemple, un revenu locatif de 5 000 DH/mois sera comptabilisé entre 2 500 et 3 500 DH dans le calcul de la capacité d'emprunt.",
  },
  {
    question: "Peut-on emprunter au-delà de 45% d'endettement ?",
    answer: "En principe non, car la réglementation de Bank Al-Maghrib impose ce plafond aux banques. Cependant, pour les très hauts revenus (au-delà de 50 000 DH/mois), certaines banques peuvent accepter un taux d'endettement légèrement supérieur car le reste à vivre demeure confortable.",
  },
  {
    question: "Comment augmenter sa capacité d'emprunt ?",
    answer: "Pour augmenter votre capacité d'emprunt : remboursez vos crédits existants avant de solliciter un nouveau prêt, augmentez la durée du crédit (jusqu'à 25 ans pour l'immobilier), négociez un taux plus bas, ajoutez un co-emprunteur, ou valorisez tous vos revenus annexes (primes, revenus locatifs).",
  },
];

export default function CapaciteEmpruntPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: "Capacité d'emprunt", url: `${SITE.url}/capacite-emprunt/` },
  ]);
  const appSchema = buildWebApplicationSchema(
    "Calculateur de capacité d'emprunt Maroc",
    "Découvrez combien vous pouvez emprunter au Maroc selon vos revenus",
    `${SITE.url}/capacite-emprunt/`
  );
  const faqSchema = buildFAQSchema(faqCapacite);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Capacité d&apos;emprunt</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Calculez votre capacité d&apos;emprunt au Maroc
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Découvrez combien vous pouvez emprunter en fonction de vos revenus. Le taux d&apos;endettement maximum au Maroc est de 45% (réglementation Bank Al-Maghrib).
        </p>

        <CapaciteEmpruntComponent />

        <div className="mt-12 prose max-w-4xl">
          <h2>Comprendre la capacité d&apos;emprunt au Maroc</h2>
          <p>
            La capacité d&apos;emprunt représente le montant maximum que vous pouvez emprunter auprès d&apos;une banque
            marocaine. Elle dépend principalement de vos revenus, de vos charges existantes et du taux
            d&apos;endettement réglementaire fixé par Bank Al-Maghrib.
          </p>

          <h3>La règle des 45%</h3>
          <p>
            Au Maroc, Bank Al-Maghrib impose aux banques de ne pas accorder de crédit si le taux d&apos;endettement
            de l&apos;emprunteur dépasse 45% de ses revenus nets mensuels. Ce taux inclut l&apos;ensemble des mensualités
            de crédit (immobilier, consommation, leasing). Par exemple, un salarié gagnant 15 000 DH net/mois
            ne pourra pas avoir des mensualités totales supérieures à 6 750 DH.
          </p>

          <h3>Facteurs influant sur la capacité d&apos;emprunt</h3>
          <ul>
            <li><strong>Revenus nets</strong> : salaire + primes régulières + revenus locatifs + autres revenus stables</li>
            <li><strong>Charges existantes</strong> : crédits en cours, pensions alimentaires, loyer (si non propriétaire)</li>
            <li><strong>Taux du crédit</strong> : plus le taux est bas, plus vous pouvez emprunter</li>
            <li><strong>Durée du crédit</strong> : plus la durée est longue, plus la capacité est élevée</li>
            <li><strong>Profil de l&apos;emprunteur</strong> : stabilité professionnelle, ancienneté, secteur d&apos;activité</li>
          </ul>

          <h3>Exemple concret</h3>
          <p>
            Un couple avec un revenu total de 25 000 DH/mois et aucune charge peut emprunter jusqu&apos;à
            environ 1 500 000 DH sur 20 ans à un taux de 4,75%. Leur mensualité sera d&apos;environ 10 000 DH,
            soit 40% de leur revenu, bien en dessous du seuil de 45%.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-charcoal mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqCapacite.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-charcoal hover:text-brand transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>


        {/* Related tools */}
        <RelatedTools currentPath="/capacite-emprunt/" />

        {/* Sources */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-sm font-bold text-charcoal mb-3">Sources</h2>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Bank Al-Maghrib – Directive sur le taux d&apos;endettement maximum de 45% (<a href="https://www.bkam.ma" className="underline hover:text-brand" rel="noopener noreferrer" target="_blank">bkam.ma</a>)</li>
            <li>Association Professionnelle des Banques du Maroc (GPBM) – Conditions d&apos;octroi de crédit</li>
            <li>Circulaire Bank Al-Maghrib relative aux règles prudentielles en matière de crédit aux particuliers</li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials}) &middot; Mis à jour en 2026
        </p>
      </div>
    </>
  );
}
