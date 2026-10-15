# Step 07 handoff — Contact

## What was implemented

The Contact page at `/contact`. It uses the shared header, footer, container, type, and color tokens.

The page has a navy hero, introduction guidance, an inquiry form, and three collapsed questions. Delivery is disabled. The form can be typed in during preview, and Send inquiry stays disabled.

## Files changed

- `src/pages/ContactPage.tsx`
- `src/components/contact/ContactHero.tsx`
- `src/components/contact/ContactGuidance.tsx`
- `src/components/contact/ContactInquiryForm.tsx`
- `src/components/contact/ContactFAQ.tsx`
- `src/content/contact.ts`
- `src/content/inquiryValidation.ts`
- `src/types/contact.ts`
- `src/app/routes.tsx`
- `src/config/navigation.ts`
- `src/content/home.ts`, `about.ts`, `investmentFocus.ts`, `approach.ts`, and `leadership.ts` — contact buttons now open `/contact`
- `docs/site-map.md`

## Route and contact destinations

| Item | Destination |
|---|---|
| Wordmark / Home | `/` |
| The Firm | `/about` |
| Investment Focus | `/investment-focus` |
| Our Approach | `/approach` |
| Leadership | `/leadership`, under its existing approval rule |
| Perspectives | `/perspectives`, under its existing approval rule |
| Contact | `/contact` |
| Introduce your company / Start a conversation | `/contact` |
| Homepage contact section | `/#contact` still exists |

On `/contact`, Contact keeps the gold button and has `aria-current="page"`. The form region is `#inquiry`, so `/contact#inquiry` scrolls below the header.

Direct loads work in `npm run dev` and `npm run preview`. A static host still needs a fallback to `index.html`. That was not deployed.

## How to run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/contact`.

## Editable copy

Page text, inquiry labels, stage options, and FAQ answers are in `src/content/contact.ts`.

## Inquiry behavior

Founder inquiry is the default. Partnership changes the company label to Organization and replaces product stage with partnership focus. A general question requires only name, email, and the message, and hides stage, partnership focus, and markets. Values stay in memory when the type changes. Inactive fields are left out of validation and of `inquiryPayload`.

Optional websites must be `http://` or `https://` when filled in. The message limit is 2,000 characters. Errors use `aria-invalid` after a field is left. Nothing is written to storage, the URL, or the console.

## Delivery

`inquiryDeliveryEnabled` is false. There is no endpoint, approved Privacy Notice, or contact email. Preview shows “Preview only — submissions are not enabled.” The submit button is disabled, and the form has no action URL.

A publishable build without delivery hides the form, guidance, and FAQs. It shows “Online inquiries are not available yet.” and a mailto link only if `site.contactEmail` is set. Otherwise it asks visitors to check back.

`mockDelivery` can return accepted, rejected, rate-limited, or uncertain results locally. It does not send a request, and the page does not call it.

## Tests and screenshots

- `npm run lint` — passed
- `npm run build` — passed
- No automated test runner is configured
- Local checks of `validateInquiry`, `inquiryPayload`, and `mockDelivery` passed, including a rejected website scheme and hidden fields left out of a general-question payload
- Rendered page checks:
  - One `h1`, one `main`, founder inquiry selected, Send inquiry disabled, no form action
  - Preview notice, guidance, and FAQ questions are present
  - Homepage still has `#contact`, a disabled introduction form, and a link to `/contact`
- Screenshots of the empty founder preview, FAQs collapsed, mobile guidance collapsed:
  - `artifacts/previews/contact-desktop.png` — 1440 × 2299
  - `artifacts/previews/contact-mobile.png` — 390 × 3127

The in-app browser was unavailable for pointer checks of type switching and FAQ toggles. Those controls are native radios and `details` elements.

## Preserved

The six earlier pages keep their layouts. Only the contact button destinations changed. The homepage contact form and the Perspectives newsletter stay disabled.
