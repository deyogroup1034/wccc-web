# WCCC Website — Phase 1 Backlog

**Public Content Site** · Goal: the full public website live on the temp URL, SEO-complete, with the prototype's design realized as real pages.

How to use: same as Phase 0 — each ticket has what to build, and a **Done when** check. Auto-deploy is live, so every push lands on `https://wccc-web.deyogroup.workers.dev`. Commit per ticket (or per small group) and eyeball the URL as you go.

**Final information architecture (reconciled from the prototype):**
Nav: **Home** (logo → `/`) · **About** · **Get Help** · **Get Involved** · **News** · **Contact** · **[Donate]** (red button)
"Get Help" replaces the prototype's "Services"; "Get Involved" replaces "Volunteer"; "News" is added.

**Carried-over context:**
- Hero image is the prototype's `wcc_hero.jpg` — pull it from the prototype repo (`deyogroup1034/wccc-homepage-prototype`) into this project.
- Donation processor is TBD → Donate ships as a styled placeholder (Phase 3 wires the real embed).
- Volunteer/partner signup doesn't exist yet (Phase 2/Milestone C) → Get Involved CTAs are informational ("here's how, contact us") for now.
- Resend key + domain aren't live yet → the contact form ships and validates; live email delivery switches on once the key + verified domain are added (test meanwhile via Resend's onboarding domain).
- Real stats / testimonial / contact details are placeholders until Audrey + Ron provide them — tracked in P1-11, not a blocker.

**Suggested execution grouping:**
P1-00 (nav reconcile) → P1-01/02 (homepage: hero + sections — *the big visual payoff*) → P1-03→P1-06 (content pages) → P1-07/08 (contact form + news) → P1-09/10 (privacy + SEO) → P1-11 (launch prep) → P1-12 (domain, when ready).

---

## P1-00 — Reconcile nav + footer to the final IA

Update `SiteNav` and `SiteFooter` to the sitemap above before building pages (cheaper now than after).
- **Nav:** Home (logo → `/`) · About (`/about`) · Get Help (`/get-help`) · Get Involved (`/get-involved`) · News (`/news`) · Contact (`/contact`) · Donate button (`/donate`). Rename Services→Get Help, Volunteer→Get Involved, add News.
- **Footer:** reconcile the columns to match — the old "Services" column becomes a **Get Help / Programs** column (Food Pantry, Bill Assistance, Clothing, Prayer Support); keep Get Involved and Contact columns; keep the PantryFriend Login link + tagline + 501(c)(3) line.

**Done when:** nav + footer reflect the final IA; links point at the real routes (they'll 404 until each page is built).

---

## P1-01 — Hero + scroll-aware nav

Build the homepage `Hero` and add the deferred nav scroll behavior.
- `Hero`: `wcc_hero.jpg` background (via `next/image`) + navy gradient overlay, the tagline eyebrow, the headline, and dual CTAs — **Get Help Today** (`/get-help`) and **How to Volunteer** (`/get-involved`).
- Make `SiteNav` a **client component** with the transparent-over-hero → solid-navy-on-scroll behavior from the prototype.

**Done when:** the homepage shows the hero with photo + overlay; the nav is transparent over the hero and turns navy on scroll; both CTAs route correctly.

---

## P1-02 — Homepage sections (port the rest of the prototype)

Build the remaining homepage sections as components, in prototype order:
- `StatsBar` — the floating stats (placeholder numbers for now).
- `MissionSection` — mission statement + "Learn Our Story" → `/about`.
- `ProgramsPreview` — the four programs as cards (Emergency Bill Assistance, Food Pantry, Clothing & Essentials, Prayer & Support), each linking into `/get-help`.
- `CtaBand` — the green CTA band (Get Help + Call).
- `GetInvolvedPreview` — volunteer / donate / partner cards.
- `Testimonial`.

**Done when:** the homepage renders all sections in prototype order, on-brand and responsive.

---

## P1-03 — About page (`/about`)

Story, mission, board & staff, financial transparency. Structure the sections now; real copy can be placeholder where WCCC hasn't supplied it (flag those spots).

**Done when:** `/about` renders on-brand with story / mission / board / transparency sections and no longer 404s.

---

## P1-04 — Get Help page (`/get-help`)

The most important page for someone in crisis. The four programs in detail, plus: who qualifies, what to bring, hours, and the service area (the seven cities).

**Done when:** `/get-help` renders the four programs with detail, eligibility, what-to-bring, hours, and service area.

---

## P1-05 — Get Involved page (`/get-involved`)

Volunteer · Partner / Church Drives as sections, with a donate teaser → `/donate`. Since the member platform doesn't exist yet, CTAs are informational (contact-to-get-involved), not signup forms — those arrive in Milestone C.

**Done when:** `/get-involved` renders volunteer + partner + church-drives sections with informational CTAs.

---

## P1-06 — Donate page (`/donate`) — styled placeholder

An on-brand giving page with the Heart Red CTA, built to receive the processor embed later. For now: a clear "Give" presentation with a placeholder (or contact-to-give), and a comment marking where the Phase 3 embed slots in.

**Done when:** `/donate` renders on-brand with a clear giving CTA placeholder, ready for the processor in Phase 3.

---

## P1-07 — Contact page (`/contact`) + form → Resend

- Page: address, map embed, hours, phone, email.
- Form: `react-hook-form` + `zod` → server action → `sendEmail()` (Resend), with a `sonner` success toast and error handling.
- Live delivery needs the Resend API key + a verified sending domain; until the real domain is set, test via Resend's onboarding domain.

**Done when:** `/contact` renders with details + map + a form that validates client-side and submits; live email confirmed once the Resend key/domain are in.

---

## P1-08 — News & Events (MDX in the repo)

Deyo posts by adding MDX files (self-serve admin comes in Phase 2).
- Set up an MDX content collection.
- `/news` index (list, newest first) + `/news/[slug]` individual posts.
- Add two starter posts as examples/templates.

**Done when:** `/news` lists posts, individual posts render, and dropping a new `.mdx` file creates a new post.

---

## P1-09 — Privacy page (`/privacy`)

A privacy policy (needed once the contact form collects data). Footer link points here.

**Done when:** `/privacy` renders and the footer link resolves.

---

## P1-10 — SEO pass (handwritten — the whole point)

- Per-page metadata via the Next metadata API: title, description, canonical, OpenGraph + Twitter tags.
- `sitemap.xml` (app route or `next-sitemap`) and `robots.txt`.
- JSON-LD `NGO`/`NonProfit` schema on the homepage: name, logo, address, `areaServed` (the seven cities), contactPoint.
- OG image(s) for social sharing.

**Done when:** every page has proper meta, `sitemap.xml` + `robots.txt` resolve, and the structured data validates.

---

## P1-11 — Launch prep: real content + QA

- Swap placeholder **stats, testimonial, phone, address, email** for the real values from Audrey + Ron (partial is fine — track what's still pending).
- Accessibility pass: keyboard nav, focus states, contrast, alt text (this audience matters).
- Responsive QA across mobile / tablet / desktop.

**Done when:** real data is in where available; a11y checks pass; layout holds across breakpoints.

---

## P1-12 — Production domain (when ready)

Wire the real domain (`wyliechristiancare.org`?) to the Cloudflare Worker with HTTPS, and update canonical URLs + sitemap to match. Optional/last — the temp URL is fine until WCCC is ready to go public.

**Done when:** the site is live on the production domain with HTTPS and correct canonicals.

---

## Phase 1 — Exit checklist

- [ ] Final IA reflected in nav + footer; no dead nav links
- [ ] Homepage fully ported (hero + all sections), scroll-nav working
- [ ] All routes built and live: About, Get Help, Get Involved, Donate, News, Contact, Privacy
- [ ] Contact form delivers email via Resend (key + domain in)
- [ ] News/events publishable by dropping an MDX file
- [ ] SEO complete: metadata, sitemap.xml, robots.txt, JSON-LD, OG images
- [ ] Real content swapped in; a11y + responsive QA passed
- [ ] (When ready) live on the production domain

When these are green, Milestone A is complete — the public website is live, fast, SEO-strong, and donor/board-ready. Next is Milestone B (Phase 2: staff accounts + content admin, then donations).

---

*Tip: start this in a fresh Claude Code session with this doc — a clean slate keeps it sharp after Phase 0's long run.*
