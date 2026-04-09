import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const cookieVal = req.cookies.get("wedding_auth")?.value;
  console.log("Proxy:", { pathname, cookieVal });

  // Allow public/static routes and auth routes
  if (
    pathname.startsWith("/gate") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") || 
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    console.log("Proxy: allowed route");
    return NextResponse.next();
  }

  const authed = cookieVal === "1";
  console.log("Proxy: authed?", authed);

  if (authed) {
    console.log("Proxy: letting through");
    return NextResponse.next();
  }

  console.log("Proxy: redirecting to /gate");
  return NextResponse.redirect(new URL("/gate", req.url));
}

export const config = {
  matcher: ["/((?!_next).*)"],
};