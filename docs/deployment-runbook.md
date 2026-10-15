# Deployment runbook

No hosting account, domain, or deployment trigger is configured. These steps are local. Do not run a remote deploy from this document.

## What this candidate is

`artifacts/release-step13/candidate/` is a static Vite build with public-content rules. It does not include the inquiry server. `npm run preview` only inspects that folder on this machine. It is not the production server.

The design-preview flag in `vite.config.ts` stays `true` for day-to-day work. The candidate was built with that flag set to false, then the file was restored.

## Local inspection

```bash
npm ci
npx vite preview --outDir artifacts/release-step13/candidate --host 127.0.0.1 --port 4180
sha256sum -c artifacts/release-step13/checksums.sha256
```

Run the checksum command from `artifacts/release-step13/`.

There is no previous release artifact. To take this candidate offline locally, stop the preview process. Nothing is published.

## When a host is chosen

Publish only `artifacts/release-step13/candidate/` as the website files. Do not upload `docs/`, `server/`, `.env`, or `artifacts/release-step13/previews/`.

The host must:

- Serve real files from `/assets/` and return a real 404 when a file is missing. This local preview returned `index.html` for `/assets/missing.js`. That must not happen in production.
- Fall back to `index.html` only for the page routes. Do not use that fallback for `/api/contact`.
- Keep `noindex, nofollow` until indexing is separately approved. Do not add a `robots.txt` that blocks `/` if the page itself carries `noindex`; a crawler that is blocked may never see the directive.
- Send `X-Content-Type-Options: nosniff` and a referrer policy such as `strict-origin-when-cross-origin`. Do not enable HSTS preload until HTTPS and every subdomain are confirmed.
- The built `index.html` already sends a Content-Security-Policy meta tag limited to same-origin scripts, styles, fonts, and images. Re-test it on the real host before adding a second, conflicting header.

## Inquiry handler

The handler is `server/local.ts`, loopback only, default mode `disabled`. A static host does not run it. If mail is later approved, run that process separately and route only `/api/contact` to it. Set the names in `.env.example` on the server, not in the browser bundle.

Disabling delivery is `CONTACT_DELIVERY_MODE=disabled` (or unset) and a restart of that process. Rolling back website files does not turn mail on. Do not restore an old preview build over this candidate if the goal is to hide draft leadership and article text.

## Indexing, later and separately

After the owner names a domain and approves indexing, remove the robots meta tag in a new candidate. Add canonical URLs only for that origin. A sitemap can then list the approved routes. Do not submit one now. No domain is confirmed, so no sitemap file was generated.

## Launch sequence — do not execute

1. Accept or fill the blockers in `docs/launch-blockers.md` for the exact scope.
2. Confirm the host, the directory, and that `/assets` and `/api` are not rewritten to `index.html`.
3. Deploy this candidate only after an explicit instruction.
4. Turn on indexing only with a separate instruction.
5. Turn on live inquiry delivery only with a separate instruction, after privacy approval.
6. Record the result. Remote TLS, DNS, and inbox delivery were not tested.
