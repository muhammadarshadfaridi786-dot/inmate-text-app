import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const dynamic = "force-static"

const SIZE = { width: 1200, height: 630 }

// Brand colours (hex — required by Satori inline styles)
const COLOR = {
  bg: "#0c1527",
  bgBar: "#060e1c",
  stripe: "#2563eb",
  white: "#ffffff",
  muted: "#94a3b8",
  badgeBg: "rgba(37, 99, 235, 0.18)",
  badgeText: "#93c5fd",
  border: "rgba(255, 255, 255, 0.09)",
  dot: "#3b82f6",
}

export async function GET() {
  const fontData = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
    )
  )

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const hostname = new URL(siteUrl).hostname.replace(/^www\./, "")

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: COLOR.bg,
          position: "relative",
        }}
      >
        {/* Left blue accent stripe */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            backgroundColor: COLOR.stripe,
          }}
        />

        {/* Subtle top gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 200,
            background:
              "linear-gradient(180deg, rgba(37,99,235,0.07) 0%, rgba(12,21,39,0) 100%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "56px 80px 40px 88px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: COLOR.badgeBg,
              borderRadius: 999,
              padding: "8px 20px",
              marginBottom: 32,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: COLOR.dot,
                marginRight: 10,
              }}
            />
            <span
              style={{
                color: COLOR.badgeText,
                fontSize: 17,
                letterSpacing: "0.08em",
                fontFamily: "Geist",
              }}
            >
              PRISON COMMUNICATION DISCOVERY
            </span>
          </div>

          {/* Site name */}
          <div
            style={{
              color: COLOR.white,
              fontSize: 88,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: 28,
              fontFamily: "Geist",
            }}
          >
            Inmate Text App
          </div>

          {/* Description */}
          <div
            style={{
              color: COLOR.muted,
              fontSize: 28,
              lineHeight: 1.55,
              maxWidth: 820,
              fontFamily: "Geist",
            }}
          >
            Find messaging, video, and communication options at correctional
            facilities across the United States.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 88px",
            height: 80,
            borderTop: `1px solid ${COLOR.border}`,
            backgroundColor: COLOR.bgBar,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Geist",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: COLOR.stripe,
                marginRight: 10,
              }}
            />
            <span style={{ color: "#64748b", fontSize: 18 }}>{hostname}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontFamily: "Geist",
            }}
          >
            {["Compare Providers", "Find Facilities", "Learn How It Works"].map(
              (label, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  {i > 0 && (
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: "#334155",
                        marginRight: 16,
                      }}
                    />
                  )}
                  <span style={{ color: "#475569", fontSize: 16 }}>{label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
