# Experience and activity handoff

Private preview. No new tracking, mail, deployment, or live analytics connection was turned on.

## What was added

The Firm page at `/about` now has the experience modules inside the existing page. There is no `/experience` route and no new navigation item.

Order:

1. Existing hero and Purpose / Mission / Vision.
2. Experience introduction, three investment metrics, then firm milestones and prior experience.
3. Existing principles and Focus in Context.
4. Website activity.
5. Existing closing contact CTA and shared footer.

The reference board's extra header, standalone hero, and preview footer were not copied. The About page still has one H1.

## Files

- `src/types/experienceActivity.ts`
- `src/content/experienceActivity.ts`
- `src/content/experienceActivity.drafts.ts`
- `shared/experience/activity.ts`
- `src/components/experience/`
- `src/pages/AboutPage.tsx`
- `scripts/validate-experience-activity.test.ts`
- `docs/experience-activity-data-guide.md`

Edit approved snapshots in `src/content/experienceActivity.ts`. Preview labels stay in the drafts file and are imported only from the preview component.

## Design mapping

The ivory metrics block and the warmer history panels follow the module preview. Figures use the serif face and tabular numerals. Missing values are an em dash, not zero. The gold emphasis on “with context.” uses the existing dark gold on ivory.

## Data actually used

None. Counts, dates, names, and traffic are unconfirmed. Private preview shows the notice, em dashes, “Awaiting confirmed data”, two milestone slots, and two prior-role slots. Public mode omits the modules while those lists are empty. A public build contained none of the preview notice, “Awaiting confirmed data”, or “Source not connected”.

## Review a later snapshot

1. Put the confirmed aggregate, milestones, or roles into `src/content/experienceActivity.ts`.
2. Set `publicationApproved` and `approvedRevision` to that revision only.
3. Keep evidence notes out of the public objects.
4. Run `npm run test:experience`.
5. Check `/about` locally. Do not treat the approval flag as proof the claim is correct.

## Checks

- `tsc -b` passed.
- `oxlint src scripts --deny-warnings` passed.
- `npm run test:experience`: 7 passed. The fixture of two businesses and three participations, including one follow-on, returns 2 / 3 / 1. Repeated transfer rows, cancelled and test records, a previous employer, and a later exit behave as specified. Null formats as an em dash and an approved 0 stays 0. Daily user rows are not summed.
- Private full-page captures: `artifacts/experience-activity/previews/about-experience-desktop.png` (1440) and `about-experience-mobile.png` (390). One H1. The review notice is visible. Neither width overflowed.
- No approved records exist, so there is no public-filled screenshot.

The SEC marketing guide is a reference for a future qualified review. This page does not establish that it applies to Novarin, and it is not legal clearance.
