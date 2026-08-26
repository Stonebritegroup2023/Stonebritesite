# Backlog & open items (as of the Aug 2026 build session)

## Owner actions (Abel — not code)
1. **Google Search Console** — verify domain via TXT record in Squarespace DNS,
   submit `https://stonebritecg.com/sitemap.xml`, Request Indexing on `/` and the
   cost article. Single biggest remaining visibility lever.
2. **www CNAME** — `www.stonebritecg.com` does not resolve. Add www in Vercel
   (redirect to apex) + the CNAME it shows in Squarespace DNS.
3. **NAP consistency** — update Google Business Profile, Yelp, Thumbtack to
   (530) 771-6025 and stonebritecg.com. Old (916) 347-6549 should forward to Quo.
4. **Resend domain verification** — then switch `/api/lead` FROM address to
   e.g. `leads@stonebritecg.com` (env `LEAD_FROM_EMAIL` already supported).
5. **Review velocity** — one new Google review/month; GBP posts with before/afters.

## Content (code + Abel input)
- Real cities for the three "Sacramento Area" Featured Projects cards.
- One new blog article per month from the 13-title backlog (`blog-data.ts` —
  write body in `blog-content.ts`, flip `published`). Add one true project
  anecdote per article over time.
- More before/after pairs → re-enable bathrooms `SHOW_RECENT_GALLERY` with real
  photos + real cities.

## Nice-to-haves discussed, not started
- Service-page variants of the full-photo CTA band ("Stonebrite does showers
  right." on /tub-to-shower, kitchens equivalent).
- Newsletter signup in footer is decorative — wire or remove.
- Aging-in-place anchor: homepage card links to `/bathrooms#aging-in-place` but
  no such section/id exists on the bathrooms page — add a section or retarget.
- Article OG images (per-post social cards) once design bandwidth exists.

## Separate product
- Multi-tenant contractor CRM: complete build brief at `docs/crm-build-brief.md`.
  New repo + new session; Abel supplies an updated design export to `/design/`.
