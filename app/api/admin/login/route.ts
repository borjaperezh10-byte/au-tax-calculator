import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { BASE_URL, STATE_COOKIE } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const missing = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'ADMIN_EMAIL', 'ADMIN_SESSION_SECRET'].filter(
    (k) => !process.env[k],
  );
  if (missing.length) {
    return new NextResponse('Admin is not configured yet. Missing: ' + missing.join(', '), { status: 503 });
  }
  const state = crypto.randomBytes(16).toString('hex');
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID as string);
  url.searchParams.set('redirect_uri', BASE_URL + '/api/admin/callback');
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'openid email');
  url.searchParams.set('state', state);
  url.searchParams.set('prompt', 'select_account');
  const res = NextResponse.redirect(url);
  res.cookies.set(STATE_COOKIE, state, { httpOnly: true, secure: true, sameSite: 'lax', path: '/api/admin', maxAge: 600 });
  return res;
}
