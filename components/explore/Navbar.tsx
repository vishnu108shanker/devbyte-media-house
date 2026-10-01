"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { GHIcon, YTIcon, LIIcon } from "@/components/ui/Icons";

const NAV = [
  { href: "/",            label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/journey",     label: "Journey" },
  { href: "/technology",  label: "Technology" },
  { href: "/philosophy",  label: "Philosophy" },
];

const SOCIALS = [
  { href:"https://github.com/vishnu108shanker", label:"GitHub", Icon:GHIcon },
  { href:"https://www.linkedin.com/in/vishnu-shanker-mishra-0b2403310", label:"LinkedIn", Icon:LIIcon },
  { href:"https://www.youtube.com/@devlarhq", label:"YouTube", Icon:YTIcon },
];

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // close drawer on navigation
  useEffect(() => setOpen(false), [pathname]);
  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--glass)] backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 rounded-lg overflow-hidden border border-[var(--border)] group-hover:border-[var(--border-active)] transition-colors duration-200 shadow-sm">
              <Image src="/devlar-icon.png" alt="DEVLAR" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="mono text-sm font-bold text-[var(--tx-1)] group-hover:text-[var(--accent)] transition-colors">DEVLAR</span>
              <span className="mono text-[9px] text-[var(--tx-3)] tracking-widest uppercase">DevByte</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ href, label }) => {
              const active = isActive(href, pathname);
              return (
                <Link key={href} href={href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? "text-[var(--accent)] bg-[var(--accent-dim)]"
                      : "text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--surface)]"
                  }`}>
                  {label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Social — desktop only */}
            <div className="hidden lg:flex items-center gap-1 mr-1">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[var(--surface-hover)] hover:scale-110 transition-all duration-150">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* Control pill */}
            <Link href="/control"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:border-[var(--border-hover)] transition-all duration-150">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] dot-pulse" />
              Control
            </Link>

            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
              className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--tx-2)] hover:text-[var(--tx-1)] transition-all">
              {open
                ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-40 w-72 flex flex-col border-l border-[var(--border)]
          bg-[var(--bg-1)] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-[var(--border)]">
          <span className="mono text-sm font-bold text-[var(--tx-1)]">Navigation</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu"
            className="h-7 w-7 flex items-center justify-center rounded-md text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--surface)] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {NAV.map(({ href, label }, i) => {
            const active = isActive(href, pathname);
            return (
              <Link key={href} href={href}
                style={{ animationDelay: open ? `${i * 60}ms` : "0ms" }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-all duration-150 ${
                  active
                    ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--border-active)]"
                    : "text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--surface)]"
                }`}>
                {label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-3 h-px bg-[var(--border)]" />

          <Link href="/control"
            className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-[var(--tx-2)] hover:text-[var(--tx-1)] hover:bg-[var(--surface)] transition-all">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] dot-pulse" />
            Control Center
          </Link>
        </nav>

        {/* Drawer footer — socials + theme */}
        <div className="border-t border-[var(--border)] px-5 py-4 space-y-4">
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:scale-110 transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <div className="ml-auto"><ThemeToggle /></div>
          </div>
          <p className="mono text-[10px] text-[var(--tx-3)] text-center tracking-widest uppercase">
            DEVLAR · DevByte Media House
          </p>
        </div>
      </aside>
    </>
  );
}
