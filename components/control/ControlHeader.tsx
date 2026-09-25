"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ControlHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      router.push("/control/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = [
    { href: "/control", label: "Overview" },
    { href: "/control/content", label: "Content Archive" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/control" className="flex items-center gap-2.5">
            <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-zinc-800 bg-zinc-900">
              <Image
                src="/devlar-icon.png"
                alt="DEVLAR logo"
                width={28}
                height={28}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm font-bold text-zinc-100">
                DEVLAR
              </span>
              <span className="font-mono text-[11px] text-zinc-400">
                / Control Center
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2.5 py-1 text-xs font-mono transition ${
                    active
                      ? "bg-zinc-800 text-zinc-100 font-semibold"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition hidden sm:inline-block"
          >
            ← Explore Public Site
          </Link>

          <button
            onClick={handleLogout}
            className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
