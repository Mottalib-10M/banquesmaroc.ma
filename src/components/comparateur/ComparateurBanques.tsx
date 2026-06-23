'use client';

import { useState, useMemo } from 'react';
import { getBanquesRetail, type Banque } from '@/data/banques';
import { formatDH, formatPourcent } from '@/lib/format';

type Critere = 'note' | 'tauxImmobilier' | 'agences' | 'partMarche';
type TypeFiltre = 'tous' | 'universelle' | 'cooperative' | 'specialisee' | 'postale';

function StarRating({ note, max = 10 }: { note: number; max?: number }) {
  const stars = Math.round((note / max) * 5);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${note} sur ${max}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-charcoal">{note}/10</span>
    </div>
  );
}

export default function ComparateurBanques() {
  const [typeFiltre, setTypeFiltre] = useState<TypeFiltre>('tous');
  const [critere, setCritere] = useState<Critere>('note');
  const [selectedBanques, setSelectedBanques] = useState<string[]>([]);

  const banquesRetail = useMemo(() => getBanquesRetail(), []);

  const banquesFiltrees = useMemo(() => {
    let liste = banquesRetail;
    if (typeFiltre !== 'tous') {
      liste = liste.filter((b) => b.type === typeFiltre);
    }
    return [...liste].sort((a, b) => {
      switch (critere) {
        case 'note':
          return b.note - a.note;
        case 'tauxImmobilier':
          return a.tauxCredit.immobilier.min - b.tauxCredit.immobilier.min;
        case 'agences':
          return b.agences - a.agences;
        case 'partMarche':
          return b.partMarche - a.partMarche;
        default:
          return 0;
      }
    });
  }, [banquesRetail, typeFiltre, critere]);

  const toggleSelection = (id: string) => {
    setSelectedBanques((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const banquesComparees = banquesRetail.filter((b) => selectedBanques.includes(b.id));

  return (
    <div>
      {/* Filtres */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-charcoal mb-2">Type de banque</label>
            <select
              value={typeFiltre}
              onChange={(e) => setTypeFiltre(e.target.value as TypeFiltre)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none"
            >
              <option value="tous">Toutes les banques</option>
              <option value="universelle">Banque universelle</option>
              <option value="cooperative">Banque coop\u00e9rative</option>
              <option value="specialisee">Banque sp\u00e9cialis\u00e9e</option>
              <option value="postale">Banque postale</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-charcoal mb-2">Trier par</label>
            <select
              value={critere}
              onChange={(e) => setCritere(e.target.value as Critere)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none"
            >
              <option value="note">Meilleure note</option>
              <option value="tauxImmobilier">Meilleur taux immobilier</option>
              <option value="agences">Plus grand r\u00e9seau</option>
              <option value="partMarche">Part de march\u00e9</option>
            </select>
          </div>
        </div>
        {selectedBanques.length > 0 && (
          <p className="mt-3 text-sm text-brand font-medium">
            {selectedBanques.length}/3 banque{selectedBanques.length > 1 ? 's' : ''} s\u00e9lectionn\u00e9e{selectedBanques.length > 1 ? 's' : ''} pour la comparaison
          </p>
        )}
      </div>

      {/* Liste des banques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {banquesFiltrees.map((banque) => (
          <BanqueCard
            key={banque.id}
            banque={banque}
            selected={selectedBanques.includes(banque.id)}
            onToggle={() => toggleSelection(banque.id)}
            disabled={!selectedBanques.includes(banque.id) && selectedBanques.length >= 3}
          />
        ))}
      </div>

      {/* Tableau de comparaison */}
      {banquesComparees.length >= 2 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-brand px-6 py-4">
            <h3 className="text-lg font-bold text-white">Comparaison d\u00e9taill\u00e9e</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light-gray">
                  <th className="text-left px-4 py-3 font-semibold text-charcoal">Crit\u00e8re</th>
                  {banquesComparees.map((b) => (
                    <th key={b.id} className="text-center px-4 py-3 font-semibold text-charcoal">{b.nomCourt}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <CompaRow label="Note" values={banquesComparees.map((b) => `${b.note}/10`)} best="max" rawValues={banquesComparees.map((b) => b.note)} />
                <CompaRow label="Part de march\u00e9" values={banquesComparees.map((b) => formatPourcent(b.partMarche))} best="max" rawValues={banquesComparees.map((b) => b.partMarche)} />
                <CompaRow label="Agences" values={banquesComparees.map((b) => b.agences.toLocaleString('fr-FR'))} best="max" rawValues={banquesComparees.map((b) => b.agences)} />
                <CompaRow label="Taux immo. min" values={banquesComparees.map((b) => formatPourcent(b.tauxCredit.immobilier.min))} best="min" rawValues={banquesComparees.map((b) => b.tauxCredit.immobilier.min)} />
                <CompaRow label="Taux immo. max" values={banquesComparees.map((b) => formatPourcent(b.tauxCredit.immobilier.max))} best="min" rawValues={banquesComparees.map((b) => b.tauxCredit.immobilier.max)} />
                <CompaRow label="Taux conso min" values={banquesComparees.map((b) => formatPourcent(b.tauxCredit.conso.min))} best="min" rawValues={banquesComparees.map((b) => b.tauxCredit.conso.min)} />
                <CompaRow label="Carte classique" values={banquesComparees.map((b) => {
                  const c = b.cartes.find((x) => x.type === 'classique');
                  return c ? formatDH(c.cotisation) : 'N/A';
                })} best="min" rawValues={banquesComparees.map((b) => {
                  const c = b.cartes.find((x) => x.type === 'classique');
                  return c ? c.cotisation : 999999;
                })} />
                <CompaRow label="Carte Gold" values={banquesComparees.map((b) => {
                  const c = b.cartes.find((x) => x.type === 'gold');
                  return c ? formatDH(c.cotisation) : 'N/A';
                })} best="min" rawValues={banquesComparees.map((b) => {
                  const c = b.cartes.find((x) => x.type === 'gold');
                  return c ? c.cotisation : 999999;
                })} />
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function BanqueCard({
  banque,
  selected,
  onToggle,
  disabled,
}: {
  banque: Banque;
  selected: boolean;
  onToggle: () => void;
  disabled: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl border-2 p-5 transition-all ${
        selected ? 'border-brand shadow-md' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-charcoal text-base">{banque.nomCourt}</h3>
          <p className="text-xs text-gray-500">{banque.nom}</p>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          banque.type === 'universelle' ? 'bg-blue-100 text-blue-700' :
          banque.type === 'cooperative' ? 'bg-green-100 text-green-700' :
          banque.type === 'specialisee' ? 'bg-amber-100 text-amber-700' :
          'bg-purple-100 text-purple-700'
        }`}>
          {banque.type === 'universelle' ? 'Universelle' :
           banque.type === 'cooperative' ? 'Coop\u00e9rative' :
           banque.type === 'specialisee' ? 'Sp\u00e9cialis\u00e9e' : 'Postale'}
        </span>
      </div>

      <StarRating note={banque.note} />

      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-gray-500">Taux immo.</span>
          <p className="font-semibold text-brand">{formatPourcent(banque.tauxCredit.immobilier.min)}</p>
        </div>
        <div>
          <span className="text-gray-500">Agences</span>
          <p className="font-semibold">{banque.agences.toLocaleString('fr-FR')}</p>
        </div>
        <div>
          <span className="text-gray-500">Part march\u00e9</span>
          <p className="font-semibold">{formatPourcent(banque.partMarche, 1)}</p>
        </div>
        <div>
          <span className="text-gray-500">Carte min.</span>
          <p className="font-semibold">
            {banque.cartes.length > 0
              ? formatDH(Math.min(...banque.cartes.map((c) => c.cotisation)))
              : 'N/A'}
          </p>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        <p className="text-success font-medium">+ {banque.avantages[0]}</p>
        <p className="text-danger font-medium mt-1">- {banque.inconvenients[0]}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onToggle}
          disabled={disabled && !selected}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            selected
              ? 'bg-brand text-white hover:bg-brand-dark'
              : disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-50 text-brand hover:bg-blue-100'
          }`}
        >
          {selected ? 'S\u00e9lectionn\u00e9e' : 'Comparer'}
        </button>
        <a
          href={`/banques/${banque.id}/`}
          className="px-3 py-2 text-sm font-medium text-charcoal border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          D\u00e9tail
        </a>
      </div>
    </div>
  );
}

function CompaRow({
  label,
  values,
  best,
  rawValues,
}: {
  label: string;
  values: string[];
  best: 'min' | 'max';
  rawValues: number[];
}) {
  const bestVal = best === 'min' ? Math.min(...rawValues) : Math.max(...rawValues);

  return (
    <tr>
      <td className="px-4 py-3 font-medium text-charcoal">{label}</td>
      {values.map((v, i) => (
        <td
          key={i}
          className={`px-4 py-3 text-center ${
            rawValues[i] === bestVal ? 'text-success font-bold' : ''
          }`}
        >
          {v}
        </td>
      ))}
    </tr>
  );
}
