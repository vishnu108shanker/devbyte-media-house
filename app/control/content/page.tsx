import Link from "next/link";
import { getPublications } from "@/lib/data";
import VideoCard from "@/components/control/VideoCard";

export default async function ControlContentPage() {
  const publications = await getPublications();

  return (
    <div className="space-y-8">
      {/* Content Archive Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
            <Link href="/control" className="hover:underline">
              Control Center
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">Content Archive</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold font-mono text-zinc-100">
            Published Videos
          </h1>
          <p className="mt-1 text-xs text-zinc-400 font-mono">
            {publications.length} video publications recorded in MongoDB presentation archive
          </p>
        </div>

        <Link
          href="/control"
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 transition"
        >
          ← Return to Overview
        </Link>
      </div>

      {/* Publications Feed */}
      <div className="space-y-4">
        {publications.map((pub) => (
          <VideoCard key={pub.video_id} publication={pub} />
        ))}
      </div>
    </div>
  );
}
