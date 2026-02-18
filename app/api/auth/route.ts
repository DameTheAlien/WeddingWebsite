import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = body?.password;

  const correctPassword = process.env.SITE_PASSWORD;

  if (!correctPassword || password !== correctPassword) {
    return NextResponse.json(
      { ok: false },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set("wedding_auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
