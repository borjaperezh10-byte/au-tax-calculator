import { NextResponse } from 'next/server';
import { BASE_URL, SESSION_COOKIE } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const res = NextResponse.redirect(BASE_URL + '/admin/login');
  res.cookies.set(SESSION_COOKIE, '', { path: '/', maxAge: 0 });
  return res;
}
