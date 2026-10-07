'use client';

import { useState } from 'react';
import { LIMIT_SECTOR_LABELS, limitVerdict, sixMonthLastDay, type LimitSector } from '@/lib/six-month-limit';

const SECTORS = Object.keys(LIMIT_SECTOR_LABELS) as LimitSector[];

const inputCls =
  'mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';

function prettyDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export default function SixMonthChecker() {
  const [sector, setSector] = useState<LimitSector>('other');
  const [postcode, setPostcode] = useState('');
  const [start, setStart] = useState('2026-07-01');

  const verdict = limitVerdict(sector, postcode);
  const lastDay = sixMonthLastDay(start);
  const needsPostcode = sector === 'fishing-pearling' || sector === 'tree-farming' || sector === 'construction' || sector === 'mining';

  let box: { cls: string; title: string; body: string };
  if (verdict === 'exempt-anywhere') {
    box = {
      cls: 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800',
      title: 'No 6-month limit in this sector',
      body: 'Home Affairs lets working holiday makers stay longer than 6 months with one employer in this sector, anywhere in Australia, without asking for permission.',
    };
  } else if (verdict === 'exempt-northern') {
    box = {
      cls: 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800',
      title: 'No 6-month limit at this postcode',
      body: 'This postcode is in Northern Australia, where this sector is exempt. You can stay longer than 6 months with one employer without permission.',
    };
  } else if (verdict === 'unknown') {
    box = {
      cls: 'border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700',
      title: 'Enter the postcode',
      body: 'This sector is only exempt in Northern Australia. Enter the 4-digit postcode where you work.',
    };
  } else {
    box = {
      cls: 'border-amber-300 bg-amber-50 dark:bg-amber-950 dark:border-amber-800',
      title: lastDay ? `Your 6 months end around ${prettyDate(lastDay)}` : 'The 6-month limit applies',
      body: 'To keep working for this employer at this location after that, you need permission from Home Affairs, requested before the 6 months run out. Moving to another location of the same business, or to another employer, starts a new 6 months.',
    };
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <label className="block sm:col-span-3">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">What kind of work is it?</span>
          <select value={sector} onChange={e => setSector(e.target.value as LimitSector)} className={inputCls}>
            {SECTORS.map(s => (
              <option key={s} value={s}>
                {LIMIT_SECTOR_LABELS[s]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">First day with this employer</span>
          <input type="date" value={start} onChange={e => setStart(e.target.value)} className={inputCls} />
        </label>
        <label className={`block ${needsPostcode ? '' : 'opacity-60'}`}>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Postcode where you work</span>
          <input
            inputMode="numeric"
            maxLength={4}
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/\D/g, ''))}
            className={`${inputCls} font-mono`}
            placeholder={needsPostcode ? 'e.g. 4870' : 'Not needed'}
            aria-label="Postcode"
          />
        </label>
      </div>

      <div className={`mt-5 border rounded-xl p-4 ${box.cls}`} role="status">
        <p className="font-semibold text-slate-900 dark:text-white">{box.title}</p>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{box.body}</p>
      </div>
      <p className="text-xs text-slate-400 mt-3">
        Estimate based on the Home Affairs 6-month work limitation page (last updated 21 September 2026, checked 7
        October 2026). The 6 months are counted in months from your first day, not in days or hours worked, and start
        again with each new working holiday visa.
      </p>
    </div>
  );
}
