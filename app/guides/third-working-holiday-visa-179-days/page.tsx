import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/third-working-holiday-visa-179-days';
const TITLE = 'Third Working Holiday Visa: The 179 Days';
const DESC =
  'What you need for a third Working Holiday (417) or Work and Holiday (462) visa: 179 days of specified work, the 1 July 2019 rule and bridging visas.';

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
      title="Third visa: the 179 days of specified work"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · Third visa"
      subtitle="Six months of specified work during your second visa — counted the same way as the 88 days, with a few extra rules."
      updated="November 2026"
quick="A third Working Holiday visa needs 179 days of specified work, which is six calendar months, done during your second visa. The days are counted the same way as the 88 days, only work done on or after 1 July 2019 counts, and the requirement cannot be completed in less than six calendar months."
keyFacts={[
'179 days for a third visa (the six shortest calendar months of the year).',
'Work on a bridging visa counts only if you applied for the second visa while the first was still valid.',
'UK passport holders applying for a third 417 from 1 July 2024 do not need specified work.',
]}
source={{ href: OFFICIAL.third417, label: 'Home Affairs, third Working Holiday visa (417)' }}
      faqs={[
        {
          q: 'How many days do I need for a third Working Holiday visa?',
          a: '179 days of specified work, which is six calendar months (the six shortest months of the year), done during your second visa.',
        },
        {
          q: 'Does work on a bridging visa count towards my third visa?',
          a: 'Only if you applied for your second visa while your first one was still valid.',
        },
        {
q: 'Can I count work done on my first visa towards the third visa?',
a: 'No. For a third visa, work done while you held your first Working Holiday visa does not count. The work must be done while you hold your second visa, and on or after 1 July 2019.',
},
{
q: 'Do unpaid days, such as bad weather days, count?',
a: 'No. Home Affairs says unpaid days when you did not work because of severe or seasonal weather cannot be counted, and no exception is made if you fall short because of weather or any other reason. Paid public holidays and paid sick days can count.',
},
{
q: 'Do I have to do the six months with one employer?',
a: 'No. You can spread the work over the stay of your second visa and over several employers, as long as it adds up to the equivalent of six months of full-time work and is paid in line with Australian law and awards.',
},
{
          q: 'Can I use work from before 2019?',
          a: 'No. Specified work for a third visa must have been done on or after 1 July 2019.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '179 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the days are counted' },
        { href: '/guides/uk-working-holiday-specified-work-exemption', label: 'UK exemption' },
        { href: '/guides/specified-work-evidence', label: 'Evidence to keep' },
        { href: '/guides/specified-work-postcodes', label: 'Which postcodes count' },
        { href: '/guides/417-vs-462-specified-work', label: '417 vs 462 specified work' },
        { href: '/guides/working-holiday-6-month-employer-limit', label: 'The 6-month employer limit' },
      ]}
    >
      <GuideSection title="The requirement">
        <p>
          For a third visa you need <B>179 days</B> of specified work — six calendar months — done during your
          second visa. The days are counted exactly like the 88 days: calendar days for full-time work, a proportion
          for part-time work, and never more than one day per calendar day. See{' '}
          <In href="/guides/how-88-days-are-counted">how the days are counted</In>.
        </p>
        <p>
          You can&rsquo;t complete it in less than six calendar months, however many hours you work.
        </p>
      </GuideSection>

      <GuideSection title="Rules specific to the third visa">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>Work from 1 July 2019 onwards.</B> Earlier specified work does not count towards a third visa.
          </li>
          <li>
            <B>Bridging visas.</B> Work done on a bridging visa between your first and second visas only counts if
            you applied for the second visa while the first was still valid.
          </li>
          <li>
            <B>Same industries and postcodes.</B> The eligible industries and{' '}
            <In href="/guides/specified-work-postcodes">postcodes</In> are the same as for the second visa.
          </li>
          <li>
            <B>UK passport holders</B> applying for a third 417 from 1 July 2024 don&rsquo;t need specified work —
            see the <In href="/guides/uk-working-holiday-specified-work-exemption">UK exemption</In>.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Sources: <Ext href={OFFICIAL.third417}>third Working Holiday (417)</Ext>,{' '}
          <Ext href={OFFICIAL.third462}>third Work and Holiday (462)</Ext> and the{' '}
          <Ext href={OFFICIAL.specified417}>specified work</Ext> pages, checked 5 November 2026.
        </p>
      </GuideSection>

      <GuideSection title="What cannot be counted">
<p>Home Affairs lists work that does not count towards a third visa, even if the job itself is in a specified industry.</p>
<ul className="list-disc pl-5 space-y-2">
<li>Work done while you held your <B>first</B> Working Holiday visa.</li>
<li>Work done before <B>1 July 2019</B>.</li>
<li>Work done on another kind of visa, for example a student visa.</li>
<li>Work done on a bridging visa outside the case described below.</li>
<li>Unpaid days off because of severe or seasonal weather, and public holidays or leave days you were not paid for.</li>
</ul>
</GuideSection>

<GuideSection title="Two exceptions that can help">
<p>
<B>Bridging visa.</B> If you applied for your second visa while your first visa was still in effect, and the
first visa then ended while the application was being processed, specified work you do on the bridging visa
can count towards the third visa.
</p>
<p>
<B>COVID-19 Pandemic event visa (subclass 408).</B> For people who moved straight from a Working Holiday visa to
a 408 visa, critical COVID-19 work in healthcare and medical sectors done on that visa can count, together with
any other specified work done on it. If you did no critical COVID-19 work on a 408 visa, the work on it does not
count.
</p>
</GuideSection>

<GuideSection title="Worked example: full-time and part-time work added together">
<p>
This is the Home Affairs example for six months, shortened. On her second visa, Karla picks and packs fruit
five days a week from 1 January to 30 April, which is 120 calendar days. Later she does casual vegetable work
five days a fortnight from 1 August to 30 November, 122 calendar days at about half of full-time hours, which
counts as 61 days. 120 plus 61 is 181, so she has passed the 179 days.
</p>
<p>
The same rule works against you: part-time work over a long period only counts in proportion. Two days a week for
six months is nowhere near 179 days of full-time work, so it would need a much longer period to reach the total.
</p>
</GuideSection>

<GuideSection title="A realistic timeline for a 12-month visa">
<p>
Because weather and illness days are not excused, the safest plan is to start early. If you want to finish the
179 days with a margin, aim to be working in an eligible postcode within the first two or three months of the
second visa, and check each month with the <In href="/88-days-calculator">calculator</In> how many days you
have and how many are left. Keep payslips and your contract as proof: see
<In href="/guides/specified-work-evidence"> what evidence to keep</In>.
</p>
<p className="text-xs text-slate-400">
The timeline is our planning suggestion, not a Home Affairs rule.
</p>
</GuideSection>

<GuideSection title="Plan the six months early">
        <p>
          Six months is a big part of a one-year visa. Log each job in the{' '}
          <In href="/88-days-calculator">calculator</In> (choose &ldquo;Third visa — 179 days&rdquo;) and add your visa
          expiry date: it warns you if, at your current pace, you would finish after the visa ends.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
