import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_HOST = "admin.notecommerce.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (host === ADMIN_HOST || host.startsWith("admin.localhost")) {
    // The admin subdomain only ever serves the Payload admin panel and its API,
    // never the marketing site, regardless of what path is requested.
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return NextResponse.next();
    }
    return NextResponse.rewrite(new URL(`/admin${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
