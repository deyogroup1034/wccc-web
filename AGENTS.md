<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Deployment (Vercel)

- Hosting: **Vercel** — project `wccc-web` in the Deyo Group team.
- Every push to `main` deploys to production automatically via Vercel's Git
  integration; pushes to other branches get preview deployments. There is no
  GitHub Actions deploy workflow.
- Production URL: https://wyliechristiancare.org once DNS is flipped; until
  then, the Vercel production URL https://wccc-web.vercel.app.
- ISR/caching is native on Vercel — no custom cache configuration exists or is
  needed.
- The Cloudflare Workers era is over: do not reach for `@opennextjs/cloudflare`,
  `wrangler`/`wrangler.jsonc`, `open-next.config.ts`, workers.dev URLs, or
  Cloudflare GitHub secrets. The site does not deploy there anymore.

## Environment variables

Managed in the Vercel dashboard, not in the repo:

- `NEXT_PUBLIC_SITE_URL` — canonical site origin.
- `NEXT_PUBLIC_ALLOW_INDEXING` — the go-live gate for search-engine indexing;
  stays off until launch.
- Resend email vars — added at launch.

Local development reads from `.env.local`.

## Legacy-domain redirects

`next.config.ts` permanently redirects (301) `wyliecommunitychristiancare.org`
and `www.wyliecommunitychristiancare.org` to the new domain, with the old
`/how-to-donate.html` path mapping to `/donate`. Keep these redirects intact
when touching `next.config.ts`.

# Project invariants

- **The contact form's server action must NEVER 500.** Missing or failing email
  configuration returns the graceful phone-fallback result instead of throwing
  (see `src/app/contact/actions.ts`). Preserve this in any future change to the
  contact path.
