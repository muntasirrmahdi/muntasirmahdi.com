# muntasirmahdi.com

Personal website of Muntasir Mahdi — author, educator, solopreneur. Built with Next.js 16, Sanity CMS, and deployed on Cloudflare Workers.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 + React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity (blog posts, categories) |
| Hosting | Cloudflare Workers via @opennextjs/cloudflare |
| Fonts | JetBrains Mono, Inter, Noto Serif Bengali |
| Email | Brevo REST API (contact + newsletter) |
| Domain | Cloudflare DNS + Email Routing |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Copy `.env.example` (if present) or set these in `.env.local`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `BREVO_API_KEY`
- `BREVO_NEWSLETTER_LIST_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Deployment

Push to `main` auto-deploys via GitHub Actions:

```bash
git push origin main
```

The workflow runs:
1. `npm ci`
2. `npx @opennextjs/cloudflare build`
3. `npx opennextjs-cloudflare deploy`

Deploys to Cloudflare Workers global CDN (300+ edge nodes).

## Key Features

- Blog with Sanity CMS (Thoughts + Articles tabs, category filtering, search, pagination)
- Books showcase with individual pages
- Newsletter archive (78+ issues) with Brevo subscription
- Dark/light theme with localStorage persistence
- RSS feed (`/feed.xml`)
- SEO metadata, JSON-LD structured data, dynamic sitemap
- Contact form with multi-email routing
- Maintenance mode middleware
- Cookie consent banner
- 301 redirects from old WordPress paths
- 404 page

## Project Structure

```
site/
  src/
    app/          # Next.js App Router pages and API routes
    components/   # React components (Header, Footer, StickyBar, etc.)
    lib/          # Utility functions, Sanity client, queries
    data/         # Static data (newsletter issues)
  public/         # Static assets, _redirects, _headers
  sanity/         # Sanity Studio schema and config
```

## License

All rights reserved. Content and design (c) Muntasir Mahdi.
