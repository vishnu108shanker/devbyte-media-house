import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PagePager from "@/components/ui/PagePager";

const MILESTONES = [
  {
    version: "v1.0",
    date: "Jun 2026",
    title: "The First Pipeline",
    desc: "Initial proof of concept: GitHub Trending → Gemini → Edge TTS → Remotion. A single Python script fetched the top trending repo, summarized it, generated audio, and rendered a video. Uploaded manually.",
    bottleneck: "No filtering, no editorial judgment. The system would happily publish a JavaScript tutorial or a 'how to use Tailwind' guide as breaking developer news.",
  },
  {
    version: "v2.0",
    date: "Jun 23, 2026",
    title: "Full Architectural Rewrite",
    desc: "Complete rewrite introducing the editorial engine, parallel batch processing, and automated YouTube uploads via OAuth 2.0. The pipeline became a state machine rather than a script.",
    bottleneck: "Selection was still based on an arbitrary 4-factor arithmetic score (freshness + popularity + trust + quality). Gemini would hallucinate context when source URLs returned 404s.",
  },
  {
    version: "v2.1 – v2.2",
    date: "Jul 4, 2026",
    title: "Newsroom Overhaul — 4 Sources",
    desc: "Expanded from GitHub Trending only to 4 independent sources: Hacker News API, Official Blog RSS feeds, GitHub Releases API, and Product Hunt RSS. Added the Signal Filter and a batch Gemini scoring system. Introduced source diversity cap (max 2 per source).",
    bottleneck: "Deduplicator was URL-only — the same story could appear with different titles from different sources and pass through. Hype bonus made borderline meme content score too high.",
  },
  {
    version: "v2.3",
    date: "Sep 7, 2026",
    title: "Evidence-Driven Editorial Engine",
    desc: "Scrapped the 4-factor arithmetic score entirely. Replaced with an Evidence Builder (compiling objective facts: recency, engagement, source authority, cross-source coverage) and a two-pass Gemini evaluation system (Mission Check → Relative Ranking). Added 30-hour evaluation cache with viral re-scoring. Company diversity cap introduced.",
    bottleneck: "Single-threaded evaluation took too long for large candidate batches (50+ items). The render + upload sequence was completely sequential with no parallelism.",
  },
  {
    version: "v2.4",
    date: "Sep 8, 2026",
    title: "Parallel Evaluation + Resumable Uploads",
    desc: "Pass 1 evaluation now runs in parallel via ThreadPoolExecutor (up to 5 concurrent Gemini chunks). YouTube upload switched to resumable 2 MB chunks with progress logging. Per-video timing reports introduced with proportional ASCII bar charts.",
    bottleneck: "Still no Instagram or Facebook publishing. Rendered videos were only going to YouTube. No cloud storage bridge existed.",
  },
  {
    version: "v2.4",
    date: "Sep 18, 2026",
    title: "Migration from history.json to PostgreSQL + MongoDB Atlas",
    desc: "The pipeline's internal state (candidates, evaluation results, and run history) was migrated from a local JSON file to PostgreSQL. The presentation layer (published video records) was migrated to MongoDB Atlas. This decoupling allows the website to read published records even when the EC2 pipeline is offline.",
    bottleneck: "Still no Instagram or Facebook publishing. Rendered videos were only going to YouTube. No cloud storage bridge existed.",
  },
  {
    version: "v2.5",
    date: "Sep 22, 2026",
    title: "Triple Broadcast + AWS S3 Bridge",
    desc: "Multi-platform publishing engine complete. AWS S3 temporary asset bridge: upload once, generate a 2-hour presigned URL, broadcast concurrently to Instagram Reels (Meta Graph API) and Facebook Pages (Meta Graph API), auto-delete. Concurrent pre-production (script + TTS in parallel across all batch candidates). 100% CPU core saturation via os.cpus().length Remotion concurrency.",
    bottleneck: null,
  },
];

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <Breadcrumbs />

      <header className="mb-16 text-center">
        <div className="pill pill-accent mb-4 mx-auto w-fit">Evolution</div>
        <h1 className="heading-xl text-[var(--tx-1)]">Engineering Journey</h1>
        <p className="mt-4 text-lg text-[var(--tx-2)] leading-relaxed mx-auto max-w-2xl">
          From a single weekend bash script to an industrial-grade cloud-native media system. Each version was driven by a real problem — not a feature checklist.
        </p>
      </header>

      <div className="timeline mt-6 space-y-10">
        {MILESTONES.map((m) => (
          <div key={m.version} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2.25rem-0.6875rem)] top-5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(99,157,255,.6)] border-2 border-[var(--bg)] z-10" />

            <div className="card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="heading-lg text-[var(--tx-1)]">{m.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="mono text-[10px] text-[var(--tx-3)]">{m.date}</span>
                  <span className="mono px-2 py-1 rounded bg-[var(--accent-dim)] border border-[var(--border-active)] text-[var(--accent)] text-xs font-bold">{m.version}</span>
                </div>
              </div>
              <p className="text-[var(--tx-2)] leading-relaxed mb-5">{m.desc}</p>

              {m.bottleneck ? (
                <div className="rounded-xl border border-[rgba(243,94,122,.3)] bg-[rgba(243,94,122,.05)] p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--rose)] shrink-0" />
                    <span className="mono text-[10px] font-bold tracking-widest text-[var(--rose)] uppercase">The Bottleneck That Drove the Next Version</span>
                  </div>
                  <p className="text-sm text-[var(--tx-1)] leading-relaxed">{m.bottleneck}</p>
                </div>
              ) : (
                <div className="rounded-xl border border-[rgba(62,207,142,.3)] bg-[rgba(62,207,142,.05)] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] shrink-0" />
                    <span className="mono text-[10px] font-bold tracking-widest text-[var(--green)] uppercase">Current stable version — no known architectural bottlenecks</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 card p-8 text-center">
        <h3 className="heading-md text-[var(--tx-1)] mb-3">What's next?</h3>
        <p className="text-sm text-[var(--tx-2)] leading-relaxed max-w-xl mx-auto">
          The v3 roadmap includes containerization with Docker Compose (see DOCKER_NOTES.md), PostgreSQL → MongoDB Atlas migration for unified data access, and the DevByte Wiki — a long-form article companion to the short-form video channel.
        </p>
      </div>

      <PagePager
        prev={{ href: "/how-it-works", label: "How It Works" }}
        next={{ href: "/technology", label: "Technology Stack" }}
      />
    </div>
  );
}
