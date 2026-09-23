import type { Metadata } from 'next';
import { calculate, fmtAUD } from '@/lib/tax';

export const metadata: Metadata = {
  title: 'Australian Take-Home Pay Reference 2026-27 — What You Actually Keep',
  description:
    'A full reference table of take-home pay after tax in Australia for FY 2026-27, from $30,000 to $300,000: income tax, Medicare levy, net pay, monthly pay and effective rate. Plus the marginal reality — how much of each extra $10,000 you actually keep.',
  // Relative — resolved against metadataBase in app/layout.tsx, same pattern
  // as every other page.
  alternates: { canonical: '/take-home-pay-reference' },
  openGraph: {
    url: '/take-home-pay-reference',
    title: 'Australian Take-Home Pay Reference 2026-27',
    description:
      'Gross-to-net take-home pay for every salary from $30k to $300k, FY 2026-27 — plus how much of each extra $10,000 you actually keep.',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

// ─── Data, computed from the site's own tax engine (lib/tax.ts) ───────────────
// Assumptions for this reference table: Australian resident for the full year,
// no HECS/HELP debt, and private hospital cover held (so no Medicare Levy
// Surcharge). Medicare levy of 2% applies. These are the standard baseline
// assumptions for a like-for-like salary comparison.
const SALARIES = [
  30_000, 40_000, 50_000, 60_000, 70_000, 80_000, 90_000, 100_000, 110_000,
  120_000, 130_000, 140_000, 150_000, 160_000, 180_000, 200_000, 250_000, 300_000,
];

function netOf(gross: number) {
  // resident, no HECS, private health = true (no MLS), no deductions/sacrifice
  return calculate(gross, 'resident', false, true, 0, 0);
}

const ROWS = SALARIES.map((g) => {
  const r = netOf(g);
  return {
    gross: g,
    incomeTax: r.netIncomeTax,
    medicare: r.medicareLevy,
    totalTax: r.netIncomeTax + r.medicareLevy,
    net: r.netIncome,
    netMonthly: r.netIncome / 12,
    eff: r.effectiveRate,
  };
});

// Marginal reality: how much of each extra $10,000 you keep.
const MARGINAL_STEPS = [
  60_000, 70_000, 80_000, 90_000, 100_000, 110_000, 120_000, 130_000, 140_000,
  150_000, 160_000, 170_000, 180_000, 190_000, 200_000,
];
const MARGINAL = MARGINAL_STEPS.slice(1).map((g, i) => {
  const lower = MARGINAL_STEPS[i];
  const kept = netOf(g).netIncome - netOf(lower).netIncome;
  return { from: lower, to: g, kept, pct: kept / 100 };
});

// Profession anchors. Gross figures are typical bands published in Australian
// industry salary guides; the take-home is what the calculator returns for
// that gross under the assumptions above.
const PROFESSIONS = [
  { role: 'Graduate registered nurse', gross: 68_000 },
  { role: 'Registered nurse (experienced)', gross: 90_000 },
  { role: 'Secondary teacher (top of scale, NSW)', gross: 129_536 },
  { role: 'Software engineer', gross: 120_000 },
  { role: 'Qualified electrician', gross: 95_000 },
  { role: 'Qualified plumber', gross: 77_000 },
  { role: 'FIFO mining engineer', gross: 200_000 },
].map((p) => {
  const r = netOf(p.gross);
  return { ...p, net: r.netIncome, netMonthly: r.netIncome / 12, eff: r.effectiveRate };
});

// ─── JSON-LD: Dataset ─────────────────────────────────────────────────────────
const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Australian Take-Home Pay Reference 2026-27',
  description:
    'Take-home pay after income tax and Medicare levy for Australian residents, FY 2026-27, across gross salaries from $30,000 to $300,000. Includes net annual pay, net monthly pay and effective tax rate.',
  url: 'https://www.auincometax.com/take-home-pay-reference',
  creator: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  isAccessibleForFree: true,
  license: 'https://www.auincometax.com/terms-of-use',
  temporalCoverage: '2026-07-01/2027-06-30',
  spatialCoverage: { '@type': 'Country', name: 'Australia' },
};

export default function TakeHomeReferencePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }}
      />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 FY 2026–27 · Reference data
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Australian Take-Home Pay Reference
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            What every salary from $30,000 to $300,000 actually leaves in your pocket in 2026-27,
            after income tax and the Medicare levy — plus how much of each extra $10,000 you really
            keep.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {/* Intro */}
        <section>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Almost every salary guide, job ad and pay scale in Australia quotes a{' '}
              <strong className="text-slate-900 dark:text-white">gross</strong> figure — the number
              before tax. This page is the other half: the{' '}
              <strong className="text-slate-900 dark:text-white">take-home</strong> figure, worked
              out with the same engine behind our{' '}
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                income tax calculator
              </a>
              . Writers, recruiters and anyone comparing an offer are welcome to reference or link
              to these figures.
            </p>
          </div>
        </section>

        {/* Main table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Take-home pay by salary, 2026-27
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Australian resident, full year, no HECS/HELP debt, private hospital cover held (no
            Medicare Levy Surcharge).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Gross salary</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Income tax</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Medicare</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Take-home / yr</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Per month</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Eff. rate</th>
                </tr>
              </thead>
              <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300">
                {ROWS.map((r) => (
                  <tr key={r.gross} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2 font-semibold text-slate-900 dark:text-white">{fmtAUD(r.gross)}</td>
                    <td className="px-3 py-2 text-right">{fmtAUD(r.incomeTax)}</td>
                    <td className="px-3 py-2 text-right">{fmtAUD(r.medicare)}</td>
                    <td className="px-3 py-2 text-right text-emerald-600 dark:text-emerald-400">{fmtAUD(r.net)}</td>
                    <td className="px-3 py-2 text-right">{fmtAUD(r.netMonthly)}</td>
                    <td className="px-3 py-2 text-right">{r.eff.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Figures computed by auincometax.com using ATO 2026-27 resident rates. Rounded to the
            nearest dollar.
          </p>
        </section>

        {/* Marginal reality */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            The marginal reality: what each extra $10,000 is worth
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            A pay rise never lands in full. Here&rsquo;s how much of each additional $10,000 you
            actually keep after tax and Medicare.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Pay rise</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">You keep</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">of $10,000</th>
                </tr>
              </thead>
              <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300">
                {MARGINAL.map((m) => (
                  <tr key={m.to} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">{fmtAUD(m.from)} → {fmtAUD(m.to)}</td>
                    <td className="px-3 py-2 text-right text-emerald-600 dark:text-emerald-400">{fmtAUD(m.kept)}</td>
                    <td className="px-3 py-2 text-right">{m.pct.toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
            The takeaway: in 2026-27 a six-figure earner keeps roughly{' '}
            <strong className="text-slate-900 dark:text-white">61 to 68 cents</strong> of every extra
            dollar, and once income passes $190,000 the top marginal rate (45% plus 2% Medicare)
            drops that to around 53 cents.
          </p>
        </section>

        {/* Profession anchors */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Take-home pay for common occupations
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Typical gross figures from Australian industry salary guides, with the take-home our
            calculator returns for each.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Occupation</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Gross</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Take-home / yr</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Per month</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Eff. rate</th>
                </tr>
              </thead>
              <tbody className="tabular-nums text-slate-700 dark:text-slate-300">
                {PROFESSIONS.map((p) => (
                  <tr key={p.role} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">{p.role}</td>
                    <td className="px-3 py-2 text-right font-mono">{fmtAUD(p.gross)}</td>
                    <td className="px-3 py-2 text-right font-mono text-emerald-600 dark:text-emerald-400">{fmtAUD(p.net)}</td>
                    <td className="px-3 py-2 text-right font-mono">{fmtAUD(p.netMonthly)}</td>
                    <td className="px-3 py-2 text-right font-mono">{p.eff.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Gross bands are illustrative and vary by state, employer and experience. Enter your own
            figure in the{' '}
            <a href="/" className="text-blue-500 hover:underline">calculator</a> for an exact result.
          </p>
        </section>

        {/* Method + sources */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            How these figures are worked out
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Every number on this page is computed with the same open methodology as the main
              calculator: 2026-27 resident income tax brackets (with the Stage 3 rates in effect from
              1 July 2026), the Low Income Tax Offset, and the 2% Medicare levy. The table assumes no
              HECS/HELP debt and that private hospital cover is held, so no Medicare Levy Surcharge
              applies. Superannuation is paid by your employer on top and is not part of take-home
              pay.
            </p>
            <p className="text-xs text-slate-400">
              Source of rates: ATO —{' '}
              <a
                href="https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                Tax rates – Australian residents
              </a>
              . Full detail on our{' '}
              <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
            </p>
          </div>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Work out your own numbers
          </h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              Take-home pay calculator
            </a>
            <a
              href="/salary-table"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              Salary &amp; tax table
            </a>
            <a
              href="/hecs-help-repayment"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              HECS-HELP repayment
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
