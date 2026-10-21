/**
 * Feature flags read from the environment.
 *
 * NEXT_PUBLIC_ so both server code (route gating) and client components
 * (nav links) see the same value. Flags are not secrets.
 */

/**
 * The client portal / admin proposals area is a localStorage prototype with no
 * real authentication: the login form does not sign anyone in, the admin
 * pages are open to anyone who knows the URL, and the proposal viewer renders
 * whatever is encoded in the link — which would let a stranger host a fake
 * "Stonebrite proposal" on the real domain. It is superseded by the separate
 * CRM product (docs/crm-build-brief.md).
 *
 * Off by default: /login, /admin/* and /proposal/* return 404 and the
 * "Client Login" links are hidden. Set NEXT_PUBLIC_ENABLE_PORTAL_PROTOTYPE=true
 * in Vercel to show them again.
 */
export const PORTAL_PROTOTYPE_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_PORTAL_PROTOTYPE === "true";
