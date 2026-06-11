/**
 * Central place to read Supabase environment variables and check whether the
 * backend is configured yet. While these are unset (before you create the
 * Supabase project and add keys), the site runs fully as a static frontend —
 * forms fall back to a "we received it" message and the proposal builder uses
 * localStorage. Once the keys are added, the same code paths switch to the DB.
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
// Server-only. Never exposed to the browser (no NEXT_PUBLIC_ prefix).
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

/** True when the public client can talk to Supabase (browser + server auth). */
export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

/** True when privileged server operations (lead inserts, admin writes) are possible. */
export function isSupabaseAdminConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}
