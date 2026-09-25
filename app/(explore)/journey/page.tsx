import Link from "next/link";
import JourneyMilestoneCard, { Milestone } from "@/components/explore/JourneyMilestoneCard";

export default function JourneyPage() {
  const milestones: Milestone[] = [
    {
      version: "v1.0.0",
      date: "June 2026",
      title: "The Single-Source Prototype",
      problem:
        "Validating whether programmatic video generation with Remotion and LLMs could produce coherent short-form developer videos without human editing.",
      decision:
        "Built a simple sequential script scraping GitHub Trending, prompting Gemini with a basic template, generating Edge TTS audio, and rendering locally.",
      result:
        "Confirmed Remotion + LLM viability, but suffered from narrow GitHub-only topics, single-threaded slow rendering, and manual video upload friction.",
      tech: ["GitHub Scraper", "Gemini 1.5 Flash", "Edge TTS", "Remotion 4.x", "Single-threaded"],
      deepDive:
        "The v1 prototype proved that dynamic React layouts could synchronize with TTS sentence durations, but manual execution tethered output to developer availability.",
    },
    {
      version: "v2.0.0",
      date: "June 2026",
      title: "Architectural Rewrite & Automated Uploads",
      problem:
        "Manual uploads were the primary operational bottleneck, limiting throughput to 1 video per manual run with frequent human error.",
      decision:
        "Architected an automated Node.js batch orchestrator with isolated worker directories and integrated direct OAuth 2.0 YouTube Shorts upload with 2 MB chunking.",
      result:
        "Achieved the first fully autonomous end-to-end publish cycle to YouTube with zero human intervention.",
      tech: ["Node.js Orchestrator", "YouTube Data API v3", "OAuth 2.0 Resumable", "Worker Directory Isolation"],
      deepDive:
        "Isolated worker directories (worker_0 to worker_4) prevented file write collisions during concurrent pre-production and sequential video rendering.",
    },
    {
      version: "v2.2.0",
      date: "July 2026",
      title: "The 4-Source Newsroom Overhaul",
      problem:
        "GitHub Trending alone created content fatigue and missed critical breaking news in AI models, developer infrastructure, and official framework releases.",
      decision:
        "Added 3 new ingestion streams (Hacker News JSON API, official engineering RSS feeds, Product Hunt) with deterministic signal whitelists and noise blacklists.",
      result:
        "Broadened editorial coverage to the entire tech ecosystem while filtering out 90%+ of generic tutorials, opinion pieces, and spam before scoring.",
      tech: ["HN JSON API", "RSS/Atom Parser", "Keyword Whitelist", "Story-Level Deduplicator"],
      deepDive:
        "The story-level deduplicator uses canonical URL normalization and fuzzy title matching to prevent duplicate videos when multiple sources cover the same event.",
    },
    {
      version: "v2.3.0",
      date: "September 2026",
      title: "Evidence-Driven Scoring Engine",
      problem:
        "Legacy 4-factor arithmetic point scoring (freshness + stars + upvotes = score) created false precision and allowed low-quality tutorials to slip through.",
      decision:
        "Scrapped point formulas entirely. Implemented deterministic hard gates followed by factual evidence compilation and two-pass LLM editorial ranking.",
      result:
        "Established the core principle: Code determines what is allowed; Gemini determines what is worth publishing. Reduced false-positive publishes by 95%.",
      tech: ["Two-Pass Gemini Evaluation", "Evidence Builder", "Tournament Ranking", "30-Hour Semantic Cache"],
      deepDive:
        "Pass 1 evaluates candidates in parallel chunks of 10 for mission alignment; Pass 2 ranks publishable items from 1..N using tournament comparison for large sets.",
    },
    {
      version: "v2.4.0",
      date: "September 2026",
      title: "Parallel Pre-Production & Telemetry",
      problem:
        "Sequential script generation and audio synthesis added unnecessary latency before rendering could begin; lack of phase-level telemetry made profiling difficult.",
      decision:
        "Engineered concurrent pre-production with ThreadPoolExecutor (scripts + TTS synthesized in parallel) and added millisecond-level phase instrumentation.",
      result:
        "Cut pre-production latency from 60+ seconds to ~12 seconds for an entire 5-video batch and emitted visual ASCII performance reports.",
      tech: ["ThreadPoolExecutor", "Concurrent Pre-Production", "Millisecond Phase Timers", "ASCII Terminal Reports"],
      deepDive:
        "All scripts and audio files are ready before worker 0 begins rendering, allowing the CPU to stay 100% saturated with zero idle pipeline pauses.",
    },
    {
      version: "v2.5.0",
      date: "September 2026",
      title: "Multi-Platform Relay & S3 Ephemeral Bridge",
      problem:
        "Publishing only to YouTube limited audience reach, while uploading multi-gigabyte video files to cloud storage created ongoing storage costs.",
      decision:
        "Integrated Meta Graph API (Instagram Reels & Facebook Pages) and built an AWS S3 temporary bridge with automated lifecycle deletion post-broadcast.",
      result:
        "Simultaneous triple-platform distribution with zero persistent cloud asset storage and 100% CPU multi-core Remotion saturation.",
      tech: ["Meta Graph API v19.0", "AWS S3 boto3 Presigned URLs", "100% Host CPU Saturation", "Buffered Zero-Clutter Logging"],
      deepDive:
        "The S3 bridge generates a 2-hour presigned URL for Meta ingestion and immediately triggers bucket cleanup once Instagram and Facebook verify upload completion.",
    },
    {
      version: "Cloud / Infra",
      date: "Present",
      title: "Dockerization, EC2 Deployment & Postgres Truth",
      problem:
        "Executing on local hardware created dependency on personal machine uptime and prevented reliable scheduled automation.",
      decision:
        "Containerized the pipeline with Docker, deployed onto AWS EC2 with PostgreSQL as the immutable system of record, and decoupled DEVLAR on Vercel.",
      result:
        "Total operational decoupling: the pipeline runs autonomously on cloud compute, while DEVLAR presents live verified results with 100% uptime.",
      tech: ["Docker & Docker Compose", "AWS EC2", "PostgreSQL", "Decoupled MongoDB Atlas Archive"],
      deepDive:
        "PostgreSQL on EC2 holds internal run state and candidates; MongoDB Atlas receives one document per publication read-only by this website.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
          Evolutionary Chronicle
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-zinc-100 font-mono">
          The Engineering Journey
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          How a weekend prototype scraping GitHub Trending evolved across 7 major milestones into an industrial-grade, multi-platform autonomous media system.
        </p>
      </div>

      {/* Narrative Timeline */}
      <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-14">
        {milestones.map((m) => (
          <JourneyMilestoneCard key={m.version} milestone={m} />
        ))}
      </div>

      {/* Navigation CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900 pt-6">
        <Link
          href="/technology"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
        >
          <span>Next: Technology Stack Table</span>
          <span>→</span>
        </Link>
        <Link
          href="/philosophy"
          className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
        >
          Core Engineering Philosophy →
        </Link>
      </div>
    </div>
  );
}
