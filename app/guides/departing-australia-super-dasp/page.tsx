import type { Metadata } from 'next';
import { GuideBreadcrumbLd, GuideShare } from '@/components/GuideExtras';

export const metadata: Metadata = {
  title: 'Claim Your Super When You Leave Australia (DASP Guide)',
  description:
    'How the Departing Australia Superannuation Payment works: who can claim it, the 35%, 45% and 65% tax rates, how to apply and what happens if you wait.',
  alternates: { canonical: '/guides/departing-australia-super-dasp' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/departing-australia-super-dasp',
    title: 'Claim Your Super When You Leave Australia (DASP Guide)',
    description:
      'Who can claim a DASP, what the 65% working holiday maker rate means, how to apply from overseas and what happens to unclaimed super.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Claim Your Super When You Leave Australia (DASP Guide)',
  description:
    'A plain-English guide to the Departing Australia Superannuation Payment (DASP): eligibility, the 35%, 45% and 65% tax rates, how to apply and what happens if you do nothing.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/departing-australia-super-dasp',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax is taken from a DASP for a working holiday maker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO rate is 65% of the taxable component for working holiday makers. The tax-free component is not taxed. Other temporary residents pay 35% on the taxed element and 45% on the untaxed element.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I include a DASP in my tax return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The ATO says a DASP is not part of your assessable income and tax is withheld when it is paid, so you do not include it in your tax return.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a DASP take to be paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO says a DASP is generally paid within 28 days of the ATO or your fund receiving your completed application. It can take longer if documents are missing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I never claim my super?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once it has been 6 months or more since you left Australia and your visa has ceased, your fund can transfer your super to the ATO as unclaimed super. Check the ATO for the current process and tax treatment.',
      },
    },
  ],
};

const RATES = [
  { part: 'Tax-free component', ordinary: 'Nil', whm: 'Nil' },
  { part: 'Taxable component, taxed element', ordinary: '35%', whm: '65%' },
  { part: 'Taxable component, untaxed element', ordinary: '45%', whm: '65%' },
];

export default function DaspGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GuideBreadcrumbLd path={"/guides/departing-australia-super-dasp"} title={"Claim your super when you leave Australia (DASP)"} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Claim your super when you leave Australia (DASP)
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Who can claim a Departing Australia Superannuation Payment, what the 35%, 45% and 65% tax rates mean,
            how to apply from overseas and what happens if you wait.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Updated October 2026 · Rates checked against the ATO in October 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Quick answer */}
        <section className="border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 rounded-lg p-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
          <p>
            <strong className="text-slate-900 dark:text-white">Quick answer:</strong> If you worked in Australia on a temporary visa, you can usually claim your super as a Departing Australia Superannuation Payment (DASP) after you have left and your visa has ended. The tax withheld is 65% of the taxable component for working holiday makers and 35% (taxed element) or 45% (untaxed element) for other temporary residents.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[14px]">
            <li>You can only submit the claim after you leave Australia and hold no active visa.</li>
            <li>It is generally paid within 28 days of a completed application.</li>
            <li>Do not include the DASP in your tax return. Tax is withheld when it is paid.</li>
            <li>Citizens and permanent residents of Australia, New Zealand citizens, and holders of subclass 405 and 410 visas cannot claim.</li>
            <li>
              Source: <a href="https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ATO, Departing Australia superannuation payment</a>.
            </li>
          </ul>
        </section>

        {/* What is a DASP */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What is a DASP?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              When you work in Australia, your employer generally pays superannuation (super) into a fund on your
              behalf. On a temporary visa you cannot normally withdraw it while you are here. Once you have left the
              country, you may be able to ask for that money back as a{' '}
              <strong className="text-slate-900 dark:text-white">Departing Australia Superannuation Payment</strong>,
              usually shortened to DASP.
            </p>
            <p>
              The ATO describes it as a payment for people who built up super while working in Australia on an
              eligible temporary visa. Australian citizens, New Zealand citizens and permanent residents are not
              eligible, and neither are holders of subclass 405 and 410 visas.
            </p>
          </div>
        </section>

        {/* Who can apply */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Who can apply?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>Based on the ATO&rsquo;s page, you need to meet all of these conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You built up super while working in Australia on an eligible temporary visa (not subclass 405 or 410).</li>
              <li>You have left Australia.</li>
              <li>Your visa has ceased or been cancelled, and you do not hold another active Australian visa.</li>
              <li>You are not an Australian or New Zealand citizen or an Australian permanent resident.</li>
            </ul>
            <p>
              You can only submit the application after you have left. The ATO says you can start and save an online
              application while you are still in Australia, and recommends it. Keep the details you enter, because you
              will need the same ones to resume the saved application from overseas.
            </p>
          </div>
        </section>

        {/* Tax */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How the tax works</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              A DASP is not taxed like a normal super lump sum. Your fund withholds tax before paying you, and the
              rate depends on the components of the payment and on whether the money came from working holiday maker
              work. These are the ATO&rsquo;s rates for payments made from 1 July 2017:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Payment component</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Ordinary rate</th>
                    <th className="px-3 py-2 font-semibold text-slate-600 dark:text-slate-300">Working holiday maker rate</th>
                  </tr>
                </thead>
                <tbody className="font-mono tabular-nums text-slate-700 dark:text-slate-300 text-[13px]">
                  {RATES.map((r) => (
                    <tr key={r.part} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="px-3 py-2">{r.part}</td>
                      <td className="px-3 py-2">{r.ordinary}</td>
                      <td className="px-3 py-2">{r.whm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">
              Source: ATO,{' '}
              <a href="https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/payments-from-super" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Payments from super</a>{' '}
              (Table 14), page updated 16 September 2026. The ATO also notes that any part above the untaxed roll-over
              plan cap is taxed at 47% under a separate Act.
            </p>
            <p>
              For most people the contributions an employer paid sit in the taxed element of the taxable component. If
              your payment includes super paid while you were a working holiday maker, the 65% rate applies to the
              taxable component.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              Illustration, not a prediction: suppose a working holiday maker&rsquo;s fund shows a taxable component of
              $5,000. At 65%, $3,250 is withheld and $1,750 is paid out. A non-working-holiday temporary resident with
              the same taxed element would face 35%, or $1,750, and receive $3,250. Your real figures depend on your
              fund&rsquo;s statement.
            </p>
            <p>
              The ATO says a DASP does not form part of your assessable income and tax is withheld at source, so you
              should not include it in your tax return.
            </p>
          </div>
        </section>

        {/* How to apply */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How to apply</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-slate-900 dark:text-white">Get your details ready.</strong> The ATO asks for
                your tax file number (TFN) in its online system, so keep it with your fund details.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Use the ATO&rsquo;s online DASP application.</strong>{' '}
                It is free, and the ATO checks your immigration status with the Department of Home Affairs, so you
                usually do not need a Certification of Immigration Status unless your fund tells you otherwise.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Prepare ID if your balance is large.</strong> For
                balances of $5,000 or more, your fund may ask for certified copies of your ID. The ATO recommends
                certifying them before you leave, because there are rules about who can certify.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Wait for payment.</strong> A DASP is generally paid
                within 28 days of the ATO or your fund receiving the completed application, and it can take longer if
                documents are missing.
              </li>
            </ol>
            <p>
              A tax agent registered for DASP can also apply for you through the ATO&rsquo;s intermediary system once
              you give written authority, usually for a fee. If you have more than one fund, check that the online
              system lists all of them before you submit.
            </p>
          </div>
        </section>

        {/* Do nothing */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What if you do nothing?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If you do not apply, your fund can transfer your super to the ATO as unclaimed super once it has been 6
              months or more since you left Australia and your visa has ceased. The money is not lost, but recovering
              it follows a different process. Check the ATO&rsquo;s current guidance on unclaimed super before relying
              on that route.
            </p>
          </div>
        </section>

        {/* Separate from return */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A DASP does not replace your tax return</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If you earned wages in Australia you may still need to lodge a return for the income year, and you can do
              that from overseas. If you leave Australia permanently before 30 June you may be able to lodge early.
              Check the ATO or a registered tax agent for your own situation.
            </p>
            <p>
              For working holiday makers the 2026-27 rates are 15% up to $45,000, then 30% to $135,000, 37% to
              $190,000 and 45% above that. See how this applies to your wages in the{' '}
              <a href="/working-holiday-maker" className="text-blue-600 dark:text-blue-400 hover:underline">Working Holiday Maker calculator</a>,
              read the full{' '}
              <a href="/guides/working-holiday-maker-tax" className="text-blue-600 dark:text-blue-400 hover:underline">working holiday maker tax guide</a>,
              and see{' '}
              <a href="/guides/tax-return-deadline-and-refunds" className="text-blue-600 dark:text-blue-400 hover:underline">tax return deadlines and refunds</a>.
            </p>
          </div>
        </section>

        {/* Mistakes */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Common mistakes to avoid</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <li>Submitting before you have left Australia or while a visa is still active.</li>
            <li>Not noting the details you used to start a saved application.</li>
            <li>Assuming the DASP replaces your income tax return. They are separate.</li>
            <li>Forgetting small old funds opened by different employers.</li>
            <li>Claiming while you hold another active visa, which may make you ineligible.</li>
          </ul>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Checklist before you leave</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Keep your TFN, passport and visa grant notice.</li>
              <li>Find every super fund you have. Payslips and your myGov or ATO account usually list them.</li>
              <li>Note your last working day and your departure date.</li>
              <li>Plan your tax return and keep payslips and payment summaries.</li>
              <li>Decide when you will apply for your DASP after you leave.</li>
            </ol>
            <p>
              For a step-by-step planner covering the DASP, your final tax return and an exit checklist, see the{' '}
              <a href="/leaving-australia-money-kit" className="text-blue-600 dark:text-blue-400 hover:underline">Leaving Australia Money Kit</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Is the 65% rate taken from my whole super balance?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                No. It applies to the taxable component of the payment that relates to working holiday maker work. The
                tax-free component is not taxed. Your fund&rsquo;s statement shows the split.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do I pay tax on the DASP again in my tax return?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                According to the ATO, no. Do not include it in your tax return.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">How long does it take?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Generally within 28 days of a completed application, though it can take longer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Can I apply from my home country?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Yes. The application is submitted after you have left, using the ATO&rsquo;s online system.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">What if I come back to Australia?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                If you hold a new active visa you may not meet the conditions, so check the ATO page before applying.
              </p>
            </div>
          </div>
        </section>

        <GuideShare path={"/guides/departing-australia-super-dasp"} title={"Claim your super when you leave Australia (DASP)"} />

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            General information only. This guide is not tax, legal or financial advice and does not consider your
            personal circumstances. Rates and rules were checked against the Australian Taxation Office in October
            2026 and can change. Check the linked ATO pages or speak to a registered tax agent before you act. Full
            workings for our calculators are on the{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/guides/working-holiday-tax-residency" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Working holiday tax residency</a>
            <a href="/guides/working-holiday-maker-tax" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Working holiday maker tax</a>
            <a href="/guides/tax-return-deadline-and-refunds" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax return deadline &amp; refunds</a>
            <a href="/leaving-australia-money-kit" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Leaving Australia Money Kit</a>
            <a href="/working-holiday-maker" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Working holiday calculator</a>
            <a href="/guides/how-to-read-your-payslip" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How to read your payslip</a>
          </div>
        </section>
      </div>
    </main>
  );
}
