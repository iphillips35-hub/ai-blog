import { NextResponse } from "next/server";
import { addToNewsletter, brevoConfig, isValidEmail } from "@/lib/brevo";

const CONSENT = {
  source: "futuretechblog.info newsletter form",
  text: "Subscribed to the FutureTechBlog newsletter via the futuretechblog.info signup form. Unsubscribe anytime.",
};

export async function POST(request: Request) {
  const config = brevoConfig();
  if (!config) {
    console.error("Newsletter signup failed: BREVO_API_KEY or BREVO_NEWSLETTER_LIST_ID not set");
    return NextResponse.json({ error: "Newsletter signup is not available right now." }, { status: 503 });
  }

  let body: { email?: unknown; company?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "company" field.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (await addToNewsletter(config.apiKey, config.listId, email, CONSENT)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 502 });
}
