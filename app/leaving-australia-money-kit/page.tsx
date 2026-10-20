import type { Metadata } from 'next';
import GuideArticle, { B, Ext, GuideSection, In } from '@/components/GuideArticle';

const PATH = '/leaving-australia-money-kit';
const TITLE = 'Leaving Australia Money Kit';
const DESC =
  'A 108-page guide and 15-sheet planner for working holiday makers leaving Australia: final tax return, DASP super claim, money transfers and a dated checklist.';
const CHECKOUT = 'https://auincometax.lemonsqueezy.com/checkout/buy/05bab58c-a7ef-4b15-8119-1ec0442a38a0';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    images: ['/opengraph-image'], url: PATH, title: TITLE, description: DESC, type: 'article' },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

function BuyButton({ label }: { label: string }) {
  return (
    <p>
      <a
        href={CHECKOUT}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        {label}
      </a>
    </p>
  );
}

export default function Page() {
  return (
    <GuideArticle
      path={PATH}
      title="Leaving Australia Money Kit: tax return, super (DASP) and exit plan"
      headline={TITLE}
      description={DESC}
      badge="Kit · Working holiday makers"
      subtitle="A 108-page guide and a 15-sheet Excel planner to get your final tax return, your super and your money out of Australia without leaving dollars behind."
      updated="October 2026"
      faqs={[
        {
          q: 'Who is the kit for',
          a: 'Working holiday makers on a 417 or 462 visa who are about to leave Australia, or have just left, and want to lodge their final tax return and claim their super (DASP) themselves.',
        },
        {
          q: 'Is it tax advice',
          a: 'No. It is general information and tools. We are not registered tax agents and the kit does not look at your personal situation. For complicated cases, use a registered tax agent and check them on the Tax Practitioners Board register.',
        },
        {
          q: 'Which tax years does it cover',
          a: 'The 2025-26 and 2026-27 working holiday maker rates. Rules were last verified on 2 October 2026, and the kit lists the points we could not confirm in an appendix.',
        },
        {
          q: 'What do I get',
          a: 'A ZIP file with the 108-page PDF guide and the Leaving Australia Planner in Excel format. The planner has been tested in LibreOffice and is built for Excel and Google Sheets.',
        },
        {
          q: 'How much does it cost',
          a: 'A$29 launch price, paid once. Payment and GST are handled by Lemon Squeezy, which acts as the merchant of record.',
        },
      ]}
      related={[
        { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax rates' },
        { href: '/guides/departing-australia-super-dasp', label: 'Claim your super (DASP) when you leave' },
{ href: '/guides/tax-return-deadline-and-refunds', label: 'Tax return deadline and refunds' },
        { href: '/88-days-calculator', label: '88-day regional work calculator' },
      ]}
      disclaimer={
        <p>
          The kit is general information, not tax, financial, legal or migration advice. AU Income Tax is not
          affiliated with the ATO or any government body, and we are not registered tax agents. Rules were last
          verified on 2 October 2026; check the <Ext href="https://www.ato.gov.au">ATO website</Ext> or a registered
          tax agent for your situation. See our <a href="/methodology" className="text-blue-500 hover:underline">methodology</a> and{' '}
          <a href="/tax-disclaimer" className="text-blue-500 hover:underline">full disclaimer</a>.
        </p>
      }
    >
      <GuideSection title="The problem it solves">
        <p>
          Most working holiday makers leave Australia with money still on the table: tax withheld at the wrong rate, super
          they never claimed, or a return lodged too early or too late. Agents who do this for you charge a fee that is
          often not published. The kit gives you the steps, the checks and the emails so you can do it yourself.
        </p>
        <BuyButton label="Get the kit for A$29" />
      </GuideSection>

      <GuideSection title="What is inside">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <B>108-page PDF guide.</B> Your tax position, an employer and payslip audit, the final tax return step by step
            (early or after 1 July), super and DASP including mixed visas and what to do if you are rejected, DIY or agent
            with Tax Practitioners Board checks, money logistics, notes for 21 countries, scams, four worked examples, a
            78-item checklist, 20 email templates and 50 FAQs.
          </li>
          <li>
            <B>15-sheet Excel planner.</B> Dashboard, a timeline built from your dates, payslip audit, income statement
            check, tax estimate, super and DASP net calculator, DIY-versus-agent break-even, transfer-cost comparison,
            departure cashflow, document tracker, claims log and email templates.
          </li>
          <li>
            <B>Official links with check dates,</B> so you know which pages the figures come from.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="What it does not do">
        <p>
          It does not prepare or lodge your return, and it cannot tell you what is right for your case. Some points could
          not be verified against a primary source and are marked in an appendix. If your situation is unusual, such as
          mixed visas, foreign income or a rejected DASP, get a registered tax agent to look at it.
        </p>
      </GuideSection>

      <GuideSection title="Free resources first">
        <p>
          If you only need the numbers, our free tools may be enough: the{' '}
          <In href="/working-holiday-maker">working holiday maker calculator</In>, the{' '}
          <In href="/guides/working-holiday-maker-tax">working holiday maker tax guide</In>, the{' '}
<In href="/guides/departing-australia-super-dasp">DASP super guide</In> and the{' '}
          <In href="/88-days-calculator">88-day calculator</In>. The kit is for people who want the whole exit plan in one place.
        </p>
        <BuyButton label="Get the kit for A$29" />
      </GuideSection>
    </GuideArticle>
  );
}
