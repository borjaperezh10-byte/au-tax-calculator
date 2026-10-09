import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Return Deadline and Refunds (2026)',
  description:
    'When your Australian tax return is due (31 October if you lodge yourself), how tax agents can extend it, how long refunds take, what the late lodgement penalty is, and how a refund or bill is actually worked out.',
  alternates: { canonical: '/guides/tax-return-deadline-and-refunds' },
  openGraph: {
    images: ['/opengraph-image'],
    url: '/guides/tax-return-deadline-and-refunds',
    title: 'Tax Return Deadline and Refunds in Australia (2026)',
    description:
      'Due dates, agent extensions, refund timing and late penalties for the 2025-26 Australian tax return, plus how a refund is worked out.',
    type: 'article',
  },
  authors: [{ name: 'Borja Pérez', url: 'https://www.auincometax.com/about' }],
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tax Return Deadline and Refunds in Australia (2026)',
  description:
    'When the 2025-26 Australian tax return is due, how refunds are worked out and how long they take, and what happens if you lodge late.',
  author: { '@type': 'Person', name: 'Borja Pérez', url: 'https://www.auincometax.com/about' },
  publisher: { '@type': 'Organization', name: 'auincometax.com', url: 'https://www.auincometax.com' },
  mainEntityOfPage: 'https://www.auincometax.com/guides/tax-return-deadline-and-refunds',
  inLanguage: 'en-AU',
  isAccessibleForFree: true,
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is my Australian tax return due?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you lodge it yourself, the 2025-26 tax return is due by 31 October 2026. If you use a registered tax agent and are on their lodgment program, your due date can be later. Contact an agent before 31 October if you are new to them.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a tax refund take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO says most refunds from a return lodged online through myTax are issued within about two weeks. Paper returns take much longer, with most refunds issued within around 50 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I lodge my tax return late?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ATO can charge a failure to lodge on time penalty of one penalty unit for each 28 days the return is overdue, up to five penalty units. In practice the ATO generally warns you first, and it does not usually penalise a late return that results in a refund or a nil balance. Lodge as soon as you can.',
      },
    },
  ],
};

export default function TaxReturnGuidePage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            🇦🇺 Guide · 2025–26 tax return
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Tax return deadline and refunds in Australia
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            When to lodge, how long a refund takes, what a late return costs, and how a refund or a
            bill is worked out. For the return covering 1 July 2025 to 30 June 2026.
          </p>
          <p className="text-xs text-slate-400 mt-3">
            By <a href="/about" className="text-blue-500 hover:underline">Borja Pérez</a> · Updated October 2026
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Intro */}
        <section className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
          <p>
            Most employees don&rsquo;t need a tax accountant to lodge, but a lot of people put it off
            until the deadline. The financial year ended on 30 June, so the return you lodge now is for
            2025-26. It is a small job: the ATO already knows most of your income, and the return is
            mainly about adding your deductions and settling the difference between the tax you paid
            through your pay and the tax you owe.
          </p>
        </section>

        {/* 1. Deadline */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The deadline</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              If you lodge your own return, for example online through myTax, the due date is{' '}
              <strong className="text-slate-900 dark:text-white">31 October</strong>. In 2026 that falls
              on a Saturday, so don&rsquo;t plan to lodge on the day; aim for the week before.
            </p>
            <p>
              A registered tax agent can lodge later than 31 October if you are on their lodgment
              program, and your exact due date depends on your circumstances. If you&rsquo;re using an
              agent for the first time, or switching agents, the ATO advises contacting them before 31
              October so you are included. If you have an overdue return from an earlier year, sort that
              out before 31 October too.
            </p>
          </div>
        </section>

        {/* 2. Getting started */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">When you can lodge, and what&rsquo;s pre-filled</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              Pre-fill data in myTax is available from 1 July, and most of it, such as salary, tax
              withheld and bank interest, is finalised by the end of July. Some information arrives
              later, for example partnership or trust distributions. The ATO warns that pre-fill can be
              incomplete, so check it against your payslips and income statement. If you have a job, your
              employer finalises your income statement through Single Touch Payroll; wait until it shows
              as &ldquo;tax ready&rdquo; before lodging. See{' '}
              <a href="/guides/how-to-read-your-payslip" className="text-blue-600 dark:text-blue-400 hover:underline">
                how to read your payslip
              </a>{' '}
              for what should match.
            </p>
          </div>
        </section>

        {/* 3. Refund maths */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How a refund (or bill) is worked out</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The ATO calculates your actual tax on your taxable income for the year, then compares it
              with what was already withheld from your pay. If you paid more, you get the difference back
              as a refund. If you paid less, you owe the difference.
            </p>
            <p>
              Deductions are what usually create a refund. A deduction reduces your taxable income, so
              it&rsquo;s worth your marginal rate. For a resident earning between $70,000 and $135,000
              that&rsquo;s 30%, plus 2% Medicare levy, so about 32 cents per dollar. Claim $1,500 of
              work-related expenses and your tax falls by roughly $480. It&rsquo;s a refund of part of
              what you paid, not free money, and you need records to back the claims. See{' '}
              <a href="/guides/tax-deductions-for-employees" className="text-blue-600 dark:text-blue-400 hover:underline">
                tax deductions for employees
              </a>.
            </p>
            <p>
              A refund is also possible with no deductions at all, for example if you claimed the
              tax-free threshold on a job you only held part of the year, or if too much was withheld.
              And a bill is common when someone has two jobs or an untaxed side income. See{' '}
              <a href="/guides/tax-on-a-second-job" className="text-blue-600 dark:text-blue-400 hover:underline">
                tax on a second job
              </a>.
            </p>
          </div>
        </section>

        {/* Checklist */}
<section>
<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">A short checklist before you lodge</h2>
<div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
<p>
With 31 October close, a few minutes of preparation usually saves a second attempt.
</p>
<ul className="list-disc pl-6 space-y-2">
<li>Check your income statement shows as &ldquo;tax ready&rdquo; in myGov before you lodge.</li>
<li>Compare the pre-filled figures with your payslips and bank interest, and fix anything that looks wrong.</li>
<li>Gather records for any deduction you plan to claim; you need them if the ATO asks.</li>
<li>Confirm the bank account details where your refund will be paid.</li>
<li>31 October 2026 is a Saturday, so aim to lodge the week before.</li>
<li>If you want a registered tax agent and don&rsquo;t have one, contact them before 31 October.</li>
</ul>
</div>
</section>

{/* 4. Timing */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How long a refund takes</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              For returns lodged online through myTax, the ATO says most refunds are issued within two
              weeks. Paper returns are far slower, with most refunds issued within around 50 business
              days. Returns that need extra checking, such as those with unusually large deductions, can
              take longer. Your refund goes to the bank account you nominate, so check the details are
              right before you submit.
            </p>
          </div>
        </section>

        {/* 5. Late */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What if you lodge late?</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            <p>
              The failure to lodge on time penalty is one penalty unit for each 28 days (or part of 28
              days) that the return is overdue, up to a maximum of five penalty units. The ATO says it
              generally doesn&rsquo;t apply penalties in isolated cases, warning you first in writing or
              by phone, and it generally won&rsquo;t issue a penalty notice for a late return that
              results in a refund or a nil result. If you use a registered agent, give them everything
              they need in time. Even so, don&rsquo;t rely on leniency: a late return delays any refund,
              and a late return with a bill can add interest.
            </p>
            <p className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/40 pl-4 py-3 rounded-r">
              If you know you&rsquo;ll miss 31 October and you don&rsquo;t have an agent, arrange one
              before the deadline rather than after.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">When is my Australian tax return due?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                31 October if you lodge yourself. Later if you are on a registered tax agent&rsquo;s
                lodgment program. Contact an agent before 31 October if you are new to them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">Do I have to lodge a return?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Most people who earned income during the year do, and you should if tax was withheld
                and you want it back. The ATO&rsquo;s{' '}
                <a href="https://www.ato.gov.au/individuals-and-families/your-tax-return" className="text-blue-600 dark:text-blue-400 hover:underline" rel="noopener">
                  tax return guidance
                </a>{' '}
                says who must lodge. Working holiday makers and other visa holders should also check the
                rules for their situation, see{' '}
                <a href="/guides/working-holiday-maker-tax" className="text-blue-600 dark:text-blue-400 hover:underline">
                  working holiday maker tax
                </a>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-[15px]">How can I estimate my refund?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                Compare the tax withheld on your income statement with the tax on your taxable income
                for the year. The{' '}
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">calculator</a>{' '}
                shows the tax on any salary. The gap, plus the value of any deductions, is roughly your
                refund. Note the calculator is built for 2026-27 rates, which differ slightly from
                2025-26.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p>
            This guide is general information, not personal tax advice. Dates and processing times come
            from the ATO and can change; check{' '}
            <a href="https://www.ato.gov.au" className="text-blue-500 hover:underline" rel="noopener">ato.gov.au</a>{' '}
            or a registered tax agent for your situation. Full workings for our figures are on our{' '}
            <a href="/methodology" className="text-blue-500 hover:underline">methodology page</a>.
          </p>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Related reading</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Take-home pay calculator</a>
            <a href="/guides/tax-deductions-for-employees" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax deductions for employees</a>
            <a href="/guides/tax-on-a-second-job" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">Tax on a second job</a>
            <a href="/guides/how-to-read-your-payslip" className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors">How to read your payslip</a>
          </div>
        </section>
      </div>
    </main>
  );
}
