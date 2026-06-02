import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const dynamic = "force-static"

const SIZE = { width: 600, height: 200 }

export async function GET() {
  const fontData = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
    )
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0c1527",
          padding: "0 40px",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 5,
            backgroundColor: "#2563eb",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Icon mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: 10,
              backgroundColor: "#2563eb",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: "3px solid #ffffff",
              }}
            />
          </div>

          {/* Site name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 40,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                fontFamily: "Geist",
              }}
            >
              Inmate Text App
            </span>
            <span
              style={{
                color: "#64748b",
                fontSize: 16,
                letterSpacing: "0.04em",
                fontFamily: "Geist",
                marginTop: 4,
              }}
            >
              PRISON COMMUNICATION DISCOVERY
            </span>
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
