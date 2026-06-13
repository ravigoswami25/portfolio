import { ImageResponse } from "next/og";
import { personal } from "@/data/resume";

export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          color: "#e4e4e7",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          {personal.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.2 }}>
          {personal.title}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#71717a",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          {personal.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
