import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/journey", label: "Journey" },
    { href: "/technology", label: "Technology" },
    { href: "/philosophy", label: "Philosophy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm transition group-hover:border-blue-500/50">
              <Image
                src="/devlar-icon.png"
                alt="DEVLAR logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-zinc-100 group-hover:text-blue-400 transition font-mono">
                DEVLAR
              </span>
              <span className="text-[10px] font-medium tracking-wide text-zinc-400">
                DevByte Media House
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/control"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>Control Center</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
