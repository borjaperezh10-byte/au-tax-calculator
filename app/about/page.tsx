import type { Metadata } from 'next';
import { LAST_REVIEWED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About — AU Income Tax Calculator',
  description:
    'About auincometax.com — a free Australian income tax calculator built to provide accurate, up-to-date take-home pay estimates for the 2026-27 financial year.',
  alternates: { canonical: 'https://www.auincometax.com/about' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">About This Calculator</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            What we are, how we work, and what we are not.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* What it is */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What is auincometax.com?</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-600 dark:text-slate-400 space-y-4">
            <p>
              auincometax.com is a free, independent Australian income tax calculator for the 2026-27 financial year (1 July 2026 – 30 June 2027). It calculates estimated take-home pay, income tax, Medicare Levy, HECS/HELP repayments, and employer superannuation for Australian residents, non-residents, and working holiday makers.
            </p>
            <p>
              The calculator is built for individuals who want a quick, clear estimate of their net pay — employees, job seekers comparing offers, contractors, students, recent graduates, and anyone moving to or within Australia.
            </p>
          </div>
        </section>

        {/* Data sources */}
        <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Data sources and accuracy</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              All tax rates, thresholds, and offsets are sourced directly from the{' '}
              <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Australian Taxation Office (ATO)
              </a>{' '}
              and the{' '}
              <a href="https://treasury.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Australian Treasury
              </a>.
              We cite the specific ATO pages used in our{' '}
              <a href="/methodology" className="text-blue-600 dark:text-blue-400 hover:underline">Methodology</a>.
            </p>
            <p>
              The 2026-27 HECS/HELP repayment thresholds are estimated from 2024-25 ATO published bands, indexed by CPI, as the ATO typically does not confirm the following year's thresholds until after 1 July. These estimates are clearly marked throughout the site.
            </p>
            <p>
              Results are estimates only. They do not account for all individual circumstances, salary sacrifice arrangements not entered by the user, tax agent deductions, fringe benefits, investment income, or other complex situations. Always confirm your tax position with a registered tax agent or the ATO&apos;s own tools.
            </p>
          </div>
        </section>

        {/* What it is not */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What this calculator is not</h2>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {[
              'A registered tax agent or financial adviser',
              'A substitute for professional tax advice',
              'A guarantee of your actual tax liability',
              'Connected to or endorsed by the ATO or Australian Government',
              'A tool for lodging tax returns',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Corrections */}
        <section className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Corrections and updates</h2>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            If you believe any calculation or rate is incorrect, please{' '}
            <a href="/contact" className="underline hover:no-underline">contact us</a>{' '}
            with the specific issue and the ATO source you are referencing. We aim to review and respond to correction requests within 5 business days. Verified corrections are applied immediately and noted in the{' '}
            <a href="/changelog" className="underline hover:no-underline">changelog</a>.
          </p>
        </section>

        {/* Last reviewed */}
        <div className="text-xs text-slate-400 text-center">
          Page last reviewed: {LAST_REVIEWED}
        </div>
      </div>
    </main>
  );
}
