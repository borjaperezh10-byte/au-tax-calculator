import type { Metadata } from 'next';
import TaxCalculator from '@/components/TaxCalculator';
import { calculate, fmtAUD } from '@/lib/tax';
import { LAST_REVIEWED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Australia Income Tax Calculator 2026-27 | Take-Home Pay',
  description:
    'Free Australian income tax calculator for 2026-27. Calculate your take-home pay, income tax, Medicare levy, HECS repayment and super. Updated for the new 15% tax rate. Instant results.',
  alternates: { canonical: 'https://www.auincometax.com' },
};

// Pre-calculate common examples for FAQ accuracy
const ex80k  = calculate(80_000, true, false, true);
const ex100k = calculate(100_000, true, false, true);
const ex60k  = calculate(60_000, true, false, true);
const ex150k = calculate(150_000, true, false, false);

const FAQ_ITEMS = [
  {
    q: 'How much tax do I pay on an $80,000 salary in Australia (2026-27)?',
    a: `On an $80,000 salary, you pay ${fmtAUD(ex80k.netIncomeTax)} in income tax and ${fmtAUD(ex80k.medicareLevy)} in Medicare levy — a total of ${fmtAUD(ex80k.totalDeductions)}. Your take-home pay is ${fmtAUD(ex80k.netIncome)} per year (${fmtAUD(ex80k.netIncome / 12)} per month). Your effective tax rate is ${ex80k.effectiveRate.toFixed(1)}% and your marginal rate is ${ex80k.marginalRate}%.`,
  },
  {
    q: 'How much tax do I pay on a $100,000 salary in Australia?',
    a: `On a $100,000 salary in 2026-27, income tax is ${fmtAUD(ex100k.netIncomeTax)} and Medicare levy is ${fmtAUD(ex100k.medicareLevy)}, totalling ${fmtAUD(ex100k.totalDeductions)} in deductions. Your take-home pay is ${fmtAUD(ex100k.netIncome)} per year (about ${fmtAUD(ex100k.netIncome / 12)} per month). The marginal tax rate at $100,000 is 30%.`,
  },
  {
    q: 'How much tax do I pay on a $60,000 salary?',
    a: `On $60,000, your income tax is ${fmtAUD(ex60k.netIncomeTax)} and Medicare levy is ${fmtAUD(ex60k.medicareLevy)}, so total deductions are ${fmtAUD(ex60k.totalDeductions)}. Take-home pay is ${fmtAUD(ex60k.netIncome)} per year (${fmtAUD(ex60k.netIncome / 52)} per week). The marginal tax rate is 30%.`,
  },
  {
    q: 'What changed in the 2026-27 Australian tax year?',
    a: 'The biggest change for 2026-27 is the second tax bracket rate dropped from 19% to 15%, applying to income between $18,201 and $45,000. This gives every resident taxpayer earning above $45,000 an annual saving of up to $804 compared to 2024-25 rates. These are known as the Stage 3 tax cuts (legislated in 2024 and effective from 1 July 2026).',
  },
  {
    q: 'What is the tax-free threshold in Australia for 2026-27?',
    a: 'The tax-free threshold is $18,200. If your total taxable income is $18,200 or less, you pay no income tax. You can claim the tax-free threshold by ticking the box on your Tax File Number declaration when starting a new job. If you have multiple jobs, only claim it from your main employer.',
  },
  {
    q: 'What is the Medicare Levy and who pays it?',
    a: 'The Medicare Levy is 2% of your taxable income, which helps fund Australia\'s public healthcare system (Medicare). You are exempt if your income is below $28,011. A shade-in applies between $28,011 and $35,014 where you pay a lower effective rate. If you earn over $105,000 and do not have private hospital cover, an additional Medicare Levy Surcharge of 1% to 1.5% applies.',
  },
  {
    q: 'How does HECS/HELP repayment work in 2026-27?',
    a: 'If you have a HECS-HELP student debt, your employer automatically withholds repayments once your income exceeds approximately $58,518 (2026-27 estimated threshold). The repayment is a percentage of your total income — starting at 1% and rising up to 10% for incomes above $152,573. Unlike income tax, HECS repayment is calculated on your whole income, not just the amount above the threshold.',
  },
  {
    q: 'What is the Low Income Tax Offset (LITO) in 2026-27?',
    a: 'The Low Income Tax Offset reduces the tax you owe if you earn under $66,667. The maximum offset is $700 for incomes up to $37,500. It phases down to $325 at $45,000, then reduces to nil at $66,667. The LITO is applied automatically by your employer — you do not need to claim it separately.',
  },
  {
    q: 'How much superannuation does my employer pay in 2026-27?',
    a: 'From 1 July 2025, the Superannuation Guarantee rate is 12% of your ordinary time earnings. On a $100,000 salary, your employer contributes $12,000 per year into your super fund, on top of your salary. This amount is not deducted from your pay — it is an additional employer contribution.',
  },
  {
    q: 'How is take-home pay calculated in Australia?',
    a: 'Australian take-home pay = Gross salary − Income tax − LITO offset (reduces tax) − Medicare levy − Medicare Levy Surcharge (if applicable) − HECS repayment (if applicable). Super is paid by your employer on top of your salary and is not deducted from your take-home pay. All figures in this calculator are based on the ATO\'s 2026-27 tax tables.',
  },
];

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Australia Income Tax Calculator 2026-27',
  description: 'Calculate your Australian take-home pay, income tax, Medicare levy, HECS repayment and superannuation for the 2026-27 financial year.',
  url: 'https://www.auincometax.com',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  inLanguage: 'en-AU',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                🇦🇺 FY 2026–27
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Australia Income Tax Calculator
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
                Calculate your take-home pay for the 2026–27 financial year — includes Medicare, HECS and super
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-2 whitespace-nowrap">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                ATO 2026-27 official rates
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 whitespace-nowrap">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Last updated {LAST_REVIEWED}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What changed in 2026-27 */}
      <div className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <span className="font-semibold">🆕 What changed in 2026-27:</span>{' '}
            The 19% tax bracket has been cut to <strong>15%</strong> (income $18,201–$45,000),
            saving taxpayers up to <strong>$804 per year</strong>.{' '}
            <a href="/tax-brackets" className="underline hover:no-underline">See full 2026-27 tax brackets →</a>
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <TaxCalculator initialSalary={80000} />

        {/* Info cards — quick reference */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard
            title="2026-27 Tax Brackets"
            items={[
              { label: '$0 – $18,200', value: '0%' },
              { label: '$18,201 – $45,000', value: '15% ↓ new' },
              { label: '$45,001 – $135,000', value: '30%' },
              { label: '$135,001 – $190,000', value: '37%' },
              { label: '$190,001+', value: '45%' },
            ]}
            link={{ href: '/tax-brackets', label: 'Full bracket guide →' }}
          />
          <InfoCard
            title="Medicare Levy"
            items={[
              { label: 'Standard rate', value: '2%' },
              { label: 'No levy below', value: '$28,011' },
              { label: 'Shade-in up to', value: '$35,014' },
              { label: 'MLS (no private, >$105K)', value: '1–1.5%' },
            ]}
          />
          <InfoCard
            title="Key Thresholds 2026-27"
            items={[
              { label: 'Tax-free threshold', value: '$18,200' },
              { label: 'LITO max offset', value: '$700' },
              { label: 'HECS repayment from', value: '~$58,518' },
              { label: 'Super Guarantee', value: '12%' },
            ]}
          />
        </section>

        {/* Common salaries — internal links */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Common salary calculations</h2>
          <div className="flex flex-wrap gap-2">
            {[50000,60000,70000,80000,90000,100000,120000,150000,200000].map(s => (
              <a
                key={s}
                href={`/salary/${s}`}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-1.5 transition-colors"
              >
                ${(s/1000).toFixed(0)}K salary
              </a>
            ))}
          </div>
        </section>

        {/* FAQ section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{q}</span>
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-700 mt-8">
        Rates based on{' '}
        <a href="https://www.ato.gov.au" target="_blank" rel="noopener" className="text-blue-500 hover:underline">ATO</a>
        {' '}legislated 2026–27 tables. HECS thresholds are estimated pending ATO confirmation.
        For indicative purposes only — not financial or tax advice. Always verify with a registered tax agent.
      </footer>
    </main>
  );
}

function InfoCard({
  title, items, link,
}: {
  title: string;
  items: { label: string; value: string }[];
  link?: { href: string; label: string };
}) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">{title}</h3>
      <dl className="space-y-2">
        {items.map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <dt className="text-slate-500 dark:text-slate-400">{label}</dt>
            <dd className="font-mono font-semibold text-slate-800 dark:text-slate-200 tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      {link && (
        <a href={link.href} className="mt-4 block text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
          {link.label}
        </a>
      )}
    </div>
  );
}
