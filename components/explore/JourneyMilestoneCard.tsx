"use client";

import { useState } from "react";

export interface Milestone {
  version: string;
  date: string;
  title: string;
  problem: string;
  decision: string;
  result: string;
  tech: string[];
  deepDive: string;
}

export default function JourneyMilestoneCard({
  milestone,
}: {
  milestone: Milestone;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative group">
      {/* Timeline Dot */}
      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-blue-500 transition">
        <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm font-bold text-blue-400">
          {milestone.version}
        </span>
        <span className="text-xs font-mono text-zinc-600">•</span>
        <span className="text-xs font-mono text-zinc-400">{milestone.date}</span>
      </div>

      <h2 className="mt-2 text-xl sm:text-2xl font-bold text-zinc-100">
        {milestone.title}
      </h2>

      <div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-sm space-y-4">
        {/* Problem → Decision → Result Triad */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-xs">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider text-rose-400">
              01 · Problem
            </span>
            <p className="mt-2 text-zinc-300 leading-relaxed">
              {milestone.problem}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider text-blue-400">
              02 · Decision
            </span>
            <p className="mt-2 text-zinc-300 leading-relaxed">
              {milestone.decision}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-4">
            <span className="font-mono text-[10px] uppercase font-semibold tracking-wider text-emerald-400">
              03 · Result
            </span>
            <p className="mt-2 text-zinc-300 leading-relaxed">
              {milestone.result}
            </p>
          </div>
        </div>

        {/* Expandable Deep Dive */}
        {expanded && (
          <div className="mt-4 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400 leading-relaxed animate-fadeIn">
            <div className="font-mono text-[11px] text-zinc-300 mb-1 font-semibold">
              Technical Deep Dive:
            </div>
            <p>{milestone.deepDive}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {milestone.tech.map((t) => (
              <span
                key={t}
                className="rounded bg-zinc-950 px-2 py-0.5 font-mono text-[10px] text-zinc-400 border border-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] font-mono text-blue-400 hover:text-blue-300 transition"
          >
            {expanded ? "Collapse Details ↑" : "Read Deep Dive ↓"}
          </button>
        </div>
      </div>
    </div>
  );
}
