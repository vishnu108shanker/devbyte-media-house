import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE_NAME = "devlar_session";
const DEFAULT_SECRET = "da53341d81e6619a9fcd6a106608c4a340f1b31375eca73d1e1a45faafcbb3aa";

function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET || DEFAULT_SECRET;
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /control/* routes (excluding /control/login)
  if (pathname.startsWith("/control")) {
    if (pathname === "/control/login") {
      // If already logged in, redirect away from login to /control
      const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
      if (token) {
        try {
          const secretKey = getSecretKey();
          const { payload } = await jwtVerify(token, secretKey);
          if (payload.role === "admin") {
            return NextResponse.redirect(new URL("/control", req.url));
          }
        } catch {
          // invalid token, let them access login
        }
      }
      return NextResponse.next();
    }

    // Protected /control route: check session
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
      const loginUrl = new URL("/control/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const secretKey = getSecretKey();
      const { payload } = await jwtVerify(token, secretKey);
      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/control/login", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/control/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/control/:path*"],
};
