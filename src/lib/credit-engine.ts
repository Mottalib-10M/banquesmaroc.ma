export interface AmortissementRow {
  mois: number;
  mensualite: number;
  partCapital: number;
  partInterets: number;
  capitalRestant: number;
  capitalRembourse: number;
}

export interface CoutTotal {
  mensualite: number;
  coutTotal: number;
  coutInterets: number;
}

export interface LeasingResult {
  mensualite: number;
  coutTotal: number;
  coutInterets: number;
  montantFinance: number;
  valeurResiduelle: number;
}

/**
 * Calcule la mensualite d'un credit avec la formule d'amortissement francais.
 * M = C * t / (1 - (1 + t)^(-n))
 * ou C = capital, t = taux mensuel, n = nombre de mois
 */
export function calculerMensualite(
  capital: number,
  tauxAnnuel: number,
  dureeMois: number
): number {
  if (capital <= 0 || dureeMois <= 0) return 0;
  if (tauxAnnuel <= 0) return capital / dureeMois;

  const tauxMensuel = tauxAnnuel / 100 / 12;
  const mensualite =
    (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeMois));

  return Math.round(mensualite * 100) / 100;
}

/**
 * Genere le tableau d'amortissement complet.
 */
export function calculerTableauAmortissement(
  capital: number,
  tauxAnnuel: number,
  dureeMois: number
): AmortissementRow[] {
  if (capital <= 0 || dureeMois <= 0) return [];

  const mensualite = calculerMensualite(capital, tauxAnnuel, dureeMois);
  const tauxMensuel = tauxAnnuel / 100 / 12;
  const tableau: AmortissementRow[] = [];
  let capitalRestant = capital;
  let capitalRembourse = 0;

  for (let mois = 1; mois <= dureeMois; mois++) {
    const partInterets = Math.round(capitalRestant * tauxMensuel * 100) / 100;
    let partCapital: number;

    if (mois === dureeMois) {
      partCapital = capitalRestant;
    } else {
      partCapital = Math.round((mensualite - partInterets) * 100) / 100;
    }

    capitalRestant = Math.max(0, Math.round((capitalRestant - partCapital) * 100) / 100);
    capitalRembourse = Math.round((capitalRembourse + partCapital) * 100) / 100;

    tableau.push({
      mois,
      mensualite: mois === dureeMois ? partCapital + partInterets : mensualite,
      partCapital,
      partInterets,
      capitalRestant,
      capitalRembourse,
    });
  }

  return tableau;
}

/**
 * Calcule la capacite d'emprunt maximale en fonction du revenu
 * et du taux d'endettement reglementaire (45% Bank Al-Maghrib).
 */
export function calculerCapaciteEmprunt(
  revenuMensuel: number,
  charges: number,
  tauxEndettement: number,
  tauxAnnuel: number,
  dureeMois: number
): number {
  if (revenuMensuel <= 0 || dureeMois <= 0) return 0;

  const mensualiteMax = revenuMensuel * tauxEndettement - charges;
  if (mensualiteMax <= 0) return 0;

  if (tauxAnnuel <= 0) return Math.round(mensualiteMax * dureeMois);

  const tauxMensuel = tauxAnnuel / 100 / 12;
  const capacite =
    mensualiteMax * (1 - Math.pow(1 + tauxMensuel, -dureeMois)) / tauxMensuel;

  return Math.round(capacite);
}

/**
 * Calcule le cout total d'un credit : mensualite, cout total, cout des interets.
 */
export function calculerCoutTotal(
  capital: number,
  tauxAnnuel: number,
  dureeMois: number
): CoutTotal {
  const mensualite = calculerMensualite(capital, tauxAnnuel, dureeMois);
  const coutTotal = Math.round(mensualite * dureeMois * 100) / 100;
  const coutInterets = Math.round((coutTotal - capital) * 100) / 100;

  return { mensualite, coutTotal, coutInterets };
}

/**
 * Calcule le leasing automobile.
 * Le montant finance = prix vehicule - apport
 * Mensualite basee sur (montantFinance - valeurResiduelle) amorti + interets sur montantFinance
 */
export function calculerLeasingAuto(
  prixVehicule: number,
  apport: number,
  tauxAnnuel: number,
  dureeMois: number,
  valeurResiduelle: number
): LeasingResult {
  if (prixVehicule <= 0 || dureeMois <= 0) {
    return { mensualite: 0, coutTotal: 0, coutInterets: 0, montantFinance: 0, valeurResiduelle: 0 };
  }

  const montantFinance = prixVehicule - apport;
  const montantAmorti = montantFinance - valeurResiduelle;

  if (tauxAnnuel <= 0) {
    const mensualite = montantAmorti / dureeMois;
    return {
      mensualite: Math.round(mensualite * 100) / 100,
      coutTotal: Math.round(mensualite * dureeMois * 100) / 100,
      coutInterets: 0,
      montantFinance,
      valeurResiduelle,
    };
  }

  const tauxMensuel = tauxAnnuel / 100 / 12;

  // Mensualite = amortissement du capital + interets sur le capital restant
  // Formule simplifiee pour leasing:
  // M = (montantFinance - VR / (1+t)^n) * t / (1 - (1+t)^(-n))
  const vrActualisee = valeurResiduelle / Math.pow(1 + tauxMensuel, dureeMois);
  const baseMensualite = montantFinance - vrActualisee;
  const mensualite =
    (baseMensualite * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeMois));

  const coutTotal = Math.round((mensualite * dureeMois + valeurResiduelle) * 100) / 100;
  const coutInterets = Math.round((coutTotal - montantFinance) * 100) / 100;

  return {
    mensualite: Math.round(mensualite * 100) / 100,
    coutTotal,
    coutInterets,
    montantFinance,
    valeurResiduelle,
  };
}
