# MuntasirMahdi.com -- WordPress to Next.js Migration Plan

**Generated:** May 29, 2026
**Status:** LIVE -- All phases A-F, I, N complete. Site live globally at https://muntasirmahdi.com via Cloudflare Pages (Next.js 16 + Sanity CMS). DNS fully propagated worldwide. Email Routing enabled: hello@muntasirmahdi.com -> Gmail. Local DNS resolves to Cloudflare (auto-propagated). WP backup saved at `/home/moon/Muntasir_Mahdi/muntasirmahdi_old_web_backup/`. See `plans/launch-to-live-plan.md` for deployment details.

---

## Architecture Decision

| Component | Choice |
|---|---|
| Framework | Next.js 16 + React 19 + TypeScript |
| Hosting | Cloudflare Pages (free tier, via @opennextjs/cloudflare) |
| CMS | Sanity (headless, visual editor for blog posts) |
| Styling | Tailwind CSS 4 |
| Fonts | JetBrains Mono (headings/code) + Inter (body EN) + Noto Serif Bengali (blog BN) |
| Animation | `use-scramble`, CSS transitions, Intersection Observer |
| Icons | `lucide-react` |
| SEO | `next-seo` + `next-sitemap` |
| Forms | `react-hook-form` + Brevo REST API |
| Domain | Keep at current registrar, update DNS to Cloudflare |

---

## Current Site Analysis

### Pages (10 total)

| # | Page | URL | Language | Content Type |
|---|---|---|---|---|
| 1 | Home | `/` | Mixed (EN + BN) | Hero, 6 books, 2 communities, latest articles, newsletter, stats |
| 2 | About | `/biography-of-muntasir-mahdi/` | English | Full bio, timeline, 3 topics (Clear Thinking / Learning / Systems & AI) |
| 3 | Books | `/books-by-muntasir-mahdi/` | Bangla | 10 books + individual book pages |
| 4 | Blog | `/blog/` | Mixed | 15 Bangla Thoughts + 1 English article |
| 5 | Newsletter | `/banglay-solopreneurship-.../` | English | Links to 77+ LinkedIn-hosted Bangla issues |
| 6 | Speaking & Media | `/speaking-and-media/` | English | Sparse |
| 7 | Contact | `/contact/` | English | Multi-email routing |
| 8 | Recommendations | `/product-recommendations/` | English | "Tools I Use" -- sparse |
| 9 | NOW | `/now/` | English | "What I'm Doing Now" -- sparse |
| 10 | Policy | `/policy/` | English | Full privacy policy, terms, disclaimer |

### Content Stats

- 15 Bangla "Thoughts" (short posts, May 2026)
- 1 English article (SuperOC)
- 10 books (all Bangla)
- 1 individual book page (Shunno Theke AI)
- ~77 newsletter issues hosted on LinkedIn
- 9 categories

### Current Tech Issues

- WordPress + Elementor: heavy, slow, drag-drop bloat
- Shared cPanel (1GB RAM): cannot run Node.js
- 22 plugins: performance drag, security surface
- No CDN: slow international visitors
- No proper Bangla font handling
- Base64 transparent pixel lazy-load (broken images)
- Elementor dependency for all layout

---

## 22 Plugin Replacement Map

| # | WP Plugin | Next.js Replacement | Effort |
|---|---|---|---|
| 1 | Activity Log | Built-in: `git log` | 0 |
| 2 | Archived Post Status | Sanity `status: archived` field | 1 hr |
| 3 | BetterLinks | `next.config.js` redirects + Dub.co | 2 hrs |
| 4 | Brevo | Direct Brevo REST API | 3 hrs |
| 5 | CMP Maintenance | Next.js middleware | 30 min |
| 6 | Code Snippets | Direct code in repo | 0 |
| 7 | Elementor | Custom React components | N/A |
| 8 | EmbedPress | Native MDX HTML embeds | 1 hr |
| 9 | Essential Addons | Custom components | N/A |
| 10 | Essential Blocks | Custom CSS/React | N/A |
| 11 | Fluent Forms | `react-hook-form` + Brevo API | 3 hrs |
| 12 | My Sticky Bar | 1 React component | 30 min |
| 13 | Polylang | Next.js i18n routing | 4 hrs |
| 14 | Rank Math SEO | `next-seo` + `next-sitemap` | 3 hrs |
| 15 | Site Kit (Google) | `next/script` for GA4 | 1 hr |
| 16 | Smush | `next/image` auto-optimization | 0 |
| 17 | Starter Templates | Not needed | 0 |
| 18 | Templately | Not needed | 0 |
| 19 | Ultimate Addons | Custom Header/Footer React components | 2 hrs |
| 20 | UpdraftPlus | `git push` = backup | 0 |
| 21 | W3 Total Cache | Static Generation at build time | 0 |
| 22 | Wordfence | No PHP = no vector. CSP + Cloudflare WAF | 1 hr |

**Total: ~22 hours plugin replacement -> ~10 hours custom work**

---

## Execution Plan (15 Phases, ~37 hours)

### Phase A: Foundation Setup (~2 hrs)
- Create GitHub repo `muntasirmahdi.com`
- Init Next.js 16 + TypeScript + Tailwind CSS 4
- Install Sanity CMS with blog schema
- Connect Cloudflare Pages to repo
- Environment variables

### Phase B: Design System (~3 hrs)
- Typography: JetBrains Mono, Inter, Noto Serif Bengali
- Dark theme: `#111` bg, `#d1d5db` text, `#ff6b35` accent
- Tailwind config, CSS variables, 200ms transitions
- Layout: `max-w-4xl`, generous spacing
- Header, Footer, Layout wrapper, SEO head

### Phase C: Static Pages MDX (~4 hrs)
- Home: scramble animation, book showcase, communities, stats
- About: timeline, 3-topics section
- Books: 10 individual pages + main listing
- Speaking, Recommendations, NOW, Policy

### Phase D: Sanity CMS Setup (~2 hrs) ✅ COMPLETE
- Blog post schema (title, slug, Portable Text, category, language, status) ✅
- Category schema ✅
- GROQ queries (postsQuery, postBySlugQuery, categoriesQuery, allSlugsQuery) ✅
- Sanity Studio embedded at /studio ✅
- @sanity/code-input plugin for code blocks ✅
- CORS origin added (http://localhost:3000) ✅

### Phase E: Blog System (~3 hrs) ✅ COMPLETE
- Blog listing with "Thoughts" + "Articles" tabs ✅
- Dynamic [slug] page with PortableText ✅
- NewsletterCard sidebar with Brevo integration ✅
- Search for articles ✅
- Category filtering — pending
- Pagination / Load More — pending
- RSS feed — pending

### Phase F: Newsletter Page (~1 hr)
- Static page + archive list of 77 issues
- Brevo subscription form

### Phase G: i18n Routing (~3 hrs)
- Locales: `en`, `bn`
- Language switcher
- Content routing by locale

### Phase H: SEO & Analytics (~2 hrs)
- `next-seo` per-page meta
- `next-sitemap`
- GA4 via `next/script`
- JSON-LD structured data

### Phase I: Forms & Email (~2 hrs)
- Contact form with `react-hook-form`
- Brevo API integration
- Multi-email routing logic

### Phase J: Performance & Security (~2 hrs)
- `next/image` WebP optimization
- Font preloading
- CSP headers for Cloudflare
- URL redirects (`_redirects`)
- Maintenance mode middleware
- Cookie consent component

### Phase K: Content Migration (~5 hrs) — SKIPPED (full rebuild)
- Export WordPress XML → backup saved only ❌
- Convert 15 Bangla Thoughts to Sanity → write fresh in Sanity ❌
- Convert 1 English article to Sanity → write fresh ❌
- Migrate 10 book pages to MDX → rewrite fresh ❌
- Upload media → add fresh via Sanity ❌

**Decision: Full rebuild from scratch. No WP content imported.**
Old WP backup saved at `/home/moon/Muntasir_Mahdi/muntasirmahdi_old_web_backup/` for reference.

### Phase L: Design Polish (~3 hrs)
- Scramble text animation
- Fade-in animations
- Terminal asterisk section markers
- Vim keyboard shortcuts
- Sticky announcement bar
- 404 page

### Phase M: Old URL Preservation (~1 hr) — SKIPPED (full rebuild, new URLs)
- Map old WP URLs to new paths ❌
- Create `_redirects` file ❌

**Decision: New site, new URL structure. No redirect mapping needed.**

### Phase N: Cloudflare Pages Launch + Email (~2 hrs)
- Install @opennextjs/cloudflare adapter
- Create wrangler.toml config (nodejs_compat flag)
- Create open-next.config.ts
- Update package.json scripts
- Add Cloudflare environment variables (5 vars)
- Add production domain to Sanity CORS
- Deploy to Cloudflare Pages via GitHub integration
- DNS: Point muntasirmahdi.com nameservers to Cloudflare (nelly/pete.ns.cloudflare.com)
- Cloudflare Email Routing: hello@muntasirmahdi.com -> muntasirrahmanmahdi@gmail.com
- Add MX records (route1/2/3.mx.cloudflare.net), SPF, DKIM via Cloudflare UI
- Verify all 15 routes, API endpoints, Sanity Studio
- Verify email delivery to Gmail

### Phase O: Post-Launch Automation (~1 hr)
- GitHub Actions auto-deploy
- Sanity webhook rebuild
- Brevo welcome automation
- Cloudflare analytics + GA4

---

## Total Effort

| Metric | Value |
|---|---|
| Total estimated hours | ~37 |
| Wall-clock with parallelization | ~25 |
| Tasks parallelizable | Phase B, C, D, F, H, I, J, L, M |
| Sequential dependency chain | A -> G -> D -> E -> K -> N -> O |

---

## Language Strategy

| Content | Language | System |
|---|---|---|
| All static pages | English | MDX files in repo |
| Blog "Thoughts" | Bangla | Sanity CMS |
| Articles | English | Sanity CMS |
| Books descriptions | Bangla | MDX files |
| Newsletter page | English | MDX |
| Policy/Legal | English | MDX |

---

## Deployment Flow

```
Push to GitHub main
  -> Cloudflare Pages detects Next.js
  -> npx @opennextjs/cloudflare build
  -> Transforms to Workers-compatible format
  -> Deploys to Cloudflare global CDN (300+ edge nodes)
  -> DNS: muntasirmahdi.com -> Cloudflare

Publish in Sanity Studio
  -> Webhook triggers Cloudflare rebuild
  -> New blog post live in ~60 seconds
```

## Old WP Backup Location

```
/home/moon/Muntasir_Mahdi/muntasirmahdi_old_web_backup/
  - db.gz              (21 MB)
  - plugins.zip        (138 MB)
  - themes.zip         (20 MB)
  - uploads.zip        (336 MB)
  - others.zip         (5.5 MB)
  Total: ~518 MB
```
