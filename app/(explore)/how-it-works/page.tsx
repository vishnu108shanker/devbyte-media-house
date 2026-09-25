import Link from "next/link";

export default function HowItWorksPage() {
  const stages = [
    {
      id: "discovery",
      num: "01",
      name: "Content Discovery",
      tagline: "4 Independent Ingestion Streams",
      description:
        "Continuously collects raw developer activity, open-source releases, and infrastructure announcements across disparate protocols and formats.",
      details: [
        {
          name: "Hacker News",
          type: "Official JSON API",
          role: "Top stories stream with upvote and discussion signal tracking.",
        },
        {
          name: "Official Engineering Blogs",
          type: "RSS / Atom Feeds",
          role: "Direct newsrooms from OpenAI, Anthropic, Google DeepMind, Meta, and AWS.",
        },
        {
          name: "GitHub Releases",
          type: "REST API v3",
          role: "Latest releases, major semantic versions, and changelogs from top developer repositories.",
        },
        {
          name: "Product Hunt",
          type: "RSS Feed",
          role: "Curated developer tools, productivity software, and AI infrastructure launches.",
        },
      ],
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    },
    {
      id: "ingestion",
      num: "02",
      name: "Ingestion & Filter Cascade",
      tagline: "Deterministic Hard Gates",
      description:
        "Before any LLM token is spent, candidates pass through five strict rule-based filters that strip tutorials, opinion pieces, stale items, and duplicates.",
      details: [
        {
          name: "Normalizer",
          type: "Schema Uniformity",
          role: "Maps distinct source payloads into a single standardized candidate contract.",
        },
        {
          name: "Signal Filter",
          type: "Keyword Gate",
          role: "Enforces technical whitelists while blacklisting tutorials, beginner guides, roundups, and essays.",
        },
        {
          name: "Quality Filter",
          type: "Structural Gate",
          role: "Drops malformed URLs, empty descriptions, or payloads missing essential context.",
        },
        {
          name: "Deduplicator",
          type: "Fuzzy & Canonical Matching",
          role: "Eliminates duplicate coverage of the same event across multiple sources.",
        },
        {
          name: "Staleness Gate",
          type: "14-Day Cutoff",
          role: "Discards any announcement older than 14 days to guarantee news freshness.",
        },
      ],
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      id: "intelligence",
      num: "03",
      name: "AI Newsroom & Editorial Engine",
      tagline: "Two-Pass Gemini Judgment",
      description:
        "Replaces arbitrary arithmetic scoring formulas with factual evidence compilation, two-pass LLM judgment, and structural validation.",
      details: [
        {
          name: "Evidence Builder",
          type: "Facts Over Points",
          role: "Compiles recency (days_ago), engagement (stars, upvotes), authority (official blog vs forum), and cross-source corroboration.",
        },
        {
          name: "Pass 1: Mission Check",
          type: "Chunked Classification",
          role: "Processes items in batches of 10 concurrently via ThreadPoolExecutor. Gemini assigns publish or reject with concrete factual reasons.",
        },
        {
          name: "Pass 2: Relative Ranking",
          type: "Global Order (1..N)",
          role: "Publishes a strictly ranked leaderboard using segmented tournament comparison for large candidate sets.",
        },
        {
          name: "Editorial Rotation",
          type: "Diversity Engine",
          role: "Enforces category rotation across 8 content types, max 2 stories per company, and max 3 per source.",
        },
        {
          name: "30-Hour Semantic Cache",
          type: "Cache & Re-Score",
          role: "Caches evaluations; triggers instant re-evaluation if an item's points surge by >50%.",
        },
      ],
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
    {
      id: "production",
      num: "04",
      name: "Concurrent Video Production",
      tagline: "100% Host CPU Saturation",
      description:
        "High-throughput vertical video generation combining neural speech synthesis, spring physics, and hardware-accelerated Remotion rendering.",
      details: [
        {
          name: "Concurrent Pre-Production",
          type: "Gemini + Edge TTS",
          role: "Scripts, validates, and synthesizes neural audio for all batch candidates concurrently in ~10–15s total.",
        },
        {
          name: "Hardware Saturation",
          type: "Remotion Multi-Core",
          role: "Dynamically pins 100% of host CPU cores on EC2 (concurrency = os.cpus().length) for maximum render speed.",
        },
        {
          name: "Dynamic Sentence Timing",
          type: "Acoustic Alignment",
          role: "Calculates scene boundaries and bullet entrances directly from TTS audio duration metadata.",
        },
        {
          name: "Vector Bullet Badges",
          type: "Deterministic SVG",
          role: "Rotating tech themes (zap, neural core, rocket, sparkle) with active narration glow effects.",
        },
      ],
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      id: "publishing",
      num: "05",
      name: "Multi-Platform Publishing Engine",
      tagline: "Ephemeral S3 Bridge & Triple Broadcast",
      description:
        "Simultaneously broadcasts finished video assets to major video platforms without retaining unnecessary cloud storage.",
      details: [
        {
          name: "YouTube Shorts",
          type: "Resumable Upload",
          role: "Direct OAuth 2.0 streaming in 2 MB resumable chunks with metadata injection and private staging.",
        },
        {
          name: "AWS S3 Temporary Bridge",
          type: "Presigned Relay",
          role: "Uploads video once to an Amazon S3 temporary bucket, generates 2-hour presigned URL for Meta ingestion.",
        },
        {
          name: "Instagram Reels",
          type: "Meta Graph API",
          role: "Initiates REELS container, polls processing lifecycle, and triggers instant publication.",
        },
        {
          name: "Facebook Pages",
          type: "Meta Graph API",
          role: "Transfers via Page Video endpoint with asynchronous status polling.",
        },
        {
          name: "Automated S3 Cleanup",
          type: "Zero Cloud Waste",
          role: "Deletes the temporary S3 asset immediately after Instagram and Facebook acknowledge completion.",
        },
      ],
      badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
          Architecture Specification
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100">
          How DevByte Works
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
          DevByte Engine transforms raw developer activity into high-fidelity short-form videos through an autonomous 5-stage pipeline designed for deterministic reliability and maximum CPU saturation.
        </p>
      </div>

      {/* Visual High-Level Architecture Flowchart */}
      <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
          System Architecture &amp; Data Flow
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-zinc-500">{stage.num}</span>
                  <span className={`rounded border px-1.5 py-0.2 font-mono text-[9px] ${stage.badgeColor}`}>
                    STAGE {idx + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-zinc-100">{stage.name}</h3>
                <p className="mt-1 text-xs text-zinc-400">{stage.tagline}</p>
              </div>

              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-600 font-mono text-sm">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Stage-by-Stage Breakdown */}
      <div className="mt-16 space-y-12">
        {stages.map((stage) => (
          <section
            key={stage.id}
            id={stage.id}
            className="rounded-2xl border border-zinc-800/90 bg-zinc-900/30 p-6 sm:p-8 transition hover:border-zinc-700"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-zinc-800/80 pb-6 gap-2">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 font-mono text-sm font-bold text-indigo-400">
                  {stage.num}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {stage.name}
                  </h2>
                  <span className="text-xs font-mono text-indigo-400">
                    {stage.tagline}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                {stage.description}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stage.details.map((detail) => (
                <div
                  key={detail.name}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 transition hover:bg-zinc-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-200">
                      {detail.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {detail.type}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {detail.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Performance Visibility Section */}
      <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
            Telemetry &amp; Instrumentation
          </span>
          <h2 className="mt-2 text-2xl font-bold text-zinc-100">
            Real-Time Pipeline Performance
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            The orchestrator measures every micro-phase in milliseconds, emitting visual ASCII timing reports for terminal operators and pushing metrics to the presentation archive.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 font-mono text-xs text-zinc-300 overflow-x-auto shadow-inner">
          <div className="text-amber-400 font-bold mb-2">
            ⏱️ PERFORMANCE REPORT: &quot;NVIDIA to Acquire Hugging Face&quot;
          </div>
          <div className="text-zinc-600">────────────────────────────────────────────────────────────</div>
          <div className="py-0.5"><span className="text-zinc-400">Gemini Script  </span>:  6.2s  <span className="text-indigo-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-400">Validator      </span>:  0.2s</div>
          <div className="py-0.5"><span className="text-zinc-400">TTS Voice      </span>:  4.1s  <span className="text-indigo-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-400">Remotion Render</span>: 58.4s  <span className="text-indigo-400">████████████████████</span> (100% CPU)</div>
          <div className="py-0.5"><span className="text-zinc-400">YT Upload      </span>: 18.2s  <span className="text-indigo-400">██████</span></div>
          <div className="py-0.5"><span className="text-zinc-400">S3 Temp Upload </span>:  4.3s  <span className="text-indigo-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-400">IG Upload      </span>: 26.5s  <span className="text-indigo-400">█████████</span></div>
          <div className="py-0.5"><span className="text-zinc-400">FB Upload      </span>: 24.1s  <span className="text-indigo-400">████████</span></div>
          <div className="text-zinc-600">────────────────────────────────────────────────────────────</div>
          <div className="text-emerald-400 font-bold mt-1"><span className="text-zinc-300">Total Pipeline </span>: 142.0s</div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-8">
        <Link
          href="/journey"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
        >
          <span>Next: Read The Engineering Journey (V1 → V2)</span>
          <span>→</span>
        </Link>
        <Link
          href="/technology"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          View Technical Stack Table →
        </Link>
      </div>
    </div>
  );
}
