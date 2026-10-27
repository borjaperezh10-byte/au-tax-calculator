import type { Metadata } from 'next';
import GuideArticle, { B, Callout, Ext, GuideSection, In, SimpleTable } from '@/components/GuideArticle';

const PATH = '/guides/working-holiday-tax-residency';
const TITLE = 'Working Holiday Maker Tax Residency: Are You a Resident?';
const DESC =
  'Most backpackers are foreign residents for tax, but not all. See the ATO’s two residency tests, five official examples and what changes on your return.';

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

const ATO_RESIDENCY =
  'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/australian-residency-if-you-re-on-a-working-holiday-or-visit';
const ATO_WHM =
  'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers';
const ATO_NDA =
  'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/taxation-of-australian-resident-whms-from-nda-countries';
const ATO_FOREIGN =
  'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency/foreign-and-temporary-residents';
const ATO_MEDICARE =
  'https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy/medicare-levy-exemption/foreign-residents-exemption-from-medicare-levy';
const ATO_RATES = 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers';
const ATO_PREPARE =
  'https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return';

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="Are you an Australian resident for tax? A working holiday maker's guide"
      headline={TITLE}
      description="A plain-English guide to tax residency for working holiday makers on a 417 or 462 visa: the ATO's resides and 183-day tests, official examples, the eight non-discrimination countries and what changes on your tax return."
      badge="🇦🇺 Guide · Working holiday makers"
      subtitle="Most backpackers on a 417 or 462 visa are foreign residents for tax purposes, but your visa label does not decide it. Here is how the ATO looks at it and why it matters at tax time."
      updated="October 2026 · Checked against the ATO on 27 October 2026"
      quick="Most working holiday makers (subclass 417 and 462) are foreign residents for tax purposes, according to the ATO. You can still become an Australian resident for tax if you pass the resides test or the 183-day test, and that can happen part-way through the year. For most WHMs the tax rate does not change either way, but WHMs who are Australian residents and nationals of Chile, Finland, Germany, Israel, Japan, Norway, Turkey or the United Kingdom may be taxed as a resident instead."
      keyFacts={[
        'Residency for tax is not the same as visa status; the ATO looks at your purpose and how you actually live.',
        'Foreign residents have no tax-free threshold and do not pay the Medicare levy (an exemption is claimed in the return).',
        'Your tax return asks whether you were an Australian or foreign resident.',
        'If you lodge your own return it is due 31 October; in 2026 that is a Saturday, so the ATO says the due date is the next business day (Monday 2 November 2026).',
      ]}
      source={{ href: ATO_RESIDENCY, label: 'ATO, Australian residency if you’re on a working holiday or visit (updated 3 June 2026)' }}
      faqs={[
        {
          q: 'Are working holiday makers residents for tax purposes in Australia?',
          a: 'Most are not. The ATO says most people who come to Australia for a working holiday or visit are not Australian residents for tax purposes, and the Commissioner’s longstanding view is that working holiday makers are foreign residents. Some become residents if their circumstances change, for example if they decide to settle in Australia.',
        },
        {
          q: 'What are the two tests for tax residency for a backpacker?',
          a: 'The ATO describes the resides test (whether your living and working arrangements suggest Australia is your home) and the 183-day test (you have been in Australia for more than 183 days in the income year and show long-term or permanent intent, or you do not usually live outside Australia).',
        },
        {
          q: 'Do backpackers pay the Medicare levy?',
          a: 'Foreign residents do not pay the Medicare levy. The ATO says they can claim an exemption for the days in the income year they were foreign residents, and that you claim it when you lodge your tax return.',
        },
        {
          q: 'Does a six-month lease or a second working holiday visa make me a resident?',
          a: 'Not by itself. In the ATO’s examples, an Irish couple on 417 visas who signed a six-month lease and worked for the same employer in their second year were still foreign residents. The ATO says no one factor decides the answer.',
        },
        {
          q: 'Which countries get resident tax rates as working holiday makers?',
          a: 'The ATO lists Chile, Finland, Germany, Israel, Japan, Norway, Turkey and the United Kingdom. A WHM on a 417 or 462 visa who is an Australian resident for tax purposes and a national of one of these countries may be taxed on the same basis as a resident Australian national. WHMs from other countries pay WHM rates.',
        },
        {
          q: 'Do I have to lodge a tax return as a working holiday maker?',
          a: 'The ATO says you do not need to lodge if all your income was salary or wages earned as a WHM and your taxable income was under $45,001. You need to lodge if you want to claim deductions, and you may want to lodge if you became an Australian-resident WHM from one of the listed countries.',
        },
        {
          q: 'When is the 2025-26 tax return due if 31 October is a Saturday?',
          a: 'The ATO says that if you lodge your own return it is due by 31 October, and that if 31 October falls on a weekend the due date is the next business day. In 2026 that means Monday 2 November. Registered tax agents have their own lodgment schedules, but you need to engage the agent before 31 October.',
        },
      ]}
      related={[
        { href: '/working-holiday-maker', label: 'Working holiday calculator' },
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
        { href: '/guides/medicare-levy-and-surcharge', label: 'Medicare levy & surcharge' },
        { href: '/guides/tax-return-deadline-and-refunds', label: 'Tax return deadline & refunds' },
        { href: '/guides/departing-australia-super-dasp', label: 'Claim your super (DASP)' },
        { href: '/leaving-australia-money-kit', label: 'Leaving Australia Money Kit' },
      ]}
    >
      <GuideSection title="Tax residency is not the same as your visa">
        <p>
          Your tax residency decides which tax rules apply to your wages, and it is separate from your immigration
          status. The ATO notes that residency for tax purposes can differ from residency under Department of Home
          Affairs rules (<Ext href="https://www.ato.gov.au/calculators-and-tools/tax-return-work-out-your-tax-residency">ATO residency tool</Ext>).
          Holding a 417 or 462 visa that lets you work does not make you a tax resident, and a visa label does not make
          you a foreign resident either. The ATO looks at your behaviour.
        </p>
        <p>
          Your tax return also asks you to say whether you were an Australian or foreign resident for tax purposes, so
          it helps to understand the rules before you lodge.
        </p>
      </GuideSection>

      <GuideSection title="The two tests the ATO describes">
        <p>The ATO says a working holiday maker can be an Australian resident under either of two tests:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>The resides test.</B> Do your living and working arrangements suggest that Australia is your home?
          </li>
          <li>
            <B>The 183-day test.</B> Have you been in Australia for more than 183 days in the income year and do you
            show long-term or permanent intent, or do you not usually live outside Australia?
          </li>
        </ul>
        <p>
          The ATO adds that no single factor decides the answer. It considers your purpose for being in Australia and
          how you actually live, including living arrangements, community ties, personal assets and family ties. It
          also says residency can change: you may become a resident &ldquo;at the time your behaviour changes&rdquo;.
        </p>
        <p className="text-xs text-slate-400">
          Source: <Ext href={ATO_RESIDENCY}>ATO, Australian residency if you&rsquo;re on a working holiday or visit</Ext>,
          updated 3 June 2026.
        </p>
      </GuideSection>

      <GuideSection title="What points towards ‘foreign resident’ and ‘resident’">
        <SimpleTable
          head={['Consistent with a foreign resident', 'Consistent with a resident']}
          rows={[
            [
              'Your main purpose is a holiday, to experience and see Australia.',
              'You have been in Australia for an extended period, usually longer than 6 months.',
            ],
            [
              'No fixed intention to stay and no steps taken to extend your stay.',
              'You have an established home in Australia and no home overseas.',
            ],
            [
              'Arrangements to return home, such as assets in storage or study or work waiting for you.',
              'You have long-term assets and community or family ties in Australia.',
            ],
            [
              'Continuing ties to family, friends, clubs and professional memberships at home.',
              'You intend to stay, and your behaviour backs that up.',
            ],
          ]}
        />
        <p className="text-xs text-slate-400">Source: ATO page above. This is a summary of factors, not a test that gives you an answer.</p>
      </GuideSection>

      <GuideSection title="Five official examples">
        <p>The ATO publishes five worked examples. In summary:</p>
        <SimpleTable
          head={['Person', 'Result', 'Main reason']}
          rows={[
            ['Italian, 417 visa', 'Foreign resident', 'Holiday focus; possessions and a club membership kept in Italy; planned return home.'],
            ['Irish couple, 417 visas', 'Foreign resident', 'A six-month lease and same-employer work in the second year did not change their visitor status.'],
            ['Korean, 417 visa', 'Foreign resident', 'Family ties and a visa extension, but a deferred university place overseas and no long-term visa.'],
            ['Swedish, 417 visa', 'Foreign resident, then resident', 'Became a resident from the point he committed to stay under the Employer Nomination Scheme.'],
            ['New Zealander, special category visa', 'Foreign resident, then resident', 'Became a resident after deciding to relocate, selling his New Zealand home and moving his assets.'],
          ]}
        />
        <p>
          The last two examples show that your status can switch during the year. If your plans change, note the date.
        </p>
      </GuideSection>

      <GuideSection title="What changes for your tax">
        <p>
          For most working holiday makers, the ATO says residency does not change the rate of tax. The exception is a
          WHM who is an Australian resident for tax purposes and a national of a country with a non-discrimination
          article in its tax treaty with Australia (<Ext href={ATO_WHM}>ATO, Working holiday makers</Ext>). The ATO&rsquo;s list is:
        </p>
        <p>
          <B>Chile, Finland, Germany, Israel, Japan, Norway, Turkey and the United Kingdom.</B> The ATO adds that the
          Iceland treaty is currently the only one that excludes the WHM tax rate from the non-discrimination article.
        </p>
        <p>
          Eligible people hold a 417 or 462 visa, are an Australian resident for tax purposes for all or part of the
          income year, and are a national of one of those countries. According to the ATO they pay the{' '}
          <B>lower of</B> two amounts: tax calculated as a resident Australian national on the same income, or tax
          calculated at working holiday maker rates. For Australian-sourced income, resident rates include the
          tax-free threshold, and may include the low income tax offset and the Medicare levy. WHMs from other
          countries, and non-residents, stay on the WHM rates. The ATO warns that lodging as a resident does not
          guarantee it will accept your residency, and you may owe extra tax if too little was withheld
          (<Ext href={ATO_NDA}>ATO, Taxation of Australian resident WHMs from NDA countries</Ext>, updated 3 June 2026).
        </p>
        <p>Two other consequences, from the ATO&rsquo;s page on foreign and temporary residents:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Foreign residents have no tax-free threshold.</li>
          <li>
            Foreign residents do not pay the Medicare levy and can claim an exemption for the days they were foreign
            residents, which you claim when you lodge your return (<Ext href={ATO_FOREIGN}>ATO</Ext>,{' '}
            <Ext href={ATO_MEDICARE}>Medicare levy exemption</Ext>).
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Working holiday maker tax rates">
        <p>
          If your employer is registered with the ATO as an employer of working holiday makers, they withhold 15% on
          the first $45,000 you earn, with higher rates above that. If your employer is not registered, tax is withheld
          at foreign resident rates starting at 30%. The ATO&rsquo;s 2025-26 rates for WHMs are:
        </p>
        <SimpleTable
          head={['Taxable income', 'Tax on this income']}
          rows={[
            ['$0 – $45,000', '15c for each $1'],
            ['$45,001 – $135,000', '$6,750 plus 30c for each $1 over $45,000'],
            ['$135,001 – $190,000', '$33,750 plus 37c for each $1 over $135,000'],
            ['$190,001 and over', '$54,100 plus 45c for each $1 over $190,000'],
          ]}
        />
        <p className="text-xs text-slate-400">
          Source: <Ext href={ATO_RATES}>ATO, Tax rates – working holiday makers</Ext>, updated 1 June 2026. When we
          checked on 27 October 2026 that page listed rates up to 2025-26; check it for the current year&rsquo;s table.
        </p>
        <p>
          To see how this applies to your own wages, use the <In href="/working-holiday-maker">working holiday maker calculator</In> and
          read the <In href="/guides/working-holiday-maker-tax">working holiday maker tax guide</In>.
        </p>
      </GuideSection>

      <GuideSection title="Do you need to lodge a tax return?">
        <p>
          The ATO says you do not need to lodge if all your income was salary or wages earned as a WHM and your taxable
          income was under $45,001. You need to lodge if you want to claim deductions, and you may want to lodge if
          you became an Australian-resident WHM from one of the countries above. If you leave Australia permanently
          before 30 June, you can lodge early.
        </p>
        <Callout>
          <B>Deadline note:</B> if you lodge your own return it is due by 31 October. The ATO says that if 31 October
          falls on a weekend, the due date is the next business day. In 2026, 31 October is a Saturday, so the due date
          is Monday 2 November. A registered tax agent can lodge later if you are on their lodgment program, but you
          must engage them before 31 October (<Ext href={ATO_PREPARE}>ATO, Preparing your tax return</Ext>, updated 27 April 2026).
          See <In href="/guides/tax-return-deadline-and-refunds">tax return deadline and refunds</In>.
        </Callout>
      </GuideSection>

      <GuideSection title="A simple self-check">
        <p>This does not give you an answer. It helps you organise your thinking before you talk to the ATO or an agent:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Why did you come to Australia, and has that changed?</li>
          <li>Where is your home: do you have a lease, belongings and a life here, or are they in your home country?</li>
          <li>How long have you been in Australia this income year?</li>
          <li>Have you applied to stay longer or taken steps to settle?</li>
          <li>What would you say if the ATO asked you to describe your plans?</li>
        </ol>
        <p>If your answers changed during the year, write down the date.</p>
      </GuideSection>

      <GuideSection title="Common mistakes to avoid">
        <ul className="list-disc pl-5 space-y-2">
          <li>Assuming your visa decides your residency. The ATO looks at how you live.</li>
          <li>Ticking &ldquo;resident&rdquo; only because you stayed a long time. Time matters, but no single factor decides.</li>
          <li>Forgetting the Medicare levy exemption if you were a foreign resident for part or all of the year.</li>
          <li>Assuming a refund is automatic. You generally have to lodge to claim deductions.</li>
          <li>Mixing up employer registration and your status. A WHM-registered employer controls the 15% withholding; your residency is a separate question.</li>
        </ul>
        <p>
          Leaving Australia? The <In href="/guides/departing-australia-super-dasp">DASP guide</In> and the{' '}
          <In href="/leaving-australia-money-kit">Leaving Australia Money Kit</In> cover your final return and super.
        </p>
      </GuideSection>

      <GuideSection title="Sources and disclaimer">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><Ext href={ATO_RESIDENCY}>ATO, Australian residency if you’re on a working holiday or visit</Ext> (updated 3 June 2026)</li>
          <li><Ext href={ATO_WHM}>ATO, Working holiday makers</Ext> (updated 3 June 2026)</li>
          <li><Ext href={ATO_NDA}>ATO, Taxation of Australian resident WHMs from NDA countries</Ext> (updated 3 June 2026)</li>
          <li><Ext href={ATO_FOREIGN}>ATO, Foreign and temporary residents</Ext> (updated 3 June 2026)</li>
          <li><Ext href={ATO_MEDICARE}>ATO, Foreign residents exemption from Medicare levy</Ext> (updated 1 May 2026)</li>
          <li><Ext href={ATO_RATES}>ATO, Tax rates – working holiday makers</Ext> (updated 1 June 2026)</li>
          <li><Ext href={ATO_PREPARE}>ATO, Preparing your tax return</Ext> (updated 27 April 2026)</li>
        </ul>
        <p className="text-xs text-slate-400">
          General information only. This guide is not tax, legal or financial advice and does not consider your
          personal circumstances. Rules and figures were checked against the Australian Taxation Office on 27 October
          2026 and can change. Check the linked ATO pages or speak to a registered tax agent before you act.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
