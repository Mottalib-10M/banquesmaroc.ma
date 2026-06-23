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
      { nom: 'Compte Bladi', type: 'courant', fraisTenue: 0, carteIncluse: true, description: "Compte pour les Marocains r\u00e9sidents \u00e0 l'\u00e9tranger" },
      { nom: 'Epargne Wakf', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "\u00c9pargne r\u00e9mun\u00e9r\u00e9e \u00e0 taux comp\u00e9titif" },
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
      'R\u00e9seau le plus \u00e9tendu au Maroc et en Afrique',
      'Application mobile tr\u00e8s compl\u00e8te (Attijari Mobile)',
      'Large gamme de produits et services',
      'Pr\u00e9sence internationale (25 pays)',
      'Taux immobilier comp\u00e9titif pour les bons profils',
    ],
    inconvenients: [
      'Frais de tenue de compte sur certains packs',
      'Service client parfois lent en agence',
      'Taux de cr\u00e9dit conso relativement \u00e9lev\u00e9',
    ],
    note: 8.5,
    description: "Attijariwafa Bank est le premier groupe bancaire du Maroc et d'Afrique du Nord. Avec plus de 24% de part de march\u00e9, c'est la banque de r\u00e9f\u00e9rence pour les particuliers, les professionnels et les entreprises. Son r\u00e9seau de 4 800 agences couvre tout le Maroc et s'\u00e9tend \u00e0 25 pays africains et europ\u00e9ens.",
    histoire: "N\u00e9e de la fusion de la Banque Commerciale du Maroc (BCM) et de Wafabank en 2003, Attijariwafa Bank est devenue rapidement le leader incontestable du secteur bancaire marocain. Sous la pr\u00e9sidence de Mohamed El Kettani, la banque a men\u00e9 une expansion africaine ambitieuse. Le groupe est d\u00e9tenu majoritairement par le holding royal Al Mada.",
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
      { nom: 'Compte MRE', type: 'courant', fraisTenue: 0, carteIncluse: true, description: "Compte d\u00e9di\u00e9 aux Marocains Résidents \u00e0 l'\u00c9tranger" },
      { nom: '\u00c9pargne Al Istithmar', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Livret d'\u00e9pargne r\u00e9mun\u00e9r\u00e9" },
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
      'Mod\u00e8le coop\u00e9ratif (Banques Populaires R\u00e9gionales)',
      'Tr\u00e8s bon r\u00e9seau pour les MRE',
      'Tarifs comp\u00e9titifs sur les comptes de base',
      'Forte pr\u00e9sence en zone rurale',
      'Offre jeunes attractive',
    ],
    inconvenients: [
      'Application mobile moins moderne que la concurrence',
      'Proc\u00e9dures parfois lourdes',
      'Taux de cr\u00e9dit consommation \u00e9lev\u00e9',
    ],
    note: 8.0,
    description: "La Banque Centrale Populaire (BCP) est la deuxi\u00e8me banque du Maroc par les actifs. Son mod\u00e8le coop\u00e9ratif unique repose sur un r\u00e9seau de Banques Populaires R\u00e9gionales (BPR). Elle est particuli\u00e8rement forte aupr\u00e8s des MRE (Marocains R\u00e9sidents \u00e0 l'\u00c9tranger) et en zone rurale.",
    histoire: "Le Groupe Banque Populaire a \u00e9t\u00e9 fond\u00e9 en 1961. Son mod\u00e8le coop\u00e9ratif est unique dans le paysage bancaire marocain : les Banques Populaires R\u00e9gionales sont d\u00e9tenues par leurs clients soci\u00e9taires. La BCP, organe central du groupe, est cot\u00e9e \u00e0 la Bourse de Casablanca.",
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
      { nom: '\u00c9pargne Avenir', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Plan d'\u00e9pargne avec rendement progressif" },
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
      'Forte dimension panafricaine (pr\u00e9sence dans 30+ pays)',
      'Banque en ligne performante',
      'Bonne offre pour les entreprises \u00e0 vocation africaine',
      'Innovation digitale constante',
      'Engagement RSE et d\u00e9veloppement durable',
    ],
    inconvenients: [
      'R\u00e9seau d\'agences moins dense que AWB ou BP',
      'Tarifs cartes premium \u00e9lev\u00e9s',
      'Moins comp\u00e9titive sur le cr\u00e9dit \u00e0 la consommation',
    ],
    note: 7.8,
    description: "BMCE Bank of Africa (BOA) est la troisi\u00e8me banque du Maroc. Rebaptis\u00e9e Bank of Africa, elle se distingue par sa dimension panafricaine avec une pr\u00e9sence dans plus de 30 pays africains. C'est la banque de r\u00e9f\u00e9rence pour les op\u00e9rations internationales en Afrique.",
    histoire: "Fond\u00e9e en 1959, la Banque Marocaine du Commerce Ext\u00e9rieur a \u00e9t\u00e9 transform\u00e9e par Othman Benjelloun en un groupe bancaire panafricain majeur. L'acquisition de Bank of Africa en 2010 a donn\u00e9 au groupe une empreinte continentale unique. La banque est cot\u00e9e \u00e0 la Bourse de Casablanca.",
  },
  {
    id: 'credit-agricole-maroc',
    nom: 'Cr\u00e9dit Agricole du Maroc (CAM)',
    nomCourt: 'CAM',
    logo: '/logos/cam.svg',
    type: 'specialisee',
    fondation: 1961,
    siege: 'Rabat',
    agences: 1500,
    partMarche: 8.5,
    site: 'https://www.creditagricole.ma',
    comptes: [
      { nom: 'Compte Al Filahi', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte adapt\u00e9 au monde agricole' },
      { nom: 'Compte Citadin', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant pour les particuliers urbains' },
      { nom: '\u00c9pargne Verte', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "\u00c9pargne responsable li\u00e9e au d\u00e9veloppement durable" },
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
      'Sp\u00e9cialiste du financement agricole',
      'Tarifs bancaires parmi les plus bas',
      'Bonne couverture des zones rurales',
      'Produits adapt\u00e9s au monde agricole',
      'Cr\u00e9dits saisonniers pour les agriculteurs',
    ],
    inconvenients: [
      'Offre digitale en retard',
      'Gamme de cartes limit\u00e9e',
      'Taux de cr\u00e9dit immobilier l\u00e9g\u00e8rement plus \u00e9lev\u00e9',
      'R\u00e9seau d\'agences concentr\u00e9 en zone rurale',
    ],
    note: 6.8,
    description: "Le Cr\u00e9dit Agricole du Maroc (CAM) est la banque historique du secteur agricole marocain. D\u00e9tenue par l'\u00c9tat, elle joue un r\u00f4le cl\u00e9 dans le financement du Plan Maroc Vert et du monde rural. Elle s'est diversifi\u00e9e vers la banque universelle tout en gardant son ADN agricole.",
    histoire: "Cr\u00e9\u00e9 en 1961 sous le nom de Caisse Nationale de Cr\u00e9dit Agricole (CNCA), le CAM a \u00e9t\u00e9 transform\u00e9 en soci\u00e9t\u00e9 anonyme en 2003. Banque publique, elle reste le pilier du financement agricole au Maroc et a accompagn\u00e9 la modernisation du secteur via le Plan Maroc Vert lanc\u00e9 en 2008.",
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
      { nom: '\u00c9pargne Immo', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "\u00c9pargne logement avec avantages fiscaux" },
      { nom: 'Compte Pro Digital', type: 'professionnel', fraisTenue: 0, carteIncluse: true, description: 'Compte professionnel 100% en ligne' },
      { nom: 'Compte Jeunes Code 25', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: "Offre \u00e9tudiants et jeunes actifs compl\u00e8tement gratuite" },
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
      'Meilleure application mobile du march\u00e9',
      'Sp\u00e9cialiste du cr\u00e9dit immobilier (taux tr\u00e8s comp\u00e9titifs)',
      'Offre jeunes Code 30 imbattable',
      'Innovation digitale (paiement mobile, e-banking)',
      'Pas de frais de tenue de compte',
    ],
    inconvenients: [
      'R\u00e9seau d\'agences limit\u00e9 (350)',
      'Moins adapt\u00e9e aux entreprises',
      'Plafonds de cartes classiques parfois limit\u00e9s',
    ],
    note: 8.8,
    description: "CIH Bank, anciennement Cr\u00e9dit Immobilier et H\u00f4telier, est devenue la banque digitale de r\u00e9f\u00e9rence au Maroc. Connue pour ses taux immobiliers comp\u00e9titifs et sa carte classique gratuite, elle s\u00e9duit particuli\u00e8rement les jeunes et les primo-acc\u00e9dants.",
    histoire: "Fond\u00e9e en 1920, la CIH \u00e9tait \u00e0 l'origine sp\u00e9cialis\u00e9e dans le cr\u00e9dit immobilier et le financement h\u00f4telier. Apr\u00e8s une p\u00e9riode difficile dans les ann\u00e9es 2000, la banque a \u00e9t\u00e9 rachet\u00e9e par le groupe CDG (Caisse de D\u00e9p\u00f4t et de Gestion) et a op\u00e9r\u00e9 une transformation digitale r\u00e9ussie pour devenir une banque universelle moderne.",
  },
  {
    id: 'societe-generale-maroc',
    nom: 'Soci\u00e9t\u00e9 G\u00e9n\u00e9rale Maroc',
    nomCourt: 'SG',
    logo: '/logos/sg-maroc.svg',
    type: 'universelle',
    fondation: 1913,
    siege: 'Casablanca',
    agences: 400,
    partMarche: 7.0,
    site: 'https://www.sgmaroc.com',
    comptes: [
      { nom: 'Compte So\u2019Start', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte d\'entr\u00e9e de gamme avec carte incluse' },
      { nom: 'Compte So\u2019Premium', type: 'courant', fraisTenue: 360, carteIncluse: true, description: 'Pack haut de gamme avec carte Gold et assurances' },
      { nom: '\u00c9pargne So\u2019Horizon', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Plan d'\u00e9pargne programm\u00e9e" },
      { nom: 'Compte Pro So\u2019Business', type: 'professionnel', fraisTenue: 300, carteIncluse: true, description: 'Solution compl\u00e8te pour les professionnels' },
      { nom: 'Compte Jeunes So\u2019Young', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Offre gratuite pour les 18-25 ans' },
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
      'Expertise du groupe Soci\u00e9t\u00e9 G\u00e9n\u00e9rale (standards internationaux)',
      'Banque en ligne Sogecash performante',
      'Bonne offre pour les entreprises et le trade finance',
      'R\u00e9seau international gr\u00e2ce au groupe SG',
      'Service client de qualit\u00e9',
    ],
    inconvenients: [
      'Tarifs parmi les plus \u00e9lev\u00e9s du march\u00e9',
      'R\u00e9seau d\'agences limit\u00e9',
      'Offre de base moins comp\u00e9titive',
      'Frais de tenue de compte sur packs premium',
    ],
    note: 7.5,
    description: "Soci\u00e9t\u00e9 G\u00e9n\u00e9rale Maroc est la filiale marocaine du groupe fran\u00e7ais Soci\u00e9t\u00e9 G\u00e9n\u00e9rale. Elle se positionne comme une banque universelle premium avec une forte expertise en banque d'entreprise et en op\u00e9rations internationales.",
    histoire: "Pr\u00e9sente au Maroc depuis 1913, la Soci\u00e9t\u00e9 G\u00e9n\u00e9rale est l'une des plus anciennes banques du pays. Elle a renforc\u00e9 sa pr\u00e9sence en absorbant l'ex-Eqdom (cr\u00e9dit conso) et en d\u00e9veloppant une offre digitale compl\u00e8te.",
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
      { nom: '\u00c9pargne Plus', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "Livret d'\u00e9pargne avec r\u00e9mun\u00e9ration attractive" },
      { nom: 'Compte Pro Entreprendre', type: 'professionnel', fraisTenue: 280, carteIncluse: true, description: 'Solution pour les professionnels lib\u00e9raux et TPE' },
      { nom: 'Compte Campus', type: 'jeune', fraisTenue: 0, carteIncluse: true, description: 'Offre \u00e9tudiants gratuite' },
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
      'Standards BNP Paribas (groupe international de r\u00e9f\u00e9rence)',
      'Carte World Elite la plus premium du march\u00e9',
      'Expertise en gestion de patrimoine',
      'Offre entreprise et corporate de qualit\u00e9',
      'Partenariats internationaux via BNP Paribas',
    ],
    inconvenients: [
      'Tarifs les plus \u00e9lev\u00e9s du march\u00e9',
      'R\u00e9seau d\'agences tr\u00e8s limit\u00e9',
      'Taux de cr\u00e9dit immobilier au-dessus de la moyenne',
      'Moins adapt\u00e9e aux petits budgets',
    ],
    note: 7.2,
    description: "La BMCI (Banque Marocaine pour le Commerce et l'Industrie) est la filiale marocaine de BNP Paribas. Elle se positionne sur le segment haut de gamme avec une offre premium en gestion de patrimoine et en banque d'entreprise.",
    histoire: "Fond\u00e9e en 1964, la BMCI est devenue filiale de BNP Paribas suite \u00e0 la fusion BNP-Paribas en 2000. Elle b\u00e9n\u00e9ficie de l'expertise du premier groupe bancaire europ\u00e9en et se concentre sur une client\u00e8le \u00e0 haut revenu et les grandes entreprises.",
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
      { nom: '\u00c9pargne CFG', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "\u00c9pargne avec rendement comp\u00e9titif" },
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
      'Banque nouvelle g\u00e9n\u00e9ration (agences modernes)',
      'Carte classique gratuite',
      'Taux de cr\u00e9dit tr\u00e8s comp\u00e9titifs',
      'Service client personnalis\u00e9 (petit r\u00e9seau = proximit\u00e9)',
      'Expertise en investissement et bourse',
    ],
    inconvenients: [
      'R\u00e9seau d\'agences tr\u00e8s limit\u00e9 (40)',
      'Faible notori\u00e9t\u00e9',
      'Gamme de produits plus restreinte',
      'Pas d\'offre MRE d\u00e9velopp\u00e9e',
    ],
    note: 7.5,
    description: "CFG Bank est la plus jeune banque universelle du Maroc. Issue du groupe CFG (Casablanca Finance Group), sp\u00e9cialiste de la banque d'investissement, elle a obtenu son agr\u00e9ment de banque universelle en 2014. Elle se distingue par des tarifs agressifs et une approche digitale.",
    histoire: "CFG Group a \u00e9t\u00e9 fond\u00e9 en 1992 comme soci\u00e9t\u00e9 de bourse. Apr\u00e8s avoir obtenu l'agr\u00e9ment bancaire en 2014, CFG Bank a rapidement grandi en proposant des tarifs disruptifs et une exp\u00e9rience client diff\u00e9renciante. La banque vise une client\u00e8le urbaine, jeune et connect\u00e9e.",
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
      'R\u00e9gulateur du secteur bancaire marocain',
      'Garant de la stabilit\u00e9 mon\u00e9taire',
      'Publie les statistiques de r\u00e9f\u00e9rence',
      'Fixe le taux directeur',
    ],
    inconvenients: [
      'N\'est pas une banque de d\u00e9tail',
      'Pas de produits pour les particuliers',
    ],
    note: 0,
    description: "Bank Al-Maghrib (BAM) est la banque centrale du Maroc. Elle n'est pas une banque de d\u00e9tail et ne propose pas de produits aux particuliers. Son r\u00f4le est de r\u00e9guler le syst\u00e8me bancaire, de fixer la politique mon\u00e9taire et de superviser les \u00e9tablissements de cr\u00e9dit.",
    histoire: "Cr\u00e9\u00e9e en 1959 (succ\u00e9dant \u00e0 la Banque d'\u00c9tat du Maroc fond\u00e9e en 1906), Bank Al-Maghrib est dirig\u00e9e par Abdellatif Jouahri depuis 2003. Elle fixe le taux directeur (actuellement 2,75%), r\u00e9glemente le secteur bancaire et fixe notamment le taux d'endettement maximum \u00e0 45%.",
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
      { nom: 'Compte Barid', type: 'courant', fraisTenue: 0, carteIncluse: true, description: 'Compte courant de base enti\u00e8rement gratuit' },
      { nom: 'Compte \u00c9pargne Tawfir', type: 'epargne', fraisTenue: 0, carteIncluse: false, description: "\u00c9pargne accessible d\u00e8s 100 DH" },
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
      'Tarifs les plus bas du march\u00e9',
      'Carte gratuite',
      'Id\u00e9ale pour l\'inclusion financi\u00e8re',
      'R\u00e9seau Barid Al-Maghrib (points poste)',
      'Paiement mobile Barid Pay',
    ],
    inconvenients: [
      'Gamme de produits limit\u00e9e',
      'Pas de cartes premium (Platinum/Infinite)',
      'Taux de cr\u00e9dit les plus \u00e9lev\u00e9s',
      'Service digital basique',
      'Pas adapt\u00e9e pour les gros patrimoines',
    ],
    note: 6.5,
    description: "Al Barid Bank est la banque postale du Maroc, filiale de Barid Al-Maghrib (la poste marocaine). C'est l'acteur cl\u00e9 de l'inclusion financi\u00e8re au Maroc avec 8 millions de clients. Elle offre les tarifs les plus bas du march\u00e9 et une couverture g\u00e9ographique in\u00e9gal\u00e9e gr\u00e2ce au r\u00e9seau postal.",
    histoire: "Cr\u00e9\u00e9e en 2010 \u00e0 partir des services financiers de Barid Al-Maghrib, Al Barid Bank a obtenu l'agr\u00e9ment bancaire pour r\u00e9pondre aux besoins de bancarisation des populations non desservies. Avec 8 millions de clients, c'est la banque la plus inclusive du Maroc, pr\u00e9sente dans les zones les plus recul\u00e9es via le r\u00e9seau postal.",
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
