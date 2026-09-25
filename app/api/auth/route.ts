// Login API route — Phase 2
// Phase 2 will implement credential verification and session cookie issuance.
import { NextResponse } from "next/server";

export async function POST() {
  // TODO (Phase 2): verify ADMIN_PASSWORD_HASH, set session cookie
  return NextResponse.json(
    { error: "Auth not implemented yet — coming in Phase 2." },
    { status: 501 }
  );
}
