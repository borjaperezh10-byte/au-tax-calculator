import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/specified-work-evidence';
const TITLE = 'Evidence for Your 88 Days: What to Keep for Your Second or Third Visa';
const DESC =
  'The evidence Home Affairs asks for to prove specified work on a 417 or 462 visa: payslips, bank statements, piecework agreements, payment summaries, employer references and volunteer letters — and how to keep it.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { url: PATH, title: TITLE, description: DESC, type: 'article' },
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
      updated="October 2026"
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
          q: 'What do I need for volunteer recovery work?',
          a: 'A signed letter from the coordinator or host with your passport details, the tasks you did, the postcodes and the number of days worked.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
        { href: '/guides/specified-work-postcodes', label: 'Which postcodes count' },
        { href: '/guides/how-to-read-your-payslip', label: 'How to read your payslip' },
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
          pages, checked 7 October 2026.
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
