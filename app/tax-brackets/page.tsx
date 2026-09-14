import type { Metadata } from 'next';
import { calculate, fmtAUD } from '@/lib/tax';

export const metadata: Metadata = {
  title: 'Australia Tax Brackets 2026-27 | Income Tax Rates',
  description:
    'Australia income tax brackets and rates for 2026-27. Includes resident and non-resident rates, what changed from the new 15% bracket, and worked examples for common incomes.',
  alternates: { canonical: 'https://www.auincometax.com/tax-brackets' },
};

const RESIDENT_BRACKETS = [
  { range: '$0 – $18,200',         rate: '0%',  note: 'Tax-free threshold' },
  { range: '$18,201 – $45,000',    rate: '15%', note: '↓ reduced from 19% (Stage 3 cuts)' },
  { range: '$45,001 – $135,000',   rate: '30%', note: '' },
  { range: '$135,001 – $190,000',  rate: '37%', note: '' },
  { range: '$190,001+',            rate: '45%', note: 'Plus 2% Medicare levy' },
];

const NON_RESIDENT_BRACKETS = [
  { range: '$0 – $135,000',       rate: '30%', note: 'No tax-free threshold' },
  { range: '$135,001 – $190,000', rate: '37%', note: '' },
  { range: '$190,001+',           rate: '45%', note: '' },
];

const EXAMPLES = [
  60_000, 80_000, 100_000, 120_000, 150_000, 200_000,
].map(salary => {
  const r = calculate(salary, true, false, true);
  return {
    salary,
    incomeTax: r.netIncomeTax,
    medicare: r.medicareLevy,
    total: r.totalDeductions,
    net: r.netIncome,
    effective: r.effectiveRate,
    marginal: r.marginalRate,
  };
});

export default function TaxBracketsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Australia Income Tax Brackets 2026-27
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Official Australian resident and non-resident income tax rates for the 2026–27 financial year (1 July 2026 – 30 June 2027), including the new 15% second bracket.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

        {/* What changed banner */}
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">🆕 What changed in 2026-27</h2>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            The second income tax bracket (income $18,201–$45,000) was reduced from <strong>19%</strong> to <strong>15%</strong> from 1 July 2026.
            This is part of the Stage 3 tax cuts legislated in 2024. Every resident taxpayer earning above $45,000 saves up to <strong>$804 per year</strong> compared to 2024-25 rates.
            The tax-free threshold and all other brackets remain unchanged.
          </p>
        </div>

        {/* Resident brackets */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Resident Tax Brackets 2026-27</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Taxable income</th>
                  <th className="text-right px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Tax rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {RESIDENT_BRACKETS.map(({ range, rate, note }) => (
                  <tr key={range} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-5 py-3 font-mono text-slate-800 dark:text-slate-200">{range}</td>
                    <td className="px-5 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{rate}</td>
                    <td className="px-5 py-3 text-slate-500 dark:text-slate-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2 pl-1">
            Plus 2% Medicare Levy on all income (over the $28,011 shade-in threshold).
            Low Income Tax Offset (LITO) up to $700 reduces tax payable for incomes below $66,667.
          </p>
        </section>

        {/* Non-resident brackets */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Non-Resident Tax Brackets 2026-27</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Taxable income</th>
                  <th className="text-right px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Tax rate</th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-600 dark:text-slate-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {NON_RESIDENT_BRACKETS.map(({ range, rate, note }) => (
                  <tr key={range} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-5 py-3 font-mono text-slate-800 dark:text-slate-200">{range}</td>
                    <td className="px-5 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{rate}</td>
                    <td className="px-5 py-3 text-slate-500 dark:text-slate-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2 pl-1">
            Non-residents are not entitled to the tax-free threshold, LITO, or Medicare Levy exemptions.
          </p>
        </section>

        {/* Worked examples */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Worked Examples — Common Salaries</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Australian resident, no HECS debt, with private health insurance. Figures include income tax (after LITO) and Medicare levy.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Salary</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Income tax</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Medicare</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Take-home</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Effective rate</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Marginal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {EXAMPLES.map(ex => (
                  <tr key={ex.salary} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-4 py-3">
                      <a href={`/salary/${ex.salary}`} className="font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                        {fmtAUD(ex.salary)}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-red-600 dark:text-red-400">{fmtAUD(ex.incomeTax)}</td>
                    <td className="px-4 py-3 text-right font-mono text-blue-600 dark:text-blue-400">{fmtAUD(ex.medicare)}</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-emerald-700 dark:text-emerald-300">{fmtAUD(ex.net)}</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-600 dark:text-slate-400">{ex.effective.toFixed(1)}%</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-600 dark:text-slate-400">{ex.marginal}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How brackets work */}
        <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">How Australian Tax Brackets Work</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              Australia uses a <strong>progressive tax system</strong> — you only pay the higher rate on the portion of income that falls within each bracket, not on your entire income.
            </p>
            <p>
              For example, on an $80,000 salary in 2026-27: The first $18,200 is tax-free. The next $26,800 (to $45,000) is taxed at 15% = $4,020. The remaining $35,000 (to $80,000) is taxed at 30% = $10,500. Total income tax before offsets = $14,520.
            </p>
            <p>
              The <strong>Low Income Tax Offset (LITO)</strong> further reduces tax for lower incomes — up to $700 off at the maximum.
              The <strong>effective tax rate</strong> is always lower than the marginal rate because lower brackets apply to your first dollars of income.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
          >
            ← Calculate your take-home pay
          </a>
        </div>
      </div>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-8">
        Rates based on{' '}
        <a href="https://www.ato.gov.au" target="_blank" rel="noopener" className="text-blue-500 hover:underline">ATO</a>
        {' '}legislated 2026–27 tables. For indicative purposes only — not financial or tax advice.
      </footer>
    </main>
  );
}
