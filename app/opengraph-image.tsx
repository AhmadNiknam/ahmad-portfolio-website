import { ImageResponse } from "next/og";

export const alt = "Ahmad Niknam - IT Support Specialist and Azure Administrator";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 18% 18%, rgba(56, 189, 248, 0.34), transparent 260px), radial-gradient(circle at 86% 24%, rgba(96, 165, 250, 0.32), transparent 300px), linear-gradient(135deg, #0f172a 0%, #172554 54%, #1d4ed8 100%)",
          color: "#ffffff",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          padding: 72
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: 42,
            background: "rgba(15, 23, 42, 0.58)",
            boxShadow: "0 28px 80px rgba(2, 6, 23, 0.35)",
            padding: 64
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              color: "#bae6fd",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                background: "linear-gradient(135deg, #38bdf8 0%, #ffffff 100%)",
                color: "#0f172a",
                fontSize: 31,
                fontWeight: 900,
                letterSpacing: "-0.06em"
              }}
            >
              AN
            </div>
            Regina, Saskatchewan
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: 94,
                fontWeight: 900,
                letterSpacing: "-0.055em",
                lineHeight: 0.96
              }}
            >
              Ahmad Niknam
            </div>
            <div
              style={{
                color: "#bfdbfe",
                fontSize: 42,
                fontWeight: 650,
                letterSpacing: "-0.025em"
              }}
            >
              IT Support Specialist | Azure Administrator
            </div>
          </div>

          <div
            style={{
              color: "#e0f2fe",
              fontSize: 34,
              fontWeight: 700
            }}
          >
            Windows Server · Microsoft 365 · PowerShell Automation
          </div>
        </div>
      </div>
    ),
    size
  );
}
