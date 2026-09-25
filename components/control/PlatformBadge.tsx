import { PlatformEntry } from "@/lib/types";

interface PlatformBadgeProps {
  platformName: string;
  data: PlatformEntry;
}

export default function PlatformBadge({
  platformName,
  data,
}: PlatformBadgeProps) {
  const isSuccess = data?.status === "success" && Boolean(data?.url);
  const isFailed = data?.status === "failed";
  const isPending = !data?.status;

  if (isSuccess && data.url) {
    return (
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition group"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
        <span className="capitalize">{platformName}</span>
        <span className="text-[10px] text-emerald-400/80 group-hover:translate-x-0.5 transition-transform">
          ↗
        </span>
      </a>
    );
  }

  if (isFailed) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-xs font-mono text-rose-300">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
        <span className="capitalize">{platformName} (Failed)</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-mono text-zinc-500">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-700"></span>
      <span className="capitalize">{platformName} (N/A)</span>
    </span>
  );
}
