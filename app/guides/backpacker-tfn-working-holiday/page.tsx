import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/backpacker-tfn-working-holiday';
const TITLE = 'TFN on a Working Holiday Visa: How to Apply';
const DESC =
  'Working in Australia on a 417 or 462 visa? See how to apply for a TFN, how long it takes and why having none can mean 45% tax withheld.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    images: ['/opengraph-image'],
    url: PATH,
    title: TITLE,
    description: DESC,
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const ATO_TFN =
  'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application';
const ATO_SCHEDULE_15 = 'https://www.ato.gov.au/tax-rates-and-codes/schedule-15-tax-table-for-working-holiday-makers';
const ATO_WHM =
  'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers';

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="Backpacker TFN: how to get a tax file number on a working holiday visa"
      headline={TITLE}
      description="A plain-English guide to getting a tax file number (TFN) on a 417 or 462 working holiday visa: who can apply online, what it costs, how long it takes and why having no TFN can mean 45% tax withheld."
      badge="🇦🇺 Guide · Working holiday makers"
      subtitle="A TFN is how the tax system identifies you, and your employer uses it to decide how much tax to withhold. Here is how to apply, what to expect and what happens if you have not got one yet."
      updated="November 2026 · Checked against the ATO on 3 November 2026"
      quick="If you are on a working holiday (subclass 417) or Work and Holiday (subclass 462) visa, you can apply for a tax file number online, for free, once you are in Australia. The ATO says you should receive it within 28 days of it receiving your completed application, posted to an Australian address. It matters because an employer registered for working holiday makers withholds a flat 15% on the first $45,000 if you give them your TFN, while the ATO says 45% applies if you have not quoted a TFN."
      keyFacts={[
        'Applying is free, done online, and you must be in Australia with a valid work rights visa.',
        'The ATO says to expect your TFN within 28 days of a complete application, posted to an Australian postal address.',
        'From 1 July 2026 the ATO’s working holiday maker schedule says 45% is withheld if no TFN is provided; registered employers withhold a flat 15% up to $45,000 when you give a TFN.',
        'Do not lodge a second application during the 28 days; the ATO says it can delay processing.',
      ]}
      source={{ href: ATO_TFN, label: 'ATO, TFN application for permanent migrants and temporary visitors (updated 22 June 2026)' }}
      faqs={[
        {
          q: 'Is a TFN free for working holiday makers?',
          a: 'Yes. The ATO says it is free to apply for a TFN, and you do not need to send documents. Be careful with websites that charge a fee for something you can do yourself on ato.gov.au.',
        },
        {
          q: 'How long does a TFN take to arrive?',
          a: 'The ATO says you should receive your TFN within 28 days from when it receives your completed application. If it has not arrived after 28 days, contact the ATO and quote the receipt ID from your application.',
        },
        {
          q: 'Can I apply for a TFN before I arrive in Australia?',
          a: 'The ATO says you can apply online if you have a valid work rights visa and are located in Australia. Visas with conditions 8101, 8103 or 8116 (NO WORK) are not eligible for the online system.',
        },
        {
          q: 'What tax is withheld if I do not have a TFN?',
          a: 'The ATO’s Schedule 15 for working holiday makers says that if no TFN is provided the employer must withhold at 45% on total payments made. It applies to payments from 1 July 2026. The 45% applies where the worker has not quoted a TFN, claimed an exemption or told the employer they have applied for one.',
        },
        {
          q: 'Can I start work before my TFN arrives?',
          a: 'The ATO’s TFN page does not say. Schedule 15 does say 45% applies unless you quote a TFN, claim an exemption or tell your employer you have applied for one, so tell your employer as soon as you apply. If you are unsure, check with the ATO or the Department of Home Affairs.',
        },
        {
          q: 'Is a TFN the same as an ABN?',
          a: 'No. An ABN is for running a business. If you are an employee you need a TFN, not an ABN.',
        },
        {
          q: 'Does having a TFN make me an Australian tax resident?',
          a: 'No. A TFN identifies you to the ATO. Your tax residency is decided separately, and the ATO says most working holiday makers are foreign residents for tax purposes.',
        },
      ]}
      related={[
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
        { href: '/working-holiday-maker', label: 'Working holiday calculator' },
        { href: '/guides/how-to-read-your-payslip', label: 'How to read your payslip' },
        { href: '/guides/working-holiday-tax-residency', label: 'Are you a tax resident?' },
        { href: '/88-days-calculator', label: '88-day calculator' },
        { href: '/guides/departing-australia-super-dasp', label: 'Claim your super (DASP)' },
      ]}
    >
      <GuideSection title="Why a TFN matters on a working holiday visa">
        <p>
          Employers who are registered with the ATO as employers of working holiday makers (WHMs) can withhold tax at a
          flat 15% on the first $45,000 you earn in an income year, if you give them your TFN. Above $45,000 higher
          rates apply (<Ext href={ATO_SCHEDULE_15}>ATO, Schedule 15 – tax table for working holiday makers</Ext>,
          published 17 June 2026).
        </p>
        <p>
          The same schedule says that if no TFN is provided the employer must withhold at <B>45%</B> on total payments
          made. It applies to payments from 1 July 2026. That is three times the 15% rate, so a missing TFN can cost
          you a lot of take-home pay.
        </p>
        <SimpleTable
          head={['Example: one week’s pay of $1,000', 'Tax withheld']}
          rows={[
            ['TFN quoted, registered WHM employer (15%)', '$150'],
            ['No TFN quoted (45%)', '$450'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Illustrative withholding amounts only. Your final tax is worked out when you lodge your return. See the{' '}
          <In href="/guides/working-holiday-maker-tax">working holiday maker tax guide</In> for how the year-end figure
          is calculated.
        </p>
      </GuideSection>

      <GuideSection title="Who can apply online">
        <p>
          According to the ATO&rsquo;s page for permanent migrants and temporary visitors (updated 22 June 2026), you
          can apply online if you have a valid work rights visa and are located in Australia. The page says visas with
          conditions 8101 (NO WORK), 8103 (NO WORK) or 8116 (NO WORK/APD ACTIVITY) are not eligible. In practice:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You need to be in Australia when you apply.</li>
          <li>Your visa must give you the right to work.</li>
          <li>
            You apply through the ATO&rsquo;s online form:{' '}
            <Ext href={ATO_TFN}>Apply for a TFN as a temporary visitor or migrant</Ext>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="What it costs and what you need">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>Cost:</B> free. The ATO says it is free to apply for a TFN.
          </li>
          <li>
            <B>Documents:</B> the ATO says you will not need to send documents.
          </li>
          <li>
            <B>Address:</B> the ATO posts your TFN to the Australian postal address on your application, so use an
            address where you can actually collect mail, such as a hostel, a friend&rsquo;s home or a post office box
            you can access. (That is our practical suggestion, not an ATO instruction.)
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="How long it takes">
        <p>
          The ATO says you should receive your TFN within 28 days from when it receives your completed application. It
          also says not to lodge another application during those 28 days, because that can delay processing. If your
          TFN notice has not arrived after 28 days, contact the ATO and give the receipt ID from your application. Save
          that receipt ID when you apply.
        </p>
      </GuideSection>

      <GuideSection title="Can you start work before your TFN arrives?">
        <p>
          The ATO&rsquo;s TFN page does not say whether you can start work before you receive your TFN, and we have
          not verified this point. What Schedule 15 does say is that 45% applies if the worker has not quoted a TFN,
          claimed an exemption or told the employer they have applied for one. So if you are waiting for your TFN, tell
          your employer that you have applied and ask how they will handle your pay.
        </p>
        <Callout>
          <B>Check with the source:</B> if you are unsure about your situation, ask the ATO or the Department of Home
          Affairs. This guide is general information.
        </Callout>
      </GuideSection>

      <GuideSection title="Giving your TFN to your employer">
        <p>
          You normally provide your TFN to your employer on a TFN declaration form when you start. Tell the employer
          you are on a working holiday visa. The ATO says employers of WHMs must register with it before they employ
          one, and that if an employer is not registered they are required to withhold at foreign resident rates
          instead of the 15% rate (<Ext href={ATO_SCHEDULE_15}>ATO, Schedule 15</Ext>). Our{' '}
          <In href="/guides/how-to-read-your-payslip">payslip guide</In> shows where to find the tax withheld on your
          payslip so you can check the rate used.
        </p>
      </GuideSection>

      <GuideSection title="TFN is not your visa, your ABN or your residency">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>TFN vs visa:</B> your visa gives you the right to work. Your TFN is how the tax system identifies you.
          </li>
          <li>
            <B>TFN vs ABN:</B> an ABN is for running a business. As an employee you need a TFN.
          </li>
          <li>
            <B>TFN vs residency:</B> a TFN does not decide whether you are an Australian resident for tax. The ATO says
            most working holiday makers are foreign residents; see{' '}
            <In href="/guides/working-holiday-tax-residency">our tax residency guide</In> and the ATO&rsquo;s{' '}
            <Ext href={ATO_WHM}>working holiday makers page</Ext>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Keep your TFN safe">
        <p>
          Your TFN is sensitive. Share it only with people who have a genuine need, such as your employer, your super
          fund, the ATO and your registered tax agent. Do not post it online or send it to someone who contacts you
          unexpectedly, and check any unexpected message about your tax through ato.gov.au before replying.
        </p>
      </GuideSection>

      <GuideSection title="A simple timeline to plan around">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Arrive in Australia with a valid work rights visa and an Australian postal address you can use.</li>
          <li>Apply online as soon as you have that address, and save the receipt ID.</li>
          <li>Wait up to 28 days for the notice. Do not submit a second application.</li>
          <li>Give your TFN to each employer and to your super fund.</li>
          <li>Check your first payslips for the tax withheld.</li>
          <li>
            Keep your payslips and receipt ID for your return, and use the{' '}
            <In href="/working-holiday-maker">working holiday maker calculator</In> to estimate how your earnings are
            taxed.
          </li>
        </ol>
        <p>
          Tracking days for a second or third visa? The <In href="/88-days-calculator">88-day calculator</In> helps.
          Leaving Australia? See the <In href="/guides/departing-australia-super-dasp">DASP guide</In>.
        </p>
      </GuideSection>

      <GuideSection title="Common mistakes to avoid">
        <ul className="list-disc pl-5 space-y-2">
          <li>Waiting until you have a job offer. Applying soon after you arrive leaves time for the notice to reach you.</li>
          <li>Using an address you will leave. The TFN is posted to the Australian address on your application.</li>
          <li>Applying twice. The ATO says a second application within the 28 days can delay processing.</li>
          <li>Paying a third party. The ATO says applying is free.</li>
          <li>Assuming 15% is automatic. It needs your TFN and an employer registered as an employer of working holiday makers. Check your payslip.</li>
          <li>Giving your TFN to anyone who asks.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Sources and disclaimer">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><Ext href={ATO_TFN}>ATO, TFN application for permanent migrants and temporary visitors</Ext> (updated 22 June 2026)</li>
          <li><Ext href={ATO_SCHEDULE_15}>ATO, Schedule 15 – Tax table for working holiday makers</Ext> (published 17 June 2026)</li>
          <li><Ext href={ATO_WHM}>ATO, Working holiday makers</Ext> (updated 3 June 2026)</li>
        </ul>
        <p className="text-xs text-slate-400">
          General information only. This guide is not tax, legal or financial advice and does not consider your
          personal circumstances. Rules and figures were checked against the Australian Taxation Office on 3 November
          2026 and can change. Check the linked ATO pages or speak to a registered tax agent before you act.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
