'use client';

import { useEffect, useCallback, useRef } from 'react';

/**
 * Reads a URL search param, returning the fallback if absent or invalid.
 */
export function readParam(key: string, fallback: number): number {
  if (typeof window === 'undefined') return fallback;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(key);
  if (raw === null) return fallback;
  const num = parseFloat(raw);
  return isNaN(num) ? fallback : num;
}

/**
 * Reads a URL search param as a string.
 */
export function readParamStr(key: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const params = new URLSearchParams(window.location.search);
  return params.get(key) ?? fallback;
}

/**
 * Pushes a set of key-value pairs into the URL via replaceState.
 * Removes keys whose value matches their default.
 */
export function updateURLParams(entries: Record<string, string | number>, defaults?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(entries)) {
    const strVal = String(value);
    // Remove param if it matches default to keep URLs clean
    if (defaults && String(defaults[key]) === strVal) {
      params.delete(key);
    } else {
      params.set(key, strVal);
    }
  }
  const qs = params.toString();
  const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState(null, '', newUrl);
}

/**
 * Returns the full current URL (for sharing).
 */
export function getCurrentURL(): string {
  if (typeof window === 'undefined') return '';
  return window.location.href;
}

/**
 * Hook that syncs state to URL params with debouncing.
 * Call syncToURL(entries) whenever state changes.
 */
export function useURLSync(defaults?: Record<string, string | number>) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const syncToURL = useCallback(
    (entries: Record<string, string | number>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        updateURLParams(entries, defaults);
      }, 300);
    },
    [defaults]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { syncToURL };
}
