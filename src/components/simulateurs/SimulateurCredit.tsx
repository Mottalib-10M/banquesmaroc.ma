'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { calculerCoutTotal, calculerTableauAmortissement } from '@/lib/credit-engine';
import { formatDH, formatPourcent, parseInputNumber, sanitizeNumericInput } from '@/lib/format';
import { getBanquesRetail } from '@/data/banques';
import ChampMontant from '@/components/ui/ChampMontant';
import ShareButtons from '@/components/ui/ShareButtons';
import { readParam, readParamStr, useURLSync, getCurrentURL } from '@/hooks/useURLState';
import dynamic from 'next/dynamic';

const AmortissementChart = dynamic(() => import('./AmortissementChart'), { ssr: false });

interface SimulateurCreditProps {
  type: 'immobilier' | 'consommation';
  montantDefaut?: number;
  dureeDefaut?: number;
  tauxDefaut?: number;
}

export default function SimulateurCredit({
  type,
  montantDefaut = type === 'immobilier' ? 800000 : 100000,
  dureeDefaut = type === 'immobilier' ? 20 : 5,
  tauxDefaut = type === 'immobilier' ? 4.75 : 8.0,
}: SimulateurCreditProps) {
  const [montantStr, setMontantStr] = useState(montantDefaut.toString());
  const [dureeAns, setDureeAns] = useState(dureeDefaut);
  const [tauxStr, setTauxStr] = useState(tauxDefaut.toString());
  const [banqueSelectionnee, setBanqueSelectionnee] = useState('');
  const [showTableau, setShowTableau] = useState(false);
  const [comparerMode, setComparerMode] = useState(false);
  const [banque2, setBanque2] = useState('');
  const [banque3, setBanque3] = useState('');

  const banques = useMemo(() => getBanquesRetail().filter(b => b.tauxCredit.immobilier.min > 0), []);
  const maxDuree = type === 'immobilier' ? 25 : 7;

  // URL state: read on mount
  useEffect(() => {
    const m = readParam('montant', montantDefaut);
    const d = readParam('duree', dureeDefaut);
    const t = readParam('taux', tauxDefaut);
    setMontantStr(m.toString());
    setDureeAns(d);
    setTauxStr(t.toString());
  }, [montantDefaut, dureeDefaut, tauxDefaut]);

  // URL state: sync on change
  const urlDefaults = useMemo(() => ({
    montant: montantDefaut,
    duree: dureeDefaut,
    taux: tauxDefaut,
  }), [montantDefaut, dureeDefaut, tauxDefaut]);

  const { syncToURL } = useURLSync(urlDefaults);

  const montant = parseInputNumber(montantStr);
  const taux = parseInputNumber(tauxStr);
  const dureeMois = dureeAns * 12;

  // Sync to URL whenever values change
  useEffect(() => {
    syncToURL({
      montant: montant,
      duree: dureeAns,
      taux: taux,
    });
  }, [montant, dureeAns, taux, syncToURL]);

  const resultat = useMemo(
    () => calculerCoutTotal(montant, taux, dureeMois),
    [montant, taux, dureeMois]
  );

  const tableau = useMemo(
    () => calculerTableauAmortissement(montant, taux, dureeMois),
    [montant, taux, dureeMois]
  );

  // Comparison results
  const getTauxBanque = (banqueId: string) => {
    const b = banques.find(x => x.id === banqueId);
    if (!b) return 0;
    return type === 'immobilier' ? b.tauxCredit.immobilier.min : b.tauxCredit.conso.min;
  };

  const comparaisons = useMemo(() => {
    if (!comparerMode) return [];
    const ids = [banque2, banque3].filter(Boolean);
    return ids.map(id => {
      const t = getTauxBanque(id);
      const r = calculerCoutTotal(montant, t, dureeMois);
      const b = banques.find(x => x.id === id);
      return { banque: b!.nomCourt, taux: t, ...r };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comparerMode, banque2, banque3, montant, dureeMois]);

  const handleBanqueChange = (id: string) => {
    setBanqueSelectionnee(id);
    if (id) {
      const t = getTauxBanque(id);
      if (t > 0) setTauxStr(t.toString());
    }
  };

  // Chart data (yearly summary)
  const chartData = useMemo(() => {
    const years: { annee: number; capital: number; interets: number; restant: number }[] = [];
    for (let y = 1; y <= dureeAns; y++) {
      const moisFin = y * 12;
      const moisDebut = (y - 1) * 12;
      let capitalAnnee = 0;
      let interetsAnnee = 0;
      for (let m = moisDebut; m < moisFin && m < tableau.length; m++) {
        capitalAnnee += tableau[m].partCapital;
        interetsAnnee += tableau[m].partInterets;
      }
      years.push({
        annee: y,
        capital: Math.round(capitalAnnee),
        interets: Math.round(interetsAnnee),
        restant: tableau[Math.min(moisFin - 1, tableau.length - 1)]?.capitalRestant || 0,
      });
    }
    return years;
  }, [tableau, dureeAns]);

  // Share text
  const typeLabel = type === 'immobilier' ? 'credit immobilier' : 'credit consommation';
  const shareText = montant > 0 && taux > 0
    ? `Ma mensualite ${typeLabel} : ${formatDH(resultat.mensualite)}/mois pour ${formatDH(montant)} sur ${dureeAns} ans. Simulez le votre :`
    : '';

  const [shareURL, setShareURL] = useState('');
  useEffect(() => {
    setShareURL(getCurrentURL());
  }, [montant, dureeAns, taux]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg font-bold text-charcoal mb-4">
          Paramètres du {type === 'immobilier' ? 'crédit immobilier' : 'crédit à la consommation'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChampMontant
            label="Montant du crédit"
            value={montantStr}
            onChange={setMontantStr}
            aide={type === 'immobilier' ? 'Montant emprunté après apport personnel' : 'Montant du crédit souhaité'}
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Banque (optionnel)
            </label>
            <select
              value={banqueSelectionnee}
              onChange={(e) => handleBanqueChange(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-brand focus:border-brand outline-none"
            >
              <option value="">Choisir une banque...</option>
              {banques.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.nomCourt} - Taux dès {formatPourcent(type === 'immobilier' ? b.tauxCredit.immobilier.min : b.tauxCredit.conso.min)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Durée : {dureeAns} an{dureeAns > 1 ? 's' : ''} ({dureeMois} mois)
            </label>
            <input
              type="range"
              min={1}
              max={maxDuree}
              value={dureeAns}
              onChange={(e) => setDureeAns(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 an</span>
              <span>{maxDuree} ans</span>
            </div>
          </div>

          <ChampMontant
            label="Taux annuel"
            value={tauxStr}
            onChange={setTauxStr}
            suffixe="%"
            aide="Taux nominal annuel fixe"
          />
        </div>

        <div className="mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={comparerMode}
              onChange={(e) => setComparerMode(e.target.checked)}
              className="w-4 h-4 text-brand rounded focus:ring-brand"
            />
            <span className="text-sm font-medium text-charcoal">Comparer avec d&apos;autres banques</span>
          </label>
        </div>

        {comparerMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-blue-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Banque 2</label>
              <select
                value={banque2}
                onChange={(e) => setBanque2(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none bg-white"
              >
                <option value="">Choisir...</option>
                {banques.map((b) => (
                  <option key={b.id} value={b.id}>{b.nomCourt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Banque 3</label>
              <select
                value={banque3}
                onChange={(e) => setBanque3(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-brand focus:border-brand outline-none bg-white"
              >
                <option value="">Choisir...</option>
                {banques.map((b) => (
                  <option key={b.id} value={b.id}>{b.nomCourt}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Resultats */}
      {montant > 0 && taux > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">Résultats de la simulation</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <ResultCard
              label="Mensualité"
              value={formatDH(resultat.mensualite)}
              highlight
            />
            <ResultCard
              label="Coût total du crédit"
              value={formatDH(resultat.coutTotal)}
            />
            <ResultCard
              label="Coût des intérêts"
              value={formatDH(resultat.coutInterets)}
              sub={`${((resultat.coutInterets / montant) * 100).toFixed(1).replace('.', ',')}% du capital`}
            />
          </div>

          {/* Share buttons */}
          <ShareButtons text={shareText} url={shareURL} />

          {/* Comparaison */}
          {comparerMode && comparaisons.length > 0 && (
            <div className="mb-6 mt-6">
              <h4 className="font-semibold text-charcoal mb-3">Comparaison entre banques</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-light-gray">
                      <th className="text-left px-4 py-2 font-semibold">Banque</th>
                      <th className="text-right px-4 py-2 font-semibold">Taux</th>
                      <th className="text-right px-4 py-2 font-semibold">Mensualité</th>
                      <th className="text-right px-4 py-2 font-semibold">Coût total</th>
                      <th className="text-right px-4 py-2 font-semibold">Économie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-blue-50">
                      <td className="px-4 py-2 font-medium">
                        {banqueSelectionnee ? banques.find(b => b.id === banqueSelectionnee)?.nomCourt : 'Votre taux'}
                      </td>
                      <td className="px-4 py-2 text-right">{formatPourcent(taux)}</td>
                      <td className="px-4 py-2 text-right font-semibold">{formatDH(resultat.mensualite)}</td>
                      <td className="px-4 py-2 text-right">{formatDH(resultat.coutTotal)}</td>
                      <td className="px-4 py-2 text-right">--</td>
                    </tr>
                    {comparaisons.map((c) => (
                      <tr key={c.banque}>
                        <td className="px-4 py-2 font-medium">{c.banque}</td>
                        <td className="px-4 py-2 text-right">{formatPourcent(c.taux)}</td>
                        <td className="px-4 py-2 text-right font-semibold">{formatDH(c.mensualite)}</td>
                        <td className="px-4 py-2 text-right">{formatDH(c.coutTotal)}</td>
                        <td className={`px-4 py-2 text-right font-semibold ${
                          c.coutTotal < resultat.coutTotal ? 'text-success' : c.coutTotal > resultat.coutTotal ? 'text-danger' : ''
                        }`}>
                          {c.coutTotal < resultat.coutTotal
                            ? `-${formatDH(resultat.coutTotal - c.coutTotal)}`
                            : c.coutTotal > resultat.coutTotal
                            ? `+${formatDH(c.coutTotal - resultat.coutTotal)}`
                            : '--'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Chart */}
          {chartData.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-charcoal mb-3">Évolution capital / intérêts par année</h4>
              <div className="h-72">
                <AmortissementChart data={chartData} />
              </div>
            </div>
          )}

          {/* Tableau d'amortissement */}
          <div>
            <button
              onClick={() => setShowTableau(!showTableau)}
              className="flex items-center gap-2 text-brand font-medium hover:text-brand-dark transition-colors"
            >
              <svg className={`w-4 h-4 transition-transform ${showTableau ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
              {showTableau ? 'Masquer' : 'Afficher'} le tableau d&apos;amortissement
            </button>

            {showTableau && (
              <div className="mt-4 overflow-x-auto max-h-96 overflow-y-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="sticky top-0 bg-white">
                    <tr className="bg-light-gray">
                      <th className="px-3 py-2 text-left">Mois</th>
                      <th className="px-3 py-2 text-right">Mensualité</th>
                      <th className="px-3 py-2 text-right">Capital</th>
                      <th className="px-3 py-2 text-right">Intérêts</th>
                      <th className="px-3 py-2 text-right">Restant dû</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tableau.map((row) => (
                      <tr key={row.mois} className={row.mois % 12 === 0 ? 'bg-blue-50/50' : ''}>
                        <td className="px-3 py-1.5">{row.mois}</td>
                        <td className="px-3 py-1.5 text-right">{formatDH(row.mensualite)}</td>
                        <td className="px-3 py-1.5 text-right">{formatDH(row.partCapital)}</td>
                        <td className="px-3 py-1.5 text-right">{formatDH(row.partInterets)}</td>
                        <td className="px-3 py-1.5 text-right">{formatDH(row.capitalRestant)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
}) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? 'bg-brand text-white' : 'bg-light-gray'}`}>
      <p className={`text-sm ${highlight ? 'text-blue-100' : 'text-gray-500'}`}>{label}</p>
      <p className={`text-2xl font-bold mt-1 ${highlight ? 'text-white' : 'text-charcoal'}`}>{value}</p>
      {sub && <p className={`text-xs mt-1 ${highlight ? 'text-blue-200' : 'text-gray-400'}`}>{sub}</p>}
    </div>
  );
}
