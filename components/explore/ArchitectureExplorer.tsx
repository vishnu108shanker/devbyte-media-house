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
    <div className="space-y-8">
      {/* Horizontal Stage Selector Navigation */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {stages.map((stage) => {
          const isSelected = stage.id === selectedId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedId(stage.id)}
              className={`flex flex-col text-left rounded-xl border p-3.5 transition text-xs ${
                isSelected
                  ? "border-blue-500 bg-zinc-900 shadow-sm ring-1 ring-blue-500/20 text-zinc-100"
                  : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/50 text-zinc-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-zinc-500 font-bold">
                  STAGE {stage.num}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isSelected ? "bg-blue-400" : "bg-zinc-700"
                  }`}
                />
              </div>
              <span className="mt-2 font-semibold text-zinc-200">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-zinc-800 pb-6 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue-400">
                STAGE {current.num}
              </span>
              <span className="text-zinc-600 font-mono">•</span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
                {current.name}
              </h2>
            </div>
            <p className="mt-1 text-xs font-mono text-zinc-400">
              {current.tagline}
            </p>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
            {current.description}
          </p>
        </div>

        {/* Subcomponents Grid */}
        <div className="mt-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
            Active Subsystems &amp; Protocols
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {current.components.map((comp) => (
              <div
                key={comp.name}
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-200">
                    {comp.name}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {comp.type}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {comp.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Invariants & Guarantees */}
        <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
            Deterministic Invariants &amp; Guarantees
          </span>
          <ul className="mt-2 space-y-1.5 text-xs text-zinc-400">
            {current.hardInvariants.map((inv, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-blue-400 text-xs">✓</span>
                <span>{inv}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
