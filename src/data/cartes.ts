export interface CarteComparaison {
  banqueId: string;
  banqueNom: string;
  nom: string;
  type: 'classique' | 'gold' | 'platinum' | 'infinite';
  cotisation: number;
  plafondRetraitJour: number;
  plafondPaiementMois: number;
  plafondRetraitEtranger: number;
  plafondPaiementEtranger: number;
  assuranceVoyage: boolean;
  assuranceAchat: boolean;
  cashback: boolean;
  cashbackTaux: number;
  miles: boolean;
  conciergerie: boolean;
  sansContact: boolean;
  paiementMobile: boolean;
  international: boolean;
  description: string;
}

export const cartes: CarteComparaison[] = [
  // Attijariwafa Bank
  {
    banqueId: 'attijariwafa-bank', banqueNom: 'Attijariwafa Bank', nom: 'Visa Classique', type: 'classique',
    cotisation: 80, plafondRetraitJour: 5000, plafondPaiementMois: 20000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte de base pour les operations quotidiennes au Maroc.',
  },
  {
    banqueId: 'attijariwafa-bank', banqueNom: 'Attijariwafa Bank', nom: 'Visa Gold', type: 'gold',
    cotisation: 350, plafondRetraitJour: 10000, plafondPaiementMois: 50000, plafondRetraitEtranger: 8000, plafondPaiementEtranger: 30000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold avec assurances voyage et achat incluses.',
  },
  {
    banqueId: 'attijariwafa-bank', banqueNom: 'Attijariwafa Bank', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 1000, plafondRetraitJour: 20000, plafondPaiementMois: 100000, plafondRetraitEtranger: 15000, plafondPaiementEtranger: 80000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte haut de gamme avec cashback et conciergerie.',
  },
  {
    banqueId: 'attijariwafa-bank', banqueNom: 'Attijariwafa Bank', nom: 'Visa Infinite', type: 'infinite',
    cotisation: 3000, plafondRetraitJour: 50000, plafondPaiementMois: 300000, plafondRetraitEtranger: 40000, plafondPaiementEtranger: 200000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 1.0, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'La carte la plus exclusive avec miles, conciergerie 24/7 et assurances premium.',
  },

  // Banque Populaire
  {
    banqueId: 'banque-populaire', banqueNom: 'Banque Populaire', nom: 'Chaabi Classique', type: 'classique',
    cotisation: 60, plafondRetraitJour: 5000, plafondPaiementMois: 15000, plafondRetraitEtranger: 2000, plafondPaiementEtranger: 8000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte Chaabi economique pour les operations courantes.',
  },
  {
    banqueId: 'banque-populaire', banqueNom: 'Banque Populaire', nom: 'Chaabi Gold', type: 'gold',
    cotisation: 300, plafondRetraitJour: 10000, plafondPaiementMois: 40000, plafondRetraitEtranger: 7000, plafondPaiementEtranger: 25000,
    assuranceVoyage: true, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold avec assurance voyage pour les deplacement internationaux.',
  },
  {
    banqueId: 'banque-populaire', banqueNom: 'Banque Populaire', nom: 'Chaabi Platinum', type: 'platinum',
    cotisation: 800, plafondRetraitJour: 20000, plafondPaiementMois: 80000, plafondRetraitEtranger: 12000, plafondPaiementEtranger: 60000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte premium avec conciergerie et assurances etendues.',
  },
  {
    banqueId: 'banque-populaire', banqueNom: 'Banque Populaire', nom: 'Chaabi Infinite', type: 'infinite',
    cotisation: 2500, plafondRetraitJour: 40000, plafondPaiementMois: 250000, plafondRetraitEtranger: 30000, plafondPaiementEtranger: 180000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.8, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'La carte la plus haut de gamme de la Banque Populaire.',
  },

  // BMCE BOA
  {
    banqueId: 'bmce-bank-of-africa', banqueNom: 'Bank of Africa', nom: 'Visa Classic', type: 'classique',
    cotisation: 90, plafondRetraitJour: 5000, plafondPaiementMois: 20000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique pour les operations quotidiennes.',
  },
  {
    banqueId: 'bmce-bank-of-africa', banqueNom: 'Bank of Africa', nom: 'Visa Gold', type: 'gold',
    cotisation: 400, plafondRetraitJour: 12000, plafondPaiementMois: 50000, plafondRetraitEtranger: 8000, plafondPaiementEtranger: 35000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold avec couverture voyage internationale.',
  },
  {
    banqueId: 'bmce-bank-of-africa', banqueNom: 'Bank of Africa', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 1200, plafondRetraitJour: 25000, plafondPaiementMois: 120000, plafondRetraitEtranger: 20000, plafondPaiementEtranger: 80000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Platinum avec cashback et services premium.',
  },
  {
    banqueId: 'bmce-bank-of-africa', banqueNom: 'Bank of Africa', nom: 'Visa Infinite', type: 'infinite',
    cotisation: 3500, plafondRetraitJour: 50000, plafondPaiementMois: 350000, plafondRetraitEtranger: 40000, plafondPaiementEtranger: 250000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 1.0, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte ultra-premium avec services exclusifs et miles.',
  },

  // CIH Bank
  {
    banqueId: 'cih-bank', banqueNom: 'CIH Bank', nom: 'Visa Classique', type: 'classique',
    cotisation: 0, plafondRetraitJour: 5000, plafondPaiementMois: 20000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique 100% gratuite, la seule du marche.',
  },
  {
    banqueId: 'cih-bank', banqueNom: 'CIH Bank', nom: 'Visa Gold', type: 'gold',
    cotisation: 250, plafondRetraitJour: 10000, plafondPaiementMois: 50000, plafondRetraitEtranger: 7000, plafondPaiementEtranger: 30000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold a tarif competitif avec assurances incluses.',
  },
  {
    banqueId: 'cih-bank', banqueNom: 'CIH Bank', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 600, plafondRetraitJour: 20000, plafondPaiementMois: 100000, plafondRetraitEtranger: 15000, plafondPaiementEtranger: 80000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Platinum au meilleur rapport qualite-prix du marche.',
  },
  {
    banqueId: 'cih-bank', banqueNom: 'CIH Bank', nom: 'Visa Infinite', type: 'infinite',
    cotisation: 2000, plafondRetraitJour: 40000, plafondPaiementMois: 250000, plafondRetraitEtranger: 30000, plafondPaiementEtranger: 180000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 1.0, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Infinite CIH avec le meilleur tarif du segment.',
  },

  // Societe Generale
  {
    banqueId: 'societe-generale-maroc', banqueNom: 'Societe Generale', nom: 'Visa Classique', type: 'classique',
    cotisation: 100, plafondRetraitJour: 5000, plafondPaiementMois: 20000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique SG pour les operations courantes.',
  },
  {
    banqueId: 'societe-generale-maroc', banqueNom: 'Societe Generale', nom: 'Visa Gold', type: 'gold',
    cotisation: 450, plafondRetraitJour: 12000, plafondPaiementMois: 60000, plafondRetraitEtranger: 10000, plafondPaiementEtranger: 40000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold premium avec assurances completes.',
  },
  {
    banqueId: 'societe-generale-maroc', banqueNom: 'Societe Generale', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 1200, plafondRetraitJour: 25000, plafondPaiementMois: 120000, plafondRetraitEtranger: 20000, plafondPaiementEtranger: 80000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Platinum haut de gamme avec conciergerie.',
  },
  {
    banqueId: 'societe-generale-maroc', banqueNom: 'Societe Generale', nom: 'Visa Infinite', type: 'infinite',
    cotisation: 3500, plafondRetraitJour: 50000, plafondPaiementMois: 300000, plafondRetraitEtranger: 40000, plafondPaiementEtranger: 200000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 1.0, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte ultra-premium avec tous les services exclusifs SG.',
  },

  // BMCI
  {
    banqueId: 'bmci', banqueNom: 'BMCI (BNP Paribas)', nom: 'Visa Classic', type: 'classique',
    cotisation: 90, plafondRetraitJour: 5000, plafondPaiementMois: 18000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique BMCI BNP Paribas.',
  },
  {
    banqueId: 'bmci', banqueNom: 'BMCI (BNP Paribas)', nom: 'Visa Premier', type: 'gold',
    cotisation: 500, plafondRetraitJour: 15000, plafondPaiementMois: 60000, plafondRetraitEtranger: 12000, plafondPaiementEtranger: 40000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Visa Premier avec standards BNP Paribas.',
  },
  {
    banqueId: 'bmci', banqueNom: 'BMCI (BNP Paribas)', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 1500, plafondRetraitJour: 30000, plafondPaiementMois: 150000, plafondRetraitEtranger: 25000, plafondPaiementEtranger: 100000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Platinum BNP Paribas avec services etendus.',
  },
  {
    banqueId: 'bmci', banqueNom: 'BMCI (BNP Paribas)', nom: 'World Elite', type: 'infinite',
    cotisation: 5000, plafondRetraitJour: 60000, plafondPaiementMois: 400000, plafondRetraitEtranger: 50000, plafondPaiementEtranger: 300000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 1.5, miles: true, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'La carte la plus exclusive du marche marocain avec plafonds maximaux.',
  },

  // CAM
  {
    banqueId: 'credit-agricole-maroc', banqueNom: 'Credit Agricole', nom: 'Carte Classique', type: 'classique',
    cotisation: 50, plafondRetraitJour: 4000, plafondPaiementMois: 15000, plafondRetraitEtranger: 2000, plafondPaiementEtranger: 8000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: false, international: false,
    description: 'Carte de base economique du Credit Agricole.',
  },
  {
    banqueId: 'credit-agricole-maroc', banqueNom: 'Credit Agricole', nom: 'Carte Gold', type: 'gold',
    cotisation: 280, plafondRetraitJour: 8000, plafondPaiementMois: 35000, plafondRetraitEtranger: 6000, plafondPaiementEtranger: 20000,
    assuranceVoyage: true, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold avec assurance voyage basique.',
  },
  {
    banqueId: 'credit-agricole-maroc', banqueNom: 'Credit Agricole', nom: 'Carte Platinum', type: 'platinum',
    cotisation: 700, plafondRetraitJour: 15000, plafondPaiementMois: 70000, plafondRetraitEtranger: 10000, plafondPaiementEtranger: 50000,
    assuranceVoyage: true, assuranceAchat: true, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte premium du Credit Agricole.',
  },

  // CFG Bank
  {
    banqueId: 'cfg-bank', banqueNom: 'CFG Bank', nom: 'Visa Classic', type: 'classique',
    cotisation: 0, plafondRetraitJour: 5000, plafondPaiementMois: 20000, plafondRetraitEtranger: 3000, plafondPaiementEtranger: 10000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique gratuite CFG Bank.',
  },
  {
    banqueId: 'cfg-bank', banqueNom: 'CFG Bank', nom: 'Visa Gold', type: 'gold',
    cotisation: 200, plafondRetraitJour: 10000, plafondPaiementMois: 50000, plafondRetraitEtranger: 7000, plafondPaiementEtranger: 30000,
    assuranceVoyage: true, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold competitif de CFG Bank.',
  },
  {
    banqueId: 'cfg-bank', banqueNom: 'CFG Bank', nom: 'Visa Platinum', type: 'platinum',
    cotisation: 800, plafondRetraitJour: 20000, plafondPaiementMois: 100000, plafondRetraitEtranger: 15000, plafondPaiementEtranger: 80000,
    assuranceVoyage: true, assuranceAchat: true, cashback: true, cashbackTaux: 0.5, miles: false, conciergerie: true, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Platinum CFG Bank avec cashback.',
  },

  // Al Barid Bank
  {
    banqueId: 'al-barid-bank', banqueNom: 'Al Barid Bank', nom: 'Carte e-Barid', type: 'classique',
    cotisation: 0, plafondRetraitJour: 3000, plafondPaiementMois: 10000, plafondRetraitEtranger: 0, plafondPaiementEtranger: 0,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: false, paiementMobile: true, international: false,
    description: 'Carte prepayee gratuite pour l\'inclusion financiere.',
  },
  {
    banqueId: 'al-barid-bank', banqueNom: 'Al Barid Bank', nom: 'Carte Classique', type: 'classique',
    cotisation: 40, plafondRetraitJour: 5000, plafondPaiementMois: 15000, plafondRetraitEtranger: 2000, plafondPaiementEtranger: 5000,
    assuranceVoyage: false, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: false,
    description: 'Carte classique Al Barid Bank a tarif tres bas.',
  },
  {
    banqueId: 'al-barid-bank', banqueNom: 'Al Barid Bank', nom: 'Carte Gold', type: 'gold',
    cotisation: 200, plafondRetraitJour: 8000, plafondPaiementMois: 30000, plafondRetraitEtranger: 5000, plafondPaiementEtranger: 15000,
    assuranceVoyage: true, assuranceAchat: false, cashback: false, cashbackTaux: 0, miles: false, conciergerie: false, sansContact: true, paiementMobile: true, international: true,
    description: 'Carte Gold accessible de Al Barid Bank.',
  },
];

export function getCartesByType(type: CarteComparaison['type']): CarteComparaison[] {
  return cartes.filter((c) => c.type === type);
}

export function getCartesByBanque(banqueId: string): CarteComparaison[] {
  return cartes.filter((c) => c.banqueId === banqueId);
}

export function getCartesTriees(critere: 'cotisation' | 'plafondRetraitJour' | 'plafondPaiementMois'): CarteComparaison[] {
  return [...cartes].sort((a, b) => a[critere] - b[critere]);
}
