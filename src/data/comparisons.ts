export interface BankComparison {
  slug1: string;
  slug2: string;
  nom1: string;
  nom2: string;
  nomCourt1: string;
  nomCourt2: string;
}

export const comparisons: BankComparison[] = [
  { slug1: 'attijariwafa-bank', slug2: 'banque-populaire', nom1: 'Attijariwafa Bank', nom2: 'Banque Populaire', nomCourt1: 'AWB', nomCourt2: 'BP' },
  { slug1: 'attijariwafa-bank', slug2: 'cih-bank', nom1: 'Attijariwafa Bank', nom2: 'CIH Bank', nomCourt1: 'AWB', nomCourt2: 'CIH' },
  { slug1: 'attijariwafa-bank', slug2: 'bmce-bank-of-africa', nom1: 'Attijariwafa Bank', nom2: 'Bank of Africa', nomCourt1: 'AWB', nomCourt2: 'BOA' },
  { slug1: 'banque-populaire', slug2: 'cih-bank', nom1: 'Banque Populaire', nom2: 'CIH Bank', nomCourt1: 'BP', nomCourt2: 'CIH' },
  { slug1: 'banque-populaire', slug2: 'bmce-bank-of-africa', nom1: 'Banque Populaire', nom2: 'Bank of Africa', nomCourt1: 'BP', nomCourt2: 'BOA' },
  { slug1: 'cih-bank', slug2: 'cfg-bank', nom1: 'CIH Bank', nom2: 'CFG Bank', nomCourt1: 'CIH', nomCourt2: 'CFG' },
  { slug1: 'cih-bank', slug2: 'bmce-bank-of-africa', nom1: 'CIH Bank', nom2: 'Bank of Africa', nomCourt1: 'CIH', nomCourt2: 'BOA' },
  { slug1: 'attijariwafa-bank', slug2: 'societe-generale-maroc', nom1: 'Attijariwafa Bank', nom2: 'Société Générale', nomCourt1: 'AWB', nomCourt2: 'SG' },
  { slug1: 'cih-bank', slug2: 'societe-generale-maroc', nom1: 'CIH Bank', nom2: 'Société Générale', nomCourt1: 'CIH', nomCourt2: 'SG' },
  { slug1: 'attijariwafa-bank', slug2: 'bmci', nom1: 'Attijariwafa Bank', nom2: 'BMCI', nomCourt1: 'AWB', nomCourt2: 'BMCI' },
  { slug1: 'banque-populaire', slug2: 'societe-generale-maroc', nom1: 'Banque Populaire', nom2: 'Société Générale', nomCourt1: 'BP', nomCourt2: 'SG' },
  { slug1: 'cih-bank', slug2: 'al-barid-bank', nom1: 'CIH Bank', nom2: 'Al Barid Bank', nomCourt1: 'CIH', nomCourt2: 'ABB' },
  { slug1: 'banque-populaire', slug2: 'bmci', nom1: 'Banque Populaire', nom2: 'BMCI', nomCourt1: 'BP', nomCourt2: 'BMCI' },
  { slug1: 'bmce-bank-of-africa', slug2: 'societe-generale-maroc', nom1: 'Bank of Africa', nom2: 'Société Générale', nomCourt1: 'BOA', nomCourt2: 'SG' },
  { slug1: 'cfg-bank', slug2: 'al-barid-bank', nom1: 'CFG Bank', nom2: 'Al Barid Bank', nomCourt1: 'CFG', nomCourt2: 'ABB' },
  { slug1: 'bmce-bank-of-africa', slug2: 'bmci', nom1: 'Bank of Africa', nom2: 'BMCI', nomCourt1: 'BOA', nomCourt2: 'BMCI' },
  { slug1: 'attijariwafa-bank', slug2: 'cfg-bank', nom1: 'Attijariwafa Bank', nom2: 'CFG Bank', nomCourt1: 'AWB', nomCourt2: 'CFG' },
  { slug1: 'banque-populaire', slug2: 'al-barid-bank', nom1: 'Banque Populaire', nom2: 'Al Barid Bank', nomCourt1: 'BP', nomCourt2: 'ABB' },
  { slug1: 'attijariwafa-bank', slug2: 'credit-agricole-maroc', nom1: 'Attijariwafa Bank', nom2: 'Crédit Agricole', nomCourt1: 'AWB', nomCourt2: 'CAM' },
  { slug1: 'cih-bank', slug2: 'bmci', nom1: 'CIH Bank', nom2: 'BMCI', nomCourt1: 'CIH', nomCourt2: 'BMCI' },
];

export function getComparisonBySlug(slug: string): BankComparison | undefined {
  return comparisons.find(
    (c) => `${c.slug1}-vs-${c.slug2}` === slug || `${c.slug2}-vs-${c.slug1}` === slug
  );
}

export function getComparisonsForBank(bankId: string): BankComparison[] {
  return comparisons.filter((c) => c.slug1 === bankId || c.slug2 === bankId);
}
