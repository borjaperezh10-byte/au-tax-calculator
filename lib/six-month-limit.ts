/* ------------------------------------------------------------------ *
 * Working Holiday Maker 6-month work limitation (visa condition 8547).
 *
 * Checked against Home Affairs on 7 October 2026 (page last updated
 * 21 September 2026):
 *   https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions/6-month-work-limitation
 *
 *  - Maximum 6 months' work with any one employer, any type of work
 *    (full time, part time, casual, shift or voluntary).
 *  - Measured by the months that have passed since you started working,
 *    not by the days or hours worked.
 *  - The "employer" is the business you directly work for. A labour hire
 *    agency can refer you to another business for another 6 months.
 *  - Restarts with the grant of a new WHM visa, or when a Bridging visa
 *    with condition 8547 comes into effect.
 *  - No permission needed if any of these apply:
 *      work in any one location does not exceed 6 months;
 *      plant and animal cultivation anywhere in Australia;
 *      natural disaster recovery work anywhere in Australia;
 *      agriculture, food processing, health, aged and disability care,
 *        childcare, tourism and hospitality, anywhere in Australia;
 *      fishing and pearling, tree farming and felling, construction and
 *        mining, in Northern Australia only (same postcodes as the
 *        Northern Australia specified work table).
 *  - Otherwise permission must be requested before the 6 months lapse.
 *
 * Estimate tool. It does not replace the Department's assessment.
 * ------------------------------------------------------------------ */

import { inAreas, POSTCODE_DATA_REVIEWED } from '@/lib/specified-work-postcodes';

export type LimitSector =
  | 'plant-animal'
  | 'disaster-recovery'
  | 'agriculture'
  | 'food-processing'
  | 'health'
  | 'aged-disability'
  | 'childcare'
  | 'tourism-hospitality'
  | 'fishing-pearling'
  | 'tree-farming'
  | 'construction'
  | 'mining'
  | 'other';

export const LIMIT_SECTOR_LABELS: Record<LimitSector, string> = {
  'plant-animal': 'Plant and animal cultivation (farm work)',
  'disaster-recovery': 'Natural disaster recovery work',
  agriculture: 'Agriculture',
  'food-processing': 'Food processing',
  health: 'Health',
  'aged-disability': 'Aged and disability care',
  childcare: 'Childcare',
  'tourism-hospitality': 'Tourism and hospitality',
  'fishing-pearling': 'Fishing and pearling',
  'tree-farming': 'Tree farming and felling',
  construction: 'Construction',
  mining: 'Mining',
  other: 'Any other work (office, retail, trades, etc.)',
};

const ANYWHERE: LimitSector[] = [
  'plant-animal',
  'disaster-recovery',
  'agriculture',
  'food-processing',
  'health',
  'aged-disability',
  'childcare',
  'tourism-hospitality',
];

const NORTHERN_ONLY: LimitSector[] = ['fishing-pearling', 'tree-farming', 'construction', 'mining'];

export type LimitVerdict =
  /** No permission needed in this sector, wherever you work. */
  | 'exempt-anywhere'
  /** No permission needed because the postcode is in Northern Australia. */
  | 'exempt-northern'
  /** The 6-month limit applies. */
  | 'limited'
  /** Northern-only sector but no valid postcode yet. */
  | 'unknown';

export function limitVerdict(sector: LimitSector, postcode: string): LimitVerdict {
  if (ANYWHERE.includes(sector)) return 'exempt-anywhere';
  if (!NORTHERN_ONLY.includes(sector)) return 'limited';
  const pc = Number.parseInt(postcode, 10);
  if (!POSTCODE_DATA_REVIEWED || !Number.isFinite(pc) || postcode.trim().length !== 4) return 'unknown';
  return inAreas(pc, 'northern') ? 'exempt-northern' : 'limited';
}

/**
 * Last calendar day of the 6 months that start on `start` (YYYY-MM-DD).
 * Start 15 Jan → 14 Jul. If the same day does not exist six months later
 * (31 Aug → no 31 Feb), the limit ends on the last day of that month.
 * Home Affairs does not publish a day-level rule, so this is an estimate.
 */
export function sixMonthLastDay(start: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(start);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  const check = new Date(Date.UTC(y, mo, d));
  if (check.getUTCMonth() !== mo || check.getUTCDate() !== d) return null;
  const targetMonth = mo + 6;
  const daysInTarget = new Date(Date.UTC(y, targetMonth + 1, 0)).getUTCDate();
  if (d > daysInTarget) {
    // Same day does not exist → whole of that month is inside the 6 months.
    return new Date(Date.UTC(y, targetMonth, daysInTarget)).toISOString().slice(0, 10);
  }
  return new Date(Date.UTC(y, targetMonth, d - 1)).toISOString().slice(0, 10);
}

export const SIX_MONTH_OFFICIAL = {
  limitation: 'https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions/6-month-work-limitation',
  permission:
    'https://immi.homeaffairs.gov.au/visa-conditions-subsite/Pages/permission-to-work-longer-than-6-months-with-one-employer.aspx',
  form: 'https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions/WHM-condition-8547-permission-request-form',
} as const;
