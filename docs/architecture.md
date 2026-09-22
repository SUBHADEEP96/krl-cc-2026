# Architecture

## Decisions

The prototype is domain-first: lifecycle transitions, permission decisions, scoring and public serialization live in `src/domain.ts`; seeded records and mutations live in `src/data.ts`; visual components consume that repository boundary. This keeps formulas and privacy rules outside React. The compact prototype co-locates screens in one entry module, while route boundaries and domain contracts map directly to future feature folders.

Demo mode generates 5,292 records deterministically and persists mutation state on-device. Production mode will implement the same repository operations with Supabase Auth, PostgreSQL/PostGIS and Storage. Environment selection must fall back to demo when credentials are incomplete.

## Domain and scoring

Farms use UUID primary keys and permanent, unique human passport IDs. Activities append to an audit-style stream. Score versions are immutable snapshots tied to a configuration version. Applicable verified indicators are weight-normalised per pillar; missing evidence makes a score provisional rather than zero. Final weights are Satya 30%, Mangal 25%, Sundar 20% and Samriddhi 25%, rounded to one decimal. Rankings accept verified scores only and break ties by score, improvement, then passport ID.

## Access and privacy

Central permission functions are enforced at action rendering and mutation boundaries. Production RLS adds region scope and authoritative protection. Public pages receive only the `publicFarm` view model, which excludes identity, precise location, financials, issues, private evidence and judge notes. Evidence has explicit privacy and verification classifications.

## Evolution

Split screens into feature folders, introduce TanStack Query repository hooks, IndexedDB offline queues and a Supabase adapter without changing domain contracts. Generate API/database types, add object-storage transformations, server-side score approval, immutable audit trails and observability before pilot.
