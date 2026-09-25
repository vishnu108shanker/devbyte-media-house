import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-zinc-800 bg-zinc-900">
                <Image
                  src="/devlar-icon.png"
                  alt="DEVLAR logo"
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-mono text-base font-bold text-zinc-100">
                DEVLAR
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                / DevByte Media House
              </span>
            </div>
            <p className="mt-3 max-w-sm text-xs text-zinc-400 leading-relaxed">
              An automated media system for discovering, understanding, generating, and publishing technical content across YouTube, Instagram, and Facebook.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Decoupled Presentation Tier (Vercel + Atlas · EC2 Independent)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Explore
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-zinc-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-zinc-200 transition">
                  How DevByte Works
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-zinc-200 transition">
                  Engineering Journey
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-zinc-200 transition">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-zinc-200 transition">
                  Core Philosophy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Operations
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/control" className="hover:text-zinc-200 transition">
                  Control Center
                </Link>
              </li>
              <li>
                <Link href="/control/content" className="hover:text-zinc-200 transition">
                  Published Output
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Publishing Channels
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-zinc-500">
              <li>YouTube Shorts (Resumable OAuth)</li>
              <li>Instagram Reels (Meta Graph API)</li>
              <li>Facebook Pages (Graph API)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} DEVLAR · DevByte Media House. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Autonomous Newsroom · Remotion Multi-Core · Gemini Editorial Engine
          </p>
        </div>
      </div>
    </footer>
  );
}
