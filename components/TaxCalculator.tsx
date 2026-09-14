'use client';

import { useState, useCallback } from 'react';
import {
  calculate,
  fmtAUD,
  forPeriod,
  PERIOD_LABELS,
  PERIOD_DIVISORS,
  type Period,
  type ResidencyType,
} from '@/lib/tax';

const PERIOD_TABS: { key: Period; label: string }[] = [
  { key: 'hourly',      label: 'Hourly' },
  { key: 'daily',       label: 'Daily' },
  { key: 'weekly',      label: 'Weekly' },
  { key: 'fortnightly', label: 'Fortnightly' },
  { key: 'monthly',     label: 'Monthly' },
  { key: 'annual',      label: 'Annual' },
];

const QUICK_SALARIES = [50_000, 70_000, 100_000, 120_000, 150_000];

const RESIDENCY_OPTIONS: { value: ResidencyType; label: string; title: string }[] = [
  { value: 'resident',        label: '🇦🇺 AU Resident',       title: 'Australian tax resident' },
  { value: 'non-resident',    label: 'Non-Resident',           title: 'Foreign resident for tax purposes' },
  { value: 'working-holiday', label: '🎒 Working Holiday',    title: 'Visa subclass 417 or 462' },
];

export default function TaxCalculator({ initialSalary = 80_000 }: { initialSalary?: number }) {
  const [salary, setSalary]             = useState(initialSalary);
  const [period, setPeriod]             = useState<Period>('annual');
  const [residency, setResidency]       = useState<ResidencyType>('resident');
  const [hecs, setHecs]                 = useState(false);
  const [privateHealth, setPrivate]     = useState(true);
  const [showSuper, setShowSuper]       = useState(false);
  const [workDeduction, setWorkDed]     = useState(false);
  const [salarySacrifice, setSacrifice] = useState(0);
  const [showSacrifice, setShowSacrifice] = useState(false);

  const WORK_DEDUCTION_AMT = 300;
  const result = calculate(
    salary,
    residency,
    hecs,
    privateHealth,
    workDeduction ? WORK_DEDUCTION_AMT : 0,
    showSacrifice ? salarySacrifice : 0,
  );
  const d = (n: number) => forPeriod(n, period);
  const f = (n: number) => fmtAUD(d(n));

  const pct = useCallback((n: number) =>
    salary > 0 ? ((n / salary) * 100).toFixed(0) + '%' : '0%',
  [salary]);

  const taxPct  = salary > 0 ? (result.netIncomeTax / salary * 100) : 0;
  const medPct  = salary > 0 ? ((result.medicareLevy + result.medicareLevySurcharge) / salary * 100) : 0;
  const hecsPct = salary > 0 ? (result.hecsRepayment / salary * 100) : 0;
  const sacPct  = salary > 0 && showSacrifice ? (salarySacrifice / salary * 100) : 0;
  const netPct  = salary > 0 ? (Math.max(0, result.netIncome) / salary * 100) : 100;

  const hourlyNet = result.netIncome / PERIOD_DIVISORS.hourly;
  const isWHM = residency === 'working-holiday';
  const isResident = residency === 'resident';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* ── INPUT ── */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Your Income</p>

        {/* Salary input */}
        <div className="mb-3">
          <label htmlFor="salary-input" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
            Annual gross salary
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-slate-400" aria-hidden="true">$</span>
            <input
              id="salary-input"
              type="number"
              value={salary || ''}
              onChange={e => setSalary(parseFloat(e.target.value) || 0)}
              min={0}
              max={9_999_999}
              step={1000}
              className="w-full pl-9 pr-4 py-3.5 text-2xl font-mono font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              aria-label="Annual gross salary in Australian dollars"
            />
          </div>
        </div>

        {/* Slider */}
        <div className="mb-2">
          <label htmlFor="salary-slider" className="sr-only">Salary slider</label>
          <input
            id="salary-slider"
            type="range"
            min={0}
            max={300_000}
            step={1_000}
            value={Math.min(salary, 300_000)}
            onChange={e => setSalary(parseInt(e.target.value, 10))}
            className="w-full h-2 accent-blue-500 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1" aria-hidden="true">
            <span>$0</span>
            <span>$150K</span>
            <span>$300K</span>
          </div>
        </div>

        {/* Quick-select */}
        <div className="flex flex-wrap gap-1.5 mb-5" role="group" aria-label="Quick salary amounts">
          {QUICK_SALARIES.map(s => (
            <button
              key={s}
              onClick={() => setSalary(s)}
              aria-pressed={salary === s}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                salary === s
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-300'
              }`}
            >
              ${s / 1000}K
            </button>
          ))}
        </div>

        {/* Period */}
        <div className="mb-5">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2" id="period-label">Show results per</p>
          <div
            className="grid grid-cols-3 gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl"
            role="group"
            aria-labelledby="period-label"
          >
            {PERIOD_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                aria-pressed={period === key}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  period === key
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Residency */}
        <div className="mb-5">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2" id="residency-label">Tax residency</p>
          <div className="grid grid-cols-3 gap-2" role="group" aria-labelledby="residency-label">
            {RESIDENCY_OPTIONS.map(({ value, label, title }) => (
              <button
                key={value}
                onClick={() => setResidency(value)}
                title={title}
                aria-pressed={residency === value}
                className={`py-2 text-xs font-medium rounded-xl border-2 transition-all ${
                  residency === value
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    : 'border-slate-200 dark:border-slate-600 text-slate-500 hover:border-slate-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {isWHM && (
            <p className="text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2 mt-2">
              Working holiday maker (visa 417/462). Taxed at 15% on first $45,000. No tax-free threshold.{' '}
              <a href="/working-holiday-maker" className="underline">Learn more →</a>
            </p>
          )}
        </div>

        {/* Toggles */}
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Adjustments</p>
        <div className="space-y-2">
          {isResident && (
            <Toggle
              id="hecs"
              checked={hecs}
              onChange={setHecs}
              name="HECS / HELP debt"
              desc="University loan repayment deducted by employer"
            />
          )}
          {isResident && (
            <Toggle
              id="private"
              checked={privateHealth}
              onChange={setPrivate}
              name="Private hospital cover"
              desc="Avoids Medicare Levy Surcharge (>$105K)"
            />
          )}
          <Toggle
            id="workded"
            checked={workDeduction}
            onChange={setWorkDed}
            name="Claim $300 work expenses"
            desc="ATO allows up to $300 without receipts"
          />
          <Toggle
            id="super"
            checked={showSuper}
            onChange={setShowSuper}
            name="Show employer super (12%)"
            desc="Compulsory super on top of your salary"
          />
          <Toggle
            id="sacrifice"
            checked={showSacrifice}
            onChange={(v) => { setShowSacrifice(v); if (!v) setSacrifice(0); }}
            name="Salary sacrifice (pre-tax super)"
            desc="Extra pre-tax contributions reduce taxable income"
          />
        </div>

        {/* Salary sacrifice amount */}
        {showSacrifice && (
          <div className="mt-3 pl-1">
            <label htmlFor="sacrifice-amount" className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
              Salary sacrifice amount (annual)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400" aria-hidden="true">$</span>
              <input
                id="sacrifice-amount"
                type="number"
                value={salarySacrifice || ''}
                onChange={e => setSacrifice(parseFloat(e.target.value) || 0)}
                min={0}
                max={salary}
                step={500}
                placeholder="0"
                className="w-full pl-7 pr-3 py-2.5 text-sm font-mono text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── RESULTS ── */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Your Take-Home Pay</p>

        {/* Hero */}
        <div className="bg-emerald-50 dark:bg-emerald-950 border-2 border-emerald-500 rounded-2xl p-5 mb-5 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-1">Take-home pay</p>
          <p className="font-mono text-4xl font-bold text-emerald-700 dark:text-emerald-300 leading-none" aria-live="polite" aria-atomic="true">
            {fmtAUD(d(result.netIncome))}
          </p>
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">{PERIOD_LABELS[period]}</p>
          {period !== 'hourly' && (
            <p className="text-xs text-emerald-500 dark:text-emerald-500 mt-1 font-mono">
              = {fmtAUD(hourlyNet)}/hr
            </p>
          )}
          <div className="flex justify-center gap-3 mt-3 flex-wrap">
            <span className="text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full px-3 py-1">
              Effective: <strong>{result.effectiveRate.toFixed(1)}%</strong>
            </span>
            <span className="text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-full px-3 py-1">
              Marginal: <strong>{result.marginalRate}%</strong>
            </span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="mb-5" role="img" aria-label="Income breakdown bar chart">
          <div className="flex h-3 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 mb-2">
            <div className="bg-red-500 h-full transition-all duration-300" style={{ width: `${taxPct}%` }} />
            <div className="bg-blue-500 h-full transition-all duration-300" style={{ width: `${medPct}%` }} />
            {hecs && isResident && <div className="bg-violet-500 h-full transition-all duration-300" style={{ width: `${hecsPct}%` }} />}
            {showSacrifice && <div className="bg-amber-400 h-full transition-all duration-300" style={{ width: `${sacPct}%` }} />}
            <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${netPct}%` }} />
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400" aria-hidden="true">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-500 inline-block" />Take-home</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-500 inline-block" />Tax</span>
            {isResident && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-blue-500 inline-block" />Medicare</span>}
            {hecs && isResident && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-violet-500 inline-block" />HECS</span>}
            {showSacrifice && <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-400 inline-block" />Sacrifice</span>}
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-0.5" aria-label="Tax breakdown details">
          {showSuper && (
            <Row label="Employer super (12% SG)" value={`+${f(result.superEmployer)}`} color="text-amber-600 dark:text-amber-400" dot="bg-amber-500" />
          )}
          <Row label="Gross salary" value={f(result.grossIncome)} />
          {showSacrifice && salarySacrifice > 0 && (
            <Row label={`Salary sacrifice (super)`} value={`−${fmtAUD(d(salarySacrifice))}`} color="text-amber-600 dark:text-amber-400" dot="bg-amber-400" small />
          )}
          {workDeduction && (
            <Row label="Work deduction ($300)" value={`−${fmtAUD(d(WORK_DEDUCTION_AMT))}`} color="text-slate-500 dark:text-slate-400" small />
          )}
          <Row label="Income tax" value={`−${f(result.netIncomeTax)}`} color="text-red-600 dark:text-red-400" dot="bg-red-500" />
          {result.lito > 0 && (
            <Row label="LITO offset" value={`+${fmtAUD(d(result.lito))}`} color="text-emerald-600 dark:text-emerald-400" dot="bg-emerald-500" small />
          )}
          {isResident && (
            <Row label="Medicare levy (2%)" value={`−${f(result.medicareLevy)}`} color="text-blue-600 dark:text-blue-400" dot="bg-blue-500" />
          )}
          {result.medicareLevySurcharge > 0 && (
            <Row label="Medicare Levy Surcharge" value={`−${f(result.medicareLevySurcharge)}`} color="text-blue-600 dark:text-blue-400" dot="bg-blue-500" small />
          )}
          {hecs && isResident && (
            <Row label="HECS / HELP repayment" value={`−${f(result.hecsRepayment)}`} color="text-violet-600 dark:text-violet-400" dot="bg-violet-500" />
          )}
          <div className="!mt-3 pt-3 border-t border-slate-200 dark:border-slate-600">
            <Row label="Net take-home" value={f(result.netIncome)} color="text-emerald-700 dark:text-emerald-300 text-base font-bold" bold />
          </div>
        </div>

        {/* FY badge */}
        <p className="text-xs text-slate-400 mt-4 text-center">
          ATO 2026-27 rates ·{' '}
          <a href="/methodology" className="text-blue-400 hover:underline">How we calculate</a>
          {' '}·{' '}
          <a href="/tax-brackets" className="text-blue-400 hover:underline">Tax brackets</a>
        </p>
      </div>
    </div>
  );
}

function Toggle({
  id, checked, onChange, name, desc,
}: {
  id: string; checked: boolean; onChange: (v: boolean) => void; name: string; desc: string;
}) {
  return (
    <label
      htmlFor={`toggle-${id}`}
      className="flex items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-slate-300 transition-colors"
    >
      <div>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{name}</p>
        <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
      </div>
      <div className="relative flex-shrink-0">
        <input
          id={`toggle-${id}`}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={e => onChange(e.target.checked)}
        />
        <div className="w-10 h-6 bg-slate-300 peer-checked:bg-blue-500 rounded-full transition-colors" />
        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
      </div>
    </label>
  );
}

function Row({
  label, value, color = 'text-slate-800 dark:text-slate-200',
  dot, bold, small,
}: {
  label: string; value: string; color?: string;
  dot?: string; bold?: boolean; small?: boolean;
}) {
  return (
    <div className={`flex justify-between items-center px-2 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${small ? 'opacity-80' : ''}`}>
      <span className={`flex items-center gap-2 text-slate-500 dark:text-slate-400 ${small ? 'text-xs pl-4' : 'text-sm'}`}>
        {dot && <span className={`w-2 h-2 rounded-sm flex-shrink-0 ${dot}`} aria-hidden="true" />}
        {label}
      </span>
      <span className={`font-mono font-semibold tabular-nums ${small ? 'text-xs' : 'text-sm'} ${color} ${bold ? 'text-base' : ''}`}>
        {value}
      </span>
    </div>
  );
}
