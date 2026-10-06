import { NextResponse } from 'next/server';
import { getAdminEmail } from '@/lib/admin-auth';
import { gscConfigured, inspectUrl, SITE_ORIGIN } from '@/lib/gsc';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function GET(req: Request) {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  if (!gscConfigured()) return NextResponse.json({ error: 'not configured' }, { status: 503 });
  const url = new URL(req.url).searchParams.get('url') ?? '';
  if (!url.startsWith(SITE_ORIGIN) && !url.startsWith('http://auincometax.com') && !url.startsWith('https://auincometax.com')) {
    return NextResponse.json({ error: 'bad url' }, { status: 400 });
  }
  return NextResponse.json(await inspectUrl(url), { headers: { 'Cache-Control': 'no-store' } });
}
