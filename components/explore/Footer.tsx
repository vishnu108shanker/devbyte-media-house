import Link from "next/link";
import Image from "next/image";
import { GHIcon, LIIcon, YTIcon, IGIcon, FBIcon } from "@/components/ui/Icons";

const NAV = [
  { href:"/",              label:"Home" },
  { href:"/how-it-works",  label:"How It Works" },
  { href:"/journey",       label:"Journey" },
  { href:"/technology",    label:"Technology" },
  { href:"/philosophy",    label:"Philosophy" },
];

const SOCIALS = [
  { href:"https://github.com/vishnu108shanker/Devbyte-Engine.git", label:"GitHub Repository", Icon:GHIcon },
  { href:"https://github.com/vishnu108shanker",                    label:"GitHub Profile",    Icon:GHIcon },
  { href:"https://www.linkedin.com/in/vishnu-shanker-mishra-0b2403310", label:"LinkedIn",   Icon:LIIcon },
  { href:"https://www.youtube.com/@devlarhq",                      label:"YouTube",          Icon:YTIcon },
  { href:"https://www.facebook.com/profile.php?id=61594599453197", label:"Instagram",        Icon:IGIcon },
  { href:"https://www.facebook.com/profile.php?id=61594599453197", label:"Facebook",         Icon:FBIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-1)] pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          {/* Brand col */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="h-9 w-9 rounded-xl overflow-hidden border border-[var(--border)] group-hover:border-[var(--border-active)] transition-colors shadow-sm">
                <Image src="/devlar-icon.png" alt="DEVLAR" width={36} height={36} className="object-cover h-full w-full" />
              </div>
              <div>
                <div className="mono font-bold text-base text-[var(--tx-1)]">DEVLAR</div>
                <div className="mono text-[10px] text-[var(--tx-3)] tracking-widest uppercase">DevByte Media House</div>
              </div>
            </Link>
            <p className="text-sm text-[var(--tx-2)] leading-relaxed max-w-xs">
              An autonomous media system that discovers, edits, and broadcasts technical developer content across YouTube, Instagram, and Facebook — entirely on autopilot.
            </p>
            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="h-9 w-9 flex items-center justify-center rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:-translate-y-1 transition-all duration-200">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 mono text-[11px] text-[var(--tx-3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] dot-pulse" />
              Pipeline autonomous · Vercel + Atlas decoupled
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="label text-[var(--tx-3)] mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors duration-150">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations links */}
          <div>
            <h3 className="label text-[var(--tx-3)] mb-4">Operations</h3>
            <ul className="space-y-2.5 text-sm text-[var(--tx-2)]">
              <li><Link href="/control" className="hover:text-[var(--accent)] transition-colors">Control Center</Link></li>
              <li><Link href="/control/content" className="hover:text-[var(--accent)] transition-colors">Published Archive</Link></li>
              <li><Link href="/control/login" className="hover:text-[var(--accent)] transition-colors">Operator Login</Link></li>
            </ul>
          </div>

          {/* Broadcast channels */}
          <div>
            <h3 className="label text-[var(--tx-3)] mb-4">Broadcast Channels</h3>
            <ul className="space-y-2.5 text-sm text-[var(--tx-2)]">
              {["YouTube Shorts","Instagram Reels","Facebook Pages"].map(c => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--green)]" />{c}
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />AWS S3 Ephemeral Bridge
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 mono text-[11px] text-[var(--tx-3)]">
          <span>© {new Date().getFullYear()} DEVLAR · Vishnu Shanker Mishra. All rights reserved.</span>
          <span>Remotion Multi-Core · Gemini Editorial · Zero Cloud Storage</span>
        </div>
      </div>
    </footer>
  );
}
