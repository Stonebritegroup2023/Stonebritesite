-- ============================================================================
-- Stonebrite Construction Group — Database Schema
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query).
-- Safe to re-run: uses "if not exists" / "or replace" where possible.
-- ============================================================================

-- Needed for gen_random_uuid()
create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------------------
-- profiles: one row per authenticated user, with a role.
-- Linked 1:1 to Supabase's built-in auth.users table.
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  full_name   text,
  role        text not null default 'client' check (role in ('admin', 'client')),
  created_at  timestamptz not null default now()
);

-- Helper: is the current user an admin? (used by RLS policies)
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Auto-create a profile row whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- leads: estimate / contact form submissions.
-- Inserted server-side with the service-role key (bypasses RLS).
-- Only admins can read/update them.
-- ----------------------------------------------------------------------------
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text,
  phone         text,
  project_city  text,
  service_type  text,           -- bath | t2s | kitchen | aging | other
  timeline      text,
  budget        text,
  best_time     text,
  description   text,
  photo_paths   jsonb not null default '[]'::jsonb,
  status        text not null default 'new'
                 check (status in ('new', 'contacted', 'estimate_scheduled', 'won', 'lost')),
  source        text not null default 'website'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- ----------------------------------------------------------------------------
-- proposals: the full proposal record (mirrors the app's Proposal type).
-- created_by  → the admin who built it.
-- client_user_id → optional link to a client login who can view it in the portal.
-- ----------------------------------------------------------------------------
create table if not exists public.proposals (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  sent_at             timestamptz,
  viewed_at           timestamptz,

  created_by          uuid references auth.users (id) on delete set null,
  client_user_id      uuid references auth.users (id) on delete set null,

  status              text not null default 'draft'
                       check (status in ('draft','sent','viewed','approved','revision_requested')),

  -- customer
  customer_name       text not null default '',
  customer_email      text not null default '',
  customer_phone      text not null default '',
  project_address     text not null default '',
  project_city        text not null default '',

  -- project
  project_title       text not null default '',
  project_type        text not null default 'bath',
  project_summary     text not null default '',

  -- structured blocks (stored as JSON)
  scope_items         jsonb not null default '[]'::jsonb,
  timeline_phases     jsonb not null default '[]'::jsonb,
  line_items          jsonb not null default '[]'::jsonb,
  upgrades            jsonb not null default '[]'::jsonb,

  estimated_start_date text not null default '',
  estimated_duration   text not null default '',

  total_amount        integer not null default 0,
  deposit_amount      integer not null default 0,
  show_line_items     boolean not null default false,

  project_notes       text not null default '',
  valid_through_date  text not null default '',
  prepared_by         text not null default 'Stonebrite Construction Group'
);

create index if not exists proposals_created_at_idx on public.proposals (created_at desc);
create index if not exists proposals_status_idx on public.proposals (status);
create index if not exists proposals_client_idx on public.proposals (client_user_id);

-- keep updated_at fresh
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists proposals_touch_updated_at on public.proposals;
create trigger proposals_touch_updated_at
  before update on public.proposals
  for each row execute function public.touch_updated_at();

-- ----------------------------------------------------------------------------
-- proposal_events: audit trail of customer actions (approved / revision / viewed)
-- ----------------------------------------------------------------------------
create table if not exists public.proposal_events (
  id           uuid primary key default gen_random_uuid(),
  proposal_id  uuid not null references public.proposals (id) on delete cascade,
  created_at   timestamptz not null default now(),
  event_type   text not null,   -- viewed | approved | revision_requested | question
  note         text
);

create index if not exists proposal_events_proposal_idx on public.proposal_events (proposal_id, created_at desc);

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.profiles        enable row level security;
alter table public.leads           enable row level security;
alter table public.proposals       enable row level security;
alter table public.proposal_events enable row level security;

-- profiles: a user can read & update their own row; admins can read all.
drop policy if exists "profiles_self_read" on public.profiles;
create policy "profiles_self_read" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update" on public.profiles
  for update using (id = auth.uid());

-- leads: admins only (inserts happen server-side via service role, bypassing RLS).
drop policy if exists "leads_admin_all" on public.leads;
create policy "leads_admin_all" on public.leads
  for all using (public.is_admin()) with check (public.is_admin());

-- proposals: admins full access; clients may read proposals linked to them.
drop policy if exists "proposals_admin_all" on public.proposals;
create policy "proposals_admin_all" on public.proposals
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "proposals_client_read" on public.proposals;
create policy "proposals_client_read" on public.proposals
  for select using (client_user_id = auth.uid());

-- proposal_events: admins read all; clients read events for their proposals.
drop policy if exists "events_admin_read" on public.proposal_events;
create policy "events_admin_read" on public.proposal_events
  for select using (public.is_admin());

drop policy if exists "events_client_read" on public.proposal_events;
create policy "events_client_read" on public.proposal_events
  for select using (
    exists (
      select 1 from public.proposals p
      where p.id = proposal_id and p.client_user_id = auth.uid()
    )
  );

-- ============================================================================
-- Done. Next: create your first admin user (see README / setup notes).
-- ============================================================================
