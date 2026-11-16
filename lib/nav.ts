export interface NavLink {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  /** Link shown at the bottom of the dropdown (e.g. "All guides"). */
  all?: NavLink;
  links: NavLink[];
}

/** Header navigation: grouped so the guides are reachable from every page. */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Calculators',
    links: [
      { href: '/', label: 'Income Tax Calculator' },
      { href: '/working-holiday-maker', label: 'Working Holiday Tax' },
      { href: '/88-days-calculator', label: '88 Days Tracker' },
      { href: '/hecs-help-repayment', label: 'HECS-HELP Repayment' },
    ],
  },
  {
    label: 'Guides',
    all: { href: '/guides', label: 'All guides →' },
    links: [
      { href: '/guides/how-australian-income-tax-works', label: 'How Australian income tax works' },
      { href: '/guides/medicare-levy-and-surcharge', label: 'Medicare levy & surcharge' },
      { href: '/guides/payday-super', label: 'Payday Super for employees' },
      { href: '/guides/working-holiday-maker-tax', label: 'Working holiday maker tax' },
      { href: '/guides/how-88-days-are-counted', label: 'How the 88 days are counted' },
      { href: '/guides/departing-australia-super-dasp', label: 'Claiming super when you leave (DASP)' },
    ],
  },
  {
    label: 'Reference',
    links: [
      { href: '/tax-brackets', label: 'Tax Brackets 2026-27' },
      { href: '/salary-table', label: 'Salary & Tax Table' },
      { href: '/glossary', label: 'Tax Glossary' },
      { href: '/methodology', label: 'Methodology' },
      { href: '/leaving-australia-money-kit', label: 'Leaving Australia Money Kit' },
    ],
  },
];

/** Plain links shown after the groups. */
export const NAV_TOP_LINKS: NavLink[] = [{ href: '/about', label: 'About' }];
