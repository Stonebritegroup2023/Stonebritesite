'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createBlankProposal, saveProposal } from '@/lib/proposals';

export default function NewProposalPage() {
  const router = useRouter();

  useEffect(() => {
    const proposal = createBlankProposal();
    saveProposal(proposal);
    router.replace(`/admin/proposals/${proposal.id}`);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-cream-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 20,
    }}>
      <Spinner />
      <p style={{ fontSize: 15, color: 'var(--color-ink-500)' }}>Creating new proposal…</p>
    </div>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold-500)" strokeWidth="2" style={{ animation: 'spin 0.9s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="10" strokeOpacity="0.2"/>
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
    </svg>
  );
}
