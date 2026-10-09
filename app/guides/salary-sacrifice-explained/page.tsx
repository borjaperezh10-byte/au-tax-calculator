import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salary Sacrifice Explained (2026-27)',
  description:
    'A plain-English guide to salary sacrifice in Australia for 2026-27: how sacrificing into super saves tax, the 15% contributions rate vs your marginal rate, the $32,500 concessional cap, Division 293, carry-forward, and the HECS trap. With a worked example.',
  alternates: { canonical: '/guides/salary-sacrifice-explained' },
  openGraph: {
    url: '/guides/salary-sacrifice-explained',
    title: 'Salary Sacrifice Explained (Australia 2026-27)',
    description:
      'How salary sacrifice into super cuts your tax, the $32,500 concessional cap, Division 293, and the traps to watch — explained for 2026-27 with a worked example.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Salary Sacrifice Explained (Australia 2026-27)',
  description:
    'How salary sacrifice into super saves tax in Australia for 2026-27: the 15% contributions rate versus your marginal rate, the $32,500 concessional cap, Division 293, carry-forward and the HECS trap.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/salary-sacrifice-explained',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax does salary sacrifice into super save?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sacrificed contributions are taxed at 15% inside super instead of at your marginal income tax rate. So the saving is roughly the gap between your marginal rate and 15%. For someone on a 32% marginal rate (including Medicare), sacrificing $10,000 saves about $1,700 in tax, and the money goes into super rather than your bank account.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the concessional contributions cap for 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The concessional (before-tax) contributions cap for 2026-27 is $32,500. This includes your employer super guarantee, any salary sacrifice, and any personal contributions you claim a deduction for. Going over the cap means the excess is taxed at your marginal rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does salary sacrifice reduce my HECS-HELP repayment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Reportable super contributions, including salary sacrifice, are added back when the ATO works out your HECS-HELP repayment income. So sacrificing into super lowers your income tax but does not reduce your compulsory student loan repayment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I access salary-sacrificed super early?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. Money in super is preserved until you reach your preservation age and meet a condition of release (usually retirement). That is the main trade-off: the tax saving comes with locking the money away for the long term.',
      },
    },
  ],
};

export default function SalarySacrificeGuidePage() {
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
            Salary sacrifice, explained
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            How trading some of your pre-tax salary into super can cut your tax bill in 2026-27 — the
            savings, the caps, and the traps most guides skip.
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
            Salary sacrifice is one of the few genuinely simple tax strategies available to ordinary
            employees in Australia — and one of the most misunderstood. At its core it&rsquo;s an
            arrangement with your employer to take part of your pay <em>before</em> tax and direct it
            somewhere else, most commonly into your superannuation. Because that money is taxed at a
            flat 15% inside super instead of at your marginal income tax rate, it can leave you
            meaningfully better off — as long as you understand the caps and the trade-offs.
          </p>
          <p>
            This guide explains how it works for the <strong className="text-slate-900 dark:text-white">2026-27
            financial year</strong>, with a worked example, and flags the two things people most often
            get wrong: the contributions cap and the HECS trap. You can model any sacrifice amount in
            our{' '}
            <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">take-home pay calculator</a>{' '}
            — it has a salary-sacrifice field built in.
          </p>
        </section>

        {/* 1. What it is */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What salary sacrifice actually is</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              A salary sacrifice arrangement is an agreement, made with your employer{' '}
              <em>before</em> you earn the income, to forgo part of your salary in return for a
              benefit of similar value. The classic version is extra super contributions, but it can
              also cover a <strong className="text-slate-900 dark:text-white">novated lease</strong> on
              a car, or work-related items like a laptop or phone. The common thread is that the amount
              comes out of your <em>pre-tax</em> salary, lowering your taxable income.
            </p>
            <p>
              This guide focuses on the most common and most useful form: sacrificing into super.
              (Note that from 2020 the tax office closed a loophole — sacrificed amounts can no longer
              reduce the super your employer is legally required to pay you, so your 12% guarantee is
              safe on top.)
            </p>
          </div>
        </section>

        {/* 2. How it saves tax */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why it saves tax: 15% vs your marginal rate</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Money you take as salary is taxed at your <strong className="text-slate-900 dark:text-white">marginal
              rate</strong> — up to 45% plus the 2% Medicare levy. Money you salary sacrifice into
              super is instead taxed at a flat <strong className="text-slate-900 dark:text-white">15%</strong>{' '}
              contributions tax when it enters the fund. The saving is simply the gap between those two
              numbers. The higher your marginal rate, the bigger the gap — which is why salary sacrifice
              is most powerful for middle and higher earners.
            </p>
          </div>
        </section>

        {/* 3. Worked example */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A worked example: sacrificing $10,000</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Say you earn $100,000 as a resident. Your marginal rate is 30% plus the 2% Medicare
              levy, so every dollar at the top of your income is taxed at{' '}
              <strong className="text-slate-900 dark:text-white">32%</strong>. Now compare what happens
              to a $10,000 slice of that salary:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">$10,000 of salary</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Taken as cash</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300 text-right">Sacrificed to super</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">Tax on it</td>
                    <td className="px-3 py-2 text-right">$3,200 (32%)</td>
                    <td className="px-3 py-2 text-right">$1,500 (15%)</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">What you end up with</td>
                    <td className="px-3 py-2 text-right">$6,800 in your bank</td>
                    <td className="px-3 py-2 text-right text-emerald-600 dark:text-emerald-400">$8,500 in super</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You&rsquo;ve turned $6,800 of spendable cash into{' '}
              <strong className="text-slate-900 dark:text-white">$8,500</strong> working for your
              retirement — an extra $1,700, which is the 17-percentage-point gap between your 32%
              marginal rate and the 15% contributions tax. (Because sacrificing also trims the income
              your Medicare levy is worked out on, the real gain is usually a touch larger.)
            </p>
            <p className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/40 pl-4 py-3 rounded-r">
              <strong className="text-slate-900 dark:text-white">The catch:</strong> that $8,500 is now
              in super, not your pocket. Salary sacrifice doesn&rsquo;t make you richer today — it moves
              money from &ldquo;now&rdquo; to &ldquo;retirement&rdquo; and shaves the tax off on the way.
              Only sacrifice what you genuinely don&rsquo;t need to live on.
            </p>
          </div>
        </section>

        {/* 4. The cap */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The concessional cap: $32,500</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              You can&rsquo;t sacrifice unlimited amounts at the 15% rate. Before-tax contributions are
              capped. For 2026-27 the <strong className="text-slate-900 dark:text-white">concessional
              contributions cap is $32,500</strong> (up from $30,000). Crucially, this cap includes{' '}
              <em>everything</em> that goes into super before tax:
            </p>
            <ul className="space-y-2 pl-4 list-disc marker:text-blue-400">
              <li>the 12% super guarantee your employer already pays;</li>
              <li>anything you salary sacrifice;</li>
              <li>any personal contributions you later claim a tax deduction for.</li>
            </ul>
            <p>
              So if your employer is already putting in, say, $14,400 (12% of a $120,000 salary), you
              have roughly $18,000 of room left to sacrifice before you hit the cap. Go over it and the
              excess is added back to your income and taxed at your marginal rate (with a 15% offset for
              the tax already paid), so it&rsquo;s worth staying inside it.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Carry-forward:</strong> if your total
              super balance was under $500,000 at the end of the previous year, you can use up unused
              cap amounts from the past five years — handy if you have a one-off high-income year or a
              lump sum to contribute.
            </p>
          </div>
        </section>

        {/* 5. Division 293 */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Division 293: high earners lose half the benefit</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If your income plus your concessional contributions exceeds{' '}
              <strong className="text-slate-900 dark:text-white">$250,000</strong>, an extra 15% tax —
              called <em>Division 293</em> — applies to those contributions. That lifts the tax on
              sacrificed money from 15% to 30%. It&rsquo;s still below the 47% top marginal rate, so
              sacrifice can remain worthwhile, but the advantage is roughly halved. The ATO assesses and
              bills this separately, so it won&rsquo;t show up in your normal take-home figure.
            </p>
          </div>
        </section>

        {/* 6. The HECS trap */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The HECS trap most people miss</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Here&rsquo;s the one that catches people out. You might think sacrificing salary to drop
              your taxable income below a HECS-HELP threshold would reduce your student loan repayment.
              It <strong className="text-slate-900 dark:text-white">doesn&rsquo;t</strong>. When the ATO
              works out your HECS-HELP <em>repayment income</em>, it adds your reportable super
              contributions — including salary sacrifice — straight back on. So salary sacrifice lowers
              your income tax but leaves your compulsory student loan repayment untouched. We explain
              this in full on the{' '}
              <a href="/hecs-help-repayment" className="text-blue-600 dark:text-blue-400 hover:underline">HECS-HELP repayment page</a>.
            </p>
          </div>
        </section>

        {/* 7. Is it worth it */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Is it worth it for you?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Salary sacrifice into super tends to make most sense if your marginal rate is comfortably
              above 15% (so, taxable income above $45,000), you won&rsquo;t need the money before
              retirement, and you have cap room to spare. It makes less sense if money is tight
              day-to-day, if you&rsquo;re close to a home deposit you&rsquo;ll need soon, or if
              you&rsquo;re already near the concessional cap. Because it locks money away for decades and
              interacts with your own circumstances, it&rsquo;s a sensible thing to run past a licensed
              financial adviser before committing.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">How much tax does it actually save?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Roughly the gap between your marginal rate and the 15% contributions tax. On a 32%
                marginal rate, sacrificing $10,000 saves about $1,700 and puts $8,500 into super instead
                of $6,800 in your bank.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">What&rsquo;s the cap for 2026-27?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                $32,500 for concessional (before-tax) contributions, which includes your employer&rsquo;s
                super guarantee. Unused cap from the past five years can sometimes be carried forward if
                your total super balance is under $500,000.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Will it lower my HECS repayment?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. Reportable super contributions are added back to work out your HECS-HELP repayment
                income, so salary sacrifice cuts your income tax but not your student loan repayment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can I get the money back if I need it?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Generally not until you reach preservation age and retire. Super is locked away by
                design — that long-term lock is the price of the tax break.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 rules, not personal financial or tax
            advice. Contribution caps and thresholds are set by the ATO and indexed over time. Because
            salary sacrifice locks money away and depends on your personal circumstances, consider
            speaking to a licensed financial adviser or registered tax agent before acting. Full
            workings for our figures are on the{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/guides/how-australian-income-tax-works" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How income tax works</a>
            <a href="/hecs-help-repayment" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">HECS-HELP repayment</a>
            <a href="/tax-brackets" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax brackets 2026-27</a>
          </div>
        </section>
      </div>
    </main>
  );
}
