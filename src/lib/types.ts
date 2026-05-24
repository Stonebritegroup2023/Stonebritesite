export type ServiceType = "bath" | "t2s" | "kitchen" | "aging" | "other";

export type ProposalStatus =
  | "draft"
  | "sent"
  | "viewed"
  | "approved"
  | "revision_requested";

export interface ScopeItem {
  id: string;
  category: string;
  description: string;
  included: boolean;
}

export interface UpgradeItem {
  id: string;
  name: string;
  benefit: string;
  price: number;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
}

export interface Proposal {
  id: string;
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
  sentAt?: string;
  viewedAt?: string;

  // Customer info
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projectAddress: string;
  projectCity: string;

  // Project info
  projectTitle: string;
  projectType: ServiceType;
  projectSummary: string;

  // Scope
  scopeItems: ScopeItem[];

  // Timeline
  timelinePhases: TimelinePhase[];
  estimatedStartDate: string;
  estimatedDuration: string;

  // Investment
  totalAmount: number;
  depositAmount: number;
  showLineItems: boolean;
  lineItems: { label: string; amount: number }[];

  // Upgrades
  upgrades: UpgradeItem[];

  // Notes
  projectNotes: string;

  // Meta
  validThroughDate: string;
  preparedBy: string;
}
