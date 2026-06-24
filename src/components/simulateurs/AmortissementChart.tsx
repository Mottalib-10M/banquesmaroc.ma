'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from 'recharts';

interface ChartData {
  annee: number;
  capital: number;
  interets: number;
  restant: number;
}

function formatDHShort(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value.toString();
}

export default function AmortissementChart({ data }: { data: ChartData[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis
          dataKey="annee"
          tick={{ fontSize: 12 }}
          tickFormatter={(v) => `A${v}`}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          tickFormatter={formatDHShort}
        />
        <Tooltip
          formatter={(value: number, name: string) => {
            const label = name === 'capital' ? 'Capital remboursé' : name === 'interets' ? 'Intérêts' : 'Restant dû';
            return [`${Math.round(value).toLocaleString('fr-FR')} DH`, label];
          }}
          labelFormatter={(label) => `Année ${label}`}
        />
        <Legend
          formatter={(value: string) =>
            value === 'capital' ? 'Capital' : value === 'interets' ? 'Intérêts' : 'Restant dû'
          }
        />
        <Bar dataKey="capital" stackId="a" fill="#1E40AF" radius={[0, 0, 0, 0]} />
        <Bar dataKey="interets" stackId="a" fill="#93C5FD" radius={[4, 4, 0, 0]} />
        <Line type="monotone" dataKey="restant" stroke="#DC2626" strokeWidth={2} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
