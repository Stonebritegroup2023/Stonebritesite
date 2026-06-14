import { ImageResponse } from "next/og";

export const alt = "Stonebrite Construction Group — Bathroom & Kitchen Remodeling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0B1F33 0%, #102A43 100%)",
          padding: "80px 90px",
          position: "relative",
        }}
      >
        {/* gold glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(229,181,58,0.22), transparent 70%)",
          }}
        />
        {/* house mark */}
        <svg width="84" height="84" viewBox="0 0 64 64" style={{ marginBottom: 36 }}>
          <path
            d="M14 47 L14 26 L32 15 L50 26 L50 47"
            fill="none"
            stroke="#E5B53A"
            strokeWidth="4.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <line x1="11" y1="47" x2="53" y2="47" stroke="#E5B53A" strokeWidth="3.5" strokeLinecap="round" />
        </svg>

        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 8,
            color: "#FBF7EE",
            textTransform: "uppercase",
          }}
        >
          Stonebrite
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 6,
            color: "#C9BCA8",
            textTransform: "uppercase",
            marginTop: 6,
          }}
        >
          Construction Group
        </div>

        <div
          style={{
            fontSize: 60,
            color: "#FBF7EE",
            lineHeight: 1.1,
            marginTop: 44,
            maxWidth: 880,
            display: "flex",
          }}
        >
          Bathrooms &amp; Kitchens, Built to Last.
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#C9BCA8",
            marginTop: 28,
            display: "flex",
          }}
        >
          Family-owned remodeling · Greater Sacramento &amp; East Bay
        </div>
      </div>
    ),
    { ...size },
  );
}
