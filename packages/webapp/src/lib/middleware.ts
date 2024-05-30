import { NextRequest } from "next/server";
import { updateSession } from "./session.ts";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}