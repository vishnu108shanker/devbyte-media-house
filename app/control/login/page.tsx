"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/control");
        router.refresh();
      } else {
        setError("Invalid operator password");
      }
    } catch (err) {
      setError("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md card p-8 sm:p-10 space-y-8">
        
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 rounded-xl overflow-hidden border border-[var(--border)] shadow-sm">
            <Image src="/devlar-icon.png" alt="DEVLAR" width={48} height={48} className="object-cover" />
          </div>
          <h1 className="heading-lg text-[var(--tx-1)]">Operator Login</h1>
          <p className="text-sm text-[var(--tx-2)]">Authenticate to access the DEVLAR telemetry dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="pass" className="mono text-[10px] font-bold tracking-widest text-[var(--tx-3)] uppercase block">Master Password</label>
            <input
              id="pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--tx-1)] placeholder-[var(--tx-3)] focus:border-[var(--border-active)] focus:outline-none transition-colors"
              placeholder="••••••••••••"
              required
            />
          </div>
          
          {error && (
            <div className="rounded-lg bg-[rgba(243,94,122,0.1)] border border-[var(--rose)] px-3 py-2 text-xs text-[var(--rose)] font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary justify-center py-3 text-sm disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Establish Uplink"}
          </button>
        </form>

        <div className="text-center mono text-[10px] text-[var(--tx-3)] uppercase tracking-widest">
          Restricted Access
        </div>
      </div>
    </div>
  );
}
