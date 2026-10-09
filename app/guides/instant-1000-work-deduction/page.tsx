import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';

const PATH = '/guides/instant-1000-work-deduction';
const TITLE = 'The $1,000 Instant Work Deduction (2026-27)';
const DESC =
  'How the new $1,000 standard deduction for work-related expenses works from the 2026-27 income year: who gets it, how claiming expenses reduces it, and when keeping receipts still matters.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    images: ['/opengraph-image'], url: PATH, title: TITLE, description: DESC, type: 'article' },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const ATO_URL =
  'https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/work-related-deductions/standard-deduction-for-work-related-expenses';

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="The $1,000 instant work deduction"
      headline={TITLE}
      description={DESC}
      badge="Guide · Deductions"
      subtitle="From the 2026-27 income year the ATO applies a standard work-related deduction of up to $1,000 without receipts. Here is how it works and how it interacts with your own claims."
      updated="October 2026"
      faqs={[
        {
          q: 'Do I need receipts for the $1,000 standard deduction?',
          a: 'No. The ATO says the standard deduction applies without needing to have spent the money or kept records. You still need records for any expenses you claim yourself, and written evidence if you claim more than the maximum.',
        },
        {
          q: 'Which tax return does it apply to?',
          a: 'It starts with the 2026-27 income year, so it applies to the return you lodge after 30 June 2027. It does not apply to the 2025-26 return.',
        },
        {
          q: 'Is it a tax offset or a refund?',
          a: 'No. It is a deduction that reduces your taxable income, so the tax saved depends on your marginal tax rate.',
        },
        {
          q: 'What if I earn less than $1,000 in wages?',
          a: 'The maximum is the lower of $1,000 or your total assessable labour income, so $400 of wages gives a maximum of $400.',
        },
        {
          q: 'Does it apply to working holiday makers?',
          a: 'The ATO page says you must be an Australian resident for tax purposes and earn assessable labour income. Working holiday makers are often taxed at special rates and their residency depends on their circumstances, so check the ATO residency tests or ask a registered tax agent.',
        },
      ]}
      related={[
        { href: '/guides/tax-deductions-for-employees', label: 'Tax deductions for employees' },
        { href: '/tax-brackets', label: 'Australian tax brackets 2026-27' },
        { href: '/guides/marginal-vs-effective-tax-rate', label: 'Marginal vs effective tax rate' },
        { href: '/guides/tax-return-deadline-and-refunds', label: 'Tax return deadline and refunds' },
      ]}
      disclaimer={
        <p>
          This guide is general information based on the ATO page linked above, checked in October 2026. It is not
          tax advice and does not consider your circumstances. Rules can change, so check the{' '}
          <Ext href={ATO_URL}>ATO page</Ext> or ask a registered tax agent before you rely on it. See our{' '}
          <a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
          <a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
        </p>
      }
    >
      <GuideSection title="What the standard deduction is">
        <p>
          The Australian Taxation Office describes a default claim of up to <B>$1,000</B> for work-related expenses,
          often called the instant tax deduction. It is applied automatically from the information in your return, so
          you do not have to do anything to receive it, and it reduces your taxable income rather than your tax bill
          directly.
        </p>
        <p>
          It starts in the <B>2026-27 income year</B> (1 July 2026 to 30 June 2027). It does not apply to your
          2025-26 return, which is the one due by 31 October 2026 if you lodge yourself.
        </p>
      </GuideSection>

      <GuideSection title="Who can get it">
        <ul className="list-disc pl-5 space-y-1">
          <li>You must be an individual and an <B>Australian resident for tax purposes</B>.</li>
          <li>
            You must earn <B>assessable labour income</B>, such as salary and wages, director fees or parental leave
            pay. If you only earn other income, such as dividends or business income, it does not apply.
          </li>
          <li>
            The maximum is the <B>lower of $1,000 or your total assessable labour income</B>. With $400 of wages, the
            most you can get is $400.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="How your own claims change it">
        <p>
          The standard deduction is reduced <B>dollar for dollar</B> by certain work-related expenses you choose to
          claim, and it can fall to nil. The ATO lists expenses such as stationery, tolls, uniforms, laundry,
          working-from-home costs and some car and transport expenses as ones that reduce it.
        </p>
        <p>
          Union fees and professional association memberships do not reduce it, and neither do other deductions such
          as gifts, rental or investment deductions, tax agent fees, personal super contributions and income
          protection premiums.
        </p>
      </GuideSection>

      <GuideSection title="Two simple examples">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>You claim nothing yourself.</B> You receive the full $1,000 with no records needed for it. At a 30%
            marginal rate that lowers your tax by about $300.
          </li>
          <li>
            <B>You claim $3,500 of work expenses.</B> The standard deduction is reduced to nil and you claim your
            $3,500 instead, which needs written evidence such as receipts. This is the ATO&apos;s own example.
          </li>
        </ul>
        <p>
          Whether to claim your own expenses or take the standard deduction comes down to whether your real costs
          are higher than $1,000. Use the <In href="/tax-brackets">tax brackets page</In> to see your marginal rate.
        </p>
      </GuideSection>

      <GuideSection title="Records and other changes from 1 July 2026">
        <ul className="list-disc pl-5 space-y-1">
          <li>If you claim more than the maximum, you need written evidence for all the work-related expenses you claim.</li>
          <li>Records are still needed for union fees, association fees, income protection premiums and other claimed deductions.</li>
          <li>From 1 July 2026 the $300 work-related expense limit, the $150 laundry limit and the award transport expense exemption no longer apply.</li>
        </ul>
        <p>
          Read the full rules on the <Ext href={ATO_URL}>ATO standard deduction page</Ext>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
