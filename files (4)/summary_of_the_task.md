# DevByte Media House — Task Summary

## The one-paragraph version

Build a public-facing website + small private console for **DevByte
Engine**, an existing autonomous pipeline that discovers dev news,
scores it, scripts/renders it into short videos, and publishes to
YouTube/Instagram/Facebook. The website is a **separate project**
(own repo, own hosting, own database) — it does not run or modify the
pipeline. Its job is to (1) explain what DevByte is to someone who has
never heard of it (a recruiter clicking a resume link), and (2) show
the person who built it a simple live record of what it has published.

## Why this exists

The project owner needed something to point to when filling out
resume/job application forms — DevByte Engine has real engineering
depth (Docker, EC2, Postgres, multi-platform API integrations,
concurrent rendering) but no public surface showing it off or proving
it's live.

## Scope (locked)

**Build:**
- 5 public pages (Explore): Home, How It Works, Journey, Technology,
  Philosophy — static, no database dependency.
- 2 auth-protected pages (Control Center): Overview, Content (one card
  per published video, showing platform URLs + a performance snapshot).
- MongoDB Atlas as the website's only database — a lightweight
  "presentation archive," separate from the pipeline's PostgreSQL.

**Do not build:** analytics, live infra monitoring, retry/rerun
controls, job management, log search/streaming, a separate publishing
page, user accounts/roles, AI or RAG features, a knowledge base. These
were explicitly cut to fit a short build window — see
`architecture.md` for the full out-of-scope list.

**Deferred, not decided:** whether standalone Runs and Logs pages are
wanted on the site, or whether Postgres-via-SSH fully replaces them.
Current default: they are **not** built. Confirm with the project
owner if a task seems to require them.

## Key architectural fact

DevByte Engine (EC2 + Docker + Postgres) and DevByte Media House
(Vercel + Next.js + MongoDB) are independent systems. The website must
keep working even if the EC2 pipeline is offline. Never connect this
project to PostgreSQL or to anything running on EC2 directly — the
only link between the two systems is the pipeline writing a document
to MongoDB Atlas after each video publishes.

## Other docs in this set

- `architecture.md` — system design, data model, auth model, rendering
  strategy.
- `conventions.md` — folder structure, naming, styling, commit rules.
- `to_do.md` — the phased build checklist to actually execute this.

## Workflow context

Multiple coding agents may touch this repo. The project owner reviews
and monitors; a second AI (ChatGPT) reviews architecture decisions.
When a task is ambiguous or touches something marked "confirm before
building" in `to_do.md`, stop and flag it rather than guessing.
