@AGENTS.md

# Stonebrite Construction Group — project memory

Marketing site for a family-owned bathroom-remodeling company in Davis, CA.
Live at https://stonebritecg.com (Vercel, auto-deploys on push to `main`).
Owner: Abel Vaniyev. He is non-technical — explain outcomes, not internals.

## Canonical business facts (never invent or vary these)
- Phone **(530) 771-6025** (Quo line) · Email **info@stonebritecg.com** · **Davis, CA**
- **CSLB License #1113488** — must appear in the footer (legal requirement)
- Ratings: **5.0** Google · 5.0 Thumbtack · 5.0 Yelp · **170+ completed projects**
- **5-year workmanship warranty** (waterproofing, plumbing, electrical)
- Serves "Greater Sacramento and the **Bay Area**" — never "East Bay"
- Timelines: tub-to-shower 5–10 business days · full remodel 7–14 · pricing $15k–$60k+
- Known real project cities: Vacaville (primary bath), Davis (corner-shower bath).
  Cards saying "Sacramento Area" are placeholders awaiting real cities from Abel.

## Hard content rules
- **Truth only.** Never fabricate reviews, stats, cities, or claims. All six homepage
  reviews are verbatim from real Google reviews. Real project photos wherever work
  is claimed (Featured Projects before/afters, owner-on-site); polished stock is OK
  purely for atmosphere.
- Voice: plain, direct, confident; no hype, no sales-y badges ("Now booking" pills
  were removed on request — don't reintroduce). Blog articles are first-person in
  Abel's voice (see `src/lib/blog-content.ts` header).
- Soft language for schedules ("estimated", never promised dates).

## Working conventions (Abel expects these)
1. After any change: `npm run build`, start on a fresh port (stale servers linger —
   old ports keep serving old code), **screenshot with Playwright**
   (`/opt/node22/lib/node_modules/playwright`, chromium at `/opt/pw-browsers`),
   and check **mobile 390px for overflow and photo cropping** — he checks on his phone
   and reports over-cropped photos. Then commit (`-c commit.gpgsign=false`) and push.
2. The stop-hook complains every push about unverified signatures — cosmetic,
   sandbox can't GPG-sign; tell him it's ignorable, don't churn on it.
3. Photo pipeline: Abel pastes photos into chat. Extract → optimize with `sharp`
   (target < ~100 KB) → SEO filename `descriptive-keywords-sacramento.jpg` →
   descriptive alt text → add to the image sitemap map in `src/app/sitemap.ts`.
   Watch EXIF rotation (`.rotate()`) and crop out phone-screenshot black bars.
4. Fixed-height `objectFit: cover` boxes crop portrait photos badly on mobile —
   use `height: auto` in the stacked breakpoint (see `.t2s-card-split`,
   `.t2s-future-photo`, `.home-why-photos` patterns in globals.css).
5. Accordions are native `<details>/<summary>` (`FaqAccordion`) — keep JS-free.
6. Site URL/canonicals = apex `https://stonebritecg.com` (www doesn't resolve yet).

## Architecture notes beyond AGENTS.md
- Middleware is `src/proxy.ts` (this Next version's name) — Supabase session
  refresh + geo-block (US-only, header `x-vercel-ip-country`, `/api` excluded,
  no header ⇒ allow).
- Leads: forms POST `/api/lead` → Resend email to info@ (`RESEND_API_KEY` in
  Vercel; works). Sender still `onboarding@resend.dev` until domain verified.
- Blog: bodies in `src/lib/blog-content.ts`; posts render only with content AND
  `published: true` in `src/lib/blog-data.ts` (13-title backlog is unpublished).
  Articles emit Article+FAQPage JSON-LD; sitewide GeneralContractor schema in
  `src/lib/schema.ts`; service pages add Service/Breadcrumb/FAQ graphs.
- Hidden, not deleted: bathrooms "Recent remodels" gallery behind
  `SHOW_RECENT_GALLERY = false` (needs real before/after pairs).
- Admin/proposals area is a localStorage prototype; superseded by a separate
  CRM product spec'd in `docs/crm-build-brief.md` (own repo — do not build here).
- `docs/BACKLOG.md` = current open items · `docs/PHOTOS.md` = photo inventory.
