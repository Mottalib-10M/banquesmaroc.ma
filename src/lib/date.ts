/** Date écrite en toutes lettres (« 1er juin 2026 »), jamais le format machine ; l'ISO reste dans
 *  l'attribut dateTime de la balise <time> (RECETTE §8.4). Fuseau UTC forcé. */
export function dateLongue(iso: string): string {
  return new Date(`${iso}T00:00:00Z`)
    .toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .replace(/^1 /, '1er ');
}
