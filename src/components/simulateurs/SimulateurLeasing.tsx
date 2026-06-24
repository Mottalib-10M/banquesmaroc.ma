'use client';

import { useState, useMemo, useEffect } from 'react';
import { calculerLeasingAuto } from '@/lib/credit-engine';
import { formatDH, formatPourcent, parseInputNumber } from '@/lib/format';
import ChampMontant from '@/components/ui/ChampMontant';
import ShareButtons from '@/components/ui/ShareButtons';
import { readParam, useURLSync, getCurrentURL } from '@/hooks/useURLState';

const DEFAULTS = {
  prix: 250000,
  apport: 50000,
  duree: 5,
  taux: 6.0,
  vr: 25000,
};

export default function SimulateurLeasing() {
  const [prixStr, setPrixStr] = useState(DEFAULTS.prix.toString());
  const [apportStr, setApportStr] = useState(DEFAULTS.apport.toString());
  const [dureeAns, setDureeAns] = useState(DEFAULTS.duree);
  const [tauxStr, setTauxStr] = useState(DEFAULTS.taux.toString());
  const [vrStr, setVrStr] = useState(DEFAULTS.vr.toString());

  // URL state: read on mount
  useEffect(() => {
    setPrixStr(readParam('prix', DEFAULTS.prix).toString());
    setApportStr(readParam('apport', DEFAULTS.apport).toString());
    setDureeAns(readParam('duree', DEFAULTS.duree));
    setTauxStr(readParam('taux', DEFAULTS.taux).toString());
    setVrStr(readParam('vr', DEFAULTS.vr).toString());
  }, []);

  // URL state: sync on change
  const { syncToURL } = useURLSync(DEFAULTS);

  const prix = parseInputNumber(prixStr);
  const apport = parseInputNumber(apportStr);
  const taux = parseInputNumber(tauxStr);
  const vr = parseInputNumber(vrStr);
  const dureeMois = dureeAns * 12;

  useEffect(() => {
    syncToURL({ prix, apport, duree: dureeAns, taux, vr });
  }, [prix, apport, dureeAns, taux, vr, syncToURL]);

  const resultat = useMemo(
    () => calculerLeasingAuto(prix, apport, taux, dureeMois, vr),
    [prix, apport, taux, dureeMois, vr]
  );

  // Share
  const hasResults = prix > 0 && apport < prix;
  const shareText = hasResults
    ? `Ma mensualite leasing auto : ${formatDH(resultat.mensualite)}/mois pour un vehicule a ${formatDH(prix)} sur ${dureeAns} ans. Simulez le votre :`
    : '';

  const [shareURL, setShareURL] = useState('');
  useEffect(() => {
    setShareURL(getCurrentURL());
  }, [prix, apport, dureeAns, taux, vr]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg font-bold text-charcoal mb-4">Paramètres du leasing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChampMontant
            label="Prix du véhicule TTC"
            value={prixStr}
            onChange={setPrixStr}
            aide="Prix catalogue TTC du véhicule"
          />
          <ChampMontant
            label="Apport personnel"
            value={apportStr}
            onChange={setApportStr}
            aide="Généralement 10-30% du prix"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Durée : {dureeAns} an{dureeAns > 1 ? 's' : ''} ({dureeMois} mois)
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
            label="Valeur résiduelle"
            value={vrStr}
            onChange={setVrStr}
            aide="Montant à payer en fin de contrat pour devenir propriétaire"
          />
        </div>
      </div>

      {hasResults && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">Résultats du leasing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Mensualité" value={formatDH(resultat.mensualite)} highlight />
            <ResultCard label="Montant financé" value={formatDH(resultat.montantFinance)} />
            <ResultCard label="Coût total" value={formatDH(resultat.coutTotal)} />
            <ResultCard label="Coût des intérêts" value={formatDH(resultat.coutInterets)} />
          </div>

          {/* Share buttons */}
          <ShareButtons text={shareText} url={shareURL} />

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-charcoal mb-2">Récapitulatif</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Prix du véhicule</span>
              <span className="font-semibold text-right">{formatDH(prix)}</span>
              <span className="text-gray-600">Apport</span>
              <span className="font-semibold text-right">{formatDH(apport)} ({((apport / prix) * 100).toFixed(0)}%)</span>
              <span className="text-gray-600">Montant financé</span>
              <span className="font-semibold text-right">{formatDH(resultat.montantFinance)}</span>
              <span className="text-gray-600">Taux</span>
              <span className="font-semibold text-right">{formatPourcent(taux)}</span>
              <span className="text-gray-600">Durée</span>
              <span className="font-semibold text-right">{dureeAns} ans ({dureeMois} mois)</span>
              <span className="text-gray-600">Valeur résiduelle</span>
              <span className="font-semibold text-right">{formatDH(vr)}</span>
              <div className="col-span-2 border-t border-blue-200 my-2"></div>
              <span className="text-gray-600 font-medium">Total à payer</span>
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
