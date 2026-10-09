import type { Metadata } from 'next';
import SpecifiedWorkTracker from '@/components/SpecifiedWorkTracker';

export const metadata: Metadata = {
  title: '88 Days Calculator: 417 and 462 Visas',
  description:
    'Free tracker for the 88 or 179 days of specified work behind a second or third Working Holiday visa. Checks overlaps and unpaid days.',
  alternates: { canonical: '/88-days-calculator' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/88-days-calculator',
    title: '88 Days Calculator — Specified Work Tracker (417 & 462)',
    description:
      'Log your farm, construction, hospitality or recovery work and see how many of your 88 or 179 specified work days you have done.',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const OFFICIAL_417 =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work';
const OFFICIAL_462 =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work';
const OFFICIAL_THIRD_417 =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/third-working-holiday-417';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do weekends count towards my 88 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you work full-time, yes: the 88 days are calendar days, so weekends and normal rest days inside your period of full-time work count. If you work part-time, Home Affairs counts the proportion of full-time work over the calendar period instead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do my 88 days faster by working more hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Overtime does not create extra days, you can never count more than one day per calendar day, and the requirement cannot be completed in less than three calendar months (six for the 179 days).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does part-time work count towards specified work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as a proportion of full-time. In the official example, working 5 days a fortnight for 122 calendar days counts as half, which is 61 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do UK citizens still need to do 88 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. UK passport holders who apply for a second or third Working Holiday visa (subclass 417) from 1 July 2024 do not need to complete specified work. This exemption does not apply to the subclass 462.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does volunteer work count towards the 88 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Specified work must normally be paid under Australian law and awards. The exception is volunteer recovery work in declared bushfire or natural disaster areas, where each day actually worked counts as one day.',
      },
    },
  ],
};

export default function EightyEightDaysPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Visas 417 &amp; 462
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            88 Days Calculator: Specified Work Tracker
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Log your jobs and see how many of your 88 days (second visa) or 179 days (third visa) of
            specified work you have done — counted the way the Department of Home Affairs describes it.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            Rules last checked against Home Affairs: 7 October 2026. By{' '}
            <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a>.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        <SpecifiedWorkTracker />

        <p className="text-sm text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
          <strong className="text-amber-800 dark:text-amber-200">This is an estimate, not a decision.</strong>{' '}
          Only the Department of Home Affairs decides whether your work counts. This tracker is general
          information, not migration advice. Always check your situation against the official{' '}
          <a href={OFFICIAL_417} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">subclass 417</a>{' '}
          or{' '}
          <a href={OFFICIAL_462} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">subclass 462</a>{' '}
          specified work pages before you apply.
        </p>

        {/* How days are counted */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How the 88 days are counted</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] list-disc pl-5">
            <li>
              <strong className="text-slate-900 dark:text-white">They are calendar days.</strong> Three months
              means 88 days and six months means 179, including weekends or equivalent rest days.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Full-time counts every calendar day</strong> of
              your period of work. &ldquo;Full-time&rdquo; is the normal hours for that job in that industry —
              not a fixed number. Home Affairs&rsquo; own examples accept 5 to 9 hour days and 12-hour shifts.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Part-time counts as a proportion.</strong> In the
              official example, 5 days a fortnight for 122 calendar days counts as half: 61 days.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">One day per calendar day, maximum.</strong>{' '}
              Overtime and second jobs on the same day never create extra days.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Unpaid days don&rsquo;t count</strong> — for
              example, days you were stood down without pay because of bad weather. Paid public holidays and paid
              leave do count.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">You can split it up.</strong> The days don&rsquo;t
              have to be continuous or with one employer, but you can&rsquo;t finish in less than three calendar
              months (six for 179 days).
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Piece rates count</strong>, full-time or
              part-time, even when hours vary with weather or crop ripening. Keep your piecework agreement.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">The work must be paid</strong> under Australian
              law and awards. The exception is volunteer recovery work in declared bushfire or natural disaster
              areas, where each day you actually worked counts as one day.
            </li>
          </ul>
        </section>

        {/* What work counts where */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">What work counts, and where</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            The postcode where you physically worked must be on the eligible list for your visa and industry.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Industry</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Subclass 417</th>
                  <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Subclass 462</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                {[
                  ['Plant and animal cultivation; construction', 'Regional Australia', 'Northern or regional Australia'],
                  ['Fishing and pearling; tree farming and felling', 'Regional Australia', 'Northern Australia only'],
                  ['Mining', 'Regional Australia', 'Does not count'],
                  ['Tourism and hospitality', 'Northern, Remote or Very Remote Australia, plus postcodes 4406, 4416, 4498 and 7215', 'Same as 417'],
                  ['Bushfire recovery (work after 31 July 2019)', 'Declared bushfire areas', 'Same as 417'],
                  ['Natural disaster recovery (work after 31 December 2021)', 'Declared disaster areas', 'Same as 417'],
                  ['Critical COVID-19 work in healthcare (after 31 January 2020)', 'Anywhere in Australia', 'Same as 417'],
                ].map(([industry, a, b]) => (
                  <tr key={industry} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-3 py-2 font-medium">{industry}</td>
                    <td className="px-3 py-2">{a}</td>
                    <td className="px-3 py-2">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Source: Department of Home Affairs —{' '}
            <a href={OFFICIAL_417} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">specified work (subclass 417)</a>{' '}
            and{' '}
            <a href={OFFICIAL_462} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">specified subclass 462 work</a>.
            The calculator above checks your postcode against those tables (last updated by Home Affairs on 24
            September 2026, checked by us on 7 October 2026). They change from time to time, so confirm on the
            official page before you apply.
          </p>
        </section>

        {/* Third visa and UK */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Third visa, bridging visas and UK passports</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] list-disc pl-5">
            <li>For a third visa you need 179 days, and the work must be from 1 July 2019 onwards.</li>
            <li>
              Work done on a bridging visa only counts if you applied for your second visa while your first one was
              still valid.
            </li>
            <li>
              UK passport holders applying for a second or third subclass 417 visa from 1 July 2024 don&rsquo;t need
              specified work. This doesn&rsquo;t apply to the subclass 462.
            </li>
          </ul>
        </section>

        {/* Evidence */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What evidence to keep</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] mb-3">
            For second and third visas, Home Affairs lists evidence such as payslips, Australian bank statements
            covering the period, piecework agreements (showing the piece rate and how it is measured), group
            certificates, payment summaries, tax returns, employer references and a signed agreement covering
            lawful deductions. On the subclass 462 pages, payslips and bank statements are grouped as
            &ldquo;evidence of payment&rdquo;. Your evidence should cover every period you worked, and the
            Department may contact your employers.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            For volunteer bushfire or flood recovery, keep a signed letter from the coordinator with your passport
            details, tasks, postcodes and number of days. See the{' '}
            <a href={OFFICIAL_THIRD_417} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">third Working Holiday visa page</a>{' '}
            for the current list.
          </p>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Specified work guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['/guides/how-88-days-are-counted', 'How the 88 days are counted', 'Weekends, part-time, rain days and rosters, with examples.'],
              ['/guides/specified-work-postcodes', 'Does my postcode count?', 'Check any postcode by industry and visa.'],
              ['/guides/specified-work-evidence', 'Evidence to keep', 'Payslips, bank statements, references and volunteer letters.'],
              ['/guides/417-vs-462-specified-work', '417 vs 462', 'Which industries count where on each visa.'],
              ['/guides/third-working-holiday-visa-179-days', 'Third visa: 179 days', 'The six-month rule, 1 July 2019 and bridging visas.'],
              ['/guides/uk-working-holiday-specified-work-exemption', 'UK citizens and the 88 days', 'The exemption for UK passport holders from July 2024.'],
              ['/guides/working-holiday-6-month-employer-limit', 'The 6-month rule with one employer', 'When your 6 months end and which sectors are exempt.'],
            ].map(([href, title, blurb]) => (
              <a key={href} href={href} className="block border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:border-blue-400 transition-colors">
                <p className="font-semibold text-slate-900 dark:text-white text-sm">{title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{blurb}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Doing farm work this year?</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Working holiday makers pay 15% tax on the first $45,000. See exactly what you&rsquo;ll take home with
            the{' '}
            <a href="/working-holiday-maker" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Working Holiday Maker tax calculator
            </a>{' '}
            and the{' '}
            <a href="/guides/working-holiday-maker-tax" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              WHM tax guide
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
