import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxCalculator from '@/components/TaxCalculator';
import { calculate, fmtAUD, SALARY_PAGES } from '@/lib/tax';

interface Props {
  params: Promise<{ amount: string }>;
}

export async function generateStaticParams() {
  return SALARY_PAGES.map(s => ({ amount: String(s) }));
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
    alternates: { canonical: `https://www.auincometax.com/salary/${salary}` },
  };
}

export default async function SalaryPage({ params }: Props) {
  const { amount } = await params;
  const salary = parseInt(amount, 10);

  if (!salary || salary < 1000 || salary > 2_000_000) notFound();

  const r = calculate(salary, true, false, true);
  const k = (salary / 1000).toFixed(0);

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

        {/* Nearby salaries */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Compare nearby salaries</h2>
          <div className="flex flex-wrap gap-2">
            {SALARY_PAGES
              .filter(s => Math.abs(s - salary) <= 50_000 && s !== salary)
              .slice(0, 8)
              .map(s => (
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
        <div className="mt-6">
          <a href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to calculator
          </a>
        </div>
      </div>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-8">
        Rates based on{' '}
        <a href="https://www.ato.gov.au" target="_blank" rel="noopener" className="text-blue-500 hover:underline">ATO</a>
        {' '}2026–27 tables. For indicative purposes only — not financial or tax advice.
      </footer>
    </main>
  );
}
