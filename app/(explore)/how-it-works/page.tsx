import Link from "next/link";
import ArchitectureExplorer, { StageDetail } from "@/components/explore/ArchitectureExplorer";

export default function HowItWorksPage() {
  const stages: StageDetail[] = [
    {
      id: "discovery",
      num: "01",
      name: "Content Discovery",
      tagline: "4 Independent Ingestion Streams",
      description:
        "Continuously collects raw developer activity, releases, and infrastructure announcements across disparate protocols and formats.",
      components: [
        {
          name: "Hacker News API",
          type: "JSON REST",
          role: "Polls top stories and comments with score and discussion velocity tracking.",
        },
        {
          name: "Engineering Blogs",
          type: "RSS / Atom Feeds",
          role: "Direct newsrooms from OpenAI, Anthropic, Google DeepMind, Meta, and AWS.",
        },
        {
          name: "GitHub Releases",
          type: "GitHub REST API",
          role: "Major version releases and changelogs from tracked developer infrastructure repos.",
        },
        {
          name: "Product Hunt",
          type: "RSS Feed",
          role: "Curated developer tools, productivity software, and AI infrastructure launches.",
        },
      ],
      hardInvariants: [
        "All collectors run independently; failure of one collector does not abort the batch.",
        "Payloads are stored with original source timestamps and source URI for provenance.",
      ],
    },
    {
      id: "filtering",
      num: "02",
      name: "Ingestion & Filter Cascade",
      tagline: "Deterministic Hard Gates",
      description:
        "Before any LLM token is consumed, candidates pass through five strict rule-based filters that strip tutorials, opinion pieces, stale items, and duplicates.",
      components: [
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
      hardInvariants: [
        "Deterministic filters reject noise with 0 LLM token cost.",
        "Historical deduplicator checks previous publications to prevent duplicate video generation.",
      ],
    },
    {
      id: "intelligence",
      num: "03",
      name: "AI Newsroom & Editorial Engine",
      tagline: "Two-Pass Gemini Judgment",
      description:
        "Replaces arbitrary arithmetic scoring formulas with factual evidence compilation, two-pass LLM judgment, and structural validation.",
      components: [
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
      hardInvariants: [
        "LLM temperature set to 0.0 for stability heuristic; structured JSON schema enforced.",
        "Automated self-healing retries with model fallbacks (gemini-2.5-flash, gemini-3.5-flash).",
      ],
    },
    {
      id: "production",
      num: "04",
      name: "Concurrent Video Production",
      tagline: "100% Host CPU Saturation",
      description:
        "High-throughput vertical video generation combining neural speech synthesis, spring physics, and hardware-accelerated Remotion rendering.",
      components: [
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
      hardInvariants: [
        "Scene boundaries are contiguous with zero audio-visual drift.",
        "Isolated worker directories prevent race conditions during concurrent batch runs.",
      ],
    },
    {
      id: "publishing",
      num: "05",
      name: "Multi-Platform Publishing Engine",
      tagline: "Ephemeral S3 Bridge & Triple Broadcast",
      description:
        "Simultaneously broadcasts finished video assets to major video platforms without retaining unnecessary cloud storage.",
      components: [
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
      hardInvariants: [
        "Zero permanent cloud video storage: S3 assets deleted automatically after Meta ingestion.",
        "Append-only publication record written to PostgreSQL (EC2) and MongoDB Atlas archive.",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
          System Architecture
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100 font-mono">
          How DevByte Works
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          DevByte Engine transforms raw developer activity into high-fidelity short-form videos through an autonomous 5-stage pipeline designed for deterministic reliability, hardware saturation, and zero cloud waste.
        </p>
      </div>

      {/* Interactive Architecture Explorer */}
      <ArchitectureExplorer stages={stages} />

      {/* Telemetry & Performance Instrumentation */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
            Telemetry &amp; Instrumentation
          </span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-100">
            Real-Time Pipeline Performance
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            The orchestrator measures every micro-phase in milliseconds, emitting visual ASCII timing reports for terminal operators and pushing metrics to the presentation archive.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 overflow-x-auto">
          <div className="text-amber-400 font-bold mb-2">
            ⏱️ PERFORMANCE REPORT: &quot;NVIDIA to Acquire Hugging Face&quot;
          </div>
          <div className="text-zinc-700">────────────────────────────────────────────────────────────</div>
          <div className="py-0.5"><span className="text-zinc-500">Gemini Script  </span>:  6.2s  <span className="text-blue-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-500">Validator      </span>:  0.2s</div>
          <div className="py-0.5"><span className="text-zinc-500">TTS Voice      </span>:  4.1s  <span className="text-blue-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-500">Remotion Render</span>: 58.4s  <span className="text-blue-400">████████████████████</span> (100% CPU)</div>
          <div className="py-0.5"><span className="text-zinc-500">YT Upload      </span>: 18.2s  <span className="text-blue-400">██████</span></div>
          <div className="py-0.5"><span className="text-zinc-500">S3 Temp Upload </span>:  4.3s  <span className="text-blue-400">█</span></div>
          <div className="py-0.5"><span className="text-zinc-500">IG Upload      </span>: 26.5s  <span className="text-blue-400">█████████</span></div>
          <div className="py-0.5"><span className="text-zinc-500">FB Upload      </span>: 24.1s  <span className="text-blue-400">████████</span></div>
          <div className="text-zinc-700">────────────────────────────────────────────────────────────</div>
          <div className="text-emerald-400 font-bold mt-1"><span className="text-zinc-400">Total Pipeline </span>: 142.0s</div>
        </div>
      </section>

      {/* Navigation CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-6">
        <Link
          href="/journey"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
        >
          <span>Next: Engineering Journey (V1 → V2)</span>
          <span>→</span>
        </Link>
        <Link
          href="/technology"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          Technology Stack Table →
        </Link>
      </div>
    </div>
  );
}
