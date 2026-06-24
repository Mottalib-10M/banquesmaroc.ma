'use client';

import { useState, useMemo } from 'react';
import { calculerCapaciteEmprunt, calculerMensualite } from '@/lib/credit-engine';
import { formatDH, formatPourcent, parseInputNumber } from '@/lib/format';
import ChampMontant from '@/components/ui/ChampMontant';
import dynamic from 'next/dynamic';

const CapaciteChart = dynamic(() => import('./CapaciteChart'), { ssr: false });

export default function CapaciteEmpruntComponent() {
  const [revenuStr, setRevenuStr] = useState('15000');
  const [chargesStr, setChargesStr] = useState('0');
  const [tauxEndettement, setTauxEndettement] = useState(45);
  const [tauxStr, setTauxStr] = useState('4.75');
  const [dureeAns, setDureeAns] = useState(20);

  const revenu = parseInputNumber(revenuStr);
  const charges = parseInputNumber(chargesStr);
  const taux = parseInputNumber(tauxStr);
  const dureeMois = dureeAns * 12;
  const te = tauxEndettement / 100;

  const capacite = useMemo(
    () => calculerCapaciteEmprunt(revenu, charges, te, taux, dureeMois),
    [revenu, charges, te, taux, dureeMois]
  );

  const mensualiteMax = revenu * te - charges;
  const mensualiteCalculee = capacite > 0 ? calculerMensualite(capacite, taux, dureeMois) : 0;

  // Chart: capacite par duree
  const chartData = useMemo(() => {
    const durees = [5, 10, 15, 20, 25];
    return durees.map((d) => ({
      duree: `${d} ans`,
      capacite: calculerCapaciteEmprunt(revenu, charges, te, taux, d * 12),
    }));
  }, [revenu, charges, te, taux]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg font-bold text-charcoal mb-4">Vos revenus et charges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChampMontant
            label="Revenu mensuel net"
            value={revenuStr}
            onChange={setRevenuStr}
            aide="Salaire net + autres revenus réguliers"
          />
          <ChampMontant
            label="Charges mensuelles"
            value={chargesStr}
            onChange={setChargesStr}
            aide="Crédits en cours, pensions, etc."
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Taux d&apos;endettement : {tauxEndettement}%
            </label>
            <input
              type="range"
              min={20}
              max={45}
              value={tauxEndettement}
              onChange={(e) => setTauxEndettement(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>20%</span>
              <span>45% (max BAM)</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Bank Al-Maghrib limite le taux d&apos;endettement à 45% maximum.
            </p>
          </div>
          <ChampMontant
            label="Taux du crédit"
            value={tauxStr}
            onChange={setTauxStr}
            suffixe="%"
            aide="Taux nominal annuel estimé"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-charcoal mb-1">
              Durée : {dureeAns} an{dureeAns > 1 ? 's' : ''}
            </label>
            <input
              type="range"
              min={5}
              max={25}
              value={dureeAns}
              onChange={(e) => setDureeAns(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5 ans</span>
              <span>25 ans</span>
            </div>
          </div>
        </div>
      </div>

      {revenu > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">Votre capacité d&apos;emprunt</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg p-4 bg-brand text-white">
              <p className="text-sm text-blue-100">Montant empruntable</p>
              <p className="text-2xl font-bold mt-1">{formatDH(capacite)}</p>
            </div>
            <div className="rounded-lg p-4 bg-light-gray">
              <p className="text-sm text-gray-500">Mensualité max</p>
              <p className="text-2xl font-bold mt-1 text-charcoal">{formatDH(Math.max(0, mensualiteMax))}</p>
            </div>
            <div className="rounded-lg p-4 bg-light-gray">
              <p className="text-sm text-gray-500">Mensualité calculée</p>
              <p className="text-2xl font-bold mt-1 text-charcoal">{formatDH(mensualiteCalculee)}</p>
            </div>
          </div>

          {/* Detail */}
          <div className="p-4 bg-blue-50 rounded-lg mb-6">
            <h4 className="font-semibold text-charcoal mb-2">Détail du calcul</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Revenu mensuel net</span>
              <span className="font-semibold text-right">{formatDH(revenu)}</span>
              <span className="text-gray-600">Charges mensuelles</span>
              <span className="font-semibold text-right">{formatDH(charges)}</span>
              <span className="text-gray-600">Taux d&apos;endettement</span>
              <span className="font-semibold text-right">{formatPourcent(tauxEndettement, 0)}</span>
              <span className="text-gray-600">Mensualité maximale</span>
              <span className="font-semibold text-right">{formatDH(Math.max(0, mensualiteMax))}</span>
              <span className="text-gray-600">Taux du crédit</span>
              <span className="font-semibold text-right">{formatPourcent(taux)}</span>
              <span className="text-gray-600">Durée</span>
              <span className="font-semibold text-right">{dureeAns} ans</span>
              <div className="col-span-2 border-t border-blue-200 my-2"></div>
              <span className="text-gray-600 font-medium">Capacité d&apos;emprunt</span>
              <span className="font-bold text-brand text-right text-lg">{formatDH(capacite)}</span>
            </div>
          </div>

          {/* Chart */}
          <div>
            <h4 className="font-semibold text-charcoal mb-3">Impact de la durée sur la capacité d&apos;emprunt</h4>
            <div className="h-64">
              <CapaciteChart data={chartData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
