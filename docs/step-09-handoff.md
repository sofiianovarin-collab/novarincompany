# Step 09 handoff — Privacy Notice

UI layout for `/privacy` is ready for private review. The notice is not legally approved and the site is not publishable.

## 1. Page and files

`/privacy` is registered. Header navigation is unchanged. The seven earlier routes are unchanged.

- `src/pages/PrivacyPage.tsx`, `src/pages/PrivacyPreviewPage.tsx`, `src/pages/PrivacyPage.css`
- `src/components/legal/LegalPageHeader.tsx`, `LegalTableOfContents.tsx`, `LegalSection.tsx`, and their CSS
- `src/content/privacy.ts`, `privacy.review.ts`, `privacyRoster.ts`
- `src/app/routes.tsx`
- `src/components/layout/SiteFooter.tsx`, `SiteFooter.css`
- Preview links on the homepage form, Contact form, and Perspectives newsletter
- `docs/privacy-data-map.md`, `docs/privacy-content-review.md`, `docs/step-09-handoff.md`
- `docs/launch-blockers.md`, `docs/site-map.md`
- `artifacts/previews/privacy-desktop.png`, `artifacts/previews/privacy-mobile.png`

## 2. Data-map findings

See `docs/privacy-data-map.md`. The app does not send inquiries, store form entries, set cookies, or call analytics. Homepage, Contact, and newsletter collection are disabled previews. Hosting logs, recipients, countries, and retention are unknown because the site is not deployed and no provider is configured. Step 08 did not authorize publication.

## 3. Approved versus unresolved text

No section is approved. The preview shows the eleven headings with a “Review required” label and the private guidance from the step brief, plus short notes of what the repo actually does. Public mode without approval does not render that guidance. It shows: “Privacy information is not available on this page yet.”

There is no earlier approved notice to preserve.

## 4. Footer, form links, and publication

- Preview footer label: “Privacy Notice (Preview)”.
- Approved public label, only if `isPrivacyPublished()` is true: “Privacy Notice”.
- A publishable build with approval still false does not render the footer link.
- Homepage, Contact, and newsletter use the same preview label while unapproved. Those links do not enable delivery.
- `privacyHandlingApproved` and `inquiryDeliveryEnabled` stay false.

Publication requires `privacyPublicationApproved`, `privacyApprovedRevision === privacyRevision`, a non-empty `approvedPrivacySections`, and `privacyEffectiveDate`. The route alone is not approval.

## 5. Where to edit

- Approved text, revision, date, and the approval flag: `src/content/privacy.ts`.
- Private guidance: `src/content/privacy.review.ts`. It is included only when `__NOVARIN_PREVIEW__` is true.
- Do not put review notes in `public/`.

## 6. Tests and screenshots

- `npm run lint`: passed.
- `npm run build`: passed.
- No unit-test runner is configured.
- Rendered preview: one `h1`, one `main`, eleven “Review required” labels, “Publication date: Not confirmed”, working `#` anchors, footer preview link, and “Print this notice”.
- Desktop contents sit in a left column with a gap before the article. They do not cover the text.
- Mobile contents start closed. The open state was checked in the component (`details` closes when a section link is chosen) and is not the file in `privacy-mobile.png`.
- Screenshots: `artifacts/previews/privacy-desktop.png` (1440 × 3840), `artifacts/previews/privacy-mobile.png` (390 × 4896).
- A temporary publishable build omitted the review guidance, the preview footer label, and “Publication date: Not confirmed”. It kept the unavailable sentence. That build was removed and the preview flag restored.

## 7. Remaining inputs

See `docs/privacy-content-review.md` and the Privacy row in `docs/launch-blockers.md`. Controller, contact, purposes, providers, retention, rights, cookies, wording, revision, and date are unresolved.

## 8. Preserved

Home, The Firm, Investment Focus, Our Approach, Leadership, Perspectives, and Contact keep their routes, copy, and gates. Draft leadership and perspective content stay preview-only. Forms and the newsletter stay disabled. `noindex, nofollow` is unchanged. Terms was not added.

## Readiness

| Area | Result |
|---|---|
| Privacy page layout | Ready for private visual review. |
| Legal content | Not approved. |
| Publication | Not ready. Do not deploy. |
