import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTAL_PROTOTYPE_ENABLED } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Stonebrite Admin",
  robots: "noindex, nofollow",
};

/**
 * The admin area is an unauthenticated localStorage prototype, so it is only
 * exposed while the portal prototype flag is on (see src/lib/flags.ts).
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!PORTAL_PROTOTYPE_ENABLED) notFound();
  return <>{children}</>;
}
