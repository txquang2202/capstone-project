import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const caches: Record<string, string> = {};

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  try {
    const fileLocation = path.join(
      process.cwd(),
      'public',
      searchParams.get('url') as string
    );
    if (caches[fileLocation]) {
      return NextResponse.json(caches[fileLocation]);
    }
    const fileContents = fs.readFileSync(fileLocation, 'utf8');
    caches[fileLocation] = fileContents;
    return NextResponse.json(fileContents);
  } catch (error) {
    console.error(`Get static data failed.`, error);

    return null;
  }
}
