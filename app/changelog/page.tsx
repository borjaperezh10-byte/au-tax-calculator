import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — AU Income Tax Calculator',
  description:
    'History of updates, corrections, and improvements to auincometax.com — the free Australian income tax calculator for 2026-27.',
  alternates: { canonical: 'https://www.auincometax.com/changelog' },
};

const ENTRIES = [
  {
    date: 'July 2026',
    version: '2.0',
    label: 'Major update',
    labelColor: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
    changes: [
      'Updated all resident, non-resident, and working holiday maker tax rates for 2026-27.',
      'Implemented Stage 3 tax cuts: resident 19% bracket reduced to 15% from 1 July 2026.',
      'Working holiday maker bracket above $45,000 reduced from 32.5% to 30%.',
      'Updated Superannuation Guarantee rate to 12% (effective 1 July 2025).',
      'Added Working Holiday Maker dedicated page and calculator.',
      'Added salary sacrifice input (pre-tax super contributions).',
      'Updated HECS/HELP repayment thresholds (estimated from 2024-25 + CPI indexation — pending ATO confirmation of final 2026-27 figures).',
      'Added Medicare Levy Surcharge (MLS) thresholds for 2026-27.',
      'Added Methodology, About, Tax Disclaimer, Glossary, Changelog, and Contact pages.',
      'Improved accessibility: skip-to-content link, ARIA labels, live region for calculator results.',
      'Updated structured data (JSON-LD) for homepage, tax brackets, and working holiday maker pages.',
    ],
  },
  {
    date: 'October 2025',
    version: '1.3',
    label: 'Fix',
    labelColor: 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300',
    changes: [
      'Fixed HECS/HELP repayment calculation: repayment is now correctly applied to total repayment income (not marginal). Previously overstated for some income bands.',
      'Corrected LITO phase-out formula: second phase-out step now starts correctly at $45,001.',
    ],
  },
  {
    date: 'July 2025',
    version: '1.2',
    label: 'Update',
    labelColor: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
    changes: [
      'Added non-resident tax residency option.',
      'Added salary pages for 25 common income amounts.',
      'Added tax brackets reference page.',
      'Added sitemap.xml and robots.txt.',
    ],
  },
  {
    date: 'July 2024',
    version: '1.0',
    label: 'Launch',
    labelColor: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
    changes: [
      'Initial launch of auincometax.com for the 2024-25 financial year.',
      'Resident income tax, Medicare Levy, HECS/HELP, and employer super calculations.',
      'Weekly, fortnightly, monthly, and annual period toggles.',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Changelog</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Updates, corrections, and improvements to auincometax.com.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />

          <div className="space-y-10">
            {ENTRIES.map(({ date, version, label, labelColor, changes }) => (
              <div key={version} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500" aria-hidden="true" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">v{version}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${labelColor}`}>{label}</span>
                  <span className="text-xs text-slate-400">{date}</span>
                </div>

                <ul className="space-y-2">
                  {changes.map((change, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">–</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-xs text-slate-400 text-center">
          Found an error? <a href="/contact" className="text-blue-500 hover:underline">Contact us</a> with the correct ATO source.
        </div>
      </div>
    </main>
  );
}
