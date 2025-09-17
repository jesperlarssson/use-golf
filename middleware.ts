import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLaunched = (process.env.LAUNCHED ?? "false").toLowerCase() === "true";
  const { pathname } = request.nextUrl;

  const isAssetRequest =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/font") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".ico");

  if (!isLaunched) {
    if (pathname === "/pre-access" || isAssetRequest) {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.pathname = "/pre-access";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (isLaunched && pathname === "/pre-access") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


