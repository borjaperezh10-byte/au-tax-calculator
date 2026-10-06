import { calculate, fmtAUD } from '@/lib/tax';

type Row = { label: string; note: string; tax: number; net: number };

const th = 'px-3 py-2 font-semibold text-slate-600 dark:text-slate-300';
const td = 'px-3 py-2 text-slate-700 dark:text-slate-300';

/**
 * Same salary, different situations. Every figure comes from calculate(), so
 * this block is different on every /salary/[amount] page and stays in step
 * with lib/tax.ts when the rates change.
 */
export default function SalaryScenarios({ salary }: { salary: number }) {
  const k = (salary / 1000).toFixed(0);
  const sal = salary.toLocaleString('en-AU');

  const base = calculate(salary, 'resident', false, true);
  const noCover = calculate(salary, 'resident', false, false);
  const withHecs = calculate(salary, 'resident', true, true);
  const whm = calculate(salary, 'working-holiday', false, true);
  const nonRes = calculate(salary, 'non-resident', false, true);
  const sacrificed = calculate(salary, 'resident', false, true, 0, 5000);

  const rows: Row[] = [
    { label: 'Australian resident', note: 'Private hospital cover, no HELP debt', tax: base.totalDeductions, net: base.netIncome },
  ];
  if (noCover.medicareLevySurcharge > 0) {
    rows.push({ label: 'Resident, no private hospital cover', note: 'Medicare Levy Surcharge applies', tax: noCover.totalDeductions, net: noCover.netIncome });
  }
  if (withHecs.hecsRepayment > 0) {
    rows.push({ label: 'Resident with a HECS-HELP debt', note: 'Compulsory repayment of ' + fmtAUD(withHecs.hecsRepayment), tax: withHecs.totalDeductions, net: withHecs.netIncome });
  }
  rows.push({ label: 'Working holiday maker', note: '417 / 462 visa, no tax-free threshold', tax: whm.totalDeductions, net: whm.netIncome });
  rows.push({ label: 'Foreign resident for tax', note: 'No tax-free threshold, no Medicare levy', tax: nonRes.totalDeductions, net: nonRes.netIncome });

  const whmGap = base.netIncome - whm.netIncome;
  const sacrificeDrop = base.netIncome - sacrificed.netIncome;
  const sacrificeTaxSaved = base.totalDeductions - sacrificed.totalDeductions;

  const raises = [5000, 10000].map((inc) => {
    const r = calculate(salary + inc, 'resident', false, true);
    return { inc, gross: salary + inc, net: r.netIncome, extra: r.netIncome - base.netIncome };
  });

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        What ${k},000 pays in different situations
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        The same ${sal} salary gives a different take-home pay depending on your tax residency and circumstances. FY 2026–27, before any deductions.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800 text-left">
              <th className={th}>Situation</th>
              <th className={th + ' text-right'}>Tax and levies</th>
              <th className={th + ' text-right'}>Take-home per year</th>
              <th className={th + ' text-right'}>Per fortnight</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-slate-200 dark:border-slate-700">
                <td className={td}>
                  <span className="font-medium text-slate-900 dark:text-white">{row.label}</span>
                  <br />
                  <span className="text-xs text-slate-400">{row.note}</span>
                </td>
                <td className={td + ' font-mono tabular-nums text-right'}>{fmtAUD(row.tax)}</td>
                <td className={td + ' font-mono tabular-nums text-right font-semibold text-slate-900 dark:text-white'}>{fmtAUD(row.net)}</td>
                <td className={td + ' font-mono tabular-nums text-right'}>{fmtAUD(row.net / 26)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
        {whmGap > 0
          ? 'A working holiday maker on the same salary keeps about ' + fmtAUD(whmGap) + ' a year less than a resident, because the 15% rate starts from the first dollar. '
          : 'A working holiday maker on the same salary takes home about ' + fmtAUD(Math.abs(whmGap)) + ' a year more than a resident, because they do not pay the Medicare levy. '}
        See the{' '}
        <a href="/working-holiday-maker" className="text-blue-600 dark:text-blue-400 hover:underline">working holiday maker calculator</a>{' '}
        for the full workings, and the{' '}
        <a href="/glossary" className="text-blue-600 dark:text-blue-400 hover:underline">tax glossary</a>{' '}
        if any of the terms above are unfamiliar.
      </p>

      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-2">
        If you salary sacrifice $5,000 into super
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        Putting $5,000 of a ${sal} salary into super before tax lowers your take-home pay by only{' '}
        <strong className="text-slate-900 dark:text-white">{fmtAUD(sacrificeDrop)}</strong>, because your tax and levies fall by{' '}
        <strong className="text-slate-900 dark:text-white">{fmtAUD(sacrificeTaxSaved)}</strong>. The fund generally pays 15% contributions tax on the $5,000, so about $4,250 reaches your balance. If you have a HELP debt, your repayment income still counts the sacrificed amount.
        The{' '}
        <a href="/guides/salary-sacrifice-explained" className="text-blue-600 dark:text-blue-400 hover:underline">salary sacrifice guide</a>{' '}
        explains the caps and the catches.
      </p>

      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-2">
        What a pay rise is worth from ${sal}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800 text-left">
              <th className={th}>Raise</th>
              <th className={th + ' text-right'}>New salary</th>
              <th className={th + ' text-right'}>New take-home</th>
              <th className={th + ' text-right'}>Extra in your pocket</th>
            </tr>
          </thead>
          <tbody>
            {raises.map((r) => (
              <tr key={r.inc} className="border-t border-slate-200 dark:border-slate-700">
                <td className={td}>+{fmtAUD(r.inc)}</td>
                <td className={td + ' font-mono tabular-nums text-right'}>{fmtAUD(r.gross)}</td>
                <td className={td + ' font-mono tabular-nums text-right'}>{fmtAUD(r.net)}</td>
                <td className={td + ' font-mono tabular-nums text-right font-semibold text-slate-900 dark:text-white'}>{fmtAUD(r.extra)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400 mt-3">
        Resident rates with private hospital cover and no HELP debt. The{' '}
        <a href="/guides/marginal-vs-effective-tax-rate" className="text-blue-500 hover:underline">marginal vs effective rate guide</a>{' '}
        explains why a raise never leaves you worse off.
      </p>
    </section>
  );
}
