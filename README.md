# wccc-web

Website for Wylie Community Christian Care, built with [Next.js](https://nextjs.org).

Live: https://wyliechristiancare.org (until DNS is flipped, the Vercel production URL: https://wccc-web.vercel.app)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Local environment variables go in `.env.local`.

## Deployment

The site is hosted on **Vercel** — project `wccc-web` in the Deyo Group team.

- Every push to `main` deploys to production automatically via Vercel's Git
  integration. Pushes to other branches get preview deployments. There is no
  GitHub Actions deploy workflow.
- Environment variables are managed in the Vercel dashboard:
  `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ALLOW_INDEXING` (the go-live gate for
  search-engine indexing), and the Resend email vars added at launch.
- ISR/caching is native on Vercel — no custom cache configuration exists or is
  needed.

### Legacy domain

`next.config.ts` permanently redirects (301) `wyliecommunitychristiancare.org`
and `www.wyliecommunitychristiancare.org` to the new domain, with the old
`/how-to-donate.html` path mapping to `/donate`.

## Project invariant

The contact form's server action must never 500: missing or failing email
configuration returns a graceful "call us" fallback result instead of throwing.
Preserve this in any change to the contact path.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
