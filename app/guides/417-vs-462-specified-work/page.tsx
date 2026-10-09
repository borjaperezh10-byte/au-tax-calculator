import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/417-vs-462-specified-work';
const TITLE = 'Specified Work: 417 vs 462 Visa Differences';
const DESC =
  'How specified work differs between the Working Holiday (417) and Work and Holiday (462) visas: which industries count where, mining, fishing and tree work, the UK exemption and evidence.';

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
      title="417 vs 462: specified work differences"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · 417 vs 462"
      subtitle="Same days, same postcode tables — but different industries count in different places. Here’s what changes between the two visas."
      updated="October 2026"
      faqs={[
        {
          q: 'Does mining count as specified work on a 462 visa?',
          a: 'No. Mining counts in regional Australia on a 417, but it is not specified work on a 462.',
        },
        {
          q: 'Can I do farm work anywhere regional on a 462?',
          a: 'Yes. On a 462, plant and animal cultivation and construction count in Northern Australia and in regional Australia.',
        },
        {
          q: 'Is the number of days different for 417 and 462 visas?',
          a: 'No. Both need 88 days for a second visa and 179 days for a third, counted the same way.',
        },
      ]}
      related={[
        { href: '/guides/specified-work-postcodes', label: 'Postcode checker' },
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the days are counted' },
        { href: '/guides/uk-working-holiday-specified-work-exemption', label: 'UK exemption' },
      ]}
    >
      <GuideSection title="Side by side">
        <SimpleTable
          head={['Industry', 'Subclass 417', 'Subclass 462']}
          rows={[
            ['Plant and animal cultivation', 'Regional Australia', 'Northern or regional Australia'],
            ['Construction', 'Regional Australia', 'Northern or regional Australia'],
            ['Fishing and pearling', 'Regional Australia', 'Northern Australia only'],
            ['Tree farming and felling', 'Regional Australia', 'Northern Australia only'],
            ['Mining', 'Regional Australia', 'Does not count'],
            ['Tourism and hospitality', 'Northern, Remote or Very Remote (+4406, 4416, 4498, 7215)', 'Same as 417'],
            ['Bushfire / disaster recovery', 'Declared areas, paid or volunteer', 'Same as 417'],
            ['Critical COVID-19 healthcare work', 'Anywhere in Australia', 'Same as 417'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Sources: <Ext href={OFFICIAL.specified417}>specified work (417)</Ext> and{' '}
          <Ext href={OFFICIAL.specified462}>specified subclass 462 work</Ext>, checked 7 October 2026. The six postcode
          tables are identical on both pages.
        </p>
      </GuideSection>

      <GuideSection title="What is the same">
        <ul className="list-disc pl-5 space-y-2">
          <li><B>The days:</B> 88 for a second visa, 179 for a third, counted as calendar days.</li>
          <li><B>The postcode tables:</B> the same six tables appear on both pages.</li>
          <li><B>Pay:</B> work must be paid under Australian law and awards, except volunteer recovery work.</li>
          <li><B>Evidence:</B> broadly the same list; the 462 pages group payslips and bank statements as &ldquo;evidence of payment&rdquo;.</li>
        </ul>
      </GuideSection>

      <GuideSection title="What is different">
        <ul className="list-disc pl-5 space-y-2">
          <li><B>Mining</B> only counts on a 417.</li>
          <li><B>Fishing and tree work</B> count anywhere regional on a 417, but only in Northern Australia on a 462.</li>
          <li><B>Farm and construction</B> work count in Northern Australia too on a 462.</li>
          <li>
            <B>The UK exemption</B> from specified work only applies to the 417 — see{' '}
            <In href="/guides/uk-working-holiday-specified-work-exemption">the UK exemption</In>.
          </li>
        </ul>
        <p>
          Check a specific job in the <In href="/guides/specified-work-postcodes">postcode checker</In>: choose your
          visa and it shows which industries count at that postcode.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
