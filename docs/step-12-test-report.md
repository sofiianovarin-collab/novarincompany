# Step 12 test report

## Automated

`npm run test:contact`: 3 tests, 3 passed.

Covered: founder, partnership, and general capture; inactive fields omitted; unicode name and multiline message; unknown field; invalid type; malformed JSON; oversized body; wrong method and content type; disallowed origin; disabled and live calls return unavailable; rate limit; definite rejection; unknown acceptance; no capture after rejection.

`npm run lint`: passed after the header-character check was changed to a code-point loop.

`npm run build`: passed.

No external mail was sent. No provider message id exists.

## Browser

Disabled form, with the preview notice and a disabled button, captured from the existing dev server at `http://127.0.0.1:5173/contact` (no contact proxy, so the status request fails closed):

- `artifacts/step12/previews/contact-disabled-desktop.png` (1440 × 2410)
- `artifacts/step12/previews/contact-disabled-mobile.png` (390 × 3238)

Sandbox round trip on `http://127.0.0.1:5174/contact`, with the local server in sandbox mode. A synthetic founder inquiry was submitted through the page. The page showed the test banner and “Test inquiry received by the local test service. No external email was sent.”

- `artifacts/step12/previews/contact-sandbox-success-desktop.png` (1440 × 2484)
- `artifacts/step12/previews/contact-sandbox-success-mobile.png` (390 × 3261)

Validation, rejection, and uncertain outcomes were exercised in the handler tests via `CONTACT_SANDBOX_OUTCOME`, not by a public form field. Widths 1024, 768, and 360 were not recaptured.

Logs from the handler tests contain outcome codes only. They do not contain the sample email or message.
