const BREVO_API = "https://api.brevo.com/v3";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_RE.test(email);
}

function brevoHeaders(apiKey: string) {
  return { "api-key": apiKey, "content-type": "application/json", accept: "application/json" };
}

export function brevoConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  return apiKey && listId ? { apiKey, listId } : null;
}

export async function addToNewsletter(
  apiKey: string,
  listId: number,
  email: string,
  consent: { source: string; text: string },
): Promise<boolean> {
  const headers = brevoHeaders(apiKey);
  const createRes = await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      listIds: [listId],
      attributes: {
        BRAND: "FutureTechBlog",
        CONSENT_SOURCE: consent.source,
        CONSENT_AT: new Date().toISOString(),
        CONSENT_TEXT: consent.text,
      },
    }),
  });
  if (createRes.ok) return true;

  const createError = await createRes.json().catch(() => ({}));
  if (createError?.code === "duplicate_parameter") {
    // Existing contact (e.g. from another brand): add to the list without overwriting their attributes.
    const addRes = await fetch(`${BREVO_API}/contacts/lists/${listId}/contacts/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({ emails: [email] }),
    });
    const addError = addRes.ok ? null : await addRes.json().catch(() => ({}));
    if (addRes.ok || addError?.message?.includes("already in list")) return true;
    console.error("Brevo add-to-list failed", addRes.status, addError);
  } else {
    console.error("Brevo create contact failed", createRes.status, createError);
  }
  return false;
}

export async function sendEmail(apiKey: string, to: string, subject: string, htmlContent: string, replyTo?: string) {
  const res = await fetch(`${BREVO_API}/smtp/email`, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify({
      sender: { name: "Future Tech Blog", email: "hello@securesitecheck.co.uk" },
      to: [{ email: to }],
      subject,
      htmlContent,
      ...(replyTo ? { replyTo: { email: replyTo } } : {}),
    }),
  });
  if (!res.ok) console.error("Brevo send email failed", res.status, await res.text().catch(() => ""));
  return res.ok;
}
