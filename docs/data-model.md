# Data model

Season owns regions; regions own districts; districts reference constituencies and farms. A farm has one permanent passport, profile and baseline, and many enterprises, plans, interventions, assignments, visits, progress updates, evidence assets, issues, funding records, KPI observations, score versions, audits, reviews, awards, stories and activity events.

Internal relationships use UUIDs. `passport_id` is unique and never reused. Searchable reporting fields are relational; versioned questionnaire answers may use constrained JSONB. Evidence links to a farm and optionally another entity, with verification and privacy classification. A score version records all pillars, final score, configuration version and approval state; approved/locked versions are immutable. The SQL migration includes geographic, status, region and district indexes and sample region-scoped RLS.
