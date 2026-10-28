import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const CONSENT_TEXT =
  "Subscribed to the FutureTechBlog newsletter via the futuretechblog.info signup form. Unsubscribe anytime.";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  if (!apiKey || !listId) {
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
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const headers = {
    "api-key": apiKey,
    "content-type": "application/json",
    accept: "application/json",
  };

  const createRes = await fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      listIds: [listId],
      attributes: {
        BRAND: "FutureTechBlog",
        CONSENT_SOURCE: "futuretechblog.info newsletter form",
        CONSENT_AT: new Date().toISOString(),
        CONSENT_TEXT,
      },
    }),
  });

  if (createRes.ok) {
    return NextResponse.json({ ok: true });
  }

  const createError = await createRes.json().catch(() => ({}));
  if (createError?.code === "duplicate_parameter") {
    // Existing contact (e.g. from another brand): add to the list without overwriting their attributes.
    const addRes = await fetch(`${BREVO_CONTACTS_URL}/lists/${listId}/contacts/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({ emails: [email] }),
    });
    const addError = addRes.ok ? null : await addRes.json().catch(() => ({}));
    if (addRes.ok || addError?.message?.includes("already in list")) {
      return NextResponse.json({ ok: true });
    }
    console.error("Brevo add-to-list failed", addRes.status, addError);
  } else {
    console.error("Brevo create contact failed", createRes.status, createError);
  }

  return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 502 });
}
