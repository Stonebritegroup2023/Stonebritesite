# Contractor CRM — Complete Build Brief

**Audience:** the engineering session (new repo, new chat) that will build this product from scratch.
**Status:** authoritative product + technical brief. Written 2026-07-26 from (a) the 24-screen design PDF (`CRM.pdf`), (b) the Stonebrite brand/design spec (`pdf-brand-spec.md`, embedded below as the default theme), (c) working code in the `Stonebritesite` repo worth porting, and (d) product decisions confirmed by the founder.

---

## 1. What this product is

A **brand-neutral, multi-tenant SaaS CRM for residential contractors**, covering the full revenue lifecycle: lead capture → appointment → AI-assisted proposal → e-signed agreement → project execution (selections, change orders, crew reports) → closeout → review. It is **a separate product from the Stonebrite marketing website** (separate repo, separate deployment, separate release cycle). Stonebrite Construction Group is tenant #1 and the design muse, but **nothing Stonebrite-specific may be hard-coded** — every company gets its own name, logo, colors, license number, libraries, and standards.

The design PDF shows the product with Stonebrite branding and an "INTERNAL" badge. Treat that as *the default theme applied to tenant #1*, not as the product's identity.

### Two operating modes (per-tenant, per-job-type)

| Mode | For | Lifecycle |
|---|---|---|
| **ProjectFlow** | Remodeling / project work (baths, kitchens, additions) | Lead → Appointment → Proposal (versioned) → DocuSign Agreement → Project (approved scope, selections, change orders, daily reports) → Closeout → Review |
| **QuickFlow** | Service work (repairs, small jobs, maintenance) | Request → Schedule → Dispatch → Complete (field report + photos) → Invoice (QuickBooks) → Review |

Both modes share customers, communication history, documents, automation, and reporting. A tenant can run one mode or both (e.g., a remodeler with a handyman division). The mode is intentionally *different in workflow*, not just a filter — QuickFlow skips proposals/selections and goes straight to scheduling and invoicing.

### Product principles (from founder)

1. **Agreements are generated from the exact accepted proposal version**, executed via DocuSign, and **auto-convert to a project** on signature.
2. **Lead AI** understands appointment notes, photos, measurements, promises made, tenant pricing rules, and proposal versions — and drafts proposals grounded in them.
3. **Approved Scope is the project's commercial source of truth** — composed of the signed agreement + addenda + signed change orders + courtesy items, every line carrying **source citations**.
4. **Unified communication history through Quo** (calls, texts, summaries) with **detected commitments** ("we promised the tile by Friday") surfaced as first-class objects.
5. **Event-driven follow-up automation** that *stops automatically* when the customer responds or the opportunity changes state.
6. **Company-level AI** that watches the whole workspace: proposals needing follow-up, late selections, projects exceeding labor estimates.
7. **Change orders originate from field notes or customer requests**, go through DocuSign, and **update Approved Scope only after signature**.
8. A real **appointment workspace** built around voice, camera, measurements, and field capture.
9. **Selections & allowance management** inside each project: deadlines, ordering, overages, approvals, installation status.
10. **Multi-tenant SaaS** with roles, permissions, company knowledge, **trade packs**, and configurable standards. Multi-tenancy is non-negotiable and built into the first table.

---

## 2. Screen inventory (from the 24-screen design PDF)

The design PDF (include it in the new repo at `/design/CRM.pdf`) contains, in this order: 18 desktop screens at 1440px and 6 mobile screens. Every screen below was designed; routes are proposed.

### Desktop (app shell: dark navy left sidebar + top bar w/ global search ⌘K, date, Quick Create, notifications, user menu; cream content area)

| # | Screen | Route | What's on it (as designed) |
|---|---|---|---|
| 1 | **Dashboard** | `/dashboard` | "Good morning, {name}" + day summary; **Today's Priorities** cards (follow-ups due, proposals awaiting, missing selections, open change orders, docs needing action, jobs at risk); **Sales Snapshot** w/ 7d–30d–Quarter–YTD toggle (new leads, appointments, proposals sent, viewed %, approved, pending revenue $, close rate); **Lead Pipeline** mini-board; **Proposals by status** ($ per status incl. Stale); **Active Projects** cards (city, family, job type, status chip, "Next:" action, crew, open items, AT RISK flag); **Follow-Up Queue** ("Don't let these go cold" — person, action, last contact, status chip, View/Draft buttons); **Production Risks** (missing selections blocking start, unanswered question, material not delivered, timeline concern) |
| 2 | **Change Orders** | `/change-orders` | Subtitle literally: *"drafts here · DocuSign signs · QuickBooks invoices."* Status tabs **All / Draft / Ready for Review / Sent to DocuSign / Signed / Void**. Table: CO#, project, title, reason (Owner request, Scope addition, Hidden condition, Scope reduction), ±price, ±schedule, status, sent, signed. **CO Builder**: project, CO number, price impact, schedule impact, new total, new target date, added scope, omitted scope, customer-facing summary, internal notes, reference photos, buttons Save Draft / Generate PDF / **Send to DocuSign**. Callout: *"When you click Send, we generate a PDF and email the client via DocuSign for signature. QuickBooks gets the line item once signed. The app doesn't handle accounting or signatures."* |
| 3 | **Crew Reports** | `/crew-reports` | Daily report feed/rollup across projects (completed today, tomorrow's plan, issues, materials, photos, hours) |
| 4 | **Customer Profile** | `/customers/[id]` | Contact + household, all projects/proposals/invoices, full communication history, documents, reviews |
| 5 | **Customers List** | `/customers` | Searchable table of customers (past + current), lifetime value, last activity |
| 6 | **Documents** | `/documents` | All files across workspace: agreements, COIs, W-9s, warranty packets, care guides, plans; filter by project/type; "docs needing action" |
| 7 | **Lead Detail** | `/leads/[id]` | Header: name, job type, city, lead source, chips (HOT LEAD, HIGH VALUE, PROPOSAL VIEWED); actions Call/Text/Email/Book Appointment, **Create Proposal**, Mark Lost/Won. **Contact card** (phones w/ primary flag, email, address, preferred contact method + time). **Activity Timeline** (unified: proposal viewed events w/ per-section dwell, calls w/ duration + AI summary, proposal v1/v2 sent, estimate visit completed w/ notes, lead created from website w/ form payload & source). **Stage rail**: current stage + **Suggested Next** (AI-drafted follow-up w/ "Draft Follow-Up" button). Owner assigned. **Related proposal card** (number, version, $, valid-through, status, Preview/Open). **Site photos** grid (from estimate visit). **Internal notes** (INTERNAL ONLY badge). |
| 8 | **Leads — Follow-Up Queue** | `/leads/follow-up` | Prioritized queue: overdue/due today; each row = who, recommended action, last contact, stage chip, View / **Draft** (AI) |
| 9 | **Leads — List View** | `/leads/list` | Dense sortable table alternative to the board |
| 10 | **Leads — Pipeline Board** | `/leads` | Kanban: **New → Contacted → Appointment Set → Appointment Completed → Proposal Needed → Proposal Sent → Viewed → Follow-Up → Won** (+ Lost, hidden-by-filter). Source filter tabs (All / Website / Referral / Google / Thumbtack / Past client). Cards: name, job type + city, source, est. value, chips (HOT, HIGH VALUE, NO RESPONSE, DRAFT NEEDED, APPT, BUDGET), next action w/ due, time-in-stage. Owner filter, sort by last activity. Switch to List / Follow-Up Queue / + New Lead. |
| 11 | **Project Detail** | `/projects/[id]` | Header: status (In Progress etc.) + **AT RISK · TIMELINE** flag, project code (e.g., SB-2026-037), address, **Day 9 of 14**, crew avatars, value + "1 change order pending +$1,400", timeline bar (start → target, "2 days behind"). Actions: Job packet, Upload photos, New change order, **Daily report**. Tabs: **Overview / Scope / Selections (n) / Change Orders (n) / Documents (n) / Photos (n) / Daily Reports (n) / Closeout**. Overview: latest daily report (completed today, tomorrow, issues, materials, photos), **Approved Scope** checklist (*"From proposal P-2026-037 v3 · approved Feb 21"*), Open Issues, customer card, selections status grid, change orders w/ DocuSign status, **Closeout checklist** (final walkthrough, punch list closed, final invoice sent, final payment collected, warranty packet delivered, care guide delivered, review requested). |
| 12 | **Projects List** | `/projects` | Cards/table of active + scheduled projects w/ status, risk flags, crew |
| 13 | **Proposal Builder** | `/proposals/[id]/edit` | Autosaving editor, numbered sections: **(1) Proposal Setup** (customer, project address, type, proposal number, date, valid-through); **(2) Project Summary** (title, summary, sq ft, estimated timeline in *soft language*, visual direction); **(3) What's Included** — reorderable **scope blocks** (name, customer-facing detail, HAS DETAIL, per-block Show/Hide toggle, + Add Scope Block, Use template…); **(4) Timeline** ("estimated only — don't promise exact dates" + copy-rule callout); **(5) Warranty** (default 5-year workmanship block; coverage + customer-facing copy); **(6) Investment** (base price, allowances, total, payment schedule e.g., "Standard · 5 milestones", breakdown lines); **(7) Optional Upgrades** (from library + custom; each w/ price, benefit, include + show-on-proposal toggles); **(8) Project Notes / Assumptions** (customer-facing; reminder: *"the proposal isn't a contract — the formal agreement is handled separately through DocuSign after approval"*); **(9) Branded Email Generator** (subject, plain body, branded preview). Right rail: **version stack** (v1 stale / v2 current + "reason for v2"), live customer-facing preview, **pre-send checklist**. Top: Save Draft / Preview Customer View / Prepare Email / **Mark as Sent**. |
| 14 | **Proposals List** | `/proposals` | Table by status (Draft, Sent, Viewed, Revision Requested, Approved, **Stale**, Superseded), $ values, valid-through, owner |
| 15 | **Reports** | `/reports` | Company analytics: funnel conversion, close rate, revenue, lead-source ROI, labor estimate vs. actual, selections lead-time |
| 16 | **Reviews / Closeout** | `/reviews` | Closeout pipeline + review requests (Google/Thumbtack links), review status tracking |
| 17 | **Selections Tracker** | `/selections` | KPI cards (projects w/ missing selections; due this week; **at delay risk**; approved·ready to order). Per-project sections: "7 of 10 selections approved · 3 outstanding" + Send Reminder + Open Project. Table columns: Selection, **Status (Not Selected → Selected → Approved → Ordered → Delivered → Installed; Needs Attention)**, **Source (company-supplied vs Owner-supplied)**, Needed-by, Approved date, Delivered/ETA, Notes (e.g., **"Blocking · Day 6"**). Per-project progress bars. Views: By project / **Library** / + New selection. |
| 18 | **Settings** | `/settings/*` | "Company & libraries — defaults that flow into every proposal, project, and document." Sub-pages: **Company info** (name, license #, phone, email, service area, default proposal validity days, logo — *"used on proposals, emails, and the portal header"*); **Proposal defaults**; **Warranty language**; **Email templates**; **Scope block library** (reusable blocks w/ category + active flag — bathroom demolition, tile shower, manufactured wall panel shower, vanity install, flooring, fan replacement, paint/drywall, shower glass, accessories, final cleanup, custom curbless pan…); **Upgrade library**; **Service categories**; **User roles**; **Integrations**. |

### Mobile (field app — same product, responsive PWA)

| # | Screen | Purpose |
|---|---|---|
| 19 | **Mobile — Crew Daily Report** | Structured end-of-day capture: completed today, plan tomorrow, issues, materials needed, photos, hours |
| 20 | **Mobile — Lead Detail** | Field view of lead + timeline + tap-to-call/text |
| 21 | **Mobile — Leads Pipeline** | Swipeable pipeline columns |
| 22 | **Mobile — Project Page** | Today's project status, scope, open items, photo upload |
| 23 | **Mobile — Proposal Builder** | Build/adjust proposal on-site after the estimate visit |
| 24 | **Mobile — Today** | The field home screen: today's appointments + jobs, next actions, quick capture |

### Screens implied but not in the PDF (must design during build)

- **Client portal** (customer-facing, per-tenant branded): proposal view (already prototyped in the website repo), agreement status, selections approvals, project progress/photos, documents, change-order approval. Route on a separate host or `/p/[token]` links.
- **Appointment Workspace** (see §7) — the voice/camera/measurement capture surface; the PDF's Mobile-Today and Lead Detail hint at it, but it's its own screen.
- Auth screens (sign in, invite acceptance, workspace switcher), onboarding wizard (company info → logo/colors → trade pack import), billing (later).

---

## 3. Design system & theming (brand-neutral)

### 3.1 Theme architecture

- All colors/fonts flow through **CSS variables set per-tenant** (`--brand-primary`, `--brand-accent`, `--surface-*`, `--ink-*`, logo URL, display name). Tenant themes are stored in `organizations.theme jsonb` and injected in the root layout. Default theme = the tokens below.
- The **left sidebar/top bar stay dark neutral** (near-black navy) for every tenant; tenant accent replaces gold; tenant logo replaces the wordmark; the "INTERNAL" badge becomes the workspace-type badge.
- Client-facing surfaces (portal, proposal, PDFs, emails) are **fully tenant-branded** — this is a selling point.

### 3.2 Default token set (Stonebrite theme — also the app's default)

Colors: navy-900 `#0B1F33`, navy-800 `#102A43`, navy-700 `#1A3A56`, navy-600 `#2A4D6F`; gold-500 `#E5B53A`, gold-600 `#C99B22`, gold-300 `#F3D78A`, gold-100 `#FAEBC2`; cream-50 `#FBF7EE`, cream-100 `#F6EFE2`, cream-200 `#EFE5D1`, cream-300 `#E5D7BB`; ink-900 `#14110D`, ink-700 `#2A251D`, ink-500 `#5C5447`, ink-300 `#8C8473`; stone-300 `#C9BCA8`, stone-500 `#8C7F6B`; success `#2E7D5B`, danger `#B0432F`.

Status chip palette (bg/text): Draft `#F5F5F4`/`#57534E` · Sent `#EFF6FF`/`#1D4ED8` · Viewed `#FEFCE8`/`#A16207` · Approved `#F0FDF4`/`#166534` · Revision Requested `#FFF7ED`/`#C2410C`.

Typography: **Cormorant Garamond 500** for page titles/section headings (never bold; letter-spacing −0.01em); **Manrope** 400/500/600/700 for everything else; eyebrows = Manrope 600, uppercase, tracking 0.16em, accent-600; monospace (JetBrains Mono) for IDs/badges like `CO-001`. Hairlines `rgba(20,17,13,0.08)`; radius 12–14px cards, 999px pills; spacing scale 4/8/12/16/24/32/48/64.

Document/PDF design (proposals, agreements, change orders, material lists): follow the full spec in `pdf-brand-spec.md` — copy that file into the new repo at `/design/document-spec.md`; substitute tenant tokens for the Stonebrite ones. Key rules: white page background, cream only on panels/zebra rows, navy table headers w/ cream text, gold rule flourish (2×48px), footer with license + contact on every page, embedded fonts, selectable text.

### 3.3 Voice

Plain-English, calm, confident, zero jargon or hype. Soft language for timelines ("estimated", never promised dates). The UI already models this with copy-rule callouts in the builder — keep those as **tenant-configurable "standards"** (see §8).

---

## 4. Multi-tenant architecture (build this first, not later)

- **Every domain table carries `org_id uuid not null`** with Postgres **Row-Level Security**: `org_id in (select org_id from memberships where user_id = auth.uid())`. No exceptions, including files (storage paths prefixed `org/{org_id}/…` with storage policies).
- **Tables:** `organizations` (name, slug, logo_url, theme jsonb, license_no, phone, email, service_area, settings jsonb, mode_config jsonb), `memberships` (org_id, user_id, role), `invites`.
- **Roles** (enum, enforced in RLS + UI): `owner`, `admin`, `office`, `sales`, `crew_lead`, `crew`, `readonly`. Client portal users are **not** members — they access via signed tokens/magic links scoped to a single customer.
- **Permissions matrix** (starting point): crew/crew_lead → assigned projects only, daily reports, photos, field notes; no $ visibility toggle per org. sales → leads/proposals/customers; office → everything except settings/user mgmt; admin/owner → all + settings + integrations.
- **Company knowledge** (all per-org, all feed the AI): scope block library, upgrade library, warranty language, email/SMS templates, service categories, pricing rules (see §6), proposal defaults, copy standards.
- **Trade packs:** installable starter bundles of the above (e.g., "Bath Remodel Pack", "Kitchen Pack", "Handyman/Service Pack") stored as versioned JSON seed sets; installing copies rows into the org's libraries (no shared mutable state). Stonebrite's real library (visible in the Settings screen) becomes the first Bath pack.
- **Workspace switcher** for users belonging to multiple orgs.
- Seed a **demo org** with the design PDF's fictional data (Jordan Reyes; Chen/Patel/Okonkwo/Brennan projects) for dev/screenshots/tests.

---

## 5. Data model (Postgres/Supabase — all tables have `id uuid pk`, `org_id`, `created_at`, `updated_at`; soft-delete via `deleted_at` where noted)

**CRM core**
- `customers` (name(s), emails[], phones[] w/ labels+primary flag, address, city, preferred_contact, notes, source, lifetime_value cached)
- `leads` (customer_id nullable→customers, stage enum: `new|contacted|appointment_set|appointment_completed|proposal_needed|proposal_sent|viewed|follow_up|won|lost`, source enum: `website|referral|google|thumbtack|past_client|other`, job_type, est_value, owner_user_id, chips/flags jsonb (hot, high_value, budget…), next_action text, next_action_due, lost_reason, stage_entered_at)
- `activities` (polymorphic timeline: subject_type/subject_id (lead|customer|project|proposal), kind enum: `call|sms|email|note|proposal_sent|proposal_viewed|visit_completed|form_submission|status_change|commitment|automation`, payload jsonb, occurred_at, actor (user|system|customer), summary text, ai_summary text). **This one table powers every timeline in the app.**
- `appointments` (lead_id, type: estimate|follow_up|service, scheduled_at, status, address, assigned_user, outcome notes)
- `field_captures` (appointment_id/lead_id, kind: `voice_note|photo|measurement|sketch|checklist|promise`, storage_path, transcript text, structured jsonb (e.g., `{room:"primary bath", wall_a_in: 96}`), captured_by, captured_at) — the raw material for Lead AI.

**Proposals & agreements**
- `proposals` (lead_id, customer_id, number e.g., P-2026-041, **current_version_id**)
- `proposal_versions` (proposal_id, version int, status: `draft|sent|viewed|revision_requested|approved|stale|superseded|void`, reason_for_version, project_title, summary, sq_ft, timeline_summary, visual_direction, valid_through, base_price, allowances, total, payment_schedule jsonb, notes_customer, sent_at, viewed_at, approved_at, **immutable snapshot once sent**)
- `proposal_scope_items` (version_id, sort, block_library_id nullable, name, customer_detail, show_to_customer bool, internal_notes)
- `proposal_line_items` (version_id, label, amount)
- `proposal_upgrades` (version_id, library_id nullable, name, benefit, price, included bool, show_on_proposal bool)
- `proposal_view_events` (version_id, viewed_at, ip/ua, per-section dwell jsonb) — feeds "viewed, 67% open rate" analytics + follow-up triggers
- `agreements` (proposal_version_id, envelope: docusign_envelope_id, status: `draft|sent|delivered|signed|declined|voided`, pdf_storage_path, sent_at, signed_at, signer jsonb). **Generated from the exact accepted proposal version — the agreement PDF is rendered from that immutable snapshot, never re-edited.**

**Projects (ProjectFlow)**
- `projects` (customer_id, agreement_id, code e.g., SB-2026-037, name, address, status: `sold_not_scheduled|scheduled|in_progress|punch_list|closed|on_hold`, start_date, target_date, day_count planned/actual, value cached from approved scope, crew jsonb or join, risk_flags jsonb: timeline|selections|materials|question)
- **`approved_scope_items`** — the commercial source of truth (project_id, description, category, amount nullable, source_type: `agreement|addendum|change_order|courtesy`, **source_ref** (agreement_id/CO id + document page/section), added_at, added_by, status: active|omitted). *Only* mutated by: agreement signature (initial population from proposal version), signed change orders, or explicitly-logged courtesy items. Every row shows its citation in the UI (e.g., "From proposal P-2026-037 v3 · approved Feb 21", "CO-001 · signed Mar 12").
- `change_orders` (project_id, number CO-001…, title, reason enum: `owner_request|scope_addition|hidden_condition|scope_reduction`, price_delta, schedule_delta_days, new_total, new_target_date, added_scope, omitted_scope, customer_summary, internal_notes, photos[], status: `draft|ready_for_review|sent_to_docusign|signed|void`, docusign_envelope_id, sent_at, signed_at, origin: `field_note|customer_request|office`, origin_ref → activities/field_captures id). On `signed`: apply to `approved_scope_items` + push QuickBooks line item + adjust project value/target date.
- `selections` (project_id, name, category, status: `not_selected|selected|approved|ordered|delivered|installed|needs_attention`, source: `company|owner_supplied`, needed_by, approved_at, ordered_at, delivered_eta, delivered_at, installed_at, allowance_amount, actual_amount, overage = actual−allowance (approval required if >0), blocking_day int nullable, notes)
- `daily_reports` (project_id, date, author, completed_today, plan_tomorrow, issues jsonb, materials_notes, photos[], hours jsonb per crew member, labor_hours_total)
- `issues` (project_id, title, detail, severity, status open|resolved, blocking bool, raised_by, resolved_at)
- `closeout_items` (project_id, key: final_walkthrough|punch_list_closed|final_invoice_sent|final_payment_collected|warranty_packet_delivered|care_guide_delivered|review_requested, done bool, done_at, done_by)
- `reviews` (project_id, platform, requested_at, received_at, rating, url)

**QuickFlow**
- `service_jobs` (customer_id, status: `request|scheduled|dispatched|in_progress|complete|invoiced|paid`, scheduled_at, assigned_user, description, field_report jsonb, photos[], invoice: qbo_invoice_id, amount)

**Documents & files**
- `documents` (subject_type/subject_id, kind: `agreement|coi|w9|warranty_packet|care_guide|plan|photo|pdf|other`, storage_path, name, needs_action bool, uploaded_by)

**Communications (Quo integration, §9.3)**
- `comm_messages` (customer_id, channel: `call|sms|email`, direction, occurred_at, duration, body/transcript, ai_summary, quo_id, matched_by: phone|email)
- `commitments` (customer_id, project_id nullable, text ("deliver tile by Friday"), made_by: us|customer, due_at nullable, source_ref → comm_messages/activities, status: open|kept|missed|cancelled) — detected by AI from comms + field notes; surfaced on dashboards and timelines.

**Automation & AI**
- `automation_rules` (org-level, trigger enum, conditions jsonb, sequence jsonb of steps [wait, email, sms, task], stop_conditions jsonb, active)
- `automation_runs` (rule_id, subject ref, current_step, state: running|stopped_response|stopped_stage_change|completed|error, log jsonb)
- `ai_insights` (org_id, kind: `proposal_needs_follow_up|selection_late|labor_over_estimate|stale_lead|risk`, subject ref, severity, explanation, evidence jsonb (citations), status: open|dismissed|actioned, created_at) — powers dashboard "Priorities" and a company-AI digest.
- `pricing_rules` (org-level: labor rates, category baselines, min job size, margin targets, allowance defaults, upgrade price list) — inputs to Lead AI proposal drafting; **AI proposes, human approves — prices are never auto-sent.**
- `audit_log` (org_id, actor, action, subject ref, before/after jsonb) — required for a source-of-truth product.

---

## 6. AI capabilities (Anthropic Claude API)

Use the Claude API server-side (never expose keys to the browser). Suggested tiering at time of writing — re-check current model ids when building: `claude-sonnet-5` for high-volume extraction/summarization (call summaries, commitment detection, photo captioning), `claude-opus-5` (or `claude-fable-5` if available to the org) for proposal drafting and company-level analysis. All AI output is **grounded with citations** to rows/files it used, stored alongside the output.

1. **Lead AI (per-lead copilot).** Context assembled from: `field_captures` (voice transcripts, measurements, photos w/ vision), appointment notes, `commitments`, full `activities` timeline, prior `proposal_versions` (+ diffs and the recorded "reason for v2"), org `pricing_rules`, scope/upgrade libraries, and copy standards. Capabilities: draft a complete proposal (scope blocks, line items, upgrades, soft-language timeline) into a *draft* version; answer "what did we promise the Chens?"; draft follow-up messages (the "Suggested Next / Draft Follow-Up" UI on Lead Detail and the Follow-Up Queue's Draft buttons); flag contradictions (promised X on call, proposal says Y).
2. **Company AI (workspace watcher).** Scheduled job producing `ai_insights`: proposals sent-not-viewed or viewed-no-reply past thresholds; **late selections** (needed_by approaching/past with status < ordered, esp. `blocking_day` set); **projects exceeding labor estimates** (sum daily_reports.labor_hours vs estimate on the proposal/project); stale leads; at-risk timelines. Each insight = severity + plain-English explanation + evidence citations + one-click action (open, draft follow-up, send reminder). Feeds the Dashboard "Today's Priorities" and "Production Risks" panels.
3. **Commitment detection.** On every ingested call/text/field note: extract commitments (who, what, when) into `commitments`; show on timelines; overdue ones become insights.
4. **Follow-up automation (event-driven, not a dumb drip).** Triggers: proposal_sent, proposal_viewed_no_reply, appointment_completed_no_proposal, lead_stage_stalled, selection_reminder, review_request. Sequences of wait/email/SMS/task steps using tenant templates (AI-personalized draft, human-approve or auto-send per rule config). **Hard stop conditions evaluated on every inbound event:** any customer response on any channel (Quo webhook, email reply, portal action), lead/proposal/project stage change, opportunity won/lost, manual stop. Quiet hours + per-tenant sending identity. Implementation: a queue/scheduler (§10) with `automation_runs` state machine — *idempotent and resumable*.

---

## 7. Appointment Workspace (field capture — mobile-first)

A dedicated in-appointment screen (launched from Today/Lead Detail) built around capture, not typing:

- **Voice**: tap-to-record observations; server-side transcription; auto-summary into appointment outcome; promises spoken aloud get flagged as candidate `commitments`.
- **Camera**: rapid photo capture auto-attached to the lead (`field_captures`), optional room/area tag; photos flow to Lead Detail "Site Photos" and later to the proposal/project.
- **Measurements**: quick numeric entry per room/wall/opening (structured jsonb), sq-ft calc; sketch attachment optional.
- **Checklists**: per job-type walkthrough checklist from the trade pack (water heater location, panel capacity, subfloor condition…).
- **Wrap-up**: one screen review → marks appointment completed, advances lead stage, notifies owner, and primes Lead AI ("ready to draft proposal").
- Must tolerate poor connectivity: local queue + retry (PWA).

---

## 8. Configurable standards (per-tenant)

The design bakes several "rules" into copy (e.g., *"Use soft language. Estimated timeline. Do not use permit-specific wording."*, *"proposal isn't a contract — the formal agreement is handled separately through DocuSign"*). Make these **org-configurable standards** stored in settings: timeline language policy, excluded words, warranty default text, proposal validity days, payment schedule templates, pre-send checklist items, CO reason list, closeout checklist items. The builder UI renders them as the callouts/checklists shown in the design; the AI receives them as constraints.

---

## 9. Integrations (all per-tenant, keys stored encrypted server-side; Settings → Integrations screen)

Build an **integration abstraction** (`integrations` table: org_id, provider, status, config/credentials encrypted, webhook secrets) so vendors are swappable.

### 9.1 DocuSign (e-signature — agreements & change orders)
- OAuth (JWT grant) per tenant, or app-level account with per-tenant branding to start.
- **Agreement flow:** proposal version `approved` → "Generate Agreement" renders the agreement PDF **from that exact immutable version** (document spec §3.2) → create DocuSign envelope (signer = customer, cc = owner) → track via **DocuSign Connect webhooks** (`sent/delivered/completed/declined/voided`) → on `completed`: store signed PDF in `documents`, set agreement `signed`, **auto-create the project**, populate `approved_scope_items` from the proposal version w/ citations, notify owner.
- **Change-order flow:** CO `ready_for_review` → Send = render CO PDF → envelope → on signed: apply scope/price/schedule deltas to Approved Scope + push to QuickBooks. Declined/voided → CO back to draft/void, no scope mutation. Exactly as the design's callout describes.
- Webhook handler must be idempotent (envelope events can repeat).

### 9.2 QuickBooks Online (accounting — the app deliberately does NOT do accounting)
- OAuth2 per tenant; store realm id; refresh tokens server-side.
- Sync: customers (create/match by email/phone), invoices for: project milestone payments (from payment schedule), **signed change-order line items** (automatic), QuickFlow job invoices; read-back payment status → closeout "final payment collected" + dashboards. Webhooks or polling for payment events.
- Never mirror full accounting; deep-link into QBO for anything beyond.

### 9.3 Quo (unified communications: calls + texts)
- Per-tenant connection; ingest via Quo webhooks/API: call records (recording/transcript, duration), SMS threads. Match to customers by phone; unmatched → triage inbox.
- Store in `comm_messages`; run AI summarization + commitment detection on ingest; **any inbound customer message fires the automation stop-check** (§6.4).
- Click-to-call/text from the app via Quo where the API allows; otherwise log-and-deep-link.
- Abstract as a "comms provider" interface so other vendors (OpenPhone, Twilio) can slot in later.

### 9.4 Others
- **Email:** Resend per-tenant sending domain (proposal emails, automation emails, portal notifications) + inbound reply parsing (stop-condition + timeline).
- **Website lead intake:** public per-tenant endpoint `POST /api/inbound/lead/{org_key}` — the Stonebrite site's existing `/api/lead` route will additionally POST here (one-line integration later; do not couple repos).
- **Calendar:** Google Calendar sync for appointments (later phase).
- **Review platforms:** Google Business Profile review link per tenant (request tracking only in v1).
- **Storage/AV:** Supabase Storage for photos/docs; transcription via a speech-to-text API for voice notes.

---

## 10. Tech stack & repo

- **Next.js (current App Router) + TypeScript + Tailwind v4** — same stack the team knows. NOTE for the build session: verify the installed Next version's conventions in `node_modules/next/dist/docs/` before writing code (recent versions renamed middleware→proxy, async `cookies()`, promise `params`).
- **Supabase**: Postgres + RLS (tenancy), Auth (members; magic-link tokens for portal), Storage, `pg_cron`/Queues. Migrations in-repo (`supabase/migrations`).
- **Background jobs**: Supabase Queues + cron, or Inngest if step-functions get hairy (automation sequences, AI digests, webhook processing, QBO sync). Pick one early; automation correctness depends on it.
- **PDF generation**: server-side HTML→PDF (e.g., `@react-pdf/renderer` or headless Chromium) implementing the document spec; used for proposals, agreements, change orders, job packets, material lists.
- **AI**: Anthropic SDK server-side; a thin `lib/ai` with per-feature prompt builders that always attach org standards + citations.
- **Validation**: Zod everywhere (mirror the website repo's pattern).
- **Deploy**: Vercel (separate project from the website), env per-environment; DocuSign/QBO/Quo webhooks need stable URLs — use Vercel prod + a tunnel story for dev.
- Repo layout: single Next app; `src/lib/{db,ai,integrations/{docusign,qbo,quo,resend},pdf,automation}`; `src/app/(app)` authed shell, `src/app/(portal)` client portal, `src/app/api/webhooks/*`.

### Port from the `Stonebritesite` repo (copy, then adapt — do not import across repos)
- `src/lib/types.ts` — Proposal/ScopeItem/UpgradeItem/TimelinePhase types map ~1:1 onto §5 (extend with versioning + org_id).
- `src/lib/supabase/{config,client,server}.ts` + `src/proxy.ts` — clean guarded Supabase pattern incl. the "proxy" (middleware) session refresh.
- `src/app/proposal/[id]/page.tsx` — customer-facing proposal page: solid starting point for the portal proposal view (approve / request-revision mailto actions become portal actions).
- `src/app/admin/proposals/*` — proposal builder prototype (localStorage-based); superseded by the PDF's builder design but useful reference.
- `src/app/api/lead/route.ts` — lead intake + Resend email pattern (validation, honeypot, honest error states).
- `docs/pdf-brand-spec.md` — becomes `/design/document-spec.md` (default document theme).
- Design assets: **include `CRM.pdf` (24 screens) at `/design/CRM.pdf`** in the new repo; it is the UI source of truth.

---

## 11. Build order (each phase ships something usable)

- **Phase 0 — Foundations (week 1):** repo, CI, Supabase project, schema + RLS for orgs/memberships/roles, auth + invites, app shell (sidebar/topbar/theming), seed demo org, settings→company info.
- **Phase 1 — CRM core:** customers, leads (board/list/detail), activities timeline, appointments, follow-up queue (manual), global search, website-lead intake endpoint. *Usable as a lead tracker.*
- **Phase 2 — Proposals:** builder (all 9 sections + libraries + versioning + pre-send checklist), customer-facing view + view-event tracking, proposal emails (Resend), proposals list, Stale detection. *Replaces localStorage prototype.*
- **Phase 3 — Agreements → Projects:** DocuSign integration + webhooks, agreement generation from accepted version, **auto project conversion + Approved Scope w/ citations**, project detail (overview/scope/photos/documents), daily reports (+ mobile), issues.
- **Phase 4 — Execution depth:** selections & allowances (tracker + reminders + blocking flags + overage approvals), change orders end-to-end (field-note origin → DocuSign → scope update → QBO line item), closeout + reviews, documents hub, job packet PDF.
- **Phase 5 — Automation & AI:** comms ingestion (Quo) + matching + summaries, commitment detection, automation engine w/ stop conditions, Lead AI (draft proposal + follow-ups), Company AI insights + dashboard priorities, appointment workspace (voice/camera/measurements).
- **Phase 6 — Platform:** QuickBooks sync, QuickFlow mode, reports/analytics, trade-pack installer, client portal polish, billing/subscription, onboarding wizard.

Adjust freely, but keep Phase 0's tenancy discipline absolute — retrofitting org_id/RLS is the one unrecoverable mistake.

---

## 12. Non-functional requirements

- **Security:** RLS on every table incl. storage; server-only integration secrets (encrypted at rest); signed short-lived URLs for files; audit_log on commercial mutations (scope, COs, agreements, pricing); rate-limit public endpoints; honeypots on public forms.
- **Correctness:** proposal versions immutable once sent; Approved Scope mutations only via defined transitions; webhook idempotency; automation state machine resumable.
- **Timezones:** org-level TZ; all "due today/overdue" logic in org TZ.
- **Mobile:** the six mobile screens are first-class; PWA + offline queue for field capture.
- **Accessibility & perf:** WCAG AA contrast (tokens already comply), keyboard-first tables, optimistic UI on boards.
- **Data export:** per-org export (CSV/JSON) from day one — it's a trust feature for SMB SaaS.

---

## 13. Open questions for the founder (answer in the new chat before Phase 2)

1. Product name + domain for the SaaS (brief is intentionally name-neutral).
2. DocuSign account: single company account initially, or per-tenant OAuth from day 1?
3. Quo: confirm plan/API access + which phone number(s) route in.
4. QuickBooks: which invoice granularity (milestones vs single invoice + COs)?
5. Pricing rules content: labor rates / category baselines to seed Stonebrite's tenant.
6. Portal domain strategy: `app.{product}.com/w/{slug}` vs tenant custom domains (affects auth cookies).
7. Billing model (per-seat vs per-workspace) — needed by Phase 6 only.

---

*End of brief. Everything above is self-contained; the only companion files the new repo needs are `/design/CRM.pdf` (the 24 screens) and `/design/document-spec.md` (copied from `docs/pdf-brand-spec.md`).*
