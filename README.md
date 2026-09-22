# KRL Command Centre — Season 1

A responsive, end-to-end demonstration of the Krishi Ratna League operating system: 15 regional teams, 294 constituencies and 5,292 deterministic synthetic farms. The connected scenario covers login, statewide intelligence, map filtering, Farm Passport, mentor and progress submissions, judging, rankings and a privacy-safe public story.

## Stack and routes

React 19, strict TypeScript, Vite, React Router, Recharts, Zod, Lucide, MapLibre-ready GeoJSON architecture, Vitest and Playwright-ready configuration. Routes include `/login`, `/dashboard`, `/map`, `/farms`, `/farms/:id`, `/regions`, `/regions/:id`, `/mentor-visits`, `/issues`, `/funding`, `/audits`, `/judging`, `/leaderboard`, `/stories`, `/public/farms/:passportId`, `/settings/scoring`, and `/settings/demo`.

## Run

```bash
pnpm install
cp .env.example .env
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Demo login offers Admin, Regional Manager, Mentor and Judge with one click. Use **Reset demo data** at `/settings/demo` (or clear site storage) to restore the deterministic scenario.

## Configuration

`VITE_DATA_MODE` defaults to `demo`; `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` enable the future Supabase adapter boundary. Never put a service-role key in the browser. `VITE_MAP_STYLE_URL` selects a MapLibre-compatible style. Missing credentials always leave demo mode operational.

## Deployment and backend

Build `dist/` and serve it with SPA fallback to `index.html`. Apply SQL in `supabase/migrations`, create a private evidence bucket plus a public-approved derivative bucket, then run `supabase/seed.sql`. Configure RLS and Auth JWT region claims before exposing data. The current browser adapter persists compact operational state in localStorage; production should use IndexedDB for offline queues and Supabase for authoritative storage.

## Prototype limitations

The prototype uses a stylised accessible map surface rather than downloading third-party tiles, simulated evidence uploads, synthetic identities, and local-only authentication. It does not process payments, run background jobs, provide true offline conflict resolution, or upload evidence binaries. Bengali covers the main navigation; production requires a complete translation review. See `docs/production-roadmap.md`.
