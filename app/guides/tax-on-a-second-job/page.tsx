import type { Metadata } from 'next';
import { GuideBreadcrumbLd, GuideShare } from '@/components/GuideExtras';

export const metadata: Metadata = {
  title: 'Tax on a Second Job in Australia (2026-27)',
  description:
    'How tax works with two jobs in Australia in 2026-27: claiming the tax-free threshold once, higher withholding on the second job, and a worked example.',
  alternates: { canonical: '/guides/tax-on-a-second-job' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/tax-on-a-second-job',
    title: 'Tax on a Second Job in Australia (2026-27)',
    description:
      'Claim the tax-free threshold once, expect higher withholding on the second job, and see what a $30,000 second job really adds to your take-home pay.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tax on a Second Job in Australia (2026-27)',
  description:
    'How the tax-free threshold, withholding and your tax return work when you have more than one job in Australia in 2026-27.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/tax-on-a-second-job',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I claim the tax-free threshold on both jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally you claim the tax-free threshold from only one payer at a time, usually the one that pays you the most. If your total income from all jobs will be $18,200 or less, you can claim it from every payer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is so much tax taken out of my second job?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you do not claim the tax-free threshold, your employer withholds tax at a higher rate from the first dollar. This is deliberate: it spreads the tax on your combined income across both jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I end up with a tax bill if I have two jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If too little tax is withheld across your jobs, for example because you claimed the tax-free threshold on both, the ATO will assess the difference as a debt when you lodge your return. If too much is withheld, you receive a refund.',
      },
    },
  ],
};

const ROWS = [
  { label: 'Main job alone', gross: '$70,000', tax: '$12,920', net: '$57,080' },
  { label: 'Main + second job', gross: '$100,000', tax: '$22,520', net: '$77,480' },
  { label: 'Extra from the second job', gross: '$30,000', tax: '$9,600', net: '$20,400' },
];

export default function SecondJobGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideBreadcrumbLd path={"/guides/tax-on-a-second-job"} title={"Tax on a second job in Australia"} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Tax on a second job in Australia
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Two jobs, one tax-free threshold. How to set up withholding, why the second pay packet looks
            small, and what the extra income actually adds to your year.
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
            Picking up a second job, casual shifts or a side gig is common, and the first surprise is
            usually the pay: the second job seems to lose a big chunk to tax. Nothing is wrong. Australia
            taxes your <em>combined</em> income for the year, and each employer only sees their own slice
            of it. Getting the setup right avoids both an unpleasantly small second payslip and a tax
            bill in July.
          </p>
        </section>

        {/* 1. Claim once */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Claim the tax-free threshold once</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The tax-free threshold is the first $18,200 of income you pay no tax on. You get it once a
              year, not once per job. The ATO&rsquo;s guidance is that when you have more than one payer at
              the same time, you generally claim the threshold from only one of them, usually the one
              that pays you the most. &ldquo;Payer&rdquo; includes employers, your own sole trader work
              under an ABN, and taxable payments such as a pension or government allowance.
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                On your tax file number declaration for your highest-paying job, say you want to claim
                the tax-free threshold.
              </li>
              <li>
                On the declaration for every other job, say you do <strong className="text-slate-900 dark:text-white">not</strong>{' '}
                claim it. Those employers then withhold at the higher &ldquo;no tax-free threshold&rdquo;
                rate.
              </li>
              <li>
                If you change jobs, complete a new declaration for the new employer and choose again.
              </li>
              <li>
                Only if your total income from all sources will be $18,200 or less can you claim the
                threshold from every payer.
              </li>
            </ol>
          </div>
        </section>

        {/* 2. Worked example */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A worked example: $70,000 job plus $30,000 job</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              A resident earns $70,000 in their main job and $30,000 in a second one. The tax on the
              combined $100,000 is worked out on the whole amount, not job by job.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300"> </th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Gross</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Tax + Medicare</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Take-home</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  {ROWS.map((r) => (
                    <tr key={r.label} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2 font-sans">{r.label}</td>
                      <td className="px-3 py-2">{r.gross}</td>
                      <td className="px-3 py-2">{r.tax}</td>
                      <td className="px-3 py-2">{r.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              So the $30,000 second job adds $20,400 to take-home pay: about 68 cents in the dollar. That
              is the 30% bracket plus the 2% Medicare levy, the same as any extra income at this level.
              It&rsquo;s not a penalty for having two jobs; it&rsquo;s just your marginal rate (see{' '}
              <a href="/guides/marginal-vs-effective-tax-rate" className="text-blue-600 dark:text-blue-400 hover:underline">
                marginal vs effective tax rate
              </a>
              ).
            </p>
          </div>
        </section>

        {/* 3. What goes wrong */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What happens if you claim it twice</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Suppose that same person claims the tax-free threshold in <em>both</em> jobs. Each employer
              withholds as if that job were the only income. On $70,000 alone that&rsquo;s roughly $12,900
              (tax plus Medicare); on $30,000 alone about $1,300. Together, roughly $14,200. But the tax
              on $100,000 is $22,520. The gap of around $8,300 is collected when you lodge your return,
              as a tax bill.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              The reverse is also true: if you claim the threshold on your main job only, withholding
              on the second job is higher, and you may get some of it back as a refund if it overshoots.
              Under-withholding is the risky direction, so when in doubt, don&rsquo;t claim it twice.
            </p>
            <p>
              If you still expect a shortfall, you can ask a payer to withhold extra tax, or lodge a
              PAYG withholding variation application with the ATO to change the amount withheld. Setting
              a little money aside during the year is the simplest safeguard.
            </p>
          </div>
        </section>

        {/* 4. Other things */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Other things a second income can affect</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-slate-900 dark:text-white">Study loan repayments.</strong>{' '}
                HECS-HELP is based on your total repayment income, so a second job can push you into a
                repayment band. See the{' '}
                <a href="/hecs-help-repayment" className="text-blue-600 dark:text-blue-400 hover:underline">
                  HECS-HELP repayment calculator
                </a>.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Medicare levy surcharge.</strong> The
                threshold applies to your total income, not per job.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Super.</strong> Each employer pays 12%
                super on your ordinary time earnings, so you build super in both jobs.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Sole trader or ABN work.</strong> If
                the second income is under an ABN, nobody withholds tax unless you arrange it, so you
                need to set aside money yourself.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can I claim the tax-free threshold on both jobs?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Generally only from one payer, usually the highest-paying. If your total income from
                all sources will be $18,200 or less, you can claim it from all of them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Why is so much tax taken out of my second job?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Without the tax-free threshold, tax starts from the first dollar. That is intentional:
                it spreads the tax on your combined income. Use the{' '}
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
                with your combined salary to see the total.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can I end up with a tax bill?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Yes, if too little was withheld across your jobs. The ATO works out your total tax when
                you lodge and collects any difference. If too much was withheld, you get a refund.
              </p>
            </div>
          </div>
        </section>

        <GuideShare path={"/guides/tax-on-a-second-job"} title={"Tax on a second job in Australia"} />

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 year for Australian residents, not
            personal tax advice. The ATO&rsquo;s{' '}
            <a href="https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/tax-free-threshold/multiple-jobs-or-change-of-job" className="text-blue-500 hover:underline" rel="noopener">
              multiple jobs guidance
            </a>{' '}
            explains the declaration rules, and employer withholding follows ATO tables, so actual
            amounts differ slightly. Full workings are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/guides/how-to-read-your-payslip" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How to read your payslip</a>
            <a href="/guides/marginal-vs-effective-tax-rate" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Marginal vs effective tax rate</a>
            <a href="/guides/tax-return-deadline-and-refunds" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax return deadline &amp; refunds</a>
          </div>
        </section>
      </div>
    </main>
  );
}
