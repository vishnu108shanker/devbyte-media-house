import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE_NAME = "devlar_session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /control/* routes (excluding /control/login)
  if (pathname.startsWith("/control")) {
    if (pathname === "/control/login") {
      // If already logged in, redirect away from login to /control
      const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
      if (token && process.env.SESSION_SECRET) {
        try {
          const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET);
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

    if (!token || !process.env.SESSION_SECRET) {
      const loginUrl = new URL("/control/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET);
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
