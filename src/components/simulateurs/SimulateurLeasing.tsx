'use client';

import { useState, useMemo } from 'react';
import { calculerLeasingAuto } from '@/lib/credit-engine';
import { formatDH, formatPourcent, parseInputNumber } from '@/lib/format';
import ChampMontant from '@/components/ui/ChampMontant';

export default function SimulateurLeasing() {
  const [prixStr, setPrixStr] = useState('250000');
  const [apportStr, setApportStr] = useState('50000');
  const [dureeAns, setDureeAns] = useState(5);
  const [tauxStr, setTauxStr] = useState('6.0');
  const [vrStr, setVrStr] = useState('25000');

  const prix = parseInputNumber(prixStr);
  const apport = parseInputNumber(apportStr);
  const taux = parseInputNumber(tauxStr);
  const vr = parseInputNumber(vrStr);
  const dureeMois = dureeAns * 12;

  const resultat = useMemo(
    () => calculerLeasingAuto(prix, apport, taux, dureeMois, vr),
    [prix, apport, taux, dureeMois, vr]
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg font-bold text-charcoal mb-4">Param\u00e8tres du leasing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChampMontant
            label="Prix du v\u00e9hicule TTC"
            value={prixStr}
            onChange={setPrixStr}
            aide="Prix catalogue TTC du v\u00e9hicule"
          />
          <ChampMontant
            label="Apport personnel"
            value={apportStr}
            onChange={setApportStr}
            aide="G\u00e9n\u00e9ralement 10-30% du prix"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Dur\u00e9e : {dureeAns} an{dureeAns > 1 ? 's' : ''} ({dureeMois} mois)
            </label>
            <input
              type="range"
              min={2}
              max={7}
              value={dureeAns}
              onChange={(e) => setDureeAns(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>2 ans</span>
              <span>7 ans</span>
            </div>
          </div>
          <ChampMontant
            label="Taux annuel"
            value={tauxStr}
            onChange={setTauxStr}
            suffixe="%"
            aide="Taux du leasing (5-8% au Maroc)"
          />
          <ChampMontant
            label="Valeur r\u00e9siduelle"
            value={vrStr}
            onChange={setVrStr}
            aide="Montant \u00e0 payer en fin de contrat pour devenir propri\u00e9taire"
          />
        </div>
      </div>

      {prix > 0 && apport < prix && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">R\u00e9sultats du leasing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Mensualit\u00e9" value={formatDH(resultat.mensualite)} highlight />
            <ResultCard label="Montant financ\u00e9" value={formatDH(resultat.montantFinance)} />
            <ResultCard label="Co\u00fbt total" value={formatDH(resultat.coutTotal)} />
            <ResultCard label="Co\u00fbt des int\u00e9r\u00eats" value={formatDH(resultat.coutInterets)} />
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-charcoal mb-2">R\u00e9capitulatif</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Prix du v\u00e9hicule</span>
              <span className="font-semibold text-right">{formatDH(prix)}</span>
              <span className="text-gray-600">Apport</span>
              <span className="font-semibold text-right">{formatDH(apport)} ({((apport / prix) * 100).toFixed(0)}%)</span>
              <span className="text-gray-600">Montant financ\u00e9</span>
              <span className="font-semibold text-right">{formatDH(resultat.montantFinance)}</span>
              <span className="text-gray-600">Taux</span>
              <span className="font-semibold text-right">{formatPourcent(taux)}</span>
              <span className="text-gray-600">Dur\u00e9e</span>
              <span className="font-semibold text-right">{dureeAns} ans ({dureeMois} mois)</span>
              <span className="text-gray-600">Valeur r\u00e9siduelle</span>
              <span className="font-semibold text-right">{formatDH(vr)}</span>
              <div className="col-span-2 border-t border-blue-200 my-2"></div>
              <span className="text-gray-600 font-medium">Total \u00e0 payer</span>
              <span className="font-bold text-brand text-right">{formatDH(resultat.coutTotal)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? 'bg-brand text-white' : 'bg-light-gray'}`}>
      <p className={`text-sm ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>{label}</p>
      <p className={`text-xl font-bold mt-1 ${highlight ? 'text-white' : 'text-charcoal'}`}>{value}</p>
    </div>
  );
}
