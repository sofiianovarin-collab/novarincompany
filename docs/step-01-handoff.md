# Step 01 handoff

## 1. What was implemented

The repository was empty, so this step created a React, TypeScript, and Vite app and implemented the shared shell plus the homepage at `/`.

Main files:

- `src/app/App.tsx`, `src/app/routes.tsx` — router with only the homepage
- `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx` — reusable shell
- `src/components/ui/Button.tsx`, `SectionContainer.tsx`, `SectionHeading.tsx`
- `src/components/home/HeroSection.tsx`, `InvestmentFocusSection.tsx`, `PrinciplesBand.tsx`, `ContactSection.tsx`
- `src/pages/HomePage.tsx`
- `src/content/home.ts` — homepage copy
- `src/config/site.ts`, `src/config/navigation.ts`
- `src/styles/tokens.css`, `src/styles/globals.css`

Visitor-facing copy is English. The document language is `en`. The preview sends `noindex, nofollow`. That meta tag is not authentication or access control.

## 2. How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

```bash
npm run lint
npm run build
```

## 3. Route map and staged navigation

See `docs/site-map.md`.

`site.launchStatus` in `src/config/site.ts` is `preview`. Leadership and Perspectives appear in the header as unavailable controls with the accessible name “Planned page”. They are not links. Set `launchStatus` to `publishable` to hide them. Footer links are only the live homepage anchors.

## 4. How to replace the logo, hero, and copy

- Logo: there is no approved logo file. The header and footer render `NOVARIN CAPITAL` as a wordmark. Replace that treatment only when an approved asset is supplied.
- Hero: set `heroImage` in `src/config/site.ts` to a path under `public/images/`, for example `/images/hero-skyline.jpg`. The image is decorative. Do not describe it as an office. Leave `heroImage` unset to keep the navy fallback.
- Copy and company facts: edit `src/content/home.ts` and `src/config/site.ts`. Do not invent contact details, addresses, or a public origin.

## 5. Tests and screenshots completed

- `npm run lint` — passed, with no remaining warnings after the header focus cleanup
- `npm run build` (`tsc -b` and Vite) — passed
- No test runner is configured
- Browser checks on the local preview:
  - Desktop navigation, one `h1`, and planned items are not links
  - Card “Learn more” expands the supplied detail, sets `aria-expanded`, and toggles to “Show less”
  - Contact anchor lands with the section top at the header height (92px at desktop)
  - Submit stays disabled, the preview notice is shown, and `localStorage` stayed empty
  - Mobile menu opens, moves focus inside, closes with Escape, and restores focus to the menu button
  - No horizontal overflow at 1440, 390, or 360 CSS pixels. At 1024 the header uses the menu so the wordmark does not collide with the links
- Screenshots of the implemented page:
  - `artifacts/previews/home-desktop.png` — 1440 × 2648
  - `artifacts/previews/home-mobile.png` — 390 × 4193

Field-level validation messages are implemented in `ContactSection.tsx`. A browser fill of the form was not completed in this pass, so those messages were not exercised in the live preview.

## 6. Missing before publication

- Licensed hero photograph. None was supplied. The hero is a navy gradient until `heroImage` is set.
- Approved logo file, if a symbol is required beyond the wordmark.
- Verified contact email and address. Both are unset.
- Form endpoint and approved privacy handling. Submissions stay disabled until both `formEndpoint` and `privacyHandlingApproved` are set in `src/config/site.ts`.
- Legal content for `/privacy` and `/terms`.
- Leadership and Perspectives pages.
- A real public origin. No canonical URL or organization structured data is emitted.
- Any regulatory, registration, or office facts. None were invented.
