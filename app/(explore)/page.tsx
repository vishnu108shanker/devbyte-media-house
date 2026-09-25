import Link from "next/link";
import InteractivePipelineStrip from "@/components/explore/InteractivePipelineStrip";

export default function HomePage() {
  const discoveryQuestions = [
    {
      step: "01",
      question: "What is it?",
      summary: "DEVLAR is an autonomous media system that tracks developer breakthroughs and publishes high-fidelity short-form videos across YouTube, Instagram, and Facebook.",
      linkText: "Learn about the mission",
      href: "/philosophy",
    },
    {
      step: "02",
      question: "How does it work?",
      summary: "A 5-stage deterministic pipeline collects raw signals, filters noise, applies two-pass AI editorial judgment, and renders videos saturating 100% of CPU cores.",
      linkText: "Explore pipeline architecture",
      href: "/how-it-works",
    },
    {
      step: "03",
      question: "Why was it built this way?",
      summary: "Built on strict principles: code determines what is allowed, AI determines what is worth publishing, and the presentation tier is decoupled from EC2 compute.",
      linkText: "Read core principles",
      href: "/philosophy",
    },
    {
      step: "04",
      question: "What technologies make it possible?",
      summary: "Python 3.11 collectors, Google Gemini Flash editorial scoring, Edge TTS neural audio, Remotion 4.x multi-core rendering, and AWS S3 ephemeral bridges.",
      linkText: "Inspect the stack table",
      href: "/technology",
    },
    {
      step: "05",
      question: "What has changed over time?",
      summary: "Evolved across 7 major milestones from a single-source GitHub scraper into a multi-source, triple-platform autonomous media house.",
      linkText: "Review engineering journey",
      href: "/journey",
    },
  ];

  const highlights = [
    { label: "Independent Collectors", value: "4", detail: "HN, GitHub, Product Hunt, RSS" },
    { label: "Hardware Saturation", value: "100%", detail: "All CPU cores pinned on render" },
    { label: "Publishing Platforms", value: "3", detail: "YouTube, Instagram, Facebook" },
    { label: "Permanent S3 Storage", value: "0 B", detail: "Ephemeral presigned asset cleanup" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20">
      {/* Brand Hero */}
      <section className="text-center pt-8 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
          <span>DEVLAR · Public Identity of DevByte Media House</span>
        </div>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl font-mono text-zinc-100">
          DEVLAR
        </h1>
        <p className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-400 font-mono">
          DevByte Media House
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed">
          An automated media system for discovering, understanding, generating, and publishing technical content.
        </p>

        {/* Life cycle sequence */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-200">Discover</span>
          <span>→</span>
          <span className="text-zinc-200">Understand</span>
          <span>→</span>
          <span className="text-zinc-200">Generate</span>
          <span>→</span>
          <span className="text-zinc-200">Publish</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/how-it-works"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-500"
          >
            How DevByte Works →
          </Link>
          <Link
            href="/journey"
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            The Engineering Journey
          </Link>
        </div>

        {/* System metrics strip */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 text-center"
            >
              <div className="font-mono text-2xl sm:text-3xl font-bold text-blue-400">
                {item.value}
              </div>
              <div className="mt-1 text-xs font-medium text-zinc-200">
                {item.label}
              </div>
              <div className="mt-0.5 text-[11px] text-zinc-500 font-mono">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pipeline Lifecycle */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800 pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Interactive System Lifecycle
            </span>
            <h2 className="mt-1 text-2xl font-bold text-zinc-100">
              The 5 Pipeline Stages
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-sm">
            Select any stage below to inspect its input payload, execution mechanism, and output artifact.
          </p>
        </div>

        <InteractivePipelineStrip />
      </section>

      {/* Structured Discovery Sequence */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            System Exploration
          </span>
          <h2 className="mt-1 text-2xl font-bold text-zinc-100">
            Understanding the Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {discoveryQuestions.map((q) => (
            <div
              key={q.step}
              className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 transition hover:border-zinc-700"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-500">
                  {q.step}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-zinc-200">
                  {q.question}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {q.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60">
                <Link
                  href={q.href}
                  className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
                >
                  <span>{q.linkText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Identity Callout */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Brand &amp; System Decoupling
            </span>
            <h3 className="mt-1 text-xl font-bold text-zinc-100">
              DEVLAR is the Public Identity of DevByte Media House
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              DevByte Media House is an evolving automated media system built around technical content discovery, processing, and publication. DEVLAR provides its clean public showcase and operational console, decoupled from backend pipeline execution.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/technology"
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
            >
              Stack Specification
            </Link>
            <Link
              href="/control"
              className="rounded-lg bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-700 transition"
            >
              Control Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
