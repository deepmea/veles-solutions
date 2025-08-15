import { NextResponse } from 'next/server';

const verificationFiles: Record<string, string> = {
  'mailru-domainFSg7hCoMdzA3lbEd.html': 'mailru-domain: FSg7hCoMdzA3lbEd',
  'mailru-domainkoRnbFulAZA34mhM.html': 'mailru-domain: koRnbFulAZA34mhM',
};

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  const filename = params.filename;
  const content = verificationFiles[filename];

  if (!content) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}