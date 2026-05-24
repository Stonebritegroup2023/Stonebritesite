"use client";

import type { Proposal, ProposalStatus } from "./types";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "sb_proposals";

export function getProposals(): Proposal[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getProposal(id: string): Proposal | null {
  return getProposals().find((p) => p.id === id) ?? null;
}

export function saveProposal(proposal: Proposal): void {
  const all = getProposals();
  const idx = all.findIndex((p) => p.id === proposal.id);
  const updated = { ...proposal, updatedAt: new Date().toISOString() };
  if (idx >= 0) {
    all[idx] = updated;
  } else {
    all.push(updated);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function deleteProposal(id: string): void {
  const all = getProposals().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function updateProposalStatus(id: string, status: ProposalStatus): void {
  const proposal = getProposal(id);
  if (!proposal) return;
  const updates: Partial<Proposal> = { status };
  if (status === "sent") updates.sentAt = new Date().toISOString();
  if (status === "viewed") updates.viewedAt = new Date().toISOString();
  saveProposal({ ...proposal, ...updates });
}

export function createBlankProposal(): Proposal {
  const now = new Date();
  const validThrough = new Date(now);
  validThrough.setDate(validThrough.getDate() + 30);

  return {
    id: uuidv4(),
    status: "draft",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    projectAddress: "",
    projectCity: "",
    projectTitle: "",
    projectType: "bath",
    projectSummary: "",
    scopeItems: [
      { id: uuidv4(), category: "Demolition & Preparation", description: "Full demolition of existing bath area, dumpster, and site protection.", included: true },
      { id: uuidv4(), category: "Shower / Bath Area", description: "New shower or tub installation per selections.", included: true },
      { id: uuidv4(), category: "Waterproofing / Wall System", description: "Shower membrane system, seams sealed and inspected per manufacturer specs.", included: true },
      { id: uuidv4(), category: "Plumbing Fixtures", description: "Plumbing connections, valve, showerhead, trim kit per selections.", included: true },
      { id: uuidv4(), category: "Electrical & Ventilation", description: "GFCI outlets, new exhaust fan, lighting per plan.", included: true },
      { id: uuidv4(), category: "Vanity / Finishes", description: "Vanity, mirror, hardware, and paint per selections.", included: true },
      { id: uuidv4(), category: "Flooring", description: "New floor tile or LVP installation.", included: true },
      { id: uuidv4(), category: "Final Cleanup & Walkthrough", description: "Post-construction deep clean, final walkthrough with owner.", included: true },
    ],
    timelinePhases: [
      { phase: "Approval & Selections", duration: "1–2 weeks" },
      { phase: "Scheduling", duration: "1–3 weeks" },
      { phase: "Build Phase", duration: "Per scope" },
      { phase: "Final Walkthrough", duration: "1 day" },
    ],
    estimatedStartDate: "",
    estimatedDuration: "3–4 weeks",
    totalAmount: 0,
    depositAmount: 0,
    showLineItems: false,
    lineItems: [],
    upgrades: [],
    projectNotes:
      "This proposal is based on the visible conditions and scope discussed during the estimate. Hidden conditions, owner-requested changes, unsuitable existing conditions, material changes, or work outside the listed scope may require a written change order.",
    validThroughDate: validThrough.toISOString().split("T")[0],
    preparedBy: "Stonebrite Construction Group",
  };
}

export function encodeProposalForUrl(proposal: Proposal): string {
  try {
    return btoa(encodeURIComponent(JSON.stringify(proposal)));
  } catch {
    return "";
  }
}

export function decodeProposalFromUrl(encoded: string): Proposal | null {
  try {
    return JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return null;
  }
}

export function generateProposalLink(proposal: Proposal, baseUrl: string): string {
  const encoded = encodeProposalForUrl(proposal);
  return `${baseUrl}/proposal/${proposal.id}?d=${encoded}`;
}

export function generateEmailCopy(proposal: Proposal, proposalUrl: string): { subject: string; body: string } {
  const subject = `Your Stonebrite Proposal — ${proposal.projectTitle}`;
  const body = `Hi ${proposal.customerName.split(" ")[0]},

Thank you for the time we spent discussing your remodel. Your proposal is ready for review.

View your proposal here:
${proposalUrl}

The proposal covers:
- ${proposal.projectTitle}
- ${proposal.projectCity}
- Estimated investment: $${proposal.totalAmount.toLocaleString()}
- Valid through: ${new Date(proposal.validThroughDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}

From the proposal page, you can:
• Approve the proposal to move forward
• Request a revision if you'd like to adjust scope
• Send us a question directly

If you have any questions before reviewing, just reply to this email or call us at (916) 555-0188. We typically respond within about an hour during business hours.

Looking forward to working with you,

${proposal.preparedBy}
(916) 555-0188
hello@stonebritecg.com`;

  return { subject, body };
}

export const STATUS_LABELS: Record<ProposalStatus, string> = {
  draft: "Draft",
  sent: "Sent",
  viewed: "Viewed",
  approved: "Approved",
  revision_requested: "Revision Requested",
};

export const STATUS_COLORS: Record<ProposalStatus, string> = {
  draft: "bg-stone-100 text-stone-700",
  sent: "bg-blue-50 text-blue-700",
  viewed: "bg-yellow-50 text-yellow-700",
  approved: "bg-emerald-50 text-emerald-700",
  revision_requested: "bg-orange-50 text-orange-700",
};
