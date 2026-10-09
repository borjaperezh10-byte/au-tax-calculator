import type { MetadataRoute } from 'next';
import { SALARY_PAGES } from '@/lib/tax';

const BASE_URL = 'https://www.auincometax.com';

// Date of the last content change. Update it when pages change so that lastmod stays truthful.
const LAST_MOD = new Date('2026-10-09T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const salaryUrls = SALARY_PAGES.map(salary => ({
    url: `${BASE_URL}/salary/${salary}`,
    lastModified: LAST_MOD,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tax-brackets`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/working-holiday-maker`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/88-days-calculator`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/how-88-days-are-counted`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/specified-work-postcodes`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/instant-1000-work-deduction`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/specified-work-evidence`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/417-vs-462-specified-work`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/third-working-holiday-visa-179-days`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/uk-working-holiday-specified-work-exemption`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/working-holiday-6-month-employer-limit`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hecs-help-repayment`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/take-home-pay-reference`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/marginal-vs-effective-tax-rate`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/tax-on-a-second-job`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/tax-return-deadline-and-refunds`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/how-australian-income-tax-works`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/salary-sacrifice-explained`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/medicare-levy-and-surcharge`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/tax-deductions-for-employees`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/working-holiday-maker-tax`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/how-to-read-your-payslip`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/methodology`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/salary-table`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/changelog`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/tax-disclaimer`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
    ...salaryUrls,
  ];
}
