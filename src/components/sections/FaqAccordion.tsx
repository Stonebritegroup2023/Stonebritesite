/**
 * Native <details>/<summary> FAQ accordion — works without JavaScript,
 * keyboard-accessible, and styled via .sb-faq-* classes in globals.css.
 */
export interface FaqItem {
  q: string;
  a: string;
  open?: boolean;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((faq) => (
        <details key={faq.q} className="sb-faq-item" open={faq.open}>
          <summary className="sb-faq-summary">
            <span className="sb-faq-q">{faq.q}</span>
            <span className="sb-faq-icon" aria-hidden="true" />
          </summary>
          <div className="sb-faq-a">{faq.a}</div>
        </details>
      ))}
    </div>
  );
}
