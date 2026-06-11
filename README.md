# muntasirmahdi.com

Personal website. Built with Next.js 16 + Sanity CMS. Deployed on Cloudflare Workers.

## Tech

- Next.js 16, TypeScript, Tailwind CSS 4
- Sanity CMS for blog content
- Cloudflare Workers via @opennextjs/cloudflare
- Brevo API for contact + newsletter

## Local dev

```bash
npm install
npm run dev
```

Set required env vars (see `.env.example` or the deploy workflow for the full list).

## Deploy

Push to `main` auto-deploys via GitHub Actions. No manual steps.

```bash
git push origin main
```
