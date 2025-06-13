import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out' });

  // Delete the __session cookie
  response.cookies.set('__session', '', {
    maxAge: 0,
    path: '/',
  });

  return response;
}
