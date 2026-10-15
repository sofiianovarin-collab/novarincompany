# Step 05 handoff — Leadership

## What was implemented

The Leadership page at `/leadership`. It uses the shared header, footer, buttons, container, type, and color tokens.

Private preview shows a navy hero, a draft notice, three anonymous investment-and-operations slots, three anonymous external-advisory slots, and a navy closing call to action. Names, biographies, and portraits are placeholders. No people were invented.

## Files changed

- `src/pages/LeadershipPage.tsx`
- `src/pages/LeadershipPage.css`
- `src/components/leadership/LeadershipHero.tsx`
- `src/components/leadership/LeadershipRoster.tsx`
- `src/components/leadership/LeadershipContactCTA.tsx`
- `src/types/leadership.ts`
- `src/content/leadership.ts` — approved profiles, currently empty
- `src/content/leadership.drafts.ts` — six anonymous preview slots
- `src/content/leadershipRoster.ts` — chooses drafts or approved profiles
- `src/app/routes.tsx`
- `src/config/navigation.ts`
- `src/config/site.ts` — `launchStatus` follows the compile-time preview flag
- `vite.config.ts` — `__NOVARIN_PREVIEW__`
- `docs/site-map.md`

## Route and navigation

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/investment-focus` |
| Our Approach | `/approach` |
| Leadership | `/leadership` while preview is on, or when a publishable profile exists |
| Perspectives | Planned. Preview-only unavailable control. |
| Contact | `/#contact` |
| Introduce your company | `/#contact` |

On `/leadership`, only Leadership has the gold underline and `aria-current="page"`.

Direct loads of `/leadership` work in `npm run dev` and `npm run preview`, because Vite serves the app shell for client routes. A static host still needs a fallback to `index.html`. That was not deployed.

## Preview and public output

`__NOVARIN_PREVIEW__` in `vite.config.ts` is `true`. `site.launchStatus` is `preview` while that flag is on.

A publishable build sets the flag to `false`. Approved profiles live in `approvedLeadershipProfiles` in `src/content/leadership.ts`. A profile is public only when `profileApproved` is true and it has a name, title, and biography. Portrait approval is separate: an unapproved portrait is not rendered. With zero approved profiles, Leadership is omitted from the header and footer, and `/leadership` shows “Leadership information will be published here once confirmed.”

A public production build was checked and then removed. It did not contain the draft roster, bracket labels, proposed remits, or draft statuses. The running site remains in preview.

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/leadership`.

## Editable copy

Page text is in `src/content/leadership.ts`. Anonymous preview slots are in `src/content/leadership.drafts.ts`. Replace a slot only by adding an explicitly approved profile; do not treat a draft as an appointment.

Each profile can carry its own `portrait.src`, `alt`, and `objectPosition`. Setting one portrait does not change the others. Leave `portraitApproved` false until the photograph is approved. Store approved files under `public/images/`. No portraits are shipped in this step.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Browser checks:
  - `/leadership` loads with title `Leadership | Novarin Capital`
  - One header, one main, one `h1`; Leadership is the current nav item
  - Six anonymous slots, no `img` elements
  - Introduce your company opens `/#contact` with the section top at the 92px header offset
  - The homepage contact submit button remains disabled
  - The Firm, Investment Focus, and Our Approach still load, with only that page marked current
  - No horizontal overflow at 1440, 1024, 768, 390, or 360. At 390 and 360 the H1 is 38px
- Screenshots of the private preview:
  - `artifacts/previews/leadership-desktop.png` — 1440 × 2935
  - `artifacts/previews/leadership-mobile.png` — 390 × 5713

## Preserved

The homepage, The Firm, Investment Focus, and Our Approach layouts and copy remain. Leadership is now a real preview link in the header and footer. Perspectives stays planned.
