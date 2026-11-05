import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/417-vs-462-specified-work';
const TITLE = 'Specified Work: 417 vs 462 Visa Differences';
const DESC =
  'How specified work differs between the 417 and 462 visas: which industries count, mining, fishing and tree work, the UK exemption and evidence.';

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
      title="417 vs 462: specified work differences"
      headline={TITLE}
      description={DESC}
      badge="🇦🇺 Guide · 417 vs 462"
      subtitle="Same days, same postcode tables — but different industries count in different places. Here’s what changes between the two visas."
      updated="November 2026"
quick="Mining counts as specified work only on a 417. Fishing and tree work count anywhere regional on a 417 but only in Northern Australia on a 462, and farm and construction work also count in Northern Australia on a 462. The day counts and postcode tables are the same for both visas."
keyFacts={[
'Days: 88 for a second visa and 179 for a third, counted as calendar days on both visas.',
'Mining: counts in regional Australia on a 417; does not count on a 462.',
'The UK exemption from specified work applies to the 417 only.',
]}
source={{ href: OFFICIAL.specified417, label: 'Home Affairs, specified work (417)' }}
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
        {
          q: 'Does admin or cleaning work in a specified industry count?',
          a: 'It can. Home Affairs is temporarily accepting work that supports the ongoing operations of a specified industry, such as administrative and cleaning support services, in an eligible postcode. Because the rule is described as temporary, check the current wording on the Home Affairs page before you rely on it.',
        },
      ]}
      related={[
        { href: '/guides/specified-work-postcodes', label: 'Postcode checker' },
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/how-88-days-are-counted', label: 'How the days are counted' },
        { href: '/guides/uk-working-holiday-specified-work-exemption', label: 'UK exemption' },
        { href: '/guides/specified-work-evidence', label: 'What evidence to keep' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: the 179 days' },
        { href: '/guides/working-holiday-6-month-employer-limit', label: 'The 6-month employer limit' },
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
          <Ext href={OFFICIAL.specified462}>specified subclass 462 work</Ext>, checked 5 November 2026. The six postcode
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
      <GuideSection title="Work that supports a specified industry">
        <p>
          Home Affairs is temporarily applying flexibility to the specified work requirement and giving
          greater weight to the industry. On both pages it says that work which supports the ongoing
          operations of a specified industry, such as administrative and cleaning support services,
          in an eligible postcode may be accepted. This applies to the 417 and the 462. Because it is
          described as temporary, read the current wording on the Home Affairs page before relying on
          it, and keep payslips that show the employer, the industry and the postcode.
        </p>
      </GuideSection>

      <GuideSection title="How the days are counted on both visas">
        <p>
          For a second visa you need 3 months of specified work, which Home Affairs defines as the
          3 shortest calendar months of the year: at least 88 calendar days, including weekends or
          equivalent rest days. For a third visa you need 6 months on or after 1 July 2019, which is
          at least 179 calendar days. Within that period you must complete the same number of normal
          work days or shifts as a full-time employee in that role and industry would normally work.
          The counting rules are the same for both visas.
        </p>
      </GuideSection>

      <GuideSection title="Three examples of the difference">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>Mining on a 462.</B> Someone on a 462 works 90 days at a regional mine. Those days do
            not count towards a second visa, because mining is not specified work on a 462. The same
            work would count on a 417 if the postcode is eligible.
          </li>
          <li>
            <B>Fishing on a 462.</B> A 462 holder crews a fishing boat from a regional port outside
            Northern Australia. Fishing and pearling only count on a 462 in Northern Australia, so
            those days do not count. On a 417, fishing in an eligible regional postcode counts.
          </li>
          <li>
            <B>Farm work on either visa.</B> Fruit picking or other plant and animal cultivation in
            an eligible regional postcode counts on both visas, and on a 462 it also counts in
            Northern Australia.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          These are illustrations of the rules, not advice on your case. The postcode still has to be
          on the right table.
        </p>
      </GuideSection>

      <GuideSection title="Check your own situation in four steps">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Check the subclass on your visa grant notice: 417 or 462.</li>
          <li>Find your industry in the table above and note where it counts for your visa.</li>
          <li>
            Test the postcode of each workplace with the{' '}
            <a href="/guides/specified-work-postcodes" className="text-blue-500 hover:underline">postcode checker</a>.
          </li>
          <li>
            Add up your days with the{' '}
            <a href="/88-days-calculator" className="text-blue-500 hover:underline">88 days calculator</a>{' '}
            and keep the evidence listed in our{' '}
            <a href="/guides/specified-work-evidence" className="text-blue-500 hover:underline">evidence guide</a>.
          </li>
        </ol>
      </GuideSection>

    </GuideArticle>
  );
}
