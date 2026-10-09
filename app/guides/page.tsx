import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Australian Tax Guides (2026-27)',
  description:
    'Plain-English guides to Australian income tax for 2026-27: how tax works, marginal vs effective rates, Medicare levy, payslips, salary sacrifice, second jobs, deductions, working holiday makers and tax return deadlines.',
  alternates: { canonical: '/guides' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides',
    title: 'Australian Tax Guides (2026-27)',
    description:
      'Plain-English guides to Australian income tax, take-home pay, super and tax returns, with worked examples for 2026-27.',
    type: 'website',
  },
};

type Guide = { href: string; title: string; blurb: string };
type Group = { heading: string; intro: string; guides: Guide[] };

const GROUPS: Group[] = [
  {
    heading: 'The basics',
    intro: 'How the system works before you look at your own numbers.',
    guides: [
      {
        href: '/guides/how-australian-income-tax-works',
        title: 'How Australian Income Tax Works',
        blurb: 'The tax-free threshold, marginal brackets, LITO, the Medicare levy, super, HECS-HELP and residency, with worked examples for 2026-27.',
      },
      {
        href: '/guides/marginal-vs-effective-tax-rate',
        title: 'Marginal vs Effective Tax Rate',
        blurb: 'Why a pay rise never drops your take-home pay, with the real rate on each extra dollar from $40k to $200k.',
      },
      {
        href: '/guides/medicare-levy-and-surcharge',
        title: 'Medicare Levy & Surcharge',
        blurb: 'The 2% levy, the low-income thresholds, who pays the surcharge and how private hospital cover can save you money.',
      },
    ],
  },
  {
    heading: 'Your pay',
    intro: 'What lands in your bank account and why.',
    guides: [
      {
        href: '/guides/how-to-read-your-payslip',
        title: 'How to Read Your Payslip',
        blurb: 'Gross, tax withheld, net pay, super and year-to-date figures, with a worked $90,000 example.',
      },
      {
        href: '/guides/salary-sacrifice-explained',
        title: 'Salary Sacrifice Explained',
        blurb: 'How sacrificing into super saves tax, the 15% contributions rate vs your marginal rate, the concessional cap and the HECS trap.',
      },
      {
        href: '/guides/tax-on-a-second-job',
        title: 'Tax on a Second Job',
        blurb: 'Why a second job is taxed harder, how the tax-free threshold works and how to avoid a surprise bill.',
      },
    ],
  },
  {
    heading: 'Tax time',
    intro: 'Lodging your return and claiming what you are entitled to.',
    guides: [
      {
        href: '/guides/tax-return-deadline-and-refunds',
        title: 'Tax Return Deadline & Refunds',
        blurb: 'The 31 October deadline, how long refunds take and what happens if you lodge late.',
      },
      {
        href: '/guides/instant-1000-work-deduction',
        title: 'The $1,000 Instant Work Deduction',
        blurb: 'The new standard deduction from 2026-27: who gets it, how your own claims reduce it, and when you still need receipts.',
      },
      {
        href: '/guides/tax-deductions-for-employees',
        title: 'Tax Deductions for Employees',
        blurb: 'The three golden rules for work-related deductions, and what Australian employees can and can\u2019t claim.',
      },
    ],
  },
  {
    heading: 'Working holiday makers',
    intro: 'A separate set of rules for visa holders.',
    guides: [
      {
        href: '/guides/working-holiday-maker-tax',
        title: 'Working Holiday Maker Tax',
        blurb: 'How working holiday makers are taxed in Australia, how it differs from resident tax and what to do at tax time.',
      },
      {
        href: '/guides/how-88-days-are-counted',
        title: 'How the 88 Days Are Counted',
        blurb: 'Calendar days, weekends, part-time work, rain days, rosters and piece rates — with worked examples.',
      },
      {
        href: '/guides/specified-work-postcodes',
        title: 'Does My Postcode Count? (Checker)',
        blurb: 'Check whether a postcode counts for farm, construction, hospitality or recovery work on a 417 or 462.',
      },
      {
        href: '/guides/specified-work-evidence',
        title: 'Evidence for Your 88 Days',
        blurb: 'The payslips, bank statements and references Home Affairs asks for, and how to keep them organised.',
      },
      {
        href: '/guides/417-vs-462-specified-work',
        title: '417 vs 462: Specified Work',
        blurb: 'Which industries count where on each visa — mining, fishing, tree work and the UK exemption.',
      },
      {
        href: '/guides/third-working-holiday-visa-179-days',
        title: 'Third Visa: The 179 Days',
        blurb: 'Six months of specified work during your second visa, the 1 July 2019 rule and bridging visas.',
      },
      {
        href: '/guides/uk-working-holiday-specified-work-exemption',
        title: 'UK Citizens and the 88 Days',
        blurb: 'Why UK passport holders applying from 1 July 2024 don’t need specified work for a 417.',
      },
      {
        href: '/guides/working-holiday-6-month-employer-limit',
        title: 'The 6-Month Rule with One Employer',
        blurb: 'When your 6 months end, which sectors are exempt, locations, labour hire and permission.',
      },
    ],
  },
];

const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Australian Tax Guides (2026-27)',
  url: 'https://www.auincometax.com/guides',
  inLanguage: 'en-AU',
  isPartOf: { '@type': 'WebSite', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: GROUPS.flatMap((g) => g.guides).map((guide, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: guide.title,
      url: `https://www.auincometax.com${guide.href}`,
    })),
  },
};

export default function GuidesIndexPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guides · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Australian tax guides
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Plain-English explanations of how Australian income tax, take-home pay, super and tax returns
            work, each with worked examples using the 2026-27 rates.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Figures are FY 2026-27 ·
            General information only, not tax advice
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {GROUPS.map((group) => (
          <section key={group.heading}>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{group.heading}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3">{group.intro}</p>
            <ul className="divide-y divide-slate-200 dark:divide-slate-700 border-y border-slate-200 dark:border-slate-700" role="list">
              {group.guides.map((guide) => (
                <li key={guide.href}>
                  <a href={guide.href} className="block py-4 group">
                    <span className="text-base font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      {guide.title}
                    </span>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mt-1">{guide.blurb}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Related tools */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Tools and reference</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Income tax calculator</a>
            <a href="/tax-brackets" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax brackets 2026-27</a>
            <a href="/salary-table" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Salary &amp; tax table</a>
            <a href="/hecs-help-repayment" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">HECS-HELP repayment</a>
            <a href="/88-days-calculator" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">88 days calculator</a>
            <a href="/glossary" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax glossary</a>
          </div>
        </section>
      </div>
    </main>
  );
}
