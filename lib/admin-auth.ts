import crypto from 'crypto';
import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'admin_session';
export const STATE_COOKIE = 'admin_oauth_state';
export const SESSION_DAYS = 7;
export const BASE_URL = process.env.ADMIN_BASE_URL || 'https://www.auincometax.com';

function sign(payload: string): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) return null;
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
}

export function createSessionValue(email: string): string | null {
  const exp = Date.now() + SESSION_DAYS * 24 * 3600 * 1000;
  const payload = Buffer.from(JSON.stringify({ email: email.toLowerCase(), exp })).toString('base64url');
  const sig = sign(payload);
  return sig ? payload + '.' + sig : null;
}

export function verifySessionValue(value?: string): string | null {
  if (!value) return null;
  const [payload, sig] = value.split('.');
  if (!payload || !sig) return null;
  const expected = sign(payload);
  if (!expected) return null;
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString()) as { email?: string; exp?: number };
    const admin = (process.env.ADMIN_EMAIL || '').toLowerCase();
    if (!admin || typeof data.exp !== 'number' || data.exp < Date.now()) return null;
    if (data.email !== admin) return null;
    return data.email;
  } catch {
    return null;
  }
}

export async function getAdminEmail(): Promise<string | null> {
  const store = await cookies();
  return verifySessionValue(store.get(SESSION_COOKIE)?.value);
}
