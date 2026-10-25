// Receives the "Get in Touch" form and forwards it to the Google Apps Script
// web app (scripts/google-sheets-leads.gs), which adds a row to the leads
// sheet and emails a notification. The script URL and secret stay server-side.

const MAX = { name: 200, email: 320, company: 200, message: 5000, page: 500 };

function field(data: Record<string, unknown>, key: keyof typeof MAX): string {
  const value = data[key];
  return typeof value === "string" ? value.trim().slice(0, MAX[key]) : "";
}

export async function POST(request: Request) {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("Contact form: LEADS_WEBHOOK_URL or LEADS_WEBHOOK_SECRET is not set");
    return Response.json({ ok: false }, { status: 503 });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Honeypot: the "website" field is hidden from people, so only bots fill it in.
  // Pretend it worked so they don't retry.
  if (typeof data.website === "string" && data.website !== "") {
    return Response.json({ ok: true });
  }

  const lead = {
    name: field(data, "name"),
    email: field(data, "email"),
    company: field(data, "company"),
    message: field(data, "message"),
    page: field(data, "page"),
  };
  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret }),
    });
    const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !result?.ok) {
      console.error("Contact form: Apps Script rejected the submission", res.status, result?.error);
      return Response.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: could not reach Apps Script", err);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
