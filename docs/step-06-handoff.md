# Step 06 handoff — Perspectives

## What was implemented

The Perspectives index at `/perspectives`. It uses the shared header, footer, buttons, container, type, and color tokens.

Private preview shows a navy hero, an editorial notice, one featured outline, topic and search controls, six more outlines, and a disabled newsletter band. These are proposed topics, not published articles. No dates, authors, or reading times were added.

## Files changed

- `src/pages/PerspectivesPage.tsx`
- `src/components/perspectives/` — hero, featured card, filters, grid, reader, newsletter, and abstract artwork
- `src/types/perspectives.ts`
- `src/content/perspectives.ts` — approved articles, currently empty
- `src/content/perspectives.drafts.ts` — seven anonymous outlines
- `src/content/perspectivesRoster.ts`
- `src/app/routes.tsx`
- `src/config/navigation.ts`
- `src/components/layout/SiteHeader.tsx` and `SiteFooter.tsx`
- `docs/site-map.md`

## Route and navigation

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/investment-focus` |
| Our Approach | `/approach` |
| Leadership | `/leadership`, still only when preview is on or a profile is approved |
| Perspectives | `/perspectives`, only when preview is on or an article is approved |
| Contact | `/#contact` |

On `/perspectives`, only Perspectives has the gold underline and `aria-current="page"`. There is no `/perspectives/:slug` route.

Direct loads work in `npm run dev` and `npm run preview`. A static host still needs a fallback to `index.html`. That was not deployed.

## Preview and public output

`__NOVARIN_PREVIEW__` in `vite.config.ts` is `true`. Draft outlines are used only while that flag is on and no approved article exists.

A publishable article needs `publicationApproved`, status `published`, a title, an excerpt, and either a full body or a verified destination. A title and excerpt alone are not enough. A public build with the flag set to `false` was checked and then removed. It did not contain the draft titles, outlines, or preview labels. Leadership drafts stayed out of that check as well. The running site remains in preview.

With no approved articles, `/perspectives` shows the hero, “Perspectives are on the way.”, and a link to `/investment-focus`. The filters, grid, notice, and newsletter are omitted, and Perspectives is hidden from the header and footer.

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/perspectives`.

## Editable copy and images

Titles, excerpts, categories, keywords, outlines, and approved bodies are records in `src/content/perspectives.drafts.ts` and `src/content/perspectives.ts`.

Each record can set its own `image.src`, `alt`, and `objectPosition`, with `imageApproved` separate from publication approval. Until an approved file is supplied, the card uses abstract SVG artwork keyed by the record id in `PerspectiveArtwork.tsx`. Replacing one image does not change the others. Put approved files in `public/images/perspectives/`. No photographs are shipped in this step.

## Filters, pagination, and the reader

Topic buttons and the mobile category select share one selection. Search matches the title, excerpt, and keywords, and it combines with the topic. “Clear filters” resets both and restores the featured layout. The featured record is omitted from the default grid and included again when a topic or search is active.

The grid shows six matching records at a time. “Load more insights” appears only when more matches exist. It is absent for the current seven outlines.

“Preview outline” opens a same-page dialog with the category, title, excerpt, and three questions, labelled as an editorial draft. An approved article with a destination uses a real “Read the article” link. An approved article with a body and no destination opens that body in the same dialog. Close dismisses it. The dialog is a native modal, so Escape dismisses it when the key reaches the page.

## Newsletter

There is no mailing endpoint and privacy handling is not approved. In preview the email field and Subscribe button are disabled, with “Preview only — subscriptions are not enabled.” Nothing is stored or sent. The band is omitted from a publishable build.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Browser checks on the preview page:
  - Title `Perspectives | Novarin Capital`, one main, one h1, Perspectives current in the header
  - Featured outline is not repeated in the default grid
  - Search for “local” returns that featured record in the grid with the count “1 perspective”
  - An unmatched search shows “No perspectives found.”
  - Clear filters restores the featured layout
  - Markets returns two records, including the featured one
  - Load more is absent
  - Preview outline opens the three review questions and moves focus to Close
  - No `img` elements
  - Newsletter controls stay disabled
  - Homepage still renders the disabled contact form and both Leadership and Perspectives links
- Screenshots of the default preview, reader closed:
  - `artifacts/previews/perspectives-desktop.png` — 1440 × 2491
  - `artifacts/previews/perspectives-mobile.png` — 390 × 4767

The automated Escape key did not reach the dialog. Closing through the Close control is implemented, and the dialog uses the native modal, which dismisses on Escape in the browser.

## Preserved

The homepage, The Firm, Investment Focus, Our Approach, and Leadership layouts and copy remain. Perspectives is now a real preview link. Leadership’s own approval rule is unchanged.
