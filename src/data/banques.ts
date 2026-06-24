export interface TauxRange {
  min: number;
  max: number;
}

export interface CompteType {
  nom: string;
  type: 'courant' | 'epargne' | 'professionnel' | 'jeune';
  fraisTenue: number; // DH/an
  carteIncluse: boolean;
  description: string;
}

export interface CarteType {
  nom: string;
  type: 'classique' | 'gold' | 'platinum' | 'infinite';
  cotisation: number; // DH/an
  plafondRetrait: number; // DH/jour
  plafondPaiement: number; // DH/mois
  assurance: boolean;
  cashback: boolean;
  international: boolean;
}

export interface Banque {
  id: string;
  nom: string;
  nomCourt: string;
  logo: string;
  type: 'universelle' | 'cooperative' | 'specialisee' | 'postale' | 'centrale';
  fondation: number;
  siege: string;
  agences: number;
  partMarche: number;
  site: string;
  comptes: CompteType[];
  cartes: CarteType[];
  tauxCredit: {
    immobilier: TauxRange;
    conso: TauxRange;
    auto: TauxRange;
  };
  avantages: string[];
  inconvenients: string[];
  note: number;
  description: string;
  histoire: string;
}

export const banques: Banque[] = [
  {
    id: 'attijariwafa-bank',
    nom: 'Attijariwafa Bank',
    nomCourt: 'AWB',
    logo: '/logos/attijariwafa.svg',
    type: 'universelle',
    fondation: 2003,
    siege: 'Casablanca',
    agences: 4800,
    partMarche: 24.4,
    site: 'https://www.attijariwafabank.com',
    comptes: [
      { nom: 'Compte Hissab Bikhir', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant gratuit avec carte classique incluse' },
      { nom: 'Compte Bladi', type: 'courant', fraisTenue: 0, carteIncluse: true, description: "Compte pour les Marocains résidents à l'étranger" },
      { nom: 'Epargne Wakf', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Épargne rémunérée à taux compétitif" },
      { nom: 'Compte Pro', type: 'professionnel', fraisTenue: 300, carteIncluse: true, description: 'Compte pour professionnels et TPE' },
      { nom: 'Compte Jeunes Chabab', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Compte gratuit pour les 18-25 ans' },
    ],
    cartes: [
      { nom: 'Visa Classique', type: 'classique', cotisation: 80, plafondRetrait: 5000, plafondPaiement: 20000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Gold', type: 'gold', cotisation: 350, plafondRetrait: 10000, plafondPaiement: 50000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 1000, plafondRetrait: 20000, plafondPaiement: 100000, assurance: true, cashback: true, international: true },
      { nom: 'Visa Infinite', type: 'infinite', cotisation: 3000, plafondRetrait: 50000, plafondPaiement: 300000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.5, max: 5.8 },
      conso: { min: 7.0, max: 10.5 },
      auto: { min: 5.5, max: 7.5 },
    },
    avantages: [
      'Réseau le plus étendu au Maroc et en Afrique',
      'Application mobile très complète (Attijari Mobile)',
      'Large gamme de produits et services',
      'Présence internationale (25 pays)',
      'Taux immobilier compétitif pour les bons profils',
    ],
    inconvenients: [
      'Frais de tenue de compte sur certains packs',
      'Service client parfois lent en agence',
      'Taux de crédit conso relativement élevé',
    ],
    note: 8.5,
    description: "Attijariwafa Bank est le premier groupe bancaire du Maroc et d'Afrique du Nord. Avec plus de 24% de part de marché, c'est la banque de référence pour les particuliers, les professionnels et les entreprises. Son réseau de 4 800 agences couvre tout le Maroc et s'étend à 25 pays africains et européens.",
    histoire: "Née de la fusion de la Banque Commerciale du Maroc (BCM) et de Wafabank en 2003, Attijariwafa Bank est devenue rapidement le leader incontestable du secteur bancaire marocain. Sous la présidence de Mohamed El Kettani, la banque a mené une expansion africaine ambitieuse. Le groupe est détenu majoritairement par le holding royal Al Mada.",
  },
  {
    id: 'banque-populaire',
    nom: 'Banque Centrale Populaire (BCP)',
    nomCourt: 'BP',
    logo: '/logos/banque-populaire.svg',
    type: 'cooperative',
    fondation: 1961,
    siege: 'Casablanca',
    agences: 4600,
    partMarche: 22.0,
    site: 'https://www.gbp.ma',
    comptes: [
      { nom: 'Compte Chaabi', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant de base avec carte incluse' },
      { nom: 'Compte MRE', type: 'courant', fraisTenue: 0, carteIncluse: true, description: "Compte dédié aux Marocains Résidents à l'Étranger" },
      { nom: 'Épargne Al Istithmar', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Livret d'épargne rémunéré" },
      { nom: 'Compte Jeunes Al Mostatakbal', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Offre jeunes 18-30 ans gratuite' },
      { nom: 'Compte Pro Intelak', type: 'professionnel', fraisTenue: 200, carteIncluse: true, description: 'Compte professionnel avec avantages' },
    ],
    cartes: [
      { nom: 'Chaabi Classique', type: 'classique', cotisation: 60, plafondRetrait: 5000, plafondPaiement: 15000, assurance: false, cashback: false, international: false },
      { nom: 'Chaabi Gold', type: 'gold', cotisation: 300, plafondRetrait: 10000, plafondPaiement: 40000, assurance: true, cashback: false, international: true },
      { nom: 'Chaabi Platinum', type: 'platinum', cotisation: 800, plafondRetrait: 20000, plafondPaiement: 80000, assurance: true, cashback: false, international: true },
      { nom: 'Chaabi Infinite', type: 'infinite', cotisation: 2500, plafondRetrait: 40000, plafondPaiement: 250000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.5, max: 6.0 },
      conso: { min: 7.5, max: 11.0 },
      auto: { min: 5.5, max: 7.5 },
    },
    avantages: [
      'Modèle coopératif (Banques Populaires Régionales)',
      'Très bon réseau pour les MRE',
      'Tarifs compétitifs sur les comptes de base',
      'Forte présence en zone rurale',
      'Offre jeunes attractive',
    ],
    inconvenients: [
      'Application mobile moins moderne que la concurrence',
      'Procédures parfois lourdes',
      'Taux de crédit consommation élevé',
    ],
    note: 8.0,
    description: "La Banque Centrale Populaire (BCP) est la deuxième banque du Maroc par les actifs. Son modèle coopératif unique repose sur un réseau de Banques Populaires Régionales (BPR). Elle est particulièrement forte auprès des MRE (Marocains Résidents à l'Étranger) et en zone rurale.",
    histoire: "Le Groupe Banque Populaire a été fondé en 1961. Son modèle coopératif est unique dans le paysage bancaire marocain : les Banques Populaires Régionales sont détenues par leurs clients sociétaires. La BCP, organe central du groupe, est cotée à la Bourse de Casablanca.",
  },
  {
    id: 'bmce-bank-of-africa',
    nom: 'BMCE Bank of Africa (BOA)',
    nomCourt: 'BOA',
    logo: '/logos/boa.svg',
    type: 'universelle',
    fondation: 1959,
    siege: 'Casablanca',
    agences: 2100,
    partMarche: 14.5,
    site: 'https://www.bankofafrica.ma',
    comptes: [
      { nom: 'Compte Essentiel', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant avec carte classique incluse' },
      { nom: 'Compte Digital', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte 100% en ligne avec gestion digitale' },
      { nom: 'Épargne Avenir', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Plan d'épargne avec rendement progressif" },
      { nom: 'Compte Pro Africa', type: 'professionnel', fraisTenue: 250, carteIncluse: true, description: 'Solution professionnelle avec focus Afrique' },
    ],
    cartes: [
      { nom: 'Visa Classic', type: 'classique', cotisation: 90, plafondRetrait: 5000, plafondPaiement: 20000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Gold', type: 'gold', cotisation: 400, plafondRetrait: 12000, plafondPaiement: 50000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 1200, plafondRetrait: 25000, plafondPaiement: 120000, assurance: true, cashback: true, international: true },
      { nom: 'Visa Infinite', type: 'infinite', cotisation: 3500, plafondRetrait: 50000, plafondPaiement: 350000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.6, max: 6.0 },
      conso: { min: 7.5, max: 11.0 },
      auto: { min: 5.5, max: 7.5 },
    },
    avantages: [
      'Forte dimension panafricaine (présence dans 30+ pays)',
      'Banque en ligne performante',
      'Bonne offre pour les entreprises à vocation africaine',
      'Innovation digitale constante',
      'Engagement RSE et développement durable',
    ],
    inconvenients: [
      'Réseau d\'agences moins dense que AWB ou BP',
      'Tarifs cartes premium élevés',
      'Moins compétitive sur le crédit à la consommation',
    ],
    note: 7.8,
    description: "BMCE Bank of Africa (BOA) est la troisième banque du Maroc. Rebaptisée Bank of Africa, elle se distingue par sa dimension panafricaine avec une présence dans plus de 30 pays africains. C'est la banque de référence pour les opérations internationales en Afrique.",
    histoire: "Fondée en 1959, la Banque Marocaine du Commerce Extérieur a été transformée par Othman Benjelloun en un groupe bancaire panafricain majeur. L'acquisition de Bank of Africa en 2010 a donné au groupe une empreinte continentale unique. La banque est cotée à la Bourse de Casablanca.",
  },
  {
    id: 'credit-agricole-maroc',
    nom: 'Crédit Agricole du Maroc (CAM)',
    nomCourt: 'CAM',
    logo: '/logos/cam.svg',
    type: 'specialisee',
    fondation: 1961,
    siege: 'Rabat',
    agences: 1500,
    partMarche: 8.5,
    site: 'https://www.creditagricole.ma',
    comptes: [
      { nom: 'Compte Al Filahi', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte adapté au monde agricole' },
      { nom: 'Compte Citadin', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant pour les particuliers urbains' },
      { nom: 'Épargne Verte', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Épargne responsable liée au développement durable" },
      { nom: 'Compte Pro Agricole', type: 'professionnel', fraisTenue: 150, carteIncluse: true, description: 'Compte professionnel pour agriculteurs et PME rurales' },
    ],
    cartes: [
      { nom: 'Carte Classique', type: 'classique', cotisation: 50, plafondRetrait: 4000, plafondPaiement: 15000, assurance: false, cashback: false, international: false },
      { nom: 'Carte Gold', type: 'gold', cotisation: 280, plafondRetrait: 8000, plafondPaiement: 35000, assurance: true, cashback: false, international: true },
      { nom: 'Carte Platinum', type: 'platinum', cotisation: 700, plafondRetrait: 15000, plafondPaiement: 70000, assurance: true, cashback: false, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.7, max: 6.2 },
      conso: { min: 8.0, max: 11.5 },
      auto: { min: 6.0, max: 8.0 },
    },
    avantages: [
      'Spécialiste du financement agricole',
      'Tarifs bancaires parmi les plus bas',
      'Bonne couverture des zones rurales',
      'Produits adaptés au monde agricole',
      'Crédits saisonniers pour les agriculteurs',
    ],
    inconvenients: [
      'Offre digitale en retard',
      'Gamme de cartes limitée',
      'Taux de crédit immobilier légèrement plus élevé',
      'Réseau d\'agences concentré en zone rurale',
    ],
    note: 6.8,
    description: "Le Crédit Agricole du Maroc (CAM) est la banque historique du secteur agricole marocain. Détenue par l'État, elle joue un rôle clé dans le financement du Plan Maroc Vert et du monde rural. Elle s'est diversifiée vers la banque universelle tout en gardant son ADN agricole.",
    histoire: "Créé en 1961 sous le nom de Caisse Nationale de Crédit Agricole (CNCA), le CAM a été transformé en société anonyme en 2003. Banque publique, elle reste le pilier du financement agricole au Maroc et a accompagné la modernisation du secteur via le Plan Maroc Vert lancé en 2008.",
  },
  {
    id: 'cih-bank',
    nom: 'CIH Bank',
    nomCourt: 'CIH',
    logo: '/logos/cih.svg',
    type: 'universelle',
    fondation: 1920,
    siege: 'Casablanca',
    agences: 350,
    partMarche: 5.5,
    site: 'https://www.cihbank.ma',
    comptes: [
      { nom: 'Compte Code 30', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte 100% gratuit pour les moins de 30 ans' },
      { nom: 'Compte Essentiel', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant sans frais de tenue' },
      { nom: 'Épargne Immo', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Épargne logement avec avantages fiscaux" },
      { nom: 'Compte Pro Digital', type: 'professionnel', fraisTenue: 0, carteIncluse: true, description: 'Compte professionnel 100% en ligne' },
      { nom: 'Compte Jeunes Code 25', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: "Offre étudiants et jeunes actifs complètement gratuite" },
    ],
    cartes: [
      { nom: 'Visa Classique', type: 'classique', cotisation: 0, plafondRetrait: 5000, plafondPaiement: 20000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Gold', type: 'gold', cotisation: 250, plafondRetrait: 10000, plafondPaiement: 50000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 600, plafondRetrait: 20000, plafondPaiement: 100000, assurance: true, cashback: true, international: true },
      { nom: 'Visa Infinite', type: 'infinite', cotisation: 2000, plafondRetrait: 40000, plafondPaiement: 250000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.5, max: 5.5 },
      conso: { min: 7.0, max: 10.0 },
      auto: { min: 5.0, max: 7.0 },
    },
    avantages: [
      'Carte classique gratuite',
      'Meilleure application mobile du marché',
      'Spécialiste du crédit immobilier (taux très compétitifs)',
      'Offre jeunes Code 30 imbattable',
      'Innovation digitale (paiement mobile, e-banking)',
      'Pas de frais de tenue de compte',
    ],
    inconvenients: [
      'Réseau d\'agences limité (350)',
      'Moins adaptée aux entreprises',
      'Plafonds de cartes classiques parfois limités',
    ],
    note: 8.8,
    description: "CIH Bank, anciennement Crédit Immobilier et Hôtelier, est devenue la banque digitale de référence au Maroc. Connue pour ses taux immobiliers compétitifs et sa carte classique gratuite, elle séduit particulièrement les jeunes et les primo-accédants.",
    histoire: "Fondée en 1920, la CIH était à l'origine spécialisée dans le crédit immobilier et le financement hôtelier. Après une période difficile dans les années 2000, la banque a été rachetée par le groupe CDG (Caisse de Dépôt et de Gestion) et a opéré une transformation digitale réussie pour devenir une banque universelle moderne.",
  },
  {
    id: 'societe-generale-maroc',
    nom: 'Société Générale Maroc',
    nomCourt: 'SG',
    logo: '/logos/sg-maroc.svg',
    type: 'universelle',
    fondation: 1913,
    siege: 'Casablanca',
    agences: 400,
    partMarche: 7.0,
    site: 'https://www.sgmaroc.com',
    comptes: [
      { nom: 'Compte So’Start', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte d\'entrée de gamme avec carte incluse' },
      { nom: 'Compte So’Premium', type: 'courant', fraisTenue: 360, carteIncluse: true, description: 'Pack haut de gamme avec carte Gold et assurances' },
      { nom: 'Épargne So’Horizon', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Plan d'épargne programmée" },
      { nom: 'Compte Pro So’Business', type: 'professionnel', fraisTenue: 300, carteIncluse: true, description: 'Solution complète pour les professionnels' },
      { nom: 'Compte Jeunes So’Young', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Offre gratuite pour les 18-25 ans' },
    ],
    cartes: [
      { nom: 'Visa Classique', type: 'classique', cotisation: 100, plafondRetrait: 5000, plafondPaiement: 20000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Gold', type: 'gold', cotisation: 450, plafondRetrait: 12000, plafondPaiement: 60000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 1200, plafondRetrait: 25000, plafondPaiement: 120000, assurance: true, cashback: true, international: true },
      { nom: 'Visa Infinite', type: 'infinite', cotisation: 3500, plafondRetrait: 50000, plafondPaiement: 300000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.6, max: 6.0 },
      conso: { min: 7.5, max: 11.0 },
      auto: { min: 5.5, max: 7.5 },
    },
    avantages: [
      'Expertise du groupe Société Générale (standards internationaux)',
      'Banque en ligne Sogecash performante',
      'Bonne offre pour les entreprises et le trade finance',
      'Réseau international grâce au groupe SG',
      'Service client de qualité',
    ],
    inconvenients: [
      'Tarifs parmi les plus élevés du marché',
      'Réseau d\'agences limité',
      'Offre de base moins compétitive',
      'Frais de tenue de compte sur packs premium',
    ],
    note: 7.5,
    description: "Société Générale Maroc est la filiale marocaine du groupe français Société Générale. Elle se positionne comme une banque universelle premium avec une forte expertise en banque d'entreprise et en opérations internationales.",
    histoire: "Présente au Maroc depuis 1913, la Société Générale est l'une des plus anciennes banques du pays. Elle a renforcé sa présence en absorbant l'ex-Eqdom (crédit conso) et en développant une offre digitale complète.",
  },
  {
    id: 'bmci',
    nom: 'BMCI (BNP Paribas)',
    nomCourt: 'BMCI',
    logo: '/logos/bmci.svg',
    type: 'universelle',
    fondation: 1964,
    siege: 'Casablanca',
    agences: 340,
    partMarche: 5.0,
    site: 'https://www.bmci.ma',
    comptes: [
      { nom: 'Compte Essentiel', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant classique' },
      { nom: 'Compte Confort', type: 'courant', fraisTenue: 300, carteIncluse: true, description: 'Pack avec carte Gold et assurances' },
      { nom: 'Épargne Plus', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Livret d'épargne avec rémunération attractive" },
      { nom: 'Compte Pro Entreprendre', type: 'professionnel', fraisTenue: 280, carteIncluse: true, description: 'Solution pour les professionnels libéraux et TPE' },
      { nom: 'Compte Campus', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Offre étudiants gratuite' },
    ],
    cartes: [
      { nom: 'Visa Classic', type: 'classique', cotisation: 90, plafondRetrait: 5000, plafondPaiement: 18000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Premier', type: 'gold', cotisation: 500, plafondRetrait: 15000, plafondPaiement: 60000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 1500, plafondRetrait: 30000, plafondPaiement: 150000, assurance: true, cashback: true, international: true },
      { nom: 'World Elite', type: 'infinite', cotisation: 5000, plafondRetrait: 60000, plafondPaiement: 400000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.8, max: 6.3 },
      conso: { min: 7.5, max: 11.5 },
      auto: { min: 5.5, max: 7.5 },
    },
    avantages: [
      'Standards BNP Paribas (groupe international de référence)',
      'Carte World Elite la plus premium du marché',
      'Expertise en gestion de patrimoine',
      'Offre entreprise et corporate de qualité',
      'Partenariats internationaux via BNP Paribas',
    ],
    inconvenients: [
      'Tarifs les plus élevés du marché',
      'Réseau d\'agences très limité',
      'Taux de crédit immobilier au-dessus de la moyenne',
      'Moins adaptée aux petits budgets',
    ],
    note: 7.2,
    description: "La BMCI (Banque Marocaine pour le Commerce et l'Industrie) est la filiale marocaine de BNP Paribas. Elle se positionne sur le segment haut de gamme avec une offre premium en gestion de patrimoine et en banque d'entreprise.",
    histoire: "Fondée en 1964, la BMCI est devenue filiale de BNP Paribas suite à la fusion BNP-Paribas en 2000. Elle bénéficie de l'expertise du premier groupe bancaire européen et se concentre sur une clientèle à haut revenu et les grandes entreprises.",
  },
  {
    id: 'cfg-bank',
    nom: 'CFG Bank',
    nomCourt: 'CFG',
    logo: '/logos/cfg.svg',
    type: 'universelle',
    fondation: 2014,
    siege: 'Casablanca',
    agences: 40,
    partMarche: 1.2,
    site: 'https://www.cfgbank.com',
    comptes: [
      { nom: 'Compte CFG', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant gratuit avec carte incluse' },
      { nom: 'Épargne CFG', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Épargne avec rendement compétitif" },
      { nom: 'Compte Pro CFG Business', type: 'professionnel', fraisTenue: 200, carteIncluse: true, description: 'Compte professionnel simple' },
    ],
    cartes: [
      { nom: 'Visa Classic', type: 'classique', cotisation: 0, plafondRetrait: 5000, plafondPaiement: 20000, assurance: false, cashback: false, international: false },
      { nom: 'Visa Gold', type: 'gold', cotisation: 200, plafondRetrait: 10000, plafondPaiement: 50000, assurance: true, cashback: false, international: true },
      { nom: 'Visa Platinum', type: 'platinum', cotisation: 800, plafondRetrait: 20000, plafondPaiement: 100000, assurance: true, cashback: true, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 4.5, max: 5.5 },
      conso: { min: 7.0, max: 10.0 },
      auto: { min: 5.0, max: 7.0 },
    },
    avantages: [
      'Banque nouvelle génération (agences modernes)',
      'Carte classique gratuite',
      'Taux de crédit très compétitifs',
      'Service client personnalisé (petit réseau = proximité)',
      'Expertise en investissement et bourse',
    ],
    inconvenients: [
      'Réseau d\'agences très limité (40)',
      'Faible notoriété',
      'Gamme de produits plus restreinte',
      'Pas d\'offre MRE développée',
    ],
    note: 7.5,
    description: "CFG Bank est la plus jeune banque universelle du Maroc. Issue du groupe CFG (Casablanca Finance Group), spécialiste de la banque d'investissement, elle a obtenu son agrément de banque universelle en 2014. Elle se distingue par des tarifs agressifs et une approche digitale.",
    histoire: "CFG Group a été fondé en 1992 comme société de bourse. Après avoir obtenu l'agrément bancaire en 2014, CFG Bank a rapidement grandi en proposant des tarifs disruptifs et une expérience client différenciante. La banque vise une clientèle urbaine, jeune et connectée.",
  },
  {
    id: 'bank-al-maghrib',
    nom: 'Bank Al-Maghrib',
    nomCourt: 'BAM',
    logo: '/logos/bam.svg',
    type: 'centrale',
    fondation: 1959,
    siege: 'Rabat',
    agences: 0,
    partMarche: 0,
    site: 'https://www.bkam.ma',
    comptes: [],
    cartes: [],
    tauxCredit: {
      immobilier: { min: 0, max: 0 },
      conso: { min: 0, max: 0 },
      auto: { min: 0, max: 0 },
    },
    avantages: [
      'Régulateur du secteur bancaire marocain',
      'Garant de la stabilité monétaire',
      'Publie les statistiques de référence',
      'Fixe le taux directeur',
    ],
    inconvenients: [
      'N\'est pas une banque de détail',
      'Pas de produits pour les particuliers',
    ],
    note: 0,
    description: "Bank Al-Maghrib (BAM) est la banque centrale du Maroc. Elle n'est pas une banque de détail et ne propose pas de produits aux particuliers. Son rôle est de réguler le système bancaire, de fixer la politique monétaire et de superviser les établissements de crédit.",
    histoire: "Créée en 1959 (succédant à la Banque d'État du Maroc fondée en 1906), Bank Al-Maghrib est dirigée par Abdellatif Jouahri depuis 2003. Elle fixe le taux directeur (actuellement 2,75%), réglemente le secteur bancaire et fixe notamment le taux d'endettement maximum à 45%.",
  },
  {
    id: 'al-barid-bank',
    nom: 'Al Barid Bank',
    nomCourt: 'ABB',
    logo: '/logos/al-barid.svg',
    type: 'postale',
    fondation: 2010,
    siege: 'Rabat',
    agences: 1900,
    partMarche: 3.5,
    site: 'https://www.albaridbankgroup.com',
    comptes: [
      { nom: 'Compte Barid', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant de base entièrement gratuit' },
      { nom: 'Compte Épargne Tawfir', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Épargne accessible dès 100 DH" },
      { nom: 'Compte Jeunes Chabab Barid', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Compte gratuit pour les jeunes' },
    ],
    cartes: [
      { nom: 'Carte e-Barid', type: 'classique', cotisation: 0, plafondRetrait: 3000, plafondPaiement: 10000, assurance: false, cashback: false, international: false },
      { nom: 'Carte Classique', type: 'classique', cotisation: 40, plafondRetrait: 5000, plafondPaiement: 15000, assurance: false, cashback: false, international: false },
      { nom: 'Carte Gold', type: 'gold', cotisation: 200, plafondRetrait: 8000, plafondPaiement: 30000, assurance: true, cashback: false, international: true },
    ],
    tauxCredit: {
      immobilier: { min: 5.0, max: 6.5 },
      conso: { min: 8.0, max: 12.0 },
      auto: { min: 6.0, max: 8.0 },
    },
    avantages: [
      'La banque la plus accessible du Maroc (couverture rurale maximale)',
      'Tarifs les plus bas du marché',
      'Carte gratuite',
      'Idéale pour l\'inclusion financière',
      'Réseau Barid Al-Maghrib (points poste)',
      'Paiement mobile Barid Pay',
    ],
    inconvenients: [
      'Gamme de produits limitée',
      'Pas de cartes premium (Platinum/Infinite)',
      'Taux de crédit les plus élevés',
      'Service digital basique',
      'Pas adaptée pour les gros patrimoines',
    ],
    note: 6.5,
    description: "Al Barid Bank est la banque postale du Maroc, filiale de Barid Al-Maghrib (la poste marocaine). C'est l'acteur clé de l'inclusion financière au Maroc avec 8 millions de clients. Elle offre les tarifs les plus bas du marché et une couverture géographique inégalée grâce au réseau postal.",
    histoire: "Créée en 2010 à partir des services financiers de Barid Al-Maghrib, Al Barid Bank a obtenu l'agrément bancaire pour répondre aux besoins de bancarisation des populations non desservies. Avec 8 millions de clients, c'est la banque la plus inclusive du Maroc, présente dans les zones les plus reculées via le réseau postal.",
  },
];

export function getBanqueById(id: string): Banque | undefined {
  return banques.find((b) => b.id === id);
}

export function getBanquesRetail(): Banque[] {
  return banques.filter((b) => b.type !== 'centrale');
}

export function getBanquesSorted(critere: 'note' | 'partMarche' | 'agences'): Banque[] {
  const retail = getBanquesRetail();
  return [...retail].sort((a, b) => b[critere] - a[critere]);
}
