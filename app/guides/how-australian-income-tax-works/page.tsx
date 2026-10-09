import type { Metadata } from 'next';
import { GuideBreadcrumbLd, GuideShare } from '@/components/GuideExtras';

export const metadata: Metadata = {
  title: 'How Australian Income Tax Works (2026-27)',
  description:
    'A clear, complete guide to how income tax works in Australia for FY 2026-27: the tax-free threshold, marginal brackets, the Stage 3 cuts, LITO, the Medicare levy and surcharge, super, HECS-HELP, and residency. Written with worked examples.',
  // Relative — resolved against metadataBase in app/layout.tsx, same pattern as
  // every other page.
  alternates: { canonical: '/guides/how-australian-income-tax-works' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/how-australian-income-tax-works',
    title: 'How Australian Income Tax Works (2026-27)',
    description:
      'The tax-free threshold, marginal brackets, LITO, the Medicare levy, super and HECS — explained in plain English for FY 2026-27, with worked examples.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

// ─── JSON-LD: Article + FAQPage ───────────────────────────────────────────────
const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Australian Income Tax Works (2026-27)',
  description:
    'A plain-English guide to how income tax works in Australia for FY 2026-27: the tax-free threshold, marginal brackets, LITO, the Medicare levy and surcharge, super, HECS-HELP and residency.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: {
    '@type': 'Organization',
    name: 'auincometax.com',
    url: 'https://www.auincometax.com',
  },
  mainEntityOfPage: 'https://www.auincometax.com/guides/how-australian-income-tax-works',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the tax-free threshold in Australia for 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Australian residents pay no income tax on the first $18,200 they earn in a financial year. Tax only applies to income above that amount. Foreign residents and most working holiday makers do not get the tax-free threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does earning more ever leave you worse off after tax in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Australia uses a marginal (bracket) system, so a higher rate applies only to the portion of income above each threshold, never to your whole income. Crossing into a higher bracket never reduces your take-home pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between your marginal rate and your effective rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your marginal rate is the rate charged on your next dollar of income (the bracket you are in). Your effective rate is the total tax you pay divided by your whole income, which is always lower because the earlier brackets are taxed at lower rates. On a $90,000 salary in 2026-27, the marginal rate is 30% but the effective rate is about 21.5%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is superannuation part of your take-home pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The 12% superannuation guarantee your employer pays goes into your super fund, not your bank account, so it is not part of your take-home pay. It is part of your total remuneration and is taxed separately inside super.',
      },
    },
  ],
};

export default function IncomeTaxGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideBreadcrumbLd path={"/guides/how-australian-income-tax-works"} title={"How Australian income tax works"} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            How Australian income tax works
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            A plain-English walk through the whole system for 2026-27 — the tax-free threshold, the
            brackets, the offsets and levies, and what actually reaches your bank account.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Updated
            September 2026 · Figures are FY 2026-27 (1 July 2026 – 30 June 2027)
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Intro */}
        <section className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
          <p>
            Australia&rsquo;s income tax system looks intimidating from the outside, but it&rsquo;s
            built on a handful of simple ideas. Once you understand how the brackets stack, why your
            &ldquo;tax bracket&rdquo; is not the rate you actually pay, and where the Medicare levy
            and super fit in, you can read any payslip or job offer with confidence. This guide walks
            through the whole thing for the <strong className="text-slate-900 dark:text-white">2026-27
            financial year</strong> — no jargon, worked examples throughout.
          </p>
          <p>
            Everything here reflects the rates that took effect on 1 July 2026, including the latest
            round of tax cuts. Every figure comes from the{' '}
            <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Australian Taxation Office</a>{' '}
            (ATO), and you can check any salary against our{' '}
            <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">free take-home pay calculator</a>{' '}
            as you read.
          </p>
        </section>

        {/* 1. Who pays */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Who pays income tax, and on what</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If you earn income in Australia, you generally pay income tax on it. That includes
              salary and wages, but also business income, most investment income (interest,
              dividends, rent), and capital gains when you sell an asset. What you&rsquo;re taxed on
              is your <strong className="text-slate-900 dark:text-white">taxable income</strong>:
              your total assessable income minus any deductions you&rsquo;re entitled to claim.
            </p>
            <p>
              The rates you pay depend on your <strong className="text-slate-900 dark:text-white">tax
              residency</strong>, which is not the same as your visa or citizenship. Most people who
              live and work in Australia are <em>residents for tax purposes</em> and get the rates
              below. <em>Foreign residents</em> and <em>working holiday makers</em> (subclass 417 and
              462 visas) are taxed differently — we cover those near the end.
            </p>
          </div>
        </section>

        {/* 2. The tax-free threshold */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The tax-free threshold</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The first <strong className="text-slate-900 dark:text-white">$18,200</strong> a resident
              earns each year is completely tax-free. You only start paying income tax on the dollar
              after that. This is why a part-time or casual worker earning under $18,200 in a year
              typically pays no income tax at all (though they may still have had tax withheld and get
              it back at tax time).
            </p>
            <p>
              When you start a job you claim this threshold on your{' '}
              <em>Tax file number declaration</em>. A common trap: if you hold two jobs at once and
              claim the threshold on both, not enough tax is withheld overall and you can end up with
              a bill at tax time. The usual advice is to claim it only on your main (highest-paying)
              job.
            </p>
          </div>
        </section>

        {/* 3. Marginal brackets */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How the brackets work (and why your bracket isn&rsquo;t your rate)</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Australia taxes income in <strong className="text-slate-900 dark:text-white">slices</strong>.
              Each slice of your income falls into a bracket, and only that slice is taxed at the
              bracket&rsquo;s rate. Moving into a higher bracket never increases the tax on the income
              you already earned below it. Here are the resident rates for 2026-27:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Taxable income</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Tax on this income</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$0 – $18,200</td>
                    <td className="px-3 py-2 text-emerald-600 dark:text-emerald-400">Nil</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$18,201 – $45,000</td>
                    <td className="px-3 py-2">15c per $1 over $18,200</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$45,001 – $135,000</td>
                    <td className="px-3 py-2">$4,020 + 30c per $1 over $45,000</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$135,001 – $190,000</td>
                    <td className="px-3 py-2">$31,020 + 37c per $1 over $135,000</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$190,001 and over</td>
                    <td className="px-3 py-2">$51,370 + 45c per $1 over $190,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The lowest rate dropped to <strong className="text-slate-900 dark:text-white">15%</strong>{' '}
              on 1 July 2026 (down from 16%), the first of two legislated cuts — it&rsquo;s scheduled
              to fall again to 14% on 1 July 2027. These rates sit on top of the Medicare levy,
              covered below. See the full breakdown on our{' '}
              <a href="/tax-brackets" className="text-blue-600 dark:text-blue-400 hover:underline">tax brackets page</a>.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              <strong className="text-slate-900 dark:text-white">The key takeaway:</strong> being
              &ldquo;in the 30% bracket&rdquo; does not mean you pay 30% of your salary. It means the
              <em>last</em> dollar you earned is taxed at 30%. Your overall, or{' '}
              <em>effective</em>, rate is always lower.
            </p>
          </div>
        </section>

        {/* 4. Worked example */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A worked example: $90,000 a year</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Say you&rsquo;re a resident earning $90,000. Your income tax is built up slice by slice:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc marker:text-blue-400 font-mono text-[13px] tabular-nums">
              <li>First $18,200 &rarr; taxed at 0% &rarr; <strong className="text-slate-900 dark:text-white">$0</strong></li>
              <li>$18,201–$45,000 ($26,800) &rarr; at 15% &rarr; <strong className="text-slate-900 dark:text-white">$4,020</strong></li>
              <li>$45,001–$90,000 ($45,000) &rarr; at 30% &rarr; <strong className="text-slate-900 dark:text-white">$13,500</strong></li>
            </ul>
            <p>
              That&rsquo;s <strong className="text-slate-900 dark:text-white">$17,520</strong> of income
              tax. Add the 2% Medicare levy (<strong className="text-slate-900 dark:text-white">$1,800</strong>)
              and your total is $19,320, leaving a take-home of{' '}
              <strong className="text-slate-900 dark:text-white">$70,680</strong>. So on $90,000 your
              effective tax rate is about <strong className="text-slate-900 dark:text-white">21.5%</strong>,
              even though your marginal rate is 30%. Every extra dollar you earn from here is taxed at
              30% plus 2% Medicare — so a $1,000 pay rise adds about $680 to your pocket, not $1,000.
            </p>
          </div>
        </section>

        {/* 5. LITO */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Low Income Tax Offset (LITO)</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              An <em>offset</em> reduces the tax you owe, dollar for dollar (unlike a deduction, which
              reduces your taxable income). The Low Income Tax Offset gives residents up to{' '}
              <strong className="text-slate-900 dark:text-white">$700</strong> if their taxable income
              is $37,500 or less. Above that it phases out gradually and reaches nil at $66,667, so
              it&rsquo;s a benefit aimed squarely at lower earners.
            </p>
            <p>
              You don&rsquo;t claim LITO anywhere — the ATO applies it automatically when your return
              is assessed. It can reduce your tax to zero but it can&rsquo;t create a refund on its own
              beyond the tax you&rsquo;ve paid.
            </p>
          </div>
        </section>

        {/* 6. Medicare */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Medicare levy and surcharge</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              On top of income tax, most residents pay a <strong className="text-slate-900 dark:text-white">2%
              Medicare levy</strong> to help fund the public health system. It applies to your whole
              taxable income once you earn above the low-income threshold (around $28,000, with a
              shade-in zone just above it where the levy is reduced). Foreign residents and most
              working holiday makers don&rsquo;t pay it.
            </p>
            <p>
              There&rsquo;s also a separate <strong className="text-slate-900 dark:text-white">Medicare
              Levy Surcharge (MLS)</strong> of 1% to 1.5% that applies to higher earners who{' '}
              <em>don&rsquo;t</em> hold an appropriate level of private hospital cover. For singles it
              starts above about $105,000. It&rsquo;s designed to nudge higher earners onto private
              cover, and for many people at that income the surcharge costs more than a basic hospital
              policy would — which is worth checking. Our{' '}
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
              lets you toggle private cover on and off to see the difference.
            </p>
          </div>
        </section>

        {/* 7. Super */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Superannuation isn&rsquo;t take-home pay</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              On top of your salary, your employer must pay the{' '}
              <strong className="text-slate-900 dark:text-white">superannuation guarantee</strong> —
              12% of your ordinary earnings from 1 July 2025 — into your super fund. This is genuinely
              on top: it doesn&rsquo;t come out of your take-home pay. But it&rsquo;s also not money you
              can spend now; it&rsquo;s locked away for retirement and taxed at a concessional 15%
              inside the fund.
            </p>
            <p>
              This matters when you compare job offers. A role quoting &ldquo;$100,000 plus
              super&rdquo; is worth more than one quoting &ldquo;$100,000 including super&rdquo;. Always
              check whether a figure is the base salary or the total package.
            </p>
          </div>
        </section>

        {/* 8. HECS */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Student loans (HECS-HELP)</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If you have a HECS-HELP or other study loan, you make compulsory repayments through the
              tax system once your income passes a threshold — <strong className="text-slate-900 dark:text-white">$69,528</strong>{' '}
              for 2026-27. Since 1 July 2025 these repayments are <em>marginal</em>: you only repay a
              percentage of the income above the threshold, not your whole income, which fixed a
              long-standing quirk where one extra dollar could cost hundreds. We cover this in full,
              with its own calculator, on the{' '}
              <a href="/hecs-help-repayment" className="text-blue-600 dark:text-blue-400 hover:underline">HECS-HELP repayment page</a>.
            </p>
          </div>
        </section>

        {/* 9. Residency differences */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Foreign residents and working holiday makers</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              <strong className="text-slate-900 dark:text-white">Foreign residents</strong> don&rsquo;t
              get the tax-free threshold and pay 30% from the very first dollar (up to $135,000), and
              they don&rsquo;t pay the Medicare levy. <strong className="text-slate-900 dark:text-white">Working
              holiday makers</strong> on 417 and 462 visas have their own schedule: 15% on the first
              $45,000, then the resident rates above that. If you&rsquo;re on a working holiday, our{' '}
              <a href="/working-holiday-maker" className="text-blue-600 dark:text-blue-400 hover:underline">working holiday maker tax page</a>{' '}
              has the detail. You can switch residency type in the calculator to compare.
            </p>
          </div>
        </section>

        {/* 10. How it's collected */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How the tax actually gets paid</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              For employees, tax isn&rsquo;t something you pay in one lump — your employer withholds an
              estimate from each pay under the <strong className="text-slate-900 dark:text-white">PAYG
              withholding</strong> system and sends it to the ATO on your behalf. After 30 June you
              lodge a <em>tax return</em> that reconciles what was withheld against what you actually
              owe. If too much was withheld, you get a refund; if too little, you get a bill. Claiming
              legitimate work-related deductions (and offsets like LITO) is what often turns that into
              a refund.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Does earning more ever leave me worse off?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. Because the system is marginal, a higher rate only ever applies to the income above
                a threshold, never to your whole income. There is no salary in Australia at which a pay
                rise reduces your take-home pay.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">What&rsquo;s the difference between marginal and effective rate?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Your marginal rate is what your next dollar is taxed at; your effective rate is total
                tax divided by total income. The effective rate is always lower because the first
                slices of your income are taxed at 0% and 15%. On $90,000 the marginal rate is 30% but
                the effective rate is about 21.5%.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is super taken out of my pay?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No — the 12% super guarantee is paid by your employer on top of your salary, into your
                super fund. It isn&rsquo;t part of your take-home pay, and it&rsquo;s taxed separately
                inside super.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">When is the Australian financial year?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                It runs from 1 July to 30 June. The 2026-27 year covers 1 July 2026 to 30 June 2027,
                and tax returns for it can generally be lodged from 1 July 2027.
              </p>
            </div>
          </div>
        </section>

        <GuideShare path={"/guides/how-australian-income-tax-works"} title={"How Australian income tax works"} />

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 rates, not personal tax advice. Rates,
            thresholds and offsets are set by the ATO and can change; the Medicare and MLS thresholds
            in particular are indexed each year. For advice on your own situation, speak to a
            registered tax agent. Full workings are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Put the numbers to work</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/tax-brackets" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax brackets 2026-27</a>
            <a href="/take-home-pay-reference" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay reference</a>
            <a href="/hecs-help-repayment" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">HECS-HELP repayment</a>
            <a href="/glossary" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax glossary</a>
          </div>
        </section>
      </div>
    </main>
  );
}
