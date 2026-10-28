import { NextResponse } from "next/server";
import { addToNewsletter, brevoConfig, isValidEmail, sendEmail } from "@/lib/brevo";
import { OTHER_TOPIC, pollTopics } from "@/data/pollTopics";

const NOTIFY_EMAIL = "hello@securesitecheck.co.uk";
const CONSENT = {
  source: "futuretechblog.info topic poll",
  text: "Asked to be emailed the answer to their poll topic and the FutureTechBlog newsletter via the futuretechblog.info poll. Unsubscribe anytime.",
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const config = brevoConfig();
  if (!config) {
    console.error("Poll failed: BREVO_API_KEY or BREVO_NEWSLETTER_LIST_ID not set");
    return NextResponse.json({ error: "The poll is not available right now." }, { status: 503 });
  }

  let body: { topic?: unknown; other?: unknown; email?: unknown; page?: unknown; company?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const topic = String(body.topic ?? "");
  if (!pollTopics.includes(topic)) {
    return NextResponse.json({ error: "Please pick a topic." }, { status: 400 });
  }
  const other = String(body.other ?? "").trim().slice(0, 500);
  if (topic === OTHER_TOPIC && !other) {
    return NextResponse.json({ error: "Please tell us what you're struggling with." }, { status: 400 });
  }
  const email = String(body.email ?? "").trim().toLowerCase();
  if (email && !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address, or leave it blank." }, { status: 400 });
  }
  const page = String(body.page ?? "").slice(0, 200);

  const rows = [
    ["Topic", topic],
    ...(other ? [["Details", other]] : []),
    ["Email", email || "(not given)"],
    ["Page", page || "(unknown)"],
  ];
  const html = `<p>New Future Tech Blog poll vote:</p><table>${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table>`;

  const sent = await sendEmail(config.apiKey, NOTIFY_EMAIL, `Poll vote: ${topic.slice(0, 60)}`, html, email || undefined);
  const subscribed = email ? await addToNewsletter(config.apiKey, config.listId, email, CONSENT) : true;

  if (!sent && !(email && subscribed)) {
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
