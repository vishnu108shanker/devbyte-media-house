"use client";

import { useState } from "react";

interface Stage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  input: string;
  mechanism: string;
  output: string;
  metric: string;
}

const STAGES: Stage[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    subtitle: "4 Live Sources",
    summary: "Scrapes Hacker News JSON API, official engineering RSS feeds, GitHub Releases REST API, and Product Hunt RSS.",
    input: "Raw API payloads & RSS XML feeds",
    mechanism: "Source-specific collectors run concurrently, extracting metadata, timestamps, and engagement signals.",
    output: "Unstructured candidate pool",
    metric: "4 independent collectors",
  },
  {
    id: "filtering",
    step: "02",
    title: "Signal Gates",
    subtitle: "Noise Elimination",
    summary: "Deterministic normalizers, keyword whitelists/blacklists, quality gates, and 14-day recency cutoff.",
    input: "Raw candidate pool",
    mechanism: "Strict regex and schema validation discard tutorials, opinion pieces, roundups, and duplicate URLs before LLM invocation.",
    output: "Normalized, clean candidate set",
    metric: "14-day staleness cutoff",
  },
  {
    id: "editorial",
    step: "03",
    title: "AI Newsroom",
    subtitle: "Two-Pass Gemini",
    summary: "Compiles factual evidence, runs Pass 1 Mission Check in chunks of 10, then Pass 2 Relative Ranking (1..N).",
    input: "Clean candidates + factual evidence",
    mechanism: "Pass 1 classifies publish/reject with factual justification; Pass 2 establishes strict daily leaderboard with category rotation.",
    output: "Top 5 editorial queue",
    metric: "30h cache + viral re-score",
  },
  {
    id: "production",
    step: "04",
    title: "Production",
    subtitle: "100% CPU Render",
    summary: "Concurrent pre-production (scripts + Azure TTS audio) and multi-core Remotion video rendering.",
    input: "Selected candidate script",
    mechanism: "All batch scripts and neural voice synthesized in parallel; Remotion dynamically pins all available CPU cores on EC2.",
    output: "1080×1920 MP4 with sentence-synced graphics",
    metric: "100% host CPU cores pinned",
  },
  {
    id: "broadcast",
    step: "05",
    title: "Publishing",
    subtitle: "Triple Relay",
    summary: "Concurrent broadcast to YouTube Shorts (resumable), Instagram Reels, and Facebook Pages via AWS S3 bridge.",
    input: "Master MP4 video file",
    mechanism: "Uploads once to S3 temporary bucket, issues 2h presigned URL to Meta APIs, uploads to YouTube, and deletes S3 asset post-broadcast.",
    output: "Live public platform URLs",
    metric: "0 bytes permanent S3 storage",
  },
];

export default function InteractivePipelineStrip() {
  const [activeStageId, setActiveStageId] = useState<string>("discovery");
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <div className="space-y-6">
      {/* 5 Stage Selectors */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-5">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`flex flex-col text-left rounded-xl border p-4 transition text-xs ${
                isActive
                  ? "border-blue-500/80 bg-zinc-900 shadow-md ring-1 ring-blue-500/20"
                  : "border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono font-bold text-zinc-500">
                  {stage.step}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-blue-400" : "bg-zinc-700"
                  }`}
                />
              </div>
              <span className="mt-2 font-semibold text-zinc-100 text-sm">
                {stage.title}
              </span>
              <span className="text-[11px] text-zinc-400 mt-0.5">
                {stage.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Mechanics Detail */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800/80 pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-400">
                STAGE {activeStage.step}
              </span>
              <span className="text-zinc-600 font-mono">•</span>
              <h3 className="text-base font-semibold text-zinc-100">
                {activeStage.title} — {activeStage.subtitle}
              </h3>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {activeStage.summary}
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded border border-zinc-800">
            {activeStage.metric}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-3.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Input Payload
            </span>
            <p className="mt-1.5 text-zinc-300 font-medium leading-relaxed">
              {activeStage.input}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-3.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Core Mechanism
            </span>
            <p className="mt-1.5 text-zinc-300 leading-relaxed">
              {activeStage.mechanism}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-3.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Output Artifact
            </span>
            <p className="mt-1.5 text-zinc-300 font-medium leading-relaxed">
              {activeStage.output}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
