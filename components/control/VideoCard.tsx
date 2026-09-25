import { Publication } from "@/lib/types";
import PlatformBadge from "./PlatformBadge";
import PerformanceSnapshot from "./PerformanceSnapshot";

interface VideoCardProps {
  publication: Publication;
}

export default function VideoCard({ publication }: VideoCardProps) {
  const publishDate = new Date(publication.published_at).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-sm space-y-4 transition hover:border-zinc-700">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-400 font-semibold">
              {publication.video_id}
            </span>
            <span className="text-zinc-600 font-mono">•</span>
            <span className="font-mono text-xs text-zinc-500">
              {publishDate}
            </span>
          </div>
          <h3 className="mt-1 text-base sm:text-lg font-bold text-zinc-100">
            {publication.title}
          </h3>
        </div>

        <div className="shrink-0 font-mono text-[11px] text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800">
          Total Time: {publication.performance?.total_s?.toFixed(1)}s
        </div>
      </div>

      {/* Platform Broadcast Links */}
      <div className="space-y-1.5">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Broadcast Delivery Targets
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <PlatformBadge
            platformName="YouTube"
            data={publication.platforms.youtube}
          />
          <PlatformBadge
            platformName="Instagram"
            data={publication.platforms.instagram}
          />
          <PlatformBadge
            platformName="Facebook"
            data={publication.platforms.facebook}
          />
        </div>
      </div>

      {/* Performance Timers Bar Chart */}
      <PerformanceSnapshot performance={publication.performance} />
    </div>
  );
}
