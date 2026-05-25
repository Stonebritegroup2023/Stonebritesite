interface SBLogoProps {
  /** Use light variant (cream text) for dark backgrounds */
  inverted?: boolean;
  /** Display height in px */
  height?: number;
}

/**
 * Stonebrite logo — transparent SVG, two variants:
 *   default  → navy text + gold roof accent (for cream/light backgrounds)
 *   inverted → cream text + gold roof accent (for navy/dark backgrounds)
 */
export default function SBLogo({ inverted = false, height = 48 }: SBLogoProps) {
  const textColor = inverted ? "#FBF7EE" : "#102A43";
  const subColor = inverted ? "#C9BCA8" : "#8C7F6B";
  const goldColor = "#E5B53A";

  return (
    <svg
      viewBox="0 0 320 110"
      height={height}
      style={{ width: "auto", display: "block" }}
      aria-label="Stonebrite Construction Group"
      role="img"
    >
      {/* Gold roofline accent — peaked house outline above the wordmark */}
      <path
        d="M30 52 L30 24 L160 4 L290 24 L290 52"
        fill="none"
        stroke={goldColor}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* STONEBRITE wordmark */}
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="6"
        fill={textColor}
      >
        STONEBRITE
      </text>
      {/* CONSTRUCTION GROUP subtitle */}
      <text
        x="160"
        y="100"
        textAnchor="middle"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="500"
        fontSize="10"
        letterSpacing="3.2"
        fill={subColor}
      >
        CONSTRUCTION GROUP
      </text>
    </svg>
  );
}
