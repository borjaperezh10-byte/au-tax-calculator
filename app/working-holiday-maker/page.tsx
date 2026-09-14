import type { Metadata } from 'next';
import TaxCalculator from '@/components/TaxCalculator';
import { fmtAUD, calcWHMIncomeTax, WHM_BRACKETS_2627 } from '@/lib/tax';

export const metadata: Metadata = {
  title: 'Working Holiday Maker Tax Calculator Australia 2026-27',
  description:
    'Calculate income tax for working holiday makers (visa 417 & 462) in Australia for 2026-27. 15% tax on first $45,000 — no tax-free threshold. ATO official rates.',
  alternates: { canonical: 'https://www.auincometax.com/working-holiday-maker' },
};

// Pre-compute worked examples
const WHM_EXAMPLES = [20_000, 30_000, 45_000, 60_000, 80_000].map(salary => {
  const tax = calcWHMIncomeTax(salary);
  const net = salary - tax;
  const effective = (tax / salary * 100).toFixed(1);
  return { salary, tax, net, effective };
});

const whmSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the tax rate for working holiday makers in Australia in 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working holiday makers (visa 417 and 462) are taxed at 15% on the first $45,000 of income, then 30% from $45,001–$135,000, 37% from $135,001–$190,000, and 45% above $190,000. There is no tax-free threshold for working holiday makers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do working holiday makers pay Medicare Levy in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most working holiday makers are not entitled to Medicare and therefore do not pay the Medicare Levy. Exceptions exist for travellers from countries with a Reciprocal Health Care Agreement (RHCA) with Australia, such as the UK, New Zealand, and several European nations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can working holiday makers claim the LITO tax offset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Low Income Tax Offset (LITO) is not available to working holiday makers. The flat 15% rate on the first $45,000 already reflects a concessional rate applied to this visa class.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I get superannuation as a working holiday maker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your employer is required to pay super, you are entitled to the Superannuation Guarantee (12% from 1 July 2025) on your ordinary time earnings. You can claim your super back as a Departing Australia Superannuation Payment (DASP) when you leave Australia, though a 65% withholding tax applies to WHM super balances.',
      },
    },
  ],
};

export default function WorkingHolidayMakerPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whmSchema) }}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🎒 Working Holiday Maker · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Working Holiday Maker Tax Calculator 2026-27
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Income tax calculator for visa subclass 417 (Working Holiday) and 462 (Work and Holiday) holders in Australia. Based on ATO Schedule 15 rates — updated for 2026-27.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">

        {/* Key rate banner */}
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <h2 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Key rates for working holiday makers 2026-27</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
              <p className="text-xs text-slate-400 mb-1">First $45,000</p>
              <p className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400">15%</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
              <p className="text-xs text-slate-400 mb-1">Tax-free threshold</p>
              <p className="font-mono text-xl font-bold text-red-500">None</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
              <p className="text-xs text-slate-400 mb-1">LITO offset</p>
              <p className="font-mono text-xl font-bold text-red-500">None</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
              <p className="text-xs text-slate-400 mb-1">Medicare Levy</p>
              <p className="font-mono text-xl font-bold text-slate-700 dark:text-slate-300">Usually 0%</p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Calculate your take-home pay</h2>
          <TaxCalculator initialSalary={45_000} />
          <p className="text-xs text-slate-400 mt-2 pl-1">
            Select &ldquo;Working Holiday&rdquo; under Tax residency above to apply WHM rates.
          </p>
        </section>

        {/* WHM Brackets table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Working Holiday Maker Tax Rates 2026-27</h2>
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
                {WHM_BRACKETS_2627.map(({ range, rate, note }) => (
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
            Source:{' '}
            <a href="https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              ATO — Tax rates for working holiday makers
            </a>
          </p>
        </section>

        {/* Worked examples */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Worked Examples</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Tax calculation for working holiday makers in 2026-27. No Medicare Levy, no LITO, no tax-free threshold.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Salary</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Income tax</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Take-home</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600 dark:text-slate-400">Effective rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {WHM_EXAMPLES.map(ex => (
                  <tr key={ex.salary} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-blue-600 dark:text-blue-400">{fmtAUD(ex.salary)}</td>
                    <td className="px-4 py-3 text-right font-mono text-red-600 dark:text-red-400">{fmtAUD(ex.tax)}</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-emerald-700 dark:text-emerald-300">{fmtAUD(ex.net)}</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-600 dark:text-slate-400">{ex.effective}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'What is the tax rate for working holiday makers in Australia?',
                a: 'Working holiday makers (visa 417 and 462) pay 15% tax on the first $45,000 of taxable income. There is no tax-free threshold — the 15% rate applies from the first dollar. Income above $45,000 is taxed at the same rates as foreign residents: 30% up to $135,000, 37% up to $190,000, and 45% above that.',
              },
              {
                q: 'How is working holiday maker tax different from resident tax?',
                a: `Australian residents benefit from a tax-free threshold ($18,200), the Low Income Tax Offset (LITO), and the Medicare Levy applying at a low 2%. Working holiday makers receive none of these — but the flat 15% rate on the first $45,000 is actually lower than the rate Australian residents pay on income in that range (19% in 2025-26, reduced to 15% from 1 July 2026 under Stage 3 cuts). From 2026-27 the rate is the same 15% for both groups on that bracket.`,
              },
              {
                q: 'Do I pay Medicare Levy as a working holiday maker?',
                a: 'Generally no. Working holiday makers are not entitled to Medicare, so the 2% Medicare Levy does not usually apply. However, if you are from a country with a Reciprocal Health Care Agreement (RHCA) with Australia — including the UK, New Zealand, Belgium, Finland, Italy, Malta, Netherlands, Norway, Slovenia, and Sweden — you may be entitled to some Medicare benefits and could be liable for the levy. Confirm your situation with the ATO.',
              },
              {
                q: 'Can I get my superannuation back when I leave Australia?',
                a: 'Yes. You can claim a Departing Australia Superannuation Payment (DASP) after leaving Australia permanently. However, a withholding tax of 65% applies to WHM super balances when claiming DASP. You must wait until your visa has expired or been cancelled before applying.',
              },
              {
                q: 'Do I need to lodge a tax return as a working holiday maker?',
                a: 'Yes, if you earned any income in Australia, you should lodge a tax return by 31 October following the end of the financial year (30 June). The tax-free threshold does not apply to you, so even low incomes may generate a tax bill or refund. You can use myTax through the ATO\'s online services, or engage a registered tax agent.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{q}</span>
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
          >
            ← Calculator for Australian residents
          </a>
        </div>
      </div>
    </main>
  );
}
