import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/journey", label: "Journey" },
    { href: "/technology", label: "Technology" },
    { href: "/philosophy", label: "Philosophy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 transition group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-zinc-950">
                <span className="font-mono text-sm font-bold text-indigo-400">DB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white">
                DevByte Media House
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                Autonomous Newsroom
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/control"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-200 shadow-sm transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Control Center</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
