import { NextResponse } from "next/server";
import { BUDGET_OPTIONS, MESSAGES, TIMELINE_OPTIONS, labelOf, toBrief, validateBrief, type Brief } from "@/lib/brief";

/*
 * Receives the project-brief form and forwards it. Configure at least one channel
 * (Vercel → Project → Settings → Environment Variables):
 *
 *   RESEND_API_KEY + BRIEF_TO_EMAIL   email via https://resend.com
 *   BRIEF_FROM_EMAIL                  optional sender, default "Qimma Code <onboarding@resend.dev>"
 *   BRIEF_WEBHOOK_URL                 JSON POST — Slack/Discord incoming webhooks, Zapier, Make, n8n…
 *
 * Without any channel the form answers with an error in production (so a lead is
 * never silently dropped) and just logs the brief during local development.
 */

const TIMEOUT_MS = 10_000;

function formatBrief(b: Brief) {
  return [
    "طلب مشروع جديد — قمّة كود",
    "",
    `الاسم: ${b.name}`,
    `البريد: ${b.email}`,
    `الجوال / واتساب: ${b.phone || "—"}`,
    `الشركة / الجهة: ${b.company || "—"}`,
    `الميزانية: ${labelOf(BUDGET_OPTIONS, b.budget)}`,
    `الجدول الزمني: ${labelOf(TIMELINE_OPTIONS, b.timeline)}`,
    "",
    "وصف المشروع:",
    b.desc,
  ].join("\n");
}

async function sendEmail(b: Brief, text: string, apiKey: string, to: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.BRIEF_FROM_EMAIL || "Qimma Code <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: b.email.trim(),
      subject: `طلب مشروع جديد — ${b.name.trim()}`,
      text,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}

async function sendWebhook(b: Brief, text: string, url: string) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // `text` is read by Slack, `content` by Discord (2000-char limit); `brief` carries the raw fields.
    body: JSON.stringify({ text, content: text.slice(0, 1900), brief: b }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}: ${await res.text()}`);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: MESSAGES.invalid }, { status: 400 });
  }

  // Honeypot: a hidden field only bots fill in. Pretend success, deliver nothing.
  const honeypot = (body as { website?: unknown } | null)?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const brief = toBrief(body);
  const problem = validateBrief(brief);
  if (problem) return NextResponse.json({ error: problem }, { status: 400 });

  const text = formatBrief(brief);
  const { RESEND_API_KEY, BRIEF_TO_EMAIL, BRIEF_WEBHOOK_URL } = process.env;
  const deliveries: Promise<void>[] = [];
  if (RESEND_API_KEY && BRIEF_TO_EMAIL) deliveries.push(sendEmail(brief, text, RESEND_API_KEY, BRIEF_TO_EMAIL));
  if (BRIEF_WEBHOOK_URL) deliveries.push(sendWebhook(brief, text, BRIEF_WEBHOOK_URL));

  if (deliveries.length === 0) {
    if (process.env.NODE_ENV === "development") {
      console.info(`[brief] No delivery channel configured — logging instead:\n${text}`);
      return NextResponse.json({ ok: true });
    }
    console.error("[brief] No delivery channel configured. Set RESEND_API_KEY + BRIEF_TO_EMAIL and/or BRIEF_WEBHOOK_URL.");
    return NextResponse.json({ error: MESSAGES.failed }, { status: 503 });
  }

  const results = await Promise.allSettled(deliveries);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  for (const f of failures) console.error("[brief] Delivery failed:", f.reason);

  if (failures.length === results.length) {
    // Keep the brief in the logs so the lead can still be recovered by hand.
    console.error(`[brief] Undelivered brief:\n${text}`);
    return NextResponse.json({ error: MESSAGES.failed }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
