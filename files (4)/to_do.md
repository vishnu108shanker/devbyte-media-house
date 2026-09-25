# DevByte Media House — To-Do

Phased build checklist. Complete phases roughly in order — later
phases depend on earlier ones. See `architecture.md` for design and
`conventions.md` for how to write it.

## Phase 0 — Setup
- [ ] Create `devbyte-media-house/` folder alongside (not inside the
      git tree of) the DevByte Engine repo.
- [ ] `git init` inside it immediately; first commit = empty scaffold.
- [ ] Scaffold Next.js (App Router) + TypeScript + Tailwind.
- [ ] Add `.gitignore` (node_modules, .env.local, .next) and add this
      whole folder to the **DevByte Engine** repo's `.gitignore` and
      `.dockerignore`.
- [ ] Deploy the empty scaffold to a new Vercel project to confirm the
      pipeline works end-to-end before building real pages.

## Phase 1 — Explore pages (public, static)
- [ ] Home — hero, one-line pitch, pipeline-stages strip.
- [ ] How DevByte Works — architecture diagram (adapt the existing
      mermaid diagram from the DevByte Engine README).
- [ ] Journey — version history as narrative (V1 → V2 → Docker → EC2
      → Postgres → multi-platform), each milestone with what/why/tech.
- [ ] Technology — stack table with a one-line "why" per item, not a
      second architecture diagram.
- [ ] Philosophy — 3–5 principles, short.
- [ ] Confirm all five pages need zero database calls (they should).

## Phase 2 — Auth
- [ ] Single admin credential via env var (hashed password).
- [ ] Login route + session cookie.
- [ ] Middleware/layout guard on `/control/*` — redirect to login if
      no valid session.
- [ ] Confirm: no OAuth, no user table, no roles.

## Phase 3 — MongoDB Atlas setup
- [ ] Create Atlas cluster + `publications` collection matching the
      schema in `architecture.md`.
- [ ] Create two DB users: read-only (for Vercel) and read-write (for
      EC2 only). Store the read-only URI in Vercel env vars.
- [ ] Manually insert 2–3 sample documents for frontend development
      before the pipeline integration (Phase 5) is done.

## Phase 4 — Control Center pages
- [ ] Overview (`/control`) — last run status, today's output count,
      per-platform success counts. Reads from `publications`
      (aggregate over recent documents).
- [ ] Content (`/control/content`) — one card per video: title,
      publish date, platform URLs (clickable, only if status =
      success), performance snapshot rendered from the `performance`
      object (bar-style, matching the terminal report format).
- [ ] **Open decision — confirm before building**: are standalone
      Runs and Logs pages wanted, or does "refer to Postgres via SSH"
      fully replace them? Default assumption for this build: **no**,
      only Overview + Content exist on the website.

## Phase 5 — Pipeline integration (DevByte Engine repo, not this repo)
- [ ] After each video's Phase 4 (publishing) completes, fetch/
      construct the permalink for each successful platform upload
      (YouTube video id → URL; Instagram/Facebook media id →
      permalink via a follow-up Graph API field request).
- [ ] Assemble the `publications` document (URLs + performance timers
      already computed for the terminal report) and write it to
      MongoDB Atlas using the read-write credential.
- [ ] This is a change to the existing upload services / orchestrator,
      done independently of the website build — can happen in
      parallel with Phases 1–4.

## Phase 6 — Polish & launch
- [ ] Favicon, meta tags, OG image for link previews (this is going on
      a resume — the link preview matters).
- [ ] Point a real domain/subdomain at the Vercel project.
- [ ] Push this repo to its own GitHub repository, connect to Vercel.
- [ ] Final check: EC2 pipeline stopped/offline, confirm Explore pages
      and Control Center (with existing sample data) still load fine.
