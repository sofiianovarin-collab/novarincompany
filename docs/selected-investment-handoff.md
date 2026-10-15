# Selected investment experience handoff

The layout is ready for factual case summaries. No investment history was reconstructed or published.

## What changed

`/about` now has a Selected Investment Experience section immediately after Purpose / Mission / Vision, before the existing experience introduction. Anchor: `selected-investment-experience`.

No new route or menu item. The hero, purpose, principles, history slots, website activity, and closing CTA remain. Aggregate counters stay in their content file as empty lists. They were not replaced with zero. Nothing approved was overwritten. Public pages still omit those counters.

## Files

- `shared/experience/cases.ts`
- `src/content/selectedInvestmentCases.ts`
- `src/content/selectedInvestmentCases.drafts.ts`
- `src/components/experience/SelectedInvestmentPreview.tsx`
- `src/components/experience/SelectedInvestmentExperience.tsx`
- `src/components/experience/InvestmentCaseCard.tsx`
- `src/components/experience/ExperienceSections.tsx`
- `src/components/experience/ExperienceActivity.css`
- `docs/selected-investment-inputs.md`

The owner fills `docs/selected-investment-inputs.md`, then the confirmed public fields go into `investmentCaseRecords` in `src/content/selectedInvestmentCases.ts`.

## Approval

A case is public only when the investment is confirmed complete, attribution is Novarin or a named investing entity, the named or anonymous presentation is set, and the title, business context, and role are approved for the current revision. Period, involvement, and outcome are omitted when empty. At most two cases are shown. A previous employer or an uncompleted record cannot qualify. Changing the revision drops the old approval.

Private identity and internal notes are not fields on the public card. Draft slot labels live in the preview module and are not part of the public render path.

## Facts supplied

None. Private preview shows the confirmation notice and two draft slots, with no company names or results. Public mode renders no case section while the list is empty.

## Checks

`tsc -b` passed. `oxlint src scripts --deny-warnings` passed. Experience tests passed, 12 of 12, including five case checks: one card, a cap of two, zero cases, omitted optional fields, a hidden anonymous identity, rejection of a previous employer and an uncompleted investment, and loss of approval when the revision changes.

A public build contained the case heading used by the approved path, and none of the preview notice or “[Approved public case title]”. The live private page at 1440 and 390 showed one H1, the existing hero, the draft notice, and two slots, with no horizontal overflow.

Screenshots:

- `artifacts/selected-investment-experience/about-desktop.png`
- `artifacts/selected-investment-experience/about-mobile.png`

Analytics, mail, legal approvals, and publication settings were not changed.
