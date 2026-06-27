interface Tool {
  title: string;
  description: string;
  href: string;
}

const tools: Tool[] = [
  { title: 'Simulateur credit immobilier', description: 'Calculez votre mensualite et le cout total de votre pret immobilier au Maroc.', href: '/simulation-credit-immobilier/' },
  { title: 'Simulateur credit consommation', description: 'Estimez la mensualite et le cout de votre credit a la consommation.', href: '/simulation-credit-consommation/' },
  { title: 'Simulateur leasing auto', description: 'Calculez la mensualite de votre leasing ou LOA automobile au Maroc.', href: '/simulation-leasing/' },
  { title: 'Capacite d\'emprunt', description: 'Evaluez le montant maximum que vous pouvez emprunter selon vos revenus.', href: '/capacite-emprunt/' },
  { title: 'Comparateur de banques', description: 'Comparez les banques marocaines selon les frais, taux et services.', href: '/comparateur-banques/' },
  { title: 'Comparateur de cartes', description: 'Trouvez la carte bancaire la mieux adaptee a votre profil et budget.', href: '/comparateur-cartes/' },
  { title: 'Meilleure banque credit immobilier', description: 'Decouvrez quelle banque offre le meilleur taux immobilier au Maroc.', href: '/guides/meilleure-banque-credit-immobilier/' },
  { title: 'Meilleure banque en ligne', description: 'Comparatif des meilleures banques en ligne disponibles au Maroc.', href: '/guides/meilleure-banque-en-ligne/' },
  { title: 'Guide credit immobilier', description: 'Tout savoir sur le credit immobilier au Maroc : taux, conditions, demarches.', href: '/guides/credit-immobilier-maroc/' },
  { title: 'Choisir sa carte bancaire', description: 'Guide pour choisir la carte bancaire adaptee a vos besoins.', href: '/guides/comment-choisir-carte-bancaire/' },
];

interface RelatedToolsProps {
  currentPath: string;
}

export default function RelatedTools({ currentPath }: RelatedToolsProps) {
  const normCurrent = currentPath.replace(/\/$/, '') || '/';

  const related = tools
    .filter((t) => {
      const normHref = t.href.replace(/\/$/, '') || '/';
      return normHref !== normCurrent;
    })
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-xl font-bold text-charcoal mb-4">
        Outils connexes
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-brand hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-charcoal group-hover:text-brand transition-colors">
              {tool.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
