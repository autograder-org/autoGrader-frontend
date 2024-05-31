import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function handler(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('Missing OpenAI API Key');
    return new NextResponse('Internal Server Error', { status: 500 });
  } else {
    return NextResponse.json({ apiKey });
  }
}