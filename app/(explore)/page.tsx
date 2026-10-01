import Link from "next/link";
import InteractivePipelineStrip from "@/components/explore/InteractivePipelineStrip";
import { GHIcon, LIIcon, YTIcon } from "@/components/ui/Icons";

/* ── Static data ─────────────────────────────────────────── */
const STATS = [
  { value:"4",    label:"Data Sources",       sub:"HN · GitHub · Product Hunt · RSS" },
  { value:"100%", label:"CPU Saturation",     sub:"All cores pinned on render" },
  { value:"3",    label:"Platforms",          sub:"YouTube · Instagram · Facebook" },
  { value:"0 B",  label:"Cloud Storage",      sub:"Ephemeral S3 bridge" },
];

const CARDS = [
  { step:"01", title:"What is DEVLAR?",
    body:"An autonomous media pipeline that discovers developer news, applies two-pass Gemini AI editorial judgment, and renders + uploads short-form videos — hands-free.",
    href:"/philosophy", cta:"Read the philosophy" },
  { step:"02", title:"How does the pipeline work?",
    body:"Five deterministic stages: collect → filter → AI newsroom → render at 100% CPU → simultaneous broadcast to YouTube, Instagram, and Facebook.",
    href:"/how-it-works", cta:"Explore the architecture" },
  { step:"03", title:"What technologies power it?",
    body:"Python collectors, Gemini Flash editorial brain, Edge TTS neural voice, Remotion multi-core renderer, AWS S3 ephemeral bridges, and Next.js + MongoDB Atlas for presentation.",
    href:"/technology", cta:"Inspect the stack" },
  { step:"04", title:"How did it evolve?",
    body:"Started as a GitHub scraper prototype. Grew through 7 architectural milestones into a triple-platform cloud media system deployed on AWS EC2.",
    href:"/journey", cta:"View the journey" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="hero-mesh grid-overlay relative min-h-[calc(100dvh-3.5rem)] flex flex-col items-center justify-center text-center px-4 pb-16 pt-20">

        {/* Live badge */}
        <div className="anim-fade-up pill pill-accent mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] dot-pulse" />
          Autonomous Media System · Live on EC2
        </div>

        {/* Headline */}
        <h1 className="anim-fade-up delay-1 heading-hero mono max-w-4xl">
          <span className="shimmer-text">DEVLAR</span>
          <br />
          <span className="text-[var(--tx-1)]">DevByte Media House</span>
        </h1>

        {/* Subline */}
        <p className="anim-fade-up delay-2 mt-6 max-w-2xl text-lg text-[var(--tx-2)] leading-relaxed">
          An AI-powered pipeline that reads the internet, writes scripts, records neural audio, renders programmatic videos at full CPU speed, and simultaneously publishes to three platforms — entirely without human intervention.
        </p>

        {/* Flow strip */}
        <div className="anim-fade-up delay-3 mt-8 flex flex-wrap items-center justify-center gap-2 mono text-xs text-[var(--tx-2)]">
          {["Discover","Filter","AI Editorial","Render","Broadcast"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--tx-1)] font-semibold">{step}</span>
              {i < arr.length - 1 && <span className="text-[var(--accent)]">→</span>}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="anim-fade-up delay-4 mt-10 flex flex-wrap gap-3 justify-center">
          <Link href="/how-it-works" className="btn btn-primary">
            How It Works
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/journey" className="btn">Engineering Journey</Link>
          <a href="https://github.com/vishnu108shanker/Devbyte-Engine.git"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost flex items-center gap-2">
            <GHIcon className="h-4 w-4" />Source Code
          </a>
        </div>

        {/* Social pills */}
        <div className="anim-fade-up delay-5 mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { href:"https://github.com/vishnu108shanker", label:"GitHub Profile", Icon:GHIcon },
            { href:"https://www.linkedin.com/in/vishnu-shanker-mishra-0b2403310", label:"LinkedIn", Icon:LIIcon },
            { href:"https://www.youtube.com/@devlarhq", label:"YouTube Shorts", Icon:YTIcon },
          ].map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--tx-1)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] hover:-translate-y-0.5 transition-all duration-150">
              <Icon className="h-4 w-4" />{label}
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--tx-3)]">
          <span className="mono text-[10px] tracking-widest uppercase">Scroll to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-5 w-5 animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </section>

      {/* ══ STATS STRIP ════════════════════════════════════════ */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)]">
          {STATS.map(({ value, label, sub }) => (
            <div key={label} className="py-8 px-6 text-center group hover:bg-[var(--surface)] transition-colors duration-200">
              <div className="mono text-3xl sm:text-4xl font-extrabold text-[var(--accent)] group-hover:text-[var(--accent-bright)] transition-colors">{value}</div>
              <div className="mt-1 font-semibold text-sm text-[var(--tx-1)]">{label}</div>
              <div className="mt-0.5 mono text-[11px] text-[var(--tx-3)]">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ INTERACTIVE PIPELINE ════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="pill pill-accent mb-4">Interactive Architecture</div>
          <h2 className="heading-xl text-[var(--tx-1)] max-w-2xl">
            The 5-Stage Pipeline
          </h2>
          <p className="mt-3 text-[var(--tx-2)] max-w-xl">
            Click any stage to inspect its inputs, mechanisms, and outputs in detail.
          </p>
        </div>
        <InteractivePipelineStrip />
      </section>

      {/* ══ DISCOVERY CARDS ════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 mx-auto max-w-7xl border-t border-[var(--border)]">
        <div className="mb-10">
          <div className="pill mb-4">Navigate the Docs</div>
          <h2 className="heading-xl text-[var(--tx-1)]">Explore the System</h2>
          <p className="mt-3 text-[var(--tx-2)] max-w-xl">Four core questions — click through to the full documentation page for each.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CARDS.map(({ step, title, body, href, cta }, i) => (
            <article key={step}
              className={`card p-6 sm:p-7 flex flex-col gap-5 anim-fade-up delay-${i + 1}`}>
              <div className="flex items-start justify-between">
                <span className="mono text-[10px] font-bold tracking-widest text-[var(--tx-3)]">{step}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-4 w-4 text-[var(--tx-3)]"><path d="m9 18 6-6-6-6"/></svg>
              </div>
              <div>
                <h3 className="heading-md text-[var(--tx-1)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--tx-2)] leading-relaxed">{body}</p>
              </div>
              <Link href={href}
                className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-bright)] group transition-colors">
                {cta}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ══ CTA BAND ════════════════════════════════════════════ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-1)] py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="heading-xl text-[var(--tx-1)]">See It Running Live</h2>
          <p className="text-[var(--tx-2)]">
            The pipeline runs autonomously on AWS EC2. The Control Center shows real-time publishing stats and performance telemetry from each batch.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/control" className="btn btn-primary">Open Control Center</Link>
            <Link href="/how-it-works" className="btn">Read Architecture</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
