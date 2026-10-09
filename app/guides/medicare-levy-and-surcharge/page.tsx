import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medicare Levy and Surcharge (2026-27)',
  description:
    'A plain-English guide to the Medicare levy and the Medicare Levy Surcharge in Australia for 2026-27: the 2% levy, the low-income thresholds, who pays the surcharge, the 2026-27 income tiers, and how private hospital cover can save you money.',
  alternates: { canonical: '/guides/medicare-levy-and-surcharge' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/medicare-levy-and-surcharge',
    title: 'Medicare Levy & Surcharge Explained (Australia 2026-27)',
    description:
      'The 2% Medicare levy, the low-income thresholds, and the Medicare Levy Surcharge tiers for 2026-27 — plus when private hospital cover is cheaper than the surcharge.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Medicare Levy & Surcharge Explained (Australia 2026-27)',
  description:
    'How the 2% Medicare levy and the Medicare Levy Surcharge work in Australia for 2026-27, including the income tiers and how private hospital cover can save higher earners money.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/medicare-levy-and-surcharge',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is the Medicare levy in Australia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Medicare levy is 2% of your taxable income for most residents. There is a low-income reduction: below about $28,000 (single) you pay nothing, and there is a shade-in zone just above it where the levy is phased in.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the Medicare levy and the Medicare Levy Surcharge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Medicare levy is a 2% charge most residents pay. The Medicare Levy Surcharge (MLS) is a separate, extra charge of 1% to 1.5% that only applies to higher earners who do not hold private hospital cover. You can pay the levy but avoid the surcharge by taking out an appropriate hospital policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what income does the Medicare Levy Surcharge start in 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 2026-27 the surcharge starts above $105,000 for singles and above $210,000 for families. Below those thresholds you do not pay the surcharge even without private cover.',
      },
    },
  ],
};

export default function MedicareGuidePage() {
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
            The Medicare levy and surcharge
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            The 2% almost everyone pays, the surcharge only some pay — and the point where private
            hospital cover actually saves you money in 2026-27.
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
            Two things on your tax bill share the word &ldquo;Medicare&rdquo; and are constantly
            confused: the <strong className="text-slate-900 dark:text-white">Medicare levy</strong>,
            which most residents pay, and the <strong className="text-slate-900 dark:text-white">Medicare
            Levy Surcharge</strong>, which only higher earners without private hospital cover pay. They
            work completely differently, and understanding the second one can genuinely save you money.
            Here&rsquo;s how both work for the 2026-27 year.
          </p>
        </section>

        {/* 1. The levy */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Medicare levy: a flat 2%</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The Medicare levy helps fund Australia&rsquo;s public health system. For most residents
              it&rsquo;s <strong className="text-slate-900 dark:text-white">2% of your taxable
              income</strong>, charged on top of your income tax. On a $90,000 salary that&rsquo;s
              $1,800 a year; on $60,000 it&rsquo;s $1,200.
            </p>
            <p>
              Lower earners get relief. If your taxable income is below the low-income threshold —
              around <strong className="text-slate-900 dark:text-white">$28,000</strong> for a single
              person in 2026-27 — you pay no levy at all. Just above that there&rsquo;s a{' '}
              <em>shade-in</em> zone where the levy is gradually phased in rather than hitting the full
              2% straight away, so it never jumps from nothing to the full amount at a single dollar.
              The thresholds are higher for families and are indexed each year. Foreign residents and
              most working holiday makers don&rsquo;t pay the Medicare levy at all.
            </p>
          </div>
        </section>

        {/* 2. The surcharge */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Medicare Levy Surcharge: only if you skip private cover</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              This is the one that catches higher earners out. The Medicare Levy Surcharge (MLS) is an{' '}
              <strong className="text-slate-900 dark:text-white">extra 1% to 1.5%</strong> on top of the
              2% levy. It applies only if two things are true: your income is above the threshold,{' '}
              <em>and</em> you (and your dependants) don&rsquo;t hold an appropriate level of private
              hospital cover. It exists to encourage higher earners to take private cover and ease
              demand on the public system.
            </p>
            <p>Here are the singles rates for 2026-27:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Income for MLS (single)</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Surcharge</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$0 – $105,000</td>
                    <td className="px-3 py-2 text-emerald-600 dark:text-emerald-400">0% (nil)</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$105,001 – $123,000</td>
                    <td className="px-3 py-2">1.0%</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$123,001 – $164,000</td>
                    <td className="px-3 py-2">1.25%</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2">$164,001 and over</td>
                    <td className="px-3 py-2">1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">
              Family thresholds are double the singles figures — starting at $210,000 for 2026-27 — and
              rise by $1,500 for each dependent child after the first. Source: ATO, Medicare levy
              surcharge income thresholds and rates.
            </p>
          </div>
        </section>

        {/* 3. Income for MLS */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Watch out: &ldquo;income for MLS&rdquo; is bigger than your salary</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The surcharge isn&rsquo;t tested against your salary alone. The ATO uses your{' '}
              <strong className="text-slate-900 dark:text-white">income for MLS purposes</strong>, which
              adds several things back on top of your taxable income — including reportable fringe
              benefits, reportable super contributions (like salary sacrifice), and net investment or
              rental losses. That means the surcharge can bite at a lower headline salary than you might
              expect, so it&rsquo;s worth checking if you&rsquo;re anywhere near the threshold.
            </p>
          </div>
        </section>

        {/* 4. The money decision */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">When private cover is cheaper than the surcharge</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Here&rsquo;s the practical part. If you&rsquo;re a single earning $110,000 with no hospital
              cover, the 1% surcharge costs you about{' '}
              <strong className="text-slate-900 dark:text-white">$1,100 a year</strong> — money you get
              nothing tangible for. A basic private hospital policy can often cost about the same or a
              little more, but at least buys you actual cover. For many people just over the threshold,
              taking out a basic policy effectively replaces a pure tax with something they can use.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              The maths flips as income rises: at higher incomes the 1.25% or 1.5% surcharge on a large
              salary can far exceed the cost of a basic policy, making cover the clearly cheaper choice.
              Our <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
              lets you toggle private hospital cover on and off to see the surcharge appear and
              disappear from your take-home pay.
            </p>
            <p>
              One timing note: to avoid the surcharge for a full year you need to hold cover for the
              whole year — taking out a policy in June won&rsquo;t undo eleven months of surcharge. This
              is general information, not personal advice; whether a policy suits you depends on more
              than the tax.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do I pay both the levy and the surcharge?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                You may. Most residents pay the 2% levy. If you&rsquo;re also a higher earner without
                private hospital cover, the surcharge is added <em>on top</em> — so you could pay 2%
                plus another 1% to 1.5%.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Does extras-only (&ldquo;ancillary&rdquo;) cover exempt me from the surcharge?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. Only an appropriate level of <em>hospital</em> cover exempts you from the surcharge.
                Extras cover for dental, optical and physio doesn&rsquo;t count.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do international students or working holiday makers pay the levy?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Generally not — foreign residents and most working holiday makers aren&rsquo;t entitled
                to Medicare and don&rsquo;t pay the levy. Some may need a Medicare Entitlement Statement
                to confirm an exemption.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about the 2026-27 rates, not personal financial, health-
            insurance or tax advice. Medicare levy and surcharge thresholds are set by the ATO and
            indexed each year. Whether private hospital cover suits you depends on more than tax — get
            advice for your situation. Full workings are on our{' '}
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
            <a href="/glossary" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax glossary</a>
          </div>
        </section>
      </div>
    </main>
  );
}
