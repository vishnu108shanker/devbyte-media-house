# DevByte Media House — Conventions

These apply to every file any coding agent touches in this repo. See
`architecture.md` for the system design these conventions implement.

## Repo & folder structure

```
devbyte-media-house/
├── app/
│   ├── (explore)/
│   │   ├── page.tsx              # Home
│   │   ├── how-it-works/page.tsx
│   │   ├── journey/page.tsx
│   │   ├── technology/page.tsx
│   │   └── philosophy/page.tsx
│   ├── control/
│   │   ├── page.tsx              # Overview
│   │   ├── content/page.tsx
│   │   └── layout.tsx            # auth check lives here
│   ├── api/
│   │   └── auth/route.ts         # login endpoint only
│   └── layout.tsx
├── components/
│   ├── explore/                  # public-page components
│   └── control/                  # control-center components
├── lib/
│   ├── mongodb.ts                # single Mongo client instance
│   ├── auth.ts                   # session/cookie helpers
│   └── types.ts                  # shared TS types (Publication, etc.)
├── content/                       # MDX/JSON for static Explore copy
├── .env.local                     # gitignored — never commit
├── .gitignore
└── package.json
```

## Naming

- Files/routes: kebab-case (`how-it-works/page.tsx`).
- Components: PascalCase (`PerformanceSnapshot.tsx`).
- Types/interfaces: PascalCase, no `I` prefix (`Publication`, not
  `IPublication`).
- Mongo fields: snake_case, matching the schema in `architecture.md`
  exactly — don't rename fields in transit; map at the type level if a
  display name is needed.

## TypeScript

- `strict: true`. No `any` — type Mongo documents explicitly via
  `lib/types.ts`.
- Prefer explicit return types on exported functions.

## Components

- Server Components by default. Add `"use client"` only when a
  component genuinely needs interactivity (e.g. a tab toggle) — most
  of this site needs none.
- No client-side `fetch` to MongoDB or any auth-sensitive endpoint.
  All data fetching for Control Center pages happens in Server
  Components / Server Actions.

## Styling

- Tailwind utility classes only. No CSS-in-JS, no separate stylesheet
  files beyond `globals.css` for resets/fonts.
- Keep Explore and Control Center visually distinct — Explore is the
  polished public product face; Control Center can be plainer/denser,
  it's a tool, not a showcase.

## Data access

- All MongoDB access goes through the single client in `lib/mongodb.ts`
  — no ad-hoc `new MongoClient()` elsewhere.
- The website only ever uses the **read-only** Atlas user. If a write
  path is ever needed from the website itself (not expected in this
  build), stop and confirm with the project owner first — writes are
  the pipeline's job.
- Never query PostgreSQL or reference an EC2 connection string from
  this repo. If a task seems to need Postgres data, it's out of scope
  — flag it instead of building around it.

## Environment variables

Document every var in `.env.example` (committed) with a placeholder
value; real values go only in `.env.local` (gitignored) and Vercel
project settings.

```
MONGODB_URI=            # read-only Atlas user
ADMIN_PASSWORD_HASH=
SESSION_SECRET=
```

## Commits

- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`) — multiple
  agents are committing to this repo, so consistent messages matter
  for tracing what changed.
- One logical change per commit; don't bundle an Explore page and a
  Control Center change together.

## Out-of-scope guardrail

If a task implies building any of: analytics, log streaming, retry/
rerun buttons, user accounts, a Postgres connection, or AI/RAG
features — stop and flag it rather than implementing it. These are
explicitly out of scope per `architecture.md`.
