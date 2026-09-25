import Link from "next/link";

export default function PhilosophyPage() {
  const principles = [
    {
      num: "01",
      title: "Code Determines What Is Allowed. AI Determines What Is Worth Publishing.",
      summary:
        "Deterministic algorithms enforce non-negotiable boundaries; probabilistic models evaluate qualitative significance.",
      detail:
        "We never ask an LLM to filter by date or parse syntactic schemas. Python normalizers, staleness gates (<14 days), keyword whitelists, and deduplication rules reject noise before a single token is generated. Once candidates pass hard gates, Gemini is tasked with what LLMs do best: editorial synthesis and relative ranking.",
    },
    {
      num: "02",
      title: "Zero-Idle Hardware Saturation.",
      summary:
        "Pin all available host compute during rendering; overlap network I/O so compute never waits on uploads.",
      detail:
        "Programmatic video rendering is inherently compute-intensive. DevByte dynamically configures Remotion to saturate 100% of host CPU cores (--concurrency=os.cpus().length). As soon as worker i finishes rendering, it hands off its output to background publishing threads while worker i+1 immediately starts rendering on the CPU.",
    },
    {
      num: "03",
      title: "Ephemeral Bridges, Permanent Records.",
      summary:
        "Temporary cloud assets exist only as long as needed for platform ingestion; historical records are append-only.",
      detail:
        "Rather than retaining gigabytes of rendered video files in cloud object storage, DevByte uploads the MP4 once to an Amazon S3 temporary bucket, generates a 2-hour presigned URL for Instagram Reels and Facebook Page ingestion, and deletes the S3 asset immediately upon broadcast acknowledgment. Only permanent execution metadata is retained in the database.",
    },
    {
      num: "04",
      title: "Total System Decoupling.",
      summary:
        "The public presentation tier must never depend on the operational state of the production pipeline.",
      detail:
        "DevByte Engine (EC2 + Docker + PostgreSQL) and DEVLAR (Vercel + Next.js + MongoDB Atlas) are independent systems. The website reads from a lightweight presentation archive written once after publishing. If the EC2 instance is powered down for maintenance, the website remains 100% operational with zero degradation.",
    },
    {
      num: "05",
      title: "Objective Evidence Over Arbitrary Math.",
      summary:
        "Replace multi-factor weighted point formulas with factual evidence compilation.",
      detail:
        "Composite scoring formulas (e.g. freshness + stars + upvotes = composite score) create an illusion of precision. DevByte compiles objective facts (recency in days, raw community engagement metrics, official newsroom authority, cross-source confirmation) and presents them directly to the AI editorial evaluator to produce defensible, evidence-backed decisions.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
          First Principles
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100 font-mono">
          Core Engineering Philosophy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Five core engineering and architectural principles that govern how DEVLAR and DevByte Engine are designed, scaled, and operated.
        </p>
      </div>

      {/* Principles List */}
      <div className="space-y-6">
        {principles.map((p) => (
          <div
            key={p.num}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm transition hover:border-zinc-700"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-zinc-800 pb-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold border border-zinc-700 bg-zinc-950 text-blue-400">
                  {p.num}
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-zinc-100">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-blue-400/90 font-mono">
                    {p.summary}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
              {p.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Navigation CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
        >
          <span>← Return to DEVLAR Home</span>
        </Link>
        <Link
          href="/control"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          Private Control Center →
        </Link>
      </div>
    </div>
  );
}
