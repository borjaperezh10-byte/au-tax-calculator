import type { Metadata } from 'next';
import { calculate, fmtAUD, SALARY_PAGES } from '@/lib/tax';
import CopyTableButton from '@/components/CopyTableButton';

export const metadata: Metadata = {
  title: 'Australian Salary & Tax Table 2026-27 — Full Take-Home Pay Reference',
  description:
    'Free reference table: income tax, Medicare levy and take-home pay for Australian salaries from $30,000 to $300,000, for the 2026-27 financial year. Copy into Excel or Sheets, or cite with attribution.',
  alternates: { canonical: 'https://www.auincometax.com/salary-table' },
};

export default function SalaryTablePage() {
  const rows = SALARY_PAGES.map(salary => {
    const r = calculate(salary, true, false, true);
    return {
      salary,
      tax: r.netIncomeTax,
      medicare: r.medicareLevy,
      annual: r.netIncome,
      monthly: r.netIncome / 12,
      fortnightly: r.netIncome / 26,
      weekly: r.netIncome / 52,
      effectiveRate: r.effectiveRate,
    };
  });

  const tsv = [
    ['Gross salary', 'Income tax', 'Medicare levy', 'Annual take-home', 'Monthly', 'Fortnightly', 'Weekly', 'Effective tax rate'].join('\t'),
    ...rows.map(row =>
      [
        row.salary,
        Math.round(row.tax),
        Math.round(row.medicare),
        Math.round(row.annual),
        Math.round(row.monthly),
        Math.round(row.fortnightly),
        Math.round(row.weekly),
        `${row.effectiveRate.toFixed(1)}%`,
      ].join('\t')
    ),
  ].join('\n');

  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Reference table · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Australian Salary &amp; Tax Table 2026-27
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Income tax, Medicare levy and take-home pay for Australian resident salaries from $30,000 to $300,000, for the 2026-27 financial year (Stage 3 rates applied). Free to reuse with attribution.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <CopyTableButton tsv={tsv} />
          <p className="text-xs text-slate-400">
            Australian resident, no HECS/HELP, private hospital cover assumed. See{' '}
            <a href="/methodology" className="text-blue-600 dark:text-blue-400 hover:underline">methodology</a> for the full formula.
          </p>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-left text-xs text-slate-400 uppercase tracking-wide">
                <th className="px-4 py-3">Salary</th>
                <th className="px-4 py-3 text-right">Income tax</th>
                <th className="px-4 py-3 text-right">Medicare</th>
                <th className="px-4 py-3 text-right">Annual take-home</th>
                <th className="px-4 py-3 text-right">Monthly</th>
                <th className="px-4 py-3 text-right">Fortnightly</th>
                <th className="px-4 py-3 text-right">Weekly</th>
                <th className="px-4 py-3 text-right">Effective rate</th>
              </tr>
            </thead>
            <tbody className="font-mono tabular-nums">
              {rows.map(row => (
                <tr key={row.salary} className="border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                  <td className="px-4 py-2.5 font-sans font-semibold text-slate-900 dark:text-white">
                    <a href={`/salary/${row.salary}`} className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                      {fmtAUD(row.salary).replace('.00', '')}
                    </a>
                  </td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{fmtAUD(row.tax)}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{fmtAUD(row.medicare)}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-slate-900 dark:text-white">{fmtAUD(row.annual)}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{fmtAUD(row.monthly)}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{fmtAUD(row.fortnightly)}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{fmtAUD(row.weekly)}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{row.effectiveRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-sm text-blue-800 dark:text-blue-300">
          <p className="font-semibold mb-1">Free to cite or reference</p>
          <p>
            Journalists, bloggers and finance sites are welcome to reference figures from this table. Suggested attribution: <em>&quot;Source: auincometax.com Australian Salary &amp; Tax Table, 2026-27&quot;</em>, linked to{' '}
            <a href="https://www.auincometax.com/salary-table" className="underline hover:no-underline">auincometax.com/salary-table</a>. For a specific salary, link directly to its dedicated page (e.g. <a href="/salary/80000" className="underline hover:no-underline">/salary/80000</a>) for a live, adjustable calculator.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            ← Calculate your own take-home pay
          </a>
        </div>
      </div>
    </main>
  );
}
