import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page non trouvée - Comparateur de banques marocaines Banques Maroc',
  description: 'La page que vous cherchez n\'existe pas ou a été déplacée. Retrouvez notre comparateur de banques marocaines, nos simulateurs de crédit et nos guides financiers sur Banques Maroc.',
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="mb-8">
        <span className="text-7xl font-bold text-brand">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
        Page non trouvée
      </h1>
      <p className="text-gray-500 mb-8">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Vérifiez l&apos;URL ou retournez à l&apos;accueil.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand text-white font-medium rounded-lg hover:bg-brand-dark transition-colors"
        >
          Retour à l&apos;accueil
        </a>
        <a
          href="/comparateur-banques/"
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-charcoal font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Comparer les banques
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <a href="/simulation-credit-immobilier/" className="p-4 bg-light-gray rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-charcoal">Crédit immobilier</h3>
          <p className="text-sm text-gray-500">Simulez votre prêt</p>
        </a>
        <a href="/comparateur-cartes/" className="p-4 bg-light-gray rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-charcoal">Cartes bancaires</h3>
          <p className="text-sm text-gray-500">Comparez les cartes</p>
        </a>
        <a href="/guides/meilleure-banque-maroc/" className="p-4 bg-light-gray rounded-lg hover:bg-blue-50 transition-colors">
          <h3 className="font-semibold text-charcoal">Meilleure banque</h3>
          <p className="text-sm text-gray-500">Notre classement</p>
        </a>
      </div>
    </div>
  );
}
