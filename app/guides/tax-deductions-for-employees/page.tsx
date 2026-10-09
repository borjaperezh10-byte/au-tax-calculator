import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee Tax Deductions Australia (2026-27)',
  description:
    'A plain-English guide to work-related tax deductions for Australian employees in 2026-27: the three golden rules, what you can and can’t claim, the working-from-home 70c fixed rate, the $300 records rule, and how much a deduction is actually worth.',
  alternates: { canonical: '/guides/tax-deductions-for-employees' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/tax-deductions-for-employees',
    title: 'Tax Deductions for Employees (Australia 2026-27)',
    description:
      'What Australian employees can claim at tax time in 2026-27 — the three golden rules, working-from-home, car, tools, self-education, and what a deduction is really worth.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tax Deductions for Employees (Australia 2026-27)',
  description:
    'What work-related deductions Australian employees can claim in 2026-27, the three golden rules, the working-from-home fixed rate, record-keeping, and how much a deduction is actually worth.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/tax-deductions-for-employees',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is a tax deduction actually worth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A deduction reduces your taxable income, so it is worth your marginal tax rate, not the full amount. A $1,000 deduction for someone on a 32% marginal rate (including Medicare) reduces their tax by about $320, not $1,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim expenses without receipts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your total work-related expense claims are $300 or less, you can claim without written evidence, though you must still have actually spent the money and be able to explain the claim. Above $300 in total, you need records such as receipts for the whole amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I claim the cost of getting to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. The normal daily commute between home and your regular workplace is private and not deductible. Travel between two different work locations, or to a temporary workplace, can usually be claimed.',
      },
    },
  ],
};

export default function DeductionsGuidePage() {
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
            Tax deductions for employees
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            What you can and can&rsquo;t claim at tax time in 2026-27, the records you need, and how
            much a deduction is really worth.
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
            A tax deduction lowers the income you&rsquo;re taxed on, which lowers your tax bill. For
            employees, deductions are almost always <strong className="text-slate-900 dark:text-white">work-related
            expenses</strong> — things you paid for yourself to earn your income and weren&rsquo;t
            reimbursed for. Claiming everything you&rsquo;re entitled to is one of the simplest ways to
            get a bigger refund, but over-claiming is exactly what the ATO looks for, so it pays to know
            the rules.
          </p>
        </section>

        {/* 1. What a deduction is worth */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">First, what a deduction is actually worth</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              A common misconception is that a $1,000 deduction puts $1,000 back in your pocket. It
              doesn&rsquo;t. A deduction reduces your <em>taxable income</em>, so it&rsquo;s worth your{' '}
              <strong className="text-slate-900 dark:text-white">marginal tax rate</strong>. If your top
              dollar is taxed at 30% plus the 2% Medicare levy, a $1,000 deduction cuts your tax by about{' '}
              <strong className="text-slate-900 dark:text-white">$320</strong>. Still worth having — but
              it&rsquo;s a discount on the expense, not a refund of it. Never spend money purely to get
              the deduction.
            </p>
          </div>
        </section>

        {/* 2. Three golden rules */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The three golden rules</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>The ATO applies the same three tests to every work-related claim:</p>
            <ol className="space-y-2 pl-5 list-decimal marker:text-blue-400 marker:font-semibold">
              <li>You <strong className="text-slate-900 dark:text-white">spent the money yourself</strong> and weren&rsquo;t reimbursed.</li>
              <li>The expense <strong className="text-slate-900 dark:text-white">directly relates to earning your income</strong>.</li>
              <li>You have a <strong className="text-slate-900 dark:text-white">record</strong> to prove it.</li>
            </ol>
            <p>
              If an expense is part work, part private (a phone, say), you can only claim the
              work-related portion. Get any one of these three wrong and the claim can be denied on
              review.
            </p>
          </div>
        </section>

        {/* 3. What you can claim */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What employees can commonly claim</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ul className="space-y-3 pl-4 list-disc marker:text-blue-400">
              <li>
                <strong className="text-slate-900 dark:text-white">Working from home.</strong> You can
                use the ATO&rsquo;s fixed-rate method — <strong className="text-slate-900 dark:text-white">70
                cents per hour</strong> worked from home, covering electricity, gas, phone, internet and
                stationery — as long as you keep a genuine record of the hours you actually worked from
                home across the year (an estimate isn&rsquo;t enough). Alternatively you can claim the
                actual work-related portion of each cost.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Car and travel.</strong> Not your
                normal commute, but travel between two workplaces, to a temporary work site, or trips
                you make for work during the day. The cents-per-kilometre method lets you claim a set
                rate per work kilometre up to a yearly cap without keeping fuel receipts.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Tools and equipment.</strong> Items
                you buy for work — a laptop, tools, a desk. Items costing $300 or less can be claimed in
                full immediately; more expensive items are claimed gradually as they depreciate.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Self-education</strong> that directly
                relates to your <em>current</em> job — a course, conference, or professional development
                that maintains or improves the skills you use now.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Union fees, professional memberships
                and subscriptions</strong> relevant to your work.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Work-specific clothing and laundry</strong> —
                a compulsory uniform with a logo, occupation-specific gear, or protective clothing (not
                plain clothes you could wear anywhere).
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">The work portion of phone and
                internet</strong>, and income protection insurance premiums (where the policy is held
                outside super).
              </li>
            </ul>
          </div>
        </section>

        {/* 4. What you can't claim */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What you can&rsquo;t claim</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ul className="space-y-2 pl-4 list-disc marker:text-slate-400">
              <li>The normal daily commute between home and your regular workplace.</li>
              <li>Conventional clothing — a suit or plain black clothes — even if your employer requires it.</li>
              <li>Anything your employer already reimbursed you for.</li>
              <li>Private portions of a mixed expense, and everyday personal costs like childcare or coffee.</li>
            </ul>
          </div>
        </section>

        {/* 5. Records */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The $300 rule and keeping records</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If your <strong className="text-slate-900 dark:text-white">total</strong> work-related
              claims come to <strong className="text-slate-900 dark:text-white">$300 or less</strong>,
              you don&rsquo;t need written receipts — but you must genuinely have spent the money and be
              able to explain how you worked out the claim. Once your total goes over $300, you need
              proper records (receipts, invoices, logbooks) for the <em>whole</em> amount, not just the
              part above $300.
            </p>
            <p>
              The easiest way to stay ready is to keep records as you go. The ATO&rsquo;s myDeductions
              tool in the ATO app lets you photograph receipts and log trips through the year, so
              nothing&rsquo;s scrambled together at tax time.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is a deduction the same as a refund?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. A deduction lowers your taxable income; its value is the amount times your marginal
                rate. A $1,000 deduction at a 32% marginal rate saves about $320 in tax.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do I need receipts for everything?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Only once your total work-related claims exceed $300. Below that you can claim without
                written evidence, but you still must have spent the money and be able to justify it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can I claim working-from-home costs?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Yes, if you genuinely work from home. The fixed-rate method is 70 cents per hour worked
                from home and covers energy, phone, internet and stationery — provided you keep a real
                record of your hours across the year.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 rules, not personal tax advice.
            Deduction rules, rates and caps are set by the ATO and change over time. What you can claim
            depends on your specific job and circumstances — check the ATO&rsquo;s occupation guides or
            a registered tax agent. See how deductions flow through your take-home on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/guides/how-australian-income-tax-works" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How income tax works</a>
            <a href="/guides/salary-sacrifice-explained" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Salary sacrifice explained</a>
            <a href="/guides/medicare-levy-and-surcharge" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Medicare levy &amp; surcharge</a>
          </div>
        </section>
      </div>
    </main>
  );
}
