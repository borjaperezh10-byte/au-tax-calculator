import type { Metadata } from 'next';
import HecsHelpCalculator from '@/components/HecsHelpCalculator';

export const metadata: Metadata = {
  title: 'HECS-HELP Repayment Calculator Australia 2026-27 — How Much Will You Repay?',
  description:
    'Work out your compulsory HECS-HELP repayment for 2026-27 under the new marginal system. Enter your repayment income to see your yearly, fortnightly and monthly repayment, plus how long your balance will take to clear.',
  // Relative — resolved against metadataBase in app/layout.tsx, same pattern
  // as every other page.
  alternates: { canonical: '/hecs-help-repayment' },
  openGraph: {
    url: '/hecs-help-repayment',
    title: 'HECS-HELP Repayment Calculator Australia 2026-27',
    description:
      'Enter your repayment income to see your compulsory HECS-HELP repayment for 2026-27 under the new marginal system, and how long your balance will take to clear.',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

export default function HecsHelpPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            HECS-HELP Repayment Calculator
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            How much you&rsquo;ll repay on your student loan in 2026-27, under the new marginal
            repayment system — and how long your balance will take to clear.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {/* Calculator */}
        <HecsHelpCalculator />

        {/* What changed — the marginal system */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            The big change: repayments are now marginal
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Until mid-2025, HECS-HELP worked in a way that caught a lot of people out: once your
              income crossed a threshold, the repayment rate applied to your{' '}
              <strong className="text-slate-900 dark:text-white">whole</strong> income, not just the
              part above it. Earning one dollar more could cost you hundreds.
            </p>
            <p>
              From{' '}
              <strong className="text-slate-900 dark:text-white">1 July 2025</strong> that&rsquo;s
              gone. Compulsory repayments now work like income tax brackets — you only repay a
              percentage of the income{' '}
              <strong className="text-slate-900 dark:text-white">above</strong> the first threshold.
              For 2026-27 that threshold is{' '}
              <strong className="text-slate-900 dark:text-white">$69,528</strong>: earn less than
              that and your compulsory repayment is nil.
            </p>
          </div>
        </section>

        {/* The 2026-27 bracket table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            2026-27 repayment thresholds and rates
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            The rate applies only to income above $69,528 — except the top band, which the ATO
            charges as a flat 10% of your total repayment income.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Repayment income</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Compulsory repayment</th>
                </tr>
              </thead>
              <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300">
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-3 py-2">$0 – $69,528</td>
                  <td className="px-3 py-2 text-emerald-600 dark:text-emerald-400">Nil</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-3 py-2">$69,529 – $129,717</td>
                  <td className="px-3 py-2">15c for each $1 over $69,528</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-3 py-2">$129,718 – $186,050</td>
                  <td className="px-3 py-2">$9,028 + 17c for each $1 over $129,717</td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-3 py-2">$186,051 and over</td>
                  <td className="px-3 py-2">10% of total repayment income</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Source: ATO —{' '}
            <a
              href="https://www.ato.gov.au/tax-rates-and-codes/study-and-training-support-loans-rates-and-repayment-thresholds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline break-all"
            >
              Study and training support loans: rates and repayment thresholds (2026-27)
            </a>
            . These thresholds are indexed each year in line with average weekly earnings.
          </p>
        </section>

        {/* What counts as repayment income */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            What counts as &ldquo;repayment income&rdquo;
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              This is the figure that trips people up. Your compulsory repayment is worked out on
              your{' '}
              <strong className="text-slate-900 dark:text-white">repayment income</strong>, which is
              more than just your taxable income. The ATO adds these back on top of your taxable
              income:
            </p>
            <ul className="space-y-2 pl-4 list-disc marker:text-blue-400">
              <li>reportable fringe benefits;</li>
              <li>total net investment loss (including net rental losses);</li>
              <li>reportable super contributions (for example, salary sacrifice into super);</li>
              <li>exempt foreign employment income.</li>
            </ul>
            <p className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/40 pl-4 py-3 rounded-r text-[15px]">
              <strong className="text-slate-900 dark:text-white">The salary-sacrifice trap:</strong>{' '}
              because reportable super contributions are added back, sacrificing salary into super
              to drop your taxable income below the threshold does not necessarily reduce your HECS
              repayment — the sacrificed amount is counted back in. It&rsquo;s a common and expensive
              surprise.
            </p>
          </div>
        </section>

        {/* Indexation + 20% cut context */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Indexation and the one-off 20% reduction
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Your outstanding balance is{' '}
              <strong className="text-slate-900 dark:text-white">indexed</strong> once a year, on 1
              June, so it keeps pace with the cost of living. Indexation is applied to whatever is
              left after your compulsory repayments — it is not interest, and there is no benefit to
              paying it off faster purely to &ldquo;save interest&rdquo; in the way there is with a
              mortgage. That&rsquo;s why the &ldquo;years to clear&rdquo; figure in the calculator is
              marked as a rough, before-indexation estimate.
            </p>
            <p>
              Separately, the Government applied a{' '}
              <strong className="text-slate-900 dark:text-white">one-off 20% reduction</strong> to
              all study and training loan balances that existed on{' '}
              <strong className="text-slate-900 dark:text-white">1 June 2025</strong>, before that
              year&rsquo;s indexation. If your balance already reflects that cut, enter the reduced
              figure above.
            </p>
            <p className="text-xs text-slate-400">
              Sources: ATO —{' '}
              <a
                href="https://www.ato.gov.au/individuals-and-families/study-and-training-support-loans/study-and-training-loans-what-s-new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                Study and training loans: what&rsquo;s new
              </a>{' '}
              and{' '}
              <a
                href="https://www.ato.gov.au/individuals-and-families/study-and-training-support-loans/compulsory-repayments"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                Compulsory repayments
              </a>
              .
            </p>
          </div>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Work out the rest of your pay
          </h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              Full take-home pay calculator
            </a>
            <a
              href="/salary-table"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              Salary &amp; tax table
            </a>
            <a
              href="/methodology"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
            >
              How we calculate it
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
