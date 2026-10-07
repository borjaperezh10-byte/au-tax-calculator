/* ------------------------------------------------------------------ *
 * Eligible postcode areas for specified work (Working Holiday 417 and
 * Work and Holiday 462).
 *
 * Source: Department of Home Affairs — the eligible-postcode tables
 * (Tables 1–6) published inside the official "specified work" pages:
 *   417: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work
 *   462: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/specified-462-work
 *
 * The tables are written as inclusive ranges ("4417 to 4420") plus
 * whole-state entries ("All postcodes in Northern Territory"). They are
 * stored here as [from, to] inclusive ranges.
 *
 * STATUS: the range lists below have NOT been transcribed yet — the
 * official pages render client-side and need to be copied from a real
 * browser. Until POSTCODE_DATA_REVIEWED is set, the tracker hides its
 * postcode checker and asks the user to confirm eligibility themselves.
 * Do not publish the checker with partial data.
 * ------------------------------------------------------------------ */

export type PostcodeRange = [number, number];

export type PostcodeArea =
  | 'regional'
  | 'northern'
  | 'remoteVeryRemote'
  | 'bushfire'
  | 'disaster';

/** Date the tables below were last checked against Home Affairs (YYYY-MM-DD), or null if never. */
export const POSTCODE_DATA_REVIEWED: string | null = null;

export const POSTCODE_AREAS: Record<PostcodeArea, PostcodeRange[]> = {
  regional: [],
  northern: [],
  remoteVeryRemote: [],
  bushfire: [],
  disaster: [],
};

/**
 * Extra postcodes where tourism and hospitality work counts on top of
 * Northern, Remote and Very Remote Australia (confirmed on the official
 * 417 and 462 pages, 7 October 2026).
 */
export const TOURISM_EXTRA_POSTCODES: number[] = [4406, 4416, 4498, 7215];

export function inAreas(postcode: number, area: PostcodeArea): boolean {
  return POSTCODE_AREAS[area].some(([from, to]) => postcode >= from && postcode <= to);
}
