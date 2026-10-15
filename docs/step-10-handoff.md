# Step 10 handoff — Website Terms & Disclosures

The `/terms` layout is ready for private review. The document is not an approved agreement, and the site is not publishable.

## 1. What was implemented

`/terms` is registered. Header order is unchanged. No `/disclaimer`, `/legal`, or `/cookies` route was added.

- `src/pages/TermsPage.tsx`, `src/pages/TermsPreviewPage.tsx`
- `src/content/terms.ts`, `terms.review.ts`, `termsRoster.ts`
- `src/app/routes.tsx`
- `src/components/layout/SiteFooter.tsx`, `SiteFooter.css`
- `src/components/legal/LegalSection.tsx` (optional children only)
- `docs/terms-content-review.md`, `docs/step-10-handoff.md`
- `docs/launch-blockers.md`, `docs/site-map.md`
- `artifacts/previews/terms-desktop.png`, `artifacts/previews/terms-mobile.png`

## 2. Reused legal layout and Privacy

The page uses `LegalPageHeader`, `LegalTableOfContents`, and `LegalSection`, plus the existing legal-page CSS. Contents are generated from the rendered sections. Desktop contents stay in a side column. Mobile contents are the same collapsed disclosure.

`LegalSection` can now take optional children. Privacy does not pass any, and its labels are unchanged.

A rendered `/privacy` check after this step still showed one `h1`, the policy review warning, and eleven “Review required” labels.

## 3. Approved versus unresolved wording

Revision `review-01` is not approved. `termsPublicationApproved` is false. `termsApprovedRevision` and `termsEffectiveDate` are null. `approvedTermsSections` is empty.

The preview shows twelve sections. Five candidate passages are labelled “Draft for review”. Seven unresolved sections are labelled “Review required”. The date line is “Publication date: Not confirmed”.

There is no earlier approved terms document to preserve. A publishable build without approval shows “Website terms are not available on this page yet.” and omits the draft text. That was checked in a temporary build, which was then deleted. `__NOVARIN_PREVIEW__` is true again.

## 4. Claims on existing pages

See `docs/terms-content-review.md`. The marketing pages describe an investment focus. They do not claim completed investments, named portfolio companies, appointed leaders, published articles, returns, licenses, or response times. No marketing sentence was rewritten. A footer disclaimer was not added to other pages.

## 5. Remaining inputs

Operator and brand relationship, scope, whether the purpose sentence stays accurate, any further offering or risk disclosures, content ownership and reuse, availability and responsibility wording, governing law only if specifically instructed, the revision process, and a verified contact channel. Details are in `docs/terms-content-review.md`.

## 6. Footer, approval, and collection

The legal row can show “Privacy Notice (Preview)” and “Website Terms (Preview)” independently. Approving one does not approve the other. A publishable build hides each link until that document’s own approval function is true.

`privacyHandlingApproved` and inquiry delivery stay false. No acceptance checkbox, cookie, or analytics was added. `noindex, nofollow` is unchanged.

## 7. Tests and screenshots

- `npm run lint`: passed.
- `npm run build`: passed.
- No unit-test runner is configured.
- Rendered preview: one `h1`, one `main`, one `header`, one `footer`, five “Draft for review” labels, seven “Review required” labels, both footer preview labels, and anchors `#investment-information` and `#inquiries`.
- Screenshots: `artifacts/previews/terms-desktop.png` (1440 × 3971) and `artifacts/previews/terms-mobile.png` (390 × 5144), including the footer. Mobile contents are closed in that file.
- Not repeated this step: a click of the open mobile contents, a live print, and fresh layout passes at 1024, 768, and 360. Those widths use the same shared legal CSS measured for Privacy.

## 8. Readiness

| Area | Result |
|---|---|
| Terms page layout | Ready for private visual review. |
| Content review | Not complete. Operator, rights, contact, and qualified-review inputs are open. |
| Publication | Not ready. Do not deploy. |
