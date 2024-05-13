import { NextResponse } from 'next/server';

export async function GET() {
  // Access the environment variable securely on the server-side
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OpenAI API Key'); // Explicit error for debugging
  }

  return NextResponse.json({ apiKey });
}
