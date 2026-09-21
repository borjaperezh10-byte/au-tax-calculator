'use client';

import { useState } from 'react';
import { fmtAUD } from '@/lib/tax';

/* ------------------------------------------------------------------ *
 * HECS/HELP compulsory repayment — MARGINAL system, FY 2026-27.
 *
 * From 1 July 2025 the compulsory repayment is no longer a flat
 * percentage of the whole repayment income. It is charged only on the
 * income ABOVE the first threshold, at marginal rates — except the top
 * band, which the ATO defines as a flat 10% of TOTAL repayment income.
 *
 * Source: ATO — "Study and training loan repayment thresholds and
 * rates", 2026-27 (Table 1):
 *   $0        – $69,528  : Nil
 *   $69,529   – $129,717 : 15c for each $1 over $69,528
 *   $129,718  – $186,050 : $9,028 + 17c for each $1 over $129,717
 *   $186,051  and over   : 10% of total repayment income
 * https://www.ato.gov.au/tax-rates-and-codes/study-and-training-support-loans-rates-and-repayment-thresholds
 *
 * The $9,028 base is exactly 15% of the first band's span
 * (($129,717 − $69,528) × 15% = $9,028), so the schedule is continuous.
 * ------------------------------------------------------------------ */

const FIRST_THRESHOLD = 69_528;
const BAND2_TOP = 129_717;
const BAND3_TOP = 186_050;
const BAND2_RATE = 0.15;
const BAND3_RATE = 0.17;
const BAND3_BASE = 9_028; // 15% on the whole first band
const TOP_RATE = 0.10; // applied to TOTAL income, not the excess

/** Annual compulsory repayment for a given repayment income (2026-27). */
function repaymentFor(income: number): number {
  if (income <= FIRST_THRESHOLD) return 0;
  if (income <= BAND2_TOP) return (income - FIRST_THRESHOLD) * BAND2_RATE;
  if (income <= BAND3_TOP) return BAND3_BASE + (income - BAND2_TOP) * BAND3_RATE;
  return income * TOP_RATE;
}

/** The marginal rate the next dollar of income is effectively charged at. */
function marginalRate(income: number): number {
  if (income <= FIRST_THRESHOLD) return 0;
  if (income <= BAND2_TOP) return 15;
  if (income <= BAND3_TOP) return 17;
  return 10;
}

function parseNum(v: string): number {
  const n = parseFloat(v.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export default function HecsHelpCalculator() {
  // Realistic example values so the tool shows a working result at rest.
  const [incomeStr, setIncomeStr] = useState('90,000');
  const [balanceStr, setBalanceStr] = useState('25,000');

  const income = parseNum(incomeStr);
  const balance = parseNum(balanceStr);

  const annual = repaymentFor(income);
  const rate = marginalRate(income);
  const effectiveRate = income > 0 ? (annual / income) * 100 : 0;

  // Years to clear, ignoring indexation and any voluntary repayments.
  const yearsToClear =
    annual > 0 && balance > 0 ? Math.ceil(balance / annual) : null;

  // Per-band explanation of how the annual figure is built.
  const bandRows: { label: string; detail: string; amount: number }[] = [];
  if (income <= FIRST_THRESHOLD) {
    bandRows.push({
      label: `Below ${fmtAUD(FIRST_THRESHOLD)}`,
      detail: 'No compulsory repayment is required at this income.',
      amount: 0,
    });
  } else if (income <= BAND2_TOP) {
    bandRows.push({
      label: `15% band`,
      detail: `15% × (${fmtAUD(income)} − ${fmtAUD(FIRST_THRESHOLD)})`,
      amount: (income - FIRST_THRESHOLD) * BAND2_RATE,
    });
  } else if (income <= BAND3_TOP) {
    bandRows.push({
      label: `First band (built into base)`,
      detail: `15% on the ${fmtAUD(FIRST_THRESHOLD)}–${fmtAUD(BAND2_TOP)} span`,
      amount: BAND3_BASE,
    });
    bandRows.push({
      label: `17% band`,
      detail: `17% × (${fmtAUD(income)} − ${fmtAUD(BAND2_TOP)})`,
      amount: (income - BAND2_TOP) * BAND3_RATE,
    });
  } else {
    bandRows.push({
      label: `Top band — 10% of total`,
      detail: `Above ${fmtAUD(BAND3_TOP + 1)}, the ATO charges a flat 10% of your whole repayment income`,
      amount: income * TOP_RATE,
    });
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6">
      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Your repayment income
          </span>
          <div className="relative mt-1.5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <input
              inputMode="numeric"
              value={incomeStr}
              onChange={e => setIncomeStr(e.target.value)}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Repayment income in Australian dollars"
            />
          </div>
          <span className="text-xs text-slate-400 mt-1 block">
            Roughly your taxable income, plus any reportable super, fringe benefits or net
            investment losses. See the notes below.
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Your current HELP balance <span className="text-slate-400 font-normal">(optional)</span>
          </span>
          <div className="relative mt-1.5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
            <input
              inputMode="numeric"
              value={balanceStr}
              onChange={e => setBalanceStr(e.target.value)}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Current HELP balance in Australian dollars"
            />
          </div>
          <span className="text-xs text-slate-400 mt-1 block">
            For the &ldquo;years to clear&rdquo; estimate. Leave blank if you only want the
            repayment figure.
          </span>
        </label>
      </div>

      {/* Headline results */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">Compulsory repayment / year</p>
          <p className="font-mono font-bold text-lg text-blue-900 dark:text-blue-100 tabular-nums">
            {fmtAUD(annual)}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-slate-400 mb-1">Per fortnight</p>
          <p className="font-mono font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {fmtAUD(annual / 26)}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-slate-400 mb-1">Per month</p>
          <p className="font-mono font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {fmtAUD(annual / 12)}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <p className="text-xs text-slate-400 mb-1">Repayment rate</p>
          <p className="font-mono font-bold text-lg text-slate-900 dark:text-white tabular-nums">
            {rate}% <span className="text-xs font-normal text-slate-400">({effectiveRate.toFixed(1)}% of total)</span>
          </p>
        </div>
      </div>

      {/* How it's built */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          How this is calculated
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <tbody>
              {bandRows.map(row => (
                <tr key={row.label} className="border-t border-slate-200 dark:border-slate-700 first:border-t-0">
                  <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">{row.label}</td>
                  <td className="px-3 py-2 text-slate-500 dark:text-slate-400">{row.detail}</td>
                  <td className="px-3 py-2 font-mono tabular-nums text-right font-semibold text-slate-900 dark:text-white whitespace-nowrap">{fmtAUD(row.amount)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900">
                <td className="px-3 py-2 font-bold text-slate-900 dark:text-white" colSpan={2}>Total compulsory repayment</td>
                <td className="px-3 py-2 font-mono tabular-nums text-right font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">{fmtAUD(annual)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Years to clear */}
      {yearsToClear !== null && (
        <div className="mt-6 border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            At this repayment income, a {fmtAUD(balance)} HELP balance would take roughly{' '}
            <strong className="text-slate-900 dark:text-white">
              {yearsToClear} {yearsToClear === 1 ? 'year' : 'years'}
            </strong>{' '}
            to clear through compulsory repayments alone.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
            This is a rough figure <em>before indexation</em>. Your remaining balance is indexed
            each 1 June in line with wage growth, which stretches the real timeline a little;
            voluntary repayments and pay rises shorten it. It also assumes your repayment income
            stays the same each year.
          </p>
        </div>
      )}

      {income > FIRST_THRESHOLD && income <= FIRST_THRESHOLD + 5000 && (
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          You&rsquo;ve just crossed the {fmtAUD(FIRST_THRESHOLD)} threshold, so only the income
          above it is counted — the repayment starts small and rises gradually, not in a cliff.
        </p>
      )}

      <p className="mt-5 text-xs text-slate-400">
        Estimate only, for the 2026-27 income year. The ATO calculates your actual compulsory
        repayment when you lodge your tax return. Full workings and sources on our{' '}
        <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
      </p>
    </div>
  );
}
