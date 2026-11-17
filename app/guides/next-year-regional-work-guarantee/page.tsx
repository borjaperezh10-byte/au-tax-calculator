import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/next-year-regional-work-guarantee';
const TITLE = 'Next Year Regional Work Guarantee: 2nd and 3rd Working Holiday Visa Changes';
const DESC =
  'From 1 March 2027 a second or third working holiday visa needs an invitation (the Next Year Regional Work Guarantee). Key dates, the 28 February 2027 deadline and what is still unknown.';

const MINISTER =
  'https://minister.homeaffairs.gov.au/TonyBurke/Pages/a-fairer-and-more-sustainable-working-holiday-maker-program.aspx';
const HA_NEWS = 'https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news';
const HA_417_2ND =
  'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-working-holiday-417';
const PRESS =
  'https://www.tonyburke.com.au/speechestranscripts/joint-press-conference-working-holiday-makers-tuesday-17-november-2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { images: ['/opengraph-image'], url: PATH, title: TITLE, description: DESC, type: 'article' },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="The Next Year Regional Work Guarantee explained"
      headline={TITLE}
      description={DESC}
      badge="Guide · Working holiday"
      subtitle="The Government announced on 17 November 2026 that second and third working holiday visas will need an invitation from 1 March 2027. Here is what is confirmed, what the 28 February 2027 deadline means, and what has not been published yet."
      updated="November 2026"
      quick="From 1 March 2027, people applying for a second or third Working Holiday Maker visa (except UK citizens) will need to be invited to apply. The invitation is called the Next Year Regional Work Guarantee. Registration opens on 1 December 2026. If you complete your specified work and lodge a valid visa application by 28 February 2027, you can apply under the current process without registering. The second visa work requirement rises from three to four months from 1 March 2027."
      keyFacts={[
        'Registration of interest opens 1 December 2026; the first monthly invitation round is expected in mid-January 2027.',
        'Until 28 February 2027 you can still apply directly, if your specified work is complete and you lodge a valid application by that date.',
        'From 1 March 2027 second and third visa applicants need an invitation, except UK citizens.',
        'Places in 2026-27: 45,000 for second visas and 25,000 for third visas, according to the Minister.',
        'Second visa specified work goes from three to four months from 1 March 2027; work done before then counts. The exact number of days has not been published.',
      ]}
      source={{ href: HA_NEWS, label: 'Home Affairs, Working Holiday Maker program latest news' }}
      faqs={[
        {
          q: 'What is the Next Year Regional Work Guarantee?',
          a: 'It is the invitation you will need, from 1 March 2027, to apply for a second or third Working Holiday Maker visa. You register your interest and, if invited, you can apply. UK citizens are excepted.',
        },
        {
          q: 'When can I register?',
          a: 'Home Affairs says the registration and invitation process opens on 1 December 2026 and that registration details will be published on its Working Holiday Maker news page before then. The first invitation round is expected in mid-January 2027.',
        },
        {
          q: 'Can I still apply without an invitation?',
          a: 'Yes, until 28 February 2027. Home Affairs says you can apply directly online without registering if you complete your specified work and lodge a valid visa application by 28 February 2027, and meet all other eligibility requirements.',
        },
        {
          q: 'Is the 88 days requirement changing to 120 days?',
          a: 'The Minister’s media release says the second visa requirement increases from three months to four months from 1 March 2027, and that work done before then counts. The number 120 days was mentioned at the press conference, but the written release uses months and Home Affairs had not published a day count when we checked on 17 November 2026.',
        },
        {
          q: 'Do I need to finish my regional work before I register?',
          a: 'No. Home Affairs says you can register before completing your specified work. You still need to complete it, and meet the other requirements, to be granted the visa.',
        },
        {
          q: 'Does this change how working holiday makers are taxed?',
          a: 'No. The announcement is about visas. Working holiday makers are still taxed at 15% on the first $45,000 if their employer is registered.',
        },
      ]}
      related={[
        { href: '/88-days-calculator', label: '88 days tracker' },
        { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
        { href: '/guides/third-working-holiday-visa-179-days', label: 'Third visa: the 179 days' },
        { href: '/guides/specified-work-evidence', label: 'Evidence for your 88 days' },
        { href: '/guides/uk-working-holiday-specified-work-exemption', label: 'UK citizens and specified work' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
      ]}
      disclaimer={
        <p>
          This guide is general information based on the Minister for Home Affairs&rsquo; media release of 17 November
          2026 and the Home Affairs news page updated the same day. It is not migration, tax or legal advice. Many details
          have not been published and the rules may change. Check{' '}
          <Ext href={HA_NEWS}>Home Affairs</Ext> or ask a registered migration agent before you make decisions. See our{' '}
          <a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
          <a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
        </p>
      }
    >
      <GuideSection title="What was announced">
        <p>
          On 17 November 2026 the Minister for Home Affairs announced a new process for second and third Working Holiday
          Maker visas. From <B>1 March 2027</B>, people seeking a second or third visa will need to hold a{' '}
          <B>Next Year Regional Work Guarantee</B>. In practice that means registering your interest and then being
          invited to apply. UK citizens are excepted.
        </p>
        <p>
          The Department of Home Affairs published the same process on its{' '}
          <Ext href={HA_NEWS}>Working Holiday Maker news page</Ext> on 17 November 2026: from 1 March 2027 applicants
          &ldquo;will need to be invited to apply&rdquo;, and the invitation provides the guarantee, provided they meet
          all eligibility requirements, including completing their specified work.
        </p>
        <Callout>
          This replaces the ballot idea the Minister floated in September 2026. The written announcements describe
          registration and invitations; they do not say how invitations will be chosen.
        </Callout>
      </GuideSection>

      <GuideSection title="Key dates">
        <SimpleTable
          head={['Date', 'What happens']}
          rows={[
            ['1 December 2026', 'Registration and invitation process opens'],
            ['Mid-January 2027 (expected)', 'First invitation round, then monthly rounds'],
            ['28 February 2027', 'Last day to apply directly: specified work completed and a valid application lodged'],
            ['1 March 2027', 'Second and third visa applicants need an invitation (except UK citizens); second visa work rises from three to four months'],
            ['30 June 2027', 'Registrations remain valid until this date'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Sources: <Ext href={MINISTER}>Minister for Home Affairs media release</Ext> and{' '}
          <Ext href={HA_NEWS}>Home Affairs news page</Ext>, both 17 November 2026. An invitation is valid for 12 months,
          according to the media release.
        </p>
      </GuideSection>

      <GuideSection title="The 28 February 2027 deadline: both steps count">
        <p>
          The transition rule has two parts. Home Affairs says you can apply directly online, without registering or
          receiving an invitation, if you <B>complete your specified work</B> and <B>lodge a valid visa application by
          28 February 2027</B>. Finishing the work is not enough on its own: the application has to be lodged by that
          date too.
        </p>
        <p>
          If you are close to finishing, count your days carefully with the{' '}
          <In href="/88-days-calculator">88 days tracker</In> and keep your evidence ready (see{' '}
          <In href="/guides/specified-work-evidence">evidence for your 88 days</In>), so you are not caught a few days
          short after the date has passed.
        </p>
      </GuideSection>

      <GuideSection title="What changes for the second visa">
        <p>
          Today a second visa generally needs 88 days of specified work, which our guide on{' '}
          <In href="/guides/how-88-days-are-counted">how the 88 days are counted</In> explains. The media release says
          the requirement &ldquo;will increase from three months to four months&rdquo; from 1 March 2027, and that work
          completed before 1 March 2027 counts towards it.
        </p>
        <p>
          The written release does not give a number of days for four months. The figure of 120 days was mentioned at
          the <Ext href={PRESS}>press conference</Ext>, but Home Affairs had not published a day count, and its{' '}
          <Ext href={HA_417_2ND}>second 417 visa page</Ext> still described the current rule when we checked. We will
          update this guide and the tracker when the Department publishes the count.
        </p>
      </GuideSection>

      <GuideSection title="What changes for the third visa">
        <p>
          The third visa still needs six months of specified work, as explained in{' '}
          <In href="/guides/third-working-holiday-visa-179-days">third visa: the 179 days</In>. From 1 March 2027 you will
          also need an invitation. The Minister says there will be 25,000 third visa places in 2026-27, up from the
          5,000 floated in September.
        </p>
      </GuideSection>

      <GuideSection title="Places, and who is excepted">
        <p>
          The media release sets <B>45,000 second visa places</B> and <B>25,000 third visa places</B> for 2026-27. UK
          citizens are excepted from the invitation requirement; the Minister said a separate arrangement with the UK is
          still being negotiated. Our guide on{' '}
          <In href="/guides/uk-working-holiday-specified-work-exemption">UK citizens and specified work</In> covers the
          current position.
        </p>
      </GuideSection>

      <GuideSection title="What has not been published yet">
        <p>As of 17 November 2026 the official pages did not say:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>how invitations are selected, or how many are issued each month;</li>
          <li>whether there is a registration fee;</li>
          <li>whether the process covers both subclass 417 and subclass 462, and how places are shared between them and between countries;</li>
          <li>how many days the four-month second visa requirement means;</li>
          <li>the legal instrument that makes the change.</li>
        </ul>
        <p>
          Treat these points as open until Home Affairs publishes them. Be wary of anyone selling a guaranteed place:
          registration is through the official Home Affairs channels.
        </p>
      </GuideSection>

      <GuideSection title="What you can do now">
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <B>Check your dates.</B> Work out whether you can finish your specified work and lodge by 28 February 2027.
          </li>
          <li>
            <B>Keep your evidence.</B> Payslips, contracts and bank records help whichever process applies to you.
          </li>
          <li>
            <B>Register when it opens</B> on 1 December 2026 if you will apply on or after 1 March 2027. Home Affairs
            says you can register before finishing your specified work.
          </li>
          <li>
            <B>Watch your current visa expiry.</B> Registering does not extend your current visa.
          </li>
        </ol>
        <p className="text-xs text-slate-400">These steps are general suggestions, not advice for your situation.</p>
      </GuideSection>

      <GuideSection title="Does any of this change your tax?">
        <p>
          No. Working holiday makers are still taxed at 15% on the first $45,000 when their employer is registered,
          with no tax-free threshold. See <In href="/guides/working-holiday-maker-tax">working holiday maker tax</In> or
          estimate your pay with the <In href="/working-holiday-maker">working holiday tax calculator</In>.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
