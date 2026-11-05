import type { Metadata } from 'next';
import { calculate, fmtAUD } from '@/lib/tax';

export const metadata: Metadata = {
  title: 'Australia Tax Brackets 2026-27',
  description:
    'Australian income tax brackets and rates for 2026-27, resident and non-resident, with the new 15% bracket explained and worked examples.',
  alternates: { canonical: 'https://www.auincometax.com/tax-brackets' },
};

const RESIDENT_BRACKETS = [
  { range: '$0 – $18,200',         rate: '0%',  note: 'Tax-free threshold' },
  { range: '$18,201 – $45,000',    rate: '15%', note: '↓ reduced from 16% in 2025-26' },
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

function SimpleTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            {head.map(h => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-900">
          {rows.map(r => (
            <tr key={r.join('|')}>
              {r.map((c, i) => (
                <td key={i} className="px-4 py-3 text-slate-700 dark:text-slate-300">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TAX_FORMULA = [
  ['$0 to $18,200', 'Nil', 'Nil'],
  ['$18,201 to $45,000', '15c for each $1 over $18,200', '$4,020 at $45,000'],
  ['$45,001 to $135,000', '$4,020 plus 30c for each $1 over $45,000', '$31,020 at $135,000'],
  ['$135,001 to $190,000', '$31,020 plus 37c for each $1 over $135,000', '$51,370 at $190,000'],
  ['$190,001 and over', '$51,370 plus 45c for each $1 over $190,000', ''],
];

const BRACKETS_BY_YEAR = [
  ['2023-24', '19%', '32.5% to $120,000', '37% to $180,000', '45% above $180,000'],
  ['2024-25', '16%', '30% to $135,000', '37% to $190,000', '45% above $190,000'],
  ['2025-26', '16%', '30% to $135,000', '37% to $190,000', '45% above $190,000'],
  ['2026-27', '15%', '30% to $135,000', '37% to $190,000', '45% above $190,000'],
];

const KEEP_PER_1000 = [
  ['15%', '$150', '$20', '$830'],
  ['30%', '$300', '$20', '$680'],
  ['37%', '$370', '$20', '$610'],
  ['45%', '$450', '$20', '$530'],
];

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
            The second income tax bracket (income $18,201–$45,000) was reduced from <strong>16%</strong> to <strong>15%</strong> from 1 July 2026.
            Every resident taxpayer earning above $45,000 saves up to <strong>$268 per year</strong> compared to 2025-26 rates. (The 16% rate itself replaced 19% on 1 July 2024 under the Stage 3 cuts.)
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
            Plus 2% Medicare levy, with reductions for low incomes.
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

        {/* Formula */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">How the ATO states the 2026-27 resident rates</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
The ATO publishes each bracket as a base amount plus a rate on the income above the bracket start. The base is just the tax already owed on all the lower brackets, which is why you can check any result by hand.
</p>
<SimpleTable head={['Taxable income', 'Tax on this income', 'Tax at top of bracket']} rows={TAX_FORMULA} />
<p className="text-xs text-slate-400 mt-2 pl-1">
Source: <a href="https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents" target="_blank" rel="noopener" className="text-blue-500 hover:underline">ATO, tax rates for Australian residents</a>. The rates do not include the 2% Medicare levy.
</p>
</section>

{/* By year */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">How the brackets have changed since 2023-24</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
The first taxed bracket, from $18,201 to $45,000, has fallen from 19% to 16% and now to 15%. The Stage 3 changes in 2024-25 also replaced the 32.5% bracket with a 30% rate up to $135,000 and moved the 37% and 45% thresholds up. The tax-free threshold stayed at $18,200 throughout.
</p>
<SimpleTable head={['Income year', '$18,201 to $45,000', 'Next bracket', 'Third bracket', 'Top bracket']} rows={BRACKETS_BY_YEAR} />
<p className="text-xs text-slate-400 mt-2 pl-1">
Resident rates as listed by the ATO, checked on 5 November 2026. Medicare levy not included.
</p>
</section>

{/* Marginal */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">What each extra $1,000 is worth after tax</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
The marginal rate is the tax on your next dollar. A pay rise never reduces your take-home pay, because only the part above a threshold is taxed at the higher rate.
</p>
<SimpleTable head={['Marginal rate', 'Income tax on $1,000', 'Medicare levy at 2%', 'You keep']} rows={KEEP_PER_1000} />
<p className="text-xs text-slate-400 mt-2 pl-1">
Simple estimate for a resident who pays the full Medicare levy. It ignores LITO phase-out, HELP repayments and the Medicare levy surcharge, which can change the amount you keep. Use the calculator for your own numbers.
</p>
</section>

{/* Working holiday makers */}
<section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Working holiday makers use different rates</h2>
<div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
<p>
If you hold a 417 or 462 visa you are taxed as a working holiday maker on that income. The ATO lists 15% on the first $45,000, then $6,750 plus 30c for each $1 over $45,000 up to $135,000, and the same 37% and 45% rates above that. There is no tax-free threshold.
</p>
<p>
The ATO working holiday maker page currently shows the 2025-26 table, last updated on 1 June 2026, and our calculator applies the same structure to 2026-27. Check the ATO page for any change. See the <a href="/working-holiday-maker" className="text-blue-500 hover:underline">working holiday maker calculator</a> and the <a href="/guides/working-holiday-maker-tax" className="text-blue-500 hover:underline">WHM tax guide</a>.
</p>
</div>
</section>

{/* Common mistakes */}
<section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Common mistakes about tax brackets</h2>
<ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li>Thinking a raise that crosses a threshold makes the whole salary taxed at the higher rate. Only the dollars above the threshold are.</li>
<li>Using gross salary instead of taxable income. Deductions, such as the <a href="/guides/instant-1000-work-deduction" className="text-blue-500 hover:underline">$1,000 standard deduction</a> for eligible residents, lower the income the brackets apply to.</li>
<li>Using resident rates for non-residents or working holiday makers, who have no tax-free threshold.</li>
<li>Forgetting the Medicare levy, which comes on top of the bracket rates.</li>
<li>Confusing the marginal rate with the effective rate. See <a href="/guides/marginal-vs-effective-tax-rate" className="text-blue-500 hover:underline">marginal vs effective tax rate</a>.</li>
</ul>
</section>

{/* Related */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Related pages</h2>
<ul className="list-disc pl-5 text-sm space-y-1">
<li><a href="/salary-table" className="text-blue-500 hover:underline">Take-home pay table for common salaries</a></li>
<li><a href="/guides/how-australian-income-tax-works" className="text-blue-500 hover:underline">How Australian income tax works</a></li>
<li><a href="/guides/tax-deductions-for-employees" className="text-blue-500 hover:underline">Tax deductions for employees</a></li>
<li><a href="/methodology" className="text-blue-500 hover:underline">How the calculator works</a></li>
</ul>
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
        {' '}resident tax rates page, checked on 5 November 2026 (the ATO page was last updated on 13 August 2026). For indicative purposes only — not financial or tax advice.
      </footer>
    </main>
  );
}
