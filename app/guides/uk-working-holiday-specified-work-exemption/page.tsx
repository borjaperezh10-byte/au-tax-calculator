import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/uk-working-holiday-specified-work-exemption';
const TITLE = 'Do UK Citizens Still Need to Do 88 Days?';
const DESC =
  'UK passport holders applying for a second or third Working Holiday visa (subclass 417) from 1 July 2024 do not need specified work. Who it covers, who it does not, and what still applies.';

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
      title="Do UK citizens still need to do 88 days?"
      headline={TITLE}
      description={DESC}
      badge="🇬🇧 → 🇦🇺 Guide"
      subtitle="Short answer: not if you apply for your second or third 417 visa from 1 July 2024 with a UK passport."
      updated="October 2026"
      faqs={[
        {
          q: 'Do British backpackers need to do farm work for a second year visa?',
          a: 'No. UK passport holders who apply for a second or third Working Holiday visa (subclass 417) on or after 1 July 2024 do not need to complete specified work.',
        },
        {
          q: 'Does the UK exemption apply if I have dual nationality?',
          a: 'The exemption is for applications made with a UK passport. If you apply on another passport, the normal specified work rules apply.',
        },
        {
          q: 'Does the exemption apply to the 462 visa?',
          a: 'No. UK citizens use the subclass 417; the exemption is for that visa only.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days calculator' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: 179 days' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
        { href: '/working-holiday-maker', label: 'WHM tax calculator' },
      ]}
    >
      <GuideSection title="The exemption">
        <p>
          If you apply for a <B>second or third Working Holiday visa (subclass 417)</B> on or after{' '}
          <B>1 July 2024</B>, and you apply using your <B>UK passport</B>, you don&rsquo;t need to complete specified
          work. No 88 days for the second visa and no 179 days for the third.
        </p>
        <p className="text-xs text-slate-400">
          Sources: <Ext href={OFFICIAL.specified417}>specified work (417)</Ext>,{' '}
          <Ext href={OFFICIAL.third417}>third Working Holiday visa</Ext> and the{' '}
          <Ext href={OFFICIAL.conditions}>specified work conditions</Ext> page, checked 7 October 2026.
        </p>
      </GuideSection>

      <GuideSection title="Who it does not cover">
        <ul className="list-disc pl-5 space-y-2">
          <li>Applications made with a passport from any other country, even if you also hold a UK one.</li>
          <li>The Work and Holiday visa (subclass 462).</li>
        </ul>
        <p>
          The other requirements of the second and third visas still apply — the exemption only removes specified
          work. Check the official visa pages for the rest.
        </p>
      </GuideSection>

      <GuideSection title="What still matters for UK working holiday makers">
        <p>
          Tax doesn&rsquo;t change: as a working holiday maker you pay 15% on the first $45,000. See the{' '}
          <In href="/working-holiday-maker">working holiday maker tax calculator</In> and our{' '}
          <In href="/guides/working-holiday-maker-tax">WHM tax guide</In>, including how your super is taxed when you
          leave.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
