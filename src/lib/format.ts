/**
 * Formate un nombre en dirhams marocains : 1 234 567 DH
 */
export function formatDH(montant: number): string {
  const rounded = Math.round(montant);
  const formatted = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${formatted} DH`;
}

/**
 * Formate un nombre avec separateur de milliers.
 */
export function formatNombre(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/**
 * Formate un pourcentage : 4,50%
 */
export function formatPourcent(taux: number, decimales: number = 2): string {
  return taux.toFixed(decimales).replace('.', ',') + ' %';
}

/**
 * Supprime les zeros en tete et caracteres non numeriques.
 * Autorise un seul point decimal.
 */
export function sanitizeNumericInput(value: string): string {
  // Supprimer tout sauf chiffres et point
  let cleaned = value.replace(/[^0-9.]/g, '');

  // Un seul point decimal
  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = parts[0] + '.' + parts.slice(1).join('');
  }

  // Supprimer les zeros en tete (sauf "0." pour decimales)
  if (parts[0].length > 1 && parts[0].startsWith('0')) {
    parts[0] = parts[0].replace(/^0+/, '') || '0';
    cleaned = parts.length > 1 ? parts[0] + '.' + parts[1] : parts[0];
  }

  return cleaned;
}

/**
 * Parse un input texte en nombre (retourne 0 si invalide).
 */
export function parseInputNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, '');
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

/**
 * Formate une duree en annees et mois.
 */
export function formatDuree(mois: number): string {
  const annees = Math.floor(mois / 12);
  const moisRestants = mois % 12;
  if (annees === 0) return `${moisRestants} mois`;
  if (moisRestants === 0) return `${annees} an${annees > 1 ? 's' : ''}`;
  return `${annees} an${annees > 1 ? 's' : ''} et ${moisRestants} mois`;
}
