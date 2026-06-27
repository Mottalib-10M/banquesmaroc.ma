import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { buildBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Notre Méthodologie : Sources et Critères de Comparaison',
  description: 'Méthodologie de Banques Maroc : sources Bank Al-Maghrib, critères de notation des banques, collecte des taux et processus de vérification des données.',
  alternates: { canonical: `${SITE.url}/methodologie/` },
};

export default function MethodologiePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Accueil', url: SITE.url },
    { name: 'Notre Méthodologie', url: `${SITE.url}/methodologie/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-brand">Accueil</a>
          <span className="mx-2">/</span>
          <span className="text-charcoal font-medium">Notre Méthodologie</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">Notre Méthodologie</h1>

        <div className="prose max-w-none">
          <p>
            <strong>Banques Maroc</strong> est un comparateur indépendant qui aide les consommateurs marocains à choisir les meilleurs produits bancaires et financiers. La transparence et la rigueur sont au fondement de notre démarche. Cette page détaille nos sources de données, nos critères de notation, nos méthodes de calcul et notre processus de vérification, afin que vous puissiez évaluer nos comparaisons et recommandations en toute connaissance de cause.
          </p>

          <h2>Sources de données</h2>

          <p>
            Toutes les informations publiées sur Banques Maroc proviennent de sources officielles, de publications des établissements bancaires, et de données réglementaires vérifiables. Nous ne nous appuyons jamais sur des rumeurs, des avis non vérifiés ou des estimations approximatives.
          </p>

          <h3>Bank Al-Maghrib (BAM)</h3>

          <p>
            Bank Al-Maghrib, la banque centrale du Maroc, est notre source principale pour les données macroéconomiques et réglementaires du secteur bancaire. Nous référençons les publications suivantes :
          </p>

          <ul>
            <li><strong>Taux directeur :</strong> Le taux directeur fixé par BAM, qui influence directement les taux de crédit proposés par les banques commerciales, est suivi en temps réel à partir des communiqués officiels du Conseil de BAM.</li>
            <li><strong>Rapports annuels sur la supervision bancaire :</strong> Ces rapports fournissent des données sur la solidité financière des établissements bancaires, les ratios de solvabilité, et la qualité des actifs. Nous les utilisons pour évaluer la santé financière des banques que nous comparons.</li>
            <li><strong>Statistiques monétaires :</strong> Les données sur les taux d&apos;intérêt moyens pratiqués sur les crédits immobiliers, les crédits à la consommation et les dépôts sont extraites des bulletins statistiques mensuels de BAM.</li>
            <li><strong>Circulaires réglementaires :</strong> Les circulaires de BAM encadrant les pratiques bancaires (conditions de facturation, taux d&apos;usure, obligations de transparence) constituent la base juridique de nos analyses.</li>
          </ul>

          <h3>Publications des établissements bancaires</h3>

          <p>
            Pour chaque banque comparée sur notre plateforme, nous collectons les données directement à partir des sources suivantes :
          </p>

          <ul>
            <li><strong>Grilles tarifaires officielles :</strong> Chaque banque marocaine est tenue de publier sa grille tarifaire conformément aux exigences de Bank Al-Maghrib. Nous référençons ces grilles pour les frais de tenue de compte, les cotisations de cartes bancaires, les commissions sur opérations, et les frais de transfert.</li>
            <li><strong>Conditions de crédit :</strong> Les taux de crédit immobilier, de crédit à la consommation et de leasing sont collectés à partir des offres publiées par chaque banque, complétées par les simulations disponibles sur leurs sites web et applications.</li>
            <li><strong>Offres de produits :</strong> Les caractéristiques des comptes courants, comptes d&apos;épargne, cartes bancaires et services digitaux sont documentées à partir des fiches produit officielles de chaque établissement.</li>
          </ul>

          <h3>Groupement Professionnel des Banques du Maroc (GPBM)</h3>

          <p>
            Le GPBM publie des données agrégées sur le secteur bancaire marocain, notamment le nombre d&apos;agences par banque, la couverture géographique du réseau, et les statistiques de moyens de paiement. Ces données alimentent notre critère de notation du réseau d&apos;agences.
          </p>

          <h2>Critères de notation des banques</h2>

          <p>
            Le classement des banques présenté sur Banques Maroc repose sur une grille d&apos;évaluation pondérée couvrant cinq dimensions. Chaque dimension est notée sur 20, et la note globale est la moyenne pondérée de ces cinq scores :
          </p>

          <h3>Compétitivité des taux (30%)</h3>

          <p>
            Ce critère évalue la compétitivité des taux de crédit proposés par chaque banque. Nous comparons les taux effectifs globaux (TEG) sur les crédits immobiliers, les crédits à la consommation et les produits de leasing. Les banques offrant les taux les plus bas reçoivent les notes les plus élevées. Les taux sont vérifiés à partir des grilles tarifaires officielles et des simulateurs en ligne des banques.
          </p>

          <h3>Frais bancaires (20%)</h3>

          <p>
            Ce critère mesure le coût total de détention d&apos;un compte bancaire. Nous évaluons les frais de tenue de compte, les cotisations de cartes bancaires (classique, Gold, Platinum), les commissions sur virements, les frais de retrait déplacé (GAB d&apos;une autre banque), et les frais sur opérations courantes. La note est inversement proportionnelle au coût total : moins les frais sont élevés, meilleure est la note.
          </p>

          <h3>Services digitaux (20%)</h3>

          <p>
            Ce critère évalue la qualité et la complétude de l&apos;offre digitale de chaque banque. Nous analysons la qualité de l&apos;application mobile (note sur les stores, fonctionnalités disponibles), la richesse de la banque en ligne (virements, consultation de solde, gestion de cartes), la disponibilité du paiement mobile, et l&apos;ouverture de compte en ligne. Cette évaluation est mise à jour au moins deux fois par an.
          </p>

          <h3>Réseau d&apos;agences (15%)</h3>

          <p>
            Ce critère prend en compte le nombre d&apos;agences, la couverture géographique (présence dans les grandes villes et les zones rurales), le nombre de guichets automatiques bancaires (GAB), et l&apos;accessibilité physique du réseau. Les données proviennent des rapports du GPBM et des publications des banques.
          </p>

          <h3>Satisfaction client (15%)</h3>

          <p>
            Ce critère intègre les avis clients vérifiés, les enquêtes de satisfaction publiées, et la réactivité du service client. Nous nous appuyons sur les études de satisfaction disponibles publiquement et les notes des applications sur les stores (Google Play et App Store). Les avis sont agrégés et pondérés par leur récence.
          </p>

          <h2>Simulateurs de crédit</h2>

          <p>
            Nos simulateurs de crédit (immobilier, consommation, leasing) implémentent la formule standard d&apos;amortissement constant utilisée par les banques marocaines :
          </p>

          <ul>
            <li><strong>Mensualité :</strong> Calculée selon la formule d&apos;annuité constante : M = C x (t / (1 - (1 + t)^-n)), ou C est le capital emprunté, t le taux mensuel, et n le nombre de mensualités.</li>
            <li><strong>Coût total du crédit :</strong> Somme des mensualités moins le capital emprunté, représentant le coût total des intérêts sur la durée du prêt.</li>
            <li><strong>Tableau d&apos;amortissement :</strong> Généré mois par mois avec la décomposition capital/intérêts de chaque mensualité.</li>
            <li><strong>Taux d&apos;endettement :</strong> Calculé comme le ratio mensualités totales / revenus mensuels nets. La limite conventionnelle de 45% utilisée par les banques marocaines est appliquée comme seuil d&apos;alerte dans nos simulateurs.</li>
          </ul>

          <p>
            Les taux par défaut de nos simulateurs reflètent les taux moyens du marché observés auprès des principales banques marocaines. L&apos;utilisateur peut modifier ces taux pour simuler les conditions spécifiques proposées par sa banque.
          </p>

          <h2>Simulateur de capacité d&apos;emprunt</h2>

          <p>
            Le simulateur de capacité d&apos;emprunt calcule le montant maximum empruntable en fonction des revenus de l&apos;utilisateur, de ses charges existantes, et du taux d&apos;endettement maximum autorisé. La formule inverse la relation d&apos;annuité pour déterminer le capital maximal compatible avec une mensualité donnée. Les résultats sont fournis à titre indicatif et ne constituent pas une offre de financement.
          </p>

          <h2>Processus de vérification</h2>

          <p>
            Nous maintenons la fiabilité de nos données à travers un processus de vérification structuré :
          </p>

          <ul>
            <li><strong>Vérification à la source :</strong> Chaque donnée publiée est vérifiée contre la source officielle (grille tarifaire de la banque, publication de BAM, rapport du GPBM) avant publication.</li>
            <li><strong>Recoupement :</strong> Les taux de crédit et les frais bancaires sont recoupés entre les grilles tarifaires officielles, les simulateurs des banques et les données de BAM pour s&apos;assurer de leur cohérence.</li>
            <li><strong>Mises à jour trimestrielles :</strong> Toutes les données sont revues trimestriellement. Les taux de crédit, particulièrement volatils, font l&apos;objet d&apos;un suivi mensuel.</li>
            <li><strong>Alertes réglementaires :</strong> Les décisions de BAM (modification du taux directeur, nouvelles circulaires) déclenchent une revue immédiate des données concernées.</li>
            <li><strong>Retour utilisateurs :</strong> Nous encourageons les utilisateurs à signaler toute incohérence. Chaque signalement est vérifié et, si confirmé, corrigé sous 48 heures.</li>
          </ul>

          <h2>Limites et avertissements</h2>

          <p>
            Malgré notre engagement envers la précision, les limitations suivantes s&apos;appliquent :
          </p>

          <ul>
            <li><strong>Taux indicatifs :</strong> Les taux de crédit publiés sont des taux moyens ou des taux de base. Le taux effectivement proposé à un client dépend de son profil de risque, de son ancienneté, de son apport personnel et des négociations individuelles avec la banque.</li>
            <li><strong>Évolution des tarifs :</strong> Les banques peuvent modifier leurs grilles tarifaires à tout moment. Un délai peut exister entre une modification et sa prise en compte sur notre site.</li>
            <li><strong>Information, pas conseil :</strong> Les informations et simulations présentées ont une vocation strictement informative. Elles ne constituent ni un conseil financier personnalisé, ni une offre de crédit. Consultez votre banque ou un conseiller financier pour obtenir les conditions exactes adaptées à votre situation.</li>
            <li><strong>Notes et classements :</strong> Nos notes reflètent notre évaluation méthodologique basée sur les critères décrits ci-dessus. Elles ne constituent pas un jugement absolu sur la qualité d&apos;une banque, qui dépend aussi de facteurs subjectifs et personnels.</li>
          </ul>

          <h2>Indépendance éditoriale</h2>

          <p>
            <strong>Banques Maroc</strong> est un site totalement indépendant. Nous ne sommes détenus par aucune banque ni aucun groupe financier. Nos comparaisons, notes et classements sont fondés exclusivement sur les critères objectifs décrits ci-dessus. Notre modèle économique repose sur la publicité et l&apos;affiliation, mais ces partenariats commerciaux n&apos;influencent jamais nos données, nos classements ni nos recommandations éditoriales.
          </p>

          <h2>Contact</h2>

          <p>
            Pour toute question relative à notre méthodologie ou pour signaler une erreur :
            <a href={`mailto:${SITE.contact}`}> {SITE.contact}</a>
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
          Par {SITE.author} ({SITE.authorCredentials})
        </p>
      </div>
    </>
  );
}
