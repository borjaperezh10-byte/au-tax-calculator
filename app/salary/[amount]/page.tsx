import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxCalculator from '@/components/TaxCalculator';
import { calculate, fmtAUD, SALARY_PAGES } from '@/lib/tax';

interface Props {
  params: Promise<{ amount: string }>;
}

// Only the salaries in SALARY_PAGES exist. Without this, Next would render
// /salary/<anything> on demand, generating unlimited near-identical thin pages
// — exactly what Google's scaled-content policy and AdSense's "little original
// content" rejection target.
export const dynamicParams = false;

export async function generateStaticParams() {
  return SALARY_PAGES.map(s => ({ amount: String(s) }));
}

/* ------------------------------------------------------------------ *
 * Resident tax bands, FY 2026-27.
 *
 * TODO: these duplicate the bands in lib/tax.ts. Export them from there
 * and import here instead, so there is one source of truth to update
 * each year. They are only used for the explanatory copy below — every
 * figure shown to the user still comes from calculate().
 * ------------------------------------------------------------------ */
const RESIDENT_BANDS = [
  { from: 0,       to: 18_200,   rate: 0  },
  { from: 18_201,  to: 45_000,   rate: 15 },
  { from: 45_001,  to: 135_000,  rate: 30 },
  { from: 135_001, to: 190_000,  rate: 37 },
  { from: 190_001, to: Infinity, rate: 45 },
];

// Medicare Levy Surcharge — top of the singles base (nil) tier, FY 2026-27.
// The surcharge applies from $105,001; $105,000 itself is still base tier.
// Source: ATO, "Medicare levy surcharge income thresholds and rates"
// (2026-27 singles: base ≤$105,000 · tier 1 $105,001–$123,000 at 1% ·
//  tier 2 $123,001–$164,000 at 1.25% · tier 3 $164,001+ at 1.5%).
// This was $101,000 in 2025-26 — it is indexed, so re-check it every year
// and keep it in step with lib/tax.ts.
const MLS_SINGLE_THRESHOLD = 105_000;

// Typical full-time earnings, used only for the "for reference" sentence.
// VERIFY and cite: take the current figure from the ABS Average Weekly
// Earnings release and link it on /methodology. Do not ship a made-up number
// on a page that claims its rates are ATO-sourced.
const MEDIAN_FULLTIME_SALARY = 90_000;

function bandFor(salary: number) {
  return RESIDENT_BANDS.find(b => salary >= b.from && salary <= b.to)!;
}

function nextBand(salary: number) {
  return RESIDENT_BANDS.find(b => b.from > salary);
}

/** Per-band decomposition of the income tax for this exact salary. */
function bandBreakdown(salary: number) {
  return RESIDENT_BANDS
    .filter(b => salary >= b.from)
    .map(b => {
      const upper = Math.min(salary, b.to);
      const taxable = Math.max(0, upper - b.from + (b.from === 0 ? 0 : 1));
      return {
        label:
          b.to === Infinity
            ? `Over ${fmtAUD(b.from - 1)}`
            : `${fmtAUD(b.from === 0 ? 0 : b.from - 1)} – ${fmtAUD(b.to)}`,
        rate: b.rate,
        taxable,
        tax: (taxable * b.rate) / 100,
      };
    })
    .filter(row => row.taxable > 0);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { amount } = await params;
  const salary = parseInt(amount, 10);
  if (!salary) return {};

  const r = calculate(salary, true, false, true);
  const net = fmtAUD(r.netIncome);
  const tax = fmtAUD(r.netIncomeTax + r.medicareLevy);
  const k   = (salary / 1000).toFixed(0);

  return {
    title: `$${k},000 Salary Australia 2026-27 — Take-Home Pay After Tax`,
    description: `On a $${k},000 salary in Australia, your take-home pay is ${net} per year after ${tax} in income tax and Medicare levy (2026-27).`,
    // Relative — resolved against metadataBase in app/layout.tsx
    alternates: { canonical: `/salary/${salary}` },
    openGraph: { url: `/salary/${salary}` },
  };
}

export default async function SalaryPage({ params }: Props) {
  const { amount } = await params;
  const salary = parseInt(amount, 10);

  if (!salary || salary < 1000 || salary > 2_000_000) notFound();

  const r = calculate(salary, true, false, true);
  const k = (salary / 1000).toFixed(0);

  // Exact value of a $1,000 pay rise, computed with the site's own engine
  // rather than by re-deriving the marginal maths here.
  const rPlus = calculate(salary + 1_000, true, false, true);
  const keepPerThousand = rPlus.netIncome - r.netIncome;

  const band     = bandFor(salary);
  const upcoming = nextBand(salary);
  const gapToNextBand = upcoming ? upcoming.from - salary : null;
  const breakdown = bandBreakdown(salary);

  // Strictly greater: $105,000 exactly is still in the nil tier.
  const aboveMLSThreshold = salary > MLS_SINGLE_THRESHOLD;
  const vsMedian = salary - MEDIAN_FULLTIME_SALARY;

  // Quick stats for the static header
  const stats = [
    { label: 'Annual take-home', value: fmtAUD(r.netIncome) },
    { label: 'Monthly take-home', value: fmtAUD(r.netIncome / 12) },
    { label: 'Fortnightly take-home', value: fmtAUD(r.netIncome / 26) },
    { label: 'Weekly take-home', value: fmtAUD(r.netIncome / 52) },
    { label: 'Hourly take-home (38h/wk)', value: fmtAUD(r.netIncome / 52 / 38) },
    { label: 'Income tax', value: fmtAUD(r.netIncomeTax) },
    { label: 'Medicare levy', value: fmtAUD(r.medicareLevy) },
    { label: 'Effective tax rate', value: r.effectiveRate.toFixed(1) + '%' },
    { label: 'Marginal tax rate', value: r.marginalRate + '%' },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            ${k},000 Salary in Australia — After Tax 2026-27
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Take-home pay, tax breakdown and deductions on a ${(salary).toLocaleString('en-AU')} annual salary
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Quick stats — static, no JS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <p className="text-xs text-slate-400 mb-1">{label}</p>
              <p className="font-mono font-bold text-slate-900 dark:text-white tabular-nums">{value}</p>
            </div>
          ))}
        </div>

        {/* Interactive calculator with this salary pre-loaded */}
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Adjust and calculate
        </h2>
        <TaxCalculator initialSalary={salary} />

        {/* ---------------------------------------------------------------- *
         * What this salary actually means — written from this salary's own
         * computed figures, so no two pages say the same thing.
         * ---------------------------------------------------------------- */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            What a ${k},000 salary means in practice
          </h2>

          <div className="prose-sm max-w-none space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              At ${(salary).toLocaleString('en-AU')} you sit in the{' '}
              <strong className="text-slate-900 dark:text-white">{band.rate}% tax bracket</strong>, but that
              is not the rate you actually pay on your whole salary. Australia taxes income in
              slices, so your{' '}
              <strong className="text-slate-900 dark:text-white">effective rate is {r.effectiveRate.toFixed(1)}%</strong>{' '}
              once every band is added up — {(band.rate - r.effectiveRate).toFixed(1)} percentage points
              below your marginal rate. In cash terms you keep{' '}
              <strong className="text-slate-900 dark:text-white">{fmtAUD(r.netIncome)}</strong> of the{' '}
              {fmtAUD(salary)} before super.
            </p>

            <p>
              The number that matters when you negotiate a raise is the marginal one. Every extra
              dollar above ${(salary).toLocaleString('en-AU')} is taxed at {band.rate}% plus the
              Medicare levy, so{' '}
              <strong className="text-slate-900 dark:text-white">
                a $1,000 pay rise puts about {fmtAUD(keepPerThousand)} in your pocket
              </strong>
              {' '}— roughly {((keepPerThousand / 1000) * 100).toFixed(0)} cents in the dollar.
            </p>

            {gapToNextBand !== null && upcoming && (
              <p>
                You are{' '}
                <strong className="text-slate-900 dark:text-white">{fmtAUD(gapToNextBand)}</strong> below
                the {upcoming.rate}% bracket, which begins at {fmtAUD(upcoming.from)}. Crossing it does
                not raise the tax on the income you already earn — only the portion above{' '}
                {fmtAUD(upcoming.from)} is taxed at the higher rate. There is no salary in Australia at
                which earning more leaves you worse off.
              </p>
            )}

            {!upcoming && (
              <p>
                ${(salary).toLocaleString('en-AU')} sits in the top bracket, so every additional dollar
                is taxed at {band.rate}% plus the Medicare levy. At this level, salary sacrifice into
                super and the timing of bonuses make a materially bigger difference to your net income
                than they do further down the scale.
              </p>
            )}

            {aboveMLSThreshold && (
              <p className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/40 pl-4 py-3 rounded-r">
                <strong className="text-slate-900 dark:text-white">Watch the Medicare Levy Surcharge.</strong>{' '}
                ${(salary).toLocaleString('en-AU')} is above the {fmtAUD(MLS_SINGLE_THRESHOLD)} single
                threshold, which means that without an appropriate level of private hospital cover you
                would pay the surcharge <em>on top of</em> the {fmtAUD(r.medicareLevy)} Medicare levy
                already shown above. The figures on this page assume you hold private hospital cover —
                switch it off in the calculator to see the difference. Note that the ATO tests this
                against your <em>income for MLS purposes</em>, which adds things like reportable fringe
                benefits, reportable super contributions and net investment losses to your taxable
                income, so the threshold can bite at a lower salary than you would expect.
              </p>
            )}

            {salary >= 250_000 && (
              <p className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/40 pl-4 py-3 rounded-r">
                <strong className="text-slate-900 dark:text-white">Division 293 applies at this income.</strong>{' '}
                Once combined income plus concessional super contributions exceed $250,000, an extra 15%
                tax applies to those contributions. It is assessed separately by the ATO and is not
                included in the take-home figure above.
              </p>
            )}

            <p>
              For reference, ${(salary).toLocaleString('en-AU')} is{' '}
              {vsMedian === 0 ? (
                'close to typical full-time earnings in Australia'
              ) : vsMedian > 0 ? (
                <>about {fmtAUD(vsMedian)} above typical full-time earnings</>
              ) : (
                <>about {fmtAUD(Math.abs(vsMedian))} below typical full-time earnings</>
              )}
              . On top of your salary, your employer must also pay the 12% superannuation guarantee —
              roughly {fmtAUD(salary * 0.12)} a year — which does not appear in your take-home pay but
              is part of what the role is worth.
            </p>
          </div>
        </section>

        {/* Band-by-band decomposition — different on every page */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            How the ${k},000 is taxed, band by band
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Resident rates, FY 2026–27. Medicare levy and any offsets are applied separately and are
            included in the totals at the top of this page.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Income band</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Rate</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Your income in band</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Tax from band</th>
                </tr>
              </thead>
              <tbody>
                {breakdown.map(row => (
                  <tr key={row.label} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2 text-slate-700 dark:text-slate-300">{row.label}</td>
                    <td className="px-3 py-2 font-mono tabular-nums text-slate-700 dark:text-slate-300">{row.rate}%</td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right text-slate-700 dark:text-slate-300">{fmtAUD(row.taxable)}</td>
                    <td className="px-3 py-2 font-mono tabular-nums text-right font-semibold text-slate-900 dark:text-white">{fmtAUD(row.tax)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Every rate on this page comes from the ATO's legislated 2026–27 tables. The full workings,
            including the low income tax offset and Medicare levy shade-in, are set out on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Nearby salaries — balanced window, not the eight lowest */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Compare nearby salaries</h2>
          <div className="flex flex-wrap gap-2">
            {(() => {
              const others = SALARY_PAGES.filter(s => s !== salary).sort((a, b) => a - b);
              const idx = others.findIndex(s => s > salary);
              const splitAt = idx === -1 ? others.length : idx;
              const below = others.slice(0, splitAt);
              const above = others.slice(splitAt);
              // Four either side where possible, topped up from whichever side has room.
              const takeBelow = below.slice(-Math.max(4, 8 - above.length));
              const takeAbove = above.slice(0, 8 - takeBelow.length);
              return [...takeBelow, ...takeAbove];
            })().map(s => (
              <a
                key={s}
                href={`/salary/${s}`}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
              >
                ${(s / 1000).toFixed(0)}K salary
              </a>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to calculator
          </a>
          <a href="/salary-table" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            See the full salary &amp; tax table →
          </a>
        </div>
      </div>
      {/* The ATO source line and disclaimer now live once, in the site footer
          in app/layout.tsx — the page-level footer that used to sit here was
          rendering a second, duplicate copy on every salary page. */}
    </main>
  );
}
