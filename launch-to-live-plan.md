# MuntasirMahdi.com -- Launch-to-Live Plan

**Date:** June 10, 2026
**Status:** COMPLETE -- Site live at https://muntasirmahdi.com (DNS propagating, global resolvers show Cloudflare IPs). See notes on Workers->Pages switch below.

---

## Overview

Full rebuild from scratch. No WordPress imports, no URL redirect mapping.
Current state: Next.js 16 + Sanity CMS, 15 routes, build clean.
**Host:** ~~Cloudflare Workers~~ **Cloudflare Pages (Advanced Mode)** via `@opennextjs/cloudflare` (free tier, unlimited bandwidth, global CDN).

> **Note:** Originally planned for Workers. Switched to Pages Advanced Mode because free tier Workers has 3MB limit. Sanity Studio caused 15MB bundle -> reduced to 4.4MB with dynamic import, but still exceeded limit. Pages Advanced Mode with `_worker.js` + `env.ASSETS` binding handles this correctly.

---

## Step 1: Install OpenNext Cloudflare Adapter
**Status: DONE**

npm install @opennextjs/cloudflare@latest
npm install --save-dev wrangler@latest

---

## Step 2: Create Config Files
**Status: DONE**

- `wrangler.jsonc` -- Pages config (not Workers)
- `open-next.config.ts` -- Adapter config
- `public/_headers` -- Static asset caching
- `.dev.vars` -- Local dev env

---

## Step 3: Update package.json Scripts
**Status: DONE**

Added: `pages-deploy` (runs `bash scripts/deploy-pages.sh`), `cf-typegen`

---

## Step 4: Update next.config.ts
**Status: DONE**

Added `initOpenNextCloudflareForDev()` at bottom.

---

## Step 5: Check for Edge Runtime
**Status: DONE** (no `runtime = "edge"` found)

---

## Step 6: Update .gitignore
**Status: DONE**

Added `.open-next/` and `.dev.vars`.

---

## Step 7: Set Environment Variables on Cloudflare
**Status: DONE**

**Wrangler secrets:** BREVO_API_KEY, BREVO_NEWSLETTER_LIST_ID, SANITY_API_TOKEN
**Build-time vars** (from .env.local): NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET

---

## Step 8: Add Production Domain to Sanity CORS
**Status: DONE**

CORS origins: localhost:3000, muntasirmahdi.com, *.pages.dev

---

## Step 9: Deploy to Cloudflare
**Status: DONE (Pages, not Workers)**

**Workers approach failed:** 3MB free tier limit exceeded by Sanity Studio bundle.
**Pages Advanced Mode:** Works with `_worker.js` + `env.ASSETS` binding.

Deploy URL: https://4db6f2ae.muntasirmahdi.pages.dev (all routes 200)

**CI/CD not set up yet.** Deploys manual via `npm run pages-deploy`.

---

## Step 10: DNS -- Go Live
**Status: DONE**

| Record | Old | New |
|---|---|---|
| Nameservers | lbd1/lbd2.hostingbangladesh.com | nelly/pete.ns.cloudflare.com |
| DNS | cPanel managed | Cloudflare-managed |

Custom domain CNAME: muntasirmahdi.com -> muntasirmahdi.pages.dev (Proxied, SSL Active)

---

## Step 11: Verify
**Status: DONE** (Site live globally, confirmed via VPN)

- [x] Preview site works -- all routes 200
- [x] Global DNS resolves to Cloudflare
- [x] Local DNS resolves to Cloudflare (auto-propagated within hours)
- [x] SSL certificate active
- [x] Email Routing: hello@muntasirmahdi.com -> Gmail (Active, tested and working)
- [ ] Contact form / Newsletter tested on production domain (post-launch item)
- [ ] Lighthouse performance (post-launch item)

---

## Post-Launch (Not Yet Done)

- [ ] GitHub Actions auto-deploy
- [ ] Sanity webhook -> auto-rebuild on publish
- [ ] Cancel HostingBangladesh (if email not needed there)
- [ ] www redirect
- [ ] HTTPS redirect

---

## Reference

| Item | Value |
|------|-------|
| Cloudflare account ID | aa682ebf2772839e1bfa895b373a8bb2 |
| Pages project | muntasirmahdi |
| Preview URL | https://4db6f2ae.muntasirmahdi.pages.dev |
| Production URL | https://muntasirmahdi.com |
