# Step 04 handoff — Our Approach

## What was implemented

The Our Approach page at `/approach`. It uses the shared header, footer, buttons, container, type, and color tokens.

The page has a navy hero, an investment philosophy, three value cards, a four-step process with an inline disclosure, and a navy closing call to action. There is no form, team section, portfolio, or statistics.

## Files changed

- `src/pages/ApproachPage.tsx`
- `src/components/approach/ApproachHero.tsx`
- `src/components/approach/InvestmentPhilosophySection.tsx`
- `src/components/approach/ApproachValuesSection.tsx`
- `src/components/approach/InvestmentProcessSection.tsx`
- `src/components/approach/ApproachContactCTA.tsx`
- `src/content/approach.ts`
- `src/components/icons/Icons.tsx` — shield, target, and progress-bar outlines
- `src/app/routes.tsx`
- `src/config/navigation.ts`
- `src/content/home.ts` — the hero “Our approach” button now opens `/approach`
- `src/content/investmentFocus.ts` — the “Our approach” button now opens `/approach`
- `docs/site-map.md`

## Route and navigation

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/investment-focus` |
| Our Approach | `/approach` |
| Contact | `/#contact` |
| Leadership, Perspectives | Planned. Preview-only unavailable controls. |
| Homepage hero “Our approach” | `/approach` |
| Investment Focus “Our approach” | `/approach` |
| Start a conversation | `/#contact` |
| Learn about our process | Expands details on this page. It does not navigate. |

On `/approach`, only Our Approach has the gold underline and `aria-current="page"`.

The homepage section id `our-approach` remains, so older `/#our-approach` bookmarks still scroll to that band.

Direct loads of `/approach` work in `npm run dev` and `npm run preview`, because Vite serves the app shell for client routes. A static host still needs a fallback to `index.html`. That was not deployed.

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/approach`.

## Editable copy

Page text, process steps, expanded details, and the hero image setting are in `src/content/approach.ts`.

## Hero image

No licensed architectural photograph was in the project. The hero stays navy, with a small preview label. There is no image element and no broken request.

To add one, place the file in `public/images/` and set `approachImages.hero` with `src`, `alt`, `objectPosition`, `width`, and `height`. It loads immediately and is not described as an office. While `launchStatus` is `preview` and the image is missing, the page shows “Approved image pending”. That label is omitted in a publishable build.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Browser checks:
  - `/approach` loads with title `Our Approach | Novarin Capital`
  - One header, one main, one `h1`; Our Approach is the current nav item
  - Learn about our process expands to Hide process details
  - Start a conversation opens `/#contact` with the section top at the header offset
  - The homepage contact submit button remains disabled, and `#our-approach` is still on the homepage
  - No horizontal overflow at 1440, 1024, 768, 390, or 360. At 390 the H1 is 38px
  - A `display: grid` rule was overriding the collapsed process panel. It is hidden with `.process-details[hidden] { display: none }`
- Screenshots of the implemented page, process details collapsed:
  - `artifacts/previews/approach-desktop.png` — 1440 × 2431
  - `artifacts/previews/approach-mobile.png` — 390 × 3809

## Preserved

The homepage, The Firm, and Investment Focus layouts and copy remain. The only changes on those pages are the Our Approach destinations listed above.
