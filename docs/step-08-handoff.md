# Step 08 handoff — global QA

## 1. Corrections

- The mobile menu locks background scrolling while it is open and closes when the route changes.
- Gold buttons and the header Contact control use navy text and the shared gold hover token.
- Desktop navigation spacing tightens between 1100px and 1240px.
- Enter does not start the homepage or Contact preview forms while delivery is disabled.
- A publishable build was checked again: draft leadership and perspective copy is absent.

No page was added or redesigned. Delivery flags, noindex, and authored copy were left as they were.

## 2. Files changed

- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteHeader.css`
- `src/components/ui/Button.css`
- `src/components/home/ContactSection.tsx`
- `src/components/home/ContactSection.css`
- `src/styles/tokens.css`
- `docs/step-08-audit.md`
- `docs/step-08-handoff.md`
- `docs/launch-blockers.md`

## 3. Evidence

Earlier step captures are in `artifacts/qa-step08/before/`. They predate this step’s small header and button adjustments.

After captures, menus closed and disclosures in their initial state:

`artifacts/qa-step08/after/`

| Page | Desktop | Mobile |
|---|---|---|
| Home | 1440 × 2648 | 390 × 4193 |
| The Firm | 1440 × 2512 | 390 × 3879 |
| Investment Focus | 1440 × 2268 | 390 × 3124 |
| Our Approach | 1440 × 2431 | 390 × 3809 |
| Leadership | 1440 × 2935 | 390 × 5713 |
| Perspectives | 1440 × 2491 | 390 × 4767 |
| Contact | 1440 × 2299 | 390 × 3127 |

## 4. Route and interaction results

All seven routes are registered. Header order is The Firm, Investment Focus, Our Approach, Leadership, Perspectives, Contact. Contact CTAs point at `/contact`. Homepage anchors `#the-firm`, `#investment-focus`, `#our-approach`, and `#contact` remain.

This step did not repeat click-through of every CTA, disclosure, filter, reader, or inquiry type. Those were exercised in the page steps. The in-app browser was not available for a fresh pass.

## 5. Preview and public output

The running site stays in preview. A temporary public build contained the empty-state sentences and did not contain draft names, remits, article titles, or outline labels. That build was deleted and `__NOVARIN_PREVIEW__` was set back to true.

## 6. Remaining defects and blockers

See `docs/step-08-audit.md` and `docs/launch-blockers.md`. Content, legal copy, imagery, and delivery are still unresolved. Extra viewport widths were not remeasured in this step.

## 7. Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## 8. Screenshots

Full-size files are listed above under `artifacts/qa-step08/after/`. No overview board was assembled.

## 9. Preserved

Page composition, English copy, draft notices, disabled forms, Leadership and Perspectives approval rules, and `noindex, nofollow` stay in place.

## 10. Not performed

- A live keyboard pass of the menu, reader, filters, and FAQ after these edits.
- Overflow checks at 1280, 860, and a fresh pass at 1024, 768, and 360.
- Automated accessibility or performance scores. No such tool is configured.
- Deployment or a hosting-provider check. Static hosts still need an `index.html` fallback.

## Build

- Baseline and final `npm run lint`: passed. An intermediate menu effect warning was removed.
- Baseline and final `npm run build`: passed.
- No test runner is configured.
