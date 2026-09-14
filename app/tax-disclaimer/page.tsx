import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Disclaimer — AU Income Tax Calculator',
  description:
    'Important disclaimer for auincometax.com — what the calculator covers, its limitations, and when to seek professional advice.',
  alternates: { canonical: 'https://www.auincometax.com/tax-disclaimer' },
  robots: { index: true, follow: true },
};

export default function TaxDisclaimerPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tax Disclaimer</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            What this calculator covers, what it does not cover, and when to seek professional advice.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Primary disclaimer */}
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <h2 className="font-bold text-red-900 dark:text-red-200 text-base mb-3">This is not tax advice</h2>
          <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
            auincometax.com is an independent educational tool. Results are estimates only and do not constitute tax advice, financial advice, or accounting services. They should not be relied upon to determine your actual tax liability. Always confirm your tax position with a registered tax agent or the Australian Taxation Office (ATO).
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What the calculator includes</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>The calculator estimates the following for Australian tax residents, non-residents, and working holiday makers for the 2026-27 financial year (1 July 2026 – 30 June 2027):</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Income tax at legislated 2026-27 marginal rates (ATO Schedule 1)</li>
              <li>Low Income Tax Offset (LITO) for residents</li>
              <li>Medicare Levy (2%) with shade-in thresholds for residents</li>
              <li>Medicare Levy Surcharge (1–1.5%) for high-income residents without private hospital cover</li>
              <li>HECS/HELP repayment amounts based on estimated 2026-27 repayment income thresholds</li>
              <li>Employer superannuation contributions (Superannuation Guarantee: 12% from 1 July 2025)</li>
              <li>Salary sacrifice (pre-tax super contributions)</li>
              <li>Basic work-related deductions (entered by the user)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What the calculator does NOT include</h2>
          <div className="space-y-3">
            {[
              {
                title: 'Other income sources',
                detail: 'Investment income, rental income, capital gains, dividends, trust distributions, business income, or income from multiple jobs are not included. The calculator assumes salary/wages as the only income source.',
              },
              {
                title: 'Tax offsets beyond LITO',
                detail: 'The Low and Middle Income Tax Offset (LMITO) no longer applies from 2022-23. The Seniors and Pensioners Tax Offset (SAPTO), Dependent Spouse Offset, and other personal offsets are not included.',
              },
              {
                title: 'Deductions beyond the work-related field',
                detail: 'Tax agent fees, charitable donations, investment deductions, rental property deductions, and other legitimate deductions (other than the basic work-related amount you enter) are not included.',
              },
              {
                title: 'Salary sacrifice arrangements beyond super',
                detail: 'Novated leases, FBT-exempt laptop arrangements, childcare salary sacrifice, and other non-super salary sacrifice arrangements are not modelled.',
              },
              {
                title: 'State or territory taxes',
                detail: 'Payroll tax, land tax, and other state/territory levies are not included.',
              },
              {
                title: 'Fringe Benefits Tax (FBT)',
                detail: 'FBT implications of employer benefits are not modelled.',
              },
              {
                title: 'Foreign income and foreign tax credits',
                detail: 'Income earned overseas, foreign tax credits, and double tax agreement provisions are not included.',
              },
              {
                title: 'Medicare Levy exemptions',
                detail: 'Full or half Medicare Levy exemptions (e.g. for certain categories of temporary residents, or SAPTO recipients) are not modelled.',
              },
              {
                title: 'The Low Income Superannuation Tax Offset (LISTO)',
                detail: 'LISTO (a government contribution to super for low earners) is not included.',
              },
            ].map(({ title, detail }) => (
              <div key={title} className="flex gap-3 text-sm">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✕</span>
                <div>
                  <strong className="text-slate-700 dark:text-slate-300">{title}:</strong>{' '}
                  <span className="text-slate-500 dark:text-slate-400">{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">Estimated thresholds</h2>
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            The HECS/HELP repayment thresholds for 2026-27 are estimates, indexed from the 2024-25 ATO-published figures by CPI. The ATO typically confirms these figures after 1 July each year. These estimates are clearly marked throughout the site. We will update them when the ATO publishes final figures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">When you should seek professional advice</h2>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>You should consult a registered tax agent or accountant if you:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Have income from investments, rental properties, trusts, or businesses</li>
              <li>Have worked in multiple countries during the financial year</li>
              <li>Are unsure of your Australian tax residency status</li>
              <li>Have complex salary packaging, FBT, or share scheme income</li>
              <li>Are lodging a tax return for the first time</li>
              <li>Have received an ATO notice or are subject to an audit</li>
              <li>Need to determine your actual PAYG withholding obligations</li>
            </ul>
            <p className="mt-3">
              You can find a registered tax agent at{' '}
              <a href="https://www.tpb.gov.au/find-tax-practitioner" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Tax Practitioners Board
              </a>{' '}
              or use the ATO&apos;s own calculators at{' '}
              <a href="https://www.ato.gov.au/calculators-and-tools" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                ato.gov.au/calculators-and-tools
              </a>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">No affiliation with the ATO</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            auincometax.com is an independent website. It is not affiliated with, endorsed by, or connected to the Australian Taxation Office, the Australian Government, or any other government body. Tax rates sourced from the ATO are used for informational purposes only.
          </p>
        </section>

        <div className="text-xs text-slate-400 text-center">
          Disclaimer last reviewed: July 2026
        </div>
      </div>
    </main>
  );
}
