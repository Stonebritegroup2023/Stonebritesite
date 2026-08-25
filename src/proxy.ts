import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  isSupabaseConfigured,
} from "@/lib/supabase/config";

/**
 * Proxy (this Next.js version's name for Middleware). Runs before routes.
 * Its only job here is to refresh the Supabase auth session cookie so server
 * components see a fresh login. It does NOT gate routes — page-level checks do
 * that, closer to the data (see auth DAL).
 *
 * While Supabase is unconfigured it is a pass-through, so the static site is
 * completely unaffected.
 */
export async function proxy(request: NextRequest) {
  // Geo-block: this is a US-only local business, so non-US page traffic gets
  // a 403. Vercel sets x-vercel-ip-country at the edge; requests without the
  // header (local dev / `next start`) are allowed through so nothing breaks
  // off-platform. /api routes are excluded from the block.
  const country = request.headers.get("x-vercel-ip-country");
  if (
    country &&
    country !== "US" &&
    !request.nextUrl.pathname.startsWith("/api")
  ) {
    return new NextResponse("Access restricted.", { status: 403 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  // Touch the session so it refreshes if needed.
  await supabase.auth.getUser();

  return response;
}

export const config = {
  // Run on everything except static assets and image optimization.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
