import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('mailru-domain: FSg7hCoMdzA3lbEd', {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}