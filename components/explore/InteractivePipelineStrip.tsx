"use client";
import { useState } from "react";

const STAGES = [
  { id:"discovery", n:"01", title:"Content Discovery",  sub:"4 Independent Streams",
    icon:"📡",
    intro:"Runs four independent collectors concurrently — failure in one never blocks the batch.",
    items:[
      { name:"Hacker News API",    type:"JSON REST",        desc:"Polls top stories with score & discussion velocity." },
      { name:"Engineering Blogs",  type:"RSS / Atom",       desc:"Direct feeds from OpenAI, Google DeepMind, Meta, AWS." },
      { name:"GitHub Releases",    type:"REST API",         desc:"Major version releases from tracked infra repos." },
      { name:"Product Hunt",       type:"RSS Feed",         desc:"Developer tools, AI infra, and productivity launches." },
    ],
    metric:"4 collectors", color:"var(--accent)" },
  { id:"filtering", n:"02", title:"Signal Gates",        sub:"Zero LLM Tokens Wasted",
    icon:"🛡️",
    intro:"Five deterministic hard-gates reject noise before a single Gemini token is spent.",
    items:[
      { name:"Normalizer",      type:"Schema",       desc:"Maps all sources into one unified candidate schema." },
      { name:"Signal Filter",   type:"Keyword Gate", desc:"Whitelists technical news; blacklists tutorials & opinions." },
      { name:"Quality Gate",    type:"Structural",   desc:"Drops malformed URLs and empty descriptions." },
      { name:"Deduplicator",    type:"Fuzzy Match",  desc:"Cross-source dedup via canonical URL + title similarity." },
      { name:"Staleness Gate",  type:"14-Day Cutoff",desc:"Discards anything older than 14 days." },
    ],
    metric:"0 LLM tokens pre-filter", color:"var(--green)" },
  { id:"editorial", n:"03", title:"AI Newsroom",         sub:"Two-Pass Gemini Judgment",
    icon:"🧠",
    intro:"Replaces arbitrary point formulas with factual evidence + two sequential Gemini passes.",
    items:[
      { name:"Evidence Builder",  type:"Factual",       desc:"Compiles recency, upvotes, source authority, corroboration." },
      { name:"Pass 1 — Mission Check", type:"Parallel chunks of 10", desc:"Gemini returns publish/reject with cited evidence." },
      { name:"Pass 2 — Ranking",  type:"Tournament 1..N", desc:"Global strict leaderboard with category diversity rules." },
      { name:"30-Hour Cache",     type:"Semantic Cache",desc:"Re-scores cached items if engagement surges >50%." },
    ],
    metric:"Temp 0.0 · JSON schema enforced", color:"var(--amber)" },
  { id:"production", n:"04", title:"Video Production",   sub:"100 % CPU Saturation",
    icon:"⚡",
    intro:"Concurrent pre-production then multi-core Remotion render — CPU never idles.",
    items:[
      { name:"Gemini Scriptwriter", type:"Gen AI",    desc:"Generates punchy 45-60 s video scripts in batch." },
      { name:"Edge TTS Voice",      type:"Neural TTS",desc:"Microsoft Azure neural voices with sentence-level timing." },
      { name:"Remotion Renderer",   type:"Multi-Core",desc:"Pins all os.cpus() cores; 1080×1920 MP4 with spring physics." },
      { name:"Dynamic Timing",      type:"Acoustic",  desc:"Scene cuts derived from TTS audio duration metadata." },
    ],
    metric:"os.cpus().length cores pinned", color:"var(--rose)" },
  { id:"broadcast", n:"05", title:"Triple Broadcast",    sub:"Ephemeral S3 Bridge",
    icon:"🚀",
    intro:"Upload once to S3, relay to all platforms via presigned URL, then auto-delete — zero storage cost.",
    items:[
      { name:"YouTube Shorts",  type:"OAuth 2.0 Resumable",  desc:"2 MB chunked upload with metadata injection." },
      { name:"S3 Temp Bridge",  type:"Presigned 2h URL",     desc:"Single upload → Meta-compatible URL → auto-delete." },
      { name:"Instagram Reels", type:"Meta Graph API",        desc:"Container init → async poll → instant publish." },
      { name:"Facebook Pages",  type:"Meta Graph API",        desc:"Page Video endpoint with status polling." },
    ],
    metric:"0 bytes permanent storage", color:"var(--green)" },
];

export default function InteractivePipelineStrip() {
  const [active, setActive] = useState("discovery");
  const stage = STAGES.find(s => s.id === active)!;

  return (
    <div className="space-y-5">
      {/* Stage selector tabs */}
      <div className="grid grid-cols-5 gap-2">
        {STAGES.map(s => {
          const on = s.id === active;
          return (
            <button key={s.id} onClick={() => setActive(s.id)}
              className={`flex flex-col gap-1 p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 ${
                on
                  ? "border-[var(--border-active)] bg-[var(--accent-dim)] shadow-[var(--accent-glow)]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
              }`}>
              <span className="mono text-lg sm:text-xl">{s.icon}</span>
              <span className={`mono text-[10px] font-bold tracking-widest ${on ? "text-[var(--accent)]" : "text-[var(--tx-3)]"}`}>{s.n}</span>
              <span className={`text-xs font-semibold leading-tight hidden sm:block ${on ? "text-[var(--tx-1)]" : "text-[var(--tx-2)]"}`}>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div key={active} className="card anim-fade-in p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[var(--border)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="mono text-sm font-bold" style={{ color: stage.color }}>STAGE {stage.n}</span>
              <span className="pill">{stage.sub}</span>
            </div>
            <h3 className="heading-lg text-[var(--tx-1)]">{stage.title}</h3>
            <p className="mt-2 text-sm text-[var(--tx-2)] leading-relaxed max-w-lg">{stage.intro}</p>
          </div>
          <div className="shrink-0 mono text-xs border border-[var(--border)] rounded-lg px-3 py-1.5 text-[var(--tx-2)] whitespace-nowrap self-start">
            {stage.metric}
          </div>
        </div>

        {/* Subsystem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stage.items.map((item, i) => (
            <div key={item.name}
              className={`rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 space-y-2 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] transition-all duration-150 anim-fade-up delay-${i + 1}`}>
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-[var(--tx-1)]">{item.name}</span>
                <span className="mono text-[9px] border border-[var(--border)] rounded px-1.5 py-0.5 text-[var(--tx-3)] whitespace-nowrap shrink-0">{item.type}</span>
              </div>
              <p className="text-xs text-[var(--tx-2)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
