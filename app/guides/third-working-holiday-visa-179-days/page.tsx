import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/third-working-holiday-visa-179-days';
const TITLE = 'Third Working Holiday Visa: The 179 Days';
const DESC =
  'What you need for a third Working Holiday (417) or Work and Holiday (462) visa: 179 days of specified work during your second visa, the 1 July 2019 rule, bridging visas and the UK exemption.';

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
      updated="October 2026"
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
          <Ext href={OFFICIAL.specified417}>specified work</Ext> pages, checked 7 October 2026.
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
