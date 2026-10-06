import crypto from 'crypto';

export const SITE_PROPERTY = process.env.GSC_SITE || 'sc-domain:auincometax.com';
export const SITE_ORIGIN = process.env.ADMIN_BASE_URL || 'https://www.auincometax.com';

type ServiceAccount = { client_email: string; private_key: string };

function getServiceAccount(): ServiceAccount | null {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    const j = JSON.parse(raw) as ServiceAccount;
    if (!j.client_email || !j.private_key) return null;
    return { client_email: j.client_email, private_key: j.private_key };
  } catch {
    return null;
  }
}

export function gscConfigured(): boolean {
  return getServiceAccount() !== null;
}

let cached: { token: string; exp: number } | null = null;

async function getToken(): Promise<string> {
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;
  const sa = getServiceAccount();
  if (!sa) throw new Error('GSC_SERVICE_ACCOUNT_JSON is missing or not valid JSON');
  const now = Math.floor(Date.now() / 1000);
  const enc = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned =
    enc({ alg: 'RS256', typ: 'JWT' }) +
    '.' +
    enc({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/webmasters.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    });
  const signature = crypto.createSign('RSA-SHA256').update(unsigned).sign(sa.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: unsigned + '.' + signature,
    }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Google token error ' + res.status + ': ' + (await res.text()).slice(0, 200));
  const j = (await res.json()) as { access_token: string; expires_in: number };
  cached = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return j.access_token;
}

export type Row = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number };

export async function searchAnalytics(body: object): Promise<Row[]> {
  const token = await getToken();
  const res = await fetch(
    'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(SITE_PROPERTY) + '/searchAnalytics/query',
    {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    },
  );
  if (!res.ok) throw new Error('Search Console API ' + res.status + ': ' + (await res.text()).slice(0, 300));
  const j = (await res.json()) as { rows?: Row[] };
  return j.rows ?? [];
}

export type Inspection = {
  url: string;
  verdict: string;
  coverage: string;
  lastCrawl: string;
  error?: string;
};

export async function inspectUrl(url: string): Promise<Inspection> {
  try {
    const token = await getToken();
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE_PROPERTY, languageCode: 'en-AU' }),
      cache: 'no-store',
    });
    if (!res.ok) return { url, verdict: 'ERROR', coverage: '', lastCrawl: '', error: String(res.status) };
    const j = (await res.json()) as {
      inspectionResult?: { indexStatusResult?: { verdict?: string; coverageState?: string; lastCrawlTime?: string } };
    };
    const r = j.inspectionResult?.indexStatusResult;
    return {
      url,
      verdict: r?.verdict ?? 'UNKNOWN',
      coverage: r?.coverageState ?? '',
      lastCrawl: r?.lastCrawlTime ?? '',
    };
  } catch (e) {
    return { url, verdict: 'ERROR', coverage: '', lastCrawl: '', error: e instanceof Error ? e.message : 'error' };
  }
}

export async function sitemapUrls(): Promise<string[]> {
  const res = await fetch(SITE_ORIGIN + '/sitemap.xml', { cache: 'no-store' });
  if (!res.ok) return [];
  const xml = await res.text();
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
}

export function isoDaysAgo(n: number): string {
  return new Date(Date.now() - n * 86_400_000).toISOString().slice(0, 10);
}
