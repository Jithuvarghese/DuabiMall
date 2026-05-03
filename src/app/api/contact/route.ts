import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In this development build we simply echo back the payload.
    // A real integration would forward this to an email service or CRM.
    return NextResponse.json({ ok: true, received: body });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
