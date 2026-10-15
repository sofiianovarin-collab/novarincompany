# Step 12 handoff — contact delivery

Local inquiry handling works. Live email is not connected, and the site is not published.

## Readiness

| Area | Result |
|---|---|
| A. UI integration | The Contact form can show disabled, sandbox, and live-ready copy. Disabled is the default. |
| B. Local end-to-end workflow | A browser post reached the loopback handler and the local transport. |
| C. Hosting and provider | Not set up. No host or mail provider is confirmed. |
| D. Approved live collection | Not authorized. Live mode refuses to send. |
| E. Site publication | Not ready. |

## Implemented

- `shared/contact/schema.ts` — payload rules shared by the form and the server.
- `server/contact/` — handler, config, in-memory rate limit, local transport. No provider transport.
- `server/local.ts` — loopback HTTP server.
- `src/components/contact/ContactInquiryForm.tsx` — status and delivery states.
- `src/content/inquiryValidation.ts` — uses the shared schema.
- Vite dev proxy for `/api/contact`.
- `.env.example` with empty server settings.
- `docs/contact-delivery-setup.md`, `docs/step-12-test-report.md`, `docs/privacy-data-map.md`, `docs/launch-blockers.md`.

## Contract

`POST /api/contact` with JSON. Fields: `inquiryType`, `fullName`, `email`, `organization`, `website`, `message`, and the optional founder or partnership fields. Unknown keys are rejected. Inactive fields are left out of the plain-text body. The visitor cannot set recipients or headers.

Modes are server-owned. Disabled and live both return unavailable and do not store the inquiry. Sandbox returns accepted only after the local transport captures it. There is no browser mode switch.

## Still unknown

Hosting runtime, provider, verified sender, recipient inbox, production rate limiting, and an approved Privacy revision for this flow. Secrets stay in the server environment. None were collected.

The in-memory limiter is not a multi-instance control. There is no durable duplicate store and no automatic retry.

## Not performed

No external email, inbox check, DNS change, newsletter activation, homepage-form change, or deployment.

## Preserved

Routes, homepage `#contact`, newsletter disablement, leadership and article gates, and the unapproved Privacy and Terms revisions.
