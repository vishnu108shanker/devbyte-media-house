import Link from "next/link";
import { getOverviewStats, getPublications } from "@/lib/data";
import VideoCard from "@/components/control/VideoCard";

export default async function ControlOverviewPage() {
  const stats = await getOverviewStats();
  const publications = await getPublications();
  const recentPublications = publications.slice(0, 3);

  const lastRunFormatted = stats.lastPublishedAt
    ? new Date(stats.lastPublishedAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "No runs recorded";

  return (
    <div className="space-y-8">
      {/* Overview Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
            <span>OPERATIONAL CONSOLE</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">DEVLAR Control Center</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold font-mono text-zinc-100">
            System Overview
          </h1>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Pipeline Autonomous · Atlas Decoupled</span>
        </div>
      </div>

      {/* Top Level Metric Ribbons */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            Today&apos;s Output
          </span>
          <div className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-zinc-100">
            {stats.todayCount}
          </div>
          <span className="mt-1 block text-[11px] text-zinc-400">
            Videos published today
          </span>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            Archive Total
          </span>
          <div className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-blue-400">
            {stats.totalPublications}
          </div>
          <span className="mt-1 block text-[11px] text-zinc-400">
            Total recorded publications
          </span>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            Avg Render Duration
          </span>
          <div className="mt-1 font-mono text-2xl sm:text-3xl font-bold text-amber-400">
            {stats.avgRenderSeconds}s
          </div>
          <span className="mt-1 block text-[11px] text-zinc-400 font-mono">
            100% CPU core saturation
          </span>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            Last Publication
          </span>
          <div className="mt-1 font-mono text-sm sm:text-base font-bold text-zinc-200 truncate">
            {lastRunFormatted}
          </div>
          <span className="mt-1 block text-[11px] text-zinc-400 font-mono">
            Latest pipeline execution
          </span>
        </div>
      </div>

      {/* Platform Success Breakdown */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
          Platform Delivery Statistics
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">YouTube Shorts</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            </div>
            <div className="mt-2 font-mono text-2xl font-bold text-zinc-100">
              {stats.youtubeSuccess}
            </div>
            <span className="text-[11px] text-zinc-500 font-mono">
              Resumable OAuth 2.0 Uploads
            </span>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">Instagram Reels</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            </div>
            <div className="mt-2 font-mono text-2xl font-bold text-zinc-100">
              {stats.instagramSuccess}
            </div>
            <span className="text-[11px] text-zinc-500 font-mono">
              Meta Graph API Video Containers
            </span>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">Facebook Pages</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            </div>
            <div className="mt-2 font-mono text-2xl font-bold text-zinc-100">
              {stats.facebookSuccess}
            </div>
            <span className="text-[11px] text-zinc-500 font-mono">
              Page Video API Direct Uploads
            </span>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-zinc-100 font-mono">
              Recent Publications
            </h2>
            <p className="text-xs text-zinc-400 font-mono">
              Showing latest {recentPublications.length} of {stats.totalPublications} documents from presentation archive
            </p>
          </div>

          <Link
            href="/control/content"
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-blue-400 hover:border-zinc-700 hover:bg-zinc-800 transition"
          >
            View Full Archive →
          </Link>
        </div>

        <div className="space-y-4">
          {recentPublications.map((pub) => (
            <VideoCard key={pub.video_id} publication={pub} />
          ))}
        </div>
      </section>
    </div>
  );
}
