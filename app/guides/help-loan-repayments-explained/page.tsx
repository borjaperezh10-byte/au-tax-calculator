import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/help-loan-repayments-explained';
const TITLE = 'HELP Loan Repayments 2026-27: How They Are Worked Out';
const DESC =
'How compulsory HELP repayments work in 2026-27: the marginal rates, what counts as repayment income, worked examples and how the old system compared.';

const ATO_RATES =
'https://www.ato.gov.au/tax-rates-and-codes/study-and-training-loan-minimum-repayment-income-and-rates';

export const metadata: Metadata = {
title: TITLE,
description: DESC,
alternates: { canonical: PATH },
openGraph: {
images: ['/opengraph-image'], url: PATH, title: TITLE, description: DESC, type: 'article' },
authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

export default function Page() {
return (
<GuideArticle
path={PATH}
title="HELP loan repayments in 2026-27"
headline={TITLE}
description={DESC}
badge="Guide · Study loans"
subtitle="Since 2025-26 compulsory repayments are worked out with marginal rates, like income tax. Here is how the 2026-27 numbers work and what counts as your repayment income."
updated="November 2026"
quick="For 2026-27 you pay nothing on a repayment income up to $69,528. Above that you pay 15 cents for each dollar over $69,528 up to $129,717, then $9,028 plus 17 cents for each dollar over $129,717 up to $186,050, and 10% of your whole repayment income from $186,051. Repayment income is wider than taxable income, because it adds things like reportable super contributions and reportable fringe benefits."
keyFacts={[
'2026-27 minimum repayment income: $69,528 (it was $67,000 in 2025-26).',
'Marginal system: since 2025-26 only the income above a threshold is charged at that rate.',
'Repayment income = taxable income plus reportable fringe benefits, reportable super contributions, net investment losses and exempt foreign employment income.',
'The same thresholds apply to HELP, VET Student Loans, SFSS, Student Start-up Loans and Australian Apprenticeship Support Loans.',
]}
source={{ href: ATO_RATES, label: 'ATO, study and training loan repayment thresholds and rates' }}
faqs={[
{
q: 'What is the HELP repayment threshold for 2026-27?',
a: 'The ATO lists a minimum repayment income of $69,528 for 2026-27. Below that, your compulsory repayment is nil. In 2025-26 the figure was $67,000.',
},
{
q: 'Do I pay a percentage of my whole income once I pass the threshold?',
a: 'Not any more, except at the very top. From 2025-26 the ATO calculates repayments with marginal rates, so between $69,529 and $129,717 you pay 15 cents on each dollar above $69,528 only. Only at $186,051 and over does the ATO apply 10% to your total repayment income.',
},
{
q: 'Is repayment income the same as my taxable income?',
a: 'No. It starts from taxable income, excluding any assessable First Home Super Saver released amounts, and adds reportable fringe benefits, total net investment loss including net rental losses, reportable super contributions and exempt foreign employment income. Reportable super contributions are part of the total, so check how your own contributions are reported before assuming they lower the figure.',
},
{
q: 'Where can I check my exact repayment?',
a: 'The ATO has a study and training loan repayment calculator where you enter your repayment income,. This guide is only a summary of the ATO table.',
},
{
q: 'Do the thresholds change every year?',
a: 'Yes, the ATO says the thresholds and rates are updated each year. The 2026-27 table was last updated on 30 June 2026, so check the ATO page for the current figures before you rely on any number here.',
},
]}
related={[
{ href: '/hecs-help-repayment', label: 'HELP repayment calculator' },
{ href: '/guides/marginal-vs-effective-tax-rate', label: 'Marginal vs effective tax rate' },
{ href: '/guides/salary-sacrifice-explained', label: 'Salary sacrifice explained' },
{ href: '/guides/medicare-levy-and-surcharge', label: 'Medicare levy and surcharge' },
{ href: '/guides/how-australian-income-tax-works', label: 'How Australian income tax works' },
{ href: '/glossary', label: 'Tax glossary' },
]}
disclaimer={
<p>
This guide is general information based on the ATO page linked in the text, checked on 5 November 2026. It
is not tax or financial advice and does not consider your circumstances. Rules can change, so check the{' '}
<Ext href={ATO_RATES}>ATO repayment thresholds page</Ext> or ask a registered tax agent before you rely on it. See our{' '}
<a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
<a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
</p>
}
>
<GuideSection title="The 2026-27 repayment table">
<p>
Study and training loans such as <B>HELP</B> are repaid through the tax system once your income passes a
threshold. The ATO says that from the 2025-26 income year the compulsory repayment is calculated using
marginal rates, so you pay a given rate only on the slice of income inside each band.
</p>
<SimpleTable
head={['Repayment income, 2026-27', 'Compulsory repayment']}
rows={[
['$0 to $69,528', 'Nil'],
['$69,529 to $129,717', '15 cents for each $1 over $69,528'],
['$129,718 to $186,050', '$9,028 plus 17 cents for each $1 over $129,717'],
['$186,051 and over', '10% of your total repayment income'],
]}
/>
<p className="text-xs text-slate-400">
Source: <Ext href={ATO_RATES}>ATO</Ext> (last updated 30 June 2026), checked 5 November 2026.
</p>
</GuideSection>

<GuideSection title="What counts as repayment income">
<p>
Your repayment income is not just the number at the bottom of your tax return. The ATO adds up all of these:
</p>
<ul className="list-disc pl-5 space-y-2">
<li>Taxable income, excluding any assessable First Home Super Saver released amounts.</li>
<li>Reportable fringe benefits, whether or not your employer is exempt from fringe benefits tax.</li>
<li>Total net investment loss, which includes net rental losses.</li>
<li>Reportable super contributions.</li>
<li>Exempt foreign employment income.</li>
</ul>
<p>
The practical effect is that your repayment income can be higher than your taxable income. See{' '}
<In href="/guides/salary-sacrifice-explained">salary sacrifice explained</In> for how super contributions work.
</p>
</GuideSection>

<GuideSection title="Worked examples for 2026-27">
<p>
The first two use the same method as the ATO examples. The figures are our own arithmetic on the ATO table, with
taxable income equal to repayment income to keep them simple.
</p>
<SimpleTable
head={['Repayment income', 'Calculation', 'Repayment']}
rows={[
['$60,000', 'Below $69,528', '$0'],
['$85,000', '($85,000 - $69,528) x 15% = $15,472 x 15%', '$2,320.80'],
['$100,000', '($100,000 - $69,528) x 15% = $30,472 x 15%', '$4,570.80'],
['$140,000', '$9,028 + ($140,000 - $129,717) x 17% = $9,028 + $1,748.11', '$10,776.11'],
['$200,000', '10% of $200,000', '$20,000'],
]}
/>
<p>
The ATO also publishes its own example: Christina has taxable income of $60,470, reportable fringe benefits of
$5,400, a net investment loss of $1,330, reportable super contributions of $16,500 and exempt foreign employment
income of $2,680. Her repayment income is $86,380, above the minimum threshold, so her repayment is 15% of
$16,852, which is $2,527.80. Notice that her taxable income alone would have been below the threshold.
</p>
</GuideSection>

<GuideSection title="How it compared before 2025-26">
<p>
Until 2024-25 the repayment was a single percentage of your whole repayment income, and the percentage stepped up
across many small bands. Crossing a threshold by one dollar could add hundreds of dollars to the bill. The table
below compares the same income under the three most recent systems, using the ATO tables for each year.
</p>
<SimpleTable
head={['Repayment income', '2024-25 (old system)', '2025-26', '2026-27']}
rows={[
['$60,000', '$600 (1.0%)', '$0', '$0'],
['$100,000', '$5,500 (5.5%)', '$4,950', '$4,570.80'],
['$140,000', '$11,900 (8.5%)', '$11,250', '$10,776.11'],
]}
/>
<p className="text-xs text-slate-400">
Our arithmetic on the ATO tables for each year. 2025-26: 15% above $67,000, then $8,700 plus 17% above $125,000.
The 2024-25 rates are 1.0% from $54,435, 5.5% from $94,504 and 8.5% from $134,057 of total repayment income.
</p>
<p>
These comparisons assume the same income in each year. In practice most people also earn more over time, so a
smaller repayment on the same income does not always mean a smaller bill.
</p>
</GuideSection>

<GuideSection title="Practical checks">
<ol className="list-decimal pl-5 space-y-2">
<li>
<B>Work out your own repayment income.</B> Add your taxable income to reportable fringe benefits, reportable
super contributions and any net investment loss, then compare it with the table above.
</li>
<li>
<B>Try the calculator.</B> Our <In href="/hecs-help-repayment">HELP repayment calculator</In> does the sum for you,
and the ATO has its own study and training loan repayment calculator.
</li>
<li>
<B>Check the ATO calculator.</B> The ATO has a study and training loan repayment calculator where you enter your
repayment income.
</li>
<li>
<B>Know your marginal rate.</B> A HELP repayment adds to the tax you pay on each extra dollar. See{' '}
<In href="/guides/marginal-vs-effective-tax-rate">marginal vs effective tax rate</In>.
</li>
</ol>
<p className="text-xs text-slate-400">
These steps are our suggestions, not ATO instructions.
</p>
</GuideSection>
</GuideArticle>
);
}
