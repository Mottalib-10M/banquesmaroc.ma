import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contactez-nous - Banques Maroc | Questions et Aide',
  description: 'Contactez l\'équipe de Banques Maroc pour vos questions sur les crédits, les cartes bancaires et les comparatifs bancaires. Réponse sous 48h par email.',
  alternates: { canonical: `${SITE.url}/contact/` },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Contact', url: `${SITE.url}/contact/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Contact</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Contactez-nous</h1>

        <div className="prose max-w-none">
          <p>
            Vous avez une question sur nos comparateurs, nos simulateurs de crédit ou les informations bancaires publiées sur <strong>Banques Maroc</strong> ? Nous sommes à votre écoute. Votre retour nous aide à maintenir un comparateur fiable et objectif pour les consommateurs marocains.
          </p>

          <h2>Nous écrire par email</h2>

          <p>Le moyen le plus efficace de nous contacter est par email :</p>

          <p className="text-lg">
            <strong><a href={`mailto:${SITE.contact}`}>{SITE.contact}</a></strong>
          </p>

          <p>
            Nous nous efforçons de répondre à tous les messages dans un délai de <strong>48 heures ouvrables</strong>. Les demandes reçues le week-end ou les jours fériés seront traitées dès le jour ouvrable suivant.
          </p>

          <h2>Quand nous contacter ?</h2>

          <ul>
            <li><strong>Signalement d&apos;erreur :</strong> si vous constatez une erreur dans un taux de crédit, des frais bancaires ou une information sur une banque, merci de nous le signaler avec la page concernée et la source de référence.</li>
            <li><strong>Suggestion d&apos;amélioration :</strong> si vous souhaitez voir une nouvelle banque dans notre comparateur, un nouveau simulateur ou un guide sur un sujet particulier.</li>
            <li><strong>Question sur un simulateur :</strong> si vous ne comprenez pas un résultat de simulation de crédit ou si vous avez besoin de clarification sur notre méthodologie de notation.</li>
            <li><strong>Mise à jour tarifaire :</strong> si une banque a modifié ses tarifs ou ses conditions et que notre site ne reflète pas encore ces changements.</li>
          </ul>

          <h2>Questions fréquentes</h2>

          <h3>Êtes-vous affiliés à une banque ?</h3>
          <p>
            Non. Banques Maroc est un comparateur totalement indépendant. Nous ne sommes détenus par aucune banque et nos comparaisons sont objectives. Notre méthodologie de notation est transparente et publiée sur notre <a href="/a-propos/">page À propos</a>.
          </p>

          <h3>Mes données sont-elles collectées lors d&apos;une simulation ?</h3>
          <p>
            Non. Tous nos simulateurs fonctionnent entièrement dans votre navigateur. Aucune donnée financière saisie n&apos;est transmise à nos serveurs. Consultez notre <a href="/confidentialite/">politique de confidentialité</a> pour plus de détails.
          </p>

          <h3>Pouvez-vous m&apos;aider à obtenir un crédit ?</h3>
          <p>
            Banques Maroc est un site informatif et comparatif. Nous ne sommes pas un courtier en crédit et ne traitons aucune demande de financement. Pour obtenir un crédit, adressez-vous directement à la banque de votre choix ou consultez un courtier agréé par Bank Al-Maghrib.
          </p>

          <h2>Avertissement</h2>

          <p>
            Banques Maroc ne fournit pas de conseils financiers personnalisés. Les taux, tarifs et conditions affichés sont donnés à titre informatif et peuvent varier selon votre profil et les conditions du marché. Avant de souscrire un produit bancaire, consultez directement l&apos;établissement bancaire concerné pour obtenir les conditions exactes et actualisées.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-sm text-gray-600"><strong>Responsable éditorial :</strong> {SITE.author}, {SITE.authorCredentials}</p>
          <p className="text-sm text-gray-600 mt-1"><strong>Email :</strong> <a href={`mailto:${SITE.contact}`} className="text-brand hover:underline">{SITE.contact}</a></p>
        </div>
      </div>
    </>
  );
}
