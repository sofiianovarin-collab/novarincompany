# Step 11 handoff — approved content and assets

No approved content pack was in the workspace. Real-content replacement was not completed. The site is not ready to publish.

## Integrated, received, and missing

| Group | Result |
|---|---|
| Integrated from approved material | Nothing new. The visitor brand remains `NOVARIN CAPITAL` from `src/config/site.ts`. |
| Received but not approved | Nothing new arrived in this step. |
| Missing content or rights | People, articles, photographs, logo files, domain, email, address, and legal approvals. See `docs/owner-content-inputs.md`. |
| UI | One safe-state fix: the “Approved image pending” label is omitted from the publishable bundle. |
| Legal approval | Privacy and Terms remain `review-01`, unapproved. |
| Delivery | Unchanged. Forms and the newsletter stay off. |
| Publication | Not ready. `noindex, nofollow` remains. |

## 1. Files changed

- `src/components/about/AboutHero.tsx`
- `src/components/about/FocusContextSection.tsx`
- `src/components/approach/ApproachHero.tsx`
- `src/components/investment-focus/InvestmentFocusHero.tsx`
- `src/components/investment-focus/InvestmentApproachSection.tsx`
- `docs/step-11-content-inventory.md`
- `docs/owner-content-inputs.md`
- `docs/step-11-change-log.md`
- `docs/step-11-handoff.md`
- `docs/launch-blockers.md`
- `artifacts/content-step11/previews/`
- `artifacts/content-step11/test-results/lint.txt`
- `artifacts/content-step11/test-results/build.txt`

No content record, route, or delivery flag was changed.

## 2. Page-by-page replacement

| Page | Replacement |
|---|---|
| `/` | None. Navy hero remains because `heroImage` is unset. |
| `/about` | None. Hero and context slots stay empty. |
| `/investment-focus` | None. Hero and context slots stay empty. |
| `/approach` | None. Hero slot stays empty. |
| `/leadership` | None. Six anonymous preview slots remain private. Public output is the empty state. |
| `/perspectives` | None. Seven outlines remain private. Public output is the empty state. |
| `/contact` | None. No email was added. Public output says inquiries are not available. |
| `/privacy` | None. Review copy stays private. |
| `/terms` | None. Review copy stays private. |

## 3. Asset paths

Put licensed files in `public/images/` and point the existing slots at them:

- Home: `heroImage` in `src/config/site.ts`
- The Firm: `aboutImages.hero` and `aboutImages.context` in `src/content/about.ts`
- Investment Focus: `investmentFocusImages.hero` and `investmentFocusImages.context` in `src/content/investmentFocus.ts`
- Our Approach: `approachImages.hero` in `src/content/approach.ts`
- Each profile: `portrait` on that record only, with `portraitApproved`
- Each article: `image` on that record only

No processing, rights clearance, or metadata removal was performed.

## 4. Approval evidence and open questions

There is no new approval reference. Open questions are the blank fields in `docs/owner-content-inputs.md`.

## 5. Public-output exclusion

A temporary publishable build contained the empty-state sentences and did not contain “APPOINTMENT NOT CONFIRMED”, “PORTRAIT 01”, draft article titles, legal review warnings, preview footer labels, or “Approved image pending”. Rendered `/leadership` in that build showed the empty sentence, no portrait label, and no Leadership navigation item. The temporary build was deleted. `__NOVARIN_PREVIEW__` is true.

## 6. Tests and screenshots

- `npm run lint`: passed. Log: `artifacts/content-step11/test-results/lint.txt`
- `npm run build`: passed. Log: `artifacts/content-step11/test-results/build.txt`
- No unit-test runner is configured.
- Widths 1024, 768, and 360 were not remeasured. No content length changed.
- Screenshot index: `artifacts/content-step11/previews/index.md`

## 7. Owner checklist

`docs/owner-content-inputs.md`

## 8. Preserved

Routes, design, header order, homepage `#contact`, disabled forms, newsletter rules, legal revision flags, and `noindex, nofollow` are unchanged.

## Readiness

| Area | Result |
|---|---|
| Content integration | Not started. No approved pack was available. |
| Legal content | Not approved. |
| Delivery | Still disabled. |
| Publication | Not ready. |
