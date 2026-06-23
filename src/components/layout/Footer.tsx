import { SITE } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                  <path d="M6 14h4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Banques <span className="text-brand-light">Maroc</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comparateur ind\u00e9pendant des banques marocaines. Simulez vos cr\u00e9dits, comparez les cartes et trouvez la meilleure banque au Maroc.
            </p>
          </div>

          {/* Simulateurs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Simulateurs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/simulation-credit-immobilier/" className="hover:text-white transition-colors">Cr\u00e9dit immobilier</a></li>
              <li><a href="/simulation-credit-consommation/" className="hover:text-white transition-colors">Cr\u00e9dit consommation</a></li>
              <li><a href="/simulation-leasing/" className="hover:text-white transition-colors">Leasing auto</a></li>
              <li><a href="/capacite-emprunt/" className="hover:text-white transition-colors">Capacit\u00e9 d&apos;emprunt</a></li>
            </ul>
          </div>

          {/* Comparer */}
          <div>
            <h3 className="text-white font-semibold mb-4">Comparer</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/comparateur-banques/" className="hover:text-white transition-colors">Comparateur banques</a></li>
              <li><a href="/comparateur-cartes/" className="hover:text-white transition-colors">Comparateur cartes</a></li>
              <li><a href="/banques/attijariwafa-bank/" className="hover:text-white transition-colors">Attijariwafa Bank</a></li>
              <li><a href="/banques/banque-populaire/" className="hover:text-white transition-colors">Banque Populaire</a></li>
              <li><a href="/banques/cih-bank/" className="hover:text-white transition-colors">CIH Bank</a></li>
            </ul>
          </div>

          {/* Guides & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/guides/meilleure-banque-maroc/" className="hover:text-white transition-colors">Meilleure banque au Maroc</a></li>
              <li><a href="/guides/comment-choisir-carte-bancaire/" className="hover:text-white transition-colors">Choisir sa carte bancaire</a></li>
              <li><a href="/guides/credit-immobilier-maroc/" className="hover:text-white transition-colors">Guide cr\u00e9dit immobilier</a></li>
            </ul>
            <h3 className="text-white font-semibold mb-3 mt-6">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/a-propos/" className="hover:text-white transition-colors">\u00c0 propos</a></li>
              <li><a href="/mentions-legales/" className="hover:text-white transition-colors">Mentions l\u00e9gales</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {SITE.name}. Tous droits r\u00e9serv\u00e9s.
            </p>
            <p className="text-xs text-gray-500">
              Par {SITE.author} ({SITE.authorCredentials}) &middot; {SITE.contact}
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-500 max-w-3xl">
            Les informations pr\u00e9sent\u00e9es sur ce site sont fournies \u00e0 titre indicatif et ne constituent pas un conseil financier.
            Les taux et tarifs affich\u00e9s sont donn\u00e9s \u00e0 titre informatif et peuvent varier selon votre profil et les conditions du march\u00e9.
            Consultez votre banque pour obtenir les conditions exactes.
          </p>
        </div>
      </div>
    </footer>
  );
}
