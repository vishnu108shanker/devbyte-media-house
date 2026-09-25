# DevByte Media House

Public website + private control center for **DevByte Engine** — an autonomous pipeline that discovers dev news, scripts and renders it into short videos, and publishes to YouTube, Instagram, and Facebook.

Built with **Next.js** (App Router) · **TypeScript** · **Tailwind CSS** · **MongoDB Atlas** · deployed on **Vercel**.

---

## Project structure

```
app/
  (explore)/          # Public pages — Home, How It Works, Journey, Technology, Philosophy
  control/            # Auth-protected Control Center — Overview, Content
  api/auth/           # Login endpoint
components/
  explore/            # Public-page components
  control/            # Control Center components
lib/
  mongodb.ts          # Single Mongo client instance
  auth.ts             # Session / cookie helpers
  types.ts            # Shared TypeScript types
content/              # MDX / JSON for static Explore copy
```

## Local development

```bash
cp .env.example .env.local   # fill in real values
npm install
npm run dev
```

## Environment variables

See `.env.example` for the full list. Real values go in `.env.local` (gitignored) and Vercel project settings — never committed.
