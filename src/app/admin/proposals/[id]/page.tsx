'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  getProposal,
  saveProposal,
  deleteProposal,
  generateProposalLink,
  generateEmailCopy,
  STATUS_LABELS,
} from '@/lib/proposals';
import type { Proposal, ProposalStatus, ScopeItem, UpgradeItem, TimelinePhase } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

/* ── Status badge styles ──────────────────────────────────────────────── */
const STATUS_STYLES: Record<ProposalStatus, { bg: string; color: string }> = {
  draft:              { bg: '#f5f5f4', color: '#57534e' },
  sent:               { bg: '#eff6ff', color: '#1d4ed8' },
  viewed:             { bg: '#fefce8', color: '#a16207' },
  approved:           { bg: '#f0fdf4', color: '#166534' },
  revision_requested: { bg: '#fff7ed', color: '#c2410c' },
};

const ALL_STATUSES: ProposalStatus[] = ['draft', 'sent', 'viewed', 'approved', 'revision_requested'];

const PROJECT_TYPE_LABELS: Record<string, string> = {
  bath: 'Bathroom Remodel',
  t2s: 'Tub-to-Shower Conversion',
  kitchen: 'Kitchen Remodel',
  aging: 'Aging-in-Place',
  other: 'Other',
};

/* ── Admin header ─────────────────────────────────────────────────────── */
function AdminHeader({ proposalId }: { proposalId: string }) {
  return (
    <header style={{
      height: 56,
      background: 'var(--color-navy-900)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 16,
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg viewBox="0 0 40 40" width={28} height={28} aria-hidden="true">
          <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="#E5B53A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
          <line x1="3" y1="33" x2="37" y2="33" stroke="#E5B53A" strokeWidth="2"/>
        </svg>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-cream-50)',
        }}>
          Stonebrite <span style={{ color: 'var(--color-stone-500)', fontWeight: 400 }}>Admin</span>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginLeft: 'auto' }}>
        <Link href="/admin/proposals" style={{
          fontSize: 12,
          color: 'var(--color-stone-300)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          All Proposals
        </Link>
        <Link href="/" style={{
          fontSize: 12,
          color: 'var(--color-stone-300)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          Public Site
        </Link>
      </div>
    </header>
  );
}

/* ── Section wrapper ──────────────────────────────────────────────────── */
function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      border: '1px solid rgba(20,17,13,0.08)',
      padding: '28px 28px',
      marginBottom: 20,
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
        <span style={{
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: 'var(--color-navy-900)',
          color: 'var(--color-cream-50)',
          fontSize: 12,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>{number}</span>
        <h2 style={{ fontSize: 17, fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-navy-900)' }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

/* ── Field wrapper ────────────────────────────────────────────────────── */
function Field({ label, children, half }: { label: string; children: React.ReactNode; half?: boolean }) {
  return (
    <div style={{ flex: half ? '0 0 calc(50% - 8px)' : '1 1 100%' }}>
      <label className="sb-label">{label}</label>
      {children}
    </div>
  );
}

/* ── Spinner ──────────────────────────────────────────────────────────── */
function Spinner({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="var(--color-gold-500)" strokeWidth="2" style={{ animation: 'spin 0.9s linear infinite', display: 'inline-block' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="10" strokeOpacity="0.2"/>
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Main page ────────────────────────────────────────────────────────── */
export default function ProposalEditorPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState<{ subject: string; body: string } | null>(null);
  const [proposalUrl, setProposalUrl] = useState('');
  const [copyLinkMsg, setCopyLinkMsg] = useState(false);
  const [copyEmailMsg, setCopyEmailMsg] = useState(false);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Load on mount */
  useEffect(() => {
    const p = getProposal(id);
    if (!p) {
      setNotFound(true);
    } else {
      setProposal(p);
      setProposalUrl(generateProposalLink(p, window.location.origin));
    }
    setLoading(false);
  }, [id]);

  /* Auto-save with debounce */
  const debouncedSave = useCallback((p: Proposal) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveProposal(p);
      setProposalUrl(generateProposalLink(p, window.location.origin));
      setSavedMsg(true);
      setTimeout(() => setSavedMsg(false), 2000);
    }, 800);
  }, []);

  function update(patch: Partial<Proposal>) {
    if (!proposal) return;
    const next = { ...proposal, ...patch };
    setProposal(next);
    debouncedSave(next);
  }

  function handleSaveNow() {
    if (!proposal) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveProposal(proposal);
    setProposalUrl(generateProposalLink(proposal, window.location.origin));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  }

  function handleDelete() {
    if (!proposal) return;
    if (!confirm(`Delete this proposal for "${proposal.customerName || 'Unnamed'}"? This cannot be undone.`)) return;
    deleteProposal(id);
    router.push('/admin/proposals');
  }

  async function handleCopyLink() {
    if (!proposal) return;
    const url = generateProposalLink(proposal, window.location.origin);
    try {
      await navigator.clipboard.writeText(url);
      setCopyLinkMsg(true);
      setTimeout(() => setCopyLinkMsg(false), 2500);
    } catch {
      prompt('Copy this proposal link:', url);
    }
  }

  async function handleCopyEmail() {
    if (!generatedEmail) return;
    try {
      await navigator.clipboard.writeText(generatedEmail.body);
      setCopyEmailMsg(true);
      setTimeout(() => setCopyEmailMsg(false), 2500);
    } catch {
      prompt('Copy this email body:', generatedEmail.body);
    }
  }

  function handleGenerateEmail() {
    if (!proposal) return;
    const url = generateProposalLink(proposal, window.location.origin);
    const email = generateEmailCopy(proposal, url);
    setGeneratedEmail(email);
  }

  /* Scope items */
  function addScopeItem() {
    if (!proposal) return;
    const item: ScopeItem = { id: uuidv4(), category: '', description: '', included: true };
    update({ scopeItems: [...proposal.scopeItems, item] });
  }

  function updateScopeItem(idx: number, patch: Partial<ScopeItem>) {
    if (!proposal) return;
    const items = proposal.scopeItems.map((item, i) => i === idx ? { ...item, ...patch } : item);
    update({ scopeItems: items });
  }

  function removeScopeItem(idx: number) {
    if (!proposal) return;
    update({ scopeItems: proposal.scopeItems.filter((_, i) => i !== idx) });
  }

  /* Timeline phases */
  function updatePhase(idx: number, patch: Partial<TimelinePhase>) {
    if (!proposal) return;
    const phases = proposal.timelinePhases.map((p, i) => i === idx ? { ...p, ...patch } : p);
    update({ timelinePhases: phases });
  }

  /* Line items */
  function addLineItem() {
    if (!proposal) return;
    update({ lineItems: [...proposal.lineItems, { label: '', amount: 0 }] });
  }

  function updateLineItem(idx: number, patch: { label?: string; amount?: number }) {
    if (!proposal) return;
    const items = proposal.lineItems.map((item, i) => i === idx ? { ...item, ...patch } : item);
    update({ lineItems: items });
  }

  function removeLineItem(idx: number) {
    if (!proposal) return;
    update({ lineItems: proposal.lineItems.filter((_, i) => i !== idx) });
  }

  /* Upgrades */
  function addUpgrade() {
    if (!proposal) return;
    const item: UpgradeItem = { id: uuidv4(), name: '', benefit: '', price: 0 };
    update({ upgrades: [...proposal.upgrades, item] });
  }

  function updateUpgrade(idx: number, patch: Partial<UpgradeItem>) {
    if (!proposal) return;
    const items = proposal.upgrades.map((item, i) => i === idx ? { ...item, ...patch } : item);
    update({ upgrades: items });
  }

  function removeUpgrade(idx: number) {
    if (!proposal) return;
    update({ upgrades: proposal.upgrades.filter((_, i) => i !== idx) });
  }

  /* ── Render states ───────────────────────────────────────────────────── */
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <Spinner size={36} />
        <p style={{ fontSize: 14, color: 'var(--color-ink-500)' }}>Loading proposal…</p>
      </div>
    );
  }

  if (notFound || !proposal) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)' }}>
        <AdminHeader proposalId={id} />
        <div style={{ maxWidth: 480, margin: '120px auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, color: 'var(--color-navy-900)', marginBottom: 12 }}>Proposal Not Found</h2>
          <p style={{ color: 'var(--color-ink-500)', marginBottom: 28 }}>This proposal doesn't exist or may have been deleted.</p>
          <Link href="/admin/proposals" className="sb-btn sb-btn-primary">Back to Proposals</Link>
        </div>
      </div>
    );
  }

  const statusStyle = STATUS_STYLES[proposal.status];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)' }}>
      <AdminHeader proposalId={id} />

      {/* Layout */}
      <div style={{ display: 'flex', maxWidth: 1360, margin: '0 auto', padding: '32px 24px', gap: 24, alignItems: 'flex-start' }}>

        {/* ── Main builder area (70%) ─────────────────────────────────────── */}
        <div style={{ flex: '0 0 70%', minWidth: 0 }}>

          {/* Page title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <h1 style={{ fontSize: 26, color: 'var(--color-navy-900)', flex: 1 }}>
              {proposal.customerName || 'New Proposal'}
            </h1>
            <span style={{
              padding: '4px 12px',
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
              background: statusStyle.bg,
              color: statusStyle.color,
            }}>
              {STATUS_LABELS[proposal.status]}
            </span>
          </div>

          {/* 1 — Customer & Project Info */}
          <Section number={1} title="Customer & Project Info">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Field label="Customer Name" half>
                <input
                  className="sb-input"
                  value={proposal.customerName}
                  onChange={e => update({ customerName: e.target.value })}
                  placeholder="Jane Smith"
                />
              </Field>
              <Field label="Customer Email" half>
                <input
                  className="sb-input"
                  type="email"
                  value={proposal.customerEmail}
                  onChange={e => update({ customerEmail: e.target.value })}
                  placeholder="jane@example.com"
                />
              </Field>
              <Field label="Phone" half>
                <input
                  className="sb-input"
                  type="tel"
                  value={proposal.customerPhone}
                  onChange={e => update({ customerPhone: e.target.value })}
                  placeholder="(916) 555-0100"
                />
              </Field>
              <Field label="Project City" half>
                <input
                  className="sb-input"
                  value={proposal.projectCity}
                  onChange={e => update({ projectCity: e.target.value })}
                  placeholder="Roseville"
                />
              </Field>
              <Field label="Project Address">
                <input
                  className="sb-input"
                  value={proposal.projectAddress}
                  onChange={e => update({ projectAddress: e.target.value })}
                  placeholder="123 Main Street, Roseville, CA 95747"
                />
              </Field>
              <Field label="Project Title" half>
                <input
                  className="sb-input"
                  value={proposal.projectTitle}
                  onChange={e => update({ projectTitle: e.target.value })}
                  placeholder="Master Bath Remodel"
                />
              </Field>
              <Field label="Project Type" half>
                <select
                  className="sb-input"
                  value={proposal.projectType}
                  onChange={e => update({ projectType: e.target.value as Proposal['projectType'] })}
                  style={{ cursor: 'pointer' }}
                >
                  {Object.entries(PROJECT_TYPE_LABELS).map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </Field>
              <Field label="Project Summary">
                <textarea
                  className="sb-input"
                  rows={4}
                  value={proposal.projectSummary}
                  onChange={e => update({ projectSummary: e.target.value })}
                  placeholder="A brief description of this project and what matters most to the customer…"
                  style={{ resize: 'vertical' }}
                />
              </Field>
            </div>
          </Section>

          {/* 2 — Scope of Work */}
          <Section number={2} title="Scope of Work">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {proposal.scopeItems.map((item, idx) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  padding: '14px 16px',
                  background: item.included ? '#fff' : 'var(--color-cream-50)',
                  border: `1px solid ${item.included ? 'rgba(20,17,13,0.10)' : 'rgba(20,17,13,0.06)'}`,
                  borderRadius: 8,
                  opacity: item.included ? 1 : 0.65,
                }}>
                  {/* Included toggle */}
                  <div style={{ paddingTop: 14, flexShrink: 0 }}>
                    <button
                      onClick={() => updateScopeItem(idx, { included: !item.included })}
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 5,
                        border: item.included ? 'none' : '1.5px solid rgba(20,17,13,0.2)',
                        background: item.included ? 'var(--color-success)' : 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background 0.15s',
                      }}
                      title={item.included ? 'Mark as excluded' : 'Mark as included'}
                    >
                      {item.included && (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="4 13 9 18 20 6"/>
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Fields */}
                  <div style={{ flex: 1, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <div style={{ flex: '0 0 200px' }}>
                      <label className="sb-label">Category</label>
                      <input
                        className="sb-input"
                        value={item.category}
                        onChange={e => updateScopeItem(idx, { category: e.target.value })}
                        placeholder="e.g. Flooring"
                        style={{ fontSize: 13 }}
                      />
                    </div>
                    <div style={{ flex: '1 1 240px' }}>
                      <label className="sb-label">Description</label>
                      <textarea
                        className="sb-input"
                        rows={2}
                        value={item.description}
                        onChange={e => updateScopeItem(idx, { description: e.target.value })}
                        placeholder="What's included…"
                        style={{ resize: 'vertical', fontSize: 13 }}
                      />
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeScopeItem(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-danger)',
                      cursor: 'pointer',
                      padding: '12px 4px',
                      opacity: 0.5,
                      transition: 'opacity 0.15s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
                    title="Remove item"
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addScopeItem}
              className="sb-btn sb-btn-ghost sb-btn-sm"
              style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <PlusIcon /> Add Scope Item
            </button>
          </Section>

          {/* 3 — Timeline */}
          <Section number={3} title="Timeline">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
              <Field label="Estimated Start Date" half>
                <input
                  className="sb-input"
                  type="date"
                  value={proposal.estimatedStartDate}
                  onChange={e => update({ estimatedStartDate: e.target.value })}
                />
              </Field>
              <Field label="Estimated Duration" half>
                <input
                  className="sb-input"
                  value={proposal.estimatedDuration}
                  onChange={e => update({ estimatedDuration: e.target.value })}
                  placeholder="3–4 weeks"
                />
              </Field>
            </div>

            <label className="sb-label" style={{ marginBottom: 10 }}>Project Phases</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {proposal.timelinePhases.map((phase, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  padding: '10px 14px',
                  background: 'var(--color-cream-50)',
                  borderRadius: 8,
                  border: '1px solid rgba(20,17,13,0.08)',
                }}>
                  <span style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'var(--color-navy-700)',
                    color: 'var(--color-cream-50)',
                    fontSize: 11,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>{idx + 1}</span>
                  <div style={{ flex: '1 1 200px' }}>
                    <input
                      className="sb-input"
                      value={phase.phase}
                      onChange={e => updatePhase(idx, { phase: e.target.value })}
                      placeholder="Phase name"
                      style={{ fontSize: 13 }}
                    />
                  </div>
                  <div style={{ flex: '0 0 160px' }}>
                    <input
                      className="sb-input"
                      value={phase.duration}
                      onChange={e => updatePhase(idx, { duration: e.target.value })}
                      placeholder="Duration"
                      style={{ fontSize: 13 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 4 — Investment */}
          <Section number={4} title="Investment">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
              <Field label="Total Project Amount ($)" half>
                <input
                  className="sb-input"
                  type="number"
                  min={0}
                  step={100}
                  value={proposal.totalAmount || ''}
                  onChange={e => update({ totalAmount: parseFloat(e.target.value) || 0 })}
                  placeholder="0"
                />
              </Field>
              <Field label="Deposit Amount ($)" half>
                <input
                  className="sb-input"
                  type="number"
                  min={0}
                  step={100}
                  value={proposal.depositAmount || ''}
                  onChange={e => update({ depositAmount: parseFloat(e.target.value) || 0 })}
                  placeholder="0"
                />
              </Field>
            </div>

            {/* Show line items toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: proposal.showLineItems ? 18 : 0 }}>
              <button
                onClick={() => update({ showLineItems: !proposal.showLineItems })}
                style={{
                  width: 40,
                  height: 22,
                  borderRadius: 11,
                  border: 'none',
                  background: proposal.showLineItems ? 'var(--color-navy-800)' : 'rgba(20,17,13,0.15)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: 3,
                  left: proposal.showLineItems ? 21 : 3,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}/>
              </button>
              <span style={{ fontSize: 14, color: 'var(--color-ink-700)', fontWeight: 500 }}>
                Show itemized breakdown to customer
              </span>
            </div>

            {proposal.showLineItems && (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {proposal.lineItems.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <input
                        className="sb-input"
                        value={item.label}
                        onChange={e => updateLineItem(idx, { label: e.target.value })}
                        placeholder="Line item label"
                        style={{ flex: 3, fontSize: 13 }}
                      />
                      <input
                        className="sb-input"
                        type="number"
                        min={0}
                        value={item.amount || ''}
                        onChange={e => updateLineItem(idx, { amount: parseFloat(e.target.value) || 0 })}
                        placeholder="Amount"
                        style={{ flex: 1, fontSize: 13 }}
                      />
                      <button
                        onClick={() => removeLineItem(idx)}
                        style={{ background: 'none', border: 'none', color: 'var(--color-danger)', cursor: 'pointer', padding: '4px', opacity: 0.6 }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addLineItem}
                  className="sb-btn sb-btn-ghost sb-btn-sm"
                  style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  <PlusIcon /> Add Line Item
                </button>
              </div>
            )}
          </Section>

          {/* 5 — Upgrades */}
          <Section number={5} title="Upgrades & Add-Ons">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {proposal.upgrades.map((upgrade, idx) => (
                <div key={upgrade.id} style={{
                  padding: '16px 18px',
                  background: 'var(--color-cream-50)',
                  borderRadius: 8,
                  border: '1px solid rgba(20,17,13,0.08)',
                }}>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 200px' }}>
                      <label className="sb-label">Upgrade Name</label>
                      <input
                        className="sb-input"
                        value={upgrade.name}
                        onChange={e => updateUpgrade(idx, { name: e.target.value })}
                        placeholder="e.g. Heated Tile Floor"
                        style={{ fontSize: 13 }}
                      />
                    </div>
                    <div style={{ flex: '0 0 130px' }}>
                      <label className="sb-label">Price ($)</label>
                      <input
                        className="sb-input"
                        type="number"
                        min={0}
                        value={upgrade.price || ''}
                        onChange={e => updateUpgrade(idx, { price: parseFloat(e.target.value) || 0 })}
                        placeholder="0"
                        style={{ fontSize: 13 }}
                      />
                    </div>
                    <button
                      onClick={() => removeUpgrade(idx)}
                      style={{ background: 'none', border: 'none', color: 'var(--color-danger)', cursor: 'pointer', padding: '24px 4px 0', opacity: 0.5, flexShrink: 0 }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <label className="sb-label">Customer Benefit</label>
                    <input
                      className="sb-input"
                      value={upgrade.benefit}
                      onChange={e => updateUpgrade(idx, { benefit: e.target.value })}
                      placeholder="Why they'd want this…"
                      style={{ fontSize: 13 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={addUpgrade}
              className="sb-btn sb-btn-ghost sb-btn-sm"
              style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <PlusIcon /> Add Upgrade
            </button>
          </Section>

          {/* 6 — Project Notes */}
          <Section number={6} title="Project Notes">
            <Field label="Notes shown to customer">
              <textarea
                className="sb-input"
                rows={6}
                value={proposal.projectNotes}
                onChange={e => update({ projectNotes: e.target.value })}
                placeholder="Notes, conditions, exclusions, or context visible to the customer…"
                style={{ resize: 'vertical' }}
              />
            </Field>
          </Section>

          {/* 7 — Proposal Settings */}
          <Section number={7} title="Proposal Settings">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Field label="Valid Through Date" half>
                <input
                  className="sb-input"
                  type="date"
                  value={proposal.validThroughDate}
                  onChange={e => update({ validThroughDate: e.target.value })}
                />
              </Field>
              <Field label="Prepared By" half>
                <input
                  className="sb-input"
                  value={proposal.preparedBy}
                  onChange={e => update({ preparedBy: e.target.value })}
                  placeholder="Stonebrite Construction Group"
                />
              </Field>
            </div>
          </Section>
        </div>

        {/* ── Sticky Sidebar (30%) ─────────────────────────────────────────── */}
        <div style={{ flex: '0 0 28%', position: 'sticky', top: 72 }}>

          {/* Status Card */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
            padding: '22px 22px',
            marginBottom: 16,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <label className="sb-label" style={{ marginBottom: 12 }}>Proposal Status</label>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 700,
              background: statusStyle.bg,
              color: statusStyle.color,
              marginBottom: 14,
            }}>
              {STATUS_LABELS[proposal.status]}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {ALL_STATUSES.filter(s => s !== proposal.status).map(s => (
                <button
                  key={s}
                  onClick={() => update({ status: s })}
                  style={{
                    padding: '5px 10px',
                    borderRadius: 6,
                    border: '1px solid rgba(20,17,13,0.12)',
                    background: '#fff',
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--color-ink-700)',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-navy-800)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(20,17,13,0.12)')}
                >
                  → {STATUS_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Save / Actions Card */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
            padding: '22px 22px',
            marginBottom: 16,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <button
              onClick={handleSaveNow}
              className="sb-btn sb-btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}
            >
              {savedMsg ? (
                <>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>
                  Saved
                </>
              ) : (
                <>
                  <SaveIcon /> Save Proposal
                </>
              )}
            </button>

            <a
              href={proposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn sb-btn-ghost"
              style={{ width: '100%', justifyContent: 'center', marginBottom: 0 }}
              onClick={handleSaveNow}
            >
              <EyeIcon /> Preview
            </a>
          </div>

          {/* Email Generator Card */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
            padding: '22px 22px',
            marginBottom: 16,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h3 style={{ fontSize: 13, fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-navy-900)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Email Generator
            </h3>

            <button
              onClick={handleCopyLink}
              className="sb-btn sb-btn-ghost sb-btn-sm"
              style={{ width: '100%', justifyContent: 'center', marginBottom: 10 }}
            >
              <LinkIcon /> {copyLinkMsg ? '✓ Link Copied' : 'Copy Proposal Link'}
            </button>

            <button
              onClick={handleGenerateEmail}
              className="sb-btn sb-btn-dark sb-btn-sm"
              style={{ width: '100%', justifyContent: 'center', marginBottom: generatedEmail ? 14 : 0 }}
            >
              <MailIcon /> Generate Email
            </button>

            {generatedEmail && (
              <>
                <div style={{ marginBottom: 10 }}>
                  <label className="sb-label" style={{ marginBottom: 4 }}>Subject</label>
                  <div style={{
                    padding: '10px 12px',
                    background: 'var(--color-cream-50)',
                    borderRadius: 6,
                    border: '1px solid rgba(20,17,13,0.10)',
                    fontSize: 12,
                    color: 'var(--color-ink-700)',
                    userSelect: 'all',
                    wordBreak: 'break-word',
                  }}>
                    {generatedEmail.subject}
                  </div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label className="sb-label" style={{ marginBottom: 4 }}>Email Body</label>
                  <textarea
                    readOnly
                    value={generatedEmail.body}
                    rows={8}
                    className="sb-input"
                    style={{ resize: 'vertical', fontSize: 12, lineHeight: 1.6 }}
                    onFocus={e => e.target.select()}
                  />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="sb-btn sb-btn-ghost sb-btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {copyEmailMsg ? '✓ Copied' : 'Copy Email Body'}
                </button>

                <div style={{ marginTop: 14 }}>
                  <label className="sb-label" style={{ marginBottom: 4 }}>Proposal URL</label>
                  <div style={{
                    padding: '8px 10px',
                    background: 'var(--color-cream-50)',
                    borderRadius: 6,
                    border: '1px solid rgba(20,17,13,0.10)',
                    fontSize: 11,
                    color: 'var(--color-ink-500)',
                    wordBreak: 'break-all',
                    lineHeight: 1.5,
                  }}>
                    {proposalUrl}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Danger Zone */}
          <div style={{ padding: '0 4px' }}>
            <button
              onClick={handleDelete}
              style={{
                width: '100%',
                background: 'none',
                border: '1px solid rgba(176,67,47,0.3)',
                borderRadius: 8,
                color: 'var(--color-danger)',
                padding: '10px',
                fontSize: 13,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(176,67,47,0.06)'; e.currentTarget.style.borderColor = 'var(--color-danger)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(176,67,47,0.3)'; }}
            >
              <TrashIcon /> Delete Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Icon components ──────────────────────────────────────────────────── */
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );
}
