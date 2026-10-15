# Motion upgrade handoff

Private-review build. Content, routes, approvals, and delivery settings were not changed. The site was not published.

## What was added

Shared timing lives in `src/config/motion.ts` and `src/styles/motion.css`.

- Buttons, the Contact nav item, and inline Learn more controls ease color over 220ms. On a fine pointer, the gold button lifts 1px and its arrow moves 3px. Disabled and planned items are excluded.
- Desktop nav links grow a gold underline from the left. The current page keeps that underline.
- The fixed header gains a darker navy and a hairline after a 24px sentinel leaves the viewport. Height and wordmark stay put.
- The mobile menu fades and settles 8px when it opens. Closing removes it immediately and releases the scroll lock at once.
- Home, The Firm, Investment Focus, and Our Approach run one hero entrance: the gold eyebrow line grows, and the heading, summary, and actions settle 8px. Text stays opaque. It runs once per visit, not on every render.
- The home hero photograph can drift between -8px and +8px on a desktop fine pointer, only while that hero is on screen. Phones and reduced motion skip it.
- Below-fold sections and card groups add a one-shot settle. Content is visible before the observer runs, and blocks already on screen are not replayed.
- Interactive focus cards lift 3px and fade a prepared shadow. Principles and leadership profiles stay static and non-clickable.
- The Firm and Investment Focus editorial photos scale to 1.025 inside their existing frames. Placeholder portraits and article artwork do not zoom.
- Learn more and process details open and close by measured height over 260ms, then return to `height: auto`. Contact FAQ answers use a grid-row disclosure. Neither opens on scroll.
- The approach timeline draws its connector once when the steps enter.
- The perspectives reader backdrop and panel settle in. Escape still closes immediately.
- Leadership, Perspectives, and Contact get a 200ms, 6px page settle. Home, The Firm, Investment Focus, and Our Approach use the hero entrance instead, so the two are not stacked. Privacy and Terms stay still.
- Same-page anchor scrolling is unchanged, and reduced motion turns it off.

## How to tune or turn a feature off

Edit `src/config/motion.ts`.

- `motion.reveals = false` stops scroll entrances.
- `motion.heroDepth = false` stops the home photograph drift.
- `motion.routeEntrance = false` stops the short page settle on Leadership, Perspectives, and Contact.
- Durations and the two easing curves are the CSS variables in `src/styles/motion.css`.

`prefers-reduced-motion: reduce` already disables animations and transitions in `src/styles/globals.css`, including smooth scrolling. Content, menus, and disclosures remain usable without waiting.

## Limits

- No motion library was installed. Effects use CSS and the Web Animations API.
- There is no separate mobile-menu exit animation, so a close cannot be interrupted halfway.
- The article reader does not play an exit animation. Escape is not delayed.
- Route movement is intentionally absent on the four marketing heroes and on Privacy and Terms.
- Leadership portraits and perspective covers are still placeholders, so they are not treated as photographs.

## Checks

- `tsc -b` passed.
- `oxlint src --deny-warnings` passed.
- Contact handler tests: 3 passed. No submission was sent from the browser.
- Layout captures, private preview, after entrances settled: `artifacts/motion-upgrade/home-desktop-private.png`, `home-1024-private.png`, `home-768-private.png`, `home-mobile-private.png`, `home-360-private.png`, `about-desktop-private.png`, `focus-desktop-private.png`, `privacy-desktop-private.png`, `home-reduced-private.png`.
- At 390px the contact page did not overflow horizontally (`scrollWidth` was within the viewport).
- Recordings: `artifacts/motion-upgrade/desktop-motion-demo.webm` (about 13.5s) and `artifacts/motion-upgrade/mobile-motion-demo.webm`. Desktop shows the home entrance, scroll, a Learn more toggle, and a route change. Mobile shows the menu, scroll, an FAQ disclosure, and a sample name typed into a field. The inquiry was not submitted.
- Reduced motion was emulated for the home capture. No frame-rate claim is made; scrolling was not profiled.

Preview: http://127.0.0.1:5173/
