'use client';

import { useCallback } from 'react';
import { sanitizeNumericInput } from '@/lib/format';

interface ChampMontantProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffixe?: string;
  placeholder?: string;
  id?: string;
  min?: number;
  max?: number;
  aide?: string;
}

export default function ChampMontant({
  label,
  value,
  onChange,
  suffixe = 'DH',
  placeholder = '0',
  id,
  aide,
}: ChampMontantProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const sanitized = sanitizeNumericInput(e.target.value);
      onChange(sanitized);
    },
    [onChange]
  );

  const inputId = id || label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-sm font-medium text-charcoal mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          inputMode="decimal"
          id={inputId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-14 text-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors"
          autoComplete="off"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none">
          {suffixe}
        </span>
      </div>
      {aide && <p className="mt-1 text-xs text-gray-500">{aide}</p>}
    </div>
  );
}
