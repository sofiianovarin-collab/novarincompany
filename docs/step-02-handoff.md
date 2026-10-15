# Step 02 handoff — The Firm

## What was implemented

The Firm page at `/about`. It uses the existing header, footer, buttons, container, type, and color tokens. The homepage content, hero, contact form, and section anchors are unchanged.

The Firm navigation now opens `/about`. On that page the header marks The Firm with a gold underline and `aria-current="page"`. It is not marked current on the homepage.

Investment Focus, Our Approach, and Contact still go to the homepage anchors. Those links use the router, and the homepage scrolls to the target after it mounts. Header height is handled by the existing `scroll-margin-top`. Reduced motion uses an instant scroll.

## Changed files

- `src/pages/AboutPage.tsx`
- `src/components/about/AboutHero.tsx`
- `src/components/about/PurposeSection.tsx`
- `src/components/about/PrinciplesSection.tsx`
- `src/components/about/FocusContextSection.tsx`
- `src/components/about/AboutContactCTA.tsx`
- `src/content/about.ts`
- `src/app/routes.tsx`
- `src/app/ScrollManager.tsx`
- `src/app/DocumentMeta.tsx`
- `src/config/navigation.ts`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteHeader.css`
- `src/components/layout/SiteFooter.tsx`
- `src/components/ui/Button.tsx`
- `src/pages/HomePage.tsx` — restores the homepage title and description when returning from `/about`
- `docs/site-map.md`

Shared navigation now uses router links so `/about` and homepage anchors work from either page. That was required for the new route. Homepage copy and layout were not redesigned.

## Route and navigation map

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/#investment-focus` |
| Our Approach | `/#our-approach` |
| Contact | `/#contact` |
| Leadership, Perspectives | Planned. Preview-only unavailable controls. |
| Explore our investment focus | `/#investment-focus` |
| Start a conversation | `/#contact` |

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/about`.

## Editable copy

Page text, calls to action, and image settings are in `src/content/about.ts`.

## Images

No licensed hero or globe image was in the project. Both areas use a local color fallback. There are no broken image requests.

To add an asset, place the file in `public/images/` and set `aboutImages.hero` or `aboutImages.context` in `src/content/about.ts` with `src`, `alt`, `objectPosition`, `width`, and `height`. The hero image loads immediately. The lower image is lazy-loaded. Do not describe either picture as an office.

While `launchStatus` is `preview` and an image is missing, the page shows “Approved image pending”. That label is omitted in a publishable build.

## Missing before this page matches the illustrated reference

- Architectural hero photograph.
- Globe or interior context photograph.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Browser checks:
  - `/about` loads directly with title `The Firm | Novarin Capital`
  - Header and footer each render once; one `h1`; no `img` elements and no broken images
  - The Firm is current only on `/about`, and its header href is `/about`
  - Explore our investment focus opens `/#investment-focus` with the section top at the header offset
  - Returning to the homepage restores the homepage title and does not mark The Firm current
  - No horizontal overflow at 1440, 1024, 768, 390, or 360. 1024 uses the mobile menu. At 360 the H1 is 38px
- Screenshots of the implemented page:
  - `artifacts/previews/about-desktop.png` — 1440 × 2512
  - `artifacts/previews/about-mobile.png` — 390 × 3879

## Homepage preserved

The homepage sections, copy, disabled preview form, and anchors `#the-firm`, `#investment-focus`, `#our-approach`, and `#contact` remain. The only homepage behavior change is that The Firm in the shared header and footer now goes to `/about`, and in-app links scroll through the router.
