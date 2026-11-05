import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/instant-1000-work-deduction';
const TITLE = 'The $1,000 Instant Work Deduction (2026-27)';
const DESC =
  'How the new $1,000 standard deduction for work-related expenses works from 2026-27: who gets it, how claiming expenses affects it, and when receipts matter.';

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
      updated="November 2026"
quick="From the 2026-27 income year the ATO applies a standard deduction of up to $1,000 for work-related expenses without receipts. You must be an Australian resident for tax purposes with assessable labour income such as wages. The maximum is the lower of $1,000 or your labour income, and your own claims for certain expenses reduce it dollar for dollar."
keyFacts={[
'Applies from 1 July 2026, so it is not part of the 2025-26 return due by 31 October 2026.',
'It reduces taxable income: at a 30% marginal rate, $1,000 saves about $300 in tax.',
'Claim more than the maximum and you need written evidence for all the expenses you claim.',
'From 1 July 2026 the $300 work expense limit and the $150 laundry limit no longer apply.',
]}
source={{ href: ATO_URL, label: 'ATO, standard deduction for work-related expenses' }}
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
q: 'If I only have $550 of work expenses, should I claim them?',
a: 'Usually not. In the ATO example, claiming $550 of expenses reduces the standard deduction to $450, so the total deduction is still $1,000, but you now need records. Not claiming gives you the full $1,000 with no records for those expenses.',
},
{
q: 'Do union fees and professional memberships reduce the standard deduction?',
a: 'No. The ATO says union fees and memberships of a trade, business or professional association do not reduce it. You claim them as usual and keep the statements.',
},
{
q: 'Do donations, tax agent fees and super contributions reduce it?',
a: 'No. The ATO lists gifts and donations, the cost of managing your tax affairs, personal super contributions and income protection premiums among the deductions that do not reduce the standard deduction.',
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
          This guide is general information based on the ATO page linked above, checked on 5 November 2026 (the ATO page shows it was last updated on 2 November 2026). It is not
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

      <GuideSection title="Which expenses reduce it, and which do not">
<SimpleTable
head={['Reduces the standard deduction', 'Does not reduce it']}
rows={[
['Stationery, tolls and uniform', 'Union fees'],
['Laundry and working from home expenses', 'Memberships of trade, business or professional associations'],
['Travel allowance expenses', 'Gifts and donations'],
['Car expenses for earning labour income', 'Investment and rental property deductions'],
['Transport between two or more separate workplaces, if none is your home', 'The cost of managing your tax affairs'],
['Balancing adjustment deductions on assets used to earn labour income', 'Personal super contributions'],
['COVID-19 test expenses', 'Income protection, sickness or accident insurance premiums'],
]}
/>
<p className="text-xs text-slate-400">
Source: <Ext href={ATO_URL}>ATO standard deduction page</Ext>, checked 5 November 2026. The ATO list says
&ldquo;these include&rdquo;, so it is not necessarily exhaustive.
</p>
</GuideSection>

<GuideSection title="The ATO example: $550 of expenses">
<p>
The ATO gives the example of Yui, a resident earning $95,000 in wages. She had $200 of working from home
expenses, $200 for a work-related training course and $150 of travel from her workplace to visit clients, a
total of $550. She also made a $50 donation and paid $175 to her tax agent.
</p>
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Option 1: do not claim the $550.</B> She receives the full $1,000 standard deduction and does not need
records for those expenses.
</li>
<li>
<B>Option 2: claim the $550.</B> She needs records, and the standard deduction drops to $450
($1,000 minus $550). The total is still $1,000.
</li>
</ul>
<p>
The ATO notes it is easier for her not to claim. The donation and the tax agent fee can still be claimed in
both options, with records, because they do not reduce the standard deduction.
</p>
</GuideSection>

<GuideSection title="When it is worth claiming your own expenses">
<p>
The decision depends on whether your expenses that reduce the standard deduction are above or below $1,000.
</p>
<SimpleTable
head={['Your expenses that reduce it', 'Standard deduction left', 'Total deduction']}
rows={[
['$0', '$1,000', '$1,000'],
['$550', '$450 if you claim, $1,000 if you do not', '$1,000 either way'],
['$1,000', 'Nil', '$1,000'],
['$3,500', 'Nil', '$3,500, with written evidence'],
]}
/>
<p>
Below $1,000 there is nothing to gain from claiming, and records to lose. Above $1,000 you gain only the
excess. At a 30% marginal rate, the extra $2,500 in the $3,500 case saves about $750 more than the standard
deduction alone. These figures ignore the Medicare levy. Our{' '}
<In href="/">tax calculator</In> has a toggle for the standard deduction, applied to residents only.
</p>
</GuideSection>

<GuideSection title="What the $1,000 is worth at each marginal rate">
<SimpleTable
head={['Marginal rate (2026-27)', 'Income range', 'Tax saved by $1,000']}
rows={[
['15%', '$18,201 to $45,000', '$150'],
['30%', '$45,001 to $135,000', '$300'],
['37%', '$135,001 to $190,000', '$370'],
['45%', 'Above $190,000', '$450'],
]}
/>
<p>
Below $18,200 a resident pays no income tax, so the deduction saves nothing in income tax there. Rates shown
are the resident rates used throughout this site, before the Medicare levy.
</p>
</GuideSection>

<GuideSection title="Other changes that apply even if you do not get the deduction">
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Low value pool.</B> From 2026-27 you cannot add a depreciating asset to a low-value pool if you expected to
mainly use it to earn labour income. You can still claim its decline in value, but that claim reduces the
standard deduction.
</li>
<li>
<B>Balancing adjustments.</B> If you sell or stop using such an asset after receiving a standard deduction, you
can use a fixed 50% rate to work out the adjustment.
</li>
<li>
<B>Laundry.</B> The ATO says it will accept $1 per load if you wash only work clothes, and 50 cents per load if
you mix them with other clothes, under a compliance approach in a draft ruling, LCR 2026/D5.
</li>
</ul>
<p>
Because the ATO refers to a draft ruling, details can change before it is finalised. Check the ATO page for the
latest wording.
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
