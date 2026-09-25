import Link from "next/link";

export default function JourneyPage() {
  const milestones = [
    {
      version: "v1.0.0",
      date: "June 2026",
      tagline: "The Single-Source Prototype",
      what: "An initial proof of concept that scraped GitHub Trending, prompted Gemini with a generic template, synthesized voice via TTS, and rendered a single video sequentially for manual upload.",
      why: "To validate whether programmatic video generation with Remotion and LLM scriptwriting could produce coherent developer content.",
      tech: ["GitHub Scraper", "Gemini 1.5 Flash", "Edge TTS", "Remotion 4.x", "Single-threaded"],
      highlight: "Validated the Remotion + LLM concept, but suffered from narrow topic diversity and manual publishing friction.",
      badge: "Initial Prototype",
    },
    {
      version: "v2.0.0",
      date: "June 2026",
      tagline: "The Architectural Rewrite & Autonomous Uploads",
      what: "Rebuilt from the ground up for automated batch production. Introduced an editorial engine, isolated batch worker directories, and direct OAuth 2.0 automated YouTube Shorts publishing.",
      why: "Manual uploads were the primary operational bottleneck. Moving to batch execution allowed generating multiple videos per run.",
      tech: ["Node.js Orchestrator", "YouTube Data API v3", "OAuth 2.0 Resumable", "Worker Directory Isolation"],
      highlight: "Achieved the first fully autonomous end-to-end publish cycle to YouTube without human intervention.",
      badge: "Autonomous Core",
    },
    {
      version: "v2.2.0",
      date: "July 2026",
      tagline: "The 4-Source Newsroom Overhaul",
      what: "Expanded discovery beyond GitHub to include Hacker News JSON API, official engineering RSS feeds, and Product Hunt. Added signal whitelists and global noise blacklists.",
      why: "GitHub Trending alone created content fatigue and lacked timely coverage of major AI model releases and infrastructure announcements.",
      tech: ["HN JSON API", "RSS/Atom Parser", "Keyword Gatekeeper", "Story-Level Deduplicator"],
      highlight: "Shifted DevByte from a GitHub bot to a genuine multi-source developer newsroom.",
      badge: "Source Expansion",
    },
    {
      version: "v2.3.0",
      date: "September 2026",
      tagline: "Evidence-Driven Scoring Rewrite",
      what: "A complete philosophical and architectural rewrite of the evaluation engine. Scrapped the arbitrary 4-factor arithmetic point system in favor of deterministic hard gates followed by two-pass LLM judgment.",
      why: "Point-based heuristics gave false precision and let generic tutorials slip through. LLMs excel at qualitative editorial judgment when provided objective facts.",
      tech: ["Two-Pass Gemini Evaluation", "Evidence Builder", "Tournament Ranking", "30-Hour Semantic Cache"],
      highlight: "Established the core principle: Code determines what is allowed. Gemini determines what is worth publishing.",
      badge: "Editorial Revolution",
    },
    {
      version: "v2.4.0",
      date: "September 2026",
      tagline: "Parallel Pre-Production & Performance Instrumentation",
      what: "Introduced concurrent pre-production (parallel script generation and TTS synthesis across all batch candidates) and millisecond-level telemetry reporting.",
      why: "Sequential pre-production wasted valuable minutes before rendering could start. Clear performance visibility was needed to diagnose bottlenecks.",
      tech: ["ThreadPoolExecutor", "Concurrent Pre-Production", "Millisecond Phase Timers", "ASCII Performance Reports"],
      highlight: "Cut pre-production latency from 60+ seconds to ~12 seconds for an entire 5-video batch.",
      badge: "Concurrency & Telemetry",
    },
    {
      version: "v2.5.0",
      date: "September 2026",
      tagline: "Multi-Platform Relay & S3 Ephemeral Bridge",
      what: "Simultaneous triple-platform publishing to YouTube Shorts, Instagram Reels, and Facebook Pages using an automated AWS S3 temporary bridge with instant lifecycle cleanup.",
      why: "Reaching developers across different platforms maximizes discovery while temporary S3 relays prevent unnecessary storage costs.",
      tech: ["Meta Graph API v19.0", "AWS S3 boto3 Presigned URLs", "100% Host CPU Saturation", "Buffered Zero-Clutter Logging"],
      highlight: "Triple-platform automated publishing with zero persistent cloud asset storage.",
      badge: "Multi-Platform Broadcast",
    },
    {
      version: "Cloud / Infra",
      date: "Present",
      tagline: "Dockerization, EC2 Deployment & Postgres Truth",
      what: "Containerized the entire pipeline runtime with Docker and deployed onto an AWS EC2 instance with PostgreSQL as the immutable system of record.",
      why: "Local machine execution was tethered to personal computer availability. Running containerized on cloud compute ensures reliable daily scheduling.",
      tech: ["Docker & Docker Compose", "AWS EC2", "PostgreSQL", "Decoupled MongoDB Atlas Archive"],
      highlight: "Total operational decoupling: the pipeline runs on EC2 while DevByte Media House presents live results on Vercel.",
      badge: "Production Infrastructure",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
          Evolutionary Chronicle
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
          The Engineering Journey
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          How a weekend prototype scraping GitHub Trending evolved into an industrial-grade, multi-platform autonomous media house saturating 100% of host CPU capacity.
        </p>
      </div>

      {/* Narrative Timeline */}
      <div className="mt-16 relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
        {milestones.map((m, idx) => (
          <div key={m.version} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-indigo-500 transition">
              <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:scale-125 transition" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-base font-bold text-indigo-400">
                {m.version}
              </span>
              <span className="text-xs font-mono text-zinc-500">•</span>
              <span className="text-xs font-medium text-zinc-400">{m.date}</span>
              <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[10px] font-mono text-zinc-300">
                {m.badge}
              </span>
            </div>

            <h2 className="mt-2 text-xl sm:text-2xl font-bold text-zinc-100">
              {m.tagline}
            </h2>

            <div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm space-y-4">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  What Was Built
                </h3>
                <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
                  {m.what}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Engineering Rationale (The &quot;Why&quot;)
                </h3>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                  {m.why}
                </p>
              </div>

              <div className="rounded-lg bg-zinc-950/60 p-3 border border-zinc-800/60">
                <span className="text-xs font-mono text-indigo-300 font-medium">
                  Key Takeaway:{" "}
                </span>
                <span className="text-xs text-zinc-400">{m.highlight}</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {m.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[11px] text-zinc-300 border border-zinc-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation CTA */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-8">
        <Link
          href="/technology"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
        >
          <span>Next: Explore the Technology Stack Table</span>
          <span>→</span>
        </Link>
        <Link
          href="/philosophy"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          Read Core Philosophy →
        </Link>
      </div>
    </div>
  );
}
