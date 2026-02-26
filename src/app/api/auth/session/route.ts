import { NextRequest, NextResponse } from 'next/server';
import { auth, getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  // Return consistent structure: always have a user property (null if no session)
  return NextResponse.json({
    user: session?.user ?? null,
    session: session ?? null,
  });
}
