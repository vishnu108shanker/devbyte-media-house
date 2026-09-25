import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "devlar_session";
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 days in seconds

// Fallback hash for default password 'devbyte2026'
const DEFAULT_HASH = "$2b$10$.nUo65MlhgL1zeSJOcvihOuYMnN9zYeLBrzLZHaVj8gQEC.8h..3C";
const DEFAULT_SECRET = "da53341d81e6619a9fcd6a106608c4a340f1b31375eca73d1e1a45faafcbb3aa";

export function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET || DEFAULT_SECRET;
  return new TextEncoder().encode(secret);
}

/**
 * Validates the admin plain-text password against ADMIN_PASSWORD_HASH or default hash.
 */
export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH || DEFAULT_HASH;
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
