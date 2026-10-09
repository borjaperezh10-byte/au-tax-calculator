import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';
import SixMonthChecker from '@/components/SixMonthChecker';
import { SIX_MONTH_OFFICIAL } from '@/lib/six-month-limit';

const PATH = '/guides/working-holiday-6-month-employer-limit';
const TITLE = 'Working Holiday 6-Month Rule Explained';
const DESC =
  'Working holiday makers (417 and 462) can usually work 6 months with one employer. Check when your 6 months end, which sectors are exempt, how locations and labour hire work, and how to ask for permission.';

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
      title="The 6-month rule: how long can you work for one employer?"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · Condition 8547"
      subtitle="Most working holiday makers can work up to 6 months with one employer at one location — but farm, hospitality, care and several other sectors are exempt. Check your job below."
      updated="October 2026"
      faqs={[
        {
          q: 'Can I work more than 6 months for one employer on a working holiday visa?',
          a: 'Yes, if your work is in an exempt sector: plant and animal cultivation, natural disaster recovery, agriculture, food processing, health, aged and disability care, childcare, or tourism and hospitality anywhere in Australia; or fishing and pearling, tree farming and felling, construction or mining in Northern Australia. Otherwise you need permission from Home Affairs.',
        },
        {
          q: 'Is the 6 months counted in days worked or in calendar months?',
          a: 'In calendar months from the day you started working for that employer, not in the number of days or hours you worked.',
        },
        {
          q: 'Does the 6-month limit reset with a second working holiday visa?',
          a: 'Yes. The 6 months start again with the grant of a new working holiday visa, or when a Bridging visa with condition 8547 comes into effect.',
        },
        {
          q: 'Can I keep working for the same company at another location?',
          a: 'Yes. No permission is needed if your work in any one location does not go over 6 months.',
        },
        {
          q: 'What if I work through a labour hire agency?',
          a: 'The employer is the business you are directly working for. An agency can place you with one business for 6 months and then refer you to another business for another 6 months.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/specified-work-postcodes', label: 'Postcode checker' },
        { href: '/working-holiday-maker', label: 'WHM tax calculator' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
      ]}
    >
      <GuideSection title="Check when your 6 months end">
        <SixMonthChecker />
      </GuideSection>

      <GuideSection title="The rule">
        <p>
          Working Holiday (subclass 417) and Work and Holiday (subclass 462) visas carry <B>condition 8547</B>: you
          can work a maximum of <B>6 months with any one employer</B>. It covers any type of work — full time, part
          time, casual, shift or voluntary.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>It is counted in months, not days.</B> The clock starts on your first day with that employer and runs
            whether or not you work every day.
          </li>
          <li>
            <B>Each location has its own 6 months.</B> You can move to another site of the same business and keep
            working without permission.
          </li>
          <li>
            <B>The employer is the business you work for directly.</B> A labour hire agency can refer you to one
            business for 6 months, then to another business for another 6 months.
          </li>
          <li>
            <B>It starts again with each new working holiday visa</B>, or when a Bridging visa with condition 8547
            comes into effect.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Source: <Ext href={SIX_MONTH_OFFICIAL.limitation}>6 month work limitation</Ext> (Home Affairs, last updated
          21 September 2026, checked 7 October 2026).
        </p>
      </GuideSection>

      <GuideSection title="Exempt sectors: no permission needed">
        <SimpleTable
          head={['Work', 'Where it is exempt']}
          rows={[
            ['Plant and animal cultivation', 'Anywhere in Australia'],
            ['Natural disaster recovery work', 'Anywhere in Australia'],
            ['Agriculture and food processing', 'Anywhere in Australia'],
            ['Health, aged and disability care, childcare', 'Anywhere in Australia'],
            ['Tourism and hospitality', 'Anywhere in Australia'],
            ['Fishing and pearling, tree farming and felling', 'Northern Australia only'],
            ['Construction and mining', 'Northern Australia only'],
            ['Any other work (office, retail, trades…)', 'Not exempt — 6 months, then permission'],
          ]}
        />
        <p>
          Northern Australia uses the same postcodes as the specified work table: all of the Northern Territory and
          parts of northern Queensland and Western Australia. Check any postcode in the{' '}
          <In href="/guides/specified-work-postcodes">postcode checker</In>.
        </p>
        <Callout>
          The 6-month rule and the 88 days are different things. Hospitality in Sydney is exempt from the 6-month
          limit but does <B>not</B> count as specified work. Construction in Dubbo counts towards your 88 days but{' '}
          <B>is</B> limited to 6 months with one employer.
        </Callout>
      </GuideSection>

      <GuideSection title="Asking for permission to stay longer">
        <p>
          If your work is not exempt, you can ask Home Affairs for permission to work longer than 6 months. The
          Department may agree if:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>you have applied for a visa that allows ongoing full-time work and are waiting for the outcome, or</li>
          <li>your work is critical to your employer, with supporting documents.</li>
        </ul>
        <p>
          <B>Send the request before your 6 months run out.</B> Once you have sent it, you can keep working for the
          same employer until you receive a written outcome. If the 6 months have already passed, you must stop
          working for that employer and wait for the decision.
        </p>
        <p className="text-xs text-slate-400">
          Sources: <Ext href={SIX_MONTH_OFFICIAL.permission}>permission to work longer than 6 months</Ext> and the{' '}
          <Ext href={SIX_MONTH_OFFICIAL.form}>condition 8547 permission request form</Ext>.
        </p>
      </GuideSection>

      <GuideSection title="Tracking it alongside your 88 days">
        <p>
          The <In href="/88-days-calculator">88 days calculator</In> now warns you when a job with the same employer
          and postcode goes past 6 months in a sector that is not exempt — so you can plan a move or ask for
          permission in time.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
