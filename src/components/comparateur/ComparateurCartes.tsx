'use client';

import { useState, useMemo } from 'react';
import { cartes, type CarteComparaison } from '@/data/cartes';
import { formatDH } from '@/lib/format';

type TypeFiltre = 'tous' | 'classique' | 'gold' | 'platinum' | 'infinite';
type TriCritere = 'cotisation' | 'plafondRetraitJour' | 'plafondPaiementMois';

export default function ComparateurCartes() {
  const [typeFiltre, setTypeFiltre] = useState<TypeFiltre>('tous');
  const [tri, setTri] = useState<TriCritere>('cotisation');
  const [triAsc, setTriAsc] = useState(true);

  const cartesFiltrees = useMemo(() => {
    let liste = typeFiltre === 'tous' ? cartes : cartes.filter((c) => c.type === typeFiltre);
    return [...liste].sort((a, b) => {
      const diff = a[tri] - b[tri];
      return triAsc ? diff : -diff;
    });
  }, [typeFiltre, tri, triAsc]);

  const handleSort = (col: TriCritere) => {
    if (tri === col) {
      setTriAsc(!triAsc);
    } else {
      setTri(col);
      setTriAsc(true);
    }
  };

  const SortIcon = ({ col }: { col: TriCritere }) => (
    <span className="ml-1 inline-block">
      {tri === col ? (triAsc ? '\u2191' : '\u2193') : '\u2195'}
    </span>
  );

  return (
    <div>
      {/* Filtres */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
        <div className="flex flex-wrap gap-2">
          {(['tous', 'classique', 'gold', 'platinum', 'infinite'] as TypeFiltre[]).map((type) => (
            <button
              key={type}
              onClick={() => setTypeFiltre(type)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                typeFiltre === type
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-charcoal hover:bg-gray-200'
              }`}
            >
              {type === 'tous' ? 'Toutes' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-500">{cartesFiltrees.length} carte{cartesFiltrees.length > 1 ? 's' : ''} trouv\u00e9e{cartesFiltrees.length > 1 ? 's' : ''}</p>
      </div>

      {/* Tableau desktop */}
      <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-light-gray">
                <th className="text-left px-4 py-3 font-semibold">Banque</th>
                <th className="text-left px-4 py-3 font-semibold">Carte</th>
                <th className="text-left px-4 py-3 font-semibold">Type</th>
                <th className="text-right px-4 py-3 font-semibold cursor-pointer hover:text-brand" onClick={() => handleSort('cotisation')}>
                  Cotisation/an <SortIcon col="cotisation" />
                </th>
                <th className="text-right px-4 py-3 font-semibold cursor-pointer hover:text-brand" onClick={() => handleSort('plafondRetraitJour')}>
                  Retrait/jour <SortIcon col="plafondRetraitJour" />
                </th>
                <th className="text-right px-4 py-3 font-semibold cursor-pointer hover:text-brand" onClick={() => handleSort('plafondPaiementMois')}>
                  Paiement/mois <SortIcon col="plafondPaiementMois" />
                </th>
                <th className="text-center px-4 py-3 font-semibold">Assurance</th>
                <th className="text-center px-4 py-3 font-semibold">Cashback</th>
                <th className="text-center px-4 py-3 font-semibold">International</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cartesFiltrees.map((carte, i) => (
                <CarteRow key={`${carte.banqueId}-${carte.nom}-${i}`} carte={carte} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards mobile */}
      <div className="md:hidden space-y-4">
        {cartesFiltrees.map((carte, i) => (
          <CarteMobileCard key={`${carte.banqueId}-${carte.nom}-${i}`} carte={carte} />
        ))}
      </div>
    </div>
  );
}

function CarteRow({ carte }: { carte: CarteComparaison }) {
  const typeColors: Record<string, string> = {
    classique: 'bg-gray-100 text-gray-700',
    gold: 'bg-yellow-100 text-yellow-800',
    platinum: 'bg-slate-200 text-slate-700',
    infinite: 'bg-purple-100 text-purple-700',
  };

  return (
    <tr className="hover:bg-blue-50/50 transition-colors">
      <td className="px-4 py-3 font-medium">{carte.banqueNom}</td>
      <td className="px-4 py-3">{carte.nom}</td>
      <td className="px-4 py-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[carte.type]}`}>
          {carte.type.charAt(0).toUpperCase() + carte.type.slice(1)}
        </span>
      </td>
      <td className="px-4 py-3 text-right font-semibold">
        {carte.cotisation === 0 ? (
          <span className="text-success">Gratuite</span>
        ) : (
          formatDH(carte.cotisation)
        )}
      </td>
      <td className="px-4 py-3 text-right">{formatDH(carte.plafondRetraitJour)}</td>
      <td className="px-4 py-3 text-right">{formatDH(carte.plafondPaiementMois)}</td>
      <td className="px-4 py-3 text-center">{carte.assuranceVoyage ? <CheckMark /> : <Cross />}</td>
      <td className="px-4 py-3 text-center">{carte.cashback ? <CheckMark /> : <Cross />}</td>
      <td className="px-4 py-3 text-center">{carte.international ? <CheckMark /> : <Cross />}</td>
    </tr>
  );
}

function CarteMobileCard({ carte }: { carte: CarteComparaison }) {
  const typeColors: Record<string, string> = {
    classique: 'bg-gray-100 text-gray-700',
    gold: 'bg-yellow-100 text-yellow-800',
    platinum: 'bg-slate-200 text-slate-700',
    infinite: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-charcoal">{carte.nom}</p>
          <p className="text-sm text-gray-500">{carte.banqueNom}</p>
        </div>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[carte.type]}`}>
          {carte.type.charAt(0).toUpperCase() + carte.type.slice(1)}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-gray-500">Cotisation</span>
          <p className="font-semibold">
            {carte.cotisation === 0 ? <span className="text-success">Gratuite</span> : `${formatDH(carte.cotisation)}/an`}
          </p>
        </div>
        <div>
          <span className="text-gray-500">Retrait/jour</span>
          <p className="font-semibold">{formatDH(carte.plafondRetraitJour)}</p>
        </div>
        <div>
          <span className="text-gray-500">Paiement/mois</span>
          <p className="font-semibold">{formatDH(carte.plafondPaiementMois)}</p>
        </div>
        <div>
          <span className="text-gray-500">Services</span>
          <div className="flex gap-2 mt-0.5">
            {carte.assuranceVoyage && <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Assurance</span>}
            {carte.cashback && <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Cashback</span>}
            {carte.international && <span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">Intl.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckMark() {
  return (
    <svg className="w-5 h-5 text-success inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-gray-300 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
