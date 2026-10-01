"use client";

import { useState } from "react";

export interface StageDetail {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  components: {
    name: string;
    role: string;
    type: string;
  }[];
  hardInvariants: string[];
}

export default function ArchitectureExplorer({
  stages,
}: {
  stages: StageDetail[];
}) {
  const [selectedId, setSelectedId] = useState<string>(stages[0]?.id || "discovery");
  const current = stages.find((s) => s.id === selectedId) || stages[0];

  return (
    <div className="space-y-8" id="architecture-explorer">
      {/* Horizontal Stage Selector Navigation */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
        {stages.map((stage) => {
          const isSelected = stage.id === selectedId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedId(stage.id)}
              type="button"
              className={`flex flex-col text-left rounded-2xl border p-4 transition-all duration-200 text-xs ${
                isSelected
                  ? "border-blue-500 bg-[var(--bg-card)] shadow-md ring-1 ring-blue-500/30 text-[var(--text-primary)] -translate-y-0.5"
                  : "border-[var(--border-primary)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--text-muted)] font-bold">
                  STAGE {stage.num}
                </span>
                <span
                  className={`h-2 w-2 rounded-full transition-all ${
                    isSelected
                      ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] scale-110"
                      : "bg-[var(--border-hover)]"
                  }`}
                />
              </div>
              <span className="mt-2.5 font-bold text-[var(--text-primary)] text-sm font-mono truncate">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-6 sm:p-8 backdrop-blur-md shadow-sm space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-[var(--border-primary)] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                STAGE {current.num}
              </span>
              <span className="text-[var(--text-muted)] font-mono">•</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-mono">
                {current.name}
              </h2>
            </div>
            <p className="mt-1 text-xs font-mono text-blue-500 font-medium">
              {current.tagline}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Subcomponents Grid */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            <h3 className="font-mono text-xs uppercase font-bold tracking-wider text-[var(--text-primary)]">
              Active Subsystems &amp; Execution Protocols
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {current.components.map((comp) => (
              <div
                key={comp.name}
                className="rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-surface)] p-4 transition duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)] font-mono truncate">
                      {comp.name}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] text-[var(--text-muted)] bg-[var(--bg-subtle)] px-2 py-0.5 rounded border border-[var(--border-subtle)] font-medium">
                      {comp.type}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {comp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invariants & Guarantees */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-bold">🛡️</span>
            <span className="font-mono text-xs uppercase tracking-wider text-blue-500 font-bold">
              Deterministic Invariants &amp; Architectural Guarantees
            </span>
          </div>
          <ul className="mt-3 space-y-2 text-xs text-[var(--text-secondary)]">
            {current.hardInvariants.map((inv, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="font-mono text-emerald-500 font-bold text-sm leading-none">✓</span>
                <span className="leading-relaxed">{inv}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
