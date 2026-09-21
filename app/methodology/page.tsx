import type { Metadata } from 'next';
import { LAST_REVIEWED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Methodology — How We Calculate Australian Income Tax',
  description:
    'How auincometax.com calculates income tax, Medicare levy, HECS/HELP, and super for 2026-27. Sources, formulas, calculation steps, and our corrections policy.',
  // Relative — resolved against metadataBase in app/layout.tsx, same pattern
  // as every other page (the absolute URL here was inherited from before
  // metadataBase existed and is no longer needed).
  alternates: { canonical: '/methodology' },
  openGraph: {
    url: '/methodology',
    title: 'Methodology — How We Calculate Australian Income Tax',
    description:
      'Sources, formulas, and calculation steps behind every figure on auincometax.com, plus how to report an error.',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Methodology</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            How we calculate Australian income tax, Medicare levy, HECS/HELP, and superannuation for 2026-27.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-sm text-blue-800 dark:text-blue-300">
          <p>
            All rates, thresholds, and offsets below are sourced from the ATO and Australian Treasury as legislated for the 2026-27 financial year (1 July 2026 – 30 June 2027). Estimated figures are clearly marked.
          </p>
        </section>

        {/* Sources */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Primary sources</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {[
              {
                label: 'Resident income tax rates',
                url: 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents',
                text: 'ATO — Tax rates for Australian residents',
              },
              {
                label: 'Non-resident income tax rates',
                url: 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-foreign-residents',
                text: 'ATO — Tax rates for foreign residents',
              },
              {
                label: 'Working holiday maker rates',
                url: 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers',
                text: 'ATO — Tax rates for working holiday makers (Schedule 15)',
              },
              {
                label: 'Low Income Tax Offset (LITO)',
                url: 'https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/tax-offsets/low-income-tax-offset',
                text: 'ATO — Low Income Tax Offset',
              },
              {
                label: 'Medicare Levy',
                url: 'https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy',
                text: 'ATO — Medicare Levy',
              },
              {
                label: 'Medicare Levy Surcharge',
                url: 'https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy-surcharge',
                text: 'ATO — Medicare Levy Surcharge',
              },
              {
                label: 'HECS/HELP repayment rates',
                url: 'https://www.ato.gov.au/individuals-and-families/study-and-training-support/higher-education-loan-program-help',
                text: 'ATO — Higher Education Loan Program (HELP)',
              },
              {
                label: 'Superannuation Guarantee rate',
                url: 'https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-much-super-to-pay',
                text: 'ATO — How much super to pay',
              },
              {
                label: 'Stage 3 tax cuts (2026-27 15% bracket)',
                url: 'https://treasury.gov.au/tax/personal-income-tax-cuts',
                text: 'Treasury — Personal income tax cuts',
              },
            ].map(({ label, url, text }) => (
              <div key={label} className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0 font-mono text-xs mt-0.5">→</span>
                <div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{label}: </span>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                    {text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-step */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Calculation steps</h2>
          <div className="space-y-6">

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 1 — Taxable income</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs">Taxable income = Gross salary − Work deductions − Salary sacrifice</code>
                </p>
                <p>
                  Salary sacrifice reduces both taxable income and the gross salary base from which super is calculated (salary sacrifice contributions go into super separately).
                </p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 2 — Income tax (before offsets)</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-3">
                <p className="font-medium text-slate-700 dark:text-slate-300">Australian residents (2026-27):</p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>$0 – $18,200: <span className="text-emerald-600 dark:text-emerald-400">Nil</span></div>
                  <div>$18,201 – $45,000: <span className="text-blue-600 dark:text-blue-400">15%</span> × (income − $18,200)</div>
                  <div>$45,001 – $135,000: <span className="text-blue-600 dark:text-blue-400">$4,020 + 30%</span> × (income − $45,000)</div>
                  <div>$135,001 – $190,000: <span className="text-blue-600 dark:text-blue-400">$31,020 + 37%</span> × (income − $135,000)</div>
                  <div>$190,001+: <span className="text-blue-600 dark:text-blue-400">$51,370 + 45%</span> × (income − $190,000)</div>
                </div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mt-2">Non-residents (2026-27):</p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>$0 – $135,000: <span className="text-blue-600 dark:text-blue-400">30%</span> (no tax-free threshold)</div>
                  <div>$135,001 – $190,000: <span className="text-blue-600 dark:text-blue-400">$40,500 + 37%</span> × (income − $135,000)</div>
                  <div>$190,001+: <span className="text-blue-600 dark:text-blue-400">$60,850 + 45%</span> × (income − $190,000)</div>
                </div>
                <p className="font-medium text-slate-700 dark:text-slate-300 mt-2">Working holiday makers (visa 417 &amp; 462):</p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>$0 – $45,000: <span className="text-blue-600 dark:text-blue-400">15%</span> (flat, no tax-free threshold)</div>
                  <div>$45,001 – $135,000: <span className="text-blue-600 dark:text-blue-400">$6,750 + 30%</span> × (income − $45,000)</div>
                  <div>$135,001 – $190,000: <span className="text-blue-600 dark:text-blue-400">$33,750 + 37%</span> × (income − $135,000)</div>
                  <div>$190,001+: <span className="text-blue-600 dark:text-blue-400">$54,100 + 45%</span> × (income − $190,000)</div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 3 — Low Income Tax Offset (LITO)</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p>Applies to Australian residents only. Not available to non-residents or working holiday makers.</p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>≤ $37,500: LITO = <span className="text-emerald-600 dark:text-emerald-400">$700</span></div>
                  <div>$37,501 – $45,000: LITO = $700 − (<span className="text-blue-600 dark:text-blue-400">income − $37,500</span>) × 5%</div>
                  <div>$45,001 – $66,667: LITO = $325 − (<span className="text-blue-600 dark:text-blue-400">income − $45,000</span>) × 1.5%</div>
                  <div>&gt; $66,667: LITO = <span className="text-slate-400">Nil</span></div>
                </div>
                <p>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs">Net income tax = max(0, income tax − LITO)</code>
                </p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 4 — Medicare Levy</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p>Applies to Australian residents only. Working holiday makers and non-residents do not pay the Medicare Levy.</p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>≤ $28,011: <span className="text-emerald-600 dark:text-emerald-400">Nil</span></div>
                  <div>$28,012 – $35,014: (income − $28,011) × <span className="text-blue-600 dark:text-blue-400">10%</span> (shade-in)</div>
                  <div>&gt; $35,014: income × <span className="text-blue-600 dark:text-blue-400">2%</span></div>
                </div>
                <p className="text-xs text-slate-400">Shade-in thresholds are 2026-27 estimates. The Medicare Levy Surcharge (1–1.5%) applies separately to residents earning above $105,000 without private hospital cover.</p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 5 — HECS/HELP repayment</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-3">
                <p>
                  From 1 July 2025, HECS/HELP compulsory repayments use a <strong className="text-slate-700 dark:text-slate-300">marginal</strong> system. You repay a percentage only of the income <strong className="text-slate-700 dark:text-slate-300">above</strong> the first threshold — not a flat percentage of your whole income as under the old system. The top band is the exception: it is a flat 10% of total repayment income. For 2026-27:
                </p>
                <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900 rounded-lg p-3 space-y-1">
                  <div>$0 – $69,528: <span className="text-emerald-600 dark:text-emerald-400">Nil</span></div>
                  <div>$69,529 – $129,717: <span className="text-blue-600 dark:text-blue-400">15%</span> × (income − $69,528)</div>
                  <div>$129,718 – $186,050: <span className="text-blue-600 dark:text-blue-400">$9,028 + 17%</span> × (income − $129,717)</div>
                  <div>$186,051+: <span className="text-blue-600 dark:text-blue-400">10%</span> × total repayment income</div>
                </div>
                <p>
                  The repayment is assessed on your <strong className="text-slate-700 dark:text-slate-300">repayment income</strong>, which is your taxable income plus reportable super contributions (such as salary sacrifice), reportable fringe benefits, net investment losses and exempt foreign income. Because reportable super is added back, salary sacrificing into super does not reduce your HECS repayment.
                </p>
                <p className="text-xs text-slate-400">
                  Source: ATO —{' '}
                  <a href="https://www.ato.gov.au/tax-rates-and-codes/study-and-training-support-loans-rates-and-repayment-thresholds" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                    Study and training support loans: rates and repayment thresholds (2026-27)
                  </a>
                  . See our dedicated{' '}
                  <a href="/hecs-help-repayment" className="text-blue-500 hover:underline">HECS-HELP repayment calculator</a>{' '}
                  for a full breakdown.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 6 — Employer superannuation</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p>
                  The Superannuation Guarantee rate is <strong className="text-slate-700 dark:text-slate-300">12%</strong> from 1 July 2025, applying to ordinary time earnings.
                </p>
                <p>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs">Employer super = gross salary × 12%</code>
                </p>
                <p>
                  Salary sacrifice amounts are shown as additional super contributions (not included in the employer super calculation, but shown in total super).
                </p>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Step 7 — Take-home pay</h3>
              </div>
              <div className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <p>
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs">Take-home pay = Gross salary − Net income tax − Medicare Levy − MLS − HECS repayment − Salary sacrifice</code>
                </p>
                <p>Super is paid on top of salary and is not deducted from take-home pay.</p>
              </div>
            </div>

          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What changed for 2026-27</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              The most significant change for 2026-27 is the <strong className="text-slate-700 dark:text-slate-300">Stage 3 tax cuts</strong>, which came into effect from 1 July 2026:
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>The 19% resident rate on income $18,201–$45,000 was reduced to <strong className="text-slate-700 dark:text-slate-300">15%</strong>.</li>
              <li>Working holiday makers also benefit: the upper bracket above $45,000 was reduced from 32.5% to <strong className="text-slate-700 dark:text-slate-300">30%</strong>.</li>
              <li>The Superannuation Guarantee reached <strong className="text-slate-700 dark:text-slate-300">12%</strong> (up from 11.5% in 2024-25).</li>
            </ul>
          </div>
        </section>

        {/* Corrections policy — how to report an error and what happens next.
            Same commitment and 5-business-day SLA as the one already published
            on /about, so the site states this in exactly one place per policy
            rather than two slightly different versions. */}
        <section className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Corrections policy</h2>
          <div className="text-sm text-amber-800 dark:text-amber-300 space-y-2">
            <p>
              Every figure on this page is checked against the ATO source linked next to it, but tax law changes
              and mistakes happen. If you believe a rate, threshold, or formula above is wrong, please{' '}
              <a href="/contact" className="underline hover:no-underline">get in touch</a> with the specific issue
              and, where possible, the ATO page you are comparing it against.
            </p>
            <p>
              I review correction requests myself and aim to respond within{' '}
              <strong>5 business days</strong>. A verified correction is applied to the site immediately and
              recorded in the <a href="/changelog" className="underline hover:no-underline">changelog</a> with
              the date it was fixed — nothing is corrected silently.
            </p>
          </div>
        </section>

        <div className="text-xs text-slate-400 text-center">
          Methodology last reviewed: {LAST_REVIEWED}
        </div>
      </div>
    </main>
  );
}
