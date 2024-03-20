import { getServerSession } from 'next-auth';

import { getAccessToken } from '@/lib/sessionTokenAccessor';

import { authOptions } from '../[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    const token = await getAccessToken();

    return new Response(JSON.stringify({ token }), { status: 200 });
  }
  return new Response(null, { status: 200 });
}
