import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/fbServices/firebase-admin';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    await adminAuth.verifyIdToken(token);

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await adminAuth.createSessionCookie(token, {
      expiresIn,
    });

    const options = [
      `Max-Age=${expiresIn / 1000}`,
      'HttpOnly',
      'Path=/',
      process.env.NODE_ENV === 'production' ? 'Secure' : '',
    ]
      .filter(Boolean)
      .join('; ');

    const res = NextResponse.json({ ok: true });
    res.headers.set('Set-Cookie', `__session=${sessionCookie}; ${options}`);

    return res;
  } catch (error) {
    console.error('Session creation failed:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
