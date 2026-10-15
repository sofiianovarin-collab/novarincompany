# Step 03 handoff — Investment Focus

## What was implemented

The Investment Focus page at `/investment-focus`. It uses the shared header, footer, buttons, container, type, and color tokens.

The page has a navy hero, four focus-area cards with independent Learn more disclosures, an editorial approach section, and a closing call to action. There is no form, portfolio, statistics, or team content.

## Files changed

- `src/pages/InvestmentFocusPage.tsx`
- `src/components/investment-focus/InvestmentFocusHero.tsx`
- `src/components/investment-focus/FocusAreasSection.tsx`
- `src/components/investment-focus/FocusAreaCard.tsx`
- `src/components/investment-focus/InvestmentApproachSection.tsx`
- `src/components/investment-focus/InvestmentFocusCTA.tsx`
- `src/content/investmentFocus.ts`
- `src/components/icons/Icons.tsx` — added a coin-stack outline
- `src/app/routes.tsx`
- `src/config/navigation.ts`
- `src/content/about.ts` — Explore our investment focus now opens `/investment-focus`
- `docs/site-map.md`

## Route and navigation

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/investment-focus` |
| Our Approach | `/#our-approach` |
| Contact | `/#contact` |
| Leadership, Perspectives | Planned. Preview-only unavailable controls. |
| Our approach (page button) | `/#our-approach` |
| Introduce your company | `/#contact` |
| The Firm page CTA | `/investment-focus` |

On `/investment-focus`, only Investment Focus has the gold underline and `aria-current="page"`.

The homepage section id `investment-focus` remains, so older `/#investment-focus` bookmarks still scroll to the homepage section. Homepage cards stay inline disclosures and were not changed to the four-card page.

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/investment-focus`.

## Editable copy

Page text, card details, calls to action, and image settings are in `src/content/investmentFocus.ts`.

## Images

No licensed globe or waterfront image was in the project. The hero uses the navy background with a small preview label. The approach section uses a compact color fallback. There are no image elements and no broken requests.

To add an asset, place the file in `public/images/` and set `investmentFocusImages.hero` or `investmentFocusImages.context` with `src`, `alt`, `objectPosition`, `width`, and `height`. The hero image loads immediately. The lower image is lazy-loaded. Do not describe either picture as an office or as operating coverage.

While `launchStatus` is `preview` and an image is missing, the page shows “Approved image pending”. That label is omitted in a publishable build.

## Missing before the page matches the illustrated reference

- Earth-at-night or network hero image.
- Waterfront or bridge context image.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Browser checks:
  - `/investment-focus` loads with title `Investment Focus | Novarin Capital`
  - One header, one main, one `h1`; Investment Focus is current and The Firm is not
  - First card expands to Show less with its examples; the other three stay collapsed
  - Our approach opens `/#our-approach` with the homepage section top at the header offset
  - Homepage still has three disclosure buttons
  - No horizontal overflow at 1440, 1024, 768, 390, or 360. At 360 the H1 is 38px
  - A synthetic Enter key from the browser tool did not activate the focused disclosure. The control is a native button, and mouse activation was verified
- Screenshots of the implemented page, disclosures collapsed:
  - `artifacts/previews/investment-focus-desktop.png` — 1440 × 2268
  - `artifacts/previews/investment-focus-mobile.png` — 390 × 3124

## Preserved

The homepage copy, three-card disclosures, disabled contact form, and section anchors remain. The Firm page layout remains. Its investment-focus button now opens this page instead of the homepage anchor.
