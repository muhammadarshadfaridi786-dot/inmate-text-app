import { NextRequest, NextResponse } from "next/server"

// Basic email format validation (server-side)
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = (body.email ?? "").trim().toLowerCase()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID
    const dc = process.env.MAILCHIMP_DC

    if (!apiKey || !listId || !dc) {
      console.error("Mailchimp environment variables are not configured.")
      return NextResponse.json(
        { error: "Subscription service is temporarily unavailable. Please try again later." },
        { status: 503 }
      )
    }

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`

    const credentials = Buffer.from(`anystring:${apiKey}`).toString("base64")

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["website-popup"],
      }),
    })

    const data = await response.json()

    // Already subscribed
    if (response.status === 400 && data.title === "Member Exists") {
      return NextResponse.json(
        { message: "already_subscribed" },
        { status: 200 }
      )
    }

    // Other Mailchimp error
    if (!response.ok) {
      console.error("Mailchimp API error:", data)
      return NextResponse.json(
        { error: "We could not process your subscription right now. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "subscribed" }, { status: 201 })
  } catch (err) {
    console.error("Subscribe route error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
