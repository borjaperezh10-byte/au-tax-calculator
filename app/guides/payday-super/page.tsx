import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/payday-super';
const TITLE = 'Payday Super 2026: What Changes for You';
const DESC =
'From 1 July 2026 employers pay super with each payday, within 7 business days. What changed, what counts as qualifying earnings, salary sacrifice and what to check.';

const ATO_ABOUT =
'https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/about-payday-super';
const ATO_QE =
'https://www.ato.gov.au/businesses-and-organisations/super-for-employers/payday-super/paying-super-on-payday/what-payments-are-qualifying-earnings';
const ATO_EMPLOYEE =
'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/super-from-your-employer';

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
title="Payday Super: what changes for employees"
headline={TITLE}
description={DESC}
badge="Guide · Super"
subtitle="Since 1 July 2026 your employer has to pay your super with each payday instead of once a quarter. Here is what that means and what to check on your payslip."
updated="November 2026"
quick="From 1 July 2026 your employer must pay your super guarantee for each payday, and your super fund must receive it within 7 business days after you are paid. Before that it could wait until 28 days after the end of the quarter. The rate is still 12%, but it is now calculated on qualifying earnings, which include all commissions and salary sacrificed amounts that would otherwise have been qualifying earnings."
keyFacts={[
'Deadline: the contribution must reach your super fund within 7 business days after payday, with some exceptions such as new employees.',
'Rate: still 12%, now applied to qualifying earnings instead of ordinary time earnings.',
'Your fund has 3 business days to allocate the contribution, down from 20.',
'Overtime is generally not qualifying earnings, and neither are reimbursements or fringe benefits.',
]}
source={{ href: ATO_ABOUT, label: 'ATO, about Payday Super' }}
faqs={[
{
q: 'When does my employer have to pay my super under Payday Super?',
a: 'For earnings paid from 1 July 2026, your super fund must receive the contribution within 7 business days after payday, with enough information to allocate it to your account. There are some exceptions to the 7 business day deadline, such as for new employees.',
},
{
q: 'Has the super guarantee rate changed?',
a: 'No. The ATO says the percentage is still 12%. What changed is when it is paid and that it is calculated on qualifying earnings.',
},
{
q: 'What are qualifying earnings?',
a: 'Qualifying earnings are the payments your employer includes when working out your super guarantee. They include ordinary time earnings, all commissions, salary sacrifice amounts that would have been qualifying earnings if they had not been sacrificed to super, and certain payments to people covered by the expanded definition of employee.',
},
{
q: 'Is overtime included in qualifying earnings?',
a: 'Generally no. The ATO says overtime payments are not ordinary time earnings, and so not qualifying earnings, provided your ordinary hours of work are clearly identified in an award or agreement. If overtime cannot be clearly identified, all hours worked can count as ordinary hours.',
},
{
q: 'Does salary sacrifice reduce the super my employer must pay?',
a: 'No. The ATO says salary sacrificed amounts that would otherwise have been qualifying earnings are counted in the earnings your super is calculated on, and they do not count towards the contributions your employer must make to avoid the super guarantee charge.',
},
{
q: 'Do backpackers on a working holiday visa get super?',
a: 'The ATO lists temporary residents, such as backpackers, among people who are generally eligible for super guarantee, with some exceptions. When you leave Australia you may be able to claim the money back as a departing Australia superannuation payment.',
},
]}
related={[
{ href: '/guides/how-to-read-your-payslip', label: 'How to read your payslip' },
{ href: '/guides/salary-sacrifice-explained', label: 'Salary sacrifice explained' },
{ href: '/guides/departing-australia-super-dasp', label: 'Claim your super when you leave (DASP)' },
{ href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
{ href: '/guides/tax-deductions-for-employees', label: 'Tax deductions for employees' },
{ href: '/glossary', label: 'Tax glossary' },
]}
disclaimer={
<p>
This guide is general information based on the ATO pages linked in the text, checked on 5 November 2026. It
is not tax or legal advice and does not consider your circumstances. Rules can change, so check the{' '}
<Ext href={ATO_ABOUT}>ATO Payday Super page</Ext> or ask a registered tax agent before you rely on it. See our{' '}
<a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
<a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
</p>
}
>
<GuideSection title="What Payday Super is">
<p>
Payday Super is a change to how employers pay the <B>super guarantee</B>, the minimum super your employer pays
for you on top of your wages. From 1 July 2026 the employer pays super for each payday instead of
for each quarter. It is an employer obligation, so you do not claim it or apply for it, but it
changes what you should expect to see in your super account.
</p>
<p>
The ATO says Payday Super does not change who your employer has to pay super for, and it does not change the
percentage, which is still <B>12%</B>.
</p>
</GuideSection>

<GuideSection title="Before and after 1 July 2026">
<SimpleTable
head={['', 'Before 1 July 2026', 'From 1 July 2026']}
rows={[
['Deadline for your super to reach your fund', 'Within 28 days after the end of the quarter (28 October, 28 January, 28 April, 28 July)', 'Within 7 business days after payday, with some exceptions such as new employees'],
['What the 12% is applied to', 'Ordinary time earnings', 'Qualifying earnings'],
['What the employer reports through Single Touch Payroll', 'Either ordinary time earnings or super liability', 'Both qualifying earnings and super liability'],
['Time your fund has to allocate the money to your account', '20 business days', '3 business days, not counting the day it is received'],
['If the employer pays late', 'Super guarantee charge, self-assessed by the employer, not tax deductible', 'Super guarantee charge assessed by the ATO, with interest compounding daily, an administrative uplift and penalties of 25% or 50%, and it is tax deductible'],
]}
/>
<p className="text-xs text-slate-400">
Source: <Ext href={ATO_ABOUT}>ATO, about Payday Super</Ext> (last updated 10 August 2026), checked 5 November 2026.
</p>
</GuideSection>

<GuideSection title="What counts as qualifying earnings">
<p>
Qualifying earnings is the new name for the payments your employer includes when calculating your super.
For most employers the ATO says the change does not alter the amount of super paid, because everything that was
included up to 30 June 2026 is still included. Two things were added: <B>commissions</B> for work done entirely
outside ordinary hours, and certain payments for people covered by the expanded definition of employee.
</p>
<SimpleTable
head={['Payment', 'Included in qualifying earnings?']}
rows={[
['Ordinary hours of work, casual loading and shift penalties', 'Yes'],
['Annual leave, sick and personal leave, long service leave not paid by a portable scheme', 'Yes'],
['Performance, Christmas and sign-on bonuses for ordinary hours', 'Yes'],
['All commissions', 'Yes'],
['Payment in lieu of notice', 'Yes'],
['Overtime, when ordinary hours are clearly identified', 'No'],
['A bonus solely for work done entirely outside ordinary hours', 'No'],
['Employer paid or government paid parental leave', 'No'],
['Unused annual leave or long service leave paid on a normal termination', 'No'],
['Genuine redundancy and other termination payments except payment in lieu of notice', 'No'],
['Reimbursements for expenses already incurred', 'No'],
['Fringe benefits', 'No'],
['An expense allowance expected to be fully spent on the job, such as a tool allowance', 'No'],
]}
/>
<p className="text-xs text-slate-400">
Source: <Ext href={ATO_QE}>ATO, what payments are qualifying earnings</Ext> (last updated 2 September 2026),
checked 5 November 2026. The ATO tables are lists of common examples and are not exhaustive.
</p>
</GuideSection>

<GuideSection title="Worked examples">
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Ordinary wage.</B> In the ATO example, an employee is paid a fortnightly wage of $3,000 for ordinary hours,
so the super guarantee is 12% of $3,000, which is $360, paid to the employee&rsquo;s fund.
</li>
<li>
<B>Salary sacrifice to super.</B> The ATO example has an employee earning $2,500 for a fortnight who sacrifices
$500 into super. The qualifying earnings are still $2,000 paid plus $500 sacrificed, which is $2,500. By our
arithmetic, 12% of $2,500 is $300, and the ATO says the sacrificed $500 does not count towards the employer&rsquo;s
own required contribution, so the $300 is paid in addition to the $500.
</li>
<li>
<B>Salary sacrifice to a novated lease.</B> Another ATO example has $200 of a $1,500 fortnight sacrificed
for a novated lease. The qualifying earnings fall to $1,300, because amounts sacrificed to benefits other
than super are not included. By our arithmetic, 12% of $1,300 is $156.
</li>
<li>
<B>Overtime.</B> An employee on an award works 38 ordinary hours plus 10 hours of overtime. Only the 38 hours
are qualifying earnings, because the overtime is clearly identifiable.
</li>
</ul>
<p>
For the tax side of salary sacrifice, see <In href="/guides/salary-sacrifice-explained">salary sacrifice explained</In>.
</p>
</GuideSection>

<GuideSection title="What to check as an employee">
<ol className="list-decimal pl-5 space-y-2">
<li>
<B>Your payslip.</B> Check that a super line appears for each pay, and that the 12% is calculated on the
earnings you expect. See <In href="/guides/how-to-read-your-payslip">how to read your payslip</In>.
</li>
<li>
<B>Your super account.</B> Contributions should now arrive soon after each payday rather than in a quarterly
lump. Log in to your fund and compare the dates and amounts with your payslips.
</li>
<li>
<B>Your fund details.</B> The payment needs your correct fund and member details to be allocated to your
account, so tell your employer if you change fund.
</li>
<li>
<B>Gaps.</B> If super is missing or late, ask your employer first. The ATO also has a page on unpaid super from
your employer.
</li>
</ol>
<p className="text-xs text-slate-400">
The 7 business days is measured to the time your fund receives the contribution with the information needed to
allocate it, not to the day your employer sends it. Steps 1 to 4 are our suggestions for staying organised.
</p>
</GuideSection>

<GuideSection title="Who is eligible">
<ul className="list-disc pl-5 space-y-2">
<li>Most employees are eligible, whether full time, part time or casual.</li>
<li>Employees under 18 and people doing work of a private or domestic nature are only eligible in a week when they work more than 30 hours.</li>
<li>Independent contractors paid wholly or mainly for their labour are treated as employees for super.</li>
<li>Temporary residents such as backpackers are generally eligible, with some exceptions.</li>
<li>Once your qualifying earnings reach the maximum contribution base for the financial year, your employer can stop paying super guarantee for you.</li>
</ul>
<p>
Super guarantee payments count towards your concessional (before tax) contributions cap, so check the total if you
also salary sacrifice. If you are on a working holiday visa and plan to leave, read about the{' '}
<In href="/guides/departing-australia-super-dasp">departing Australia superannuation payment</In>.
</p>
<p className="text-xs text-slate-400">
Source: <Ext href={ATO_EMPLOYEE}>ATO, super from your employer</Ext> (last updated 1 July 2026), checked 5 November 2026.
</p>
</GuideSection>

<GuideSection title="What happens if an employer pays late">
<p>
Under Payday Super, if the super is not received by your fund within 7 business days after payday, unless a longer
period applies such as for new employees, the employer faces the <B>super guarantee charge</B>. The ATO assesses
the charge itself, so employers no longer lodge a super guarantee statement. The charge is calculated on qualifying
earnings, includes interest compounding daily and an administrative uplift, and penalties of 25% or 50% of the
unpaid charge can apply depending on past penalties. Unlike the old charge, it is tax deductible.
</p>
<p>
That is the employer&rsquo;s liability, not a cost to you, but it is the reason the deadline matters: a late payment is
easier to spot when contributions are expected every payday.
</p>
</GuideSection>
</GuideArticle>
);
}
