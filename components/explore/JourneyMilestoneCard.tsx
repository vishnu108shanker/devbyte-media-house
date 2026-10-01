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
  const milestoneId = `milestone-${milestone.version.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div id={milestoneId} className="relative group scroll-mt-24">
      {/* Timeline Node Dot */}
      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-primary)] group-hover:border-blue-500 transition shadow-sm">
        <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm font-bold text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-lg border border-blue-500/20">
          {milestone.version}
        </span>
        <span className="text-xs font-mono text-[var(--text-muted)]">•</span>
        <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
          {milestone.date}
        </span>
      </div>

      <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-mono">
        {milestone.title}
      </h3>

      <div className="mt-4 rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-5 sm:p-6 backdrop-blur-md space-y-4 shadow-sm transition hover:border-[var(--border-hover)]">
        {/* Problem → Decision → Result Triad */}
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3 text-xs">
          {/* Problem */}
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-rose-500 flex items-center gap-1">
                <span>⚠️</span> 01 · Bottleneck
              </span>
              <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                {milestone.problem}
              </p>
            </div>
          </div>

          {/* Decision */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-blue-500 flex items-center gap-1">
                <span>⚙️</span> 02 · Architectural Pivot
              </span>
              <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                {milestone.decision}
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-500 flex items-center gap-1">
                <span>✅</span> 03 · Measured Outcome
              </span>
              <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                {milestone.result}
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Deep Dive */}
        {expanded && (
          <div className="mt-4 border-t border-[var(--border-primary)] pt-4 text-xs text-[var(--text-secondary)] leading-relaxed animate-fade-in bg-[var(--bg-subtle)]/50 p-4 rounded-xl">
            <div className="font-mono text-[11px] text-[var(--text-primary)] mb-1.5 font-bold flex items-center gap-1.5">
              <span>🔬</span>
              <span>Engineering Deep-Dive &amp; Lessons:</span>
            </div>
            <p>{milestone.deepDive}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {milestone.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-[var(--bg-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)] border border-[var(--border-primary)]"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            type="button"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-500 hover:text-blue-400 font-semibold transition"
          >
            <span>{expanded ? "Hide Technical Details" : "Read Technical Deep-Dive"}</span>
            <span>{expanded ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
