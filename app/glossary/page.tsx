import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Australian Tax Glossary 2026-27 | Key Terms Explained',
  description:
    'Plain-English definitions of Australian income tax terms for 2026-27 — taxable income, HECS/HELP, Medicare levy, LITO, salary sacrifice, franking credits, and more.',
  alternates: { canonical: 'https://www.auincometax.com/glossary' },
};

const TERMS = [
  {
    term: 'Taxable income',
    definition:
      'Your total income from all sources minus allowable deductions. This is the amount income tax rates are applied to. For most salaried employees, taxable income equals gross salary minus work-related deductions and pre-tax salary sacrifice contributions.',
  },
  {
    term: 'Marginal tax rate',
    definition:
      'The rate of tax you pay on each additional dollar of income. Your marginal rate is the rate that applies to the highest bracket your income reaches. This is different from your effective tax rate, which is your total tax as a percentage of your total income.',
  },
  {
    term: 'Effective tax rate',
    definition:
      'Your total tax paid divided by your total income, expressed as a percentage. Because Australia uses a progressive tax system, your effective rate is always lower than your marginal rate. For example, a person earning $80,000 may have a marginal rate of 30% but an effective rate of around 17%.',
  },
  {
    term: 'Tax-free threshold',
    definition:
      'The amount of income on which no income tax is payable. For Australian residents, the tax-free threshold is $18,200 for 2026-27. Non-residents and working holiday makers do not have a tax-free threshold.',
  },
  {
    term: 'Low Income Tax Offset (LITO)',
    definition:
      'A tax offset available to Australian residents that reduces the amount of income tax payable. For 2026-27, the maximum LITO is $700, available to residents earning up to $37,500. It phases out completely at $66,667. LITO is not available to non-residents or working holiday makers.',
  },
  {
    term: 'Medicare Levy',
    definition:
      'A 2% levy paid by most Australian residents to fund the Medicare healthcare system. The Medicare Levy applies once income exceeds $28,011 (2026-27), with a shade-in between $28,012 and $35,014 where a reduced rate applies. Non-residents and most working holiday makers do not pay the Medicare Levy.',
  },
  {
    term: 'Medicare Levy Surcharge (MLS)',
    definition:
      'An additional levy of 1–1.5% that applies to Australian residents who earn above $105,000 (singles, 2026-27) and do not hold adequate private hospital cover. The surcharge is designed to encourage higher earners to take out private health insurance, reducing pressure on the public health system.',
  },
  {
    term: 'HECS/HELP debt',
    definition:
      'A Higher Education Loan Program (HELP) debt, formerly known as HECS, is a deferred student loan for higher education fees. Repayment is mandatory once your income exceeds the minimum threshold (approximately $58,518 in 2026-27). Unlike most loans, HECS/HELP debt is not interest-bearing — it is indexed annually to CPI.',
  },
  {
    term: 'HECS/HELP repayment rate',
    definition:
      'The percentage of your repayment income you must repay toward your HECS/HELP debt each year. Rates rise in bands from 1% to 10% as income increases. The repayment is calculated on your total income, not marginally — a small income increase that crosses a threshold boundary can significantly increase your repayment amount.',
  },
  {
    term: 'Superannuation Guarantee (SG)',
    definition:
      'The mandatory employer contribution to an employee\'s superannuation fund. From 1 July 2025, the SG rate is 12% of ordinary time earnings. Employer super is paid in addition to your salary and does not reduce your take-home pay.',
  },
  {
    term: 'Salary sacrifice',
    definition:
      'An arrangement where you agree to give up part of your before-tax salary in exchange for employer-provided benefits — most commonly additional superannuation contributions. Salary sacrifice reduces your taxable income (and therefore income tax) but also reduces your take-home pay. Pre-tax super contributions via salary sacrifice are taxed at 15% in the fund, which is lower than the marginal rate for many employees.',
  },
  {
    term: 'Concessional contributions',
    definition:
      'Super contributions made with before-tax money, including employer SG contributions and salary sacrifice. These are taxed at 15% inside the super fund (instead of your marginal rate). The concessional contributions cap is $30,000 per year for 2026-27 (including employer SG contributions).',
  },
  {
    term: 'Stage 3 tax cuts',
    definition:
      'A package of income tax changes that took effect from 1 July 2026 for the 2026-27 financial year. The key change: the 19% marginal rate on income between $18,201 and $45,000 was reduced to 15%. This means most Australian workers pay less tax from 1 July 2026.',
  },
  {
    term: 'PAYG withholding',
    definition:
      'Pay As You Go (PAYG) withholding is the system by which employers deduct income tax from employees\' pay each pay period and remit it to the ATO on their behalf. The amount withheld should roughly equal your annual tax liability, resulting in a small refund or bill at tax time.',
  },
  {
    term: 'Financial year (FY)',
    definition:
      'The Australian tax year runs from 1 July to 30 June. The 2026-27 financial year (FY2026-27) runs from 1 July 2026 to 30 June 2027. Tax returns for a financial year are typically due by 31 October of the following calendar year.',
  },
  {
    term: 'Tax return',
    definition:
      'An annual declaration submitted to the ATO reconciling your income, deductions, and tax paid during the financial year. If your employer has withheld more tax than you owe (e.g. you have deductions), you receive a refund. If too little was withheld, you pay the shortfall. Most Australians can lodge their tax return online via myTax.',
  },
  {
    term: 'Tax offset',
    definition:
      'A direct reduction in the amount of tax you owe, subtracted after your income tax is calculated. Tax offsets differ from tax deductions: a deduction reduces taxable income (saving you tax at your marginal rate), while an offset reduces your tax bill dollar-for-dollar. LITO is the main tax offset for lower-income residents.',
  },
  {
    term: 'Working holiday maker',
    definition:
      'A person in Australia on a Working Holiday visa (subclass 417) or a Work and Holiday visa (subclass 462). Working holiday makers are subject to special tax rates (15% on the first $45,000, then 30–45%) with no tax-free threshold and no access to LITO. Most working holiday makers do not pay the Medicare Levy.',
  },
  {
    term: 'Non-resident for tax purposes',
    definition:
      'A person who, under Australian tax law, is not a resident of Australia. Non-residents pay tax on Australian-sourced income only, at higher rates with no tax-free threshold (30% on income up to $135,000). Non-residents do not pay the Medicare Levy. Residency for tax purposes is determined by a combination of physical presence, domicile, and the 183-day test.',
  },
  {
    term: 'ATO (Australian Taxation Office)',
    definition:
      'The Australian Government agency responsible for administering the tax and superannuation systems. The ATO sets and publishes official tax rates, thresholds, and withholding tables. For authoritative tax information, always refer to ato.gov.au.',
  },
];

export default function GlossaryPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Reference · FY 2026–27
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Australian Tax Glossary 2026-27
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
            Plain-English definitions of the key terms you&apos;ll encounter when calculating your Australian income tax.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid gap-4">
          {TERMS.map(({ term, definition }) => (
            <div
              key={term}
              id={term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
            >
              <h2 className="font-bold text-slate-900 dark:text-white mb-2">{term}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{definition}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-sm text-blue-800 dark:text-blue-300">
          <p>
            For authoritative definitions and more detail, see the{' '}
            <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">ATO website</a>.
            These definitions are simplified for general understanding and should not be relied upon as legal or tax advice.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            ← Calculate your take-home pay
          </a>
        </div>
      </div>
    </main>
  );
}
