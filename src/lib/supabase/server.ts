import "server-only";

import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
  isSupabaseConfigured,
  isSupabaseAdminConfigured,
} from "./config";

/**
 * Server-side Supabase client bound to the request's auth cookie.
 * Use in Server Components, Server Actions, and Route Handlers to act as the
 * logged-in user (RLS applies). Note: in this Next.js, `cookies()` is async.
 *
 * Returns null when Supabase isn't configured yet.
 */
export async function createSupabaseServerClient() {
  if (!isSupabaseConfigured()) return null;

  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        // In Server Components, cookie writes can throw — safe to ignore there;
        // the proxy refreshes the session. In Actions/Route Handlers it works.
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          /* called from a context where cookies are read-only */
        }
      },
    },
  });
}

/**
 * Privileged server client using the service-role key. Bypasses RLS — only use
 * in trusted server code (lead inserts, admin-side proposal writes). NEVER
 * import this into a Client Component.
 *
 * Returns null when the service role key isn't configured yet.
 */
export function createSupabaseAdminClient() {
  if (!isSupabaseAdminConfigured()) return null;

  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
