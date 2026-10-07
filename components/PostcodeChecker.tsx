'use client';

import { useState } from 'react';
import { INDUSTRY_LABELS, postcodeVerdict, type Industry, type Subclass } from '@/lib/specified-work';

const ALL_INDUSTRIES = Object.keys(INDUSTRY_LABELS) as Industry[];

const LABEL: Record<string, { text: string; cls: string }> = {
  eligible: { text: 'Counts', cls: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950' },
  'not-eligible': { text: 'Does not count', cls: 'text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950' },
  'industry-not-allowed': { text: 'Not specified work on this visa', cls: 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900' },
  unknown: { text: 'Enter a 4-digit postcode', cls: 'text-slate-500 bg-slate-50 dark:bg-slate-900' },
};

export default function PostcodeChecker() {
  const [postcode, setPostcode] = useState('4870');
  const [subclass, setSubclass] = useState<Subclass>('417');

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Postcode where you work</span>
          <input
            inputMode="numeric"
            maxLength={4}
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/\D/g, ''))}
            className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Postcode"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Your visa</span>
          <select
            value={subclass}
            onChange={e => setSubclass(e.target.value as Subclass)}
            className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="417">Working Holiday (subclass 417)</option>
            <option value="462">Work and Holiday (subclass 462)</option>
          </select>
        </label>
      </div>

      <ul className="mt-5 divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        {ALL_INDUSTRIES.map(ind => {
          const v = postcodeVerdict(subclass, ind, postcode);
          const l = LABEL[v];
          return (
            <li key={ind} className="flex items-center justify-between gap-3 px-3 py-2 text-sm">
              <span className="text-slate-700 dark:text-slate-300">{INDUSTRY_LABELS[ind]}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${l.cls} whitespace-nowrap`}>{l.text}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-slate-400 mt-3">
        Based on the Home Affairs postcode tables last updated 24 September 2026. Bushfire and disaster recovery
        only count for work in declared areas within the dates set by Home Affairs. Always confirm on the official
        page before you apply.
      </p>
    </div>
  );
}
