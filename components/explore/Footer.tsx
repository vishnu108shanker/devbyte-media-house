import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold text-zinc-100">
                DevByte Media House
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                Live Archive
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-400 leading-relaxed">
              The public showcase and presentation archive for DevByte Engine — an autonomous digital newsroom and video production pipeline publishing developer intelligence daily.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Architecture: Fully Decoupled (Vercel + Atlas · EC2 Independent)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Explore
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Operations
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/control" className="hover:text-zinc-200 transition">
                  Control Center
                </Link>
              </li>
              <li>
                <Link href="/control/content" className="hover:text-zinc-200 transition">
                  Published Content
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Publishing Targets
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>YouTube Shorts</li>
              <li>Instagram Reels</li>
              <li>Facebook Pages</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} DevByte Media House. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Autonomous Pipeline · Remotion Multi-Core · Gemini AI Newsroom
          </p>
        </div>
      </div>
    </footer>
  );
}
