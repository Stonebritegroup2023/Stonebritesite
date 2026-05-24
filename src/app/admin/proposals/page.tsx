'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getProposals,
  deleteProposal,
  generateProposalLink,
  STATUS_LABELS,
} from '@/lib/proposals';
import type { Proposal, ProposalStatus } from '@/lib/types';

const STATUS_STYLES: Record<ProposalStatus, { bg: string; color: string }> = {
  draft:              { bg: '#f5f5f4', color: '#57534e' },
  sent:               { bg: '#eff6ff', color: '#1d4ed8' },
  viewed:             { bg: '#fefce8', color: '#a16207' },
  approved:           { bg: '#f0fdf4', color: '#166534' },
  revision_requested: { bg: '#fff7ed', color: '#c2410c' },
};

const ALL_STATUSES: ProposalStatus[] = ['draft', 'sent', 'viewed', 'approved', 'revision_requested'];

type TabFilter = 'all' | ProposalStatus;

function AdminHeader() {
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
      <div style={{ marginLeft: 'auto' }}>
        <Link href="/" style={{
          fontSize: 12,
          color: 'var(--color-stone-300)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          transition: 'color 0.15s',
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

export default function ProposalsListPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabFilter>('all');
  const [copyMsg, setCopyMsg] = useState<string | null>(null);

  useEffect(() => {
    setProposals(getProposals());
    setLoading(false);
  }, []);

  function handleDelete(id: string, name: string) {
    if (!confirm(`Delete proposal for "${name || 'Unnamed customer'}"? This cannot be undone.`)) return;
    deleteProposal(id);
    setProposals(getProposals());
  }

  async function handleCopyLink(proposal: Proposal) {
    const url = generateProposalLink(proposal, window.location.origin);
    try {
      await navigator.clipboard.writeText(url);
      setCopyMsg(proposal.id);
      setTimeout(() => setCopyMsg(null), 2000);
    } catch {
      prompt('Copy this proposal link:', url);
    }
  }

  const filtered = activeTab === 'all'
    ? proposals
    : proposals.filter((p) => p.status === activeTab);

  const tabCounts: Record<TabFilter, number> = {
    all: proposals.length,
    draft: proposals.filter(p => p.status === 'draft').length,
    sent: proposals.filter(p => p.status === 'sent').length,
    viewed: proposals.filter(p => p.status === 'viewed').length,
    approved: proposals.filter(p => p.status === 'approved').length,
    revision_requested: proposals.filter(p => p.status === 'revision_requested').length,
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)' }}>
      <AdminHeader />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px' }}>
        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 32, color: 'var(--color-navy-900)' }}>Proposals</h1>
            <p style={{ marginTop: 6, fontSize: 14, color: 'var(--color-ink-500)' }}>
              {proposals.length} total proposal{proposals.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Link href="/admin/proposals/new" className="sb-btn sb-btn-primary">
            <PlusIcon /> New Proposal
          </Link>
        </div>

        {/* Status tabs */}
        <div style={{
          display: 'flex',
          gap: 4,
          marginBottom: 24,
          borderBottom: '1px solid rgba(20,17,13,0.10)',
          overflowX: 'auto',
        }}>
          {(['all', ...ALL_STATUSES] as TabFilter[]).map((tab) => {
            const label = tab === 'all' ? 'All' : STATUS_LABELS[tab as ProposalStatus];
            const count = tabCounts[tab];
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 16px',
                  fontSize: 13,
                  fontWeight: active ? 600 : 500,
                  color: active ? 'var(--color-navy-900)' : 'var(--color-ink-500)',
                  background: 'none',
                  border: 'none',
                  borderBottom: active ? '2px solid var(--color-gold-500)' : '2px solid transparent',
                  marginBottom: -1,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'color 0.15s',
                }}
              >
                {label}
                {count > 0 && (
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '1px 6px',
                    borderRadius: 99,
                    background: active ? 'var(--color-navy-900)' : 'rgba(20,17,13,0.08)',
                    color: active ? 'var(--color-cream-50)' : 'var(--color-ink-500)',
                  }}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-ink-300)' }}>
            <Spinner />
            <p style={{ marginTop: 16, fontSize: 14 }}>Loading proposals…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 0',
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
          }}>
            <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.3 }}>📋</div>
            <h3 style={{ fontSize: 20, color: 'var(--color-navy-900)', marginBottom: 8 }}>
              {activeTab === 'all' ? 'No proposals yet' : `No ${STATUS_LABELS[activeTab as ProposalStatus]} proposals`}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--color-ink-500)', marginBottom: 24 }}>
              {activeTab === 'all'
                ? 'Create your first proposal to get started.'
                : 'No proposals match this filter.'}
            </p>
            {activeTab === 'all' && (
              <Link href="/admin/proposals/new" className="sb-btn sb-btn-primary">
                <PlusIcon /> Create Your First Proposal
              </Link>
            )}
          </div>
        ) : (
          <div style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(20,17,13,0.08)' }}>
                  {['Customer', 'Project', 'City', 'Status', 'Total', 'Created', 'Actions'].map((col) => (
                    <th key={col} style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink-500)',
                      background: 'var(--color-cream-50)',
                    }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => {
                  const s = STATUS_STYLES[p.status];
                  const created = new Date(p.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                  return (
                    <tr
                      key={p.id}
                      style={{
                        borderBottom: i < filtered.length - 1 ? '1px solid rgba(20,17,13,0.06)' : 'none',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-cream-50)')}
                      onMouseLeave={e => (e.currentTarget.style.background = '')}
                    >
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-navy-900)' }}>
                          {p.customerName || <span style={{ color: 'var(--color-ink-300)', fontStyle: 'italic', fontWeight: 400 }}>No name</span>}
                        </div>
                        {p.customerEmail && (
                          <div style={{ fontSize: 12, color: 'var(--color-ink-300)', marginTop: 2 }}>{p.customerEmail}</div>
                        )}
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 14, color: 'var(--color-ink-700)', maxWidth: 220 }}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {p.projectTitle || <span style={{ color: 'var(--color-ink-300)', fontStyle: 'italic' }}>Untitled</span>}
                        </div>
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 14, color: 'var(--color-ink-500)' }}>
                        {p.projectCity || '—'}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          borderRadius: 99,
                          fontSize: 12,
                          fontWeight: 600,
                          background: s.bg,
                          color: s.color,
                          whiteSpace: 'nowrap',
                        }}>
                          {STATUS_LABELS[p.status]}
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600, color: 'var(--color-navy-900)', whiteSpace: 'nowrap' }}>
                        {p.totalAmount > 0 ? `$${p.totalAmount.toLocaleString()}` : '—'}
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 13, color: 'var(--color-ink-500)', whiteSpace: 'nowrap' }}>
                        {created}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'nowrap' }}>
                          <Link
                            href={`/admin/proposals/${p.id}`}
                            className="sb-btn sb-btn-sm"
                            style={{
                              background: 'var(--color-navy-900)',
                              color: 'var(--color-cream-50)',
                              border: 'none',
                              fontSize: 12,
                              padding: '7px 12px',
                            }}
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleCopyLink(p)}
                            className="sb-btn sb-btn-sm sb-btn-ghost"
                            style={{ fontSize: 12, padding: '7px 12px', position: 'relative' }}
                          >
                            {copyMsg === p.id ? '✓ Copied' : 'Copy Link'}
                          </button>
                          <button
                            onClick={() => handleDelete(p.id, p.customerName)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--color-danger)',
                              cursor: 'pointer',
                              padding: '7px 8px',
                              borderRadius: 6,
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              opacity: 0.7,
                              transition: 'opacity 0.15s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                            title="Delete proposal"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

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

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" style={{ animation: 'spin 0.9s linear infinite', display: 'inline-block' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="10" strokeOpacity="0.2"/>
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
    </svg>
  );
}
