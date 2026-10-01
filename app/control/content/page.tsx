import Link from "next/link";
import { getPublications } from "@/lib/data";
import VideoCard from "@/components/control/VideoCard";

export const dynamic = "force-dynamic";

export default async function ControlContentPage() {
  const publications = await getPublications();

  return (
    <div className="space-y-8">

      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
            <Link href="/control" className="hover:underline">Control Center</Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">Content Archive</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold font-mono text-zinc-100">
            Published Videos
          </h1>
          <p className="mt-1 text-xs text-zinc-400 font-mono">
            {publications.length} video publication{publications.length !== 1 ? "s" : ""} recorded in MongoDB presentation archive
          </p>
        </div>

        <Link href="/control"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 transition self-start">
          ← Return to Overview
        </Link>
      </div>

      {/* Full archive — one row per publication, all phase timings visible */}
      {publications.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-16 text-center">
          <p className="font-mono text-sm text-zinc-500">No publications in the Atlas collection yet.</p>
          <p className="font-mono text-xs text-zinc-600 mt-1">Run the pipeline on EC2 to populate this view.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {publications.map((pub) => (
            <VideoCard key={pub._id} publication={pub} />
          ))}
        </div>
      )}
    </div>
  );
}
