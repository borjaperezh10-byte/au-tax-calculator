import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';
import PostcodeChecker from '@/components/PostcodeChecker';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/specified-work-postcodes';
const TITLE = 'Does My Postcode Count for the 88 Days?';
const DESC =
  'Check whether a postcode counts for specified work on a 417 or 462 visa, by industry. Farm, construction, fishing, mining, tourism and hospitality, and bushfire or disaster recovery — based on the Home Affairs tables.';

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
      title="Does my postcode count for the 88 days?"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Checker · Visas 417 & 462"
      subtitle="Your work only counts if the postcode where you physically worked is on the eligible list for your visa and your industry. Check it here."
      updated="October 2026"
      faqs={[
        {
          q: 'Does hospitality work in a regional town count for the 88 days?',
          a: 'Not just because the town is regional. Tourism and hospitality only count in Northern, Remote or Very Remote Australia, plus four extra postcodes (4406, 4416, 4498 and 7215). Farm or construction work in the same town may count.',
        },
        {
          q: 'Is the postcode of my employer’s office what matters?',
          a: 'No. What is checked is the postcode where you physically did the work.',
        },
        {
          q: 'Are the eligible postcodes the same for 417 and 462 visas?',
          a: 'The postcode tables are identical, but which industries count in which area differs. For example, fishing and tree work count anywhere in regional Australia on a 417 but only in Northern Australia on a 462, and mining does not count on a 462.',
        },
        {
          q: 'Does all of South Australia and Tasmania count?',
          a: 'For plant and animal cultivation, construction and the other regional industries, all postcodes in South Australia, Tasmania and the Northern Territory are regional. Tourism and hospitality follow a different, narrower list.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
        { href: '/guides/417-vs-462-specified-work', label: '417 vs 462' },
        { href: '/guides/specified-work-evidence', label: 'Evidence to keep' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: the 179 days' },
        { href: '/guides/working-holiday-6-month-employer-limit', label: 'The 6-month employer limit' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
      ]}
    >
      <PostcodeChecker />

      <GuideSection title="How eligibility works">
        <p>
          Home Affairs publishes six tables of postcodes. Which table applies depends on your <B>industry</B>, and
          for some industries on whether you hold a <B>417 or a 462</B>:
        </p>
        <SimpleTable
          head={['Area (table)', 'Industries that count there', 'Notes']}
          rows={[
            ['Regional Australia (Table 4)', '417: farm, fishing and pearling, tree farming, mining, construction. 462: farm and construction only', 'All of SA, Tasmania and the NT are regional'],
            ['Northern Australia (Table 3)', '417: tourism and hospitality. 462: tourism and hospitality, farm, fishing and pearling, tree farming, construction', 'Parts of Queensland and WA, plus all of the NT'],
            ['Remote and Very Remote (Tables 1–2)', 'Tourism and hospitality, both visas', 'Table 2 adds 4406, 4416, 4498 and 7215'],
            ['Bushfire declared areas (Table 5)', 'Bushfire recovery work after 31 July 2019, paid or volunteer', 'Both visas'],
            ['Natural disaster declared areas (Table 6)', 'Flood, cyclone and other disaster recovery from 31 December 2021, paid or volunteer', 'Both visas'],
            ['Anywhere in Australia', 'Critical COVID-19 work in healthcare after 31 January 2020', 'No postcode list'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Source: <Ext href={OFFICIAL.specified417}>specified work (417)</Ext> and{' '}
          <Ext href={OFFICIAL.specified462}>specified subclass 462 work</Ext>, both last updated by Home Affairs on
          24 September 2026; tables checked against the live pages on 7 October 2026.
        </p>
      </GuideSection>

      <GuideSection title="Some well-known examples">
        <SimpleTable
          head={['Place (postcode)', 'Farm work', 'Tourism and hospitality']}
          rows={[
            ['Cairns (4870)', 'Counts', 'Counts'],
            ['Darwin (0800)', 'Counts', 'Counts'],
            ['Adelaide (5000)', 'Counts', 'Does not count'],
            ['Dubbo (2830)', 'Counts', 'Does not count'],
            ['Mildura (3500)', 'Counts', 'Does not count'],
            ['Melbourne (3000)', 'Does not count', 'Does not count'],
            ['Sydney (2000)', 'Does not count', 'Does not count'],
          ]}
        />
        <p>
          The pattern that catches people out: <B>a bar job in a small regional town usually doesn&rsquo;t count</B>,
          because hospitality needs Northern, Remote or Very Remote Australia, while farm work in the same town often
          does. And on a 462, fishing in Mildura does not count even though farm work there does.
        </p>
      </GuideSection>

      <GuideSection title="Keep the postcode on your evidence">
        <p>
          The case officer checks the postcode where you worked, so make sure your payslips or employer reference
          show the work site address. See <In href="/guides/specified-work-evidence">what evidence to keep</In>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
