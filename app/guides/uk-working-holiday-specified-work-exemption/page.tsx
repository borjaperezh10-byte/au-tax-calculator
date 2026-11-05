import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';
import { OFFICIAL } from '@/lib/specified-work';

const PATH = '/guides/uk-working-holiday-specified-work-exemption';
const TITLE = 'Do UK Citizens Still Need to Do 88 Days?';
const DESC =
  'UK passport holders applying for a second or third 417 visa from 1 July 2024 do not need specified work. Who it covers, who it does not, and what applies.';

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
      updated="November 2026"
quick="No. UK passport holders who apply for a second or third Working Holiday visa (subclass 417) on or after 1 July 2024 do not need to complete specified work: no 88 days for the second visa and no 179 days for the third. It only applies to applications made with a UK passport and does not cover the 462 visa."
keyFacts={[
'Applies to the subclass 417 only, for applications from 1 July 2024.',
'Applications on a non-UK passport follow the normal specified work rules.',
'Tax does not change: working holiday makers pay 15% on the first $45,000.',
'Age limit for UK applicants is 18 to 35 inclusive, and the lifetime maximum is still three 417 visas.',
'The six-month limit per employer and the four-month study limit still apply.',
]}
source={{ href: OFFICIAL.specified417, label: 'Home Affairs, specified work (417)' }}
      faqs={[
        {
          q: 'Do British backpackers need to do farm work for a second year visa?',
          a: 'No. UK passport holders who apply for a second or third Working Holiday visa (subclass 417) on or after 1 July 2024 do not need to complete specified work.',
        },
        {
          q: 'Does the UK exemption apply if I have dual nationality?',
          a: 'The exemption is tied to the passport you use to lodge the application, not to your nationality. If you hold a UK passport as well as another one, you can lodge a second or third 417 application with the UK passport on or after 1 July 2024 and skip specified work, even if your earlier visa was granted on the other passport. If you lodge with the other passport, the normal specified work rules apply.',
        },
        {
q: 'Does a BN(O) passport count as a UK passport?',
a: 'Yes. Home Affairs says a UK or British passport includes a British National (Overseas) passport, as long as it was issued by the United Kingdom. A Hong Kong passport holder who also holds a BN(O) passport can use the BN(O) passport as the travel document for a second or third application.',
},
{
q: 'What is the age limit for UK applicants?',
a: 'From 1 July 2023 UK passport holders can apply for a 417 visa from 18 to 35 years inclusive. You can lodge an application until midnight, Australian Eastern Standard Time, on the day before your 36th birthday.',
},
{
q: 'Do the six-month employer limit and the study limit still apply?',
a: 'Yes. Home Affairs says all other WHM program settings continue to apply to UK passport holders, including the six-month work limitation per employer and the four-month study limitation.',
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
        { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
        { href: '/guides/specified-work-postcodes', label: 'Which postcodes count' },
        { href: '/guides/specified-work-evidence', label: 'What evidence to keep' },
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
          <Ext href={OFFICIAL.conditions}>specified work conditions</Ext> page, checked 5 November 2026, together with the <Ext href="https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/arrangements-uk-passport-holders">arrangements for UK passport holders</Ext>.
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

      <GuideSection title="Who counts as a UK passport holder">
<p>
The rule follows the <B>passport you use to lodge the application</B>. Home Affairs says a UK or British
passport includes a <B>British National (Overseas) passport</B>, provided it was issued by the United Kingdom.
That has two practical consequences for dual nationals.
</p>
<ul className="list-disc pl-5 space-y-2">
<li>
You can have been granted your first visa on another passport, for example an Irish one, and still skip
specified work for the second and third visa by lodging those applications with your UK passport on or after
1 July 2024.
</li>
<li>
A Hong Kong passport holder who also holds a BN(O) passport can use the BN(O) passport as the travel document
for the second and third application.
</li>
</ul>
<p>
If you lodge with the other passport instead, the normal rules come back: 88 calendar days for the second visa
and 179 for the third.
</p>
</GuideSection>

<GuideSection title="Age limit and number of visas">
<p>
Since 1 July 2023 UK passport holders can apply for a 417 visa from <B>18 to 35 years inclusive</B>. You can
lodge until midnight, Australian Eastern Standard Time, on the day before your 36th birthday, so the
age limit is the date that really decides how long you have to apply.
</p>
<p>
The lifetime cap does not change: <B>three 417 visas in total</B>, whichever eligible passport you used, not
counting a nil-charge visa that replaced a COVID-19 affected visa. You do not have to stay three years in a row.
You can apply for the first, second and third visa at any time while you are still within the age limit, and
you can lodge the second and third applications in or outside Australia.
</p>
</GuideSection>

<GuideSection title="Examples based on the Home Affairs cases">
<p>These are short versions of the examples Home Affairs publishes, so you can see where you fit.</p>
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Irish first visa, UK passport for the second.</B> A dual Irish and UK national entered Australia on her
first visa with an Irish passport. If she lodges the second application with her UK passport on or after
1 July 2024, she needs no specified work. If she used the Irish passport for the third application, she would
need 179 days of specified work first.
</li>
<li>
<B>First visa ended before 1 July 2024.</B> Someone whose first visa ceased in March 2024 and who wants to skip
specified work needs to lodge the second application on or after 1 July 2024.
</li>
<li>
<B>Age 31 when the limit rose.</B> A UK passport holder who turned 31 in April 2023 can still apply for a
second and third visa until she turns 36, with no specified work if she lodges on or after 1 July 2024.
</li>
<li>
<B>COVID-19 affected visa.</B> If you held a first or second visa in March 2020 and were later granted a
replacement visa with no application charge, that earlier visa no longer counts towards your three, so you
may be able to access up to two more.
</li>
</ul>
</GuideSection>

<GuideSection title="What the exemption does not change">
<ul className="list-disc pl-5 space-y-2">
<li>
<B>Six months per employer.</B> The limit on working for one employer for more than six months still applies.
</li>
<li>
<B>Four months of study.</B> The study limit still applies.
</li>
<li>
<B>Tax.</B> You are still taxed as a working holiday maker at 15% on income up to $45,000, with no tax-free
threshold.
</li>
</ul>
</GuideSection>

<GuideSection title="Check your own situation in four steps">
<ol className="list-decimal pl-5 space-y-2">
<li>Confirm you hold a passport issued by the United Kingdom, including a BN(O) passport, and that you will use it to lodge.</li>
<li>Check your age: the application must be lodged before your 36th birthday.</li>
<li>Count the 417 visas you have held, leaving out any nil-charge replacement for a COVID-19 affected visa. Three is the lifetime maximum.</li>
<li>
Lodge on or after 1 July 2024. If you would rather use another passport, use the{' '}
<In href="/88-days-calculator">88 days calculator</In> to see how many specified days you would need.
</li>
</ol>
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
