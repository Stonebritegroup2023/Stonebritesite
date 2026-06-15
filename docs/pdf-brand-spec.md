# Stonebrite Construction Group — PDF Brand & Design Specification

**Purpose:** This document defines the Stonebrite visual identity so that generated
PDFs (material lists, proposals, and other client documents) are in design sync
with the Stonebrite website. It is self-contained — every color, font, size, and
layout rule needed is included here. Follow it exactly.

**Document type this targets:** Client-facing **material list** PDFs (and similar
documents), printed on US Letter or viewed on screen.

---

## 1. Brand essence (tone)

Stonebrite is **family-owned, owner-led residential remodeling** for Greater
Sacramento and the East Bay. The brand feeling is: **clear, calm, premium,
trustworthy, editorial.** Documents should feel *organized and reassuring*, never
busy or salesy. Generous white space. Restrained use of the gold accent. Serif
headlines paired with clean sans-serif body text.

Voice for any copy in the PDF: plain-English, confident, no jargon, no hype.

---

## 2. Logo

**Primary logo:** the Stonebrite wordmark — "STONEBRITE" with "CONSTRUCTION GROUP"
beneath it, accompanied by a **gold/brass angular "roofline" house geometry** mark.

| Variant | Use on | File |
|---|---|---|
| Transparent wordmark (navy text + gold geometry) | light backgrounds (white, cream) | `stonebrite-logo-trans.png` (700×353) |
| High-resolution master | print, scaling up | `stonebrite-logo.png` (2732×2048) |
| Icon / house mark only (gold on navy) | favicon, small badge, document corner mark | see SVG in §2.1 |

**On dark/navy backgrounds:** use a light version — cream/white wordmark with the
same gold geometry. (If only the navy-text PNG is available, place it on a cream
panel rather than directly on navy.)

**Clear space:** keep empty space equal to the height of the house mark on all
sides of the logo. Never crowd it with text or rules.

**Minimum size in print:** wordmark no smaller than **1.4 in / ~135 px** wide.

**Do not:** recolor it, add shadows/outlines, stretch or skew it, rotate it, or
place it on a busy photo without a solid/scrim panel behind it.

### 2.1 House mark (SVG, for a small corner badge or icon)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="12" fill="#0B1F33"/>
  <path d="M14 47 L14 26 L32 15 L50 26 L50 47" fill="none" stroke="#E5B53A"
        stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="11" y1="47" x2="53" y2="47" stroke="#E5B53A" stroke-width="3.5"
        stroke-linecap="round"/>
</svg>
```

---

## 3. Color palette

Use these exact hex values. Roles describe how to apply them in a document.

### Brand — Navy (primary / headings / dark panels)
| Token | Hex | Role |
|---|---|---|
| navy-900 | `#0B1F33` | Headlines, dark panels, table header background, primary brand color |
| navy-800 | `#102A43` | Secondary dark surface, dark buttons |
| navy-700 | `#1A3A56` | Tertiary navy |
| navy-600 | `#2A4D6F` | Subtle navy accents |

### Brand — Gold / Brass (accent only — use sparingly)
| Token | Hex | Role |
|---|---|---|
| gold-500 | `#E5B53A` | Primary accent: rules, key figures, the house mark, highlights |
| gold-600 | `#C99B22` | Eyebrow labels, links, deeper accent, borders on gold elements |
| gold-300 | `#F3D78A` | Accent on dark backgrounds (e.g., gold text/icons on navy) |
| gold-100 | `#FAEBC2` | Very light gold wash / highlight fill |

### Surface — Cream / Ivory (backgrounds)
| Token | Hex | Role |
|---|---|---|
| cream-50  | `#FBF7EE` | Default page/background tint, soft panels |
| cream-100 | `#F6EFE2` | Alternate panel / zebra striping, note boxes |
| cream-200 | `#EFE5D1` | Pills, badges, subtle fills |
| cream-300 | `#E5D7BB` | Deeper cream divider |
| white     | `#FFFFFF` | Cards, table rows, primary print background |

### Ink / Text & neutrals
| Token | Hex | Role |
|---|---|---|
| ink-900 | `#14110D` | Strongest body text |
| ink-700 | `#2A251D` | Default body text |
| ink-500 | `#5C5447` | Muted text, secondary info, captions |
| ink-300 | `#8C8473` | Faint text, placeholders |
| stone-300 | `#C9BCA8` | Light divider on dark / muted text on navy |
| stone-500 | `#8C7F6B` | Meta labels (city, dates) |

### State colors (for status chips / flags)
| Token | Hex | Use |
|---|---|---|
| success | `#2E7D5B` | Confirmed / included / approved |
| danger  | `#B0432F` | Excluded / alert |

**Status badge palette** (background / text) — mirrors the website proposal page:
| Status | Background | Text |
|---|---|---|
| Draft | `#F5F5F4` | `#57534E` |
| Sent / Awaiting Review | `#EFF6FF` | `#1D4ED8` |
| Viewed / Under Review | `#FEFCE8` | `#A16207` |
| Approved | `#F0FDF4` | `#166534` |
| Revision Requested | `#FFF7ED` | `#C2410C` |

**Hairline / border colors:** `rgba(20,17,13,0.08)` (standard), `rgba(20,17,13,0.16)`
(stronger). On navy: `rgba(255,255,255,0.08)`.

**Print note:** Use a **white page background** for printed material lists (cream
edge-to-edge can band on some printers). Apply cream-50/100 only to *panels* and
*zebra table rows*. Convert colors to CMYK at the print step if producing for
offset; for digital/desktop PDFs, keep RGB/sRGB.

---

## 4. Typography

Two typefaces. Both are free Google Fonts — embed them in the PDF so it renders
identically everywhere.

| Role | Typeface | Weight | Source |
|---|---|---|---|
| Headlines, document title, section titles | **Cormorant Garamond** | 500 (Medium); 400 italic for accents | fonts.google.com/specimen/Cormorant+Garamond |
| Body, tables, labels, everything else | **Manrope** | 400 / 500 / 600 / 700 | fonts.google.com/specimen/Manrope |
| Small meta / monospace tags (optional) | **JetBrains Mono** (or system monospace) | 400 / 500 | fonts.google.com/specimen/JetBrains+Mono |

Fallbacks: serif → `"EB Garamond", Georgia, serif`; sans → `system-ui, "Helvetica Neue", sans-serif`.

### Type rules
- **Headlines are Cormorant Garamond, weight 500** (NOT bold). Letter-spacing
  `-0.01em`, line-height ~1.05–1.1. Color navy-900.
- **Body is Manrope 400**, line-height ~1.6–1.7, color ink-700.
- **Eyebrow labels** (small section kickers): Manrope **600**, ~8–9pt, UPPERCASE,
  letter-spacing `0.16–0.18em`, color gold-600.
- **Field labels** (e.g., "QUANTITY"): Manrope 600, ~8pt, uppercase,
  letter-spacing `0.10em`, color ink-500.
- Italic Cormorant is used for warm, human accents (a one-line promise/quote). Keep rare.

### Print type scale (recommended pt sizes for US Letter)
| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Document title | Cormorant Garamond | 28–32pt | 500 | navy-900 |
| Section heading | Cormorant Garamond | 16–18pt | 500 | navy-900 |
| Subsection / item title | Manrope | 11–12pt | 600 | navy-900 |
| Body text | Manrope | 10.5–11pt | 400 | ink-700, line-height 1.6 |
| Table header | Manrope | 8.5–9pt | 600 | uppercase, tracking 0.08em, cream on navy |
| Table cell | Manrope | 9.5–10pt | 400 | ink-700 |
| Eyebrow / label | Manrope | 8pt | 600 | uppercase, tracking 0.16em, gold-600 |
| Meta / footnote | Manrope | 8–8.5pt | 500 | ink-500 |

---

## 5. Layout & spacing

- **Page:** US Letter (8.5 × 11 in / 216 × 279 mm), portrait.
- **Margins:** 0.75 in (≈54 px) all sides; 0.6 in acceptable if content-dense.
- **Spacing scale** (use multiples for consistency): 4, 8, 12, 16, 24, 32, 48, 64 px.
- **Corner radius:** cards/panels 12–14px; small chips/badges 4–6px; pills 999px.
- **Rules/dividers:** 1px hairline in `rgba(20,17,13,0.08)`. The signature
  **gold rule** is `2px tall × 48px wide`, color gold-500 — use it under eyebrows
  or section titles as a brand flourish.
- **Shadows** (screen PDFs only; omit for print):
  - sm: `0 1px 2px rgba(15,32,51,0.06)`
  - md: `0 8px 24px rgba(15,32,51,0.08), 0 1px 2px rgba(15,32,51,0.06)`

---

## 6. Material-list document anatomy

Recommended structure for a Stonebrite material-list PDF, top to bottom:

### 6.1 Header band
- Left: **Stonebrite logo** (transparent wordmark), ~1.6 in wide.
- Right: document meta block, right-aligned, Manrope:
  - Eyebrow "MATERIAL LIST" (gold-600, uppercase, tracking).
  - Document # / date (ink-500, ~9pt).
- A 1px hairline divider beneath the header.

### 6.2 Client & project block
A light **cream-50 panel** (radius 12px, 16–20px padding) with two columns:
- **Prepared for:** client name, project address, city.
- **Project:** project title, type (Bathroom / Tub-to-Shower / Kitchen), and an
  optional **status badge** (see §3 palette) top-right.
- Labels in §4 "field label" style; values in Manrope 500, ink-900.

### 6.3 Materials table (the core)
Group rows by **room/area** or **category**. Recommended columns:

| Column | Align | Notes |
|---|---|---|
| Category / Area | left | e.g., "Shower & Tub Area" — or use as a group header row |
| Item / Selection | left | product or finish name |
| Spec / Model | left | optional — SKU, color, size |
| Qty | right | numeric |
| Unit | left | ea, sq ft, lf |
| Notes / Allowance | left | optional |

Table styling:
- **Header row:** background navy-900, text cream-50, Manrope 600, 8.5–9pt,
  UPPERCASE, letter-spacing 0.08em, ~10px vertical padding.
- **Group header** (per room/category): a slim row with cream-100 background, a
  **gold-500 left accent bar** (3–4px), category name in Manrope 700, navy-900.
- **Body rows:** alternate white / cream-50 (zebra). Row separators = 1px hairline
  `rgba(20,17,13,0.08)`. Cell padding ~8–10px. Numeric columns right-aligned.
- Keep it airy — this is a premium document, not a spreadsheet.

### 6.4 Notes / scope box
A **cream-100 panel** with a small gold rule and an eyebrow "PROJECT NOTES".
Body in ink-500, ~10pt, line-height 1.7. Use this for allowances, exclusions, and
the standard change-order language.

### 6.5 Optional totals / allowance summary
If totals appear: a right-aligned block, large figure in **Cormorant Garamond
500** (navy-900), label in §4 label style above it. A gold rule can underline the
grand total.

### 6.6 Footer (every page)
1px hairline above a slim footer row, Manrope 8–8.5pt, ink-500:
- Left: "Stonebrite Construction Group · CSLB Lic. #[license]"
- Center/right: `stonebritecg.com · (916) 555-0188 · hello@stonebritecg.com`
- Optional: small gold house mark (§2.1) at left, page number at right.

---

## 7. Component recipes (quick reference)

**Eyebrow + section title:**
```
[EYEBROW]  ← Manrope 600, 8pt, UPPERCASE, tracking 0.16em, gold-600
────       ← gold rule: 2px × 48px, gold-500, ~10px below eyebrow
Section Title  ← Cormorant Garamond 500, 16–18pt, navy-900
```

**Status badge (pill):** background + text from §3 table, radius 999px, padding
`4px 12px`, Manrope 600, ~8.5pt.

**Callout / promise line (rare, warm accent):** Cormorant Garamond *italic* 400,
13–16pt, navy-800, on a navy-900 panel use cream-50 text with a gold-300 eyebrow.

**Warranty stamp (if used):** circular gold gradient badge (`#E5B53A → #C99B22`)
with "5" in Cormorant 500 and "YEAR" in Manrope 700, 7–8pt, navy-900 text — paired
with "5-Year Workmanship Warranty" heading. Covers waterproofing, plumbing, and
electrical workmanship; manufacturer warranties apply separately to materials.

---

## 8. PDF production checklist
- [ ] Embed Cormorant Garamond (400, 500, 400-italic) and Manrope (400/500/600/700).
- [ ] White page background; cream only on panels and zebra rows.
- [ ] Logo placed at ≥1.4 in wide, from the high-res master; keep clear space.
- [ ] Gold used only for accents (rules, key figures, the mark) — never large fills of body area.
- [ ] Headings in Cormorant 500 (not bold); body in Manrope 400.
- [ ] Hairlines at `rgba(20,17,13,0.08)`; table header navy-900 / cream-50.
- [ ] Footer with CSLB license, site, phone, email on every page.
- [ ] Selectable/searchable text (don't rasterize the whole page).
- [ ] Sufficient color contrast for accessibility (body text ink-700+ on white).

---

## 9. Quick do / don't
**Do:** generous margins · serif headlines · one calm gold accent per section ·
navy table headers · zebra cream rows · plain-English copy.

**Don't:** bold serif headlines · gold backgrounds behind big text blocks ·
substitute a different serif (it must read like Cormorant Garamond) · crowd the
logo · rasterize text · use pure cream edge-to-edge for print.

---

*Reference: this spec mirrors the Stonebrite website (stonebritecg.com) and its
customer-facing proposal page. When in doubt, match the website.*
