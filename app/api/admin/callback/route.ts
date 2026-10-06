import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL, SESSION_COOKIE, SESSION_DAYS, STATE_COOKIE, createSessionValue } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const state = req.nextUrl.searchParams.get('state');
  const savedState = req.cookies.get(STATE_COOKIE)?.value;
  if (!code || !state || !savedState || state !== savedState) {
    return new NextResponse('Invalid login state. Go back and try again.', { status: 400 });
  }
  const clientId = process.env.GOOGLE_CLIENT_ID as string;
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirect_uri: BASE_URL + '/api/admin/callback',
      grant_type: 'authorization_code',
    }),
    cache: 'no-store',
  });
  if (!tokenRes.ok) return new NextResponse('Google login failed.', { status: 400 });
  const tok = (await tokenRes.json()) as { id_token?: string };
  if (!tok.id_token) return new NextResponse('Google login failed.', { status: 400 });
  const infoRes = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(tok.id_token), {
    cache: 'no-store',
  });
  if (!infoRes.ok) return new NextResponse('Google login failed.', { status: 400 });
  const info = (await infoRes.json()) as { aud?: string; email?: string; email_verified?: string | boolean };
  const verified = info.email_verified === true || info.email_verified === 'true';
  const admin = (process.env.ADMIN_EMAIL || '').toLowerCase();
  if (info.aud !== clientId || !verified || !info.email || info.email.toLowerCase() !== admin) {
    return new NextResponse('Not authorised.', { status: 403 });
  }
  const value = createSessionValue(info.email);
  if (!value) return new NextResponse('Admin is not configured yet.', { status: 503 });
  const res = NextResponse.redirect(BASE_URL + '/admin');
  res.cookies.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DAYS * 24 * 3600,
  });
  res.cookies.set(STATE_COOKIE, '', { path: '/api/admin', maxAge: 0 });
  return res;
}
