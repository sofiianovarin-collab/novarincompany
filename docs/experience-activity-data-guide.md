# Experience and activity inputs

No confirmed figures, dates, names, or traffic totals are on file. Leave a field blank until the owner supplies it. Do not send private keys, identity documents, full traffic logs, or bank records.

## Counting policy

- Reporting entity or vehicles:
- Cumulative or a stated period:
- What counts as a completed, funded participation:
- How a business is identified:
- How follow-ons, multiple vehicles, tranches, and corrections are handled:
- Unresolved attribution:

Default review intent: one business counts once; one completed participation counts once; a later investment in a business already backed is a follow-on and stays inside Investments completed; meetings, intentions, tests, and reversed records do not count; a later exit does not erase a completed investment. Do not add the three displayed figures together.

## Investment snapshot

- Companies backed:
- Investments completed:
- Follow-on investments:
- Scope and as-of date:
- Methodology version:
- Source label and limitations:
- Approval reference for this exact revision:

## Company milestones

For each event: stable id, date and its precision, title, description, entity scope, and approval reference. Do not supply a founding date, office, license, or partnership unless it is already confirmed.

## Prior individual experience

For each role: approved name and current role, previous organization, verified role, date range, personally held responsibilities, and a contribution only when it is substantiated. A leadership profile id may be reused after that profile is approved. The prior role still needs its own approval.

## Website activity

- Source and safe export label:
- Metric names, such as total users or sessions:
- Values:
- Period start, period end, and time zone:
- Partial-period limitations:
- Approval reference:

Do not add daily unique counts into a monthly unique total.

## Where to edit

Approved public snapshots: `src/content/experienceActivity.ts`.
Preview-only labels: `src/content/experienceActivity.drafts.ts`.
Counting checks: `shared/experience/activity.ts`.

A changed value, period, definition, or attribution needs a new revision and a new approval. An empty approved list stays hidden on the public page.
