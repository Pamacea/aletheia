import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from '@/lib/actions/auth';
import { updateBio } from '@/lib/actions/profile';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const bio = formData.get('bio') as string;

    if (bio) {
      await updateBio(session.user.id, bio);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
