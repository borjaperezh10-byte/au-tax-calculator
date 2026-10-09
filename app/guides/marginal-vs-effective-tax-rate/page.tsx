import type { Metadata } from 'next';
import { GuideBreadcrumbLd, GuideShare } from '@/components/GuideExtras';

export const metadata: Metadata = {
  title: 'Marginal vs Effective Tax Rate (2026-27)',
  description:
    'What marginal and effective tax rates mean in Australia for 2026-27, why a pay rise never leaves you worse off, and how much of your next $1,000 you keep.',
  alternates: { canonical: '/guides/marginal-vs-effective-tax-rate' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/marginal-vs-effective-tax-rate',
    title: 'Marginal vs Effective Tax Rate in Australia (2026-27)',
    description:
      'Marginal rate vs effective rate explained with 2026-27 figures: a table showing tax, effective rate and how much of an extra $1,000 you keep from $40k to $200k.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Marginal vs Effective Tax Rate in Australia (2026-27)',
  description:
    'How marginal and effective tax rates differ in Australia in 2026-27, with a table of tax, effective rate and take-home from an extra $1,000 at each salary.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/marginal-vs-effective-tax-rate',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a pay rise leave me with less take-home pay in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Australia uses marginal tax brackets, so only the dollars above a threshold are taxed at the higher rate. Moving into a higher bracket never reduces your take-home pay: you keep at least 53 cents of every extra dollar even in the top bracket, once the Medicare levy is included.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is my marginal tax rate if I earn $90,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a resident in 2026-27 it is 30%, or 32% including the 2% Medicare levy. Your effective (average) rate is lower, about 21.5% including Medicare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between marginal and effective tax rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The marginal rate is the rate on your next dollar of income. The effective rate is your total tax divided by your total income, the average across every dollar you earn.',
      },
    },
  ],
};

const ROWS = [
  { income: '$40,000', tax: '$3,495', eff: '8.7%', marg: '22%', keep: '$780' },
  { income: '$50,000', tax: '$6,270', eff: '12.5%', marg: '33.5%', keep: '$665' },
  { income: '$60,000', tax: '$9,620', eff: '16.0%', marg: '33.5%', keep: '$665' },
  { income: '$70,000', tax: '$12,920', eff: '18.5%', marg: '32%', keep: '$680' },
  { income: '$90,000', tax: '$19,320', eff: '21.5%', marg: '32%', keep: '$680' },
  { income: '$100,000', tax: '$22,520', eff: '22.5%', marg: '32%', keep: '$680' },
  { income: '$120,000', tax: '$28,920', eff: '24.1%', marg: '32%', keep: '$680' },
  { income: '$150,000', tax: '$39,570', eff: '26.4%', marg: '39%', keep: '$610' },
  { income: '$200,000', tax: '$59,870', eff: '29.9%', marg: '47%', keep: '$530' },
];

export default function MarginalVsEffectiveGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideBreadcrumbLd path={"/guides/marginal-vs-effective-tax-rate"} title={"Marginal vs effective tax rate in Australia"} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Marginal vs effective tax rate in Australia
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Your marginal rate is the tax on your next dollar; your effective rate is the average on
            all of them. Here are both for 2026-27, and how much of a pay rise you really keep.
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
            &ldquo;I&rsquo;m in the 30% bracket&rdquo; is one of the most misunderstood sentences in
            Australian personal finance. It does not mean 30% of your income goes to tax. It means the
            next dollar you earn is taxed at 30%. The two numbers that matter, and how they differ, are
            your <strong className="text-slate-900 dark:text-white">marginal rate</strong> and your{' '}
            <strong className="text-slate-900 dark:text-white">effective rate</strong>.
          </p>
        </section>

        {/* 1. Definitions */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The two rates</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-slate-900 dark:text-white">Marginal rate.</strong> The tax
                you&rsquo;d pay on one extra dollar of income. It&rsquo;s the bracket rate, plus the 2%
                Medicare levy, plus any offset that&rsquo;s phasing out. It tells you what a pay rise,
                overtime shift or side income is worth after tax.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Effective rate.</strong> Your total
                tax (including Medicare) divided by your total income. It tells you what share of your
                pay goes to tax overall, and it&rsquo;s always lower than your marginal rate for
                anyone above the tax-free threshold.
              </li>
            </ul>
            <p>
              The 2026-27 resident rates are 0% up to $18,200, 15% to $45,000, 30% to $135,000, 37% to
              $190,000 and 45% above that. Each rate applies only to the slice of income inside that
              band. See{' '}
              <a href="/tax-brackets" className="text-blue-600 dark:text-blue-400 hover:underline">
                tax brackets 2026-27
              </a>{' '}
              for the full table.
            </p>
          </div>
        </section>

        {/* 2. Worked example */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A worked example: $90,000</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              A resident earning $90,000 pays no tax on the first $18,200, 15% on the next $26,800
              ($4,020), and 30% on the last $45,000 ($13,500). That&rsquo;s $17,520 of income tax, plus
              $1,800 Medicare levy, for $19,320 in total. Divide by $90,000 and the effective rate is
              21.5%. But the next dollar is taxed at 30% plus 2% Medicare, so the marginal rate is 32%.
              Same person, two very different numbers.
            </p>
          </div>
        </section>

        {/* 3. Table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How much of an extra $1,000 you keep</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Residents, 2026-27, no study loan and private hospital cover, so no Medicare levy
              surcharge. Tax includes the 2% Medicare levy and the low income tax offset.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Income</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Total tax</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Effective rate</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Marginal rate</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Keep from next $1,000</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  {ROWS.map((r) => (
                    <tr key={r.income} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2">{r.income}</td>
                      <td className="px-3 py-2">{r.tax}</td>
                      <td className="px-3 py-2">{r.eff}</td>
                      <td className="px-3 py-2">{r.marg}</td>
                      <td className="px-3 py-2">{r.keep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Two things stand out. First, the marginal rate at $50,000 to $60,000 (33.5%) is{' '}
              <em>higher</em> than at $70,000 (32%). That&rsquo;s the low income tax offset phasing out:
              between $45,000 and $66,667 you lose 1.5 cents of offset for every extra dollar, on top of
              the 30% rate and the Medicare levy. Second, at $200,000 you still keep 53 cents of each
              extra dollar.
            </p>
          </div>
        </section>

        {/* 4. Myth */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The myth: a pay rise can push you into a worse position</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Because only the income <em>inside</em> a bracket is taxed at that bracket&rsquo;s rate,
              crossing a threshold never reduces your take-home pay. Someone moving from $134,000 to
              $136,000 pays 37% only on the $1,000 above $135,000; the rest of the raise is still taxed
              at 30%. The idea that a raise can leave you with less usually comes from a different
              place: losing a means-tested benefit or hitting a threshold like the Medicare levy
              surcharge, which is a separate cliff and not a bracket change.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              Rule of thumb: for most Australian residents earning $70,000 to $135,000, about 68 cents
              of each extra dollar arrives in your pocket. Deductions are worth the same rate in
              reverse: a $1,000 deduction saves roughly $320.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can a pay rise leave me with less take-home pay?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. Marginal brackets tax only the dollars above each threshold, so more income always
                means more take-home pay. Even in the top bracket you keep 53 cents of each extra
                dollar once the Medicare levy is counted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Which rate should I use to compare job offers?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Compare the effective rate or, better, the take-home pay for each salary using the{' '}
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>.
                Use the marginal rate when deciding whether extra hours, a side income or a deduction is
                worth it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Does salary sacrifice use my marginal rate?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Yes, in effect: money you sacrifice into super is taxed at 15% inside the fund rather
                than at your marginal rate, so the benefit grows with your bracket. See{' '}
                <a href="/guides/salary-sacrifice-explained" className="text-blue-600 dark:text-blue-400 hover:underline">
                  salary sacrifice explained
                </a>.
              </p>
            </div>
          </div>
        </section>

        <GuideShare path={"/guides/marginal-vs-effective-tax-rate"} title={"Marginal vs effective tax rate in Australia"} />

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 year for Australian residents, not
            personal tax or financial advice. Figures exclude study loan repayments and the Medicare
            levy surcharge and are rounded. Full workings are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/tax-brackets" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax brackets 2026-27</a>
            <a href="/guides/how-australian-income-tax-works" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How income tax works</a>
            <a href="/guides/tax-on-a-second-job" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax on a second job</a>
          </div>
        </section>
      </div>
    </main>
  );
}
