/* ------------------------------------------------------------------ *
 * Specified work day counter — Working Holiday (417) and Work and
 * Holiday (462) visas.
 *
 * Rules checked against the Department of Home Affairs pages on
 * 7 October 2026:
 *   417: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work
 *   462: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work
 *   Third 417 (evidence): https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/third-working-holiday-417
 *
 *  - 88 days for a second visa, 179 for a third. These are CALENDAR days,
 *    including weekends or equivalent rest days.
 *  - Full-time work counts every calendar day of the period.
 *  - Part-time work counts the proportion of full-time over the calendar
 *    period (official example: 5 days a fortnight for 122 calendar days
 *    = half = 61 days). Home Affairs gives examples, not a formula, so
 *    the part-time result is labelled as an estimate.
 *  - Never more than one day per calendar day, even across employers.
 *  - Unpaid days (e.g. stood down for bad weather) do not count.
 *  - Volunteer recovery work in declared bushfire / disaster areas
 *    counts one day for each day actually worked.
 *  - Third-visa work must be on or after 1 July 2019.
 *  - UK passport holders applying for a second or third 417 from
 *    1 July 2024 do not need specified work.
 *
 * This is an estimate tool. It does not replace the Department's
 * assessment.
 * ------------------------------------------------------------------ */

import {
  POSTCODE_DATA_REVIEWED,
  TOURISM_EXTRA_POSTCODES,
  inAreas,
  type PostcodeArea,
} from '@/lib/specified-work-postcodes';

export type Subclass = '417' | '462';
export type Target = 88 | 179;

export type Industry =
  | 'plant-animal'
  | 'construction'
  | 'fishing-pearling'
  | 'tree-farming'
  | 'mining'
  | 'tourism-hospitality'
  | 'bushfire-recovery'
  | 'disaster-recovery'
  | 'covid-health';

export const INDUSTRY_LABELS: Record<Industry, string> = {
  'plant-animal': 'Plant and animal cultivation (farm work)',
  construction: 'Construction',
  'fishing-pearling': 'Fishing and pearling',
  'tree-farming': 'Tree farming and felling',
  mining: 'Mining',
  'tourism-hospitality': 'Tourism and hospitality',
  'bushfire-recovery': 'Bushfire recovery work',
  'disaster-recovery': 'Natural disaster recovery work',
  'covid-health': 'Critical COVID-19 work in healthcare',
};

export type WorkMode = 'full-time' | 'part-time' | 'volunteer';

export interface Job {
  id: string;
  employer: string;
  abn: string;
  industry: Industry;
  postcode: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD, inclusive
  mode: WorkMode;
  /** Part-time only: days you work per fortnight. */
  daysPerFortnight: number;
  /** Part-time only: days a full-time worker in this job works per fortnight (usually 10). */
  fullTimeDaysPerFortnight: number;
  /** Unpaid days inside the period (e.g. stood down for weather). Not counted. */
  unpaidDays: number;
  /** Volunteer only: days actually worked. */
  volunteerDaysWorked: number;
}

export interface Settings {
  subclass: Subclass;
  target: Target;
  ukPassport: boolean;
  visaExpiry: string; // YYYY-MM-DD or ''
}

export type Severity = 'error' | 'warning' | 'info';

export interface Notice {
  severity: Severity;
  text: string;
  jobId?: string;
}

export interface JobResult {
  jobId: string;
  calendarDays: number;
  credited: number; // after the one-day-per-calendar-day cap
  estimate: boolean;
}

export interface TrackerResult {
  exempt: boolean;
  total: number;
  remaining: number;
  jobs: JobResult[];
  notices: Notice[];
  projectedCompletion: string | null;
}

/* ---------------------------- date helpers ---------------------------- */

const DAY_MS = 86_400_000;

export function parseDate(s: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const t = Date.parse(`${s}T00:00:00Z`);
  return Number.isFinite(t) ? t : null;
}

export function formatDate(t: number): string {
  return new Date(t).toISOString().slice(0, 10);
}

/* ------------------------- eligibility by area ------------------------ */

/** Areas where each industry counts, per subclass (official pages, 7 Oct 2026). */
const AREAS_BY_INDUSTRY: Record<Subclass, Partial<Record<Industry, PostcodeArea[]>>> = {
  '417': {
    'plant-animal': ['regional'],
    construction: ['regional'],
    'fishing-pearling': ['regional'],
    'tree-farming': ['regional'],
    mining: ['regional'],
    'tourism-hospitality': ['northern', 'remoteVeryRemote'],
    'bushfire-recovery': ['bushfire'],
    'disaster-recovery': ['disaster'],
  },
  '462': {
    'plant-animal': ['northern', 'regional'],
    construction: ['northern', 'regional'],
    'fishing-pearling': ['northern'],
    'tree-farming': ['northern'],
    'tourism-hospitality': ['northern', 'remoteVeryRemote'],
    'bushfire-recovery': ['bushfire'],
    'disaster-recovery': ['disaster'],
  },
};

export type PostcodeVerdict = 'eligible' | 'not-eligible' | 'industry-not-allowed' | 'unknown';

/** Whether a postcode counts for an industry on a subclass. 'unknown' while postcode data is not loaded. */
export function postcodeVerdict(subclass: Subclass, industry: Industry, postcode: string): PostcodeVerdict {
  if (industry === 'covid-health') return 'eligible'; // anywhere in Australia
  const areas = AREAS_BY_INDUSTRY[subclass][industry];
  if (!areas) return 'industry-not-allowed'; // e.g. mining on a 462
  const pc = Number.parseInt(postcode, 10);
  if (!Number.isFinite(pc) || postcode.trim().length !== 4) return 'unknown';
  if (industry === 'tourism-hospitality' && TOURISM_EXTRA_POSTCODES.includes(pc)) return 'eligible';
  if (!POSTCODE_DATA_REVIEWED) return 'unknown';
  return areas.some(a => inAreas(pc, a)) ? 'eligible' : 'not-eligible';
}

/* ------------------------------ counting ------------------------------ */

/** Credit per calendar day for one job, before the cross-job cap. */
function dailyCredit(job: Job, calendarDays: number): number {
  if (calendarDays <= 0) return 0;
  if (job.mode === 'volunteer') {
    return Math.min(Math.max(job.volunteerDaysWorked, 0), calendarDays) / calendarDays;
  }
  const base =
    job.mode === 'full-time'
      ? 1
      : job.fullTimeDaysPerFortnight > 0
        ? Math.min(Math.max(job.daysPerFortnight, 0) / job.fullTimeDaysPerFortnight, 1)
        : 0;
  const unpaid = Math.min(Math.max(job.unpaidDays, 0), calendarDays);
  return base * ((calendarDays - unpaid) / calendarDays);
}

export function computeTracker(settings: Settings, jobs: Job[], today: string): TrackerResult {
  const notices: Notice[] = [];

  if (settings.ukPassport && settings.subclass === '417') {
    notices.push({
      severity: 'info',
      text: 'UK passport holders applying for a second or third Working Holiday visa (subclass 417) from 1 July 2024 do not need to complete specified work.',
    });
  }

  // Calendar-day ledger: each date can hold at most one credited day.
  const ledger = new Map<number, number>();
  const raw: { job: Job; start: number; days: number; perDay: number }[] = [];

  for (const job of jobs) {
    const s = parseDate(job.start);
    const e = parseDate(job.end);
    if (s === null || e === null) {
      notices.push({ severity: 'error', text: 'Add a valid start and end date.', jobId: job.id });
      continue;
    }
    if (e < s) {
      notices.push({ severity: 'error', text: 'The end date is before the start date.', jobId: job.id });
      continue;
    }
    const days = Math.round((e - s) / DAY_MS) + 1;
    raw.push({ job, start: s, days, perDay: dailyCredit(job, days) });

    const verdict = postcodeVerdict(settings.subclass, job.industry, job.postcode);
    if (verdict === 'industry-not-allowed') {
      notices.push({
        severity: 'error',
        text: `${INDUSTRY_LABELS[job.industry]} does not count as specified work on a subclass ${settings.subclass} visa.`,
        jobId: job.id,
      });
    } else if (verdict === 'not-eligible') {
      notices.push({
        severity: 'error',
        text: `Postcode ${job.postcode} is not on the eligible list for ${INDUSTRY_LABELS[job.industry].toLowerCase()} on a subclass ${settings.subclass} visa.`,
        jobId: job.id,
      });
    }

    if (settings.target === 179 && s < Date.parse('2019-07-01T00:00:00Z')) {
      notices.push({
        severity: 'warning',
        text: 'Work before 1 July 2019 does not count towards a third visa.',
        jobId: job.id,
      });
    }
    if (job.mode !== 'volunteer' && !job.abn.trim()) {
      notices.push({
        severity: 'warning',
        text: 'Keep your employer’s details and payslips — the Department can contact employers to check your work.',
        jobId: job.id,
      });
    }
  }

  // Sort by start so earlier jobs fill each date first (order does not change the capped total).
  raw.sort((a, b) => a.start - b.start);
  const credited = new Map<string, number>();
  let overlapped = false;

  for (const { job, start, days, perDay } of raw) {
    let sum = 0;
    for (let i = 0; i < days; i++) {
      const d = start + i * DAY_MS;
      const used = ledger.get(d) ?? 0;
      const add = Math.min(perDay, 1 - used);
      if (add < perDay) overlapped = true;
      if (add > 0) {
        ledger.set(d, used + add);
        sum += add;
      }
    }
    credited.set(job.id, sum);
  }

  if (overlapped) {
    notices.push({
      severity: 'info',
      text: 'Some jobs overlap. You can never count more than one day per calendar day, even with several employers.',
    });
  }

  const total = Math.floor([...ledger.values()].reduce((a, b) => a + b, 0) + 1e-9);
  const exempt = settings.ukPassport && settings.subclass === '417';
  const remaining = Math.max(settings.target - total, 0);

  // Projection: if the remaining days were worked at the pace of the
  // job that ends last, starting the day after it ends (or today, if later).
  let projectedCompletion: string | null = null;
  const t = parseDate(today);
  const last = [...raw].sort((a, b) => a.start + a.days * DAY_MS - (b.start + b.days * DAY_MS)).pop();
  if (!exempt && remaining > 0 && last && last.perDay > 0 && t !== null) {
    const lastEnd = last.start + (last.days - 1) * DAY_MS;
    const from = Math.max(lastEnd + DAY_MS, t);
    projectedCompletion = formatDate(from + (Math.ceil(remaining / last.perDay) - 1) * DAY_MS);
  }

  const expiry = parseDate(settings.visaExpiry);
  if (!exempt && expiry !== null && projectedCompletion && (parseDate(projectedCompletion) ?? 0) > expiry) {
    notices.push({
      severity: 'warning',
      text: 'At your current pace you would finish after your visa expires.',
    });
  }

  if (raw.some(r => r.job.mode === 'part-time')) {
    notices.push({
      severity: 'info',
      text: 'Part-time days are an estimate: Home Affairs counts the proportion of full-time work over the calendar period, and gives examples rather than a formula.',
    });
  }

  return {
    exempt,
    total,
    remaining,
    jobs: raw.map(r => ({
      jobId: r.job.id,
      calendarDays: r.days,
      credited: credited.get(r.job.id) ?? 0,
      estimate: r.job.mode === 'part-time',
    })),
    notices,
    projectedCompletion,
  };
}

/** Official Home Affairs pages (checked 7 October 2026). */
export const OFFICIAL = {
  specified417: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work',
  specified462: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work',
  second417: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-working-holiday-417',
  third417: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/third-working-holiday-417',
  second462: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/second-work-holiday-462',
  third462: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/third-work-and-holiday-462',
  conditions: 'https://immi.homeaffairs.gov.au/what-we-do/whm-program/specified-work-conditions',
} as const;
