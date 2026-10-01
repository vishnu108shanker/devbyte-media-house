import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TableOfContents from "@/components/ui/TableOfContents";
import PagePager from "@/components/ui/PagePager";

const TOC = [
  { id: "overview",    title: "Overview" },
  { id: "discovery",   title: "Stage 1 — Discovery" },
  { id: "ingestion",   title: "Stage 2 — Ingestion" },
  { id: "editorial",   title: "Stage 3 — AI Newsroom" },
  { id: "production",  title: "Stage 4 — Production" },
  { id: "broadcast",   title: "Stage 5 — Broadcast" },
];

export default function HowItWorksPage() {
  return (
    /*
      Layout: left content column + right sticky TOC sidebar.
      The TOC is ONLY rendered once — as the right sidebar on ≥lg,
      and as a mobile accordion (inside TableOfContents) on <lg.
      Never render TableOfContents inside the content column or it overlaps.
    */
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <div className="lg:grid lg:grid-cols-[1fr_256px] lg:gap-16 items-start">

        {/* ── Content column ───────────────────────────────── */}
        <article className="min-w-0">
          <Breadcrumbs />

          {/* Mobile TOC — accordion, only on <lg. Hidden on lg+ */}
          <div className="lg:hidden mb-10">
            <TableOfContents items={TOC} />
          </div>

          {/* Page header */}
          <header className="mb-14">
            <div className="pill pill-accent mb-4">Architecture</div>
            <h1 className="heading-xl text-[var(--tx-1)]">How It Works</h1>
            <p className="mt-4 text-lg text-[var(--tx-2)] leading-relaxed max-w-2xl">
              The DEVLAR pipeline is a deterministic, five-stage state machine. It runs periodically via cron on an AWS EC2 instance, traversing from internet discovery to multi-platform broadcast entirely without human oversight.
            </p>
          </header>

          <div className="space-y-20">

            {/* ── Overview ─────────────────────────────────── */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)]">Overview</h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                Unlike typical AI wrappers that fetch one URL and paraphrase it, DEVLAR is modelled as a digital newsroom. Every stage has a single, well-defined responsibility, and failure in one stage never cascades — each gate protects the next. The pipeline starts with four independent discovery streams and fans in, running through deterministic hard-gates before a single LLM token is spent.
              </p>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                The editorial mission is strict: <em>"DevByte covers products, releases, tools, developer infrastructure, AI breakthroughs, and major engineering announcements — not essays, tutorials, opinion pieces, or long-form discussions."</em>
              </p>

              <div className="card p-6 border-l-4 border-l-[var(--accent)] bg-[var(--accent-dim)] not-prose">
                <h4 className="font-semibold text-[var(--tx-1)] mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[var(--accent)] shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                  Zero Permanent Storage
                </h4>
                <p className="text-sm text-[var(--tx-2)] leading-relaxed">
                  The engine runs on ephemeral EC2 compute. No video files are stored permanently. Every rendered MP4 is relayed via a 2-hour presigned S3 URL, broadcast to all platforms concurrently, and then automatically deleted — storage costs remain absolutely flat at any scale.
                </p>
              </div>
            </section>

            {/* ── Stage 1: Discovery ───────────────────────── */}
            <section id="discovery" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] mono text-sm font-bold text-[var(--accent)]">01</span>
                Content Discovery
              </h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                The pipeline fans out to four independent collectors running concurrently. A failure in one source never blocks the batch — each collector is isolated and writes to its own output before they are merged downstream.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name:"Hacker News API",    type:"JSON REST",   desc:"Polls top 50 stories. Items are scored for engagement velocity and tech-topic relevance before passing the signal filter." },
                  { name:"Official Blogs",     type:"RSS / Atom",  desc:"Direct feeds from OpenAI, Google DeepMind, Anthropic, Meta, and AWS. No crawling needed — these are curated high-trust sources." },
                  { name:"GitHub Releases",    type:"REST API",    desc:"Watches /releases/latest on a curated list of tracked infrastructure repositories. Picks up major version bumps." },
                  { name:"Product Hunt",       type:"RSS Feed",    desc:"Developer tools, AI infrastructure, and productivity launches. Score- and recency-filtered before normalization." },
                ].map(item => (
                  <div key={item.name} className="card p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <strong className="text-sm font-semibold text-[var(--tx-1)]">{item.name}</strong>
                      <span className="mono text-[9px] border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--tx-3)] shrink-0">{item.type}</span>
                    </div>
                    <p className="text-xs text-[var(--tx-2)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Stage 2: Ingestion / Filtering ──────────── */}
            <section id="ingestion" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] mono text-sm font-bold text-[var(--accent)]">02</span>
                Ingestion Pipeline (Zero-Token Gates)
              </h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                Before a single Gemini API call is made, every candidate must pass five deterministic hard-gates in sequence. These are rule-based — fast, cheap, and predictable. They exist so the expensive AI editorial layer only sees structurally sound, non-duplicate, technically relevant content.
              </p>

              <div className="space-y-3">
                {[
                  { color:"var(--accent)",  label:"Normalizer",       desc:"Maps all four sources into a single unified candidate schema. Field names, date formats, and URL structures are standardized here." },
                  { color:"var(--amber)",   label:"Signal Filter",    desc:"Keyword whitelist + noise blacklist. Whitelists technical topics; blacklists tutorial, guide, opinion, essay, roundup, vercel, cloudflare." },
                  { color:"var(--amber)",   label:"Quality Filter",   desc:"Enforces schema presence. Drops items with missing titles, empty descriptions, or malformed URLs." },
                  { color:"var(--green)",   label:"Deduplicator",     desc:"Story-level identity check across sources using canonical URL normalization and fuzzy title similarity. Prevents the same story appearing twice." },
                  { color:"var(--rose)",    label:"Staleness Gate",   desc:"Hard 14-day recency cutoff. Any item older than 14 days is dropped without consulting the LLM." },
                ].map(({ color, label, desc }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-0.5 h-10 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <div className="flex-1">
                      <strong className="block text-sm font-semibold text-[var(--tx-1)] mb-0.5">{label}</strong>
                      <p className="text-sm text-[var(--tx-2)] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Stage 3: AI Newsroom ─────────────────────── */}
            <section id="editorial" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] mono text-sm font-bold text-[var(--accent)]">03</span>
                AI Newsroom — Two-Pass Gemini Editorial
              </h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                Survivors from the ingestion pipeline enter the AI editorial layer. Instead of arbitrary composite scores, DEVLAR uses an evidence-driven approach: an Evidence Builder compiles objective facts, then Gemini Flash evaluates each item twice. Temperature is fixed at 0.0 and all responses are validated against a strict JSON schema.
              </p>

              <blockquote className="border-l-4 border-[var(--accent)] pl-5 my-6 text-[var(--tx-2)] italic text-sm leading-relaxed">
                "Code determines what is allowed. Gemini determines what is worth publishing."
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="card p-6 border-t-2 border-t-[var(--accent)]">
                  <h3 className="font-bold text-[var(--tx-1)] mb-2">Pass 1 — Mission Check</h3>
                  <p className="text-sm text-[var(--tx-2)] leading-relaxed">Items are batched in chunks of 10. Up to 5 chunks are sent concurrently via <code className="mono text-[var(--accent)] text-xs">ThreadPoolExecutor</code>. Gemini classifies each item as <code className="mono text-xs text-[var(--green)]">publish</code> or <code className="mono text-xs text-[var(--rose)]">reject</code> with a concrete 1–2 sentence editorial reason grounded in factual evidence, not a numeric score.</p>
                </div>
                <div className="card p-6 border-t-2 border-t-[var(--accent-bright)]">
                  <h3 className="font-bold text-[var(--tx-1)] mb-2">Pass 2 — Relative Ranking</h3>
                  <p className="text-sm text-[var(--tx-2)] leading-relaxed">All approved items are ranked 1..N in strict order by newsworthiness. Large batches (50+ items) use segmented tournament ranking. Company diversity (max 2 per company) and source diversity (max 3 per source) constraints are enforced. The top 5 items form the production queue.</p>
                </div>
              </div>

              <div className="card p-5 bg-[rgba(245,166,35,.05)] border-[rgba(245,166,35,.3)]">
                <h4 className="text-sm font-semibold text-[var(--tx-1)] mb-2">30-Hour Cache + Re-Scoring</h4>
                <p className="text-sm text-[var(--tx-2)] leading-relaxed">Evaluation results are cached for 30 hours in <code className="mono text-xs">data/evaluation_cache.json</code>. Automatic re-scoring is triggered if a cached item goes viral (HN points surge &gt;50%) or gains cross-source corroboration before the cache expires.</p>
              </div>
            </section>

            {/* ── Stage 4: Production ──────────────────────── */}
            <section id="production" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] mono text-sm font-bold text-[var(--accent)]">04</span>
                Concurrent Video Production
              </h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                The production phase is divided into two concurrency models. First, all script generation (Gemini) and TTS synthesis (Edge TTS) run in parallel for all queued stories simultaneously — all audio files are ready in ~10–15 seconds. Then Remotion renders each video sequentially, pinning 100% of the EC2 CPU cores per render.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon:"✍️", label:"Gemini Scriptwriter",   desc:"8 category-specific prompt templates (update, free_alternative, hidden_gem, productivity, comparison, weekly_roundup, best_for, prompt_trick). Scripts are generated concurrently for all queued stories." },
                  { icon:"🎙️", label:"Edge TTS Neural Voice",  desc:"Microsoft Azure neural voices with sentence-level timing metadata. Timing data drives exact scene-cut boundaries in the renderer." },
                  { icon:"🎬", label:"Remotion Multi-Core",    desc:"React video engine. Invokes --concurrency=${os.cpus().length} so every CPU core is pinned during render. Generates 1080×1920 MP4 with spring physics and dynamic timing." },
                  { icon:"⚙️", label:"Post-LLM Validator",    desc:"Sanitizes Gemini script output. Checks structural integrity, field presence, and enforces the expected timing schema before TTS is called." },
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="card p-5">
                    <div className="text-2xl mb-3">{icon}</div>
                    <strong className="block text-sm font-semibold text-[var(--tx-1)] mb-1">{label}</strong>
                    <p className="text-xs text-[var(--tx-2)] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="code-block text-[var(--tx-2)] text-xs">
                <pre>{`// Dynamic concurrency — pins ALL available CPU cores
const concurrency = os.cpus().length;
await renderMedia({ concurrency, ... });

// Timing example — from actual pipeline performance log
// Gemini Script :  6.2s  █
// TTS Voice     :  4.1s  █
// Remotion      : 58.4s  ████████████████████
// Total         : 142.0s`}</pre>
              </div>
            </section>

            {/* ── Stage 5: Broadcast ───────────────────────── */}
            <section id="broadcast" className="scroll-mt-24">
              <h2 className="heading-lg mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface)] border border-[var(--border)] mono text-sm font-bold text-[var(--accent)]">05</span>
                Triple Broadcast via S3 Bridge
              </h2>
              <p className="text-[var(--tx-2)] leading-relaxed mb-6">
                Once a video is rendered, it takes two upload paths simultaneously. The direct YouTube upload uses the Data API v3 with OAuth 2.0 and 2 MB resumable chunks. For Instagram and Facebook, the video is uploaded once to AWS S3 and a 2-hour presigned URL is generated. Both Meta APIs receive that URL concurrently. As soon as both platforms confirm publication, the S3 object is automatically deleted.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { platform:"YouTube Shorts", method:"OAuth 2.0 Resumable", detail:"2 MB chunked upload. Metadata (title, tags, description) injected dynamically from the script. Private staging, then immediate publication." },
                  { platform:"Instagram Reels", method:"Meta Graph API",      detail:"REELS media container → async status polling → instant publish. Delivered via the S3 presigned URL bridge." },
                  { platform:"Facebook Pages", method:"Meta Graph API",       detail:"Page Video endpoint. Asynchronous processing with status verification. Concurrent with Instagram via the same S3 presigned URL." },
                ].map(({ platform, method, detail }) => (
                  <div key={platform} className="card p-5 border-t-2 border-t-[var(--green)]">
                    <h3 className="font-bold text-sm text-[var(--tx-1)] mb-1">{platform}</h3>
                    <span className="mono text-[10px] text-[var(--tx-3)] block mb-3">{method}</span>
                    <p className="text-xs text-[var(--tx-2)] leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          <PagePager
            prev={{ href: "/", label: "Home" }}
            next={{ href: "/journey", label: "Engineering Journey" }}
          />
        </article>

        {/* ── Right sticky TOC sidebar — desktop only ────── */}
        <aside className="hidden lg:block">
          <TableOfContents items={TOC} />
        </aside>

      </div>
    </div>
  );
}
