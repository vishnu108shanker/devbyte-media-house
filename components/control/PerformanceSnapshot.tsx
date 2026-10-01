import { Publication } from "@/lib/types";

interface PerformanceSnapshotProps {
  performance: Publication["performance"];
}

export default function PerformanceSnapshot({ performance }: PerformanceSnapshotProps) {
  if (!performance) return null;

  const total = Math.max(performance.total_s || 1, 0.01);

  const phases = [
    { label: "Gemini Script", value: performance.gemini_script_s, highlight: false },
    { label: "Validator",     value: performance.validator_s,     highlight: false },
    { label: "TTS Voice",     value: performance.tts_s,           highlight: false },
    { label: "Remotion Render", value: performance.render_s,      highlight: true  },
    { label: "YT Upload",     value: performance.yt_upload_s,     highlight: false },
    { label: "S3 Temp Relay", value: performance.s3_upload_s,     highlight: false },
    { label: "IG Upload",     value: performance.ig_upload_s,     highlight: false },
    { label: "FB Upload",     value: performance.fb_upload_s,     highlight: false },
  ];

  return (
    <div className="rounded-lg border border-zinc-800/80 bg-zinc-950 p-3.5 font-mono text-[11px]">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2.5">
        <span className="font-semibold text-zinc-300 text-xs">⏱  Phase Timing Breakdown</span>
        <span className="font-bold text-emerald-400">Total: {performance.total_s.toFixed(1)}s</span>
      </div>

      <div className="space-y-1.5">
        {phases.map((phase) => {
          const pct = Math.min(100, Math.max(2, ((phase.value || 0) / total) * 100));
          const hasValue = (phase.value || 0) > 0;
          return (
            <div key={phase.label} className="flex items-center gap-2">
              <span className="w-28 shrink-0 text-zinc-400 truncate">{phase.label}</span>
              <div className="flex-1 h-3 rounded bg-zinc-900 overflow-hidden">
                <div
                  style={{ width: `${pct}%` }}
                  className={`h-full transition-all ${
                    phase.highlight
                      ? "bg-blue-500"
                      : hasValue
                      ? "bg-zinc-600"
                      : "bg-transparent"
                  }`}
                />
              </div>
              <span className="w-12 text-right shrink-0 text-zinc-300">
                {hasValue ? `${(phase.value || 0).toFixed(1)}s` : "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
