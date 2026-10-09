import type { Metadata } from 'next';
import { GuideBreadcrumbLd, GuideShare } from '@/components/GuideExtras';

export const metadata: Metadata = {
  title: 'Working Holiday Maker Tax (2026-27 Guide)',
  description:
    'How tax works on a working holiday visa (subclass 417 and 462) in Australia for 2026-27: the 15% rate up to $45,000, the higher brackets, super and DASP, TFNs, tax returns and what you actually take home.',
  alternates: { canonical: '/guides/working-holiday-maker-tax' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/working-holiday-maker-tax',
    title: 'Working Holiday Maker Tax in Australia (2026-27 Guide)',
    description:
      'The working holiday maker tax rates for 2026-27, how super and DASP work when you leave, and what a backpacker really takes home at different incomes.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Working Holiday Maker Tax in Australia (2026-27 Guide)',
  description:
    'A plain-English guide to tax for working holiday makers on a 417 or 462 visa in Australia for 2026-27, including the 15% rate, super, DASP and tax returns.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/working-holiday-maker-tax',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the tax rate for working holiday makers in Australia in 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Working holiday makers on a 417 or 462 visa pay 15% on income up to $45,000, 30% on the part from $45,001 to $135,000, 37% from $135,001 to $190,000 and 45% above $190,000. There is no tax-free threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do backpackers get super in Australia and can they get it back?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Employers pay 12% super on top of your wages. When you leave Australia and your visa has ended you can claim it back as a Departing Australia Superannuation Payment (DASP), but working holiday makers are taxed at 65% on it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to lodge a tax return on a working holiday visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not if all your income was working holiday wages and your taxable income was $45,000 or less. You should lodge if you want to claim deductions, or if you had income other than wages. Check the ATO if your situation is more complicated.',
      },
    },
  ],
};

const ROWS = [
  { income: 20000, tax: 3000, net: 17000, eff: '15.0%' },
  { income: 30000, tax: 4500, net: 25500, eff: '15.0%' },
  { income: 45000, tax: 6750, net: 38250, eff: '15.0%' },
  { income: 60000, tax: 11250, net: 48750, eff: '18.8%' },
  { income: 80000, tax: 17250, net: 62750, eff: '21.6%' },
  { income: 100000, tax: 23250, net: 76750, eff: '23.2%' },
];

const fmt = (n: number) => '$' + n.toLocaleString('en-AU');

export default function WhmTaxGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideBreadcrumbLd path={"/guides/working-holiday-maker-tax"} title={"Working holiday maker tax in Australia"} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Working holiday maker tax in Australia
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            The rates on a 417 or 462 visa, why you pay them, what your super does when you leave, and
            what you actually take home in 2026-27.
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
            If you&rsquo;re in Australia on a{' '}
            <strong className="text-slate-900 dark:text-white">Working Holiday (subclass 417)</strong> or{' '}
            <strong className="text-slate-900 dark:text-white">Work and Holiday (subclass 462)</strong>{' '}
            visa, you&rsquo;re taxed differently from a local. There&rsquo;s a special set of rates, no
            tax-free threshold, and a super payout with a big catch when you leave. Most of it is simple
            once you see it laid out. Here&rsquo;s how it works for the 2026-27 year.
          </p>
        </section>

        {/* 1. Rates */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The working holiday maker tax rates</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Working holiday makers pay tax on every dollar from the first. There&rsquo;s{' '}
              <strong className="text-slate-900 dark:text-white">no $18,200 tax-free threshold</strong>{' '}
              like residents get, but the first bracket is a low flat rate:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Taxable income</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Tax rate</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  <tr className="border-t border-slate-200 dark:border-slate-700"><td className="px-3 py-2">$0 – $45,000</td><td className="px-3 py-2">15%</td></tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700"><td className="px-3 py-2">$45,001 – $135,000</td><td className="px-3 py-2">30%</td></tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700"><td className="px-3 py-2">$135,001 – $190,000</td><td className="px-3 py-2">37%</td></tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700"><td className="px-3 py-2">$190,001 and over</td><td className="px-3 py-2">45%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">
              Source: ATO, Schedule 15 &ndash; Tax table for working holiday makers (payments from 1 July
              2026). Like residents, these are marginal rates: each rate applies only to the slice of
              income inside that band.
            </p>
            <p>
              Your employer withholds a flat 15% on your pay up to $45,000 for the year, then the higher
              rates on anything above it. Working holiday makers generally can&rsquo;t claim the Medicare
              levy adjustments or tax offsets like the low income tax offset when tax is withheld, so
              there&rsquo;s no Medicare levy line on a typical backpacker payslip.
            </p>
          </div>
        </section>

        {/* 2. Take-home table */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What you actually take home</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Here&rsquo;s the tax and take-home pay at a range of yearly incomes for a working holiday
              maker in 2026-27 (income tax only, no Medicare levy, no HECS).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Gross income</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Income tax</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Take-home</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Effective rate</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  {ROWS.map((r) => (
                    <tr key={r.income} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2">{fmt(r.income)}</td>
                      <td className="px-3 py-2">{fmt(r.tax)}</td>
                      <td className="px-3 py-2">{fmt(r.net)}</td>
                      <td className="px-3 py-2">{r.eff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              Worked example: on $60,000 you pay 15% on the first $45,000 ($6,750) and 30% on the
              remaining $15,000 ($4,500), so $11,250 in total and $48,750 in your pocket. Try your own
              number in the{' '}
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
              by choosing &ldquo;Working Holiday&rdquo; as your residency.
            </p>
          </div>
        </section>

        {/* 3. Why not resident */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Why you&rsquo;re not taxed like a resident</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The ATO&rsquo;s long-standing view is that most working holiday makers are{' '}
              <strong className="text-slate-900 dark:text-white">foreign residents for tax</strong>, however
              long they stay. That&rsquo;s why the special rates exist. On a $30,000 income a resident pays
              about $1,070 in income tax once the low income offset is applied, while a working holiday
              maker pays $4,500, so the difference is real.
            </p>
            <p>
              There is one notable exception. If you hold a 417 or 462 visa, count as an Australian tax
              resident for all or part of the year, and are a national of certain treaty countries
              (currently Chile, Finland, Germany, Israel, Japan, Norway, Turkey or the UK), you can end up
              assessed at the lower of the resident and working holiday rates. Your employer still
              withholds 15%, and you claim the difference back in your return. If that&rsquo;s you, check
              the ATO&rsquo;s page on Australian-resident working holiday makers or ask a registered tax
              agent.
            </p>
          </div>
        </section>

        {/* 4. Setup: TFN, employer */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Get your TFN and check your employer is registered</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Two things decide whether you get the 15% rate at all.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-slate-900 dark:text-white">A tax file number.</strong> Apply
                online once your visa is granted and give your employer a TFN declaration on day one. With
                no TFN, employers must withhold 45% on all your pay, which you only get back at tax time.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">A registered employer.</strong>{' '}
                Employers of working holiday makers must register with the ATO for that purpose; you
                don&rsquo;t register yourself. If yours hasn&rsquo;t, they must withhold at foreign
                resident rates instead of the working holiday rates, so ask them if your first payslips
                look too heavy.
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Super and DASP */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Super on a working holiday, and getting it back</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Working holiday makers are entitled to super like everyone else. Your employer pays{' '}
              <strong className="text-slate-900 dark:text-white">12%</strong> of your qualifying earnings
              into a super fund on top of your wages, and since 1 July 2026 they must get it to your fund
              within 7 business days of each payday instead of quarterly. It isn&rsquo;t taken out of your
              pay. It&rsquo;s an extra.
            </p>
            <p>
              When you leave Australia and your visa has ended, you can claim that money as a{' '}
              <strong className="text-slate-900 dark:text-white">Departing Australia Superannuation
              Payment (DASP)</strong>. The catch: the tax on a DASP for working holiday makers is{' '}
              <strong className="text-slate-900 dark:text-white">65%</strong> of the taxable part, versus
              35% for other temporary residents. If your super contributions during the year came to
              $3,000, you&rsquo;d receive about $1,050 after tax.
            </p>
            <p>
              You claim through the ATO&rsquo;s online DASP system, which is free. You can start it before
              you go but can only submit after you&rsquo;ve left. If you don&rsquo;t claim, the fund
              eventually passes the money to the ATO and it just sits there, so it&rsquo;s worth doing
              even after the 65% bite. A registered tax agent can also lodge it for you, though they
              charge a fee.
            </p>
          </div>
        </section>

        {/* 6. Tax return */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Do you need to lodge a tax return?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The Australian income year runs 1 July to 30 June. If all your income was wages earned as a
              working holiday maker and your taxable income was $45,000 or less, you generally don&rsquo;t
              have to lodge a return, because the 15% withholding already matches the tax you owe.
            </p>
            <p>
              You should lodge if you earned more than that, if you had other income, or if you want to
              claim deductions such as work-related expenses. If you&rsquo;re leaving Australia
              permanently before 30 June you can lodge early. If you&rsquo;re unsure, ask a registered
              tax agent, since your right answer depends on your visa history and where you&rsquo;re from.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is the working holiday tax rate really 15%?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Only for the first $45,000 of your income in the year. Above that it steps up to 30%, then
                37% and 45%, the same bands as residents but with no tax-free threshold at the bottom.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do I pay Medicare levy as a backpacker?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Generally not. Working holiday makers aren&rsquo;t usually entitled to Medicare, and the
                levy can&rsquo;t be adjusted for in withholding. The exception is the small group who
                count as Australian residents and are assessed under the resident rates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is the 88-day regional work rule a tax rule?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No, it&rsquo;s a visa rule. It affects whether you can apply for a second or third
                working holiday visa, not the tax rate on your wages. To track your days and check
                whether your postcode counts, use our{' '}
                <a href="/88-days-calculator" className="text-blue-500 hover:underline">88 days calculator</a>{' '}
                and read <a href="/guides/how-88-days-are-counted" className="text-blue-500 hover:underline">how the 88 days are counted</a>.
              </p>
            </div>
          </div>
        </section>

        <GuideShare path={"/guides/working-holiday-maker-tax"} title={"Working holiday maker tax in Australia"} />

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information about 2026-27 rates for subclass 417 and 462 visa holders,
            not personal tax, migration or financial advice. Rules change and individual circumstances
            differ; check the ATO or a registered tax agent for your situation. Full workings are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/guides/how-australian-income-tax-works" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How income tax works</a>
            <a href="/guides/medicare-levy-and-surcharge" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Medicare levy &amp; surcharge</a>
            <a href="/tax-brackets" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax brackets 2026-27</a>
          <a href="/guides/how-to-read-your-payslip" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How to read your payslip</a>
          </div>
        </section>
      </div>
    </main>
  );
}
