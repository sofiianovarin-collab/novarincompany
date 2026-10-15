# Step 13 release readiness

Outcome: **CHANGES REQUIRED**. The local candidate was built and checked. It is not authorized for publication.

## Status

| Area | Result | Evidence |
|---|---|---|
| UI and build | VERIFIED locally | `vite build` wrote `artifacts/release-step13/candidate`. Eighteen full-page captures. |
| Public content | BLOCKED | No approved people, articles, photos, or legal text. Empty and unavailable states are in the candidate. Draft strings were absent from the built files. |
| Legal approval | BLOCKED | Privacy and Terms revisions are unapproved. The candidate shows the unavailable sentences only. |
| Hosting and domain | BLOCKED | No host, domain, or deployment config. `vite preview` is not production. |
| Inquiry delivery | BLOCKED | Handler defaults to disabled. No provider. Live mode does not send. |
| Search indexing | VERIFIED as off | `noindex, nofollow` is in `index.html`. It was not removed. |
| Owner authorization | NOT VERIFIED | No instruction to publish. |

## What changed

- Home document title is `Novarin Capital`, in `index.html` and `HomePage.tsx`.
- Production builds set `sourcemap: false`.
- `index.html` includes a same-origin Content-Security-Policy meta tag.
- Oxlint ignores `dist` and `artifacts` so built files are not linted as source.
- Reports: this file, `docs/deployment-runbook.md`, and the launch-blocker register.

## Build

Node v24.16.0, npm 12.0.1, lockfile `package-lock.json`. The workspace is not a git repository.

Public candidate command: `npx vite build --outDir artifacts/release-step13/candidate` with `__NOVARIN_PREVIEW__` false. Vite reported about 0.31 seconds. The flag was restored to true afterward.

`npm run lint`, `tsc -b`, and `npm run test:contact` (3 passed) were run on the source. No source maps were emitted.

## Exposure check

The candidate JavaScript and HTML did not contain draft leadership labels, draft article titles, legal review prompts, preview footer labels, “Approved image pending”, or mail-secret names. Empty-state sentences are present on purpose.

`/assets/missing.js` on `vite preview` returned the site HTML with status 200. A real host must not do that. `/api/contact` returned 502 from the preview proxy because the local handler was not running. It did not return the website HTML. That proxy is not a deployed API.

## Screenshots

Public-content candidate, `http://127.0.0.1:4180`. Eighteen files in `artifacts/release-step13/previews/`: home, about, investment-focus, approach, leadership, perspectives, contact, privacy, and terms, each as `*-desktop.png` (1440) and `*-mobile.png` (390).

Widths 1024, 768, and 360 were not recaptured. No second browser was used.

## Decisions still required

Publishing the pages, enabling inquiries, enabling the newsletter, and allowing indexing are four separate decisions. None is approved. The owner still needs a host, a domain, legal approval, and any real people, articles, images, or contact address. See `docs/launch-blockers.md` and `docs/owner-content-inputs.md`.

No deploy, DNS change, indexing change, or real email was performed.
