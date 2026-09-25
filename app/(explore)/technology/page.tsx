import Link from "next/link";

export default function TechnologyPage() {
  const stack = [
    {
      layer: "Pipeline Runtime",
      technology: "Python 3.11",
      why: "Optimal ecosystem for async API data ingestion, HTML/RSS scraping, and native Google GenAI SDK integration.",
      badge: "Core Ingestion",
    },
    {
      layer: "Video Orchestrator",
      technology: "Node.js 18+ / TypeScript",
      why: "Seamless interop with Remotion's React runtime, async worker concurrency, and subprocess process management.",
      badge: "Production Engine",
    },
    {
      layer: "AI & Newsroom Editorial",
      technology: "Google Gemini 2.5 / 3.5 Flash",
      why: "Sub-second token latency, strict JSON Schema adherence, cost efficiency, and automated fallback resilience.",
      badge: "Intelligence Layer",
    },
    {
      layer: "Neural Voice Synthesis",
      technology: "Edge TTS (Microsoft Azure Neural)",
      why: "Zero-cost, broadcast-grade neural voices with millisecond sentence timing boundaries for acoustic alignment.",
      badge: "Speech Engine",
    },
    {
      layer: "Programmatic Video",
      technology: "Remotion 4.x + React 19 + Tailwind CSS v4",
      why: "Enables code-driven video templates with spring physics, glassmorphism, dynamic timing, and vector SVG badges.",
      badge: "Render Core",
    },
    {
      layer: "Hardware Acceleration",
      technology: "Remotion Multi-Core Concurrency",
      why: "Dynamically invokes --concurrency=os.cpus().length, saturating 100% of host CPU cores on EC2 throughout rendering.",
      badge: "Hardware Saturation",
    },
    {
      layer: "YouTube Publishing",
      technology: "YouTube Data API v3",
      why: "Direct OAuth 2.0 authentication, 2 MB resumable upload chunking, metadata injection, and upload progress tracking.",
      badge: "Broadcast",
    },
    {
      layer: "Meta Publishing",
      technology: "Meta Graph API v19.0",
      why: "Automates direct Instagram Reels container polling and Facebook Page video publishing.",
      badge: "Broadcast",
    },
    {
      layer: "Ephemeral Asset Bridge",
      technology: "AWS S3 + boto3",
      why: "Uploads finished MP4 once for presigned URL distribution to Meta APIs, deleting the asset immediately upon completion.",
      badge: "Cloud Relay",
    },
    {
      layer: "Media Processing",
      technology: "FFmpeg 6.x",
      why: "Ultra-fast audio extraction, bitrate validation, and frame-accurate timing calculation.",
      badge: "Media Utility",
    },
    {
      layer: "Pipeline Database (Truth)",
      technology: "PostgreSQL (EC2)",
      why: "ACID-compliant append-only historical run ledger and candidate tracking on the pipeline server (never queried by web).",
      badge: "Production Truth",
    },
    {
      layer: "Website Database (Archive)",
      technology: "MongoDB Atlas",
      why: "Decoupled presentation archive holding read-only publication snapshots; keeps website online even if EC2 is down.",
      badge: "Presentation DB",
    },
    {
      layer: "Web Platform & Hosting",
      technology: "Next.js (App Router) + Vercel",
      why: "Global edge CDN for static Explore pages (SSG) and isolated Server Components for auth-protected Control Center.",
      badge: "Web Infrastructure",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
          Engineering Rationale
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100 font-mono">
          Technology Stack
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Every layer in the DEVLAR / DevByte architecture was selected with a specific engineering objective: deterministic reliability, maximum CPU saturation, zero cloud storage waste, and total decoupling.
        </p>
      </div>

      {/* Stack Table */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/80 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                <th className="py-3.5 px-5 font-semibold">Architectural Layer</th>
                <th className="py-3.5 px-5 font-semibold">Technology Choice</th>
                <th className="py-3.5 px-5 font-semibold">Engineering &ldquo;Why&rdquo;</th>
                <th className="py-3.5 px-5 font-semibold text-right">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {stack.map((row) => (
                <tr
                  key={row.technology}
                  className="transition hover:bg-zinc-800/30 group"
                >
                  <td className="py-3.5 px-5 font-medium text-zinc-300 whitespace-nowrap">
                    {row.layer}
                  </td>
                  <td className="py-3.5 px-5 font-mono text-xs font-bold text-blue-400 whitespace-nowrap">
                    {row.technology}
                  </td>
                  <td className="py-3.5 px-5 text-zinc-400 leading-relaxed max-w-xl">
                    {row.why}
                  </td>
                  <td className="py-3.5 px-5 text-right whitespace-nowrap">
                    <span className="inline-block rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 font-mono text-[10px] text-zinc-400 group-hover:border-zinc-700">
                      {row.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dual Database Isolation Callout */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 text-blue-400 font-mono text-sm font-bold">
            DB
          </div>
          <div>
            <h3 className="text-base font-semibold text-zinc-100">
              Strict Dual-Database Isolation Architecture
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              PostgreSQL on EC2 serves as the production pipeline&apos;s immutable internal source of truth and is never queried by the web tier. MongoDB Atlas serves strictly as a presentation archive, receiving one publication document post-upload. The DEVLAR website remains 100% available even during EC2 maintenance or pipeline downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-6">
        <Link
          href="/philosophy"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
        >
          <span>Next: Core Engineering Philosophy</span>
          <span>→</span>
        </Link>
        <Link
          href="/how-it-works"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          ← Return to Architecture Specifications
        </Link>
      </div>
    </div>
  );
}
