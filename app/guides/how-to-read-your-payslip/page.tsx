import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Read Your Payslip (2026-27)',
  description:
    'A plain-English guide to reading an Australian payslip: gross vs net pay, tax withheld, super on top, year-to-date figures, deductions and Payday Super, with a fully worked $90,000 example.',
  alternates: { canonical: '/guides/how-to-read-your-payslip' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/how-to-read-your-payslip',
    title: 'How to Read Your Payslip in Australia (2026-27)',
    description:
      'Gross, tax withheld, net pay, super and year-to-date figures: what each line on an Australian payslip means, with a worked $90,000 example.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read Your Payslip in Australia (2026-27)',
  description:
    'What each line on an Australian payslip means, how gross turns into net pay, and how super and year-to-date figures work in 2026-27.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/how-to-read-your-payslip',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is super deducted from my pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Your employer pays the 12% super guarantee on top of your wages, into your super fund. It appears on your payslip as an employer contribution but does not reduce your take-home pay, unless you have chosen to salary sacrifice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my net pay lower than my salary divided by pay periods?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your salary is your gross pay. Income tax (PAYG withholding), the Medicare levy and any study loan repayment are taken out before you are paid, so the net amount deposited is lower.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does year-to-date (YTD) mean on a payslip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YTD is the running total for the financial year from 1 July: your gross pay, tax withheld and super so far. It should line up with your income statement at the end of the year.',
      },
    },
  ],
};

const ROWS = [
  { label: 'Gross pay', v: '$3,461.54', note: '$90,000 ÷ 26 pay periods' },
  { label: 'Income tax withheld (PAYG)', v: '−$673.85', note: '$17,520 tax for the year ÷ 26' },
  { label: 'Medicare levy', v: '−$69.23', note: '2% of gross, $1,800 ÷ 26' },
  { label: 'Net pay (deposited)', v: '$2,718.46', note: '$70,680 ÷ 26' },
  { label: 'Super (employer, on top)', v: '$415.38', note: '12% of gross, $10,800 ÷ 26' },
];

export default function PayslipGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            How to read your Australian payslip
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Gross, tax withheld, net pay, super and year-to-date figures: what each line means and how
            they add up, with a full $90,000 example for 2026-27.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Updated
            September 2026 · Figures are FY 2026-27
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Intro */}
        <section className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
          <p>
            A payslip is short, but it&rsquo;s easy to misread: the number you were promised is not the
            number that lands in your bank. Employers must give you a payslip after each payment, and
            once you know the handful of lines that matter, you can check in about a minute that you were
            paid and taxed correctly. Here&rsquo;s what each part means for the 2026-27 year.
          </p>
        </section>

        {/* 1. The lines */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The lines that matter</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-slate-900 dark:text-white">Gross pay.</strong> What you earned
                for the period before anything is taken out. If your salary is $90,000 and you&rsquo;re
                paid fortnightly, this is $90,000 ÷ 26. It also includes overtime, allowances and
                penalty rates for the period.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Tax withheld (PAYG).</strong> Income
                tax your employer takes out and sends to the ATO for you. It&rsquo;s an estimate of your
                year&rsquo;s tax spread across pay periods, worked out from ATO tables using the
                declaration you gave them when you started.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Medicare levy.</strong> Most
                residents pay 2% of income. Often it&rsquo;s bundled into the single tax withheld
                figure rather than shown separately, so don&rsquo;t worry if your payslip has just one
                tax line.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Other deductions.</strong> Study loan
                (HECS-HELP) repayments, salary sacrifice, union fees or novated lease payments. These
                appear as their own lines.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Net pay.</strong> What&rsquo;s
                deposited: gross minus tax and other deductions.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Superannuation.</strong> The amount
                your employer pays into your fund. Crucially, this is <em>on top</em> of your wages, not
                taken out of them.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Year-to-date (YTD).</strong> Running
                totals since 1 July for gross pay, tax withheld and super.
              </li>
            </ul>
          </div>
        </section>

        {/* 2. Worked example */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A worked example: $90,000, paid fortnightly</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Take a resident on a $90,000 salary paid every two weeks (26 pay periods), no HECS debt and
              no salary sacrifice. Their tax for 2026-27 is $17,520 plus $1,800 Medicare levy, which
              leaves $70,680 for the year.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Payslip line</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Fortnight</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Where it comes from</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  {ROWS.map((r) => (
                    <tr key={r.label} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-sans">{r.label}</td>
                      <td className="px-3 py-2">{r.v}</td>
                      <td className="px-3 py-2 font-sans text-slate-500 dark:text-slate-400">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              So the salary that sounded like $3,461 a fortnight puts $2,718 in the bank, and another
              $415 goes to super on top. Over the year that&rsquo;s $70,680 in your account and $10,800
              in your super. In monthly terms it&rsquo;s about $5,890 net. See the{' '}
              <a href="/take-home-pay-reference" className="text-blue-600 dark:text-blue-400 hover:underline">
                take-home pay reference
              </a>{' '}
              for other salaries.
            </p>
            <p className="text-xs text-slate-400">
              Your actual payslip can differ by a few dollars: employers withhold using the ATO&rsquo;s
              tax tables, which round and estimate, and it will differ more if you have a study loan,
              claim offsets or salary sacrifice.
            </p>
          </div>
        </section>

        {/* 3. Super */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Super: check it&rsquo;s actually being paid</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The super guarantee rate is <strong className="text-slate-900 dark:text-white">12%</strong>.
              Since 1 July 2026, under Payday Super, employers must pay it into your fund within 7
              business days of paying you, rather than saving it up quarterly. That has two practical
              effects for you: your payslip&rsquo;s super line should match a deposit in your fund soon
              after each pay, and a missing payment becomes visible much faster.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              A good habit: once a quarter, log in to your super fund and check that contributions
              match the super shown on your payslips. If they don&rsquo;t, ask your employer first and
              contact the ATO if it isn&rsquo;t fixed.
            </p>
            <p>
              If you salary sacrifice, that amount comes off your gross pay before tax and goes into
              super instead, so your net pay falls by less than the amount you sacrifice. See{' '}
              <a href="/guides/salary-sacrifice-explained" className="text-blue-600 dark:text-blue-400 hover:underline">
                salary sacrifice explained
              </a>{' '}
              for the numbers.
            </p>
          </div>
        </section>

        {/* 4. YTD and the year end */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Year-to-date figures and your tax return</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The YTD totals are what your employer reports to the ATO through Single Touch Payroll each
              time they pay you. By the end of the financial year your last payslip&rsquo;s YTD gross and
              tax should match the income statement in your ATO online account, which is what your tax
              return is built on. If they don&rsquo;t match, raise it with your employer before you
              lodge.
            </p>
            <p>
              A quick check during the year: divide your YTD tax withheld by YTD gross. If your salary
              is $90,000, it should be near 21.5% ($17,520 tax plus $1,800 Medicare is $19,320, divided by
              $90,000). If it&rsquo;s far higher, you may be on the wrong withholding declaration, for
              example having the tax-free threshold not claimed or a second job.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Why is my take-home lower than I expected?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Because the salary in your contract is gross. Tax, the Medicare levy and any study loan
                repayment come out before you&rsquo;re paid. Use the{' '}
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
                to see the net figure for your salary.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is super part of my salary?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                It depends on your contract. Many jobs advertise a salary <em>plus</em> super, in which
                case the 12% is on top. A &ldquo;package&rdquo; or &ldquo;total remuneration&rdquo;
                figure often includes super, so your cash pay is lower. Check which one your contract
                uses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Will my tax withheld be exactly my tax bill?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Not necessarily. Withholding is an estimate. Deductions, a second job or a study loan
                can leave you with a refund or a bill when you lodge your return.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 year, not personal tax, payroll or
            financial advice. Payslips vary by employer and award, and withholding follows ATO tables.
            If something looks wrong, ask your employer or contact the ATO. Full workings are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/take-home-pay-reference" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay reference</a>
            <a href="/guides/how-australian-income-tax-works" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How income tax works</a>
            <a href="/guides/salary-sacrifice-explained" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Salary sacrifice explained</a>
          </div>
        </section>
      </div>
    </main>
  );
}
