# Contractor CRM — Complete Build Brief

**Audience:** the engineering session (new repo, new chat) that will build this product.
**Companion files the new repo must contain, in `/design/`:**
1. The **design export** — the founder's design set is the **UI source of truth**. The founder is producing an updated export that supersedes the original 24-screen `CRM.pdf`; use the **latest** design files placed in `/design/` (they may include the new surfaces from §2's "extensions" list — Consultation Workspace, Integrations settings, mobile flows). Where the newest export and this brief conflict on visuals/layout, **the design wins**; where the design is silent, this brief governs.
2. `/design/document-spec.md` — document/PDF theme (copied from the website repo's `docs/pdf-brand-spec.md`).

**Written:** 2026-07-26, from the 24-screen design PDF, the brand/design spec, working code in the `Stonebritesite` repo worth porting, and the founder's product definition (quoted throughout §4–§10).

---

## 0. Prime directive: the PDF is already the product

Treat the existing PDF design and product architecture as the **source of truth**. Preserve its navigation, page structure, visual identity, proposal system, workflow system, terminology, information density, and overall product concept.

**Do not** redesign the application around a newer concept. **Do not** replace the PDF's dashboard, navigation, or established workflows. Specifically, do not materially replace or restructure the PDF's:

- Main navigation (Dashboard · Leads · Customers · Proposals · Projects · Selections · Change Orders · Crew Reports · Documents · Reviews/Closeout · Reports · Settings)
- Dashboard concept ("Good morning" + Today's Priorities + Sales Snapshot + Pipeline + Follow-Up Queue + Production Risks)
- Proposal architecture (versioned proposals, scope blocks, upgrades, pre-send checklist, customer-facing Proposal Room)
- Workflow architecture (lead pipeline stages, proposal → agreement → project conversion, change-order lifecycle, selections, daily reports, closeout)
- Project presentation (tabbed project detail with Approved Scope, day counter, risk flags)
- Visual component system, typography, color palette, spacing and density
- The premium contractor-focused identity

**Extend** the existing product naturally — through contextual actions, tabs, drawers, sheets, and dedicated workspaces — with the missing capabilities in §4–§9. The result should look like the same product matured into a connected, AI-enabled, mobile-ready, multi-tenant platform, not an unrelated redesign. The PDF is a beautiful working concept; this build adds the infrastructure and intelligent tools that make it a serious SaaS platform.

---

## 1. What this product is

A **brand-neutral, multi-tenant SaaS CRM for residential contractors** covering the full revenue lifecycle: lead capture → on-site consultation → AI-assisted versioned proposal → e-signed agreement → project execution (Approved Scope, selections, change orders, crew reports) → closeout → review.

It is a **standalone application** — its own repo, its own database, its own auth, its own domain, its own deployment. It is **not integrated with the Stonebrite marketing website** and has **zero runtime dependency on it**: no shared code, no shared Supabase project, no shared hosting, no cross-repo imports. Stonebrite Construction Group is tenant #1 and the design muse, but **nothing Stonebrite-specific may be hard-coded** — the "STONEBRITE · INTERNAL" badge in the mockups is simply tenant #1's branding rendered by the theming layer. (Any company — including Stonebrite — may optionally point its own website's contact form at the CRM's generic inbound-lead API, exactly like any other external lead source. That is a per-tenant integration choice, not product coupling.)

### Two operating modes (per-company, per-job-type)

| Mode | For | Lifecycle |
|---|---|---|
| **ProjectFlow** | Remodeling / project work | Lead → Consultation → Proposal (versioned) → DocuSign Agreement → Project (Approved Scope, selections, change orders, daily reports) → Closeout → Review |
| **QuickFlow** | Service work (repairs, small jobs) | Request → Schedule → Dispatch → Complete (field report + photos) → Invoice (QuickBooks) → Review |

Both modes share customers, communications, documents, automation, and reporting. A company can run one or both. The modes are intentionally different workflows, not filters.

### Non-negotiable product rules

1. **Agreements are generated from the exact accepted proposal version**, executed via DocuSign, and **auto-convert to a project** on signature.
2. **Approved Scope is the project's commercial source of truth** — signed agreement + addenda + signed change orders + courtesy items, every line carrying **source citations**.
3. **Change orders originate from field notes or customer requests**, pass through DocuSign, and **update Approved Scope only after signature**.
4. **Event-driven follow-up automation stops automatically** when the customer responds on any channel or the opportunity changes state.
5. **AI-generated content is always editable and always requires human review** before it modifies a proposal, agreement, Approved Scope, a price, or any customer-visible record.
6. **Every integration action creates an activity event** on the relevant lead, proposal, customer, or project timeline.
7. **Multi-tenancy is built into the first table** — retrofitting `company_id`/RLS is the one unrecoverable mistake.

---

## 2. Screen inventory (from the 24-screen design PDF — preserve as designed)

The PDF contains 18 desktop screens (1440px) and 6 mobile screens, in this order. Routes are proposed; layouts/content are as designed.

### Desktop (app shell: dark navy left sidebar + top bar with global search ⌘K, date, Quick Create, notifications, user menu; cream content area)

| # | Screen | Route | What's on it (as designed) |
|---|---|---|---|
| 1 | **Dashboard** | `/dashboard` | "Good morning, {name}" + day summary; **Today's Priorities** cards (follow-ups due, proposals awaiting, missing selections, open change orders, docs needing action, jobs at risk); **Sales Snapshot** w/ 7d–30d–Quarter–YTD toggle (new leads, appointments, proposals sent, viewed %, approved, pending revenue $, close rate); **Lead Pipeline** mini-board; **Proposals by status** ($ per status incl. Stale); **Active Projects** cards (city, family, job type, status chip, "Next:" action, crew, open items, AT RISK flag); **Follow-Up Queue** ("Don't let these go cold" — person, action, last contact, status chip, View/Draft); **Production Risks** (missing selections blocking start, unanswered question, material not delivered, timeline concern) |
| 2 | **Change Orders** | `/change-orders` | Subtitle literally: *"drafts here · DocuSign signs · QuickBooks invoices."* Status tabs **All / Draft / Ready for Review / Sent to DocuSign / Signed / Void**. Table: CO#, project, title, reason (Owner request, Scope addition, Hidden condition, Scope reduction), ±price, ±schedule, status, sent, signed. **CO Builder**: project, CO number, price impact, schedule impact, new total, new target date, added scope, omitted scope, customer-facing summary, internal notes, reference photos; Save Draft / Generate PDF / **Send to DocuSign**. Callout: *"When you click Send, we generate a PDF and email the client via DocuSign for signature. QuickBooks gets the line item once signed. The app doesn't handle accounting or signatures."* |
| 3 | **Crew Reports** | `/crew-reports` | Daily report feed/rollup across projects (completed today, tomorrow's plan, issues, materials, photos, hours) |
| 4 | **Customer Profile** | `/customers/[id]` | Contact + household, properties, all projects/proposals/invoices, full communication history, documents, reviews |
| 5 | **Customers List** | `/customers` | Searchable table (past + current), lifetime value, last activity |
| 6 | **Documents** | `/documents` | All files across workspace: agreements, COIs, W-9s, warranty packets, care guides, plans; filter by project/type; "docs needing action" |
| 7 | **Lead Detail** | `/leads/[id]` | Header: name, job type, city, source, chips (HOT LEAD, HIGH VALUE, PROPOSAL VIEWED); actions Call/Text/Email/Book Appointment, **Create Proposal**, Mark Lost/Won. **Contact card** (phones w/ primary flag, email, address, preferred contact + time). **Activity Timeline** (unified: proposal-viewed events w/ per-section dwell, calls w/ duration + AI summary, proposal v1/v2 sent, consultation completed w/ notes, lead created from website w/ form payload & source). **Stage rail**: current stage + **Suggested Next** with "Draft Follow-Up." Owner assigned. **Related proposal card** (number, version, $, valid-through, status). **Site photos** grid. **Internal notes** (INTERNAL ONLY badge). |
| 8 | **Leads — Follow-Up Queue** | `/leads/follow-up` | Prioritized queue: overdue/due today; each row = who, recommended action, last contact, stage chip, View / **Draft** (AI) |
| 9 | **Leads — List View** | `/leads/list` | Dense sortable table alternative to the board |
| 10 | **Leads — Pipeline Board** | `/leads` | Kanban: **New → Contacted → Appointment Set → Appointment Completed → Proposal Needed → Proposal Sent → Viewed → Follow-Up → Won** (+ Lost, filter-hidden). Source tabs (All / Website / Referral / Google / Thumbtack / Past client). Cards: name, job type + city, source, est. value, chips (HOT, HIGH VALUE, NO RESPONSE, DRAFT NEEDED, APPT, BUDGET), next action w/ due, time-in-stage. Owner filter, sort. Switch to List / Follow-Up Queue / + New Lead. |
| 11 | **Project Detail** | `/projects/[id]` | Header: status + **AT RISK · TIMELINE** flag, project code (SB-2026-037), address, **Day 9 of 14**, crew avatars, value + "1 change order pending +$1,400", timeline bar (start → target, "2 days behind"). Actions: Job packet, Upload photos, New change order, **Daily report**. Tabs: **Overview / Scope / Selections (n) / Change Orders (n) / Documents (n) / Photos (n) / Daily Reports (n) / Closeout**. Overview: latest daily report, **Approved Scope** checklist (*"From proposal P-2026-037 v3 · approved Feb 21"*), Open Issues, customer card, selections grid, change orders w/ DocuSign status, **Closeout checklist** (final walkthrough, punch list closed, final invoice sent, final payment collected, warranty packet delivered, care guide delivered, review requested). |
| 12 | **Projects List** | `/projects` | Cards/table of active + scheduled projects w/ status, risk flags, crew |
| 13 | **Proposal Builder** | `/proposals/[id]/edit` | Autosaving editor, numbered sections: **(1) Proposal Setup** (customer, project address, type, number, date, valid-through); **(2) Project Summary** (title, summary, sq ft, estimated timeline in *soft language*, visual direction); **(3) What's Included** — reorderable **scope blocks** (name, customer-facing detail, HAS DETAIL, per-block Show/Hide, + Add Scope Block, Use template…); **(4) Timeline** ("estimated only — don't promise exact dates" + copy-rule callout); **(5) Warranty** (default workmanship block; coverage + customer-facing copy); **(6) Investment** (base price, allowances, total, payment schedule "Standard · 5 milestones", breakdown lines); **(7) Optional Upgrades** (library + custom; price, benefit, include + show-on-proposal toggles); **(8) Project Notes / Assumptions** (customer-facing; reminder: *"the proposal isn't a contract — the formal agreement is handled separately through DocuSign after approval"*); **(9) Branded Email Generator** (subject, plain body, branded preview). Right rail: **version stack** (v1 stale / v2 current + "reason for v2"), live customer-facing preview, **pre-send checklist**. Top: Save Draft / Preview Customer View / Prepare Email / **Mark as Sent**. |
| 14 | **Proposals List** | `/proposals` | Table by status (Draft, Sent, Viewed, Revision Requested, Approved, **Stale**, Superseded), $ values, valid-through, owner |
| 15 | **Reports** | `/reports` | Company analytics: funnel conversion, close rate, revenue, lead-source ROI, labor estimate vs. actual, selections lead-time |
| 16 | **Reviews / Closeout** | `/reviews` | Closeout pipeline + review requests, review status tracking |
| 17 | **Selections Tracker** | `/selections` | KPI cards (projects w/ missing selections; due this week; **at delay risk**; approved·ready to order). Per-project: "7 of 10 approved · 3 outstanding" + Send Reminder + Open Project. Columns: Selection, **Status (Not Selected → Selected → Approved → Ordered → Delivered → Installed; Needs Attention)**, **Source (company vs Owner-supplied)**, Needed-by, Approved, Delivered/ETA, Notes ("**Blocking · Day 6**"). Per-project progress bars. Views: By project / **Library** / + New selection. |
| 18 | **Settings** | `/settings/*` | "Company & libraries — defaults that flow into every proposal, project, and document." Sub-pages: **Company info** (name, license #, phone, email, service area, default proposal validity, logo — *"used on proposals, emails, and the portal header"*); **Proposal defaults**; **Warranty language**; **Email templates**; **Scope block library** (reusable, categorized, active flag); **Upgrade library**; **Service categories**; **User roles**; **Integrations** (§4). |

### Mobile (from the PDF — purpose-built, see §7)

| # | Screen | Purpose |
|---|---|---|
| 19 | **Mobile — Crew Daily Report** | Structured end-of-day capture: completed, tomorrow, issues, materials, photos, hours |
| 20 | **Mobile — Lead Detail** | Field view of lead + timeline + tap-to-call/text |
| 21 | **Mobile — Leads Pipeline** | Swipeable pipeline columns |
| 22 | **Mobile — Project Page** | Today's project status, scope, open items, photo upload |
| 23 | **Mobile — Proposal Builder** | Build/adjust proposal on-site after the consultation |
| 24 | **Mobile — Today** | Field home screen: today's appointments + jobs, urgent actions, quick capture |

### New surfaces to design **within** the existing system (extensions, not redesigns)

- **On-site Consultation Workspace** inside each Lead (§6) — a dedicated mobile-first page.
- **Proposal Room** (customer-facing proposal view) and **customer Project Portal** — per-tenant branded, exceptional on mobile (§7).
- Settings → Integrations detail pages (§4) and Settings → AI Knowledge (§9).
- Auth (sign-in, invites, workspace switcher), onboarding wizard, billing (later phase).
- Contextual **Ask AI** actions embedded throughout (§5) — drawers/sheets on existing screens, never a separate disconnected chatbot.

---

## 3. Design system & theming (brand-neutral)

- All colors/fonts flow through **CSS variables set per-company** (`--brand-primary`, `--brand-accent`, surfaces, inks, logo URL, display name), stored in `companies.theme jsonb`, injected in the root layout. Default theme = tokens below.
- Sidebar/top bar stay dark neutral for every tenant; tenant accent replaces gold; tenant logo replaces the wordmark; the workspace badge replaces "INTERNAL".
- Customer-facing surfaces (Proposal Room, Project Portal, PDFs, emails) are **fully tenant-branded**.

**Default tokens (Stonebrite theme):** navy-900 `#0B1F33`, navy-800 `#102A43`, navy-700 `#1A3A56`, navy-600 `#2A4D6F`; gold-500 `#E5B53A`, gold-600 `#C99B22`, gold-300 `#F3D78A`, gold-100 `#FAEBC2`; cream-50 `#FBF7EE`, cream-100 `#F6EFE2`, cream-200 `#EFE5D1`, cream-300 `#E5D7BB`; ink-900 `#14110D`, ink-700 `#2A251D`, ink-500 `#5C5447`, ink-300 `#8C8473`; stone-300 `#C9BCA8`, stone-500 `#8C7F6B`; success `#2E7D5B`, danger `#B0432F`.
**Status chips (bg/text):** Draft `#F5F5F4`/`#57534E` · Sent `#EFF6FF`/`#1D4ED8` · Viewed `#FEFCE8`/`#A16207` · Approved `#F0FDF4`/`#166534` · Revision Requested `#FFF7ED`/`#C2410C`.
**Type:** Cormorant Garamond 500 for page/section titles (never bold, letter-spacing −0.01em); Manrope 400–700 for everything else; eyebrows Manrope 600 uppercase tracking 0.16em accent-600; monospace for IDs (`CO-001`). Hairlines `rgba(20,17,13,0.08)`; radius 12–14px cards / 999px pills; spacing 4/8/12/16/24/32/48/64. Preserve the PDF's information density.
**Documents/PDFs** (proposals, agreements, COs, job packets, material lists): follow `/design/document-spec.md` with tenant tokens substituted. White page background, cream panels/zebra only, navy table headers, gold-rule flourish, license + contact footer, embedded fonts, selectable text.
**Voice:** plain-English, calm, confident; soft language for timelines. The builder's copy-rule callouts become tenant-configurable standards (§9).

---

## 4. Real integrations (extend Settings → Integrations)

Add an integration layer for:

- **Quo / OpenPhone** — calls, SMS, recordings, transcripts (comms provider abstraction; either vendor pluggable)
- **DocuSign** — agreements, addenda, change orders
- **QuickBooks** — invoices and payment status
- **Google Drive** — document storage (mirror/link company documents to the tenant's own Drive)
- **Google Calendar** — appointments and scheduling sync
- **Email** — customer communications (per-tenant sending domain via Resend or the tenant's mailbox; inbound reply parsing)
- **AI providers** — configurable AI-provider credentials (default: Anthropic Claude; architecture allows per-tenant keys)
- **Webhooks & API credentials** — outbound webhooks + a tenant API key for custom integrations (e.g., any external lead source posting into the generic inbound-lead API)

Rules:

- Integrations are **configurable per company from Settings**; each company connects **and pays for** its own external accounts (OAuth per tenant; credentials encrypted server-side; never exposed to the browser).
- **Every integration action creates an activity event** inside the relevant lead, proposal, customer, or project (envelope sent/signed, invoice created/paid, call ingested, calendar event booked, file synced…). The unified `activities` table (§8) powers this.
- Webhook handlers are idempotent; each provider gets `src/lib/integrations/{provider}` behind a common interface; a comms-provider interface abstracts Quo/OpenPhone.

**DocuSign flows (as the PDF's callout specifies):**
- *Agreement:* proposal version `approved` → "Create Agreement" (AI-assisted, §5) renders the agreement PDF **from that exact immutable version** → envelope (signer = customer) → Connect webhooks track sent/delivered/completed/declined/voided → on `completed`: store signed PDF, mark agreement signed, **auto-create project**, populate Approved Scope with citations, notify owner.
- *Change order:* CO `ready_for_review` → Send = render CO PDF → envelope → on signed: apply scope/price/schedule deltas to Approved Scope + push QuickBooks line item. Declined/void → no scope mutation.

**QuickBooks:** OAuth2 per tenant; sync customers (match by email/phone), invoices for milestone payments, signed-CO line items (automatic), QuickFlow job invoices; read back payment status → closeout "final payment collected" + dashboards. The app deliberately does **not** do accounting; deep-link to QBO beyond this.

**Quo/OpenPhone:** ingest calls/SMS via webhooks; match to customers by phone (unmatched → triage inbox); store in `comm_messages`; AI summary + commitment detection on ingest; **any inbound customer message fires the automation stop-check**; click-to-call/text from the app where the API allows.

**Google Drive:** per-tenant folder mapping; agreements/warranty packets/job packets optionally mirrored; files linked in `documents` regardless of storage backend.
**Google Calendar:** two-way sync for `appointments` (consultations, follow-ups, service jobs); booking from Lead Detail creates the event + activity.

---

## 5. AI creation tools inside the application

AI must be **embedded directly into existing workflows** — contextual actions on existing screens (buttons, drawers, sheets), not a separate chatbot. Add these contextual AI actions where they naturally live:

| Where | Actions |
|---|---|
| Consultation Workspace | **Ask AI to Structure Consultation** · **Generate Draft Scope** from consultation notes · Convert voice notes into structured field notes |
| Proposal Builder | Generate proposal content · Rewrite/improve a scope item · **Identify missing scope details** · **Suggest protective clauses** · Create **good/better/best** options · Generate allowances and material-responsibility sections |
| Proposal → Agreement | **Create an agreement from an accepted proposal** (rendered from the immutable version; AI drafts the assembly, human reviews before DocuSign) |
| Project / Field | **Draft a change order** (from field notes or customer requests) · Generate customer updates · Create **crew handoff summaries** · Generate **rough-material lists** |
| Lead / Follow-up | Generate follow-up messages (Suggested Next / Draft buttons in the PDF) · Summarize calls and text conversations |
| Anywhere (Ask AI) | **Compare Approved Scope against a customer request** · Answer project questions **with source citations** · **Detect promises, commitments, and potential omissions** |

Hard rule (restating §1.5): **AI-generated content always remains editable and always requires review before it modifies a proposal, agreement, Approved Scope, price, or customer-visible record.** AI writes into drafts and suggestions; humans commit.

**Company-level AI (watcher):** scheduled analysis producing `ai_insights` — proposals needing follow-up (sent-not-viewed / viewed-no-reply), **late selections** (needed-by approaching with status < ordered, esp. blocking), **projects exceeding labor estimates** (daily-report hours vs estimate), stale leads, timeline risk. Each insight: severity + plain-English explanation + evidence citations + one-click action. Feeds the Dashboard's Today's Priorities and Production Risks panels (already designed in the PDF).

**Follow-up automation (event-driven):** triggers (proposal_sent, proposal_viewed_no_reply, consultation_done_no_proposal, stage_stalled, selection_reminder, review_request) → sequences of wait/email/SMS/task steps using tenant templates (AI-personalized drafts; auto-send only where the rule allows). **Stop conditions evaluated on every inbound event:** customer response on any channel (Quo/OpenPhone webhook, email reply, Proposal Room/Portal action), stage change, won/lost, manual stop. Quiet hours. Implemented as an idempotent, resumable state machine (`automation_runs`).

**Provider/tiering** (verify current model ids at build time): high-volume extraction/summarization → `claude-sonnet-5`; complex drafting and company-level analysis → `claude-opus-5` (or `claude-fable-5` where available). Server-side only; all outputs stored with their citations.

---

## 6. On-site Consultation Workspace (new dedicated page inside each Lead)

A **mobile-first consultation page** at `/leads/[id]/consultation` (also reachable from Mobile Today). It supports capturing:

- Customer and property information · project type and requested work
- **Room-by-room scope capture** · existing-condition checklist
- **Measurements** + custom measurement fields
- **Photos and videos** with annotations and captions
- **Voice recording and transcription**
- Customer priorities · style and finish preferences
- Customer-supplied materials · allowance expectations · budget information
- Desired start window · access and occupancy conditions
- Electrical, plumbing, and ventilation observations · **potential hidden conditions**
- Courtesy items discussed · **promises and follow-up commitments**
- Internal observations · **customer-visible vs internal visibility** per item
- **Missing-information checklist** · save as draft and resume later

Prominent actions (large, thumb-reachable): **Take Photo · Record Voice Note · Add Measurement · Add Observation · Ask AI to Structure Consultation · Generate Draft Scope**.

AI converts the consultation into structured, reviewable project information **without erasing the original notes, media, or measurements** — originals are immutable `field_captures`; AI output is a separate structured layer linked back to its sources. The wrap-up marks the consultation complete, advances the lead stage, and primes Lead AI ("ready to draft proposal"). Must tolerate poor connectivity (local queue + retry; interruption recovery).

---

## 7. Mobile product design (responsive PWA first)

Design as a **responsive PWA first**, using the PDF's visual language. Mobile is purpose-built for: Today and urgent actions · on-site consultations · lead creation · photos and voice notes · measurements · calls and texts · proposal review · customer follow-up · field notes · change-order documentation · selection approvals · project updates · **Ask AI**.

**Do not merely shrink desktop screens.** Use:

- Mobile **bottom navigation** · contextual **bottom sheets** · large camera/microphone actions
- **Sticky primary actions** · thumb-accessible controls · **44×44pt minimum touch targets**
- **Draft preservation** and **interruption recovery** (a phone call mid-consultation must not lose work)
- **Installable PWA** behavior (manifest, offline shell, local capture queue)
- An architecture compatible with a **later Expo/React Native application** (keep domain logic and API in shared, UI-framework-agnostic modules; the PWA screens thin)

The **Proposal Room** (customer proposal view) and the **customer Project Portal** must also be exceptional on mobile — customers read proposals on phones.

---

## 8. Multi-tenancy, data model & permissions

### 8.1 Tenancy

**Every record belongs to a `company_id`** — users (via memberships), customers, properties, leads, projects, proposals, agreements, scope items, selections, documents, communications, integrations, AI knowledge, pricing rules, templates, audit events. Postgres **Row-Level Security** on every table: `company_id in (select company_id from memberships where user_id = auth.uid())`. Storage paths `company/{company_id}/…` with matching storage policies. The prototype may simulate authentication, but **the data architecture must never be structured as a single-company Stonebrite application.**

### 8.2 Roles

`owner_admin` · `estimator_sales` · `project_manager` · `office` · `crew_field` · `customer` (portal-only; not a workspace member — access via scoped signed tokens/magic links).

Enforce: strict company isolation · role-based permissions · **project-level access** where appropriate (crew sees assigned projects only) · customer-specific portal access · **internal vs customer visibility controls** on notes/items/photos · **hidden margins and costs** (role-gated $ visibility) · tenant-specific branding, templates, pricing, and AI knowledge · secure integration credentials · **audit history for important actions** · **data export and account-deletion controls**.

### 8.3 Tables (Supabase/Postgres; all have `id uuid pk`, `company_id`, timestamps; soft-delete where noted)

**Tenancy & people:** `companies` (name, slug, logo_url, theme jsonb, license_no, phone, email, service_area, settings jsonb, mode_config jsonb), `memberships` (user_id, role), `invites`, `customers` (names, emails[], phones[] w/ labels+primary, preferred_contact, notes, source, lifetime_value), **`properties`** (customer_id, address, city, notes — customers can have several).

**Pipeline:** `leads` (customer_id, property_id, stage enum `new|contacted|appointment_set|appointment_completed|proposal_needed|proposal_sent|viewed|follow_up|won|lost`, source enum `website|referral|google|thumbtack|past_client|other`, job_type, est_value, owner_user_id, flags jsonb, next_action, next_action_due, lost_reason, stage_entered_at), `appointments` (lead_id, type, scheduled_at, status, assigned_user, gcal_event_id, outcome), **`consultations`** (lead_id, status draft|complete, structured sections jsonb per §6, missing_info jsonb, completed_at), `field_captures` (consultation_id/lead_id/project_id, kind `voice_note|photo|video|measurement|sketch|observation|promise`, storage_path, transcript, annotations jsonb, structured jsonb, visibility internal|customer, captured_by/at — **immutable originals**).

**Timeline:** `activities` — one polymorphic table powering every timeline (subject_type/subject_id ∈ lead|customer|proposal|project, kind `call|sms|email|note|proposal_sent|proposal_viewed|consultation_completed|form_submission|status_change|commitment|automation|integration_event|ai_action`, payload jsonb, occurred_at, actor user|system|customer, summary, ai_summary).

**Proposals & agreements:** `proposals` (lead_id, customer_id, number, current_version_id), `proposal_versions` (version int, status `draft|sent|viewed|revision_requested|approved|stale|superseded|void`, reason_for_version, title, summary, sq_ft, timeline_summary, visual_direction, valid_through, base_price, allowances, total, payment_schedule jsonb, notes_customer, sent/viewed/approved_at — **immutable once sent**), `proposal_scope_items` (version_id, sort, block_library_id?, name, customer_detail, show_to_customer, internal_notes), `proposal_line_items`, `proposal_upgrades` (library_id?, name, benefit, price, included, show_on_proposal, tier good|better|best?), `proposal_view_events` (viewed_at, per-section dwell jsonb), `agreements` (proposal_version_id, docusign_envelope_id, status `draft|sent|delivered|signed|declined|voided`, pdf_path, signer jsonb, sent/signed_at).

**Projects:** `projects` (customer_id, property_id, agreement_id, code, status `sold_not_scheduled|scheduled|in_progress|punch_list|closed|on_hold`, start/target dates, day planned/actual, value, crew, risk_flags jsonb), **`approved_scope_items`** (description, category, amount?, source_type `agreement|addendum|change_order|courtesy`, **source_ref** (doc id + section), added_at/by, status active|omitted) — *only* mutated by agreement signature, signed COs, or explicitly logged courtesy items; every row shows its citation. `change_orders` (number, title, reason enum, price_delta, schedule_delta_days, new_total, new_target_date, added/omitted scope, customer_summary, internal_notes, photos[], status `draft|ready_for_review|sent_to_docusign|signed|void`, envelope id, origin `field_note|customer_request|office` + origin_ref), `selections` (name, category, status `not_selected|selected|approved|ordered|delivered|installed|needs_attention`, source `company|owner_supplied`, needed_by, approved/ordered/delivered/installed dates, allowance_amount, actual_amount, overage approval, blocking_day?, notes), `daily_reports` (date, author, completed_today, plan_tomorrow, issues jsonb, materials, photos[], hours jsonb, labor_hours_total), `issues`, `closeout_items` (the 7 designed keys), `reviews`, `service_jobs` (QuickFlow: status `request|scheduled|dispatched|in_progress|complete|invoiced|paid`, field_report, qbo_invoice_id).

**Docs & comms:** `documents` (subject ref, kind, storage_path or drive_ref, needs_action), `comm_messages` (customer_id, channel call|sms|email, direction, occurred_at, duration, body/transcript, ai_summary, provider_id, matched_by), `commitments` (customer_id, project_id?, text, made_by us|customer, due_at?, source_ref, status open|kept|missed|cancelled).

**Automation, AI & config:** `automation_rules`, `automation_runs` (state machine), `ai_insights` (kind, subject ref, severity, explanation, evidence citations, status), `pricing_rules`, `integrations` (provider, status, encrypted config, webhook secrets), `templates` (email/SMS/proposal/agreement per tenant), **AI knowledge tables (§9)**, `audit_log` (actor, action, subject, before/after).

Seed a **demo company** with the PDF's fictional data (Jordan Reyes; Chen/Patel/Okonkwo/Brennan) for dev, tests, and screenshots.

---

## 9. Company-specific AI knowledge

Each company has its **own private knowledge system** the AI draws from:

- Pricing guide (labor rates, category baselines, margin targets, allowance defaults)
- Scope library · protective clauses · proposal templates · agreement templates
- Payment structures · warranty rules
- **Trade packs** — installable starter bundles of the above (e.g., Bath Remodel, Kitchen, Handyman/Service), versioned JSON seeds copied into the company's libraries on install (no shared mutable state); Stonebrite's real scope library (visible in the PDF's Settings screen) seeds the first Bath pack
- **Past projects** · **estimated-versus-actual performance** · sales outcomes · company preferences/standards (e.g., soft-language timeline rules, excluded words, pre-send checklist items)

Each **Lead and Project also has an isolated contextual knowledge space** (its consultations, captures, comms, versions, commitments) — the working set for that job's AI actions.

AI answers must: respect company and project boundaries (never cross-tenant, never cross-project unless asked at company scope) · observe the requesting user's permissions (a crew user's AI cannot reveal margins) · distinguish internal vs customer-visible information (customer-facing drafts only use customer-visible sources) · **cite the underlying records** · **distinguish signed facts from discussions and drafts** ("the signed agreement says X; the Mar 10 call discussed Y, unsigned").

---

## 10. Tech stack & repo

- **Next.js (current App Router) + TypeScript + Tailwind v4.** NOTE: verify the installed Next version's conventions in `node_modules/next/dist/docs/` before writing code (recent versions renamed middleware→proxy, async `cookies()`, promise `params`).
- **Supabase:** Postgres + RLS, Auth (members; magic-link tokens for the customer portal), Storage, `pg_cron`/Queues. Migrations in-repo.
- **Background jobs:** Supabase Queues + cron, or Inngest (automation sequences, webhook processing, AI digests, QBO sync). Choose early; automation correctness depends on it.
- **PDF generation:** server-side HTML→PDF implementing the document spec (proposals, agreements, COs, job packets, material lists).
- **AI:** Anthropic SDK server-side; `src/lib/ai` with per-feature prompt builders that always attach company standards, permission context, and citations.
- **Validation:** Zod everywhere.
- **Deploy:** Vercel (separate project from the website). Webhooks (DocuSign/QBO/Quo) need stable URLs.
- **Layout:** single Next app — `src/app/(app)` authed shell · `src/app/(portal)` Proposal Room + Project Portal · `src/app/api/webhooks/*` · `src/lib/{db,ai,automation,pdf,integrations/{docusign,qbo,quo,gdrive,gcal,resend}}`. Domain logic in framework-agnostic modules (Expo-compatible later, §7).

### Port from the `Stonebritesite` repo (copy and adapt; never import across repos)
- `src/lib/types.ts` — Proposal/ScopeItem/UpgradeItem/TimelinePhase types map ~1:1 (extend with versioning + company_id)
- `src/lib/supabase/{config,client,server}.ts` + `src/proxy.ts` — guarded Supabase pattern incl. session-refresh proxy
- `src/app/proposal/[id]/page.tsx` — customer proposal page → starting point for the Proposal Room
- `src/app/admin/proposals/*` — builder prototype (localStorage; superseded by the PDF design but useful reference)
- `src/app/api/lead/route.ts` — lead intake + Resend pattern (validation, honeypot, honest error states)
- `docs/pdf-brand-spec.md` → `/design/document-spec.md`

---

## 11. Build order (each phase ships something usable; PDF fidelity throughout)

- **Phase 0 — Foundations:** repo, CI, Supabase, schema + RLS (`company_id` everywhere), auth + invites + roles, app shell (sidebar/topbar/theming per PDF), seed demo company, Settings → Company info.
- **Phase 1 — CRM core:** customers, properties, leads (board/list/detail per PDF), unified activities timeline, appointments (+ Google Calendar), follow-up queue (manual), global search, generic inbound-lead API (per-tenant key; any external source).
- **Phase 2 — Proposals:** builder (all 9 sections, libraries, versioning, pre-send checklist), Proposal Room + view-event tracking, proposal emails, proposals list, Stale detection.
- **Phase 3 — Consultation + Agreements → Projects:** Consultation Workspace (§6, incl. voice/photo/measurement capture + AI structuring), DocuSign integration + webhooks, agreement from accepted version, **auto project conversion + Approved Scope with citations**, project detail tabs, daily reports (+ mobile), issues.
- **Phase 4 — Execution depth:** selections & allowances (tracker, reminders, blocking flags, overage approvals), change orders end-to-end (field-note origin → DocuSign → scope update → QBO line item), closeout + reviews, documents hub (+ Google Drive), job packet PDF.
- **Phase 5 — Comms, automation & AI:** Quo/OpenPhone ingestion + matching + summaries, commitment detection, automation engine with stop conditions, contextual AI actions across builder/lead/project (§5), company AI insights wired into the designed dashboard panels.
- **Phase 6 — Platform:** QuickBooks sync, QuickFlow mode, reports, trade-pack installer, Project Portal polish, PWA install/offline hardening, billing, onboarding wizard, data export/deletion controls.

---

## 12. Non-functional requirements

- **Security:** RLS everywhere incl. storage; encrypted integration secrets; signed short-lived file URLs; audit_log on commercial mutations (scope, COs, agreements, pricing, templates); rate-limited public endpoints; honeypots on public forms.
- **Correctness:** proposal versions immutable once sent; Approved Scope mutations only via defined transitions; idempotent webhooks; resumable automation state machine; AI never commits without review (§1.5).
- **Timezones:** company-level TZ for all due/overdue logic.
- **Mobile:** §7 requirements are acceptance criteria, not suggestions.
- **Accessibility & perf:** WCAG AA contrast (tokens comply), keyboard-first tables, optimistic UI on boards.
- **Trust features:** per-company data export (CSV/JSON) and account-deletion flow from day one.

---

## 13. Open questions for the founder (answer in the new chat before Phase 2)

1. Product name + domain (brief is intentionally name-neutral).
2. Comms vendor to wire first: Quo or OpenPhone (abstraction covers both; pick the first concrete integration).
3. DocuSign: single company account initially, or per-tenant OAuth from day 1?
4. QuickBooks invoice granularity: milestone invoices vs single invoice + CO line items?
5. Pricing-guide content to seed Stonebrite's tenant (labor rates, category baselines).
6. Portal/Proposal-Room domain strategy: `app.{product}.com/w/{slug}` vs tenant custom domains.
7. Billing model (per-seat vs per-workspace) — needed by Phase 6.

---

*Self-contained. Companion files: `/design/CRM.pdf` (24 screens — UI source of truth) and `/design/document-spec.md`.*
