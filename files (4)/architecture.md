# DevByte Media House — Architecture

## What this is

DevByte Media House is the public-facing website + private operational
console for **DevByte Engine** (the autonomous dev-news video pipeline).
It is a **separate, independent project** from DevByte Engine itself —
different repo, different host, different database. It reads from
DevByte Engine's output; it does not run, trigger, or depend on the
pipeline being online.

```
DevByte Engine (existing, untouched)          DevByte Media House (this project)
────────────────────────────────────          ───────────────────────────────────
EC2 + Docker                                   Vercel
PostgreSQL  ← production truth                 Next.js + MongoDB Atlas
                                                       ↑
                              writes ─────────────────┘
                         (video URLs + perf snapshot,
                          right after each video publishes)
```

- **PostgreSQL (EC2)** stays the pipeline's internal source of truth —
  candidates, evaluation, full run history. This project never queries
  it directly and never exposes it.
- **MongoDB Atlas** is the *presentation archive* — one document per
  published video, written once by the pipeline right after publishing,
  read by the website. This is the only database the website touches.
- The two systems can be online/offline independently. The website
  must keep working even if EC2 is down.

## Site structure

```
DEVBYTE MEDIA HOUSE
│
├── EXPLORE (public, no auth)
│   ├── /                — Home
│   ├── /how-it-works     — pipeline stages, architecture diagram
│   ├── /journey          — version history / evolution narrative
│   ├── /technology        — stack + "why" for each piece
│   └── /philosophy        — short principles section
│
└── CONTROL CENTER (auth-protected, /control/*)
    ├── /control            — Overview (last run summary, today's output)
    └── /control/content    — one card per published video:
                               platform URLs + performance snapshot
```

Out of scope for this build (do not implement): Analytics, live
infrastructure monitoring, retry/rerun actions, job management, log
search or streaming, a separate Publishing page, user management /
multi-user roles, AI features, knowledge base. A `/control/runs` and
`/control/logs` page were discussed but are **currently deferred** —
confirm with the project owner before building them; deep run/log
detail is intended to stay in Postgres, accessed via SSH.

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | Vercel-native, SSG for Explore, Server Components for Control Center |
| Styling | Tailwind CSS | Matches the Remotion render project's existing stack |
| Database | MongoDB Atlas | Managed, decoupled from EC2 uptime, no custom API layer needed |
| Hosting | Vercel | Fast global CDN for the public Explore pages |
| Auth | Single-admin session cookie (no OAuth, no user table) | Only one operator; keep it boring |

## Data model (MongoDB, single collection: `publications`)

One document per video. This is the only shape the website reads.

```json
{
  "video_id": "string",
  "title": "string",
  "published_at": "ISO datetime",
  "platforms": {
    "youtube":      { "status": "success | failed | null", "url": "string | null" },
    "instagram":    { "status": "success | failed | null", "url": "string | null" },
    "facebook":     { "status": "success | failed | null", "url": "string | null" },
    "devbyte_wiki": { "status": null, "url": null }
  },
  "performance": {
    "gemini_script_s": 0,
    "validator_s": 0,
    "tts_s": 0,
    "render_s": 0,
    "s3_upload_s": 0,
    "yt_upload_s": 0,
    "fb_upload_s": 0,
    "ig_upload_s": 0,
    "total_s": 0
  }
}
```

- Written **once**, from the EC2 pipeline, immediately after a video's
  Phase 4 (publishing) completes — this is a DevByte Engine change, not
  a website change, but it's listed here because the website's data
  contract depends on it.
- Two Atlas DB users: a **read-only** user (used by Vercel/the website)
  and a separate **read-write** user (used only from EC2). Never share
  the read-write credential with the website.

## Auth model

- `/control/*` is the only protected area. Everything under `/` (Explore)
  is public and requires no auth.
- No OAuth, no registration, no roles. A single admin credential (env
  var, hashed) gates a session cookie via middleware on `/control/*`.
- The same session/token is reused to authorize the website's own
  server-side reads from MongoDB — the Mongo read-only credential
  itself is never exposed to the browser.

## Rendering strategy

- **Explore pages**: static content (SSG). Journey/Technology/Philosophy
  copy can be hardcoded or sourced from local MDX files in this repo —
  no database call needed on these routes at all.
- **Control Center pages**: Server Components, fetched server-side from
  MongoDB on each request behind the auth check. No client-side data
  fetching, no Mongo credentials ever reach the browser.

## Deployment

- Separate git repo (not part of the DevByte Engine repo or its Docker
  build), pushed independently, connected to its own Vercel project.
- Environment variables live in Vercel project settings (and a
  gitignored `.env.local` for local dev) — never committed.
