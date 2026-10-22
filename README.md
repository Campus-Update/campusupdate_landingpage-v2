# Campus Update — Landing Page

Astro + pnpm. Built from `Landing page.svg`.

## Run
Requires Node >= 22.23.4 and pnpm.

    pnpm install
    pnpm dev        # http://localhost:4321
    pnpm build      # outputs ./dist
    pnpm preview

## Deploy (Vercel)
Import the repo; Vercel auto-detects Astro (`vercel.json` is included). Set the real domain in `astro.config.mjs` (`site`).

## Where things live
- `src/data/site.ts` — ALL links + copy (CTAs, problem cards, steps, tabs, FAQ). Edit here.
- `src/components/*` — one component per section. `src/styles/global.css` — tokens + fonts.
- `public/fonts` — Neue Power + Archivo (woff2). `src/assets/img` — hero/phone shots + `placeholder-step-*` (swap these).

## TODO
- Form destinations for "Get early access" / "Bring it to my school" (`site.links`).
- Real photos for "How it works" (currently placeholders from the design).
- Per-tab screenshots (Announcements / Events / Calendar) — the phone image is reused for all tabs.
- Privacy / Terms / Cookie pages and social URLs.
- Neue Power is a *Trial* font: buy a license before launch.
