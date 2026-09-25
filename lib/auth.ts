import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "devlar_session";
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is missing.");
  }
  return new TextEncoder().encode(secret);
}

/**
 * Validates the admin plain-text password against ADMIN_PASSWORD_HASH.
 */
export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) {
    console.error("ADMIN_PASSWORD_HASH is not set in environment.");
    return false;
  }
  return bcrypt.compare(password, hash);
}

/**
 * Generates a signed JWT session token valid for 7 days.
 */
export async function createSessionToken(): Promise<string> {
  const secretKey = getSecretKey();
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(secretKey);
}

/**
 * Validates a signed JWT token string.
 */
export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const secretKey = getSecretKey();
    const { payload } = await jwtVerify(token, secretKey);
    return payload.role === "admin";
  } catch {
    return false;
  }
}

/**
 * Server Component / Route Handler helper to inspect current session from cookies.
 */
export async function getSession(): Promise<{ authenticated: boolean } | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!token) return null;

    const valid = await verifySessionToken(token);
    if (!valid) return null;

    return { authenticated: true };
  } catch {
    return null;
  }
}

/**
 * Check if the request is authenticated.
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session?.authenticated === true;
}
