import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/minimum-wage-after-tax';
const TITLE = 'Minimum Wage After Tax in Australia 2026-27: $869.80 a Week';
const DESC =
  'The national minimum wage is $1,004.90 a week from 1 July 2026. After 2026-27 income tax, the low income tax offset and the Medicare levy, a full-time worker keeps about $869.80 a week.';

const FWO =
  'https://www.fairwork.gov.au/newsroom/media-releases/2026-media-releases/july-2026/20260701-minimum-wage-increase-media-release';
const ATO_RATES = 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents';
const ATO_LITO =
  'https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/tax-offsets/low-and-middle-income-earner-tax-offsets';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { images: ['/opengraph-image'], url: PATH, title: TITLE, description: DESC, type: 'article' },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="Minimum wage after tax in 2026-27"
      headline={TITLE}
      description={DESC}
      badge="Guide · Your pay"
      subtitle="The national minimum wage rose on 1 July 2026. Here is what a full-time, part-time and casual minimum wage worker keeps after tax, worked out with our calculator."
      updated="November 2026"
      quick="From 1 July 2026 the national minimum wage is $1,004.90 a week for a 38-hour week, or $52,254.80 a year. An Australian resident on that wage pays $6,196.44 income tax, less a $216.18 low income tax offset, plus a $1,045.10 Medicare levy. That leaves $45,229.44 a year, or about $869.80 a week. The employer also pays 12% super on top, about $6,270.58 a year."
      keyFacts={[
        'National minimum wage from 1 July 2026: $1,004.90 a week (38 hours) or $26.44 an hour.',
        'Full-time take-home after tax: about $869.80 a week, $1,739.59 a fortnight or $45,229.44 a year.',
        'Effective tax rate including Medicare: about 13.4%. Marginal rate: 30% plus 2% Medicare.',
        'Super of 12% is paid on top of the wage, not out of it.',
      ]}
      source={{ href: FWO, label: 'Fair Work Ombudsman, minimum wage increase (1 July 2026)' }}
      faqs={[
        {
          q: 'How much is the minimum wage after tax in Australia in 2026-27?',
          a: 'For a full-time Australian resident on the national minimum wage of $1,004.90 a week, take-home pay is about $869.80 a week, or $45,229.44 a year, after income tax, the low income tax offset and the 2% Medicare levy.',
        },
        {
          q: 'What is the minimum wage per hour from 1 July 2026?',
          a: 'The Fair Work Ombudsman gives $26.44 an hour and $1,004.90 a week for a 38-hour week. Casual employees covered by the national minimum wage get at least $33.05 an hour, including a 25% casual loading.',
        },
        {
          q: 'Why is my weekly pay different from $869.80?',
          a: 'Our figure is the annual tax result divided by 52. Your employer withholds tax each pay using the ATO tax tables, which can differ slightly, and things such as a HELP debt, not claiming the tax-free threshold, a second job or deductions change the result. Differences are settled when you lodge your tax return.',
        },
        {
          q: 'Do working holiday makers on the minimum wage pay the same tax?',
          a: 'No. A working holiday maker with a registered employer pays 15% on the first $45,000 and 30% above that, with no tax-free threshold, no low income tax offset and generally no Medicare levy. On $52,254.80 that leaves about $833.24 a week.',
        },
        {
          q: 'Is super taken out of the minimum wage?',
          a: 'No. The 12% super guarantee is paid by the employer on top of your wage. On the full-time minimum wage it is about $6,270.58 a year.',
        },
      ]}
      related={[
        { href: '/', label: 'Income tax calculator' },
        { href: '/salary/50000', label: '$50,000 after tax' },
        { href: '/guides/how-to-read-your-payslip', label: 'How to read your payslip' },
        { href: '/guides/marginal-vs-effective-tax-rate', label: 'Marginal vs effective tax rate' },
        { href: '/guides/how-australian-income-tax-works', label: 'How Australian income tax works' },
        { href: '/working-holiday-maker', label: 'Working holiday tax calculator' },
      ]}
      disclaimer={
        <p>
          This guide is general information. Wage figures come from the{' '}
          <Ext href={FWO}>Fair Work Ombudsman media release of 1 July 2026</Ext>; tax figures come from our calculator,
          which applies the <Ext href={ATO_RATES}>ATO 2026-27 resident tax rates</Ext>, the low income tax offset and the
          Medicare levy as described in our <a href="/methodology" className="text-blue-500 hover:underline">methodology</a>.
          It is not tax or financial advice and award rates may be higher than the national minimum wage. See our{' '}
          <a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
        </p>
      }
    >
      <GuideSection title="The minimum wage from 1 July 2026">
        <p>
          The Fair Work Ombudsman says the national minimum wage is <B>$1,004.90 a week</B> for a 38-hour week, or{' '}
          <B>$26.44 an hour</B>, from the first full pay period starting on or after 1 July 2026. Award-covered employees
          received a 4.75% increase to their minimum wages. Casual employees get at least <B>$33.05 an hour</B>,
          including the 25% casual loading. Entry-level award rates for the first six months must be at least $978.10 a
          week.
        </p>
        <p className="text-xs text-slate-400">
          The hourly figure multiplied by 38 gives $1,004.72, slightly below the official weekly figure, because the hourly
          rate is rounded. We use the official weekly figure of $1,004.90.
        </p>
      </GuideSection>

      <GuideSection title="Full-time minimum wage after tax">
        <SimpleTable
          head={['', 'Per year', 'Per fortnight', 'Per week']}
          rows={[
            ['Gross wage', '$52,254.80', '$2,009.80', '$1,004.90'],
            ['Income tax before offsets', '$6,196.44', '$238.32', '$119.16'],
            ['Low income tax offset', '−$216.18', '−$8.31', '−$4.16'],
            ['Medicare levy (2%)', '$1,045.10', '$40.20', '$20.10'],
            [<B key="n">Take-home pay</B>, <B key="a">$45,229.44</B>, <B key="f">$1,739.59</B>, <B key="w">$869.80</B>],
          ]}
        />
        <p className="text-xs text-slate-400">
          Australian resident, full year, tax-free threshold claimed, no HELP debt, no deductions. Fortnightly and weekly
          figures are the annual result divided by 26 and 52, rounded. Employer super of 12% (about $6,270.58 a year) is
          paid on top.
        </p>
        <p>
          The tax works like this: nothing on the first $18,200, 15% from $18,201 to $45,000 ($4,020), then 30% on the
          $7,254.80 above $45,000 ($2,176.44), which makes $6,196.44. The low income tax offset is $700 reduced by 5 cents
          for each dollar over $37,500 up to $45,000, then by 1.5 cents for each dollar over $45,000, which leaves $216.18.
          Read more in <In href="/guides/how-australian-income-tax-works">how Australian income tax works</In>.
        </p>
        <Callout>
          That is an effective rate of about 13.4% including Medicare, even though each extra dollar above $45,000 is taxed
          at 30% plus 2% Medicare. See <In href="/guides/marginal-vs-effective-tax-rate">marginal vs effective tax rate</In>.
        </Callout>
      </GuideSection>

      <GuideSection title="Part-time, casual and entry-level examples">
        <SimpleTable
          head={['Example (resident, full year)', 'Gross per year', 'Take-home per year', 'Take-home per week']}
          rows={[
            ['Full-time, $1,004.90 a week', '$52,254.80', '$45,229.44', '$869.80'],
            ['Entry-level award, $978.10 a week', '$50,861.20', '$44,302.70', '$851.97'],
            ['Part-time, 20 hours at $26.44', '$27,497.60', '$26,802.96', '$515.44'],
            ['Casual, 38 hours at $33.05', '$65,306.80', '$53,909.02', '$1,036.71'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Worked out with our calculator&rsquo;s 2026-27 settings. In the part-time example the full $700 low income tax
          offset applies and income is below the calculator&rsquo;s Medicare levy low-income threshold, so no levy is
          charged. Real hours usually vary across a year.
        </p>
      </GuideSection>

      <GuideSection title="Working holiday makers on the minimum wage">
        <p>
          Working holiday makers (subclass 417 and 462) are taxed differently: 15% on the first $45,000 and 30% above that
          when their employer is registered, with no tax-free threshold, no low income tax offset and generally no Medicare
          levy. On $52,254.80 a year that is $8,926.44 tax, leaving <B>$43,328.36 a year</B>, or about{' '}
          <B>$833.24 a week</B>. See <In href="/guides/working-holiday-maker-tax">working holiday maker tax</In>.
        </p>
      </GuideSection>

      <GuideSection title="Why your payslip may show a different figure">
        <ul className="list-disc pl-5 space-y-2">
          <li>Your employer withholds tax each pay using the ATO tax tables, which round and spread the year differently.</li>
          <li>A HELP debt adds repayments once your repayment income passes the threshold; the minimum wage is below it in 2026-27.</li>
          <li>Not claiming the tax-free threshold, or having a second job, increases the tax withheld. See <In href="/guides/tax-on-a-second-job">tax on a second job</In>.</li>
          <li>Award rates, penalty rates and overtime are often higher than the national minimum wage.</li>
        </ul>
        <p>
          Use the <In href="/">income tax calculator</In> with your own pay, or check each line with{' '}
          <In href="/guides/how-to-read-your-payslip">how to read your payslip</In>.
        </p>
        <p className="text-xs text-slate-400">
          Low income tax offset rules: <Ext href={ATO_LITO}>ATO, low and middle income earner tax offsets</Ext>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
