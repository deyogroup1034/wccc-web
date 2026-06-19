# WCCC Website — Phase 0 Backlog

**Foundation & Scaffold** · Goal: a blank, branded, auto-deploying shell on Cloudflare Workers.

How to use: each ticket has what to run, answers for any interactive prompts, and a **Done when** check. Claude Code handles the interactive bits — the answers below are just so you steer it the right way. Don't move on until the current ticket's check passes.

A couple of standing rules carry over: if `npm install` complains about peer dependencies (React 19 is new), prefer `--legacy-peer-deps` — **never** `--force`. And confirm the Supabase CLI is pointed at the right project before any mutating command (not relevant until Phase 2, but the habit starts now).

### ▶ Revised execution order (after P0-01)

C3's `--framework=next` turned out to be broken in this environment, so the project was scaffolded with `create-next-app` and the **OpenNext Cloudflare adapter was wired manually** (`wrangler.jsonc` + `open-next.config.ts`). Because the adapter is the one hand-wired, unproven piece, we prove the deploy pipeline on the empty shell *before* building UI on top of it. Run in this order:

**P0-00 ✅ → P0-01 ✅ → P0-02 ✅ → P0-11 → P0-12 → P0-13** *(prove the pipeline)* **→ P0-03 → P0-04 → P0-05 → P0-06 → P0-07 → P0-08 → P0-09 → P0-10** *(layer on brand + UI)*

Ticket numbers stay stable for reference — just follow the order above, not strict top-to-bottom. Once P0-11/12/13 are green, every push auto-deploys, so you'll watch each later ticket land on the temp URL.

> Repo confirmed as `deyogroup1034/wccc-web`; SSH auth to GitHub verified working (use the SSH remote).

---

## P0-00 — Prerequisites  ✅ DONE

**Do:** Confirm the environment is ready.
```bash
node -v        # need 20.9+ for Next.js 16
git --version
```
Also confirm: you can reach the empty `wccc-web` repo on GitHub, and you have a Cloudflare account you can log into.

**Done when:** Node ≥ 20.9, git works, the GitHub repo is reachable, and you have Cloudflare credentials.

---

## P0-01 — Scaffold Next.js + Cloudflare Workers  ✅ DONE

> C3's `npm create cloudflare@latest -- wccc-web --framework=next` is **broken** (`Unsupported framework: next`). The working method: scaffold with `create-next-app`, then add `@opennextjs/cloudflare` and a `wrangler.jsonc` + `open-next.config.ts` manually. Same end state.

**create-next-app answers used:** TypeScript → Yes · ESLint → Yes · Tailwind CSS → Yes · `src/` directory → Yes · App Router → Yes · Turbopack → Yes · import alias → default (`@/*`).

**Done when:** `wccc-web/` exists, `npm run dev` serves the starter at `localhost:3000`, and the project contains `wrangler.jsonc` + `open-next.config.ts` (adapter present). *(Confirmed — Next 16.2.9, React 19.2.4, `@opennextjs/cloudflare` 1.19.11.)*

---

## P0-02 — Initialize repo + push  ✅ DONE

The scaffold ran with `--no-git`, so there's no repo yet — this is a full init, not just `remote add` + push.
```bash
cd wccc-web
git init
git add .
git commit -m "Initial scaffold: Next.js 16 + OpenNext Cloudflare adapter"
git branch -M main
git remote add origin git@github.com:deyogroup1034/wccc-web.git
git push -u origin main
```
The repo is empty (no README), so this clean push works with no rebase. SSH auth is confirmed working; use the SSH remote as shown.

**Done when:** the scaffolded app is pushed and visible on GitHub. *(Confirmed — repo no longer empty, default branch `main`.)*

---

## P0-03 — Prettier + Tailwind class sorting

```bash
npm install -D prettier prettier-plugin-tailwindcss
```
Create `.prettierrc` enabling `prettier-plugin-tailwindcss`.

**Done when:** `npx prettier --check .` runs without crashing.

---

## P0-04 — shadcn/ui init

```bash
npx shadcn@latest init
npx shadcn@latest add button
```
**Answers:** base color → **Stone** (warm neutral that suits the palette); accept default paths. If peer-dep conflicts appear, re-run with `--legacy-peer-deps`.

**Done when:** `components.json` exists, `src/lib/utils.ts` has the `cn` helper, and the Button component imports and renders.

---

## P0-05 — Core UI dependencies

```bash
npm install lucide-react sonner next-themes
```
Add `<Toaster />` (sonner) to the root layout and set up the `next-themes` provider (light as default).

**Done when:** the app builds, a test toast fires, and there are no theme-provider errors.

---

## P0-06 — Brand tokens (Tailwind 4 `@theme`)

Tailwind 4 is CSS-first — colors go in an `@theme` block in `src/app/globals.css`, not a config file. Define:
`navy #1B3A5C` · `evergreen #2E7D4F` · `gold #C5922E` · `red #D4583A` · `warm-white #F5F1EB` · `cream #FAF8F4` · `charcoal #333333` · plus supporting grays.

**Done when:** a throwaway element styled with the generated utilities (e.g. `bg-navy text-gold`) renders in the correct brand colors.

---

## P0-07 — Fonts (Lora + Open Sans via `next/font`)

In `src/app/layout.tsx`, load `Lora` and `Open_Sans` from `next/font/google`, expose them as CSS variables, and map them in `@theme` to `--font-serif` / `--font-sans`.

**Done when:** headings render in Lora, body text in Open Sans, with no flash of unstyled text.

---

## P0-08 — Supabase project + clients

1. Create a **new** Supabase project named `wccc-dev` in your org. (The ref your friend gave you is for a different project — don't use it here.) Copy the Project URL + anon key.
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=…
   NEXT_PUBLIC_SUPABASE_ANON_KEY=…
   ```
3. Install + wire clients:
   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   ```
   Create `src/lib/supabase/client.ts` (browser) and `src/lib/supabase/server.ts` (cookie-based server client) using the `@supabase/ssr` App Router pattern.

**Done when:** both clients import without error and a trivial server call (`supabase.auth.getUser()` → null) runs without throwing. No tables needed yet.

---

## P0-09 — Resend stub

```bash
npm install resend
```
Add `RESEND_API_KEY=…` to `.env.local` (create a key in Resend; domain verification waits for the Phase 1 contact form). Create `src/lib/email.ts` — a `sendEmail()` wrapper around the Resend client.

**Done when:** the util compiles and imports cleanly. No live send required yet.

---

## P0-10 — Shared layout: Nav + Footer

Build `src/components/site-nav.tsx` and `src/components/site-footer.tsx`, ported from the prototype: brand colors, Lora wordmark, nav links pointing at the real routes (they may 404 for now), footer columns + the PantryFriend login link. Wire both into `src/app/layout.tsx` so every route gets them.

**Done when:** nav + footer render on `/` and on a test route, styled on-brand. (Hero scroll behavior can wait for Phase 1.)

---

## P0-11 — Local Cloudflare preview

```bash
npm run preview
```
This builds via OpenNext and runs the app in the actual workerd runtime locally through Wrangler — proving the Cloudflare build works *before* deploying.

**Done when:** the app runs under `npm run preview` and matches `npm run dev`.

---

## P0-12 — First deploy to Cloudflare Workers (temp domain)

```bash
npx wrangler login
npm run deploy
```
**Done when:** the shell is live at your `*.workers.dev` URL (the temp domain) and shows the nav/footer + brand styling.

---

## P0-13 — CI/CD: auto-deploy on push

In the Cloudflare dashboard: **Workers & Pages → Create → connect to Git → select `deyogroup1034/wccc-web`**, set it to deploy on push to `main`.

**Important:** there's no C3-generated config to auto-detect (we wired the adapter by hand), so set the build explicitly rather than relying on a framework preset. Point the build/deploy at the OpenNext flow — the `deploy` npm script Claude Code added (OpenNext build → `wrangler deploy`), e.g. build command `npx opennextjs-cloudflare build` and deploy `npx wrangler deploy`. (Alternative: a GitHub Action using `cloudflare/wrangler-action` running the same commands.)

**Done when:** pushing a trivial change to `main` triggers a Cloudflare build and the live URL updates on its own.

---

## Phase 0 — Exit checklist

- [ ] Branded shell live at the temp `*.workers.dev` URL
- [ ] Nav + footer render on every route, on-brand (navy/gold/green, Lora + Open Sans)
- [ ] `npm run dev` **and** `npm run preview` both work
- [ ] Push to `main` auto-deploys via Cloudflare
- [ ] Supabase clients + Resend util wired (no data yet)
- [ ] Prettier + ESLint clean

When all six are checked, Phase 0 is done and the pipeline is proven end to end — every later phase just adds features into this shell.

---

*Next up: the Phase 1 backlog (porting the prototype into pages + full SEO + contact form). Say the word and I'll write it the same way.*
