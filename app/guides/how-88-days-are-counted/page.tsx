import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/how-88-days-are-counted';
const TITLE = 'How the 88 Days Are Counted: Examples';
const DESC =
  'How Home Affairs counts your 88 or 179 days of specified work: calendar days, part-time, several employers, unpaid weather days and rosters, with examples.';

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
      title="How the 88 days are counted"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · Visas 417 & 462"
      subtitle="Weekends, part-time work, overtime, second jobs, rain days and rosters — how Home Affairs turns your work into days, with worked examples."
      updated="November 2026"
quick="The 88 days (179 for a third visa) are calendar days, not shifts: weekends inside a period of full-time work count, part-time work counts as a proportion of full-time, and each calendar day counts once even with two jobs. Days you are stood down without pay, such as rain days, do not count."
keyFacts={[
'Full-time work from 1 January to 29 March counts as 88 days.',
'Part-time example: 5 days a fortnight for 122 calendar days counts as 61 days.',
'The requirement cannot be met in under three calendar months (six for the 179 days).',
'Paid public holidays and paid leave count; unpaid stand-down days do not.',
]}
source={{ href: OFFICIAL.specified417, label: 'Home Affairs, specified work (417)' }}
      faqs={[
        {
          q: 'Do weekends count towards the 88 days?',
          a: 'Yes, if you work full-time. The 88 days are calendar days, so the weekends and normal rest days inside a period of full-time work count. Part-time work is counted as a proportion of full-time instead.',
        },
        {
          q: 'Can I finish my 88 days in less than three months?',
          a: 'No. You can never count more than one day per calendar day, and the requirement cannot be met in a total period shorter than three calendar months (six for the 179 days).',
        },
        {
          q: 'Do rain days count?',
          a: 'Days you are stood down without pay, for example because of bad weather, do not count. Paid public holidays and paid leave do.',
        },
        {
q: 'Does a 10-hour day count as two days?',
a: 'No. Home Affairs says work on one calendar day never counts as more than one day of specified work, even if it is done in separate shifts or for several employers and is longer than the standard day in the industry.',
},
{
q: 'How do I estimate part-time work?',
a: 'Home Affairs gives examples rather than a formula. A practical estimate is days worked per week divided by the days a full-time employee in that role normally works, multiplied by the calendar days of the period. Five days a fortnight in a ten-day fortnight is half of full-time, so 122 calendar days count as 61. Treat the result as an estimate and keep your rosters.',
},
{
q: 'Do I need to agree my hours with the employer?',
a: 'Home Affairs says you should agree the number of working hours with your employer before you start. One day of work is the normal number of hours per day or shift for that industry and role. If you work under an award, check its rostering, overtime and penalty rate conditions.',
},
{
          q: 'Does working two jobs on the same day count as two days?',
          a: 'No. Even with several employers, each calendar day counts as one day at most.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/specified-work-postcodes', label: 'Which postcodes count' },
        { href: '/guides/specified-work-evidence', label: 'Evidence to keep' },
        { href: '/guides/417-vs-462-specified-work', label: '417 vs 462' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: the 179 days' },
        { href: '/guides/working-holiday-6-month-employer-limit', label: 'The 6-month employer limit' },
      ]}
    >
      <section className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
        <p>
          To get a second Working Holiday visa you need <B>88 days</B> of specified work; for a third, <B>179 days</B>.
          Those numbers are not &ldquo;88 shifts&rdquo;. They are <B>calendar days</B>, and the way Home Affairs
          counts them depends on whether you work full-time or part-time. Get this wrong and you can end up a few
          weeks short when you apply.
        </p>
        <Callout>
          Want the number for your own jobs? Log them in the <In href="/88-days-calculator">88 days calculator</In>{' '}
          — it applies the rules below and checks your postcode.
        </Callout>
      </section>

      <GuideSection title="The basic rule: calendar days, not shifts">
        <p>
          Home Affairs defines three months as the three shortest calendar months of the year — 88 days — and six
          months as the six shortest — 179 days. The days include weekends or equivalent rest days. So if you work
          full-time for 88 calendar days in a row, you&rsquo;re done, even though you only worked about 63 of them.
        </p>
        <p>
          Two limits stop you rushing it. You can never count more than <B>one day per calendar day</B>, and you
          can&rsquo;t complete the requirement in a total period shorter than three calendar months (six for the
          179 days).
        </p>
      </GuideSection>

      <GuideSection title="What “full-time” means">
        <p>
          Full-time is the normal number of hours for <B>that job in that industry</B>. It is not a fixed 7.5 or 8
          hours. The official examples accept working days of 5 to 9 hours and 12-hour shifts, as long as that is the
          standard for the role. Overtime does not create extra days.
        </p>
      </GuideSection>

      <GuideSection title="Part-time work counts as a proportion">
        <p>
          If you work part-time, Home Affairs does not count only the days you worked. It counts the proportion of
          full-time work over the calendar period. In its own example, working <B>5 days a fortnight for 122
          calendar days</B> is half of full-time, so it counts as <B>61 days</B>.
        </p>
        <p>
          Home Affairs gives examples rather than a formula, so treat part-time totals as an estimate and keep a
          clear record of your rosters.
        </p>
      </GuideSection>

      <GuideSection title="Worked examples">
        <SimpleTable
          head={['Situation', 'How it counts', 'Days']}
          rows={[
            ['Full-time on a farm, 1 January to 29 March', 'Every calendar day in the period', '88'],
            ['Part-time, 5 days a fortnight for 122 calendar days', 'Half of full-time over the period', '61'],
            ['Two jobs on the same 10 days', 'One day per calendar day, maximum', '10'],
            ['Full-time for 30 days, 5 of them stood down unpaid for rain', 'Unpaid days are left out', '25'],
            ['Roster of 2 weeks on, 2 weeks off, paid and usual in the industry', 'All 28 days of the cycle count', '28 per cycle'],
            ['Volunteer flood recovery, 20 days worked in a declared area', 'One day for each day worked', '20'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Based on the examples on the official{' '}
          <Ext href={OFFICIAL.specified417}>subclass 417</Ext> and{' '}
          <Ext href={OFFICIAL.specified462}>subclass 462</Ext> specified work pages (checked 5 November 2026).
        </p>
      </GuideSection>

      <GuideSection title="Rain days, leave and public holidays">
        <p>
          Paid public holidays and paid leave count. Days you are <B>stood down without pay</B> — the classic case is
          a picking job that stops for bad weather — do not.
        </p>
      </GuideSection>

      <GuideSection title="Piece rates">
        <p>
          Piecework counts, full-time or part-time, even when your hours change with the weather or how fast the
          crop ripens. The official example counts every day worked with 5 to 8 hours. Keep your piecework
          agreement: Home Affairs asks for one that shows the piece rate and how it is measured.
        </p>
      </GuideSection>

      <GuideSection title="The cases Home Affairs publishes">
<p>These are short versions of the official examples, so you can compare them with your own situation.</p>
<SimpleTable
head={['Case', 'What happened', 'Result']}
rows={[
['Full-time builder', '5 days a week, 1 December to 26 February (88 calendar days), paid correctly', 'Meets the 3 months'],
['Two days a week at a vineyard', '1 February to 30 April, paid correctly', 'Does not meet it: far fewer days than a full-time worker'],
['Fruit picker, then casual vegetable work', '120 calendar days full-time plus 122 days at half of full-time hours (61)', 'Meets the 6 months'],
['Dairy farm', '5 days a week, 6 hours a day split into two shifts, for 6 months', 'Every day counts'],
['Cattle station', '5 or 6 days a week, 5 to 9 hours a day including meal breaks, 3 months', 'Meets the 3 months'],
['Hospital nurse', 'Three 12-hour shifts a week for 3 months, normal for the industry', 'Meets the 3 months'],
['Sugar cane harvest', '88-day contract, 5 scheduled days lost to weather and unpaid, then 5 more working days with another employer', 'Meets the 3 months'],
]}
/>
<p>
The sugar cane case is the one to remember: the unpaid weather days were not counted, and the person made them
up with extra working days instead of getting an exception.
</p>
</GuideSection>

<GuideSection title="A practical way to estimate part-time work">
<p>
Home Affairs does not publish a formula for part-time work, so this is our estimate method, based on its
examples. Divide the days you work in a week by the days a full-time employee in that role normally works, then
multiply by the calendar days of the period.
</p>
<p>
Example: you work 3 days a week in a job where full-time is 5 days. That is 3 divided by 5, or 60% of
full-time. To reach 88 days you need roughly 88 divided by 0.6, which is about 147 calendar days, or 21 weeks.
The same 21 weeks at full-time would have counted as 147 days, so part-time does not make the total smaller, it
makes the period you need longer.
</p>
<p className="text-xs text-slate-400">
Estimate only. The decision is made by Home Affairs on the evidence you provide.
</p>
</GuideSection>

<GuideSection title="Mistakes that leave people short">
<ul className="list-disc pl-5 space-y-2">
<li>Counting the days they worked instead of the calendar days of a full-time period.</li>
<li>Counting unpaid bad weather days or unpaid public holidays.</li>
<li>Counting a long day as two days.</li>
<li>Counting work done on the wrong visa. For the third visa, only work from 1 July 2019 while you held the second visa counts, apart from the special bridging and COVID-19 cases.</li>
<li>Leaving the work until late in the visa. Home Affairs says no exception is made if you run short because of weather or any other reason.</li>
</ul>
</GuideSection>

<GuideSection title="Splitting it up across jobs">
        <p>
          The days don&rsquo;t have to be continuous or with one employer. You can mix full-time and part-time periods
          across the life of your visa. What matters is that each job is in an eligible industry and{' '}
          <In href="/guides/specified-work-postcodes">eligible postcode</In> for your visa, that it is paid
          properly, and that you can <In href="/guides/specified-work-evidence">prove it</In>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
