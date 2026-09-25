import Link from "next/link";

export default function HomePage() {
  const pipelineStages = [
    {
      step: "01",
      title: "Content Discovery",
      subtitle: "4 Live Sources",
      desc: "Hacker News API, GitHub Releases, Product Hunt, and official engineering RSS feeds continuously scraped for developer signals.",
      badge: "Real-time Ingestion",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
    },
    {
      step: "02",
      title: "Signal Filtering",
      subtitle: "Noise Elimination",
      desc: "Deterministic keyword whitelists, noise blacklists, schema validation, fuzzy deduplication, and a 14-day staleness gate.",
      badge: "Hard Gates",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    },
    {
      step: "03",
      title: "AI Newsroom",
      subtitle: "Two-Pass Gemini",
      desc: "Factual evidence builder followed by Pass 1 Mission Check in chunks of 10 and Pass 2 Relative Ranking with editorial rotation.",
      badge: "Editorial AI",
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400",
    },
    {
      step: "04",
      title: "Video Production",
      subtitle: "Remotion Multi-Core",
      desc: "Concurrent pre-production (Gemini scripts + Edge TTS audio) and video rendering saturating 100% of host CPU cores.",
      badge: "100% CPU Saturation",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    },
    {
      step: "05",
      title: "Multi-Platform Relay",
      subtitle: "S3 Temporary Bridge",
      desc: "Simultaneous broadcast to YouTube Shorts (resumable), Instagram Reels, and Facebook Pages with automatic S3 asset lifecycle cleanup.",
      badge: "Automated Broadcast",
      color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
    },
  ];

  const highlights = [
    { label: "Independent Sources", value: "4", detail: "HN, GitHub, Product Hunt, Blogs" },
    { label: "Host CPU Saturation", value: "100%", detail: "Multi-core Remotion render" },
    { label: "Publishing Platforms", value: "3", detail: "YouTube, Instagram, Facebook" },
    { label: "Manual Steps", value: "0", detail: "Fully autonomous cron execution" },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono text-indigo-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping"></span>
            <span>DevByte Engine V2 · Autonomous Media House</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Developer News Produced &amp; Broadcast on Autopilot
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-zinc-400 leading-relaxed font-normal">
            An autonomous digital newsroom that discovers developer breakthroughs, scores signal over noise, synthesizes neural scripts, renders videos at 100% CPU capacity, and broadcasts across YouTube Shorts, Instagram Reels, and Facebook Pages.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:brightness-110 hover:shadow-indigo-500/40"
            >
              <span>Explore Pipeline Architecture</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/journey"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>Read The Journey (V1 → V2)</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="relative rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm text-center transition hover:border-zinc-700"
            >
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-indigo-400">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-medium text-zinc-200">{item.label}</div>
              <div className="mt-1 text-xs text-zinc-500">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline Stages Strip */}
      <section className="border-y border-zinc-900 bg-zinc-950/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                The 5-Stage Machine
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Pipeline Lifecycle
              </h2>
            </div>
            <p className="mt-3 md:mt-0 max-w-md text-sm text-zinc-400">
              Every video moves through a deterministic filter cascade and concurrent rendering system before publishing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {pipelineStages.map((stage) => (
              <div
                key={stage.step}
                className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-5 transition hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-zinc-400">
                      STAGE {stage.step}
                    </span>
                    <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${stage.color}`}>
                      {stage.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-zinc-100">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-400/90">
                    {stage.subtitle}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition"
            >
              <span>View full architectural diagrams &amp; data flow specifications</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Principles Banner */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-950 p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
              Core Engineering Tenet
            </span>
            <blockquote className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-snug">
              &ldquo;Code determines what is allowed. AI determines what is worth publishing.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              We reject arbitrary point-scoring formulas in favor of deterministic hard gates followed by factual evidence collection and structured LLM ranking. The pipeline operates 100% decoupled from this web presentation layer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="rounded-lg bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-700 hover:text-white"
              >
                Explore Technology Stack
              </Link>
              <Link
                href="/philosophy"
                className="rounded-lg border border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
              >
                Read 5 Core Principles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
