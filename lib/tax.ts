// Australia Income Tax 2026-27
// Source: ATO — effective 1 July 2026
// Last verified: July 2026 | ato.gov.au

export interface TaxResult {
  grossIncome: number;
  taxableIncome: number;
  incomeTax: number;
  lito: number;
  netIncomeTax: number;
  medicareLevy: number;
  medicareLevySurcharge: number;
  hecsRepayment: number;
  superEmployer: number;
  totalDeductions: number;
  netIncome: number;
  effectiveRate: number;
  marginalRate: number;
}

export type Period = 'annual' | 'monthly' | 'fortnightly' | 'weekly' | 'daily' | 'hourly';
export type ResidencyType = 'resident' | 'non-resident' | 'working-holiday';

export const PERIOD_DIVISORS: Record<Period, number> = {
  annual:      1,
  monthly:     12,
  fortnightly: 26,
  weekly:      52,
  daily:       260,   // 52 weeks × 5 days
  hourly:      1_976, // 52 weeks × 38 hours (standard AU full-time)
};

export const PERIOD_LABELS: Record<Period, string> = {
  annual:      'per year',
  monthly:     'per month',
  fortnightly: 'per fortnight',
  weekly:      'per week',
  daily:       'per day',
  hourly:      'per hour',
};

// ─── RESIDENT INCOME TAX (before offsets) ─────────────────────────────────────
// Source: ATO tax rates 2026-27 | ato.gov.au/tax-rates-and-codes
export function calcResidentIncomeTax(income: number): number {
  if (income <= 18_200)  return 0;
  if (income <= 45_000)  return (income - 18_200) * 0.15;
  if (income <= 135_000) return 4_020 + (income - 45_000) * 0.30;
  if (income <= 190_000) return 31_020 + (income - 135_000) * 0.37;
  return 51_370 + (income - 190_000) * 0.45;
}

// ─── NON-RESIDENT INCOME TAX ──────────────────────────────────────────────────
// Source: ATO non-resident tax rates 2026-27
export function calcNonResidentIncomeTax(income: number): number {
  if (income <= 135_000) return income * 0.30;
  if (income <= 190_000) return 40_500 + (income - 135_000) * 0.37;
  return 60_850 + (income - 190_000) * 0.45;
}

// ─── WORKING HOLIDAY MAKER INCOME TAX ────────────────────────────────────────
// Source: ATO Schedule 15 – Tax table for working holiday makers
// Applies to visa subclass 417 (Working Holiday) and 462 (Work and Holiday)
// No tax-free threshold. No LITO. No Medicare Levy (in most cases).
// Stage 3 cuts apply from 1 July 2026: $45,001–$135,000 rate reduced to 30%.
export function calcWHMIncomeTax(income: number): number {
  if (income <= 45_000)  return income * 0.15;
  if (income <= 135_000) return 6_750 + (income - 45_000) * 0.30;
  if (income <= 190_000) return 33_750 + (income - 135_000) * 0.37;
  return 54_100 + (income - 190_000) * 0.45;
}

// ─── COMBINED INCOME TAX DISPATCHER ──────────────────────────────────────────
export function calcIncomeTax(income: number, residency: ResidencyType): number {
  switch (residency) {
    case 'non-resident':    return calcNonResidentIncomeTax(income);
    case 'working-holiday': return calcWHMIncomeTax(income);
    default:                return calcResidentIncomeTax(income);
  }
}

// ─── LOW INCOME TAX OFFSET (LITO) ─────────────────────────────────────────────
// Source: ATO LITO 2026-27 — residents only
// Max $700 at income ≤ $37,500; phases out to nil at $66,667
export function calcLITO(income: number, residency: ResidencyType): number {
  if (residency !== 'resident') return 0;
  if (income <= 37_500) return 700;
  if (income <= 45_000) return 700 - (income - 37_500) * 0.05;
  if (income <= 66_667) return 325 - (income - 45_000) * 0.015;
  return 0;
}

// ─── MEDICARE LEVY ─────────────────────────────────────────────────────────────
// Source: ATO Medicare levy 2026-27
// Residents only. WHMs are generally NOT entitled to Medicare.
// Shade-in threshold: $28,011 → $35,014 (2026-27 estimated)
export function calcMedicareLevy(income: number, residency: ResidencyType): number {
  if (residency !== 'resident') return 0;
  if (income <= 28_011) return 0;
  if (income <= 35_014) return (income - 28_011) * 0.10;
  return income * 0.02;
}

// ─── MEDICARE LEVY SURCHARGE ──────────────────────────────────────────────────
// Source: ATO MLS thresholds 2026-27
// Applies to residents earning >$105,000 without private hospital cover
export function calcMLS(
  income: number,
  residency: ResidencyType,
  hasPrivateHealth: boolean,
): number {
  if (residency !== 'resident' || hasPrivateHealth || income <= 105_000) return 0;
  if (income <= 123_000) return income * 0.01;
  if (income <= 164_000) return income * 0.0125;
  return income * 0.015;
}

// ─── HECS/HELP REPAYMENT ──────────────────────────────────────────────────────
// Source: ATO HELP repayment rates 2026-27 (estimated, pending ATO confirmation)
// Repayment is a % of *total* repayment income — not marginal.
// Thresholds estimated from 2024-25 bands indexed by CPI (~5%/year)
// ⚠ PENDING VALIDATION: confirm final thresholds with ATO once published
const HECS_BANDS: [number, number][] = [
  [0,        0.000],
  [58_518,   0.010],
  [67_564,   0.020],
  [71_620,   0.025],
  [75_914,   0.030],
  [80_470,   0.035],
  [85_297,   0.040],
  [89_064,   0.045],
  [94_043,   0.050],
  [103_022,  0.055],
  [110_263,  0.060],
  [117_506,  0.065],
  [120_521,  0.070],
  [124_990,  0.075],
  [129_778,  0.080],
  [134_968,  0.085],
  [140_458,  0.090],
  [146_416,  0.095],
  [152_573,  0.100],
];

export function calcHECS(income: number): number {
  let rate = 0;
  for (const [threshold, r] of HECS_BANDS) {
    if (income >= threshold) rate = r;
    else break;
  }
  return Math.round(income * rate);
}

// ─── MARGINAL RATE ─────────────────────────────────────────────────────────────
export function getMarginalRate(income: number, residency: ResidencyType): number {
  if (residency === 'working-holiday') {
    if (income <= 45_000)  return 15;
    if (income <= 135_000) return 30;
    if (income <= 190_000) return 37;
    return 45;
  }
  if (residency === 'non-resident') {
    if (income <= 135_000) return 30;
    if (income <= 190_000) return 37;
    return 45;
  }
  // Resident
  if (income <= 18_200)  return 0;
  if (income <= 45_000)  return 15;
  if (income <= 135_000) return 30;
  if (income <= 190_000) return 37;
  return 45;
}

// ─── FULL TAX CALCULATION ─────────────────────────────────────────────────────
/**
 * @param salary         Annual gross salary (before salary sacrifice)
 * @param residency      Tax residency type
 * @param hecs           Has HECS/HELP debt?
 * @param privateHealth  Has private hospital cover? (affects MLS)
 * @param workDeduction  Work-related deduction amount (reduces taxable income)
 * @param salarySacrifice Pre-tax super/salary sacrifice (reduces taxable income + gross super)
 */
export function calculate(
  salary: number,
  residency: ResidencyType | boolean, // boolean kept for backwards compatibility
  hecs: boolean,
  privateHealth: boolean,
  workDeduction = 0,
  salarySacrifice = 0,
): TaxResult {
  // Backwards compatibility: boolean true = 'resident', false = 'non-resident'
  const res: ResidencyType =
    typeof residency === 'boolean'
      ? (residency ? 'resident' : 'non-resident')
      : residency;

  const taxableIncome  = Math.max(0, salary - workDeduction - salarySacrifice);
  const incomeTax      = calcIncomeTax(taxableIncome, res);
  const lito           = calcLITO(taxableIncome, res);
  const netIncomeTax   = Math.max(0, incomeTax - lito);
  const medicareLevy   = calcMedicareLevy(salary, res);
  const mls            = calcMLS(salary, res, privateHealth);
  const hecsRepayment  = hecs ? calcHECS(salary) : 0;
  const superEmployer  = salary * 0.12;
  const superSacrifice = salarySacrifice; // already pre-tax, goes into super
  const totalDeductions = netIncomeTax + medicareLevy + mls + hecsRepayment;
  const netIncome      = salary - totalDeductions - salarySacrifice;
  const effectiveRate  = salary > 0 ? (totalDeductions / salary) * 100 : 0;

  return {
    grossIncome: salary,
    taxableIncome,
    incomeTax,
    lito,
    netIncomeTax,
    medicareLevy,
    medicareLevySurcharge: mls,
    hecsRepayment,
    superEmployer: superEmployer + superSacrifice,
    totalDeductions,
    netIncome,
    effectiveRate,
    marginalRate: getMarginalRate(taxableIncome, res),
  };
}

// ─── FORMAT & UTILITIES ───────────────────────────────────────────────────────
export function fmtAUD(n: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function forPeriod(annual: number, period: Period): number {
  return annual / PERIOD_DIVISORS[period];
}

/** Common salary amounts for programmatic pages */
export const SALARY_PAGES = [
  30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000,
  75000, 80000, 85000, 90000, 95000, 100000, 110000, 120000,
  130000, 140000, 150000, 160000, 180000, 200000, 250000, 300000,
];

/** 2026-27 resident bracket summary (for display) */
export const RESIDENT_BRACKETS_2627 = [
  { range: '$0 – $18,200',        rate: '0%',  note: 'Tax-free threshold' },
  { range: '$18,201 – $45,000',   rate: '15%', note: 'Reduced from 19% (Stage 3 cuts)' },
  { range: '$45,001 – $135,000',  rate: '30%', note: '' },
  { range: '$135,001 – $190,000', rate: '37%', note: '' },
  { range: '$190,001+',           rate: '45%', note: 'Plus 2% Medicare Levy' },
];

/** 2025-26 resident bracket summary (for comparison) */
export const RESIDENT_BRACKETS_2526 = [
  { range: '$0 – $18,200',        rate: '0%',  note: 'Tax-free threshold' },
  { range: '$18,201 – $45,000',   rate: '19%', note: 'Now 15% from 1 July 2026' },
  { range: '$45,001 – $135,000',  rate: '30%', note: '' },
  { range: '$135,001 – $190,000', rate: '37%', note: '' },
  { range: '$190,001+',           rate: '45%', note: '' },
];

/** WHM bracket summary (for display) */
export const WHM_BRACKETS_2627 = [
  { range: '$0 – $45,000',        rate: '15%', note: 'Flat rate, no tax-free threshold' },
  { range: '$45,001 – $135,000',  rate: '30%', note: 'Reduced from 32.5% (Stage 3 cuts)' },
  { range: '$135,001 – $190,000', rate: '37%', note: '' },
  { range: '$190,001+',           rate: '45%', note: '' },
];
