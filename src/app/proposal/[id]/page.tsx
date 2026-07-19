'use client';

import { Suspense, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { decodeProposalFromUrl, getProposal, STATUS_LABELS } from '@/lib/proposals';
import type { Proposal, ProposalStatus } from '@/lib/types';

/* ── Status badge styles ──────────────────────────────────────────────── */
const STATUS_STYLES: Record<ProposalStatus, { bg: string; color: string; border: string }> = {
  draft:              { bg: '#f5f5f4', color: '#57534e', border: '#e5e7eb' },
  sent:               { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
  viewed:             { bg: '#fefce8', color: '#a16207', border: '#fde68a' },
  approved:           { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  revision_requested: { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
};

/* ── Format helpers ───────────────────────────────────────────────────── */
function fmt$(n: number) {
  return '$' + n.toLocaleString('en-US');
}

function fmtDate(s: string) {
  if (!s) return '';
  try {
    return new Date(s).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return s;
  }
}

/* ── Spinner ──────────────────────────────────────────────────────────── */
function Spinner() {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" style={{ animation: 'spin 0.9s linear infinite', display: 'block' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="10" strokeOpacity="0.2"/>
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Not-found state ──────────────────────────────────────────────────── */
function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 480, textAlign: 'center', padding: '40px 24px' }}>
        <svg viewBox="0 0 40 40" width={48} height={48} style={{ margin: '0 auto 20px' }} aria-hidden="true">
          <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="#E5B53A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
          <line x1="3" y1="33" x2="37" y2="33" stroke="#E5B53A" strokeWidth="2"/>
        </svg>
        <h2 style={{ fontSize: 28, color: 'var(--color-navy-900)', marginBottom: 12 }}>Proposal Not Found</h2>
        <p style={{ color: 'var(--color-ink-500)', fontSize: 15, lineHeight: 1.65, marginBottom: 28 }}>
          This proposal link may have expired or been updated. Please contact Stonebrite for an updated link.
        </p>
        <a
          href="mailto:info@stonebritecg.com"
          className="sb-btn sb-btn-primary"
        >
          Contact Stonebrite
        </a>
      </div>
    </div>
  );
}

/* ── The inner component that reads search params ─────────────────────── */
function ProposalViewerInner() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;

  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [scopeExpanded, setScopeExpanded] = useState(false);
  const [investmentExpanded, setInvestmentExpanded] = useState(false);

  useEffect(() => {
    // Try URL param first
    const encoded = searchParams.get('d');
    if (encoded) {
      const decoded = decodeProposalFromUrl(encoded);
      if (decoded) {
        setProposal(decoded);
        setLoading(false);
        return;
      }
    }
    // Fallback to localStorage
    const stored = getProposal(id);
    setProposal(stored);
    setLoading(false);
  }, [id, searchParams]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
        <Spinner />
        <p style={{ fontSize: 14, color: 'var(--color-ink-500)' }}>Loading your proposal…</p>
      </div>
    );
  }

  if (!proposal) return <NotFound />;

  const statusStyle = STATUS_STYLES[proposal.status];
  const includedItems = proposal.scopeItems.filter(i => i.included);
  const SCOPE_PREVIEW = 6;
  const hasMoreScope = includedItems.length > SCOPE_PREVIEW;
  const visibleScope = scopeExpanded ? includedItems : includedItems.slice(0, SCOPE_PREVIEW);

  const contactEmail = proposal.customerEmail || 'info@stonebritecg.com';
  const contactSubject = encodeURIComponent(`Question about my proposal — ${proposal.projectTitle}`);

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-full { max-height: none !important; overflow: visible !important; }
          body { background: #fff; }
          header { position: static !important; }
        }
      `}</style>

      <div style={{ background: 'var(--color-cream-50)', minHeight: '100vh' }}>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header style={{
          background: 'var(--color-navy-900)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '0 24px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <svg viewBox="0 0 40 40" width={30} height={30} aria-hidden="true">
                <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="#E5B53A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
                <line x1="3" y1="33" x2="37" y2="33" stroke="#E5B53A" strokeWidth="2"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-cream-50)',
              }}>Stonebrite</span>
            </div>

            {/* Project name */}
            {proposal.projectTitle && (
              <div style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--color-stone-300)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }} className="hidden md:block">
                {proposal.projectTitle}
                {proposal.projectCity ? ` · ${proposal.projectCity}` : ''}
              </div>
            )}

            {/* Right actions */}
            <div className="no-print" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <a
                href={`mailto:info@stonebritecg.com?subject=${contactSubject}`}
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--color-stone-300)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  whiteSpace: 'nowrap',
                }}
                className="hidden sm:flex"
              >
                <MailIcon size={13} /> Ask a Question
              </a>
              <button
                onClick={() => window.print()}
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--color-cream-200)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 6,
                  padding: '7px 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  whiteSpace: 'nowrap',
                }}
              >
                <PrintIcon /> Print / PDF
              </button>
            </div>
          </div>
        </header>

        {/* ── Document ────────────────────────────────────────────────────── */}
        <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* 1 — Status Card */}
          <div style={{
            background: statusStyle.bg,
            border: `1px solid ${statusStyle.border}`,
            borderRadius: 12,
            padding: '22px 28px',
            marginBottom: 28,
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}>
              <span className="sb-eyebrow" style={{ marginBottom: 4 }}>Proposal Status</span>
              <div style={{ fontSize: 20, fontWeight: 700, fontFamily: 'var(--font-sans)', color: statusStyle.color }}>
                {STATUS_LABELS[proposal.status]}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {proposal.validThroughDate && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: 2 }}>Valid Through</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-ink-700)' }}>{fmtDate(proposal.validThroughDate)}</div>
                </div>
              )}
              {proposal.customerName && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: 2 }}>Prepared For</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-ink-700)' }}>{proposal.customerName}</div>
                </div>
              )}
            </div>
          </div>

          {/* 2 — Our Promise */}
          <div style={{
            background: 'var(--color-navy-800)',
            borderRadius: 12,
            padding: '28px 32px',
            marginBottom: 28,
          }}>
            <span className="sb-eyebrow" style={{ color: 'var(--color-gold-300)', marginBottom: 10 }}>Our Promise for Your Remodel</span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px 24px',
              marginTop: 4,
            }}>
              {[
                'A clear written scope.',
                'Thoughtful design support.',
                'Organized communication.',
                'Owner-led oversight.',
                'Workmanship built to last.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-cream-100)', fontSize: 14, fontWeight: 500 }}>
                  <span style={{ color: 'var(--color-gold-500)', flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 3 — Project Summary */}
          <div style={{ marginBottom: 32 }}>
            <span className="sb-eyebrow" style={{ marginBottom: 10 }}>Your Project</span>
            <h1 style={{ fontSize: 40, color: 'var(--color-navy-900)', lineHeight: 1.05, marginBottom: 8 }}>
              {proposal.projectTitle || 'Your Remodel'}
            </h1>
            {proposal.projectCity && (
              <div style={{ fontSize: 15, color: 'var(--color-ink-500)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <PinIcon /> {proposal.projectCity}
                {proposal.projectAddress && ` · ${proposal.projectAddress}`}
              </div>
            )}
            {proposal.projectSummary && (
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 20,
                color: 'var(--color-ink-700)',
                lineHeight: 1.6,
                borderLeft: '3px solid var(--color-gold-500)',
                paddingLeft: 20,
                marginTop: 16,
              }}>
                {proposal.projectSummary}
              </p>
            )}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(20,17,13,0.10)', marginBottom: 32 }} />

          {/* 4 — What's Included */}
          {includedItems.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <span className="sb-eyebrow" style={{ marginBottom: 14 }}>What's Included</span>
              <div style={{
                background: '#fff',
                borderRadius: 12,
                border: '1px solid rgba(20,17,13,0.08)',
                overflow: 'hidden',
              }}>
                {visibleScope.map((item, idx) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: 14,
                    padding: '16px 20px',
                    borderBottom: idx < visibleScope.length - 1 ? '1px solid rgba(20,17,13,0.06)' : 'none',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-navy-900)', marginBottom: item.description ? 3 : 0 }}>
                        {item.category}
                      </div>
                      {item.description && (
                        <div style={{ fontSize: 13, color: 'var(--color-ink-500)', lineHeight: 1.55 }}>
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {hasMoreScope && (
                <button
                  onClick={() => setScopeExpanded(!scopeExpanded)}
                  style={{
                    marginTop: 12,
                    background: 'none',
                    border: '1px solid rgba(20,17,13,0.12)',
                    borderRadius: 8,
                    padding: '10px 18px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-navy-800)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    width: '100%',
                    justifyContent: 'center',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-navy-800)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(20,17,13,0.12)')}
                >
                  {scopeExpanded
                    ? 'Show less'
                    : `+ ${includedItems.length - SCOPE_PREVIEW} more items`}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={scopeExpanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}/>
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* 5 — Timeline */}
          {proposal.timelinePhases.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <span className="sb-eyebrow" style={{ marginBottom: 14 }}>Project Timeline</span>
              {(proposal.estimatedStartDate || proposal.estimatedDuration) && (
                <div style={{
                  display: 'flex',
                  gap: 24,
                  flexWrap: 'wrap',
                  marginBottom: 18,
                  padding: '14px 20px',
                  background: 'var(--color-cream-100)',
                  borderRadius: 10,
                  border: '1px solid rgba(20,17,13,0.08)',
                }}>
                  {proposal.estimatedStartDate && (
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: 2 }}>Est. Start</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy-900)' }}>{fmtDate(proposal.estimatedStartDate)}</div>
                    </div>
                  )}
                  {proposal.estimatedDuration && (
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: 2 }}>Est. Duration</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy-900)' }}>{proposal.estimatedDuration}</div>
                    </div>
                  )}
                </div>
              )}
              <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
                {/* Connector line */}
                <div style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  right: 16,
                  height: 2,
                  background: 'rgba(20,17,13,0.08)',
                  zIndex: 0,
                }} />
                {proposal.timelinePhases.map((phase, idx) => (
                  <div key={idx} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    padding: '0 8px',
                  }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'var(--color-navy-800)',
                      border: '2px solid var(--color-gold-500)',
                      color: 'var(--color-cream-50)',
                      fontSize: 12,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 10,
                      flexShrink: 0,
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-navy-900)', marginBottom: 4, lineHeight: 1.3 }}>
                      {phase.phase}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--color-ink-500)', lineHeight: 1.4 }}>
                      {phase.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6 — Warranty */}
          <div style={{
            background: 'var(--color-navy-900)',
            borderRadius: 12,
            padding: '28px 32px',
            marginBottom: 32,
            display: 'flex',
            gap: 20,
            alignItems: 'flex-start',
          }}>
            <div style={{ flexShrink: 0, marginTop: 4 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(229,181,58,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-500)',
              }}>
                <ShieldIcon />
              </div>
            </div>
            <div>
              <span className="sb-eyebrow" style={{ color: 'var(--color-gold-300)', marginBottom: 6 }}>5-Year Workmanship Warranty</span>
              <p style={{ color: 'var(--color-stone-300)', fontSize: 14, lineHeight: 1.7 }}>
                All work performed by Stonebrite Construction Group is warranted against defects in workmanship for five (5) years from the date of completion. This warranty covers shower waterproofing systems, plumbing connections, tile and flooring installation, electrical work, and all finish carpentry. Manufacturer warranties on fixtures and materials are passed through to the homeowner at no additional cost.
              </p>
            </div>
          </div>

          {/* 7 — Total Investment */}
          <div style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid rgba(20,17,13,0.08)',
            padding: '28px 32px',
            marginBottom: 28,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <span className="sb-eyebrow" style={{ marginBottom: 10 }}>Total Investment</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 56,
                fontWeight: 500,
                color: 'var(--color-navy-900)',
                lineHeight: 1,
              }}>
                {fmt$(proposal.totalAmount)}
              </span>
              {proposal.depositAmount > 0 && (
                <span style={{ fontSize: 15, color: 'var(--color-ink-500)' }}>
                  · {fmt$(proposal.depositAmount)} deposit to schedule
                </span>
              )}
            </div>

            {proposal.showLineItems && proposal.lineItems.length > 0 && (
              <>
                <button
                  onClick={() => setInvestmentExpanded(!investmentExpanded)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-navy-800)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: investmentExpanded ? 16 : 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={investmentExpanded ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'}/>
                  </svg>
                  {investmentExpanded ? 'Hide' : 'View'} Investment Details
                </button>

                {investmentExpanded && (
                  <div style={{ borderTop: '1px solid rgba(20,17,13,0.08)', paddingTop: 16 }}>
                    {proposal.lineItems.map((item, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: idx < proposal.lineItems.length - 1 ? '1px solid rgba(20,17,13,0.06)' : 'none',
                        fontSize: 14,
                      }}>
                        <span style={{ color: 'var(--color-ink-700)' }}>{item.label}</span>
                        <span style={{ fontWeight: 600, color: 'var(--color-navy-900)', whiteSpace: 'nowrap', marginLeft: 16 }}>{fmt$(item.amount)}</span>
                      </div>
                    ))}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 0 0',
                      borderTop: '2px solid rgba(20,17,13,0.10)',
                      marginTop: 10,
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                      <span style={{ color: 'var(--color-navy-900)' }}>Total</span>
                      <span style={{ color: 'var(--color-navy-900)' }}>{fmt$(proposal.totalAmount)}</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 8 — Upgrades */}
          {proposal.upgrades.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <span className="sb-eyebrow" style={{ marginBottom: 14 }}>Optional Upgrades</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {proposal.upgrades.map((upgrade) => (
                  <div key={upgrade.id} style={{
                    background: '#fff',
                    borderRadius: 10,
                    border: '1px solid rgba(20,17,13,0.08)',
                    padding: '20px 22px',
                    display: 'flex',
                    gap: 18,
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--color-navy-900)', marginBottom: 4 }}>
                        {upgrade.name}
                      </div>
                      {upgrade.benefit && (
                        <div style={{ fontSize: 14, color: 'var(--color-ink-500)', lineHeight: 1.55 }}>
                          {upgrade.benefit}
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, flexWrap: 'wrap' }}>
                      {upgrade.price > 0 && (
                        <span style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 22,
                          fontWeight: 500,
                          color: 'var(--color-navy-900)',
                        }}>
                          +{fmt$(upgrade.price)}
                        </span>
                      )}
                      <a
                        href={`mailto:info@stonebritecg.com?subject=${encodeURIComponent(`Add upgrade: ${upgrade.name} — ${proposal.projectTitle}`)}`}
                        className="sb-btn sb-btn-ghost sb-btn-sm"
                      >
                        Add to Proposal
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9 — Project Notes */}
          {proposal.projectNotes && (
            <div style={{
              background: 'var(--color-cream-100)',
              borderRadius: 10,
              border: '1px solid rgba(20,17,13,0.08)',
              padding: '20px 24px',
              marginBottom: 32,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: 10 }}>
                Project Notes
              </div>
              <p style={{ fontSize: 13, color: 'var(--color-ink-500)', lineHeight: 1.7 }}>
                {proposal.projectNotes}
              </p>
            </div>
          )}

          {/* 10 — CTA */}
          <div style={{
            background: 'var(--color-navy-800)',
            borderRadius: 14,
            padding: '36px 36px',
            textAlign: 'center',
          }} className="no-print">
            <span className="sb-eyebrow" style={{ color: 'var(--color-gold-300)', marginBottom: 12 }}>Ready to Move Forward?</span>
            <h2 style={{ fontSize: 34, color: 'var(--color-cream-50)', marginBottom: 10 }}>
              Let's make your remodel happen.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--color-stone-300)', lineHeight: 1.65, marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
              Review your proposal carefully — we're here for any questions. When you're ready, let us know below.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <a
                href={`mailto:info@stonebritecg.com?subject=${encodeURIComponent(`APPROVED — ${proposal.projectTitle}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to approve my proposal for: ${proposal.projectTitle}.\n\nCustomer: ${proposal.customerName}\nEmail: ${proposal.customerEmail}\n\nPlease send me the formal agreement.\n\nThank you!`)}`}
                className="sb-btn sb-btn-primary sb-btn-lg"
              >
                Approve Proposal
              </a>
              <a
                href={`mailto:info@stonebritecg.com?subject=${encodeURIComponent(`Revision Request — ${proposal.projectTitle}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to request a revision to my proposal for: ${proposal.projectTitle}.\n\nHere's what I'd like to change:\n\n[describe your changes here]\n\nThank you,\n${proposal.customerName}`)}`}
                className="sb-btn sb-btn-ghost-cream sb-btn-lg"
              >
                Request Revision
              </a>
              <a
                href={`mailto:info@stonebritecg.com?subject=${contactSubject}`}
                className="sb-btn sb-btn-ghost-cream sb-btn-lg"
              >
                Ask a Question
              </a>
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-stone-500)', lineHeight: 1.6 }}>
              After approval, Stonebrite will prepare the formal agreement and next-step documents for your review.
            </p>
          </div>

          {/* Footer signature */}
          <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 28, borderTop: '1px solid rgba(20,17,13,0.08)' }}>
            <svg viewBox="0 0 40 40" width={36} height={36} style={{ margin: '0 auto 10px', display: 'block', opacity: 0.35 }} aria-hidden="true">
              <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
              <line x1="3" y1="33" x2="37" y2="33" stroke="var(--color-navy-900)" strokeWidth="2"/>
            </svg>
            <p style={{ fontSize: 13, color: 'var(--color-ink-300)', lineHeight: 1.6 }}>
              {proposal.preparedBy || 'Stonebrite Construction Group'}<br />
              (916) 347-6549 · info@stonebritecg.com
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

/* ── Loading fallback ─────────────────────────────────────────────────── */
function ProposalFallback() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20 }}>
      <Spinner />
      <p style={{ fontSize: 14, color: 'var(--color-ink-500)' }}>Loading your proposal…</p>
    </div>
  );
}

/* ── Default export with Suspense boundary ────────────────────────────── */
export default function ProposalViewerPage() {
  return (
    <Suspense fallback={<ProposalFallback />}>
      <ProposalViewerInner />
    </Suspense>
  );
}

/* ── Icon components ──────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 13 9 18 20 6"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

function MailIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/>
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
    </svg>
  );
}
