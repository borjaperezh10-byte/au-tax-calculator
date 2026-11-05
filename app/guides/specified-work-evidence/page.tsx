import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/specified-work-evidence';
const TITLE = 'Evidence for Your 88 Days: What to Keep';
const DESC =
  'The evidence Home Affairs asks for to prove specified work on a 417 or 462 visa: payslips, bank statements, references and volunteer letters.';

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
      title="What evidence to keep for your 88 days"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · Visas 417 & 462"
      subtitle="Home Affairs can ask you to prove every day you claim. Here’s the evidence it lists, and how to keep it organised from day one."
      updated="November 2026"
quick="Keep payslips and Australian bank statements covering every period of specified work you claim, plus any piecework agreement, group certificates, tax returns and employer references. Home Affairs can contact your employers, and volunteer recovery work needs a signed letter from the coordinator or host."
keyFacts={[
'Payslips and bank statements are the most common proof of paid work.',
'Evidence must cover every period you claim, and the work site postcode matters.',
'Volunteer letter: passport details, tasks, postcodes and number of days worked.',
]}
source={{ href: OFFICIAL.second417, label: 'Home Affairs, second Working Holiday visa (417)' }}
      faqs={[
        {
          q: 'Do I need payslips for every job?',
          a: 'Your evidence needs to cover every period of specified work you claim. Payslips are the most common proof, alongside Australian bank statements showing the payments.',
        },
        {
          q: 'Can Home Affairs contact my employer?',
          a: 'Yes. The official pages say the Department may contact your employers to check the work you declare.',
        },
        {
q: 'Do paid public holidays and sick days count, and what proof do I need?',
a: 'Home Affairs says Australian public holidays and sick days, or equivalent workers compensation leave days, can count as a day of specified work if you are paid for that day. Unpaid ones cannot. Your payslips are the natural proof, because they show the paid leave line.',
},
{
q: 'What should I keep if I work rostered shifts, such as two weeks on and two weeks off?',
a: 'Home Affairs says variable shift arrangements that are standard practice in the industry can count, including rostered-off days if you are paid for the whole period, and tells applicants to keep a copy of the employment contract. Keep the contract together with the payslips.',
},
{
q: 'What evidence do I need for critical COVID-19 work?',
a: 'Home Affairs says applicants should include evidence showing how the work supports Australia response to the COVID-19 pandemic, in addition to the normal proof of work and payment.',
},
{
          q: 'What do I need for volunteer recovery work?',
          a: 'A signed letter from the coordinator or host with your passport details, the tasks you did, the postcodes and the number of days worked.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
        { href: '/guides/specified-work-postcodes', label: 'Which postcodes count' },
        { href: '/guides/how-to-read-your-payslip', label: 'How to read your payslip' },
        { href: '/guides/417-vs-462-specified-work', label: '417 vs 462 specified work' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: the 179 days' },
        { href: '/guides/working-holiday-6-month-employer-limit', label: 'The 6-month employer limit' },
      ]}
    >
      <GuideSection title="The evidence Home Affairs lists">
        <p>For second and third visas, the official pages list evidence such as:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><B>Payslips</B> for the work you claim</li>
          <li><B>Australian bank statements</B> covering the period of declared specified work</li>
          <li><B>A piecework agreement</B>, if you were paid by the piece — showing the piece rate and how it is measured</li>
          <li><B>Group certificates and payment summaries</B></li>
          <li><B>Tax returns</B></li>
          <li><B>Employer references</B></li>
          <li><B>A signed agreement</B> covering any lawful deductions from your pay</li>
        </ul>
        <p>
          On the subclass 462 pages, payslips and bank statements are grouped together as &ldquo;evidence of
          payment&rdquo;. Either way, the evidence must cover <B>every period</B> you worked, and the Department may
          contact your employers.
        </p>
        <p className="text-xs text-slate-400">
          Sources: <Ext href={OFFICIAL.second417}>second 417</Ext>, <Ext href={OFFICIAL.third417}>third 417</Ext>,{' '}
          <Ext href={OFFICIAL.second462}>second 462</Ext> and <Ext href={OFFICIAL.third462}>third 462</Ext> visa
          pages, checked 5 November 2026. The sections below on piecework, shift work, paid leave and disaster recovery work follow the Home Affairs specified work page, also checked 5 November 2026.
        </p>
      </GuideSection>

      <GuideSection title="Volunteer recovery work">
        <p>
          Volunteer work only counts for bushfire or natural disaster recovery in declared areas. For it you need a{' '}
          <B>signed letter from the coordinator or host</B> that includes your passport details, the tasks you did,
          the postcodes where you worked and the number of days.
        </p>
      </GuideSection>

      <GuideSection title="How to keep it organised">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>Check the postcode on your payslip or reference.</B> The case officer checks where you physically
            worked — if the payslip only shows a head office, ask for a reference with the work site address.
          </li>
          <li>
            <B>Save every payslip as you get it</B>, not at the end. Employers in seasonal work close, change names
            or lose records.
          </li>
          <li>
            <B>Download bank statements for the whole period</B> and check the payments match your payslips.
          </li>
          <li>
            <B>Keep your piecework agreement</B> if you were paid per bin, bucket or tray.
          </li>
          <li>
            <B>Log your days as you go</B> in the <In href="/88-days-calculator">88 days calculator</In> and download
            a backup, so you know exactly which periods your evidence has to cover.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Evidence for the different ways of working">
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Piecework.</B> Home Affairs counts piecework days, which can vary with weather and ripening of crops, but
you still need proof of the days you worked. Keep the agreement and the payslips that show the days or
periods covered.
</li>
<li>
<B>Rostered shifts.</B> If your contract has weeks on and weeks off and this is standard practice in the
industry, Home Affairs says to keep a copy of your employment contract. That contract is what explains the
rostered-off days on your payslips.
</li>
<li>
<B>Paid public holidays and sick days.</B> They can count as days of specified work if you were paid for them,
so do not throw away payslips that show them.
</li>
<li>
<B>Several short jobs.</B> You may combine periods of full-time and part-time work, so each job needs its own
set of evidence. One employer reference does not cover the others.
</li>
<li>
<B>Disaster recovery work.</B> For flood or other disaster recovery work, you must choose the matching
employment type in the ImmiAccount form (flood recovery paid or volunteer). Keep evidence that links the
work to the declared area.
</li>
<li>
<B>Critical COVID-19 work.</B> Include evidence showing how the work supports the COVID-19 response.
</li>
</ul>
</GuideSection>

<GuideSection title="A simple evidence checklist for each job">
<ol className="list-decimal pl-5 space-y-2">
<li>Contract or written agreement, including rostered hours or the piece rate.</li>
<li>All payslips, with the work site postcode somewhere in the file, such as a reference.</li>
<li>Bank statements showing the matching deposits.</li>
<li>A reference from the employer with start and end dates and the work site address.</li>
<li>Your own day-by-day log from the <In href="/88-days-calculator">88 days calculator</In>, so you can see gaps before Home Affairs does.</li>
</ol>
<p>
This checklist is our suggestion for staying organised. The official evidence requirements are the ones listed
by Home Affairs above.
</p>
</GuideSection>

<GuideSection title="Common gaps that cause problems">
<ul className="list-disc pl-5 space-y-2">
<li>Payslips that show only a head office address, with no work site postcode.</li>
<li>Cash payments that do not appear in your bank statements.</li>
<li>Unpaid days counted in the total. Unpaid bad weather days and unpaid leave cannot be counted.</li>
<li>Counting more than one day for a long shift. One calendar day counts as one day at most.</li>
<li>Leaving the work late in the visa. Home Affairs says no exception is made if you fall short, whatever the reason.</li>
</ul>
</GuideSection>

<GuideSection title="Make sure you were paid properly">
        <p>
          Specified work must be paid in line with Australian law and awards. Being underpaid is a problem in its own
          right, and the Fair Work Ombudsman can help. Unpaid work does not count, except volunteer recovery work in
          declared bushfire or disaster areas.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
