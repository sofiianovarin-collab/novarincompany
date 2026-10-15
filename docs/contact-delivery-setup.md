# Contact delivery setup

The site is a Vite frontend. No application server or hosting provider is configured. The inquiry handler is a local Node process for development and tests. It is not a production backend.

## Runtime

- Route: `GET /api/contact` returns `{ "mode": "disabled" | "sandbox" | "live" }`.
- Route: `POST /api/contact` accepts a JSON body of at most 32 KiB.
- Local process: `npm run contact:server`, bound to `127.0.0.1` and port `8791` unless `CONTACT_LOCAL_PORT` is set.
- Vite dev server proxies `/api/contact` to that process. The proxy is not the production API.
- Default mode is `disabled`.

## Environment

Copy `.env.example` into the server environment. Do not prefix these names with `VITE_`. Do not put values in the frontend bundle.

| Name | Purpose |
|---|---|
| `CONTACT_DELIVERY_MODE` | `disabled`, `sandbox`, or `live`. Empty means disabled. |
| `CONTACT_ALLOWED_ORIGINS` | Comma-separated browser origins. Default is the local Vite origins. |
| `CONTACT_RATE_LIMIT` | Requests per minute for one process, keyed by the socket address. |
| `CONTACT_SANDBOX_OUTCOME` | `accepted`, `rejected`, or `unknown`. Test configuration only. |
| `CONTACT_DELIVERY_LIVE_AUTHORIZED` | Must be `yes` before a future live attempt. It does not send mail today. |
| `CONTACT_PROVIDER` | Empty. No provider is selected. |
| `CONTACT_SENDER` | Empty. No verified sender. |
| `CONTACT_RECIPIENT` | Empty. No owner inbox. |

`live` currently returns “unavailable” and does not call a provider, even if authorization is set. There is no SMTP or API adapter yet.

## Rollback

Set `CONTACT_DELIVERY_MODE=disabled` and restart the contact process. The site keeps serving pages. A browser that still shows the send button cannot deliver, because the server refuses the post and does not store the body. Sandbox captures exist only in that process and are dropped on restart.

## Not done

No provider, DNS, SPF, DKIM, or public staging host was chosen. The in-memory rate limit is for one local process only. There is no durable idempotency store and no automatic retry. Newsletter delivery stays off. Homepage `#contact` stays a disabled preview.

## Future activation — do not run now

1. Choose the host and the mail provider.
2. Repeat the disabled and sandbox checks on that host.
3. Confirm origin checks and a production rate limit. The local memory limiter is not enough for more than one instance.
4. Get explicit permission for one owner-controlled delivery test.
5. Record provider acceptance separately from arrival in the inbox.
6. Approve a Privacy revision that names the actual recipient and provider, then authorize live collection.

The operator who will handle failed inquiries is not named yet.
