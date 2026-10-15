import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTAL_PROTOTYPE_ENABLED } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Your Proposal",
  robots: { index: false, follow: false },
};

/**
 * The proposal viewer renders content supplied in the link itself, so it is
 * only exposed while the portal prototype flag is on (see src/lib/flags.ts).
 */
export default function ProposalLayout({ children }: { children: React.ReactNode }) {
  if (!PORTAL_PROTOTYPE_ENABLED) notFound();
  return <>{children}</>;
}
