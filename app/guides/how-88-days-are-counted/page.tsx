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
      updated="October 2026"
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
          <Ext href={OFFICIAL.specified462}>subclass 462</Ext> specified work pages (checked 7 October 2026).
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
