import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { APIResponse } from "@/types";
import { createSessionCookie } from "@/lib/firebase/firebase-admin";

export async function POST(request: NextRequest) {
  const reqBody = (await request.json()) as { idToken: string };
  const idToken = reqBody.idToken;

  const expiresIn = 60 * 60 * 24 * 14 * 1000; // 14 days, this the max limit

  const sessionCookie = await createSessionCookie(idToken, { expiresIn });

  cookies().set("__session", sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
  });

  return NextResponse.json<APIResponse<string>>({
    success: true,
    data: "Signed in successfully.",
  });
}
