# Privacy data map

Observed from this repository and the Step 08 reports. This is not a provider audit. No dashboards, accounts, or production systems were opened. A package in `package.json` is not treated as an active service. A browser check cannot prove a host’s retention or processing location.

Statuses: **disabled preview**, **configured but unverified**, **verified active**.

## Website requests

- Information: ordinary browser requests for the pages and bundled assets (HTML, JS, CSS, self-hosted fonts).
- How obtained: the visitor’s browser requests the site.
- Status: disabled preview for application logging. No access-log, CDN, or security-log configuration is in the repo. The site is not deployed from this step.
- Purpose: serving the pages. No separate purpose is configured here.
- Destination: none named. No hosting or CDN provider is connected in the repository.
- Storage, logging, deletion, retention: none configured in the repo.
- Processing location: not established. Do not infer it from the developer’s location, language, or tooling.
- Evidence limit: `vite.config.ts` builds a static client. It does not record requests.
- Owner confirmation: who will host the site, and what that host logs, stores, and deletes.

## Homepage inquiry form

- Information: full name, email, company, website, and “what you’re building”, if someone types them.
- How obtained: fields on `/#contact`.
- Status: **disabled preview**. `site.formEndpoint` is unset and `privacyHandlingApproved` is false, so `isFormEnabled()` is false. The submit control is disabled. Entries are not written to storage or sent.
- Purpose: a future introduction, not active.
- Destination: none.
- Storage: in memory only while the page is open. No `localStorage`. The disabled handler returns before `fetch`.
- Processing location: not applicable while disabled.
- Evidence: `src/config/site.ts`, `src/components/home/ContactSection.tsx`.
- Owner confirmation: whether this form will be used, the recipient, and the retention rule. Approval of `/privacy` must not turn this on.

## Contact inquiry form

- Information: inquiry type (founder, partnership, or general) and the fields that type shows, including a message.
- How obtained: the form on `/contact`.
- Status: **disabled preview** by default. A local handler exists at `POST /api/contact`, but `CONTACT_DELIVERY_MODE` defaults to `disabled`. Live mode refuses to send. No mail provider is connected.
- Purpose: a future conversation. Not active for visitors unless the server is explicitly in sandbox or a later live authorization.
- Destination: none in disabled or live mode. Sandbox mode keeps a plain-text capture in the local server process only. It does not send email.
- Storage: disabled mode does not record the payload. Sandbox captures stay in process memory and disappear when that process stops. No retention period is configured. A future provider would keep its own copies; that is not set up.
- Processing location: not established. The local server binds to loopback only.
- Evidence: `src/components/contact/ContactInquiryForm.tsx`, `server/contact/handler.ts`, `docs/contact-delivery-setup.md`.
- Owner confirmation: provider, recipient, sender, and a Privacy revision that describes this flow before any live collection. Homepage `#contact` is a separate disabled form and was not connected.

## Newsletter

- Information: an email address field.
- How obtained: the Perspectives newsletter block.
- Status: **disabled preview**. Inputs and the button are disabled. The block is omitted when `__NOVARIN_PREVIEW__` is false. There is no subscribe endpoint, confirmation, or unsubscribe path.
- Purpose: not active.
- Destination: none.
- Storage: none.
- Evidence: `src/components/perspectives/NewsletterSection.tsx`, `src/pages/PerspectivesPage.tsx`.
- Owner confirmation: whether a list will exist at all.

## Fonts, images, embeds, and scripts

- Fonts: Cormorant Garamond and Source Sans 3 are packaged with `@fontsource` and built into `dist/assets`. The app does not request a font CDN.
- Images: no approved photography and no hotlinked images.
- Embeds and third-party scripts: none in the app.
- Status: **verified active** only for the bundled font files served with the site. No third-party font or embed request is implemented.
- Owner confirmation: the future host’s own asset logging, which this repo does not show.

## Cookies, storage, analytics

- Application code does not set cookies, use `localStorage` or `sessionStorage`, or load analytics or session replay.
- Status: **disabled preview** for those tools. They are absent, not “verified that the future host sets nothing.”
- Do not publish “we use no cookies” from this finding alone.
- Owner confirmation: host cookies, security cookies, and any later analytics decision.

## Leadership and Perspectives

- Preview builds show draft profile slots and article outlines. Those drafts are editorial content, not a visitor collection channel.
- A publishable build omits the draft modules. Public pages with nothing approved show empty states.
- Status: not a personal-data collection path.
- Owner confirmation: which biographies and articles may be published. Do not put private biographies in this map.

## Discrepancies

- There is no approved privacy claim in the live pages to contradict. The new `/privacy` page is a review preview, not a published notice.
- No authorized live integration was disabled. Delivery flags were already false and stay false.
