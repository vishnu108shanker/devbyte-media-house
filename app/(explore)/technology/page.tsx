import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PagePager from "@/components/ui/PagePager";

const STACK = [
  {
    layer: "Runtime",
    color: "var(--accent)",
    items: [
      { name:"Python 3.11",   why:"All collectors, ingestion pipeline, evaluation, editorial engine, uploaders, and S3 bridge. Chosen for ecosystem breadth and async/thread-pool capabilities." },
      { name:"Node.js 18",    why:"Remotion and the batch orchestrator (batch_generate_and_upload.js) run on Node. Mixed runtime because Remotion is a Node/React library." },
    ],
  },
  {
    layer: "AI & Editorial",
    color: "var(--amber)",
    items: [
      { name:"Google Gemini 2.5 Flash",  why:"Primary LLM. Used for both Pass 1 mission checks (parallel chunks) and Pass 2 relative ranking. Temperature fixed at 0.0 for deterministic output. JSON schema enforced." },
      { name:"Gemini 3.5 Flash (fallback)", why:"Automatic fallback model when the primary returns a malformed response after retries. A third fallback (gemini-3.1-flash-lite) is also configured." },
      { name:"Edge TTS (Azure Neural)",  why:"Microsoft's neural voice synthesis. Produces natural-sounding audio with sentence-level timing metadata, which drives exact Remotion scene-cut boundaries." },
    ],
  },
  {
    layer: "Video Production",
    color: "var(--rose)",
    items: [
      { name:"Remotion 4.x",  why:"React-based programmatic video renderer. Chosen because it treats video as a React component — version-controllable, composable, and debuggable like any UI code." },
      { name:"React 19",      why:"Remotion's rendering engine. Spring physics (useSpring), animated transitions, and dynamic layouts are expressed as CSS-in-JS, not After Effects keyframes." },
      { name:"TypeScript 5",  why:"Compile-time safety for the Remotion template layer. Script schema errors are caught before render, not during it." },
      { name:"Tailwind CSS v4",why:"Token-based styling in Remotion templates. Same stack as the website, enabling design consistency." },
      { name:"FFmpeg 6.x",    why:"Audio/video utility layer. Used for duration probing and final MP4 metadata tagging." },
    ],
  },
  {
    layer: "Cloud & Publishing",
    color: "var(--green)",
    items: [
      { name:"AWS EC2",         why:"The pipeline runs on a compute instance — not serverless. Remotion pins 100% of CPU cores during render, which violates serverless timeout limits. EC2 is the right host." },
      { name:"AWS S3 (boto3)",  why:"Ephemeral bridge storage. Video is uploaded once, a presigned URL is generated (2-hour expiry), broadcast to Meta, then auto-deleted. Zero permanent storage cost." },
      { name:"YouTube Data API v3", why:"OAuth 2.0 + resumable 2 MB chunked uploads. Private staging with immediate publication. Token cached in token.json for headless cron execution." },
      { name:"Meta Graph API v19.0",why:"Instagram Reels container lifecycle (init → poll → publish) and Facebook Page Video endpoint. Both receive the S3 presigned URL concurrently." },
    ],
  },
  {
    layer: "Web & Presentation",
    color: "var(--accent-bright)",
    items: [
      { name:"Next.js 16 (App Router)", why:"This site. SSG for all public Explore pages. Server Components with auth-gated MongoDB reads for the Control Center. Deployed on Vercel." },
      { name:"MongoDB Atlas",           why:"Presentation archive — one document per published video. Written by the EC2 pipeline after each publish, read by this site. Deliberately decoupled from PostgreSQL so the website works even when EC2 is offline." },
      { name:"PostgreSQL (EC2)",        why:"Pipeline's internal source of truth — candidates, evaluation results, full run history. Never queried directly by this website." },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <Breadcrumbs />

      <header className="mb-16">
        <div className="pill pill-accent mb-4">The Stack</div>
        <h1 className="heading-xl text-[var(--tx-1)]">Technology</h1>
        <p className="mt-4 text-lg text-[var(--tx-2)] leading-relaxed max-w-2xl">
          Every technology choice is intentional. This page explains not just what is used, but why — and the architectural boundaries that keep the system decoupled and resilient.
        </p>
      </header>

      {/* Architecture separation callout */}
      <div className="card p-7 mb-14 border-[var(--border-active)] bg-[var(--accent-dim)]">
        <h3 className="heading-md text-[var(--tx-1)] mb-4">Why Two Completely Separate Systems?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--tx-2)]">
          <div>
            <div className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] mb-2">DevByte Engine (EC2)</div>
            <p className="leading-relaxed">Python + Node.js video pipeline running on AWS EC2 with PostgreSQL. Orchestrates all production work. Runs on a cron schedule. Pins 100% CPU during render — fundamentally incompatible with serverless function timeout limits.</p>
          </div>
          <div>
            <div className="mono text-[10px] uppercase tracking-widest text-[var(--tx-3)] mb-2">DevByte Media House (Vercel)</div>
            <p className="leading-relaxed">This Next.js website hosted on Vercel. Reads only from MongoDB Atlas — a presentation-layer copy of pipeline output. The website stays up even when EC2 is offline. MongoDB credentials never touch EC2; EC2 Postgres credentials never touch Vercel.</p>
          </div>
        </div>
        <div className="mt-5 mono text-xs text-[var(--tx-3)] border border-[var(--border)] rounded-lg p-3 bg-[var(--bg)] leading-loose">
          <span className="text-[var(--tx-2)]">EC2</span> → publishes video → writes record to <span className="text-[var(--accent)]">MongoDB Atlas</span> → <span className="text-[var(--tx-2)]">Vercel</span> reads Atlas (read-only user) → renders Control Center
        </div>
      </div>

      {/* Stack layers */}
      <div className="space-y-10">
        {STACK.map((layer) => (
          <div key={layer.layer}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: layer.color }} />
              <h2 className="heading-md text-[var(--tx-1)]">{layer.layer}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layer.items.map((item) => (
                <div key={item.name} className="card p-5">
                  <strong className="block text-sm font-semibold text-[var(--tx-1)] mb-2">{item.name}</strong>
                  <p className="text-xs text-[var(--tx-2)] leading-relaxed">{item.why}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* V1 vs V2 comparison */}
      <div className="mt-16 card p-8">
        <h3 className="heading-md text-[var(--tx-1)] mb-6">V1 vs V2 — What Changed</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 pr-4 text-[var(--tx-3)] mono text-[10px] uppercase tracking-wider font-semibold">Aspect</th>
                <th className="text-left py-3 pr-4 text-[var(--rose)] mono text-[10px] uppercase tracking-wider font-semibold">V1</th>
                <th className="text-left py-3 text-[var(--green)] mono text-[10px] uppercase tracking-wider font-semibold">V2 (Current)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {[
                ["Sources",     "GitHub Trending only",       "HN + Blogs + GitHub Releases + Product Hunt"],
                ["Selection",   "Random trending repo",       "Two-pass evidence-driven Gemini editorial"],
                ["Filtering",   "None",                       "Signal → Quality → Dedup → Staleness gates"],
                ["Output",      "1 video, sequential",        "Up to 5 videos, concurrent pre-production"],
                ["Publishing",  "Manual upload",              "YouTube + Instagram + Facebook automatically"],
                ["Storage",     "Local files accumulated",    "Ephemeral S3 bridge — zero permanent storage"],
                ["Concurrency", "Single-threaded",            "ThreadPoolExecutor + 100% CPU Remotion render"],
              ].map(([aspect, v1, v2]) => (
                <tr key={aspect}>
                  <td className="py-3 pr-4 text-[var(--tx-3)] mono text-xs font-medium">{aspect}</td>
                  <td className="py-3 pr-4 text-[var(--tx-2)] text-xs">{v1}</td>
                  <td className="py-3 text-[var(--tx-1)] text-xs font-medium">{v2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PagePager
        prev={{ href: "/journey", label: "Engineering Journey" }}
        next={{ href: "/philosophy", label: "Philosophy" }}
      />
    </div>
  );
}
