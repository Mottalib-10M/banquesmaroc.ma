export const SITE = {
  name: 'Banques Maroc',
  domain: 'banquesmaroc.ma',
  url: 'https://banquesmaroc.ma',
  description: 'Comparez les banques marocaines, simulez vos crédits immobiliers et trouvez la meilleure carte bancaire au Maroc.',
  author: 'Mottalib Radif',
  authorCredentials: 'MBA INSEAD',
  contact: 'contact@banquesmaroc.ma',
  brandColor: '#1E40AF',
  locale: 'fr-MA',
  currency: 'MAD',
  currencySymbol: 'DH',
} as const;

export const NAV_LINKS = [
  { href: '/comparateur-banques/', label: 'Comparateur' },
  { href: '/simulation-credit-immobilier/', label: 'Simulateurs', children: [
    { href: '/simulation-credit-immobilier/', label: 'Cr\u00e9dit immobilier' },
    { href: '/simulation-credit-consommation/', label: 'Cr\u00e9dit conso' },
    { href: '/simulation-leasing/', label: 'Leasing auto' },
    { href: '/capacite-emprunt/', label: "Capacit\u00e9 d'emprunt" },
  ]},
  { href: '/comparateur-cartes/', label: 'Cartes' },
  { href: '/guides/meilleure-banque-maroc/', label: 'Guides', children: [
    { href: '/guides/meilleure-banque-maroc/', label: 'Meilleure banque' },
    { href: '/guides/comment-choisir-carte-bancaire/', label: 'Choisir sa carte' },
    { href: '/guides/credit-immobilier-maroc/', label: 'Cr\u00e9dit immobilier' },
  ]},
] as const;

export const TAUX_ENDETTEMENT_MAX = 0.45;
export const DUREE_MAX_IMMOBILIER = 25;
export const DUREE_MAX_CONSO = 7;
export const DUREE_MAX_LEASING = 7;
export const APPORT_MIN_IMMOBILIER = 0.10;
