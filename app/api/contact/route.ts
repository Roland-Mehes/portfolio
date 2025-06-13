import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/fbServices/fb';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ error: 'Bot detected' }, { status: 400 });
    }

    const contactRef = collection(db, 'ContactForm');

    await addDoc(contactRef, {
      ...data,
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    console.error('Firestore Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
