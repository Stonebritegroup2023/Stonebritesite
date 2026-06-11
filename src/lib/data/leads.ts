import "server-only";

import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

/** Validation schema for an incoming estimate/contact submission. */
export const LeadSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.email("Enter a valid email.").max(200).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectCity: z.string().trim().max(120).optional().or(z.literal("")),
  serviceType: z.enum(["bath", "t2s", "kitchen", "aging", "other"]).optional(),
  timeline: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  bestTime: z.string().trim().max(60).optional().or(z.literal("")),
  description: z.string().trim().max(4000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;

export interface SaveLeadResult {
  ok: boolean;
  /** "saved" = persisted to DB; "queued" = backend not configured, accepted but not stored. */
  mode: "saved" | "queued";
  error?: string;
}

/**
 * Persist a lead to the database using the service-role client (server only).
 * If Supabase isn't configured yet, returns mode "queued" so the UI can still
 * show a success state during the pre-backend phase.
 */
export async function saveLead(input: LeadInput): Promise<SaveLeadResult> {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    return { ok: true, mode: "queued" };
  }

  const { error } = await admin.from("leads").insert({
    name: input.name,
    email: input.email || null,
    phone: input.phone || null,
    project_city: input.projectCity || null,
    service_type: input.serviceType ?? null,
    timeline: input.timeline || null,
    budget: input.budget || null,
    best_time: input.bestTime || null,
    description: input.description || null,
    source: "website",
  });

  if (error) {
    return { ok: false, mode: "saved", error: error.message };
  }
  return { ok: true, mode: "saved" };
}
